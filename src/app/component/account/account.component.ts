import { Component, ElementRef,OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('teams') teams!:ElementRef


  constructor(private _router: Router, private dataService : DataService) { }

  ngOnInit(): void {
  }
  public accountVerification = new FormGroup({
    account: new FormControl("917010013737890",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(15),
         Validators.minLength(15)]
         ),
  })

  accounts = [917010013737890, 917010013737892, 917010013737893];
  default = 917010013737800

  selectedAccount= 23 ;
  onSelected(): void{
    this.selectedAccount = this.teams.nativeElement.value;
    this.dataService.accountNumber = this.selectedAccount.toString();
    this._router.navigateByUrl('/amount');
  }


  public get account() {
    return this.accountVerification.get('account')
  }

  public accountVerificationFormSubmit() : void{
    console.log();
   
  }

}
