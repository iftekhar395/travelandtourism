import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  
  cid: number = 0;
  allAgent: Agent[];
  constructor(public agentService: AgentService) { }

  ngOnInit() {
    this.getAllAgent();
    this.agentService.refreshData.subscribe(()=>{
      this.getAllAgent();
    });
    this.getAllAgent();
  }

  insertId(id: number){
    if(id==0){
      // console.log(id);
      this.agentService.agent = new Agent();
      this.ngOnInit();
    }else{
      this.allAgent=[];
      this.agentService.getAgentById(id).subscribe((data: Agent) => {
      this.agentService.agent = data;
      });
    }
  }

  getAllAgent() {
    this.agentService.getAllAgents().subscribe((data: Agent[])=>{
      this.allAgent =data;
    });
  }

  deleteAgent(agent: Agent){
    this.agentService.deleteAgent(agent).subscribe((data: Agent)=>{
      this.getAllAgent();
      alert("Do you want to delete...???");
    });
  }

  editAgent(agent: Agent){
    this.agentService.agent = Object
    .assign({}, agent);
  }
}
