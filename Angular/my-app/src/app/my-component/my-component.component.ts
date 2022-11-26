import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./MyStyle.css'],
  encapsulation  : ViewEncapsulation.None
})
export class MyComponentComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  TrueID = 'buttonTrue';
  Message = 'Hello , Yunes';
  sayMessage(msg:string)
  {
    alert(msg);
  }
  OnEditableClick()
  {
    if(this.TrueID == 'buttonTrue')
    {
      this.TrueID = 'buttonFalse';
        //this.sayMessage("This is True Case!");
    }
    else
    {
      this.TrueID = 'buttonTrue';
      //this.sayMessage("This is False Case!");
    }
  }
}
