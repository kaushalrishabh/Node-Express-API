import { v4 as uuidv4 } from 'uuid';
let users = [];

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the username ${user.FirstName} added to the database`);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const getAllUser = (req, res) => {
    console.log(users);
    res.send(users);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User with the ${id} deleted from DB`);
};

export const updateUser = (req, res) => {

    const { id } = req.params;
    const { FirstName, LastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (FirstName)
        user.FirstName = FirstName;
    if (LastName)
        user.LastName = LastName;
    if (age)
        user.age = age;

    res.send(`User with id : ${id} Updated!`);

};
