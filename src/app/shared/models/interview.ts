export class Interview {
    constructor(
        public job_listing: number,
        public applicant_name: Date,
        public email: string,
        public linkedin_url: string,
        public phone_number: string,
        public position: string,
        public education_obtained: string,
        public graduation_year: string,
        public desired_salary: string,
        public experience: string,
        public location: string,
        public date_available: Date,
        public cover_letter: string,
        public status: string,
        public created_at: Date,
    ){
    }
}
