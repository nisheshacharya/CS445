// const isPrime = num => new Promise((resolve, reject) => {
//     setTimeout(function () {
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) reject({ prime: false });
//         resolve({ prime: num > 1 });
//     }, 500);
// });

async function isPrime(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            for (let i = 2, s = Math.sqrt(number); i <= s; i++)
                if (number % i === 0) {
                    reject({ prime: false });
                }
            resolve({ prime: number > 1 });
        }, 500);
    });
}

async function isPrimeAsync (number){
    try {
        let data = await isPrime(number);
        console.log(data);
    }
    catch {
        console.log("Unable to determine")
    }
}

console.log(isPrimeAsync(11));