let jonSnowAttack = 25
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDefense = 0

// create an if statement to console.log whoever has the the higher attack value
// if (jonSnowAttack > jamieLannisterAttack) {
//     console.log("Jon has the better sword arms")
// } else if (jamieLannisterAttack > jonSnowAttack) {
//     console.log("Jamie pulls it off by a mile")
// } else {
//     console.log("It's a tie!")
// }

// if/else block to determine if jon can survive an attack from Jamie. 
// if jon doesn't have enough health to live through the attack, console.log his death
// otherwise, update his health to reflect the damage from the attack

jonSnowDefense += 10

// if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
//     console.log("John is perished")
// } else {
//     // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(jonSnowHealth)
// }

// add 50 health to jon unless that will exceed 100, in which case, cap the healing value at 100
if(jonSnowHealth + 50 > 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

// let coinLandsHeads = false


// if(!coinLandsHeads){
//     console.log('the fight continues')
// } else {
//     console.log('Jon makes his escape')
// }

// const myName = 89

// if(myName){
//     console.log("truthy")
// } else {
//     console.log('falsy')
// }


// write a loop that will run 5 attacks on jon, accounting for his health and defense vs jamie's attack
// console.log his health after each attack
// for (let i = 0; i < 5; i++){
//     if(jonSnowHealth <= 0){
//         console.log('Jon has died')
//     } else {
//         jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//         console.log(`Jon Snow's health has be reduced to ${jonSnowHealth}`)
//     }  
// }

// while(jonSnowHealth > 0){
    // jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(`Jon Snow's health has be reduced to ${jonSnowHealth}`)
//     if(jonSnowHealth <= 0){
//         console.log('Bye bye jon')
//     }
// }

console.log('hello world')