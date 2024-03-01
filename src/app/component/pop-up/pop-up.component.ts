import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  qrdata : string ='';
  info !: string | null | undefined;

  constructor(private _router: Router,private _dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dataService : DataService) { }

  ngOnInit(): void {
  }

  public redirection() : void{
    this.closePopup();
     Swal.fire({

       title: "Withdraw Successfull",
       confirmButtonText: "Okay",

     }).then((result) => {

       this._router.navigate(['/']);

     });
  }

  public closePopup(): void{
    this._dialogRef.close();
  }

  generateQRCode() : string
  {

    if(this.dataService.phoneNumber !== null && this.dataService.phoneNumber !== undefined
      && this.dataService.accountNumber !== null && this.dataService.accountNumber !== undefined
      && this.dataService.pin !== null && this.dataService.pin !== undefined
      && this.dataService.amount !== null && this.dataService.amount !== undefined)
    {
      this.info = this.dataService.phoneNumber + this.dataService.accountNumber + this.dataService.pin + this.dataService.amount;
    }

    if(this.info === null || this.info === undefined)
    {
       return this.qrdata ;
    }
    else
    {
      this.qrdata = this.info;
      // console.log(this.qrdata);
      return this.qrdata;
    }
  }

}
