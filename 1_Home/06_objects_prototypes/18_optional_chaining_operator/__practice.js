function getUser(id) {
    if (id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...

    // if user was found, return the user
    return {
        id: id,
        userName: "admin",
        profile: {
            avatar: "/avatar.png",
            language: "English",
        },
    };
}

let user = getUser(1);
let profile = user.profile;

console.log(user); /*
{
  id: 1,
  userName: 'admin',
  profile: { avatar: '/avatar.png', language: 'English' }
}
*/

console.log(profile); // { avatar: '/avatar.png', language: 'English' }


let file = {
    read() {
        return "file content";
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    },
};

let data = file.read();
console.log(data); // file content

//let compressedData = file.compress(); // Uncaught TypeError: file.compress is not a function

let compressedData = file.compress?.();
console.log(compressedData); // undefined


