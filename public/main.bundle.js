webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(191);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(332),
            styles: [__webpack_require__(251)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_brand_brand_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dialogs_add_brand_dialog_add_brand_dialog_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_brand_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_category_category_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_category_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_product_product_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_product_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_order_order_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_order_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_manageorder_manageorder_component__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'brand', component: __WEBPACK_IMPORTED_MODULE_16__components_brand_brand_component__["a" /* BrandComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_22__components_category_category_component__["a" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_24__components_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_26__components_order_order_component__["a" /* OrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'manageorder', component: __WEBPACK_IMPORTED_MODULE_28__components_manageorder_manageorder_component__["a" /* ManageorderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_brand_brand_component__["a" /* BrandComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dialogs_add_brand_dialog_add_brand_dialog_component__["a" /* AddBrandDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_manageorder_manageorder_component__["a" /* ManageorderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["CalendarModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__components_dialogs_add_brand_dialog_add_brand_dialog_component__["a" /* AddBrandDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_21__services_brand_service__["a" /* BrandService */],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["ConfirmationService"],
                __WEBPACK_IMPORTED_MODULE_23__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_25__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_27__services_order_service__["a" /* OrderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_brand_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrimeBrand = /** @class */ (function () {
    function PrimeBrand(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return PrimeBrand;
}());
var BrandComponent = /** @class */ (function () {
    function BrandComponent(router, brandService, confirmationService) {
        this.router = router;
        this.brandService = brandService;
        this.confirmationService = confirmationService;
        this.nameNeeded = false;
        this.brand = new PrimeBrand();
        this.msgDia = [];
        this.location = router.url.substring(1);
    }
    BrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandService.getBrand().subscribe(function (brands) {
            _this.brands = brands.data;
            console.log('brands =>' + JSON.stringify(_this.brands, null, 4));
        });
        this.cols = [
            { field: 'brandName', header: 'Name' },
            { field: 'brandStatus', header: 'Status' }
        ];
        this.status = [
            { label: 'Choose', value: null },
            { label: 'Available', value: 'Available' },
            { label: 'Unavailable', value: 'Unavailable' }
        ];
    };
    BrandComponent.prototype.displayDialog = function () {
        console.log('press display dialog');
        this.newBrand = true;
        this.brand = new PrimeBrand();
        //this.brand = null;
        this.display = true;
        this.nameNeeded = false;
    };
    BrandComponent.prototype.save = function () {
        var _this = this;
        if (this.newBrand) {
            console.log(this.newBrand + ' this.brand=>' + JSON.stringify(this.brand, null, 4));
            //this.brands.push(this.brand);
            this.brandService.addBrand(this.brand).subscribe(function (data) {
                _this.msg = data;
                console.log('this.msg =>1 ' + JSON.stringify(_this.msg, null, 4));
                _this.brandService.getBrand().subscribe(function (brands) {
                    _this.brands = brands.data;
                });
            });
        }
        else {
            console.log('this.brand=>' + JSON.stringify(this.brand, null, 4));
            //this.brands[this.findSelectedBrandIndex()] = this.brand;
            this.brandService.updateBrand(this.brand).subscribe(function (data) {
                _this.msg = data;
                _this.brandService.getBrand().subscribe(function (brands) {
                    _this.brands = brands.data;
                });
            });
        }
        console.log('this.brands=> ' + JSON.stringify(this.brands, null, 4));
        //this.brand = null;
        this.display = false;
    };
    BrandComponent.prototype.onRowDblclick = function (event) {
        console.log('event=>' + JSON.stringify(event, null, 4));
        this.newBrand = false;
        this.brand = this.cloneBrand(event.data);
        //this.brand = new PrimeBrand(event.data._id, event.data.brandName, event.data.brandStatus);
        console.log('row dbl click this.brand=>' + JSON.stringify(this.brand, null, 4));
        this.display = true;
    };
    BrandComponent.prototype.onEditClick = function (event) {
        console.log('onEditClick');
        this.newBrand = false;
        this.brand = this.cloneBrand(event);
        this.display = true;
    };
    BrandComponent.prototype.onRemoveClick = function (brand) {
        var _this = this;
        console.log('onRemoveClick' + 'deleting brand =>  ' + JSON.stringify(brand, null, 4));
        this.confirmationService.confirm({
            message: 'Do you want to delete the brand ' + brand.brandName + '?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.brandService.deleteBrand(brand).subscribe(function (data) {
                    console.log('deleting data => ' + JSON.stringify(data, null, 4));
                    if (data.success) {
                        _this.msgDia = [{ severity: 'success', summary: 'Confirmed', detail: 'You have accepted' }];
                    }
                    else {
                        _this.msgDia = [{ severity: 'error', summary: 'Error', detail: 'Error when deleting this record' }];
                    }
                    _this.brandService.getBrand().subscribe(function (brands) {
                        _this.brands = brands.data;
                    });
                });
            },
            reject: function () {
                //this.msgDia = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    };
    BrandComponent.prototype.cloneBrand = function (b) {
        return Object.assign({}, b);
    };
    BrandComponent.prototype.findSelectedBrandIndex = function () {
        return this.brands.indexOf(this.selectedBrand);
    };
    BrandComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(333),
            styles: [__webpack_require__(252)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
    ], BrandComponent);
    return BrandComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=brand.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Category = /** @class */ (function () {
    function Category(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return Category;
}());
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(catService, confirmationService) {
        this.catService = catService;
        this.confirmationService = confirmationService;
        this.cat = new Category();
        this.msgs = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Home', url: 'http://localhost:4200/home' },
            { label: 'Category' }
        ];
        this.catService.getCat().subscribe(function (cat) {
            _this.categories = cat.data;
            console.log('cat => ' + JSON.stringify(cat, null, 4));
        });
        this.cols = [
            { field: 'catName', header: 'Name' },
            { field: 'catStatus', header: 'Status' }
        ];
        this.status = [
            { label: 'Choose', value: null },
            { label: 'Available', value: 'Available' },
            { label: 'Unavailable', value: 'Unavailable' }
        ];
    };
    CategoryComponent.prototype.displayDialog = function () {
        this.newCat = true;
        this.cat = new Category();
        this.display = true;
    };
    CategoryComponent.prototype.save = function () {
        var _this = this;
        if (this.newCat) {
            this.catService.addCat(this.cat).subscribe(function (data) {
                console.log('data => ' + JSON.stringify(data, null, 4));
                _this.catService.getCat().subscribe(function (cat) {
                    _this.categories = cat.data;
                });
            });
        }
        else {
            this.catService.updateCat(this.cat).subscribe(function (data) {
                console.log('data => ' + JSON.stringify(data, null, 4));
                _this.catService.getCat().subscribe(function (cat) {
                    _this.categories = cat.data;
                });
            });
        }
        this.display = false;
    };
    CategoryComponent.prototype.onRowDblclick = function (event) {
        this.newCat = false;
        this.cat = this.cloneCat(event.data);
        this.display = true;
    };
    CategoryComponent.prototype.onEditClick = function (data) {
        this.newCat = false;
        this.cat = this.cloneCat(data);
        this.display = true;
    };
    CategoryComponent.prototype.onRemoveClick = function (data) {
        var _this = this;
        this.newCat = false;
        this.cat = this.cloneCat(data);
        this.confirmationService.confirm({
            message: 'Do you want to delete the category ' + data.catName + '?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.catService.deleteCat(data).subscribe(function (data) {
                    console.log('deleting data => ' + JSON.stringify(data, null, 4));
                    if (data.success) {
                        _this.msgs = [{ severity: 'success', summary: 'Confirmed', detail: 'You have accepted' }];
                    }
                    else {
                        _this.msgs = [{ severity: 'error', summary: 'Error', detail: 'Error when deleting this record' }];
                    }
                    _this.catService.getCat().subscribe(function (cat) {
                        _this.categories = cat.data;
                    });
                });
            },
            reject: function () {
                //this.msgDia = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    };
    CategoryComponent.prototype.cloneCat = function (c) {
        return Object.assign({}, c);
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(334),
            styles: [__webpack_require__(253)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b;
}());

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(335),
            styles: [__webpack_require__(254)]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBrandDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddBrandDialogComponent = /** @class */ (function () {
    function AddBrandDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.status = [
            { value: true, viewValue: 'Available' },
            { value: false, viewValue: 'Unavailable' }
        ];
    }
    AddBrandDialogComponent.prototype.ngOnInit = function () {
    };
    AddBrandDialogComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    AddBrandDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-brand-dialog',
            template: __webpack_require__(336),
            styles: [__webpack_require__(255)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, Object])
    ], AddBrandDialogComponent);
    return AddBrandDialogComponent;
    var _a;
}());

//# sourceMappingURL=add-brand-dialog.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(337),
            styles: [__webpack_require__(256)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginDetails = {
            //email: this.email,
            username: this.username,
            password: this.password
        };
        // Validate Login Form
        if (!this.validateService.validateLoginForm(loginDetails)) {
            console.log('Please fill in login details');
            this.flashMessagesService.show('Please fill in login details', {
                cssClass: 'alert-danger', timeout: 3000
            });
        }
        // Validate Login Details
        this.authService.validateLoginDetails(loginDetails).subscribe(function (data) {
            console.log('data=> ' + JSON.stringify(data, null, 4));
            if (data.success) {
                _this.authService.storeUserInfo(data.user, data.token);
                _this.router.navigate(['/dashboard']);
                _this.flashMessagesService.show('Login Succeed', {
                    cssClass: 'alert-success', timeout: 3000
                });
                console.log('Login Succeed');
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger', timeout: 3000
                });
                _this.router.navigate(['/login']);
                console.log(data.msg);
            }
        });
        // Store User Info into local storage
        //storeUserInfo(){}
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(338),
            styles: [__webpack_require__(257)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageorderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageorderComponent = /** @class */ (function () {
    function ManageorderComponent(orderService, productService, confirmationService) {
        this.orderService = orderService;
        this.productService = productService;
        this.confirmationService = confirmationService;
        this.products = [];
        this.prodSelection = [];
        this.msgs = [];
    }
    ManageorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Home' },
            { label: 'Order' },
            { label: 'Manage Order' }
        ];
        this.orderStatus = [
            { label: 'Select', value: null },
            { label: 'Processing', value: 'Processing' },
            { label: 'Ready to go', value: 'Ready to go' },
            { label: 'Shipped', value: 'Shipped' },
            { label: 'Delivered', value: 'Delivered' }
        ];
        // Define Payment Types
        this.paymentTypes = [
            { label: 'Select', value: null },
            { label: 'Alipay', value: 'Alipay' },
            { label: 'Wechat', value: 'Wechat' },
            { label: 'Cash', value: 'Cash' },
            { label: 'Bank Deposit', value: 'Bank Deposit' },
            { label: 'Not Applicable', value: 'Not Applicable' },
        ];
        // Define Payment Status
        this.paymentStatuses = [
            { label: 'Select', value: null },
            { label: 'Full Payment', value: 'Full Payment' },
            { label: 'Advance Payment', value: 'Advance Payment' },
            { label: 'No Payment', value: 'No Payment' },
        ];
        // Get all available products for puchase
        this.productService.getProd().subscribe(function (products) {
            console.log('products => ' + JSON.stringify(products, null, 4));
            // set available products dynamically
            for (var i in products.data) {
                if (products.data[i].prodStatus == 'Available') {
                    if (products.data[i].prodSpecs == undefined) {
                        var spec = '';
                    }
                    else {
                        spec = ' - ' + products.data[i].prodSpecs;
                    }
                    _this.prodSelection.push({
                        "label": products.data[i].prodName + spec,
                        //"value": {'name': products.data[i].prodName, 'rate' : products.data[i].prodRate},
                        "value": products.data[i].prodName + spec,
                        "rate": products.data[i].prodRate
                    });
                }
            }
        });
        // Get orders from the db
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders.data;
            console.log('this orders 11=> ' + JSON.stringify(_this.orders, null, 4));
        });
        //console.log('this orders => ' + JSON.stringify(this.orders, null, 4));
    };
    // On double click the order row
    ManageorderComponent.prototype.onRowDblclick = function (event) {
        console.log('event => ' + JSON.stringify(event, null, 4));
        this.onEditClick(event.data);
    };
    // onEditClick event
    ManageorderComponent.prototype.onEditClick = function (row) {
        console.log('Edit Button Clicked');
        console.log('row => ' + JSON.stringify(row, null, 4));
        this.order = row;
        this.displayDialog = true;
        console.log('this.order => ' + JSON.stringify(this.order, null, 4));
    };
    ManageorderComponent.prototype.onEditQuantity = function (event) {
        console.log('Table value changed');
        console.log('event => ' + JSON.stringify(event, null, 4));
        //console.log('row => ' + JSON.stringify(row, null, 4));
        // update item total
        event.data.total = event.data.rate * event.data.quantity;
        // update total
        this.updateTotal();
    };
    // Add Item Click
    ManageorderComponent.prototype.addItem = function () {
        console.log('add item button pressed');
        //this.order.products = [...this.order.products, {name: 'test', rate: 20}];
        this.order.products = this.order.products.concat([{}]);
    };
    ManageorderComponent.prototype.onChange = function (event, prod, col) {
        console.log('event => ' + JSON.stringify(event, null, 4));
        console.log('prod => ' + JSON.stringify(prod, null, 4));
        //console.log('index => ' + JSON.stringify(col, null, 4));
        prod.rate = this.prodSelection.find(function isSelect(select) {
            return select.value === event.value;
        }).rate;
        //this.order.products = [...this.order.products, {name: event.value, rate: 20}];
    };
    // Update Order
    ManageorderComponent.prototype.updateOrder = function () {
        var _this = this;
        console.log('update order pressed');
        console.log('this updated order => ' + JSON.stringify(this.order, null, 4));
        this.orderService.updateOrder(this.order).subscribe(function (data) {
            console.log('data => ' + JSON.stringify(data, null, 4));
            if (data.success) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', detail: 'Order Updated.' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', detail: 'Update failed' });
            }
        });
        this.displayDialog = false;
    };
    // Delete Orde
    ManageorderComponent.prototype.onRemoveOrderClick = function (row) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this order?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.orderService.deleteOrder(row).subscribe(function (data) {
                    if (data.success) {
                        _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Order deleted' }];
                    }
                    else {
                        _this.msgs = [{ severity: 'error', summary: 'Error', detail: 'Failed to delete order ' }];
                    }
                    // Get orders from the db
                    _this.orderService.getOrders().subscribe(function (orders) {
                        _this.orders = orders.data;
                        console.log('this orders 11=> ' + JSON.stringify(_this.orders, null, 4));
                    });
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ManageorderComponent.prototype.onRemoveClick = function (row, index) {
        console.log('row => ' + JSON.stringify(row, null, 4));
        console.log('index => ' + index);
        //this.order.products.splice(i, 1);
        this.order.products = this.order.products.filter(function (val, i) { return i != index; });
        this.updateTotal();
    };
    // Update Total
    ManageorderComponent.prototype.updateTotal = function () {
        // update sub total
        var sub = 0;
        for (var i in this.order.products) {
            console.log('i => ' + this.order.products[i]);
            sub += this.order.products[i].total;
        }
        this.order.subAmount = sub;
        // update grand total
        this.order.grandTotal = (this.order.subAmount + this.order.shipmentFee) * (1 + this.order.profit / 100) - this.order.discount;
        //update due amount
        this.order.dueAmount = this.order.grandTotal - this.order.paidAmount;
    };
    ManageorderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manageorder',
            template: __webpack_require__(339),
            styles: [__webpack_require__(258)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
    ], ManageorderComponent);
    return ManageorderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=manageorder.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessages, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['home']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(340),
            styles: [__webpack_require__(259)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(57);
/* unused harmony export Order */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OProduct = /** @class */ (function () {
    function OProduct(name, rate, quantity, total) {
        this.name = name;
        this.rate = rate;
        this.quantity = quantity;
        this.total = total;
    }
    return OProduct;
}());
var Order = /** @class */ (function () {
    function Order(orderNb, orderDate, clientName, contactNb, address, products, subAmount, totalAmount, profit, discount, shipmentFee, grandTotal, paidAmount, dueAmount, paymentType, paymentStatus, orderStatus, trackNb) {
        this.orderNb = orderNb;
        this.orderDate = orderDate;
        this.clientName = clientName;
        this.contactNb = contactNb;
        this.address = address;
        this.products = products;
        this.subAmount = subAmount;
        this.totalAmount = totalAmount;
        this.profit = profit;
        this.discount = discount;
        this.shipmentFee = shipmentFee;
        this.grandTotal = grandTotal;
        this.paidAmount = paidAmount;
        this.dueAmount = dueAmount;
        this.paymentType = paymentType;
        this.paymentStatus = paymentStatus;
        this.orderStatus = orderStatus;
        this.trackNb = trackNb;
    }
    return Order;
}());

var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, productService) {
        this.orderService = orderService;
        this.productService = productService;
        this.order = new Order();
        //orders: IOrder[];
        this.oproduct = new OProduct();
        this.avblProducts = [];
        //oproducts: IOProduct[] = [];
        this.oproducts = [];
        this.msgs = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Home' },
            { label: 'Order' },
            { label: 'Add Order' }
        ];
        // Define Payment Types
        this.paymentTypes = [
            { label: 'Alipay', value: 'Alipay' },
            { label: 'Wechat', value: 'Wechat' },
            { label: 'Cash', value: 'Cash' },
            { label: 'Bank Deposit', value: 'Bank Deposit' },
            { label: 'Not Applicable', value: 'Not Applicable' },
        ];
        // Define Payment Status
        this.paymentStatuses = [
            { label: 'Full Payment', value: 'Full Payment' },
            { label: 'Advance Payment', value: 'Advance Payment' },
            { label: 'No Payment', value: 'No Payment' },
        ];
        // Get all orders
        /*this.orderService.getOrders().subscribe(orders => {
          this.orders = orders.data;
          console.log('orders => ' + JSON.stringify(orders, null, 4));
        });*/
        // Get all available products for puchase
        /*this.productService.getProd().subscribe(products => {
          console.log('products => ' + JSON.stringify(products, null, 4));
    
    
          // set available products dynamically
          for (var i in products.data) {
            if (products.data[i].prodStatus == 'Available') {
              if (products.data[i].prodSpecs == undefined) {
                var spec = '';
    
              } else {
                spec = ' - ' + products.data[i].prodSpecs;
              }
              this.avblProducts.push({
                "label": products.data[i].prodName + spec,
                //"value": {'name': products.data[i].prodName, 'rate' : products.data[i].prodRate},
                "value": products.data[i].prodName + spec,
                "rate": products.data[i].prodRate
    
              });
    
            }
          }
        });*/
        this.avblProducts = this.getAvblProducts();
    };
    // Get all available products
    OrderComponent.prototype.getAvblProducts = function () {
        var p = [];
        // Get all available products for puchase
        this.productService.getProd().subscribe(function (products) {
            console.log('products => ' + JSON.stringify(products, null, 4));
            // set available products dynamically
            for (var i in products.data) {
                if (products.data[i].prodStatus == 'Available') {
                    if (products.data[i].prodSpecs == undefined) {
                        var spec = '';
                    }
                    else {
                        spec = ' - ' + products.data[i].prodSpecs;
                    }
                    p.push({
                        "label": products.data[i].prodName + spec,
                        //"value": {'name': products.data[i].prodName, 'rate' : products.data[i].prodRate},
                        "value": products.data[i].prodName + spec,
                        "rate": products.data[i].prodRate
                    });
                }
            }
        });
        return p;
    };
    OrderComponent.prototype.showDialogToAdd = function () {
        this.newProd = true;
        this.oproduct = new OProduct();
        this.displayDialog = true;
    };
    // Save Purchase List
    OrderComponent.prototype.savePurList = function () {
        console.log('save button pressed.');
        if (this.oproduct.name == undefined || this.oproduct.rate == undefined || this.oproduct.quantity == undefined || this.oproduct.total == undefined) {
            console.log('something undefined');
            this.msgs = [];
            this.msgs.push({ severity: 'warn', detail: 'Name and Quantity needed.' });
        }
        else {
            var ops = this.oproducts.slice();
            if (this.newProd) {
                ops.push(this.oproduct);
            }
            else {
                ops[this.findSelectedOPIndex()] = this.oproduct;
            }
            this.oproducts = ops;
            this.oproduct = null;
            this.displayDialog = false;
            // update sub amount
            this.updateSub();
            this.updateTotal();
        }
        console.log('this.oproducts => ' + JSON.stringify(this.oproducts, null, 4));
    };
    //Delete Purchase List
    OrderComponent.prototype.delPurList = function () {
        console.log('delete button pressed.');
        var index = this.findSelectedOPIndex();
        this.oproducts = this.oproducts.filter(function (val, i) { return i != index; });
        this.oproduct = null;
        this.displayDialog = false;
        // update sub amount
        this.updateSub();
        this.updateTotal();
    };
    // Update Sub Amount
    OrderComponent.prototype.updateSub = function () {
        var sub = 0;
        for (var i in this.oproducts) {
            console.log('i => ' + this.oproducts[i].total);
            sub += this.oproducts[i].total;
        }
        this.order.subAmount = sub;
        this.order.paidAmount = 0;
    };
    OrderComponent.prototype.onRowSelect = function (event) {
        this.newProd = false;
        this.oproduct = this.cloneProd(event.data);
        this.displayDialog = true;
        console.log('event => ' + JSON.stringify(event, null, 4));
    };
    OrderComponent.prototype.cloneProd = function (p) {
        var product = new OProduct();
        for (var prop in p) {
            console.log('prop => ' + JSON.stringify(prop, null, 4) + 'p => ' + JSON.stringify(p, null, 4));
            product[prop] = p[prop];
        }
        return product;
    };
    OrderComponent.prototype.findSelectedOPIndex = function () {
        return this.oproducts.indexOf(this.selectedProd);
    };
    OrderComponent.prototype.onChange = function (event) {
        this.oproduct.quantity = null;
        this.oproduct.total = null;
        console.log('event => ' + JSON.stringify(event, null, 4));
        this.oproduct.rate = this.avblProducts.find(function isSelect(select) {
            return select.value === event.value;
        }).rate;
        console.log(this.avblProducts.find(function isSelect(select) {
            return select.value === event.value;
        }));
    };
    OrderComponent.prototype.quantityKeyup = function () {
        console.log('quantity key up');
        this.oproduct.total = this.oproduct.rate * this.oproduct.quantity;
    };
    OrderComponent.prototype.updateTotal = function () {
        var gt = 0;
        this.order.paidAmount = 0;
        if (this.order.subAmount == undefined) {
            this.order.subAmount = 0;
        }
        if (this.order.shipmentFee == undefined) {
            this.order.shipmentFee = 0;
        }
        if (this.order.profit == undefined) {
            this.order.profit = 0;
        }
        if (this.order.discount == undefined) {
            this.order.discount = 0;
        }
        console.log('subAmount => ' + this.order.subAmount);
        console.log('shipmentFee => ' + this.order.shipmentFee);
        console.log('profit => ' + this.order.profit);
        console.log('discount => ' + this.order.discount);
        gt = (this.order.subAmount + this.order.shipmentFee) * (1 + this.order.profit / 100) - this.order.discount;
        this.order.grandTotal = gt;
        this.order.dueAmount = this.order.grandTotal - this.order.paidAmount;
        console.log('grandTotal => ' + this.order.grandTotal);
    };
    // Calculate Due Amount
    OrderComponent.prototype.calDue = function () {
        if (this.order.paidAmount == undefined) {
            this.order.paidAmount = 0;
        }
        this.order.dueAmount = this.order.grandTotal - this.order.paidAmount;
    };
    // Save Order to db
    OrderComponent.prototype.saveOrder = function () {
        var _this = this;
        console.log('save order button pressed');
        if (this.order.clientName == undefined || this.order.contactNb == undefined || this.order.orderDate == undefined || this.oproducts.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', detail: 'Order details needed.' });
        }
        else {
            // generate order nuber
            this.order.orderNb = (Math.floor(Math.random() * 1000000)).toString();
            // add products list
            this.order.products = this.oproducts;
            console.log('this.order 21=> ' + JSON.stringify(this.order, null, 4));
            this.orderService.addOrder(this.order).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.msgs.push({ severity: 'success', summary: 'Service Message', detail: 'Order added successfully.' });
                    _this.resetOrder();
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Service Message', detail: 'Failed to add order.' });
                }
            });
        }
        this.resetOrder();
        /*
            console.log('this.order => ' + JSON.stringify(this.order, null, 4));
        */
    };
    // Reset Order
    OrderComponent.prototype.resetOrder = function () {
        console.log('resent order button pressed');
        this.order.clientName = null;
        this.order.contactNb = null;
        this.order.orderDate = null;
        this.order.address = null;
        this.order.trackNb = null;
        this.oproducts = [];
        this.updateSub();
        this.updateTotal();
    };
    // onSelect Date
    OrderComponent.prototype.onSelectDate = function () {
        console.log('order.orderDate => ' + this.order.orderDate);
    };
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(341),
            styles: [__webpack_require__(260)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b;
}());

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_brand_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Product = /** @class */ (function () {
    function Product(id, prodImgName, prodName, prodBrand, prodCat, prodQuantity, prodRate, prodStatus, prodImg, prodSpecs) {
        this.id = id;
        this.prodImgName = prodImgName;
        this.prodName = prodName;
        this.prodBrand = prodBrand;
        this.prodCat = prodCat;
        this.prodQuantity = prodQuantity;
        this.prodRate = prodRate;
        this.prodStatus = prodStatus;
        this.prodImg = prodImg;
        this.prodSpecs = prodSpecs;
    }
    return Product;
}());
var ProductComponent = /** @class */ (function () {
    function ProductComponent(prodService, brandService, catService, confirmationService, validateService, sanitizer) {
        this.prodService = prodService;
        this.brandService = brandService;
        this.catService = catService;
        this.confirmationService = confirmationService;
        this.validateService = validateService;
        this.sanitizer = sanitizer;
        this.formData = new FormData();
        this.avblBrands = [];
        this.avblCat = [];
        this.prod = new Product();
        this.msg = [];
        this.imgMsg = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Home', url: 'http://localhost:4200/home' },
            { label: 'Products' }
        ];
        this.prodService.getProd().subscribe(function (prod) {
            _this.products = prod.data;
            //this.imgBin = this.products;
            //this.img.nativeElement.scr = 'data:image/png;base64,' + prod.data.prodImg.data;
            console.log('this.prod => ' + JSON.stringify(_this.products, null, 4));
            //console.log('this.imgBin => ' + JSON.stringify(this.imgBin, null, 4));
        });
        this.cols = [
            { field: 'prodImg', header: 'Image' },
            { field: 'prodName', header: 'Name' },
            { field: 'prodBrand', header: 'Brand' },
            { field: 'prodCat', header: 'Category' },
            { field: 'prodQuantity', header: 'Quantity' },
            { field: 'prodRate', header: 'Rate' },
            { field: 'prodStatus', header: 'Status' },
            { field: 'prodSpecs', header: 'Specs' }
        ];
        this.status = [
            { label: 'Choose', value: null },
            { label: 'Available', value: 'Available' },
            { label: 'Unavailable', value: 'Unavailable' }
        ];
        // Get all available brands from the db
        this.brandService.getBrand().subscribe(function (brand) {
            //console.log('brand => ' + JSON.stringify(brand, null, 4));
            // set available brands dynamically
            for (var i in brand.data) {
                if (brand.data[i].brandStatus == 'Available') {
                    _this.avblBrands.push({
                        "label": brand.data[i].brandName,
                        "value": brand.data[i].brandName
                    });
                }
            }
        });
        // Get all available categories from the db
        this.catService.getCat().subscribe(function (cat) {
            //console.log('cat => ' + JSON.stringify(cat, null, 4));
            // set available categories dynamically
            for (var i in cat.data) {
                if (cat.data[i].catStatus == 'Available') {
                    _this.avblCat.push({
                        "label": cat.data[i].catName,
                        "value": cat.data[i].catName
                    });
                }
            }
        });
    };
    ProductComponent.prototype.showImg = function (event, img, overlaypanel) {
        var _this = this;
        console.log('show image => ' + JSON.stringify(img, null, 4));
        console.log('img.prodImgName =>' + img.prodImgName);
        //overlaypanel.toggle(event);
        if (img.prodImgName == undefined) {
            this.displayImg = false;
            this.msg = [];
            this.msg.push({ severity: 'info', summary: 'Info Message', detail: 'No image uploaded' });
            //res.json({success: false, msg: ' This product has not image, please add '})
            console.log('img.prodImgName undefined');
        }
        else {
            this.displayImg = true;
            this.prodService.getImage(img.prodImgName).subscribe(function (image) {
                //this.imgBin = image.data.data;
                var src = 'data:image/png;base64,' + image.data.data;
                _this.imgSrc = _this.sanitizer.bypassSecurityTrustUrl(src);
                //overlaypanel.toggle(event);
            });
        }
        overlaypanel.toggle(event);
    };
    ProductComponent.prototype.displayDialog = function () {
        //this.formData.delete('avatar');
        this.fileInput.clear();
        this.newProd = true;
        this.prod = new Product();
        this.display = true;
    };
    ProductComponent.prototype.onSelect = function (event) {
        console.log('event => ' + JSON.stringify(event.files[0], null, 4));
        this.formData.set('avatar', event.files[0]);
    };
    ProductComponent.prototype.save = function () {
        var _this = this;
        console.log('this.prod => ' + JSON.stringify(this.prod, null, 4));
        if (this.validateService.validateProdForm(this.prod)) {
            console.log('validate passed');
            //console.log('fileInput => ' + JSON.stringify(input,null,4));
            this.formData.set('prodName', this.prod.prodName);
            this.formData.set('prodBrand', this.prod.prodBrand);
            this.formData.set('prodCat', this.prod.prodCat);
            this.formData.set('prodQuantity', this.prod.prodQuantity.toString());
            this.formData.set('prodRate', this.prod.prodRate.toString());
            this.formData.set('prodStatus', this.prod.prodStatus);
            this.formData.set('prodSpecs', this.prod.prodSpecs);
            //this.fileInput.upload();
            console.log('this.formData => ' + this.formData);
            console.log('avatar => ' + JSON.stringify(this.formData.getAll('avatar'), null, 4));
            if (this.newProd) {
                //console.log('this.formData => ' + JSON.stringify(this.formData, null, 4));
                console.log('this.formData.avatar =>' + this.formData.getAll('avatar'));
                this.prodService.addProd(this.formData).subscribe(function (data) {
                    console.log('data => 111 ' + JSON.stringify(data, null, 4));
                    _this.prodService.getProd().subscribe(function (products) {
                        _this.products = products.data;
                    });
                });
            }
            else {
                this.formData.set('_id', this.prod._id);
                console.log('this.formData._id => ' + JSON.stringify(this.formData.getAll('_id'), null, 4));
                console.log('updated avatar => ' + JSON.stringify(this.formData.getAll('avatar'), null, 4));
                //console.log('this.formData.avatar => ' + this.formData.getAll('avatar'));
                console.log('update this.formData else =>' + this.formData);
                this.prodService.updateProd(this.formData).subscribe(function (data) {
                    _this.prodService.getProd().subscribe(function (products) {
                        _this.products = products.data;
                    });
                });
            }
            this.display = false;
        }
        else {
            this.formValidation = true;
        }
        this.formData.delete('avatar');
    };
    ProductComponent.prototype.onEditClick = function (rowData) {
        this.newProd = false;
        this.prod = this.cloneProd(rowData);
        this.display = true;
        console.log('rowData => ' + JSON.stringify(rowData, null, 4));
    };
    ProductComponent.prototype.onRemoveClick = function (data) {
        var _this = this;
        this.newProd = false;
        this.prod = this.cloneProd(data);
        this.confirmationService.confirm({
            message: 'Do you want to delete the product ' + data.prodName + '?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.prodService.deleteProd(data).subscribe(function (data) {
                    console.log('deleting data => ' + JSON.stringify(data, null, 4));
                    if (data.success) {
                        _this.msg = [{ severity: 'success', summary: 'Confirmed', detail: 'The product has benn removed.' }];
                    }
                    else {
                        _this.msg = [{ severity: 'error', summary: 'Error', detail: 'Error when deleting this record' }];
                    }
                    _this.prodService.getProd().subscribe(function (products) {
                        _this.products = products.data;
                    });
                });
            },
            reject: function () {
                //this.msgDia = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    };
    ProductComponent.prototype.onRowDblclick = function (event) {
        this.fileInput.clear();
        this.newProd = false;
        this.prod = this.cloneProd(event.data);
        console.log('this.prod => ' + JSON.stringify(this.prod, null, 4));
        this.display = true;
    };
    ProductComponent.prototype.cloneProd = function (p) {
        return Object.assign({}, p);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUpload"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUpload"]) === "function" && _a || Object)
    ], ProductComponent.prototype, "fileInput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgRef'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], ProductComponent.prototype, "img", void 0);
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(342),
            styles: [__webpack_require__(261)]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_brand_service__["a" /* BrandService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DomSanitizer"]) === "function" && _h || Object])
    ], ProductComponent);
    return ProductComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(343),
            styles: [__webpack_require__(262)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessageService, authService, router) {
        this.validateService = validateService;
        this.flashMessageService = flashMessageService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Validate register fields
        if (!this.validateService.validateRegister(user)) {
            console.log('Please fill in all fields');
            this.flashMessageService.show('Please fill in all fields', {
                cssClass: 'alert-danger', timeout: 3000
            });
        }
        // Validate Email format
        if (!this.validateService.validateEmail(user.email)) {
            console.log('Please enter the correct email address');
            this.flashMessageService.show('Please enter the correct email address', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        }
        console.log('onSubmit triggered ' + this.name);
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessageService.show('You are now registered and can log in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessageService.show('Something is wrong, please try again', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(344),
            styles: [__webpack_require__(263)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            //console.log('canActivate => ture');
            return true;
        }
        else {
            //console.log('canActivate => false');
            this.router.navigate(['home']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".center-div {\n  width: 30%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n\n</div>\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<script src=\"../../../../../models/brand.js\"></script>\n<p-growl [value]=\"msgDia\"></p-growl>\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <ol class=\"breadcrumb\">\n      <li><a [routerLink]=\"['/home']\">Home</a></li>\n      <li class=\"active\">{{location}}</li>\n    </ol>\n\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\">Manage Brand</span>\n\n          <button pButton label=\"Add Brand\" icon=\"fa-plus\" style=\"float: right;\" (click)=\"displayDialog()\"></button>\n        </div>\n      </p-header>\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n      </div>\n\n      <p-dataTable [globalFilter]=\"gb\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\" [value]=\"brands\" selectionMode =\"single\" [(selection)]=\"selectedBrand\" (onRowDblclick)=\"onRowDblclick($event)\">\n        <p-column field=\"brandName\" header=\"Name\" [editable]=\"false\"></p-column>\n        <p-column field=\"brandStatus\" header=\"Status\" [editable]=\"false\"></p-column>\n        <p-column>\n          <ng-template pTemplate=\"header\">\n            Edit\n          </ng-template>\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\n            <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"onEditClick(row)\"></button>\n            <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"onRemoveClick(row)\"></button>\n          </ng-template>\n        </p-column>\n\n\n      </p-dataTable>\n\n      <p-footer>\n        <button pButton type=\"button\" icon=\"fa-plus\" label=\"Add Brand\" (click)=\"displayDialog()\"></button>\n      </p-footer>\n    </p-panel>\n\n  </div>\n</div>\n\n\n<p-dialog header=\"Brand Details\" [(visible)]=\"display\" showEffect=\"fade\" [modal]=\"true\" [dismissableMask]=\"true\" [width]=\"500\">\n  <div class=\"ui-grid-row\">\n    <div class=\"ui-grid-col-4\"><label for=\"brandName\">Name ： </label></div>\n    <div class=\"ui-grid-col-8\"><input pInputText id=\"brandName\" [(ngModel)]=\"brand.brandName\"/>\n      <p-message hidden severity=\"error\" text=\"Field is required\"></p-message>\n    </div>\n  </div>\n  <div class=\"ui-grid-row\">\n    <div class=\"ui-grid-col-4\"><label for=\"brandStatus\">Status ： </label></div>\n    <div class=\"ui-grid-col-8\" >\n\n    <p-dropdown  appendTo=\"body\" id=\"brandStatus\" [(ngModel)]=\"brand.brandStatus\" [options]=\"status\" placeholder=\"Select Status\" [style]=\"{'width': '156px'}\"></p-dropdown>\n\n    </div>\n  </div>\n  <p-footer>\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"Close\"></button>\n  </p-footer>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n\n\n\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgDia\"></p-growl>\n<p-breadcrumb [model]=\"items\"></p-breadcrumb>\n<br>\n<br>\n\n<p-panel>\n  <p-header>\n    <div class=\"ui-helper-clearfix\">\n      <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\">Manage Category</span>\n      <button pButton label=\"Add Category\" icon=\"fa-plus\" style=\"float: right;\" (click)=\"displayDialog()\"></button>\n    </div>\n  </p-header>\n  <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n  </div>\n\n  <p-dataTable [globalFilter]=\"gb\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\" [value]=\"categories\" selectionMode =\"single\" [(selection)]=\"selectedBrand\" (onRowDblclick)=\"onRowDblclick($event)\">\n    <p-column field=\"catName\" header=\"Name\" [editable]=\"false\"></p-column>\n    <p-column field=\"catStatus\" header=\"Status\" [editable]=\"false\"></p-column>\n    <p-column>\n      <ng-template pTemplate=\"header\">\n        Edit\n      </ng-template>\n      <ng-template let-row=\"rowData\" pTemplate=\"body\">\n        <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"onEditClick(row)\"></button>\n        <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"onRemoveClick(row)\"></button>\n      </ng-template>\n    </p-column>\n\n\n  </p-dataTable>\n  <p-footer>\n    <button pButton label=\"Add Category\" icon=\"fa-plus\" (click)=\"displayDialog()\"></button>\n  </p-footer>\n</p-panel>\n\n\n\n\n<p-dialog header=\"Category Details\" [(visible)]=\"display\" showEffect=\"fade\" [modal]=\"true\" [dismissableMask]=\"true\" [width]=\"500\">\n  <div class=\"ui-grid-row\">\n    <div class=\"ui-grid-col-4\"><label for=\"catName\">Name ： </label></div>\n    <div class=\"ui-grid-col-8\"><input pInputText id=\"catName\" [(ngModel)]=\"cat.catName\"/>\n      <p-message hidden severity=\"error\" text=\"Field is required\"></p-message>\n    </div>\n  </div>\n  <div class=\"ui-grid-row\">\n    <div class=\"ui-grid-col-4\"><label for=\"catStatus\">Status ： </label></div>\n    <div class=\"ui-grid-col-8\" >\n\n      <p-dropdown  appendTo=\"body\" id=\"catStatus\" [(ngModel)]=\"cat.catStatus\" [options]=\"status\" placeholder=\"Select Status\" [style]=\"{'width': '156px'}\"></p-dropdown>\n\n    </div>\n  </div>\n  <p-footer>\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"Close\"></button>\n  </p-footer>\n</p-dialog>\n\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Brand</h2>\n<mat-dialog-content>\n  <mat-form-field>\n    <input matInput placeholder=\"Brand\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option *ngFor=\"let one of status\" [value]=\"one.value\">{{ one.viewValue }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-fab color=\"primary\" [mat-dialog-close]=\"true\" tabindex=\"1\">Save</button>\n  <button mat-fab color=\"accent\" mat-dialog-close tabindex=\"-1\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Application</h1>\n  <p class=\"lead\">Welcome to our MEAN application.</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web token.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n    <fieldset>\n      <legend>Login Details</legend>\n      <div class=\"form-group\">\n        <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Username</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n        <div class=\"col-lg-10\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> Checkbox\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-lg-10 col-lg-offset-2\">\n          <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<p-breadcrumb [model]=\"items\"></p-breadcrumb>\n<br>\n<br>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n<p-growl [(value)]=\"msgs\"></p-growl>\n<p-panel>\n  <p-header>\n    <div class=\"ui-helper-clearfix\">\n      <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\">Manage Order</span>\n      <button pButton label=\"Add Order\" icon=\"fa-plus\" style=\"float: right;\" (click)=\"displayDialog()\"></button>\n    </div>\n  </p-header>\n  <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n  </div>\n\n  <p-dataTable [globalFilter]=\"gb\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\" [value]=\"orders\"\n               selectionMode=\"single\" [(selection)]=\"selectedOrder\" (onRowDblclick)=\"onRowDblclick($event)\">\n\n\n    <p-column field=\"orderNb\" header=\"Order Number\" [editable]=\"false\"></p-column>\n    <p-column field=\"orderDate\" header=\"Order Date\" [editable]=\"false\"></p-column>\n    <p-column field=\"clientName\" header=\"Client Name\" [editable]=\"false\"></p-column>\n    <p-column field=\"contactNb\" header=\"Contact Number\" [editable]=\"false\"></p-column>\n    <p-column field=\"paymentStatus\" header=\"Payment Status\" [editable]=\"false\"></p-column>\n    <p-column field=\"orderStatus\" header=\"Order Status\" [editable]=\"false\"></p-column>\n    <p-column field=\"trackNb\" header=\"Tracking NB.\" [editable]=\"false\"></p-column>\n\n\n    <p-column>\n      <ng-template pTemplate=\"header\">\n        Edit\n      </ng-template>\n      <ng-template let-row=\"rowData\" pTemplate=\"body\">\n        <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"onEditClick(row)\"></button>\n        <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"onRemoveOrderClick(row)\"></button>\n      </ng-template>\n    </p-column>\n\n\n  </p-dataTable>\n  <p-footer>\n    <button pButton label=\"Add Order\" icon=\"fa-plus\" (click)=\"displayAddOrderDialog()\"></button>\n  </p-footer>\n</p-panel>\n\n\n<p-dialog header=\"Order Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n          [width]=\"600\" *ngIf=\"order\">\n\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label>Order Number ： </label></div>\n      <div class=\"ui-grid-col-3\">{{order.orderNb}}</div>\n      <div class=\"ui-grid-col-3\"><label>Order Date ： </label></div>\n      <!--\n            <div class=\"ui-grid-col-3\"><input pInputText id=\"orderDate\" [(ngModel)]=\"order.orderDate\"/></div>\n      -->\n      <div class=\"ui-grid-col-3\">{{order.orderDate}}</div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label for=\"clientName\">Client Name： </label></div>\n      <div class=\"ui-grid-col-3\"><input pInputText id=\"clientName\" [(ngModel)]=\"order.clientName\"/></div>\n      <div class=\"ui-grid-col-3\"><label for=\"contactNb\">Contact Number ： </label></div>\n      <div class=\"ui-grid-col-3\"><input pInputText id=\"contactNb\" [(ngModel)]=\"order.contactNb\"/></div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label for=\"address\">Shipment Address ： </label></div>\n      <div class=\"ui-grid-col-9\"><input pInputText id=\"address\" [(ngModel)]=\"order.address\"/></div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label for=\"orderStatus\">Order Status ： </label></div>\n      <div class=\"ui-grid-col-3\">\n        <!--\n                <input pInputText id=\"orderStatus\" [(ngModel)]=\"order.orderStatus\"/>\n        -->\n        <p-dropdown appendTo=\"body\" [options]=\"orderStatus\" id=\"orderStatus\" [(ngModel)]=\"order.orderStatus\"\n                    [autoWidth]=\"false\"></p-dropdown>\n      </div>\n      <div class=\"ui-grid-col-3\"><label for=\"trackingNb\">Tracking NB. ： </label></div>\n      <div class=\"ui-grid-col-3\"><input pInputText id=\"trackingNb\" [(ngModel)]=\"order.trackNb\"/></div>\n    </div>\n  </div>\n\n  <br>\n\n  <!--Brife order products list-->\n  <p-dataTable [value]=\"order.products\" [editable]=\"true\" (onEdit)=\"onEditQuantity($event)\"\n               [(selection)]=\"selectedProd\">\n    <p-column field=\"name\" header=\"Item\" [editable]=\"true\">\n      <ng-template let-col let-prod=\"rowData\" pTemplate=\"editor\">\n        <p-dropdown appendTo=\"body\" [(ngModel)]=\"prod[col.field]\" [options]=\"prodSelection\" [autoWidth]=\"false\"\n                    [style]=\"{'width':'100%'}\"\n                    required=\"true\" appendTo=\"body\" (onChange)=\"onChange($event,prod)\"></p-dropdown>\n      </ng-template>\n\n    </p-column>\n\n    <p-column field=\"rate\" header=\"Rate\"></p-column>\n\n    <p-column field=\"quantity\" header=\"Quantity\" [editable]=\"true\"></p-column>\n    <p-column field=\"total\" header=\"Total\"></p-column>\n\n    <p-column>\n      <ng-template pTemplate=\"header\">\n        Edit\n      </ng-template>\n      <ng-template let-row=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\n        <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"onRemoveClick(row, i)\"></button>\n      </ng-template>\n    </p-column>\n\n  </p-dataTable>\n\n\n  <br>\n\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-6\"></div>\n      <div class=\"ui-grid-col-3\"><label>Sub Total ： </label></div>\n      <div class=\"ui-grid-col-3\">{{order.subAmount}}</div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-6\"></div>\n      <div class=\"ui-grid-col-3\"><label>Shipment Fee ： </label></div>\n      <div class=\"ui-grid-col-3\">\n        <div class=\"ui-inputgroup\">\n          <span class=\"ui-inputgroup-addon\">$</span>\n          <input type=\"number\" pInputText placeholder=\"Shipment Fee\" [(ngModel)]=\"order.shipmentFee\"\n                 (keyup)=\"updateTotal()\">\n        </div>\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-6\"></div>\n      <div class=\"ui-grid-col-3\"><label>Profit ： </label></div>\n      <div class=\"ui-grid-col-3\">\n        <!--<input pInputText [(ngModel)]=\"order.profit\"/>-->\n        <div class=\"ui-inputgroup\">\n          <input type=\"number\" pInputText placeholder=\"Profit\" [(ngModel)]=\"order.profit\" (keyup)=\"updateTotal()\">\n          <span class=\"ui-inputgroup-addon\">%</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-6\"></div>\n      <div class=\"ui-grid-col-3\"><label>Discount ： </label></div>\n      <!--\n            <div class=\"ui-grid-col-3\">{{order.discount}}</div>\n      -->\n      <div class=\"ui-grid-col-3\">\n        <div class=\"ui-inputgroup\">\n          <span class=\"ui-inputgroup-addon\">$</span>\n          <input type=\"number\" pInputText placeholder=\"Discount\" [(ngModel)]=\"order.discount\" (keyup)=\"updateTotal()\">\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-6\"></div>\n      <div class=\"ui-grid-col-3\"><label>Total ： </label></div>\n      <div class=\"ui-grid-col-3\">{{order.grandTotal}}</div>\n    </div>\n\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label>Paid Amount ： </label></div>\n      <!--\n            <div class=\"ui-grid-col-3\">{{order.discount}}</div>\n      -->\n      <div class=\"ui-grid-col-3\">\n        <div class=\"ui-inputgroup\">\n          <span class=\"ui-inputgroup-addon\">$</span>\n          <input type=\"number\" pInputText placeholder=\"Paid Amount\" [(ngModel)]=\"order.paidAmount\"\n                 (keyup)=\"updateTotal()\">\n        </div>\n      </div>\n      <div class=\"ui-grid-col-3\"><label>Payment Type ： </label></div>\n      <div class=\"ui-grid-col-3\">\n        <p-dropdown appendTo=\"body\" [options]=\"paymentTypes\" id=\"paymentType\" [(ngModel)]=\"order.paymentType\"\n                   [autoWidth]=\"false\"></p-dropdown>\n      </div>\n\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-3\"><label>Due Amount ： </label></div>\n      <!--\n            <div class=\"ui-grid-col-3\">{{order.discount}}</div>\n      -->\n      <div class=\"ui-grid-col-3\">\n        <div class=\"ui-inputgroup\">\n          <span class=\"ui-inputgroup-addon\">$</span>\n          <input type=\"number\" pInputText placeholder=\"Due Amount\" [(ngModel)]=\"order.dueAmount\"\n                 (keyup)=\"updateTotal()\">\n        </div>\n      </div>\n      <div class=\"ui-grid-col-3\"><label>Payment Status ： </label></div>\n      <div class=\"ui-grid-col-3\">\n        <p-dropdown appendTo=\"body\" [options]=\"paymentStatuses\" [(ngModel)]=\"order.paymentStatus\"\n                    [autoWidth]=\"false\"></p-dropdown>\n      </div>\n    </div>\n  </div>\n\n\n  <p-footer>\n    <button pButton type=\"button\" icon=\"fa-plus\" label=\"Add Item\" class=\"ui-button-info\" [style]=\"{'float':'left'}\"\n            (click)=\"addItem()\"></button>\n\n    <button pButton type=\"button\" icon=\"fa-plus\" label=\"Update\" class=\"ui-button-info\" (click)=\"updateOrder()\"></button>\n    <button pButton type=\"button\" icon=\"fa-list\" label=\"Cancel\" class=\"ui-button-success\"></button>\n  </p-footer>\n\n</p-dialog>\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"navbar.component.ts\"></script>-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['home']\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['dashboard']\"><i class=\"fa fa-dashboard\"></i> Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['brand']\"><i class=\"fa fa-bitcoin\"></i> Brand</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['category']\"><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> Category</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['product']\"><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i> Products</a></li>\n\n        <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Orders <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li>\n              <a [routerLink]=\"['order']\"> Add Orders</a>\n              <a [routerLink]=\"['manageorder']\">Manage Orders</a>\n            </li>\n          </ul>\n        </li>\n\n\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['login']\" >Login</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['register']\">Register</a></li>\n        <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Admin <i class=\"fa fa-user\"></i><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a [routerLink]=\"['profile']\">Profile</a></li>\n            <li><a href=\"#\">Action</a></li>\n            <li class=\"divider\"></li>\n            <li><a (click)=\"onLogoutClick()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<p-breadcrumb [model]=\"items\"></p-breadcrumb>\n<br>\n<br>\n\n<!--\n<p-messages [(value)]=\"msgs\" ></p-messages>\n-->\n\n<p-growl [(value)]=\"msgs\"></p-growl>\n<p-panel>\n  <p-header>\n    Add Order\n  </p-header>\n\n  <!--<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-6\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-calendar\"></i></span>\n        <input type=\"text\" pInputText placeholder=\"Client Name\" >\n        <p-calendar [(ngModel)]=\"value\" placeholder=\"Order Date\"></p-calendar>\n      </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-6\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\n        <input type=\"text\" pInputText placeholder=\"Client Name\" >\n      </div>\n    </div>\n  </div>-->\n\n  <div class=\"ui-g ui-fluid\">\n\n    <div class=\"ui-g-12 ui-md-4\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\n        <input type=\"text\" pInputText placeholder=\"Client Name\" [(ngModel)]=\"order.clientName\">\n      </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-4\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-phone\"></i></span>\n        <input type=\"text\" pInputText placeholder=\"Phone Number\" [(ngModel)]=\"order.contactNb\">\n      </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-4\">\n      <p-calendar [(ngModel)]=\"order.orderDate\" [showIcon]=\"true\" placeholder=\"Order Date\" dateFormat=\"yy-mm-dd\"\n                  (onSelect)=\"onSelectDate()\" dataType=\"string\"></p-calendar>\n    </div>\n\n  </div>\n\n\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-4\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-home\"></i></span>\n        <input type=\"text\" pInputText placeholder=\"Shipment Address\" [(ngModel)]=\"order.address\">\n      </div>\n    </div>\n  </div>\n  <p-dataTable [value]=\"oproducts\" selectionMode=\"single\" [(selection)]=\"selectedProd\"\n               (onRowSelect)=\"onRowSelect($event)\" (onValueChange)=\"updateTotal()\" [responsive]=\"true\">\n    <p-header>Purchase List</p-header>\n    <p-column field=\"name\" header=\"Name\"></p-column>\n    <p-column field=\"rate\" header=\"Rate\"></p-column>\n    <p-column field=\"quantity\" header=\"Quantity\"></p-column>\n    <p-column field=\"total\" header=\"Total\"></p-column>\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\"\n                label=\"Add\"></button>\n      </div>\n    </p-footer>\n  </p-dataTable>\n\n  <br>\n  <br>\n\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"subAmount\">Sub Amount</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"subAmount\" [(ngModel)]=\"order.subAmount\" (keyup)=\"updateTotal()\"/>\n      </div>\n\n\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"paidAmount\">Paid Amount</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"paidAmount\" [(ngModel)]=\"order.paidAmount\" (keyup)=\"calDue()\"/>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"shipmentFee\">Shipment Fee</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"shipmentFee\" [(ngModel)]=\"order.shipmentFee\" (keyup)=\"updateTotal()\"/>\n      </div>\n\n\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"dueAmount\">Due Amount</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"dueAmount\" [(ngModel)]=\"order.dueAmount\"/>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"profit\">Profit %</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"profit\" [(ngModel)]=\"order.profit\" (keyup)=\"updateTotal()\"/>\n      </div>\n\n\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"paymentType\">Payment Type</label></div>\n      <div class=\"ui-grid-col-3\">\n        <!--\n                <input pInputText id=\"paymentType\" [(ngModel)]=\"order.paymentType\"/>\n        -->\n        <p-dropdown appendTo=\"body\" [options]=\"paymentTypes\" id=\"paymentType\" [(ngModel)]=\"order.paymentType\"\n                    placeholder=\"Select Payment Type\" [autoWidth]=\"false\"></p-dropdown>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"discount\">Discount</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"discount\" [(ngModel)]=\"order.discount\" (keyup)=\"updateTotal()\"/>\n      </div>\n\n\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"paymentStatus\">Payment Status</label></div>\n      <div class=\"ui-grid-col-3\">\n        <!--<input pInputText id=\"paymentStatus\" [(ngModel)]=\"order.paymentStatus\"/>-->\n        <p-dropdown appendTo=\"body\" [options]=\"paymentStatuses\" id=\"paymentStatus\" [(ngModel)]=\"order.paymentStatus\"\n                    placeholder=\"Select Payment Status\" [autoWidth]=\"false\"></p-dropdown>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-2\" style=\"text-align: center;\"><label for=\"grandTotal\">Grand Total</label></div>\n      <div class=\"ui-grid-col-3\">\n        <input type=\"number\" id=\"grandTotal\" [(ngModel)]=\"order.grandTotal\"/>\n      </div>\n    </div>\n\n  </div>\n\n  <br>\n  <p-footer>\n    <button pButton type=\"button\" icon=\"fa-plus\" label=\"Save\" class=\"ui-button-info\" (click)=\"saveOrder()\"></button>\n    <button pButton type=\"button\" icon=\"fa-list\" label=\"Reset\" class=\"ui-button-success\"\n            (click)=\"resetOrder()\"></button>\n  </p-footer>\n\n</p-panel>\n\n\n<p-dialog header=\"Purchase Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"\n          [width]=\"400\">\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"oproduct\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"name\">Name</label></div>\n      <div class=\"ui-grid-col-8\">\n        <!--<input pInputText id=\"name\" [(ngModel)]=\"oproduct.name\" [options]=\"avblProducts\" [filter]=\"true\"/>-->\n        <p-dropdown appendTo=\"body\" [options]=\"avblProducts\" id=\"name\" [(ngModel)]=\"oproduct.name\" [filter]=\"true\"\n                    placeholder=\"Select a Product\" [autoWidth]=\"false\" (onChange)=\"onChange($event)\"></p-dropdown>\n\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"rate\">Rate</label></div>\n      <div class=\"ui-grid-col-8\"><input pInputText id=\"rate\" [(ngModel)]=\"oproduct.rate\" required/></div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"quantity\">Quantity</label></div>\n      <div class=\"ui-grid-col-8\"><input pInputText id=\"quantity\" [(ngModel)]=\"oproduct.quantity\"\n                                        (keyup)=\"quantityKeyup()\"/></div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"total\">Total</label></div>\n      <div class=\"ui-grid-col-8\">\n        <div class=\"ui-inputgroup\">\n          <span class=\"ui-inputgroup-addon\">$</span>\n          <input pInputText id=\"total\" [(ngModel)]=\"oproduct.total\"/>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delPurList()\" label=\"Delete\"></button>\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"savePurList()\" label=\"Save\"></button>\n    </div>\n  </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msg\" [life]=\"3000\"></p-growl>\n\n<p-breadcrumb [model]=\"items\"></p-breadcrumb>\n<br>\n<br>\n\n<!--\n<p-messages [(value)]=\"imgMsg\" ></p-messages>\n-->\n<p-panel>\n  <p-header>\n    <div class=\"ui-helper-clearfix\">\n      <span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\">Manage Product</span>\n      <button pButton label=\"Add Product\" icon=\"fa-plus\" style=\"float: right;\" (click)=\"displayDialog()\"></button>\n    </div>\n  </p-header>\n  <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n  </div>\n\n  <p-dataTable [globalFilter]=\"gb\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\" [value]=\"products\"\n               selectionMode=\"single\" [(selection)]=\"selectedBrand\" (onRowDblclick)=\"onRowDblclick($event)\">\n\n    <p-column [style]=\"{'width':'10%','text-align':'center'}\" header=\"Image\" [editable]=\"false\">\n      <ng-template let-img=\"rowData\" pTemplate=\"body\">\n\n        <button type=\"button\" pButton (click)=\"showImg($event,img,op3);\" icon=\"fa-search\"></button>\n      </ng-template>\n\n    </p-column>\n\n\n    <p-column field=\"prodName\" header=\"Name\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodBrand\" header=\"Brand\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodCat\" header=\"Category\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodQuantity\" header=\"Quantity\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodRate\" header=\"Rate\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodSpecs\" header=\"Specs\" [editable]=\"false\"></p-column>\n    <p-column field=\"prodStatus\" header=\"Status\" [editable]=\"false\"></p-column>\n\n\n    <p-column>\n      <ng-template pTemplate=\"header\">\n        Edit\n      </ng-template>\n      <ng-template let-row=\"rowData\" pTemplate=\"body\">\n        <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"onEditClick(row)\"></button>\n        <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"onRemoveClick(row)\"></button>\n      </ng-template>\n    </p-column>\n\n\n  </p-dataTable>\n  <p-footer>\n    <button pButton label=\"Add Product\" icon=\"fa-plus\" (click)=\"displayDialog()\"></button>\n  </p-footer>\n</p-panel>\n\n\n<p-dialog header=\"Product Details\" [(visible)]=\"display\" showEffect=\"fade\" [modal]=\"true\" [dismissableMask]=\"true\"\n          [width]=\"500\">\n\n  <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"avatar\">Image(optional) ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <div>\n        <p-fileUpload #fileInput url=\"http://localhost:3000/products/\" [showUploadButton]=\"false\" id=\"avatar\"\n                      [showCancelButton]=\"false\" name=\"avatar\" accept=\"image/*\" maxFileSize=\"1000000\"\n                      (onSelect)=\"onSelect($event)\" type=\"file\" value=\"null\" ></p-fileUpload>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodName\">Name ： </label></div>\n      <div class=\"ui-grid-col-8\"><input pInputText id=\"prodName\" [(ngModel)]=\"prod.prodName\"/></div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodBrand\">Brand ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <!--\n              <input pInputText id=\"prodBrand\" [(ngModel)]=\"prod.prodBrand\"/>\n        -->\n        <p-dropdown appendTo=\"body\" id=\"prodBrand\" [(ngModel)]=\"prod.prodBrand\" [filter]=\"true\" [options]=\"avblBrands\"\n                    placeholder=\"Select Brand\" [autoWidth]=\"false\"></p-dropdown>\n      </div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodCat\">Category ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <p-dropdown appendTo=\"body\" id=\"prodCat\" [(ngModel)]=\"prod.prodCat\" [filter]=\"true\" [options]=\"avblCat\"\n                    placeholder=\"Select Category\" [autoWidth]=\"false\"></p-dropdown>\n\n      </div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodQuantity\">Quantity ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"prodQuantity\" [(ngModel)]=\"prod.prodQuantity\" value=\"0\" type=\"number\" required/>\n      </div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodRate\">Price ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"prodRate\" [(ngModel)]=\"prod.prodRate\" value=\"0\" placeholder=\"Price\" type=\"number\"\n               required/>\n      </div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodSpecs\">Specs ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <input pInputText id=\"prodSpecs\" [(ngModel)]=\"prod.prodSpecs\" value=\"0\" placeholder=\"Specs\"/>\n      </div>\n    </div>\n\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-4\"><label for=\"prodStatus\">Status ： </label></div>\n      <div class=\"ui-grid-col-8\">\n        <p-dropdown appendTo=\"body\" id=\"prodStatus\" [(ngModel)]=\"prod.prodStatus\" [options]=\"status\"\n                    placeholder=\"Select Status\" [autoWidth]=\"false\"></p-dropdown>\n      </div>\n    </div>\n    <div class=\"ui-grid-row\">\n      <p-message severity=\"error\" text=\"Please fill all fields\" *ngIf=\"formValidation\" life=\"1000\"></p-message>\n    </div>\n  </div>\n  <p-footer>\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"Close\"></button>\n  </p-footer>\n</p-dialog>\n\n<!--Confirmation Dialog-->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n\n\n<!--Show product image if selected-->\n<p-overlayPanel #op3>\n\n  <img [src]=\"imgSrc\" *ngIf=\"displayImg\"/>\n\n</p-overlayPanel>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n<div *ngIf=\"user\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      {{user.username}}\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n    <fieldset>\n      <legend>Register Details</legend>\n      <div class=\"form-group\">\n        <label for=\"inputName\" class=\"col-lg-2 control-label\">Name</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Username</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n        <div class=\"col-lg-10\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> Checkbox\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-lg-10 col-lg-offset-2\">\n          <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\">Register</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.validateLoginDetails = function (loginDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', loginDetails, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserInfo = function (user, token) {
        this.authToken = token;
        this.user = user;
        localStorage.setItem('token', this.authToken);
        localStorage.setItem('user', JSON.stringify(this.user));
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Check If Logged In
    AuthService.prototype.loggedIn = function () {
        //console.log('Token Found => ' + tokenNotExpired());
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.post('users/profile', null, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    // Add Product
    ProductService.prototype.addProd = function (prod) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //console.log('JSON.stringify(prod) => ' + JSON.stringify(prod));
        //headers.append('Content-Type', 'multipart/form-data');
        return this.http.post('products', prod, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get all products from the db
    ProductService.prototype.getProd = function () {
        return this.http.get('products', null)
            .map(function (res) { return res.json(); });
    };
    // Update a product
    ProductService.prototype.updateProd = function (prod) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //headers.append('Content-Type', 'multipart/related');
        //headers.append('Content-Type', 'image/*');
        console.log('prod._id => ' + prod.getAll('_id'));
        console.log('JSON.stringify(prod) => ' + JSON.stringify(prod, null, 4));
        var id = prod.getAll('_id');
        return this.http.put('products/' + id, prod, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Delete a product
    ProductService.prototype.deleteProd = function (prod) {
        return this.http.delete('products/' + prod._id)
            .map(function (res) { return res.json(); });
    };
    // Get a product's image
    ProductService.prototype.getImage = function (imgName) {
        return this.http.get('products/images/' + imgName)
            .map(function (res) { return res.json(); });
    };
    // Get a product by its name
    ProductService.prototype.getProdByName = function () {
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == "" || user.username == "" || user.email == "" || user.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLoginForm = function (loginDetails) {
        if (loginDetails.email == "" || loginDetails.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.isNumber = function (input) {
        var numbers = /^[0-9]+$/;
        if (input.match(numbers)) {
            return true;
        }
        else {
            return false;
        }
    };
    // Validate the product details
    ValidateService.prototype.validateProdForm = function (prodDets) {
        console.log(prodDets.prodName);
        if (prodDets.prodName == undefined || prodDets.prodBrand == undefined || prodDets.prodQuantity == undefined || prodDets.prodCat == undefined || prodDets.prodRate == undefined || prodDets.prodStatus == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandService = /** @class */ (function () {
    function BrandService(http) {
        this.http = http;
    }
    // Add Brand
    BrandService.prototype.addBrand = function (brand) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('brands', brand, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get all brand from the database
    BrandService.prototype.getBrand = function () {
        return this.http.get('brands', null)
            .map(function (res) { return res.json(); });
    };
    // Edit a brand
    BrandService.prototype.updateBrand = function (brand) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('brands/' + brand._id, JSON.stringify(brand), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Delete a brand
    BrandService.prototype.deleteBrand = function (brand) {
        return this.http.delete('brands/' + brand._id)
            .map(function (res) { return res.json(); });
    };
    BrandService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], BrandService);
    return BrandService;
    var _a;
}());

//# sourceMappingURL=brand.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    //  Add Category
    CategoryService.prototype.addCat = function (cat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('categories', cat, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get all categories from the database
    CategoryService.prototype.getCat = function () {
        return this.http.get('categories', null)
            .map(function (res) { return res.json(); });
    };
    // Update a category
    CategoryService.prototype.updateCat = function (cat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('categories/' + cat._id, JSON.stringify(cat), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Delete a category
    CategoryService.prototype.deleteCat = function (cat) {
        return this.http.delete('categories/' + cat._id)
            .map(function (res) { return res.json(); });
    };
    CategoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], CategoryService);
    return CategoryService;
    var _a;
}());

//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    // Add orders
    OrderService.prototype.addOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('orders', order, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Get all orders from the db
    OrderService.prototype.getOrders = function () {
        return this.http.get('orders', null)
            .map(function (res) { return res.json(); });
    };
    // Update Order
    OrderService.prototype.updateOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var id = order._id;
        headers.append('Content-Type', 'application/json');
        return this.http.put('orders/' + id, JSON.stringify(order), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Delete an order
    OrderService.prototype.deleteOrder = function (order) {
        var id = order._id;
        return this.http.delete('orders/' + id)
            .map(function (res) { return res.json(); });
    };
    // Get Purchase List
    OrderService.prototype.getPurList = function () {
        return this.http.get('purchaseList.json')
            .map(function (res) { return res.json(); });
    };
    // Get Available Products
    OrderService.prototype.getAvblProducts = function () {
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());

//# sourceMappingURL=order.service.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.bundle.js.map