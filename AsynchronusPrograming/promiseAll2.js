let weatherCheck = new Promise(function(resolve, reject){
    let temp = Math.random()*50; 
    if(temp<25){
        resolve("Let's go."); 
    }else{
        reject("Too hot.");
    }
})
// weatherCheck.
// then((msg) => console.log(msg))
// .catch((err)=>console.log(err));



let tempCheck = new Promise(function(resolve, reject){
    let temp = Math.random()*100; 
    if(temp<60){
        resolve("Drink it."); 
    }else{
        reject("Too hot to drink.");
    }
})
Promise.all([tempCheck, weatherCheck])
.then((msg) => console.log(msg))
.catch((err)=>console.log(err));

Promise.race([tempCheck, weatherCheck])
.then((msg) => console.log(msg))
.catch((err)=>console.log(err));



