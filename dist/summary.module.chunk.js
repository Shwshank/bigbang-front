webpackJsonp(["summary.module"],{

/***/ "../../../../../src/app/home/body/project-summary/project-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mapWidth {\n  width: 400px;\n}\n\n@media only screen and (min-width:960px){\n    /* styles for browsers larger than 960px; */\n    .mapWidth {\n      width: 90%;\n    }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/project-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100% !important\">\n\n  <main class=\"mdl-grid \" style=\"margin-left:0%; text-align: center; \" >\n\n    <div class=\"mdl-color--white mdl-shadow--0dp mdl-cell mdl-cell--12-col mdl-grid \" style=\"overflow:auto; margin:auto;  text-align: center; \"  >\n      <div id=\"regions_div\" style=\" height:600px;  \"  ></div>\n\n    </div>\n\n    <div class=\"mdl-color--white mdl-shadow--0dp mdl-cell mdl-cell--12-col mdl-grid\">\n      <app-summary-graph1></app-summary-graph1>\n    </div>\n\n    <div class=\"mdl-color--white mdl-shadow--0dp mdl-cell mdl-cell--12-col mdl-grid\">\n      <app-summary-graph2></app-summary-graph2>\n    </div>\n\n    <div class=\"mdl-color--white mdl-shadow--0dp mdl-cell mdl-cell--6-col mdl-grid\">\n\n    </div>\n\n  </main>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/project-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_graph1_allscript_js__ = __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph1/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_graph1_allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__summary_graph1_allscript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_projectservice__ = __webpack_require__("../../../../../src/app/service/projectservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectSummaryComponent = (function () {
    function ProjectSummaryComponent(snackBar, ProjectService) {
        this.snackBar = snackBar;
        this.ProjectService = ProjectService;
        // console.log('flag check');
        this.flag0 = localStorage.getItem('flag0');
        if (this.flag0 === '0') {
            localStorage.setItem('flag0', '1');
            window.location.reload();
        }
        if (this.mapData == 'undefined') {
            this.noMapData = true;
        }
    }
    ProjectSummaryComponent.prototype.ngOnInit = function () {
        this.ProjectService.getMapData();
        this.mapData = localStorage.getItem('mapData');
        console.log(this.mapData);
    };
    ProjectSummaryComponent.prototype.ngOnDestroy = function () {
        // console.log('flaged');
        localStorage.setItem('flag0', '0'); // 'flag1 = 0' will refresh the Summary component
        localStorage.setItem('flag1', '0'); // 'flag1 = 0' will refresh the uservise component
    };
    return ProjectSummaryComponent;
}());
ProjectSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-summary',
        template: __webpack_require__("../../../../../src/app/home/body/project-summary/project-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/body/project-summary/project-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_projectservice__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_projectservice__["a" /* ProjectService */]) === "function" && _b || Object])
], ProjectSummaryComponent);

var _a, _b;
//# sourceMappingURL=project-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph1/allscript.js":
/***/ (function(module, exports) {


  google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {


    var localMapData = [
      ['City',   'Population', 'Area'],
      ['delhi',      12,    1285.31],
      ['goa',      2,    285.31],
    ];

    // console.log(localMapData);

    var mapData = localStorage.getItem('mapData');

    if(mapData == 'undefined' || mapData == 0 ) {
      // console.log('undefined');
      mapData = [['City', 'Population'],];
    } else {
      mapData = JSON.parse(mapData);
    }

    // console.log(JSON.parse(mapData));

    var data = google.visualization.arrayToDataTable(mapData);

  var options = {
    region: 'IN',
    domain: 'IN',
    displayMode: 'markers',
    colorAxis: {colors: ['#3f51b5', '#919fec']},
    sizeAxis:  {minValue: 10,  maxSize: 20},
    backgroundColor: {fill:'', stroke:'#c7c7c7', strokeWidth:4, },
    datalessRegionColor: '#eaeeff',
    defaultColor: 'yellow',
    resolution: 'provinces',

  };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }


/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width{\n    padding-left: 2%;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nAPI key\n\n AIzaSyBL2D5laIxAftWiYLVH9HWjqSoRBvXudIw\n\n -->\n<div *ngIf='display' >\n\n  <h4> {{pdetails.project_name}}</h4>\n  <span style=\"color: #636363\" >\"{{pdetails.project_description}}\"</span>\n  <p>\n    <b> {{pdetails.project_name}} </b> was created by <b> {{pdetails.creator}} </b> with root project <b>{{pdetails.parent_project_name}} </b> </p>\n\n</div>\n\n<!-- project_permissions\n\n{{pdetails.created-on}}  {{pdeatils.project_description}} {{pdetails.parent}} {{pdetails.parent_project_name}}\n\n-->\n"

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryGraph1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js__ = __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph1/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__allscript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_projectservice__ = __webpack_require__("../../../../../src/app/service/projectservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryGraph1Component = (function () {
    function SummaryGraph1Component(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.display = false;
        this.ProjectService.projectDetails.subscribe(function (res) {
            _this.pdetails = res;
            console.log(_this.pdetails);
            _this.display = true;
        });
    }
    SummaryGraph1Component.prototype.ngOnInit = function () {
    };
    SummaryGraph1Component.prototype.ngAfterViewInit = function () {
    };
    return SummaryGraph1Component;
}());
SummaryGraph1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary-graph1',
        template: __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_projectservice__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_projectservice__["a" /* ProjectService */]) === "function" && _a || Object])
], SummaryGraph1Component);

