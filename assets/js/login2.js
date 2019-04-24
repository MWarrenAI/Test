function authenticateUser(users) {
  const thisuser = document.getElementById('thisuser');
  const password = document.getElementById('password');
  const user = thisuser.value;
  const pass = password.value;
  console.log('users ', users);

activate.addEventListener('click', e => {
for(i = 0; i < users.length; i++) {
    if(user === users[i].reguser && pass === users[i].password)
      console.log(username + " is logged in!!!");
	return;
    } 
	console.log("Incorrect username or password");
	return;
});

async function getData() {
  const response = await fetch('http://localhost:3001/users');
  const json = await response.json();
  return json;
}

getData().then(data => {
  authenticateUser(data);
});
}