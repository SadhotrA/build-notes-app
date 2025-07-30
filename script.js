const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  addEventListenersToNotes();
}

function addEventListenersToNotes() {
  notes = document.querySelectorAll('.input-box');
  notes.forEach(nt => {
    nt.onkeyup = function() {
      updateStorage();
    }
  });
}

function updateStorage(){
  localStorage.setItem('notes', notesContainer.innerHTML);
}


createBtn.addEventListener('click',()=>{
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  addEventListenersToNotes(); // Add event listener to the new note
})

// Call showNotes when the page loads
showNotes();

notesContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }else if (e.target.tagName === "P"){
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})