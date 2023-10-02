import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FooterConfig, HeaderConfig, RoutesMenuNavConfig } from './model/layout.models';

@Injectable()
export class LayoutService {
  private toogleMenuSubject = new BehaviorSubject<boolean>(false);
  toogleMenu$: Observable<boolean> = this.toogleMenuSubject.asObservable();
  constructor(private router: Router, private http: HttpClient) { }

  getHeaderData(): Observable<HeaderConfig> {
    const req: string = `${environment.apiUrlStatic}/layout/header`;
    return this.http.get<HeaderConfig>(req).pipe(
      catchError((error) => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(() => error);
      })
    );
  }

  getFooterData(): Observable<FooterConfig> {
    const req: string = `${environment.apiUrlStatic}/layout/footer`;
    return this.http.get<FooterConfig>(req).pipe(
      catchError((error) => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(() => error);
      })
    );
  }

  getRoutesWithoutCurrentRoute(currentRoute: string): RoutesMenuNavConfig[] {
    return this.router.config
      .filter((route) => route.path !== currentRoute)
      .map((route) => ({
        path: route.path,
        label: route.path === '' ? 'home' : route.path,
      })) as RoutesMenuNavConfig[];
  }

  setToogleMenuState(isOpen: boolean) {
    this.toogleMenuSubject.next(isOpen);
  }

}
