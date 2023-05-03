let mainContainer = document.querySelector('#mainContainer')
let notesContainer = document.createElement('div')
let showAllNotes = document.querySelector('.allNotes')
let addNotes = document.querySelector('.addNotes')
let yourNotes = document.querySelector('.yourNotes')
console.log(showAllNotes)

showAllNotes.addEventListener('click', (event) => {
    event.preventDefault();


    let postURL = 'http://localhost:3000/notes/';

fetch(postURL, {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for(let result of data) {
        //console.log(result)
        console.log(result.body)
        let eachNote = document.createElement('div')
        let eachPar = document.createElement('p')
        // let deleteNote = document.createElement('button')
        //     deleteNote.innerText = "delete"
        //     eachNote.appendChild(deleteNote)
            eachPar.innerText = result.body
            eachNote.appendChild(eachPar)
            notesContainer.appendChild(eachNote)
            mainContainer.appendChild(notesContainer)
            notesContainer.classList.add("notesContainer")
            eachNote.classList.add('box')
            //eachNote.classList.add('is-fluid')
            console.log(eachNote)

    }
})

})



addNotes.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(yourNotes.value)
    let postURL = 'http://localhost:3000/notes/';
    fetch(postURL, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"title" : "Hello", "body": `${yourNotes.value}`})
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data.body)
        let newNote = document.createElement('div')
        let newPar = document.createElement('p')
            newPar.innerText = data.body
            newNote.appendChild(newPar)
            newNote.classList.add('box')
            notesContainer.appendChild(newNote)
            mainContainer.appendChild(notesContainer)
    })

})





let editURL = 'http://localhost:3000/notes/:id'

fetch(editURL, {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"title" : "Hi", "body": "COOL"})
})
.then(r => r.json())
.then(
    // do this
)

let deleteURL = 'http://localhost:3000/notes/:id=2'

fetch(deleteURL, {
    method: 'DELETE',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"title" : "Hi", "body": "COOL"})
})
.then(r => r.json())
.then(
    // do this
)