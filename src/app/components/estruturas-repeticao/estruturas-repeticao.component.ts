import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estruturas-repeticao',
  standalone: true,
  imports: [],
  templateUrl: './estruturas-repeticao.component.html',
  styleUrl: './estruturas-repeticao.component.css'
})
export class EstruturasRepeticaoComponent implements OnInit{

  ngOnInit(): void {
    this.useForLoop();
    this.useWhileLoop();
  }

  useForLoop(){
    const h1 = document.getElementById('tag-for')
    const cats = ["Pete", "Biggles", "Jasmin"];

    let myFavoriteCats = "My cats are called (usando for)";

    for(const cat of cats){
      myFavoriteCats += `${cat}, `;
    }

    if(h1 != null)
    h1.innerText = myFavoriteCats
  }

  useWhileLoop(){
    const h1 = document.getElementById('tag-while')
    const cats = ["Pete", "Biggles", "Jasmin"];

    let i = 0;
    let myFavoriteCats = "My cats are called (usando while)";

    while (i < cats.length){
      if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
      } else {
        myFavoriteCats += `${cats[i]},`;
      }
      i++
    }
    if(h1 != null)
    h1.innerText = myFavoriteCats
  }
}
