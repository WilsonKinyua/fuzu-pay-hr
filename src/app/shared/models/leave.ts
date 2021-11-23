import { Department } from './department';
export class Leave {

    constructor(
        public employee: string,
        public position: string,
        public leave_type: string,
        public department: string,
        public leave_date_from: Date,
        public leave_date_to: Date,
        public status: string,
        public approved_by: string,
        public created_at: Date,
        public employee_type: string,
        
    ) { }
        
        
    
}
