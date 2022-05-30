import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private dataFilmes: any;
  constructor(private router: Router) {
    this.dataFilmes = {
      "bone": {
        "id": "1",
        "title": "Boné",
        "descricao": "bone é um boné hahahahahahahahahahahhaahahahah",
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
    this.router.navigate(['create-artigo'], infoDoFilme);
  }
}