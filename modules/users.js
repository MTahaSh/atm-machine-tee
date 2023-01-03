#!/usr/bin/env node
let users = [
    {
        name: "John",
        accountNumber: 2233,
        pincode: "123",
        balance: Math.ceil((Math.random() * 100000 + 1))
    },
    {
        name: "Harry",
        accountNumber: 3253,
        pincode: "123",
        balance: Math.ceil((Math.random() * 100000 + 1))
    },
];
export default users;
