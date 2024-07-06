/* eslint-disable prettier/prettier */
import { createContext, PropsWithChildren } from 'react';
// utils
// @types
import { IUsersContextTypes } from '../users/@types/IUsersContextTypes';
import useDependencyInjection from '../hooks/useDependencyInjection';
import IUsersRepository from '../user_microservice/repositories/IUsersRepository';
import InjectableTypesSymbol from '../dependency_injection/InjectableTypesEnum';


const UsersContext = createContext<IUsersContextTypes | null>(null);

interface UsersProviderProps extends PropsWithChildren { }

function UsersProvider({ children }: UsersProviderProps) {
    const { getServices } = useDependencyInjection();
    const injectedServices = getServices();

    const usersService: IUsersRepository = injectedServices[InjectableTypesSymbol.Users.Service];

    const getAllUsers = async () => {
        const getAllUsers = await usersService.GetAllUsers();
        return getAllUsers;

    };

    return (
        <UsersContext.Provider
            value={{
                getAllUsers,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}

export { UsersContext, UsersProvider };