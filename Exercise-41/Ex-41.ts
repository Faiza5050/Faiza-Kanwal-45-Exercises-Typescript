// Ex-41: Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), which prints the name of each magician in the array.

let magicians_name : string[] = [ "David", "Amenica", "Horsburgh" ];

function show_magicians(magicians_name : string[]) {
    magicians_name.forEach(magicians => 
        console.log(magicians));
}
show_magicians(magicians_name);
