import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export type TypeField =
  | 'text'
  | 'date'
  | 'select'
  | 'autocomplete'
  | 'password'
  | 'buttonSelect'
  | 'range'
  | 'checkbox'
  | 'radio';

export interface ErrorField {
  keys: string[];
}

export interface DialogData {
  title: string;
}

export interface IconField {
  icon: string;
  color: string;
  svg?: boolean;
}

export interface CheckDeactivate {
  checkDeactivateChildren?: CheckDeactivate;

  checkDeactivate(
    currentRoute: ActivatedRouteSnapshot,
    curretnState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean>;
}
