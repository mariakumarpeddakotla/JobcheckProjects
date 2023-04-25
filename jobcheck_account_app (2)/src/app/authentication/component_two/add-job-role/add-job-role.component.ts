import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-add-job-role',
  templateUrl: './add-job-role.component.html',
  styleUrls: ['./add-job-role.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddJobRoleComponent),
    multi : true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddJobRoleComponent{

  items1: string[] = [];
  items2: string[] = [];
  @Input() placeholder = 'eg: Google';
  @Input() removable = true;

  @ViewChild('inputField1') inputField1:any;
  @ViewChild('inputField2') inputField2:any;

  onchange: Function = () => {};
  onTouched: Function = () => {};

  constructor(private cd: ChangeDetectorRef){}

  onChipBarClick(): void{
    this.inputField1.nativeElement.focus();
  }


  removeItem1(index:number):void{
    this.items1.splice(index,1);
    this.triggerChange1();
  }

  removeItem2(index:number):void{
    this.items2.splice(index,1);
    this.triggerChange2();
  }


  onKeyDown1(event:any, value:string):void{
    switch(event.keyCode){
      case 13:
      case 188:{
        if(value && value.trim() !== ''){
          if(!this.items1.includes(value)){
            // this.items.push();
            this.items1 = [...this.items1, value];
            this.triggerChange1();
          }
          this.inputField1.nativeElement.value="";
          event.preventDefault();
        }
        break;
      }  
      case 8: {
        if(!value && this.items1.length >0){
          this.items1.pop();
          this.items1 = [...this.items1];
          this.triggerChange1();
        }
        break;
      }
      default:
        break;
    }
  }

  onKeyDown2(event:any, value:string):void{
    switch(event.keyCode){
      case 13:
      case 188:{
        if(value && value.trim() !== ''){
          if(!this.items2.includes(value)){
            // this.items.push();
            this.items2 = [...this.items2, value];
            this.triggerChange2();
          }
          this.inputField2.nativeElement.value="";
          event.preventDefault();
        }
        break;
      }  
      case 8: {
        if(!value && this.items2.length >0){
          this.items2.pop();
          this.items2 = [...this.items2];
          this.triggerChange2();
        }
        break;
      }
      default:
        break;
    }
  }


  writeValue1(value:any):void {
    this.items1 = value;
    this.cd.markForCheck();
  }

  writeValue2(value:any):void {
    this.items2 = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void{
    this.onchange = fn;
  }

  registerOnTouched(fn: Function):void {
    this.onTouched = fn;
  }

  triggerChange1():void{
    this.onchange(this.items1);
  }

  triggerChange2():void{
    this.onchange(this.items2);
  }



}


