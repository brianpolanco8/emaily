import axios from 'axios';
import {FETCH_USER} from "./types";

const fetchUsers = () => {
    axios.get('/api/current_user');
};