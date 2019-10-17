import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  login(credentials) {
    return this.http.post(this.url, credentials);
  }

  logOut(credentials) {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token && JSON.parse(token).name) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token && JSON.parse(token).isAdmin === 'true') {
      return true;
    }
    return false;
  }

  currentUser(): any {
    const token = localStorage.getItem('token');
    if (token && JSON.parse(token).name) {
      console.log(JSON.parse(token).name);
      return JSON.parse(token).name;
    }
  }
}
