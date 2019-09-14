import { Component, OnInit, Input} from '@angular/core';
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

  loadMore(el: HTMLElement){
    this.limit+=7;
    el.scrollIntoView({behavior:"smooth"});
  }

  formatDate(date){
    const newDate = date.split(' ')[0].split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }

  getClass(i) { 
    if(i%10 == 0 || i%10 == 6){
      return 'col-md-8';
    }
    return 'col-md-4';
  }

}
