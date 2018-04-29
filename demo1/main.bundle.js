webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.1.0 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:host {\n  width: 100vw;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mouvement_service__ = __webpack_require__("./src/app/mouvement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mouvement_mouvement_component__ = __webpack_require__("./src/app/mouvement/mouvement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_mouvement_list_mouvement_component__ = __webpack_require__("./src/app/list-mouvement/list-mouvement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__("./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__mouvement_mouvement_component__["a" /* MouvementComponent */], __WEBPACK_IMPORTED_MODULE_5__list_mouvement_list_mouvement_component__["a" /* ListMouvementComponent */], __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__["a" /* DashboardModule */], __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRoutesModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__mouvement_service__["a" /* MouvementService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-gridster-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardGridsterConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardGridsterConfig = {
    gridType: 'fit',
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    fixedRowHeight: 250,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    compactType: 'none',
    mobileBreakpoint: 320,
    minCols: 4,
    maxCols: 8,
    minRows: 3,
    maxRows: 5,
    defaultItemCols: 4,
    defaultItemRows: 3,
    maxItemCols: 5,
    maxItemRows: 8,
    minItemCols: 1,
    minItemRows: 1,
    minItemArea: 1,
    maxItemArea: 40,
    margin: 10,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginBottom: null,
    outerMarginLeft: null,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    initCallback: undefined,
    destroyCallback: undefined,
    itemChangeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    emptyCellClickCallback: undefined,
    emptyCellContextMenuCallback: undefined,
    emptyCellDropCallback: undefined,
    emptyCellDragCallback: undefined,
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    // only for gridType: `fixed` , `verticalFixed`, `horizontalFixed`
    draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: undefined,
        start: undefined // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
    },
    resizable: {
        delayStart: 0,
        enabled: false,
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        stop: undefined,
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
    },
    swap: true,
    pushItems: false,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,
    displayGrid: 'onDrag&Resize',
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false // scroll to new items placed in a scrollable view
};
var DashboardGridsterConfigService = /** @class */ (function () {
    function DashboardGridsterConfigService() {
    }
    DashboardGridsterConfigService.prototype.getConfig = function () {
        return DashboardGridsterConfig;
    };
    DashboardGridsterConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DashboardGridsterConfigService);
    return DashboardGridsterConfigService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<gridster [options]=\"config\">\n  <gridster-item *ngFor=\"let item of items; index as i;\"\n    [item]=\"item\">\n    <div class=\"item-container\" [ngClass]=\"item.widget.class\">\n      <i class=\"bg-icon\" [ngClass]=\"item.widget.icon\"></i>\n      \n      <app-widget-container [data]=\"item\"></app-widget-container>\n    </div>\n  </gridster-item>\n</gridster>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.1.0 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:host gridster {\n  background-color: transparent; }\n:host gridster > gridster-item {\n    background-color: #495057; }\n:host gridster > gridster-item > .item-container {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n:host gridster > gridster-item > .item-container > i.bg-icon {\n        opacity: 0.2;\n        position: absolute;\n        z-index: 0;\n        vertical-align: center;\n        text-align: center;\n        font-size: 10vw; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_gridster_config_service__ = __webpack_require__("./src/app/dashboard/dashboard-gridster-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardGridsterConfigService) {
        this.dashboardGridsterConfigService = dashboardGridsterConfigService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.config = this.dashboardGridsterConfigService.getConfig();
        this.items = __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].dashingConfig.items;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_gridster_config_service__["a" /* DashboardGridsterConfigService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__ = __webpack_require__("./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_gridster2__ = __webpack_require__("./node_modules/angular-gridster2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_gridster2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_gridster2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_gridster_config_service__ = __webpack_require__("./src/app/dashboard/dashboard-gridster-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_container_component__ = __webpack_require__("./src/app/dashboard/widget-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widget_host_directive__ = __webpack_require__("./src/app/dashboard/widget-host.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widgets_hello_world_hello_world_component__ = __webpack_require__("./src/app/dashboard/widgets/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_widget_giphy_widget_giphy_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__widgets_widget_dog_widget_dog_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-dog/widget-dog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__widgets_widget_weather_widget_weather_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-weather/widget-weather.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__["a" /* DashboardRoutesModule */], __WEBPACK_IMPORTED_MODULE_4_angular_gridster2__["GridsterModule"], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__widget_container_component__["a" /* WidgetContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__widget_host_directive__["a" /* WidgetHostDirective */],
                __WEBPACK_IMPORTED_MODULE_8__widgets_hello_world_hello_world_component__["a" /* HelloWorldComponent */],
                __WEBPACK_IMPORTED_MODULE_10__widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__widgets_widget_dog_widget_dog_component__["a" /* WidgetDogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__widgets_widget_weather_widget_weather_component__["a" /* WidgetWeatherComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__dashboard_gridster_config_service__["a" /* DashboardGridsterConfigService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__widgets_hello_world_hello_world_component__["a" /* HelloWorldComponent */], __WEBPACK_IMPORTED_MODULE_10__widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */], __WEBPACK_IMPORTED_MODULE_11__widgets_widget_dog_widget_dog_component__["a" /* WidgetDogComponent */], __WEBPACK_IMPORTED_MODULE_12__widgets_widget_weather_widget_weather_component__["a" /* WidgetWeatherComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var dashboardRoutes = [{ path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }];
var DashboardRoutesModule = /** @class */ (function () {
    function DashboardRoutesModule() {
    }
    DashboardRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(dashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DashboardRoutesModule);
    return DashboardRoutesModule;
}());



/***/ }),

/***/ "./src/app/dashboard/widget-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_host_directive__ = __webpack_require__("./src/app/dashboard/widget-host.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetContainerComponent = /** @class */ (function () {
    function WidgetContainerComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    WidgetContainerComponent.prototype.injectComponent = function () {
        if (this.data.widget.component === null) {
            return;
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
        var componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.data;
    };
    WidgetContainerComponent.prototype.ngOnInit = function () {
        this.injectComponent();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WidgetContainerComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__widget_host_directive__["a" /* WidgetHostDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__widget_host_directive__["a" /* WidgetHostDirective */])
    ], WidgetContainerComponent.prototype, "widgetHostDirective", void 0);
    WidgetContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget-container',
            template: '<ng-template [appWidgetHost]="data"></ng-template>',
            styles: ['host{height: 100%; display: flex; align-items: center; }']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], WidgetContainerComponent);
    return WidgetContainerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/widget-host.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHostDirective = /** @class */ (function () {
    function WidgetHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(WidgetHostDirective.prototype, "appWidgetHost", {
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appWidgetHost'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WidgetHostDirective.prototype, "appWidgetHost", null);
    WidgetHostDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appWidgetHost]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], WidgetHostDirective);
    return WidgetHostDirective;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/hello-world/hello-world.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HelloWorldComponent.prototype, "data", void 0);
    HelloWorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hello-world',
            template: "\n    <h4>Hello World!<h4>\n    c: {{ data.cols }} r: {{ data.rows }}\n  "
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-dog/dog-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DogDataService = /** @class */ (function () {
    function DogDataService(http) {
        this.http = http;
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(3000).startWith(0);
    }
    DogDataService.prototype.getImage = function () {
        var _this = this;
        return this.timer.switchMap(function () { return _this.getDogImage(); });
    };
    DogDataService.prototype.getDogImage = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        return this.http
            .get('//dog.ceo/api/breeds/image/random', { params: params })
            .map(function (response) { return _this.mapDataFromApi(response); });
    };
    DogDataService.prototype.mapDataFromApi = function (response) {
        var dogImage = response;
        return dogImage;
    };
    DogDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DogDataService);
    return DogDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-dog/widget-dog.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host img {\n    height: 100%; }\n  :host small {\n    position: absolute;\n    z-index: 1;\n    bottom: 5px;\n    right: 5px; }\n"

/***/ }),

