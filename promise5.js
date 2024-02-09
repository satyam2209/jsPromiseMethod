// promises using aync await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "satyam", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//   ---- this code only work when we not handled error ---

//   async function consumepromiseFive(){
//     const response = await promiseFive
//     console.log(response);
//   }

// consumepromiseFive()

// -- use try and catch -----

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive()