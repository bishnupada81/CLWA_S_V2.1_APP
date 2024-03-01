import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-enter-pin',
  templateUrl: './enter-pin.component.html',
  styleUrls: ['./enter-pin.component.css']
})
export class EnterPinComponent implements OnInit {

  constructor(private _router: Router, public dialogRef:MatDialog, private dataService : DataService) { }

  ngOnInit(): void {
  }

  public setPinForm = new FormGroup({
    setPin: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(6),
         Validators.minLength(6)]
         ),
  })

  public get setPin() {
    return this.setPinForm.get('setPin');
  }

  public setPinFormSubmit() : void{

    // Swal.fire({

    //   title: "Withdraw Successfull",
    //   confirmButtonText: "Okay",

    // }).then((result) => {

    //   this._router.navigate(['/']);

    // });
     this.dataService.pin = this.setPin?.value;
     console.log(this.dataService.pin);
     this.dialogRef.open(PopUpComponent, {
       width: '40%',
       autoFocus: false,
       restoreFocus: false,
     })
  }

}
