export class InterviewSchedule {
    constructor(
        public applicant: any,
        public interview_date: Date,
        public interview_time_from: Date,
        public interview_time_to: Date,
        public content: string,
        public created_at: Date,
        public applicant_email:string,
    ){
    }
}

