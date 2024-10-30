import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule ({
    declarations: [ 
        TasksComponent, 
        NewTaskComponent, 
        TaskComponent
    ],
    exports: [TasksComponent],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TasksModule {}