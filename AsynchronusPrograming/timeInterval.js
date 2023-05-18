
function printAll(arr) {
    return new Promise(function (resolve, reject) {
        if (arr.length >= 0) {
            resolve(arr)
        }
        else {
            return ("Try again.")
        }
    })
}