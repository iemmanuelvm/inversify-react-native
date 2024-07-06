/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import IDependencyInjectionContext from './IDependencyInjectionContext';

const DependencyInjectionContext = createContext<IDependencyInjectionContext | null>(null);

export default DependencyInjectionContext;