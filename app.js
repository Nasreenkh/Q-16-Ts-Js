// Current list of guests
var guests = ["Alice", "Bob", "Charlie"];
// Print the original set of invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please come to dinner."));
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
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please come to dinner."));
});
