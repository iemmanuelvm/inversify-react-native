/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import { Container } from 'inversify';
import { PropsWithChildren } from 'react';
import DependencyInjectionContext from './DependencyInjectionContext';
import InjectableTypesSymbol from './InjectableTypesEnum';
import IUsersRepository from '../user_microservice/repositories/IUsersRepository';
import IUsersService from '../user_microservice/services/IUsersService';
import UsersRepository from '../user_microservice/repositories/UsersRepository';
import UsersService from '../user_microservice/services/UsersService';

interface IDependencyInjectionProviderProps extends PropsWithChildren<any> {}

const DependencyInjectionProvider = ({ children }: IDependencyInjectionProviderProps) => {
    const appContainer = new Container();

    appContainer.bind<IUsersRepository>(InjectableTypesSymbol.Users.Repository).to(UsersRepository);
    appContainer.bind<IUsersService>(InjectableTypesSymbol.Users.Service).to(UsersService);


    const getContainer = () => appContainer;

    const getRepositories = () => {
        /* eslint-disable prefer-const */
        let repositories: any = {};

        repositories[InjectableTypesSymbol.Users.Repository] = appContainer.get<IUsersRepository>(
            InjectableTypesSymbol.Users.Repository
        );


        return repositories;
    };

    const getServices = () => {
        let services: any = {};

        services[InjectableTypesSymbol.Users.Service] = appContainer.get<IUsersService>(
            InjectableTypesSymbol.Users.Service
        );


        return services;
    };

    return (
        <DependencyInjectionContext.Provider
            value={{
                getContainer,
                getRepositories,
                getServices,
            }}
        >
            {children}
        </DependencyInjectionContext.Provider>
    );
};

export default DependencyInjectionProvider;