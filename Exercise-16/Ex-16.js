"use strict";
// Ex-16: More Guests: You just found a bigger dinner table, so now
//  more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the
//  end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList2 = ["MAHA", "FAIZA", "ZAROON", "MANTASHA"];
let canNotCome1 = guestList2[3];
let newGuest1 = "SHEREEN";
guestList2[guestList2.indexOf(canNotCome1)] = newGuest1;
guestList2.forEach(person => {
    console.log(`Dear ${person}, \nWe are arranged "Eid Millon Party" at Home and have found bigger dinner table,So three more guests to invite to dinner.`);
});
let person1 = "AHMER";
guestList2.unshift(person1);
let person2 = "USAMA";
let index = guestList2.length / 2;
guestList2.splice(index, 0, person2);
let person3 = "AREESHA";
guestList2.push(person3);
guestList2.forEach(person => {
    console.log(`Dear ${person}, \nYou are invited to dinner, We request the honor of your presence.`);
});
