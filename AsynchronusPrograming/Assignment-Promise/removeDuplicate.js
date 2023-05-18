async function removeDuplicate(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j) {
                arr.splice(i, 1);
            }
        }
    }
    
    console.log("Inside await.")
    return arr;
}


async function removeDupAwait(arr){
    try{
        console.log("before await")
       let data = await(removeDuplicate(arr));
       console.log(data);


    }
    catch{
        console.log("Not able to run");
    }
    finally{
        console.log("End of program")
    }
}

removeDupAwait([1,2,2,3,3,4,5]);

