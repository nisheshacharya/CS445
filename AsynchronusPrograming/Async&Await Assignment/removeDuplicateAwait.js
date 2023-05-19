Array.prototype.removeDuplicatesAsync = async function () {
    await console.log([...new Set(this)]);
    resolve(unique);
}
console.log("start");
[3,2,3,4,4,5,6,7,6].removeDuplicatesAsync();
console.log("end");
