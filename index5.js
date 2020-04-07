            // 3 persons
let a = {
    name: "Evgeniy",
    surname: "Omelchenko"
}
let b = {
    name: "Anton",
    surname: "Pirozkov"
}
let c = {
    name: "Vasiliy",
    surname: "Smirov"
}

            // different fields
a.age = 28;
b.fathername = 'Ivanivich';
c.maritalStatus = 'married';

            // fields check

            for (let name in a){
                console.log(name+": "+a[name]);
            }
            alert(a["age"]),
            alert(a["name"])
            

console.log(typeof 'age'in a)
console.log(typeof 'fathername'in b)
console.log(typeof 'maritalStatus' in c)


            // array of persons
let persons =[
     a = {
        name: "Evgeniy",
        surname: "Omelchenko",
        fathername:"Valerievich"
    },
     b = {
        name: "Anton",
        surname: "Pirozkov"
    },
     c = {
        name: "Vasiliy",
        surname: "Smirov"
    },
    {name:"Sergey",surname :"Stepanov",}
]
             // loop of persons
 for (i = 0; i < persons.length; i++)
 console.log(persons[i]);

            // loop of name and surname


for (let key in persons){
    console.log(key, persons[key])
}
persons[0],
persons[1],
persons[2]
