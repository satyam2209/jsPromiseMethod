const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "satyam", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// ----  this gives error (we want to print only username) -----

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })

// console.log(username);

// ------ another way -----

// ----- chaining of method -----

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });
