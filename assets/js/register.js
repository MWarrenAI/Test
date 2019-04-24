const form = document.querySelector('form');
const reguser = document.getElementById('reguser');
const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const country = document.getElementById('country');
const county = document.getElementById('county');
const pcode = document.getElementById('pcode');

const baseURL = 'http://localhost:3001/users';
const headers = { 'content-type': 'application/json' };
const userTable = document.getElementById('usertable');

const users = [];

function createUser() {
  return {
    reguser: reguser.value,
    fname: fname.value,
	sname: sname.value,
	password: password1.value,
	add1: add1.value,
	add2: add2.value,
	country: country.value,
	county: county.value,
	pcode: pcode.value
  };
}

async function postUser(app) {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers,
    body: JSON.stringify(app)
  });
  const json = await response.json();
  return json;
}

async function getUsers() {
  const response = await fetch(baseURL);
  const json = await response.json();
  return json;
}

sign.addEventListener('click', e => {
  const app = createUser();
  postUser(app).then(() => {
    addToTable(app);
  });
  Clear();
});

function addToTable(app) {
  const row = document.createElement('tr');
  const td = `
    <td>${app.id}</td>
    <td>${app.reguser}</td>
    <td>${app.fname}</td>
    <td>${app.sname}</td>
	<td>${app.password}</td>
	<td>${app.add1}</td>
	<td>${app.add2}</td>
	<td>${app.country}</td>
	<td>${app.county}</td>
	<td>${app.pcode}</td>
  `;
  row.innerHTML = td;
  userTable.appendChild(row);
}

function init() {
  getUsers().then(apps => {
    apps.forEach(app => addToTable(app));
  });
}

function Clear()
{
 	reguser.value= "";
	fname.value= "";
	sname.value= "";
	password1.value= "";
	password2.value= "";
	add1.value= "";
	add2.value= "";
	country.value= "";
	county.value= "";
	pcode.value= "";
}

function Showpass() {

  let password1 = document.getElementById('password1');     // Get password input
  let password2 = document.getElementById('password2');     // Get password input  
  let showpassy = document.getElementById('showpassy'); // Get checkbox

  addEvent(showpassy, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        password1.type = 'text';                      // Set pwd type to text
		password2.type = 'text';                      // Set pwd type to text
      } else {                                  // Otherwise
        password1.type = 'password';                  // Set pwd type to password
		password2.type = 'password';                      // Set pwd type to text
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  });
 }
 
init();