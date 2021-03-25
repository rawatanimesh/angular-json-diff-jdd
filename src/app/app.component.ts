import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

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
}
