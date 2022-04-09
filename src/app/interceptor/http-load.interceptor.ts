import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { FonctionService } from '../service/fonction.service';

@Injectable()
export class HttpLoadInterceptor implements HttpInterceptor {

  constructor(private fonctionService : FonctionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.fonctionService.showLoading();

    return next.handle(request).pipe(
      finalize(()=> this.fonctionService.hideLoading())
    );
  }
}
