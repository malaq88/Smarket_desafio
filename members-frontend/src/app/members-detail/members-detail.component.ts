import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_member = {};
  selected_id = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id: any) {
    this.api.getMember(id).subscribe(
      data => {
        console.log(data)
        this.selected_member = data; 
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        console.log(data);
        this.selected_member = data; 
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };
}
