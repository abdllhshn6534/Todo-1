export class Model{
    user?;
    items?;
    constructor(){
        this.user="Abdullah";
        this.items=[
          new TodoItem("Spor",false),
          new TodoItem("Kahvaltı",true),
          new TodoItem("Ders",true),
          new TodoItem("Sinema",false),

        ];
    }
}
export class TodoItem{
    "Description"?;
    "Action"?;
    constructor(descriptions:any, actions:any){
        this.Description=descriptions;
        this.Action=actions; 

    
    }
}