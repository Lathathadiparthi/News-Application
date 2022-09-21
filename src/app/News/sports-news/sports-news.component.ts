import { Component, OnInit } from '@angular/core';
import { NewsAppServiceService } from '../services/news-app-service.service';


@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private _service:NewsAppServiceService) { }
  SportsnewsDisplay:any = [];

  ngOnInit(): void {
     this._service.Sportsnews().subscribe((result)=>{
      console.log(result);
      this.SportsnewsDisplay=result.articles;
        })
    
  }

  

}
