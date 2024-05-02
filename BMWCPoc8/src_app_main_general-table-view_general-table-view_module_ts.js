"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_general-table-view_general-table-view_module_ts"],{

/***/ 7959:
/*!******************************************************************************!*\
  !*** ./src/app/main/general-table-view/general-table-view-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralTableViewRoutingModule: () => (/* binding */ GeneralTableViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_shared_components_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/data-view/data-view.component */ 87613);
/* harmony import */ var src_app_shared_components_download_error_download_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/download-error/download-error.component */ 57999);
/* harmony import */ var _general_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-table-view.component */ 85631);
/* harmony import */ var _admin_components_admin_lending_admin_lending_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/components/admin-lending/admin-lending.component */ 99453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








const routes = [{
  path: '',
  component: _general_table_view_component__WEBPACK_IMPORTED_MODULE_3__.GeneralTableViewComponent,
  children: [{
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: _admin_components_admin_lending_admin_lending_component__WEBPACK_IMPORTED_MODULE_4__.AdminLendingComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.SuperAdminAuthGuard]
  }, {
    path: 'data-view',
    component: src_app_shared_components_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_1__.DataViewComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.SuperAdminAuthGuard]
  }, {
    path: 'download-error',
    component: src_app_shared_components_download_error_download_error_component__WEBPACK_IMPORTED_MODULE_2__.DownloadErrorComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.SuperAdminAuthGuard]
  }]
}];
class GeneralTableViewRoutingModule {
  static #_ = this.ɵfac = function GeneralTableViewRoutingModule_Factory(t) {
    return new (t || GeneralTableViewRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: GeneralTableViewRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GeneralTableViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 85631:
/*!*************************************************************************!*\
  !*** ./src/app/main/general-table-view/general-table-view.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralTableViewComponent: () => (/* binding */ GeneralTableViewComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/i18n/en */ 14195);
/* harmony import */ var src_app_shared_i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/i18n/hi */ 21470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);





class GeneralTableViewComponent {
  /**
     * Constructor
     *
     * @param {LanTranslationLoaderService} _lanTranslationLoaderService
     */
  constructor(_lanTranslationLoaderService) {
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
    this._lanTranslationLoaderService.loadTranslations(src_app_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, src_app_shared_i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GeneralTableViewComponent_Factory(t) {
    return new (t || GeneralTableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GeneralTableViewComponent,
    selectors: [["app-general-table-view"]],
    decls: 1,
    vars: 0,
    template: function GeneralTableViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 55441:
/*!**********************************************************************!*\
  !*** ./src/app/main/general-table-view/general-table-view.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralTableViewModule: () => (/* binding */ GeneralTableViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ 28277);
/* harmony import */ var _shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ng-orgchart/orgchart.module */ 55322);
/* harmony import */ var _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-treelist */ 67884);
/* harmony import */ var _general_table_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-table-view-routing.module */ 7959);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _general_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-table-view.component */ 85631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);










//import { DataViewComponent } from 'src/app/shared/components/data-view/data-view.component';
//import { SharedComponentModule } from 'shared-component.module';



//import { DialogsModule } from '@progress/kendo-angular-dialog';
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { SharedComponentModule } from 'shared-component.module';
//import { DataViewComponent } from 'src/app/shared/components/data-view/data-view.component';
class GeneralTableViewModule {
  static #_ = this.ɵfac = function GeneralTableViewModule_Factory(t) {
    return new (t || GeneralTableViewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: GeneralTableViewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.GridModule, _general_table_view_routing_module__WEBPACK_IMPORTED_MODULE_2__.GeneralTableViewRoutingModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_0__.PipeModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_10__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__.DropDownsModule,
    //DialogsModule,
    //ButtonsModule,
    _shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_1__.OrgchartModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.TreeListModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.ExcelModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.PDFModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GeneralTableViewModule, {
    declarations: [
    //RopTriggeredPoComponent,
    // DataViewComponent,
    _general_table_view_component__WEBPACK_IMPORTED_MODULE_4__.GeneralTableViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.GridModule, _general_table_view_routing_module__WEBPACK_IMPORTED_MODULE_2__.GeneralTableViewRoutingModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_0__.PipeModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_10__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__.DropDownsModule,
    //DialogsModule,
    //ButtonsModule,
    _shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_1__.OrgchartModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.TreeListModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.ExcelModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_12__.PDFModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main_general-table-view_general-table-view_module_ts.js.map