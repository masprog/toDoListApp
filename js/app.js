
// selecionar os elementos

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// nome das classes 

const CHECK = "fa-check-cicle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "linethrough";

// mostrar data de hoje

const options = {weekday:"long", month :"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options)

function addToDo(toDo){
    
    const item = `
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text">Drink Coffee</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
               `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}


