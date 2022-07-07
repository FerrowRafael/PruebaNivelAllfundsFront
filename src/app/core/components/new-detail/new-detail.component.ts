import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { New } from 'src/app/models/new.model';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {

  new: any = {};
  public newId: string = '';

  constructor(
    private route: ActivatedRoute,
    public newService: NewService,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  public getParams() {
    this.route.params.subscribe((params: Params) => {
      let newId = params.newId
      this.getDetail(newId)
    });
  }

  public getDetail(newId: string) {
    this.newService.getDetail(newId).subscribe(data => {
      this.new = data;
    });
  }

}
