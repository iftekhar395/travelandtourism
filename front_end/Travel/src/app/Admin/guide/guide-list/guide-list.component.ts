import { Component, OnInit } from '@angular/core';
import { Guide } from '../guideinfo/guide';
import { GuideService } from '../guide.service';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {
 allGuide: Guide[];
  constructor(private guideService : GuideService) { }

  ngOnInit() {
    this.getAllGuide();
    this.guideService.refreshNeeded$.subscribe(() => {
      this.getAllGuide();
    });
    this.getAllGuide();
  }

  getAllGuide() {
    this.guideService.getAllGuide().subscribe((data: Guide[]) => {
      this.allGuide = data;
    });
  }

  deleteGuide(gid: number) {
    this.guideService.deleteGuide(gid).subscribe((data: Guide) => {
      this.getAllGuide();
      alert("Do you want to delete...???");
    });
  }

  editGuide(guide: Guide) {
    this.guideService.currentGuide = Object.assign({}, guide);
    
  }
}
