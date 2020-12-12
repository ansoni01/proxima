import { Component, OnInit } from '@angular/core';
import { BaseComponent, ColorScheme } from '@core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'prx-crm-statistics',
  templateUrl: './crm-statistics.component.html',
  styleUrls: ['./crm-statistics.component.scss'],
})
export class CrmStatisticsComponent extends BaseComponent implements OnInit {
  icons = {
    dw: faAngleDown,
    up: faAngleUp,
  };

  metrics = [
    {
      title: 'Payments',
      scheme: ColorScheme.Success,
      value: 9500,
      pipe: 'currency',
      percent: 58,
    },
    {
      title: 'Revenue',
      scheme: ColorScheme.Danger,
      value: 2100,
      pipe: 'currency',
      percent: 32.01,
    },
    {
      title: 'Open Projects',
      scheme: ColorScheme.Warning,
      value: 43,
      percent: 85,
    },

    {
      title: 'Total Orders',
      scheme: ColorScheme.Info,
      value: 147,
      percent: 51.07,
    },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
