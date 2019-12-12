import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {BfsiShowHideComponent} from '../../bfsi-show-hide/bfsi-show-hide.component'
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']

})
export class AuthenticationComponent implements OnInit {

  constructor(private  _router : Router ,private app:BfsiShowHideComponent) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:variable-name
  login(){
    this.app.showHide=false;
this ._router.navigateByUrl('staging');
  }
}
