export class User {
    id?: number;
    username: string;
    email?: string;
    password: string;
    confirmed?: boolean;
    blocked?: boolean;

    constructor(pId = 0, pUserName = '', pEmail = '', pPassword = '') {
        this.id = pId;
        this.username = pUserName;
        this.email = pEmail;
        this.password = pPassword;
    }
}

export class Person {
    id: number;
    name?: string;
    age?: number;
    mail?: string;

    constructor(pId = 0, pName = '', pAge = 0, pMail = '') {
        this.id = pId;
        this.name = pName;
        this.age = pAge;
        this.mail = pMail;
    }
}