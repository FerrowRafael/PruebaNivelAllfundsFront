import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new.model';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public news: New[] = [];
  public firstNew: any;

  constructor(
    public newService: NewService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  public getNews() {
    this.newService.getAll().subscribe(data => {
      this.news = data;
      this.firstNew = this.news.shift();
    });
  }

  public async addArchived(_id: any) {
    await (await this.newService.archive(_id)).toPromise();
    window.location.reload();
  }
}
