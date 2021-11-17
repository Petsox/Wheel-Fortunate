const button = document.getElementById("button");
const wheel = document.querySelector('.img');
const test = document.getElementsByClassName("test");

let counter = 0;

button.onclick = () => {
 let rand = Math.floor(Math.random() * 1000);
  let fin = rand + 3600;
  wheel.style.transform = `rotate(${fin}deg)`;

  counter++

  if(counter%2 == 1){
    
    fina = -fin 
    wheel.style.transform = `rotate(${fina}deg)`;
  }
};
