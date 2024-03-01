import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router, private dataService : DataService) { }

  ngOnInit(): void {
  }

  public mobileVerification = new FormGroup({
    phoneNumber: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(10),
         Validators.minLength(10)]
         ),
  })

  public get phoneNumber() {
    return this.mobileVerification.get('phoneNumber');
  }

  public mobileVerificationFormSubmit(): void {

    this.dataService.phoneNumber = this.phoneNumber?.value;
    console.log(this.dataService.phoneNumber);

    this._router.navigateByUrl('/account');
    // this.dialogRef.open(PopUpComponent, {
    //   width: '40%',
    //   autoFocus: false,
    //   restoreFocus: false,
    // })
}


}
