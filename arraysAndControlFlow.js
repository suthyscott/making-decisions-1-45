const backpack = []

backpack.push("sword")
backpack.push("shield")
backpack.push("food")

// const belt = backpack.shift()
const belt = backpack.splice(0, 1)

const furCoat = "fur coat"

backpack.push(furCoat)

// backpack.pop()

// console.log(backpack)

const itemCount = backpack.length

backpack.push("flint", "blanket", "knife", "toothbrush", [1, 2, 3], true)

// const backpack2 = backpack.splice(2, 3)
// const backpack2 = backpack.slice(2, 4)

// console.log(backpack[7][1])

// backpack = 'Some items' --- can't reassign constant variable

// for(let i = 0; i <= backpack.length - 1; i++){
//     console.log(backpack[i])
// }

// for(let i = backpack.length - 1; i > (backpack.length - 4); i--){
//     console.log(backpack[i])
// }

const smallBag = ["compass", "string"]



// if(smallBag.length > 3){
//     for (let i = 0; i <= 2; i++) {
//         console.log(smallBag[i])
//     }
// } else {
//     for(let i = 0; i < smallBag.length; i++){
//         console.log(smallBag[i])
//     }
// }


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('-------------')
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. Subtracted 27')
        guessMe -= 27
    } else {
        console.log('Not divisible by 3, 4 or 5. Added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}`)
}