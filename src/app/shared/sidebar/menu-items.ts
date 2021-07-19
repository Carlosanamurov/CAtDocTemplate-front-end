import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Formacion Academica',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/component/card',
    title: 'Docente Participante',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/accordion',
    title: 'Capacidad Docente',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/alert',
    title: 'desempeño Docente',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Investigaciones',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/dropdown',
    title: 'Vinculación con el medio',
    icon: 'mdi mdi-cash',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/modal',
    title: 'Capacidad Profesional',
    icon: 'mdi mdi-calendar',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/aportesylogros',
    title: 'Aportes y Capacidad',
    icon: 'mdi mdi-trophy',
    class: '',
    extralink: false,
    submenu: []
  }
  
];
