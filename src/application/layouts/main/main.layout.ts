import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, of} from 'rxjs';

interface MenuItemPresentation {
  label: string,
  path: string
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.layout.html'
})
export class MainLayout {
  public readonly menuItems$: Observable<MenuItemPresentation[]> = of([
    {
      label: 'Home',
      path: ''
    },
    {
      label: 'Transactions',
      path: 'transactions'
    },
    {
      label: 'Dashboard',
      path: 'dashboard'
    },
    {
      label: 'Drivers',
      path: 'drivers'
    },
    {
      label: 'Tribes',
      path: 'tribes'
    },
    {
      label: 'Fares',
      path: 'fares'
    },
    {
      label: 'Clients',
      path: 'clients'
    },
    {
      label: 'Schedule',
      path: 'schedules'
    },
    {
      label: 'Locations',
      path: 'locations'
    },
    {
      label: 'Documents',
      path: 'documents'
    },
    {
      label: 'Refunds',
      path: 'refunds'
    },
    {
      label: 'Invoicing',
      path: 'invoicing'
    },
    {
      label: 'Accounting',
      path: 'accounting'
    },
    {
      label: 'Insurance',
      path: 'insurance'
    },
    {
      label: 'Toolbox',
      path: 'toolbox'
    },
    {
      label: 'Partners',
      path: 'partners'
    },
    {
      label: 'Notifications',
      path: 'notifications'
    },
    {
      label: 'Chat',
      path: 'chat'
    },
    {
      label: 'Help',
      path: 'help'
    },
    {
      label: 'Change your offer',
      path: 'upgrade'
    }
  ])
}
