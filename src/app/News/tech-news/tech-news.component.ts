import { Component, OnInit } from '@angular/core';
import { NewsAppServiceService } from '../services/news-app-service.service';


@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _service:NewsAppServiceService) { }

  TechnewsDisplay:any = [];

  ngOnInit(): void {
     this._service.Technews().subscribe((result)=>{
      console.log(result);
      this.TechnewsDisplay=result.articles;
        })
    
  }

}
