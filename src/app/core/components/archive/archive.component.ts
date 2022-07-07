import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new.model';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public news: New[] = [];

  constructor(
    public newService: NewService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  public getNews() {
    this.newService.getArchived().subscribe(data => {
      this.news = data;
    });
  }
}
