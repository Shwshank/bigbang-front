import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule, } from '@angular/material';

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

import { ProjectService } from './service/projectservice';
import { DescriptionComponent } from './home/body/project-view/description/description.component';
import { Graph1Component } from './home/body/project-view/description/graph1/graph1.component';
import { Graph2Component } from './home/body/project-view/description/graph2/graph2.component';
import { DescriptionContentComponent } from './home/body/project-view/description/description-content/description-content.component';
import { InputOptionDialogComponent } from './home/body/project-view/description/input-option-dialog/input-option-dialog.component';
import { DynamicFormComponent } from './home/body/project-view/dynamic-form/dynamic-form.component';

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
    ProjectViewComponent,
    DescriptionComponent,
    Graph1Component,
    Graph2Component,
    DescriptionContentComponent,
    InputOptionDialogComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
   DialogComponent,
   InputOptionDialogComponent
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