/***/ "./src/app/dashboard/widgets/widget-dog/widget-dog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetDogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dog_data_service__ = __webpack_require__("./src/app/dashboard/widgets/widget-dog/dog-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetDogComponent = /** @class */ (function () {
    function WidgetDogComponent(dogDataService) {
        this.dogDataService = dogDataService;
    }
    WidgetDogComponent.prototype.getImage = function () {
        var _this = this;
        this.dogDataService.getImage().subscribe(function (image) {
            _this.image = image;
        });
    };
    WidgetDogComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WidgetDogComponent.prototype, "data", void 0);
    WidgetDogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget-dog',
            template: "\n  <img *ngIf=\"image\" [src]=\"image.message\">\n  <small>&copy;DogAPI.com</small>\n  ",
            styles: [__webpack_require__("./src/app/dashboard/widgets/widget-dog/widget-dog.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dog_data_service__["a" /* DogDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dog_data_service__["a" /* DogDataService */]])
    ], WidgetDogComponent);
    return WidgetDogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-giphy/giphy-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiphyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GiphyDataService = /** @class */ (function () {
    function GiphyDataService(http) {
        this.http = http;
        this.GIPHY_API_KEY = 'dJVzoxvFRc7d6TNaUMduf9qsFrrtUQde';
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(60000).startWith(0);
        this.offset_max = 100;
    }
    GiphyDataService.prototype.getImages = function (q) {
        var _this = this;
        this.q = q;
        return this.timer.switchMap(function () { return _this.getGiphyImages(q); });
    };
    GiphyDataService.prototype.getGiphyImages = function (q) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]()
            .set('q', q)
            .set('limit', '100')
            .set('offset', Math.abs(Math.floor(Math.random() * this.offset_max + 1)).toString())
            .set('api_key', this.GIPHY_API_KEY);
        return this.http
            .get('//api.giphy.com/v1/gifs/search', { params: params })
            .map(function (response) { return _this.mapDataFromApi(response); });
    };
    GiphyDataService.prototype.mapDataFromApi = function (response) {
        this.offset_max = response.pagination.total_count - 100;
        if (0 === response.data.length) {
            this.getImages(this.q);
            return;
        }
        var images = [];
        for (var i = 0; i < response.data.length; i++) {
            var image = response.data[i].images.fixed_height;
            // only landscape image
            if (image.width > image.height) {
                images.push(image);
            }
        }
        return images;
    };
    GiphyDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GiphyDataService);
    return GiphyDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host img {\n    height: 100%; }\n  :host small {\n    position: absolute;\n    z-index: 1;\n    bottom: 5px;\n    right: 5px; }\n"

