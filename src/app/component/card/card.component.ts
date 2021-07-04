import { Component ,OnInit} from '@angular/core';

import { CU2Service } from 'src/app/services/CU2/cu2.service';

@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent implements OnInit{
  docentes: any[] = [];
  constructor(private CU2Service: CU2Service) { }
  ngOnInit(
  ): void {
    this.listar();
     }

     listar():void{
      this.CU2Service.getDocentesParticipantes().subscribe(data =>{
      
        this.docentes=data;
        console.log(this.docentes);
      }, error =>{
        console.log(error);
      })
    }

}
