import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  ans: string = '';
  zero: string = '0';
  firstOperator: string = '';
  secondOperator: string = '';
  temp: number = 0;
  operation: string = '';
  chosenOperation: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log("Hey from Calculator");
  }

  appendDigit(digit: string) {
    this.zero = '';
    this.firstOperator = this.firstOperator.concat(digit);
    this.ans = this.firstOperator;
  }

  delete() {
    this.zero = '';
    this.firstOperator = this.firstOperator.slice(0, -1);
    this.ans = this.firstOperator;
  }

  reset() {
    this.ans = '';
    this.zero = '0';
    this.firstOperator = '';
    this.secondOperator = '';
    this.chosenOperation = false;
  }

  showResult() {
    switch(this.operation) { 
      case '+': { 
         this.temp = +this.firstOperator + +this.secondOperator; 
         this.chosenOperation = false;
         this.ans = this.temp.toString();
         break; 
      } 
      case '-': { 
        this.temp = +this.secondOperator - +this.firstOperator; 
        this.chosenOperation = false;
        this.ans = this.temp.toString();
        break; 
     } 
      case '/': { 
        this.temp = +this.secondOperator / (+this.firstOperator); 
        this.chosenOperation = false;
        this.ans = this.temp.toString(); 
         break; 
      } 
      case '*': { 
        this.temp = +this.secondOperator * (+this.firstOperator); 
        this.chosenOperation = false;
        this.ans = this.temp.toString(); 
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   }
    this.ans = this.temp.toString();
  }

  substract() {
    this.secondOperator = this.firstOperator;
    this.operation = '-';
    this.zero = '0';
    this.firstOperator = '';
    this.ans = '';
    this.chosenOperation = true;
  }

  multiply() {
    this.secondOperator = this.firstOperator;
    this.operation = '*';
    this.zero = '0';
    this.firstOperator = '';
    this.ans = '';
    this.chosenOperation = true;
  }

  divide() {
    this.secondOperator = this.firstOperator;
    this.operation = '/';
    this.zero = '0';
    this.firstOperator = '';
    this.ans = '';
    this.chosenOperation = true;
  }

  add() {
    this.secondOperator = this.firstOperator;
    this.operation = '+';
    this.zero = '0';
    this.firstOperator = '';
    this.ans = '';
    this.chosenOperation = true;
  }

}
