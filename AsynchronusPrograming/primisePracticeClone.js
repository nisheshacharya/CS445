// function youtubeMessage(giveCompletionMsg, giveErrorMsg) {
//     let hasCompleted = false;
//     let onVideo = false;
//     if (hasCompleted) {
//         giveCompletionMsg({
//             message: "Thank you for watching"
//         })
//     } else if (onVideo) {
//         giveCompletionMsg({ 
//             message: "Thank you for watching." 
//         })
//     }else{
//         giveErrorMsg({message:"We miss you."})

//     }
// }


function youtubeMessagePromise() {
    let hasCompleted = true;
    let onVideo = true;
    return new Promise(function (resolve, reject) {
        if (hasCompleted) {
            resolve({
                message: "Thank you for watching"
            })
        } else if (onVideo) {
            resolve({
                message: "Thank you for watching."
            })
        } else {
            return ({ message: "We miss you." })

        }
    })
}

youtubeMessagePromise()
    .then(message => console.log(message.message))
    .catch(error => console.log(error.message))
    .finally(() => { console.log("That's all") })


// youtubeMessage(message =>{console.log(message.message)}, err =>{console.log(err.message)});


