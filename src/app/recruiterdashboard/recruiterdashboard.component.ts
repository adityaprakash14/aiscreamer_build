import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiterdashboard',
  templateUrl: './recruiterdashboard.component.html',
  styleUrls: ['./recruiterdashboard.component.css']
})
export class RecruiterdashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoUploadProfile() {
    this.router.navigateByUrl('/UploadprofileComponent');
  }

}
