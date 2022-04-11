import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        "firstName": "John",
        "lastName": "Smith",
        "age": 16,
    },
    {
        "firstName": "jane",
        "lastName": "doe",
        "age": 45,
    }
];

router.get("/", (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    console.log("ROUTE REACHED");
    const user = req.body;

    const userID = uuidv4();

    users.push({ ...user, id: userID });

    res.send(`User with the name ${user.firstName} added to the database`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((users) => users.id === id)
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => true !== id);

    res.send(`User with the id ${id} deleted from the database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
});

export default router;