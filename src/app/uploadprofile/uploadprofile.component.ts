import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadprofile',
  templateUrl: './uploadprofile.component.html',
  styleUrls: ['./uploadprofile.component.scss']
})
export class UploadprofileComponent implements OnInit {
  file: any;
  fileName: any;
  constructor() { }

  ngOnInit() {
  }

  uploadFile(event: FileList) {
    const file = event.item(0);
    this.file = file;
    this.fileName = file.name;
    }

}
