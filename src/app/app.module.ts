import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BfsiShowHideComponent } from "./bfsi-show-hide/bfsi-show-hide.component";
import { LoginModule } from "./login/login.module";
import { UserManagementModule } from "./user-management/user-management.module";
import { AuthenticationComponent } from "./login/authentication/authentication.component";
import { RoleComponent } from "./user-management/role/role.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BfsiShowHideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UserManagementModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthenticationComponent, RoleComponent]
})
export class AppModule {}
