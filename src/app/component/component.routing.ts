import { Routes } from '@angular/router';


import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { aportelogrocomponent } from './aportelogro/aportelogro.component';



export const ComponentsRoutes: Routes = [
	
	{
		path: '',
		children: [
			
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: '',
					urls: [
						{ title: 'Capacidad Docente', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Capacidada  Docente' }
					]
				}
			},

			{
				path: 'aportesylogros',
				component: aportelogrocomponent,
				data: {
					title: 'Aportes y Capacidad',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'aportesylogros' }
					]
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Capacidad Docente',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Accordion' }
					]
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Desempeño Docente',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Alert' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Investigación',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Vinculacion Con El Medio',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Vinculacion con El medio' }
					]
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Capacidad Profesional',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Modal' }
					]
				}
			},
			{
				path: 'buttons',
				component: ButtonsComponent, 
				data: {
					title: 'Button',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				},
				
			}
		]
	}
];
