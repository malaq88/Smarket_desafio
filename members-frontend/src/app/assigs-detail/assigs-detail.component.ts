import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from '../members-detail/api.service';

@Component({
  selector: 'app-assigs-detail',
  templateUrl: './assigs-detail.component.html',
  styleUrls: ['./assigs-detail.component.css']
})
export class AssigsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private appComponent: AppComponent,
    private router: Router, ) { }
  
  selected_member;
  selected_assig;
  selected_id = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id')!);
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

  updateStatus(assig: any){
    this.api.changeStatusAssign(assig).subscribe(
      data => {
        assig = data;
        this.ngOnInit();
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  newAssig(){
    this.router.navigate(['new-assig']);
  };

  delete(id: any){
    this.api.deleteAssig(id).subscribe(
      data => {
        this.ngOnInit();
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };


}
