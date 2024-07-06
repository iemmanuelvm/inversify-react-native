/* eslint-disable prettier/prettier */
export default interface IDependencyInjectionContext {
    getContainer: () => any;
    getServices: () => any;
    getRepositories: () => any;
}