import { Component, OnInit } from '@angular/core';
import { NewsAppServiceService } from '../services/news-app-service.service';


@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _service:NewsAppServiceService) { }
  BusinessnewsDisplay:any = [];

  ngOnInit(): void {
     this._service.Businessnews().subscribe((result)=>{
      console.log(result);
      this.BusinessnewsDisplay=result.articles;
        })
    
  }

  

}
