/**
 * Name: Trevor McLaurine
 * Date: 10/7/2023
 * Assignment: Loan App
 * File: loan-details.component.ts
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}