import express from 'express';
import { getUsers, addUser, deleteUser, editUser} from  "../controllers/user.js";

const ROUTER = express.Router();

ROUTER.get('/', (req, res) => {
    const htmlContent = "<h1>Welcome to the contacts management API!</h1>"
    res.send(htmlContent);
});

ROUTER.get('/api/v1/contact/list', getUsers);

ROUTER.post('/api/v1/contact/add', addUser);

ROUTER.post('/api/v1/contact/edit/:id', editUser);

ROUTER.get('/api/v1/contact/remove/:id', deleteUser);

export default ROUTER;

