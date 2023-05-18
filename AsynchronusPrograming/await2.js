console.log("start");

async function f(){
    console.log("Hii");
    return "OMG"
}
let res = f();
console.log(res);
res.then(console.log);

console.log("end");