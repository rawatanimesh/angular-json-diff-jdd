import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'json-diff-checker';
  selectedArrayIndex = 1;
  actions=[];
  onlyShowDifferences = true;
  attributeOrderIsImportant = false;
  enableRevert = false;
  enableAdvance = false;
  displayEntry = false;
  error = undefined;
  save = false;
  counter = 1;
  namedRootObjectTemp = "";
  namedRootObject = "";
  selectedIndex = 0;
  selectedLeft;
  selectedRight;
  lefttree = {
    id: 1,
    occupation: "engineer",
    firstname: "masoud",
    lastname: "salehi",
    address: {
      street: "2345 blagio dr",
      city: "Los Angeles",
      countries: ["US","DS","CS"]
    },
    data: [
      [
        "Better things yet to come!"
      ]
    ]
  };
  righttree = {
    id: 2,
    occupation: "composer",
    firstname: "daniel",
    lastname: "salehi",
    address: {
      street: "545 beverly dr",
      city: "Los Angeles",
      countries: ["US","BS","DS"]
    },
    data: [
      [
        "Good things are here!"
      ]
    ]
  };
  sampleJson: any;
  sample: any;
  expectedActions = ["fa fa-undo","fa fa-save"];
  samplers = {
    "Sample One": [{
      id: 1,
      occupation: "engineer",
      firstname: "masoud",
      lastname: "salehi",
      address: {
        street: "2345 blagio dr",
        city: "Los Angeles",
        countries: ["US","BS","CS"]
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
    }],
    "Sample Two": [{
      id: 2,
      occupation: "",
      firstname: "neeku",
      lastname: "salehi",
      age: undefined,
      address: {
        street: "2345 blagio dr",
        city: "Los Angeles",
        countries: ["US","CS"]
      },
      extraCondition: {
        street: "2345 blagio dr",
        city: "Los Angeles",
        countries: ["US","CS"]
      },
      methaData: [
        [
          "Better Things Yet to Come!"
        ]
      ]
    },{
      id: 3,
      firstname: "Daniel",
      lastname: "salehi",
      age: 50,
      address: {
        street: "285 Cristal dr",
        city: "Los Vegas",
        countries: ["US","CS"]
      },
      methaData: [
        [
          "Better Things Yet to Come!"
        ]
      ]
    }],
    "Sample Three": {
      id: 3,
      age: 20,
      firstname: "neeku",
      lastName: "salehi",
      address: {
        street: "2345 blagio dr",
        city: "Los Angeles",
        countries: ["US","CS"]
      },
      methaData: [
        [
          "Enjoy the visual comparision tool!"
        ]
      ]
    },
    "Sample Four": {}
  }
  options: string[];

  sampleArray = [{
    id: 1,
    occupation: "engineer",
    firstname: "masoud",
    lastname: "salehi",
    address: {
      street: "2345 blagio dr",
      city: "Los Angeles",
      countries: ["US","BS","CS"]
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
  },
  // {
  //   id: 1,
  //   occupation: "engineer",
  //   firstname: "ani",
  //   lastname: "rawat",
  //   address: {
  //     street: "2345 blagio dr",
  //     city: "Delhi",
  //     countries: ["India"]
  //   },
  //   data: [
  //     [
  //       "Better things yet to come!"
  //     ]
  //   ]
  // }
]

constructor(private renderer: Renderer2, ) {}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.addDiffFiles();
  }

  addDiffFiles(){
    this.addCssToElement('assets/jdd-resources/styles/reset.css');
    this.addCssToElement('assets/jdd-resources/styles/throbber.css');
    this.addCssToElement('assets/jdd-resources/styles/jdd.css');
    new Observable(res => {
     this.addJsToElement('assets/jdd-resources/js-files/jQuery.min.js').onload = (test) => {
      // console.log('bpmn-viewer.js', test)
       return res.next();
       };
    }).subscribe(data => {
      this.addJsToElement('assets/jdd-resources/js-files/jsl.format.js').onload = (test) => {
        console.log('app.js', test);
        this.addJsToElement('assets/jdd-resources/js-files/jsl.parser.js');
        // this.addJsToElement('assets/jdd-resources/js-files/jsl.interactions.js');
        this.addJsToElement('assets/jdd-resources/js-files/jdd.js');
        // this.showInitialBpmnFiles();
        };
    })
  }

  addCssToElement(src: string){
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen';
    link.href = src;
    headID.appendChild(link);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  revert(event) {
    this.actions.push(event);
    console.log(this.actions);
  }
  advance(event) {
    this.actions.push(event);
    console.log(this.actions);
  }
  ondifference(event){
    this.actions.push("Diff count = " + event);
    console.log(this.actions);
  }
}
