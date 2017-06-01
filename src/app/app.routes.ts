import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsDetailComponent } from './goods/goods-detail/goods-detail.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: '',
        component: GoodsComponent
    },
    {
        path: 'goods-detail/:id',
        component: GoodsDetailComponent
    }
]