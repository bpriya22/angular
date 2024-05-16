import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
 standalone: true,
  template: `<h2>Welcome Priya and {{name}}</h2>
  <input [id]="myid" type="text" value="Rahul">//Property Binding
  <input id="{{myid}}" type="text" value="Rahul" [disabled]="isdisabled">//with '[]'
  <input id="{{myid}}" type="text" value="Rahul" bind-disabled="isdisabled">//with 'bind'

  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name="Rahul";//interpolation-simplest way to bind data from class to template.
  public myid = "testId"
  public isdisabled = true
  constructor(){}
  ngOnInit() {
  
  }

}
