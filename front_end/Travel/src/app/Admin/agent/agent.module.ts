import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { FormsModule } from '@angular/forms';
import { AgentService } from './agent.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [AgentFormComponent, AgentListComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
    , AppRoutingModule
  ],
  providers: [AgentService],
  exports: [AgentFormComponent, AgentListComponent]
})
export class AgentModule { }
