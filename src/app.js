const addBtn = document.querySelector(".search-bar button");

const addTask = (inpTxt)=>{
    const taskText = document.createElement("p");
    taskText.innerText = inpTxt;
    taskText.style.padding = "2px";
    taskText.style.backgroundColor = "grey"
    taskText.style.marginTop = "2px";
    taskText.style.borderRadius = "3px";

    const cancel = document.createElement("button");
    cancel.textContent = "delete";
    cancel.id = `${localStorage.length+1}`;

    const div = document.createElement("div");
    div.append(taskText);
    div.append(cancel);

    div.style.padding = "3px";
    div.style.backgroundColor = "red";

    const tasks = document.querySelector(".tasks");
    tasks.prepend(div);

    cancel.addEventListener("click", (event)=>{
        const id = cancel.id;
        localStorage.removeItem(`${id}`);
        div.remove()
    })
}

const addTaskToLocalStorage = (inp)=>{
    addTask(inp.value);
    // add the task to localstorage
    const len = localStorage.length;
    localStorage.setItem(`${len+1}`, inp.value);
}

addBtn.addEventListener("click", (event)=>{
    const inp = document.querySelector(".search-bar input");
    addTaskToLocalStorage(inp);
})

const inputText = document.querySelector(".search-bar input");
inputText.addEventListener("keypress", (event)=>{
    if(event.key === "Enter") {
        document.querySelector(".search-bar button").click();
    }
})

window.addEventListener("load", ()=>{
    for(let i=0; i<localStorage.length; i++) {
        const task = localStorage.getItem(`${i+1}`);
        addTask(task);
    }
})

