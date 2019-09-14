import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { INews } from './news.interface';
import { INewsRespone } from './newsResponse.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: Array<INews>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(
      (res: INewsRespone) => {
       console.log(res)
       this.news = res.items;
      },
      (err: Response) => {
        console.log(err);
      }
    )
  }

}
