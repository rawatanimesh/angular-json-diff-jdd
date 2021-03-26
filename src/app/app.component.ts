import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sampleArray2 = [
    {
      "Aidan Gillen": {
        "array": ["Game of Thron\"es", "The Wire"],
        "string": "some string",
        "int": 2,
        "aboolean": true,
        "boolean": false,
        "object": {
          "foo": "bar",
          "object1": {
            "new prop1": "new prop value",
            "new prop2": "new prop value"
          },
          "object2": {
            "new prop1": "new prop value"
          },
          "object3": {
            "new prop1": "new prop value"
          },
          "object4": {
            "new prop1": "new prop value"
          }
        }
      },
      "Amy Ryan": {
        "one": "In Treatment",
        "two": "The Wire"
      },
      "Annie Fitzgerald": ["Big Love", "True Blood"],
      "Anwan Glover": ["Treme", "The Wire"],
      "Alexander Skarsgard": ["Generation Kill", "True Blood"],
      "Clarke Peters": null,
      "Bumbulbee": "n/a",
      "id": "UHN1TKY100401133",
      "date": "2021-02-09",
      "status": "200",
      "type": "MME"
    },
    {
      "Aidan Gillen": {
        "array": ["Game of Thron\"es", "The Wire"],
        "string": "some string",
        "int": 2,
        "aboolean": true,
        "boolean": true,
        "object": {
          "foo": "bar",
          "object1": {
            "new prop1": "new prop value"
          },
          "object2": {
            "new prop1": "new prop value"
          },
          "object3": {
            "new prop1": "new prop value"
          },
          "object4": {
            "new prop1": "new prop value"
          }
        }
      },
      "Amy Ryan": {
        "one": "In Treatment",
        "two": "The Wire"
      },
      "Annie Fitzgerald": ["Big Love", "True Blood","True Blood2"],
      "Anwan Glover": ["Treme", "The Wire"],
      "Alexander Skarsgard": ["Generation Kill", "True Blood"],
      "Clarke Peters": null,
      "Clarke Peters2": null,
      "id": "UHN1TKY100401132",
      "date": "2021-02-10",
      "status": "200",
      "type": "MME"
    }
  ]

  sampleArray = [{
    id: 1,
    "date": "2021-02-10",
    "status": "200",
    "type": "MME",
    occupation: "engineer",
    firstname: "masoud",
    middleName: "saif",
    lastname: "salehi",
    address: {
      street: "2345 blagio dr",
      city: "Los Angeles",
      countries: ["US","BS","DS","CS"]
    },
    data: [
      [
        "Better things yet to come!"
      ]
    ]
  },
  {
    id: 2,
    occupation: "composer",
    firstname: "daniel",
    lastname: "salehi",
    address: {
      street: "545 beverly dr",
      city: "Los Angeles",
      countries: ["US","BS","CS"]
    },
    data: [
      [
        "Good things are here!"
      ]
    ]
  }
]
  diffReport: any;

constructor() {}

  ngOnInit(){}

  compare(){
    document.getElementById('compare').click();
  }

  differenceReport(event){
    console.log(event);
    this.diffReport = event;
  }

}
