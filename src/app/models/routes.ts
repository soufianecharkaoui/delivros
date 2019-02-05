import { CategoryComponent } from './../category/category.component';
import { CategorydetailComponent } from './../admin/categorydetail/categorydetail.component';
import { RestodetailComponent } from './../admin/restodetail/restodetail.component';
import { MealdetailComponent } from './../admin/mealdetail/mealdetail.component';

import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MealsComponent } from '../meals/meals.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { OrderSuccessComponent } from '../order-success/order-success.component';
import { OrdersHistoryComponent } from '../orders-history/orders-history.component';
import { AdminMealsComponent } from '../admin/admin-meals/admin-meals.component';
import { AdminAuthGuardService } from '../services/admin-auth-guard.service';
import { MealsFormComponent } from '../admin/meals-form/meals-form.component';
import { AdminCategoriesComponent } from '../admin/admin-categories/admin-categories.component';
import { CategoriesFormComponent } from '../admin/categories-form/categories-form.component';
import { AdminRestosComponent } from '../admin/admin-restos/admin-restos.component';
import { RestosFormComponent } from '../admin/restos-form/restos-form.component';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';
import { LoginComponent } from '../login/login.component';
import { RestosComponent } from '../restos/restos.component';


export const routes: Routes = [
    { 
        path: '', 
        component: RestosComponent 
    },
    {
        path: 'meals/:restoId/:categoryId',
        component: CategoryComponent
    },
    { 
        path: 'meals/:id', 
        component: MealsComponent 
    },
    {
        path: 'meals',
        component: MealsComponent
    },
    { 
        path: 'order-list', 
        component: OrderListComponent 
    },
    { 
        path: 'check-out', 
        component: CheckOutComponent, 
        canActivate: [AuthGuardService] 
    },
    { 
        path: 'order-success', 
        component: OrderSuccessComponent, 
        canActivate: [AuthGuardService] 
    },
    { 
        path: 'orders-history', 
        component: OrdersHistoryComponent, 
        canActivate: [AuthGuardService] 
    },
    { 
        path: 'admin/meals/new', 
        component: MealsFormComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    {
        path: 'admin/meals/:id',
        component: MealdetailComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/meals',
        component: AdminMealsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/categories/new',
        component: CategoriesFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    { 
        path: 'admin/categories/:id', 
        component: CategorydetailComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/categories', 
        component: AdminCategoriesComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    {
        path: 'admin/restos/new',
        component: RestosFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    { 
        path: 'admin/restos/:id', 
        component: RestodetailComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/restos', 
        component: AdminRestosComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    }
]