"use strict";
// Ex-15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
// need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person
//  who is still in your list.
let guestList1 = ["MAHA", "FAIZA", "ZAROON", "AREESHA", "MANTASHA"];
let canNotCome = guestList1[5];
console.log(`Dear Guests!`, canNotCome + " " + "Can't make the dinner,");
let newGuest = "SHEREEN";
guestList1[guestList1.indexOf(canNotCome)] = newGuest;
guestList1.forEach(person => {
    console.log(`Dear ${person}, \nWe are arranged "Eid Millon Party" at Home and you are invited to dinner, We request the honor of your presence.`);
});
