import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  phoneNumber!: string | null | undefined;
  accountNumber!: string | null | undefined;
  pin!: string | null | undefined;
  amount!: string | null | undefined;

  constructor() { }
}
