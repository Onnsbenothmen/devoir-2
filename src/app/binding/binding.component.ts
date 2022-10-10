import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
titre :string="Apprendre le Databinding dans Angular 10";
  status : boolean = false;
  nom :string="Ons ben othmen";

constructor() {}

  ngOnInit(): void {
  }
   changerTitre()
   {
    this.titre = "Nouveau titre !";
   }
}
