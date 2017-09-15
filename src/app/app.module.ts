import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MdDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MdCardModule } from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { UniverseComponent } from './home/body/universe/universe.component';
import { SummaryComponent } from './home/body/summary/summary.component';
import { ProjectViewComponent } from './home/body/project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DialogComponent,
    UniverseComponent,
    SummaryComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdListModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
   DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
