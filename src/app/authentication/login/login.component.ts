import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../authentication.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public auth: Authentication = {};

  public onSubmit() {
    if (this.auth.username === '1' && this.auth.password === '1') {
      alert('usuario autentificado');
      this._router.navigateByUrl('/dashboard');
    } else {
      alert('usuario o contrasenna incorrecto');
    }
  }
  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
