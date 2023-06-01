const inputBox=document.querySelector(".inputfield input");
const addBtn=document.querySelector(".inputfield button");
const todolist=document.querySelector(".todolist");
const clearbtn=document.querySelector(".footer button");
const pend=document.querySelector(".footer .pendingtask");
const iclass=document.querySelector(".inputfield button i");
const text=document.querySelector(".footer span");

inputBox.onkeyup =()=>{
   let data=inputBox.value; 
   if(data.trim()!=0){
    addBtn.classList.add("active");
    iclass.classList.add("fa-beat");
   }
   else{
    addBtn.classList.remove("active");
    iclass.classList.remove("fa-beat");
   }
}
showtask();
inputBox.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
       event.preventDefault();
       let data=inputBox.value;
let storage=localStorage.getItem("new todo");
if(storage==null)
{
    listArr=[];
}
else{
    listArr=JSON.parse(storage);
}
listArr.push(data);
localStorage.setItem("new todo",JSON.stringify(listArr));
showtask();
}
else{
addBtn.onclick =()=>{
let data=inputBox.value;
let storage=localStorage.getItem("new todo");
if(storage==null)
{
    listArr=[];
}
else{
    listArr=JSON.parse(storage);
}
listArr.push(data);
localStorage.setItem("new todo",JSON.stringify(listArr));
showtask();
}
}
}); 


function showtask(){
    let storage=localStorage.getItem("new todo");
    if(storage==null)
{
    listArr=[];
}
else{
    listArr=JSON.parse(storage);
}
pend.textContent=listArr.length;
if(listArr.length > 0){
    clearbtn.classList.add("active");
   }
   else{
    clearbtn.classList.remove("active");
   }
let litag='';
listArr.forEach((element) => {
    litag+='<li>'+element+'<span onclick="(index())";><i class="fas fa-trash fa-beat "></i></span></li>';
    
});
todolist.innerHTML=litag;
inputBox.value="";
}
function index(d){
    let storage=localStorage.getItem("new todo");
      listArr=JSON.parse(storage);
        listArr.splice(d,1);
    console.log(listArr);
    localStorage.setItem("new todo",JSON.stringify(listArr));
         showtask();
}

clearbtn.onclick =()=>{
    listArr=[];
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showtask();

}

// if(listArr.length>0){
//     text.classList.add("active");
//     text.innerHTML=""
//    }
//    else{
//     text.classList.remove("active");
//     text.innerHTML="Your tasks are upto date ";
//    }


