import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { ButtonComponent } from "./button_signal/button.component";
import { HomeComponent } from "./home/home.component";
import { DataComponent } from "./data-page/data-page.component";
import { FileComponent } from "./file/file.component";


export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: 'data',
        component: DataComponent
    },
    {
        path: 'riot.txt',
        component: FileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}