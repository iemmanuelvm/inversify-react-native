/* eslint-disable prettier/prettier */
const InjectableTypesSymbol = {
    Users: {
        Service: Symbol.for('USERS_SERVICE'),
        Repository: Symbol.for('USERS_REPOSITORY'),
    },
};

export default InjectableTypesSymbol;