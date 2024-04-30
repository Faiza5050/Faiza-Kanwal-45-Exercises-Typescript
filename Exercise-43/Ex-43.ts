// Ex-43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with
// a copy of the array of magicians’ names. Because the original array will be unchanged, return the
// new array and store it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each magician’s name.



function show_magicians3(magicians_name3 : string[]) {
    magicians_name3.forEach(magicians1 => 
        console.log(magicians1));
}

function make_great3(magicians_name3: string[]) {
       return magicians_name3.map(magician1 => `"${magician1} The Great magician"`);
    }

let magicians_name3 : string[] = [ "David", "Amenica", "Horsburgh" ];

let great_magicians3 : string[] = make_great3([...magicians_name3]);

console.log("Original Magicians:");
show_magicians3(magicians_name3);

console.log("\nGreat Magicians:");
show_magicians3(great_magicians3);
