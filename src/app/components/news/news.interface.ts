export interface INews {
    title: string,
    pubDate: string,
    link: string,
    guid: string,
    author: string,
    thumbnail: string,
    description: string,
    content: string,
    enclosure: {
        link: string
    },
    categories: string[]
  }