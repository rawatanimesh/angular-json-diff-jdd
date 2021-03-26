# JsonDiffChecker

This angualr compoent has been created using source code from  http://www.jsondiff.com/ tool. 
This is a reusable angular component which helps in showing differences between two JSON objects.

## Demo

Checkout the demo - 

## Adding the component in your project
```
1) Add the 'jdd' javascript files in your asset folder. You can copy it ffrom this project from 'assets/jdd-files'.
2) Copy 'json-comparison' component from here to your project. Import it in your module.
3) Add the following html template in your parent component to get output and input as well as json differences.
`
<app-json-comparison
  [leftTree]="sampleArray2[0]"
  [rightTree]="sampleArray2[1]"
  [hideReport]="true"
  (differenceReport)="differenceReport($event)">
</app-json-comparison>
`
4) In your parent component add click on button with id 'compare' to get your results.
`
<app-json-comparison
  [leftTree]="sampleArray2[0]"
  [rightTree]="sampleArray2[1]"
  [hideReport]="true"
  (differenceReport)="differenceReport($event)">
</app-json-comparison>
`
5) In your parent component add click on button with id 'compare'
`
document.getElementById('compare').click();
`
```
