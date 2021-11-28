export class User {
  constructor(
    public nationality: string,
    public email: string,
    public password: string,
    public username?: string,
    public id?: number,
    public other_names?: string,
    public role?: string,
    public token?: string,
    public is_human_resource?: boolean,
  ) {}
}
