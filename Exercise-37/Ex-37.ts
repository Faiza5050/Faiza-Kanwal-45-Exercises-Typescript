// Ex-37: Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and a medium 
// shirt with the default message, and a shirt of any size with a different message.


    function make_shirt1(size: string, textMessage: string) {
    console.log(`I have selected ${size} size shirt and ${textMessage} want print on it.`);
    }

    make_shirt1("Large", "I love TypeScript");
    make_shirt1("Medium", "I love TypeScript");

    make_shirt1("Small", "Keep Calm and Doing Coding");
