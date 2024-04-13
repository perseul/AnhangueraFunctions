import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-change-data',
  standalone: true,
  imports: [],
  templateUrl: './change-data.component.html',
  styleUrl: './change-data.component.css'
})
export class ChangeDataComponent implements OnInit {
  arrayData;

  constructor(private dataService: DataService){
    this.arrayData = dataService.getData();
  }

  ngOnInit(): void {
    this.changeData();
    this.useArray();
  }

  changeData(){
    const newData = ["one","two", "three", "four"]
    this.arrayData = newData
    const dataChanged = this.arrayData
    return dataChanged;
  }

  useArray(){
    const h1 = document.getElementById('tag-data');
    let mensagem = this.changeData();

    if(h1 != null)
    h1.innerText = mensagem.toString();
  }
}
