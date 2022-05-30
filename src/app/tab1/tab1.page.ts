import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private dataFilmes: any;
  constructor(private router: Router) {
    this.dataFilmes = {
      "bone": {
        "id": "1",
        "title": "Boné",
        "connection": "bone",
        "release_year": "1995",
        "img": "bone.png"
        },
      "camisola":{
          "id": "1",
          "title": "Camisola",
          "connection": "camisola",
          "release_year": "1995",
          "img": "camisola.png"
        },
        "caneca":{
          "id": "1",
          "title": "Caneca",
          "connection": "caneca",
          "release_year": "1995",
          "img": "caneca.png"
        },  
    }
  }

  public verPublicacoes (filmekey: string) {
    let infoDoFilme: NavigationExtras;
    infoDoFilme = {
      state: {
        dadosFilme: this.dataFilmes[filmekey]
      }
    }
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['bone-search'], infoDoFilme);
  }
}

  
