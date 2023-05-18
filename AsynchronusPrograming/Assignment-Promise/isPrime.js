const isPrime = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
          if (num % i === 0) {
            reject({ prime: false });
            return;
          }
        }
        resolve({ prime: true });
      }, 500);
    });
  };
  
  console.log('start');
  isPrime(7)
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('end'));
  