import {EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DisparadorDataService {
  @Output() disparadorData: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
