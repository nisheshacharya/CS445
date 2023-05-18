async function checkProbability(n) {
    let lessThan = 0;
    let moreThan = 0;

    for (let i = 0; i < n; i++)
        if (Math.random() > 0.5) {
            moreThan++;
        } else {
            lessThan++;
        }
    console.log("More than 0.5: ", moreThan);
    console.log("less than 0.5: ", lessThan);
}

checkProbability(100);