let username = document.getElementById('thisuser').value
let password = document.getElementById('password').value

let objPeople = [
	{ // Object @ 0 index
		username: "MTest",
		password: "test"
	},
	{ // Object @ 1 index
		username: "LBall",
		password: "dontstopmenow"
	}

];

function getInfo(objPeople) {

	for(let i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}