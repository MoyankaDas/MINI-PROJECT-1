let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",()=>{
    let list=document.createElement("li");
    list.innerText=inp.value;
    ul.appendChild(list);
    inp.value='';
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    list.appendChild(delbtn);
});

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
})