/***/ }),

/***/ "./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetGiphyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__giphy_data_service__ = __webpack_require__("./src/app/dashboard/widgets/widget-giphy/giphy-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetGiphyComponent = /** @class */ (function () {
    function WidgetGiphyComponent(giphyDataService) {
        this.giphyDataService = giphyDataService;
        this.timer = null;
        this.currentImageIndex = 0;
    }
    WidgetGiphyComponent.prototype.getImages = function () {
        var _this = this;
        this.giphyDataService.getImages(this.data.widget.params.q).subscribe(function (images) {
            _this.images = images;
            if (null !== _this.timer) {
                clearInterval(_this.timer);
            }
            _this.timer = setInterval(function () { return _this.setImage(); }, 5000);
        });
    };
    WidgetGiphyComponent.prototype.setImage = function () {
        this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
        this.image = this.images[this.currentImageIndex];
        this.preloadImage();
    };
    WidgetGiphyComponent.prototype.preloadImage = function () {
        var nextImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
        var image = new Image();
        image.src = this.images[nextImageIndex].url;
    };
    WidgetGiphyComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WidgetGiphyComponent.prototype, "data", void 0);
    WidgetGiphyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget-giphy',
            template: "\n  <small>&copy;Giphy</small>\n  <img *ngIf=\"image\" [src]=\"image.url\">\n  ",
            styles: [__webpack_require__("./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__giphy_data_service__["a" /* GiphyDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__giphy_data_service__["a" /* GiphyDataService */]])
    ], WidgetGiphyComponent);
    return WidgetGiphyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-weather/weather-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherDataService = /** @class */ (function () {
    function WeatherDataService(http) {
        this.http = http;
    }
    WeatherDataService.prototype.getWeather = function (city) {
        return this.getWeatherYahoo(city);
    };
    WeatherDataService.prototype.makeYqlQuery = function (city) {
        return "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"" + city + "\")";
    };
    WeatherDataService.prototype.getWeatherYahoo = function (city) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('q', this.makeYqlQuery(city)).set('format', 'json');
        return this.http
            .get('https://query.yahooapis.com/v1/public/yql', { params: params })
            .map(function (response) { return _this.mapDataFromApi(response); });
    };
    WeatherDataService.prototype.mapDataFromApi = function (response) {
        if (response.query.count < 1) {
            return null;
        }
        return response.query.results.channel.item.condition;
    };
    WeatherDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherDataService);
    return WeatherDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widget-weather/widget-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{city}}</h4>\n<span *ngIf=\"weather\">{{weather.text}} - {{weather.temp}}°F</span>\n"

