import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Augular 2', 'http://augular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Augular Homepage', 'http://augular.io', 1)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    const obj = new Article(title.value, link.value, 0);
    this.articles.push(obj);
    return false;
  }
}
