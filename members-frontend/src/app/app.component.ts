import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'members-front';

  selected_member= {};

  members = [
    {name: 'Member 01', id: 1, surname: 'ciclano', photo: 'http://www.minhaap.com/photo.png'},
    {name: 'Member 02', id: 2, surname: 'ciclano', photo: 'http://www.minhaap.com/photo.png'},
    {name: 'Member 03', id: 3, surname: 'ciclano', photo: 'http://www.minhaap.com/photo.png'},
  ];

  constructor(private api:ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Erro identificado: ", error.message);
      }
    );
  };

  memberClicked = (member: any) => {
    this.router.navigate(['member-detail', member.id]);
  };

  homeClicked = () => {
    this.router.navigate(['/']);
  };

  memberAssigsClicked = (member: any) => {
    this.router.navigate(['assigs-detail', member.id]);
  };
  
}
