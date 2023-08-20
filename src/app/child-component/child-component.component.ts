import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements 
OnChanges, 
DoCheck, 
OnInit, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  @Input() parentToChild: number = 0;
  @Output() sendToParentEventEmitter = new EventEmitter<number>();
  @Output() sendOtpEventEmitter = new EventEmitter<number>();
  inputValue: number = 0;
  otp: string = '';
  
  sendToParent() {
    this.sendToParentEventEmitter.emit(this.inputValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Called!!!');
  }

  ngDoCheck(): void {
    console.log('Do Check Called!!!');
  }

  ngOnInit(): void {
      console.log('On Init Called!!!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!!!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called!!!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!!!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!!!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!!!');
  }

  generateOtp() {
    const digits = '0123456789'
    for (let i = 0; i < 8; i++ ) {
      this.otp += digits[Math.floor(Math.random() * 10)];
    }
    this.sendOtpEventEmitter.emit(parseInt(this.otp));
  }

  clearValue() {
    this.inputValue = 0;
  }
}
