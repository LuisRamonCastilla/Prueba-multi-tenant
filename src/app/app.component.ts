import { Component, OnInit, Renderer2 } from '@angular/core';
import { TenantService } from './services/tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tenantService: TenantService, private renderer: Renderer2) {}

  ngOnInit(): void {
    const key = this.tenantService.tenantKey;
    if (key) {
      this.renderer.addClass(document.body, `theme-${key}`);
    }
  }
}
