import { Injectable } from "@angular/core";
// import {environment} from '../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient) {}

  // serviceCall() {
  //   var baseUrl = "xxx.xxx.x.xxx:xxxx/project/v1/admin/login";
  //   // tslint:disable-next-line:prefer-const
  //   var headers = new HttpHeaders();
  //   headers.append("Content-Type", "application/json");
  //   var xhr = new XMLHttpRequest();
  //   this.http
  //     .get("172.25.75.92:9090/app/flight", { headers })
  //     .subscribe(data => {
  //       console.table(data);
  //     });
  // }
}
