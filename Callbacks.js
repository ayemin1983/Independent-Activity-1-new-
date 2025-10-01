function fetchUserData(userId, callback) {
  console.log(`Fetching data for user ${userId}...`);
  setTimeout(() => {
    const user = {
      id: userId,
      name: "John Doe",
      email: "john@example.com",
    };
    callback(user);
  }, 2000);
}

function handleUserData(user) {
  console.log("Function Declaration Callback:", user);
}
fetchUserData(1, handleUserData);

fetchUserData(2, (user) => {
  console.log("Arrow Function Callback:", user);
});
