import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { CostumesService } from '../costumes.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit { 
   constructor(private dataService: DataService , private costumesService : CostumesService){}

  panier : any = [] ;
  totalPanier: any;
  
  articles = this.costumesService.articles;

  removeArt(id :any){
    let rm = this.panier.indexOf(id);
    this.panier.splice(rm, 1);
    this.dataService.insertPanier.next(this.panier);
  }
  ngOnInit() {
    this.dataService.insertPanier.subscribe(status=>this.panier = status);
    this.dataService.calcPanier.subscribe(status=>this.totalPanier = status);
  }
}
