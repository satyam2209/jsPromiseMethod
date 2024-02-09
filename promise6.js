// ---- this code gives promise pending --

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }

// getAllUsers()




// ---- this code not working because we also have to awai data also -----

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getAllUsers();


// ---- using async await ---
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getAllUsers();
