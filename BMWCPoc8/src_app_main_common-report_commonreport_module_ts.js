"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_common-report_commonreport_module_ts"],{

/***/ 69708:
/*!*******************************************************************!*\
  !*** ./src/app/main/common-report/commonreport-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportRouting: () => (/* binding */ CommonReportRouting)
/* harmony export */ });
/* harmony import */ var _components_reportviewer_reportviewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/reportviewer/reportviewer.component */ 53550);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _commonreport_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commonreport.component */ 30284);
/* harmony import */ var _components_generic_report_generic_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/generic-report/generic-report.component */ 60570);
/* harmony import */ var _components_commonsales_report_sales_analysis_report_sales_analysis_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/commonsales-report/sales-analysis-report/sales-analysis-report.component */ 70659);
/* harmony import */ var _components_commonsales_report_material_analysis_report_material_analysis_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/commonsales-report/material-analysis-report/material-analysis-report.component */ 94269);
/* harmony import */ var _components_commonsales_report_certificate_analysis_certificate_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/commonsales-report/certificate-analysis/certificate-analysis.component */ 59869);
/* harmony import */ var _components_customreports_customreports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/customreports/customreports.component */ 69118);
/* harmony import */ var _components_inventory_master_reports_item_master_report_item_master_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventory-master-reports/item-master-report/item-master-report.component */ 76278);
/* harmony import */ var _components_inventory_transaction_reports_transaction_activity_report_transaction_activity_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inventory-transaction-reports/transaction-activity-report/transaction-activity-report.component */ 11237);
/* harmony import */ var _components_inventory_transaction_reports_aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inventory-transaction-reports/aging-report/aging-report.component */ 96012);
/* harmony import */ var _components_inventory_transaction_reports_valuation_report_valuation_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inventory-transaction-reports/valuation-report/valuation-report.component */ 81488);
/* harmony import */ var _components_company_information_report_company_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company-information-report/company-information.component */ 28592);
/* harmony import */ var _components_inventory_transaction_reports_transaction_history_report_transaction_history_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inventory-transaction-reports/transaction-history-report/transaction-history-report.component */ 32644);
/* harmony import */ var _components_serial_lot_reports_lot_expiration_report_lot_expiration_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/serial-lot-reports/lot-expiration-report/lot-expiration-report.component */ 78358);
/* harmony import */ var _components_inventory_master_reports_material_property_master_report_material_property_master_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inventory-master-reports/material-property-master-report/material-property-master-report.component */ 47595);
/* harmony import */ var _components_reportgridviewlist_reportgridviewlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/reportgridviewlist/reportgridviewlist.component */ 86747);
/* harmony import */ var _components_physical_property_equation_report_physical_property_equation_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/physical-property-equation-report/physical-property-equation-report.component */ 89585);
/* harmony import */ var _components_audit_history_dashboard_audit_history_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/audit-history-dashboard/audit-history-dashboard.component */ 67502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);

















// import { DrawSampleQcReportComponent } from './components/quality-control-reports/draw-sample-qc/draw-sample-qc.component';





const routes = [{
  path: '',
  component: _commonreport_component__WEBPACK_IMPORTED_MODULE_2__.CommonReportComponent,
  children: [{
    path: '',
    redirectTo: 'report',
    pathMatch: 'full'
  }, {
    path: 'MaterialAnalysis',
    component: _components_commonsales_report_material_analysis_report_material_analysis_report_component__WEBPACK_IMPORTED_MODULE_5__.MaterialAnalysisReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'SalesAnalysis',
    component: _components_commonsales_report_sales_analysis_report_sales_analysis_report_component__WEBPACK_IMPORTED_MODULE_4__.SalesAnalysisReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'CertificateAnalysis',
    component: _components_commonsales_report_certificate_analysis_certificate_analysis_component__WEBPACK_IMPORTED_MODULE_6__.CertificateAnalysisComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'reportviewer',
    component: _components_reportviewer_reportviewer_component__WEBPACK_IMPORTED_MODULE_0__.ReportviewerComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'report/:name',
    component: _components_generic_report_generic_report_component__WEBPACK_IMPORTED_MODULE_3__.GenericReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'customreport/cusrep/:name',
    component: _components_customreports_customreports_component__WEBPACK_IMPORTED_MODULE_7__.CustomreportsComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-master-reports/item-master-report',
    component: _components_inventory_master_reports_item_master_report_item_master_report_component__WEBPACK_IMPORTED_MODULE_8__.ItemMasterReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-transaction-reports/transaction-activity-report',
    component: _components_inventory_transaction_reports_transaction_activity_report_transaction_activity_report_component__WEBPACK_IMPORTED_MODULE_9__.TransactionActivityReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-transaction-reports/inventory-aging-report',
    component: _components_inventory_transaction_reports_aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_10__.AgingReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-transaction-reports/valuation-report',
    component: _components_inventory_transaction_reports_valuation_report_valuation_report_component__WEBPACK_IMPORTED_MODULE_11__.ValuationReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'company-information-report',
    component: _components_company_information_report_company_information_component__WEBPACK_IMPORTED_MODULE_12__.CompanyInformationReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-transaction-reports/transaction-history-report',
    component: _components_inventory_transaction_reports_transaction_history_report_transaction_history_report_component__WEBPACK_IMPORTED_MODULE_13__.TransactionHistoryReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'serial-lot-reports/lot-expiration-report',
    component: _components_serial_lot_reports_lot_expiration_report_lot_expiration_report_component__WEBPACK_IMPORTED_MODULE_14__.LotExpirationComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'inventory-master-reports/material-property-master-report',
    component: _components_inventory_master_reports_material_property_master_report_material_property_master_report_component__WEBPACK_IMPORTED_MODULE_15__.MaterialPropertyMasterReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'reportGridViewList',
    component: _components_reportgridviewlist_reportgridviewlist_component__WEBPACK_IMPORTED_MODULE_16__.ReportgridviewlistComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'physicalProperty-equation-report',
    component: _components_physical_property_equation_report_physical_property_equation_report_component__WEBPACK_IMPORTED_MODULE_17__.PhysicalPropertyEquationReportComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'audithistorydashboard',
    component: _components_audit_history_dashboard_audit_history_dashboard_component__WEBPACK_IMPORTED_MODULE_18__.AuditHistoryDashboardComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }
  // {path: 'quality-control-reports/draw-sample-qc', component: DrawSampleQcReportComponent,canActivate:[AuthGuard]}
  ]
}];

class CommonReportRouting {
  static #_ = this.ɵfac = function CommonReportRouting_Factory(t) {
    return new (t || CommonReportRouting)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: CommonReportRouting
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](CommonReportRouting, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 30284:
/*!**************************************************************!*\
  !*** ./src/app/main/common-report/commonreport.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportComponent: () => (/* binding */ CommonReportComponent)
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 5529);
/* harmony import */ var _i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/hi */ 42444);
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/zh */ 43492);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 34743);
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ 43878);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 79297);
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/vi */ 38983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);










class CommonReportComponent {
  /**
     * Constructor
     *
     * @param {LanTranslationLoaderService} _lanTranslationLoaderService
     */
  constructor(_lanTranslationLoaderService) {
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
    this._lanTranslationLoaderService.loadTranslations(_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale, _i18n_zh__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, _i18n_es__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_vi__WEBPACK_IMPORTED_MODULE_6__.locale);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CommonReportComponent_Factory(t) {
    return new (t || CommonReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CommonReportComponent,
    selectors: [["app-commonreport"]],
    decls: 1,
    vars: 0,
    template: function CommonReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 44216:
/*!***********************************************************!*\
  !*** ./src/app/main/common-report/commonreport.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportModule: () => (/* binding */ CommonReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/pipes/searchdata.pipe */ 80669);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _commonreport_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commonreport-routing.module */ 69708);
/* harmony import */ var _components_generic_report_generic_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generic-report/generic-report.component */ 60570);
/* harmony import */ var _commonreport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonreport.component */ 30284);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/commonreport.service */ 2453);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var src_app_shared_directives_localVariable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/directives/localVariable.directive */ 12206);
/* harmony import */ var _components_commonsales_report_sales_analysis_report_sales_analysis_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/commonsales-report/sales-analysis-report/sales-analysis-report.component */ 70659);
/* harmony import */ var _components_commonsales_report_material_analysis_report_material_analysis_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/commonsales-report/material-analysis-report/material-analysis-report.component */ 94269);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/store */ 36270);
/* harmony import */ var _ngrx_store_common_report_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngrx-store/common-report.reducer */ 22902);
/* harmony import */ var _components_commonsales_report_certificate_analysis_certificate_analysis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/commonsales-report/certificate-analysis/certificate-analysis.component */ 59869);
/* harmony import */ var _components_customreports_customreports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/customreports/customreports.component */ 69118);
/* harmony import */ var _components_reportviewer_reportviewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reportviewer/reportviewer.component */ 53550);
/* harmony import */ var _components_inventory_master_reports_item_master_report_item_master_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inventory-master-reports/item-master-report/item-master-report.component */ 76278);
/* harmony import */ var _components_inventory_transaction_reports_transaction_activity_report_transaction_activity_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inventory-transaction-reports/transaction-activity-report/transaction-activity-report.component */ 11237);
/* harmony import */ var _components_inventory_transaction_reports_aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inventory-transaction-reports/aging-report/aging-report.component */ 96012);
/* harmony import */ var _components_inventory_transaction_reports_valuation_report_valuation_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/inventory-transaction-reports/valuation-report/valuation-report.component */ 81488);
/* harmony import */ var _components_inventory_transaction_reports_transaction_history_report_transaction_history_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/inventory-transaction-reports/transaction-history-report/transaction-history-report.component */ 32644);
/* harmony import */ var _components_company_information_report_company_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/company-information-report/company-information.component */ 28592);
/* harmony import */ var _components_serial_lot_reports_lot_expiration_report_lot_expiration_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/serial-lot-reports/lot-expiration-report/lot-expiration-report.component */ 78358);
/* harmony import */ var _components_inventory_master_reports_material_property_master_report_material_property_master_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/inventory-master-reports/material-property-master-report/material-property-master-report.component */ 47595);
/* harmony import */ var _components_reportgridviewlist_reportgridviewlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/reportgridviewlist/reportgridviewlist.component */ 86747);
/* harmony import */ var _components_physical_property_equation_report_physical_property_equation_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/physical-property-equation-report/physical-property-equation-report.component */ 89585);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _components_audit_history_dashboard_audit_history_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/audit-history-dashboard/audit-history-dashboard.component */ 67502);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 61699);





























// import { DrawSampleQcReportComponent } from './components/quality-control-reports/draw-sample-qc/draw-sample-qc.component';






class CommonReportModule {
  static #_ = this.ɵfac = function CommonReportModule_Factory(t) {
    return new (t || CommonReportModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
    type: CommonReportModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
    providers: [src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchData, _http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__.CommonReportService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__.PipeModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _commonreport_routing_module__WEBPACK_IMPORTED_MODULE_3__.CommonReportRouting, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__.NgxExtendedPdfViewerModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_31__.DatePickerModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_32__.SplitterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreModule.forFeature("CommonReportData", _ngrx_store_common_report_reducer__WEBPACK_IMPORTED_MODULE_10__.reducer)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](CommonReportModule, {
    declarations: [_commonreport_component__WEBPACK_IMPORTED_MODULE_5__.CommonReportComponent, _components_generic_report_generic_report_component__WEBPACK_IMPORTED_MODULE_4__.GenericReportComponent, src_app_shared_directives_localVariable_directive__WEBPACK_IMPORTED_MODULE_7__.LocalVariables, _components_commonsales_report_sales_analysis_report_sales_analysis_report_component__WEBPACK_IMPORTED_MODULE_8__.SalesAnalysisReportComponent, _components_commonsales_report_material_analysis_report_material_analysis_report_component__WEBPACK_IMPORTED_MODULE_9__.MaterialAnalysisReportComponent, _components_commonsales_report_certificate_analysis_certificate_analysis_component__WEBPACK_IMPORTED_MODULE_11__.CertificateAnalysisComponent, _components_customreports_customreports_component__WEBPACK_IMPORTED_MODULE_12__.CustomreportsComponent, _components_reportviewer_reportviewer_component__WEBPACK_IMPORTED_MODULE_13__.ReportviewerComponent, _components_inventory_master_reports_item_master_report_item_master_report_component__WEBPACK_IMPORTED_MODULE_14__.ItemMasterReportComponent, _components_inventory_transaction_reports_transaction_activity_report_transaction_activity_report_component__WEBPACK_IMPORTED_MODULE_15__.TransactionActivityReportComponent, _components_inventory_transaction_reports_aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_16__.AgingReportComponent, _components_inventory_transaction_reports_valuation_report_valuation_report_component__WEBPACK_IMPORTED_MODULE_17__.ValuationReportComponent, _components_inventory_transaction_reports_transaction_history_report_transaction_history_report_component__WEBPACK_IMPORTED_MODULE_18__.TransactionHistoryReportComponent, _components_company_information_report_company_information_component__WEBPACK_IMPORTED_MODULE_19__.CompanyInformationReportComponent, _components_serial_lot_reports_lot_expiration_report_lot_expiration_report_component__WEBPACK_IMPORTED_MODULE_20__.LotExpirationComponent, _components_inventory_master_reports_material_property_master_report_material_property_master_report_component__WEBPACK_IMPORTED_MODULE_21__.MaterialPropertyMasterReportComponent, _components_reportgridviewlist_reportgridviewlist_component__WEBPACK_IMPORTED_MODULE_22__.ReportgridviewlistComponent, _components_physical_property_equation_report_physical_property_equation_report_component__WEBPACK_IMPORTED_MODULE_23__.PhysicalPropertyEquationReportComponent, _components_audit_history_dashboard_audit_history_dashboard_component__WEBPACK_IMPORTED_MODULE_24__.AuditHistoryDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__.PipeModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _commonreport_routing_module__WEBPACK_IMPORTED_MODULE_3__.CommonReportRouting, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__.NgxExtendedPdfViewerModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_31__.DatePickerModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_32__.SplitterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_33__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 67502:
/*!************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/audit-history-dashboard/audit-history-dashboard.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditHistoryDashboardComponent: () => (/* binding */ AuditHistoryDashboardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../http/commonreport.service */ 2453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/hierarchical-data-grid/hierarchical-data-grid.component */ 78896);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 21916);






















function AuditHistoryDashboardComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function AuditHistoryDashboardComponent_div_75_app_hierarchical_data_grid_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-hierarchical-data-grid", 43);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("GridData", ctx_r4.marrGridData1)("ScreenName", ctx_r4.msScreenName)("RecordKey1", ctx_r4.msForScreen);
  }
}
function AuditHistoryDashboardComponent_div_75_app_hierarchical_data_grid_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-hierarchical-data-grid", 44);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("GridData", ctx_r5.marrGridData2)("ScreenName", ctx_r5.msScreenName)("RecordKey1", ctx_r5.msForScreen);
  }
}
function AuditHistoryDashboardComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 17)(1, "div", 35)(2, "kendo-splitter", 36)(3, "kendo-splitter-pane", 37)(4, "div", 17)(5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, AuditHistoryDashboardComponent_div_75_app_hierarchical_data_grid_6_Template, 1, 3, "app-hierarchical-data-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "kendo-splitter-pane", 40)(8, "div", 17)(9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, AuditHistoryDashboardComponent_div_75_app_hierarchical_data_grid_10_Template, 1, 3, "app-hierarchical-data-grid", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("scrollable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.mbIsShowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("collapsible", true)("scrollable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.mbShowCompareGrid);
  }
}
function AuditHistoryDashboardComponent_app_common_task_modal_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function AuditHistoryDashboardComponent_app_common_task_modal_76_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r6.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r2.mobjTaskData);
  }
}
function AuditHistoryDashboardComponent_app_custom_lookup_modal_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function AuditHistoryDashboardComponent_app_custom_lookup_modal_78_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.bmlfSaveLookupField($event));
    })("closeLookup", function AuditHistoryDashboardComponent_app_custom_lookup_modal_78_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("keyData", ctx_r3.mobjLookupKeyData);
  }
}
class AuditHistoryDashboardComponent {
  constructor(route, router, modalservice, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService, activeRoute, objservice) {
    this.route = route;
    this.router = router;
    this.modalservice = modalservice;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.activeRoute = activeRoute;
    this.objservice = objservice;
    this.mbLoadingEnabled = false;
    this.mbIsLoading = false;
    this.mobjUserData = {};
    this.msScreenName = 'AuditHistoryDashboard';
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.mdFromDate = new Date();
    this.mdToDate = new Date();
    this.msForScreen = '';
    this.msForModule = '';
    this.msForModuleCode = '';
    this.marrGridData1 = [];
    this.marrGridData2 = [];
    this.mbIsShowData = false;
    this.mbShowCompareGrid = false;
  }
  ngOnInit() {
    this.msCustomDateFormat = this.dateFormatService.getDateTimeFormat();
    this.mobjUserData = this.lsService.getUserSession();
  }
  bmlfonFromDateChange(value) {
    if (this.mdFromDate == null) {
      this.mdFromDate = new Date();
    }
  }
  bmlfonToDateChange(value) {
    if (this.mdToDate == null) {
      this.mdToDate = new Date();
    }
  }
  bmlfGo() {
    this.marrGridData1 = [];
    this.marrGridData2 = [];
    if (this.msForScreen.length == 0) {
      this.bmlfOpenErrorBlock("AUDITHISTORY.SELECTSCREEN");
      return;
    }
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfCompareTwoDates(this.mdFromDate, this.mdToDate)) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('AUDITHISTORY.VALMSG2'));
      return false;
    }
    let dtTo = new Date(this.mdToDate).setHours(23, 59, 59);
    let pobjReqData = {
      ScreenName: 'AuditHistoryDashboard',
      LookUpKey: this.msForScreen,
      Filter1: moment__WEBPACK_IMPORTED_MODULE_1__(this.mdFromDate).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat),
      Filter2: moment__WEBPACK_IMPORTED_MODULE_1__(dtTo).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat + " HH:mm:ss")
    };
    this.mbIsLoading = false;
    this.mbIsShowData = false;
    this.mbShowCompareGrid = false;
    this.objservice.GETAuditSqlData(pobjReqData).subscribe(rec => {
      if (rec != null) {
        this.mbIsShowData = true;
        this.marrGridData1 = rec;
        this.marrGridData1.DashBaordData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
      } else {
        this.bmlfOpenErrorBlock("COMMON.MSG.NODATA");
        return;
      }
    });
  }
  bmlfCompare() {
    if (this.mbShowCompareGrid == false) {
      this.mbShowCompareGrid = true;
      this.marrGridData2 = Object.assign({}, this.marrGridData1);
    } else {
      this.mbShowCompareGrid = false;
    }
  }
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, pnumRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      if ((psValue == undefined || psValue == '') && psField == "ModuleName") {
        this.msForModuleCode = "";
      }
      return false;
    }
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    let psTitle = "";
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      if (psField == "ModuleName") {
        this.msForModule = "";
        this.msForScreen = "";
        this.msForModuleCode = "";
      } else if (psField == "ScreenName") {
        this.msForScreen = "";
      }
      return false;
    }
    if (this.msForModuleCode == "" && psLookUpKey == "ScreenName") {
      this.msForScreen = "";
      this.bmlfOpenErrorBlock("AUDITHISTORY.SELECTMODULE");
      return;
    }
    this.mbIsLoading = true;
    let psReqData;
    if (psLookUpKey == "ModuleName") {
      psTitle = "Module Name";
      psReqData = {
        "ScreenName": psScreenName,
        "LookUpKey": psLookUpKey,
        "Filter1": "",
        "Filter2": "",
        "Filter3": "",
        "Filter4": "",
        "Filter5": ""
      };
    } else if (psLookUpKey == "ScreenName") {
      psTitle = "Screen Name";
      psReqData = {
        "ScreenName": psScreenName,
        "LookUpKey": psLookUpKey,
        "Filter1": this.msForModuleCode,
        "Filter2": "",
        "Filter3": "",
        "Filter4": "",
        "Filter5": ""
      };
    }
    this.lookupService.getLookup(psReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.bmlfOpenErrorBlock('COMMON.MSG.NODATA');
        return false;
      }
      let obj1 = {};
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.marrLookupGridData = res.LookupData;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.title = psField;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        this.mobjLookupKeyData.title = psTitle;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let parrFilterdArr = [];
          let pobjFirstInput;
          pobjFirstInput = Object.keys(this.marrLookupGridData[0])[0];
          parrFilterdArr = this.marrLookupGridData.filter(obj => {
            if (obj[pobjFirstInput].toUpperCase() == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterdArr.length == 1) {
            this.mobjLookupKeyData.value = parrFilterdArr[0];
            this.mobjLookupKeyData.valueKey = parrFilterdArr[0][pobjFirstInput];
            this.bmlfSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else if (parrFilterdArr.length == 0) {
            if (psField == "ModuleName") {
              this.msForModule = "";
              this.msForScreen = "";
              this.msForModuleCode = "";
            } else if (psField == "ScreenName") {
              this.msForScreen = "";
            }
            this.mbIsLookupModal = true;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        this.bmlfOpenErrorBlock('COMMON.MSG.NODATA');
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  bmlfSaveLookupField(pobjEvent) {
    this.mbIsLookupModal = false;
    if (pobjEvent.field == "ModuleName") {
      this.msForModule = pobjEvent.value["ModuleName"].trim();
      this.msForModuleCode = pobjEvent.value["ModuleCode"].trim();
      this.msForScreen = "";
    } else if (pobjEvent.field == "ScreenName") {
      this.msForScreen = pobjEvent.value["ScreenName"].trim();
    }
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = pobjData.field;
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (pobjData.eleId == "ModuleName") {
          this.msForModule = "";
          this.msForScreen = "";
          this.msForModuleCode = "";
        } else if (pobjData.eleId == "ScreenName") {
          this.msForScreen = "";
        }
      }
      document.getElementById(pobjData.eleId).focus();
    }
  }
  bmlffooteraction(type) {
    if (type == 'CLOSE') {
      this.router.navigate(['main']);
      return;
    }
  }
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Audit History Dashboard.pdf', '_blank');
  }
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function AuditHistoryDashboardComponent_Factory(t) {
    return new (t || AuditHistoryDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__.CommonReportService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: AuditHistoryDashboardComponent,
    selectors: [["app-audit-history-dashboard"]],
    decls: 79,
    vars: 40,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["id", "dtFromDate", "tabindex", "1", 1, "form-control", 3, "ngModel", "format", "placeholder", "ngModelChange", "valueChange"], ["id", "dtToDate", "tabindex", "2", 1, "form-control", 3, "ngModel", "format", "placeholder", "ngModelChange", "valueChange"], ["type", "text", "tabindex", "3", "id", "txtModule", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], ["type", "text", "tabindex", "4", "id", "txtScreen", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["type", "button", "id", "btnGo", "tabindex", "5", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnCompare", "tabindex", "6", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["id", "dlgLookup"], ["style", "z-index: 10000000;", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [1, "col-md-12"], ["orientation", "horizontal"], [3, "scrollable"], ["id", "kendodiv2", 1, "col-md-12"], ["id", "G1", "style", "z-index: 10000000;", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2", 4, "ngIf"], [3, "collapsible", "scrollable"], ["id", "kendodiv1", 1, "col-md-12"], ["id", "G2", "style", "z-index: 10000000;", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2", 4, "ngIf"], ["id", "G1", 2, "z-index", "10000000", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2"], ["id", "G2", 2, "z-index", "10000000", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2"], [3, "taskData", "closeTaskModal"], [2, "z-index", "10000000", 3, "keyData", "saveLookupField", "closeLookup"]],
    template: function AuditHistoryDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, AuditHistoryDashboardComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_button_click_22_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_button_click_25_listener() {
          return ctx.bmlffooteraction("CLOSE");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 22)(37, "kendo-datepicker", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function AuditHistoryDashboardComponent_Template_kendo_datepicker_ngModelChange_37_listener($event) {
          return ctx.mdFromDate = $event;
        })("valueChange", function AuditHistoryDashboardComponent_Template_kendo_datepicker_valueChange_37_listener($event) {
          return ctx.bmlfonFromDateChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 22)(45, "kendo-datepicker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function AuditHistoryDashboardComponent_Template_kendo_datepicker_ngModelChange_45_listener($event) {
          return ctx.mdToDate = $event;
        })("valueChange", function AuditHistoryDashboardComponent_Template_kendo_datepicker_valueChange_45_listener($event) {
          return ctx.bmlfonToDateChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div", 17)(47, "div", 18)(48, "div", 19)(49, "div", 20)(50, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 22)(54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function AuditHistoryDashboardComponent_Template_input_ngModelChange_54_listener($event) {
          return ctx.msForModule = $event;
        })("blur", function AuditHistoryDashboardComponent_Template_input_blur_54_listener() {
          return ctx.bmlfOpenLookupModal("ModuleName", "AuditHistoryDashboard", "ModuleName", "blur", ctx.msForModule, "custom", "txtModule");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_span_click_55_listener() {
          return ctx.bmlfOpenLookupModal("ModuleName", "AuditHistoryDashboard", "ModuleName", "click", ctx.msForModule, "custom", "txtModule");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 18)(58, "div", 19)(59, "div", 20)(60, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 22)(64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function AuditHistoryDashboardComponent_Template_input_ngModelChange_64_listener($event) {
          return ctx.msForScreen = $event;
        })("blur", function AuditHistoryDashboardComponent_Template_input_blur_64_listener() {
          return ctx.bmlfOpenLookupModal("ScreenName", "AuditHistoryDashboard", "ScreenName", "blur", ctx.msForScreen, "custom", "txtScreen");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_span_click_65_listener() {
          return ctx.bmlfOpenLookupModal("ScreenName", "AuditHistoryDashboard", "ScreenName", "click", ctx.msForScreen, "custom", "txtScreen");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_button_click_68_listener() {
          return ctx.bmlfGo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AuditHistoryDashboardComponent_Template_button_click_72_listener() {
          return ctx.bmlfCompare();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](75, AuditHistoryDashboardComponent_div_75_Template, 11, 5, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](76, AuditHistoryDashboardComponent_app_common_task_modal_76_Template, 1, 1, "app-common-task-modal", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](78, AuditHistoryDashboardComponent_app_custom_lookup_modal_78_Template, 1, 1, "app-custom-lookup-modal", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 22, "AUDITHISTORY.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 24, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 26, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](35, 28, "AUDITHISTORY.FROMDATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mdFromDate)("format", ctx.msCustomDateFormat)("placeholder", ctx.msCustomDateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](43, 30, "AUDITHISTORY.TODATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mdToDate)("format", ctx.msCustomDateFormat)("placeholder", ctx.msCustomDateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](52, 32, "AUDITHISTORY.MODULENAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.msForModule);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](62, 34, "AUDITHISTORY.SCREENNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.msForScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](70, 36, "AUDITHISTORY.GO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.marrGridData1.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](74, 38, "AUDITHISTORY.COMPARE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsShowData);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__.CommonTaskModalComponent, _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_14__.HierarchicalDataGridComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DatePickerComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__.SplitterComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__.SplitterPaneComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59869:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/commonsales-report/certificate-analysis/certificate-analysis.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateAnalysisComponent: () => (/* binding */ CertificateAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _models_certificate_analysis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/certificate-analysis.model */ 59383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 21916);















const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function CertificateAnalysisComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CertificateAnalysisComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", obj_r7.PARANAME);
  }
}
function CertificateAnalysisComponent_app_custom_lookup_modal_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-custom-lookup-modal", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("saveLookupField", function CertificateAnalysisComponent_app_custom_lookup_modal_92_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.saveLookupField($event));
    })("closeLookup", function CertificateAnalysisComponent_app_custom_lookup_modal_92_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("keyData", ctx_r5.lookupKeyData);
  }
}
function CertificateAnalysisComponent_app_common_task_modal_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-common-task-modal", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closeTaskModal", function CertificateAnalysisComponent_app_common_task_modal_93_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("taskData", ctx_r6.mobjTaskData);
  }
}
class CertificateAnalysisComponent {
  constructor(router, service, lsService, utilService, lookupService, alertservice, dtService, modalservice) {
    this.router = router;
    this.service = service;
    this.lsService = lsService;
    this.utilService = utilService;
    this.lookupService = lookupService;
    this.alertservice = alertservice;
    this.dtService = dtService;
    this.modalservice = modalservice;
    this.loaderEnabled = false;
    this.isLookupModal = false;
    this.screenName = "Certificate of Analysis";
    this.certificateModel = new _models_certificate_analysis_model__WEBPACK_IMPORTED_MODULE_0__.CertificateAnalysisModel();
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.screenModeUpdate = "I";
    this.paramValueArray = [];
    this.checkval = false;
    this.pdfSrc = " ";
    this.mobjUserData = {};
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
  }
  ngOnInit() {
    this.bmeDateFormat = this.dtService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.getParam(this.screenName);
  }
  onProcess() {
    this.loaderEnabled = true;
    let pDefaultReportType = localStorage.getItem('reportType');
    let reportObj = {};
    let reportData = {
      "ReportName": this.screenName,
      "Sales_Order_No": this.certificateModel.Sales_Order_No,
      "Desc_Sales_Order_No": this.certificateModel.Desc_Sales_Order_No,
      "Item_key": this.certificateModel.Item_key,
      "Desc_Item_key": this.certificateModel.Desc_Item_key,
      "Location": this.certificateModel.Location,
      "Desc_Location": this.certificateModel.Desc_Location,
      "Lot_No": this.certificateModel.Lot_No,
      "Desc_Lot_No": this.certificateModel.Desc_Lot_No,
      "BinNo": this.certificateModel.BinNo ? this.certificateModel.BinNo : '',
      "ListingFlag": false,
      "ListingVariable": ''
    };
    this.service.GetReportData(reportData).subscribe(res => {
      this.loaderEnabled = false;
      if (res != null) {
        //if (res.Response[0].ResponseText == "Success") {
        if (res.Response[0].ErrorCode == "") {
          this.pdfSrc = res.Response[0].Pdfpath;
          //this.pdfSrc = res.Response[0].Pdfpath
          //this.modalservice.open(id);
          let pPDFSrc = res.Response[0].Pdfpath;
          if (pDefaultReportType == 'Print') {
            this.utilService.bmgfPrintPDF(pPDFSrc);
          } else if (pDefaultReportType == 'NewTab') {
            this.utilService.bmgfOpenPDFNewTab(pPDFSrc);
          } else {
            this.utilService.bmgfDownloadFile(pPDFSrc, this.screenName, pDefaultReportType);
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            this.onOpenErrorBlock(res.Response[0].ResponseText); //scr 152829 
          } else {
            this.onOpenErrorBlock("No Data Found");
          }
          this.loaderEnabled = false;
        }
      }
    }, error => {
      this.loaderEnabled = false;
    });
  }
  saveLookupField(event) {
    debugger;
    let ctrlName = event.controlName;
    let descCtrlName = 'Desc_' + event.controlName;
    if (ctrlName == "Item_key") {
      this.certificateModel[ctrlName] = event.valueKey;
      this.certificateModel[descCtrlName] = event.value['Description'];
      this.certificateModel["Location"] = event.value['Location'];
    }
    if (ctrlName == "Sales_Order_No") {
      this.certificateModel[ctrlName] = event.valueKey;
      this.certificateModel[descCtrlName] = event.value['Custkey'];
    }
    if (ctrlName == "Lot_No") {
      this.certificateModel.BinNo = event.value['BinNo'];
      this.certificateModel[ctrlName] = event.valueKey;
    } else {
      this.certificateModel[ctrlName] = event.valueKey;
    }
    this.isLookupModal = false;
  }
  closeLookupModal(event) {
    this.isLookupModal = event.isLookupModal;
    document.getElementById(event.controlName).focus();
  }
  openLookupModal(lookupkey, event, ngModelName) {
    let data = {};
    if (lookupkey == "ItemKey" || lookupkey == "LotNo") {
      data = {
        ScreenName: 'Certificate of Analysis',
        LookUpKey: lookupkey,
        Filter1: this.certificateModel.Sales_Order_No
      };
    } else {
      data = {
        ScreenName: 'Certificate of Analysis',
        LookUpKey: lookupkey
      };
    }
    let value = event.target.value;
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.loaderEnabled = true;
    if (event.type == "blur" && value == '') {
      let descName = "Desc_" + ngModelName;
      this.certificateModel[descName] = "";
      if (lookupkey == "ItemKey") {
        this.certificateModel['Location'] = '';
      }
      this.loaderEnabled = false;
      return;
    }
    this.lookupService.getLookup(data).subscribe(res => {
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.LookupGridData = res.LookupData;
        this.lookupKeyData.field = lookupkey;
        this.lookupKeyData.gridData = this.LookupGridData;
        this.lookupKeyData.controlName = ngModelName;
        this.loaderEnabled = false;
        this.isLookupModal = true;
        if (value) {
          this.lookupKeyData.searchValue = value;
        } else {
          this.lookupKeyData.searchValue = '';
        }
        if (event.type == 'blur' && value) {
          let tempKey = Object.keys(this.LookupGridData[0]);
          let inputKey = tempKey[0];
          let filterdArr = [];
          filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toUpperCase() == value.toUpperCase());
          if (filterdArr.length == 1) {
            this.lookupKeyData.value = filterdArr[0];
            let tempFiltValue = filterdArr[0];
            this.lookupKeyData.valueKey = tempFiltValue[inputKey];
            this.saveLookupField(this.lookupKeyData);
            this.isLookupModal = false;
          } else {
            this.isLookupModal = true;
          }
        } else if (event.type == 'click') {
          this.isLookupModal = true;
        }
      } else {
        this.onOpenErrorBlock('No Data');
        this.loaderEnabled = false;
      }
    });
  }
  onOpenErrorBlock(msg) {
    this.alertservice.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  getParam(scr) {
    this.loaderEnabled = true;
    this.service.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.loaderEnabled = false;
      } else {
        console.trace();
        console.error("Res Is Null");
        this.loaderEnabled = false;
      }
    });
  }
  onParameterSave() {
    let paramValue = this.paramCtrl.nativeElement.value;
    let newObj = this.certificateModel;
    delete newObj['Desc_Lot_No'];
    if (paramValue == '') {
      this.onOpenErrorBlock('Parameter cannot be empty');
      return;
    } else {
      this.loaderEnabled = true;
      this.screenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.screenName;
      oArray.some(res => {
        if (res.value == paramValue) {
          this.screenModeUpdate = 'U';
          return true;
        }
      });
      jObj["UpdateMode"] = this.screenModeUpdate;
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        let tempJObj = {};
        tempJObj["ControlName"] = _models_certificate_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate[key];
        tempJObj["ControlValue"] = newObj[key];
        tempJObj["RecId"] = counterRecId++;
        jArray.push(tempJObj);
      });
      this.service.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            this.paramCtrl.nativeElement.value = "";
            this.loaderEnabled = false;
            this.getParam(this.screenName);
          } else {
            alert('Cant Save');
            console.trace();
            console.error('Save error');
            this.loaderEnabled = false;
          }
        }
      });
    }
  }
  onParameterDelete() {
    let oParaValue = this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock('Select Report Parameter.');
      return;
    } else {
      let oArray = [...this.dataListCtrl.nativeElement.options];
      if (oArray.length != 0) {
        oArray.some(res => {
          if (res.value == oParaValue) {
            this.checkval = false;
            this.loaderEnabled = true;
            this.deleteApiParam(oParaValue);
            return true;
          } else {
            this.checkval = true;
            return false;
          }
        });
      } else {
        this.onOpenErrorBlock('Invalid Parameter');
        return;
      }
      if (this.checkval == true) {
        this.onOpenErrorBlock('Invalid Paramenter');
      }
    }
  }
  onParamchange(e) {
    try {
      let pValue = e.target.value;
      let optionArray = [...this.dataListCtrl.nativeElement.options];
      optionArray.some(res => {
        if (pValue == res.value) {
          this.fetchParamData(pValue);
          return true;
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.loaderEnabled = true;
    this.service.getReportParameterValue(this.screenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.clearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.loaderEnabled = false;
      }
    });
  }
  fillControlFromParam(resData) {
    console.log(_models_certificate_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate);
    resData.forEach(element => {
      let key = this.getKeyFromValue(element.CONTROLNAME);
      this.certificateModel[key] = element.CONTROLVALUE;
    });
    this.loaderEnabled = false;
  }
  getKeyFromValue(value) {
    let tempKey = Object.keys(this.certificateModel).find(data => {
      return _models_certificate_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate[data] == value;
    });
    return tempKey;
  }
  deleteApiParam(oParaValue) {
    this.service.DeleteReportParameter(this.screenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock('Deleted Successfully.');
          this.paramCtrl.nativeElement.value = "";
          this.clearModel();
          this.getParam(this.screenName);
          this.loaderEnabled = false;
          return true;
        }
      }
    });
  }
  clearModel() {
    Object.keys(this.certificateModel).forEach(keys => {
      this.certificateModel[keys] = " ";
    });
  }
  pdfLoad() {
    this.loaderEnabled = false;
  }
  closeInnerModal(id) {
    this.modalservice.close(id);
    this.loaderEnabled = false;
  }
  onclose() {
    this.router.navigate(['main']);
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.screenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function CertificateAnalysisComponent_Factory(t) {
    return new (t || CertificateAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_1__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_3__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: CertificateAnalysisComponent,
    selectors: [["app-certificate-analysis"]],
    viewQuery: function CertificateAnalysisComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    decls: 94,
    vars: 18,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-11", "page-head-col"], [1, "p_10"], [1, "col-1", "px-2", "page-head-col"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["onclick", "window.open('../../../../../../assets/help files/Certificate of Analysis.pdf','_blank');", "type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn", "p-0", "pt-2"], [2, "font-size", "21px"], ["class", "loader-outer", 4, "ngIf"], [1, "col-md-12", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "flex_box", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "input"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "custom_footer", "form-container"], ["mainForm", "ngForm"], [1, "col-md-12", "xs_p_0"], [1, "col-md-6", "col-lg-4", "custom_flex", "md_p_r_30"], ["type", "text", "name", "Sales_Order_No", "id", "Sales_Order_No", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-3", "col-lg-4", "custom_flex", "md_p_r_30"], ["id", "Sales_Order_No", 1, "col-form-label"], ["type", "text", "name", "Item_key", "id", "Item_key", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Item_key", 1, "col-form-label"], ["type", "text", "name", "Location", "id", "Location", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Lot_No", "id", "Lot_No", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Lot_No", 1, "col-form-label"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function CertificateAnalysisComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "ul")(12, "li")(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_a_click_13_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "li")(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_a_click_17_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 12)(21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CertificateAnalysisComponent_div_23_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Parameter");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 19)(30, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function CertificateAnalysisComponent_Template_input_input_30_listener($event) {
          return ctx.onParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "datalist", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, CertificateAnalysisComponent_ng_container_34_Template, 2, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_button_click_36_listener() {
          return ctx.onParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_button_click_39_listener() {
          return ctx.onParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "form", 29, 30)(43, "div", 31)(44, "div", 16)(45, "div", 17)(46, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Sales Order No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 32)(49, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CertificateAnalysisComponent_Template_input_ngModelChange_49_listener($event) {
          return ctx.certificateModel.Sales_Order_No = $event;
        })("blur", function CertificateAnalysisComponent_Template_input_blur_49_listener($event) {
          return ctx.openLookupModal("SalesOrderNo", $event, "Sales_Order_No");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_span_click_50_listener($event) {
          return ctx.openLookupModal("SalesOrderNo", $event, "Sales_Order_No");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 36)(53, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 31)(56, "div", 16)(57, "div", 17)(58, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "ItemKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 32)(61, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CertificateAnalysisComponent_Template_input_ngModelChange_61_listener($event) {
          return ctx.certificateModel.Item_key = $event;
        })("blur", function CertificateAnalysisComponent_Template_input_blur_61_listener($event) {
          return ctx.openLookupModal("ItemKey", $event, "Item_key");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_span_click_62_listener($event) {
          return ctx.openLookupModal("ItemKey", $event, "Item_key");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 36)(65, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 31)(68, "div", 16)(69, "div", 17)(70, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 32)(73, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CertificateAnalysisComponent_Template_input_ngModelChange_73_listener($event) {
          return ctx.certificateModel.Location = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 31)(75, "div", 16)(76, "div", 17)(77, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Lot No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 32)(80, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CertificateAnalysisComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.certificateModel.Lot_No = $event;
        })("blur", function CertificateAnalysisComponent_Template_input_blur_80_listener($event) {
          return ctx.openLookupModal("LotNo", $event, "Lot_No");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_span_click_81_listener($event) {
          return ctx.openLookupModal("LotNo", $event, "Lot_No");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 36)(84, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "footer", 43)(87, "div", 44)(88, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_button_click_88_listener() {
          return ctx.onProcess();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CertificateAnalysisComponent_Template_button_click_90_listener() {
          return ctx.onclose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](92, CertificateAnalysisComponent_app_custom_lookup_modal_92_Template, 1, 1, "app-custom-lookup-modal", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](93, CertificateAnalysisComponent_app_common_task_modal_93_Template, 1, 1, "app-common-task-modal", 48);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.screenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 14, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 16, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.certificateModel.Sales_Order_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.certificateModel.Desc_Sales_Order_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.certificateModel.Item_key);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.certificateModel.Desc_Item_key);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.certificateModel.Location);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.certificateModel.Lot_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.certificateModel.Desc_Lot_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_8__.CustomLookupModalComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_9__.CommonTaskModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvY29tbW9uc2FsZXMtcmVwb3J0L2NlcnRpZmljYXRlLWFuYWx5c2lzL2NlcnRpZmljYXRlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvY29tbW9uc2FsZXMtcmVwb3J0L2NlcnRpZmljYXRlLWFuYWx5c2lzL2NlcnRpZmljYXRlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0UsdUJBQUE7QUNDTjs7QURHRTtFQUNFLG9CQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzczYTNjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLm1vZGFsLWZvb3RlcntcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21fZm9vdGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQzcHg7XHJcbiAgfSIsIi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2EzYztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1c3RvbV9mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 94269:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/commonsales-report/material-analysis-report/material-analysis-report.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialAnalysisReportComponent: () => (/* binding */ MaterialAnalysisReportComponent)
/* harmony export */ });
/* harmony import */ var _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/material-analysis.model */ 71580);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store_common_report_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ngrx-store/common-report.actions */ 75122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 36270);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);























const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function MaterialAnalysisReportComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MaterialAnalysisReportComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", obj_r7.PARANAME);
  }
}
function MaterialAnalysisReportComponent_app_custom_lookup_modal_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function MaterialAnalysisReportComponent_app_custom_lookup_modal_166_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.saveLookupField($event));
    })("closeLookup", function MaterialAnalysisReportComponent_app_custom_lookup_modal_166_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("keyData", ctx_r6.lookupKeyData);
  }
}
const _c2 = function () {
  return {
    checkboxOnly: true
  };
};
const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    buttonCount: a0,
    info: a1,
    type: a2,
    pageSizes: a3,
    previousNext: a4
  };
};
class MaterialAnalysisReportComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  constructor(dtService, lsService, service, lookupService, alertservice, router, modalservice, store, dateFormatService, objToastService, objUtil, userFieldService) {
    super(lsService, dateFormatService, userFieldService, objToastService, objUtil);
    this.dtService = dtService;
    this.lsService = lsService;
    this.service = service;
    this.lookupService = lookupService;
    this.alertservice = alertservice;
    this.router = router;
    this.modalservice = modalservice;
    this.store = store;
    this.dateFormatService = dateFormatService;
    this.objToastService = objToastService;
    this.objUtil = objUtil;
    this.userFieldService = userFieldService;
    this.loaderEnabled = false;
    this.isLookupModal = false;
    this.screenName = "Material Analysis Report";
    this.MaterialAnalysisReportModel = new _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.MaterialAnalysisModel();
    this.MaterialAnalysisReportModelCopy = new _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.MaterialAnalysisModel();
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.screenModeUpdate = "I";
    this.paramValueArray = [];
    this.checkval = false;
    this.arraySelectedSalesOrder = [];
    this.pdfSrc = " ";
  }
  ngOnInit() {
    let initialData = {
      Order_Date_From: new Date(),
      Order_Date_To: new Date(),
      Rd_Summary: "true"
    };
    this.arraySelectedSalesOrder = [];
    this.bmeDateFormat = this.dtService.getDateFormat();
    this.getParam(this.screenName);
    this.store.dispatch(new _ngrx_store_common_report_actions__WEBPACK_IMPORTED_MODULE_3__.LoadCommonReports(initialData));
  }
  saveLookupField(event) {
    let ctrlName = event.controlName;
    let result = this.ValidateControls(ctrlName, event.valueKey);
    if (result == true) {
      let descCtrlName = 'Desc_' + event.controlName;
      this.MaterialAnalysisReportModel[ctrlName] = event.valueKey;
      if (ctrlName == "Status_Treat_Retest" || ctrlName == "Status_Treat_Hold") {
        this.MaterialAnalysisReportModel[descCtrlName] = event.value['Description'];
      }
      if (ctrlName == "Customer_From" || ctrlName == "Customer_To") {
        this.MaterialAnalysisReportModel[descCtrlName] = event.value['Customer_Name'];
      }
      this.isLookupModal = false;
    } else {
      this.isLookupModal = false;
    }
  }
  ValidateControls(ctrlName, value) {
    if (ctrlName.includes("From") == true) {
      if (this.MaterialAnalysisReportModel[_models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ControlMap[ctrlName]] == "") {
        return true;
      } else if (value > this.MaterialAnalysisReportModel[_models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ControlMap[ctrlName]]) {
        this.onOpenErrorBlock('To value cannot be less than from value');
        return false;
      } else {
        return true;
      }
    } else {
      if (this.MaterialAnalysisReportModel[_models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ControlMap[ctrlName]] == "") {
        return true;
      } else if (value < this.MaterialAnalysisReportModel[_models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ControlMap[ctrlName]]) {
        this.onOpenErrorBlock('To value cannot be less than from value');
        return false;
      } else {
        return true;
      }
    }
  }
  closeLookupModal(event) {
    this.isLookupModal = event.isLookupModal;
    document.getElementById(event.controlName).focus();
  }
  openLookupModal(lookupkey, event, ngModelName) {
    let data = {
      ScreenName: 'Material Analysis Report',
      LookUpKey: lookupkey
    };
    let value = event.target.value;
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.loaderEnabled = true;
    if (event.type == "blur" && value == '') {
      let descName = "Desc_" + ngModelName;
      this.MaterialAnalysisReportModel[descName] = " ";
      this.loaderEnabled = false;
      return;
    }
    this.lookupService.getLookup(data).subscribe(res => {
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.LookupGridData = res.LookupData;
        this.lookupKeyData.field = lookupkey;
        this.lookupKeyData.gridData = this.LookupGridData;
        this.lookupKeyData.controlName = ngModelName;
        this.loaderEnabled = false;
        this.isLookupModal = true;
        if (value) {
          this.lookupKeyData.searchValue = value;
        } else {
          this.lookupKeyData.searchValue = '';
        }
        if (event.type == 'blur' && value) {
          let tempKey = Object.keys(this.LookupGridData[0]);
          let inputKey = tempKey[0];
          let filterdArr = [];
          filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toUpperCase() == value.toUpperCase());
          if (filterdArr.length == 1) {
            this.lookupKeyData.value = filterdArr[0];
            let tempFiltValue = filterdArr[0];
            this.lookupKeyData.valueKey = tempFiltValue[inputKey];
            this.saveLookupField(this.lookupKeyData);
            this.isLookupModal = false;
          } else {
            this.isLookupModal = true;
          }
        } else if (event.type == 'click') {
          this.isLookupModal = true;
        }
      } else {
        this.onOpenErrorBlock('No Data');
      }
    });
  }
  onOpenErrorBlock(msg) {
    this.alertservice.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  onFetch(jObj) {
    let formatedDateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(jObj.Order_Date_From).format("YYYY/MM/DD");
    let formatedDateTo = moment__WEBPACK_IMPORTED_MODULE_2__(jObj.Order_Date_To).format("YYYY/MM/DD");
    let dataSql = "Select A.OrdNo,A.OrdDate as OrderDate,A.Statusflg as OrderStatus,B.ItemKey,B.Description,B.Location,B.ReqDate As RequestedDate,QtyOrd as OrderQuantity,B.QtyRemn as RemainingQuantity,B.UOM,C.FormulaID,C.AssemblyType,C.FillLevel,C.FillMeasuredIN,C.FillUOM,B.RowNum,A.CustKey From OEHDR A,OELIN B, Mbmbomh C Where Order_type = 'Normal' And A.StatusFlg in ('NEW','OPEN') And A.OrdNo =B.OrdNo And C.Assembly_Item_Key =B.Itemkey And C.Assembly_Location=B.Location And C.Status ='REL' And  substring(B.LineMast,3,1)<> 1  And A.OrdDate >= '" + formatedDateFrom + "' And A.OrdDate <= '" + formatedDateTo + "' And A.CustKey>= '" + jObj.Customer_From + "' And A.CustKey<= '" + jObj.Customer_To + "' And A.Ordno >= '" + jObj.Sales_Order_No_From + "' And A.Ordno <= '" + jObj.Sales_Order_No_To + "' Order by A.OrdNo";
    let json = {
      SqlQuery: dataSql
    };
    this.loaderEnabled = true;
    this.service.getCustomSql(json).subscribe(res => {
      if (res != null) {
        this.ModalData = res.LookupData;
        this.loaderEnabled = false;
      } else {
        this.loaderEnabled = false;
        this.onOpenErrorBlock("No Data");
      }
    });
  }
  onParamchange(e) {
    try {
      let pValue = e.target.value;
      let optionArray = [...this.dataListCtrl.nativeElement.options];
      optionArray.some(res => {
        if (pValue == res.value) {
          this.fetchParamData(pValue);
          return true;
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.loaderEnabled = true;
    this.service.getReportParameterValue(this.screenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.clearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.loaderEnabled = false;
      }
    });
  }
  fillControlFromParam(resData) {
    debugger;
    resData.forEach(element => {
      if (element.CONTROLNAME == "pvDtDatesTo(2)" || element.CONTROLNAME == "pvDtDatesFrom(2)") {
        let key = this.getKeyFromValue(element.CONTROLNAME);
        this.MaterialAnalysisReportModel[key] = new Date(element.CONTROLVALUE);
      } else {
        let key = this.getKeyFromValue(element.CONTROLNAME);
        if (key == "Summary" && element.CONTROLVALUE == "True") {
          this.MaterialAnalysisReportModel["Rd_Summary"] = 'true';
        } else if (key == "Detail" && element.CONTROLVALUE == "True") {
          this.MaterialAnalysisReportModel["Rd_Summary"] = 'false';
        } else {
          this.MaterialAnalysisReportModel[key] = element.CONTROLVALUE;
        }
      }
    });
    this.loaderEnabled = false;
  }
  getKeyFromValue(value) {
    let newObj = this.modifyObject(this.MaterialAnalysisReportModel);
    let tempKey = Object.keys(newObj).find(data => {
      return _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMap[data] == value;
    });
    return tempKey;
  }
  removeAttribute(event) {}
  onParameterSave() {
    let paramValue = this.paramCtrl.nativeElement.value;
    let newObj = this.modifyObject(this.MaterialAnalysisReportModel);
    Object.keys(newObj).forEach(key => {
      if (key.includes("Desc") == true && key.indexOf("Desc") == 0) {
        delete newObj[key];
      } else {}
    });
    if (paramValue == '') {
      this.onOpenErrorBlock('Parameter cannot be empty');
      return;
    } else {
      this.loaderEnabled = true;
      this.screenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.screenName;
      oArray.some(res => {
        if (res.value == paramValue) {
          this.screenModeUpdate = 'U';
          return true;
        }
      });
      jObj["UpdateMode"] = this.screenModeUpdate;
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        if (typeof newObj[key] == "string" && key != "Rd_Summary") {
          let tempJObj = {};
          let nTempJObj = {};
          tempJObj["ControlName"] = _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMap[key];
          tempJObj["ControlValue"] = newObj[key];
          tempJObj["RecId"] = counterRecId++;
          jArray.push(tempJObj);
        } else if (typeof newObj[key] == "boolean") {
          let checkJobj = {};
          checkJobj["ControlName"] = _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMap[key];
          checkJobj["ControlValue"] = newObj[key];
          checkJobj["RecId"] = counterRecId++;
          jArray.push(checkJobj);
        } else if (typeof newObj[key] == "object" && key != "SO_Array") {
          let dateJobj = {};
          dateJobj["ControlName"] = _models_material_analysis_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMap[key];
          dateJobj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_2__(newObj[key]).format('DD/MMM/YYYY');
          dateJobj["RecId"] = counterRecId++;
          jArray.push(dateJobj);
        } else {}
      });
      this.service.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            this.paramCtrl.nativeElement.value = "";
            this.loaderEnabled = false;
            this.getParam(this.screenName);
          } else {
            alert('Cant Save');
            console.trace();
            console.error('Save error');
            this.loaderEnabled = false;
          }
        }
      });
    }
  }
  onParameterDelete() {
    let oParaValue = this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock('Select Report Parameter.');
      return;
    } else {
      let oArray = [...this.dataListCtrl.nativeElement.options];
      if (oArray.length != 0) {
        oArray.some(res => {
          if (res.value == oParaValue) {
            this.checkval = false;
            this.loaderEnabled = true;
            this.deleteApiParam(oParaValue);
            return true;
          } else {
            this.checkval = true;
            return false;
          }
        });
      } else {
        this.onOpenErrorBlock('Invalid Parameter');
        return;
      }
      if (this.checkval == true) {
        this.onOpenErrorBlock('Invalid Paramenter');
      }
    }
  }
  deleteApiParam(oParaValue) {
    this.service.DeleteReportParameter(this.screenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock('Deleted Successfully.');
          this.paramCtrl.nativeElement.value = "";
          this.clearModel();
          this.getParam(this.screenName);
          this.loaderEnabled = false;
          return true;
        }
      }
    });
  }
  modifyObject(jObj) {
    if (jObj['Rd_Summary'] == 'true') {
      Object.assign(jObj, {
        ['Summary']: true
      });
      Object.assign(jObj, {
        ['Detail']: false
      });
    } else {
      Object.assign(jObj, {
        ['Detail']: true
      });
      Object.assign(jObj, {
        ['Summary']: false
      });
    }
    return Object.assign({}, jObj);
  }
  getParam(scr) {
    this.loaderEnabled = true;
    this.service.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.loaderEnabled = false;
      } else {
        console.trace();
        console.error("Res Is Null");
        this.loaderEnabled = false;
      }
    });
  }
  getDataList() {
    throw new Error("Method not implemented.");
  }
  clearModel() {
    this.MaterialAnalysisReportModel = Object.assign({}, this.MaterialAnalysisReportModelCopy);
    this.ModalData = [];
    this.arraySelectedSalesOrder = [];
  }
  selectionChange(e) {
    if (e.selectedRows.length > 0) {
      this.arraySelectedSalesOrder = [...this.arraySelectedSalesOrder, ...e.selectedRows];
    } else if (e.deselectedRows.length > 0) {
      let indexArray = e.deselectedRows.map(data => data.index);
      this.arraySelectedSalesOrder = this.arraySelectedSalesOrder.filter(element => {
        return !indexArray.includes(element.index);
      });
    }
  }
  onProcess(id) {
    let serialisedJsonData = this.arraySelectedSalesOrder.map(data => data.dataItem);
    this.service.GetMaterialAnalysisData(this.MaterialAnalysisReportModel, serialisedJsonData).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.pdfSrc = res.Response[0].Pdfpath;
          this.modalservice.open(id);
        } else {
          if (res.Response[0].ErrorCode != '') {
            this.onOpenErrorBlock(res.Response[0].ErrorCode);
          } else {
            this.onOpenErrorBlock("No Data Found");
          }
          console.trace();
          console.error("Response is Failure");
          this.loaderEnabled = false;
        }
      }
    });
  }
  pdfLoad() {
    this.loaderEnabled = false;
  }
  onclose() {
    this.router.navigate(['main']);
  }
  closeInnerModal(id) {
    this.modalservice.close(id);
    this.loaderEnabled = false;
  }
  static #_ = this.ɵfac = function MaterialAnalysisReportComponent_Factory(t) {
    return new (t || MaterialAnalysisReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_4__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_7__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_9__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_4__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_10__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_12__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: MaterialAnalysisReportComponent,
    selectors: [["app-material-analysis-report"]],
    viewQuery: function MaterialAnalysisReportComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
    decls: 167,
    vars: 58,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-12", "xs_p_0", "page-head-col"], [1, "p_10"], ["class", "loader-outer", 4, "ngIf"], [1, "col-md-12", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "flex_box", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "input", "focus"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "custom_footer", "form-container"], ["mainForm", "ngForm"], [1, "col-md-12", "xs_p_0"], [1, "col-md-6", "col-lg-4", "custom_flex", "md_p_r_30"], ["type", "text", "name", "Customer_From", "id", "Customer_From", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-3", "col-lg-4", "custom_flex", "md_p_r_30"], ["id", "lbl_Customer_From", 1, "col-form-label"], ["type", "text", "name", "Customer_To", "id", "Customer_To", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Customer_To", 1, "col-form-label"], ["type", "text", "name", "Sales_Order_No_From", "id", "Sales_Order_No_From", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Sales_Order_No_From", 1, "col-form-label"], ["type", "text", "name", "Sales_Order_No_To", "id", "Sales_Order_No_To", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Sales_Order_No_To", 1, "col-form-label"], ["name", "Order_Date_From", "id", "Order_Date_From", 1, "form-control", 3, "format", "ngModel", "ngModelChange"], ["name", "Order_Date_To", "id", "Order_Date_To", 1, "form-control", 3, "format", "ngModel", "ngModelChange"], ["type", "text", "name", "Status_Treat_Hold", "id", "Status_Treat_Hold", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Status_Treat_Hold", 1, "col-form-label"], ["type", "text", "name", "Status_Treat_Retest", "id", "Status_Treat_Retest", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_Status_Treat_Retest", 1, "col-form-label"], [1, "block_item"], [1, "col-md-6", "col-lg-4"], ["type", "radio", "name", "Rd", "value", "true", "id", "Summary", 3, "ngModel", "ngModelChange"], ["for", "Summary"], ["type", "radio", "name", "Rd", "value", "false", "id", "Detail", 3, "ngModel", "ngModelChange"], ["for", "Detail"], [3, "click"], [3, "selectable", "kendoGridBinding", "pageSize", "pageable", "selectionChange"], ["grid", "kendoGrid"], ["showSelectAll", "true", "checked", "true", "enabled", "true", 3, "width"], ["field", "OrdNo", "title", "Ordno", 3, "width"], ["field", "OrderDate", "title", "OrderDate", 3, "width"], ["field", "OrderStatus", "title", "OrderStatus", 3, "width"], ["field", "ItemKey", "title", "Itemkey", 3, "width"], ["field", "Description", "title", "Description", 3, "width"], ["field", "Location", "title", "Location", 3, "width"], ["field", "RequestedDate", "title", "RequestedDate", 3, "width"], ["field", "OrderQuantity", "title", "OrderQuantity", 3, "width"], ["field", "RemainingQuantity", "title", "RemainingQuantity", 3, "width"], ["field", "UOM", "title", "UOM", 3, "width"], ["field", "FormulaID", "title", "FormulaD", 3, "width"], ["field", "AssemblyType", "title", "AssemblyType", 3, "width"], ["field", "FillLevel", "title", "FillLevel", 3, "width"], ["field", "FillMeasuredIN", "title", "FillMeasuredIN", 3, "width"], ["field", "FillUOM", "title", "FillUOM", 3, "width"], ["field", "RowNum", "title", "Rownum", 3, "width"], ["field", "CustKey", "title", "Custkey", 3, "width"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "pdfViewerModal", 3, "modaltitle", "indexValue", "widthClass"], [1, "bodyContent"], ["useBrowserLocale", "true", 3, "filenameForDownload", "zoom", "base64Src", "height", "pdfLoaded"], [1, "footerContent"], ["type", "button", 1, "btn", "btn-sky", "btn-sm", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [3, "keyData", "saveLookupField", "closeLookup"]],
    template: function MaterialAnalysisReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, MaterialAnalysisReportComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Parameter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function MaterialAnalysisReportComponent_Template_input_input_13_listener($event) {
          return ctx.onParamchange($event);
        })("focus", function MaterialAnalysisReportComponent_Template_input_focus_13_listener($event) {
          return ctx.removeAttribute($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "datalist", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, MaterialAnalysisReportComponent_ng_container_17_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_19_listener() {
          return ctx.onParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_22_listener() {
          return ctx.onParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "form", 20, 21)(26, "div", 22)(27, "div", 7)(28, "div", 8)(29, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Customer From");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 23)(32, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_32_listener($event) {
          return ctx.MaterialAnalysisReportModel.Customer_From = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_32_listener($event) {
          return ctx.openLookupModal("CustomerFrom", $event, "Customer_From");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_33_listener($event) {
          return ctx.openLookupModal("CustomerFrom", $event, "Customer_From");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](34, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 27)(36, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 22)(39, "div", 7)(40, "div", 8)(41, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Customer To");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 23)(44, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_44_listener($event) {
          return ctx.MaterialAnalysisReportModel.Customer_To = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_44_listener($event) {
          return ctx.openLookupModal("CustomerTo", $event, "Customer_To");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_45_listener($event) {
          return ctx.openLookupModal("CustomerTo", $event, "Customer_To");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 27)(48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 22)(51, "div", 7)(52, "div", 8)(53, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Sales Order No From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "div", 23)(56, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_56_listener($event) {
          return ctx.MaterialAnalysisReportModel.Sales_Order_No_From = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_56_listener($event) {
          return ctx.openLookupModal("SalesOrderNoFrom", $event, "Sales_Order_No_From");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_57_listener($event) {
          return ctx.openLookupModal("SalesOrderNoFrom", $event, "Sales_Order_No_From");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 27)(60, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 22)(63, "div", 7)(64, "div", 8)(65, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "Sales Order No To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 23)(68, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_68_listener($event) {
          return ctx.MaterialAnalysisReportModel.Sales_Order_No_To = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_68_listener($event) {
          return ctx.openLookupModal("SalesOrderNoTo", $event, "Sales_Order_No_To");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_69_listener($event) {
          return ctx.openLookupModal("SalesOrderNoTo", $event, "Sales_Order_No_To");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](70, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 27)(72, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 22)(75, "div", 7)(76, "div", 8)(77, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78, "Order date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 23)(80, "kendo-datepicker", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_kendo_datepicker_ngModelChange_80_listener($event) {
          return ctx.MaterialAnalysisReportModel.Order_Date_From = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 22)(82, "div", 7)(83, "div", 8)(84, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85, "Order date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 23)(87, "kendo-datepicker", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_kendo_datepicker_ngModelChange_87_listener($event) {
          return ctx.MaterialAnalysisReportModel.Order_Date_To = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](88, "div", 22)(89, "div", 7)(90, "div", 8)(91, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92, "Status to treat as Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "div", 23)(94, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_94_listener($event) {
          return ctx.MaterialAnalysisReportModel.Status_Treat_Hold = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_94_listener($event) {
          return ctx.openLookupModal("StatusToTreatAsHold", $event, "Status_Treat_Hold");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_95_listener($event) {
          return ctx.openLookupModal("StatusToTreatAsHold", $event, "Status_Treat_Hold");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](96, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](97, "div", 27)(98, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](100, "div", 22)(101, "div", 7)(102, "div", 8)(103, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](104, "Status to treat as Retest");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](105, "div", 23)(106, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_106_listener($event) {
          return ctx.MaterialAnalysisReportModel.Status_Treat_Retest = $event;
        })("blur", function MaterialAnalysisReportComponent_Template_input_blur_106_listener($event) {
          return ctx.openLookupModal("StatusToTreatAsRetest", $event, "Status_Treat_Retest");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](107, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_span_click_107_listener($event) {
          return ctx.openLookupModal("StatusToTreatAsRetest", $event, "Status_Treat_Retest");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](108, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "div", 27)(110, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "div", 22)(113, "div", 7)(114, "div", 8)(115, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](116, "Report Display as");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "div", 42)(118, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_118_listener($event) {
          return ctx.MaterialAnalysisReportModel.Rd_Summary = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](122, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function MaterialAnalysisReportComponent_Template_input_ngModelChange_123_listener($event) {
          return ctx.MaterialAnalysisReportModel.Rd_Summary = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](124, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](125, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](126, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](127, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "div", 22)(129, "div", 7)(130, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](131, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_132_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](25);
          return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onFetch(_r4.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](133, "Fetch Sales Order To print");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "kendo-grid", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChange", function MaterialAnalysisReportComponent_Template_kendo_grid_selectionChange_134_listener($event) {
          return ctx.selectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](136, "kendo-grid-checkbox-column", 50)(137, "kendo-grid-column", 51)(138, "kendo-grid-column", 52)(139, "kendo-grid-column", 53)(140, "kendo-grid-column", 54)(141, "kendo-grid-column", 55)(142, "kendo-grid-column", 56)(143, "kendo-grid-column", 57)(144, "kendo-grid-column", 58)(145, "kendo-grid-column", 59)(146, "kendo-grid-column", 60)(147, "kendo-grid-column", 61)(148, "kendo-grid-column", 62)(149, "kendo-grid-column", 63)(150, "kendo-grid-column", 64)(151, "kendo-grid-column", 65)(152, "kendo-grid-column", 66)(153, "kendo-grid-column", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](154, "footer", 68)(155, "div", 69)(156, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_156_listener() {
          return ctx.onProcess("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_158_listener() {
          return ctx.onclose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](159, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](160, "bm-modal", 72)(161, "div", 73)(162, "ngx-extended-pdf-viewer", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("pdfLoaded", function MaterialAnalysisReportComponent_Template_ngx_extended_pdf_viewer_pdfLoaded_162_listener() {
          return ctx.pdfLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](163, "div", 75)(164, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MaterialAnalysisReportComponent_Template_button_click_164_listener() {
          return ctx.closeInnerModal("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](165, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](166, MaterialAnalysisReportComponent_app_custom_lookup_modal_166_Template, 1, 1, "app-custom-lookup-modal", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.screenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Customer_From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Customer_From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Customer_To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Customer_To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Sales_Order_No_From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Sales_Order_No_From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Sales_Order_No_To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Sales_Order_No_To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("format", ctx.bmeDateFormat)("ngModel", ctx.MaterialAnalysisReportModel.Order_Date_From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("format", ctx.bmeDateFormat)("ngModel", ctx.MaterialAnalysisReportModel.Order_Date_To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Status_Treat_Hold);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Status_Treat_Hold);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Status_Treat_Retest);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.MaterialAnalysisReportModel.Desc_Status_Treat_Retest);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Rd_Summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.MaterialAnalysisReportModel.Rd_Summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](51, _c2))("kendoGridBinding", ctx.ModalData)("pageSize", ctx.pageSize)("pageable", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](52, _c3, ctx.buttonCount, ctx.info, ctx.type, ctx.pageSizes, ctx.previousNext));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modaltitle", ctx.screenName)("indexValue", 10001)("widthClass", "full-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("filenameForDownload", ctx.screenName)("zoom", "page-actual")("base64Src", ctx.pdfSrc)("height", "90vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isLookupModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.CheckboxColumnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__.ModalComponent, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_21__.NgxExtendedPdfViewerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvY29tbW9uc2FsZXMtcmVwb3J0L21hdGVyaWFsLWFuYWx5c2lzLXJlcG9ydC9tYXRlcmlhbC1hbmFseXNpcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2NvbW1vbi1yZXBvcnQvY29tcG9uZW50cy9jb21tb25zYWxlcy1yZXBvcnQvbWF0ZXJpYWwtYW5hbHlzaXMtcmVwb3J0L21hdGVyaWFsLWFuYWx5c2lzLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLHVCQUFBO0FDQ047O0FER0U7RUFDRSxvQkFBQTtBQ0FKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM3M2EzYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5tb2RhbC1mb290ZXJ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3VzdG9tX2Zvb3RlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiA0M3B4O1xyXG4gIH0iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNhM2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jdXN0b21fZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70659:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/commonsales-report/sales-analysis-report/sales-analysis-report.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesAnalysisReportComponent: () => (/* binding */ SalesAnalysisReportComponent)
/* harmony export */ });
/* harmony import */ var _models_sales_analysis_report_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/sales-analysis-report.model */ 71160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);




class SalesAnalysisReportComponent {
  //public orderTabData = { components: [] };
  constructor(lookupService, alertservice) {
    this.lookupService = lookupService;
    this.alertservice = alertservice;
    this.loaderEnabled = true;
    this.pageLoading = true;
    this.componentKey = "orderObj";
    this.tabType = 'Item';
    this.ItemModel = new _models_sales_analysis_report_model__WEBPACK_IMPORTED_MODULE_0__.ItemInvoiceModel();
    this.SalesParsonModel = new _models_sales_analysis_report_model__WEBPACK_IMPORTED_MODULE_0__.SalesParsonModel();
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.isLookupModal = false;
  }
  ngOnInit() {}
  openLookupModal(event, lookupkey, ngModelName) {
    let data = {
      ScreenName: "Sales Analysis Report",
      LookupKey: lookupkey
    };
    let value = '';
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.loaderEnabled = true;
    this.lookupService.getLookup(data).subscribe(res => {
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.LookupGridData = res.LookupData;
        this.lookupKeyData.field = lookupkey;
        this.lookupKeyData.gridData = this.LookupGridData;
        this.lookupKeyData.controlName = ngModelName;
        this.loaderEnabled = false;
        this.isLookupModal = true;
        if (value) {
          this.lookupKeyData.searchValue = value;
        } else {
          this.lookupKeyData.searchValue = '';
        }
        if (event == 'blur' && value) {
          let tempKey = Object.keys(this.LookupGridData[0]);
          let inputKey = tempKey[0];
          let filterdArr = [];
          filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toUpperCase() == value.toUpperCase());
          if (filterdArr.length == 1) {
            this.lookupKeyData.value = filterdArr[0];
            let tempFiltValue = filterdArr[0];
            this.lookupKeyData.valueKey = tempFiltValue[inputKey];
            this.saveLookupField(this.lookupKeyData);
            this.isLookupModal = false;
          } else {
            this.isLookupModal = true;
          }
        } else if (event == 'click') {
          this.isLookupModal = true;
        }
      } else {
        this.onOpenErrorBlock('No Data');
      }
    });
  }
  onOpenErrorBlock(msg) {
    this.alertservice.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  switchTab(type) {
    this.componentKey = type + 'Obj';
    this.tabType = type;
    this.getCustomFieldMetadata();
  }
  getCustomFieldMetadata() {}
  saveLookupField(event) {
    var p = document.getElementById("TabValue");
    let ctrlName = event.controlName;
    let descCtrlName = event.controlName + 'Desc';
    if (this.tabType == "Item") {
      this.ItemModel[ctrlName] = event.valueKey;
      this.ItemModel[descCtrlName] = event.value[Object.keys(event.value)[1]];
    }
    if (this.tabType == "SalesParson") {
      this.SalesParsonModel[ctrlName] = event.valueKey;
      this.SalesParsonModel[descCtrlName] = event.value[Object.keys(event.value)[1]];
    }
    if (this.tabType == "Report") {
      this.SalesParsonModel[ctrlName] = event.valueKey;
      this.SalesParsonModel[descCtrlName] = event.value[Object.keys(event.value)[1]];
    }
    this.isLookupModal = false;
  }
  static #_ = this.ɵfac = function SalesAnalysisReportComponent_Factory(t) {
    return new (t || SalesAnalysisReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_1__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SalesAnalysisReportComponent,
    selectors: [["app-sales-analysis-report"]],
    decls: 1,
    vars: 0,
    template: function SalesAnalysisReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28592:
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/company-information-report/company-information.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyInformationReportComponent: () => (/* binding */ CompanyInformationReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);


class CompanyInformationReportComponent {
  constructor(utilityService) {
    this.utilityService = utilityService;
    this.screenName = 'Company Information Report';
  }
  ngOnInit() {
    this.process();
  }
  process() {
    let jObject = {
      ReportName: this.screenName,
      ListingFlag: false,
      ListingVariable: ''
    };
    this.utilityService.bmgfReportAction(jObject, this.screenName).then(res => {});
  }
  static #_ = this.ɵfac = function CompanyInformationReportComponent_Factory(t) {
    return new (t || CompanyInformationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__.AppUtility));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CompanyInformationReportComponent,
    selectors: [["app-company-information-report"]],
    decls: 1,
    vars: 0,
    template: function CompanyInformationReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 69118:
/*!****************************************************************************************!*\
  !*** ./src/app/main/common-report/components/customreports/customreports.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomreportsComponent: () => (/* binding */ CustomreportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 93035);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/grid-export-component/grid-export.component */ 90704);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/pipes/searchdata.pipe */ 80669);
/* harmony import */ var _shared_pipes_string_to_array_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/pipes/string-to-array.pipe */ 68551);





























const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function CustomreportsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CustomreportsComponent_form_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", obj_r11.PARANAME);
  }
}
function CustomreportsComponent_form_7_div_18_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 56)(5, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("blur", function CustomreportsComponent_form_7_div_18_div_2_div_1_Template_input_blur_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r24.openLookupModal(item_r12.LabelCaption, "blur", "custom", item_r12.CtrlName, item_r12.FieldName, item_r12.FromToVal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_form_7_div_18_div_2_div_1_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r27.openLookupModal(item_r12.LabelCaption, "click", "custom", item_r12.CtrlName, item_r12.FieldName, item_r12.FromToVal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", item_r12.SeqNo);
  }
}
function CustomreportsComponent_form_7_div_18_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 56)(5, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function CustomreportsComponent_form_7_div_18_div_2_div_2_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r30.onCheckBoxChange(item_r12.CtrlName, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", item_r12.SeqNo);
  }
}
function CustomreportsComponent_form_7_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CustomreportsComponent_form_7_div_18_div_2_div_1_Template, 10, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, CustomreportsComponent_form_7_div_18_div_2_div_2_Template, 8, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r12.SelectQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r12.SelectQuery);
  }
}
function CustomreportsComponent_form_7_div_18_div_3_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemCheck_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", itemCheck_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", itemCheck_r36, " ");
  }
}
function CustomreportsComponent_form_7_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 56)(6, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function CustomreportsComponent_form_7_div_18_div_3_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r37.onChangeDropDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CustomreportsComponent_form_7_div_18_div_3_option_7_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "stringToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("name", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 4, item_r12.SelectQuery));
  }
}
function CustomreportsComponent_form_7_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 67)(6, "div", 68)(7, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function CustomreportsComponent_form_7_div_18_div_4_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r42);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r40.onCheckBoxChange(item_r12.CtrlName, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("for", item_r12.CtrlName);
  }
}
function CustomreportsComponent_form_7_div_18_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
  }
}
function CustomreportsComponent_form_7_div_18_div_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemCheck_r47 = ctx.$implicit;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", itemCheck_r47, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", itemCheck_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("name", item_r12.CtrlName);
  }
}
function CustomreportsComponent_form_7_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, CustomreportsComponent_form_7_div_18_div_5_div_2_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, CustomreportsComponent_form_7_div_18_div_5_ng_container_4_Template, 4, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "stringToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r12.LabelCaption != null && item_r12.LabelCaption != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", item_r12.LabelCaption != null && item_r12.LabelCaption != "" ? "col-md-6 col-lg-4" : "col-md-9");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 3, item_r12.BOXARRAY));
  }
}
function CustomreportsComponent_form_7_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "kendo-datepicker", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", ctx_r17.bmeDateFormat);
  }
}
function CustomreportsComponent_form_7_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "kendo-datepicker", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", ctx_r18.bmeDateFormat);
  }
}
function CustomreportsComponent_form_7_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
  }
}
function CustomreportsComponent_form_7_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "kendo-numerictextbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CtrlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", item_r12.ColumnName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("spinners", false)("autoCorrect", ctx_r20.autoCorrect)("decimals", ctx_r20.miQtyPrecision);
  }
}
function CustomreportsComponent_form_7_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r12.LabelCaption);
  }
}
function CustomreportsComponent_form_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, CustomreportsComponent_form_7_div_18_div_2_Template, 3, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CustomreportsComponent_form_7_div_18_div_3_Template, 9, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, CustomreportsComponent_form_7_div_18_div_4_Template, 10, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, CustomreportsComponent_form_7_div_18_div_5_Template, 6, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, CustomreportsComponent_form_7_div_18_div_6_Template, 7, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CustomreportsComponent_form_7_div_18_div_7_Template, 7, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CustomreportsComponent_form_7_div_18_div_8_Template, 7, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, CustomreportsComponent_form_7_div_18_div_9_Template, 7, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, CustomreportsComponent_form_7_div_18_div_10_Template, 5, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitch", item_r12.CtrlType.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "TEXTBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "COMBOBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "CHECKBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "RadioButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "DateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "INTEGER");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "DECIMAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", "Label");
  }
}
function CustomreportsComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngSubmit", function CustomreportsComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r55.onProcess("pdfViewerModal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 37)(7, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("input", function CustomreportsComponent_form_7_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r57.onParamchange($event));
    })("focus", function CustomreportsComponent_form_7_Template_input_focus_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.removeAttribute($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "datalist", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, CustomreportsComponent_form_7_ng_container_11_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_form_7_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r59.onParameterSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_form_7_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r60.onParameterDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, CustomreportsComponent_form_7_div_18_Template, 11, 10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "footer", 47)(20, "div", 48)(21, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_form_7_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r61.onclose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx_r1.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.paramValueArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.jsonData);
  }
}
function CustomreportsComponent_app_custom_lookup_modal_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-custom-lookup-modal", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("saveLookupField", function CustomreportsComponent_app_custom_lookup_modal_8_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r62.saveLookupField($event));
    })("closeLookup", function CustomreportsComponent_app_custom_lookup_modal_8_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r64.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("keyData", ctx_r2.lookupKeyData);
  }
}
function CustomreportsComponent_ng_template_29_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 94);
  }
}
function CustomreportsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_ng_template_29_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r66.bmlFilterSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CustomreportsComponent_ng_template_29_i_3_Template, 1, 0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 83)(6, "div", 84)(7, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_ng_template_29_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r68.exportToExcel(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_ng_template_29_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r69.exportToPDF(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_ng_template_29_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r70.printToPDF(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "svg", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "use", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 92)(18, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function CustomreportsComponent_ng_template_29_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r71.msKeyword = $event);
    })("input", function CustomreportsComponent_ng_template_29_Template_input_input_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r72.bmlfOnSearchRecord());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r4.filterEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 5, "COMMON.EXPORTTOEXCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 7, "COMMON.EXPORTTOPDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 9, "COMMON.PRINT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r4.msKeyword);
  }
}
const _c2 = function () {
  return [5, 10, 20, 50, 100];
};
function CustomreportsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 95);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](1, _c2));
  }
}
function CustomreportsComponent_kendo_grid_column_31_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dataItem_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const column_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, dataItem_r75[column_r73], ctx_r77.msCustomDateFormat), " ");
  }
}
function CustomreportsComponent_kendo_grid_column_31_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dataItem_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const column_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", dataItem_r75[column_r73], " ");
  }
}
function CustomreportsComponent_kendo_grid_column_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CustomreportsComponent_kendo_grid_column_31_ng_template_1_ng_container_3_Template, 3, 4, "ng-container", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, CustomreportsComponent_kendo_grid_column_31_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 99);
  }
  if (rf & 2) {
    const column_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 3, column_r73.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", column_r73.includes("date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !column_r73.includes("date"));
  }
}
function CustomreportsComponent_kendo_grid_column_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-grid-column", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CustomreportsComponent_kendo_grid_column_31_ng_template_1_Template, 5, 5, "ng-template", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("field", column_r73)("title", column_r73)("width", column_r73 == "ActionCol" ? 100 : column_r73.width);
  }
}
const _c3 = function (a0) {
  return {
    gridloading: a0
  };
};
const _c4 = function () {
  return {
    checkboxOnly: true
  };
};
class CustomreportsComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  getDataList() {
    throw new Error('Method not implemented.');
  }
  // constructor(
  //   public router: Router,
  //   public service: CommonReportService,
  //   public activeRoute: ActivatedRoute,
  //   public lookupService: LookupService,
  //   public toastMessageService: ToastMessageService,
  //   public modalservice: ModalService,
  //   public alertService: AlertService,
  //   public fb: FormBuilder,
  //   public dtService: DateFormatService,
  //   public localstorageService :LocalStorageService,
  //   public userFieldservice: UserFieldService,
  //   public utilService: AppUtility,
  //   ) {
  //     super( utilService,userFieldservice,localstorageService, toastMessageService,dtService);
  // }
  constructor(router, renderer, lsService, service, dateFormatService, toastMessageService, utilService, userFieldService, fb, activeRoute, lookupService, dtService, modalservice, alertService) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.router = router;
    this.renderer = renderer;
    this.lsService = lsService;
    this.service = service;
    this.dateFormatService = dateFormatService;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.fb = fb;
    this.activeRoute = activeRoute;
    this.lookupService = lookupService;
    this.dtService = dtService;
    this.modalservice = modalservice;
    this.alertService = alertService;
    this.bmlfSelectedCallback = args => args.dataItem;
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_2__.GridSettings();
    this.mbLoadingEnabled = false;
    this.msKeyword = '';
    this.jsonData = []; // Array 
    this.lookupKeyData = {};
    this.gridData = [];
    this.LookupGridData = [];
    this.isLookupModal = false;
    this.isPdfView = true;
    this.pdfSrc = " ";
    this.loaderEnabled = false;
    this.paramValueArray = [];
    this.checkval = false;
    this.screenModeUpdate = 'I'; // I Insert , U Update 
    this.checkBoxArrayGlobal = [];
  }
  ngOnInit() {
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.bmeDateFormat = this.dtService.getDateFormat();
    this.loaderEnabled = true;
    jquery__WEBPACK_IMPORTED_MODULE_3__('.modal-body').addClass('removeScroll');
    try {
      // When ever route parameter changes this logic executes
      this.customRouteObserver = this.activeRoute.params.subscribe(params => {
        this.onReset();
        this.screenName = params['name'];
        this.mainScreenName = params['name'];
        this.loaderEnabled = true;
        this.getCustomjsonData(this.screenName); // Fetch Screen Controls
        this.getParam(this.screenName); // Fill Rpt parameter combo
        this.checkControl();
        this.loaderEnabled = false;
        this.setExportData({
          'pageName': this.screenName
        });
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
    this.getParam(this.screenName); // Fill Rpt parameter combo
  }

  bmlFilterSetting() {
    this.filterEnabled = !this.filterEnabled;
  }
  checkControl() {
    try {
      if (this.paramCtrl != undefined || this.paramCtrl != null) {
        this.paramCtrl.nativeElement.value = "";
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  getCustomjsonData(name) {
    try {
      this.service.getCustomReportJson(name).subscribe(res => {
        if (res != null) {
          let group = {};
          debugger;
          if (res.RepFormDetails != undefined) {
            if (res.RepFormDetails.length > 0) {
              this.screenName = res.RepFormDetails[0].LeftPaneName;
              this.getParam(this.screenName); // Fill Rpt parameter combo
            }
          }

          this.jsonData = res.FormData;
          this.jsonData.forEach((element, indx) => {
            group[element.CtrlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl('');
            if (element.BOXARRAYSELECT == undefined) {
              element.BOXARRAYSELECT = 0;
            }
            if (element.CtrlType.replace(/\s+/g, ' ').trim() == 'RadioButton' || element.CtrlType.replace(/\s+/g, ' ').trim() == 'Select' || element.CtrlType.replace(/\s+/g, ' ').trim() == 'CheckBox') {
              if (element.BOXARRAYSELECT == '0') {
                group[element.CtrlName].patchValue(false);
              } else if (element.BOXARRAYSELECT == '1') {
                group[element.CtrlName].patchValue(true);
              } else {
                group[element.CtrlName].patchValue(element.BOXARRAYSELECT);
              }
            }
            if (element.CtrlType.replace(/\s+/g, ' ').trim() == 'DateTime' || element.CtrlType.replace(/\s+/g, ' ').trim() == 'DATES' || element.CtrlType.replace(/\s+/g, ' ').trim() == 'DATE' || element.DataType.replace(/\s+/g, ' ').trim() == 'DATE') {
              group[element.CtrlName].patchValue(new Date());
            } else if (element.CtrlType.replace(/\s+/g, ' ').trim() == "INTEGER") {
              group[element.CtrlName].patchValue("0");
            } else if (element.CtrlType.replace(/\s+/g, ' ').trim() == "DECIMAL") {
              group[element.CtrlName].patchValue(0.0);
            }
          });
          this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormGroup(group);
          this.loaderEnabled = false;
        } else {
          console.trace();
          console.error("Response Is Null");
        }
      }).add(() => {});
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  getParam(scr) {
    try {
      this.service.getReportParameter(scr).subscribe(res => {
        if (res != null) {
          this.paramValueArray = res.RPTPARAMETERS;
        } else {
          console.trace();
          console.error("Res Is Null");
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onProcess(id) {
    try {
      this.loaderEnabled = true;
      this.setReportFieldsSession();
      //   const url = this.router.serializeUrl(
      //     this.router.createUrlTree([`/main/commonreport/reportviewer`], queryParamsObj)
      //   );
      //   window.open('#'+url, '_blank');
      //   return;  
      // let jObject = {};
      // jObject["ReportName"] = this.screenName;
      // Object.keys(this.reportForm.controls).map(key => {
      //   let tempCtrl = this.jsonData.filter(res => { return res.CONTROLNAME == key })[0]
      //   let ControlValue = tempCtrl.CONTROLCAPTION
      //   ControlValue = ControlValue.replace(/ +/g, "");
      //   if (tempCtrl.CONTROLTYPE == "DateTime") {
      //     jObject[ControlValue] = moment(this.reportForm.controls[key].value).format('DD/MMM/YYYY');
      //   } else {
      //     jObject[ControlValue] = this.reportForm.controls[key].value;
      //   }
      // });
      // let jObject = {};
      // jObject = JSON.parse(localStorage.getItem(this.screenName));
      // this.service.GetReportData(jObject).subscribe(res => {
      //   if (res != null) {
      //     if (res.Response[0].ErrorCode == "") {
      //       this.pdfSrc = res.Response[0].Pdfpath
      //       if( res.Response[0].Pdfpath !=''){
      //         this.modalservice.open(id);
      //       }else if(res.DashBaordData.length > 0){
      //         this.mbLoadingEnabled = false
      //         this.marrItemGridDataCreate = res.DashBaordData
      //         this.marrItemGridDataCreate.forEach(element => {
      //           this.marrItemGridDataColumn = Object.entries(element).map(([key, val]) => key );
      //         });
      //         this.exportData.columnsConfig =   this.marrItemGridDataColumn;
      //         this.mobjGridSettings.state.take=50;
      //         this.setExportData({ 'pageName': this.screenName });
      //         this.modalservice.open("DashBaordData");
      //       }
      //       this.loaderEnabled = false;
      //       if(res.DashBaordData.length ==0  && res.Response[0].Pdfpath ==""){
      //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("No Data Found"));
      //         this.mbLoadingEnabled = false
      //       }
      //     }
      //     else {
      //         if (res.Response[0].ErrorCode != '') {
      //              this.onOpenErrorBlock(res.Response[0].ErrorCode)
      //         }
      //         if(res.DashBaordData.length ==0  && res.Response[0].Pdfpath ==""){
      //           this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("No Data Found"));
      //         }
      //       console.trace();
      //       console.error("Response is Failure");
      //       this.loaderEnabled = false;
      //       this.mbLoadingEnabled = false
      //     }
      //   }
      // });
      let jObject = {};
      jObject = JSON.parse(localStorage.getItem(this.screenName));
      Object.keys(jObject).forEach(key => {
        if (jObject[key] == null) {
          jObject[key] = '';
        }
      });
      console.log("jObject...", jObject);
      this.service.GetReportData(jObject).subscribe(res => {
        this.loaderEnabled = false;
        if (res == null) {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("No Data Found"));
          return false;
        }
        if (res != null) {
          if (res.Response[0].ErrorCode == "") {
            this.pdfSrc = res.Response[0].Pdfpath;
            if (res.Response[0].Pdfpath != '') {
              debugger;
              // this.modalservice.open(id);
              this.utilService.bmgfReportAction(jObject, jObject.ReportName).then(value => {});
            } else if (res.DashBaordData.length > 0) {
              this.mbLoadingEnabled = false;
              localStorage.setItem("ReportList", JSON.stringify(res));
              let queryParamsObj = {
                queryParams: {}
              };
              queryParamsObj.queryParams['ReportName'] = this.screenName;
              this.router.navigate(['/main/commonreport/reportGridViewList'], {
                queryParams: {
                  reportKey: this.screenName
                }
              });
            }
            this.loaderEnabled = false;
            if (res.DashBaordData.length == 0 && res.Response[0].Pdfpath == "") {
              this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("No Data Found"));
              this.mbLoadingEnabled = false;
              this.loaderEnabled = false;
            }
          } else {
            if (res.Response[0].ErrorCode != '') {
              this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("Response is Failure"));
              this.mbLoadingEnabled = false;
              this.loaderEnabled = false;
              return;
            }
            if (res.DashBaordData.length == 0 && res.Response[0].Pdfpath == "") {
              this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("No Data Found"));
              this.mbLoadingEnabled = false;
              this.loaderEnabled = false;
              return;
            }
            console.trace();
            console.error("Response is Failure");
            this.loaderEnabled = false;
            this.mbLoadingEnabled = false;
          }
        }
      });
    } catch (e) {
      this.loaderEnabled = false;
      console.log(e);
      console.trace();
    }
  }
  bmlfclose() {
    this.getCustomjsonData(this.mainScreenName); // Fetch Screen Controls
    this.marrItemGridDataCreate = [];
    this.modalservice.close("DashBaordData");
  }
  openLookupModal(fieldName, event, type, ctrlName, lookUpKey, LinkedControl) {
    try {
      debugger;
      let value = this.reportForm.get(ctrlName).value;
      let data = {
        ScreenName: this.screenName,
        LookUpKey: lookUpKey
      };
      this.LookupGridData = [];
      this.lookupKeyData = {};
      this.loaderEnabled = true;
      if (event == 'blur' && value == '') {
        let getcontrol = this.jsonData.filter(res => {
          return res.CtrlNAme == ctrlName;
        })[0];
        // let id = getcontrol.CONTROLDESC;
        // (<HTMLInputElement>document.getElementById(id)).innerHTML = '';
        this.loaderEnabled = false;
        return;
      }
      this.lookupService.getLookup(data).subscribe(res => {
        if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
          this.LookupGridData = res.LookupData;
          this.lookupKeyData.field = fieldName;
          this.lookupKeyData.gridData = this.LookupGridData;
          this.lookupKeyData.type = type;
          this.lookupKeyData.controlName = ctrlName;
          this.lookupKeyData.LinkedControl = LinkedControl;
          this.loaderEnabled = false;
          if (value) {
            this.lookupKeyData.searchValue = value;
          } else {
            this.lookupKeyData.searchValue = '';
          }
          if (event == 'blur' && value) {
            let tempKey = Object.keys(this.LookupGridData[0]);
            let inputKey = tempKey[0];
            let filterdArr = [];
            filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toUpperCase() == value.toUpperCase());
            if (filterdArr.length == 1) {
              this.lookupKeyData.value = filterdArr[0];
              let tempFiltValue = filterdArr[0];
              this.lookupKeyData.valueKey = tempFiltValue[inputKey];
              this.saveLookupField(this.lookupKeyData);
              this.isLookupModal = false;
            } else {
              this.isLookupModal = true;
            }
          } else if (event == 'click') {
            this.isLookupModal = true;
          }
        } else {
          this.loaderEnabled = false;
          this.onOpenErrorBlock('No Data');
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  closeLookupModal(event) {
    try {} catch (e) {
      console.log(e);
      console.trace();
    }
    this.isLookupModal = event.isLookupModal;
  }
  // new function
  saveLookupField(event) {
    try {
      let descKey = Object.keys(event.value);
      let Key = event.LinkedControl.split("|");
      let CtrlValue = '';
      if (this.reportForm.get(Key[1]) != undefined) {
        CtrlValue = this.reportForm.get(Key[1]).value;
      }
      // let CtrlValue = this.reportForm.get(Key[1]).value;
      let CurrentCtrl = event.valueKey;
      let controlNew = this.jsonData.filter(res => {
        return res.CtrlName == event.controlName;
      })[0];
      if (CtrlValue != "") {
        if (Key[0] == "OF") {
          this.reportForm.get(event.controlName).setValue(event.valueKey);
          this.isLookupModal = false;
        } else if (Key[0] == "From") {
          if (CtrlValue >= CurrentCtrl) {
            this.reportForm.get(event.controlName).setValue(event.valueKey);
            // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
            this.isLookupModal = false;
          } else if (CtrlValue == null) {
            this.reportForm.get(event.controlName).setValue(event.valueKey);
            // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
            this.isLookupModal = false;
          } else {
            this.isLookupModal = false;
            this.onOpenErrorBlock('To value cannot be less than from value');
            this.reportForm.get(event.controlName).setValue('');
            return false;
          }
        } else if (Key[0] == "To") {
          if (CtrlValue <= CurrentCtrl) {
            this.reportForm.get(event.controlName).setValue(event.valueKey);
            // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
            this.isLookupModal = false;
          } else if (CtrlValue == null) {
            this.reportForm.get(event.controlName).setValue(event.valueKey);
            // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
            this.isLookupModal = false;
          } else {
            this.isLookupModal = false;
            this.onOpenErrorBlock('To value cannot be less than from value');
            this.reportForm.get(event.controlName).setValue('');
            return false;
          }
        } else {
          this.reportForm.get(event.controlName).setValue(event.valueKey);
          this.isLookupModal = false;
        }
      } else {
        this.reportForm.get(event.controlName).setValue(event.valueKey);
        // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
        this.isLookupModal = false;
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  // old function 
  // saveLookupField(event) {
  //  try {
  //     let descKey = Object.keys(event.value)
  //     let Key = event.LinkedControl.split("|");
  //     let CtrlValue='';
  //     if(this.reportForm.get(Key[1]) != undefined){
  //       CtrlValue = this.reportForm.get(Key[1]).value;
  //     }
  //    // let CtrlValue = this.reportForm.get(Key[1]).value;
  //     let CurrentCtrl = event.valueKey;
  //     let controlNew = this.jsonData.filter(res => { return res.CtrlName == event.controlName })[0];
  //     if (CtrlValue != "") {
  //       if(Key[0] == "OF"){
  //         this.reportForm.get(event.controlName).setValue(event.valueKey);
  //         this.isLookupModal = false;
  //       }else if (Key[0] == "From") {
  //         if (CtrlValue <= CurrentCtrl) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }else if (CtrlValue == null) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }else {
  //           this.isLookupModal = false;
  //           this.onOpenErrorBlock('To value cannot be less than from value');
  //           return false;
  //         }
  //       }else if(Key[0] == "To"){
  //         if (CtrlValue >= CurrentCtrl) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }else if (CtrlValue == null) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }else {
  //           this.isLookupModal = false;
  //           this.onOpenErrorBlock('To value cannot be less than from value');
  //           return false;
  //         }
  //       }else{
  //         this.reportForm.get(event.controlName).setValue(event.valueKey);
  //         this.isLookupModal = false;
  //       }
  //     } else {
  //       this.reportForm.get(event.controlName).setValue(event.valueKey);
  //       // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //       this.isLookupModal = false;
  //     }
  //   }
  //   catch (e) {
  //     console.log(e);
  //     console.trace();
  //   }
  // }
  // saveLookupField(event) {
  //   try {
  //     let descKey = Object.keys(event.value)
  //     let Key = event.LinkedControl.split("|")
  //     let CtrlValue = this.reportForm.get(Key[1]).value;
  //     let CurrentCtrl = event.valueKey;
  //     let controlNew = this.jsonData.filter(res => { return res.CtrlName == event.controlName })[0];
  //     if (CtrlValue != "") {
  //       if (Key[0] == "From") {
  //         if (CtrlValue <= CurrentCtrl) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }
  //         else if (CtrlValue == null) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }
  //         else {
  //           this.isLookupModal = false;
  //           this.onOpenErrorBlock('To value cannot be less than from value');
  //           return false;
  //         }
  //       }
  //       if (Key[0] == "To") {
  //         if (CtrlValue >= CurrentCtrl) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }
  //         else if (CtrlValue == null) {
  //           this.reportForm.get(event.controlName).setValue(event.valueKey);
  //           // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //           this.isLookupModal = false;
  //         }
  //         else {
  //           this.isLookupModal = false;
  //           this.onOpenErrorBlock('To value cannot be less than from value');
  //           return false;
  //         }
  //       }
  //     } else {
  //       this.reportForm.get(event.controlName).setValue(event.valueKey);
  //       // (<HTMLInputElement>document.getElementById(controlNew.CONTROLDESC)).innerHTML = event.value[descKey[1]];
  //       this.isLookupModal = false;
  //     }
  //   }
  //   catch (e) {
  //     console.log(e);
  //     console.trace();
  //   }
  // }
  closeInnerModal(id) {
    try {
      this.modalservice.close(id);
      this.loaderEnabled = false;
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  pdfLoad() {
    try {
      this.loaderEnabled = false;
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onclose() {
    try {
      this.router.navigate(['main']);
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onParameterSave() {
    try {
      let parameterName = this.paramCtrl.nativeElement.value;
      if (parameterName == '') {
        // alert('Parameter cannot be empty ');
        this.onOpenErrorBlock('Parameter cannot be empty');
        return false;
      } else {
        this.loaderEnabled = true;
        this.screenModeUpdate = "I";
        let jObj = {};
        let headerData = [];
        let jArray = [];
        let counterRecId = 0;
        let oArray = [...this.dataListCtrl.nativeElement.options];
        jObj["ParamName"] = parameterName;
        jObj["ScreenName"] = this.screenName;
        oArray.some(res => {
          if (res.value == parameterName) {
            this.screenModeUpdate = 'U';
            return true;
          }
        });
        jObj["UpdateMode"] = this.screenModeUpdate;
        headerData.push(jObj);
        Object.keys(this.reportForm.controls).map(key => {
          console.log(key);
          let control = this.jsonData.filter(res => {
            return res.CtrlName == key;
          })[0];
          console.log(control.CtrlName);
          if (control.DataType == 'Lookup') {
            let idCtrl = control.CONTROLDESC;
            let tempJObj = {};
            let nTempJObj = {};
            tempJObj["ControlName"] = key;
            tempJObj["ControlValue"] = this.reportForm.controls[key].value;
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
            nTempJObj["ControlName"] = idCtrl;
            nTempJObj["ControlValue"] = document.getElementById(idCtrl).innerHTML;
            nTempJObj["RecId"] = counterRecId++;
            jArray.push(nTempJObj);
          } else if (control.DataType == "CheckBox") {
            let checkJobj = {};
            checkJobj["ControlName"] = key;
            if (this.reportForm.controls[key].value == true) {
              checkJobj["ControlValue"] = "1";
            } else if (this.reportForm.controls[key].value == false) {
              checkJobj["ControlValue"] = "0";
            } else {
              checkJobj["ControlValue"] = this.reportForm.controls[key].value;
            }
            checkJobj["RecId"] = counterRecId++;
            jArray.push(checkJobj);
          } else if (control.CtrlType == "DateTime" || control.CtrlType == "DATES" || control.DataType == "DATE") {
            let dateJobj = {};
            dateJobj["ControlName"] = key;
            dateJobj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_4__.CommonConstants.gsServerDateFormat);
            dateJobj["RecId"] = counterRecId++;
            jArray.push(dateJobj);
          } else {
            let tJobj = {};
            tJobj["ControlName"] = key;
            tJobj["ControlValue"] = this.reportForm.controls[key].value;
            tJobj["RecId"] = counterRecId++;
            jArray.push(tJobj);
          }
        });
        this.service.saveReportParameters(jArray, headerData).subscribe(res => {
          if (res != null) {
            if (res['Response'][0].ResponseText == "Sucess") {
              this.paramCtrl.nativeElement.value = "";
              this.loaderEnabled = false;
              this.getParam(this.screenName);
            } else {
              alert('Cant Save');
              console.trace();
              console.error('Save error');
              this.loaderEnabled = false;
            }
          }
        });
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onParamchange(e) {
    try {
      this.loaderEnabled = false;
      let pValue = e.target.value;
      let optionArray = [...this.dataListCtrl.nativeElement.options];
      optionArray.some(res => {
        if (pValue == res.value) {
          this.fetchParamData(pValue);
          return true;
        }
      });
    } catch (e) {
      this.loaderEnabled = false;
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    try {
      let pValue = param;
      this.loaderEnabled = true;
      this.service.getReportParameterValue(this.screenName, param).subscribe(res => {
        if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
          this.onReset();
          this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
        } else {
          console.error('No Response');
          console.trace();
          this.loaderEnabled = false;
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fillControlFromParam(resData) {
    try {
      resData.forEach(element => {
        if (this.reportForm.get(element.CONTROLNAME) != null) {
          let control = this.jsonData.filter(res => {
            return res.CtrlName == element.CONTROLNAME;
          })[0].DataType;
          if (control == "DateTime" || control == "DATE") {
            this.reportForm.get(element.CONTROLNAME).setValue(new Date(element.CONTROLVALUE));
          } else if (control == "CheckBox") {
            if (element.CONTROLVALUE == "1") {
              this.reportForm.get(element.CONTROLNAME).setValue(true);
            } else if (element.CONTROLVALUE == "0") {
              this.reportForm.get(element.CONTROLNAME).setValue(false);
            } else {
              this.reportForm.get(element.CONTROLNAME).setValue(element.CONTROLVALUE);
            }
          } else {
            this.reportForm.get(element.CONTROLNAME).setValue(element.CONTROLVALUE);
          }
        } else {
          // For Description 
          try {
            document.getElementById(element.CONTROLNAME).innerHTML = element.CONTROLVALUE;
          } catch (e) {}
        }
      });
      this.loaderEnabled = false;
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  removeAttribute(e) {
    e.target.removeAttribute('readonly');
  }
  ngOnDestroy() {
    this.customRouteObserver.unsubscribe();
  }
  onOpenErrorBlock(msg) {
    this.alertService.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  onParameterDelete() {
    try {
      let oParaValue = this.paramCtrl.nativeElement.value;
      if (oParaValue == "") {
        this.onOpenErrorBlock('Select Report Parameter.');
        return;
      } else {
        let oArray = [...this.dataListCtrl.nativeElement.options];
        if (oArray.length != 0) {
          oArray.some(res => {
            if (res.value == oParaValue.trim()) {
              this.checkval = false;
              this.loaderEnabled = true;
              this.deleteApiParam(oParaValue);
              return true;
            } else {
              this.checkval = true;
              return false;
            }
          });
        } else {
          this.onOpenErrorBlock('Invalid Parameter');
          return;
        }
        if (this.checkval == true) {
          this.onOpenErrorBlock('Invalid Paramenter');
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  deleteApiParam(oParaValue) {
    try {
      this.service.DeleteReportParameter(this.screenName, oParaValue).subscribe(res => {
        if (res != null) {
          if (res.Response[0].ResponseText == "Success") {
            this.onOpenErrorBlock('Deleted Successfully.');
            this.paramCtrl.nativeElement.value = "";
            this.getParam(this.screenName);
            this.customRouteObserver = this.activeRoute.params.subscribe(params => {
              this.screenName = params['name'];
              this.getCustomjsonData(this.screenName);
            });
            this.loaderEnabled = false;
            return true;
          }
        }
      });
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onCheckBoxChange(fgName, event) {}
  ngAfterViewInit() {}
  onReset() {
    try {
      if (this.reportForm != undefined) {
        this.loaderEnabled = false;
        Object.keys(this.reportForm.controls).forEach(key => {
          console.log(this.jsonData, key);
          let control = this.jsonData.filter(res => {
            return res.CtrlName == key;
          })[0];
          if (control.CONTROLDESC != null && control.CONTROLDESC != '' && control.CONTROLDESC != undefined) {
            document.getElementById(control.CONTROLDESC).innerHTML = '';
          }
        });
        this.reportForm.reset();
      } else {
        this.loaderEnabled = false;
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  onChangeDropDown(event) {}
  setReportFieldsSession() {
    try {
      let jObject = {};
      jObject["ReportName"] = this.screenName;
      Object.keys(this.reportForm.controls).map(key => {
        //let tempCtrl = this.jsonData.filter(res => { return res.CONTROLNAME == key })[0]
        let tempCtrl = this.jsonData.filter(res => {
          return res.CtrlName == key;
        })[0];
        //let ControlValue = tempCtrl.CONTROLCAPTION
        let ControlValue = tempCtrl.LabelCaption;
        ControlValue = ControlValue.replace(/ +/g, "");
        if (tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "DateTime" || tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "Date" || tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "DATES" || tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "DATE" || tempCtrl.DataType.replace(/\s+/g, ' ').trim() == "DATE") {
          if (this.reportForm.controls[key].value == "" || this.reportForm.controls[key].value == undefined || this.reportForm.controls[key].value == null) {
            jObject[ControlValue] = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('DD/MMM/YYYY');
          } else {
            jObject[ControlValue] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format('DD/MMM/YYYY');
          }
        } else if (tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "INTEGER") {
          jObject[ControlValue] = "0";
        } else if (tempCtrl.CtrlType.replace(/\s+/g, ' ').trim() == "DECIMAL") {
          jObject[ControlValue] = "0.0";
        } else {
          jObject[ControlValue] = this.reportForm.controls[key].value;
        }
      });
      jObject["ListingFlag"] = false;
      jObject["ListingVariable"] = '';
      var key = this.screenName;
      localStorage.setItem(key, JSON.stringify(jObject));
    } catch (e) {
      console.log(e);
    }
  }
  static #_ = this.ɵfac = function CustomreportsComponent_Factory(t) {
    return new (t || CustomreportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_6__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_11__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_12__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: CustomreportsComponent,
    selectors: [["app-customreports"]],
    viewQuery: function CustomreportsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 38,
    vars: 46,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-12", "xs_p_0", "page-head-col"], [1, "p_10"], ["class", "loader-outer", 4, "ngIf"], ["class", "custom_footer form-container", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "pdfViewerModal", 3, "modaltitle", "indexValue", "widthClass"], [1, "bodyContent"], ["useBrowserLocale", "true", 3, "filenameForDownload", "zoom", "base64Src", "height", "pdfLoaded"], [1, "footerContent"], ["type", "button", 1, "btn", "btn-sky", "btn-sm", 3, "click"], ["id", "DashBaordData", 3, "modaltitle", "widthClass", "indexValue"], [1, "headerContent"], ["type", "button", "id", "btnClosebatchgeneration", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "bodyContent", "form-container"], [1, "form-container"], [1, "row"], ["id", "kendodiv", 1, "col-md-12", "height100p", "full-height-grid"], ["scrollable", "virtual", 1, "responsive_grid", "scrolled-grid", 3, "ngClass", "kendoGridGroupBinding", "group", "pageable", "loading", "sortable", "filterable", "resizable", "reorderable", "groupable", "sort", "pageSize", "skip", "filter", "rowHeight", "selectable", "kendoGridSelectBy", "dataStateChange", "columnVisibilityChange", "columnReorder", "columnResize"], ["grid", "kendoGrid"], [3, "noRecords"], ["kendoGridToolbarTemplate", ""], ["kendoPagerTemplate", ""], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], [3, "exportData"], [3, "fileName"], ["type", "button", "id", "cmdNewBatchok", 1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "loader-outer"], [1, "loader"], [1, "custom_footer", "form-container", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "flex_box", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "input", "focus"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "submit", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "value"], [3, "ngSwitch"], ["class", "col-md-12 xs_p_0", 4, "ngSwitchCase"], [1, "col-md-12", "xs_p_0"], ["class", "form-group row", 4, "ngIf"], [1, "col-md-6", "col-lg-4", "custom_flex", "md_p_r_30"], ["type", "text", 1, "form-control", "grid-form-control", 3, "formControlName", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-3", "col-lg-4", "custom_flex", "md_p_r_30"], [1, "col-form-label", 3, "id"], ["type", "text", 1, "form-control", "grid-form-control", 3, "formControlName", "change"], ["for", "OrderType", 1, "col-form-label"], [1, "form-control", 3, "name", "formControlName", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "block_item"], [1, "col-md-6", "col-lg-4"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", 1, "custom-control-input", 3, "value", "id", "formControlName", "change"], [1, "custom-control-label", 3, "for"], ["class", "col-md-3 col-lg-4", 4, "ngIf"], [3, "ngClass"], ["type", "radio", "checked", "", 3, "formControlName", "value", "name"], [1, "form-control", 3, "format", "formControlName"], ["type", "number", 1, "form-control", "grid-form-control", 2, "text-align", "left", 3, "formControlName"], [1, "form-control", "grid-form-control", 3, "spinners", "formControlName", "id", "autoCorrect", "decimals"], [3, "keyData", "saveLookupField", "closeLookup"], [1, "col-md-12", "col-12"], [1, "left-action-button"], ["id", "idfilterEnabled", 1, "k-button", "btn-icons", "min_h_24", "xs-hidden", 3, "click"], ["class", "fa fa-filter upper_filter", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-filter", "mr-0"], [1, "right-search"], [1, "grid-action-buttons"], ["kendoGridExcelCommand", "", "id", "cmdExportExcel", 1, "k-button", "btn-icons", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-file-excel-o", "icon-excel", "mr-0"], ["id", "cmdExportPDF", 1, "k-button", "btn-icons", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf-o", "icon-pdf", "mr-0"], ["id", "cmdExportPrint", 1, "k-button", "btn-icons", 3, "title", "click"], ["viewBox", "0 0 16 16", 1, "grid-svg-icon"], [0, "xlink", "href", "#printIcon"], [1, "grid-search", "xs_no_float"], ["type", "text", "id", "txtSearchKeyword", "name", "Search", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-hidden", "true", 1, "fa", "fa-filter", "upper_filter"], [3, "pageSizes"], [3, "field", "title", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [4, "ngIf"]],
    template: function CustomreportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, CustomreportsComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CustomreportsComponent_form_7_Template, 25, 3, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CustomreportsComponent_app_custom_lookup_modal_8_Template, 1, 1, "app-custom-lookup-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "bm-modal", 8)(10, "div", 9)(11, "ngx-extended-pdf-viewer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("pdfLoaded", function CustomreportsComponent_Template_ngx_extended_pdf_viewer_pdfLoaded_11_listener() {
          return ctx.pdfLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_Template_button_click_13_listener() {
          return ctx.closeInnerModal("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "bm-modal", 13)(16, "div", 14)(17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_Template_button_click_17_listener() {
          return ctx.bmlfclose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 17)(21, "section", 18)(22, "div", 19)(23, "div", 20)(24, "kendo-grid", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("dataStateChange", function CustomreportsComponent_Template_kendo_grid_dataStateChange_24_listener($event) {
          return ctx.dataStateChange($event);
        })("columnVisibilityChange", function CustomreportsComponent_Template_kendo_grid_columnVisibilityChange_24_listener($event) {
          return ctx.bmlfOnVisibilityChange($event);
        })("columnReorder", function CustomreportsComponent_Template_kendo_grid_columnReorder_24_listener($event) {
          return ctx.bmlfOnReorder($event);
        })("columnResize", function CustomreportsComponent_Template_kendo_grid_columnResize_24_listener($event) {
          return ctx.bmlfOnResize($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "SearchData");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "kendo-grid-messages", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, CustomreportsComponent_ng_template_29_Template, 19, 11, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, CustomreportsComponent_ng_template_30_Template, 4, 2, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, CustomreportsComponent_kendo_grid_column_31_Template, 2, 3, "kendo-grid-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-grid-export", 27)(33, "kendo-grid-excel", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 11)(35, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CustomreportsComponent_Template_button_click_35_listener() {
          return ctx.bmlfclose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.screenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("modaltitle", ctx.screenName)("indexValue", 10001)("widthClass", "full-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("filenameForDownload", ctx.screenName)("zoom", "page-actual")("base64Src", ctx.pdfSrc)("height", "90vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("modaltitle", ctx.screenName)("widthClass", "width900")("indexValue", 10003);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](43, _c3, ctx.loaderEnabled == true))("kendoGridGroupBinding", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](26, 36, ctx.marrItemGridDataCreate, ctx.msKeyword))("group", ctx.mobjGridSettings.state.group)("pageable", true)("loading", ctx.loaderEnabled)("sortable", ctx.sortable)("filterable", ctx.filterEnabled)("resizable", true)("reorderable", true)("groupable", ctx.groupingEnabled)("sort", ctx.mobjGridSettings.state.sort)("pageSize", ctx.mobjGridSettings.state.take)("skip", ctx.mobjGridSettings.state.skip)("filter", ctx.mobjGridSettings.state.filter)("rowHeight", 36)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](45, _c4))("kendoGridSelectBy", ctx.bmlfSelectedCallback);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](28, 39, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.marrItemGridDataColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("exportData", ctx.exportData);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("fileName", ctx.screenName + ".xlsx");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 41, "COMMON.OK"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ToolbarTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.SelectionDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.GroupBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.GridToolbarFocusableDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.PagerTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ExcelComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ExcelCommandDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_14__.GridExportComponent, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_15__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__.ModalComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_24__.NumericTextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_25__.NgxExtendedPdfViewerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_26__.DatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_17__.SearchData, _shared_pipes_string_to_array_pipe__WEBPACK_IMPORTED_MODULE_18__.StringToArrayPipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n\n  .removeScroll {\n  overflow: hidden !important;\n}\n\n  .scrolled-grid {\n  max-height: calc(100vh - 100px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvY3VzdG9tcmVwb3J0cy9jdXN0b21yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvY3VzdG9tcmVwb3J0cy9jdXN0b21yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsdUJBQUE7QUNDSjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBRE1BO0VBQ0UsMENBQUE7QUNIRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tX2Zvb3RlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmVtb3ZlU2Nyb2xse1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4vLyA6Om5nLWRlZXAgLm1vZGFsLWRpYWxvZyB7XHJcbi8vICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgbWF4LXdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5zY3JvbGxlZC1ncmlkIHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyA6Om5nLWRlZXAgLm1vZGFsIC5tb2RhbC1ib2R5IHtcclxuLy8gICBtYXgtaGVpZ2h0OiBjYWxjKDcydmggLSAxMjVweCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm1vZGFsLWRpYWxvZ3tcclxuLy8gICBtYXgtd2lkdGg6IDkwdnc7XHJcbi8vIH1cclxuXHJcblxyXG4iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNhM2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciAubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jdXN0b21fZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XG59XG5cbjo6bmctZGVlcCAucmVtb3ZlU2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnNjcm9sbGVkLWdyaWQge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60570:
/*!******************************************************************************************!*\
  !*** ./src/app/main/common-report/components/generic-report/generic-report.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericReportComponent: () => (/* binding */ GenericReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _shared_pipes_string_to_array_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipes/string-to-array.pipe */ 68551);

























const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function GenericReportComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function GenericReportComponent_div_0_form_24_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", obj_r10.PARANAME);
  }
}
function GenericReportComponent_div_0_form_24_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", obj_r11.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](obj_r11.PARANAME);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 51)(6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function GenericReportComponent_div_0_form_24_div_21_div_2_Template_input_blur_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r21.openLookupModal(item_r12.CONTROLCAPTION, "blur", "custom", item_r12.CONTROLNAME, item_r12.VALUE, item_r12.FROMTOVAL, item_r12.CONTROLDESC));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_form_24_div_21_div_2_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.openLookupModal(item_r12.CONTROLCAPTION, "click", "custom", item_r12.CONTROLNAME, item_r12.VALUE, item_r12.FROMTOVAL, item_r12.CONTROLDESC));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", item_r12.CONTROLDESC);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_3_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemCheck_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", itemCheck_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", itemCheck_r28, " ");
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 51)(6, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function GenericReportComponent_div_0_form_24_div_21_div_3_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r29.onChangeDropDown($event, item_r12.CONTROLNAME, item_r12.FROMTOVAL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, GenericReportComponent_div_0_form_24_div_21_div_3_option_7_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "stringToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("name", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 4, item_r12.BOXARRAY));
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 61)(6, "div", 62)(7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function GenericReportComponent_div_0_form_24_div_21_div_4_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r33.onCheckBoxChange(item_r12.CONTROLNAME, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("for", item_r12.CONTROLNAME);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 29)(1, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemCheck_r40 = ctx.$implicit;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](itemCheck_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", itemCheck_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("name", item_r12.CONTROLNAME);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, GenericReportComponent_div_0_form_24_div_21_div_5_div_2_Template, 3, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, GenericReportComponent_div_0_form_24_div_21_div_5_ng_container_4_Template, 6, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "stringToArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r12.CONTROLCAPTION != null && item_r12.CONTROLCAPTION != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", item_r12.CONTROLCAPTION != null && item_r12.CONTROLCAPTION != "" ? "col-md-7 col-lg-5" : "col-md-9");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 3, item_r12.BOXARRAY));
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 51)(6, "kendo-datepicker", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function GenericReportComponent_div_0_form_24_div_21_div_6_Template_kendo_datepicker_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.onDateChange($event, item_r12.CONTROLNAME, item_r12.FROMTOVAL, item_r12.CONTROLCAPTION));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("format", ctx_r17.bmeDateFormat);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.CONTROLCAPTION);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
  }
}
function GenericReportComponent_div_0_form_24_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div", 28)(2, "div", 29)(3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "kendo-numerictextbox", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.LabelCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", item_r12.CONTROLNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("spinners", false)("step", 0)("min", 0)("autoCorrect", ctx_r20.autoCorrect)("decimals", ctx_r20.miQtyPrecision)("format", ctx_r20.miQtyPrecisionFormat);
  }
}
function GenericReportComponent_div_0_form_24_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, GenericReportComponent_div_0_form_24_div_21_div_2_Template, 11, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, GenericReportComponent_div_0_form_24_div_21_div_3_Template, 9, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, GenericReportComponent_div_0_form_24_div_21_div_4_Template, 10, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, GenericReportComponent_div_0_form_24_div_21_div_5_Template, 6, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, GenericReportComponent_div_0_form_24_div_21_div_6_Template, 7, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, GenericReportComponent_div_0_form_24_div_21_div_7_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, GenericReportComponent_div_0_form_24_div_21_div_8_Template, 7, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, GenericReportComponent_div_0_form_24_div_21_div_9_Template, 7, 9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitch", item_r12.CONTROLTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "CheckBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "RadioButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "DateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "INTEGER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngSwitchCase", "DECIMAL");
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
function GenericReportComponent_div_0_form_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function GenericReportComponent_div_0_form_24_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r50.onCommonReportProcess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 31)(7, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function GenericReportComponent_div_0_form_24_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r52.onParamchange($event));
    })("focus", function GenericReportComponent_div_0_form_24_Template_input_focus_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.removeAttribute($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "datalist", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, GenericReportComponent_div_0_form_24_ng_container_11_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function GenericReportComponent_div_0_form_24_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.parameterValue = $event);
    })("change", function GenericReportComponent_div_0_form_24_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.onParamchange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "datalist", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, GenericReportComponent_div_0_form_24_ng_container_14_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_form_24_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.onParameterSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_form_24_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r57.onParameterDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, GenericReportComponent_div_0_form_24_div_21_Template, 10, 9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "footer", 43)(23, "div", 44)(24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_form_24_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.onclose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r3.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.paramValueArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](7, _c2))("ngModel", ctx_r3.parameterValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.paramValueArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.jsonData);
  }
}
function GenericReportComponent_div_0_app_custom_lookup_modal_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-custom-lookup-modal", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("saveLookupField", function GenericReportComponent_div_0_app_custom_lookup_modal_25_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.saveLookupField($event));
    })("closeLookup", function GenericReportComponent_div_0_app_custom_lookup_modal_25_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyData", ctx_r4.lookupKeyData);
  }
}
function GenericReportComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 11)(11, "ul")(12, "li")(13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r62.bmlfOpenTaskModal("myTask"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "li")(17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.bmlfOpenTaskModal("recordTask"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.OpenHelpDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, GenericReportComponent_div_0_div_23_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, GenericReportComponent_div_0_form_24_Template, 28, 8, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, GenericReportComponent_div_0_app_custom_lookup_modal_25_Template, 1, 1, "app-custom-lookup-modal", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "bm-modal", 19)(27, "div", 20)(28, "ngx-extended-pdf-viewer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("pdfLoaded", function GenericReportComponent_div_0_Template_ngx_extended_pdf_viewer_pdfLoaded_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r66.pdfLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 22)(30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GenericReportComponent_div_0_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r67.closeInnerModal("pdfViewerModal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r0.screenName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 13, "MYTASK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 15, "TASKFORRECORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.loaderEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.reportForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.isLookupModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modaltitle", ctx_r0.screenName)("indexValue", 10001)("widthClass", "full-width");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("filenameForDownload", ctx_r0.screenName)("zoom", "page-actual")("base64Src", ctx_r0.pdfSrc)("height", "90vh");
  }
}
function GenericReportComponent_app_common_task_modal_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-task-modal", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeTaskModal", function GenericReportComponent_app_common_task_modal_1_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r68.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("taskData", ctx_r1.mobjTaskData);
  }
}
class GenericReportComponent {
  constructor(router, service, activeRoute, lookupService, toastMessageService, modalservice, alertService, fb, dtService, objUtil, utilService, lsService) {
    this.router = router;
    this.service = service;
    this.activeRoute = activeRoute;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.modalservice = modalservice;
    this.alertService = alertService;
    this.fb = fb;
    this.dtService = dtService;
    this.objUtil = objUtil;
    this.utilService = utilService;
    this.lsService = lsService;
    this.mscustomDateFormat = "";
    this.jsonData = []; // Array
    this.lookupKeyData = {};
    this.gridData = [];
    this.LookupGridData = [];
    this.isLookupModal = false;
    this.isPdfView = true;
    this.pdfSrc = " ";
    this.loaderEnabled = true;
    this.paramValueArray = [];
    this.checkval = false;
    this.screenModeUpdate = 'I'; // I Insert , U Update
    this.checkBoxArrayGlobal = [];
    this.parameterValue = '';
    this.mbShowRptParameter = false;
    this.msCopyFromToValue = 'N'; // deepak porwal 20/nov/2020 scr no.142973
    this.msCustomDateFormat = ''; // deepak porwal 12/jan/2021 scr no.148939
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    this.mobjUserData = {};
  }
  ngOnInit() {
    this.mobjUserData = this.lsService.getUserSession();
    this.loaderEnabled = true;
    this.msCustomDateFormat = this.dtService.getDateFormat(); // 12/jan/2021 scr no.148939 deepakporwal
    // When ever route parameter changes this logic executes
    this.customRouteObserver = this.activeRoute.params.subscribe(params => {
      this.onReset();
      this.bmeDateFormat = this.dtService.getDateFormat();
      this.bmlfGetCopyFromTo(); // deepak porwal 20/nov/2020 scr no.142973
      debugger;
      this.screenName = params['name'];
      this.loaderEnabled = true;
      if (this.screenName == 'Journal Register') {
        this.GetFiscalDate().then(() => {
          this.getCustomjsonData(this.screenName); // Fetch Screen Controls
          this.getParam(this.screenName); // Fill Rpt parameter combo
          this.checkControl();
        });
      } else {
        this.getCustomjsonData(this.screenName); // Fetch Screen Controls
        this.getParam(this.screenName); // Fill Rpt parameter combo
        this.checkControl();
      }
    });
    if (this.screenName == 'Missing Tag Report') {
      this.bmlfOnProcess();
    }
  }
  checkControl() {
    if (this.paramCtrl != undefined || this.paramCtrl != null) {
      this.paramCtrl.nativeElement.value = "";
    }
  }
  ngAfterViewInit() {
    //this.paramCtrl.nativeElement.value = "";
  }
  // 14/Oct/2020 SCR No.142549
  getCustomjsonData(name) {
    this.service.getCustomJson(name).subscribe(res => {
      if (res != null) {
        debugger;
        let group = {};
        this.jsonData = res.FormData;
        this.jsonData.forEach((element, indx) => {
          group[element.CONTROLNAME] = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormControl('');
          if (element.CONTROLTYPE == 'RadioButton' || element.CONTROLTYPE == 'Select' || element.CONTROLTYPE == 'CheckBox') {
            if (element.BOXARRAYSELECT == '0') {
              group[element.CONTROLNAME].patchValue(false);
            } else if (element.BOXARRAYSELECT == '1') {
              group[element.CONTROLNAME].patchValue(true);
            } else {
              group[element.CONTROLNAME].patchValue(element.BOXARRAYSELECT);
            }
          }
          if (element.CONTROLTYPE == 'DateTime') {
            if (this.screenName == 'Journal Register' && element.CONTROLNAME == 'DateTime1') {
              group[element.CONTROLNAME].patchValue(this.dtFiscalStartDate);
            } else {
              group[element.CONTROLNAME].patchValue(new Date());
            }
          }
        });
        this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormGroup(group);
        this.loaderEnabled = false;
      } else {
        console.trace();
        console.error("Response Is Null");
      }
    }).add(() => {});
  }
  getParam(scr) {
    this.loaderEnabled = true;
    this.service.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.loaderEnabled = false;
        this.parameterValue = ''; //29/sep/2020 scr no.144250
      } else {
        console.log("Res Is Null");
        this.loaderEnabled = false;
      }
    });
  }
  onProcess(id) {
    debugger;
    this.setReportFieldsSession();
    let queryParamsObj = {
      queryParams: {}
    };
    queryParamsObj.queryParams['NewTab'] = 'Y';
    queryParamsObj.queryParams['ReportName'] = this.screenName;
    const url = this.router.serializeUrl(this.router.createUrlTree([`/main/commonreport/reportviewer`], queryParamsObj));
    window.open('#' + url, '_blank');
    return;
    // Commented by deepak porwal on 08/Sep/2020
    // Description : The report viewer has been switched and open on new tab
    // this.loaderEnabled = true;
    // let jObject = {};
    // jObject["ReportName"] = this.screenName;
    // Object.keys(this.reportForm.controls).map(key => {
    //   let tempCtrl = this.jsonData.filter(res => { return res.CONTROLNAME == key })[0]
    //   let ControlValue = tempCtrl.CONTROLCAPTION
    //   ControlValue = ControlValue.replace(/ +/g, "");
    //   if (tempCtrl.CONTROLTYPE == "DateTime"){
    //     jObject[ControlValue] = moment(this.reportForm.controls[key].value).format('DD/MMM/YYYY');
    //   }else {
    //   jObject[ControlValue] = this.reportForm.controls[key].value;
    //   }
    // });
    // jObject["ListingFlag"] = false;
    // jObject["ListingVariable"] = '';
    // this.service.GetReportData(jObject).subscribe(res => {
    //   if (res != null) {
    //     if (res.Response[0].ErrorCode == "") {
    //       this.pdfSrc = res.Response[0].Pdfpath
    //       this.modalservice.open(id);
    //     }
    //     else {
    //       if(res.Response[0].ErrorCode != ''){
    //         this.onOpenErrorBlock(res.Response[0].ResponseText)
    //       }
    //       else {
    //         this.onOpenErrorBlock("No Data Found")
    //       }
    //       console.trace();
    //       console.error("Response is Failure");
    //       this.loaderEnabled = false;
    //     }
    //   }
    // });
  }

  openLookupModal(fieldName, event, type, ctrlName, lookUpKey, LinkedControl) {
    let value = this.reportForm.get(ctrlName).value;
    let data = {
      ScreenName: this.screenName,
      LookUpKey: lookUpKey
    };
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.loaderEnabled = true;
    if (event == 'blur' && value == '') {
      let getcontrol = this.jsonData.filter(res => {
        return res.CONTROLNAME == ctrlName;
      })[0];
      let id = getcontrol.CONTROLDESC;
      if (id) {
        document.getElementById(id).innerHTML = '';
      }
      this.loaderEnabled = false;
      return;
    }
    this.lookupService.getLookup(data).subscribe(res => {
      res.LookupData.forEach(ele => {
        Object.keys(ele).forEach(key => {
          let psKey = key.toUpperCase();
          if (psKey.search('DATE') != -1) {
            if (ele[key] && ele[key] != '') {
              ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
            } else {
              ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__().format(this.msCustomDateFormat.toUpperCase());
            }
          }
        });
      });
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.LookupGridData = res.LookupData;
        this.lookupKeyData.field = fieldName;
        this.lookupKeyData.gridData = this.LookupGridData;
        this.lookupKeyData.type = type;
        this.lookupKeyData.controlName = ctrlName;
        this.lookupKeyData.LinkedControl = LinkedControl;
        this.loaderEnabled = false;
        if (value) {
          this.lookupKeyData.searchValue = value;
        } else {
          this.lookupKeyData.searchValue = '';
        }
        if (event == 'blur' && value) {
          let tempKey = Object.keys(this.LookupGridData[0]);
          let inputKey = tempKey[0];
          let filterdArr = [];
          filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toString().toUpperCase() == value.toUpperCase());
          if (filterdArr.length == 1) {
            this.lookupKeyData.value = filterdArr[0];
            let tempFiltValue = filterdArr[0];
            this.lookupKeyData.valueKey = tempFiltValue[inputKey];
            this.saveLookupField(this.lookupKeyData);
            this.isLookupModal = false;
          } else {
            this.isLookupModal = true;
          }
        } else if (event == 'click') {
          this.isLookupModal = true;
        }
      } else {
        this.loaderEnabled = false;
        this.onOpenErrorBlock('No Data');
      }
    });
  }
  closeLookupModal(event) {
    this.isLookupModal = event.isLookupModal;
    try {
      if (event.gridData.length > 0)
        // 12/Mar/2021 scr no.151468
        {
          let psInputKey = Object.keys(event.gridData[0])[0];
          let parrFilterData = [];
          if (psInputKey) {
            parrFilterData = event.gridData.filter(obj => obj[psInputKey].toUpperCase() == event.searchValue.toUpperCase());
          }
          if (parrFilterData.length == 0) {
            this.reportForm.get(event.controlName).setValue('');
          }
        }
    } catch (e) {}
  }
  saveLookupField(event) {
    debugger;
    let descKey = Object.keys(event.value);
    let Key = event.LinkedControl.split("|");
    let CtrlValue = this.reportForm.get(Key[1]) ? this.reportForm.get(Key[1]).value : '';
    let CurrentCtrl = event.valueKey;
    let controlNew = this.jsonData.filter(res => {
      return res.CONTROLNAME == event.controlName;
    })[0];
    let controlNewTo = this.jsonData.filter(res => {
      return res.CONTROLNAME == Key[1];
    })[0]; // deepak porwal 20/nov/2020 scr no.142973
    if (Key[0] == 'OF')
      // 20/Nov/22 SCR No.142993
      {
        this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
        this.isLookupModal = false;
        if (event.value[descKey[1]] != undefined) {
          document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
        }
        //this.isLookupModal = false;
      }

    if (CtrlValue != "") {
      if (Key[0] == "From") {
        if (CtrlValue <= CurrentCtrl) {
          this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
          this.isLookupModal = false;
          if (event.value[descKey[1]] != undefined) {
            document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
          }
          if (Key[0] == "To")
            // deepak porwal 20/nov/2020 scr no.142973
            {
              if (this.msCopyFromToValue == 'Y') {
                this.reportForm.get(Key[1]).setValue(event.valueKey.toString().trim());
                if (event.value[descKey[1]] != undefined) {
                  document.getElementById(controlNewTo.CONTROLDESC).innerHTML = event.value[descKey[1]];
                }
              }
            }
          //this.isLookupModal = false;
        } else if (CtrlValue == null) {
          this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
          this.isLookupModal = false;
          if (event.value[descKey[1]] != undefined) {
            document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
          }
          if (Key[0] == "To")
            // deepak porwal 20/nov/2020 scr no.142973
            {
              if (this.msCopyFromToValue == 'Y') {
                this.reportForm.get(Key[1]).setValue(event.valueKey.toString().trim());
                if (event.value[descKey[1]] != undefined) {
                  document.getElementById(controlNewTo.CONTROLDESC).innerHTML = event.value[descKey[1]];
                }
              }
            }
          //this.isLookupModal = false;
        } else {
          this.isLookupModal = false;
          this.onOpenErrorBlock('To value cannot be less than from value');
          return false;
        }
      }
      if (Key[0] == "To") {
        if (CtrlValue >= CurrentCtrl) {
          this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
          this.isLookupModal = false;
          if (event.value[descKey[1]] != undefined) {
            document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
          }
          if (this.msCopyFromToValue == 'Y')
            // deepak porwal 20/nov/2020 scr no.142973
            {
              this.reportForm.get(Key[1]).setValue(event.valueKey.toString().trim());
              if (event.value[descKey[1]] != undefined) {
                document.getElementById(controlNewTo.CONTROLDESC).innerHTML = event.value[descKey[1]];
              }
            }
          //this.isLookupModal = false;
        } else if (CtrlValue == null) {
          this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
          this.isLookupModal = false;
          if (event.value[descKey[1]] != undefined) {
            document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
          }
          //this.isLookupModal = false;
        } else {
          this.isLookupModal = false;
          this.onOpenErrorBlock('To value cannot be less than from value');
          return false;
        }
      }
    } else {
      this.reportForm.get(event.controlName).setValue(event.valueKey.toString().trim());
      this.isLookupModal = false; // Shifted above 20/jan/2020
      if (event.value[descKey[1]] != undefined)
        // Added by deepak porwal 20/nov/2020 scr no.142478
        {
          document.getElementById(controlNew.CONTROLDESC).innerHTML = event.value[descKey[1]];
        }
      if (Key[0] == "To")
        // deepak porwal 20/nov/2020 scr no.142973
        {
          if (this.msCopyFromToValue == 'Y') {
            this.reportForm.get(Key[1]).setValue(event.valueKey.toString().trim());
            if (event.value[descKey[1]] != undefined) {
              document.getElementById(controlNewTo.CONTROLDESC).innerHTML = event.value[descKey[1]];
            }
          }
        }
    }
  }
  closeInnerModal(id) {
    this.modalservice.close(id);
    this.loaderEnabled = false;
  }
  pdfLoad() {
    this.loaderEnabled = false;
  }
  onclose() {
    this.router.navigate(['main']);
  }
  onParameterSave() {
    debugger;
    let parameterName = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (parameterName == '') {
      // alert('Parameter cannot be empty ');
      this.onOpenErrorBlock('Parameter cannot be empty');
      return false;
    } else {
      this.loaderEnabled = true;
      this.screenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      //let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = parameterName;
      jObj["ScreenName"] = this.screenName + ' - Selection Criteria'; // Deepak Porwal 22/Apr/2020 SCR No.133391
      // oArray.some(res => {
      //   if (res.value == parameterName) {
      //     this.screenModeUpdate = 'U';
      //     return true
      //   }
      // })
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === parameterName)[0];
        if (list != undefined) {
          this.screenModeUpdate = 'U';
          jObj["UpdateMode"] = this.screenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.screenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.screenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(this.reportForm.controls).map(key => {
        let control = this.jsonData.filter(res => {
          return res.CONTROLNAME == key;
        })[0];
        if (control.CONTROLTYPE == 'Lookup') {
          let idCtrl = control.CONTROLDESC;
          let tempJObj = {};
          let nTempJObj = {};
          tempJObj["ControlName"] = key;
          tempJObj["ControlValue"] = this.reportForm.controls[key].value;
          tempJObj["RecId"] = counterRecId++;
          jArray.push(tempJObj);
          nTempJObj["ControlName"] = idCtrl;
          nTempJObj["ControlValue"] = idCtrl == "" ? idCtrl : document.getElementById(idCtrl).innerHTML;
          nTempJObj["RecId"] = counterRecId++;
          jArray.push(nTempJObj);
        } else if (control.CONTROLTYPE == "CheckBox") {
          let checkJobj = {};
          checkJobj["ControlName"] = key;
          if (this.reportForm.controls[key].value == true) {
            checkJobj["ControlValue"] = "1";
          } else if (this.reportForm.controls[key].value == false) {
            checkJobj["ControlValue"] = "0";
          } else {
            checkJobj["ControlValue"] = this.reportForm.controls[key].value;
          }
          checkJobj["RecId"] = counterRecId++;
          jArray.push(checkJobj);
        } else if (control.CONTROLTYPE == "DateTime") {
          let dateJobj = {};
          dateJobj["ControlName"] = key;
          //dateJobj["ControlValue"] = moment(this.reportForm.controls[key].value).format('DD/MMM/YYYY'); // deepak porwal 12/jan/2021 scr no.148939
          //dateJobj["ControlValue"] = moment(this.reportForm.controls[key].value).format(this.msCustomDateFormat); // deepak porwal 12/jan/2021 scr no.148939
          dateJobj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__.CommonConstants.gsServerDateFormat); //scr 160910
          dateJobj["RecId"] = counterRecId++;
          jArray.push(dateJobj);
        } else {
          let tJobj = {};
          tJobj["ControlName"] = key;
          tJobj["ControlValue"] = this.reportForm.controls[key].value;
          tJobj["RecId"] = counterRecId++;
          jArray.push(tJobj);
        }
      });
      //to prepare save Json req data by Nisha G 20-7-2022
      let jObject = {};
      let SaveJsonObject = {};
      jObject["ReportName"] = this.screenName;
      Object.keys(this.reportForm.controls).map(key => {
        let tempCtrl = this.jsonData.filter(res => {
          return res.CONTROLNAME == key;
        })[0];
        let ControlValue = tempCtrl.CONTROLCAPTION;
        ControlValue = ControlValue.replace(/ +/g, "");
        if (tempCtrl.CONTROLTYPE == "DateTime") {
          //jObject[ControlValue] = moment(this.reportForm.controls[key].value).format(this.msCustomDateFormat); // deepak porwal 12/jan/2021 scr no.148939
          jObject[ControlValue] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format('DD/MMM/YYYY'); // deepak porwal 18/jan/2021
          if (jObject[ControlValue] === 'Invalid date') {
            // As Disscion with Amit sir , if date field is blank or null. then send defoult date.
            jObject[ControlValue] = '01/Jul/9999';
          }
        } else if (tempCtrl.CONTROLTYPE == "CheckBox") {
          jObject[ControlValue] = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.reportForm.controls[key].value) ? false : this.reportForm.controls[key].value;
        } else {
          jObject[ControlValue] = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.reportForm.controls[key].value) ? "" : this.reportForm.controls[key].value;
        }
        SaveJsonObject = jObject;
      });
      this.service.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          let reqData = {
            JSON: JSON.stringify({
              Details: [{
                ScreenName: this.screenName,
                ParaName: this.parameterValue || '',
                JSONString: JSON.stringify(SaveJsonObject)
              }],
              Response: [{
                "ResponseText": "",
                "ErrorCode": ""
              }]
            })
          };
          this.objUtil.bmlfSaveReportJSON(reqData).subscribe(res => {});
          if (res['Response'][0].ResponseText == "Sucess") {
            //this.paramCtrl.nativeElement.value = "";
            this.parameterValue = '';
            this.loaderEnabled = false;
            this.getParam(this.screenName);
          } else {
            alert('Cant Save');
            console.trace();
            console.error('Save error');
            this.loaderEnabled = false;
          }
        }
      });
    }
  }
  onParamchange(e) {
    try {
      // let pValue = e.target.value;
      // let optionArray = [...this.dataListCtrl.nativeElement.options];
      // optionArray.some(res => {
      //   if (pValue == res.value) {
      //     this.fetchParamData(pValue)
      //     return true;
      //   }
      // })
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.loaderEnabled = true;
    this.service.getReportParameterValue(this.screenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.onReset();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.loaderEnabled = false;
      }
    });
  }
  fillControlFromParam(resData) {
    resData.forEach(element => {
      if (this.reportForm.get(element.CONTROLNAME) != null) {
        let control = this.jsonData.filter(res => {
          return res.CONTROLNAME == element.CONTROLNAME;
        })[0].CONTROLTYPE;
        if (control == "DateTime") {
          this.reportForm.get(element.CONTROLNAME).setValue(element.CONTROLVALUE != 'Invalid date' ? new Date(element.CONTROLVALUE) : null);
        } else if (control == "CheckBox") {
          if (element.CONTROLVALUE == "1") {
            this.reportForm.get(element.CONTROLNAME).setValue(true);
          } else if (element.CONTROLVALUE == "0") {
            this.reportForm.get(element.CONTROLNAME).setValue(false);
          } else {
            this.reportForm.get(element.CONTROLNAME).setValue(element.CONTROLVALUE);
          }
        } else {
          this.reportForm.get(element.CONTROLNAME).setValue(element.CONTROLVALUE);
        }
      } else {
        // For Description
        try {
          document.getElementById(element.CONTROLNAME).innerHTML = element.CONTROLVALUE;
        } catch (e) {}
      }
    });
    this.loaderEnabled = false;
  }
  removeAttribute(e) {
    e.target.removeAttribute('readonly');
  }
  ngOnDestroy() {
    this.customRouteObserver.unsubscribe();
  }
  onOpenErrorBlock(msg) {
    this.alertService.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  onParameterDelete() {
    let oParaValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock('Select Report Parameter.');
      return;
    } else {
      // let oArray = [...this.dataListCtrl.nativeElement.options];
      // if (oArray.length != 0) {
      //   oArray.some(res => {
      //     if (res.value == oParaValue.trim()) {
      //       this.checkval = false
      //       this.loaderEnabled = true ;
      //       this.deleteApiParam(oParaValue);
      //       return true
      //     }
      //     else {
      //       this.checkval = true;
      //       return false;
      //     }
      //   })
      // }
      // else {
      //   this.onOpenErrorBlock('Invalid Parameter');
      //   return ;
      // }
      // if (this.checkval == true) {
      //   this.onOpenErrorBlock('Invalid Paramenter');
      // }
      this.checkval = false;
      this.loaderEnabled = true;
      this.deleteApiParam(oParaValue);
      //this.setformLoadModel();
      this.parameterValue = '';
      return true;
    }
  }
  deleteApiParam(oParaValue) {
    this.service.DeleteReportParameter(this.screenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock('Deleted Successfully.');
          //this.paramCtrl.nativeElement.value = "";
          this.parameterValue = '';
          this.getCustomjsonData(this.screenName);
          this.getParam(this.screenName);
          this.loaderEnabled = false;
          return true;
        }
      }
    });
  }
  onCheckBoxChange(fgName, event) {}
  onReset() {
    if (this.reportForm != undefined) {
      Object.keys(this.reportForm.controls).forEach(key => {
        let control = this.jsonData.filter(res => {
          return res.CONTROLNAME == key;
        })[0];
        if (control.CONTROLDESC != null && control.CONTROLDESC != '' && control.CONTROLDESC != undefined) {
          document.getElementById(control.CONTROLDESC).innerHTML = '';
        }
      });
      this.reportForm.reset();
    } else {}
  }
  onChangeDropDown(event, controlName, FromToVal) {
    // 23/Nov/2020 deepak porwal scr no.142981
    let Key = FromToVal.split("|");
    if (Key != undefined && Key != null) {
      let CtrlValue = this.reportForm.get(Key[1]).value;
      let CurrentCtrl = event.target.value;
      if (CtrlValue != "") {
        if (Key[0] == "From") {
          if (CtrlValue <= CurrentCtrl) {} else if (CtrlValue == null) {} else {
            this.onOpenErrorBlock('To value cannot be less than from value');
            this.reportForm.get(controlName).setValue(CtrlValue);
            return false;
          }
        }
        if (Key[0] == "To") {
          if (CtrlValue >= CurrentCtrl) {} else if (CtrlValue == null) {} else {
            this.onOpenErrorBlock('To value cannot be less than from value');
            this.reportForm.get(controlName).setValue(CtrlValue);
            return false;
          }
        }
      }
    }
  }
  setReportFieldsSession() {
    try {
      let jObject = {};
      jObject["ReportName"] = this.screenName;
      Object.keys(this.reportForm.controls).map(key => {
        let tempCtrl = this.jsonData.filter(res => {
          return res.CONTROLNAME == key;
        })[0];
        let ControlValue = tempCtrl.CONTROLCAPTION;
        ControlValue = ControlValue.replace(/ +/g, "");
        if (tempCtrl.CtrlType == "DateTime" || tempCtrl.CtrlType == "Date" || tempCtrl.CtrlType == "DATES" || tempCtrl.DataType == "DATE") {
          jObject[ControlValue] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format('DD/MMM/YYYY'); // deepak porwal 12/jan/2021 scr no.148939
        } else {
          jObject[ControlValue] = this.reportForm.controls[key].value;
        }
      });
      jObject["ListingFlag"] = false;
      jObject["ListingVariable"] = '';
      var key = this.screenName;
      localStorage.setItem(key, JSON.stringify(jObject));
    } catch (e) {
      console.log(e);
    }
  }
  // 23/Sep/2020 SCR no.145129
  OpenHelpDocument() {
    let screen = this.screenName;
    if (this.screenName == 'Sales Order By Item') {
      screen = 'Sales Order By Item';
    } else if (this.screenName == 'Production Reconciliation') {
      console.log('in production Reconciliation');
      screen = 'Production Reconcilation';
      console.log('../../../../../../assets/help files/' + screen + '.pdf');
    } else if (this.screenName == 'Vendor Item/Quote Report') {
      screen = 'Vendor Item Quote Report';
    } else if (this.screenName == 'Quantity Discount-Vendor Wise Report') {
      screen = 'Quantity Discount-Vendor Wise Report';
    } else if (this.screenName == 'Quantity Discount-Vendor/Item Wise Report') {
      screen = 'Quantity Discount Vendor Item Wise Report';
    } else if (this.screenName == 'Price Matrix Report') {
      screen = 'Price Matrix Report';
    } else if (this.screenName == 'Price Matrix-Customer Class/Item Report') {
      screen = 'Price Matrix Customer Class Item Report';
    } else if (this.screenName == 'Price Matrix-Customer Class/Price Group Report') {
      screen = 'Price Matrix Customer Class Price Group Report';
    } else if (this.screenName == 'Pick List Report') {
      screen = 'Pick List Report';
    } else if (this.screenName == 'Price Matrix-Customer/Item Report') {
      screen = 'Price Matrix Customer Item Report';
    } else if (this.screenName == 'Price Matrix-Customer Class/Item Class Report') {
      screen = 'Price Matrix Customer Class Item Class Report';
    } else if (this.screenName == 'Price Matrix-Customer/Price Group Report') {
      screen = 'Price Matrix Customer Price Group Report';
    } else if (this.screenName == 'Quantity Discount-Vendor/Price Group Wise Report') {
      screen = 'Quantity Discount-Vendor Price Group Wise Report';
    } else if (this.screenName == 'Customer Report') {
      screen = 'Customer Report';
    } else if (this.screenName == 'Bank Statement') {
      screen = 'Bank Statement';
    } else if (this.screenName == 'Cash Flow') {
      screen = 'Cash Flow';
    } else if (this.screenName == 'Cash Statement') {
      screen = 'Cash Statement';
    } else if (this.screenName == 'Outstanding Receivables') {
      screen = 'Outstanding Receivables';
    } else if (this.screenName == 'Journal Register') {
      screen = 'Journal Register';
    } else if (this.screenName == 'Transaction Journal') {
      screen = 'Transaction Journal';
    } else if (this.screenName == 'Void Transaction Report') {
      screen = 'Void Transaction Report';
    } else if (this.screenName == 'Accounts Where Used Report') {
      screen = 'Accounts Where Used Report';
    } else if (this.screenName == 'Employee Statement') {
      screen = 'Employee Statement';
    } else if (this.screenName == 'Vouchers') {
      screen = 'Vouchers';
    }
    window.open('../../../../../../assets/help files/' + screen + '.pdf', '_blank');
  }
  GetFiscalDate() {
    return new Promise((resolve, reject) => {
      debugger;
      let pobjReqData = {};
      pobjReqData.ScreenName = 'Journal Register';
      pobjReqData.LookupKey = 'FiscalStartDate';
      pobjReqData.DbType = 'C';
      this.objUtil.GETGeneralSqlData(pobjReqData).subscribe(res => {
        debugger;
        if (res == null) {
          reject();
          return false;
        } else {
          if (res['Response'][0].ErrorCode == '') {
            let data = res.LookupData;
            if (data.length > 0) {
              if (res.LookupData[0]['FiscYearStartDate'] != null) this.dtFiscalStartDate = new Date(res.LookupData[0]['FiscYearStartDate']);
            }
            resolve('ok');
          } else {
            this.toastMessageService.notifyError(res['Response'][0].ResponseText);
            reject();
          }
        }
      }), err => {
        console.log(err);
      };
    });
  }
  // deepak porwal 20/nov/2020 scr no.142973
  bmlfGetCopyFromTo() {
    try {
      this.msCopyFromToValue = localStorage.getItem("CopyFromTo");
    } catch (e) {
      console.log(e);
    }
  }
  // 23/Nov/2020 deepak porwal to validate from & to date
  onDateChange(evt, controlName, FromToVal) {
    let Key = FromToVal.split("|");
    if (Key != undefined && Key != null) {
      let CtrlValue = this.reportForm.get(Key[1]).value;
      let CurrentCtrl = evt;
      if (CtrlValue != "") {
        if (Key[0] == "From") {
          if (CtrlValue <= CurrentCtrl) {} else if (CtrlValue == null) {} else {
            this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.MSG.TOFROMVALUECHANGE'));
            this.reportForm.get(controlName).setValue(CtrlValue);
            return false;
          }
        }
        if (Key[0] == "To") {
          if (CtrlValue >= CurrentCtrl) {} else if (CtrlValue == null) {} else {
            this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.MSG.FROMTOVALUECHANGE'));
            this.reportForm.get(controlName).setValue(CtrlValue);
            return false;
          }
        }
      }
    }
  }
  // added by NG for validation of date from and date to when fromtovalue is BlankTagEntryConstants  
  // onDateChange(evt, controlCaption,controlName) {
  //   if(controlName.indexOf("(") != -1){
  //     if ((controlCaption).indexOf('From') !=-1) {
  //       let pbResult: boolean = true;
  //       let seq=controlName.substr(controlName.lastIndexOf("(")+1,1);
  //       let toControl='Dates' + "(" +(Number(seq)+1) + ")";
  //       pbResult = CustomValidator.bmgfCompareTwoDates(evt, this.reportForm.get(toControl).value);
  //       if (pbResult == false) {
  //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('From value is greater than to value'));
  //         this.reportForm.get(controlName).setValue(new Date())
  //         return false;
  //       }
  //     }
  //     else {
  //       let pbResult: boolean = true;
  //       let seq=controlName.substr(controlName.lastIndexOf("(")+1,1);
  //       let fromControl='Dates' + "(" +(Number(seq)-1) + ")";
  //       pbResult = CustomValidator.bmgfCompareTwoDates(this.reportForm.get(fromControl).value, evt);
  //       if (pbResult == false) {
  //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('to value is less than from value.'));
  //         this.reportForm.get(controlName).setValue(new Date())
  //         return false;
  //       }
  //     }
  //   }
  //   else{
  //     if ((controlCaption).indexOf('From') !=-1) {
  //       let pbResult: boolean = true;
  //       let seq=controlName.substr(controlName.length-1);
  //       let toControl='DateTime' +(Number(seq)+1);
  //       pbResult = CustomValidator.bmgfCompareTwoDates(evt, this.reportForm.get(toControl).value);
  //       if (pbResult == false) {
  //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('From value is greater than to value'));
  //         this.reportForm.get(controlName).setValue(new Date())
  //         return false;
  //       }
  //     }
  //     else {
  //       let pbResult: boolean = true;
  //       let seq=controlName.substr(controlName.length-1);
  //       let fromControl='DateTime' +(Number(seq)-1);
  //       pbResult = CustomValidator.bmgfCompareTwoDates(this.reportForm.get(fromControl).value, evt);
  //       if (pbResult == false) {
  //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('to value is less than from value.'));
  //         this.reportForm.get(controlName).setValue(new Date())
  //         return false;
  //       }
  //     }
  //   }
  // }
  // Added by Deepak Porwal on 21/Dec/2020 for Print Report as per new logic
  onCommonReportProcess() {
    try {
      let jObject = {};
      let SaveJsonObject = {};
      jObject["ReportName"] = this.screenName;
      console.log("this.reportForm.controls", this.reportForm.controls);
      Object.keys(this.reportForm.controls).map(key => {
        let tempCtrl = this.jsonData.filter(res => {
          return res.CONTROLNAME == key;
        })[0];
        let ControlValue = tempCtrl.CONTROLCAPTION;
        ControlValue = ControlValue.replace(/ +/g, "");
        if (tempCtrl.CONTROLTYPE == "DateTime") {
          //jObject[ControlValue] = moment(this.reportForm.controls[key].value).format(this.msCustomDateFormat); // deepak porwal 12/jan/2021 scr no.148939
          jObject[ControlValue] = moment__WEBPACK_IMPORTED_MODULE_0__(this.reportForm.controls[key].value).format('DD/MMM/YYYY'); // deepak porwal 18/jan/2021
          if (jObject[ControlValue] === 'Invalid date') {
            if (tempCtrl.CONTROLCAPTION.indexOf('From') != -1 || tempCtrl.CONTROLCAPTION.indexOf('Schedule Start') != -1) {
              {
                // As Disscion with Amit sir , if date field is blank or null. then send defoult date.
                if (this.screenName == 'Shipment With Onhand Report') {
                  jObject[ControlValue] = '01/Jan/3001';
                } else {
                  jObject[ControlValue] = '01/Jan/1900';
                }
              }
            } else {
              jObject[ControlValue] = '01/Jan/3001';
            }
          }
        } else if (tempCtrl.CONTROLTYPE == "CheckBox") {
          jObject[ControlValue] = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.reportForm.controls[key].value) ? false : this.reportForm.controls[key].value;
        } else {
          jObject[ControlValue] = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.reportForm.controls[key].value) ? "" : this.reportForm.controls[key].value;
        }
        SaveJsonObject = jObject;
      });
      jObject["ListingFlag"] = false;
      jObject["ListingVariable"] = '';
      jObject['Parameter'] = this.parameterValue || '';
      this.utilService.bmgfReportAction(jObject, this.screenName).then(value => {
        let reqData = {
          JSON: JSON.stringify({
            Details: [{
              ScreenName: this.screenName,
              ParaName: this.parameterValue || '',
              JSONString: JSON.stringify(SaveJsonObject)
            }],
            Response: [{
              "ResponseText": "",
              "ErrorCode": ""
            }]
          })
        };
        this.objUtil.bmlfSaveReportJSON(reqData).subscribe(res => {});
      });
    } catch (e) {
      console.log(e);
    }
  }
  // manual report call
  bmlfOnProcess() {
    let jObject = {
      ReportName: this.screenName,
      ListingFlag: false,
      ListingVariable: ''
    };
    this.utilService.bmgfReportAction(jObject, this.screenName).then(res => {});
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.screenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function GenericReportComponent_Factory(t) {
    return new (t || GenericReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_3__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: GenericReportComponent,
    selectors: [["app-generic-report"]],
    viewQuery: function GenericReportComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    decls: 2,
    vars: 2,
    consts: [["class", "inner-wrapper page_wrap min_h_100p report-wrapper", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "inner-wrapper", "page_wrap", "min_h_100p", "report-wrapper"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-11", "col-9", "page-head-col"], [1, "p_10"], [1, "col-md-1", "col-3", "px-2", "page-head-col", "report-head-right"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn", "p-0", "pt-2", 3, "click"], [2, "font-size", "21px"], ["class", "loader-outer", 4, "ngIf"], ["class", "custom_footer form-container", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "pdfViewerModal", 3, "modaltitle", "indexValue", "widthClass"], [1, "bodyContent"], ["useBrowserLocale", "true", 3, "filenameForDownload", "zoom", "base64Src", "height", "pdfLoaded"], [1, "footerContent"], ["type", "button", 1, "btn", "btn-sky", "btn-sm", 3, "click"], [1, "loader-outer"], [1, "loader"], [1, "custom_footer", "form-container", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "flex_box", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input", "focus"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "id", "rptparameter", "name", "rptparameter", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModelOptions", "ngModel", "ngModelChange", "change"], ["id", "rptparameter"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "submit", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "value"], [3, "ngSwitch"], ["class", "col-md-12 xs_p_0", 4, "ngSwitchCase"], [1, "col-md-12", "xs_p_0"], [1, "col-md-6", "col-lg-4", "custom_flex", "md_p_r_30"], ["type", "text", 1, "form-control", "grid-form-control", 3, "formControlName", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-3", "col-lg-4", "custom_flex", "md_p_r_30"], [1, "col-form-label", 3, "id"], ["for", "OrderType", 1, "col-form-label"], [1, "form-control", 3, "name", "formControlName", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "block_item"], [1, "col-md-6", "col-lg-4"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", 1, "custom-control-input", 3, "value", "id", "formControlName", "change"], [1, "custom-control-label", 3, "for"], ["class", "col-md-3 col-lg-4", 4, "ngIf"], [3, "ngClass"], [1, "col-form-label", "radio-btn"], ["type", "radio", "checked", "", 3, "formControlName", "value", "name"], [1, "form-control", 3, "format", "formControlName", "valueChange"], ["type", "number", 1, "form-control", "grid-form-control", 2, "text-align", "left", 3, "formControlName"], [1, "form-control", "grid-form-control", 3, "spinners", "step", "formControlName", "id", "min", "autoCorrect", "decimals", "format"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function GenericReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, GenericReportComponent_div_0_Template, 32, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GenericReportComponent_app_common_task_modal_1_Template, 1, 1, "app-common-task-modal", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.screenName != "Missing Tag Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__.ModalComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__.NumericTextBoxComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_21__.NgxExtendedPdfViewerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _shared_pipes_string_to_array_pipe__WEBPACK_IMPORTED_MODULE_15__.StringToArrayPipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n\n.radio-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n\n@media (max-width: 980px) {\n  .form-group[_ngcontent-%COMP%]   .col-form-label[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n}\n@media (max-width: 767px) {\n    .report-wrapper {\n    margin-top: 50px !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .report-head-right[_ngcontent-%COMP%] {\n    justify-content: center !important;\n    align-items: flex-start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvZ2VuZXJpYy1yZXBvcnQvZ2VuZXJpYy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2NvbW1vbi1yZXBvcnQvY29tcG9uZW50cy9nZW5lcmljLXJlcG9ydC9nZW5lcmljLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUY7QURDRTtFQUNFLHVCQUFBO0FDQ0o7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFFRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUNDSjtBQUNGO0FESUU7RUFERjtJQUVJLDJCQUFBO0VDREY7QUFDRjs7QURJSTtFQURGO0lBRUksa0NBQUE7SUFDQSxrQ0FBQTtFQ0FKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM3M2EzYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5tb2RhbC1mb290ZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b21fZm9vdGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xyXG59XHJcbi5yYWRpby1idG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotM3B4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk4MHB4KSB7XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAgLmNvbC1mb3JtLWxhYmVsLCAuZm9ybS1ncm91cCBsYWJlbHtcclxuICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFweCBcclxuICB9XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLnJlcG9ydC13cmFwcGVye1xyXG4gIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIH1cclxuICAucmVwb3J0LWhlYWQtcmlnaHR7XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuIiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdG9tX2Zvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xufVxuXG4ucmFkaW8tYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAuZm9ybS1ncm91cCAuY29sLWZvcm0tbGFiZWwsIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICA6Om5nLWRlZXAgLnJlcG9ydC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yZXBvcnQtaGVhZC1yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76278:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-master-reports/item-master-report/item-master-report.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemMasterReportComponent: () => (/* binding */ ItemMasterReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 21916);





function ItemMasterReportComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ItemMasterReportComponent_app_custom_lookup_modal_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-custom-lookup-modal", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveLookupField", function ItemMasterReportComponent_app_custom_lookup_modal_15_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.saveLookupField($event));
    })("closeLookup", function ItemMasterReportComponent_app_custom_lookup_modal_15_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("keyData", ctx_r1.lookupKeyData);
  }
}
class ItemMasterReportComponent {
  constructor() {
    this.mbLoaderEnabled = false;
    this.mbIsLookupModal = false;
    this.msScreenName = "Material Analysis Report";
  }
  ngOnInit() {}
  // process report
  bmlfOnProcess(psValue) {}
  // close modal
  bmlfOnClose(psValue) {}
  static #_ = this.ɵfac = function ItemMasterReportComponent_Factory(t) {
    return new (t || ItemMasterReportComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ItemMasterReportComponent,
    selectors: [["app-item-master-report"]],
    decls: 16,
    vars: 5,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-12", "xs_p_0", "page-head-col"], [1, "p_10"], ["class", "loader-outer", 4, "ngIf"], [1, "form-container"], [1, "report-footer", "inner-wrapper"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "keyData", "saveLookupField", "closeLookup"]],
    template: function ItemMasterReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ItemMasterReportComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "footer", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemMasterReportComponent_Template_button_click_11_listener() {
          return ctx.bmlfOnProcess("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemMasterReportComponent_Template_button_click_13_listener() {
          return ctx.bmlfOnClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ItemMasterReportComponent_app_custom_lookup_modal_15_Template, 1, 1, "app-custom-lookup-modal", 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "ITEMMASTERREPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbLoaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_0__.CustomLookupModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47595:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-master-reports/material-property-master-report/material-property-master-report.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialPropertyMasterReportComponent: () => (/* binding */ MaterialPropertyMasterReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



class MaterialPropertyMasterReportComponent {
  constructor(utilityService, router) {
    this.utilityService = utilityService;
    this.router = router;
    this.screenName = 'Material Property Master Report';
  }
  ngOnInit() {
    this.process();
    this.router.navigate(['/main/dashboard/dashboardpage']);
  }
  process() {
    let jObject = {
      ReportName: this.screenName,
      ListingFlag: false,
      ListingVariable: ''
    };
    this.utilityService.bmgfReportAction(jObject, this.screenName).then(res => {});
  }
  static #_ = this.ɵfac = function MaterialPropertyMasterReportComponent_Factory(t) {
    return new (t || MaterialPropertyMasterReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MaterialPropertyMasterReportComponent,
    selectors: [["app-material-property-master-report"]],
    decls: 1,
    vars: 0,
    template: function MaterialPropertyMasterReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96012:
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-transaction-reports/aging-report/aging-report.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgingReportComponent: () => (/* binding */ AgingReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _constant_common_report_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant/common-report.const */ 72678);
/* harmony import */ var _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/aging-report-model */ 72196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 21916);



















function AgingReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function AgingReportComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", obj_r8.PARANAME);
  }
}
function AgingReportComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", obj_r9.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](obj_r9.PARANAME);
  }
}
function AgingReportComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 15)(3, "div", 57)(4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 59)(9, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_div_46_Template_input_ngModelChange_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.mobjAgingModel[item_r10.field] = $event);
    })("blur", function AgingReportComponent_div_46_Template_input_blur_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.bmlfonOpenLookupModal(item_r10.lookupKey, item_r10.field, item_r10.modelName, "blur", ctx_r13.mobjAgingModel[item_r10.field], "custom", "txt" + item_r10.field));
    })("focus", function AgingReportComponent_div_46_Template_input_focus_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.bmlfOnGlobalFocus(item_r10.field, ctx_r14.mobjAgingModel[item_r10.field]));
    })("change", function AgingReportComponent_div_46_Template_input_change_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.bmlfonGlobalOnChangesFn(item_r10.field, ctx_r15.mobjAgingModel[item_r10.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_div_46_Template_span_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.bmlfonOpenLookupModal(item_r10.lookupKey, item_r10.field, item_r10.modelName, "click", ctx_r16.mobjAgingModel[item_r10.field], "custom", "txt" + item_r10.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 56)(13, "div", 15)(14, "div", 57)(15, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 59)(21, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_div_46_Template_input_ngModelChange_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.mobjAgingModel[item_r10.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("for", "txt" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r10.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r10.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("name", item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r5.mobjAgingModel[item_r10.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r10.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("for", "txt" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r10.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r10.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("name", item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r5.mobjAgingModel[item_r10.desField]);
  }
}
function AgingReportComponent_app_custom_lookup_modal_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-custom-lookup-modal", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("saveLookupField", function AgingReportComponent_app_custom_lookup_modal_97_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.bmlfonSaveLookupField($event));
    })("closeLookup", function AgingReportComponent_app_custom_lookup_modal_97_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.bmlfonCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function AgingReportComponent_app_common_task_modal_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-common-task-modal", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeTaskModal", function AgingReportComponent_app_common_task_modal_98_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
class AgingReportComponent {
  getDataList() {}
  /**-------END: TASK Field ----*/
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(lookupService, dateFormatService, lsService, utilService, toastMessageService, userFieldService, router, commonReportService, alertservice) {
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.utilService = utilService;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.router = router;
    this.commonReportService = commonReportService;
    this.alertservice = alertservice;
    this.loaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjUserData = {};
    this.msScreenName = "Inventory Aging Report";
    this.msParmScreenName = 'Inventory Aging Report - Selection Criteria';
    this.mobjLookupKeyData = {};
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.msCustomDateFormat = "";
    this.marrCommonRecordSet = [];
    this.mobjCommonDialogData = {};
    this.mbCommonDialogView = false;
    this.marrSelectedRecord = [];
    this.mbBulkResponseMsg = false;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__.CommonConstants.gsServerDateFormat;
    this.mbBulkResponseView = false;
    this.msMsgData = {};
    this.msFocusField = '';
    this.msLookupField = '';
    this.mbcheckval = false;
    this.mobjAgingModel = new _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.AgingReportModel();
    this.mobjAgingModelBlank = new _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.AgingReportModel();
    this.paramValueArray = [];
    this.msscreenModeUpdate = "I";
    this.mbIsLoading = false;
    this.marrLineGridData = [];
    this.marrLoadLookupFields = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_2__.AgingReportConstants.garrAginReportLookupFieldsMap;
    this.parameterValue = '';
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.mobjSelectedItemData = {};
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.miLineItemRowIndex = null;
  }
  ngOnInit() {
    this.utilService.getBMEScreePermission(this.msScreenName); // Fetch Screen permission
    this.mobjUserData = this.lsService.getUserSession();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.getParam(this.msParmScreenName);
  }
  bmlfonParamchange(e) {
    try {
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.mbIsLoading = true;
    this.userFieldService.getReportParameterValue(this.msParmScreenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.bmlfclearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.mbIsLoading = false;
      }
    });
  }
  bmlfclearModel() {
    this.mobjAgingModel = Object.assign({}, this.mobjAgingModelBlank);
  }
  fillControlFromParam(resData) {
    debugger;
    resData.forEach(element => {
      let key = this.bmlfongetKeyFromValue(element.CONTROLNAME);
      setTimeout(() => {
        if (element.CONTROLNAME == 'chkActive' || element.CONTROLNAME == 'chkNoNew' || element.CONTROLNAME == 'chkObsolete' || element.CONTROLNAME == 'chkDeactivated' || element.CONTROLNAME == 'ChkOpeningBalance') {
          this.mobjAgingModel[key] = element.CONTROLVALUE == '0' ? false : true;
        }
      }, 500);
      if (element.CONTROLNAME == 'PvdtDatesApplyFrom(0)' || element.CONTROLNAME == 'PvdtDatesApplyto(0)') {
        this.mobjAgingModel[key] = this.utilService.bmlfSetDateAsDateFormat(element.CONTROLVALUE);
      } else {
        this.mobjAgingModel[key] = element.CONTROLVALUE;
      }
    });
    this.bmlfGetLookupDes(this.mobjAgingModel);
    this.mbIsLoading = false;
  }
  bmlfongetKeyFromValue(value) {
    let newObj = this.mobjAgingModel;
    let tempKey = Object.keys(newObj).find(data => {
      return _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[data] == value;
    });
    return tempKey;
  }
  bmlfonParameterSave() {
    debugger;
    let paramValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    let newObj = this.mobjAgingModel;
    if (paramValue == '') {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.PRMEMPTY'));
      return;
    } else {
      this.loaderEnabled = true;
      this.msscreenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      //let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.msParmScreenName;
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === paramValue)[0];
        if (list != undefined) {
          this.msscreenModeUpdate = 'U';
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.msscreenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        if (key != undefined && typeof newObj[key] == "string") {
          let tempJObj = {};
          if (_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key] != undefined) {
            tempJObj["ControlName"] = _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key];
            tempJObj["ControlValue"] = newObj[key];
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "boolean") {
          let tempJObj = {};
          if (_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key] != undefined) {
            tempJObj["ControlName"] = _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key];
            tempJObj["ControlValue"] = newObj[key] == true ? 1 : 0;
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "number") {
          let tempJObj = {};
          if (_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key] != undefined) {
            tempJObj["ControlName"] = _models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.BmeHashMapCertificate[key];
            tempJObj["ControlValue"] = newObj[key];
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
      });
      this.userFieldService.saveReportParameters(jArray, headerData).subscribe(res => {
        this.loaderEnabled = false;
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            //this.paramCtrl.nativeElement.value = "";
            this.parameterValue = '';
            this.mbIsLoading = false;
            this.getParam(this.msParmScreenName);
          } else {
            console.trace();
            console.error('Save error');
            this.mbIsLoading = false;
          }
        }
      });
    }
  }
  bmlfonParameterDelete() {
    let oParaValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.SELRPTPRM'));
      return;
    } else {
      this.mbcheckval = false;
      this.mbIsLoading = true;
      this.bmlfondeleteApiParam(oParaValue);
      this.parameterValue = '';
      return true;
    }
  }
  onOpenErrorBlock(msg) {
    this.alertservice.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  bmlfondeleteApiParam(oParaValue) {
    this.userFieldService.DeleteReportParameter(this.msParmScreenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.DELMSG'));
          // this.paramCtrl.nativeElement.value = "";
          this.parameterValue = '';
          this.bmlfclearModel();
          this.getParam(this.msParmScreenName);
          this.mbIsLoading = false;
          return true;
        }
        this.mbIsLoading = false;
      }
    });
  }
  getParam(scr) {
    this.mbIsLoading = true;
    this.userFieldService.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.mbIsLoading = false;
      } else {
        this.mbIsLoading = false;
      }
    });
  }
  bmlfValidateData() {
    if (this.mobjAgingModel.AgeFrom1 == undefined || this.mobjAgingModel.AgeTo1 == undefined || this.mobjAgingModel.AgeFrom2 == undefined || this.mobjAgingModel.AgeTo2 == undefined || this.mobjAgingModel.AgeFrom3 == undefined || this.mobjAgingModel.AgeTo3 == undefined || this.mobjAgingModel.AgeFrom4 == undefined) {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.AGEBRKVALIDATE'));
      return false;
    } else if (this.mobjAgingModel.AgeFrom1 >= this.mobjAgingModel.AgeTo1 || this.mobjAgingModel.AgeFrom2 >= this.mobjAgingModel.AgeTo2 || this.mobjAgingModel.AgeFrom3 >= this.mobjAgingModel.AgeTo3) {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.AGEBRKVALUEMSG'));
      return false;
    }
    return true;
  }
  // process report
  bmlfonProcess(psValue) {
    debugger;
    let pbResult = this.bmlfValidateData();
    if (pbResult == true) {
      this.loaderEnabled = true;
      let pobjCopyRec = Object.assign({}, this.mobjAgingModel);
      let pobjFilterHeaderRec = this.bmlfOnUpdateHeaderData(pobjCopyRec);
      this.mbIsLoading = true;
      this.utilService.bmgfReportAction(pobjFilterHeaderRec, this.msScreenName).then(res => {
        this.loaderEnabled = false;
      });
    }
  }
  // close modal
  bmlfOnClose(psValue) {
    this.router.navigate(['/main/dashboard']);
  }
  // help doc
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Inventory Aging Report.pdf', '_blank');
  }
  //Open LOOKUP MODAL
  bmlfonOpenLookupModal(psField, psKey, modelName, psEvent, psValue, psType, psEleId, piRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.loaderEnabled = true;
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjAgingModel[psKey + 'Des'] = '';
      this.loaderEnabled = false;
      return false;
    }
    let psLookUpKey = psField;
    let psScreenName = this.msScreenName;
    let pobjReqData = {
      ScreenName: psScreenName
    };
    pobjReqData.LookUpKey = psLookUpKey;
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      this.loaderEnabled = false;
      setTimeout(() => {
        this.utilService.bmgfOnKeyInputEnable();
        this.mbIsLoading = false;
      }, 500);
      if (res == null) {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        let title = psField;
        title = this.utilService.bmgfonTranslate('REPORTS.' + psField.toUpperCase());
        let updatedtitle;
        if (title.includes('From')) {
          updatedtitle = title.replace('From', '');
        } else if (title.includes('To')) {
          updatedtitle = title.replace('To', '');
        }
        this.miLineItemRowIndex = piRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.key = psKey;
        this.mobjLookupKeyData.title = updatedtitle;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.controlName = modelName;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let psInputKey = this.bmlfGetInputColumn(psKey);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.bmlfonSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else if (parrFilterData.length == 0) {
            let elementExists = document.getElementById(psEleId);
            if (elementExists) {
              document.getElementById(psEleId).focus();
            }
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      console.log(err);
      this.loaderEnabled = false;
    });
  }
  bmlfonSaveLookupField(pobjData) {
    let psInputKey = this.bmlfGetInputColumn(pobjData.key);
    let psInputDesKey = this.bmlfGetInputDesColumn(pobjData.key);
    let validationFlag = this.bmlfOnValidateControls(pobjData.key, pobjData.value[psInputKey]);
    if (validationFlag == true) {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = pobjData.value[psInputKey];
      } else {
        this.mobjAgingModel[pobjData.key] = pobjData.value[psInputKey];
        if (psInputDesKey) {
          this.mobjAgingModel[pobjData.key + 'Des'] = pobjData.value[psInputDesKey];
        }
      }
    }
    this.mbIsLookupModal = false;
    this.mbMutiSelectionLookup = false;
  }
  bmlfOnValidateControls(ctrlName, value) {
    if (ctrlName.includes("From") == true) {
      if (this.mobjAgingModel[_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.ControlMap[ctrlName]] == "") {
        return true;
      } else if (value > this.mobjAgingModel[_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.ControlMap[ctrlName]]) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
        return false;
      } else {
        return true;
      }
    } else {
      if (this.mobjAgingModel[_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.ControlMap[ctrlName]] == "") {
        return true;
      } else if (value < this.mobjAgingModel[_models_aging_report_model__WEBPACK_IMPORTED_MODULE_3__.ControlMap[ctrlName]]) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
        return false;
      } else {
        return true;
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'ProductKeyFrom' || psField == 'ProductKeyTo') {
      return psField = 'ProductKey';
    } else if (psField == 'ItemClassFrom' || psField == 'ItemClassTo') {
      return psField = 'InClassKey';
    } else if (psField == 'ItemKeyFrom' || psField == 'ItemKeyTo') {
      return psField = 'ItemKey';
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      psField = 'Location';
      return psField;
    }
  }
  // Set Lookup Description Column
  bmlfGetInputDesColumn(psField) {
    if (psField == 'ProductKeyFrom' || psField == 'ProductKeyTo') {
      return 'Description';
    } else if (psField == 'ItemClassFrom' || psField == 'ItemClassTo') {
      return 'Description';
    } else if (psField == 'ItemKeyFrom' || psField == 'ItemKeyTo') {
      return 'Desc1';
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      return 'Description';
    }
  }
  //Close LOOKUP MODAL
  bmlfonCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (this.miLineItemRowIndex != null) {
          document.getElementById(pobjData.eleId).value = '';
        } else {
          this.mobjAgingModel[pobjData.key] = '';
          this.mobjAgingModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  // GlobalOnChanges Event
  bmlfonGlobalOnChangesFn(psFieldName, pobjFieldData, piIndex, eleId) {
    if (pobjFieldData == null) {
      return false;
    }
    if (piIndex != null) {
      if (psFieldName == 'DocDateTo') {
        if (this.marrLineGridData[piIndex].DocDateTo < this.marrLineGridData[piIndex].DocDateFrom) {
          this.marrLineGridData[piIndex].DocDateFrom = this.marrLineGridData[piIndex].DocDateTo;
        }
      }
      if (psFieldName == 'DocDateFrom') {
        if (this.marrLineGridData[piIndex].DocDateFrom > this.marrLineGridData[piIndex].DocDateTo) {
          this.marrLineGridData[piIndex].DocDateTo = this.marrLineGridData[piIndex].DocDateFrom;
        }
      }
    }
    // if (this.mbIsItemModal) {
    //   this.mbIsChange = true;
    //   this.mbIsSaveDone = false;
    // }
  }
  // Global focus Fn
  bmlfOnGlobalFocus(field, value) {
    this.msFocusField = field;
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  // Global Blur Fn
  bmlfOnGlobalBlur(field, psValue, eleId) {
    this.msFocusField = '';
  }
  // Get Lookup Description
  bmlfGetLookupDes(pobjData) {
    debugger;
    let parrSetKeyData = [{
      KeyCode: 'ProductKey',
      KeyValue1: pobjData.ProductKeyFrom,
      KeyValue2: 'From',
      KeyDescription: ''
    }, {
      KeyCode: 'ProductKey',
      KeyValue1: pobjData.ProductKeyTo,
      KeyValue2: 'To',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemKeyFrom,
      KeyValue2: 'From',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemKeyTo,
      KeyValue2: 'To',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationFrom,
      KeyValue2: 'From',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationTo,
      KeyValue2: 'To',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMCLASS',
      KeyValue1: pobjData.ItemClassFrom,
      KeyValue2: 'From',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMCLASS',
      KeyValue1: pobjData.ItemClassTo,
      KeyValue2: 'To',
      KeyDescription: ''
    }];
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrSetKeyData,
        ScreenName: [{
          ScreenName: this.msScreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userFieldService.bmlfFetchKeyDescription(reqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (res.LookupData.length) {
        res.LookupData.forEach(ele => {
          if (ele.KeyCode == 'ProductKey') {
            if (ele.KeyValue2 == 'From') {
              this.mobjAgingModel.ProductKeyFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'To') {
              this.mobjAgingModel.ProductKeyToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMKEY') {
            if (ele.KeyValue2 == 'From') {
              this.mobjAgingModel.ItemKeyFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'To') {
              this.mobjAgingModel.ItemKeyToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'Location') {
            if (ele.KeyValue2 == 'From') {
              this.mobjAgingModel.LocationFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'To') {
              this.mobjAgingModel.LocationToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMCLASS') {
            if (ele.KeyValue2 == 'From') {
              this.mobjAgingModel.ItemClassFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'To') {
              this.mobjAgingModel.ItemClassToDes = ele.KeyDescription;
            }
          }
        });
      }
    }, err => {
      console.log(err);
    });
  }
  // select deselect all
  bmlfonSelectDeSelect(type, psValue) {
    if (type == 'itemType') {
      this.marrLineGridData.forEach(ele => {
        ele.Select = psValue;
      });
    }
  }
  // update header data
  bmlfOnUpdateHeaderData(pobjData) {
    delete pobjData.msItemClassDescFrom;
    delete pobjData.msItemClassDescTo;
    delete pobjData.msItemKeyDescFrom;
    delete pobjData.msItemKeyDescTo;
    delete pobjData.msLocationDescFrom;
    delete pobjData.msLocationDescTo;
    delete pobjData.msProductDescFrom;
    delete pobjData.msProductDescTo;
    return pobjData;
  }
  bmlfonAgeFrom(ev, type) {
    if (type == 'AgeTo1') {
      this.mobjAgingModel.AgeFrom2 = parseInt(ev.target.value) + 1;
    }
    if (type == 'AgeTo2') {
      this.mobjAgingModel.AgeFrom3 = parseInt(ev.target.value) + 1;
    }
    if (type == 'AgeTo3') {
      this.mobjAgingModel.AgeFrom4 = parseInt(ev.target.value) + 1;
    }
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function AgingReportComponent_Factory(t) {
    return new (t || AgingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_11__.AlertService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: AgingReportComponent,
    selectors: [["app-aging-report"]],
    decls: 99,
    vars: 32,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-11", "col-9", "page-head-col"], [1, "col-md-1", "col-3", "px-2", "page-head-col"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", "p-0", "pt-2", 3, "click"], [2, "font-size", "21px"], ["class", "loader-outer", 4, "ngIf"], [1, "col-md-10"], [1, "form-group", "row"], [1, "col-md-3"], ["for", "txtParameter", "id", "lblParameter", 1, "col-form-label"], [1, "col-md-4", "custom_flex", "pl-2"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "dataList", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "codes"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "custom_footer", "form-container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "seprator"], ["id", "div_Age_Brackets", 1, "col-md-12", "mt-1"], [1, "modal-content", "border-0"], [1, "modal-body"], [1, "table"], [1, "age-bracket"], ["type", "number", "name", "from1", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "to1", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "name", "from2", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "to2", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "name", "from3", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "to3", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "name", "from4", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "report-disabled", "name", "to4", "disabled", "", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "button", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [1, "row"], [1, "col-md-6"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label", 3, "for", "id"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange", "blur", "focus", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["type", "text", "disabled", "", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function AgingReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 8)(11, "ul")(12, "li")(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_a_click_13_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "li")(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_a_click_17_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_button_click_20_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, AgingReportComponent_div_23_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 18)(31, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function AgingReportComponent_Template_input_input_31_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "datalist", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, AgingReportComponent_ng_container_35_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_36_listener($event) {
          return ctx.parameterValue = $event;
        })("change", function AgingReportComponent_Template_input_change_36_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "datalist", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, AgingReportComponent_ng_container_38_Template, 3, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_button_click_40_listener() {
          return ctx.bmlfonParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_button_click_43_listener() {
          return ctx.bmlfonParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, AgingReportComponent_div_46_Template, 22, 26, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "hr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 33)(49, "div", 15)(50, "div", 34)(51, "div", 35)(52, "table", 36)(53, "thead")(54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Age Brackets");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "tbody")(61, "tr")(62, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "Age Brackets 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "td")(65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_65_listener($event) {
          return ctx.mobjAgingModel.AgeFrom1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "td")(67, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_67_listener($event) {
          return ctx.mobjAgingModel.AgeTo1 = $event;
        })("change", function AgingReportComponent_Template_input_change_67_listener($event) {
          return ctx.bmlfonAgeFrom($event, "AgeTo1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "tr")(69, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "Age Brackets 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "td")(72, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_72_listener($event) {
          return ctx.mobjAgingModel.AgeFrom2 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "td")(74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_74_listener($event) {
          return ctx.mobjAgingModel.AgeTo2 = $event;
        })("change", function AgingReportComponent_Template_input_change_74_listener($event) {
          return ctx.bmlfonAgeFrom($event, "AgeTo2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "tr")(76, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "Age Brackets 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "td")(79, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_79_listener($event) {
          return ctx.mobjAgingModel.AgeFrom3 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "td")(81, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_81_listener($event) {
          return ctx.mobjAgingModel.AgeTo3 = $event;
        })("change", function AgingReportComponent_Template_input_change_81_listener($event) {
          return ctx.bmlfonAgeFrom($event, "AgeTo3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "tr")(83, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](84, "Age Brackets 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "td")(86, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_86_listener($event) {
          return ctx.mobjAgingModel.AgeFrom4 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "td")(88, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AgingReportComponent_Template_input_ngModelChange_88_listener($event) {
          return ctx.mobjAgingModel.AgeTo4 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "footer", 46)(90, "div", 47)(91, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_button_click_91_listener() {
          return ctx.bmlfonProcess("processEvn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AgingReportComponent_Template_button_click_94_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](97, AgingReportComponent_app_custom_lookup_modal_97_Template, 1, 1, "app-custom-lookup-modal", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](98, AgingReportComponent_app_common_task_modal_98_Template, 1, 1, "app-common-task-modal", 51);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.msScreenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 22, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 24, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 26, "REPORTS.PARAMETER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.parameterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeFrom1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeTo1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeFrom2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeTo2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeFrom3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeTo3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeFrom4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mobjAgingModel.AgeTo4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](93, 28, "COMMON.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](96, 30, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__.CommonTaskModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n\n#report-disabled[_ngcontent-%COMP%]:disabled {\n  background-color: white;\n}\n\n.age-bracket[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n\n.page-head[_ngcontent-%COMP%] {\n  padding: 10px 0 10px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvaW52ZW50b3J5LXRyYW5zYWN0aW9uLXJlcG9ydHMvYWdpbmctcmVwb3J0L2FnaW5nLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL05ldyUyMFdvcmtpbmcxNi9CTUVXRUJVSS9CTUVXRUIxMS9CTUVXRUIxMS9zcmMvYXBwL21haW4vY29tbW9uLXJlcG9ydC9jb21wb25lbnRzL2ludmVudG9yeS10cmFuc2FjdGlvbi1yZXBvcnRzL2FnaW5nLXJlcG9ydC9hZ2luZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSx1QkFBQTtBQ0NOOztBREdFO0VBQ0Usb0JBQUE7QUNBSjs7QURHRTtFQUNFLHVCQUFBO0FDQUo7O0FER0U7RUFDRSwwQkFBQTtBQ0FKOztBREVFO0VBQ0UsaUNBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNzNhM2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubW9kYWwtZm9vdGVye1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbV9mb290ZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDNweDtcclxuICB9XHJcblxyXG4gICNyZXBvcnQtZGlzYWJsZWQ6ZGlzYWJsZWQgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmFnZS1icmFja2V0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFnZS1oZWFke1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG59IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdG9tX2Zvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xufVxuXG4jcmVwb3J0LWRpc2FibGVkOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hZ2UtYnJhY2tldCB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1oZWFkIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 11237:
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-transaction-reports/transaction-activity-report/transaction-activity-report.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionActivityReportComponent: () => (/* binding */ TransactionActivityReportComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constant/common-report.const */ 72678);
/* harmony import */ var _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/transaction-activity-report.model */ 36830);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 21916);






















function TransactionActivityReportComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function TransactionActivityReportComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function TransactionActivityReportComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", obj_r14.PARANAME);
  }
}
function TransactionActivityReportComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", obj_r15.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](obj_r15.PARANAME);
  }
}
function TransactionActivityReportComponent_div_63_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 21)(2, "div", 22)(3, "div", 95)(4, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 25)(9, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_63_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.mobjOrderModel[item_r16.field] = $event);
    })("blur", function TransactionActivityReportComponent_div_63_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.bmlfonOpenLookupModal(item_r16.lookupKey, item_r16.field, item_r16.modelName, "blur", ctx_r21.mobjOrderModel[item_r16.field], "custom", "txt" + item_r16.field));
    })("focus", function TransactionActivityReportComponent_div_63_ng_container_1_Template_input_focus_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.bmlfOnGlobalFocus(item_r16.field, ctx_r23.mobjOrderModel[item_r16.field]));
    })("change", function TransactionActivityReportComponent_div_63_ng_container_1_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.bmlfonGlobalOnChangesFn(item_r16.field, ctx_r25.mobjOrderModel[item_r16.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_div_63_ng_container_1_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.bmlfonOpenLookupModal(item_r16.lookupKey, item_r16.field, item_r16.modelName, "click", ctx_r27.mobjOrderModel[item_r16.field], "custom", "txt" + item_r16.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 21)(13, "div", 22)(14, "div", 95)(15, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 25)(21, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_63_ng_container_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.mobjOrderModel[item_r16.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r16.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r16.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r17.mobjOrderModel[item_r16.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r16.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r16.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r16.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r16.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r16.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r16.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r16.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r17.mobjOrderModel[item_r16.desField]);
  }
}
function TransactionActivityReportComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TransactionActivityReportComponent_div_63_ng_container_1_Template, 22, 26, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r16.display && item_r16.viewOn == "tabOne");
  }
}
function TransactionActivityReportComponent_div_102_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 21)(2, "div", 22)(3, "div", 95)(4, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 25)(9, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_102_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r34.mobjOrderModel[item_r32.field] = $event);
    })("blur", function TransactionActivityReportComponent_div_102_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r37.bmlfonOpenLookupModal(item_r32.lookupKey, item_r32.field, item_r32.modelName, "blur", ctx_r37.mobjOrderModel[item_r32.field], "custom", "txt" + item_r32.field));
    })("focus", function TransactionActivityReportComponent_div_102_ng_container_1_Template_input_focus_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.bmlfOnGlobalFocus(item_r32.field, ctx_r39.mobjOrderModel[item_r32.field]));
    })("change", function TransactionActivityReportComponent_div_102_ng_container_1_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r41.bmlfonGlobalOnChangesFn(item_r32.field, ctx_r41.mobjOrderModel[item_r32.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_div_102_ng_container_1_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r43.bmlfonOpenLookupModal(item_r32.lookupKey, item_r32.field, item_r32.modelName, "click", ctx_r43.mobjOrderModel[item_r32.field], "custom", "txt" + item_r32.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 21)(13, "div", 22)(14, "div", 95)(15, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 25)(21, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_102_ng_container_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r45.mobjOrderModel[item_r32.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r32.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r32.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r32.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r32.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r32.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r32.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r33.mobjOrderModel[item_r32.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r32.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r32.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r32.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r32.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r32.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r32.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r32.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r33.mobjOrderModel[item_r32.desField]);
  }
}
function TransactionActivityReportComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TransactionActivityReportComponent_div_102_ng_container_1_Template, 22, 26, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r32.display && item_r32.viewOn == "tabTwo");
  }
}
function TransactionActivityReportComponent_div_156_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 21)(2, "div", 22)(3, "div", 95)(4, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 25)(9, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_156_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.mobjOrderModel[item_r48.field] = $event);
    })("blur", function TransactionActivityReportComponent_div_156_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.bmlfonOpenLookupModal(item_r48.lookupKey, item_r48.field, item_r48.modelName, "blur", ctx_r53.mobjOrderModel[item_r48.field], "custom", "txt" + item_r48.field));
    })("focus", function TransactionActivityReportComponent_div_156_ng_container_1_Template_input_focus_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r55.bmlfOnGlobalFocus(item_r48.field, ctx_r55.mobjOrderModel[item_r48.field]));
    })("change", function TransactionActivityReportComponent_div_156_ng_container_1_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r57.bmlfonGlobalOnChangesFn(item_r48.field, ctx_r57.mobjOrderModel[item_r48.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_div_156_ng_container_1_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r59.bmlfonOpenLookupModal(item_r48.lookupKey, item_r48.field, item_r48.modelName, "click", ctx_r59.mobjOrderModel[item_r48.field], "custom", "txt" + item_r48.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 21)(13, "div", 22)(14, "div", 95)(15, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 25)(21, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_div_156_ng_container_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r61.mobjOrderModel[item_r48.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r48.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r48.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r48.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r48.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r48.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r48.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r49.mobjOrderModel[item_r48.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r48.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r48.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r48.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r48.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r48.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r48.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r48.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r49.mobjOrderModel[item_r48.desField]);
  }
}
function TransactionActivityReportComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TransactionActivityReportComponent_div_156_ng_container_1_Template, 22, 26, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r48.display && item_r48.viewOn == "tabThree");
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 104)(2, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r72.marrLineGridData[rowIndex_r67][item_r64.field] = $event);
    })("change", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_3_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r76.bmlfonGlobalOnChangesFn("Select", ctx_r76.marrLineGridData[rowIndex_r67][item_r64.field], rowIndex_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "chk", ctx_r68.marrLineGridData[rowIndex_r67][item_r64.field], "", rowIndex_r67, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r68.marrLineGridData[rowIndex_r67][item_r64.field])("name", rowIndex_r67 + "_" + item_r64.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("for", "chk", ctx_r68.marrLineGridData[rowIndex_r67][item_r64.field], "", rowIndex_r67, "")("id", "lbl", ctx_r68.marrLineGridData[rowIndex_r67][item_r64.field], "", rowIndex_r67, "");
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 107)(2, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r81.marrLineGridData[rowIndex_r67][item_r64.field] = $event);
    })("change", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_4_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r85.bmlfonGlobalOnChangesFn(item_r64.field, ctx_r85.marrLineGridData[rowIndex_r67][item_r64.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "txt", item_r64.field, "", rowIndex_r67, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r69.marrLineGridData[rowIndex_r67][item_r64.field])("name", rowIndex_r67 + "_" + item_r64.field);
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 109)(2, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r91);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r90.marrLineGridData[rowIndex_r67][item_r64.field] = $event);
    })("blur", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r91);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r94.bmlfonOpenLookupModal(item_r64.lookupKey, item_r64.field, item_r64.modelName, "blur", ctx_r94.marrLineGridData[rowIndex_r67][item_r64.field], "custom", "txt" + item_r64.field + rowIndex_r67, rowIndex_r67));
    })("focus", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r91);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r97.bmlfOnGlobalFocus(item_r64.field, ctx_r97.marrLineGridData[rowIndex_r67][item_r64.field]));
    })("change", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r91);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r100.bmlfonGlobalOnChangesFn(item_r64.field, ctx_r100.marrLineGridData[rowIndex_r67][item_r64.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r91);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r103.bmlfonOpenLookupModal(item_r64.lookupKey, item_r64.field, item_r64.modelName, "click", ctx_r103.marrLineGridData[rowIndex_r67][item_r64.field], "custom", "txt" + item_r64.field + rowIndex_r67, rowIndex_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r64.field + rowIndex_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r64.field + rowIndex_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r70.marrLineGridData[rowIndex_r67][item_r64.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r64.field + rowIndex_r67 + "Lookup");
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-datepicker", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_6_Template_kendo_datepicker_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r109);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r108.marrLineGridData[rowIndex_r67][item_r64.field] = $event);
    })("valueChange", function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_6_Template_kendo_datepicker_valueChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r109);
      const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r112.bmlfonGlobalOnChangesFn(item_r64.field, ctx_r112.marrLineGridData[rowIndex_r67][item_r64.field], rowIndex_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", rowIndex_r67 + "_" + item_r64.field)("ngModel", ctx_r71.marrLineGridData[rowIndex_r67][item_r64.field])("format", ctx_r71.msCustomDateFormat)("readOnlyInput", true);
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_3_Template, 4, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_4_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_5_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_ng_container_6_Template, 2, 4, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 5, item_r64.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r64.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r64.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r64.type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r64.type == "date");
  }
}
function TransactionActivityReportComponent_kendo_grid_column_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-grid-column", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, TransactionActivityReportComponent_kendo_grid_column_176_ng_template_2_Template, 7, 7, "ng-template", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", item_r64.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 4, item_r64.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("width", item_r64.field == "Select" ? "62" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !item_r64.display);
  }
}
const _c0 = function () {
  return [5, 10, 20, 50, 100];
};
function TransactionActivityReportComponent_ng_template_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 111);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function TransactionActivityReportComponent_app_custom_lookup_modal_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function TransactionActivityReportComponent_app_custom_lookup_modal_186_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r119);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r118.bmlfonSaveLookupField($event));
    })("closeLookup", function TransactionActivityReportComponent_app_custom_lookup_modal_186_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r119);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r120.bmlfonCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("multiSelection", ctx_r12.mbMutiSelectionLookup)("keyData", ctx_r12.mobjLookupKeyData);
  }
}
function TransactionActivityReportComponent_app_common_task_modal_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function TransactionActivityReportComponent_app_common_task_modal_187_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r121.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r13.mobjTaskData);
  }
}
const _c1 = function (a0) {
  return {
    modalLoading: a0
  };
};
class TransactionActivityReportComponent {
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(lookupService, dateFormatService, lsService, utilService, toastMessageService, userFieldService, router, commonReportService) {
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.utilService = utilService;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.router = router;
    this.commonReportService = commonReportService;
    this.mbLoaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjUserData = {};
    this.msScreenName = "Transaction Activity Report";
    this.msParmScreenName = 'Transaction Activity Report - Selection Criteria';
    this.mobjLookupKeyData = {};
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.msCustomDateFormat = "";
    this.marrCommonRecordSet = [];
    this.mobjCommonDialogData = {};
    this.mbCommonDialogView = false;
    this.marrSelectedRecord = [];
    this.mbBulkResponseMsg = false;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mbBulkResponseView = false;
    this.msMsgData = {};
    this.msFocusField = '';
    this.msLookupField = '';
    this.mbcheckval = false;
    this.mobjOrderModel = new _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.InputModel();
    this.mobjOrderModelBlank = new _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.InputModel();
    this.paramValueArray = [];
    this.msscreenModeUpdate = "I";
    this.mbIsLoading = false;
    this.marrLineGridData = [];
    this.marrLoadLookupFields = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranActivityConstants.garrTranActivityLookupFieldsMap;
    this.parameterValue = '';
    this.marrItemList = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranActivityConstants.garrTranTypeListMap;
    this.marrItemListModel = new _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.InputGridModel();
    this.marrTranTypes = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranActivityConstants.garrTransactionType;
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.mobjSelectedItemData = {};
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    this.miLineItemRowIndex = null;
    this.paramKey = {
      "Multi-DimensionalID": 'txtMulti-DimensionalID',
      FromDimensionID: 'txtFromDimensionID',
      ToDimensionID: 'txtToDimensionID',
      FromApplyDate: 'dateFromApplyDate',
      ToApplyDate: 'dateToApplyDate',
      "Multi-DimensionalIDDesc": 'multi-id-desc',
      FromDimensionIDDesc: 'from-id-desc',
      ToDimensionIDDesc: 'to-id-desc'
    };
  }
  ngOnInit() {
    this.utilService.getBMEScreePermission(this.msScreenName); // Fetch Screen permission
    this.mobjUserData = this.lsService.getUserSession();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.getParam(this.msParmScreenName);
    this.bmlfOnSetTranType();
  }
  bmlfonParamchange(e) {
    try {
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.mbIsLoading = true;
    this.userFieldService.getReportParameterValue(this.msParmScreenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.bmlfclearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.mbIsLoading = false;
      }
    });
  }
  bmlfclearModel() {
    this.mobjOrderModel = Object.assign({}, this.mobjOrderModel);
  }
  fillControlFromParam(resData) {
    resData.forEach(element => {
      let key = this.bmlfongetKeyFromValue(element.CONTROLNAME);
      setTimeout(() => {
        if (element.CONTROLNAME == 'chkActive' || element.CONTROLNAME == 'chkNoNew' || element.CONTROLNAME == 'chkObsolete' || element.CONTROLNAME == 'chkDeactivated' || element.CONTROLNAME == 'ChkOpeningBalance') {
          this.mobjOrderModel[key] = element.CONTROLVALUE == '0' ? false : true;
        }
      }, 500);
      if (element.CONTROLNAME == 'PvdtDatesApplyFrom(0)' || element.CONTROLNAME == 'PvdtDatesApplyto(0)') {
        this.mobjOrderModel[key] = new Date(element.CONTROLVALUE);
      } else {
        this.mobjOrderModel[key] = element.CONTROLVALUE;
      }
    });
    this.mbIsLoading = false;
  }
  bmlfongetKeyFromValue(value) {
    let newObj = this.mobjOrderModel;
    let tempKey = Object.keys(newObj).find(data => {
      return _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[data] == value;
    });
    return tempKey;
  }
  bmlfonParameterSave() {
    let paramValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    let newObj = this.mobjOrderModel;
    if (paramValue == '') {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.PRMEMPTY'));
      return;
    } else {
      this.mbIsLoading = true;
      this.msscreenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      //let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.msParmScreenName;
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === paramValue)[0];
        if (list != undefined) {
          this.msscreenModeUpdate = 'U';
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.msscreenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        if (key != undefined && key == 'ApplyDateFrom') {
          let tempJObj = {};
          if (_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key];
            tempJObj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_3__(newObj[key]).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat);
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && key == 'ApplyDateTo') {
          let tempJObj = {};
          if (_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key];
            tempJObj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_3__(newObj[key]).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat);
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "string") {
          let tempJObj = {};
          if (_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key];
            tempJObj["ControlValue"] = newObj[key];
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "boolean") {
          let tempJObj = {};
          if (_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.TranRptParameterMap[key];
            tempJObj["ControlValue"] = newObj[key] == true ? 1 : 0;
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
      });
      this.userFieldService.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            //this.paramCtrl.nativeElement.value = "";
            this.parameterValue = '';
            this.mbIsLoading = false;
            this.getParam(this.msParmScreenName);
          } else {
            console.trace();
            console.error('Save error');
            this.mbIsLoading = false;
          }
        }
      });
    }
  }
  bmlfonParameterDelete() {
    let oParaValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.SELRPTPRM'));
      return;
    } else {
      this.mbcheckval = false;
      this.mbIsLoading = true;
      this.bmlfondeleteApiParam(oParaValue);
      this.parameterValue = '';
      return true;
    }
  }
  onOpenErrorBlock(msg) {
    this.toastMessageService.notifyError(msg);
  }
  bmlfondeleteApiParam(oParaValue) {
    this.userFieldService.DeleteReportParameter(this.msParmScreenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.DELMSG'));
          // this.paramCtrl.nativeElement.value = "";
          this.parameterValue = '';
          this.bmlfclearModel();
          this.getParam(this.msParmScreenName);
          this.mbIsLoading = false;
          return true;
        }
        this.mbIsLoading = false;
      }
    });
  }
  getParam(scr) {
    this.mbIsLoading = true;
    this.userFieldService.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.mbIsLoading = false;
      } else {
        console.log("Res Is Null");
        this.mbIsLoading = false;
      }
    });
  }
  // process report
  bmlfOnProcess(psValue) {
    let pobjCopyRec = Object.assign({}, this.mobjOrderModel);
    let pobjCopyGridRec = this.marrLineGridData.map(ele => Object.assign({}, ele));
    let pDefaultReportType = localStorage.getItem('reportType');
    pobjCopyGridRec.forEach(ele => {
      let DocDateFrom = moment__WEBPACK_IMPORTED_MODULE_3__(ele.DocDateFrom, this.msServeDateFormat);
      let DocDateTo = moment__WEBPACK_IMPORTED_MODULE_3__(ele.DocDateTo, this.msServeDateFormat);
      ele.DocDateFrom = ele.DocDateFrom == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(DocDateFrom).format(this.msServeDateFormat);
      ele.DocDateTo = ele.DocDateTo == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(DocDateTo).format(this.msServeDateFormat);
    });
    let pobjFilterHeaderRec = this.bmlfOnUpdateHeaderData(pobjCopyRec);
    let pobjRecordSet = {
      DistReport: [],
      GridParameters: pobjCopyGridRec,
      Response: [{
        ResponseText: '',
        ErrorCode: '',
        Pdfpath: ''
      }]
    };
    pobjRecordSet.DistReport.push(pobjFilterHeaderRec);
    let pobjReqData = {
      JSON: JSON.stringify(pobjRecordSet)
    };
    this.mbIsLoading = true;
    this.commonReportService.bmlfonPrintTranActivityReport(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        let pPDFSrc = res.Response[0].Pdfpath;
        if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.bmgfNullCheckValidator(pPDFSrc)) {
          this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
        } else {
          if (pDefaultReportType == 'Print') {
            this.utilService.bmgfPrintPDF(pPDFSrc);
          } else if (pDefaultReportType == 'NewTab') {
            this.utilService.bmgfOpenPDFNewTab(pPDFSrc);
          } else {
            this.utilService.bmgfDownloadFile(pPDFSrc, this.msScreenName, pDefaultReportType);
          }
        }
      }
      if (res.Response[0].ErrorCode != '') {
        if (res.Response[0].ResponseText == '') {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        } else {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        }
      }
    }, err => {
      console.log(err);
    });
  }
  // close modal
  bmlfOnClose(psValue) {
    this.router.navigate(['/main/dashboard']);
  }
  // help doc
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Transaction Activity Report.pdf', '_blank');
  }
  //Open LOOKUP MODAL
  bmlfonOpenLookupModal(psField, psKey, modelName, psEvent, psValue, psType, psEleId, piRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.miLineItemRowIndex = piRowIdx;
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjOrderModel[psKey + 'Des'] = '';
      return false;
    }
    let psLookUpKey = psField;
    let psScreenName = this.msScreenName;
    let pobjReqData = {
      ScreenName: psScreenName
    };
    pobjReqData.LookUpKey = psLookUpKey;
    if (psLookUpKey == 'DocNoFrom' || psLookUpKey == 'DocNoTo') {
      pobjReqData.Filter1 = this.marrLineGridData[piRowIdx]['TrnType'].split('-')[0];
    }
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      setTimeout(() => {
        this.utilService.bmgfOnKeyInputEnable();
        this.mbIsLoading = false;
      }, 500);
      if (res == null) {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_3__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_3__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        let title = psField;
        let updatedtitle;
        if (psField.includes('DocNoFrom') || psField.includes('DocNoTo')) {
          updatedtitle = psField;
        } else {
          if (psField.includes('From')) {
            updatedtitle = psField.replace('From', '');
          } else if (psField.includes('To')) {
            updatedtitle = psField.replace('To', '');
          }
        }
        if (updatedtitle == 'InventoryControlA/C') {
          title = this.utilService.bmgfonTranslate('REPORTS.INVCTRLAC');
        } else if (updatedtitle == 'InventoryOffsetA/C' || updatedtitle == 'InventoryOffestA/C') {
          title = this.utilService.bmgfonTranslate('REPORTS.INVOFFSETAC');
        } else {
          title = this.utilService.bmgfonTranslate('REPORTS.' + updatedtitle.toUpperCase());
        }
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.key = psKey;
        this.mobjLookupKeyData.title = title;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.controlName = modelName;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let psInputKey = this.bmlfGetInputColumn(psKey);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.bmlfonSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else if (parrFilterData.length == 0) {
            let elementExists = document.getElementById(psEleId);
            if (elementExists) {
              document.getElementById(psEleId).focus();
            }
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfonSaveLookupField(pobjData) {
    let psInputKey = this.bmlfGetInputColumn(pobjData.key);
    let psInputDesKey = this.bmlfGetInputDesColumn(pobjData.key);
    let validationFlag = this.bmlfOnValidateControls(pobjData.key, pobjData.value[psInputKey]);
    if (validationFlag == true) {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = pobjData.value[psInputKey];
      } else {
        this.mobjOrderModel[pobjData.key] = pobjData.value[psInputKey];
        if (psInputDesKey) {
          this.mobjOrderModel[pobjData.key + 'Des'] = pobjData.value[psInputDesKey];
        }
      }
    } else {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = '';
      } else {
        this.mobjOrderModel[pobjData.key] = '';
        if (psInputDesKey) {
          this.mobjOrderModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
    this.mbIsLookupModal = false;
    this.mbMutiSelectionLookup = false;
  }
  bmlfOnValidateControls(ctrlName, value) {
    if (ctrlName.includes("From") == true) {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjOrderModel[_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.mobjOrderModel[_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjOrderModel[_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.mobjOrderModel[_models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'ItemClassFrom' || psField == 'ItemClassTo') {
      psField = 'InClassKey';
      return psField;
    } else if (psField == 'ItemFrom' || psField == 'ItemTo') {
      psField = 'ItemKey';
      return psField;
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      psField = 'Location';
      return psField;
    } else if (psField == 'ItemTypeFrom' || psField == 'ItemTypeTo') {
      psField = 'ItemTyp';
      return psField;
    } else if (psField == 'ItemSubTypeFrom' || psField == 'ItemSubTypeTo') {
      psField = 'Itemsubtyp';
      return psField;
    } else if (psField == 'ABCFrom' || psField == 'ABCTo') {
      psField = 'AbcKey';
      return psField;
    } else if (psField == 'ProductFrom' || psField == 'ProductTo') {
      psField = 'ProductKey';
      return psField;
    } else if (psField == 'CommodityFrom' || psField == 'CommodityTo') {
      psField = 'CommodKey';
      return psField;
    } else if (psField == 'InventoryAccountFrom' || psField == 'InventoryAccountTo' || psField == 'OffSetAccountFrom' || psField == 'OffSetAccountTo') {
      psField = 'Acct';
      return psField;
    } else if (psField == 'DocNoFrom' || psField == 'DocNoTo') {
      psField = 'SysDocID';
      return psField;
    }
  }
  // Set Lookup Description Column
  bmlfGetInputDesColumn(psField) {
    if (psField == 'ItemFrom' || psField == 'ItemTo') {
      return 'Desc1';
    } else if (psField == 'ItemClassFrom' || psField == 'ItemClassTo' || psField == 'LocationFrom' || psField == 'LocationTo' || psField == 'ItemTypeFrom' || psField == 'ItemTypeTo' || psField == 'ItemSubTypeFrom' || psField == 'ItemSubTypeTo' || psField == 'ABCFrom' || psField == 'ABCTo' || psField == 'ProductFrom' || psField == 'ProductTo' || psField == 'CommodityFrom' || psField == 'CommodityTo' || psField == 'InventoryAccountFrom' || psField == 'InventoryAccountTo' || psField == 'OffSetAccountFrom' || psField == 'OffSetAccountTo') {
      return 'Description';
    }
  }
  //Close LOOKUP MODAL
  bmlfonCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      // console.log(pos);
      if (parrFilterData.length == 0) {
        if (this.miLineItemRowIndex != null) {
          document.getElementById(pobjData.eleId).value = '';
        } else {
          this.mobjOrderModel[pobjData.key] = '';
          this.mobjOrderModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  // GlobalOnChanges Event
  bmlfonGlobalOnChangesFn(psFieldName, pobjFieldData, piIndex, eleId) {
    if (pobjFieldData == null) {
      return false;
    }
    if (piIndex != null) {
      if (psFieldName == 'DocDateTo') {
        if (this.marrLineGridData[piIndex].DocDateTo < this.marrLineGridData[piIndex].DocDateFrom) {
          this.marrLineGridData[piIndex].DocDateFrom = this.marrLineGridData[piIndex].DocDateTo;
        }
      }
      if (psFieldName == 'DocDateFrom') {
        if (this.marrLineGridData[piIndex].DocDateFrom > this.marrLineGridData[piIndex].DocDateTo) {
          this.marrLineGridData[piIndex].DocDateTo = this.marrLineGridData[piIndex].DocDateFrom;
        }
      }
    }
    // if (this.mbIsItemModal) {
    //   this.mbIsChange = true;
    //   this.mbIsSaveDone = false;
    // }
  }
  // Global focus Fn
  bmlfOnGlobalFocus(field, value) {
    this.msFocusField = field;
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  // Global Blur Fn
  bmlfOnGlobalBlur(field, psValue, eleId) {
    this.msFocusField = '';
  }
  // Get Lookup Description
  bmlfGetLookupDes(pobjData) {
    let parrSetKeyData = [{
      KeyCode: 'ITEMCLASS',
      KeyValue1: pobjData.ItemClassFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMCLASS',
      KeyValue1: pobjData.ItemClassTo,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemTo,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationTo,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMTYPE',
      KeyValue1: pobjData.ItemTypeFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMTYPE',
      KeyValue1: pobjData.ItemTypeTo,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMSUBTYPE',
      KeyValue1: pobjData.ItemSubTypeFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMSUBTYPE',
      KeyValue1: pobjData.ItemSubTypeTo,
      KeyValue2: '',
      KeyDescription: ''
    }];
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrSetKeyData,
        ScreenName: [{
          ScreenName: this.msScreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userFieldService.bmlfFetchKeyDescription(reqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (res.LookupData.length) {
        res.LookupData.forEach(ele => {
          if (ele.KeyCode == 'ITEMCLASS') {
            if (ele.KeyValue1 == pobjData.ItemClassFrom) {
              this.mobjOrderModel.ItemClassFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.ItemClassTo) {
              this.mobjOrderModel.ItemClassToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMKEY') {
            if (ele.KeyValue1 == pobjData.ItemFrom) {
              this.mobjOrderModel.ItemFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.ItemTo) {
              this.mobjOrderModel.ItemToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'Location') {
            if (ele.KeyValue1 == pobjData.LocationFrom) {
              this.mobjOrderModel.LocationFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.LocationTo) {
              this.mobjOrderModel.LocationToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMTYPE') {
            if (ele.KeyValue1 == pobjData.ItemTypeFrom) {
              this.mobjOrderModel.ItemTypeFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.ItemTypeTo) {
              this.mobjOrderModel.ItemTypeToDes = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMSUBTYPE') {
            if (ele.KeyValue1 == pobjData.ItemSubTypeFrom) {
              this.mobjOrderModel.ItemSubTypeFromDes = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.ItemSubTypeTo) {
              this.mobjOrderModel.ItemSubTypeToDes = ele.KeyDescription;
            }
          }
        });
      }
    }, err => {
      console.log(err);
    });
  }
  // Change Function
  bmlfonChange(psFieldType, psValue, psIsChange = null) {
    if (psFieldType == 'ApplyDateTo') {
      if (this.mobjOrderModel.ApplyDateTo < this.mobjOrderModel.ApplyDateFrom) {
        this.mobjOrderModel.ApplyDateFrom = this.mobjOrderModel.ApplyDateTo;
      }
    } else if (psFieldType == 'ApplyDateFrom') {
      if (this.mobjOrderModel.ApplyDateFrom > this.mobjOrderModel.ApplyDateTo) {
        this.mobjOrderModel.ApplyDateTo = this.mobjOrderModel.ApplyDateFrom;
      }
    }
  }
  // select deselect all
  bmlfonSelectDeSelect(type, psValue) {
    if (type == 'itemType') {
      this.marrLineGridData.forEach(ele => {
        ele.Select = psValue;
      });
    }
  }
  // Set Transation type list data
  bmlfOnSetTranType() {
    this.marrTranTypes.map(ele => {
      let pobjData = Object.assign({}, this.marrItemListModel);
      pobjData.TrnType = ele;
      pobjData.Select = false;
      this.marrLineGridData.push(pobjData);
    });
  }
  // update header data
  bmlfOnUpdateHeaderData(pobjData) {
    delete pobjData.ItemClassFromDes;
    delete pobjData.ItemClassToDes;
    delete pobjData.ItemFromDes;
    delete pobjData.ItemToDes;
    delete pobjData.LocationFromDes;
    delete pobjData.LocationToDes;
    delete pobjData.ItemTypeFromDes;
    delete pobjData.ItemTypeToDes;
    delete pobjData.ItemSubTypeFromDes;
    delete pobjData.ItemSubTypeToDes;
    delete pobjData.ABCFromDes;
    delete pobjData.ABCToDes;
    delete pobjData.ProductFromDes;
    delete pobjData.ProductToDes;
    delete pobjData.CommodityFromDes;
    delete pobjData.CommodityToDes;
    delete pobjData.InventoryAccountFromDes;
    delete pobjData.InventoryAccountToDes;
    delete pobjData.OffSetAccountFromDes;
    delete pobjData.OffSetAccountToDes;
    delete pobjData['undefined'];
    return pobjData;
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function TransactionActivityReportComponent_Factory(t) {
    return new (t || TransactionActivityReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_11__.CommonReportService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: TransactionActivityReportComponent,
    selectors: [["app-transaction-activity-report"]],
    decls: 188,
    vars: 98,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", "p-0", "pt-2", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "loader-outer", 4, "ngIf"], ["id", "frmOrdForm"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5"], ["for", "txtParameter", "id", "lblParameter", 1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "dataList", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "codes"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["id", "accordionAction", 1, "accordion"], [1, "card", "mb-0"], ["id", "tabOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#divcollapseItemDetails", "aria-expanded", "true", "aria-controls", "divcollapseItemDetails", 1, "font-weight-normal", "mb-0"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["id", "divcollapseItemDetails", "aria-labelledby", "tabOne", "data-parent", "#accordionAction", 1, "collapse", "show"], [1, "card-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["for", "chkOpBalCheck", 1, "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "OpBalCheck", "id", "chkOpBalCheck", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkOpBalCheck", 1, "custom-control-label"], ["id", "tabTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#divcollapseApplyDate", "aria-expanded", "true", "aria-controls", "divcollapseApplyDate", 1, "font-weight-normal", "mb-0"], ["id", "divcollapseApplyDate", "aria-labelledby", "tabTwo", "data-parent", "#accordionAction", 1, "collapse"], ["for", "dateApplyDateFrom", "id", "lblApplyDateFrom", 1, "col-form-label"], ["name", "ApplyDateFrom", "id", "dateApplyDateFrom", 1, "form-control", 3, "ngModel", "format", "min", "readOnlyInput", "ngModelChange", "valueChange"], ["for", "dateApplyDateTo", "id", "lblApplyDateTo", 1, "col-form-label"], ["name", "ApplyDateTo", "id", "dateApplyDateTo", 1, "form-control", 3, "ngModel", "format", "readOnlyInput", "ngModelChange", "valueChange"], [1, "seprator"], [1, "font-weight-normal", "m-0"], ["for", "chkItemActive", 1, "col-form-label"], ["type", "checkbox", "name", "ItemActive", "id", "chkItemActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkItemActive", 1, "custom-control-label"], ["for", "chkItemObsolete", 1, "col-form-label"], ["type", "checkbox", "name", "chkItemObsolete", "id", "chkItemObsolete", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkItemObsolete", 1, "custom-control-label"], ["for", "chkItemNoNew", 1, "col-form-label"], ["type", "checkbox", "name", "ItemNoNew", "id", "chkItemNoNew", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkItemNoNew", 1, "custom-control-label"], ["for", "chkItemDeactivated", 1, "col-form-label"], ["type", "checkbox", "name", "ItemDeactivated", "id", "chkItemDeactivated", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkItemDeactivated", 1, "custom-control-label"], ["id", "tabThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#divcollapseAccrange", "aria-expanded", "true", "aria-controls", "divcollapseAccrange", 1, "font-weight-normal", "mb-0"], ["id", "divcollapseAccrange", "aria-labelledby", "tabThree", "data-parent", "#accordionAction", 1, "collapse"], [1, "form-container"], [1, "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec"], ["type", "button", "id", "cmdSelectLineBtn", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "click"], ["type", "button", "id", "cmdUnselectLineBtn", 1, "btn", "btn-primary", "btn-sm", "m_b_10", 3, "click"], ["id", "divKendoGridLineType", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "dtLineItemGrid", 1, "custom_h_grid", "max_scroll", "low_space_table", "responsive_grid", 3, "kendoGridBinding", "resizable", "selectable"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "title", "width", "hidden", 4, "ngFor", "ngForOf"], ["kendoPagerTemplate", ""], [1, "modal-footer"], ["type", "button", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "modal-backdrop", "fade", "show"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label", 3, "for", "id"], ["type", "text", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange", "blur", "focus", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["type", "text", "disabled", "", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange"], [3, "field", "title", "width", "hidden"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "custom-control-label", 3, "for", "id"], [1, "form-group", "custom-inline-input"], ["kendoGridFocusable", "", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "form-group", "custom_flex"], ["id", "dateApplyDateFrom", 1, "form-control", 3, "name", "ngModel", "format", "min", "readOnlyInput", "ngModelChange", "valueChange"], [3, "pageSizes"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function TransactionActivityReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, TransactionActivityReportComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "li")(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_22_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_25_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, TransactionActivityReportComponent_div_29_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "form", 19)(31, "section")(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 25)(40, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function TransactionActivityReportComponent_Template_input_input_40_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "datalist", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, TransactionActivityReportComponent_ng_container_44_Template, 2, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.parameterValue = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_45_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "datalist", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, TransactionActivityReportComponent_ng_container_47_Template, 3, 2, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_49_listener() {
          return ctx.bmlfonParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_52_listener() {
          return ctx.bmlfonParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](53, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "div", 37)(55, "div", 38)(56, "div", 39)(57, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](60, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 42)(62, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, TransactionActivityReportComponent_div_63_Template, 2, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "div", 20)(65, "div", 45)(66, "div", 22)(67, "div", 23)(68, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 25)(72, "div", 47)(73, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_73_listener($event) {
          return ctx.mobjOrderModel.OpBalCheck = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_73_listener() {
          return ctx.bmlfonGlobalOnChangesFn("OpBalCheck", ctx.mobjOrderModel.OpBalCheck);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](74, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "div", 38)(76, "div", 50)(77, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](80, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 52)(82, "div", 43)(83, "div", 20)(84, "div", 21)(85, "div", 22)(86, "div", 23)(87, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "div", 25)(92, "kendo-datepicker", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_kendo_datepicker_ngModelChange_92_listener($event) {
          return ctx.mobjOrderModel.ApplyDateFrom = $event;
        })("valueChange", function TransactionActivityReportComponent_Template_kendo_datepicker_valueChange_92_listener() {
          ctx.bmlfonChange("ApplyDateFrom", ctx.mobjOrderModel.ApplyDateFrom);
          return ctx.bmlfonGlobalOnChangesFn("ApplyDateFrom", ctx.mobjOrderModel.ApplyDateFrom);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "div", 21)(94, "div", 22)(95, "div", 23)(96, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](100, "div", 25)(101, "kendo-datepicker", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_kendo_datepicker_ngModelChange_101_listener($event) {
          return ctx.mobjOrderModel.ApplyDateTo = $event;
        })("valueChange", function TransactionActivityReportComponent_Template_kendo_datepicker_valueChange_101_listener() {
          ctx.bmlfonChange("ApplyDateTo", ctx.mobjOrderModel.ApplyDateTo);
          return ctx.bmlfonGlobalOnChangesFn("ApplyDateTo", ctx.mobjOrderModel.ApplyDateTo);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](102, TransactionActivityReportComponent_div_102_Template, 2, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](103, "hr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](107, "div", 20)(108, "div", 21)(109, "div", 22)(110, "div", 23)(111, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "div", 25)(115, "div", 47)(116, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_116_listener($event) {
          return ctx.mobjOrderModel.ItemActive = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_116_listener() {
          return ctx.bmlfonGlobalOnChangesFn("ItemActive", ctx.mobjOrderModel.ItemActive);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](117, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "div", 21)(119, "div", 22)(120, "div", 23)(121, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](124, "div", 25)(125, "div", 47)(126, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_126_listener($event) {
          return ctx.mobjOrderModel.ItemObsolete = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_126_listener() {
          return ctx.bmlfonGlobalOnChangesFn("ItemObsolete", ctx.mobjOrderModel.ItemObsolete);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](127, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "div", 21)(129, "div", 22)(130, "div", 23)(131, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "div", 25)(135, "div", 47)(136, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_136_listener($event) {
          return ctx.mobjOrderModel.ItemNoNew = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_136_listener() {
          return ctx.bmlfonGlobalOnChangesFn("ItemNoNew", ctx.mobjOrderModel.ItemNoNew);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](137, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](138, "div", 21)(139, "div", 22)(140, "div", 23)(141, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](144, "div", 25)(145, "div", 47)(146, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionActivityReportComponent_Template_input_ngModelChange_146_listener($event) {
          return ctx.mobjOrderModel.ItemDeactivated = $event;
        })("change", function TransactionActivityReportComponent_Template_input_change_146_listener() {
          return ctx.bmlfonGlobalOnChangesFn("ItemDeactivated", ctx.mobjOrderModel.ItemDeactivated);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](147, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](148, "div", 38)(149, "div", 71)(150, "h5", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](153, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](154, "div", 73)(155, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](156, TransactionActivityReportComponent_div_156_Template, 2, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](157, "hr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "div", 74)(162, "div", 75)(163, "div", 76)(164, "div", 77)(165, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_165_listener() {
          return ctx.bmlfonSelectDeSelect("itemType", true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](168, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_168_listener() {
          return ctx.bmlfonSelectDeSelect("itemType", false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](171, "div", 80)(172, "kendo-grid", 81, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](174, "kendo-grid-messages", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](176, TransactionActivityReportComponent_kendo_grid_column_176_Template, 3, 6, "kendo-grid-column", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](177, TransactionActivityReportComponent_ng_template_177_Template, 4, 2, "ng-template", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](178, "div", 86)(179, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_179_listener() {
          return ctx.bmlfOnProcess("processEvn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](181, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](182, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionActivityReportComponent_Template_button_click_182_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](185, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](186, TransactionActivityReportComponent_app_custom_lookup_modal_186_Template, 1, 2, "app-custom-lookup-modal", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](187, TransactionActivityReportComponent_app_common_task_modal_187_Template, 1, 1, "app-common-task-modal", 91);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](96, _c1, ctx.mbLoaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 50, "REPORTS.TRANACTIVITYREPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 52, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 54, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbLoaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](38, 56, "REPORTS.PARAMETER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.parameterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](59, 58, "REPORTS.ITEMDETAILS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](70, 60, "REPORTS.SHOEOPENCLOSEBLANCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.OpBalCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](79, 62, "REPORTS.APPLYDATES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](89, 64, "REPORTS.APPLYDATE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](90, 66, "REPORTS.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ApplyDateFrom)("format", ctx.msCustomDateFormat)("readOnlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](98, 68, "REPORTS.APPLYDATE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](99, 70, "REPORTS.TO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ApplyDateTo)("format", ctx.msCustomDateFormat)("readOnlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](106, 72, "REPORTS.ITEMSTATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](113, 74, "REPORTS.ACTIVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ItemActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](123, 76, "REPORTS.OBSOLETE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ItemObsolete);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](133, 78, "REPORTS.NOPURCHASEDISCONTINUED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ItemNoNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](143, 80, "REPORTS.DEACTIVATED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ItemDeactivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](152, 82, "REPORTS.ACCRANGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](160, 84, "REPORTS.SELTRANTYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](167, 86, "REPORTS.SELECTALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](170, 88, "REPORTS.UNSELECTALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("kendoGridBinding", ctx.marrLineGridData)("resizable", true)("selectable", ctx.mobjSelectableSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](175, 90, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](181, 92, "COMMON.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](184, 94, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.FocusableDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_20__.DatePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32644:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-transaction-reports/transaction-history-report/transaction-history-report.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionHistoryReportComponent: () => (/* binding */ TransactionHistoryReportComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constant/common-report.const */ 72678);
/* harmony import */ var _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/transaction-history-report.model */ 79488);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 21916);






















function TransactionHistoryReportComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function TransactionHistoryReportComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function TransactionHistoryReportComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", obj_r13.PARANAME);
  }
}
function TransactionHistoryReportComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", obj_r14.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](obj_r14.PARANAME);
  }
}
function TransactionHistoryReportComponent_div_74_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 21)(2, "div", 22)(3, "div", 66)(4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 25)(9, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.mobjOrderModel[item_r15.field] = $event);
    })("blur", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.bmlfonOpenLookupModal(item_r15.lookupKey, item_r15.field, item_r15.modelName, "blur", ctx_r20.mobjOrderModel[item_r15.field], "custom", "txt" + item_r15.field));
    })("focus", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_input_focus_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.bmlfOnGlobalFocus(item_r15.field, ctx_r22.mobjOrderModel[item_r15.field]));
    })("change", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.bmlfonGlobalOnChangesFn(item_r15.field, ctx_r24.mobjOrderModel[item_r15.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.bmlfonOpenLookupModal(item_r15.lookupKey, item_r15.field, item_r15.modelName, "click", ctx_r26.mobjOrderModel[item_r15.field], "custom", "txt" + item_r15.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 21)(13, "div", 22)(14, "div", 66)(15, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 25)(21, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_div_74_ng_container_1_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.mobjOrderModel[item_r15.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r15.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r15.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r15.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r15.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r15.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r15.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r16.mobjOrderModel[item_r15.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r15.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r15.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r15.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r15.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r15.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r15.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r15.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r16.mobjOrderModel[item_r15.desField]);
  }
}
function TransactionHistoryReportComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TransactionHistoryReportComponent_div_74_ng_container_1_Template, 22, 26, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r15.display && item_r15.isDescription);
  }
}
function TransactionHistoryReportComponent_div_76_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 22)(2, "div", 66)(3, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 25)(8, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_div_76_ng_container_1_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r33.mobjOrderModel[item_r31.field] = $event);
    })("blur", function TransactionHistoryReportComponent_div_76_ng_container_1_Template_input_blur_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.bmlfonOpenLookupModal(item_r31.lookupKey, item_r31.field, item_r31.modelName, "blur", ctx_r36.mobjOrderModel[item_r31.field], "custom", "txt" + item_r31.field));
    })("focus", function TransactionHistoryReportComponent_div_76_ng_container_1_Template_input_focus_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.bmlfOnGlobalFocus(item_r31.field, ctx_r38.mobjOrderModel[item_r31.field]));
    })("change", function TransactionHistoryReportComponent_div_76_ng_container_1_Template_input_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.bmlfonGlobalOnChangesFn(item_r31.field, ctx_r40.mobjOrderModel[item_r31.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_div_76_ng_container_1_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.bmlfonOpenLookupModal(item_r31.lookupKey, item_r31.field, item_r31.modelName, "click", ctx_r42.mobjOrderModel[item_r31.field], "custom", "txt" + item_r31.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("for", "txt" + item_r31.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r31.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 8, "REPORTS." + item_r31.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 10, "REPORTS." + (item_r31.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r31.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r31.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r32.mobjOrderModel[item_r31.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r31.field + "Lookup");
  }
}
function TransactionHistoryReportComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TransactionHistoryReportComponent_div_76_ng_container_1_Template, 11, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r31.display && !item_r31.isDescription);
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 75)(2, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.marrLineGridData[rowIndex_r48][item_r45.field] = $event);
    })("change", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_3_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r57.bmlfonGlobalOnChangesFn("Select", ctx_r57.marrLineGridData[rowIndex_r48][item_r45.field], rowIndex_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "chk", ctx_r49.marrLineGridData[rowIndex_r48][item_r45.field], "", rowIndex_r48, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r49.marrLineGridData[rowIndex_r48][item_r45.field])("name", rowIndex_r48 + "_" + item_r45.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("for", "chk", ctx_r49.marrLineGridData[rowIndex_r48][item_r45.field], "", rowIndex_r48, "")("id", "lbl", ctx_r49.marrLineGridData[rowIndex_r48][item_r45.field], "", rowIndex_r48, "");
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 78)(2, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.marrLineGridData[rowIndex_r48][item_r45.field] = $event);
    })("change", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_4_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r66.bmlfonGlobalOnChangesFn(item_r45.field, ctx_r66.marrLineGridData[rowIndex_r48][item_r45.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "txt", item_r45.field, "", rowIndex_r48, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r50.marrLineGridData[rowIndex_r48][item_r45.field])("name", rowIndex_r48 + "_" + item_r45.field);
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 80)(2, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r71.marrLineGridData[rowIndex_r48][item_r45.field] = $event);
    })("blur", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r75.bmlfonOpenLookupModal(item_r45.lookupKey, item_r45.field, item_r45.modelName, "blur", ctx_r75.marrLineGridData[rowIndex_r48][item_r45.field], "custom", "txt" + item_r45.field + rowIndex_r48, rowIndex_r48));
    })("focus", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r78.bmlfOnGlobalFocus(item_r45.field, ctx_r78.marrLineGridData[rowIndex_r48][item_r45.field]));
    })("change", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r81.bmlfonGlobalOnChangesFn(item_r45.field, ctx_r81.marrLineGridData[rowIndex_r48][item_r45.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r84.bmlfonOpenLookupModal(item_r45.lookupKey, item_r45.field, item_r45.modelName, "click", ctx_r84.marrLineGridData[rowIndex_r48][item_r45.field], "custom", "txt" + item_r45.field + rowIndex_r48, rowIndex_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("name", item_r45.field + rowIndex_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r45.field + rowIndex_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r51.marrLineGridData[rowIndex_r48][item_r45.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r45.field + rowIndex_r48 + "Lookup");
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-datepicker", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_6_Template_kendo_datepicker_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.marrLineGridData[rowIndex_r48][item_r45.field] = $event);
    })("valueChange", function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_6_Template_kendo_datepicker_valueChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90);
      const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r93.bmlfonGlobalOnChangesFn(item_r45.field, ctx_r93.marrLineGridData[rowIndex_r48][item_r45.field], rowIndex_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", rowIndex_r48 + "_" + item_r45.field)("ngModel", ctx_r52.marrLineGridData[rowIndex_r48][item_r45.field])("format", ctx_r52.msCustomDateFormat)("readOnlyInput", true);
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_3_Template, 4, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_4_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_5_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_ng_container_6_Template, 2, 4, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 5, item_r45.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r45.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r45.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r45.type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r45.type == "date");
  }
}
function TransactionHistoryReportComponent_kendo_grid_column_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-grid-column", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, TransactionHistoryReportComponent_kendo_grid_column_96_ng_template_2_Template, 7, 7, "ng-template", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", item_r45.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 4, item_r45.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("width", item_r45.field == "Select" ? "62" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !item_r45.display);
  }
}
const _c0 = function () {
  return [5, 10, 20, 50, 100];
};
function TransactionHistoryReportComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 82);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function TransactionHistoryReportComponent_app_custom_lookup_modal_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function TransactionHistoryReportComponent_app_custom_lookup_modal_106_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r99.bmlfonSaveLookupField($event));
    })("closeLookup", function TransactionHistoryReportComponent_app_custom_lookup_modal_106_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r100);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r101.bmlfonCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("multiSelection", ctx_r11.mbMutiSelectionLookup)("keyData", ctx_r11.mobjLookupKeyData);
  }
}
function TransactionHistoryReportComponent_app_common_task_modal_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function TransactionHistoryReportComponent_app_common_task_modal_107_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r102.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r12.mobjTaskData);
  }
}
const _c1 = function (a0) {
  return {
    modalLoading: a0
  };
};
class TransactionHistoryReportComponent {
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(lookupService, dateFormatService, lsService, utilService, toastMessageService, userFieldService, router, commonReportService) {
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.utilService = utilService;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.router = router;
    this.commonReportService = commonReportService;
    this.mbLoaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjUserData = {};
    this.msScreenName = "Transaction History Report";
    this.msParmScreenName = 'Transaction History Report - Selection Criteria';
    this.mobjLookupKeyData = {};
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.msCustomDateFormat = "";
    this.marrCommonRecordSet = [];
    this.mobjCommonDialogData = {};
    this.mbCommonDialogView = false;
    this.marrSelectedRecord = [];
    this.mbBulkResponseMsg = false;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mbBulkResponseView = false;
    this.msMsgData = {};
    this.msFocusField = '';
    this.msLookupField = '';
    this.mbcheckval = false;
    this.mobjOrderModel = new _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.InputModel();
    this.mobjOrderModelBlank = new _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.InputModel();
    this.paramValueArray = [];
    this.msscreenModeUpdate = "I";
    this.mbIsLoading = false;
    this.marrLineGridData = [];
    this.marrLoadLookupFields = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranHistoryConstants.garrTranHistoryLookupFieldsMap;
    this.parameterValue = '';
    this.marrItemList = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranActivityConstants.garrTranTypeListMap;
    this.marrItemListModel = new _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.InputGridModel();
    this.marrTranTypes = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_1__.TranHistoryConstants.garrTransactionType;
    this.miQtyPrecision = 0;
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.mobjSelectedItemData = {};
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    this.miLineItemRowIndex = null;
  }
  ngOnInit() {
    // this.utilService.getBMEScreePermission(this.msScreenName); // Fetch Screen permission
    this.mobjUserData = this.lsService.getUserSession();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.getParam(this.msParmScreenName);
    this.bmlfOnSetTranType();
  }
  bmlfonParamchange(e) {
    debugger;
    try {
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.mbIsLoading = true;
    this.userFieldService.getReportParameterValue(this.msParmScreenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.bmlfclearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.mbIsLoading = false;
      }
    });
  }
  bmlfclearModel() {
    this.mobjOrderModel = Object.assign({}, this.mobjOrderModel);
  }
  fillControlFromParam(resData) {
    debugger;
    resData.forEach(element => {
      let key = this.bmlfongetKeyFromValue(element.CONTROLNAME);
      debugger;
      if (element.CONTROLNAME == 'Dates(3)') {
        this.mobjOrderModel['ApplyDateTo'] = this.utilService.bmlfSetDateAsDateFormat(element.CONTROLVALUE);
      }
      if (element.CONTROLNAME == 'Dates(2)') {
        this.mobjOrderModel['ApplyDateFrom'] = this.utilService.bmlfSetDateAsDateFormat(element.CONTROLVALUE);
      } else if (element.CONTROLNAME != 'Dates(3)' && element.CONTROLNAME != 'Dates(2)') {
        this.mobjOrderModel[key] = element.CONTROLVALUE;
      }
    });
    this.mbIsLoading = false;
  }
  bmlfongetKeyFromValue(value) {
    let newObj = this.mobjOrderModel;
    let tempKey = Object.keys(newObj).find(data => {
      return _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[data] == value;
    });
    return tempKey;
  }
  bmlfonParameterSave() {
    let paramValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    let newObj = this.mobjOrderModel;
    if (paramValue == '') {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.PRMEMPTY'));
      return;
    } else {
      this.mbIsLoading = true;
      this.msscreenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      //let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.msParmScreenName;
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === paramValue)[0];
        if (list != undefined) {
          this.msscreenModeUpdate = 'U';
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.msscreenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        console.log("key....", key);
        if (key != undefined && typeof newObj[key] == "string") {
          let tempJObj = {};
          if (_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key];
            tempJObj["ControlValue"] = newObj[key];
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "boolean") {
          let tempJObj = {};
          if (_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key];
            tempJObj["ControlValue"] = newObj[key] == true ? 1 : 0;
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && key == 'ApplyDateFrom') {
          let tempJObj = {};
          if (_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key];
            tempJObj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_3__(newObj[key]).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat);
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && key == 'ApplyDateTo') {
          let tempJObj = {};
          if (_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key] != undefined) {
            tempJObj["ControlName"] = _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap[key];
            tempJObj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_3__(newObj[key]).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat);
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
      });
      this.userFieldService.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            //this.paramCtrl.nativeElement.value = "";
            this.parameterValue = '';
            this.mbIsLoading = false;
            this.getParam(this.msParmScreenName);
          } else {
            console.trace();
            console.error('Save error');
            this.mbIsLoading = false;
          }
        }
      });
    }
  }
  bmlfonParameterDelete() {
    let oParaValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.SELRPTPRM'));
      return;
    } else {
      this.mbcheckval = false;
      this.mbIsLoading = true;
      this.bmlfondeleteApiParam(oParaValue);
      this.parameterValue = '';
      this.mobjOrderModel = this.mobjOrderModelBlank; // 30/mar/2021 scr no.152287 deepak porwal
      return true;
    }
  }
  onOpenErrorBlock(msg) {
    this.toastMessageService.notifyError(msg);
  }
  bmlfondeleteApiParam(oParaValue) {
    this.userFieldService.DeleteReportParameter(this.msParmScreenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('REPORTS.DELMSG')); // 30/mar/2021 scr no.152287 deepak porwal
          // this.paramCtrl.nativeElement.value = "";
          this.parameterValue = '';
          this.bmlfclearModel();
          this.getParam(this.msParmScreenName);
          this.mbIsLoading = false;
          return true;
        }
        this.mbIsLoading = false;
      }
    });
  }
  getParam(scr) {
    this.mbIsLoading = true;
    this.userFieldService.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.mbIsLoading = false;
      } else {
        console.log("Res Is Null");
        this.mbIsLoading = false;
      }
    });
  }
  // process report
  bmlfOnProcess(psValue) {
    let pobjCopyRec = Object.assign({}, this.mobjOrderModel);
    let pobjCopyGridRec = this.marrLineGridData.map(ele => Object.assign({}, ele));
    let pDefaultReportType = localStorage.getItem('reportType');
    pobjCopyGridRec.forEach(ele => {
      let DocDateFrom = moment__WEBPACK_IMPORTED_MODULE_3__(ele.DocDateFrom, this.msServeDateFormat);
      let DocDateTo = moment__WEBPACK_IMPORTED_MODULE_3__(ele.DocDateTo, this.msServeDateFormat);
      ele.DocDateFrom = ele.DocDateFrom == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(DocDateFrom).format(this.msServeDateFormat);
      ele.DocDateTo = ele.DocDateTo == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(DocDateTo).format(this.msServeDateFormat);
    });
    let pobjFilterHeaderRec = this.bmlfOnUpdateHeaderData(pobjCopyRec);
    let pobjRecordSet = {
      DistReport: [],
      GridParameters: pobjCopyGridRec,
      Response: [{
        ResponseText: '',
        ErrorCode: '',
        Pdfpath: ''
      }]
    };
    pobjRecordSet.DistReport.push(pobjFilterHeaderRec);
    let pobjReqData = {
      JSON: JSON.stringify(pobjRecordSet)
    };
    this.mbIsLoading = true;
    this.commonReportService.bmlfonPrintTranHistoryReport(pobjReqData).subscribe(res => {
      console.log(res);
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        let pPDFSrc = res.Response[0].Pdfpath;
        if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_4__.CustomValidator.bmgfNullCheckValidator(pPDFSrc)) {
          this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
        } else {
          if (pDefaultReportType == 'Print') {
            this.utilService.bmgfPrintPDF(pPDFSrc);
          } else if (pDefaultReportType == 'NewTab') {
            this.utilService.bmgfOpenPDFNewTab(pPDFSrc);
          } else {
            this.utilService.bmgfDownloadFile(pPDFSrc, this.msScreenName, pDefaultReportType);
          }
        }
      }
      if (res.Response[0].ErrorCode != '') {
        if (res.Response[0].ResponseText == '') {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        } else {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        }
      }
    }, err => {
      console.log(err);
    });
  }
  // close modal
  bmlfOnClose(psValue) {
    this.router.navigate(['/main/dashboard']);
  }
  // help doc
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Transaction History Report.pdf', '_blank');
  }
  //Open LOOKUP MODAL
  bmlfonOpenLookupModal(psField, psKey, modelName, psEvent, psValue, psType, psEleId, piRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjOrderModel[psKey + 'Des'] = '';
      return false;
    }
    let psLookUpKey = psField;
    let psScreenName = this.msScreenName;
    let pobjReqData = {
      ScreenName: psScreenName
    };
    pobjReqData.LookUpKey = psLookUpKey;
    if (psLookUpKey == 'DocNoFrom' || psLookUpKey == 'DocNoTo') {
      pobjReqData.Filter1 = this.marrLineGridData[piRowIdx]['TrnType'].split('-')[0];
    }
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      setTimeout(() => {
        this.utilService.bmgfOnKeyInputEnable();
        this.mbIsLoading = false;
      }, 500);
      if (res == null) {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_3__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_3__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        let title = psField;
        let updatedtitle;
        if (psField.includes('DocNoFrom') || psField.includes('DocNoTo')) {
          updatedtitle = psField;
        } else {
          if (psField.includes('From')) {
            updatedtitle = psField.replace('From', '');
          } else if (psField.includes('To')) {
            updatedtitle = psField.replace('To', '');
          }
        }
        if (updatedtitle == 'TransSubTyp') {
          title = this.utilService.bmgfonTranslate('REPORTS.TRANSACTIONSUBTYPE');
        } else {
          title = this.utilService.bmgfonTranslate('REPORTS.' + updatedtitle.toUpperCase());
        }
        this.miLineItemRowIndex = piRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.key = psKey;
        this.mobjLookupKeyData.title = title;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.controlName = modelName;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let psInputKey = this.bmlfGetInputColumn(psKey);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.bmlfonSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else if (parrFilterData.length == 0) {
            let elementExists = document.getElementById(psEleId);
            if (elementExists) {
              document.getElementById(psEleId).focus();
            }
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfonSaveLookupField(pobjData) {
    let psInputKey = this.bmlfGetInputColumn(pobjData.key);
    let psInputDesKey = this.bmlfGetInputDesColumn(pobjData.key);
    let validationFlag = this.bmlfOnValidateControls(pobjData.key, pobjData.value[psInputKey]);
    if (validationFlag == true) {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = pobjData.value[psInputKey];
      } else {
        this.mobjOrderModel[pobjData.key] = pobjData.value[psInputKey];
        if (psInputDesKey) {
          this.mobjOrderModel[pobjData.key + 'Des'] = pobjData.value[psInputDesKey];
        }
      }
    } else {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = '';
      } else {
        this.mobjOrderModel[pobjData.key] = '';
        if (psInputDesKey) {
          this.mobjOrderModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
    this.mbIsLookupModal = false;
    this.mbMutiSelectionLookup = false;
  }
  bmlfOnValidateControls(ctrlName, value) {
    if (ctrlName.includes("From") == true) {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjOrderModel[_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.mobjOrderModel[_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.marrLineGridData[this.miLineItemRowIndex][_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjOrderModel[_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.mobjOrderModel[_models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'ItemKeyFrom' || psField == 'ItemKeyTo') {
      psField = 'ItemKey';
      return psField;
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      psField = 'Location';
      return psField;
    } else if (psField == 'TransSubTypFrom' || psField == 'TransSubTypTo') {
      psField = 'SubType';
      return psField;
    } else if (psField == 'DocNoFrom' || psField == 'DocNoTo') {
      psField = 'SysDocID';
      return psField;
    }
  }
  // Set Lookup Description Column
  bmlfGetInputDesColumn(psField) {
    if (psField == 'ItemKeyFrom' || psField == 'ItemKeyTo') {
      return 'Desc1';
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      return 'Description';
    }
  }
  //Close LOOKUP MODAL
  bmlfonCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      // console.log(pos);
      if (parrFilterData.length == 0) {
        if (this.miLineItemRowIndex != null) {
          document.getElementById(pobjData.eleId).value = '';
        } else {
          this.mobjOrderModel[pobjData.key] = '';
          this.mobjOrderModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  // GlobalOnChanges Event
  bmlfonGlobalOnChangesFn(psFieldName, pobjFieldData, piIndex, eleId) {
    if (pobjFieldData == null) {
      return false;
    }
    if (piIndex != null) {
      if (psFieldName == 'DocDateTo') {
        if (this.marrLineGridData[piIndex].DocDateTo < this.marrLineGridData[piIndex].DocDateFrom) {
          this.marrLineGridData[piIndex].DocDateFrom = this.marrLineGridData[piIndex].DocDateTo;
        }
      }
      if (psFieldName == 'DocDateFrom') {
        if (this.marrLineGridData[piIndex].DocDateFrom > this.marrLineGridData[piIndex].DocDateTo) {
          this.marrLineGridData[piIndex].DocDateTo = this.marrLineGridData[piIndex].DocDateFrom;
        }
      }
    }
    // if (this.mbIsItemModal) {
    //   this.mbIsChange = true;
    //   this.mbIsSaveDone = false;
    // }
  }
  // Global focus Fn
  bmlfOnGlobalFocus(field, value) {
    this.msFocusField = field;
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  // Global Blur Fn
  bmlfOnGlobalBlur(field, psValue, eleId) {
    this.msFocusField = '';
  }
  // Change Function
  bmlfonChange(psFieldType, psValue, psIsChange = null) {
    if (psFieldType == 'ApplyDateTo') {
      if (this.mobjOrderModel.ApplyDateTo < this.mobjOrderModel.ApplyDateFrom) {
        this.mobjOrderModel.ApplyDateFrom = this.mobjOrderModel.ApplyDateTo;
      }
    } else if (psFieldType == 'ApplyDateFrom') {
      if (this.mobjOrderModel.ApplyDateFrom > this.mobjOrderModel.ApplyDateTo) {
        this.mobjOrderModel.ApplyDateTo = this.mobjOrderModel.ApplyDateFrom;
      }
    }
  }
  // select deselect all
  bmlfonSelectDeSelect(type, psValue) {
    if (type == 'itemType') {
      this.marrLineGridData.forEach(ele => {
        ele.Select = psValue;
      });
    }
  }
  // Set Transation type list data
  bmlfOnSetTranType() {
    this.marrTranTypes.map(ele => {
      let pobjData = Object.assign({}, this.marrItemListModel);
      pobjData.TrnType = ele;
      pobjData.Select = false;
      this.marrLineGridData.push(pobjData);
    });
  }
  // update header data
  bmlfOnUpdateHeaderData(pobjData) {
    let ApplyDateFrom = moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.ApplyDateFrom, this.msServeDateFormat);
    let ApplyDateTo = moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.ApplyDateTo, this.msServeDateFormat);
    pobjData.ApplyDateFrom = pobjData.ApplyDateFrom == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(ApplyDateFrom).format(this.msServeDateFormat);
    pobjData.ApplyDateTo = pobjData.ApplyDateTo == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(ApplyDateTo).format(this.msServeDateFormat);
    pobjData.FromDate = pobjData.ApplyDateFrom;
    pobjData.ToDate = pobjData.ApplyDateTo;
    delete pobjData.ItemKeyFromDes;
    delete pobjData.ItemKeyToDes;
    delete pobjData.LocationFromDes;
    delete pobjData.LocationToDes;
    delete pobjData.TransSubTypFromDes;
    delete pobjData.TransSubTypToDes;
    delete pobjData['undefined'];
    return pobjData;
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function TransactionHistoryReportComponent_Factory(t) {
    return new (t || TransactionHistoryReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_11__.CommonReportService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: TransactionHistoryReportComponent,
    selectors: [["app-transaction-history-report"]],
    decls: 108,
    vars: 65,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", "p-0", "pt-2", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "loader-outer", 4, "ngIf"], ["id", "frmOrdForm"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5"], ["for", "txtParameter", "id", "lblParameter", 1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "dataList", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "codes"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "seprator"], ["for", "dateApplyDateFrom", "id", "lblApplyDateFrom", 1, "col-form-label"], ["name", "ApplyDateFrom", "id", "dateApplyDateFrom", 1, "form-control", 3, "ngModel", "format", "min", "readOnlyInput", "ngModelChange", "valueChange"], ["for", "dateApplyDateTo", "id", "lblApplyDateTo", 1, "col-form-label"], ["name", "ApplyDateTo", "id", "dateApplyDateTo", 1, "form-control", 3, "ngModel", "format", "readOnlyInput", "ngModelChange", "valueChange"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "font-weight-normal", "m-0"], [1, "form-container"], [1, "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec"], ["type", "button", "id", "cmdSelectLineBtn", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "click"], ["type", "button", "id", "cmdUnselectLineBtn", 1, "btn", "btn-primary", "btn-sm", "m_b_10", 3, "click"], ["id", "divKendoGridLineType", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "dtLineItemGrid", 1, "custom_h_grid", "max_scroll", "low_space_table", "responsive_grid", 3, "kendoGridBinding", "resizable", "selectable"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "title", "width", "hidden", 4, "ngFor", "ngForOf"], ["kendoPagerTemplate", ""], [1, "modal-footer"], ["type", "button", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "modal-backdrop", "fade", "show"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label", 3, "for", "id"], ["type", "text", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange", "blur", "focus", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["type", "text", "disabled", "", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange"], [3, "field", "title", "width", "hidden"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "custom-control-label", 3, "for", "id"], [1, "form-group", "custom-inline-input"], ["kendoGridFocusable", "", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "form-group", "custom_flex"], ["id", "dateApplyDateFrom", 1, "form-control", 3, "name", "ngModel", "format", "min", "readOnlyInput", "ngModelChange", "valueChange"], [3, "pageSizes"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function TransactionHistoryReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, TransactionHistoryReportComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "li")(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_22_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_25_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, TransactionHistoryReportComponent_div_29_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "form", 19)(31, "section")(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 25)(40, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function TransactionHistoryReportComponent_Template_input_input_40_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "datalist", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, TransactionHistoryReportComponent_ng_container_44_Template, 2, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.parameterValue = $event;
        })("change", function TransactionHistoryReportComponent_Template_input_change_45_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "datalist", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, TransactionHistoryReportComponent_ng_container_47_Template, 3, 2, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_49_listener() {
          return ctx.bmlfonParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_52_listener() {
          return ctx.bmlfonParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](53, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](54, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "div", 20)(56, "div", 21)(57, "div", 22)(58, "div", 23)(59, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 25)(64, "kendo-datepicker", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_Template_kendo_datepicker_ngModelChange_64_listener($event) {
          return ctx.mobjOrderModel.ApplyDateFrom = $event;
        })("valueChange", function TransactionHistoryReportComponent_Template_kendo_datepicker_valueChange_64_listener() {
          ctx.bmlfonChange("ApplyDateFrom", ctx.mobjOrderModel.ApplyDateFrom);
          return ctx.bmlfonGlobalOnChangesFn("ApplyDateFrom", ctx.mobjOrderModel.ApplyDateFrom);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 21)(66, "div", 22)(67, "div", 23)(68, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 25)(73, "kendo-datepicker", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TransactionHistoryReportComponent_Template_kendo_datepicker_ngModelChange_73_listener($event) {
          return ctx.mobjOrderModel.ApplyDateTo = $event;
        })("valueChange", function TransactionHistoryReportComponent_Template_kendo_datepicker_valueChange_73_listener() {
          ctx.bmlfonChange("ApplyDateTo", ctx.mobjOrderModel.ApplyDateTo);
          return ctx.bmlfonGlobalOnChangesFn("ApplyDateTo", ctx.mobjOrderModel.ApplyDateTo);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](74, TransactionHistoryReportComponent_div_74_Template, 2, 1, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](76, TransactionHistoryReportComponent_div_76_Template, 2, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](77, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](78, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 45)(82, "div", 46)(83, "div", 47)(84, "div", 48)(85, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_85_listener() {
          return ctx.bmlfonSelectDeSelect("itemType", true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](88, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_88_listener() {
          return ctx.bmlfonSelectDeSelect("itemType", false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "div", 51)(92, "kendo-grid", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](94, "kendo-grid-messages", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, TransactionHistoryReportComponent_kendo_grid_column_96_Template, 3, 6, "kendo-grid-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](97, TransactionHistoryReportComponent_ng_template_97_Template, 4, 2, "ng-template", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "div", 57)(99, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_99_listener() {
          return ctx.bmlfOnProcess("processEvn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionHistoryReportComponent_Template_button_click_102_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](105, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](106, TransactionHistoryReportComponent_app_custom_lookup_modal_106_Template, 1, 2, "app-custom-lookup-modal", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, TransactionHistoryReportComponent_app_common_task_modal_107_Template, 1, 1, "app-common-task-modal", 62);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](63, _c1, ctx.mbLoaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 35, "REPORTS.TRANHISREPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 37, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 39, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbLoaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](38, 41, "REPORTS.PARAMETER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.parameterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](61, 43, "REPORTS.APPLYDATE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](62, 45, "REPORTS.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ApplyDateFrom)("format", ctx.msCustomDateFormat)("readOnlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](70, 47, "REPORTS.APPLYDATE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](71, 49, "REPORTS.TO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjOrderModel.ApplyDateTo)("format", ctx.msCustomDateFormat)("readOnlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](80, 51, "REPORTS.SELTRANTYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](87, 53, "REPORTS.SELECTALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](90, 55, "REPORTS.UNSELECTALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("kendoGridBinding", ctx.marrLineGridData)("resizable", true)("selectable", ctx.mobjSelectableSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](95, 57, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](101, 59, "COMMON.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](104, 61, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.FocusableDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PagerTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_20__.DatePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 81488:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/inventory-transaction-reports/valuation-report/valuation-report.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValuationReportComponent: () => (/* binding */ ValuationReportComponent)
/* harmony export */ });
/* harmony import */ var _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/valuation-report.model */ 65623);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 21916);





















const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function ValuationReportComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ValuationReportComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", obj_r7.PARANAME);
  }
}
function ValuationReportComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", obj_r8.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](obj_r8.PARANAME);
  }
}
function ValuationReportComponent_app_custom_lookup_modal_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-custom-lookup-modal", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("saveLookupField", function ValuationReportComponent_app_custom_lookup_modal_196_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.saveLookupField($event));
    })("closeLookup", function ValuationReportComponent_app_custom_lookup_modal_196_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.closeLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("keyData", ctx_r5.lookupKeyData);
  }
}
function ValuationReportComponent_app_common_task_modal_197_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-common-task-modal", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeTaskModal", function ValuationReportComponent_app_common_task_modal_197_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r12.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("taskData", ctx_r6.mobjTaskData);
  }
}
class ValuationReportComponent {
  constructor(router, objUtil, service, objToastService, lookupService, alertservice, dtService, userFieldService, dateFormatService, modalservice) {
    this.router = router;
    this.objUtil = objUtil;
    this.service = service;
    this.objToastService = objToastService;
    this.lookupService = lookupService;
    this.alertservice = alertservice;
    this.dtService = dtService;
    this.userFieldService = userFieldService;
    this.dateFormatService = dateFormatService;
    this.modalservice = modalservice;
    this.mscustomdateformat = '';
    this.loaderEnabled = false;
    this.isLookupModal = false;
    this.msScreenName = "Inventory Valuation Report";
    this.msParmScreenName = 'Inventory Valuation Report - Selection Criteria';
    this.parameterValue = '';
    this.msscreenModeUpdate = "I";
    this.mObjModel = new _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.InventoryValuationModel();
    this.mObjModelBlank = new _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.InventoryValuationModel();
    this.mObjModelDesc = new _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.LookupDescriptionModel();
    this.mObjModelDescBlank = new _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.LookupDescriptionModel();
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.screenModeUpdate = "I";
    this.paramValueArray = [];
    this.checkval = false;
    this.pdfSrc = " ";
    this.msReportType = '';
    this.mbIsSuppress = false;
    this.mobjUserData = {};
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
  }
  ngOnInit() {
    this.bmeDateFormat = this.dtService.getDateFormat();
    this.mscustomdateformat = this.dateFormatService.getDateFormat();
    this.msReportType = 'MDB Bound';
    this.mObjModel.UnitOfMeasure = 'Default';
    this.mObjModel.ValuationBasis = 'Item Valuation';
    this.mbIsSuppress = true;
    this.mObjModel.SuppressIfZeroOnHand = true;
    this.getParam(this.msParmScreenName);
  }
  onProcess(id) {
    debugger;
    if (this.mObjModel.UnitOfMeasure == 'Alternate Unit' && this.mObjModel.AlternateUnit == '') {
      this.onOpenErrorBlock(this.objUtil.bmgfonTranslate('VALUATIONREPORT.MSG.ENTERUNIT'));
      return;
    }
    this.loaderEnabled = true;
    this.mObjModel.ReportName = this.msScreenName;
    let pDefaultReportType = localStorage.getItem('reportType');
    let pobjModel = Object.assign({}, this.mObjModel);
    if (this.mObjModel.UnitOfMeasure == 'Alternate Unit') {
      pobjModel.UnitOfMeasure = this.mObjModel.AlternateUnit;
    }
    pobjModel.Date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(this.mObjModel.Date)).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__.CommonConstants.gsServerDateFormat.toUpperCase());
    // if (this.mObjModel.SuppressIfZeroOnHand == 0) {
    //   pobjModel.SuppressIfZeroOnHand =false;
    // } else {
    //   pobjModel.SuppressIfZeroOnHand =true;
    // }
    this.service.GetReportData(pobjModel).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ErrorCode == "") {
          this.pdfSrc = res.Response[0].Pdfpath;
          this.loaderEnabled = false;
          if (res.Response[0].Pdfpath) {
            if (pDefaultReportType == 'Print') {
              this.objUtil.bmgfPrintPDF(this.pdfSrc);
            } else if (pDefaultReportType == 'NewTab') {
              this.objUtil.bmgfOpenPDFNewTab(this.pdfSrc);
            } else {
              this.objUtil.bmgfDownloadFile(this.pdfSrc, this.msScreenName, pDefaultReportType);
            }
          }
          if (res.Response[0].Pdfpath == '') {
            this.objToastService.notifyWarning(this.objUtil.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            this.onOpenErrorBlock(res.Response[0].ResponseText);
          } else {
            this.onOpenErrorBlock("No Data Found");
          }
          console.trace();
          console.error("Response is Failure");
          this.loaderEnabled = false;
        }
      }
    });
  }
  saveLookupField(event) {
    let ctrlName = event.controlName;
    let descCtrlName = event.controlName + 'Description';
    this.mObjModel[ctrlName] = event.valueKey;
    if (event.field == 'ItemFrom' || event.field == 'ItemTo') {
      this.mObjModelDesc[descCtrlName] = event.value.Desc1;
    } else if (event.field != 'AlternateUnit') {
      this.mObjModelDesc[descCtrlName] = event.value.Description;
    }
    this.isLookupModal = false;
    this.bmlfValidateLookup(event.field);
  }
  bmlfValidateLookup(psField) {
    debugger;
    if (psField == 'ItemFrom') {
      if (this.mObjModel.ItemFrom == "") {
        this.mObjModelDesc.ItemFromDescription = '';
      } else if (this.mObjModel.ItemTo != '') {
        if (this.mObjModel.ItemFrom > this.mObjModel.ItemTo) {
          this.objToastService.notifyError(this.objUtil.bmgfonTranslate('REPORTS.VALMSG2'));
          this.mObjModel.ItemFrom = '';
          this.mObjModelDesc.ItemFromDescription = '';
        }
      }
    }
    if (psField == 'ItemTo') {
      if (this.mObjModel.ItemTo == "") {
        this.mObjModelDesc.ItemToDescription = '';
      } else if (this.mObjModel.ItemFrom != '') {
        if (this.mObjModel.ItemFrom > this.mObjModel.ItemTo) {
          this.objToastService.notifyError(this.objUtil.bmgfonTranslate('REPORTS.VALMSG2'));
          this.mObjModel.ItemTo = '';
          this.mObjModelDesc.ItemToDescription = '';
        }
      }
    }
    if (psField == 'LocationFrom') {
      if (this.mObjModel.LocationFrom == "") {
        this.mObjModelDesc.LocationFromDescription = '';
      } else if (this.mObjModel.LocationTo != '') {
        if (this.mObjModel.LocationFrom > this.mObjModel.LocationTo) {
          this.objToastService.notifyError(this.objUtil.bmgfonTranslate('REPORTS.VALMSG2'));
          this.mObjModel.LocationFrom = '';
          this.mObjModelDesc.LocationFromDescription = '';
        }
      }
    }
    if (psField == 'LocationTo') {
      if (this.mObjModel.LocationTo == "") {
        this.mObjModelDesc.LocationToDescription = '';
      } else if (this.mObjModel.LocationFrom != '') {
        if (this.mObjModel.LocationFrom > this.mObjModel.LocationTo) {
          this.objToastService.notifyError(this.objUtil.bmgfonTranslate('REPORTS.VALMSG2'));
          this.mObjModel.LocationTo = '';
          this.mObjModelDesc.LocationToDescription = '';
        }
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psfield) {
    if (psfield == 'ItemFrom') {
      return 'ItemKey';
    } else if (psfield == 'ItemTo') {
      return 'ItemKey';
    } else if (psfield == 'LocationFrom') {
      return 'Location';
    } else if (psfield == 'LocationTo') {
      return 'Location';
    } else if (psfield == 'ItemClass') {
      return 'InClassKey';
    } else if (psfield == 'ItemType') {
      return 'ItemTyp';
    } else if (psfield == 'ABC') {
      return 'AbcKey';
    } else if (psfield == 'Commodity') {
      return 'CommodKey';
    } else if (psfield == 'Product') {
      return 'ProductKey';
    } else if (psfield == 'AlternateUnit') {
      return 'UOMKey';
    }
  }
  //Return Model Field
  bmlfGetModelField(psfield) {
    if (psfield == 'ItemFrom') {
      return 'ItemFrom';
    } else if (psfield == 'ItemTo') {
      return 'ItemTo';
    } else if (psfield == 'LocationFrom') {
      return 'LocationFrom';
    } else if (psfield == 'LocationTo') {
      return 'LocationTo';
    } else if (psfield == 'ItemClass') {
      return 'ItemClass';
    } else if (psfield == 'ItemType') {
      return 'ItemType';
    } else if (psfield == 'ABC') {
      return 'ABC';
    } else if (psfield == 'Commodity') {
      return 'Commodity';
    } else if (psfield == 'Product') {
      return 'Product';
    } else if (psfield == 'AlternateUnit') {
      return 'AlternateUnit';
    }
  }
  closeLookupModal(pobjData) {
    debugger;
    this.isLookupModal = pobjData.isLookupModal;
    if (pobjData.field != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        let psModelField = this.bmlfGetModelField(pobjData.field);
        this.mObjModel[psModelField] = '';
        let descName = psModelField + 'Description';
        this.mObjModelDesc[descName] = "";
      }
    }
    document.getElementById(pobjData.controlName).focus();
  }
  openLookupModal(lookupkey, event, ngModelName) {
    let data = {};
    data = {
      ScreenName: this.msScreenName,
      LookUpKey: lookupkey
    };
    let value = event.target.value;
    this.LookupGridData = [];
    this.lookupKeyData = {};
    this.loaderEnabled = true;
    if (event.type == "blur" && value == '') {
      let descName = ngModelName + 'Description';
      this.mObjModelDesc[descName] = "";
      this.loaderEnabled = false;
      return;
    }
    this.lookupService.getLookup(data).subscribe(res => {
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.LookupGridData = res.LookupData;
        this.lookupKeyData.field = lookupkey;
        this.lookupKeyData.gridData = this.LookupGridData;
        this.lookupKeyData.controlName = ngModelName;
        this.loaderEnabled = false;
        this.isLookupModal = true;
        if (value) {
          this.lookupKeyData.searchValue = value;
        } else {
          this.lookupKeyData.searchValue = '';
        }
        if (event.type == 'blur' && value) {
          let tempKey = Object.keys(this.LookupGridData[0]);
          let inputKey = tempKey[0];
          let filterdArr = [];
          filterdArr = this.LookupGridData.filter(obj => obj[inputKey].toUpperCase() == value.toUpperCase());
          if (filterdArr.length == 1) {
            this.lookupKeyData.value = filterdArr[0];
            let tempFiltValue = filterdArr[0];
            this.lookupKeyData.valueKey = tempFiltValue[inputKey];
            this.saveLookupField(this.lookupKeyData);
            this.isLookupModal = false;
          } else {
            this.isLookupModal = true;
          }
        } else if (event.type == 'click') {
          this.isLookupModal = true;
        }
      } else {
        this.onOpenErrorBlock('No Data');
        this.loaderEnabled = false;
      }
    });
  }
  onOpenErrorBlock(msg) {
    this.alertservice.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  getParam(scr) {
    this.loaderEnabled = true;
    this.service.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.loaderEnabled = false;
      } else {
        console.trace();
        console.error("Res Is Null");
        this.loaderEnabled = false;
      }
    });
  }
  bmlfononParameterSave() {
    debugger;
    let paramValue = this.parameterValue;
    let newObj = this.mObjModel;
    if (paramValue == '') {
      this.onOpenErrorBlock('Parameter cannot be empty');
      return;
    } else {
      this.loaderEnabled = true;
      this.msscreenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      let UOMOption = 0;
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.msParmScreenName;
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === paramValue)[0];
        if (list != undefined) {
          this.msscreenModeUpdate = 'U';
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.msscreenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        let tempJObj = {};
        if (key != 'ReportName' && key != 'ListingFlag' && key != 'ListingVariable') {
          if (key == 'UnitOfMeasure') {
            if (newObj[key] == 'Default') {
              UOMOption = 1;
              tempJObj["ControlName"] = 'Option1';
              tempJObj["ControlValue"] = 'True';
            } else if (newObj[key] == 'Raw Materials By Weight') {
              UOMOption = 2;
              tempJObj["ControlName"] = 'Option2';
              tempJObj["ControlValue"] = 'True';
            } else if (newObj[key] == 'Raw Materials By Volume') {
              UOMOption = 3;
              tempJObj["ControlName"] = 'Option3';
              tempJObj["ControlValue"] = 'True';
            } else {
              UOMOption = 4;
              tempJObj["ControlName"] = 'Option4';
              tempJObj["ControlValue"] = 'True';
            }
          } else if (key == 'AlternateUnit') {
            tempJObj["ControlName"] = _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.ReportParameter['AlternateUOM'];
            tempJObj["ControlValue"] = newObj[key];
          } else if (key == 'Date') {
            tempJObj["ControlName"] = _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.ReportParameter[key];
            tempJObj["ControlValue"] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(newObj[key])).format(src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__.CommonConstants.gsServerDateFormat.toUpperCase());
          } else {
            tempJObj["ControlName"] = _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.ReportParameter[key];
            tempJObj["ControlValue"] = newObj[key];
          }
          tempJObj["RecId"] = counterRecId++;
          jArray.push(tempJObj);
        }
      });
      for (let pnControlID = 1; pnControlID < 5; pnControlID++) {
        if (UOMOption != pnControlID) {
          let tempJObj = {};
          tempJObj["ControlName"] = 'Option' + pnControlID;
          tempJObj["ControlValue"] = 'False';
          tempJObj["RecId"] = counterRecId++;
          jArray.push(tempJObj);
        }
      }
      this.service.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            this.parameterValue = '';
            this.loaderEnabled = false;
            this.getParam(this.msParmScreenName);
          } else {
            alert('Cant Save');
            console.trace();
            console.error('Save error');
            this.loaderEnabled = false;
          }
        }
      });
    }
  }
  bmlfonParameterDelete() {
    let oParaValue = this.parameterValue;
    if (oParaValue == "") {
      this.onOpenErrorBlock(this.objUtil.bmgfonTranslate('REPORTS.SELRPTPRM'));
      return;
    } else {
      this.deleteApiParam(oParaValue);
      this.parameterValue = '';
      return true;
    }
  }
  bmlfonParamchange(e) {
    try {
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    debugger;
    let pValue = param;
    this.loaderEnabled = true;
    this.service.getReportParameterValue(this.msParmScreenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.clearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.loaderEnabled = false;
      }
    });
  }
  fillControlFromParam(resData) {
    resData.forEach(element => {
      if (element.CONTROLNAME == 'Option1' && element.CONTROLVALUE == 'True') {
        this.mObjModel.UnitOfMeasure = 'Default';
      } else if (element.CONTROLNAME == 'Option2' && element.CONTROLVALUE == 'True') {
        this.mObjModel.UnitOfMeasure = 'Raw Materials By Weight';
      } else if (element.CONTROLNAME == 'Option3' && element.CONTROLVALUE == 'True') {
        this.mObjModel.UnitOfMeasure = 'Raw Materials By Volume';
      } else if (element.CONTROLNAME == 'Option4' && element.CONTROLVALUE == 'True') {
        this.mObjModel.UnitOfMeasure = 'Alternate Unit';
      } else if (element.CONTROLNAME == 'chkSupressIfZero' && element.CONTROLVALUE == 1) {
        this.mObjModel.SuppressIfZeroOnHand = true;
        this.mbIsSuppress = true;
      } else if (element.CONTROLNAME == 'chkSupressIfZero' && element.CONTROLVALUE == 0) {
        this.mObjModel.SuppressIfZeroOnHand = false;
        this.mbIsSuppress = false;
      } else if (element.CONTROLNAME == 'txtAltUOM') {
        this.mObjModel.AlternateUnit = element.CONTROLVALUE;
      } else if (element.CONTROLNAME == 'Dates(2)') {
        this.mObjModel.Date = new Date(element.CONTROLVALUE); //moment(element.CONTROLVALUE).format(this.mscustomdateformat.toUpperCase());
      } else if (element.CONTROLNAME != '') {
        let key = this.getKeyFromValue(element.CONTROLNAME);
        this.mObjModel[key] = element.CONTROLVALUE;
      }
    });
    this.bmlfGetLookupDes();
    this.loaderEnabled = false;
  }
  // Get Lookup Description
  bmlfGetLookupDes() {
    let parrSetKeyData = [{
      KeyCode: 'ITEMCLASS',
      KeyValue1: this.mObjModel.ItemClass,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ABCKey',
      KeyValue1: this.mObjModel.ABC,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: this.mObjModel.ItemFrom,
      KeyValue2: 'ItemFrom',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: this.mObjModel.ItemTo,
      KeyValue2: 'ItemTo',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: this.mObjModel.LocationFrom,
      KeyValue2: 'LocationFrom',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: this.mObjModel.LocationTo,
      KeyValue2: 'LocationTo',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMTYPE',
      KeyValue1: this.mObjModel.ItemType,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ProductKey',
      KeyValue1: this.mObjModel.Product,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'CommodKey',
      KeyValue1: this.mObjModel.Commodity,
      KeyValue2: '',
      KeyDescription: ''
    }];
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrSetKeyData,
        ScreenName: [{
          ScreenName: this.msScreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userFieldService.bmlfFetchKeyDescription(reqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (res.LookupData.length) {
        res.LookupData.forEach(ele => {
          if (ele.KeyCode == 'ITEMCLASS') {
            this.mObjModelDesc.ItemClassDescription = ele.KeyDescription;
          }
          if (ele.KeyCode == 'ITEMKEY') {
            if (ele.KeyValue2 == 'ItemFrom') {
              this.mObjModelDesc.ItemFromDescription = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'ItemTo') {
              this.mObjModelDesc.ItemToDescription = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'Location') {
            if (ele.KeyValue2 == 'LocationFrom') {
              this.mObjModelDesc.LocationFromDescription = ele.KeyDescription;
            }
            if (ele.KeyValue2 == 'LocationTo') {
              this.mObjModelDesc.LocationToDescription = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'ITEMTYPE') {
            this.mObjModelDesc.ItemTypeDescription = ele.KeyDescription;
          }
          if (ele.KeyCode == 'ABCKey') {
            this.mObjModelDesc.ABCDescription = ele.KeyDescription;
          }
          if (ele.KeyCode == 'ProductKey') {
            this.mObjModelDesc.ProductDescription = ele.KeyDescription;
          }
          if (ele.KeyCode == 'CommodKey') {
            this.mObjModelDesc.CommodityDescription = ele.KeyDescription;
          }
        });
      }
    }, err => {
      console.log(err);
    });
  }
  getKeyFromValue(value) {
    let tempKey = Object.keys(this.mObjModel).find(data => {
      return _models_valuation_report_model__WEBPACK_IMPORTED_MODULE_0__.ReportParameter[data] == value;
    });
    return tempKey;
  }
  deleteApiParam(oParaValue) {
    this.service.DeleteReportParameter(this.msParmScreenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock('Deleted Successfully.');
          this.parameterValue = '';
          this.clearModel();
          this.msReportType = 'MDB Bound';
          this.mObjModel.UnitOfMeasure = 'Default';
          this.mObjModel.ValuationBasis = 'Item Valuation';
          this.getParam(this.msParmScreenName);
          this.loaderEnabled = false;
          return true;
        }
      }
    });
  }
  bmlfonremoveAttribute(event) {}
  clearModel() {
    this.mObjModel = Object.assign({}, this.mObjModelBlank);
    this.mObjModelDesc = Object.assign({}, this.mObjModelDescBlank);
  }
  pdfLoad() {
    this.loaderEnabled = false;
  }
  closeInnerModal(id) {
    this.modalservice.close(id);
    this.loaderEnabled = false;
  }
  onclose() {
    this.router.navigate(['main']);
  }
  bmlfSuppressChange() {
    debugger;
    // if (this.mbIsSuppress == true) {
    //   this.mObjModel.SuppressIfZeroOnHand =true;
    // } else {
    //   this.mObjModel.SuppressIfZeroOnHand =false;
    // }
  }

  bmlfUOMChange() {
    if (this.mObjModel.UnitOfMeasure != 'Alternate Unit') {
      this.mObjModel.AlternateUnit = '';
    }
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.objUtil.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.objUtil.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function ValuationReportComponent_Factory(t) {
    return new (t || ValuationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_3__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_4__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_10__.ModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ValuationReportComponent,
    selectors: [["app-valuation-report"]],
    viewQuery: function ValuationReportComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    decls: 198,
    vars: 87,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p", "report-container"], [1, "row", "page-head"], [1, "col-md-11", "col-9", "page-head-col"], [1, "col-md-1", "col-3", "px-2", "page-head-col"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["onclick", "window.open('../../../../../../assets/help files/Inventory Valuation Report.pdf','_blank');", "type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn", "p-0", "pt-2"], [2, "font-size", "21px"], ["class", "loader-outer", 4, "ngIf"], [1, "col-md-12", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "flex_box", "md_p_r_30"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input", "focus"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "dataList", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "codes"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "custom_footer", "form-container"], [1, "col-md-12", "xs_p_0"], [1, "col-md-6", "col-lg-4", "custom_flex", "md_p_r_30"], ["type", "text", "name", "ItemFrom", "id", "ItemFrom", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-3", "col-lg-4", "custom_flex", "md_p_r_30"], ["id", "lbl_Item_key", 1, "col-form-label"], ["type", "text", "name", "ItemTo", "id", "ItemTo", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_ItemTo", 1, "col-form-label"], ["type", "text", "name", "LocationFrom", "id", "LocationFrom", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_LocationFromDescription", 1, "col-form-label"], ["type", "text", "name", "LocationTo", "id", "LocationTo", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_LocationToDescription", 1, "col-form-label"], ["type", "text", "name", "ItemClass", "id", "ItemClass", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_ItemClassDescription", 1, "col-form-label"], ["type", "text", "name", "ItemType", "id", "ItemType", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_ItemTypeDescription", 1, "col-form-label"], ["type", "text", "name", "ABC", "id", "ABC", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_ABCDescription", 1, "col-form-label"], ["type", "text", "name", "Product", "id", "Product", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_ProductDescription", 1, "col-form-label"], ["type", "text", "name", "Commodity", "id", "Commodity", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "blur"], ["id", "lbl_CommodityDescription", 1, "col-form-label"], ["id", "dtDate", "name", "dtDate", 1, "form-control", 3, "format", "ngModel", "ngModelChange"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "chkSuppress", "name", "chkSuppress", 1, "custom-control-input", 3, "checked", "ngModel", "ngModelChange", "change"], ["for", "chkSuppress", 1, "custom-control-label"], [1, "footer", "inner-wrapper", "report-footer"], [1, "modal-footer"], ["type", "button", "id", "btnProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "pdfViewerModal", 3, "modaltitle", "indexValue", "widthClass"], [1, "bodyContent"], ["useBrowserLocale", "true", 3, "filenameForDownload", "zoom", "base64Src", "height", "pdfLoaded"], [1, "footerContent"], ["type", "button", 1, "btn", "btn-sky", "btn-sm", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function ValuationReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8)(12, "ul")(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_a_click_14_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_a_click_18_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "button", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ValuationReportComponent_div_24_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "div", 16)(28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 18)(32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function ValuationReportComponent_Template_input_input_32_listener($event) {
          return ctx.bmlfonParamchange($event);
        })("focus", function ValuationReportComponent_Template_input_focus_32_listener($event) {
          return ctx.bmlfonremoveAttribute($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "datalist", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, ValuationReportComponent_ng_container_36_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_37_listener($event) {
          return ctx.parameterValue = $event;
        })("change", function ValuationReportComponent_Template_input_change_37_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "datalist", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, ValuationReportComponent_ng_container_39_Template, 3, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_button_click_41_listener() {
          return ctx.bmlfononParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_button_click_44_listener() {
          return ctx.bmlfonParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "form", 30)(47, "div", 31)(48, "div", 15)(49, "div", 16)(50, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 32)(54, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_54_listener($event) {
          return ctx.mObjModel.ItemFrom = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_54_listener($event) {
          return ctx.openLookupModal("ItemFrom", $event, "ItemFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_55_listener($event) {
          return ctx.openLookupModal("ItemFrom", $event, "ItemFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 36)(58, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 31)(61, "div", 15)(62, "div", 16)(63, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "div", 32)(67, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_67_listener($event) {
          return ctx.mObjModel.ItemTo = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_67_listener($event) {
          return ctx.openLookupModal("ItemTo", $event, "ItemTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_68_listener($event) {
          return ctx.openLookupModal("ItemTo", $event, "ItemTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](69, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "div", 36)(71, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 31)(74, "div", 15)(75, "div", 16)(76, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 32)(80, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.mObjModel.LocationFrom = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_80_listener($event) {
          return ctx.openLookupModal("LocationFrom", $event, "LocationFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_81_listener($event) {
          return ctx.openLookupModal("LocationFrom", $event, "LocationFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](82, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 36)(84, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 31)(87, "div", 15)(88, "div", 16)(89, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 32)(93, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_93_listener($event) {
          return ctx.mObjModel.LocationTo = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_93_listener($event) {
          return ctx.openLookupModal("LocationTo", $event, "LocationTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_94_listener($event) {
          return ctx.openLookupModal("LocationTo", $event, "LocationTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](95, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "div", 36)(97, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "div", 31)(100, "div", 15)(101, "div", 16)(102, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "div", 32)(106, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_106_listener($event) {
          return ctx.mObjModel.ItemClass = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_106_listener($event) {
          return ctx.openLookupModal("ItemClass", $event, "ItemClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_107_listener($event) {
          return ctx.openLookupModal("ItemClass", $event, "ItemClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](108, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "div", 36)(110, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 31)(113, "div", 15)(114, "div", 16)(115, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "div", 32)(119, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_119_listener($event) {
          return ctx.mObjModel.ItemType = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_119_listener($event) {
          return ctx.openLookupModal("ItemType", $event, "ItemType");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_120_listener($event) {
          return ctx.openLookupModal("ItemType", $event, "ItemType");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](121, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "div", 36)(123, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "div", 31)(126, "div", 15)(127, "div", 16)(128, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "div", 32)(132, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_132_listener($event) {
          return ctx.mObjModel.ABC = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_132_listener($event) {
          return ctx.openLookupModal("ABC", $event, "ABC");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_133_listener($event) {
          return ctx.openLookupModal("ABC", $event, "ABC");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](134, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](135, "div", 36)(136, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 31)(139, "div", 15)(140, "div", 16)(141, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](144, "div", 32)(145, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_145_listener($event) {
          return ctx.mObjModel.Product = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_145_listener($event) {
          return ctx.openLookupModal("Product", $event, "Product");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_146_listener($event) {
          return ctx.openLookupModal("Product", $event, "Product");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](147, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "div", 36)(149, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "div", 31)(152, "div", 15)(153, "div", 16)(154, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "div", 32)(158, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_158_listener($event) {
          return ctx.mObjModel.Commodity = $event;
        })("blur", function ValuationReportComponent_Template_input_blur_158_listener($event) {
          return ctx.openLookupModal("Commodity", $event, "Commodity");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_span_click_159_listener($event) {
          return ctx.openLookupModal("Commodity", $event, "Commodity");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](160, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "div", 36)(162, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "div", 31)(165, "div", 15)(166, "div", 16)(167, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](169, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "div", 32)(171, "kendo-datepicker", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_kendo_datepicker_ngModelChange_171_listener($event) {
          return ctx.mObjModel.Date = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "div", 31)(173, "div", 15)(174, "div", 16)(175, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "div", 32)(179, "div", 55)(180, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ValuationReportComponent_Template_input_ngModelChange_180_listener($event) {
          return ctx.mObjModel.SuppressIfZeroOnHand = $event;
        })("change", function ValuationReportComponent_Template_input_change_180_listener() {
          return ctx.bmlfSuppressChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](181, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](182, "footer", 58)(183, "div", 59)(184, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_button_click_184_listener() {
          return ctx.onProcess("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_button_click_187_listener() {
          return ctx.onclose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](189, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "bm-modal", 62)(191, "div", 63)(192, "ngx-extended-pdf-viewer", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("pdfLoaded", function ValuationReportComponent_Template_ngx_extended_pdf_viewer_pdfLoaded_192_listener() {
          return ctx.pdfLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "div", 65)(194, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ValuationReportComponent_Template_button_click_194_listener() {
          return ctx.closeInnerModal("pdfViewerModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](195, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](196, ValuationReportComponent_app_custom_lookup_modal_196_Template, 1, 1, "app-custom-lookup-modal", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](197, ValuationReportComponent_app_common_task_modal_197_Template, 1, 1, "app-common-task-modal", 68);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 53, "VALUATIONREPORT.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](16, 55, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 57, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](30, 59, "VALUATIONREPORT.PARAMETER"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.parameterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](52, 61, "VALUATIONREPORT.ITEMFROM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.ItemFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ItemFromDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 63, "VALUATIONREPORT.ITEMTO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.ItemTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ItemToDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](78, 65, "VALUATIONREPORT.LOCATIONFROM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.LocationFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.LocationFromDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](91, 67, "VALUATIONREPORT.LOCATIONTO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.LocationTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.LocationToDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](104, 69, "VALUATIONREPORT.ITEMCLASS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.ItemClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ItemClassDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](117, 71, "VALUATIONREPORT.ITEMTYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.ItemType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ItemTypeDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](130, 73, "VALUATIONREPORT.ABC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.ABC);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ABCDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](143, 75, "VALUATIONREPORT.PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.Product);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.ProductDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](156, 77, "VALUATIONREPORT.COMMODITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.mObjModel.Commodity);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.mObjModelDesc.CommodityDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](169, 79, "VALUATIONREPORT.DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("format", ctx.mscustomdateformat)("ngModel", ctx.mObjModel.Date);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](177, 81, "VALUATIONREPORT.SUPPRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx.mbIsSuppress)("ngModel", ctx.mObjModel.SuppressIfZeroOnHand);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](186, 83, "COMMON.PROCESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](189, 85, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("modaltitle", ctx.msScreenName)("indexValue", 10001)("widthClass", "full-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("filenameForDownload", ctx.msScreenName)("zoom", "page-actual")("base64Src", ctx.pdfSrc)("height", "90vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__.ModalComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__.CommonTaskModalComponent, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.NgxExtendedPdfViewerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DatePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
    styles: [".page-head[_ngcontent-%COMP%] {\n  padding: 10px 0 10px 0 !important;\n}\n\n  .height100p.report-container {\n  height: calc(100vh - 100px) !important;\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvaW52ZW50b3J5LXRyYW5zYWN0aW9uLXJlcG9ydHMvdmFsdWF0aW9uLXJlcG9ydC92YWx1YXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvaW52ZW50b3J5LXRyYW5zYWN0aW9uLXJlcG9ydHMvdmFsdWF0aW9uLXJlcG9ydC92YWx1YXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUNDSjs7QURDQTtFQUNJLHNDQUFBO0VBQ0EseUJBQUE7QUNFSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWR7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5oZWlnaHQxMDBwLnJlcG9ydC1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICIsIi5wYWdlLWhlYWQge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaGVpZ2h0MTAwcC5yZXBvcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89585:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/physical-property-equation-report/physical-property-equation-report.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhysicalPropertyEquationReportComponent: () => (/* binding */ PhysicalPropertyEquationReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);


class PhysicalPropertyEquationReportComponent {
  constructor(utilityService) {
    this.utilityService = utilityService;
    this.screenName = 'Physical Property Equation Report';
  }
  ngOnInit() {
    this.process();
  }
  process() {
    let jObject = {
      ReportName: this.screenName,
      ListingFlag: false,
      ListingVariable: ''
    };
    this.utilityService.bmgfReportAction(jObject, this.screenName).then(res => {});
  }
  static #_ = this.ɵfac = function PhysicalPropertyEquationReportComponent_Factory(t) {
    return new (t || PhysicalPropertyEquationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_0__.AppUtility));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PhysicalPropertyEquationReportComponent,
    selectors: [["app-physical-property-equation-report"]],
    decls: 1,
    vars: 0,
    template: function PhysicalPropertyEquationReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86747:
/*!**************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/reportgridviewlist/reportgridviewlist.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportgridviewlistComponent: () => (/* binding */ ReportgridviewlistComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../http/commonreport.service */ 2453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/hierarchical-data-grid/hierarchical-data-grid.component */ 78896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 21916);















function ReportgridviewlistComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-loader");
  }
}
function ReportgridviewlistComponent_app_hierarchical_data_grid_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-hierarchical-data-grid", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("GridData", ctx_r1.gridDataList)("ScreenName", ctx_r1.msHRScreenName)("RecordKey1", ctx_r1.msScreenName);
  }
}
class ReportgridviewlistComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_0__.BaseGrid {
  constructor(router, route, renderer, lsService, dateFormatService, toastMessageService, utilService, userFieldService, service, location) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.router = router;
    this.route = route;
    this.renderer = renderer;
    this.lsService = lsService;
    this.dateFormatService = dateFormatService;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.service = service;
    this.location = location;
    this.bmlfSelectedCallback = args => args.dataItem;
    this.gridDataList = [];
    this.marrOrginalGridList = [];
    this.mbLoadingEnabled = false;
    this.msKeyword = '';
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_1__.GridSettings();
    this.marrFilterList = [];
    this.msCustomDateFormat = "";
    this.msScreenName = "";
    this.mbShowDeleteDialog = false;
    this.msMsgData = {};
    this.mbBulkDeleteView = false;
    this.mbBulkDelete = false;
    this.mObjModel = {};
    this.marraySelected = [];
    this.mbIsLoading = false;
    this.msMainJson = '';
    this.marrItemGridDataCreate = '';
    this.marrItemGridDataColumn = '';
    this.mbShowGrid = false;
    this.msHRScreenName = 'Report Generation';
  }
  ngOnInit() {
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    let psPrdKey = this.route.snapshot.queryParamMap.get('reportKey');
    this.msScreenName = psPrdKey;
    this.setExportData({
      'pageName': this.msScreenName
    });
    this.exportData.translateFrom = '';
    this.initGrid();
    this.getDataList();
    this.setExportData({
      'pageName': this.msScreenName
    });
    this.exportData.translateFrom = '';
  }
  isNumericCheck(value) {
    return /^-?\d+$/.test(value);
  }
  getDataList() {
    let parrGridData = JSON.parse(localStorage.getItem("ReportList"));
    this.gridDataList = parrGridData;
    this.gridDataList.DashBaordData.forEach(element => {
      Object.keys(element).forEach(key => {
        if (moment__WEBPACK_IMPORTED_MODULE_2__(element[key], moment__WEBPACK_IMPORTED_MODULE_2__.ISO_8601, true).isValid() == true && !this.isNumericCheck(element[key])) {
          if (element[key].includes('-') && element[key].includes(':') && element[key].includes('T')) {
            element[key] = moment__WEBPACK_IMPORTED_MODULE_2__(element[key]).format(this.msCustomDateFormat.toUpperCase());
          }
        }
      });
    });
    this.gridDataList.DashBaordData.forEach(element => {
      this.marrItemGridDataColumn = Object.entries(element).map(([key, val]) => key);
    });
    this.mbShowGrid = true;
    this.exportData.columnsConfig = this.marrItemGridDataColumn;
    this.mobjGridSettings.state.take = 50;
  }
  bmlfResetGridSettings() {
    this.bmlfOnResetGridSettings(this.msScreenName, "Report");
  }
  bmlfSaveGridSetting() {
    this.bmlfOnSaveGrid(this.msScreenName);
  }
  bmlfCloseProduct() {
    localStorage.removeItem("ReportList");
    localStorage.removeItem(this.msScreenName);
    this.location.back();
  }
  bmlfonselectionChange(e) {
    if (e.selectedRows.length > 0) {
      e.selectedRows.forEach(ele => {
        let parrfilterData = this.marraySelected.filter(x => x.Productkey == ele.dataItem.Productkey);
        if (parrfilterData == undefined || parrfilterData.length == 0) {
          this.marraySelected.push(ele.dataItem);
        }
      });
    } else if (e.deselectedRows.length > 0) {
      e.deselectedRows.forEach(ele => {
        let pobjTempData = ele.dataItem;
        this.marraySelected = this.marraySelected.filter(x => {
          if (x.Productkey != pobjTempData.Productkey) {
            return x;
          }
        });
      });
    }
  }
  bmlfonCloseModal(event) {
    this.mbBulkDeleteView = event.mbBulkDeleteView;
  }
  bmlFilterSetting() {
    this.filterEnabled = !this.filterEnabled;
  }
  static #_ = this.ɵfac = function ReportgridviewlistComponent_Factory(t) {
    return new (t || ReportgridviewlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_4__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_8__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ReportgridviewlistComponent,
    selectors: [["app-reportgridviewlist"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 22,
    vars: 6,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row"], ["id", "kendodiv1", 1, "col-md-12"], ["id", "G1", "style", "z-index: 10000000;", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "G1", 2, "z-index", "10000000", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2"]],
    template: function ReportgridviewlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ReportgridviewlistComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReportgridviewlistComponent_Template_button_click_9_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10)(13, "section", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ReportgridviewlistComponent_app_hierarchical_data_grid_17_Template, 1, 3, "app-hierarchical-data-grid", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ReportgridviewlistComponent_Template_button_click_19_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.msScreenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbShowGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 4, "COMMON.CLOSE"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__.LoaderComponent, _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_10__.HierarchicalDataGridComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 53550:
/*!**************************************************************************************!*\
  !*** ./src/app/main/common-report/components/reportviewer/reportviewer.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportviewerComponent: () => (/* binding */ ReportviewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../http/commonreport.service */ 2453);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 21916);











function ReportviewerComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
  }
}
function ReportviewerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "ngx-extended-pdf-viewer", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pdfLoaded", function ReportviewerComponent_div_14_Template_ngx_extended_pdf_viewer_pdfLoaded_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.pdfLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filenameForDownload", ctx_r1.msPageName)("zoom", "page-actual")("base64Src", ctx_r1.pdfSrc)("height", "90vh");
  }
}
const _c0 = function (a0) {
  return {
    modalLoading: a0
  };
};
class ReportviewerComponent {
  constructor(activatedRoute, service, toastMessageService, modalservice, alertService, titleService) {
    this.activatedRoute = activatedRoute;
    this.service = service;
    this.toastMessageService = toastMessageService;
    this.modalservice = modalservice;
    this.alertService = alertService;
    this.titleService = titleService;
    this.mbIsLoading = false;
    this.msPageName = '';
    this.mbIsNewTab = null;
    this.pdfSrc = " ";
    this.showViewer = false;
  }
  ngOnInit() {
    debugger;
    this.mbIsNewTab = this.activatedRoute.snapshot.queryParamMap.get('NewTab');
    this.msPageName = this.activatedRoute.snapshot.queryParamMap.get('ReportName');
    this.titleService.setTitle(this.msPageName);
    try {
      let jObject = {};
      jObject = JSON.parse(localStorage.getItem(this.msPageName));
      this.service.GetReportData(jObject).subscribe(res => {
        console.log("reps----------->>>>>>.", res);
        if (res != null) {
          if (res.Response[0].ErrorCode == "") {
            this.pdfSrc = res.Response[0].Pdfpath;
            this.showViewer = true;
          } else {
            if (res.Response[0].ErrorCode != '') {
              this.onOpenErrorBlock(res.Response[0].ResponseText);
            } else {
              this.onOpenErrorBlock("No Data Found");
            }
            console.error("Response is Failure");
            this.mbIsLoading = false;
          }
          // this.clearReportFieldsSession();
        }

        console.log("reps----------->>>>>>.", res);
      });
    } catch (e) {
      console.log(e);
    }
  }
  bmlfonCloseModal(type) {
    if (this.mbIsNewTab) {
      window.close();
      return false;
    }
  }
  pdfLoad() {
    this.mbIsLoading = false;
  }
  onOpenErrorBlock(msg) {
    this.alertService.infoAlert('Alert', '<div class="about-list">' + msg + '</div>');
  }
  clearReportFieldsSession() {
    try {
      localStorage.removeItem(this.msPageName);
    } catch (e) {
      console.log(e);
    }
  }
  static #_ = this.ɵfac = function ReportviewerComponent_Factory(t) {
    return new (t || ReportviewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_0__.CommonReportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_1__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReportviewerComponent,
    selectors: [["app-reportviewer"]],
    decls: 19,
    vars: 9,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], ["class", "bodyContent", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "id", "cmdCloseModal", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bodyContent"], ["useBrowserLocale", "true", 3, "filenameForDownload", "zoom", "base64Src", "height", "pdfLoaded"]],
    template: function ReportviewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ReportviewerComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportviewerComponent_Template_button_click_8_listener() {
          return ctx.bmlfonCloseModal("Close");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ReportviewerComponent_div_14_Template, 2, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportviewerComponent_Template_button_click_16_listener() {
          return ctx.bmlfonCloseModal("Close");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx.mbIsLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.msPageName, "--- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showViewer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 5, "COMMON.CLOSE"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.NgxExtendedPdfViewerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78358:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/common-report/components/serial-lot-reports/lot-expiration-report/lot-expiration-report.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotExpirationComponent: () => (/* binding */ LotExpirationComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/lot-expiration-report-model */ 25286);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _constant_common_report_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constant/common-report.const */ 72678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../http/commonreport.service */ 2453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


















function LotExpirationComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", obj_r8.PARANAME);
  }
}
function LotExpirationComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", obj_r9.PARANAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](obj_r9.PARANAME);
  }
}
function LotExpirationComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "div", 49)(2, "div", 15)(3, "div", 50)(4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 52)(9, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_div_45_Template_input_ngModelChange_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r11.mobjLotExpModel[item_r10.field] = $event);
    })("blur", function LotExpirationComponent_div_45_Template_input_blur_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.bmlfonOpenLookupModal(item_r10.lookupKey, item_r10.field, item_r10.modelName, "blur", ctx_r13.mobjLotExpModel[item_r10.field], "custom", "txt" + item_r10.field));
    })("focus", function LotExpirationComponent_div_45_Template_input_focus_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.bmlfOnGlobalFocus(item_r10.field, ctx_r14.mobjLotExpModel[item_r10.field]));
    })("change", function LotExpirationComponent_div_45_Template_input_change_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.bmlfonGlobalOnChangesFn(item_r10.field, ctx_r15.mobjLotExpModel[item_r10.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_div_45_Template_span_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.bmlfonOpenLookupModal(item_r10.lookupKey, item_r10.field, item_r10.modelName, "click", ctx_r16.mobjLotExpModel[item_r10.field], "custom", "txt" + item_r10.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 49)(13, "div", 15)(14, "div", 50)(15, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 52)(21, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_div_45_Template_input_ngModelChange_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r17.mobjLotExpModel[item_r10.desField] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("for", "txt" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 16, "REPORTS." + item_r10.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 18, "REPORTS." + (item_r10.valueType == "from" ? "FROM" : "TO")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("name", item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r4.mobjLotExpModel[item_r10.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "cmd" + item_r10.field + "Lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("for", "txt" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "lbl" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 20, "REPORTS." + item_r10.title), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 22, "REPORTS." + (item_r10.valueType == "from" ? "FROM" : "TO")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 24, "REPORTS.DES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("name", item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.field + "Des");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r4.mobjLotExpModel[item_r10.desField]);
  }
}
function LotExpirationComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_div_59_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.mobjLotExpModel.NoofdaystoExpireLot = $event);
    })("keypress", function LotExpirationComponent_div_59_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.bmlSpecialChar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r5.mobjLotExpModel.NoofdaystoExpireLot);
  }
}
function LotExpirationComponent_app_custom_lookup_modal_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-custom-lookup-modal", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveLookupField", function LotExpirationComponent_app_custom_lookup_modal_68_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r21.bmlfonSaveLookupField($event));
    })("closeLookup", function LotExpirationComponent_app_custom_lookup_modal_68_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.bmlfonCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("multiSelection", ctx_r6.mbMutiSelectionLookup)("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function LotExpirationComponent_app_common_task_modal_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-common-task-modal", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTaskModal", function LotExpirationComponent_app_common_task_modal_69_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
class LotExpirationComponent {
  getDataList() {}
  /**-------END: TASK Field ----*/
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(lookupService, dateFormatService, lsService, utilService, toastMessageService, userFieldService, router, commonReportService) {
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.utilService = utilService;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.router = router;
    this.commonReportService = commonReportService;
    this.mbLoaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjUserData = {};
    this.msScreenName = "Lot Expiration Report";
    this.msParmScreenName = 'Lot Expiration Report - Selection Criteria';
    this.mobjLookupKeyData = {};
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.msCustomDateFormat = "";
    this.marrCommonRecordSet = [];
    this.mobjCommonDialogData = {};
    this.mbCommonDialogView = false;
    this.marrSelectedRecord = [];
    this.mbBulkResponseMsg = false;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__.CommonConstants.gsServerDateFormat;
    this.mbBulkResponseView = false;
    this.msMsgData = {};
    this.msFocusField = '';
    this.msLookupField = '';
    this.mbcheckval = false;
    this.mobjLotExpModel = new _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.LotExpirationReportModel();
    this.mobjLotExpModelBlank = new _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.LotExpirationReportModel();
    this.paramValueArray = [];
    this.msscreenModeUpdate = "I";
    this.mbIsLoading = false;
    this.marrLineGridData = [];
    this.marrLoadLookupFields = _constant_common_report_const__WEBPACK_IMPORTED_MODULE_3__.LotExpirationConstants.garrLotExpirationLookupFieldsMap;
    this.parameterValue = '';
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.mobjSelectedItemData = {};
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.miLineItemRowIndex = null;
    this.msLotType = 0;
  }
  ngOnInit() {
    this.utilService.getBMEScreePermission(this.msScreenName); // Fetch Screen permission
    this.mobjUserData = this.lsService.getUserSession();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.getParam(this.msParmScreenName);
    this.mobjLotExpModel.AlreadyExpiredLot = false;
    this.mobjLotExpModel.NoofdaystoExpireLot = 0;
  }
  bmlfonParamchange(e) {
    try {
      let parametername = e.target.value;
      if (parametername.trim() != '') {
        if (this.paramValueArray.length > 0) {
          let list = this.paramValueArray.filter(x => x.PARANAME === parametername)[0];
          this.fetchParamData(list.PARANAME);
        }
      }
    } catch (e) {
      console.log(e);
      console.trace();
    }
  }
  fetchParamData(param) {
    let pValue = param;
    this.mbIsLoading = true;
    this.userFieldService.getReportParameterValue(this.msParmScreenName, param).subscribe(res => {
      if (res != null && res.RPTPARAMETERSBYVALUE.length > 0) {
        this.bmlfclearModel();
        this.fillControlFromParam(res.RPTPARAMETERSBYVALUE);
      } else {
        console.error('No Response');
        console.trace();
        this.mbIsLoading = false;
      }
    });
  }
  bmlfclearModel() {
    this.mobjLotExpModel = Object.assign({}, this.mobjLotExpModel);
  }
  fillControlFromParam(resData) {
    resData.forEach(element => {
      let key = this.bmlfongetKeyFromValue(element.CONTROLNAME);
      setTimeout(() => {
        if (element.CONTROLNAME == 'chkActive' || element.CONTROLNAME == 'chkNoNew' || element.CONTROLNAME == 'chkObsolete' || element.CONTROLNAME == 'chkDeactivated' || element.CONTROLNAME == 'ChkOpeningBalance') {
          this.mobjLotExpModel[key] = element.CONTROLVALUE == '0' ? false : true;
        }
      }, 500);
      if (element.CONTROLNAME == 'PvdtDatesApplyFrom(0)' || element.CONTROLNAME == 'PvdtDatesApplyto(0)') {
        this.mobjLotExpModel[key] = this.utilService.bmlfSetDateAsDateFormat(element.CONTROLVALUE);
      } else {
        this.mobjLotExpModel[key] = element.CONTROLVALUE;
      }
    });
    this.bmlfGetLookupDes(this.mobjLotExpModel);
    this.mbIsLoading = false;
  }
  bmlfongetKeyFromValue(value) {
    let newObj = this.mobjLotExpModel;
    let tempKey = Object.keys(newObj).find(data => {
      return _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.BmeHashMapCertificate[data] == value;
    });
    return tempKey;
  }
  bmlfonParameterSave() {
    let paramValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    let newObj = this.mobjLotExpModel;
    if (paramValue == '') {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.PRMEMPTY'));
      return;
    } else {
      this.mbIsLoading = true;
      this.msscreenModeUpdate = "I";
      let jObj = {};
      let headerData = [];
      let jArray = [];
      let counterRecId = 0;
      //let oArray = [...this.dataListCtrl.nativeElement.options];
      jObj["ParamName"] = paramValue;
      jObj["ScreenName"] = this.msParmScreenName;
      if (this.paramValueArray.length > 0) {
        let list = this.paramValueArray.filter(x => x.PARANAME === paramValue)[0];
        if (list != undefined) {
          this.msscreenModeUpdate = 'U';
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        } else {
          jObj["UpdateMode"] = this.msscreenModeUpdate;
        }
      } else {
        jObj["UpdateMode"] = this.msscreenModeUpdate;
      }
      headerData.push(jObj);
      Object.keys(newObj).map(key => {
        if (key != undefined && typeof newObj[key] == "string") {
          let tempJObj = {};
          if (_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.BmeHashMapCertificate[key] != undefined) {
            tempJObj["ControlName"] = _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.BmeHashMapCertificate[key];
            tempJObj["ControlValue"] = newObj[key];
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
        if (key != undefined && typeof newObj[key] == "boolean") {
          let tempJObj = {};
          if (_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.BmeHashMapCertificate[key] != undefined) {
            tempJObj["ControlName"] = _models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.BmeHashMapCertificate[key];
            tempJObj["ControlValue"] = newObj[key] == true ? 1 : 0;
            tempJObj["RecId"] = counterRecId++;
            jArray.push(tempJObj);
          }
        }
      });
      this.userFieldService.saveReportParameters(jArray, headerData).subscribe(res => {
        if (res != null) {
          if (res['Response'][0].ResponseText == "Sucess") {
            //this.paramCtrl.nativeElement.value = "";
            this.parameterValue = '';
            this.mbIsLoading = false;
            this.getParam(this.msParmScreenName);
          } else {
            console.trace();
            console.error('Save error');
            this.mbIsLoading = false;
          }
        }
      });
    }
  }
  bmlfonParameterDelete() {
    let oParaValue = this.parameterValue; //this.paramCtrl.nativeElement.value;
    if (oParaValue == "") {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.SELRPTPRM'));
      return;
    } else {
      this.mbcheckval = false;
      this.mbIsLoading = true;
      this.bmlfondeleteApiParam(oParaValue);
      this.parameterValue = '';
      return true;
    }
  }
  onOpenErrorBlock(msg) {
    this.toastMessageService.notifyError(msg);
  }
  bmlfondeleteApiParam(oParaValue) {
    this.userFieldService.DeleteReportParameter(this.msParmScreenName, oParaValue).subscribe(res => {
      if (res != null) {
        if (res.Response[0].ResponseText == "Success") {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.DELMSG'));
          // this.paramCtrl.nativeElement.value = "";
          this.parameterValue = '';
          this.bmlfclearModel();
          this.getParam(this.msParmScreenName);
          this.mbIsLoading = false;
          return true;
        }
        this.mbIsLoading = false;
      }
    });
  }
  getParam(scr) {
    this.mbIsLoading = true;
    this.userFieldService.getReportParameter(scr).subscribe(res => {
      if (res != null) {
        this.paramValueArray = res.RPTPARAMETERS;
        this.mbIsLoading = false;
      } else {
        this.mbIsLoading = false;
      }
    });
  }
  // process report
  bmlfOnProcess(psValue) {
    let pobjCopyRec = Object.assign({}, this.mobjLotExpModel);
    let pobjFilterHeaderRec = this.bmlfOnUpdateHeaderData(pobjCopyRec);
    this.mbIsLoading = true;
    this.utilService.bmgfReportAction(pobjFilterHeaderRec, this.msScreenName).then(res => {});
  }
  // close modal
  bmlfOnClose(psValue) {
    this.router.navigate(['/main/dashboard']);
  }
  //Open LOOKUP MODAL
  bmlfonOpenLookupModal(psField, psKey, modelName, psEvent, psValue, psType, psEleId, piRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjLotExpModel[psKey + 'Des'] = '';
      return false;
    }
    let psLookUpKey = psField;
    let psScreenName = this.msScreenName;
    let pobjReqData = {
      ScreenName: psScreenName
    };
    pobjReqData.LookUpKey = psLookUpKey;
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      setTimeout(() => {
        this.utilService.bmgfOnKeyInputEnable();
        this.mbIsLoading = false;
      }, 500);
      if (res == null) {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        let title = psField;
        title = this.utilService.bmgfonTranslate('REPORTS.' + psField.toUpperCase());
        let updatedtitle;
        if (title.includes('From')) {
          updatedtitle = title.replace('From', '');
        } else if (title.includes('To')) {
          updatedtitle = title.replace('To', '');
        }
        this.miLineItemRowIndex = piRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.key = psKey;
        this.mobjLookupKeyData.title = updatedtitle;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.controlName = modelName;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let psInputKey = this.bmlfGetInputColumn(psKey);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.bmlfonSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else if (parrFilterData.length == 0) {
            let elementExists = document.getElementById(psEleId);
            if (elementExists) {
              document.getElementById(psEleId).focus();
            }
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfonSaveLookupField(pobjData) {
    let psInputKey = this.bmlfGetInputColumn(pobjData.key);
    let psInputDesKey = this.bmlfGetInputDesColumn(pobjData.key);
    let validationFlag = this.bmlfOnValidateControls(pobjData.key, pobjData.value[psInputKey]);
    if (validationFlag == true) {
      if (this.miLineItemRowIndex != null) {
        this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = pobjData.value[psInputKey];
      } else {
        this.mobjLotExpModel[pobjData.key] = pobjData.value[psInputKey];
        if (psInputDesKey) {
          this.mobjLotExpModel[pobjData.key + 'Des'] = pobjData.value[psInputDesKey];
        }
      }
    }
    this.mbIsLookupModal = false;
    this.mbMutiSelectionLookup = false;
  }
  bmlfOnValidateControls(ctrlName, value) {
    if (ctrlName.includes("From") == true) {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.marrLineGridData[this.miLineItemRowIndex][_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjLotExpModel[_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value > this.mobjLotExpModel[_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (ctrlName == 'DocNoFrom' || ctrlName == 'DocNoTo') {
        if (this.marrLineGridData[this.miLineItemRowIndex][_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.marrLineGridData[this.miLineItemRowIndex][_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      } else {
        if (this.mobjLotExpModel[_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]] == "") {
          return true;
        } else if (value < this.mobjLotExpModel[_models_lot_expiration_report_model__WEBPACK_IMPORTED_MODULE_1__.ControlMap[ctrlName]]) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('REPORTS.VALMSG2'));
          return false;
        } else {
          return true;
        }
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'ItemFrom' || psField == 'ItemTo') {
      psField = 'ItemKey';
      return psField;
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      psField = 'Location';
      return psField;
    }
  }
  // Set Lookup Description Column
  bmlfGetInputDesColumn(psField) {
    if (psField == 'ItemFrom' || psField == 'ItemTo') {
      return 'Desc1';
    } else if (psField == 'LocationFrom' || psField == 'LocationTo') {
      return 'Description';
    }
  }
  //Close LOOKUP MODAL
  bmlfonCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (this.miLineItemRowIndex != null) {
          document.getElementById(pobjData.eleId).value = '';
        } else {
          this.mobjLotExpModel[pobjData.key] = '';
          this.mobjLotExpModel[pobjData.key + 'Des'] = '';
        }
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  // GlobalOnChanges Event
  bmlfonGlobalOnChangesFn(psFieldName, pobjFieldData, piIndex, eleId) {
    if (pobjFieldData == null) {
      return false;
    }
    if (piIndex != null) {
      if (psFieldName == 'DocDateTo') {
        if (this.marrLineGridData[piIndex].DocDateTo < this.marrLineGridData[piIndex].DocDateFrom) {
          this.marrLineGridData[piIndex].DocDateFrom = this.marrLineGridData[piIndex].DocDateTo;
        }
      }
      if (psFieldName == 'DocDateFrom') {
        if (this.marrLineGridData[piIndex].DocDateFrom > this.marrLineGridData[piIndex].DocDateTo) {
          this.marrLineGridData[piIndex].DocDateTo = this.marrLineGridData[piIndex].DocDateFrom;
        }
      }
    }
    // if (this.mbIsItemModal) {
    //   this.mbIsChange = true;
    //   this.mbIsSaveDone = false;
    // }
  }
  // Global focus Fn
  bmlfOnGlobalFocus(field, value) {
    this.msFocusField = field;
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  // Global Blur Fn
  bmlfOnGlobalBlur(field, psValue, eleId) {
    this.msFocusField = '';
  }
  // Get Lookup Description
  bmlfGetLookupDes(pobjData) {
    let parrSetKeyData = [{
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'ITEMKEY',
      KeyValue1: pobjData.ItemTo,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationFrom,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: 'Location',
      KeyValue1: pobjData.LocationTo,
      KeyValue2: '',
      KeyDescription: ''
    }];
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrSetKeyData,
        ScreenName: [{
          ScreenName: this.msScreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userFieldService.bmlfFetchKeyDescription(reqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (res.LookupData.length) {
        res.LookupData.forEach(ele => {
          if (ele.KeyCode == 'ITEMKEY') {
            if (ele.KeyValue1 == pobjData.ItemFrom) {
              this.mobjLotExpModel.descriptionItemFrom = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.ItemTo) {
              this.mobjLotExpModel.descriptionItemTo = ele.KeyDescription;
            }
          }
          if (ele.KeyCode == 'Location') {
            if (ele.KeyValue1 == pobjData.LocationFrom) {
              this.mobjLotExpModel.descriptionLocationFrom = ele.KeyDescription;
            }
            if (ele.KeyValue1 == pobjData.LocationTo) {
              this.mobjLotExpModel.descriptionLocationTo = ele.KeyDescription;
            }
          }
        });
      }
    }, err => {
      console.log(err);
    });
  }
  // select deselect all
  bmlfonSelectDeSelect(type, psValue) {
    if (type == 'itemType') {
      this.marrLineGridData.forEach(ele => {
        ele.Select = psValue;
      });
    }
  }
  // update header data
  bmlfOnUpdateHeaderData(pobjData) {
    delete pobjData.ItemFromDes;
    delete pobjData.ItemToDes;
    delete pobjData.LocationFromDes;
    delete pobjData.LocationToDes;
    delete pobjData.descriptionItemFrom;
    delete pobjData.descriptionItemTo;
    delete pobjData.descriptionLocationFrom;
    delete pobjData.descriptionLocationTo;
    return pobjData;
  }
  radioChange(ev, type) {
    if (ev == 1) {
      this.mobjLotExpModel.AlreadyExpiredLot = true;
      this.mobjLotExpModel.NoofdaystoExpireLot = 0;
    } else {
      this.mobjLotExpModel.AlreadyExpiredLot = false;
    }
  }
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Lot Expiration Report.pdf', '_blank');
  }
  bmlSpecialChar(ev) {
    if (ev.charCode == 46) {
      return false;
    }
  }
  //Open Task MODAL
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.utilService.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = "0";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function LotExpirationComponent_Factory(t) {
    return new (t || LotExpirationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_http_commonreport_service__WEBPACK_IMPORTED_MODULE_10__.CommonReportService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: LotExpirationComponent,
    selectors: [["app-lot-expiration-report"]],
    decls: 70,
    vars: 29,
    consts: [[1, "inner-wrapper", "page_wrap", "min_h_100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-11", "page-head-col"], [1, "p_10"], [1, "col-1", "px-2", "page-head-col"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", "mr-2", "mt-1", "float-left", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn", "p-0", "pt-2", 3, "click"], [2, "font-size", "21px"], [1, "col-md-10", "xs_p_0", "m_b_30"], [1, "form-group", "row"], [1, "col-md-3"], ["for", "txtParameter", "id", "lblParameter", 1, "col-form-label"], [1, "col-md-4", "custom_flex", "md_p_r_30", "pl-2"], ["type", "text", "name", "ReportParam", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "hidden", "input"], ["paramCtrl", ""], ["id", "ReportParameter"], ["dataListCtrl", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "dataList", "list", "ReportParameter", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "codes"], ["type", "button", "title", "Save", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["type", "button", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "custom_footer", "form-container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-6", "offset-md-3", "mt-3", "radio-box"], [1, "form-check"], [1, "row"], [1, "col-7"], ["type", "radio", "name", "radioBtn", "id", "AlreadyExpiredLot", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange", "change"], ["for", "AlreadyExpiredLot", 1, "form-check-label"], [1, "col-5", "pr-0"], ["type", "radio", "name", "radioBtn", "id", "NoOfDays", "checked", "", 1, "form-check-input", 3, "value", "ngModel", "checked", "ngModelChange", "change"], ["for", "NoOfDays", 1, "form-check-label"], ["class", "col-4 p-0", 4, "ngIf"], [1, "footer", "inner-wrapper"], [1, "modal-footer"], ["type", "button", "id", "cmdProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "value"], [1, "col-md-6"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label", 3, "for", "id"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange", "blur", "focus", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["type", "text", "disabled", "", 1, "form-control", 3, "name", "ngModel", "id", "ngModelChange"], [1, "col-4", "p-0"], [1, "form-group"], ["type", "number", "id", "NoofdaystoExpireLot", "name", "NoofdaystoExpireLot", "min", "0", "onKeyPress", "if(this.value.length==5) return false;", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"]],
    template: function LotExpirationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 9)(11, "ul")(12, "li")(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_a_click_13_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "li")(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_a_click_17_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_button_click_20_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 18)(30, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function LotExpirationComponent_Template_input_input_30_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "datalist", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, LotExpirationComponent_ng_container_34_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_Template_input_ngModelChange_35_listener($event) {
          return ctx.parameterValue = $event;
        })("change", function LotExpirationComponent_Template_input_change_35_listener($event) {
          return ctx.bmlfonParamchange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "datalist", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, LotExpirationComponent_ng_container_37_Template, 3, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_button_click_39_listener() {
          return ctx.bmlfonParameterSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_button_click_42_listener() {
          return ctx.bmlfonParameterDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](43, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, LotExpirationComponent_div_45_Template, 22, 26, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 32)(47, "div", 33)(48, "div", 34)(49, "div", 35)(50, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_Template_input_ngModelChange_50_listener($event) {
          return ctx.msLotType = $event;
        })("change", function LotExpirationComponent_Template_input_change_50_listener() {
          return ctx.radioChange(ctx.msLotType, "AlreadyExpiredLot");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, " Already Expired Lot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 33)(54, "div", 34)(55, "div", 38)(56, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotExpirationComponent_Template_input_ngModelChange_56_listener($event) {
          return ctx.msLotType = $event;
        })("change", function LotExpirationComponent_Template_input_change_56_listener() {
          return ctx.radioChange(ctx.msLotType, "NoofdaystoExpireLot");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, " No. of days to Expire Lot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, LotExpirationComponent_div_59_Template, 3, 1, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "footer", 42)(61, "div", 43)(62, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_button_click_62_listener() {
          return ctx.bmlfOnProcess("processEvn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotExpirationComponent_Template_button_click_65_listener() {
          return ctx.bmlfOnClose("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, LotExpirationComponent_app_custom_lookup_modal_68_Template, 1, 2, "app-custom-lookup-modal", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](69, LotExpirationComponent_app_common_task_modal_69_Template, 1, 1, "app-common-task-modal", 47);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.msScreenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 19, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 21, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 23, "REPORTS.PARAMETER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.parameterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.paramValueArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.marrLoadLookupFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 1)("ngModel", ctx.msLotType);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", 0)("ngModel", ctx.msLotType)("checked", ctx.msLotType);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.msLotType == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](64, 25, "COMMON.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](67, 27, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__.CommonTaskModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
    styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #373a3c;\n  color: white;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.custom_footer[_ngcontent-%COMP%] {\n  padding-bottom: 43px;\n}\n\n#report-disabled[_ngcontent-%COMP%]:disabled {\n  background-color: white;\n}\n\n.radio-box[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem;\n  border: solid #dee2e6;\n  border-width: 1px 0 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jb21tb24tcmVwb3J0L2NvbXBvbmVudHMvc2VyaWFsLWxvdC1yZXBvcnRzL2xvdC1leHBpcmF0aW9uLXJlcG9ydC9sb3QtZXhwaXJhdGlvbi1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2NvbW1vbi1yZXBvcnQvY29tcG9uZW50cy9zZXJpYWwtbG90LXJlcG9ydHMvbG90LWV4cGlyYXRpb24tcmVwb3J0L2xvdC1leHBpcmF0aW9uLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLHVCQUFBO0FDQ047O0FER0U7RUFDRSxvQkFBQTtBQ0FKOztBREdFO0VBQ0UsdUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLHFCQUFBO0VBQ0EscUJBQUE7QUNESiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNzNhM2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubW9kYWwtZm9vdGVye1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbV9mb290ZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDNweDtcclxuICB9XHJcblxyXG4gICNyZXBvcnQtZGlzYWJsZWQ6ZGlzYWJsZWQgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgLy8gbWFyZ2luOiAxcmVtIC0uNzVyZW0gMDtcclxuICAgIGJvcmRlcjogc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMDtcclxuICB9IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYTNjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdG9tX2Zvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiA0M3B4O1xufVxuXG4jcmVwb3J0LWRpc2FibGVkOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5yYWRpby1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 72678:
/*!********************************************************************!*\
  !*** ./src/app/main/common-report/constant/common-report.const.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgingReportConstants: () => (/* binding */ AgingReportConstants),
/* harmony export */   LotExpirationConstants: () => (/* binding */ LotExpirationConstants),
/* harmony export */   TranActivityConstants: () => (/* binding */ TranActivityConstants),
/* harmony export */   TranHistoryConstants: () => (/* binding */ TranHistoryConstants)
/* harmony export */ });
/* harmony import */ var _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/aging-report-model */ 72196);
/* harmony import */ var _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/transaction-activity-report.model */ 36830);
/* harmony import */ var _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/transaction-history-report.model */ 79488);



class TranActivityConstants {
  static #_ = this.garrTranActivityLookupFieldsMap = [{
    field: 'ItemClassFrom',
    desField: 'ItemClassFromDes',
    lookupKey: "ItemClassKeyFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemClassFrom,
    title: 'ITEMCLASSKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemClassTo',
    desField: 'ItemClassToDes',
    lookupKey: "ItemClassKeyTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemClassTo,
    title: 'ITEMCLASSKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemFrom',
    desField: 'ItemFromDes',
    lookupKey: "ItemKeyFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemFrom,
    title: 'ITEMKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemTo',
    desField: 'ItemToDes',
    lookupKey: "ItemKeyTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemTo,
    title: 'ITEMKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'LocationFrom',
    desField: 'LocationFromDes',
    lookupKey: "LocationFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.LocationFrom,
    title: 'LOCATION',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'LocationTo',
    desField: 'LocationToDes',
    lookupKey: "LocationTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.LocationTo,
    title: 'LOCATION',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemTypeFrom',
    desField: 'ItemTypeFromDes',
    lookupKey: "ItemTypeFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemTypeFrom,
    title: 'ITEMTYPE',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemTypeTo',
    desField: 'ItemTypeToDes',
    lookupKey: "ItemTypeTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemTypeTo,
    title: 'ITEMTYPE',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemSubTypeFrom',
    desField: 'ItemSubTypeFromDes',
    lookupKey: "ItemSubTypeFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemSubTypeFrom,
    title: 'ITEMSUBTYPE',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemSubTypeTo',
    desField: 'ItemSubTypeToDes',
    lookupKey: "ItemSubTypeTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemSubTypeTo,
    title: 'ITEMSUBTYPE',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ABCFrom',
    desField: 'ABCFromDes',
    lookupKey: "ABCKeyFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ABCFrom,
    title: 'ABCKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ABCTo',
    desField: 'ABCToDes',
    lookupKey: "ABCKeyTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ABCTo,
    title: 'ABCKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ProductFrom',
    desField: 'ProductFromDes',
    lookupKey: "ProductFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ProductFrom,
    title: 'PRODUCT',
    valueType: "from",
    display: true,
    viewOn: "tabTwo"
  }, {
    field: 'ProductTo',
    desField: 'ProductToDes',
    lookupKey: "ProductTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ProductTo,
    title: 'PRODUCT',
    valueType: "to",
    display: true,
    viewOn: "tabTwo"
  }, {
    field: 'CommodityFrom',
    desField: 'CommodityFromDes',
    lookupKey: "CommodityFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.CommodityFrom,
    title: 'COMMODITY',
    valueType: "from",
    display: true,
    viewOn: "tabTwo"
  }, {
    field: 'CommodityTo',
    desField: 'CommodityToDes',
    lookupKey: "CommodityTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.CommodityTo,
    title: 'COMMODITY',
    valueType: "to",
    display: true,
    viewOn: "tabTwo"
  }, {
    field: 'InventoryAccountFrom',
    desField: 'InventoryAccountFromDes',
    lookupKey: "InventoryControlA/CFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.InventoryAccountFrom,
    title: 'INVCTRLAC',
    valueType: "from",
    display: true,
    viewOn: "tabThree"
  }, {
    field: 'InventoryAccountTo',
    desField: 'InventoryAccountToDes',
    lookupKey: "InventoryControlA/CTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.InventoryAccountTo,
    title: 'INVCTRLAC',
    valueType: "to",
    display: true,
    viewOn: "tabThree"
  }, {
    field: 'OffSetAccountFrom',
    desField: 'OffSetAccountFromDes',
    lookupKey: "InventoryOffestA/CFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.OffSetAccountFrom,
    title: 'INVOFFSETAC',
    valueType: "from",
    display: true,
    viewOn: "tabThree"
  }, {
    field: 'OffSetAccountTo',
    desField: 'OffSetAccountToDes',
    lookupKey: "InventoryOffsetA/CTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.OffSetAccountTo,
    title: 'INVOFFSETAC',
    valueType: "to",
    display: true,
    viewOn: "tabThree"
  }];
  static #_2 = this.garrTranTypeListMap = [{
    type: 'checkbox',
    display: true,
    field: 'Select',
    title: 'REPORTS.SELECT',
    lookupKey: "",
    modelName: ''
  }, {
    type: 'text',
    display: true,
    field: 'TrnType',
    title: 'REPORTS.TRANTYPE',
    lookupKey: "",
    modelName: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'DocNoFrom',
    title: 'REPORTS.DOCNOFROM',
    lookupKey: "DocNoFrom",
    modelName: 'DocNoTo'
  }, {
    type: 'lookup',
    display: true,
    field: 'DocNoTo',
    title: 'REPORTS.DOCNOTO',
    lookupKey: "DocNoTo",
    modelName: ''
  }, {
    type: 'date',
    display: true,
    field: 'DocDateFrom',
    title: 'REPORTS.DOCDATEFROM',
    lookupKey: "",
    modelName: ''
  }, {
    type: 'date',
    display: true,
    field: 'DocDateTo',
    title: 'REPORTS.DOCDATETO',
    lookupKey: "",
    modelName: ''
  }];
  static #_3 = this.garrTransactionType = ['A-Adjustment', 'C-Credit Memo', 'D-Debit Memo', 'E-Cost Adjustment', 'G-Damaged', 'M-Move Out', 'P-Purchase / Production Receipt', 'R-Receipt of Transfer', 'S-Sale', 'T-Transfer Going Out', 'N-Notification of Receipt', 'U-Transfer Coming In', 'B-Std.Cost Modification', 'V-Internal Move', 'Z-Batch Reversal'];
}
class TranHistoryConstants {
  static #_ = this.garrTranHistoryLookupFieldsMap = [{
    field: 'ItemKeyFrom',
    desField: 'ItemKeyFromDes',
    lookupKey: "ItemFrom",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.ItemKeyFrom,
    title: 'ITEMKEY',
    valueType: "from",
    isDescription: true,
    display: true
  }, {
    field: 'ItemKeyTo',
    desField: 'ItemKeyToDes',
    lookupKey: "ItemTo",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.ItemKeyTo,
    title: 'ITEMKEY',
    valueType: "to",
    isDescription: true,
    display: true
  }, {
    field: 'LocationFrom',
    desField: 'LocationFromDes',
    lookupKey: "LocationFrom",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.LocationFrom,
    title: 'LOCATION',
    valueType: "from",
    isDescription: true,
    display: true
  }, {
    field: 'LocationTo',
    desField: 'LocationToDes',
    lookupKey: "LocationTo",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.LocationTo,
    title: 'LOCATION',
    valueType: "to",
    isDescription: true,
    display: true
  }, {
    field: 'TransSubTypFrom',
    desField: 'TransSubTypFromDes',
    lookupKey: "TransactionSubTypeFrom",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.TransSubTypFrom,
    title: 'TRANSACTIONSUBTYPE',
    valueType: "from",
    isDescription: false,
    display: true
  }, {
    field: 'TransSubTypTo',
    desField: 'TransSubTypToDes',
    lookupKey: "TransactionSubTypeTo",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.TransSubTypTo,
    title: 'TRANSACTIONSUBTYPE',
    valueType: "to",
    isDescription: false,
    display: true
  }];
  static #_2 = this.garrTransactionType = ['A-Adjustment', 'B-Std.Cost Modification', 'C-Credit Memo', 'D-Debit Memo', 'E-Cost Adjustment', 'G-Damaged', 'I-Inventory Commitment', 'M-Move Out', 'N-Notification of Receipt', 'O-On Order', 'P-Purchase/Production Receipt', 'R-Receipt of Transfer', 'S-Sale', 'T-Transfer Going Out', 'U-Transfer Coming In', 'V-Internal Move', 'X-Commitment To Production', 'Z-Batch Reversal'];
}
class LotExpirationConstants {
  static #_ = this.garrLotExpirationLookupFieldsMap = [{
    field: 'ItemFrom',
    desField: 'ItemFromDes',
    lookupKey: "ItemFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemFrom,
    title: 'ITEMKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemTo',
    desField: 'ItemToDes',
    lookupKey: "ItemTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.ItemTo,
    title: 'ITEMKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'LocationFrom',
    desField: 'LocationFromDes',
    lookupKey: "LocationFrom",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.LocationFrom,
    title: 'LOCATION',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'LocationTo',
    desField: 'LocationToDes',
    lookupKey: "LocationTo",
    modelName: _models_transaction_activity_report_model__WEBPACK_IMPORTED_MODULE_1__.TranRptParameterMap.LocationTo,
    title: 'LOCATION',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }];
}
class AgingReportConstants {
  static #_ = this.garrAginReportLookupFieldsMap = [{
    field: 'ProductKeyFrom',
    desField: 'ProductKeyFromDes',
    lookupKey: "ProductKeyFrom",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.ProductKeyFrom,
    title: 'PRODUCTKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ProductKeyTo',
    desField: 'ProductKeyToDes',
    lookupKey: "ProductKeyTo",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.ProductKeyTo,
    title: 'PRODUCTKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemKeyFrom',
    desField: 'ItemKeyFromDes',
    lookupKey: "ItemKeyFrom",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.ItemKeyFrom,
    title: 'ITEMKEY',
    valueType: "from",
    isDescription: true,
    display: true
  }, {
    field: 'ItemKeyTo',
    desField: 'ItemKeyToDes',
    lookupKey: "ItemKeyTo",
    modelName: _models_transaction_history_report_model__WEBPACK_IMPORTED_MODULE_2__.TranHisRptParameterMap.ItemKeyTo,
    title: 'ITEMKEY',
    valueType: "to",
    isDescription: true,
    display: true
  }, {
    field: 'LocationFrom',
    desField: 'LocationFromDes',
    lookupKey: "LocationFrom",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.LocationFrom,
    title: 'LOCATION',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'LocationTo',
    desField: 'LocationToDes',
    lookupKey: "LocationTo",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.LocationTo,
    title: 'LOCATION',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemClassFrom',
    desField: 'ItemClassFromDes',
    lookupKey: "ItemClassFrom",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.ItemClassFrom,
    title: 'ITEMCLASSKEY',
    valueType: "from",
    display: true,
    viewOn: "tabOne"
  }, {
    field: 'ItemClassTo',
    desField: 'ItemClassToDes',
    lookupKey: "ItemClassTo",
    modelName: _models_aging_report_model__WEBPACK_IMPORTED_MODULE_0__.BmeHashMapCertificate.ItemClassTo,
    title: 'ITEMCLASSKEY',
    valueType: "to",
    display: true,
    viewOn: "tabOne"
  }];
}

/***/ }),

/***/ 5529:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/en.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    'ABC': {
      'LISTTITLE': 'ABC',
      'CommonBasicDetails': "Basic Details"
    },
    'LOCATION': {
      "LOCATION": "Location Key",
      "DESCRIPTION": "Description",
      "COMPANY_NAM": "Company Name",
      "CITY": "City",
      "STATE": "State",
      "COUNTRY": "Country",
      "ACTION": "Action"
    },
    REPORTS: {
      PARAMETER: "Parameter",
      DES: "Description",
      ITEMMASTERREPORT: "Item Master Report",
      TRANACTIVITYREPORT: "Transaction Activity Report",
      ITEMDETAILS: "Item Details",
      APPLYDATES: "Apply Dates",
      ACCRANGE: "Accounts Range",
      FROM: "From",
      TO: "To",
      ITEMCLASSKEY: "Item Class Key",
      ITEMKEY: "Item Key",
      LOCATION: "Location",
      ITEMTYPE: "Item Type",
      TRANSACTIONSUBTYPE: "Transaction Sub Type",
      ITEMSUBTYPE: "Item Sub Type",
      ABCKEY: "ABC Key",
      SHOEOPENCLOSEBLANCE: "Show Opening/Closing Balance",
      APPLYDATE: "Apply Date",
      PRODUCT: "Product",
      ITEMSTATUS: "Item Status",
      ACTIVE: "Active",
      OBSOLETE: "Obsolete",
      NOPURCHASEDISCONTINUED: "No New Purchase/Discontinued",
      DEACTIVATED: "Deactivated",
      COMMODITY: "Commodity",
      INVCTRLAC: "Inventory Control A/C",
      INVOFFSETAC: "Inventory Offset A/C",
      SELTRANTYPE: "Select Transaction Type",
      TRANTYPE: "Transaction Type",
      DOCNOFROM: "Doc.No From",
      DOCNOTO: "Doc.No To",
      DOCDATEFROM: "Doc.Date From",
      DOCDATETO: "Doc.Date To",
      VALMSG: "From date can not be greater than To date.",
      VALMSG2: "To value cannot be less than from value",
      PRMEMPTY: "Parameter cannot be empty",
      DELMSG: "Deleted Successfully.",
      INVPARAM: "Invalid Parameter",
      SELECTALL: "Select All",
      UNSELECTALL: "Unselect All",
      SELECT: "Select",
      TRANHISREPORT: "Transaction History Report",
      SELRPTPRM: "Select Report Parameter",
      PRODUCTKEYFROM: 'Product Key From',
      PRODUCTKEYTO: 'Product Key To',
      ITEMKEYFROM: 'Item Key From',
      ITEMKEYTO: 'Item Key To',
      PRODUCTKEY: 'Product Key',
      CUST_AGE_BRACKETS: "Age Brackets",
      CUST_AGE_BRACKETS_DESC: "Description",
      CUST_AGE_BRACKETS_AMT: "Amount",
      ITEM: 'Item',
      AGEBRKVALUEMSG: "Age Bracket From cannot be greater than or equal to Age Bracket To",
      AGEBRKVALIDATE: "Please enter valid data in Age Bracket"
    },
    VALUATIONREPORT: {
      TITLE: "Inventory Valuation Report",
      ITEMFROM: "Item From",
      ITEMTO: "Item To",
      LOCATIONFROM: "Location From",
      LOCATIONTO: "Location To",
      ITEMCLASS: "Item Class",
      ITEMTYPE: "Item Type",
      ABC: "ABC",
      PRODUCT: "Product",
      COMMODITY: "Commodity",
      DATE: "Date",
      VALUATIONBASIS: "Valuation Basis",
      PARAMETER: "Parameter",
      REPORTTYPE: "Report Type",
      UOM: "Unit of Measure",
      SUPPRESS: "Suppress if zero onhand",
      REPORTPATH: "Report Path",
      MSG: {
        VALID: 'Please Enter valid data in Age Bracket.',
        ENTERUNIT: 'Please select Alternate Unit'
      }
    },
    AUDITHISTORY: {
      TITLE: "Audit History Dashboard",
      FROMDATE: "From Date",
      TODATE: "To Date",
      SCREENNAME: "Screen Name",
      MODULENAME: "Module Name",
      GO: "Go",
      SELECTSCREEN: "Enter Module Name",
      SELECTMODULE: "Enter Screen Name",
      VALMSG: "From date can not be greater than To date.",
      VALMSG2: "To value cannot be less than from value",
      COMPARE: "Compare"
    }
  }
};

/***/ }),

/***/ 43878:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/es.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    'ABC': {
      'LISTTITLE': 'ABC',
      'CommonBasicDetails': "Detalles Básicos"
    },
    'LOCATION': {
      "LOCATION": "Clave de Ubicación",
      "DESCRIPTION": "Descripción",
      "COMPANY_NAM": "Nombre de la Empresa",
      "CITY": "Ciudad",
      "STATE": "Estado",
      "COUNTRY": "País",
      "ACTION": "Acción"
    },
    REPORTS: {
      PARAMETER: "Parámetro",
      DES: "Descripción",
      ITEMMASTERREPORT: "Informe Maestro de Artículos",
      TRANACTIVITYREPORT: "Informe de Actividad de Transacciones",
      ITEMDETAILS: "Detalles del Artículo",
      APPLYDATES: "Aplicar Fechas",
      ACCRANGE: "Rango de Cuentas",
      FROM: "Desde",
      TO: "Hasta",
      ITEMCLASSKEY: "Clave de Clase de Artículo",
      ITEMKEY: "Clave del Artículo",
      LOCATION: "Ubicación",
      ITEMTYPE: "Tipo de Artículo",
      TRANSACTIONSUBTYPE: "Subtipo de Transacción",
      ITEMSUBTYPE: "Subtipo de Artículo",
      ABCKEY: "Clave de ABC",
      SHOEOPENCLOSEBLANCE: "Mostrar Saldo de Apertura/Cierre",
      APPLYDATE: "Aplicar Fecha",
      PRODUCT: "Producto",
      ITEMSTATUS: "Estado del Artículo",
      ACTIVE: "Activo",
      OBSOLETE: "Obsoleto",
      NOPURCHASEDISCONTINUED: "Sin Nueva Compra/Descontinuado",
      DEACTIVATED: "Desactivado",
      COMMODITY: "Comodidad",
      INVCTRLAC: "Cuenta de Control de Inventario",
      INVOFFSETAC: "Cuenta de Compensación de Inventario",
      SELTRANTYPE: "Seleccionar Tipo de Transacción",
      TRANTYPE: "Tipo de Transacción",
      DOCNOFROM: "Nro. Doc. Desde",
      DOCNOTO: "Nro. Doc. Hasta",
      DOCDATEFROM: "Fecha de Doc. Desde",
      DOCDATETO: "Fecha de Doc. Hasta",
      VALMSG: "La fecha de inicio no puede ser mayor que la fecha de fin.",
      VALMSG2: "El valor de 'Hasta' no puede ser menor que el valor de 'Desde'.",
      PRMEMPTY: "El parámetro no puede estar vacío",
      DELMSG: "Eliminado exitosamente.",
      INVPARAM: "Parámetro no válido",
      SELECTALL: "Seleccionar Todo",
      UNSELECTALL: "Deseleccionar Todo",
      SELECT: "Seleccionar",
      TRANHISREPORT: "Informe de Historial de Transacciones",
      SELRPTPRM: "Seleccionar Parámetro de Informe",
      PRODUCTKEYFROM: 'Clave del Producto Desde',
      PRODUCTKEYTO: 'Clave del Producto Hasta',
      ITEMKEYFROM: 'Clave del Artículo Desde',
      ITEMKEYTO: 'Clave del Artículo Hasta',
      PRODUCTKEY: 'Clave del Producto',
      CUST_AGE_BRACKETS: "Intervalos de Edad del Cliente",
      CUST_AGE_BRACKETS_DESC: "Descripción",
      CUST_AGE_BRACKETS_AMT: "Monto",
      ITEM: 'Artículo',
      AGEBRKVALUEMSG: "La Edad del Intervalo 'Desde' no puede ser mayor o igual que la Edad del Intervalo 'Hasta'",
      AGEBRKVALIDATE: "Ingrese datos válidos en el Intervalo de Edad"
    },
    VALUATIONREPORT: {
      TITLE: "Informe de Valoración de Inventario",
      ITEMFROM: "Artículo Desde",
      ITEMTO: "Artículo Hasta",
      LOCATIONFROM: "Ubicación Desde",
      LOCATIONTO: "Ubicación Hasta",
      ITEMCLASS: "Clase de Artículo",
      ITEMTYPE: "Tipo de Artículo",
      ABC: "ABC",
      PRODUCT: "Producto",
      COMMODITY: "Comodidad",
      DATE: "Fecha",
      VALUATIONBASIS: "Base de Valoración",
      PARAMETER: "Parámetro",
      REPORTTYPE: "Tipo de Informe",
      UOM: "Unidad de Medida",
      SUPPRESS: "Suprimir si el inventario es cero",
      REPORTPATH: "Ruta del Informe",
      MSG: {
        VALID: 'Ingrese datos válidos en el Intervalo de Edad.',
        ENTERUNIT: 'Seleccione la Unidad Alternativa'
      }
    },
    AUDITHISTORY: {
      TITLE: "Panel de Historial de Auditoría",
      FROMDATE: "Desde Fecha",
      TODATE: "Hasta Fecha",
      SCREENNAME: "Nombre de Pantalla",
      MODULENAME: "Nombre de Módulo",
      GO: "Ir",
      SELECTSCREEN: "Ingrese el Nombre del Módulo",
      SELECTMODULE: "Ingrese el Nombre de la Pantalla",
      VALMSG: "La fecha de inicio no puede ser mayor que la fecha de fin.",
      VALMSG2: "El valor de 'Hasta' no puede ser menor que el valor de 'Desde'.",
      COMPARE: "Comparar"
    }
  }
};

/***/ }),

/***/ 34743:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/fr.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    'ABC': {
      'LISTTITLE': 'ABC',
      'CommonBasicDetails': "Détails de Base"
    },
    'LOCATION': {
      "LOCATION": "Clé de l'Emplacement",
      "DESCRIPTION": "Description",
      "COMPANY_NAM": "Nom de l'Entreprise",
      "CITY": "Ville",
      "STATE": "État",
      "COUNTRY": "Pays",
      "ACTION": "Action"
    },
    'REPORTS': {
      "PARAMETER": "Paramètre",
      "DES": "Description",
      "ITEMMASTERREPORT": "Rapport sur le Maître des Articles",
      "TRANACTIVITYREPORT": "Rapport d'Activité des Transactions",
      "ITEMDETAILS": "Détails de l'Article",
      "APPLYDATES": "Appliquer les Dates",
      "ACCRANGE": "Plage de Comptes",
      "FROM": "De",
      "TO": "À",
      "ITEMCLASSKEY": "Clé de la Classe d'Article",
      "ITEMKEY": "Clé de l'Article",
      "LOCATION": "Emplacement",
      "ITEMTYPE": "Type d'Article",
      "TRANSACTIONSUBTYPE": "Sous-Type de Transaction",
      "ITEMSUBTYPE": "Sous-Type d'Article",
      "ABCKEY": "Clé ABC",
      "SHOEOPENCLOSEBLANCE": "Afficher le Solde d'Ouverture/Fermeture",
      "APPLYDATE": "Appliquer la Date",
      "PRODUCT": "Produit",
      "ITEMSTATUS": "Statut de l'Article",
      "ACTIVE": "Actif",
      "OBSOLETE": "Obsolète",
      "NOPURCHASEDISCONTINUED": "Aucun Nouvel Achat/Discontinué",
      "DEACTIVATED": "Désactivé",
      "COMMODITY": "Marchandise",
      "INVCTRLAC": "Compte de Contrôle des Stocks",
      "INVOFFSETAC": "Compte de Compensation des Stocks",
      "SELTRANTYPE": "Sélectionner le Type de Transaction",
      "TRANTYPE": "Type de Transaction",
      "DOCNOFROM": "Doc. N° De",
      "DOCNOTO": "Doc. N° À",
      "DOCDATEFROM": "Date du Doc. De",
      "DOCDATETO": "Date du Doc. À",
      "VALMSG": "La date de début ne peut pas être supérieure à la date de fin.",
      "VALMSG2": "La valeur de fin ne peut pas être inférieure à la valeur de début",
      "PRMEMPTY": "Le paramètre ne peut pas être vide",
      "DELMSG": "Supprimé avec succès.",
      "INVPARAM": "Paramètre invalide",
      "SELECTALL": "Tout Sélectionner",
      "UNSELECTALL": "Tout Désélectionner",
      "SELECT": "Sélectionner",
      "TRANHISREPORT": "Rapport d'Histoire des Transactions",
      "SELRPTPRM": "Sélectionner le Paramètre du Rapport",
      "PRODUCTKEYFROM": 'Clé du Produit De',
      "PRODUCTKEYTO": 'Clé du Produit À',
      "ITEMKEYFROM": 'Clé de l\'Article De',
      "ITEMKEYTO": 'Clé de l\'Article À',
      "PRODUCTKEY": 'Clé du Produit',
      "CUST_AGE_BRACKETS": "Tranches d'Âge Client",
      "CUST_AGE_BRACKETS_DESC": "Description",
      "CUST_AGE_BRACKETS_AMT": "Montant",
      "ITEM": 'Article',
      "AGEBRKVALUEMSG": "La Tranche d'Âge De ne peut pas être supérieure ou égale à la Tranche d'Âge À",
      "AGEBRKVALIDATE": "Veuillez entrer des données valides dans la Tranche d'Âge"
    },
    'VALUATIONREPORT': {
      "TITLE": "Rapport d'Évaluation des Stocks",
      "ITEMFROM": "Article De",
      "ITEMTO": "Article À",
      "LOCATIONFROM": "Emplacement De",
      "LOCATIONTO": "Emplacement À",
      "ITEMCLASS": "Classe d'Article",
      "ITEMTYPE": "Type d'Article",
      "ABC": "ABC",
      "PRODUCT": "Produit",
      "COMMODITY": "Marchandise",
      "DATE": "Date",
      "VALUATIONBASIS": "Base d'Évaluation",
      "PARAMETER": "Paramètre",
      "REPORTTYPE": "Type de Rapport",
      "UOM": "Unité de Mesure",
      "SUPPRESS": "Supprimer si zéro en stock",
      "REPORTPATH": "Chemin du Rapport",
      "MSG": {
        "VALID": 'Veuillez entrer des données valides dans la Tranche d\'Âge.',
        "ENTERUNIT": 'Veuillez sélectionner l\'Unité Alternative.'
      }
    },
    'AUDITHISTORY': {
      "TITLE": "Tableau de Bord de l'Histoire d'Audit",
      "FROMDATE": "De la Date",
      "TODATE": "À la Date",
      "SCREENNAME": "Nom de l'Écran",
      "MODULENAME": "Nom du Module",
      "GO": "Aller",
      "SELECTSCREEN": "Entrer le Nom du Module",
      "SELECTMODULE": "Entrer le Nom de l'Écran",
      "VALMSG": "La date de début ne peut pas être supérieure à la date de fin.",
      "VALMSG2": "La valeur de fin ne peut pas être inférieure à la valeur de début",
      "COMPARE": "Comparer"
    }
  }
};

/***/ }),

/***/ 42444:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/hi.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'hi',
  data: {
    'ABC': {
      'LISTTITLE': 'एबीसी',
      'CommonBasicDetails': "Basic Details"
    },
    'LOCATION': {
      "LOCATION": "स्थान कुंजी",
      "DESCRIPTION": "विवरण",
      "COMPANY_NAM": "कंपनी का नाम",
      "CITY": "शहर",
      "STATE": "राज्य",
      "COUNTRY": "देश",
      "ACTION": "कार्य"
    }
  }
};

/***/ }),

/***/ 79297:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/pt.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    'ABC': {
      'LISTTITLE': 'ABC',
      'CommonBasicDetails': "Detalhes Básicos Comuns"
    },
    'LOCATION': {
      "LOCATION": "Chave de Localização",
      "DESCRIPTION": "Descrição",
      "COMPANY_NAM": "Nome da Empresa",
      "CITY": "Cidade",
      "STATE": "Estado",
      "COUNTRY": "País",
      "ACTION": "Ação"
    },
    REPORTS: {
      PARAMETER: "Parâmetro",
      DES: "Descrição",
      ITEMMASTERREPORT: "Relatório de Mestre de Itens",
      TRANACTIVITYREPORT: "Relatório de Atividade de Transação",
      ITEMDETAILS: "Detalhes do Item",
      APPLYDATES: "Aplicar Datas",
      ACCRANGE: "Intervalo de Contas",
      FROM: "De",
      TO: "Para",
      ITEMCLASSKEY: "Chave da Classe do Item",
      ITEMKEY: "Chave do Item",
      LOCATION: "Localização",
      ITEMTYPE: "Tipo de Item",
      TRANSACTIONSUBTYPE: "Subtipo de Transação",
      ITEMSUBTYPE: "Subtipo de Item",
      ABCKEY: "Chave ABC",
      SHOEOPENCLOSEBLANCE: "Mostrar Saldo Inicial/Final",
      APPLYDATE: "Aplicar Data",
      PRODUCT: "Produto",
      ITEMSTATUS: "Status do Item",
      ACTIVE: "Ativo",
      OBSOLETE: "Obsoleto",
      NOPURCHASEDISCONTINUED: "Sem Novas Compras/Descontinuado",
      DEACTIVATED: "Desativado",
      COMMODITY: "Commodity",
      INVCTRLAC: "Conta de Controle de Estoque",
      INVOFFSETAC: "Conta de Compensação de Estoque",
      SELTRANTYPE: "Selecionar Tipo de Transação",
      TRANTYPE: "Tipo de Transação",
      DOCNOFROM: "No. Doc De",
      DOCNOTO: "No. Doc Até",
      DOCDATEFROM: "Data Doc De",
      DOCDATETO: "Data Doc Até",
      VALMSG: "A data inicial não pode ser maior que a data final.",
      VALMSG2: "O valor final não pode ser menor que o valor inicial.",
      PRMEMPTY: "O parâmetro não pode ficar vazio",
      DELMSG: "Excluído com sucesso.",
      INVPARAM: "Parâmetro inválido",
      SELECTALL: "Selecionar Todos",
      UNSELECTALL: "Desselecionar Todos",
      SELECT: "Selecionar",
      TRANHISREPORT: "Relatório de Histórico de Transações",
      SELRPTPRM: "Selecionar Parâmetro de Relatório",
      PRODUCTKEYFROM: 'Chave do Produto De',
      PRODUCTKEYTO: 'Chave do Produto Até',
      ITEMKEYFROM: 'Chave do Item De',
      ITEMKEYTO: 'Chave do Item Até',
      PRODUCTKEY: 'Chave do Produto',
      CUST_AGE_BRACKETS: "Faixas Etárias do Cliente",
      CUST_AGE_BRACKETS_DESC: "Descrição",
      CUST_AGE_BRACKETS_AMT: "Valor",
      ITEM: 'Item',
      AGEBRKVALUEMSG: "A Faixa Etária De não pode ser maior ou igual à Faixa Etária Até",
      AGEBRKVALIDATE: "Por favor, insira dados válidos na Faixa Etária"
    },
    VALUATIONREPORT: {
      TITLE: "Relatório de Avaliação de Inventário",
      ITEMFROM: "Item De",
      ITEMTO: "Item Até",
      LOCATIONFROM: "Localização De",
      LOCATIONTO: "Localização Até",
      ITEMCLASS: "Classe do Item",
      ITEMTYPE: "Tipo de Item",
      ABC: "ABC",
      PRODUCT: "Produto",
      COMMODITY: "Commodity",
      DATE: "Data",
      VALUATIONBASIS: "Base de Avaliação",
      PARAMETER: "Parâmetro",
      REPORTTYPE: "Tipo de Relatório",
      UOM: "Unidade de Medida",
      SUPPRESS: "Suprimir se zero em estoque",
      REPORTPATH: "Caminho do Relatório",
      MSG: {
        VALID: 'Por favor, insira dados válidos na Faixa Etária.',
        ENTERUNIT: 'Por favor, selecione Unidade Alternativa'
      }
    },
    AUDITHISTORY: {
      TITLE: "Painel de Histórico de Auditoria",
      FROMDATE: "De Data",
      TODATE: "Até Data",
      SCREENNAME: "Nome da Tela",
      MODULENAME: "Nome do Módulo",
      GO: "Ir",
      SELECTSCREEN: "Informe o Nome do Módulo",
      SELECTMODULE: "Informe o Nome da Tela",
      VALMSG: "A data inicial não pode ser maior que a data final.",
      VALMSG2: "O valor final não pode ser menor que o valor inicial",
      COMPARE: "Comparar"
    }
  }
};

/***/ }),

/***/ 38983:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/vi.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    'ABC': {
      "LISTTITLE": "ABC",
      "CommonBasicDetails": "Chi Tiết Cơ Bản"
    },
    'LOCATION': {
      "LOCATION": "Khóa Vị Trí",
      "DESCRIPTION": "Mô Tả",
      "COMPANY_NAM": "Tên Công Ty",
      "CITY": "Thành Phố",
      "STATE": "Bang",
      "COUNTRY": "Quốc Gia",
      "ACTION": "Hành Động"
    },
    REPORTS: {
      "PARAMETER": "Tham số",
      "DES": "Mô tả",
      "ITEMMASTERREPORT": "Báo cáo Mục hàng chính",
      "TRANACTIVITYREPORT": "Báo cáo Hoạt động Giao dịch",
      "ITEMDETAILS": "Chi tiết Mục hàng",
      "APPLYDATES": "Áp dụng Ngày",
      "ACCRANGE": "Phạm vi Tài khoản",
      "FROM": "Từ",
      "TO": "Đến",
      "ITEMCLASSKEY": "Khóa Lớp Mục",
      "ITEMKEY": "Khóa Mục",
      "LOCATION": "Vị trí",
      "ITEMTYPE": "Loại Mục",
      "TRANSACTIONSUBTYPE": "Loại Giao dịch phụ",
      "ITEMSUBTYPE": "Loại Mục phụ",
      "ABCKEY": "Khóa ABC",
      "SHOEOPENCLOSEBLANCE": "Hiển thị Số dư Mở/Đóng",
      "APPLYDATE": "Ngày Áp dụng",
      "PRODUCT": "Sản phẩm",
      "ITEMSTATUS": "Trạng thái Mục",
      "ACTIVE": "Hoạt động",
      "OBSOLETE": "Lỗi thời",
      "NOPURCHASEDISCONTINUED": "Không mua mới/Ngừng sản xuất",
      "DEACTIVATED": "Ngưng hoạt động",
      "COMMODITY": "Hàng hóa",
      "INVCTRLAC": "Tài khoản Kiểm soát Hàng tồn kho",
      "INVOFFSETAC": "Tài khoản Điều chỉnh Hàng tồn kho",
      "SELTRANTYPE": "Chọn Loại Giao dịch",
      "TRANTYPE": "Loại Giao dịch",
      "DOCNOFROM": "Số Chứng từ Từ",
      "DOCNOTO": "Số Chứng từ Đến",
      "DOCDATEFROM": "Ngày Chứng từ Từ",
      "DOCDATETO": "Ngày Chứng từ Đến",
      "VALMSG": "Từ ngày không thể lớn hơn Đến ngày.",
      "VALMSG2": "Giá trị Đến không thể nhỏ hơn giá trị Từ",
      "PRMEMPTY": "Tham số không thể để trống",
      "DELMSG": "Xóa thành công.",
      "INVPARAM": "Tham số không hợp lệ",
      "SELECTALL": "Chọn tất cả",
      "UNSELECTALL": "Bỏ chọn tất cả",
      "SELECT": "Chọn",
      "TRANHISREPORT": "Báo cáo Lịch sử Giao dịch",
      "SELRPTPRM": "Chọn Tham số Báo cáo",
      "PRODUCTKEYFROM": 'Khóa Sản phẩm Từ',
      "PRODUCTKEYTO": 'Khóa Sản phẩm Đến',
      "ITEMKEYFROM": 'Khóa Mục Từ',
      "ITEMKEYTO": 'Khóa Mục Đến',
      "PRODUCTKEY": 'Khóa Sản phẩm',
      "CUST_AGE_BRACKETS": "Khoảng tuổi Khách hàng",
      "CUST_AGE_BRACKETS_DESC": "Mô tả",
      "CUST_AGE_BRACKETS_AMT": "Số tiền",
      "ITEM": 'Mục hàng',
      "AGEBRKVALUEMSG": "Khoảng tuổi Từ không được lớn hơn hoặc bằng Khoảng tuổi Đến",
      "AGEBRKVALIDATE": "Vui lòng nhập dữ liệu hợp lệ cho Khoảng tuổi"
    },
    VALUATIONREPORT: {
      "TITLE": "Báo cáo Định giá Tồn kho",
      "ITEMFROM": "Mục từ",
      "ITEMTO": "Mục đến",
      "LOCATIONFROM": "Vị trí từ",
      "LOCATIONTO": "Vị trí đến",
      "ITEMCLASS": "Lớp Mục",
      "ITEMTYPE": "Loại Mục",
      "ABC": "ABC",
      "PRODUCT": "Sản phẩm",
      "COMMODITY": "Hàng hóa",
      "DATE": "Ngày",
      "VALUATIONBASIS": "Cơ sở Định giá",
      "PARAMETER": "Tham số",
      "REPORTTYPE": "Loại Báo cáo",
      "UOM": "Đơn vị Đo lường",
      "SUPPRESS": "Ẩn nếu tồn kho bằng không",
      "REPORTPATH": "Đường dẫn Báo cáo",
      "MSG": {
        "VALID": "Vui lòng nhập dữ liệu hợp lệ cho Khoảng tuổi.",
        "ENTERUNIT": "Vui lòng chọn Đơn vị Thay thế."
      }
    },
    AUDITHISTORY: {
      "TITLE": "Bảng điều khiển Lịch sử Kiểm toán",
      "FROMDATE": "Từ Ngày",
      "TODATE": "Đến Ngày",
      "SCREENNAME": "Tên Màn hình",
      "MODULENAME": "Tên Module",
      "GO": "Đi",
      "SELECTSCREEN": "Nhập Tên Module",
      "SELECTMODULE": "Nhập Tên Màn hình",
      "VALMSG": "Từ ngày không thể lớn hơn Đến ngày.",
      "VALMSG2": "Giá trị Đến không thể nhỏ hơn giá trị Từ",
      "COMPARE": "So sánh"
    }
  }
};

/***/ }),

/***/ 43492:
/*!***********************************************!*\
  !*** ./src/app/main/common-report/i18n/zh.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    "ABC": {
      "LISTTITLE": "ABC",
      "CommonBasicDetails": "基本详情"
    },
    "LOCATION": {
      "LOCATION": "位置键",
      "DESCRIPTION": "描述",
      "COMPANY_NAM": "公司名称",
      "CITY": "城市",
      "STATE": "州",
      "COUNTRY": "国家",
      "ACTION": "操作"
    },
    "REPORTS": {
      "PARAMETER": "参数",
      "DES": "描述",
      "ITEMMASTERREPORT": "物料主数据报告",
      "TRANACTIVITYREPORT": "交易活动报告",
      "ITEMDETAILS": "物料详情",
      "APPLYDATES": "应用日期",
      "ACCRANGE": "账户范围",
      "FROM": "从",
      "TO": "至",
      "ITEMCLASSKEY": "物料类别键",
      "ITEMKEY": "物料键",
      "LOCATION": "位置",
      "ITEMTYPE": "物料类型",
      "TRANSACTIONSUBTYPE": "交易子类型",
      "ITEMSUBTYPE": "物料子类型",
      "ABCKEY": "ABC键",
      "SHOEOPENCLOSEBLANCE": "显示期初/期末余额",
      "APPLYDATE": "应用日期",
      "PRODUCT": "产品",
      "ITEMSTATUS": "物料状态",
      "ACTIVE": "活动的",
      "OBSOLETE": "废弃的",
      "NOPURCHASEDISCONTINUED": "无新采购/停产",
      "DEACTIVATED": "停用的",
      "COMMODITY": "商品",
      "INVCTRLAC": "库存控制账户",
      "INVOFFSETAC": "库存偏移账户",
      "SELTRANTYPE": "选择交易类型",
      "TRANTYPE": "交易类型",
      "DOCNOFROM": "文档号从",
      "DOCNOTO": "文档号至",
      "DOCDATEFROM": "文档日期从",
      "DOCDATETO": "文档日期至",
      "VALMSG": "从日期不能大于至日期。",
      "VALMSG2": "至值不能小于从值",
      "PRMEMPTY": "参数不能为空",
      "DELMSG": "删除成功。",
      "INVPARAM": "无效的参数",
      "SELECTALL": "全选",
      "UNSELECTALL": "取消全选",
      "SELECT": "选择",
      "TRANHISREPORT": "交易历史报告",
      "SELRPTPRM": "选择报告参数",
      "PRODUCTKEYFROM": "产品键从",
      "PRODUCTKEYTO": "产品键至",
      "ITEMKEYFROM": "物料键从",
      "ITEMKEYTO": "物料键至",
      "PRODUCTKEY": "产品键",
      "CUST_AGE_BRACKETS": "客户年龄分档",
      "CUST_AGE_BRACKETS_DESC": "描述",
      "CUST_AGE_BRACKETS_AMT": "金额",
      "ITEM": "物料",
      "AGEBRKVALUEMSG": "年龄分档从不能大于或等于年龄分档至",
      "AGEBRKVALIDATE": "请在年龄分档中输入有效数据"
    },
    "VALUATIONREPORT": {
      "TITLE": "库存估值报告",
      "ITEMFROM": "物料从",
      "ITEMTO": "物料至",
      "LOCATIONFROM": "位置从",
      "LOCATIONTO": "位置至",
      "ITEMCLASS": "物料类别",
      "ITEMTYPE": "物料类型",
      "ABC": "ABC",
      "PRODUCT": "产品",
      "COMMODITY": "商品",
      "DATE": "日期",
      "VALUATIONBASIS": "估值基准",
      "PARAMETER": "参数",
      "REPORTTYPE": "报告类型",
      "UOM": "计量单位",
      "SUPPRESS": "如果库存为零则抑制",
      "REPORTPATH": "报告路径",
      "MSG": {
        "VALID": "请输入有效的年龄分档数据。",
        "ENTERUNIT": "请选择备用单位"
      }
    }
  },
  "AUDITHISTORY": {
    "TITLE": "审计历史仪表板",
    "FROMDATE": "开始日期",
    "TODATE": "结束日期",
    "SCREENNAME": "屏幕名称",
    "MODULENAME": "模块名称",
    "GO": "开始",
    "SELECTSCREEN": "输入模块名称",
    "SELECTMODULE": "输入屏幕名称",
    "VALMSG": "开始日期不能大于结束日期。",
    "VALMSG2": "结束值不能小于开始值",
    "COMPARE": "比较"
  }
};

/***/ }),

/***/ 72196:
/*!*****************************************************************!*\
  !*** ./src/app/main/common-report/models/aging-report-model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgingReportModel: () => (/* binding */ AgingReportModel),
/* harmony export */   BmeHashMapCertificate: () => (/* binding */ BmeHashMapCertificate),
/* harmony export */   ControlMap: () => (/* binding */ ControlMap)
/* harmony export */ });
class AgingReportModel {
  constructor() {
    this.ReportName = 'Inventory Aging Report';
    this.ProductKeyFrom = '';
    this.ProductKeyTo = '';
    this.ItemKeyFrom = '';
    this.ItemKeyTo = '';
    this.LocationFrom = '';
    this.LocationTo = '';
    this.ItemClassFrom = '';
    this.ItemClassTo = '';
    this.AgeFrom1 = 0;
    this.AgeTo1 = 30;
    this.AgeFrom2 = 31;
    this.AgeTo2 = 60;
    this.AgeFrom3 = 61;
    this.AgeTo3 = 90;
    this.AgeFrom4 = 91;
    this.AgeTo4 = '';
    this.ListingFlag = false;
    this.ListingVariable = '';
    this.ProductKeyFromDes = '';
    this.ProductKeyToDes = '';
    this.ItemKeyFromDes = '';
    this.ItemKeyToDes = '';
    this.LocationFromDes = '';
    this.LocationToDes = '';
    this.ItemClassFromDes = '';
    this.ItemClassToDes = '';
  }
}
let BmeHashMapCertificate = {
  ProductKeyFrom: 'txtFrom(12)',
  ProductKeyTo: 'txtTo(12)',
  ItemKeyFrom: 'txtFrom(13)',
  ItemKeyTo: 'txtTo(13)',
  LocationFrom: 'txtFrom(14)',
  LocationTo: 'txtTo(14)',
  ItemClassFrom: 'txtFrom(15)',
  ItemClassTo: 'txtTo(15)',
  AgeFrom1: 'PVNumAge(0)',
  AgeTo1: 'PVNumAge(1)',
  AgeFrom2: 'PVNumAge(2)',
  AgeTo2: 'PVNumAge(3)',
  AgeFrom3: 'PVNumAge(4)',
  AgeTo3: 'PVNumAge(5)',
  AgeFrom4: 'PVNumAge(6)',
  AgeTo4: 'PVNumAge(7)',
  msProductDescFrom: 'txtFromDesc(12)',
  msProductDescTo: 'txtToDesc(12)',
  msItemKeyDescFrom: 'txtFromDesc(13)',
  msItemKeyDescTo: 'txtToDesc(13)',
  msLocationDescFrom: 'txtFromDesc(14)',
  msLocationDescTo: 'txtToDesc(14)',
  msItemClassDescFrom: 'txtFromDesc(15)',
  msItemClassDescTo: 'txtToDesc(15)'
};
let ControlMap = {
  ProductKeyFrom: "ProductKeyTo",
  ProductKeyTo: "ProductKeyFrom",
  ItemKeyFrom: "ItemKeyTo",
  ItemKeyTo: "ItemKeyFrom",
  LocationFrom: "LocationTo",
  LocationTo: "LocationFrom",
  ItemClassFrom: "ItemClassTo",
  ItemClassTo: "ItemClassFrom",
  AgeFrom1: 'AgeFrom1',
  AgeTo1: 'AgeTo1',
  AgeFrom2: 'AgeFrom2',
  AgeTo2: 'AgeTo2',
  AgeFrom3: 'AgeFrom3',
  AgeTo3: 'AgeTo3',
  AgeFrom4: 'AgeFrom4',
  AgeTo4: 'AgeTo4'
};

/***/ }),

/***/ 59383:
/*!*************************************************************************!*\
  !*** ./src/app/main/common-report/models/certificate-analysis.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BmeHashMapCertificate: () => (/* binding */ BmeHashMapCertificate),
/* harmony export */   CertificateAnalysisModel: () => (/* binding */ CertificateAnalysisModel)
/* harmony export */ });
class CertificateAnalysisModel {
  constructor() {
    this.ReportName = 'Certificate of Analysis';
    this.Sales_Order_No = '';
    this.Desc_Sales_Order_No = '';
    this.Item_key = '';
    this.Desc_Item_key = '';
    this.Location = '';
    this.Desc_Location = '';
    this.Lot_No = '';
    this.BinNo = '';
    this.Desc_Lot_No = '';
    this.ListingFlag = false;
    this.ListingVariable = '';
  }
}
let BmeHashMapCertificate = {
  Sales_Order_No: 'lbllookup(0)',
  Desc_Sales_Order_No: 'txtDescription(0)',
  Item_key: 'lbllookup(1)',
  Desc_Item_key: 'txtDescription(1)',
  Location: 'lbllookup(3)',
  Lot_No: 'lbllookup(2)'
};

/***/ }),

/***/ 25286:
/*!**************************************************************************!*\
  !*** ./src/app/main/common-report/models/lot-expiration-report-model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BmeHashMapCertificate: () => (/* binding */ BmeHashMapCertificate),
/* harmony export */   ControlMap: () => (/* binding */ ControlMap),
/* harmony export */   LotExpirationReportModel: () => (/* binding */ LotExpirationReportModel)
/* harmony export */ });
class LotExpirationReportModel {
  constructor() {
    this.ReportName = 'Lot Expiration Report';
    this.ItemFrom = '';
    this.ItemTo = '';
    this.LocationFrom = '';
    this.LocationTo = '';
    this.AlreadyExpiredLot = 1;
    this.NoofdaystoExpireLot = 0;
    this.ListingFlag = false;
    this.ListingVariable = '';
    this.descriptionItemFrom = '';
    this.descriptionItemTo = '';
    this.descriptionLocationFrom = '';
    this.descriptionLocationTo = '';
  }
}
let BmeHashMapCertificate = {
  ItemKeyFrom: 'txtFrom(13)',
  ItemKeyTo: 'txtTo(13)',
  LocationFrom: 'txtFrom(14)',
  LocationTo: 'txtTo(14)'
};
let ControlMap = {
  ItemFrom: "ItemTo",
  ItemTo: "ItemFrom",
  LocationFrom: "LocationTo",
  LocationTo: "LocationFrom"
};

/***/ }),

/***/ 71580:
/*!**********************************************************************!*\
  !*** ./src/app/main/common-report/models/material-analysis.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BmeHashMap: () => (/* binding */ BmeHashMap),
/* harmony export */   ControlMap: () => (/* binding */ ControlMap),
/* harmony export */   MaterialAnalysisModel: () => (/* binding */ MaterialAnalysisModel)
/* harmony export */ });
class MaterialAnalysisModel {
  constructor() {
    this.Customer_From = '';
    this.Desc_Customer_From = '';
    this.Customer_To = '';
    this.Desc_Customer_To = '';
    this.Sales_Order_No_From = '';
    this.Desc_Sales_Order_No_From = '';
    this.Sales_Order_No_To = '';
    this.Desc_Sales_Order_No_To = '';
    this.Order_Date_From = new Date();
    this.Order_Date_To = new Date();
    this.Status_Treat_Hold = '';
    this.Desc_Status_Treat_Hold = '';
    this.Status_Treat_Retest = '';
    this.Desc_Status_Treat_Retest = '';
    this.Rd_Summary = "true";
    this.SO_Array = [];
  }
}
let BmeHashMap = {
  Summary: 'OptSumm ',
  Detail: 'OptDetail',
  Status_Treat_Hold: 'txtHoldStatus',
  Sales_Order_No_To: 'txtTo(6)',
  Customer_From: 'txtFrom(5)',
  Customer_To: 'txtTo(5)',
  Sales_Order_No_From: 'txtFrom(6)',
  Status_Treat_Retest: 'txtRetestStatus',
  Order_Date_From: 'pvDtDatesFrom(2)',
  Order_Date_To: 'pvDtDatesTo(2)'
};
let ControlMap = {
  Customer_From: 'Customer_To',
  Sales_Order_No_From: 'Sales_Order_No_To',
  Customer_To: 'Customer_From',
  Sales_Order_No_To: 'Sales_Order_No_From'
};

/***/ }),

/***/ 71160:
/*!**************************************************************************!*\
  !*** ./src/app/main/common-report/models/sales-analysis-report.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemInvoiceModel: () => (/* binding */ ItemInvoiceModel),
/* harmony export */   SalesParsonModel: () => (/* binding */ SalesParsonModel)
/* harmony export */ });
class ItemInvoiceModel {
  constructor() {
    this.ItemKeyFrom = "";
    this.ItemKeyTo = "";
    this.LocationKeyFrom = "";
    this.LocationKeyTo = "";
    this.ItemClassKeyFrom = "";
    this.ItemClassKeyTo = "";
    this.IncludeSO = "1";
    this.Date = "1";
    this.DateFrom = new Date();
    this.DateTo = new Date();
    this.IncludedNonInventory = true;
  }
}
class SalesParsonModel {
  constructor() {
    this.SalesParsonFrom = "";
    this.SalesParsonTo = "";
    this.TerritoryFrom = "";
    this.TerritoryTo = "";
    this.CustomerFrom = "";
    this.CustomerTo = "";
    this.CustomerClassFrom = "";
    this.CustomerClassTo = "";
    this.ShipToKeyFrom = "";
    this.ShipToKeyTo = "";
  }
}

/***/ }),

/***/ 36830:
/*!********************************************************************************!*\
  !*** ./src/app/main/common-report/models/transaction-activity-report.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlMap: () => (/* binding */ ControlMap),
/* harmony export */   InputGridModel: () => (/* binding */ InputGridModel),
/* harmony export */   InputModel: () => (/* binding */ InputModel),
/* harmony export */   TranRptParameterMap: () => (/* binding */ TranRptParameterMap)
/* harmony export */ });
class InputModel {
  constructor() {
    this.ReportName = "Transaction Activity Report";
    this.ItemClassFrom = "";
    this.ItemClassFromDes = "";
    this.ItemClassTo = "";
    this.ItemClassToDes = "";
    this.ItemFrom = "";
    this.ItemFromDes = "";
    this.ItemTo = "";
    this.ItemToDes = "";
    this.LocationFrom = "";
    this.LocationFromDes = "";
    this.LocationTo = "";
    this.LocationToDes = "";
    this.ItemTypeFrom = "";
    this.ItemTypeFromDes = "";
    this.ItemTypeTo = "";
    this.ItemTypeToDes = "";
    this.ItemSubTypeFrom = "";
    this.ItemSubTypeFromDes = "";
    this.ItemSubTypeTo = "";
    this.ItemSubTypeToDes = "";
    this.ABCFrom = "";
    this.ABCFromDes = "";
    this.ABCTo = "";
    this.ABCToDes = "";
    this.OpBalCheck = false;
    this.ApplyDateFrom = new Date();
    this.ApplyDateTo = new Date();
    this.ProductFrom = "";
    this.ProductFromDes = "";
    this.ProductTo = "";
    this.ProductToDes = "";
    this.CommodityFrom = "";
    this.CommodityFromDes = "";
    this.CommodityTo = "";
    this.CommodityToDes = "";
    this.InventoryAccountFrom = "";
    this.InventoryAccountFromDes = "";
    this.InventoryAccountTo = "";
    this.InventoryAccountToDes = "";
    this.OffSetAccountFrom = "";
    this.OffSetAccountFromDes = "";
    this.OffSetAccountTo = "";
    this.OffSetAccountToDes = "";
    this.ItemActive = true;
    this.ItemNoNew = false;
    this.ItemObsolete = false;
    this.ItemDeactivated = false;
    this.ListingFlag = false;
    this.ListingVariable = "";
  }
}
let TranRptParameterMap = {
  ItemClassFrom: "TxtFromTA(0)",
  ItemClassTo: "TxtToTA(0)",
  ItemFrom: "TxtFromTA(1)",
  ItemTo: "TxtToTA(1)",
  LocationFrom: "TxtFromTA(2)",
  LocationTo: "TxtToTA(2)",
  ItemTypeFrom: "TxtFromTA(3)",
  ItemTypeTo: "TxtToTA(3)",
  ItemSubTypeFrom: "TxtFromTA(4)",
  ItemSubTypeTo: "TxtToTA(4)",
  ABCFrom: "TxtFromTA(5)",
  ABCTo: "TxtToTA(5)",
  OpBalCheck: "ChkOpeningBalance",
  ApplyDateFrom: "PvdtDatesApplyFrom(0)",
  ApplyDateTo: "PvdtDatesApplyto(0)",
  ProductFrom: "TxtFromTA(6)",
  ProductTo: "TxtToTA(6)",
  CommodityFrom: "TxtFromTA(7)",
  CommodityTo: "TxtToTA(7)",
  InventoryAccountFrom: "LblLookUp(0)",
  InventoryAccountTo: "LblLookUp(1)",
  OffSetAccountFrom: "LblLookUp(2)",
  OffSetAccountTo: "LblLookUp(3)",
  ItemActive: "chkActive",
  ItemNoNew: "chkNoNew",
  ItemObsolete: "chkObsolete",
  ItemDeactivated: "chkDeactivated"
};
let ControlMap = {
  ItemClassFrom: "ItemClassTo",
  ItemClassTo: "ItemClassFrom",
  ItemFrom: "ItemTo",
  ItemTo: "ItemFrom",
  LocationFrom: "LocationTo",
  LocationTo: "LocationFrom",
  ItemTypeFrom: "ItemTypeTo",
  ItemTypeTo: "ItemTypeFrom",
  ItemSubTypeFrom: "ItemSubTypeTo",
  ItemSubTypeTo: "ItemSubTypeFrom",
  ABCFrom: "ABCTo",
  ABCTo: "ABCFrom",
  ProductFrom: "ProductTo",
  ProductTo: "ProductFrom",
  CommodityFrom: "CommodityTo",
  CommodityTo: "CommodityFrom",
  InventoryAccountFrom: "InventoryAccountTo",
  InventoryAccountTo: "InventoryAccountFrom",
  OffSetAccountFrom: "OffSetAccountTo",
  OffSetAccountTo: "OffSetAccountFrom",
  DocNoFrom: "DocNoTo",
  DocNoTo: "DocNoFrom"
};
class InputGridModel {
  constructor() {
    this.Select = "";
    this.TrnType = "";
    this.DocNoFrom = "";
    this.DocNoTo = "";
    this.ParentDocNoFrom = "";
    this.ParentDocNoTo = "";
    this.DocDateFrom = "";
    this.DocDateTo = "";
  }
}

/***/ }),

/***/ 79488:
/*!*******************************************************************************!*\
  !*** ./src/app/main/common-report/models/transaction-history-report.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlMap: () => (/* binding */ ControlMap),
/* harmony export */   InputGridModel: () => (/* binding */ InputGridModel),
/* harmony export */   InputModel: () => (/* binding */ InputModel),
/* harmony export */   TranHisRptParameterMap: () => (/* binding */ TranHisRptParameterMap)
/* harmony export */ });
class InputModel {
  constructor() {
    this.ReportName = "Transaction History Report";
    this.ItemKeyFrom = "";
    this.ItemKeyFromDes = "";
    this.ItemKeyTo = "";
    this.ItemKeyToDes = "";
    this.LocationFrom = "";
    this.LocationFromDes = "";
    this.LocationTo = "";
    this.LocationToDes = "";
    this.FromDate = new Date();
    this.ToDate = new Date();
    this.ApplyDateFrom = new Date();
    this.ApplyDateTo = new Date();
    this.TransSubTypFrom = "";
    this.TransSubTypFromDes = "";
    this.TransSubTypTo = "";
    this.TransSubTypToDes = "";
    this.ListingFlag = false;
    this.ListingVariable = "";
  }
}
let TranHisRptParameterMap = {
  ItemKeyFrom: "lblLookup(2)",
  ItemKeyFromDes: "txtDescription(2)",
  ItemKeyTo: "lblLookup(3)",
  ItemKeyToDes: "txtDescription(3)",
  LocationFrom: "lblLookup(4)",
  LocationFromDes: "txtDescription(4)",
  LocationTo: "lblLookup(5)",
  LocationToDes: "txtDescription(5)",
  TransSubTypFrom: "lblLookup(0)",
  TransSubTypTo: "lblLookup(1)",
  ApplyDateFrom: "Dates(2)",
  ApplyDateTo: "Dates(3)"
};
let ControlMap = {
  ItemKeyFrom: "ItemKeyTo",
  ItemKeyTo: "ItemKeyFrom",
  LocationFrom: "LocationTo",
  LocationTo: "LocationFrom",
  TransSubTypFrom: "TransSubTypTo",
  TransSubTypTo: "TransSubTypFrom",
  DocNoFrom: "DocNoTo",
  DocNoTo: "DocNoFrom"
};
class InputGridModel {
  constructor() {
    this.Select = "";
    this.TrnType = "";
    this.DocNoFrom = "";
    this.DocNoTo = "";
    this.ParentDocNoFrom = "";
    this.ParentDocNoTo = "";
    this.DocDateFrom = "";
    this.DocDateTo = "";
  }
}

/***/ }),

/***/ 65623:
/*!*********************************************************************!*\
  !*** ./src/app/main/common-report/models/valuation-report.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryValuationModel: () => (/* binding */ InventoryValuationModel),
/* harmony export */   LookupDescriptionModel: () => (/* binding */ LookupDescriptionModel),
/* harmony export */   ReportParameter: () => (/* binding */ ReportParameter)
/* harmony export */ });
class InventoryValuationModel {
  constructor() {
    this.ReportName = 'Inventory Valuation Report';
    this.ItemFrom = '';
    this.ItemTo = '';
    this.LocationFrom = '';
    this.LocationTo = '';
    this.ItemClass = '';
    this.ItemType = '';
    this.ABC = '';
    this.Product = '';
    this.Commodity = '';
    this.Date = new Date();
    this.ValuationBasis = '';
    this.UnitOfMeasure = '';
    this.SuppressIfZeroOnHand = false;
    this.ListingFlag = 'false';
    this.ListingVariable = '';
    this.AlternateUnit = '';
  }
}
class LookupDescriptionModel {
  constructor() {
    this.ItemFromDescription = '';
    this.ItemToDescription = '';
    this.LocationFromDescription = '';
    this.LocationToDescription = '';
    this.ItemClassDescription = '';
    this.ItemTypeDescription = '';
    this.ABCDescription = '';
    this.ProductDescription = '';
    this.CommodityDescription = '';
    this.UOMDescription = '';
  }
}
let ReportParameter = {
  ValuationBasis: 'cboValuation',
  SuppressIfZeroOnHand: 'chkSupressIfZero',
  Date: 'Dates(2)',
  ItemFrom: 'txtItem(0)',
  ItemTo: 'txtItem(1)',
  LocationFrom: 'txtLocation(0)',
  LocationTo: 'txtLocation(1)',
  ItemClass: 'txtItemClass',
  ItemType: 'txtItemType',
  ABC: 'txtABC',
  ABCDescription: 'txtABCDesc',
  AlternateUOM: 'txtAltUOM',
  AlternateUOMDesc: 'txtAltUOMDesc',
  Product: 'txtProduct',
  Commodity: 'txtCommodity',
  ItemDescriptionFrom: 'txtDesc(0)',
  ItemDescriptionTo: 'txtDesc(1)',
  ItemFromDescription: 'txtItemDesc(0)',
  ItemToDescription: 'txtItemDesc(1)',
  LocationFromDescription: 'txtLocationDesc(0)',
  LocationToDescription: 'txtLocationDesc(1)',
  ItemClassDescription: 'txtItemClassDesc',
  ItemTypeDescription: 'txtItemTypeDesc',
  ProductDescription: 'txtProductDesc',
  CommodityDescription: 'txtCommodityDesc',
  Path: 'txtPath'
};

/***/ }),

/***/ 75122:
/*!************************************************************************!*\
  !*** ./src/app/main/common-report/ngrx-store/common-report.actions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportActionTypes: () => (/* binding */ CommonReportActionTypes),
/* harmony export */   LoadCommonReports: () => (/* binding */ LoadCommonReports)
/* harmony export */ });
var CommonReportActionTypes;
(function (CommonReportActionTypes) {
  CommonReportActionTypes["LoadMaterialAnalysis"] = "[CommonReport] MaterialAnalysis";
})(CommonReportActionTypes || (CommonReportActionTypes = {}));
class LoadCommonReports {
  constructor(payload) {
    this.payload = payload;
    this.type = CommonReportActionTypes.LoadMaterialAnalysis;
  }
}

/***/ }),

/***/ 22902:
/*!************************************************************************!*\
  !*** ./src/app/main/common-report/ngrx-store/common-report.reducer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonReportFeatureKey: () => (/* binding */ commonReportFeatureKey),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _common_report_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-report.actions */ 75122);

const commonReportFeatureKey = 'commonReport';
const initialState = {
  initialData: {}
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case _common_report_actions__WEBPACK_IMPORTED_MODULE_0__.CommonReportActionTypes.LoadMaterialAnalysis:
      return Object.assign({}, state, {
        initialData: action.payload
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 12206:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/localVariable.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalVariables: () => (/* binding */ LocalVariables)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class LocalVariables {
  set localVariables(array) {
    this["AIndex"] = array;
  }
  constructor(el) {
    this.el = el;
  }
  static #_ = this.ɵfac = function LocalVariables_Factory(t) {
    return new (t || LocalVariables)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LocalVariables,
    selectors: [["", "localVariables", ""]],
    inputs: {
      localVariables: "localVariables"
    },
    exportAs: ["localVariables"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_main_common-report_commonreport_module_ts.js.map