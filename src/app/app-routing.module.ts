/**
 * Name: Trevor McLaurine
 * Date: 10/7/2023
 * Assignment: Loan App
 * File: app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';


const routes: Routes = [
  {
    path: '', 
    component: LoanCalculatorComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }