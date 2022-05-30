import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-artigo',
  templateUrl: './create-artigo.page.html',
  styleUrls: ['./create-artigo.page.scss'],
})
export class CreateArtigoPage implements OnInit {

  public createArtigo: any;
  public dataPublicacoes: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.createArtigo = this.router.getCurrentNavigation().extras.state.dadosFilme;
        console.log("BACANO "+this.createArtigo.connection);
      }
    })
   }

  ngOnInit() {
  }

}
