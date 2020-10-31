import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgentSidebarComponent } from './agent-sidebar.component';



@NgModule({
  declarations: [AgentSidebarComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class AgentSidebarModule { }
