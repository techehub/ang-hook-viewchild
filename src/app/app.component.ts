import { Component, ViewChild, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit , AfterViewChecked{

    @ViewChild(MessageComponent) messageViewChild: MessageComponent;


    message: string;

    constructor(private cd: ChangeDetectorRef){

    }

    ngOnInit() {
        this.message = 'Hello World';


    }


    ngAfterViewInit() {
      console.log("--inside ngAfterViewInit");
      this.messageViewChild.message = 'Hi vijeesh';
      this.cd.detectChanges();
    }


    ngAfterViewChecked() {
      console.log("--inside ngAfterViewChecked");
      this.messageViewChild.message = this.message.toUpperCase();
      this.cd.detectChanges();
    }

    changeMessage (){
      this.message = this.message + "!"

    }




}
