import { INews } from './news.interface';


export interface INewsRespone {
    status: string,
    feed: {
        url: string,
        title: string,
        link: string,
        author: string,
        description: string,
        image: string,
    },
    items: Array<INews>
}