const form = document.querySelector('form')
const model = document.getElementById('model')
const brand = document.getElementById('brand')
const bookTable = document.getElementById('booktable')
const sign = document.getElementById('sign')

const baseURL = 'http://localhost:3000/appointments'
const headers = { 'content-type': 'application/json' }

// not the best for a unique ID but should suffice
const makeID = () => `${Date.now()}-${Math.floor(Math.random())}`

const appointments = []

function createAppointment() {
  return {
    id: makeID(),
    brand: brand.value,
    model: model.value,
	date: date.value,
	time: time.value
  }
}

async function postApp(app) {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers,
    body: JSON.stringify(app)
  })
  const json = await response.json()
  return json
}

async function getAppointments() {
  const response = await fetch(baseURL)
  const json = await response.json()
  return json
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const app = createAppointment()
  postApp(app).then(() => {
    addToTable(app)
  })
  reset()
})

function addToTable(app) {
  const row = document.createElement('tr')
  const td = `
    <td>${app.id}</td>
    <td>${app.brand}</td>
    <td>${app.model}</td>
    <td>${app.date}</td>
	<td>${app.time}</td>
  `
  row.innerHTML = td
  bookTable.appendChild(row)
}

function reset() {
  model.value = ''
  brand.value = ''
  date.value = ''
  time.value = ''
}

function init() {
  getAppointments().then(apps => {
    apps.forEach(app => addToTable(app))
  })
}
init()