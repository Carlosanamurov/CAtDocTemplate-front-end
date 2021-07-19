import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { data } from 'jquery';

import { Aportelogro } from 'src/app/models/aportelogro';
import { AportesService } from 'src/app/services/aportes.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
import {finalize} from 'rxjs/operators';

@Component({
	selector: 'app-ngbd-pagination',
	templateUrl: './aportelogro.component.html'
})
export class aportelogrocomponent implements OnInit {
	aportes: Aportelogro[] = [];
	aporte: Aportelogro = new Aportelogro();
	aporte2: Aportelogro = new Aportelogro();
	constructor(private storage: AngularFireStorage, private aportesService: AportesService , private router:Router){}
	@ViewChild('imageDoc') inputImageDoc?: ElementRef;
	uploadPercent!: Observable<any>;
	urlImage!: Observable<any>;

	ngOnInit(): void {
		this.obteberaportes();
	}

	onUpload(e:any){
	
		   const id =Math.random().toString(36).substring(2);
		   const file = e.target.files[0];
		   const filePath=`Evidencias/profile_${id}`;
		   const ref = this.storage.ref(filePath);
		   const task = this.storage.upload(filePath,file);
		   this.uploadPercent = task.percentageChanges();
		   task.snapshotChanges().pipe(  finalize(() => this.urlImage = ref.getDownloadURL())  ).subscribe();
		   
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
		 delete this.aporte.idportelogro;
		 delete this.aporte.iddocente;
		 this.aporte.archivologro=this.inputImageDoc?.nativeElement.value;
		 console.log(this.aporte); 
		 this.aportesService.saveAporte(this.aporte)
		 .subscribe(
			 res => {
				 console.log(res);
				 this.obteberaportes();
				 this.limpiarformulario();
			 },
			 err => console.error(err)
		 )
		
	 }
	 view(url:any){
		 this.aporte2.archivologro=url;
		 console.log(this.aporte2.archivologro)
		this.obteberaportes();
		 
	 }
	 close(){
		 
		 this.obteberaportes();
	 }

	 del(id:String){
		swal.fire({
			title: 'Estas seguro?',
			text: "No podras reverti esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete!'
		  }).then((result) => {
			if (result.isConfirmed) {
				this.aportesService.deleteAporte(id).subscribe(
					res=> {
						console.log(res);
						this.obteberaportes();
						swal.fire(
						   'Eliminado!',
						   'El registro ha sido eliminado.',
						   'success') 
					},
					err => console.error(err)
				)
			}
		  })



		 console.log(id)
		
	 }

	 limpiarformulario(){
		 
			 this.aporte.institucion="";
			 this.aporte.detallelogro="";
			 this.aporte.archivologro="";
			 this.aporte.fechalogro="";
			 
		 
	 }
}
