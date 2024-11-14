import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const serverUrl = 'https://api.fullstackpro.es/products-example';
  const clonedReq = req.clone({
    url: `${serverUrl}/${req.url}`,
  });
  return next(clonedReq);
};