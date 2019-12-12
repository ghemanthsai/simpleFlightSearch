import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'bfsi-show-hide',
  templateUrl: './bfsi-show-hide.component.html',
  styleUrls: ['./bfsi-show-hide.component.scss']
})
export class BfsiShowHideComponent implements OnInit {
  //Declaration start
  showHide: boolean = true;
  //End

  constructor() { }

  ngOnInit() {
  }

}
