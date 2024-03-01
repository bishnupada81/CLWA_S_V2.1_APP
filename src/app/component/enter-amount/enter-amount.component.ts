import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-enter-amount',
  templateUrl: './enter-amount.component.html',
  styleUrls: ['./enter-amount.component.css']
})
export class EnterAmountComponent implements OnInit {

  constructor(private _router: Router, private dataService:DataService) { }

  ngOnInit(): void {
  }


  public amountVerification = new FormGroup({
    amount: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.minLength(1)]
         ),
  })

  public get amount() {
    return this.amountVerification.get('amount');
  }

  public amountFormSubmit() : void{
    this.dataService.amount = this.amount?.value;
    console.log(this.dataService.amount);
    this._router.navigateByUrl('/pin');
  }
}
