import { Component, OnInit } from '@angular/core';
import { NewsAppServiceService } from '../services/news-app-service.service';

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {
   constructor(private _service:NewsAppServiceService ) { }

  topHeadingsDisplay:any = [];

  ngOnInit(): void {
     this._service.topHeadings().subscribe((result)=>{
      console.log(result);
      this.topHeadingsDisplay=result.articles;
        })
    
  }

}
