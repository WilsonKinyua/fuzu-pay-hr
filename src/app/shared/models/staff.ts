export class Staff {
  constructor(
    public employee_id: string,
    public department: number,
    public employment_type: number,
    public surname: string,
    public other_names: string,
    public work_email: string,
    public phone_number: string,
    public id_number: number,
    public position: string,
    public gross_salary: number,
    public employment_date: Date,
    public net_salary?: number,
    public date_of_birth?: string
  ) {}
}
