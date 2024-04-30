// Ex-17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from 
// your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your 
// list to make sure you actually have an empty list at the end of your program.

let guestList3 : string[] = ["MAHA", "FAIZA", "ZAROON", "MANTASHA"];
let canNotCome2 : string = guestList3[3];

let newGuest2 : string = "SHEREEN"
guestList3[guestList3.indexOf(canNotCome2)]=newGuest2
guestList3.forEach(person => {
    // console.log(`Dear ${person}, \nWe are arranged "Eid Millon Party" at Home and have found bigger dinner table,So three more guests to invite to dinner.`);
    
});
guestList3.forEach(person => {

});
let person4 : string = "AHMER";
guestList3.unshift(person4)

let person5 : string = "USAMA";
let index=guestList3.length/2;
guestList3.splice(index,0,person5);

let person6 : string = "AREESHA";
guestList3.push(person6);

guestList3.forEach(person => {

});
console.log("Dear Guests, I have space for only two guests.");
console.log(guestList3);

while(guestList3.length > 2){
    let removePerson=guestList3.pop()
    console.log(`Dear, ${removePerson} Sorry, you can’t invite to dinner.`);
}
guestList3.forEach(person => {
    console.log(`Dear, ${person} You are still invited.`);
});
guestList3.splice(0, guestList3.length);
console.log(guestList3);
// guestList3.pop()
// guestList3.pop()
// console.log(guestList3);
