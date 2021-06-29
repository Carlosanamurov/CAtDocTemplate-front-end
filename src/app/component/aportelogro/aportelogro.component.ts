import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { AportesService } from 'src/app/services/aportes.service';

@Component({
	selector: 'app-ngbd-pagination',
	templateUrl: './aportelogro.component.html'
})
export class aportelogrocomponent implements OnInit {
	constructor( private aportesService: AportesService ){}

	ngOnInit(): void {
		this.obteberaportes();
	}
	 obteberaportes(){
		 this.aportesService.getAporte().subscribe(data =>{
			 console.log(data);
		 }, error =>{
			 console.log(error);
		 })
		 
	 }
}
