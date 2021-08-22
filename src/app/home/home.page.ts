import { Component } from '@angular/core';
import { MyToast } from 'mytoast';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myVar : string = "My Os App";
  constructor() {}
  async showToast(){
    MyToast.showToast()
    
  }
  async changeTitle(){
    this.myVar = "Os App";
    
  }
}
