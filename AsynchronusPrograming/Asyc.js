async function removeDuplicatesAsync(){
    for(let i= 0; i<this.length; i++){
        for(let j =0; j<this.length; j++){
            if(arr[i]===arr[j] && i!=j){
                arr.splice(j, 1);
            }
        }
    }
    return arr; 

}
async function bar(){
    await removeDuplicatesAsync()

}

console.log(removeDuplicatesAsync([1,2,2,3,4,5,5,6]));