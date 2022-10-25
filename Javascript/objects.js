let userA = {
    "name": "Nuri Buğra",
    "lastName": "Demir",
    "age": 19,
    "addres": {
        "city": "İzmir",
        "district": "Buca"
    },
    "hobbies": ["cinema", "sport"]
}
let userB = {
    "name": "Deniz Berk",
    "lastName": "Demir",
    "age": 19,
    "addres": {
        "city": "İzmir",
        "district": "Buca"
    },
    "hobbies": ["cinema", "sport"]
}

let result;

result = userA.name;
result = userA.lastName;
result = userA["age"];
result = userA.addres.city;
result = userA.hobbies[0];
result = userA.hobbies[1];

let users = [
    userA,
    userB
];

result = users[1].name;

console.log(result);