import { Component } from '@angular/core';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-home-andalucia',
  templateUrl: './home-andalucia.component.html'
})
export class HomeAndaluciaComponent {
  constructor(public tenantService: TenantService) {}
}
