// ---- using async await ---

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getAllUsers();

// ---- using then and catch ---

// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/satyam2209")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
