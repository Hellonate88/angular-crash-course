import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task|undefined): void {
    this.onDeleteTask.emit(task)
  }

}