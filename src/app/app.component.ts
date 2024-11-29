import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService : DataService){

  }
  menuPanier : boolean | undefined;
  ngOnInit() {
    this.dataService.togglePanier.subscribe(status=>this.menuPanier = status);
  }       
}
