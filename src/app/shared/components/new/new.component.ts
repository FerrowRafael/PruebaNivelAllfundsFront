import { Component, OnInit, Input } from '@angular/core';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() new: any = {};
  @Input() type: string = "";

  constructor(
    public newService: NewService
  ) { }

  ngOnInit(): void {
  }

  public async addArchived(_id: any) {
    await (await this.newService.archive(_id)).toPromise();
    window.location.reload();
  }

  public async delete(_id: any) {
    await (await this.newService.delete(_id)).toPromise();
    window.location.reload();
  }
}
