import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../members-detail/api.service';

@Component({
  selector: 'app-assigs-detail',
  templateUrl: './assigs-detail.component.html',
  styleUrls: ['./assigs-detail.component.css']
})
export class AssigsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_member = {};
  selected_assig = {};
  selected_id = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadAssigs(id);
    });
  }

  assigClicked = (assig: any) => {
    this.api.getAssigs(assig.id).subscribe(
      data => {
        console.log(data)
        this.selected_assig = data; 
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  loadAssigs(id: any) {
    this.api.getMemberAssigs(id).subscribe(
      data => {
        console.log(data)
        this.selected_member = data; 
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  updateStatus(){
    this.api.changeStatusAssign(this.selected_assig).subscribe(
      data => {
        console.log(data);
        this.selected_assig = data; 
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

}
