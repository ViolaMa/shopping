import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/*插件*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*路由*/
import { appRoutes } from './app.routes';

/*组件*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { CategoryComponent } from './home/category/category.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsDetailComponent } from './goods/goods-detail/goods-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    UserLoginComponent,
    FooterComponent,
    HomeComponent,
    GoodsDetailComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
