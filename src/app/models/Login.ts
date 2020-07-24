export class Login {
    id: number;
    username: string;
    password: string;
    fullName: string;
    

    constructor(id ,username, password, fullName){
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
    }
}
