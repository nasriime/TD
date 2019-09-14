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

  /*  
  **** Load News Api *****
  */
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

  /*  
  **** View more *****
  **** adds 7 items every time *****
  */
  loadMore(el: HTMLElement){
    this.limit+=7;
    el.scrollIntoView({behavior:"smooth"});
  }

  /*  
  **** Reformat date *****
  **** for example: *****
  **** from 2019-09-14 *****
  **** to 14/09/2019 *****
   */
  formatDate(date){
    const newDate = date.split(' ')[0].split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }

   /*  
  **** add proper class based on index *****
   */
  getClass(i) { 
    if(i%10 == 0 || i%10 == 6){
      return 'col-lg-8 col-md-6';
    }
    return 'col-lg-4 col-md-6';
  }

}
