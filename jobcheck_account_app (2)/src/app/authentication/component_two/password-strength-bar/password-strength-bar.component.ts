import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css']
})
export class PasswordStrengthBarComponent implements OnChanges {
  bar0!: string;
  bar1!: string;
  bar2!: string;
  bar3!: string;
  bar4!: string;
  bar5!: string;
  bar6!: string;
  bar7!: string;

  @Input() passwordToCheck: string='';

  @Output() passwordStrength = new EventEmitter<boolean>();

  private colors = ['rgb(247, 86, 86)','rgb(247, 86, 86)', '#FDB022','#FDB022', '#32D583','#32D583', '#03bb4f','#03bb4f'];


  checkStrength(password: string) {
    // 1
    let force = 0;

    // 2
    const regex = /[a-zA-Z0-9]{8}/;
    const lowerLetters = /[a-z]+/.test(password);
    const upperLetters = /[A-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const characters = regex.test(password);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, characters];

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 2 : 0;
    }

    // 5
    force += 2 * password.length + (password.length >= 20 ? 2 : 0);
    force += passedMatches * 20;

    // 6
    force = password.length <= 7 ? Math.min(force, 20) : force;

    // 7
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;
    force = passedMatches === 5 ? Math.min(force, 50) : force;
    force = passedMatches === 6 ? Math.min(force, 60) : force;
    force = passedMatches === 7 ? Math.min(force, 70) : force;
    force = passedMatches === 8 ? Math.min(force, 80) : force;

    return force;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;

    this.setBarColors(8, '#DDD');

    if (password) {
      const color = this.getColor(this.checkStrength(password));
      this.setBarColors(color.index, color.color);
      const pwdStrength = this.checkStrength(password);
      pwdStrength === 80 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);      
    }
  }

  private getColor(strength: number) {
    let index = 0;

    if (strength === 10) {
      index = 0;
    } else if (strength === 20) {
      index = 1;
    } else if (strength === 30) {
      index = 2;
    } else if (strength === 40) {
      index = 3;
    } else if (strength === 50) {
      index = 4;
    } else if (strength === 60) {
      index = 5;
    } else if (strength === 70) {
      index = 6;
    } else {
      index = 7;
    }


    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, color: string) {
    for (let i = 0; i < count; i++) {
      (this as any)['bar' + i] = color;
    }
  } 


}
