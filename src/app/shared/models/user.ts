export class User {
  constructor(
    public nationality: string,
    public username: string,
    public email: string,
    public password: string,
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public role?: string
  ) {}
}
