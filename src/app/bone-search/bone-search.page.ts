import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bone-search',
  templateUrl: './bone-search.page.html',
  styleUrls: ['./bone-search.page.scss'],
})
export class BoneSearchPage implements OnInit {

  public boneSearch: any;
  public dataPublicacoes: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
   this.rotaAtiva.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.boneSearch = this.router.getCurrentNavigation().extras.state.dadosFilme;
       console.log("BACANO "+this.boneSearch.connection);
     }
   })
  }

  ngOnInit(): void {
    if(this.boneSearch.connection == "bone"){
      fetch('./assets/data/bone.json')
      .then(res => res.json())
      .then(json => {
          this.dataPublicacoes = json;})
    }
    
    if(this.boneSearch.connection == "camisola"){
      fetch('./assets/data/camisola.json')
      .then(res => res.json())
      .then(json => {
          this.dataPublicacoes = json;})
    }
    if(this.boneSearch.connection == "caneca"){
      fetch('./assets/data/caneca.json')
      .then(res => res.json())
      .then(json => {
          this.dataPublicacoes = json;})
    }
  }
}
