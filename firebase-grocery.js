storeTextBox = document.getElementById("storeTextBox")
saveButton = document.getElementById("saveButton")
storesUL = document.getElementById("storesUL")

let database = firebase.database()

database.ref("stores")
.on('value',function(snapshot){

  let stores = []

  snapshot.forEach((childSnapshot) => {
    stores.push(`<li>${(childSnapshot.val().store)}<button onclick="deleteUser('${childSnapshot.key}')">Delete</button></li>`)
  })
  storesUL.innerHTML = stores.join("")
})

saveButton.addEventListener('click',function(){

  let storeName = storeTextBox.value

  let storesRef = database.ref("stores")

  let stores = storesRef.push({
    store: storeName,
  })
})

function deleteUser(key) {
    database.ref("stores").child(key).remove()
}
