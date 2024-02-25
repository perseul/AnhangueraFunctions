import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions-typescript',
  standalone: true,
  imports: [],
  templateUrl: './functions-typescript.component.html',
  styleUrl: './functions-typescript.component.css'
})
export class FunctionsTypescriptComponent implements OnInit {

  ngOnInit(): void {
    this.useJoinFunction();
    this.useRandomFunction();
  }

  useJoinFunction(){
    const h1 = document.getElementById('tag-join')
    const myArray = ["I", "love", "chocolate", "frogs"];
    const stringWithJoin = myArray.join(" ") + " (função join)";
    
    if(h1 != null)
    h1.innerText = stringWithJoin;

  }

  useRandomFunction(){
    const h1 = document.getElementById('tag-random')

    const myNumber = Math.random();

    if(h1 != null)
    h1.innerText = myNumber.toString() + " (função numero random)";
  }

}
