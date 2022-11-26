import { provideCloudinaryLoader } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountCalculateService {

  constructor() { }
  writeCount(countVar:number)
  {
    console.log(countVar)
  }
}
