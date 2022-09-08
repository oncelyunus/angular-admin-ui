export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export enum Role {
    ROLE_ADMIN,
    ROLE_SADMIN,
}
