// exports.isCharacterMatch = function(string1, string2) {
    
//     let newStr1 = String(string1.toLowerCase().split("").sort().join(""))
//     let newStr2 = String(string2.toLowerCase().split("").sort().join(""))
    
//     if (newStr1 === newStr2) {
//         return true

//     };
// }


function sorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    return arr
}

exports.isCharacterMatch = function (string1, string2){
    string1 = string1.replace(/\s/g, "")
    string2 = string2.replace(/\s/g, "")

    let arr1 = sorted(string1.toLowerCase().split(""))
    let arr2 = sorted(string2.toLowerCase().split(""))

    let newStr1 = arr1.join("")
    let newStr2 = arr2.join("")

    if (newStr1 === newStr2) {
        return true
    }
    
}



