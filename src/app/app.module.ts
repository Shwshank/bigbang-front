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
  MdTooltipModule,
 } from '@angular/material';

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
import { ProjectCostingComponent } from './home/body/project-costing/project-costing.component';
import { CostingGraph1Component } from './home/body/project-costing/costing-graph1/costing-graph1.component';
import { CostingGraph2Component } from './home/body/project-costing/costing-graph2/costing-graph2.component';
import { CostingContentComponent } from './home/body/project-costing/costing-content/costing-content.component';
import { CostingGraph3Component } from './home/body/project-costing/costing-graph3/costing-graph3.component';
import { CostingGraph4Component } from './home/body/project-costing/costing-graph4/costing-graph4.component';
import { AddCostingDialogComponent } from './home/body/project-costing/costing-content/add-costing-dialog/add-costing-dialog.component';
import { NewCostComponetBoxComponent } from './home/body/project-costing/costing-content/new-cost-componet-box/new-cost-componet-box.component';
import { AllCostingComponentComponent } from './home/body/project-costing/costing-content/all-costing-component/all-costing-component.component';
import { FilesComponent } from './home/body/files/files.component';
import { FileTableComponent } from './home/body/files/file-table/file-table.component';
import { FileGraphComponent } from './home/body/files/file-graph/file-graph.component';
import { FilecontentComponent } from './home/body/files/filecontent/filecontent.component';
import { NewFileComponent } from './home/body/files/filecontent/new-file/new-file.component';
import { NewFolderComponent } from './home/body/files/filecontent/new-folder/new-folder.component';
import { VendorComponent } from './home/body/vendor/vendor.component';
import { VendorGraph1Component } from './home/body/vendor/vendor-graph1/vendor-graph1.component';
import { VendorContentComponent } from './home/body/vendor/vendor-content/vendor-content.component';
import { VendorDetailsComponent } from './home/body/vendor/vendor-details/vendor-details.component';
import { VendorDetailsGraph1Component } from './home/body/vendor/vendor-details/vendor-details-graph1/vendor-details-graph1.component';


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
    CostGraph1Component,
    CostGraph2Component,
    CostDynamicFormComponent,
    CostContentComponent,
    ProjectSummaryComponent,
    ProjectSettingComponent,
    ProjectCostComponent,
    NewProjectComponent,
    AllProjectComponent,
    ProjectUserComponent,
    AssignProjectComponent,
    AllProjectsComponent,
    ProjectCostingComponent,
    CostingGraph1Component,
    CostingGraph2Component,
    CostingContentComponent,
    CostingGraph3Component,
    CostingGraph4Component,
    AddCostingDialogComponent,
    NewCostComponetBoxComponent,
    AllCostingComponentComponent,
    FilesComponent,
    FileTableComponent,
    FileGraphComponent,
    FilecontentComponent,
    NewFileComponent,
    NewFolderComponent,
    VendorComponent,
    VendorGraph1Component,
    VendorContentComponent,
    VendorDetailsComponent,
    VendorDetailsGraph1Component

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
   InputOptionDialogComponent,
   AddCostingDialogComponent
  ],
  providers: [ProjectService, APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
