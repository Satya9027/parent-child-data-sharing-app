import { AfterViewInit, Component, ViewChild , OnInit} from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements AfterViewInit, OnInit {

  dataFromParentToChild: number = 0;
  receivedChildData: number = 0;
  receivedOtp: number = 0;
  @ViewChild(ChildComponentComponent) childComponent: any;
  showChildComponent: boolean = true;

  receiveDataFromChild($event: number) {
    this.receivedChildData = $event;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.receivedOtp = this.childComponent.generateOtp();
    // console.log(this.receivedOtp);
  }

  receiveOtpFromChild(event: number) {
    this.receivedOtp = event;
  }

  onDestroy() {
    this.showChildComponent = false;
  }
}
