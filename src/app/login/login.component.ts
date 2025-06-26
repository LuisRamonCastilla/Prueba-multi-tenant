import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private tenantService: TenantService, private router: Router) {}

  login(): void {
    this.tenantService.setTenantFromUsername(this.username);
    const key = this.tenantService.tenantKey;
    if (key) {
      this.router.navigate([key]);
    }
  }
}
