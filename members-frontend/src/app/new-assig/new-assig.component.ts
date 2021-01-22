import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-assig',
  templateUrl: './new-assig.component.html',
  styleUrls: ['./new-assig.component.css']
})
export class NewAssigComponent implements OnInit {

  assig = {};
  members_select = {};

  constructor(
    private api: ApiService,
    private appComponent: AppComponent) {
      this.getMembersSelec();
    }

  ngOnInit(): void {
  }
  

  save(){
    this.api.saveNewAssig(this.assig).subscribe(
      data => {
        this.appComponent.assigs.push(data);
        console.log(data);
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  getMembersSelec = () => {
    this.api.getAllMembers().subscribe(
      data => {
        console.log(data);
        this.members_select = data;
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

}
