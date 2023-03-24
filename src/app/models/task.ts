export interface Task {
    id?:number;
    taskName:string;
    description:string;
    status:string;
    dueDate:Date;
    dateCreation:Date;
}
