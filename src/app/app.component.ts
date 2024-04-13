import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstruturasCondicionaisComponent } from './components/estruturas-condicionais/estruturas-condicionais.component';
import { MatSidenavModule} from '@angular/material/sidenav'
import { EstruturasRepeticaoComponent } from './components/estruturas-repeticao/estruturas-repeticao.component';
import { FunctionsTypescriptComponent } from './components/functions-typescript/functions-typescript.component';
import { DataService } from './services/data.service';
import { FormDynamicComponent } from './components/form-dynamic/form-dynamic.component';
import { ChangeDataComponent } from './components/change-data/change-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            EstruturasCondicionaisComponent,
            EstruturasRepeticaoComponent,
            FunctionsTypescriptComponent,
            ChangeDataComponent,
            FormDynamicComponent,
            MatSidenavModule,
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AnhangueraFunctions';

  ngOnInit(): void {
  }

}
