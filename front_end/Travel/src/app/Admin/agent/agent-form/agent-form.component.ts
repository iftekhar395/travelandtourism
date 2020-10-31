import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {

  // agentId: number = null;
  constructor(public agentService: AgentService,
    private toastr: ToastrService) { }

    showToastr(){
      this.toastr.success('Data Submitted Successfully...', 'Dhrubo Travel Agency', {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing'
      });
    }
    showToastr1(){
      this.toastr.success('Data Updated Successfully...', 'Dhrubo Travel Agency', {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing'
      });
    }

  ngOnInit() {
  }

  updateAgent(agent: Agent){
  this.agentService.updateAgent(agent).subscribe();
  this.showToastr1();
    this.clear();
  }

  createAgent(agent: Agent){
    this.agentService.createAgent(agent).subscribe();
    this.ngOnInit();
    this.showToastr();
    this.clear();
  }

  clear(){
    this.agentService.agent = {
    hagentid: null,
    hagentname: '',
    hagentmobile: '',
    hagentaddress: '',
    emailid: ''
    };
  }
}
