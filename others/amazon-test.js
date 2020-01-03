23280666268944
23280666268944


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function orderedJunctionBoxes(numberOfBoxes, boxList)
{
    if (numberOfBoxes <= 1) return boxList;
    
    const oldVersion = [], newVersion = [], result = [];
    
    for(let i = 0; i < boxList.length; i++) {
        if (isNewVersion(boxList[i])) {
            newVersion.push(boxList[i]);
        } else {
            oldVersion.push(boxList[i]);
        }
    }
    
    oldVersion.sort((str1, str2) => {
        let tmp1 = str1.substring(str1.indexOf(' ') + 1);
        let tmp2 = str2.substring(str2.indexOf(' ') + 1);
        
        if (tmp1 !== tmp2) {
            return tmp1 > tmp2;
        } else {
            tmp1 = str1.substring(0, str1.indexOf(' '));
            tmp2 = str2.substring(0, str2.indexOf(' '));
            return tmp1 > tmp2;
        }
    })
    
    return result.concat(oldVersion).concat(newVersion);
}

function isNewVersion(str) {
    const arr = str.split(' ');
    return !isNaN(arr[1]);
}
// FUNCTION SIGNATURE ENDS


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function removeObstacle(numRows, numColumns, lot)
{
    /* just determine where the obstecle is and 
     * sum row and column index to find it 
     */
     let rowIndex = 0, columnIndex = 0, found = false;
     
     for (let i = 0; i < numRows; i++) {
         for (let j = 0; j < numColumns; j++) {
             if (lot[i][j] === 9) {
                 rowIndex = i;
                 columnIndex = j;
                 found = true;
                 break;
             }
         }
     }
     
     if (!found) return -1;
     
     return rowIndex + columnIndex;
}
// FUNCTION SIGNATURE ENDS