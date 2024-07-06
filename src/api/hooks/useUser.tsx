/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

const useUser = () => {
    const context = useContext(UsersContext);

    if (!context) {
        throw new Error('Contractor context must be used inside DependencyInjectionProvider');
    }

    return context;
};

export default useUser;