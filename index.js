const counter = document.getElementById('counter_el');
const error = document.getElementById('error');
const btn1 = document.getElementById('btn1');
const saveEl = document.getElementById('save')
const saveBtn = document.getElementById('save-btn')

// Global variable
let countEl = 0;

//event listeners

btn1.addEventListener('click', increament) 
saveBtn.addEventListener('click', save)
saveEl.addEventListener('click', empty)

// functions

function increament(e){

    countEl += 1
    counter.innerHTML = countEl  
    error.innerHTML = " "
    e.preventDefault()   
  }

function save(e){

    if (counter.innerHTML <= 0){

        error.innerHTML = "Can't save numbers less than 1"
    }else{
    
    saveEl.innerHTML += countEl + " - "
    counter.innerHTML = 0;
    countEl = 0;   
    error.innerHTML = " "
    }
    e.preventDefault();    
}

function empty(e){

    saveEl.innerHTML = "Previous Entries: "
    console.log('clicked')
    e.preventDefault();
}

  