import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import {Observable} from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class NewsAppServiceService {

  constructor( private _http:HttpClient) {}
   newsAppUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=32e50452ba444ae2befcfd4ffcfaf172"

   TechnewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=32e50452ba444ae2befcfd4ffcfaf172"

   BusinessnewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=32e50452ba444ae2befcfd4ffcfaf172"

   SportsnewsUrl="https://newsapi.org/v2/top-headlines?country=in&categoty=sports&apiKey=32e50452ba444ae2befcfd4ffcfaf172"

  topHeadings():Observable<any>
  {
    return this._http.get(this.newsAppUrl);
  } 
  
  Technews():Observable<any>
  {
    return this._http.get(this.TechnewsUrl);
  }

  Businessnews():Observable<any>
  {
    return this._http.get(this.BusinessnewsUrl);
  }

  Sportsnews():Observable<any>
  {
    return this._http.get(this.SportsnewsUrl);
  }
  }