/***/ }),

/***/ "./src/app/dashboard/widgets/widget-weather/widget-weather.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/widgets/widget-weather/widget-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_data_service__ = __webpack_require__("./src/app/dashboard/widgets/widget-weather/weather-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetWeatherComponent = /** @class */ (function () {
    function WidgetWeatherComponent(weatherDataService) {
        this.weatherDataService = weatherDataService;
        this.city = 'biarritz';
    }
    WidgetWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.city = this.data.widget.params.city;
        this.weatherDataService.getWeather(this.city).subscribe(function (weather) {
            _this.weather = weather;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WidgetWeatherComponent.prototype, "data", void 0);
    WidgetWeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget-weather',
            template: __webpack_require__("./src/app/dashboard/widgets/widget-weather/widget-weather.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/widgets/widget-weather/widget-weather.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__weather_data_service__["a" /* WeatherDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_data_service__["a" /* WeatherDataService */]])
    ], WidgetWeatherComponent);
    return WidgetWeatherComponent;
}());



/***/ }),

/***/ "./src/app/list-mouvement/list-mouvement.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>List des Mouvement blablabla </h2>\n\n<div class=\"flex-container\">\n\n  <div class=\"text-white bg-warning\">\n    <h2>warning</h2>\n  </div>\n  <div class=\"text-white bg-info\">\n    <h2>info</h2>\n  </div>\n  <div class=\"text-white bg-primary\">\n    <h2>primary</h2>\n  </div>\n  <div class=\"text-white bg-secondary\">\n    <h2>secondary</h2>\n  </div>\n  <div class=\"text-white bg-danger\">\n    <h2>danger</h2>\n  </div>\n  <div class=\"text-white bg-dark\">\n    <h2>dark</h2>\n  </div>\n\n</div>\n\n\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>id</th>\n      <th>category</th>\n      <th>montant</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let mouvement of listMouvement\">\n      <td>{{mouvement.id}}</td>\n      <td>{{mouvement.category}}</td>\n      <td>{{mouvement.montant}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/list-mouvement/list-mouvement.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.1.0 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\nh2 {\n  color: #ffc107;\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal; }\ntable.table thead tr {\n  background-color: white; }\ntable.table thead tr th {\n    color: #dc3545; }\n"

/***/ }),

/***/ "./src/app/list-mouvement/list-mouvement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMouvementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListMouvementComponent = /** @class */ (function () {
    function ListMouvementComponent() {
    }
    ListMouvementComponent.prototype.ngOnInit = function () {
        this.listMouvement = [
            { id: 1, category: 'marché', montant: -100 },
            { id: 2, category: 'transport', montant: 50 },
            { id: 3, category: 'crèche', montant: -70 },
            { id: 4, category: 'supermarché', montant: -150 }
        ];
    };
    ListMouvementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-mouvement',
            template: __webpack_require__("./src/app/list-mouvement/list-mouvement.component.html"),
            styles: [__webpack_require__("./src/app/list-mouvement/list-mouvement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListMouvementComponent);
    return ListMouvementComponent;
}());



/***/ }),

/***/ "./src/app/mouvement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouvementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouvementService = /** @class */ (function () {
    function MouvementService() {
    }
    MouvementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MouvementService);
    return MouvementService;
}());



/***/ }),

/***/ "./src/app/mouvement/mouvement.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mouvement works!\n</p>\n"

/***/ }),

