import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  faTable,
  faEdit,
  faChartLine,
  faCalendarAlt,
  faPuzzlePiece,
  faTh,
  faReceipt,
  faLayerGroup,
  faInbox,
  faCircle,
  faUserShield,
  faCog,
  faFileAlt,
  faKey,
  faUserPlus,
  faUserSecret,
  faUsers,
  faMagic,
  faHome,
  faStore,
  faSuitcase,
  faCheckSquare,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

import { NavigationOptions } from '../models/navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  getNavigationItems(): Observable<NavigationOptions[]> {
    return of([ 
      {
        title: 'Main',
        icon: { name: faLayerGroup },
        items: [
          {
            icon: { name: faHome },
            title: 'Página Inicio',
            link: '/home',
          },
          {
            title: 'Registros',
            icon: { name: faChartLine },
            items: [
              {
                title: 'Usuarios',
                link: '/registros/user',
                icon: { letter: 'V' },
              },
              {
                title: 'Empresa',
                link: '/registros/empresa',
                icon: { letter: 'V' },
              },
              {
                title: 'Colaborador',
                link: '/registros/colaborador',
                icon: { letter: 'C' },
              },
              {
                title: 'Rol',
                link: '/registros/rol',
                icon: { letter: 'S' },
              },
              // {
              //   title: 'CRM',
              //   link: '/dashboards/crm',
              //   icon: { letter: 'C' },
              // },
              // {
              //   title: 'Social',
              //   link: '/dashboards/social',
              //   icon: { letter: 'S' },
              // },
            ],
          },
          // {
          //   icon: { name: faTable },
          //   title: 'UI Elements',
          //   items: [
          //     { link: '/ui-elements/accordion', title: 'Accordion', icon: { letter: 'A' } },
          //     { link: '/ui-elements/avatars', title: 'Avatars', icon: { letter: 'V' } },
          //     { link: '/ui-elements/alerts', title: 'Alerts', icon: { letter: 'L' } },
          //     { link: '/ui-elements/buttons', title: 'Buttons', icon: { letter: 'B' } },
          //     { link: '/ui-elements/button-group', title: 'Button Group', icon: { letter: 'G' } },
          //     { link: '/ui-elements/colors', title: 'Colors', icon: { letter: 'C' } },
          //     { link: '/ui-elements/dropdowns', title: 'Dropdown', icon: { letter: 'D' } },
          //     { link: '/ui-elements/modals', title: 'Modals', icon: { letter: 'M' } },
          //     { link: '/ui-elements/navigations', title: 'Navigations', icon: { letter: 'N' } },
          //     { link: '/ui-elements/popover', title: 'Popover', icon: { letter: 'V' } },
          //     { link: '/ui-elements/progress', title: 'Progress', icon: { letter: 'P' } },
          //     { link: '/ui-elements/tabs', title: 'Tabs', icon: { letter: 'T' } },
          //     { link: '/ui-elements/tooltip', title: 'Tooltip', icon: { letter: 'O' } },
          //     { link: '/ui-elements/typographic', title: 'Typographic', icon: { letter: 'Y' } },
          //   ],
          // },
        ],
      },
      // {
      //   title: 'Apps',
      //   icon: { name: faTh },
      //   items: [
      //     {
      //       title: 'Billing',
      //       icon: { name: faReceipt },
      //       items: [
      //         { link: '/billing', title: 'Invoices List', icon: { letter: 'L' } },
      //         { link: '/billing/invoice/demo-invoice', title: 'Invoice', icon: { letter: 'I' } },
      //       ],
      //     },
      //     {
      //       link: '/calendar',
      //       title: 'Calendar',
      //       icon: { name: faCalendarAlt },
      //     },
      //     {
      //       title: 'Contacts',
      //       icon: { name: faUsers },
      //       items: [
      //         {
      //           link: '/contacts/list',
      //           title: 'List View',
      //           icon: { letter: 'L' },
      //         },
      //         {
      //           link: '/contacts/grid',
      //           title: 'Grid View',
      //           icon: { letter: 'G' },
      //         },
      //         {
      //           link: '/contacts/contact-id/details',
      //           title: 'Contact Details',
      //           icon: { letter: 'D' },
      //         },
      //         // TODO: Coming Soon
      //         /*,
      //         {
      //           link: '/contacts/new',
      //           title: 'Add Contact',
      //           icon: { letter: 'N' }
      //         },
      //         {
      //           link: '/contacts/contact-id/edit',
      //           title: 'Edit Contact',
      //           icon: { letter: 'E' }
      //         },
      //         {
      //           link: '/contacts/contact-id/delete',
      //           title: 'Delete',
      //           icon: { letter: 'D' }
      //         } */
      //       ],
      //     },
      //     {
      //       link: '/inbox',
      //       title: 'Inbox',
      //       icon: { name: faInbox },
      //     },
      //     {
      //       title: 'Store',
      //       icon: { name: faStore },
      //       items: [
      //         { link: '/store/home', title: 'Store home', icon: { letter: 'H' } },
      //         { link: '/store/categories', title: 'Categories', icon: { letter: 'C' } },
      //         //{ link: '/store/categories/category-id', title: 'Category', icon: { letter: 'I' } },
      //         { link: '/store/products', title: 'Products', icon: { letter: 'S' } },
      //         { link: '/store/products/product-id', title: 'Product Details', icon: { letter: 'D' } },
      //       ],
      //     },
      //     // TODO: Coming Soon
      //     {
      //       link: '/projects/home',
      //       title: 'Projects',
      //       icon: { name: faSuitcase },
      //     },
      //     {
      //       link: '/todo/home',
      //       title: 'Todo',
      //       icon: { name: faCheckSquare },
      //     },
      //     {
      //       link: '/tickets/home',
      //       title: 'Tickets',
      //       icon: { name: faLifeRing },
      //     },
      //   ],
      // },
      // {
      //   title: 'Components',
      //   icon: { name: faPuzzlePiece },
      //   items: [
      //     //TODO: Multiple demos for charts libraries
      //     /** {
      //       icon: { name: faChartLine },
      //       title: 'Charts',
      //       items: [
      //         { link: '/charts/amcharts', title: 'amcharts', icon: { letter: 'A' } },
      //         { link: '/charts/chartsjs', title: 'Chartsjs', icon: { letter: 'C' } }
      //       ]
      //     }, **/
      //     {
      //       icon: { name: faEdit },
      //       title: 'Editors',
      //       items: [
      //         {
      //           title: 'Quill Editor',
      //           icon: { letter: 'Q' },
      //           items: [
      //             {
      //               level: 2,
      //               link: '/editors/quill/basic',
      //               title: 'Default',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/editors/quill/bubble',
      //               title: 'Bubble Editor',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/editors/quill/reactive-forms',
      //               title: 'Reactive Forms',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //           ],
      //         },
      //         {
      //           title: 'CKEditor',
      //           icon: { letter: 'K' },
      //           items: [
      //             {
      //               level: 2,
      //               link: '/editors/ckeditor/classic',
      //               title: 'Classic Build',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/editors/ckeditor/binding-options',
      //               title: 'Binding Options',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       icon: { name: faWpforms },
      //       title: 'Forms',
      //       items: [
      //         {
      //           title: 'Form Controls',
      //           icon: { letter: 'C' },
      //           items: [
      //             {
      //               level: 2,
      //               link: '/form-components/basic-inputs',
      //               title: 'Basic Inputs',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/input-groups',
      //               title: 'Input Groups',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/checkboxes',
      //               title: 'Checkboxes',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/radios',
      //               title: 'Radios',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //           ],
      //         },

      //         {
      //           title: 'Custom Widgets',
      //           icon: { letter: 'W' },
      //           items: [
      //             {
      //               level: 2,
      //               link: '/form-components/date-pickers',
      //               title: 'Date Pickers',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/file-uploaders',
      //               title: 'File Uploaders',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/selects',
      //               title: 'Selects',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/sliders',
      //               title: 'Sliders',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/copy-paste',
      //               title: 'Copy & Paste',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/masked-inputs',
      //               title: 'Masked Inputs',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //             {
      //               level: 2,
      //               link: '/form-components/radio-cards',
      //               title: 'Radio Cards',
      //               icon: { name: faCircle, size: 'xs' },
      //             },
      //           ],
      //         },

      //         { link: '/form-components/sticky-bar', title: 'Sticky Bar', icon: { letter: 'T' } },
      //       ],
      //     },

      //     // TODO: Add Maps
      //     /** {
      //       icon: { name: faMapMarkedAlt },
      //       title: 'Maps',
      //       items: [
      //         { link: '/maps/leaflet', title: 'Leaflet', icon: { letter: 'L' } },
      //         { link: '/maps/google', title: 'Google Maps', icon: { letter: 'G' } }
      //       ]
      //     }, **/
      //     {
      //       icon: { name: faMagic },
      //       title: 'Wizards',
      //       items: [
      //         {
      //           icon: { letter: 'B' },
      //           title: 'Bulleted Steps',
      //           link: '/wizards/bulleted-steps',
      //         },
      //         {
      //           icon: { letter: 'N' },
      //           title: 'Bulleted Nav',
      //           link: '/wizards/bulleted-nav',
      //         },
      //         {
      //           icon: { letter: 'C' },
      //           title: 'Circled Nav',
      //           link: '/wizards/circled',
      //         },
      //         {
      //           icon: { letter: 'T' },
      //           title: 'Tabbed Nav',
      //           link: '/wizards/tabbed',
      //         },
      //       ],
      //     },
      //     {
      //       icon: { name: faUserShield },
      //       title: 'Management',
      //       items: [{ link: '/management/user-idle', title: 'User Idle', icon: { letter: 'I' } }],
      //     },
      //     {
      //       icon: { name: faTable },
      //       title: 'Tables',
      //       items: [
      //         {
      //           title: 'Basic',
      //           icon: { letter: 'B' },
      //           items: [
      //             { level: 2, link: '/data-tables/basic', title: 'Basic Table', icon: { letter: 'B' } },
      //             { level: 2, link: '/data-tables/styles', title: 'Table Styles', icon: { letter: 'S' } },
      //             { level: 2, link: '/data-tables/fixed-header', title: 'Fixed Header', icon: { letter: 'F' } },
      //             { level: 2, link: '/data-tables/checkbox', title: 'Checkbox', icon: { letter: 'K' } },
      //           ],
      //         },
      //         {
      //           title: 'Advanced',
      //           icon: { letter: 'A' },
      //           items: [
      //             { level: 2, link: '/data-tables/row-details', title: 'Row Details', icon: { letter: 'D' } },
      //             { level: 2, link: '/data-tables/grouping', title: 'Grouping', icon: { letter: 'G' } },
      //             { level: 2, link: '/data-tables/custom-templates', title: 'Custom Templates', icon: { letter: 'T' } },
      //             { level: 2, link: '/data-tables/filtering', title: 'Filtering', icon: { letter: 'F' } },
      //           ],
      //         },
      //         {
      //           title: 'Responsive',
      //           icon: { letter: 'R' },
      //           items: [
      //             {
      //               level: 2,
      //               link: '/data-tables/responsive-template',
      //               title: 'Responsive Template',
      //               icon: { letter: 'T' },
      //             },
      //             {
      //               level: 2,
      //               link: '/data-tables/responsive-expandable',
      //               title: 'Responsive Expandable',
      //               icon: { letter: 'X' },
      //             },
      //           ],
      //         },
           
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Pages',
      //   icon: { name: faFileAlt },
      //   items: [
      //     {
      //       icon: { name: faUserSecret },
      //       title: 'Auth',
      //       items: [
      //         {
      //           icon: { name: faKey },
      //           title: 'Login',
      //           link: '/login',
      //           target: '_blank',
      //         },
      //         {
      //           icon: { name: faUserPlus },
      //           title: 'Register',
      //           link: '/register',
      //           target: '_blank',
      //         },
      //         {
      //           icon: { name: faUserShield },
      //           title: 'Forgot Pass',
      //           link: '/forgot',
      //           target: '_blank',
      //         },
      //       ],
      //     },
      //     {
      //       icon: { name: faCog },
      //       title: 'Settings',
      //       link: '/settings',
      //     },
      //   ],
      // },
    ]);
  }
}
