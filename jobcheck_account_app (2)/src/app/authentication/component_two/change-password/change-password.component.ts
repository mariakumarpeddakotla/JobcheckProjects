import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  submitted: boolean = false;
  strongPassword = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordChecker('password', 'confirmPassword')
    })
  }

  onPasswordStrengthChanged(event: any) {
    this.strongPassword = event;
  }

  // variables for password eyeicon
  show_button1: Boolean = false;
  show_button2: Boolean = false;
  show_button3: Boolean = false;
  show_eye1: Boolean = false;
  show_eye2: Boolean = false;
  show_eye3: Boolean = false;

  //Function for password eyeicon to show or hide password
  showPassword1() {
    this.show_button1 = !this.show_button1;
    this.show_eye1 = !this.show_eye1;
  }
  showPassword2() {
    this.show_button2 = !this.show_button2;
    this.show_eye2 = !this.show_eye2;
  }
  showPassword3() {
    this.show_button3 = !this.show_button3;
    this.show_eye3 = !this.show_eye3;
  }

  onSubmit() {
    this.submitted = true;
    console.log("the entered form values", this.passwordForm.value)
  }

  //The get method to get the control over the password input fields
  get h() {
    return this.passwordForm.controls;
  }

  values = '';

  onKey(event: any) { // without type info
    this.values = event.target.value;
    var p = this.values;
  }
}


//Function to validate the new password and confirm password
function PasswordChecker(this: any, controlName: string, compareControlName: string) {
  // return the result to the formgroup
  return (formGroup: FormGroup) => {
    const first = formGroup.controls[controlName];
    const second = formGroup.controls[compareControlName];

    // Comparing the two passwords
    if (first.value !== second.value) {
      second.setErrors({ mustmatch: true });
      return { mustmatch: true };
    } else {
      second.setErrors(null);
      return null;
    }
  }

}

