import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { AppTask } from '../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: AppTask[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}
  toggleTaskCompletion(task: AppTask) {
    task.isCompleted = !task.isCompleted; 
    this.taskService.updateTask(task).subscribe(() => {
    });
  }
  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  openTaskForm(task?: AppTask) { // Pass task for editing, or undefined for new task
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: task 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.loadTasks(); 
      }
    });
  }

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }
}