var _a;
//# sourceMappingURL=summary-graph1.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width{\n    padding-left: 2%;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <main class=\"mdl-grid \" >\n\n   <ul>\n\n    <li>\n      <input type=\"checkbox\" checked>\n      <i class=\"icon-dropdown\"></i>\n\n      <h2>Add location</h2>\n\n        <div class=\"tab-content\">\n            <div class=\"mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid \">\n              <div class=\"tab-new\">\n            <div *ngFor='let imp of inputArray; let i = index'>\n\n                        {{i+1}}.\n\n                      <md-form-field class=\"example-full-width input-item \">\n                        <input mdInput placeholder='Location' type=\"text\"  [(ngModel)]=\"imp.location\" required>\n                      </md-form-field>\n\n                      <md-form-field class=\"example-full-width input-item \">\n                        <input mdInput placeholder='Size' type=\"number\"  [(ngModel)]=\"imp.size\" required>\n                      </md-form-field>\n\n                      <md-form-field class=\"example-full-width input-item \">\n                        <input mdInput placeholder='Cost' type=\"number\"  [(ngModel)]=\"imp.cost\" required>\n                      </md-form-field>\n\n                      <button  class=\"fab-button-add-del  mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab\"   (click)='removeLocation()'>\n                        <i class=\" material-icons\">remove</i>\n                    </button>\n\n                    </div>\n                    <div class=\"button-right\">\n                    <button  class=\"fab-button-add-del  mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab\"   (click)='addLocation()'>\n                      <i class=\" material-icons\">add</i>\n                  </button>\n                    </div>\n                   <div class=\"button-right\">\n                    <button md-button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect\" (click)='saveLocation()' >save</button>\n                   </div>\n\n        </div>\n            </div>\n\n      </div>\n    </li>\n\n  </ul>\n\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryGraph2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_projectservice__ = __webpack_require__("../../../../../src/app/service/projectservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import './sunBrust.js';

var SummaryGraph2Component = (function () {
    function SummaryGraph2Component(ProjectService) {
        this.ProjectService = ProjectService;
        this.inputArray = [];
        this.inputArray.push({ location: '', size: '', cost: '' });
    }
    SummaryGraph2Component.prototype.ngOnInit = function () {
    };
    SummaryGraph2Component.prototype.addLocation = function () {
        this.inputArray.push({ location: '', size: '', cost: '' });
    };
    SummaryGraph2Component.prototype.removeLocation = function (i) {
        this.inputArray.splice(i, 1);
    };
    SummaryGraph2Component.prototype.saveLocation = function () {
        //localStorage.setItem('location', JSON.stringify(this.inputArray));
        console.log(this.inputArray);
        this.ProjectService.addMapData(this.inputArray);
        // let mapData = [
        //   ['City',   'Population', 'Area'],
        //   ['delhi',      12,    1285.31],
        //   ['goa',      2,    285.31],
        // ];
        //localStorage.setItem('mapData',JSON.stringify(mapData));
        // window.location.reload();
    };
    SummaryGraph2Component.prototype.discard = function () {
    };
    return SummaryGraph2Component;
}());
SummaryGraph2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary-graph2',
        template: __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_projectservice__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_projectservice__["a" /* ProjectService */]) === "function" && _a || Object])
], SummaryGraph2Component);

var _a;
//# sourceMappingURL=summary-graph2.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_routing__ = __webpack_require__("../../../../../src/app/home/body/project-summary/summary.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_summary_component__ = __webpack_require__("../../../../../src/app/home/body/project-summary/project-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__summary_graph1_summary_graph1_component__ = __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph1/summary-graph1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_graph2_summary_graph2_component__ = __webpack_require__("../../../../../src/app/home/body/project-summary/summary-graph2/summary-graph2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SummaryModule = (function () {
    function SummaryModule() {
    }
    return SummaryModule;
}());
SummaryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__summary_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["J" /* MdTooltipModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__project_summary_component__["a" /* ProjectSummaryComponent */], __WEBPACK_IMPORTED_MODULE_5__summary_graph1_summary_graph1_component__["a" /* SummaryGraph1Component */], __WEBPACK_IMPORTED_MODULE_6__summary_graph2_summary_graph2_component__["a" /* SummaryGraph2Component */],]
    })
], SummaryModule);

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/body/project-summary/summary.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_summary_component__ = __webpack_require__("../../../../../src/app/home/body/project-summary/project-summary.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__project_summary_component__["a" /* ProjectSummaryComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=summary.routing.js.map

/***/ })

});
//# sourceMappingURL=summary.module.chunk.js.map