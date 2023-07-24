

export type PrimaryKey = number

export enum TypeMessage {
    USER  = 'USER',
    CHATBOT = 'CHATBOT'
}

export interface User {
    id: PrimaryKey,
    username : string,
    lastname:string,
    firstname:string,
    email: string,
    password: string,
    role : UserRole,
    online : boolean,
    lastMessage : string
}

export enum UserRole{
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface Discussion{
    _id:string,
    id : PrimaryKey,
    name : string,
    date : Date,
    lastMessage : string
}

export interface Message{
    id: PrimaryKey,
    text: string,
    type: TypeMessage,
    date: string,
    
}
