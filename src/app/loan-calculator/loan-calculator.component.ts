import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  loanForm: FormGroup;

  //payment and interest initialized to prevent UI displaying 'null' on load
  monthlyPayment: number = 0;
  interestPaid: number = 0;
  loanAmount: number;
  numOfYears: number;
  interestRate: number;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //initializes form group using validators
    this.loanForm = this.fb.group({
      loanAmount: ['',[ Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      numOfYears: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      interestRate: ['', [ Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
    });
  }

  get form() {
    return this.loanForm.controls;
  };

  calculatePayments() {
    //intializes variables 
    let loanAmount = parseFloat(this.loanForm.value.loanAmount);
    let numOfYears = parseFloat(this.loanForm.value.numOfYears);
    let interestRate = parseFloat(this.loanForm.value.interestRate);
    let actualRate = ((interestRate / 100) / 12);
    let numOfMonths = (numOfYears * 12);
    //calculates monthly payment
    this.monthlyPayment = (((loanAmount * actualRate * Math.pow((1 + actualRate), numOfMonths)))/((Math.pow((1 + actualRate), numOfMonths)) - 1));
    //calculates interest paid
    this.interestPaid = ((this.monthlyPayment * numOfMonths) - loanAmount);
  }

  clearForm() {
    this.loanForm.reset();
    this.interestPaid = 0;
    this.monthlyPayment = 0;

  }
}
