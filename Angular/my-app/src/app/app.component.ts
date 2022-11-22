import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-app is Running Now!!';
  headerTitle = 'My Name is Yunes Masoomi';
  count = 10 ;
  picPath='./favicon.ico';
}
