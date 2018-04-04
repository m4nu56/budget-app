import { Component, OnInit } from '@angular/core';
import {Mouvement} from "../mouvement";

@Component({
  selector: 'app-list-mouvement',
  templateUrl: './list-mouvement.component.html',
  styleUrls: ['./list-mouvement.component.css']
})
export class ListMouvementComponent implements OnInit {

  listMouvement : Array<Mouvement>;

  constructor() { }

  ngOnInit() {

    this.listMouvement = [
      {id: 1, category: 'marché', montant: -100},
      {id: 2, category: 'transport', montant: 50},
      {id: 3, category: 'crèche', montant: -70},
      {id: 4, category: 'supermarché', montant: -150}
    ];


  }

}
