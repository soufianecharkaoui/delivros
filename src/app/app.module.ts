import { MealService } from './services/meal.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { AdminMealsComponent } from './admin/admin-meals/admin-meals.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { MealsFormComponent } from './admin/meals-form/meals-form.component';
import { RestoService } from './services/resto.service';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminRestosComponent } from './admin/admin-restos/admin-restos.component';
import { CategoriesFormComponent } from './admin/categories-form/categories-form.component';
import { RestosFormComponent } from './admin/restos-form/restos-form.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './models/baseurl';
import { MealdetailComponent } from './admin/mealdetail/mealdetail.component';
import { RestodetailComponent } from './admin/restodetail/restodetail.component';
import { CategorydetailComponent } from './admin/categorydetail/categorydetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    MealsComponent,
    OrderListComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    OrdersHistoryComponent,
    AdminMealsComponent,
    AdminOrdersComponent,
    LoginComponent,
    MealsFormComponent,
    AdminCategoriesComponent,
    AdminRestosComponent,
    CategoriesFormComponent,
    RestosFormComponent,
    MealdetailComponent,
    RestodetailComponent,
    CategorydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    RestoService,
    MealService,,
    {
      provide: 'BaseURL',
      useValue: baseURL
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
