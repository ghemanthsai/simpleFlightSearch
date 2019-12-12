import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"]
})
export class RoleComponent implements OnInit {
  // manageList = flightList;
  filghtObj = {
    flightNumber: "",
    origin: "",
    departure: "",
    destination: ""
  };

  p = 1;
  flightList: any[] = [
    {
      flightNumber: "1128",
      carrier: "UA",
      origin: "ORD",
      departure: "2018-01-31T14:05:00",
      destination: "IAH",
      arrival: "2018-01-31T16:52:00",
      aircraft: "Boeing 737-800",
      distance: 925,
      travelTime: "02:41",
      status: "On Time"
    }
  ];

  manageList: any;
  constructor(private http: HttpClient) {}

  // Make the HTTP request:

  temp: any;
  ngOnInit() {
    this.temp = this.flightList;
    this.http.get("http://172.25.75.92:9090/app/flight").subscribe(data => {
      this.manageList =
        data != null || data != undefined ? data : this.flightList;
      this.temp = this.manageList;
    });
  }

  updateFilter() {
    let data = this.filghtObj;
    let tampList = [];
    this.temp.filter(function(d) {
      if (
        d["flightNumber"].toString().indexOf(data.flightNumber.toString()) !==
          -1 &&
        data.flightNumber.length != 0
      ) {
        tampList.push(d);
      } else if (
        d["origin"].toString().indexOf(data.origin.toString()) !== -1 &&
        d["destination"].toString().indexOf(data.destination.toString()) !==
          -1 &&
        data.destination.length != 0 &&
        data.origin.length != 0
      ) {
        tampList.push(d);
      } else if (
        d["departure"].toString().indexOf(data.departure.toString()) !== -1 &&
        data.departure.length != 0
      ) {
        tampList.push(d);
      }
    });
    if (
      data.origin.length == 0 &&
      data.flightNumber.length == 0 &&
      data.destination.length == 0 &&
      data.departure.length == 0
    ) {
      this.flightList = this.temp;
    } else this.manageList = tampList;
    console.table(tampList);
  }
}
