import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export type TenantKey = keyof typeof environment.tenants;

@Injectable({ providedIn: 'root' })
export class TenantService {
  private currentTenant: TenantKey | null = null;

  setTenantFromUsername(username: string): void {
    const match = username.match(/_(\w+)$/);
    if (match && (match[1] as TenantKey) in environment.tenants) {
      this.currentTenant = match[1] as TenantKey;
    }
  }

  get tenant() {
    return this.currentTenant ? environment.tenants[this.currentTenant] : null;
  }

  get tenantKey(): TenantKey | null {
    return this.currentTenant;
  }
}
