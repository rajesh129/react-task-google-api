import axios from "axios";

const BASE_URL = 'https://api.github.com/users/';

const fetchUsers = (user) => axios.get(`${BASE_URL}${user}`);
export const fetchFollowers = (user) => axios.get(`${BASE_URL}${user}/followers`);

export default fetchUsers;