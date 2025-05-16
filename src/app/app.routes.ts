import { Routes } from '@angular/router';
import { UserTableComponent } from './component/user-table/user-table.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:UserTableComponent
    }
];
