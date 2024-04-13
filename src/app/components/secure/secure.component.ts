import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secure',
  standalone: true,
  imports: [],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.css'
})
export class SecureComponent {
  constructor(private activatedRoute: ActivatedRoute){}
}
