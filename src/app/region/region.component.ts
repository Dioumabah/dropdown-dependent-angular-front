import { Component, OnInit } from '@angular/core';
import { Ire } from '../Models/ire.model';
import { RegionService } from '../Service/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  ires: Ire[] | null = null;

  constructor(private regionService: RegionService) {
  }

  getIres() {
    this.regionService.getIres().subscribe(data => {
      this.ires = data;
    });
  }

  ngOnInit(): void {
    
  }

}
