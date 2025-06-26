import { Component } from '@angular/core';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-home-tarragona',
  templateUrl: './home-tarragona.component.html'
})
export class HomeTarragonaComponent {
  constructor(public tenantService: TenantService) {}
}
