import { Injectable } from '@angular/core';
import {HeaderOptions} from '../header/header-options';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerOptions: BehaviorSubject<HeaderOptions>;

  constructor() {
    this.headerOptions = new BehaviorSubject<HeaderOptions>(
      new HeaderOptions(false, []));
  }

  getHeaderOptions(): Observable<HeaderOptions> {
    return this.headerOptions.asObservable();
  }

  setToolbarOptions(options: HeaderOptions): void {
    this.headerOptions.next(options);
  }
}
