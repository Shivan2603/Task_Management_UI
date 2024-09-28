import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../task.service';
import { AppTask } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppTask | undefined 
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      isCompleted: [false]
    });
  }
  onClose() {
    this.dialogRef.close(); // Close the dialog
  }
  ngOnInit() {
    if (this.data) { 
      this.isEditing = true;
      this.taskForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData: AppTask = this.taskForm.value;

      if (this.isEditing) {
        taskData.id = this.data!.id; 
        this.taskService.updateTask(taskData).subscribe(() => this.dialogRef.close(true));
      } else {
        this.taskService.createTask(taskData).subscribe(() => this.dialogRef.close(true));
      }
    }
  }
}