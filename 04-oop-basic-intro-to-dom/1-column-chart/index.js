export default class ColumnChart {
    data;
    label;
    link;
    value;
    formatHeading;

    constructor({ data = [], label = "", link = "", formatHeading = data => `${data}`, value = 0 } = {}) {
        this.data = data;
        this.label = label;
        this.link = link;
        this.value = value;
        this.chartHeight = 50;
        this.formatHeading = formatHeading;

        this.element = this.createElement(this.createTemplate());
    }

    createChartBodyTemplate() {
        const maxValue = Math.max(...this.data);
        const scale = 50 / maxValue;

        return this.data.reduce((returnedBody, dataValue) => returnedBody + `
            <div style="--value:${String(Math.floor(dataValue * scale))}" data-tooltip="${(dataValue / maxValue * 100).toFixed(0) + '%'}"></div>
        `, ``);
    }

    createTemplate() {
        if ((this.data) && (this.data.length > 0)) {
            return `
                <div class="column-chart">
                    <div class="column-chart__title">
                        ${this.label}
                        <a href="${this.link}" class="column-chart__link">Подробнее</a>
                    </div>
                    <div class="column-chart__container">
                        <div class="column-chart__header">${this.formatHeading(this.value)}</div>
                        <div class="column-chart__chart">
                            ${this.createChartBodyTemplate()}
                        </div>
                    </div>
                </div>
            `;
        }
        else {
            return `
                <div class="column-chart column-chart_loading">
                    <div class="column-chart__title">
                        ${this.label}
                        <a href="${this.link}" class="column-chart__link">Подробнее</a>
                    </div>
                    <div class="column-chart__container">
                        <div class="column-chart__header">${this.formatHeading(this.value)}</div>
                        <div class="column-chart__chart">
                        </div>
                    </div>
                </div>
            `;
        }
    }

    createElement(template) {
        const element = document.createElement('div');

        element.innerHTML = template;

        return element.firstElementChild;
    }

    update({ data = [] } = {}) {
        this.data = data;

        this.element.querySelector(".column-chart__chart").children.innerHTML = this.createChartBodyTemplate();
    }

    remove() {
        this.element.remove();
    }

    destroy() {
        this.remove();
    }
}
