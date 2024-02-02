export class User {
    user_id: number;
    full_name: string;
    username: string;
    password: string;

    constructor(user_id: number, full_name: string, username: string, password: string) {
        this.user_id = user_id;
        this.full_name = full_name;
        this.username = username;
        this.password = password;
    }
}