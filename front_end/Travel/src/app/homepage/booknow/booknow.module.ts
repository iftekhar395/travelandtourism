import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooknowComponent } from './booknow.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BooknowService } from './booknow.service';



@NgModule({
  declarations: [BooknowComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  providers: [BooknowService]
})
export class BooknowModule { }
