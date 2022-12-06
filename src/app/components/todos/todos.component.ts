import { Component } from "@angular/core";
import { TodosService } from "../services/todos.service";
import { list } from "./todosModel";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class TodosComponent {
    public title!: string;
    public description!: string;
    public item!: list
    public items: list[] = []
    constructor(public todosService: TodosService) {

    }
    public onClickSubmit() {
        this.items = this.todosService.todosList;
        this.item = {
            title: '',
            description: ''
        }
        if (this.title !== undefined && this.description !== undefined) {
            this.item.title = this.title;
            this.item.description = this.description;
            let result = JSON.stringify(this.items);
            if (!(result.includes(this.title)) && !(result.includes(this.description))) {
                this.items.push(this.item);
            }
        }
    }

}