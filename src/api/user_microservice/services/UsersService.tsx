/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import type IUsersRepository from '../repositories/IUsersRepository';
import IUsersService from './IUsersService';
import InjectableTypesSymbol from '../../dependency_injection/InjectableTypesEnum';

@injectable()
export default class UsersService implements IUsersService {
    protected usersRepository: IUsersRepository;

    constructor(@inject(InjectableTypesSymbol.Users.Repository) usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async GetAllUsers() {
        const responseData: any = await this.usersRepository.GetAllUsers();
        return responseData;
    }
}