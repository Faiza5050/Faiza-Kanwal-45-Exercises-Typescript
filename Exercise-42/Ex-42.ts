// Ex-42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array
// of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians_name1 : string[] = [ "David", "Amenica", "Horsburgh" ];

function show_magicians1(magicians_name1 : string[]) {
    magicians_name1.forEach(magicians1 => 
        console.log(magicians1));
}

function make_great(magicians1: string[]) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "The Great " + magicians1[i];
    }
}
make_great(magicians_name1);

show_magicians1(magicians_name1);
