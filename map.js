function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === `Admin`){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set(`Luis`, `Admin`);
usuarios.set(`Jason`, `Admin`);
usuarios.set(`Daivid`, `User`);
usuarios.set(`Carlo`, `Admin`);

console.log(getAdmins(usuarios));