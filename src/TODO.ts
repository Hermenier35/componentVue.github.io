export default class TODO {
    id: number;
    title: string;
    completed: boolean;
    dateFin?: Date;
  
    constructor(id: number, title: string, completed: boolean, dateFin?: Date) {
      this.id = id;
      this.title = title;
      this.completed = completed;
      this.dateFin = dateFin;
    }
  }
  