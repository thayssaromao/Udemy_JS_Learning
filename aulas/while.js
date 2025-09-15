let min = 5;
let max = 15;
let rand = Math.random()

// while (rand!==10){
//     rand = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(rand); 
// }

//###################

do{
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if(rand === 15){
        console.log('pulei')
        continue
    }
    console.log(rand); 
}while (rand!==10)

//###################
