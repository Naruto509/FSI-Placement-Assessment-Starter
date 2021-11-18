// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Doniel Jean-Pierre" // HINT: Replace this with your own name!

function reduceAmount(cookie, string) {
    let quantity = document.getElementById(`qty-${string}`)
   
    quantity.innerHTML = cookie
    console.log(quantity)
}
function addAmount(cookie,string) {
    let quantity = document.getElementById(`qty-${string}`)
    
    quantity.innerHTML = cookie
    console.log(quantity)
}
function updateTotal(total) {
    let totalAmount = document.getElementById(`qty-total`)
   
    totalAmount.innerHTML = total
    console.log(quantity)
}
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    gb++
    total++
    console.log('Gingerbread + button was clicked!')
    addAmount(gb,'gb')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    if (gb > 0) {
        gb--
        total--
    }
    reduceAmount(gb,'gb')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    cc++
    total++
    console.log('Gingerbread + button was clicked!')
    addAmount(cc,'cc')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    if (cc > 0) {
        cc--
        total--
    }
    reduceAmount(cc,'cc')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    sugar++
    total++
    console.log('Gingerbread + button was clicked!')
    addAmount(sugar,'sugar')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    if (sugar > 0) {
        sugar--
        total--
    }
    reduceAmount(sugar,'sugar')
    updateTotal(total)
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
