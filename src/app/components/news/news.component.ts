import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { INews } from './interfaces/news.interface';
import { INewsRespone } from './interfaces/newsResponse.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: Array<INews>;
  limit: number = 7;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(
      (res: INewsRespone) => {
       this.news = res.items;
      },
      (err: Response) => {
        console.log(err);
      }
    )
  }

  loadMore(){
    this.limit+=7;
  }

  getClass(i) { 
    if(i%10 == 0 || i%10 == 6){
      return 'col-md-9';
    }
    return 'col-md-3';
  }

}
