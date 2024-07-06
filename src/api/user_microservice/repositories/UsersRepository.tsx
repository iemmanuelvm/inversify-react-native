/* eslint-disable prettier/prettier */
import axios from 'axios';
import { injectable } from 'inversify';
import IUsersRepository from './IUsersRepository';

@injectable()
export default class UsersRepository implements IUsersRepository {
    async GetAllUsers() {
        try {
            const getAllUsers = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            return { ...getAllUsers.data };
        } catch (error) {
            // console.log('An error ocurried');
        }
    }
}