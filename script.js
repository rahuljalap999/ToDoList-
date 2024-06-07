// crete variable for elements 
const inputBox =document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

function addTask(){
     if(inputBox.value === '')
     {
        alert("You must write something!");
     }
     else {
        // li is varibable
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li); //it will be displayed under this  list container 

        // add cross icon within the span tag
        let span = document.createElement("span")
        // add the content in the span
        span.innerHTML = "\u00d7"
        // dipaly the span
        li.appendChild(span);
     }
     inputBox.value = "";
     saveData();
}
// javascript for checked or unchecked and javascript for click function
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();  //whenever we will add any task the data will be called and it will be  saved
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //whenever we will add any task the data will be called and it will be  deleted 
    }
},false);

// to save the data
function saveData() {
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data");   //it will all the content stored in the browser with the name of the data 

}

showTask();
