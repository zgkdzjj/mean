import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RegisterComponent} from './components/register/register.component';

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {BrandComponent} from './components/brand/brand.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {SharedModule} from 'primeng/primeng';
import {
  DialogModule,
  ButtonModule,
  InputTextModule,
  PanelModule,
  ConfirmDialogModule,
  ConfirmationService,
  GrowlModule,
  MessageModule,
  MessagesModule,
  BreadcrumbModule,
  MenuItem,
  FileUploadModule,
  OverlayPanelModule,
  Header,
  Footer,
  SidebarModule,
  LightboxModule,
  TooltipModule
} from 'primeng/primeng';
import {DataTableModule} from "primeng/primeng";
import {DropdownModule} from "primeng/primeng";
import {CalendarModule} from "primeng/primeng";
import {BrandService} from "./services/brand.service";
import {CategoryComponent} from './components/category/category.component';
import {CategoryService} from "./services/category.service";
import {ProductComponent} from './components/product/product.component';
import {ProductService} from "./services/product.service";
import {OrderComponent} from './components/order/order.component';
import {OrderService} from "./services/order.service";
import {ManageorderComponent} from './components/manageorder/manageorder.component';
import {ContactDetailsComponent} from './components/contacts/contact-details/contact-details.component';
import {ContactListComponent} from './components/contacts/contact-list/contact-list.component';
import {ContactService} from "./services/contact.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'brand', component: BrandComponent, canActivate: [AuthGuardService]},
  {path: 'category', component: CategoryComponent, canActivate: [AuthGuardService]},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuardService]},
  {path: 'order', component: OrderComponent, canActivate: [AuthGuardService]},
  {path: 'manageorder', component: ManageorderComponent, canActivate: [AuthGuardService]},
  {path: 'contact', component: ContactListComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    BrandComponent,
    CategoryComponent,
    ProductComponent,
    OrderComponent,
    ManageorderComponent,

    ContactDetailsComponent,
    ContactListComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FlashMessagesModule,
    BrowserAnimationsModule,


    SharedModule,
    DataTableModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    ConfirmDialogModule,
    GrowlModule,
    MessageModule,
    MessagesModule,
    BreadcrumbModule,
    FileUploadModule,
    OverlayPanelModule,
    CalendarModule,
    SidebarModule,
    LightboxModule,
    TooltipModule

  ],
  entryComponents: [],
  providers: [
    ValidateService,
    AuthService,
    AuthGuardService,
    BrandService,
    ConfirmationService,
    CategoryService,
    ProductService,
    OrderService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
