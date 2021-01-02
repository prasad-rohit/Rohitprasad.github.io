let date = new Date();
console.log(date.getDate());
// let current = date.getMonth(); 

// function month(current) {
//     switch(current){
//         case 1: 
//             return "Janurary"
//             break
//         case 2:

//     }
// }


document.querySelector(".today").innerHTML = ` ${date.getDate()}  ${date.toLocaleString('default', { month: 'short' })}`