import {User} from "../interfaces/User";

export const resolvers = {
    Query: {
        viewer(_parent, _args, _context, _info): User {
            return { id: 1, name: 'John Smith', status: 'cached' }
        },
    },
}