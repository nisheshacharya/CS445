// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 5000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 3000))
// ]).then(console.log)
//     .catch(console.log);

// Promise.all(["a",1,2])
// .then(console.log);

Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 5000)),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 3000))
]).then(console.log)
    .catch(console.log);