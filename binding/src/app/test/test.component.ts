import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
 standalone: true,
  template: `<h2>Welcome Priya and {{name}}</h2>`,
  styles: []
})
export class TestComponent implements OnInit{
  public name="Rahul";
  constructor(){}
  ngOnInit() {
  
  }

}
