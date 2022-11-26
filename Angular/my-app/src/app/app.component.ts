import { Component, ViewEncapsulation } from '@angular/core';
import { CountCalculateService } from './Services/count-calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  ButtonText = "CountCalculate";
  title = 'my-app is Running Now!!';
  headerTitle = 'My Name is Yunes Masoomi';
  count = 10 ;
  picPath='./favicon.ico';
  constructor(public _CountCalculateService:CountCalculateService) { }
  CountCalculateServiceClick()
  {
    this._CountCalculateService.writeCount(this.count);
    this.count++;
  }
}
