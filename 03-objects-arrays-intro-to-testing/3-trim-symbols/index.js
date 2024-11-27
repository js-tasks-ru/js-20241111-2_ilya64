/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let newString = '';
    
    if (size != undefined) {
        if (string.length > 1) {
            if (size != 0) {
                newString += string[0];
            }
            
            let amountOfRepeatedTimes = 1;
    
            for (let i = 1; i < string.length; ++i) {
                if (string[i - 1] == string[i]) {
                    amountOfRepeatedTimes++;
                    
                    if (amountOfRepeatedTimes <= size) {
                        newString += string[i];
                    }
                }
                else {
                    amountOfRepeatedTimes = 1;
                    
                    if (size != 0) {
                        newString += string[i];
                    }
                }
            }
        }
    
        return newString;
    }
    else {
        newString = string;
        
        return newString;
    }
}
