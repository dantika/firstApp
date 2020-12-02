import { Component } from '@angular/core';


@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

    listTitle = 'Ma Todo List !';
    todos: string[] = [];
    newTodo = '';

    constructor() {}

    createTodo(): any {
        if (this.newTodo) {
            this.todos.push(this.newTodo);
            this.newTodo = '';
        }
    }


}
