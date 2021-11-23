export class Job {
    constructor(
        public job_title: string,
        public job_description: string,
        public department: number,
        public position: string,
        public location: string,
        public experience: string,
        public job_type: string,
        public salary: number,
        public deadline?: Date,
        public created_at?: Date,
      ) {}
}
