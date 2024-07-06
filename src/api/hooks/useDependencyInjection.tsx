/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import DependencyInjectionContext from '../dependency_injection/DependencyInjectionContext';
import IDependencyInjectionContext from '../dependency_injection/IDependencyInjectionContext';

// ----------------------------------------------------------------------

const useDependencyInjection = (): IDependencyInjectionContext => {
    const context = useContext(DependencyInjectionContext);

    if (!context) throw new Error('Dependency Injection context must be use inside DependencyInjectionProvider');

    return context;
};

export default useDependencyInjection;