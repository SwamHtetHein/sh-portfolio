let container = document.querySelector('.wheel-body');   
let btn = document.getElementById('spin');
  let number = Math.ceil(Math.random() * 10000);


btn.onclick = function(){
     
    container.style.transform= "rotate("+number+"deg)";   
    number += Math.ceil(Math.random() * 10000);
   

    
}




const clickone = document.querySelector("#fix-button");
clickone.addEventListener("click",(e) =>{

  e.preventDefault();
  document.querySelector("body").classList.add("bg-clor");
  
})


const cloor = document.querySelector(".one");
// cloor.style.backgroundColor ="blue";

const one = document.querySelector("#one");








// const btnn = document.getElementById(".fix-button");
 
// btnn.onclick = function(){

// document.querySelector("body").classList.add("bg-white");

// }


// const btnn = document.querySelector("#fix-button fix-me");

// btnn.addEventListener("click", (e) => {

//   e.preventDefault();
//   console.log("click");
//   document.querySelector("body").style.background ="white";

// });
