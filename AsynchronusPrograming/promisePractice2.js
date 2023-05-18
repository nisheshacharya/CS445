
function feb(n) {
    console.log("Welcome! I will help you.")

    return new Promise(function (resolve, reject) {

        let febb = (n) => {
            if (n == 0 || n == 1) {
                return 1;
            }
            else {
                return febb(n - 1) + febb(n - 2);
            }
        }
        if (n >= 0) {
            resolve(febb(n));
        }
        else {
            reject(console.log("number should be greater than or equal to zero."));
        }
    })
    // prom
    // .then(data=>console.log("Calculated."))
    // .catch(error => console.log("something went wrong"));

    // console.log("That is it.")

}

// feb(40)
// .then(data=> console.log("Data: ",data))
// .catch(error =>console.log("Error", error));
(async () => {
    try {
        console.log("first")
        const data = await feb(10);
        console.log(data)
        console.log('aaaa')

    } catch (error) {
        console.log(error);
    }
})()

console.log("final");



console.log("The end");