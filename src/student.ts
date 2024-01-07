class Student{
    constructor(
      private name : string,
      public id : number,
      readonly roll : number
    ){}
  
    read(){
      console.log(`${this.name} whose roll is ${this.roll} got id number ${this.id}`);
    }
  }

  export default Student;