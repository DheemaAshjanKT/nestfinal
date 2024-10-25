import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '', component:LoginComponent
    },
{
    path :'home',component: HomeComponent
},
{
    path: 'about', component: AboutComponent
},
{
    path: 'product/:id', component: ProductComponent
}
];
