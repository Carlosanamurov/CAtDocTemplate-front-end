import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

import { Aportelogro } from 'src/app/models/aportelogro';
import { AportesService } from 'src/app/services/aportes.service';

@Component({
	selector: 'app-ngbd-pagination',
	templateUrl: './aportelogro.component.html'
})
export class aportelogrocomponent implements OnInit {
	aportes: Aportelogro[] = [];
	aporte: Aportelogro={
		idportelogro: 0,
		institucion:'',
		idpais: 0,
		fechalogro: '',
		detallelogro:'',
		archivologro:'',
		iddocente:0
	};
	constructor( private aportesService: AportesService ){}


	ngOnInit(): void {
		this.obteberaportes();
	}
	 obteberaportes(){
		 this.aportesService.getAporte().subscribe(data =>{
			 console.log(data);
			 this.aportes= data;
		 }, error =>{
			 console.log(error);
		 })
		 
	 }
	 create(){
		 console.log(this.aporte); 
	 }
}
