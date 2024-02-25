import { RouterModule, Routes } from '@angular/router';
import { EstruturasCondicionaisComponent } from './components/estruturas-condicionais/estruturas-condicionais.component';
import { EstruturasRepeticaoComponent } from './components/estruturas-repeticao/estruturas-repeticao.component';
import { FunctionsTypescriptComponent } from './components/functions-typescript/functions-typescript.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "estruturas-condicionais",
        component: EstruturasCondicionaisComponent
    },
    {
        path:"estruturas-repeticao",
        component: EstruturasRepeticaoComponent
    },
    {
        path:"functions-typescript",
        component: FunctionsTypescriptComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes {}
