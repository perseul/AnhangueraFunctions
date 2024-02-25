import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-estruturas-condicionais',
  standalone: true,
  imports: [],
  templateUrl: './estruturas-condicionais.component.html',
  styleUrl: './estruturas-condicionais.component.css'
})

@Injectable()
export class EstruturasCondicionaisComponent implements OnInit {

  constructor(@Inject(DOCUMENT)private document: Document){}

  ngOnInit(): void {
    this.useIfAndElseCondition();
    this.useSwitchCondition();
  }

  useIfAndElseCondition(){
    const horaDoDia = new Date().getHours();
    const h1 = document.getElementById('tag-if');
    let mensagem = ""

    if(horaDoDia >= 6 && horaDoDia < 12){
      mensagem = "Bom dia!!(utilizando if-else)";  
    }
    else if(horaDoDia >= 12 && horaDoDia < 18){
      mensagem = "Boa tarde!! (utilizando if-else)";
    }
    else if(horaDoDia >= 18 && horaDoDia < 24){
      mensagem = "Boa Noite!! (utilizando if-else)";
    }
    else {
      mensagem = "É madrugada. Vá dormir!! (utilizando if-else)";
      
    }
    if(h1 != null)
      h1.innerText = mensagem
  }

  useSwitchCondition(){
    const horaDoDia = new Date().getHours();
    const h1 = document.getElementById('tag-switch');
    let mensagem = ""  

    switch(true){
      case horaDoDia >= 6 && horaDoDia < 12:
        mensagem = "Bom dia!! (utilizando switch)";
        break;
      case horaDoDia >= 12 && horaDoDia < 18:
        mensagem = "Boa tarde!! (utilizando switch)";
        break;
      case horaDoDia >= 18 && horaDoDia < 24:
        mensagem = "Boa Noite!! (utilizando switch)";
        break;
      default: 
        mensagem = "É madrugada. Vá dormir!! (utilizando switch)";
    }
    if(h1 != null)
      h1.innerText = mensagem
  }
}
