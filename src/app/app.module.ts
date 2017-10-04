import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
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
import { AuthGuard } from './service/AuthGuard';
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
import { APIService } from './service/APIservice';
import { DescriptionComponent } from './home/body/project-view/description/description.component';
import { Graph1Component } from './home/body/project-view/description/graph1/graph1.component';
import { Graph2Component } from './home/body/project-view/description/graph2/graph2.component';
import { DescriptionContentComponent } from './home/body/project-view/description/description-content/description-content.component';
import { InputOptionDialogComponent } from './home/body/project-view/input-option-dialog/input-option-dialog.component';
import { DynamicFormComponent } from './home/body/project-view/description/dynamic-form/dynamic-form.component';
import { ProjectCostComponent } from './home/body/project-view/project-cost/project-cost.component';
import { CostGraph1Component } from './home/body/project-view/project-cost/cost-graph1/cost-graph1.component';
import { CostGraph2Component } from './home/body/project-view/project-cost/cost-graph2/cost-graph2.component';
import { CostDynamicFormComponent } from './home/body/project-view/project-cost/cost-dynamic-form/cost-dynamic-form.component';
import { CostContentComponent } from './home/body/project-view/project-cost/cost-content/cost-content.component';
import { ProjectSummaryComponent } from './home/body/project-summary/project-summary.component';
import { ProjectSettingComponent } from './home/body/project-setting/project-setting.component';
import { NewProjectComponent } from './home/body/project-setting/new-project/new-project.component';
import { AllProjectComponent } from './home/body/project-setting/all-project/all-project.component';
import { ProjectUserComponent } from './home/body/project-setting/project-user/project-user.component';
import { AssignProjectComponent } from './home/body/project-setting/assign-project/assign-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

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
    DynamicFormComponent,
    ProjectCostComponent,
    CostGraph1Component,
    CostGraph2Component,
    CostDynamicFormComponent,
    CostContentComponent,
    ProjectSummaryComponent,
    ProjectSettingComponent,
    NewProjectComponent,
    AllProjectComponent,
    ProjectUserComponent,
    AssignProjectComponent,
    AllProjectsComponent
  ],
  imports: [
    HttpModule,
    ChartsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
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
  providers: [ProjectService, APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
