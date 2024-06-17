import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isLoading: boolean = false;

  constructor() { }

  public setLoader(value: boolean){
    this.isLoading = value;
  }
}
