
Array.prototype.removeDuplicatesAsync = function() {
    return new Promise((resolve) => {
        let unique = [...new Set(this)];
        resolve(unique);
    });
};

console.log("start");
[1,1,2,2,3,3,4,4,5,5,6,6,7,8,9].removeDuplicatesAsync().then(console.log); 
console.log("end");


