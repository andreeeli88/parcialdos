import { CanActivateFn } from '@angular/router';

export const guardianGuard: CanActivateFn = (route, state) => {
  return true;
};
export const adminGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && rol === 'admin';
  }
  return false;
};
export const meseroGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let acceso = sessionStorage.getItem('login');
    let rol = sessionStorage.getItem('role');
    return acceso === 'true' && rol === 'meseo';
  }
  return false;
};
