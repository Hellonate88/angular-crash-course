import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask():void {
    console.log(666)
    this.showAddTask = !this.showAddTask
    console.log(this.showAddTask)
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    console.log(888)
    return this.subject.asObservable()
  }
}
