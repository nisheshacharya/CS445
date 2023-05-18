console.log("start");
let promiseObj = new Promise(function (resolve, reject){
    console.log("inside promiseObj");

    if(Math.random()>0.5){
       
        resolve("Success");
    }
    else{
        reject("Try again");
    }
})
promiseObj
        .then(data=>console.log("This is successful."))
        .catch(error=>console.log("Something not working"))
        .finally(()=> console.log("We have the results"));

    
console.log(promiseObj);
console.log("end");
console.log("end")

