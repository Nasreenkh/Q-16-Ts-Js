/*questio no 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of
three more guests to invite to dinner.
" Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
" Add one new guest to the beginning of your array.
" Add one new guest to the middle of your array. " Use append() to add one new guest to the end of
your list. " Print a new set of invitation messages, one for each person in your list.*/




// Current list of guests
let guests: string[] = ["Alice", "Bob", "Charlie"];

// Print the original set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, please come to dinner.`);
});

// Inform about finding a bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("David");

// Add one new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Eve");

// Add one new guest to the end of the array using push()
guests.push("Frank");

// Print a new set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, please come to dinner.`);
});