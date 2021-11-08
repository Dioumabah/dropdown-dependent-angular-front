import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DpeDce } from './Models/dpe.dce.model';
import { DspeQuartier } from './Models/dspe.quartier.model';
import { Ire } from './Models/ire.model';
import { IreService } from './Service/ire.service';
import { ServicesFrontEndService } from './Service/services-front-end.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dropdown-dependent-spring-angular';

  public ires: Ire[];
  public dpeDce: DpeDce[];
  public dspeQuartier: DspeQuartier[];

  constructor(private services: ServicesFrontEndService) { }

  ngOnInit() {
    this.getIreRegion();
    // this.onChangeIreRegion(1);
    // this.onChangeIreDspeQuartier(1);
  }

  getIreRegion(): void {
    this.services.getIreRegion().subscribe((response: Ire[]) => {
      this.ires = response;
    },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }

  onChangeIreRegion(ireId: number) {
    this.services.getDpeDce(ireId).subscribe((response: DpeDce[]) => {
      this.dpeDce = response;
    },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }


  onChangeIreDspeQuartier(dpeDceId: number) {
    this.services.getDspeQuartier(dpeDceId).subscribe((response: DspeQuartier[]) => {
      this.dspeQuartier = response;
    },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }



}