/***/ "./src/app/mouvement/mouvement.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mouvement/mouvement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouvementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouvementComponent = /** @class */ (function () {
    function MouvementComponent() {
    }
    MouvementComponent.prototype.ngOnInit = function () { };
    MouvementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mouvement',
            template: __webpack_require__("./src/app/mouvement/mouvement.component.html"),
            styles: [__webpack_require__("./src/app/mouvement/mouvement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MouvementComponent);
    return MouvementComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\">\n  <h4>\n    <i class=\"fa fa-unlink pull-right\"></i>\n    404 page not found\n  </h4>\n  <hr>\n  we can't seem to find the page you requested...\n  Do you want to <a routerLink=\"/dashboard\">go back to the dashboard</a>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host div.alert {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.8); }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_dashboard_widgets_hello_world_hello_world_component__ = __webpack_require__("./src/app/dashboard/widgets/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dashboard_widgets_widget_weather_widget_weather_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-weather/widget-weather.component.ts");



var dashingConfig = {
    items: [
        {
            cols: 1,
            rows: 1,
            widget: { component: __WEBPACK_IMPORTED_MODULE_2__app_dashboard_widgets_widget_weather_widget_weather_component__["a" /* WidgetWeatherComponent */], params: { city: 'Vannes, France' }, icon: null, class: 'bg-success' }
        },
        { cols: 1, rows: 1, widget: { component: __WEBPACK_IMPORTED_MODULE_0__app_dashboard_widgets_hello_world_hello_world_component__["a" /* HelloWorldComponent */], icon: 'fa fa-magic', class: 'bg-primary' } },
        {
            cols: 2,
            rows: 2,
            widget: { component: null, params: { q: 'funny silicon valley' }, icon: null, class: null }
        },
        {
            cols: 1,
            rows: 1,
            widget: {
                component: __WEBPACK_IMPORTED_MODULE_2__app_dashboard_widgets_widget_weather_widget_weather_component__["a" /* WidgetWeatherComponent */],
                params: { city: 'Biarritz, France' },
                icon: null,
                class: 'bg-success'
            }
        },
        { cols: 2, rows: 1, widget: { component: null, icon: 'fi flaticon-book', class: 'bg-warning' } },
        {
            cols: 1,
            rows: 1,
            widget: { component: __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */], params: { q: 'funny babies' }, icon: null, class: 'bg-info' }
        },
        {
            cols: 1,
            rows: 1,
            widget: { component: __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */], params: { q: 'la casa de papel' }, icon: null, class: 'bg-info' }
        },
        { cols: 2, rows: 1, widget: { component: null, icon: null, class: 'bg-info' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-light text-dark' } },
        { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
        { cols: 3, rows: 2, widget: { component: null, icon: 'fa fa-dowload', class: 'bg-primary' } },
        { cols: 1, rows: 1, widget: { component: null, icon: 'fi flaticon-github', class: 'bg-success' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
        { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } }
    ]
};
var environment = {
    production: true,
    dashingConfig: dashingConfig
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_dashboard_widgets_hello_world_hello_world_component__ = __webpack_require__("./src/app/dashboard/widgets/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__ = __webpack_require__("./src/app/dashboard/widgets/widget-giphy/widget-giphy.component.ts");


var dashingConfig = {
    items: [
        {
            cols: 1,
            rows: 1,
            widget: {
                component: __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */],
                params: { q: 'funny silicon valley' },
                icon: null,
                class: 'bg-primary'
            }
        },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-secondary' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-success' } },
        { cols: 2, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
        {
            cols: 2,
            rows: 1,
            widget: { component: __WEBPACK_IMPORTED_MODULE_1__app_dashboard_widgets_widget_giphy_widget_giphy_component__["a" /* WidgetGiphyComponent */], params: { q: 'funny babies' }, icon: null, class: 'bg-info' }
        },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-light text-dark' } },
        { cols: 1, rows: 1, widget: { component: __WEBPACK_IMPORTED_MODULE_0__app_dashboard_widgets_hello_world_hello_world_component__["a" /* HelloWorldComponent */], icon: null, class: 'bg-dark' } },
        { cols: 3, rows: 2, widget: { component: null, icon: null, class: 'bg-primary' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-success' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-secondary' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
        { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-danger' } }
    ]
};
var environment = {
    production: true,
    dashingConfig: dashingConfig
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map