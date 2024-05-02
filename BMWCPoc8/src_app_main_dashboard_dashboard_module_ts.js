"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_dashboard_dashboard_module_ts"],{

/***/ 98881:
/*!************************************************************************************!*\
  !*** ./src/app/main/dashboard/components/dashboardpage/dashboardpage.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardpageComponent: () => (/* binding */ DashboardpageComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var src_app_shared_components_dashboardbasegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/dashboardbasegrid */ 30519);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-data-query */ 87550);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-intl */ 87809);
/* harmony import */ var _http_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../http/dashboard.service */ 59995);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-charts */ 25947);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @progress/kendo-angular-listview */ 92339);
/* harmony import */ var _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/grid-export-component/grid-export.component */ 90704);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/hierarchical-data-grid/hierarchical-data-grid.component */ 78896);
/* harmony import */ var _shared_ng_orgchart_chart_container_chart_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/ng-orgchart/chart-container/chart-container.component */ 64000);
/* harmony import */ var _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/pipes/searchdata.pipe */ 80669);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


































function DashboardpageComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-loader");
  }
}
function DashboardpageComponent_ng_container_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_5_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r13.bmlfDeleteTab(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function DashboardpageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r17);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r16.bmlfonSwitchTab(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, DashboardpageComponent_ng_container_5_a_3_Template, 2, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r1.msTabType == item_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.msMode == "EDIT");
  }
}
function DashboardpageComponent_ng_container_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r24.bmlfOpenNewTileModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_1_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](5);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r26.bmlfSaveLayoutTabWise(_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tabItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdAddTile", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdSave", tabItem_r18.id, "");
  }
}
function DashboardpageComponent_ng_container_6_div_1_ng_container_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "li")(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33);
      const x_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r32.bmlfGetDashboardLayoutData(x_r31.DashboardName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](x_r31.DashboardName);
  }
}
function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 35)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 44)(4, "ul")(5, "li")(6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_8_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r34.bmlfOpenAddTabModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "li")(10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_8_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r36.bmlfEditTab());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const tabItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdNewTab", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 4, "DASHBOARDPAGE.NEWTAB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdEditTab", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 6, "DASHBOARDPAGE.EDITTAB"));
  }
}
function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 35)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 48)(4, "ul")(5, "li")(6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_9_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r38.bmlfOpenAddDashboardModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "li")(10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_9_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r40.bmlfSaveDefaultDashboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const tabItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdNewDashboard", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 4, "DASHBOARDPAGE.NEWDASHBOARD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "cmdSetAsDefault", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 6, "DASHBOARDPAGE.SETASDEFAULT"));
  }
}
function DashboardpageComponent_ng_container_6_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 35)(2, "a", 36)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 37)(6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_ng_container_6_div_1_ng_container_2_li_7_Template, 3, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_8_Template, 13, 8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, DashboardpageComponent_ng_container_6_div_1_ng_container_2_div_9_Template, 13, 8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 35)(11, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_div_1_ng_container_2_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r42.bmlfGetRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r23.mobjDashboardLayoutData.DashboardName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r23.marrDashboardList);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r23.msScreenWidth >= 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r23.msScreenWidth >= 768);
  }
}
function DashboardpageComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, DashboardpageComponent_ng_container_6_div_1_ng_container_1_Template, 5, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_ng_container_6_div_1_ng_container_2_Template, 13, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r19.msMode == "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r19.msMode == "VIEW");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_ng_container_3_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57);
      const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r56.msMode == "EDIT" ? false : ctx_r56.bmlfOpenLinkDashboard(x_r44.TileData, x_r44.TileType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", x_r44.TileData.TitleName, "");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", x_r44.TileData.TitleName, " ");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r63);
      const idx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().index;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r61.bmlfRemoveTile(idx_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 67);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 68);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 69);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 70);
  }
}
const _c1 = function (a0) {
  return {
    "color": a0
  };
};
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body")(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "p")(4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_span_6_Template, 1, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_span_7_Template, 1, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 61)(9, "div", 62)(10, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_i_13_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_i_14_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", x_r44.TileData.Icon1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](9, _c1, x_r44.TileData.UpDwon1 == "Up" ? "rgb(3 129 54)" : x_r44.TileData.UpDwon1 == "Down" ? "#d51e1e" : "rgb(167 66 179)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](x_r44.TileData.KPI1Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.UpDwon1 == "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.UpDwon1 == "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](x_r44.TileData.AdnlInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.UpDwon2 == "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.UpDwon2 == "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", x_r44.TileData.KPI2Value, "");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_kendo_chart_series_item_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r72 = ctx.value;
    const item_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", item_r70.value, ": ", value_r72, " ");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_kendo_chart_series_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-chart-series-item", 75)(1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_kendo_chart_series_item_5_ng_template_2_Template, 1, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r70 = ctx.$implicit;
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("data", item_r70.items)("name", item_r70.value)("type", x_r44.TileData.GraphType);
  }
}
const _c2 = function () {
  return {
    lock: "y"
  };
};
const _c3 = function (a0, a1) {
  return {
    mousewheel: a0,
    selection: a1
  };
};
const _c4 = function () {
  return {
    rotation: "auto"
  };
};
const _c5 = function (a0, a2) {
  return {
    categories: a0,
    max: 10,
    labels: a2
  };
};
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body")(1, "kendo-chart", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("axisLabelClick", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_Template_kendo_chart_axisLabelClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r75.onAxisLabelClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "kendo-chart-legend", 72)(3, "kendo-chart-tooltip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "kendo-chart-series");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_kendo_chart_series_item_5_Template, 3, 3, "kendo-chart-series-item", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pannable", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c2))("zoomable", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](8, _c2)))("transitions", true)("categoryAxis", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](13, _c5, ctx_r51.categories, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](12, _c4)))("seriesColors", ctx_r51.seriesColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", x_r44.TileData.ChartData);
  }
}
const _c6 = function () {
  return {
    visible: true
  };
};
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body")(1, "kendo-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "kendo-chart-legend", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "kendo-chart-series");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "kendo-chart-series-item", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("autoFit", "true")("data", x_r44.TileData.Children)("labels", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c6));
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 84);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 81)(1, "kendo-textbox", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_3_Template_kendo_textbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r84);
      const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](x_r44.TileData.SearchKeyword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_3_ng_template_2_Template, 1, 0, "ng-template", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", x_r44.TileData.SearchKeyword);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "strong", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_4_Template_strong_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r88);
      const dataItem_r86 = restoredCtx.dataItem;
      const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r87.msMode == "EDIT" ? false : ctx_r87.bmlfGotoFromListView(x_r44.TileData, dataItem_r86));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r86 = ctx.dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r86.ColumnValue1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", dataItem_r86.ColumnValue2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r86.ColumnValue3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r86.ColumnValue4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r86.ColumnValue5);
  }
}
const _c7 = function () {
  return {
    padding: "5px 10px",
    "border-bottom": "1px solid lightgrey"
  };
};
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body")(1, "kendo-listview", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "SearchData");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_3_Template, 3, 1, "ng-template", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_ng_template_4_Template, 14, 5, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 3, x_r44.TileData.Children, x_r44.TileData.SearchKeyword))("navigable", true)("itemStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c7));
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "li")(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_li_10_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r99);
      const i_r97 = restoredCtx.index;
      const nodeData_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().datasource;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r98.msMode == "EDIT" ? false : ctx_r98.bmlfGotoEvent(nodeData_r94, i_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", x_r96, "");
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div")(3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r102);
      const nodeData_r94 = restoredCtx.datasource;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r101.msMode == "EDIT" ? false : ctx_r101.bmlfFlowChartLink(nodeData_r94.RoutingPath));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 92)(6, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 95)(9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_li_10_Template, 3, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r102);
      const nodeData_r94 = restoredCtx.datasource;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r103.bmlfHowToVideo(nodeData_r94));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r102);
      const nodeData_r94 = restoredCtx.datasource;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r104.bmlfOpenLinkDashboard(nodeData_r94, "FlowChart"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const nodeData_r94 = ctx.datasource;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", nodeData_r94.Icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](nodeData_r94.ScreenName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", nodeData_r94.GOTOScreens);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "organization-chart", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_ng_template_2_Template, 15, 3, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](3);
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("datasource", x_r44.TileData.DataSource)("nodeTemplate", _r92)("pan", ctx_r91.mbPanOrgChart)("zoom", ctx_r91.mbZoomOrgChart);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_ng_container_1_Template, 4, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.ShowFlowChart == true);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_ng_container_1_app_hierarchical_data_grid_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "app-hierarchical-data-grid", 101);
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("GridData", x_r44.TileData.Children)("ScreenName", ctx_r108.msHyperlinkScreen)("RecordKey1", x_r44.TileData.DashBoardID);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_ng_container_1_app_hierarchical_data_grid_1_Template, 1, 3, "app-hierarchical-data-grid", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.ShowGrid);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileData.ShowGrid == true);
  }
}
function DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-tilelayout-item", 49)(1, "kendo-tilelayout-item-header")(2, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_ng_container_3_Template, 3, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_ng_template_4_Template, 1, 1, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_a_6_Template, 2, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_7_Template, 16, 11, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_8_Template, 6, 16, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_9_Template, 5, 4, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_10_Template, 5, 7, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_11_Template, 2, 1, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_kendo_tilelayout_item_body_12_Template, 2, 1, "kendo-tilelayout-item-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r44 = ctx.$implicit;
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](5);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", x_r44.id)("col", x_r44.col)("row", x_r44.row)("rowSpan", x_r44.rowSpan)("colSpan", x_r44.colSpan)("ngClass", x_r44.TileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType != "FlowChart")("ngIfElse", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r21.msMode == "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "KPI");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "Graph" && x_r44.TileData.GraphType != "pie");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "Graph" && x_r44.TileData.GraphType == "pie");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "ListView");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "FlowChart");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", x_r44.TileType == "GridView");
  }
}
function DashboardpageComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, DashboardpageComponent_ng_container_6_div_1_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "section", 25)(3, "div", 26)(4, "kendo-tilelayout", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("reorder", function DashboardpageComponent_ng_container_6_Template_kendo_tilelayout_reorder_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r113);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r112.onReorderTileLayout($event));
    })("resize", function DashboardpageComponent_ng_container_6_Template_kendo_tilelayout_resize_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r113);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r114.onResizeTileLayout($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_ng_container_6_kendo_tilelayout_item_6_Template, 13, 15, "kendo-tilelayout-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tabItem_r18 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.msTabType == tabItem_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx_r2.msTabType != tabItem_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "tilelayoutid", tabItem_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("columns", tabItem_r18.layout.columns)("autoFlow", ctx_r2.column)("rowHeight", tabItem_r18.layout.rowHeight)("gap", tabItem_r18.layout.gap)("reorderable", tabItem_r18.layout.reorderable)("resizable", tabItem_r18.layout.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", tabItem_r18.layout.items);
  }
}
function DashboardpageComponent_div_12_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 67);
  }
}
function DashboardpageComponent_div_12_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "span", 68);
  }
}
function DashboardpageComponent_div_12_div_2_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 69);
  }
}
function DashboardpageComponent_div_12_div_2_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 70);
  }
}
function DashboardpageComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 105)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "p")(4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_div_12_div_2_span_6_Template, 1, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_div_12_div_2_span_7_Template, 1, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 61)(9, "div", 62)(10, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, DashboardpageComponent_div_12_div_2_i_13_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, DashboardpageComponent_div_12_div_2_i_14_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r115.mobjLinkTileData.Icon1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](9, _c1, ctx_r115.mobjLinkTileData.UpDwon1 == "Up" ? "rgb(3 129 54)" : ctx_r115.mobjLinkTileData.UpDwon1 == "Down" ? "#d51e1e" : "rgb(167 66 179)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r115.mobjLinkTileData.KPI1Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r115.mobjLinkTileData.UpDwon1 == "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r115.mobjLinkTileData.UpDwon1 == "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r115.mobjLinkTileData.AdnlInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r115.mobjLinkTileData.UpDwon2 == "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r115.mobjLinkTileData.UpDwon2 == "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r115.mobjLinkTileData.KPI2Value, "");
  }
}
function DashboardpageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_div_12_div_2_Template, 16, 11, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.mobjLinkTileData.DashBoardType == "KPI");
  }
}
function DashboardpageComponent_div_13_div_2_kendo_chart_series_item_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r126 = ctx.value;
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", item_r124.value, ": ", value_r126, " ");
  }
}
function DashboardpageComponent_div_13_div_2_kendo_chart_series_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-chart-series-item", 111)(1, "kendo-chart-series-item-tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_div_13_div_2_kendo_chart_series_item_5_ng_template_2_Template, 1, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("data", item_r124.items)("name", item_r124.value);
  }
}
function DashboardpageComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "kendo-chart", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("axisLabelClick", function DashboardpageComponent_div_13_div_2_Template_kendo_chart_axisLabelClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r129);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r128.onAxisLabelClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "kendo-chart-legend", 72)(3, "kendo-chart-tooltip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "kendo-chart-series");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, DashboardpageComponent_div_13_div_2_kendo_chart_series_item_5_Template, 3, 2, "kendo-chart-series-item", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pannable", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c2))("zoomable", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](8, _c2)))("transitions", true)("categoryAxis", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](13, _c5, ctx_r120.categories, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](12, _c4)))("seriesColors", ctx_r120.seriesColors);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r120.mobjLinkTileData.ChartData);
  }
}
function DashboardpageComponent_div_13_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "strong", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_div_13_div_3_ng_template_2_Template_strong_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r133);
      const dataItem_r131 = restoredCtx.dataItem;
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r132.bmlfGotoFromListView(ctx_r132.mobjLinkTileData, dataItem_r131));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r131 = ctx.dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r131.ColumnValue1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", dataItem_r131.ColumnValue2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r131.ColumnValue3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r131.ColumnValue4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dataItem_r131.ColumnValue5);
  }
}
function DashboardpageComponent_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 105)(1, "kendo-listview", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_div_13_div_3_ng_template_2_Template, 14, 5, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("data", ctx_r121.mobjLinkTileData.Children)("navigable", true)("itemStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](3, _c7));
  }
}
function DashboardpageComponent_div_13_div_4_ng_template_6_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 130);
  }
}
function DashboardpageComponent_div_13_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 118)(1, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_div_13_div_4_ng_template_6_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r139);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r138.x.TileData.SearchKeyword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 120)(3, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_div_13_div_4_ng_template_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r139);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r140.bmlFilterSetting(ctx_r140.x.TileData.GridSetting));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, DashboardpageComponent_div_13_div_4_ng_template_6_i_4_Template, 1, 0, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_div_13_div_4_ng_template_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r139);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](2);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r141.exportToExcel(_r134, ctx_r141.mobjLinkTileData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "svg", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "use", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_div_13_div_4_ng_template_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r139);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](2);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r142.exportToPDF(_r134, ctx_r142.x.TileData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "svg", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "use", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r135.x.TileData.SearchKeyword);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r135.x.TileData.GridSetting.filterEnabled);
  }
}
function DashboardpageComponent_div_13_div_4_kendo_grid_column_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "kendo-grid-column", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const col_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("field", col_r143.field)("title", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 7, col_r143.title))("format", col_r143.format)("filter", col_r143.type ? col_r143.type : col_r143.filter)("hidden", col_r143.hidden)("width", col_r143.width)("filterable", true);
  }
}
function DashboardpageComponent_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 105)(1, "kendo-grid", 112, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("dataStateChange", function DashboardpageComponent_div_13_div_4_Template_kendo_grid_dataStateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r144.dataStateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "SearchData");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "kendo-grid-messages", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_div_13_div_4_ng_template_6_Template, 12, 2, "ng-template", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_div_13_div_4_kendo_grid_column_7_Template, 2, 9, "kendo-grid-column", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "app-grid-export", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("kendoGridGroupBinding", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 16, ctx_r122.mobjLinkTileData.Children, ctx_r122.x.TileData.SearchKeyword))("group", ctx_r122.mobjLinkTileData.GridSetting.state.group)("pageable", true)("sortable", true)("filterable", ctx_r122.x.TileData.GridSetting.filterEnabled)("resizable", true)("reorderable", true)("groupable", ctx_r122.groupingEnabled)("sort", ctx_r122.mobjGridSettings.state.sort)("filter", ctx_r122.mobjLinkTileData.GridSetting.state.filter)("rowHeight", 36)("pageSize", ctx_r122.mobjLinkTileData.GridSetting.state.take)("skip", ctx_r122.mobjLinkTileData.GridSetting.state.skip);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 19, "CommonNoRecordsAvailable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r122.mobjLinkTileData.Columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("exportData", ctx_r122.exportData);
  }
}
function DashboardpageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 106)(1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, DashboardpageComponent_div_13_div_2_Template, 6, 16, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, DashboardpageComponent_div_13_div_3_Template, 3, 4, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, DashboardpageComponent_div_13_div_4_Template, 9, 21, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.mobjLinkTileData.DashBoardType == "Graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.mobjLinkTileData.DashBoardType == "ListView");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r4.mobjLinkTileData.DashBoardType == "GridView");
  }
}
function DashboardpageComponent_kendo_dialog_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-dialog", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("close", function DashboardpageComponent_kendo_dialog_18_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r146.bmlfAddNewTabAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 135)(7, "div", 136)(8, "div", 137)(9, "div", 138)(10, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 140)(14, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_18_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r148.msTabName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "kendo-dialog-actions")(16, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_18_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r149.bmlfAddNewTabAction("Ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_18_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r147);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r150.bmlfAddNewTabAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 5, "DASHBOARDPAGE.ADDTAB"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 7, "DASHBOARDPAGE.TABNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r5.msTabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](18, 9, "COMMON.OK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](21, 11, "COMMON.CANCEL"));
  }
}
function DashboardpageComponent_kendo_dialog_19_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", x_r152.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", x_r152.key, "");
  }
}
function DashboardpageComponent_kendo_dialog_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-dialog", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("close", function DashboardpageComponent_kendo_dialog_19_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r153.bmlfAddNewTileAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 135)(7, "div", 136)(8, "div", 137)(9, "div", 138)(10, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 140)(14, "select", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_19_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r155.mobjTile.Type = $event);
    })("change", function DashboardpageComponent_kendo_dialog_19_Template_select_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r156.bmlfChangeTileType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, DashboardpageComponent_kendo_dialog_19_option_15_Template, 2, 2, "option", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 136)(17, "div", 137)(18, "div", 138)(19, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 140)(23, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_19_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r157.mobjTile.Tile = $event);
    })("blur", function DashboardpageComponent_kendo_dialog_19_Template_input_blur_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r158.bmlfOpenLookupModal("Tile", "BMEWEBDashboard", "DashBoardID", "blur", ctx_r158.mobjTile.Tile, "custom", "txtTile", "Tile"));
    })("focus", function DashboardpageComponent_kendo_dialog_19_Template_input_focus_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r159.bmlfOnGlobalFocus("Tile", ctx_r159.mobjTile.Tile));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_19_Template_span_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r160.bmlfOpenLookupModal("Tile", "BMEWEBDashboard", "DashBoardID", "click", ctx_r160.mobjTile.Tile, "custom", "txtTile", "Tile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "kendo-dialog-actions")(27, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_19_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r161.bmlfAddNewTileAction("Ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_19_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r154);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r162.bmlfAddNewTileAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 8, "DASHBOARDPAGE.ADDTILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 10, "DASHBOARDPAGE.TYPE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r6.mobjTile.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r6.marrTileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](21, 12, "DASHBOARDPAGE.TILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r6.mobjTile.Tile);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](29, 14, "COMMON.OK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](32, 16, "COMMON.CANCEL"));
  }
}
function DashboardpageComponent_kendo_dialog_20_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "DASHBOARDPAGE.MSG.DELETETABWITHDASH"), " ");
  }
}
function DashboardpageComponent_kendo_dialog_20_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "DASHBOARDPAGE.MSG.DELETETAB"), " ");
  }
}
function DashboardpageComponent_kendo_dialog_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-dialog", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("close", function DashboardpageComponent_kendo_dialog_20_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r165.bmlfonDialogTabDeleteAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_kendo_dialog_20_p_6_Template, 3, 3, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, DashboardpageComponent_kendo_dialog_20_p_7_Template, 3, 3, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "kendo-dialog-actions")(9, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_20_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r167.bmlfonDialogTabDeleteAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r166);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r168.bmlfonDialogTabDeleteAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 7, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.marrTabList.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.marrTabList.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](11, 9, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](14, 11, "COMMON.NO"), " ");
  }
}
function DashboardpageComponent_kendo_dialog_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-dialog", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("close", function DashboardpageComponent_kendo_dialog_21_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r170);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r169.bmlfAddNewDashboardAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 135)(7, "div", 136)(8, "div", 137)(9, "div", 138)(10, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 140)(14, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_21_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r170);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r171.msDashName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 136)(16, "div", 137)(17, "div", 138)(18, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 140)(22, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_21_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r170);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r172.msTabName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "kendo-dialog-actions")(24, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_21_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r170);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r173.bmlfAddNewDashboardAction("Ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_21_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r170);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r174.bmlfAddNewDashboardAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 7, "DASHBOARDPAGE.ADDDASHBOARD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 9, "DASHBOARDPAGE.DASHBOARDNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r8.msDashName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](20, 11, "DASHBOARDPAGE.TABNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r8.msTabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](26, 13, "COMMON.OK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](29, 15, "COMMON.CANCEL"));
  }
}
function DashboardpageComponent_kendo_dialog_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "kendo-dialog", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("close", function DashboardpageComponent_kendo_dialog_22_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r176);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r175.bmlfChangeDashboardNameAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 135)(7, "div", 136)(8, "div", 137)(9, "div", 138)(10, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 140)(14, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function DashboardpageComponent_kendo_dialog_22_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r176);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r177.msDashName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "kendo-dialog-actions")(16, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_22_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r176);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r178.bmlfChangeDashboardNameAction("Ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_kendo_dialog_22_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r176);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r179.bmlfChangeDashboardNameAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 7, "DASHBOARDPAGE.DASHBOARDNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r9.msDashName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](18, 9, "COMMON.OK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](21, 11, "COMMON.CANCEL"));
  }
}
function DashboardpageComponent_app_custom_lookup_modal_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "app-custom-lookup-modal", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("saveLookupField", function DashboardpageComponent_app_custom_lookup_modal_24_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r181);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r180.bmlfSaveLookupField($event));
    })("closeLookup", function DashboardpageComponent_app_custom_lookup_modal_24_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r181);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r182.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("keyData", ctx_r10.mobjLookupKeyData);
  }
}
const chartDefaultV4Colors = ["#28b4c8", "#2d73f5", "#aa46be", "#78d237"];
const chartBootstrapV4Colors = ["#5cb85c", "#f0ad4e", "#e67d4a", "#d9534f", "#0275d8", "#5bc0de"];
const chartMaterialV4Colors = ["#2196f3", "#ffc107", "#ff5722", "#3f51b5", "#e91e63", "#43a047" // green
];

class DashboardpageComponent extends src_app_shared_components_dashboardbasegrid__WEBPACK_IMPORTED_MODULE_1__.dashboardbasegrid {
  getDataList() {}
  constructor(router, renderer, lsService, dateFormatService, objToastService, objUtil, userFieldService, intl, objDbService, modalservice, lookupService, appSettings) {
    super(lsService, dateFormatService, userFieldService, objToastService, objUtil);
    this.router = router;
    this.renderer = renderer;
    this.lsService = lsService;
    this.dateFormatService = dateFormatService;
    this.objToastService = objToastService;
    this.objUtil = objUtil;
    this.userFieldService = userFieldService;
    this.intl = intl;
    this.objDbService = objDbService;
    this.modalservice = modalservice;
    this.lookupService = lookupService;
    this.appSettings = appSettings;
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModaltitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    /**---END : Lookup realted field--- */
    this.msCustomDateFormat = "";
    this.gridDataList = [];
    this.mobjUserData = {};
    this.mbHyerLinkData = null;
    this.autofit = true;
    this.msKeyword = "";
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_0__.GridSettings();
    this.mbIsLoading = false;
    this.mobjDashboardLayoutData = {};
    this.marrWidgetControlData = [];
    this.marrTabList = [];
    this.seriesColors = chartMaterialV4Colors;
    this.msTabType = "";
    this.msTabName = "";
    this.msDashName = "";
    this.mobjLinkTileData = {};
    this.mbAddTabDialog = false;
    this.mbAddNewTileDialog = false;
    this.mbAddDashboardDialog = false;
    this.msMode = "VIEW";
    this.mbPanOrgChart = false;
    this.mbZoomOrgChart = false;
    this.marrTileType = [{
      key: "KPI"
    }, {
      key: "Graph"
    }, {
      key: "ListView"
    }, {
      key: "FlowChart"
    }, {
      key: "GridView"
    }];
    this.mobjTile = {
      Type: "KPI",
      Tile: "",
      TileId: ""
    };
    this.mbShowDeleteTabDialog = false;
    this.msDeleteTabId = "";
    this.marrDashboardList = [];
    this.mbChangeDefaultDashNameDialog = false;
    this.marrHierarchicalGrid = [{
      "Ordno": "SR000053",
      "CustKey": "RSUHANE",
      "CustNAme": "Rajesh Suhane",
      "b": [{
        "ItenKey": "RAJFG2",
        "Location": "AGT",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG3",
        "Location": "AGT",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "##SURAJ",
        "Location": "BHP",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "##SURAJ123",
        "Location": "BHP",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG2",
        "Location": "BHP",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG1",
        "Location": "BHP",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFGDS01F",
        "Location": "BHP",
        "C": [{
          "DispNo": 6695,
          "LineState": "SELECTLOT"
        }]
      }]
    }, {
      "Ordno": "SR000054",
      "CustKey": "RSUHANE",
      "CustNAme": "Rajesh Suhane",
      "b": [{
        "ItenKey": "RAJFG2",
        "Location": "AGT",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG3",
        "Location": "AGT",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "##SURAJ",
        "Location": "BHP",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "##SURAJ123",
        "Location": "BHP",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG2",
        "Location": "BHP",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFG1",
        "Location": "BHP",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }, {
        "ItenKey": "RAJFGDS01F",
        "Location": "BHP",
        "C": [{
          "DispNo": 6696,
          "LineState": "SELECTLOT"
        }]
      }]
    }];
    this.marrHeaderHierarchyGrid = [{
      "Ordno": "Ordno",
      "CustKey": "CustKey",
      "CustNAme": "CustNAme"
    }, {
      "ItenKey": "ItenKey",
      "Location": "Location"
    }, {
      "DispNo": "DispNo",
      "LineState": "LineState"
    }];
    this.mnumGridLevel = 0;
    this.marrHierarchyColumn = [];
    this.mbShowGrid = false;
    this.msScreenName = 'DashboardData';
    this.msHyperlinkScreen = "WIDGETMaster";
  }
  ngOnInit() {
    try {
      this.msScreenWidth = window.innerWidth;
      this.msOldmsScreenWidth = this.msScreenWidth;
      this.msCustomDateFormat = this.dateFormatService.getDateFormat();
      this.mobjUserData = this.lsService.getUserSession();
      this.bmlfGetDashboardList();
      if (localStorage.getItem('dashboardLayout')) {
        let pobjLocalData = JSON.parse(localStorage.getItem('dashboardLayout'));
        console.log(pobjLocalData);
        this.mobjDashboardLayoutData = pobjLocalData.dashboardLayout;
        this.marrWidgetControlData = pobjLocalData.widgetData;
        this.marrTabList = pobjLocalData.tabList;
        this.msTabType = this.marrTabList[0].id;
        if (pobjLocalData.screenSize == this.msScreenWidth) {
          this.initGrid();
          this.setExportData({
            'pageName': 'DashboardData'
          });
        } else {
          if (this.msScreenWidth >= 768) {
            let parrJSON = JSON.parse(this.mobjDashboardLayoutData.Json);
            this.marrTabList = parrJSON;
          } else {
            let parrMobileJSON = JSON.parse(this.mobjDashboardLayoutData.MobileJson);
            this.marrTabList = parrMobileJSON;
          }
          this.bmlfSetWidgetData();
          this.bmlfSetWidgetGridData();
        }
      } else {
        this.bmlfGetDashboardLayoutData();
      }
      //this.bmlfSetHierarchicalData()
    } catch (e) {
      console.log(e);
      // this.showDashboard = false;
    }
  }

  onWindowResize() {
    this.msScreenWidth = window.innerWidth;
    if (this.msOldmsScreenWidth != this.msScreenWidth) {
      if (this.msScreenWidth >= 768) {
        let parrJSON = JSON.parse(this.mobjDashboardLayoutData.Json);
        this.marrTabList = parrJSON;
      } else {
        let parrMobileJSON = JSON.parse(this.mobjDashboardLayoutData.MobileJson);
        this.marrTabList = parrMobileJSON;
        this.msMode = "VIEW";
      }
      this.msTabType = this.marrTabList[0].id;
      // if (!CustomValidator.bmgfNullCheckValidator(this.mobjDashboardLayoutData.TileID)) {
      //   this.bmlfGetDashboardData(this.mobjDashboardLayoutData.TileID, false);
      // }
      this.bmlfSetWidgetData();
      this.bmlfSetWidgetGridData();
      this.msOldmsScreenWidth = this.msScreenWidth;
    }
  }
  /**------Switch tab option----------- */
  bmlfonSwitchTab(tab) {
    if (this.msMode == "EDIT") {
      this.bmlfSaveTileLayout();
    }
    this.msTabType = tab;
  }
  /** ------- Goto link from flow chart goto option----- */
  bmlfGotoEvent(dataSource, index) {
    if (dataSource.GOTORoutingPath.length > 0) {
      let psRoute = dataSource.GOTORoutingPath[index];
      this.router.navigate([psRoute]);
    }
  }
  /**--------Open Link dashboard popup from flow chart ----*/
  bmlfOpenLinkDashboard(dataSource, tileType) {
    let psTileId = tileType == "FlowChart" ? dataSource.DashboardTile : dataSource.ConnectedTiles;
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(psTileId)) {
      let parrFilterData = this.marrWidgetControlData.filter(x => x.DashBoardID == Number(psTileId));
      if (parrFilterData.length > 0) {
        this.mobjLinkTileData = parrFilterData[0];
        this.modalservice.open("linkDashboardModal");
      } else {
        this.bmlfGetDashboardData(psTileId, false);
      }
    }
  }
  /**--------Close Link dashboard popup from flow chart -----*/
  bmlfCloseLinkDashboardModal() {
    this.modalservice.close("linkDashboardModal");
  }
  /**----------Goto link from list view--------- */
  bmlfGotoFromListView(data, rowData) {
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(data.RoutingPath)) {
      let queryParamsObj = {
        queryParams: {}
      };
      queryParamsObj.queryParams[data.DrilldownField1] = rowData.ColumnValue1;
      if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(data.DrilldownField2)) {
        queryParamsObj.queryParams[data.DrilldownField2] = rowData.ColumnValue2;
      }
      this.router.navigate([data.RoutingPath], queryParamsObj);
    }
  }
  /**------Goto link from flow chart caption----- */
  bmlfFlowChartLink(link) {
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(link)) {
      this.router.navigate([link]);
    }
  }
  /**----------Reordering of tiles --- */
  onReorderTileLayout(e) {
    // prevent the default behavior
    e.preventDefault();
    // check whether the dragged item was dropped over another item
    const targetItem = e.items.filter(item => this.isOverlappingReorder(e, item))[0];
    e.item.col = e.newCol;
    e.item.row = e.newRow;
    if (targetItem) {
      // swap the dragged and drop target items
      targetItem.col = e.oldCol;
      targetItem.row = e.oldRow;
    }
    console.log(e);
  }
  isOverlappingReorder(e, item) {
    return item.col === e.newCol && item.row === e.newRow;
  }
  /**---------Resizing of Tiles----------- */
  onResizeTileLayout(e) {
    e.item.rowSpan = e.newRowSpan;
    e.item.colSpan = e.newColSpan;
    const targetItem = e.items.filter(item => item !== e.item)[0];
    if (targetItem && this.isOverlappingResize(e.item, targetItem)) {
      targetItem.row = e.item.row + e.item.rowSpan;
    }
  }
  isOverlappingResize(resizedItem, otherItem) {
    const hasCommonColumns = resizedItem.col + resizedItem.colSpan - 1 >= otherItem.col;
    const hasCommonRows = resizedItem.row + resizedItem.rowSpan - 1 >= otherItem.row;
    return hasCommonColumns && hasCommonRows;
  }
  /**----------Axis event of charts--------- */
  onAxisLabelClick(e) {}
  // LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '' || this.msLookupField == psValue)) {
      this.mbIsLoading = false;
      this.msLookupField = '';
      return false;
    }
    let filter1 = "";
    let filter2 = "";
    if (psField == "Tile") {
      filter1 = this.mobjTile.Type;
      filter2 = this.mobjUserData.UserId;
    }
    let psReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookUpKey,
      Filter1: filter1,
      Filter2: filter2,
      Filter3: "",
      Filter4: '',
      Filter5: ''
    };
    this.lookupService.getLookup(psReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.bmlfOpenErrorBlock('COMMON.MSG.NODATA');
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_4__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_4__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        this.mnumLineItemRowIndex = pnumRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue.toString();
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let parrFilterdArr = [];
          /** --- Check : enter key matching record found. if find single row then direct call save lookup function --*/
          let pobjFirstInput = Object.keys(this.marrLookupGridData[0])[0];
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
  /** save lookup field data */
  bmlfSaveLookupField(pobjEvent) {
    this.mbIsLoading = false;
    this.mbIsLookupModal = false;
    if (pobjEvent.type == 'custom') {
      this.mobjTile[pobjEvent.field] = pobjEvent.valueKey;
      this.mobjTile.TileId = pobjEvent.value["DashBoardID"];
    }
  }
  bmlfGetInputColumn(psfield) {
    if (psfield == 'Tile') {
      return 'TileName';
    }
  }
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    if (pobjEvent.eleId != null && pobjEvent.searchValue != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjEvent.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjEvent.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjEvent.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjEvent.eleId) != undefined) {
          document.getElementById(pobjEvent.eleId)['value'] = "";
        }
        if (this.mobjTile[pobjEvent.field] != undefined) {
          this.mobjTile[pobjEvent.field] = '';
          this.mobjTile.TileId = "";
          setTimeout(function () {
            document.getElementById(pobjEvent.eleId).focus();
          }, 10);
        }
      }
    }
    let elementExists = document.getElementById(pobjEvent.eleId);
    if (elementExists) {
      document.getElementById(pobjEvent.eleId)['value'] = "";
      this.mobjTile[pobjEvent.field] = '';
      this.mobjTile.TileId = "";
      document.getElementById(pobjEvent.eleId).focus();
    }
  }
  bmlfOnGlobalFocus(field, value) {
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  /**--------End: Lookup Functionality----- */
  bmlfGetDashboardLayoutData(psDashName = "") {
    //this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "UserID": this.mobjUserData.UserId,
      "DashboardName": psDashName
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.objDbService.bmlfGetDashboardLayoutData(psJson).subscribe(res => {
      // this.mbIsLoading = false;
      if (res != null && res.DashBaord.length > 0) {
        this.marrWidgetControlData = [];
        this.mobjDashboardLayoutData = res.DashBaord[0];
        let parrJSON = JSON.parse(this.mobjDashboardLayoutData.Json);
        let parrMobileJSON = JSON.parse(this.mobjDashboardLayoutData.MobileJson);
        if (this.msScreenWidth >= 768) {
          this.marrTabList = parrJSON;
        } else {
          this.marrTabList = parrMobileJSON;
        }
        this.msTabType = this.marrTabList[0].id;
        if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjDashboardLayoutData.TileID)) {
          this.bmlfGetDashboardData(this.mobjDashboardLayoutData.TileID, false);
        }
      }
    }).add(() => {
      // this.mbIsLoading = false;
    });
  }
  bmlfGetDashboardList() {
    let pobjReqData = {
      ScreenName: 'DashboardLayout',
      LookUpKey: 'UserInfo',
      Filter1: this.mobjUserData.UserId
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res != null) {
        if (res.LookupData.length) {
          let parrDashboardList = res.LookupData;
          this.marrDashboardList = parrDashboardList;
        }
      }
    });
  }
  bmlfGetRefresh() {
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjDashboardLayoutData.TileID)) {
      this.bmlfGetDashboardData(this.mobjDashboardLayoutData.TileID, false);
    }
  }
  /**---------------Get Dashboard Data------------ */
  bmlfGetDashboardData(DashBoardID = "", isAddTab = false) {
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "UserID": this.mobjUserData.UserId,
      "DashBoardID": DashBoardID
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.objDbService.bmlfGetDashboardData(psJson).subscribe(res => {
      if (res != null) {
        if (DashBoardID.includes("|") != undefined && DashBoardID.includes("|") == true) {
          this.marrWidgetControlData = [];
          if (res.KPIRecord.length > 0) {
            this.marrWidgetControlData = res.KPIRecord;
          }
          if (res.GraphRecord.length > 0) {
            let parrGraphRecord = res.GraphRecord;
            parrGraphRecord.forEach(element => {
              let parrSeries;
              parrSeries = (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__.groupBy)(element.Children, [{
                field: 'Title'
              }]);
              element.ChartData = parrSeries;
              this.marrWidgetControlData.push(element);
            });
          }
          if (res.ListViewRecord.length > 0) {
            let parrListViewRecord = res.ListViewRecord;
            parrListViewRecord.forEach(element => {
              this.marrWidgetControlData.push(element);
            });
          }
          if (res.FlowChartRecord.length > 0) {
            let parrFlowChartRecord = res.FlowChartRecord;
            parrFlowChartRecord.forEach(element => {
              this.marrWidgetControlData.push(element);
            });
          }
          this.bmlfSetWidgetData();
          this.bmlfGetDashboardGridViewData(DashBoardID, isAddTab);
        } else {
          let parrTileData = [];
          if (res.KPIRecord.length > 0) {
            parrTileData = res.KPIRecord;
          }
          if (res.GraphRecord.length > 0) {
            let parrGraphRecord = res.GraphRecord;
            parrGraphRecord.forEach(element => {
              let parrSeries;
              parrSeries = (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__.groupBy)(element.Children, [{
                field: 'Title'
              }]);
              element.ChartData = parrSeries;
              parrTileData.push(element);
            });
          }
          if (res.ListViewRecord.length > 0) {
            let parrListViewRecord = res.ListViewRecord;
            parrListViewRecord.forEach(element => {
              parrTileData.push(element);
            });
          }
          if (res.FlowChartRecord.length > 0) {
            let parrFlowChartRecord = res.FlowChartRecord;
            parrFlowChartRecord.forEach(element => {
              parrTileData.push(element);
            });
          }
          if (isAddTab) {
            if (parrTileData.length > 0) {
              this.marrWidgetControlData.push(parrTileData[0]);
              this.marrTabList.forEach(item => {
                if (item.id == this.msTabType) {
                  let parrItemData = {};
                  let pnumMaxOrderNo = 0;
                  let pnumMaxId = 0;
                  let a;
                  let b;
                  if (item.layout.items.length > 0) {
                    a = item.layout.items.reduce(function (prev, current) {
                      return prev.order > current.order ? prev : current;
                    });
                    b = item.layout.items.reduce(function (prev, current) {
                      return prev.id > current.id ? prev : current;
                    });
                    pnumMaxOrderNo = a.order + 1;
                    pnumMaxId = a.id + 1;
                  } else {
                    pnumMaxOrderNo = 0;
                    pnumMaxId = 1;
                  }
                  parrItemData = {
                    col: 1,
                    row: 1,
                    colSpan: 1,
                    rowSpan: 1,
                    order: pnumMaxOrderNo,
                    id: pnumMaxId,
                    TitleId: this.mobjTile.TileId,
                    reorderable: true,
                    resizable: true,
                    TileType: this.mobjTile.Type,
                    TileData: parrTileData[0]
                  };
                  if (parrItemData.TileType == "FlowChart") {
                    parrItemData.TileData.DataSource = parrTileData[0].Children[0];
                    parrItemData.TileData.ShowFlowChart = true;
                  } else if (parrItemData.TileType == "ListView") {
                    parrItemData.TileData.SearchKeyword = "";
                  }
                  item.layout.items.push(parrItemData);
                }
              });
              this.mbAddNewTileDialog = false;
            }
          } else {
            if (parrTileData.length > 0) {
              this.mobjLinkTileData = parrTileData[0];
              this.modalservice.open("linkDashboardModal");
            } else {
              this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.NOTILEISCONNECTED");
            }
          }
          this.mbIsLoading = false;
        }
      } else {
        this.mbIsLoading = false;
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfSetWidgetData() {
    this.marrTabList.forEach(item => {
      item.layout.items.forEach((ele, index) => {
        if (ele.TileType != "GridView") {
          let parrFilterData = this.marrWidgetControlData.filter(x => {
            if (x.DashBoardID == ele.TitleId && x.DashBoardType != "GridView") {
              return x;
            }
          });
          if (parrFilterData.length > 0) {
            ele.TileData = parrFilterData[0];
            if (ele.TileType == "FlowChart") {
              ele.TileData.DataSource = parrFilterData[0].Children[0];
              ele.TileData.ShowFlowChart = true;
            } else if (ele.TileType == "ListView") {
              ele.TileData.SearchKeyword = "";
            }
          } else {
            item.layout.items.splice(index, 1);
          }
        }
      });
    });
  }
  // bmlfGetDashboardGridViewData(DashBoardID = "", isAddTab = false) {
  //   this.mbIsLoading = true;
  //   let pobjOData = { HeaderData: [], Response: [] };
  //   pobjOData.HeaderData.push({
  //     "UserID": this.mobjUserData.UserId,
  //     "DashBoardID": DashBoardID
  //   });
  //   pobjOData.Response.push({
  //     "ResponseText": "",
  //     "ErrorCode": ""
  //   })
  //   let psJData = JSON.stringify(pobjOData);
  //   let psTempjData = JSON.stringify(psJData);
  //   let psJson = '{"JSON":' + psTempjData + '}';
  //   this.objDbService.bmlfGetGridViewData(psJson).subscribe(
  //     res => {
  //       if (res != null && res.DashBaord != undefined) {
  //         if (DashBoardID.includes("|") != undefined && DashBoardID.includes("|") == true) {
  //           if (res.DashBaord.length > 0) {
  //             let parrGridViewRecord = res.DashBaord;
  //             parrGridViewRecord.forEach(element => {
  //               element.Children = res[element.DashBoardID];
  //               element.Columns = [];
  //               element.GridSetting = {};
  //               for (var key in element.Children[0]) {
  //                 element.Columns.push({
  //                   'field': key, 'title': key, 'width': '100', format: "", type: "text", filter: "", hidden: false
  //                 })
  //               }
  //               element.GridSetting = {
  //                 state: {
  //                   skip: 0,
  //                   take: 30,
  //                   group: [],
  //                   filter: {
  //                     logic: 'and',
  //                     filters: []
  //                   }
  //                 },
  //                 columnsConfig: [],
  //                 gridData: { "data": [], "total": 0 },
  //                 filterEnabled: false
  //               };
  //               this.marrWidgetControlData.push(element);
  //             });
  //             this.bmlfSetWidgetGridData()
  //             //this.ShowGridView = true;
  //           }
  //           //this.ShowGridView = true;
  //         } else {
  //           let parrTileData = [];
  //           if (res.DashBaord.length > 0) {
  //             let parrGridViewRecord = res.DashBaord;
  //             parrGridViewRecord.forEach(element => {
  //               element.Children = res[element.DashBoardID];
  //               element.Columns = [];
  //               element.GridSetting = {};
  //               for (var key in element.Children[0]) {
  //                 element.Columns.push({
  //                   'field': key, 'title': key, 'width': '100', format: "", type: "text", filter: "", hidden: false
  //                 })
  //               }
  //               element.GridSetting = {
  //                 state: {
  //                   skip: 0,
  //                   take: 30,
  //                   group: [],
  //                   filter: {
  //                     logic: 'and',
  //                     filters: []
  //                   }
  //                 },
  //                 columnsConfig: [],
  //                 gridData: { "data": [], "total": 0 },
  //                 filterEnabled: false
  //               };
  //               parrTileData.push(element);
  //             });
  //           }
  //           if (isAddTab) {
  //             this.marrWidgetControlData.push(parrTileData[0]);
  //             this.marrTabList.forEach(item => {
  //               if (item.id == this.msTabType) {
  //                 let parrItemData: any = {};
  //                 let pnumMaxOrderNo = 0;
  //                 let pnumMaxId = 0;
  //                 let a: any;
  //                 let b: any;
  //                 if (item.layout.items.length > 0) {
  //                   a = item.layout.items.reduce(function (prev, current) {
  //                     return (prev.order > current.order) ? prev : current
  //                   })
  //                   b = item.layout.items.reduce(function (prev, current) {
  //                     return (prev.id > current.id) ? prev : current
  //                   })
  //                   pnumMaxOrderNo = a.order + 1;
  //                   pnumMaxId = a.id + 1;
  //                 } else {
  //                   pnumMaxOrderNo = 0;
  //                   pnumMaxId = 1;
  //                 }
  //                 parrItemData = { col: 1, row: 1, colSpan: 1, rowSpan: 1, order: pnumMaxOrderNo, id: pnumMaxId, TitleId: this.mobjTile.TileId, reorderable: true, resizable: true, TileType: this.mobjTile.Type, TileData: parrTileData[0], GridData:[] };
  //                 parrItemData.TileData.SearchKeyword = "";
  //                 parrItemData.TileData.ShowGrid = true;                  
  //                 parrItemData.GridData.DashBaordData=parrTileData[0].Children;
  //                 this.mbShowGrid=true;
  //                 item.layout.items.push(parrItemData);
  //               }
  //             })
  //             //this.ShowGridView = true;
  //             this.mbAddNewTileDialog = false;
  //           } else {
  //             if (parrTileData.length > 0) {
  //               this.mobjLinkTileData = parrTileData[0];
  //               this.modalservice.open("linkDashboardModal");
  //             } else {
  //               this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.NOTILEISCONNECTED");
  //             }
  //           }
  //           this.mbIsLoading = false;
  //           this.initGrid();
  //           this.setExportData({ 'pageName': 'DashboardData' });
  //         }
  //       } else {
  //         this.mbIsLoading = false;
  //       }
  //     }
  //   ).add(() => {
  //     this.mbIsLoading = false;
  //   })
  // }
  bmlfGetDashboardGridViewData(DashBoardID = "", isAddTab = false) {
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "UserID": this.mobjUserData.UserId,
      "DashBoardID": DashBoardID
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.objDbService.bmlfGetGridViewData(psJson).subscribe(res => {
      if (res != null && res.DashBaord != undefined) {
        if (DashBoardID.includes("|") != undefined && DashBoardID.includes("|") == true) {
          if (res.DashBaord.length > 0) {
            let parrGridViewRecord = res.DashBaord;
            let parrData = {};
            parrGridViewRecord.forEach(element => {
              parrData = this.bmlfGetGridViewData(element.DashBoardID, res);
              element.Children = parrData;
              element.Columns = [];
              element.GridSetting = {};
              this.marrWidgetControlData.push(element);
            });
            this.bmlfSetWidgetGridData();
            //this.ShowGridView = true;
          }
          //this.ShowGridView = true;
        } else {
          let parrTileData = [];
          if (res.DashBaord.length > 0) {
            let parrGridViewRecord = res.DashBaord;
            let parrData = {};
            parrGridViewRecord.forEach(element => {
              parrData = this.bmlfGetGridViewData(element.DashBoardID, res);
              element.Children = parrData;
              element.Columns = [];
              element.GridSetting = {};
              parrTileData.push(element);
            });
          }
          if (isAddTab) {
            this.marrWidgetControlData.push(parrTileData[0]);
            this.marrTabList.forEach(item => {
              if (item.id == this.msTabType) {
                let parrItemData = {};
                let pnumMaxOrderNo = 0;
                let pnumMaxId = 0;
                let a;
                let b;
                if (item.layout.items.length > 0) {
                  a = item.layout.items.reduce(function (prev, current) {
                    return prev.order > current.order ? prev : current;
                  });
                  b = item.layout.items.reduce(function (prev, current) {
                    return prev.id > current.id ? prev : current;
                  });
                  pnumMaxOrderNo = a.order + 1;
                  pnumMaxId = a.id + 1;
                } else {
                  pnumMaxOrderNo = 0;
                  pnumMaxId = 1;
                }
                parrItemData = {
                  col: 1,
                  row: 1,
                  colSpan: 1,
                  rowSpan: 1,
                  order: pnumMaxOrderNo,
                  id: pnumMaxId,
                  TitleId: this.mobjTile.TileId,
                  reorderable: true,
                  resizable: true,
                  TileType: this.mobjTile.Type,
                  TileData: parrTileData[0],
                  GridData: []
                };
                parrItemData.TileData.SearchKeyword = "";
                parrItemData.TileData.ShowGrid = true;
                parrItemData.GridData.DashBaordData = parrTileData[0].Children;
                item.layout.items.push(parrItemData);
              }
            });
            //this.ShowGridView = true;
            this.mbAddNewTileDialog = false;
          } else {
            if (parrTileData.length > 0) {
              this.mobjLinkTileData = parrTileData[0];
              this.modalservice.open("linkDashboardModal");
            } else {
              this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.NOTILEISCONNECTED");
            }
          }
          this.mbIsLoading = false;
          this.initGrid();
          this.setExportData({
            'pageName': 'DashboardData'
          });
        }
      } else {
        this.mbIsLoading = false;
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfGetGridViewData(DashBoardID, ele) {
    let parrData = {};
    let psKey = '';
    Object.keys(ele).forEach(key => {
      if (key.toLowerCase().includes(DashBoardID + '-')) {
        psKey = key;
        key = key.replace(DashBoardID + '-', "").trim();
        parrData[key] = ele[psKey];
      }
    });
    return parrData;
  }
  bmlfSetWidgetGridData() {
    this.marrTabList.forEach(item => {
      item.layout.items.forEach((ele, index) => {
        if (ele.TileType == "GridView") {
          let parrFilterData = this.marrWidgetControlData.filter(x => {
            if (x.DashBoardID == ele.TitleId && x.DashBoardType == "GridView") {
              return x;
            }
          });
          if (parrFilterData.length > 0) {
            ele.TileData = parrFilterData[0];
            ele.TileData.SearchKeyword = "";
            ele.TileData.ShowGrid = true;
          } else {
            item.layout.items.splice(index, 1);
          }
        }
      });
    });
    this.initGrid();
    this.setExportData({
      'pageName': 'DashboardData'
    });
  }
  exportToExcel(grid, data) {
    this.gridDataList = data.Children;
    this.setExportData({
      'pageName': data.TitleName
    });
    grid.saveAsExcel();
  }
  exportToPDF(grid, data) {
    this.gridDataList = data.Children;
    //   this.initGrid();
    this.setExportData({
      'pageName': data.TitleName
    });
    setTimeout(() => {
      grid.saveAsPDF();
    }, 100);
  }
  // public bmlfResetGridSettings(id) {
  //   this.bmlfOnResetGridSettings(id.toString(), "");
  // }
  // public bmlfSaveGridSetting(id, colConfig, gridSet): void {
  //   gridSet.columnsConfig = colConfig
  //   this.bmlfOnSaveGrid(id.toString(),gridSet);
  // }
  bmlFilterSetting(x) {
    x.filterEnabled = !x.filterEnabled;
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  /**--------------Add new tab for dashboard------ */
  bmlfOpenAddTabModal() {
    this.msTabName = "";
    this.mbAddTabDialog = true;
  }
  bmlfAddNewTabAction(type) {
    if (type == "Cancel") {
      this.mbAddTabDialog = false;
    } else {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.msTabName)) {
        this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.TABNAMEREQ");
      } else {
        let parrFilterData = this.marrTabList.filter(x => x.name == this.msTabName);
        if (parrFilterData.length > 0) {
          this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.DUPLICATETABNAME");
        } else {
          let pobjCreateObj = {
            columns: 6,
            gap: 5,
            reorderable: true,
            resizable: true,
            rowHeight: 200,
            items: []
          };
          this.marrTabList.push({
            id: this.msTabName,
            name: this.msTabName,
            layout: pobjCreateObj
          });
          this.msTabType = this.msTabName;
          this.msMode = "EDIT";
          this.mbPanOrgChart = true;
          this.mbZoomOrgChart = true;
          this.mbAddTabDialog = false;
        }
      }
    }
  }
  bmlfEditTab() {
    this.msMode = "EDIT";
    this.mbPanOrgChart = true;
    this.mbZoomOrgChart = true;
    this.marrTabList.forEach(item => {
      if (item.id == this.msTabType) {
        item.layout.reorderable = true;
        item.layout.resizable = true;
      }
    });
  }
  bmlfDeleteTab(id) {
    this.msDeleteTabId = id;
    this.mbShowDeleteTabDialog = true;
    console.log(this.marrTabList.length);
  }
  bmlfonDialogTabDeleteAction(type) {
    if (type == "Yes") {
      if (this.marrTabList.length == 1) {
        let pobjReqData = {
          ScreenName: 'BMEWEBDashboard',
          LookUpKey: 'DeleteDashboard',
          Filter1: this.mobjUserData.UserId,
          Filter2: this.mobjDashboardLayoutData.DashboardName
        };
        this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
          if (res != null) {
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("DASHBOARDPAGE.MSG.DELETEDASHBOARDSUCCESSFULLY"));
            this.msMode = "VIEW";
            this.mbPanOrgChart = false;
            this.mbZoomOrgChart = false;
            let parrFilterData = this.marrDashboardList.filter(x => x.DashboardName != this.mobjDashboardLayoutData.DashboardName);
            this.marrDashboardList = parrFilterData;
            this.bmlfGetDashboardLayoutData();
          }
        });
      } else {
        let parrFilterTab = this.marrTabList.filter(x => x.id != this.msDeleteTabId);
        this.marrTabList = parrFilterTab;
        this.bmlfSaveLayoutTabWise(undefined);
        if (this.marrTabList.length > 0) {
          this.msTabType = this.marrTabList[0].id;
        }
      }
      this.mbShowDeleteTabDialog = false;
    } else {
      this.mbShowDeleteTabDialog = false;
    }
  }
  bmlfChangeTileType() {
    this.mobjTile.Tile = "";
  }
  bmlfOpenNewTileModal() {
    this.mobjTile = {
      Type: "KPI",
      Tile: "",
      TileId: ""
    };
    this.mbAddNewTileDialog = true;
  }
  bmlfAddNewTileAction(type) {
    if (type == "Cancel") {
      this.mbAddNewTileDialog = false;
    } else {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjTile.Tile)) {
        this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.TILENAMEREQ");
      } else {
        let parrFilterTile = this.marrWidgetControlData.filter(x => x.DashBoardID == this.mobjTile.TileId);
        if (parrFilterTile.length == 0) {
          if (this.mobjTile.Type == "GridView") {
            this.bmlfGetDashboardGridViewData(this.mobjTile.TileId.toString(), true);
          } else {
            this.bmlfGetDashboardData(this.mobjTile.TileId.toString(), true);
          }
        } else {
          this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.ALREADYADDED");
        }
      }
    }
  }
  bmlfRemoveTile(idx) {
    this.marrTabList.forEach(item => {
      if (item.id == this.msTabType) {
        let pobj = item.layout.items[idx];
        let parrFilterTile = this.marrWidgetControlData.filter(x => x.DashBoardID != pobj.TitleId);
        this.marrWidgetControlData = parrFilterTile;
        item.layout.items.splice(idx, 1);
      }
    });
  }
  bmlfSaveTileLayout() {
    let a = document.getElementById("cmdSave" + this.msTabType);
    a.click();
  }
  bmlfSaveLayoutTabWise(tilelayout, option = "") {
    if (tilelayout != undefined) {
      let parr = tilelayout.items.toArray();
      if (parr.length > 0) {
        let parrFilterTabWise = this.marrTabList.filter(y => y.id == this.msTabType);
        if (parrFilterTabWise != undefined && parrFilterTabWise.length > 0) {
          parr.forEach((ele, index) => {
            let psId = parr[index].elem.nativeElement.getAttribute("id");
            parrFilterTabWise[0].layout.reorderable = false;
            parrFilterTabWise[0].layout.resizable = false;
            let parrFilterData = parrFilterTabWise[0].layout.items.filter(x => x.id == psId);
            if (parrFilterData.length > 0) {
              parrFilterData[0].col = ele.col;
              parrFilterData[0].colSpan = ele.colSpan;
              parrFilterData[0].row = ele.row;
              parrFilterData[0].rowSpan = ele.rowSpan;
              parrFilterData[0].order = ele.order;
            }
          });
        }
      }
    }
    //let psDashName = "";
    if (this.mobjDashboardLayoutData.UserID == "Default") {
      this.msDashName = "";
      this.msDashName = this.mobjDashboardLayoutData.DashboardName + "_" + this.mobjUserData.UserId;
      this.mbChangeDefaultDashNameDialog = true;
      //  psDashName = this.mobjDashboardLayoutData.DashboardName + "_" + this.mobjUserData.UserId;
    } else {
      //psDashName = this.mobjDashboardLayoutData.DashboardName
      this.bmlfSaveDashboardData(this.mobjDashboardLayoutData.DashboardName, option);
    }
  }
  bmlfSaveDashboardData(psDashName, option) {
    let psTileIds = "";
    let parrSaveJson = [];
    let parrMobileSaveJson = [];
    let psStringify = JSON.stringify(this.marrTabList);
    parrSaveJson = JSON.parse(psStringify);
    parrSaveJson.forEach(ele => {
      ele.layout.items.forEach(element => {
        psTileIds += element.TitleId + "|";
        element.TileData = {};
      });
    });
    parrMobileSaveJson = JSON.parse(psStringify);
    parrMobileSaveJson.forEach(ele => {
      ele.layout.columns = 1;
      ele.layout.items.forEach((element, index) => {
        let pobjPrev = index == 0 ? element : ele.layout.items[index - 1];
        element.col = 1;
        element.row = index == 0 ? index + 1 : pobjPrev.row + pobjPrev.rowSpan;
        element.colSpan = 1;
        element.TileData = {};
      });
    });
    this.mobjDashboardLayoutData.MobileJson = JSON.stringify(parrMobileSaveJson);
    //console.log(JSON.stringify(parrMobileSaveJson));
    this.mbIsLoading = true;
    let pobjJData = {
      HeaderData: [{
        UserID: this.mobjUserData.UserId,
        DashboardName: psDashName,
        TileID: psTileIds,
        Json: JSON.stringify(parrSaveJson),
        MobileJson: JSON.stringify(parrMobileSaveJson)
      }],
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.objDbService.bmlfSaveDashboardLayoutData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.msMode = "VIEW";
        this.mbPanOrgChart = false;
        this.mbZoomOrgChart = false;
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("DASHBOARDPAGE.MSG.SAVELAYOUT"));
        if (option == "NewDash") {
          this.marrDashboardList.push({
            DashboardName: this.msDashName,
            Json: "",
            TileID: "",
            UserID: this.mobjUserData.UserId
          });
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfChangeDashboardNameAction(psType) {
    if (psType == "Cancel") {
      this.mbChangeDefaultDashNameDialog = false;
    } else {
      let parrFilterDashboard = this.marrDashboardList.filter(x => x.DashboardName == this.msDashName);
      if (parrFilterDashboard.length > 0) {
        this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.DUPLICATEDASHNAME");
        return;
      }
      this.bmlfSaveDashboardData(this.msDashName, "NewDash");
      this.mbChangeDefaultDashNameDialog = false;
    }
  }
  bmlfOpenAddDashboardModal() {
    this.msDashName = "";
    this.msTabName = "";
    this.mbAddDashboardDialog = true;
  }
  bmlfAddNewDashboardAction(type) {
    if (type == "Cancel") {
      this.mbAddDashboardDialog = false;
    } else {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.msDashName)) {
        this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.DASHBOARDNAMEREQ");
      } else if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.msTabName)) {
        this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.TABNAMEREQ");
      } else {
        let parrFilterData = this.marrDashboardList.filter(x => x.DashboardName.toLowerCase() == this.msDashName.toLowerCase());
        if (parrFilterData.length > 0) {
          this.bmlfOpenErrorBlock("DASHBOARDPAGE.MSG.DUPLICATEDASHNAME");
        } else {
          let pobjCreateObj = {
            columns: 6,
            gap: 5,
            reorderable: true,
            resizable: true,
            rowHeight: 200,
            items: []
          };
          this.marrTabList = [];
          this.marrWidgetControlData = [];
          this.mobjDashboardLayoutData = {
            UserID: this.mobjUserData.UserId,
            DashboardName: this.msDashName,
            Json: ""
          };
          this.marrTabList.push({
            id: this.msTabName,
            name: this.msTabName,
            layout: pobjCreateObj
          });
          this.msTabType = this.msTabName;
          this.bmlfSaveLayoutTabWise(undefined, 'NewDash');
          //this.msMode = "EDIT";
          this.mbAddDashboardDialog = false;
        }
      }
    }
  }
  bmlfSaveDefaultDashboard() {
    this.mbIsLoading = true;
    let pobjJData = {
      HeaderData: [{
        UserID: this.mobjUserData.UserId,
        DashboardName: this.mobjDashboardLayoutData.DashboardName
      }],
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.objDbService.bmlfSaveDefaultDashboard(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("DASHBOARDPAGE.MSG.SAVEDEFAULTDASHBOARD"));
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  ngOnDestroy() {
    let pobjData = {
      dashboardLayout: this.mobjDashboardLayoutData,
      widgetData: this.marrWidgetControlData,
      tabList: this.marrTabList,
      screenSize: this.msScreenWidth
    };
    console.log(pobjData);
    console.log(JSON.stringify(pobjData));
    localStorage.setItem("dashboardLayout", JSON.stringify(pobjData));
  }
  // public labelContent(args: LegendLabelsContentArgs): string {
  //   return `${args.dataItem.ValueX} : ${args.dataItem.ValueY1}`;
  // }
  bmlfonlabelContent(e) {
    return e.value;
  }
  bmgfDrillDownEvent(pobjData) {
    this.mbHyerLinkData = pobjData;
  }
  bmlfSetHierarchicalData() {
    this.mnumGridLevel = this.marrHeaderHierarchyGrid.length;
    this.marrHierarchyColumn = [];
    this.marrHeaderHierarchyGrid.forEach((element, index) => {
      let columns = [];
      for (var key in element) {
        columns.push({
          'field': key,
          'title': key,
          'width': '100',
          format: "",
          type: "text",
          filter: "",
          hidden: false
        });
      }
      this.marrHierarchyColumn.push(columns);
      // this.marrHierarchyColumn.push({
      //   'field': element, 'title': element, 'width': '100', format: "", type: "text", filter: "", hidden: false
      // })
    });

    console.log(this.marrHierarchyColumn);
  }
  bmlfHowToVideo(data) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(data.HowToDo)) {
      let psCurrUrl = data.RoutingPath;
      let objScreenPermission = JSON.parse(localStorage.getItem("BMEScreePermission"));
      let psWhatsNewUrl = JSON.parse(localStorage.getItem("WhatsNewUrl"));
      let objPermission;
      objPermission = objScreenPermission.filter(x => {
        if (x.RoutingPath == psCurrUrl) {
          return x;
        }
      });
      if (objPermission.length > 0) {
        this.userFieldService.bmlfGetWhatsNewOTP().subscribe(res => {
          let otp = res.otp;
          let psPortUrl = "";
          if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(psWhatsNewUrl)) {
            psPortUrl = psWhatsNewUrl;
          } else {
            psPortUrl = this.appSettings.WhatsNewEndPoints;
          }
          let psUrl = psPortUrl + "bmeweb/howto/" + objPermission[0].MenuItem_ID + "?otp=" + otp;
          window.open(psUrl, '_blank');
        }, error => {
          console.log(error);
        }).add(() => {
          //this.mbLoadingEnabled = false
        });
      }
    } else {
      window.open(data.HowToDo, '_blank');
    }
  }
  static #_ = this.ɵfac = function DashboardpageComponent_Factory(t) {
    return new (t || DashboardpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_http_dashboard_service__WEBPACK_IMPORTED_MODULE_10__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_12__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_13__.AppSettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: DashboardpageComponent,
    selectors: [["app-dashboardpage"]],
    hostBindings: function DashboardpageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("resize", function DashboardpageComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]],
    decls: 25,
    vars: 17,
    consts: [[4, "ngIf"], [1, "inner-wrapper"], [1, "container-fluid"], [1, "widget-outer"], [1, "tab-head-sec", "dashboard-tab"], [4, "ngFor", "ngForOf"], ["id", "linkDashboardModal", 3, "modaltitle", "indexValue", "widthClass"], [1, "headerContent"], ["type", "button", "id", "cmdCloseLinkDashModal", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "bodyContent form-container dashboard-tile", "style", "display: flex; align-items: center; justify-content: center;", 4, "ngIf"], ["class", "bodyContent form-container dashboard-tile", 4, "ngIf"], [1, "footerContent"], ["type", "button", "id", "cmdCloseLinkDashboard", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "addTabDialog", "style", "z-index: 10000;", 3, "close", 4, "ngIf"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "addDashDialog", "style", "z-index: 10000;", 3, "close", 4, "ngIf"], ["id", "changeDefaultDashNameDialog", "style", "z-index: 10000;", 3, "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "cmdRowTabToggle", 1, "tab-item", 3, "ngClass", "click"], ["class", "close-tab", 3, "click", 4, "ngIf"], [1, "close-tab", 3, "click"], [1, "fa", "fa-remove", 2, "margin", "0"], ["style", "float: right; margin-top: -25px;", 4, "ngIf"], [3, "hidden"], [1, "dashboard-tile"], [3, "id", "columns", "autoFlow", "rowHeight", "gap", "reorderable", "resizable", "reorder", "resize"], ["tilelayout", ""], [3, "id", "col", "row", "rowSpan", "colSpan", "ngClass", 4, "ngFor", "ngForOf"], [2, "float", "right", "margin-top", "-25px"], ["title", "Add Tile", 1, "dash-right-head", 3, "id", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["title", "Save", 1, "dash-right-head", 3, "id", "click"], ["aria-hidden", "true", 1, "fa", "fa-save"], [1, "dash-right-head"], ["id", "btnDashboardGroup", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["aria-labelledby", "btnDashboardGroup", 1, "dropdown-menu"], ["class", "dash-right-head", 4, "ngIf"], ["title", "Refresh", "id", "cmdRefresh", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [3, "click"], ["title", "Tab", "id", "cmdTabs", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["aria-hidden", "true", 1, "fa", "fa-columns"], ["aria-labelledby", "cmdTabs", 1, "dropdown-menu"], [3, "id", "click"], ["title", "Dashboard", "id", "cmdDashboards", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart"], ["aria-labelledby", "cmdDashboards", 1, "dropdown-menu"], [3, "id", "col", "row", "rowSpan", "colSpan", "ngClass"], [1, "tile-head"], [4, "ngIf", "ngIfElse"], ["templateName", ""], ["class", "tile-head-close", 3, "click", 4, "ngIf"], [1, "tile-head-close", 3, "click"], [1, "fa", "fa-remove"], [1, "body-content"], [1, "icon", 3, "ngClass"], [1, "card-value", 3, "ngStyle"], ["class", "fa fa-caret-down red", 4, "ngIf"], ["class", "fa fa-caret-up green", 4, "ngIf"], [1, "tile-footer"], [1, "foot-row"], [1, "addInfo"], [1, "right-content"], ["class", "fa fa-arrow-down red", 4, "ngIf"], ["class", "fa fa-arrow-up green", 4, "ngIf"], [1, "fa", "fa-caret-down", "red"], [1, "fa", "fa-caret-up", "green"], [1, "fa", "fa-arrow-down", "red"], [1, "fa", "fa-arrow-up", "green"], ["renderAs", "canvas", 3, "pannable", "zoomable", "transitions", "categoryAxis", "seriesColors", "axisLabelClick"], ["position", "bottom", "orientation", "horizontal"], ["format", "{0}"], ["field", "Value", "categoryField", "Interval", 3, "data", "name", "type", 4, "ngFor", "ngForOf"], ["field", "Value", "categoryField", "Interval", 3, "data", "name", "type"], ["position", "bottom"], ["type", "pie", "field", "Value", "categoryField", "Title", 3, "autoFit", "data", "labels"], [1, "list-view", 3, "data", "navigable", "itemStyle"], ["kendoListViewHeaderTemplate", ""], ["kendoListViewItemTemplate", ""], [1, "header"], ["placeholder", "Search...", "id", "txtSearchKeyword", 1, "filter-input", 3, "ngModel", "ngModelChange"], ["kendoTextBoxSuffixTemplate", ""], [1, "k-icon", "k-i-search"], [1, "list-view-head", 3, "click"], [2, "float", "right"], ["chartClass", "custom-org h_chart html-org-chart", 1, "dash-flow-chart", 3, "datasource", "nodeTemplate", "pan", "zoom"], ["customTemplate", ""], [1, "inner-node-block"], [1, "node-icon", 3, "ngClass"], [1, "node-content", 2, "cursor", "pointer", "text-decoration-line", "underline", 3, "click"], [1, "btn-group-sec", "custom_btn_sec"], ["title", "GoTo", "id", "cmdGOTO", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default"], ["aria-hidden", "true", 1, "fa", "fa-link"], ["aria-labelledby", "cmdGOTO", 1, "dash-html-menu", "dropdown-menu"], ["title", "How to", 1, "btn", "btn-default", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-video-camera"], ["title", "Widget", 1, "btn", "btn-default", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-dashboard"], ["id", "G1", "style", "z-index: 10000000;", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2", 4, "ngIf"], ["id", "G1", 2, "z-index", "10000000", 3, "GridData", "ScreenName", "RecordKey1", "RecordKey2"], [1, "bodyContent", "form-container", "dashboard-tile", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "card", 2, "min-width", "200px", "min-height", "140px"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "bodyContent", "form-container", "dashboard-tile"], [1, "card"], ["class", "card-body", "style", "height: 400px;", 4, "ngIf"], [1, "card-body", 2, "height", "400px"], ["field", "Value", "categoryField", "Interval", "type", "column", 3, "data", "name", 4, "ngFor", "ngForOf"], ["field", "Value", "categoryField", "Interval", "type", "column", 3, "data", "name"], ["scrollable", "virtual", 1, "gridloading", "custom_h_grid", "max_scroll", "low_space_table", "heightAuto", "dashboard-grid", 3, "kendoGridGroupBinding", "group", "pageable", "sortable", "filterable", "resizable", "reorderable", "groupable", "sort", "filter", "rowHeight", "pageSize", "skip", "dataStateChange"], ["grid", "kendoGrid"], [3, "noRecords"], ["noRecords", "No Record yet created.", "kendoGridToolbarTemplate", ""], [3, "field", "title", "format", "filter", "hidden", "width", "filterable", 4, "ngFor", "ngForOf"], [3, "exportData"], [1, "grid-search", "xs_no_float"], ["type", "text", "id", "txtSearchKeyword", "name", "Search", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "grid-action-buttons"], ["id", "idfilterEnabled", 1, "k-button", "btn-icons", "min_h_24", 3, "click"], ["class", "fa fa-filter upper_filter", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-filter", "mr-0", 2, "font-size", "12px"], ["title", "Export to Excel", 1, "k-button", "btn-icons", 3, "click"], ["viewBox", "0 0 450 450", 1, "grid-svg-icon"], [0, "xlink", "href", "#excelFileIcon"], ["title", "Export to PDF", 1, "k-button", "btn-icons", 3, "click"], ["viewBox", "0 0 512 512", 1, "grid-svg-icon"], [0, "xlink", "href", "#pdfFileIcon"], ["aria-hidden", "true", 1, "fa", "fa-filter", "upper_filter"], [3, "field", "title", "format", "filter", "hidden", "width", "filterable"], ["id", "addTabDialog", 2, "z-index", "10000", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "id", "txtTabName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["kendoButton", "", "id", "cmdOkNewTabAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelNewTabAction", 3, "click"], ["id", "cmbTileType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "id", "txtTile", 1, "form-control", 3, "ngModel", "ngModelChange", "blur", "focus"], ["id", "cmdTileLookup", 1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], ["kendoButton", "", "id", "cmdOkNewTileAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelNewTileAction", 3, "click"], [3, "ngValue"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], ["style", "margin: 30px; text-align: center;", 4, "ngIf"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoDelAction", 3, "click"], [2, "margin", "30px", "text-align", "center"], ["id", "addDashDialog", 2, "z-index", "10000", 3, "close"], ["type", "text", "id", "txtDashName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "txtTabDashName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["kendoButton", "", "id", "cmdOkNewDashAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelNewDashAction", 3, "click"], ["id", "changeDefaultDashNameDialog", 2, "z-index", "10000", 3, "close"], ["kendoButton", "", "id", "cmdOkChangeDashAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelChangeDashAction", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"]],
    template: function DashboardpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, DashboardpageComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "aside", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, DashboardpageComponent_ng_container_5_Template, 4, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, DashboardpageComponent_ng_container_6_Template, 7, 10, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "bm-modal", 6)(8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_Template_button_click_9_listener() {
          return ctx.bmlfCloseLinkDashboardModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, DashboardpageComponent_div_12_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, DashboardpageComponent_div_13_Template, 5, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function DashboardpageComponent_Template_button_click_15_listener() {
          return ctx.bmlfCloseLinkDashboardModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, DashboardpageComponent_kendo_dialog_18_Template, 22, 13, "kendo-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, DashboardpageComponent_kendo_dialog_19_Template, 33, 18, "kendo-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, DashboardpageComponent_kendo_dialog_20_Template, 15, 13, "kendo-dialog", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, DashboardpageComponent_kendo_dialog_21_Template, 30, 17, "kendo-dialog", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, DashboardpageComponent_kendo_dialog_22_Template, 22, 13, "kendo-dialog", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](24, DashboardpageComponent_app_custom_lookup_modal_24_Template, 1, 1, "app-custom-lookup-modal", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.marrTabList);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.marrTabList);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("modaltitle", ctx.mobjLinkTileData.TitleName)("indexValue", 10000)("widthClass", "width900");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mobjLinkTileData.DashBoardType == "KPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mobjLinkTileData.DashBoardType != "KPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 15, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbAddTabDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbAddNewTileDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteTabDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbAddDashboardDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbChangeDefaultDashNameDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.ChartComponent, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.LegendComponent, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.SeriesComponent, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.SeriesItemComponent, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.SeriesTooltipComponent, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__.TooltipComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.ToolbarTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.GroupBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.ColumnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_29__.ButtonComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_30__.TileLayoutComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_30__.TileLayoutItemComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_30__.TileLayoutItemHeaderComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_30__.TileLayoutItemBodyComponent, _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_31__.ItemTemplateDirective, _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_31__.HeaderTemplateDirective, _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_31__.ListViewComponent, _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_14__.GridExportComponent, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_15__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__.ModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_32__.TextBoxComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_32__.TextBoxSuffixTemplateDirective, _shared_components_hierarchical_data_grid_hierarchical_data_grid_component__WEBPACK_IMPORTED_MODULE_18__.HierarchicalDataGridComponent, _shared_ng_orgchart_chart_container_chart_container_component__WEBPACK_IMPORTED_MODULE_19__.ChartContainerComponent, _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_20__.SearchData, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe],
    styles: [".gridHeaderCaption[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.dashboard-tile[_ngcontent-%COMP%]   .k-tilelayout[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .k-card[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-head[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .k-card-header[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n  overflow: inherit;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .KPI[_ngcontent-%COMP%]   .k-card-header[_ngcontent-%COMP%] {\n  border: none;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-head-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  color: #a1a1a1;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .k-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .body-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: calc(100% - 40px);\n}\n.dashboard-tile[_ngcontent-%COMP%]   .body-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #1088bf;\n  margin-top: -10px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .body-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 25px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .caret-icon[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  position: absolute;\n  bottom: -12px;\n  right: 1px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #d51e1e;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: rgb(3, 129, 54);\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: calc(100% - 15px);\n  height: 38px;\n  line-height: 25px;\n  padding: 5px 0;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-footer[_ngcontent-%COMP%]   .foot-row[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #898686;\n  line-height: 16px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 99%;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-footer[_ngcontent-%COMP%]   .addInfo[_ngcontent-%COMP%] {\n  max-width: 116px;\n  display: inline-block;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .tile-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  float: right;\n  font-size: 13px;\n  color: #d30000;\n  display: inline-block;\n  max-width: 50px;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .k-chart[_ngcontent-%COMP%], .dashboard-tile[_ngcontent-%COMP%]   .k-stockchart[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 6px;\n  color: #000;\n  font-weight: 500;\n}\n.dashboard-tile[_ngcontent-%COMP%]   .list-view[_ngcontent-%COMP%] {\n  height: 100%;\n  border-top: 0;\n}\n\n#btnDashboardGroup[_ngcontent-%COMP%] {\n  color: #052154;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.heightAuto[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n  .k-grid.custom_h_grid.max_scroll.dashboard-grid .k-grid-container {\n  max-height: 100% !important;\n}\n\n  .k-grid-table {\n  min-height: 100% !important;\n}\n\n  .k-grid.custom_h_grid.dashboard-grid .k-grid-container {\n  min-height: calc(100% - 100px);\n  max-height: 600px;\n}\n\n  .k-grouping-header-flex {\n  flex-flow: initial;\n}\n\n  .dashboard-grid.k-grid .k-indicator-container {\n  font-size: 12px;\n}\n\n  .dashboard-grid .k-grid-toolbar {\n  padding: 0;\n  font-size: 8px;\n}\n\n  .dashboard-grid .k-grid-toolbar .upper_filter {\n  position: absolute;\n  color: #eee;\n  font-size: 12px;\n  left: 10px;\n  top: 4px;\n}\n\n  .dashboard-grid .k-grouping-header-flex > :last-child.k-indicator-container {\n  line-height: 18px;\n}\n\n.grid-search[_ngcontent-%COMP%] {\n  max-width: calc(100% - 113px) !important;\n}\n\nbutton[title=\"Export to Excel\"][_ngcontent-%COMP%], button[title=\"Export to PDF\"][_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n  .dashboard-setting-dropdown {\n  font-size: 13px !important;\n  margin-left: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmRwYWdlL2Rhc2hib2FyZHBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZHBhZ2UvZGFzaGJvYXJkcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FES0k7RUFDSSxpQkFBQTtBQ0ZSO0FESUk7RUFDSSxZQUFBO0FDRlI7QURJSTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRlI7QURJSTtFQUNJLFlBQUE7QUNGUjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNSUjtBRFVJO0VBQ0ksVUFBQTtBQ1JSO0FEVUk7RUFDSSxhQUFBO0VBQ0osbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDUko7QURVSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNSUjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDUlI7QURVSTtFQUNJLGVBQUE7RUFDSixnQkFBQTtBQ1JKO0FEVUk7RUFDSSxTQUFBO0VBQ0osVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ1JKO0FEVUk7RUFDSSxjQUFBO0FDUlI7QURVSTtFQUNJLHNCQUFBO0FDUlI7QURVSTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0k7RUFDSSxlQUFBO0VBQ0osY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNUSjtBRFdJO0VBQ0ksZ0JBQUE7RUFDSixxQkFBQTtBQ1RKO0FEWUk7RUFDSSxZQUFBO0VBQ0osZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNWSjtBRFlJO0VBQ0ksWUFBQTtBQ1ZSO0FEWUk7RUFDSSxZQUFBO0VBQ0osaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNWSjtBRGFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNYUjs7QURlQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURjQTtFQUNJLHVCQUFBO0FDWEo7O0FEYUE7RUFDSSwyQkFBQTtBQ1ZKOztBRFlBO0VBQ0ksMkJBQUE7QUNUSjs7QURXQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQTtFQUNJLGtCQUFBO0FDUEo7O0FEU0E7RUFDQSxlQUFBO0FDTkE7O0FEUUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRE9DO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDSko7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBREtBO0VBQ1Esd0NBQUE7QUNGUjs7QURJQTtFQUNJLGdDQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0FDREoiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZEhlYWRlckNhcHRpb257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kYXNoYm9hcmQtdGlsZSB7XHJcbiAgICAvLyAub3JnY2hhcnQtY29udGFpbmV7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB9XHJcbiAgICAuay10aWxlbGF5b3V0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgfVxyXG4gICAgLmstY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgLnRpbGUtaGVhZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuay1jYXJkLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLktQSSAuay1jYXJkLWhlYWRlcntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAvLyAuay1jYXJkLWhlYWRlciBhe1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogOHB4O1xyXG4gICAgLy8gcmlnaHQ6IDEwcHg7XHJcbiAgICAvLyBjb2xvcjogI2ExYTFhMTtcclxuICAgIC8vIH1cclxuICAgIC50aWxlLWhlYWQtY2xvc2V7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYTFhMWExO1xyXG4gICAgfVxyXG4gICAgLmstY2FyZC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYm9keS1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIH1cclxuICAgIC5ib2R5LWNvbnRlbnQgLmljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTA4OGJmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvZHktY29udGVudCBwe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC12YWx1ZXtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmNhcmV0LWljb257XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEycHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgfVxyXG4gICAgLnJlZHtcclxuICAgICAgICBjb2xvcjogI2Q1MWUxZTtcclxuICAgIH1cclxuICAgIC5ncmVlbntcclxuICAgICAgICBjb2xvcjogcmdiKDMgMTI5IDU0KTtcclxuICAgIH1cclxuICAgIC50aWxlLWZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgIC8vYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgLmZvb3Qtcm93e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODk4Njg2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIH1cclxuICAgIC5hZGRJbmZve1xyXG4gICAgICAgIG1heC13aWR0aDogMTE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAudGlsZS1mb290ZXIgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNkMzAwMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuay1jaGFydCwgLmstc3RvY2tjaGFydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRlbnR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qtdmlld3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgIH1cclxuICBcclxufVxyXG4jYnRuRGFzaGJvYXJkR3JvdXB7XHJcbiAgICBjb2xvcjogIzA1MjE1NDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmhlaWdodEF1dG97XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmstZ3JpZC5jdXN0b21faF9ncmlkLm1heF9zY3JvbGwuZGFzaGJvYXJkLWdyaWQgLmstZ3JpZC1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5rLWdyaWQtdGFibGV7XHJcbiAgICBtaW4taGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmstZ3JpZC5jdXN0b21faF9ncmlkLmRhc2hib2FyZC1ncmlkIC5rLWdyaWQtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbjo6bmctZGVlcCAuay1ncm91cGluZy1oZWFkZXItZmxleHtcclxuICAgIGZsZXgtZmxvdzogaW5pdGlhbDtcclxufVxyXG46Om5nLWRlZXAgLmRhc2hib2FyZC1ncmlkLmstZ3JpZCAuay1pbmRpY2F0b3ItY29udGFpbmVye1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtZ3JpZCAuay1ncmlkLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuIDo6bmctZGVlcCAuZGFzaGJvYXJkLWdyaWQgLmstZ3JpZC10b29sYmFyIC51cHBlcl9maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtZ3JpZCAuay1ncm91cGluZy1oZWFkZXItZmxleCA+IDpsYXN0LWNoaWxkLmstaW5kaWNhdG9yLWNvbnRhaW5lcntcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5ncmlkLXNlYXJjaHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDExM3B4KSAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvblt0aXRsZT1cIkV4cG9ydCB0byBFeGNlbFwiXSxidXR0b25bdGl0bGU9XCJFeHBvcnQgdG8gUERGXCJde1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFzaGJvYXJkLXNldHRpbmctZHJvcGRvd257XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuZ3JpZEhlYWRlckNhcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhc2hib2FyZC10aWxlIC5rLXRpbGVsYXlvdXQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuay1jYXJkIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmRhc2hib2FyZC10aWxlIC50aWxlLWhlYWQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGFzaGJvYXJkLXRpbGUgLmstY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA4cHggNXB4O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuS1BJIC5rLWNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRhc2hib2FyZC10aWxlIC50aWxlLWhlYWQtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICNhMWExYTE7XG59XG4uZGFzaGJvYXJkLXRpbGUgLmstY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuYm9keS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuLmRhc2hib2FyZC10aWxlIC5ib2R5LWNvbnRlbnQgLmljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMTA4OGJmO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuYm9keS1jb250ZW50IHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuY2FyZC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kYXNoYm9hcmQtdGlsZSAuY2FyZXQtaWNvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEycHg7XG4gIHJpZ2h0OiAxcHg7XG59XG4uZGFzaGJvYXJkLXRpbGUgLnJlZCB7XG4gIGNvbG9yOiAjZDUxZTFlO1xufVxuLmRhc2hib2FyZC10aWxlIC5ncmVlbiB7XG4gIGNvbG9yOiByZ2IoMywgMTI5LCA1NCk7XG59XG4uZGFzaGJvYXJkLXRpbGUgLnRpbGUtZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uZGFzaGJvYXJkLXRpbGUgLnRpbGUtZm9vdGVyIC5mb290LXJvdyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4OTg2ODY7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA5OSU7XG59XG4uZGFzaGJvYXJkLXRpbGUgLnRpbGUtZm9vdGVyIC5hZGRJbmZvIHtcbiAgbWF4LXdpZHRoOiAxMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRhc2hib2FyZC10aWxlIC50aWxlLWZvb3RlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2QzMDAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG4uZGFzaGJvYXJkLXRpbGUgLmstY2hhcnQsIC5kYXNoYm9hcmQtdGlsZSAuay1zdG9ja2NoYXJ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRhc2hib2FyZC10aWxlIC5yaWdodC1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGFzaGJvYXJkLXRpbGUgLmxpc3QtdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuI2J0bkRhc2hib2FyZEdyb3VwIHtcbiAgY29sb3I6ICMwNTIxNTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhlaWdodEF1dG8ge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5rLWdyaWQuY3VzdG9tX2hfZ3JpZC5tYXhfc2Nyb2xsLmRhc2hib2FyZC1ncmlkIC5rLWdyaWQtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmstZ3JpZC10YWJsZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5rLWdyaWQuY3VzdG9tX2hfZ3JpZC5kYXNoYm9hcmQtZ3JpZCAuay1ncmlkLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59XG5cbjo6bmctZGVlcCAuay1ncm91cGluZy1oZWFkZXItZmxleCB7XG4gIGZsZXgtZmxvdzogaW5pdGlhbDtcbn1cblxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtZ3JpZC5rLWdyaWQgLmstaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtZ3JpZCAuay1ncmlkLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDhweDtcbn1cblxuOjpuZy1kZWVwIC5kYXNoYm9hcmQtZ3JpZCAuay1ncmlkLXRvb2xiYXIgLnVwcGVyX2ZpbHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiA0cHg7XG59XG5cbjo6bmctZGVlcCAuZGFzaGJvYXJkLWdyaWQgLmstZ3JvdXBpbmctaGVhZGVyLWZsZXggPiA6bGFzdC1jaGlsZC5rLWluZGljYXRvci1jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmdyaWQtc2VhcmNoIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMTNweCkgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uW3RpdGxlPVwiRXhwb3J0IHRvIEV4Y2VsXCJdLCBidXR0b25bdGl0bGU9XCJFeHBvcnQgdG8gUERGXCJdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZGFzaGJvYXJkLXNldHRpbmctZHJvcGRvd24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 82986:
/*!************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_dashboardpage_dashboardpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboardpage/dashboardpage.component */ 98881);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 91228);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/alerts/alerts.component */ 24047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboardpage'
  }, {
    path: 'dashboardpage',
    component: _components_dashboardpage_dashboardpage_component__WEBPACK_IMPORTED_MODULE_0__.DashboardpageComponent
  }, {
    path: 'alerts',
    component: _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__.AlertsComponent
  }],
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'dashboard',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}];
class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 91228:
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 74795);
/* harmony import */ var _i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/hi */ 58516);
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/zh */ 56657);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 8427);
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ 79872);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 76876);
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/vi */ 10346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);










class DashboardComponent {
  constructor(_lanTranslationLoaderService) {
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
  }
  ngOnInit() {
    this._lanTranslationLoaderService.loadTranslations(_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale, _i18n_zh__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, _i18n_es__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_vi__WEBPACK_IMPORTED_MODULE_6__.locale);
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 1,
    vars: 0,
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
    styles: [".k-chart[_ngcontent-%COMP%] {\n  height: 250px;\n}\n\n.widget-section[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSiIsInNvdXJjZXNDb250ZW50IjpbIi5rLWNoYXJ0e1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG4ud2lkZ2V0LXNlY3Rpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iLCIuay1jaGFydCB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi53aWRnZXQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 50716:
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 91228);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 82986);
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-charts */ 25947);
/* harmony import */ var _components_dashboardpage_dashboardpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboardpage/dashboardpage.component */ 98881);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-listview */ 92339);
/* harmony import */ var src_app_shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ng-orgchart/orgchart.module */ 55322);
/* harmony import */ var src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/searchdata.pipe */ 80669);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);









//import { AlertsComponent } from './components/alerts/alerts.component';








// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchData],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_6__.PipeModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__.ButtonsModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__.TileLayoutModule, _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_15__.ListViewModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, src_app_shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_4__.OrgchartModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _components_dashboardpage_dashboardpage_component__WEBPACK_IMPORTED_MODULE_3__.DashboardpageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_9__.ChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.PDFModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_6__.PipeModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__.ButtonsModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_14__.TileLayoutModule, _progress_kendo_angular_listview__WEBPACK_IMPORTED_MODULE_15__.ListViewModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, src_app_shared_ng_orgchart_orgchart_module__WEBPACK_IMPORTED_MODULE_4__.OrgchartModule]
  });
})();

/***/ }),

/***/ 59995:
/*!**********************************************************!*\
  !*** ./src/app/main/dashboard/http/dashboard.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class DashboardService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  // public bmlfonGetDashboardData(headerData : any): Observable<ODataModel> {
  //   const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetLookupData`;
  //   return this.httpExt.post<ODataModel>(url, headerData, null);
  // }
  bmlfGetDashboardPageData() {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetDashboardPageData`;
    return this.httpExt.get(url, null);
  }
  bmlfGetDashboardData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetDashboardData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetDashboardLayoutData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetDashboardLayoutData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveDashboardLayoutData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveDashboardLayoutData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveDefaultDashboard(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveUserWiseDefaultDashboard`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetGridViewData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetDBGridViewData`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function DashboardService_Factory(t) {
    return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74795:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/en.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    DASHBOARDPAGE: {
      TITLE: 'Dashboard',
      TOPSALEABLEITEMS: 'Top Saleable Items',
      OVERDUESO: 'Overdue SO',
      OVERDUEINVOICES: 'Overdue Invoices',
      MIN: 'Minimize',
      MAX: 'Maximize',
      BAR: "Bar Chart",
      PIE: "Pie Chart",
      LINE: "Line Chart",
      NORECORDS: "No records available",
      ADDTAB: "Add Tab",
      TABNAME: "Tab Name",
      ADDTILE: "Add Tile",
      TYPE: "Type",
      TILE: "Tile",
      NEWTAB: "New Tab",
      EDITTAB: "Edit Tab",
      NEWDASHBOARD: "New Dashboard",
      SETASDEFAULT: "Set as Default",
      ADDDASHBOARD: "Add Dashboard",
      DASHBOARDNAME: "Dashboard Name",
      MSG: {
        DUPLICATETABNAME: "Tab Name can't be duplicate",
        SAVELAYOUT: "Layout saved successfully",
        ALREADYADDED: "This tile is already added",
        TABNAMEREQ: "Enter Tab Name",
        DASHBOARDNAMEREQ: "Enter Dashboard Name",
        SAVEDEFAULTDASHBOARD: "Default Dashboard saved successfully",
        DUPLICATEDASHNAME: "Dashboard Name can't be duplicate",
        NOTILEISCONNECTED: "No Tile is Connected",
        TILENAMEREQ: "Enter Tile Name",
        DELETETAB: "Delete Tab?",
        DELETETABWITHDASH: "Do you want to Delete Tab ? Dashboard will also be deleted ",
        DELETEDASHBOARDSUCCESSFULLY: "Dashboard Deleted successfully"
      }
    }
  }
};

/***/ }),

/***/ 79872:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/es.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    DASHBOARDPAGE: {
      TITLE: "Tablero",
      TOPSALEABLEITEMS: "Elementos más vendibles",
      OVERDUESO: "SO vencidos",
      OVERDUEINVOICES: "Facturas vencidas",
      MIN: "Minimizar",
      MAX: "Maximizar",
      BAR: "Gráfico de barras",
      PIE: "Gráfico circular",
      LINE: "Gráfico de líneas",
      NORECORDS: "No hay registros disponibles",
      ADDTAB: "Agregar pestaña",
      TABNAME: "Nombre de la pestaña",
      ADDTILE: "Agregar mosaico",
      TYPE: "Tipo",
      TILE: "Mosaico",
      NEWTAB: "Nueva pestaña",
      EDITTAB: "Editar pestaña",
      NEWDASHBOARD: "Nuevo panel de control",
      SETASDEFAULT: "Establecer como predeterminado",
      ADDDASHBOARD: "Agregar panel de control",
      DASHBOARDNAME: "Nombre del panel de control",
      MSG: {
        DUPLICATETABNAME: "El nombre de la pestaña no puede ser duplicado",
        SAVELAYOUT: "Diseño guardado exitosamente",
        ALREADYADDED: "Este mosaico ya está agregado",
        TABNAMEREQ: "Ingrese el nombre de la pestaña",
        DASHBOARDNAMEREQ: "Ingrese el nombre del panel de control",
        SAVEDEFAULTDASHBOARD: "Panel de control predeterminado guardado exitosamente",
        DUPLICATEDASHNAME: "El nombre del panel de control no puede ser duplicado",
        NOTILEISCONNECTED: "Ningún mosaico está conectado",
        TILENAMEREQ: "Ingrese el nombre del mosaico",
        DELETETAB: "¿Eliminar pestaña?",
        DELETETABWITHDASH: "¿Desea eliminar la pestaña? El panel de control también se eliminará",
        DELETEDASHBOARDSUCCESSFULLY: "Panel de control eliminado exitosamente"
      }
    }
  }
};

/***/ }),

/***/ 8427:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/fr.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    DASHBOARDPAGE: {
      TITLE: "Tableau de bord",
      TOPSALEABLEITEMS: "Meilleurs articles vendables",
      OVERDUESO: "Commandes en retard",
      OVERDUEINVOICES: "Factures en retard",
      MIN: "Minimiser",
      MAX: "Maximiser",
      BAR: "Diagramme en barres",
      PIE: "Diagramme circulaire",
      LINE: "Diagramme en ligne",
      NORECORDS: "Aucun enregistrement disponible",
      ADDTAB: "Ajouter un onglet",
      TABNAME: "Nom de l'onglet",
      ADDTILE: "Ajouter une tuile",
      TYPE: "Type",
      TILE: "Tuile",
      NEWTAB: "Nouvel onglet",
      EDITTAB: "Modifier l'onglet",
      NEWDASHBOARD: "Nouveau tableau de bord",
      SETASDEFAULT: "Définir par défaut",
      ADDDASHBOARD: "Ajouter un tableau de bord",
      DASHBOARDNAME: "Nom du tableau de bord",
      MSG: {
        DUPLICATETABNAME: "Le nom de l'onglet ne peut pas être en double",
        SAVELAYOUT: "Disposition enregistrée avec succès",
        ALREADYADDED: "Cette tuile est déjà ajoutée",
        TABNAMEREQ: "Entrez le nom de l'onglet",
        DASHBOARDNAMEREQ: "Entrez le nom du tableau de bord",
        SAVEDEFAULTDASHBOARD: "Tableau de bord par défaut enregistré avec succès",
        DUPLICATEDASHNAME: "Le nom du tableau de bord ne peut pas être en double",
        NOTILEISCONNECTED: "Aucune tuile n'est connectée",
        TILENAMEREQ: "Entrez le nom de la tuile",
        DELETETAB: "Supprimer l'onglet ?",
        DELETETABWITHDASH: "Voulez-vous supprimer l'onglet ? Le tableau de bord sera également supprimé",
        DELETEDASHBOARDSUCCESSFULLY: "Tableau de bord supprimé avec succès"
      }
    }
  }
};

/***/ }),

/***/ 58516:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/hi.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'hi',
  data: {
    DASHBOARDPAGE: {
      "TITLE": "डैशबोर्ड",
      "TOPSALEABLEITEMS": "शीर्ष बिक्रीयों",
      "OVERDUESO": "समय से अतिरिक्त SO",
      "OVERDUEINVOICES": "समय से अतिरिक्त चालान",
      "MIN": "कम",
      "MAX": "अधिक",
      "BAR": "बार चार्ट",
      "PIE": "पाई चार्ट",
      "LINE": "रेखा चार्ट",
      "NORECORDS": "कोई रिकॉर्ड उपलब्ध नहीं है",
      "ADDTAB": "टैब जोड़ें",
      "TABNAME": "टैब का नाम",
      "ADDTILE": "टाइल जोड़ें",
      "TYPE": "प्रकार",
      "TILE": "टाइल",
      "NEWTAB": "नई टैब",
      "EDITTAB": "टैब संपादित करें",
      "NEWDASHBOARD": "नया डैशबोर्ड",
      "SETASDEFAULT": "डिफ़ॉल्ट के रूप में सेट करें",
      "ADDDASHBOARD": "डैशबोर्ड जोड़ें",
      "DASHBOARDNAME": "डैशबोर्ड का नाम",
      MSG: {
        "DUPLICATETABNAME": "टैब का नाम डुप्लिकेट नहीं हो सकता",
        "SAVELAYOUT": "लेआउट सफलतापूर्वक सहेजा गया",
        "ALREADYADDED": "यह टाइल पहले ही जोड़ा गया है",
        "TABNAMEREQ": "टैब का नाम दर्ज करें",
        "DASHBOARDNAMEREQ": "डैशबोर्ड का नाम दर्ज करें",
        "SAVEDEFAULTDASHBOARD": "डिफ़ॉल्ट डैशबोर्ड सफलतापूर्वक सहेजा गया",
        "DUPLICATEDASHNAME": "डैशबोर्ड का नाम डुप्लिकेट नहीं हो सकता",
        "NOTILEISCONNECTED": "कोई टाइल कनेक्ट नहीं है",
        "TILENAMEREQ": "टाइल का नाम दर्ज करें",
        "DELETETAB": "टैब हटाएं?",
        "DELETETABWITHDASH": "क्या आप टैब को हटाना चाहते हैं? डैशबोर्ड भी हटा दिया जाएगा",
        "DELETEDASHBOARDSUCCESSFULLY": "डैशबोर्ड सफलतापूर्वक हटा दिया गया"
      }
    }
  }
};

/***/ }),

/***/ 76876:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/pt.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    DASHBOARDPAGE: {
      TITLE: 'Painel',
      TOPSALEABLEITEMS: 'Itens Mais Vendidos',
      OVERDUESO: 'Pedidos em Atraso',
      OVERDUEINVOICES: 'Faturas em Atraso',
      MIN: 'Minimizar',
      MAX: 'Maximizar',
      BAR: 'Gráfico de Barras',
      PIE: 'Gráfico de Pizza',
      LINE: 'Gráfico de Linha',
      NORECORDS: 'Nenhum registro disponível',
      ADDTAB: 'Adicionar Aba',
      TABNAME: 'Nome da Aba',
      ADDTILE: 'Adicionar Bloco',
      TYPE: 'Tipo',
      TILE: 'Bloco',
      NEWTAB: 'Nova Aba',
      EDITTAB: 'Editar Aba',
      NEWDASHBOARD: 'Novo Painel',
      SETASDEFAULT: 'Definir como Padrão',
      ADDDASHBOARD: 'Adicionar Painel',
      DASHBOARDNAME: 'Nome do Painel',
      MSG: {
        DUPLICATETABNAME: 'O nome da aba não pode ser duplicado',
        SAVELAYOUT: 'Layout salvo com sucesso',
        ALREADYADDED: 'Este bloco já foi adicionado',
        TABNAMEREQ: 'Digite o Nome da Aba',
        DASHBOARDNAMEREQ: 'Digite o Nome do Painel',
        SAVEDEFAULTDASHBOARD: 'Painel Padrão salvo com sucesso',
        DUPLICATEDASHNAME: 'O Nome do Painel não pode ser duplicado',
        NOTILEISCONNECTED: 'Nenhum bloco está conectado',
        TILENAMEREQ: 'Digite o Nome do Bloco',
        DELETETAB: 'Excluir Aba?',
        DELETETABWITHDASH: 'Você deseja excluir a Aba? O Painel também será excluído',
        DELETEDASHBOARDSUCCESSFULLY: 'Painel excluído com sucesso'
      }
    }
  }
};

/***/ }),

/***/ 10346:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/vi.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    DASHBOARDPAGE: {
      "TITLE": "Bảng điều khiển",
      "TOPSALEABLEITEMS": "Các mặt hàng bán chạy nhất",
      "OVERDUESO": "Đơn đặt hàng quá hạn",
      "OVERDUEINVOICES": "Hóa đơn quá hạn",
      "MIN": "Thu nhỏ",
      "MAX": "Phóng to",
      "BAR": "Biểu đồ cột",
      "PIE": "Biểu đồ tròn",
      "LINE": "Biểu đồ đường",
      "NORECORDS": "Không có bản ghi nào",
      "ADDTAB": "Thêm Tab",
      "TABNAME": "Tên Tab",
      "ADDTILE": "Thêm Tile",
      "TYPE": "Loại",
      "TILE": "Tile",
      "NEWTAB": "Tab mới",
      "EDITTAB": "Chỉnh sửa Tab",
      "NEWDASHBOARD": "Bảng điều khiển mới",
      "SETASDEFAULT": "Đặt làm mặc định",
      "ADDDASHBOARD": "Thêm Bảng điều khiển",
      "DASHBOARDNAME": "Tên Bảng điều khiển",
      MSG: {
        "DUPLICATETABNAME": "Tên Tab không thể trùng lặp",
        "SAVELAYOUT": "Bố cục được lưu thành công",
        "ALREADYADDED": "Tile này đã được thêm",
        "TABNAMEREQ": "Nhập Tên Tab",
        "DASHBOARDNAMEREQ": "Nhập Tên Bảng điều khiển",
        "SAVEDEFAULTDASHBOARD": "Bảng điều khiển mặc định đã được lưu thành công",
        "DUPLICATEDASHNAME": "Tên Bảng điều khiển không thể trùng lặp",
        "NOTILEISCONNECTED": "Không có Tile nào được kết nối",
        "TILENAMEREQ": "Nhập Tên Tile",
        "DELETETAB": "Xóa Tab?",
        "DELETETABWITHDASH": "Bạn có muốn xóa Tab? Bảng điều khiển cũng sẽ bị xóa",
        "DELETEDASHBOARDSUCCESSFULLY": "Xóa Bảng điều khiển thành công"
      }
    }
  }
};

/***/ }),

/***/ 56657:
/*!*******************************************!*\
  !*** ./src/app/main/dashboard/i18n/zh.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    DASHBOARDPAGE: {
      "TITLE": "仪表板",
      "TOPSALEABLEITEMS": "畅销商品",
      "OVERDUESO": "逾期销售订单",
      "OVERDUEINVOICES": "逾期发票",
      "MIN": "最小化",
      "MAX": "最大化",
      "BAR": "柱状图",
      "PIE": "饼图",
      "LINE": "折线图",
      "NORECORDS": "没有可用的记录",
      "ADDTAB": "添加标签页",
      "TABNAME": "标签页名称",
      "ADDTILE": "添加磁贴",
      "TYPE": "类型",
      "TILE": "磁贴",
      "NEWTAB": "新建标签页",
      "EDITTAB": "编辑标签页",
      "NEWDASHBOARD": "新建仪表板",
      "SETASDEFAULT": "设为默认",
      "ADDDASHBOARD": "添加仪表板",
      "DASHBOARDNAME": "仪表板名称",
      MSG: {
        "DUPLICATETABNAME": "标签页名称不能重复",
        "SAVELAYOUT": "布局保存成功",
        "ALREADYADDED": "此磁贴已添加",
        "TABNAMEREQ": "输入标签页名称",
        "DASHBOARDNAMEREQ": "输入仪表板名称",
        "SAVEDEFAULTDASHBOARD": "默认仪表板保存成功",
        "DUPLICATEDASHNAME": "仪表板名称不能重复",
        "NOTILEISCONNECTED": "未连接任何磁贴",
        "TILENAMEREQ": "输入磁贴名称",
        "DELETETAB": "删除标签页？",
        "DELETETABWITHDASH": "是否要删除标签页？仪表板也将被删除",
        "DELETEDASHBOARDSUCCESSFULLY": "仪表板删除成功"
      }
    }
  }
};

/***/ }),

/***/ 30519:
/*!********************************************************!*\
  !*** ./src/app/shared/components/dashboardbasegrid.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboardbasegrid: () => (/* binding */ dashboardbasegrid)
/* harmony export */ });
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-data-query */ 87550);
/* harmony import */ var _progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-drawing */ 43880);
/* harmony import */ var _progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-drawing */ 92014);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var _http_userfield_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);










const _c0 = ["exportPDFBtn"];
const _c1 = ["exportExcelBtn"];
class dashboardbasegrid {
  constructor(localStorageService, dateFormatService, userFieldService, toastMessageService, utilService) {
    this.localStorageService = localStorageService;
    this.dateFormatService = dateFormatService;
    this.userFieldService = userFieldService;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    // pdf data
    this.groups = [];
    this.sortable = {
      allowUnsort: false
    };
    this.applicationName = '';
    this.applicationLogo = 'assets/images/eworkplacelogo.png';
    this.loggedInUser = '';
    this.currentTimeZone = '';
    this.currentDateTimeFormat = '';
    // for page size option
    this.buttonCount = 10;
    this.info = true;
    this.type = 'numeric';
    this.pageSizes = true;
    this.previousNext = true;
    //public pageSize = 100;
    this.pageSize = 10; //18/Dec/2019 Deepak Porwal (As per discussion for the fast loading of lookups set page size to 10 )
    // Added for loader
    this.loadingEnabled = true;
    // Enable/Disable Grid
    this.groupingEnabled = true;
    this.filterEnabled = false;
    this.columnMenuEnabled = true;
    // Date Filter
    this.openedDatePicked = false;
    this.selectedDateLbl = ''; //  Date Filter label
    this.isSelectedDateLbl = 0;
    // show active/inactive in grid
    this.activeFilterList = [{
      'Text': 'Active',
      'Status': 'Active'
    }, {
      'Text': 'Inactive',
      'Status': 'Inactive'
    }, {
      'Text': 'Deleted',
      'Status': 'Deleted'
    }];
    this.filterCollapsed = false;
    this.keyword = '';
    this.mobileViewEnabled = false;
    this.desktopMedia = '(min-width: 768px)';
    this.mobileMedia = '(max-width: 767px)';
    this.mobjGridSettings = {
      state: {
        skip: 0,
        take: 20,
        group: [],
        filter: {
          logic: 'and',
          filters: []
        }
      },
      columnsConfig: [],
      gridData: {
        "data": [],
        "total": 0
      },
      filterEnabled: false
    };
    // Apply Date filter
    this.mapDateFilter = descriptor => {
      const filters = descriptor.filters || [];
      filters.forEach(filter => {
        if (filter.filters) {
          this.mapDateFilter(filter);
        }
      });
    };
    // save settings
    this.pageable = {
      buttonCount: 10,
      info: true,
      type: this.type,
      pageSizes: true,
      previousNext: true
    };
    // save settings
  }
  // Grid settings on mobile view
  onResize(event) {
    this.getWindowWidth();
  }
  initGrid() {
    this.allData = this.allData.bind(this);
    this.setPdfData();
  }
  onFilterShow() {
    this.filterCollapsed = !this.filterCollapsed;
  }
  setExportData(data) {
    this.exportData = {
      "pageName": data.pageName,
      "allData": this.allData
    };
  }
  // for responsive
  getWindowWidth() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 768) {
      this.groupingEnabled = false;
      this.filterEnabled = false;
      this.columnMenuEnabled = false;
      // Save Settings
      this.mobileViewEnabled = true;
    } else {
      this.groupingEnabled = true;
      // this.filterEnabled = false;
      this.columnMenuEnabled = true;
      // Save Settings
      this.mobileViewEnabled = false;
    }
  }
  // added new for trigger external click of export excel and PDF
  // public exportToPDF(grid: GridComponent): void {
  //     grid.saveAsPDF();
  // }
  exportPDFClick() {
    const exportPDF = this.exportPDFBtn.nativeElement;
    exportPDF.click();
  }
  exportExcelClick() {
    const exportExcel = this.exportExcelBtn.nativeElement;
    exportExcel.click();
  }
  //added for print
  printToPDF(grid) {
    const promises = this.grids.map(grid => grid.drawPDF());
    Promise.all(promises).then(groups => {
      const rootGroup = new _progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_7__["default"]({
        pdf: {
          multiPage: true
        }
      });
      groups.forEach(group => {
        rootGroup.append(...group.children);
      });
      let option = {
        paperSize: "A3",
        margin: {
          bottom: "70px",
          top: "30px",
          left: "30px",
          right: "30px"
        },
        scale: 0.8,
        landscape: false,
        title: this.exportData.pageName,
        template: data => `<div style="position:absolute; padding-top:10px; width:100%; border-top:1px solid #e5e5e5; left:0; text-align:center; bottom:10px; font-size:12px; z-index:2;">sd</div>`
      };
      //   let option = {
      //     paperSize: "A4",
      //     margin: {bottom:"70px",top:"30px",left:"30px",right:"30px"},
      //     scale: 0.8,
      //     landscape:true,
      //     title:this.exportData.pageName,
      //     template: (data) => `<div style="position:absolute; padding-top:10px; width:100%; border-top:1px solid #e5e5e5; left:0; text-align:center; bottom:10px; font-size:12px; z-index:2;">sd</div>`
      //   }
      return (0,_progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_8__.exportPDF)(rootGroup, option);
    }).then(dataUri => {
      let checkIE = this.msieversion();
      if (checkIE) {
        grid.saveAsPDF();
      } else {
        let ifrm = document.createElement("embed");
        ifrm.setAttribute("src", dataUri);
        ifrm.setAttribute("width", "100%");
        ifrm.setAttribute("height", "100%");
        let pageStyle = '<style type="text/css">*{margin:0; padding:0;}</style>';
        let newHTML = '<html><head><title>' + this.exportData.pageName + '</title>' + pageStyle + '</head><body>' + ifrm.outerHTML + '</body>';
        let newWindow = window.open("");
        newWindow.document.write(newHTML, '');
      }
    });
  }
  setPdfData() {
    this.loggedInUser = this.localStorageService.getUserSession().UserName;
    this.applicationLogo = 'assets/images/logo.png';
    // let msCustomDateFormat = this.dateFormatService.getDateFormat();
    // this.currentDateTime = moment().format(msCustomDateFormat.toUpperCase() + ' h:mm:ss a');
    // if (this.localStorageService.getTopHeaderLeftLogoUrl() != null) {
    //     if (this.localStorageService.getTopHeaderLeftLogoUrl().trim().length > 0) {
    //         this.applicationLogo = this.localStorageService.getTopHeaderLeftLogoUrl().trim()
    //     }
    //     this.loggedInUser = this.localStorageService.getUserName();
    // }
  }
  // get all the data from grid.
  allData(gridName) {
    const result = {
      data: this.getExportDataList(gridName)
    };
    return result;
  }
  dataStateChange(state) {
    this.currentState = state;
    this.filterTrue = true;
    this.allData = this.allData.bind(this);
    // save settings
    this.mobjGridSettings.state = state;
    this.groups = state.group;
    this.mobjGridSettings.state.group = this.groups;
    this.mobjGridSettings.gridData = (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__.process)(this.gridDataList, this.mobjGridSettings.state);
    // save settings
  }

  getExportDataList(gridName) {
    if (gridName.filter.filters.length > 0) {
      return (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__.filterBy)(this.gridDataList, gridName.filter.filters);
    } else {
      return this.gridDataList;
    }
  }
  msieversion() {
    // check for IE 11 and Edge
    if (/rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }
  // Map saved grid view
  mapGridSettings(gridSettings) {
    const state = gridSettings.state;
    this.mapDateFilter(state.filter);
    return {
      state,
      columnsConfig: gridSettings.columnsConfig.sort((a, b) => a.orderIndex - b.orderIndex),
      gridData: (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__.process)(this.gridDataList, state),
      name: gridSettings.name,
      filterEnabled: gridSettings.filterEnabled
    };
  }
  bmlfOnVisibilityChange(e) {
    e.columns.forEach(column => {
      this.mobjGridSettings.columnsConfig.find(col => col.field === column.field).hidden = column.hidden;
    });
  }
  bmlfOnReorder(e) {
    this.bmlfOnArrayMove(this.mobjGridSettings.columnsConfig, e.oldIndex, e.newIndex);
  }
  bmlfOnArrayMove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
  bmlfOnResize(e) {
    e.forEach(item => {
      this.mobjGridSettings.columnsConfig.find(col => col.field === item.column.field).width = item.newWidth;
    });
  }
  // Set Inital Grid View Settings
  setInitGridSettings(parrSettingData, localizeName) {
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_1__.GridSettings();
    let psGridDateFormat = '{0:' + this.dateFormatService.getDateFormat() + '}';
    if (parrSettingData != "") {
      let parrGridSetting = this.mapGridSettings(JSON.parse(parrSettingData));
      let parrColumnset = parrGridSetting.columnsConfig;
      parrColumnset.forEach(ele => {
        if (ele.type == "date") {
          ele.format = psGridDateFormat;
        } else {
          ele.format = "";
        }
      });
      parrGridSetting.columnsConfig = parrColumnset;
      this.mobjGridSettings = parrGridSetting;
    } else {
      const parrColumnList = Object.keys(this.gridDataList[0]);
      parrColumnList.forEach(element => {
        this.mobjGridSettings.columnsConfig.push({
          field: element,
          title: localizeName == "" ? element.toUpperCase() : localizeName + "." + element.toUpperCase(),
          filter: '',
          type: 'text',
          filterable: true,
          format: "",
          hidden: false,
          width: 100
        });
      });
      this.mobjGridSettings.state.group = [];
      this.mobjGridSettings.state.take = 20;
      this.mobjGridSettings.state.skip = 0;
      this.mobjGridSettings.state.filter = {
        logic: 'and',
        filters: []
      };
      this.mobjGridSettings.gridData = (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__.process)(this.gridDataList, {
        // Initial filter descriptor
        skip: 0,
        take: 20,
        group: [],
        filter: {
          logic: 'and',
          filters: []
        }
      });
      // this.gridSettings.name = 'Default View';
      //this.radioSelected = 'Default View';
      //  this.gridSettings.columnsConfig = this.getGridColums();
    }

    this.filterEnabled = this.mobjGridSettings.filterEnabled;
    this.getWindowWidth();
  }
  bmlfOnSaveGrid(screenName) {
    delete this.mobjGridSettings.gridData;
    this.mobjGridSettings.filterEnabled = this.filterEnabled;
    this.mobjGridSettings.state.skip = 0; //to save always page no. 0 21/04/2020 - RD
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          "ScreenName": screenName,
          "JsonString": JSON.stringify(this.mobjGridSettings)
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.userFieldService.bmlfSaveGridSetting(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("COMMON.MSG.SERVERERROR"));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVEGRIDSETTING"));
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    });
  }
  bmlfOnResetGridSettings(screenName, localizeName) {
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          "ScreenName": screenName,
          "JsonString": JSON.stringify(this.mobjGridSettings)
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.userFieldService.bmlfResetGridSetting(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("COMMON.MSG.SERVERERROR"));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.RESETGRIDSETTING"));
          this.setInitGridSettings(res.DefaultGridSettings[0].JSONString, localizeName);
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    });
  }
  static #_ = this.ɵfac = function dashboardbasegrid_Factory(t) {
    return new (t || dashboardbasegrid)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_3__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_http_userfield_service__WEBPACK_IMPORTED_MODULE_4__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: dashboardbasegrid,
    selectors: [["ng-component"]],
    viewQuery: function dashboardbasegrid_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_10__.GridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.exportPDFBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.exportExcelBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.grids = _t);
      }
    },
    hostBindings: function dashboardbasegrid_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("resize", function dashboardbasegrid_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
      }
    },
    decls: 0,
    vars: 0,
    template: function dashboardbasegrid_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 25947:
/*!************************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-angular-charts/fesm2020/progress-kendo-angular-charts.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisDefaultsComponent: () => (/* binding */ AxisDefaultsComponent),
/* harmony export */   AxisDefaultsCrosshairComponent: () => (/* binding */ AxisDefaultsCrosshairComponent),
/* harmony export */   AxisDefaultsCrosshairTooltipComponent: () => (/* binding */ AxisDefaultsCrosshairTooltipComponent),
/* harmony export */   AxisDefaultsLabelsComponent: () => (/* binding */ AxisDefaultsLabelsComponent),
/* harmony export */   AxisDefaultsTitleComponent: () => (/* binding */ AxisDefaultsTitleComponent),
/* harmony export */   AxisLabelClickEvent: () => (/* binding */ AxisLabelClickEvent),
/* harmony export */   CHART_DIRECTIVES: () => (/* binding */ CHART_DIRECTIVES),
/* harmony export */   CategoryAxisComponent: () => (/* binding */ CategoryAxisComponent),
/* harmony export */   CategoryAxisCrosshairComponent: () => (/* binding */ CategoryAxisCrosshairComponent),
/* harmony export */   CategoryAxisCrosshairTooltipComponent: () => (/* binding */ CategoryAxisCrosshairTooltipComponent),
/* harmony export */   CategoryAxisItemComponent: () => (/* binding */ CategoryAxisItemComponent),
/* harmony export */   CategoryAxisLabelsComponent: () => (/* binding */ CategoryAxisLabelsComponent),
/* harmony export */   CategoryAxisNotesComponent: () => (/* binding */ CategoryAxisNotesComponent),
/* harmony export */   CategoryAxisNotesIconComponent: () => (/* binding */ CategoryAxisNotesIconComponent),
/* harmony export */   CategoryAxisNotesLabelComponent: () => (/* binding */ CategoryAxisNotesLabelComponent),
/* harmony export */   CategoryAxisRangeLabelsComponent: () => (/* binding */ CategoryAxisRangeLabelsComponent),
/* harmony export */   CategoryAxisSelectComponent: () => (/* binding */ CategoryAxisSelectComponent),
/* harmony export */   CategoryAxisTitleComponent: () => (/* binding */ CategoryAxisTitleComponent),
/* harmony export */   ChartAreaComponent: () => (/* binding */ ChartAreaComponent),
/* harmony export */   ChartBreadcrumbComponent: () => (/* binding */ ChartBreadcrumbComponent),
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent),
/* harmony export */   ChartModule: () => (/* binding */ ChartModule),
/* harmony export */   ChartsModule: () => (/* binding */ ChartsModule),
/* harmony export */   CollectionService: () => (/* binding */ CollectionService),
/* harmony export */   ConfigurationService: () => (/* binding */ ConfigurationService),
/* harmony export */   CrosshairTooltipComponent: () => (/* binding */ CrosshairTooltipComponent),
/* harmony export */   CrosshairTooltipsContainerComponent: () => (/* binding */ CrosshairTooltipsContainerComponent),
/* harmony export */   DonutCenterTemplateDirective: () => (/* binding */ DonutCenterTemplateDirective),
/* harmony export */   DragEndEvent: () => (/* binding */ DragEndEvent),
/* harmony export */   DragEvent: () => (/* binding */ DragEvent),
/* harmony export */   DragStartEvent: () => (/* binding */ DragStartEvent),
/* harmony export */   DrilldownEvent: () => (/* binding */ DrilldownEvent),
/* harmony export */   LegendComponent: () => (/* binding */ LegendComponent),
/* harmony export */   LegendInactiveItemsComponent: () => (/* binding */ LegendInactiveItemsComponent),
/* harmony export */   LegendItemClickEvent: () => (/* binding */ LegendItemClickEvent),
/* harmony export */   LegendItemComponent: () => (/* binding */ LegendItemComponent),
/* harmony export */   LegendItemHoverEvent: () => (/* binding */ LegendItemHoverEvent),
/* harmony export */   LegendItemLeaveEvent: () => (/* binding */ LegendItemLeaveEvent),
/* harmony export */   NavigatorCategoryAxisComponent: () => (/* binding */ NavigatorCategoryAxisComponent),
/* harmony export */   NavigatorCategoryAxisCrosshairComponent: () => (/* binding */ NavigatorCategoryAxisCrosshairComponent),
/* harmony export */   NavigatorCategoryAxisCrosshairTooltipComponent: () => (/* binding */ NavigatorCategoryAxisCrosshairTooltipComponent),
/* harmony export */   NavigatorCategoryAxisLabelsComponent: () => (/* binding */ NavigatorCategoryAxisLabelsComponent),
/* harmony export */   NavigatorCategoryAxisNotesComponent: () => (/* binding */ NavigatorCategoryAxisNotesComponent),
/* harmony export */   NavigatorCategoryAxisNotesIconComponent: () => (/* binding */ NavigatorCategoryAxisNotesIconComponent),
/* harmony export */   NavigatorCategoryAxisNotesLabelComponent: () => (/* binding */ NavigatorCategoryAxisNotesLabelComponent),
/* harmony export */   NavigatorCategoryAxisSelectComponent: () => (/* binding */ NavigatorCategoryAxisSelectComponent),
/* harmony export */   NavigatorCategoryAxisTitleComponent: () => (/* binding */ NavigatorCategoryAxisTitleComponent),
/* harmony export */   NavigatorComponent: () => (/* binding */ NavigatorComponent),
/* harmony export */   NavigatorFilterEvent: () => (/* binding */ NavigatorFilterEvent),
/* harmony export */   NavigatorHintComponent: () => (/* binding */ NavigatorHintComponent),
/* harmony export */   NavigatorPaneComponent: () => (/* binding */ NavigatorPaneComponent),
/* harmony export */   NavigatorPaneTitleComponent: () => (/* binding */ NavigatorPaneTitleComponent),
/* harmony export */   NavigatorSelectComponent: () => (/* binding */ NavigatorSelectComponent),
/* harmony export */   NavigatorSeriesComponent: () => (/* binding */ NavigatorSeriesComponent),
/* harmony export */   NavigatorSeriesErrorBarsComponent: () => (/* binding */ NavigatorSeriesErrorBarsComponent),
/* harmony export */   NavigatorSeriesExtremesComponent: () => (/* binding */ NavigatorSeriesExtremesComponent),
/* harmony export */   NavigatorSeriesHighlightComponent: () => (/* binding */ NavigatorSeriesHighlightComponent),
/* harmony export */   NavigatorSeriesItemComponent: () => (/* binding */ NavigatorSeriesItemComponent),
/* harmony export */   NavigatorSeriesLabelsComponent: () => (/* binding */ NavigatorSeriesLabelsComponent),
/* harmony export */   NavigatorSeriesLabelsFromComponent: () => (/* binding */ NavigatorSeriesLabelsFromComponent),
/* harmony export */   NavigatorSeriesLabelsToComponent: () => (/* binding */ NavigatorSeriesLabelsToComponent),
/* harmony export */   NavigatorSeriesMarkersComponent: () => (/* binding */ NavigatorSeriesMarkersComponent),
/* harmony export */   NavigatorSeriesNotesComponent: () => (/* binding */ NavigatorSeriesNotesComponent),
/* harmony export */   NavigatorSeriesNotesIconComponent: () => (/* binding */ NavigatorSeriesNotesIconComponent),
/* harmony export */   NavigatorSeriesNotesLabelComponent: () => (/* binding */ NavigatorSeriesNotesLabelComponent),
/* harmony export */   NavigatorSeriesOutliersComponent: () => (/* binding */ NavigatorSeriesOutliersComponent),
/* harmony export */   NavigatorSeriesTooltipComponent: () => (/* binding */ NavigatorSeriesTooltipComponent),
/* harmony export */   NoteClickEvent: () => (/* binding */ NoteClickEvent),
/* harmony export */   NoteHoverEvent: () => (/* binding */ NoteHoverEvent),
/* harmony export */   PaneComponent: () => (/* binding */ PaneComponent),
/* harmony export */   PaneDefaultsComponent: () => (/* binding */ PaneDefaultsComponent),
/* harmony export */   PaneDefaultsTitleComponent: () => (/* binding */ PaneDefaultsTitleComponent),
/* harmony export */   PaneRenderEvent: () => (/* binding */ PaneRenderEvent),
/* harmony export */   PanesComponent: () => (/* binding */ PanesComponent),
/* harmony export */   PanesTitleComponent: () => (/* binding */ PanesTitleComponent),
/* harmony export */   PlotAreaClickEvent: () => (/* binding */ PlotAreaClickEvent),
/* harmony export */   PlotAreaComponent: () => (/* binding */ PlotAreaComponent),
/* harmony export */   PlotAreaHoverEvent: () => (/* binding */ PlotAreaHoverEvent),
/* harmony export */   RenderEvent: () => (/* binding */ RenderEvent),
/* harmony export */   SPARKLINE_DIRECTIVES: () => (/* binding */ SPARKLINE_DIRECTIVES),
/* harmony export */   STOCK_CHART_DIRECTIVES: () => (/* binding */ STOCK_CHART_DIRECTIVES),
/* harmony export */   SelectEndEvent: () => (/* binding */ SelectEndEvent),
/* harmony export */   SelectEvent: () => (/* binding */ SelectEvent),
/* harmony export */   SelectStartEvent: () => (/* binding */ SelectStartEvent),
/* harmony export */   SeriesClickEvent: () => (/* binding */ SeriesClickEvent),
/* harmony export */   SeriesComponent: () => (/* binding */ SeriesComponent),
/* harmony export */   SeriesDefaultsComponent: () => (/* binding */ SeriesDefaultsComponent),
/* harmony export */   SeriesDefaultsLabelsComponent: () => (/* binding */ SeriesDefaultsLabelsComponent),
/* harmony export */   SeriesDefaultsLabelsFromComponent: () => (/* binding */ SeriesDefaultsLabelsFromComponent),
/* harmony export */   SeriesDefaultsLabelsToComponent: () => (/* binding */ SeriesDefaultsLabelsToComponent),
/* harmony export */   SeriesDefaultsNotesComponent: () => (/* binding */ SeriesDefaultsNotesComponent),
/* harmony export */   SeriesDefaultsNotesIconComponent: () => (/* binding */ SeriesDefaultsNotesIconComponent),
/* harmony export */   SeriesDefaultsNotesLabelComponent: () => (/* binding */ SeriesDefaultsNotesLabelComponent),
/* harmony export */   SeriesDefaultsTooltipComponent: () => (/* binding */ SeriesDefaultsTooltipComponent),
/* harmony export */   SeriesDrilldownTemplateDirective: () => (/* binding */ SeriesDrilldownTemplateDirective),
/* harmony export */   SeriesErrorBarsComponent: () => (/* binding */ SeriesErrorBarsComponent),
/* harmony export */   SeriesExtremesComponent: () => (/* binding */ SeriesExtremesComponent),
/* harmony export */   SeriesHighlightComponent: () => (/* binding */ SeriesHighlightComponent),
/* harmony export */   SeriesHoverEvent: () => (/* binding */ SeriesHoverEvent),
/* harmony export */   SeriesItemComponent: () => (/* binding */ SeriesItemComponent),
/* harmony export */   SeriesLabelsComponent: () => (/* binding */ SeriesLabelsComponent),
/* harmony export */   SeriesLabelsFromComponent: () => (/* binding */ SeriesLabelsFromComponent),
/* harmony export */   SeriesLabelsToComponent: () => (/* binding */ SeriesLabelsToComponent),
/* harmony export */   SeriesMarkersComponent: () => (/* binding */ SeriesMarkersComponent),
/* harmony export */   SeriesNotesComponent: () => (/* binding */ SeriesNotesComponent),
/* harmony export */   SeriesNotesIconComponent: () => (/* binding */ SeriesNotesIconComponent),
/* harmony export */   SeriesNotesLabelComponent: () => (/* binding */ SeriesNotesLabelComponent),
/* harmony export */   SeriesOutliersComponent: () => (/* binding */ SeriesOutliersComponent),
/* harmony export */   SeriesTooltipComponent: () => (/* binding */ SeriesTooltipComponent),
/* harmony export */   SeriesTooltipTemplateDirective: () => (/* binding */ SeriesTooltipTemplateDirective),
/* harmony export */   SharedTooltipTemplateDirective: () => (/* binding */ SharedTooltipTemplateDirective),
/* harmony export */   SparklineComponent: () => (/* binding */ SparklineComponent),
/* harmony export */   SparklineModule: () => (/* binding */ SparklineModule),
/* harmony export */   StockChartComponent: () => (/* binding */ StockChartComponent),
/* harmony export */   StockChartModule: () => (/* binding */ StockChartModule),
/* harmony export */   SubtitleComponent: () => (/* binding */ SubtitleComponent),
/* harmony export */   TitleComponent: () => (/* binding */ TitleComponent),
/* harmony export */   TooltipComponent: () => (/* binding */ TooltipComponent),
/* harmony export */   TooltipPopupComponent: () => (/* binding */ TooltipPopupComponent),
/* harmony export */   TooltipTemplateService: () => (/* binding */ TooltipTemplateService),
/* harmony export */   ValueAxisComponent: () => (/* binding */ ValueAxisComponent),
/* harmony export */   ValueAxisCrosshairComponent: () => (/* binding */ ValueAxisCrosshairComponent),
/* harmony export */   ValueAxisCrosshairTooltipComponent: () => (/* binding */ ValueAxisCrosshairTooltipComponent),
/* harmony export */   ValueAxisItemComponent: () => (/* binding */ ValueAxisItemComponent),
/* harmony export */   ValueAxisLabelsComponent: () => (/* binding */ ValueAxisLabelsComponent),
/* harmony export */   ValueAxisNotesComponent: () => (/* binding */ ValueAxisNotesComponent),
/* harmony export */   ValueAxisNotesIconComponent: () => (/* binding */ ValueAxisNotesIconComponent),
/* harmony export */   ValueAxisNotesLabelComponent: () => (/* binding */ ValueAxisNotesLabelComponent),
/* harmony export */   ValueAxisTitleComponent: () => (/* binding */ ValueAxisTitleComponent),
/* harmony export */   WeekStartDay: () => (/* binding */ WeekStartDay),
/* harmony export */   XAxisComponent: () => (/* binding */ XAxisComponent),
/* harmony export */   XAxisCrosshairComponent: () => (/* binding */ XAxisCrosshairComponent),
/* harmony export */   XAxisCrosshairTooltipComponent: () => (/* binding */ XAxisCrosshairTooltipComponent),
/* harmony export */   XAxisItemComponent: () => (/* binding */ XAxisItemComponent),
/* harmony export */   XAxisLabelsComponent: () => (/* binding */ XAxisLabelsComponent),
/* harmony export */   XAxisNotesComponent: () => (/* binding */ XAxisNotesComponent),
/* harmony export */   XAxisNotesIconComponent: () => (/* binding */ XAxisNotesIconComponent),
/* harmony export */   XAxisNotesLabelComponent: () => (/* binding */ XAxisNotesLabelComponent),
/* harmony export */   XAxisTitleComponent: () => (/* binding */ XAxisTitleComponent),
/* harmony export */   YAxisComponent: () => (/* binding */ YAxisComponent),
/* harmony export */   YAxisCrosshairComponent: () => (/* binding */ YAxisCrosshairComponent),
/* harmony export */   YAxisCrosshairTooltipComponent: () => (/* binding */ YAxisCrosshairTooltipComponent),
/* harmony export */   YAxisItemComponent: () => (/* binding */ YAxisItemComponent),
/* harmony export */   YAxisLabelsComponent: () => (/* binding */ YAxisLabelsComponent),
/* harmony export */   YAxisNotesComponent: () => (/* binding */ YAxisNotesComponent),
/* harmony export */   YAxisNotesIconComponent: () => (/* binding */ YAxisNotesIconComponent),
/* harmony export */   YAxisNotesLabelComponent: () => (/* binding */ YAxisNotesLabelComponent),
/* harmony export */   YAxisTitleComponent: () => (/* binding */ YAxisTitleComponent),
/* harmony export */   ZoomEndEvent: () => (/* binding */ ZoomEndEvent),
/* harmony export */   ZoomEvent: () => (/* binding */ ZoomEvent),
/* harmony export */   ZoomStartEvent: () => (/* binding */ ZoomStartEvent),
/* harmony export */   ZoomableComponent: () => (/* binding */ ZoomableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-common */ 20305);
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ 87809);
/* harmony import */ var _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-l10n */ 17534);
/* harmony import */ var _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-charts */ 9657);
/* harmony import */ var _progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-drawing */ 10438);
/* harmony import */ var _progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-drawing */ 61947);
/* harmony import */ var _progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-licensing */ 99307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 52815);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-popup */ 72140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-navigation */ 7065);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-svg-icons */ 5108);
/**-----------------------------------------------------------------------------------------
* Copyright © 2023 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/



















const _c0 = ["content"];
function CrosshairTooltipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.value, " ");
  }
}
function CrosshairTooltipsContainerComponent_kendo_chart_crosshair_tooltip_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "kendo-chart-crosshair-tooltip", 1);
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("key", key_r1)("popupSettings", ctx_r0.popupSettings);
  }
}
function TooltipPopupComponent_ng_template_0_1_ng_template_0_Template(rf, ctx) {}
function TooltipPopupComponent_ng_template_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TooltipPopupComponent_ng_template_0_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.seriesTooltipTemplateRef)("ngTemplateOutletContext", ctx_r4.seriesTooltipContext);
  }
}
function TooltipPopupComponent_ng_template_0_2_ng_template_0_Template(rf, ctx) {}
function TooltipPopupComponent_ng_template_0_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TooltipPopupComponent_ng_template_0_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.seriesSharedTooltipTemplateRef)("ngTemplateOutletContext", ctx_r5.seriesSharedTooltipContext);
  }
}
function TooltipPopupComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TooltipPopupComponent_ng_template_0_1_Template, 1, 2, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TooltipPopupComponent_ng_template_0_2_Template, 1, 2, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.popupClasses)("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.shared);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.shared);
  }
}
function TooltipPopupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const formattedValue_r8 = ctx.formattedValue;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", formattedValue_r8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", point_r15.series.color);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const point_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r15.series.name);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", point_r15.series.name !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", point_r15.series.name === undefined);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_ng_template_4_Template(rf, ctx) {}
function TooltipPopupComponent_ng_template_3_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TooltipPopupComponent_ng_template_3_tr_4_td_1_Template, 2, 2, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TooltipPopupComponent_ng_template_3_tr_4_td_2_Template, 3, 2, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TooltipPopupComponent_ng_template_3_tr_4_ng_template_4_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r15 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const colorMarker_r12 = ctx_r24.colorMarker;
    const nameColumn_r13 = ctx_r24.nameColumn;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", colorMarker_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", nameColumn_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", point_r15.template)("ngTemplateOutletContext", point_r15);
  }
}
function TooltipPopupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TooltipPopupComponent_ng_template_3_tr_4_Template, 5, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const points_r9 = ctx.points;
    const categoryText_r10 = ctx.categoryText;
    const colspan_r11 = ctx.colspan;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", colspan_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categoryText_r10, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", points_r9);
  }
}
const _c1 = ["surface"];
function ChartComponent_div_5_ng_template_1_Template(rf, ctx) {}
function ChartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartComponent_div_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.donutCenterStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.donutCenterTemplate.templateRef);
  }
}
function ChartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
  }
}
const _c2 = ["breadcrumb"];
function StockChartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
  }
}
function SparklineComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
  }
}
const getTouch = domEvent => {
  return {
    x: {
      location: domEvent.pageX
    },
    y: {
      location: domEvent.pageY
    }
  };
};
const eventArgs = (e, previousArgs) => {
  const pointers = e.pointers;
  const pointer = pointers[0];
  const xLocation = pointer.pageX;
  const yLocation = pointer.pageY;
  let distance = 0;
  if (pointers.length > 1) {
    const pointer1 = pointers[0];
    const pointer2 = pointers[1];
    distance = Math.sqrt(Math.pow(pointer1.pageX - pointer2.pageX, 2) + Math.pow(pointer1.pageY - pointer2.pageY, 2));
  }
  return {
    distance: distance,
    event: e.srcEvent,
    preventDefault: function () {
      e.preventDefault();
    },
    target: e.target,
    touches: pointers.map(getTouch),
    type: e.type,
    x: {
      delta: previousArgs ? xLocation - previousArgs.x.location : 0,
      initialDelta: e.deltaX,
      location: xLocation,
      startLocation: xLocation - e.deltaX
    },
    y: {
      delta: previousArgs ? yLocation - previousArgs.y.location : 0,
      initialDelta: e.deltaY,
      location: yLocation,
      startLocation: yLocation - e.deltaY
    }
  };
};
function shouldBindGroup(groupNames, events) {
  for (let idx = 0; idx < groupNames.length; idx++) {
    if (events[groupNames[idx]]) {
      return true;
    }
  }
  return false;
}
const eventGroups = [{
  end: 'panend',
  move: 'panmove',
  start: 'panstart'
}, {
  gesturechange: 'pinchmove',
  gestureend: 'pinchend',
  gesturestart: 'pinchstart'
}, {
  press: 'press'
}, {
  tap: 'tap'
}];
/**
 * @hidden
 */
class DomEvents {
  constructor(hammerInstance, events) {
    this.hammerInstance = hammerInstance;
    this.eventHandlers = {};
    this.tap = this.tap.bind(this);
    this.press = this.press.bind(this);
    this.panstart = this.panstart.bind(this);
    this.panmove = this.panmove.bind(this);
    this.panend = this.panend.bind(this);
    this.pinchstart = this.pinchstart.bind(this);
    this.pinchmove = this.pinchmove.bind(this);
    this.pinchend = this.pinchend.bind(this);
    if (events) {
      this.bind(events);
    }
  }
  tap(e) {
    this.trigger('tap', e);
  }
  press(e) {
    this.trigger('press', e);
  }
  panstart(e) {
    delete this.previous;
    this.previous = this.trigger('start', e);
  }
  panmove(e) {
    this.previous = this.trigger('move', e);
  }
  panend(e) {
    this.trigger('end', e);
    delete this.previous;
  }
  pinchstart(e) {
    this.trigger('gesturestart', e);
  }
  pinchmove(e) {
    this.trigger('gesturechange', e);
  }
  pinchend(e) {
    this.trigger('gestureend', e);
  }
  trigger(name, e) {
    const args = eventArgs(e, this.previous);
    if (this.eventHandlers[name]) {
      this.eventHandlers[name](args);
    }
    return args;
  }
  bind(events = {}) {
    this.unbind();
    this.eventHandlers = events;
    for (let idx = 0; idx < eventGroups.length; idx++) {
      const eventGroup = eventGroups[idx];
      const groupNames = Object.keys(eventGroup);
      if (shouldBindGroup(groupNames, events)) {
        for (let nameIdx = 0; nameIdx < groupNames.length; nameIdx++) {
          const name = eventGroup[groupNames[nameIdx]];
          this.hammerInstance.on(name, this[name]);
        }
      }
    }
  }
  unbind() {
    if (this.hammerInstance) {
      this.hammerInstance.off();
    }
    this.eventHandlers = {};
  }
  destroy() {
    if (this.hammerInstance) {
      this.hammerInstance.destroy();
      delete this.hammerInstance;
    }
    delete this.eventHandlers;
  }
  toggleDrag(enable) {
    this.toggle('pan', enable);
  }
  toggleZoom(enable) {
    this.toggle('pinch', enable);
  }
  toggle(recognizer, enable) {
    if (this.hammerInstance) {
      const instanceRecognizer = this.hammerInstance.get(recognizer);
      instanceRecognizer.set({
        enable: enable
      });
    }
  }
}
const MISSING_HAMMER_MESSAGE = 'Hammerjs is not loaded.' + 'Solution: http://www.telerik.com/kendo-angular-ui/components/charts/troubleshooting/#toc-hammerjs-is-not-loaded';
/**
 * @hidden
 */
class DomEventsBuilder {
  static create(element, events) {
    if (typeof window !== 'undefined') {
      const HAMMER = window.Hammer;
      if (!HAMMER) {
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
          throw new Error(MISSING_HAMMER_MESSAGE);
        }
        return;
      }
      const hammerInstance = new HAMMER(element, {
        recognizers: [[HAMMER.Tap], [HAMMER.Pan], [HAMMER.Pinch], [HAMMER.Press, {
          time: 0
        }]]
      });
      return new DomEvents(hammerInstance, events);
    }
  }
}
const dateCategoryAxisFormats = _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.DateCategoryAxis.prototype.options.labels.dateFormats;
const dateValueAxisFormats = _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.DateValueAxis.prototype.options.labels.dateFormats;
const dateFormats = {
  milliseconds: "HH:mm:ss.SSS",
  seconds: {
    time: 'medium'
  },
  minutes: {
    time: 'short'
  },
  hours: {
    time: 'short'
  },
  days: {
    skeleton: 'Md'
  },
  weeks: {
    skeleton: 'Md'
  },
  months: {
    skeleton: 'yyMMM'
  },
  years: {
    skeleton: 'y'
  }
};
Object.assign(dateCategoryAxisFormats, dateFormats);
Object.assign(dateValueAxisFormats, dateFormats);
_progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.DomEventsBuilder.register(DomEventsBuilder);

/**
 * A directive which selects a [template](link:site.data.urls.angular['templatesyntax'])
 * within the `<kendo-chart>` component for the
 * [Donut center template](slug:donut_seriestypes_charts#toc-using-the-center-template).
 */
class DonutCenterTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
DonutCenterTemplateDirective.ɵfac = function DonutCenterTemplateDirective_Factory(t) {
  return new (t || DonutCenterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 8));
};
DonutCenterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DonutCenterTemplateDirective,
  selectors: [["", "kendoChartDonutCenterTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonutCenterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[kendoChartDonutCenterTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();

/**
 * @hidden
 */
class ItemChange {
  constructor(sender, options) {
    this.sender = sender;
    this.options = options;
  }
}
/**
 * @hidden
 */
class CollectionService {
  constructor() {
    this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.onItemChange$ = this.source.asObservable();
  }
  notify(change) {
    this.source.next(change);
  }
}
CollectionService.ɵfac = function CollectionService_Factory(t) {
  return new (t || CollectionService)();
};
CollectionService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CollectionService,
  factory: CollectionService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();

/**
 * @hidden
 */
const THROTTLE_MS = 1000 / 60;
/**
 * @hidden
 */
class Change {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
/**
 * @hidden
 */
class ConfigurationService {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.store = {};
    this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
    this.initSource();
  }
  initSource() {
    this.onFastChange$ = this.source.asObservable();
    this.onChange$ = this.onFastChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.auditTime)(THROTTLE_MS));
  }
  push(store) {
    this.store = store;
    this.next();
  }
  notify(change) {
    this.set(change.key, change.value);
    this.next();
  }
  set(field, value) {
    let store = this.store;
    const parts = field.split('.');
    let key = parts.shift();
    while (parts.length > 0) {
      store = store[key] = store[key] || {};
      key = parts.shift();
    }
    store[key] = value;
  }
  next() {
    this.ngZone.runOutsideAngular(() => {
      this.source.next(this.store);
    });
  }
}
ConfigurationService.ɵfac = function ConfigurationService_Factory(t) {
  return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
ConfigurationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ConfigurationService,
  factory: ConfigurationService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, null);
})();

/**
 * @hidden
 */
function copyChanges(changes, options) {
  for (const propertyName in changes) {
    if (!Object.hasOwnProperty.call(changes, propertyName)) {
      continue;
    }
    const value = changes[propertyName].currentValue;
    if (value === undefined) {
      delete options[propertyName];
    } else {
      options[propertyName] = value;
    }
  }
}

/**
 * @hidden
 */
function toSimpleChanges(changes) {
  const result = {};
  for (const propertyName in changes) {
    if (!Object.hasOwnProperty.call(changes, propertyName)) {
      continue;
    }
    result[propertyName] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SimpleChange(null, changes[propertyName], false);
  }
  return result;
}

/**
 * @hidden
 */
class CollectionItemComponent {
  constructor(configurationService, collectionService) {
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.options = {};
    this.hidden = false;
    this.subscription = configurationService.onFastChange$.subscribe(store => {
      this.options = store;
      this.notify();
    });
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  notify() {
    if (!this.collectionService) {
      return;
    }
    this.collectionService.notify(new ItemChange(this, this.options));
  }
}
CollectionItemComponent.ɵfac = function CollectionItemComponent_Factory(t) {
  return new (t || CollectionItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
CollectionItemComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CollectionItemComponent,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, null);
})();

/**
 * @hidden
 */
class SettingsComponent {
  constructor(configKey, configurationService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    this.store = {};
    if (configKey === undefined) {
      throw new Error('Configuration key not set');
    }
  }
  ngOnDestroy() {
    this.store = undefined;
    this.notify();
  }
  ngOnChanges(changes) {
    copyChanges(changes, this.store);
    this.notify();
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  markAsVisible() {
    this.store.visible = true;
    this.notify();
  }
  notify() {
    this.configurationService.notify(new Change(this.configKey, this.store));
  }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};
SettingsComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SettingsComponent,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: undefined
    }, {
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
class SeriesTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  get seriesTooltipTemplateRef() {
    return this.seriesTooltipTemplate;
  }
}
SeriesTooltipComponent.ɵfac = function SeriesTooltipComponent_Factory(t) {
  return new (t || SeriesTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesTooltipComponent,
  selectors: [["kendo-chart-series-item-tooltip"]],
  contentQueries: function SeriesTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.seriesTooltipTemplate = _t.first);
    }
  },
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesTooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
        static: false
      }]
    }]
  });
})();

/**
 * Represents the series [template](link:site.data.urls.angular['templatesyntax'])
 * within the `<kendo-chart-series-item>` component for creating nested
 * [Drilldown](slug:drilldown_chart_charts) series.
 *
 * When the user clicks on a data point with drilldown data,
 * the Chart will create a new series based on this template.
 *
 * The template context is passes through the following fields:
 * - `drilldownValue`&mdash;The drilldown field value.
 * - `point`&mdash;The series point to drill down to.
 * - `series`&mdash;The series to drill down to.
 */
class SeriesDrilldownTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
SeriesDrilldownTemplateDirective.ɵfac = function SeriesDrilldownTemplateDirective_Factory(t) {
  return new (t || SeriesDrilldownTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 8));
};
SeriesDrilldownTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SeriesDrilldownTemplateDirective,
  selectors: [["", "kendoChartDrilldownSeries", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDrilldownTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[kendoChartDrilldownSeries]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();
const toggle = flag => flag === undefined ? false : !flag;
/**
 * The configuration component for a series item.
 *
 * @example
 * ```html
 * <kendo-chart ...>
 *   <kendo-chart-series>
 *     <kendo-chart-series-item type="line" ...> </kendo-chart-series-item>
 *   </kendo-chart-series>
 * </kendo-chart>
 * ```
 */
class SeriesItemComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  /**
   * Toggles the series visibility and updates the parent Chart
   * without animated transitions.
   */
  toggleVisibility() {
    this.options.visible = toggle(this.options.visible);
    this.notify();
  }
  /**
   * Toggles the visibility of a point with the given index.
   * Applicable for the Pie, Donut, Funnel and Pyramid series.
   *
   * @param pointIndex - The zero-based index of the point to toggle.
   */
  togglePointVisibility(pointIndex) {
    const pv = this.options.pointVisibility = this.options.pointVisibility || {};
    pv[pointIndex] = toggle(pv[pointIndex]);
    this.notify();
  }
  get seriesTooltipTemplateRef() {
    if (this.seriesTooltip) {
      return this.seriesTooltip.seriesTooltipTemplateRef;
    }
  }
}
SeriesItemComponent.ɵfac = function SeriesItemComponent_Factory(t) {
  return new (t || SeriesItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
SeriesItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesItemComponent,
  selectors: [["kendo-chart-series-item"]],
  contentQueries: function SeriesItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesTooltipComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesDrilldownTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.seriesTooltip = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drilldownTemplate = _t.first);
    }
  },
  inputs: {
    aggregate: "aggregate",
    autoFit: "autoFit",
    axis: "axis",
    border: "border",
    categoryAxis: "categoryAxis",
    categoryField: "categoryField",
    closeField: "closeField",
    color: "color",
    colorField: "colorField",
    connectors: "connectors",
    currentField: "currentField",
    dashType: "dashType",
    data: "data",
    downColor: "downColor",
    downColorField: "downColorField",
    drilldownField: "drilldownField",
    dynamicHeight: "dynamicHeight",
    dynamicSlope: "dynamicSlope",
    errorHighField: "errorHighField",
    errorLowField: "errorLowField",
    explodeField: "explodeField",
    field: "field",
    fromField: "fromField",
    gap: "gap",
    highField: "highField",
    holeSize: "holeSize",
    line: "line",
    lowField: "lowField",
    lowerField: "lowerField",
    margin: "margin",
    maxSize: "maxSize",
    mean: "mean",
    meanField: "meanField",
    median: "median",
    medianField: "medianField",
    minSize: "minSize",
    missingValues: "missingValues",
    name: "name",
    neckRatio: "neckRatio",
    negativeColor: "negativeColor",
    negativeValues: "negativeValues",
    noteTextField: "noteTextField",
    opacity: "opacity",
    openField: "openField",
    outliersField: "outliersField",
    overlay: "overlay",
    padding: "padding",
    q1Field: "q1Field",
    q3Field: "q3Field",
    segmentSpacing: "segmentSpacing",
    size: "size",
    sizeField: "sizeField",
    spacing: "spacing",
    stack: "stack",
    startAngle: "startAngle",
    style: "style",
    summaryField: "summaryField",
    target: "target",
    toField: "toField",
    type: "type",
    upperField: "upperField",
    visible: "visible",
    visibleInLegend: "visibleInLegend",
    visibleInLegendField: "visibleInLegendField",
    visual: "visual",
    width: "width",
    whiskers: "whiskers",
    xAxis: "xAxis",
    xErrorHighField: "xErrorHighField",
    xErrorLowField: "xErrorLowField",
    xField: "xField",
    yAxis: "yAxis",
    yErrorHighField: "yErrorHighField",
    yErrorLowField: "yErrorLowField",
    yField: "yField",
    zIndex: "zIndex",
    errorBars: "errorBars",
    extremes: "extremes",
    highlight: "highlight",
    labels: "labels",
    markers: "markers",
    notes: "notes",
    outliers: "outliers",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-series-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    aggregate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoFit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    axis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categoryAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categoryField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    closeField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    colorField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    connectors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    currentField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dashType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    downColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    downColorField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    drilldownField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dynamicSlope: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorHighField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorLowField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    explodeField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fromField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    gap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    highField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    holeSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lowField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lowerField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mean: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    meanField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    median: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    medianField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    missingValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    neckRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    negativeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    negativeValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noteTextField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    openField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    outliersField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    overlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    q1Field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    q3Field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    segmentSpacing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sizeField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    spacing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stack: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    startAngle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    summaryField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    toField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    upperField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visibleInLegend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visibleInLegendField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    whiskers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xErrorHighField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xErrorLowField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yErrorHighField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yErrorLowField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorBars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    extremes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    highlight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    outliers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SeriesTooltipComponent, {
        static: false
      }]
    }],
    drilldownTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SeriesDrilldownTemplateDirective, {
        static: false
      }]
    }]
  });
})();
const POSITION_MODE = 'absolute';
const COLLISION = {
  horizontal: "fit",
  vertical: "fit"
};
/**
 * @hidden
 */
class BaseTooltip {
  constructor(popupService, localizationService) {
    this.popupService = popupService;
    this.localizationService = localizationService;
    this.style = {};
    this.popupRef = null;
  }
  get active() {
    return this.popupRef !== null;
  }
  show(e) {
    const align = e.anchor.align;
    const offset = this.position(e.anchor.point);
    this.style = e.style;
    if (!this.popupRef) {
      this.popupRef = this.popupService.open(Object.assign({
        offset: offset,
        popupAlign: align,
        animate: this.animate,
        content: this.templateRef,
        collision: COLLISION,
        positionMode: POSITION_MODE
      }, this.popupSettings));
      if (this.localizationService.rtl) {
        this.popupRef.popupElement.setAttribute('dir', 'rtl');
      }
      this.onInit();
    } else {
      const popup = this.popupRef.popup.instance;
      popup.offset = offset;
      popup.popupAlign = align;
    }
  }
  onInit() {
    /* noop */
  }
  hide() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  ngOnDestroy() {
    this.hide();
  }
  position(offset) {
    if (!this.popupSettings || !this.popupSettings.appendTo) {
      return offset;
    }
    const appendTo = this.popupSettings.appendTo.element.nativeElement;
    const bbox = appendTo.getBoundingClientRect();
    const {
      scrollLeft,
      scrollTop
    } = this.scrollOffset(appendTo);
    return {
      left: offset.left - bbox.left - scrollLeft,
      top: offset.top - bbox.top - scrollTop
    };
  }
  scrollOffset(element) {
    if (!element) {
      return null;
    }
    let scrollLeft = element.scrollLeft;
    let scrollTop = element.scrollTop;
    let parent = element.parentElement;
    while (parent) {
      scrollLeft += parent.scrollLeft;
      scrollTop += parent.scrollTop;
      parent = parent.parentElement;
    }
    return {
      scrollLeft,
      scrollTop
    };
  }
}
BaseTooltip.ɵfac = function BaseTooltip_Factory(t) {
  return new (t || BaseTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService));
};
BaseTooltip.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BaseTooltip
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }];
  }, null);
})();

/**
 * @hidden
 */
function bodyFactory() {
  if ((0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.isDocumentAvailable)()) {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(document.body);
  }
}

/**
 * @hidden
 */
class CrosshairTooltipComponent extends BaseTooltip {
  constructor(popupService, localizationService) {
    super(popupService, localizationService);
    this.animate = false;
  }
  show(e) {
    super.show(e);
    this.value = e.value;
    this.popupRef.popup.changeDetectorRef.detectChanges();
  }
}
CrosshairTooltipComponent.ɵfac = function CrosshairTooltipComponent_Factory(t) {
  return new (t || CrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService));
};
CrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CrosshairTooltipComponent,
  selectors: [["kendo-chart-crosshair-tooltip"]],
  viewQuery: function CrosshairTooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  inputs: {
    key: "key",
    popupSettings: "popupSettings"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService, {
    provide: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.POPUP_CONTAINER,
    useFactory: bodyFactory
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["content", ""], [1, "k-chart-tooltip", "k-chart-crosshair-tooltip", 3, "ngStyle"]],
  template: function CrosshairTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CrosshairTooltipComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      providers: [_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService, {
        provide: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: 'kendo-chart-crosshair-tooltip',
      template: `
        <ng-template #content>
            <div class="k-chart-tooltip k-chart-crosshair-tooltip" [ngStyle]="style">
                {{ value }}
            </div>
        </ng-template>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }];
  }, {
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['content', {
        static: true
      }]
    }],
    key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    popupSettings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
const AXES = ["categoryAxis", "valueAxis", "xAxis", "yAxis"];
/**
 * @hidden
 */
class CrosshairTooltipsContainerComponent {
  constructor() {
    this.tooltipKeys = [];
    this.tooltipsMap = {};
  }
  show(e) {
    const tooltipComponents = this.crossahirTooltipComponents.toArray();
    const axisName = e.axisName;
    const axisIndex = e.axisIndex;
    for (let idx = 0; idx < tooltipComponents.length; idx++) {
      if (tooltipComponents[idx].key === axisName + axisIndex) {
        tooltipComponents[idx].show(e);
        break;
      }
    }
  }
  hide() {
    const tooltipComponents = this.crossahirTooltipComponents.toArray();
    for (let idx = 0; idx < tooltipComponents.length; idx++) {
      tooltipComponents[idx].hide();
    }
  }
  get active() {
    return this.tooltipKeys.length > 0;
  }
  createCrosshairTooltips(options) {
    const newMap = this.mapTooltips(options);
    const map = this.tooltipsMap;
    for (const key in map) {
      if (!newMap[key]) {
        this.removeTooltip(key);
        delete map[key];
      }
    }
    for (const key in newMap) {
      if (!map[key]) {
        map[key] = newMap[key];
        this.tooltipKeys.push(key);
      }
    }
  }
  removeTooltip(key) {
    const keys = this.tooltipKeys;
    for (let idx = 0; idx < keys.length; idx++) {
      if (keys[idx] === key) {
        keys.splice(idx, 1);
        break;
      }
    }
  }
  mapTooltips(options) {
    const map = {};
    for (let idx = 0; idx < AXES.length; idx++) {
      const tooltips = this.axesCrosshairTooltipOptions(options, AXES[idx]);
      for (let tooltipIdx = 0; tooltipIdx < tooltips.length; tooltipIdx++) {
        const tooltip = tooltips[tooltipIdx];
        map[tooltip.name + tooltip.index] = tooltip;
      }
    }
    return map;
  }
  axesCrosshairTooltipOptions(options, name) {
    const result = [];
    if (options[name]) {
      const axes = [].concat(options[name]);
      for (let idx = 0; idx < axes.length; idx++) {
        const tooltip = (axes[idx].crosshair || {}).tooltip;
        if (tooltip && tooltip.visible) {
          result.push({
            index: idx,
            name: name
          });
        }
      }
    }
    return result;
  }
}
CrosshairTooltipsContainerComponent.ɵfac = function CrosshairTooltipsContainerComponent_Factory(t) {
  return new (t || CrosshairTooltipsContainerComponent)();
};
CrosshairTooltipsContainerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CrosshairTooltipsContainerComponent,
  selectors: [["kendo-chart-crosshair-tooltips-container"]],
  viewQuery: function CrosshairTooltipsContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CrosshairTooltipComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.crossahirTooltipComponents = _t);
    }
  },
  inputs: {
    popupSettings: "popupSettings"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "key", "popupSettings", 4, "ngFor", "ngForOf"], [3, "key", "popupSettings"]],
  template: function CrosshairTooltipsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CrosshairTooltipsContainerComponent_kendo_chart_crosshair_tooltip_0_Template, 1, 2, "kendo-chart-crosshair-tooltip", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tooltipKeys);
    }
  },
  dependencies: [CrosshairTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CrosshairTooltipsContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'kendo-chart-crosshair-tooltips-container',
      template: `
        <kendo-chart-crosshair-tooltip *ngFor="let key of tooltipKeys" [key]="key" [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltip>
    `
    }]
  }], null, {
    popupSettings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossahirTooltipComponents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChildren,
      args: [CrosshairTooltipComponent]
    }]
  });
})();

/**
 * A directive that selects a [template](link:site.data.urls.angular['templatesyntax'])
 * within the `<kendo-chart-tooltip>` component for the
 * [series tooltip](slug:tooltips_chart_charts#toc-specifying-a-template).
 * The following context fields are frequently utilized:
 * - `let-category="category"`&mdash;The category name.
 * - `let-dataItem="dataItem"`&mdash;The original data item used to construct the point. It will be `null` if binding to an array.
 * - `let-series="series"`&mdash;The data series.
 * - `let-value="value"`&mdash;The value of the point (either a number or an object).
 * For the full list of available fields, refer to the [`TooltipTemplatePoint`](slug:api_charts_tooltiptemplatepoint).
 *
  * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip>
 *          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
 *             Value is {{value}}
 *           </ng-template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
class SeriesTooltipTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
SeriesTooltipTemplateDirective.ɵfac = function SeriesTooltipTemplateDirective_Factory(t) {
  return new (t || SeriesTooltipTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 8));
};
SeriesTooltipTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SeriesTooltipTemplateDirective,
  selectors: [["", "kendoChartSeriesTooltipTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesTooltipTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[kendoChartSeriesTooltipTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();

/**
 * A directive that selects a [template](link:site.data.urls.angular['templatesyntax'])
 * within the `<kendo-chart-tooltip>` component for the
 * [shared series tooltip](slug:tooltips_chart_charts#toc-shared-tooltip-customization).
 * The available fields in the template context are:
 * - `let-points="points"`&mdash;An array of the [`TooltipTemplatePoints`](slug:api_charts_tooltiptemplatepoint) category.
 * - `let-category="category"`&mdash;The category name.
 * - `let-categoryText="categoryText"`&mdash;The category name as text.
 * - `let-nameColumn="nameColumn"`&mdash;Returns a Boolean [`value`](slug:api_charts_seriesitemcomponent#toc-name) indicating whether the name property of the `SeriesItemComponent` is defined.
 * - `let-colorMarker="colorMarker"`&mdash;Returns a Boolean value indicating whether one or more series colors are specified in the Chart. If the Chart contains only one `SeriesItemComponent`, the context field will return `false`.
 * - `let-colSpan="colSpan"`&mdash;Specifies the number of columns covered by the tooltip. The default value is `1` and increases by `1` if `nameColumn` and `colorMarker` are set to `true`.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip [shared]="true">
 *         <ng-template kendoChartSharedTooltipTemplate let-category="category" let-points="points">
 *             <div> {{ category }} </div>
 *             <div *ngFor="let point of points">
 *                 {{ point.series.name }} : {{ point.value }}
 *             </div>
 *         </ng-template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item name="A" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item name="B" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
class SharedTooltipTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
SharedTooltipTemplateDirective.ɵfac = function SharedTooltipTemplateDirective_Factory(t) {
  return new (t || SharedTooltipTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 8));
};
SharedTooltipTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SharedTooltipTemplateDirective,
  selectors: [["", "kendoChartSharedTooltipTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedTooltipTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[kendoChartSharedTooltipTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();

/**
 * The point that is passed to the tooltip template.
 */
class TooltipTemplatePoint {
  /**
   * @hidden
   */
  constructor(point, format, template) {
    this.value = point.value;
    this.category = point.category;
    this.categoryIndex = point.categoryIx;
    this.series = point.series;
    this.dataItem = point.dataItem;
    this.percentage = point.percentage;
    this.runningTotal = point.runningTotal;
    this.total = point.total;
    this.low = point.low;
    this.high = point.high;
    this.xLow = point.xLow;
    this.xHigh = point.xHigh;
    this.yLow = point.yLow;
    this.yHigh = point.yHigh;
    this.template = template;
    this.point = point;
    this.format = format;
  }
  /**
   * @hidden
   */
  get formattedValue() {
    return this.format ? this.point.formatValue(this.format) : String(this.value);
  }
}

/**
 * @hidden
 */
function hasParent(element, parent) {
  let current = element;
  while (current && current !== parent) {
    current = current.parentNode;
  }
  return current ? true : false;
}

/**
 * @hidden
 */
class TooltipTemplateService {
  setTemplate(template) {
    this.template = template;
  }
  getTemplate(seriesIndex) {
    if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
      return this.seriesTemplates[seriesIndex];
    }
    return this.template;
  }
  setSeriesTemplates(seriesTemplates) {
    this.seriesTemplates = seriesTemplates;
  }
  setSharedTemplate(sharedTemplate) {
    this.sharedTemplate = sharedTemplate;
  }
  getSharedTemplate() {
    return this.sharedTemplate;
  }
}
TooltipTemplateService.ɵfac = function TooltipTemplateService_Factory(t) {
  return new (t || TooltipTemplateService)();
};
TooltipTemplateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TooltipTemplateService,
  factory: TooltipTemplateService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipTemplateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
const SHARED_TOOLTIP_CLASS = 'k-chart-shared-tooltip';
const TOOLTIP_CLASS = "k-chart-tooltip";
/**
 * @hidden
 */
class TooltipPopupComponent extends BaseTooltip {
  constructor(popupService, templateService, localizationService, ngZone) {
    super(popupService, localizationService);
    this.popupService = popupService;
    this.templateService = templateService;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.seriesTooltipContext = {};
    this.seriesSharedTooltipContext = {};
    this.animate = true;
    this.wrapperClass = 'k-chart-tooltip-wrapper';
    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.popupClasses = {};
  }
  show(e) {
    this.shared = e.shared;
    this.popupClasses = Object.assign({
      [SHARED_TOOLTIP_CLASS]: e.shared,
      [TOOLTIP_CLASS]: true,
      [e.className]: !!e.className
    }, this.classNames);
    if (!e.shared) {
      this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
      this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
    } else {
      this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate() || this.defaultSharedTooltipTemplate.templateRef;
      this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
    }
    super.show(e);
  }
  containsElement(element) {
    if (this.popupRef) {
      return hasParent(element, this.popupRef.popupElement);
    }
  }
  sharedTemplateContext(e) {
    const points = e.points;
    const nameColumn = points.filter(point => typeof point.series.name !== 'undefined').length > 0;
    const colorMarker = e.series.length > 1;
    let colspan = 1;
    if (nameColumn) {
      colspan++;
    }
    if (colorMarker) {
      colspan++;
    }
    return {
      category: e.category,
      categoryText: e.categoryText,
      colorMarker: colorMarker,
      colspan: colspan,
      nameColumn: nameColumn,
      points: this.wrapPoints(e.points, e.format)
    };
  }
  pointTemplateRef(point) {
    return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
  }
  wrapPoints(points, format) {
    const result = [];
    for (let idx = 0; idx < points.length; idx++) {
      const point = points[idx];
      const template = this.pointTemplateRef(point);
      const pointFormat = ((point.options || {}).tooltip || {}).format || format;
      result.push(new TooltipTemplatePoint(point, pointFormat, template));
    }
    return result;
  }
  onInit() {
    this.ngZone.runOutsideAngular(() => {
      this.mouseleaveSubscription = this.popupRef.popupElement.addEventListener('mouseleave', args => {
        this.leave.emit(args);
      });
    });
    this.popupRef.popupElement.className += ` ${this.wrapperClass}`;
  }
  hide() {
    if (this.mouseleaveSubscription) {
      this.mouseleaveSubscription();
      this.mouseleaveSubscription = null;
    }
    super.hide();
  }
}
TooltipPopupComponent.ɵfac = function TooltipPopupComponent_Factory(t) {
  return new (t || TooltipPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TooltipTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
TooltipPopupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TooltipPopupComponent,
  selectors: [["kendo-chart-tooltip-popup"]],
  viewQuery: function TooltipPopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](SeriesTooltipTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](SharedTooltipTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultSeriesTooltipTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultSharedTooltipTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  inputs: {
    animate: "animate",
    classNames: "classNames",
    popupSettings: "popupSettings",
    wrapperClass: "wrapperClass"
  },
  outputs: {
    leave: "leave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService, {
    provide: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.POPUP_CONTAINER,
    useFactory: bodyFactory
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["content", ""], ["kendoChartSeriesTooltipTemplate", ""], ["kendoChartSharedTooltipTemplate", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "k-chart-shared-tooltip-marker"]],
  template: function TooltipPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TooltipPopupComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TooltipPopupComponent_ng_template_2_Template, 1, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TooltipPopupComponent_ng_template_3_Template, 5, 3, "ng-template", 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipPopupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      providers: [_progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService, {
        provide: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: 'kendo-chart-tooltip-popup',
      template: `
    <ng-template #content>
        <div [ngClass]="popupClasses" [ngStyle]="style">
          <ng-template [ngTemplateOutlet]="seriesTooltipTemplateRef" *ngIf="!shared"
                    [ngTemplateOutletContext]="seriesTooltipContext">
          </ng-template>
          <ng-template [ngTemplateOutlet]="seriesSharedTooltipTemplateRef" *ngIf="shared"
                    [ngTemplateOutletContext]="seriesSharedTooltipContext">
          </ng-template>
        </div>
    </ng-template>

    <ng-template kendoChartSeriesTooltipTemplate let-formattedValue="formattedValue">
        <span [innerHTML]="formattedValue"></span>
    </ng-template>
    <ng-template kendoChartSharedTooltipTemplate let-points="points" let-categoryText="categoryText" let-colspan="colspan" let-colorMarker="colorMarker" let-nameColumn="nameColumn" >
        <table>
            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>
            <tr *ngFor="let point of points">
                <td *ngIf="colorMarker"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>
                <td *ngIf="nameColumn">
                    <ng-container *ngIf="point.series.name !== undefined">{{ point.series.name }}</ng-container>
                    <ng-container *ngIf="point.series.name === undefined">&nbsp;</ng-container>
                </td>
                <td>
                  <ng-template [ngTemplateOutlet]="point.template"
                            [ngTemplateOutletContext]="point">
                  </ng-template>
                </td>
            </tr>
        </table>
    </ng-template>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupService
    }, {
      type: TooltipTemplateService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    defaultSeriesTooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [SeriesTooltipTemplateDirective, {
        static: false
      }]
    }],
    defaultSharedTooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [SharedTooltipTemplateDirective, {
        static: false
      }]
    }],
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['content', {
        static: true
      }]
    }],
    animate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    classNames: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    popupSettings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapperClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    leave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/**
 * @hidden
 */
class ChartInstanceObserver extends _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.InstanceObserver {
  constructor(instance) {
    super(instance);
    this.handlerMap = {
      hideTooltip: 'onHideTooltip',
      legendItemClick: 'onLegendItemClick',
      render: 'onRender',
      showTooltip: 'onShowTooltip',
      init: 'onInit'
    };
  }
}

/**
 * Fallback theme in case the Theme Service fails
 * to read the variables from the main theme.
 *
 * @hidden
 */
const chartDefaultTheme = () => Object.assign({}, (0,_progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.chartBaseTheme)(), {
  axisDefaults: {
    crosshair: {
      color: 'rgba(0, 0, 0, 0.5)'
    },
    labels: {
      color: 'rgb(101, 101, 101)',
      font: '12px serif'
    },
    line: {
      color: 'rgba(0, 0, 0, 0.08)'
    },
    majorGridLines: {
      color: 'rgba(0, 0, 0, 0.08)'
    },
    minorGridLines: {
      color: 'rgba(0, 0, 0, 0.04)'
    },
    notes: {
      icon: {
        background: 'rgba(0, 0, 0, 0.5)',
        border: {
          color: 'rgba(0, 0, 0, 0.5)'
        }
      },
      line: {
        color: 'rgba(0, 0, 0, 0.5)'
      },
      label: {
        font: '14px serif'
      }
    },
    title: {
      color: 'rgb(101, 101, 101)',
      font: '14px serif'
    }
  },
  chartArea: {
    background: 'rgb(255, 255, 255)'
  },
  legend: {
    inactiveItems: {
      labels: {
        color: 'rgba(102, 102, 102, 0.5)'
      },
      markers: {
        color: 'rgba(102, 102, 102, 0.5)'
      }
    },
    labels: {
      color: 'rgb(101, 101, 101)',
      font: '14px serif'
    }
  },
  seriesDefaults: {
    boxPlot: {
      downColor: 'rgba(0, 0, 0, 0.08)',
      mean: {
        color: 'rgb(246, 246, 246)'
      },
      median: {
        color: 'rgb(246, 246, 246)'
      },
      whiskers: {
        color: 'rgb(255, 99, 88)'
      }
    },
    bullet: {
      target: {
        color: 'rgb(101, 101, 101)'
      }
    },
    candlestick: {
      downColor: 'rgb(101, 101, 101)',
      line: {
        color: 'rgb(101, 101, 101)'
      }
    },
    errorBars: {
      color: 'rgba(0, 0, 0, 0.5)'
    },
    horizontalWaterfall: {
      line: {
        color: 'rgba(0, 0, 0, 0.08)'
      }
    },
    icon: {
      border: {
        color: 'rgba(0, 0, 0, 0.08)'
      }
    },
    labels: {
      background: 'rgb(255, 255, 255)',
      color: 'rgb(101, 101, 101)',
      opacity: 0.8,
      font: '12px serif'
    },
    notes: {
      icon: {
        background: 'rgba(0, 0, 0, 0.5)',
        border: {
          color: 'rgba(0, 0, 0, 0.5)'
        }
      },
      line: {
        color: 'rgba(0, 0, 0, 0.5)'
      },
      label: {
        font: '14px serif'
      }
    },
    overlay: {
      gradient: "none"
    },
    verticalBoxPlot: {
      downColor: 'rgba(0, 0, 0, 0.08)',
      mean: {
        color: 'rgb(246, 246, 246)'
      },
      median: {
        color: 'rgb(246, 246, 246)'
      },
      whiskers: {
        color: 'rgb(255, 99, 88)'
      }
    },
    verticalBullet: {
      target: {
        color: 'rgb(101, 101, 101)'
      }
    },
    waterfall: {
      line: {
        color: 'rgba(0, 0, 0, 0.08)'
      }
    },
    area: {
      opacity: 0.8
    }
  },
  title: {
    color: 'rgb(101, 101, 101)',
    font: '16px serif'
  },
  seriesColors: ['rgb(255, 99, 88)', 'rgb(255, 210, 70)', 'rgb(120, 210, 55)', 'rgb(40, 180, 200)', 'rgb(45, 115, 245)', 'rgb(170, 70, 190)']
});
const font = style => `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
const computedBackgroundColor = element => window.getComputedStyle(element).backgroundColor;
const letterPos = letter => letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
const seriesPos = name => {
  const alpha = name.match(/series-([a-z])$/);
  if (alpha !== null) {
    return letterPos(alpha[1]);
  }
  const num = name.split('--series-')[1];
  return parseInt(num, 10) - 1;
};
const SERIES_COLORS = 30;
const seriesTemplate = () => {
  let template = `
      <div class="k-var--series-a"></div>
      <div class="k-var--series-b"></div>
      <div class="k-var--series-c"></div>
      <div class="k-var--series-d"></div>
      <div class="k-var--series-e"></div>
      <div class="k-var--series-f"></div>
  `;
  for (let i = 0; i < SERIES_COLORS; i++) {
    template += `
      <div class="k-var--series-${i + 1}"></div>`;
  }
  return template;
};
const template = () => `
    <div class="k-var--primary"></div>
    <div class="k-var--primary-contrast"></div>
    <div class="k-var--base"></div>
    <div class="k-var--background"></div>

    <div class="k-var--normal-background"></div>
    <div class="k-var--normal-text-color"></div>
    <div class="k-var--hover-background"></div>
    <div class="k-var--hover-text-color"></div>
    <div class="k-var--selected-background"></div>
    <div class="k-var--selected-text-color"></div>
    <div class="k-var--chart-error-bars-background"></div>
    <div class="k-var--chart-notes-background"></div>
    <div class="k-var--chart-notes-border"></div>
    <div class="k-var--chart-notes-lines"></div>
    <div class="k-var--chart-crosshair-background"></div>

    <div class="k-var--chart-inactive"></div>
    <div class="k-var--chart-major-lines"></div>
    <div class="k-var--chart-minor-lines"></div>
    <div class="k-var--chart-area-opacity"></div>
    <div class="k-var--chart-area-inactive-opacity"></div>
    <div class="k-var--chart-line-inactive-opacity"></div>

    <div class="k-widget k-chart">
        <div class="k-var--chart-font"></div>
        <div class="k-var--chart-title-font"></div>
        <div class="k-var--chart-pane-title-font"></div>
        <div class="k-var--chart-label-font"></div>
    </div>

    <div class="k-var--series-unset"></div>
    <div class="k-var--series">
      ${seriesTemplate()}
    </div>
`;
/**
 * @hidden
 */
class ThemeService extends ConfigurationService {
  constructor(ngZone) {
    super(ngZone);
    this.loaded = false;
  }
  loadTheme() {
    if (this.loaded || !(0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.isDocumentAvailable)()) {
      return;
    }
    if (!this.readTheme()) {
      this.readDefaultTheme();
    }
    this.loaded = true;
    this.next();
  }
  readTheme() {
    this.createElement();
    const available = this.queryColor('primary') !== this.queryColor('primary-contrast');
    try {
      if (available) {
        this.push((0,_progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.chartBaseTheme)());
        this.setColors();
        this.setFonts();
        this.setSeriesColors();
      }
    } finally {
      this.destroyElement();
    }
    return available;
  }
  readDefaultTheme() {
    this.push(chartDefaultTheme());
  }
  createElement() {
    const container = this.element = document.createElement('div');
    container.style.display = 'none';
    container.innerHTML = template();
    document.body.appendChild(container);
  }
  destroyElement() {
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = undefined;
    }
  }
  setStyle(key, value) {
    this.set(key, value);
  }
  setColors() {
    this.mapColor('axisDefaults.crosshair.color', 'chart-crosshair-background');
    this.mapColor('axisDefaults.labels.color', 'normal-text-color');
    this.mapColor('axisDefaults.line.color', 'chart-major-lines');
    this.mapColor('axisDefaults.majorGridLines.color', 'chart-major-lines');
    this.mapColor('axisDefaults.minorGridLines.color', 'chart-minor-lines');
    this.mapColor('axisDefaults.notes.icon.background', 'chart-notes-background');
    this.mapColor('axisDefaults.notes.icon.border.color', 'chart-notes-border');
    this.mapColor('axisDefaults.notes.line.color', 'chart-notes-lines');
    this.mapColor('axisDefaults.title.color', 'normal-text-color');
    this.mapColor('chartArea.background', 'background');
    this.mapColor('legend.inactiveItems.labels.color', 'chart-inactive');
    this.mapColor('legend.inactiveItems.markers.color', 'chart-inactive');
    this.mapColor('legend.labels.color', 'normal-text-color');
    this.mapColor('seriesDefaults.boxPlot.downColor', 'chart-major-lines');
    this.mapColor('seriesDefaults.boxPlot.mean.color', 'base');
    this.mapColor('seriesDefaults.boxPlot.median.color', 'base');
    this.mapColor('seriesDefaults.boxPlot.whiskers.color', 'primary');
    this.mapColor('seriesDefaults.bullet.target.color', 'normal-text-color');
    this.mapColor('seriesDefaults.candlestick.downColor', 'normal-text-color');
    this.mapColor('seriesDefaults.candlestick.line.color', 'normal-text-color');
    this.mapColor('seriesDefaults.errorBars.color', 'chart-error-bars-background');
    this.mapColor('seriesDefaults.horizontalWaterfall.line.color', 'chart-major-lines');
    this.mapColor('seriesDefaults.icon.border.color', 'chart-major-lines');
    this.mapColor('seriesDefaults.labels.background', 'background');
    this.mapColor('seriesDefaults.labels.color', 'normal-text-color');
    this.mapColor('seriesDefaults.notes.icon.background', 'chart-notes-background');
    this.mapColor('seriesDefaults.notes.icon.border.color', 'chart-notes-border');
    this.mapColor('seriesDefaults.notes.line.color', 'chart-notes-lines');
    this.mapColor('seriesDefaults.verticalBoxPlot.downColor', 'chart-major-lines');
    this.mapColor('seriesDefaults.verticalBoxPlot.mean.color', 'base');
    this.mapColor('seriesDefaults.verticalBoxPlot.median.color', 'base');
    this.mapColor('seriesDefaults.verticalBoxPlot.whiskers.color', 'primary');
    this.mapColor('seriesDefaults.verticalBullet.target.color', 'normal-text-color');
    this.mapColor('seriesDefaults.waterfall.line.color', 'chart-major-lines');
    this.mapColor('title.color', 'normal-text-color');
    this.mapColor('subtitle.color', 'normal-text-color');
    const opacity = parseFloat(this.queryStyle('chart-area-opacity').opacity);
    if (!isNaN(opacity)) {
      this.setStyle('seriesDefaults.area.opacity', opacity);
      this.setStyle('seriesDefaults.radarArea.opacity', opacity);
      this.setStyle('seriesDefaults.verticalArea.opacity', opacity);
      this.setStyle('seriesDefaults.labels.opacity', opacity);
    }
    this.setInactiveOpacity(['area', 'verticalArea'], 'chart-area-inactive-opacity');
    this.setInactiveOpacity(['line', 'verticalLine'], 'chart-line-inactive-opacity');
  }
  setInactiveOpacity(seriesTypes, selector) {
    const inactiveOpacity = parseFloat(this.queryStyle(selector).opacity);
    if (!isNaN(inactiveOpacity) && inactiveOpacity < 1) {
      seriesTypes.forEach(type => this.setStyle(`seriesDefaults.${type}.highlight.inactiveOpacity`, inactiveOpacity));
    }
  }
  setFonts() {
    const defaultFont = font(this.queryStyle('chart-font'));
    const titleFont = font(this.queryStyle('chart-title-font'));
    const paneTitleFont = font(this.queryStyle('chart-pane-title-font'));
    const labelFont = font(this.queryStyle('chart-label-font'));
    this.setStyle('axisDefaults.labels.font', labelFont);
    this.setStyle('axisDefaults.notes.label.font', defaultFont);
    this.setStyle('axisDefaults.title.font', defaultFont);
    this.setStyle('legend.labels.font', defaultFont);
    this.setStyle('seriesDefaults.labels.font', labelFont);
    this.setStyle('seriesDefaults.notes.label.font', defaultFont);
    this.setStyle('title.font', titleFont);
    this.setStyle('subtitle.font', paneTitleFont);
    this.setStyle('paneDefaults.title.font', paneTitleFont);
  }
  setSeriesColors() {
    const element = this.element;
    const series = [].slice.call(element.querySelectorAll('.k-var--series div'));
    const unsetColor = computedBackgroundColor(element.querySelector('.k-var--series-unset'));
    const seriesColors = series.reduce((arr, el) => {
      const pos = seriesPos(el.className);
      const color = computedBackgroundColor(el);
      if (color !== unsetColor) {
        arr[pos] = color;
      }
      return arr;
    }, [] // Will populate the series colors in this array
    );

    this.setStyle('seriesColors', seriesColors);
  }
  mapColor(key, varName) {
    this.setStyle(key, this.queryColor(varName));
  }
  queryColor(varName) {
    return this.queryStyle(varName).backgroundColor;
  }
  queryStyle(varName) {
    const element = this.element.querySelector(`.k-var--${varName}`);
    return window.getComputedStyle(element);
  }
}
ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
ThemeService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThemeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, null);
})();

/**
 * @hidden
 */
class BaseEvent {
  /**
   * @hidden
   */
  constructor(sender) {
    this.sender = sender;
  }
}
BaseEvent.ɵfac = function BaseEvent_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};
BaseEvent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BaseEvent
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseEvent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: undefined
    }];
  }, null);
})();

/**
 * Arguments for the `axisLabelClick` event.
 */
class AxisLabelClickEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.dataItem = e.dataItem;
    this.index = e.index;
    this.text = e.text;
    this.value = e.value;
  }
}

/**
 * @hidden
 */
class PreventableEvent extends BaseEvent {
  constructor() {
    super(...arguments);
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
}
PreventableEvent.ɵfac = /* @__PURE__ */function () {
  let ɵPreventableEvent_BaseFactory;
  return function PreventableEvent_Factory(t) {
    return (ɵPreventableEvent_BaseFactory || (ɵPreventableEvent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PreventableEvent)))(t || PreventableEvent);
  };
}();
PreventableEvent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: PreventableEvent,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PreventableEvent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], null, null);
})();

/**
 * Arguments for the `drag` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class DragEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
}

/**
 * Arguments for the `dragEnd` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class DragEndEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
}

/**
 * Arguments for the `dragStart` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class DragStartEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
}

/**
 * @hidden
 */
class LegendEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.series = e.series;
    this.seriesIndex = e.seriesIndex;
    this.pointIndex = e.pointIndex;
    this.text = e.text;
  }
}

/**
 * Arguments for the `legendItemHover` event.
 */
class LegendItemHoverEvent extends LegendEvent {
  /**
   * If called, the series highlight is not shown as a result of hovering over the legend item.
   */
  preventDefault() {
    super.preventDefault();
  }
}

/* eslint-disable no-empty */
/**
 * Arguments for the `legendItemLeave` event.
 */
class LegendItemLeaveEvent extends LegendEvent {
  /**
   * @hidden
   */
  preventDefault() {
    /* noop */
  }
  /**
   * @hidden
   */
  isDefaultPrevented() {
    return false;
  }
}

/**
 * @hidden
 */
class NoteEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.series = e.series;
    this.value = e.value;
    this.visual = e.visual;
  }
}

/**
 * Arguments for the `noteClick` event.
 */
class NoteClickEvent extends NoteEvent {}

/**
 * Arguments for the `noteHover` event.
 */
class NoteHoverEvent extends NoteEvent {}

/**
 * Arguments for the `noteLeave` event.
 */
class NoteLeaveEvent extends NoteEvent {}

/**
 * Arguments for the `paneRender` event.
 */
class PaneRenderEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(args, sender) {
    super(sender);
    Object.assign(this, args);
  }
}

/**
 * Arguments for the `plotAreaClick` event.
 */
class PlotAreaClickEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.originalEvent = e.originalEvent;
    this.value = e.value;
    this.x = e.x;
    this.y = e.y;
  }
}

/**
 * Arguments for the `plotAreaHover` event.
 */
class PlotAreaHoverEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.originalEvent = e.originalEvent;
    this.value = e.value;
    this.x = e.x;
    this.y = e.y;
  }
}
class PlotAreaLeaveEvent extends BaseEvent {}

/**
 * Arguments for the `render` event.
 */
class RenderEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(_e, sender) {
    super(sender);
  }
}

/**
 * Arguments for the `select` event.
 */
class SelectEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
}

/**
 * Arguments for the `selectEnd` event.
 */
class SelectEndEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
}

/**
 * Arguments for the `selectStart` event.
 */
class SelectStartEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
}

/**
 * Arguments for the `seriesClick` event.
 */
class SeriesClickEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.originalEvent = e.originalEvent;
    this.percentage = e.percentage;
    this.point = e.point;
    this.series = e.series;
    this.stackValue = e.stackValue;
    this.value = e.value;
  }
}

/**
 * @hidden
 */
class SeriesEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.originalEvent = e.originalEvent;
    this.percentage = e.percentage;
    this.point = e.point;
    this.series = e.series;
    this.stackValue = e.stackValue;
    this.value = e.value;
  }
}

/**
 * Arguments for the `seriesHover` event.
 */
class SeriesHoverEvent extends SeriesEvent {}

/**
 * Arguments for the `seriesOver` event.
 */
class SeriesOverEvent extends SeriesEvent {}

/**
 * Arguments for the `seriesLeave` event.
 */
class SeriesLeaveEvent extends SeriesEvent {}

/**
 * Arguments for the `zoom` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class ZoomEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.delta = e.delta;
    this.originalEvent = e.originalEvent;
  }
}

/**
 * Arguments for the `zoomEnd` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class ZoomEndEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
}

/**
 * Arguments for the `zoomStart` event ([see example](slug:panzoom_chart_charts#toc-pan-and-zoom-events)).
 */
class ZoomStartEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
}
const EVENT_MAP$1 = {
  axisLabelClick: AxisLabelClickEvent,
  drag: DragEvent,
  dragEnd: DragEndEvent,
  dragStart: DragStartEvent,
  legendItemHover: LegendItemHoverEvent,
  legendItemLeave: LegendItemLeaveEvent,
  noteClick: NoteClickEvent,
  noteHover: NoteHoverEvent,
  noteLeave: NoteLeaveEvent,
  paneRender: PaneRenderEvent,
  plotAreaClick: PlotAreaClickEvent,
  plotAreaHover: PlotAreaHoverEvent,
  plotAreaLeave: PlotAreaLeaveEvent,
  render: RenderEvent,
  select: SelectEvent,
  selectEnd: SelectEndEvent,
  selectStart: SelectStartEvent,
  seriesClick: SeriesClickEvent,
  seriesHover: SeriesHoverEvent,
  seriesOver: SeriesOverEvent,
  seriesLeave: SeriesLeaveEvent,
  zoom: ZoomEvent,
  zoomEnd: ZoomEndEvent,
  zoomStart: ZoomStartEvent
};
/**
 * @hidden
 */
class InstanceEventService {
  create(name, args, sender) {
    if (EVENT_MAP$1[name]) {
      return new EVENT_MAP$1[name](args, sender);
    }
  }
}

/**
 * Arguments for the `legendItemClick` event.
 */
class LegendItemClickEvent extends LegendEvent {
  /**
   * If called, the series visibility is not toggled as a result of clicking the legend item.
   */
  preventDefault() {
    super.preventDefault();
  }
}

/**
 * @hidden
 */
const packageMetadata = {
  name: '@progress/kendo-angular-charts',
  productName: 'Kendo UI for Angular',
  productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
  publishDate: 1694532950,
  version: '13.5.0',
  licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/'
};

/**
 * @hidden
 */
class CollectionComponent {
  constructor(configKey, configurationService, collectionService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.items = [];
    this.subscription = collectionService.onItemChange$.subscribe(changes => this.processChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.readItems();
    this.children.changes.subscribe(() => this.readItems());
  }
  processChanges(changes) {
    if (!this.children) {
      return;
    }
    const index = this.children.toArray().filter(s => !s.hidden).indexOf(changes.sender);
    if (index < 0) {
      return;
    }
    this.items[index] = changes.options;
    this.change();
  }
  readItems() {
    this.items = this.children.filter(s => !s.hidden).map(s => s.options);
    this.change();
  }
  change() {
    this.configurationService.notify(new Change(this.configKey, this.items.length === 0 ? undefined : this.items));
  }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};
CollectionComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CollectionComponent
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: undefined
    }, {
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, null);
})();

/**
 * A collection of one or more series items. [See example](slug:series_chart_charts).
 *
 * @example
 * ```html
 * <kendo-chart>
 *   <kendo-chart-series>
 *     <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *     </kendo-chart-series-item>
 *   </kendo-chart-series>
 * </kendo-chart>
 * ```
 */
class SeriesComponent extends CollectionComponent {
  constructor(configurationService, collectionService, tooltipTemplateService, viewContainer) {
    super('series', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.tooltipTemplateService = tooltipTemplateService;
    this.viewContainer = viewContainer;
  }
  ngAfterContentChecked() {
    this.readTooltipTemplates();
  }
  readTooltipTemplates() {
    const templates = this.children.map(item => item.seriesTooltipTemplateRef);
    this.tooltipTemplateService.setSeriesTemplates(templates);
  }
}
SeriesComponent.ɵfac = function SeriesComponent_Factory(t) {
  return new (t || SeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TooltipTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};
SeriesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesComponent,
  selectors: [["kendo-chart-series"]],
  contentQueries: function SeriesComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-series',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: TooltipTemplateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [SeriesItemComponent, {
        descendants: true
      }]
    }]
  });
})();

/**
 * Arguments for the `drilldown` event.
 *
 * See [Drilldown Charts](slug:drilldown_chart_charts).
 */
class DrilldownEvent extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.value = e.value;
    this.point = e.point;
    this.series = e.series;
  }
}
function hasObservers(emitter) {
  return emitter.observers.length > 0;
}
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <button kendoButton (click)="toggleLegend()">Toggle Legend</button>
 *     <button kendoButton (click)="toggleSeries()">Toggle Series</button>
 *     <kendo-chart>
 *       <kendo-chart-legend [visible]="legendVisible">
 *       </kendo-chart-legend>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item *ngIf="seriesVisible" name="Series #1"
 *                                   type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public legendVisible: boolean = true;
 *   public seriesVisible: boolean = true;
 *
 *   public toggleSeries(): void {
 *     this.seriesVisible = !this.seriesVisible;
 *   }
 *
 *   public toggleLegend(): void {
 *     this.legendVisible = !this.legendVisible;
 *   }
 * }
 *
 * ```
 */
class ChartComponent {
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    /**
     * Fires when the user clicks an axis label ([see example](slug:events_chart)).
     */
    this.axisLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires as long as the user is dragging the Chart with the mouse or through swipe gestures.
     */
    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user stops dragging the Chart.
     */
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user starts dragging the Chart.
     */
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user hovers over a legend item ([see example](slug:events_chart)).
     */
    this.legendItemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the cursor leaves a legend item.
     */
    this.legendItemLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user clicks a note.
     */
    this.noteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user hovers over a note.
     */
    this.noteHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the cursor leaves a note.
     */
    this.noteLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when a pane is rendered because the Chart is rendered, performs panning or zooming, or is exported with different options.
     * The event is used to render custom visuals in the panes.
     */
    this.paneRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user clicks the plot area ([see example](slug:events_chart)).
     * The `click` event is triggered by the `tap` and `contextmenu` events.
     * To distinguish between the original events, inspect the `e.originalEvent.type` field.
     */
    this.plotAreaClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user hovers the plot area ([see example](slug:events_chart)).
     */
    this.plotAreaHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the cursor leaves the plot area.
     */
    this.plotAreaLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the Chart is ready to render on screen ([see example](slug:events_chart)).
     * For example, you can use it to remove loading indicators.
     * Any changes made to the options are ignored.
     */
    this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user modifies the selection.
     *
     * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
     */
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user completes the modification of the selection.
     *
     * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
     */
    this.selectEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user starts modifying the axis selection.
     *
     * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
     */
    this.selectStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user clicks the Chart series.
     *
     * The `click` event will be triggered by the `tap` and `contextmenu` events ([see example](slug:events_chart)).
     * To distinguish between the original events, inspect the `e.originalEvent.type` field.
     */
    this.seriesClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user when the user wants to drill down on a specific point.
     */
    this.drilldown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user hovers the Chart series ([see example](slug:events_chart)).
     */
    this.seriesHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the cursor enters a series.
     */
    this.seriesOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the cursor leaves a series.
     */
    this.seriesLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires as long as the user is zooming the Chart by using the mousewheel operation.
     */
    this.zoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user stops zooming the Chart.
     */
    this.zoomEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the user uses the mousewheel to zoom the Chart.
     */
    this.zoomStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when a legend item is clicked before the selected series visibility is toggled.
     * Can be prevented.
     */
    this.legendItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the drill-down level has changed.
     */
    this.drilldownLevelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Limits the automatic resizing of the Chart. Sets the maximum number of times per second
     * that the component redraws its content when the size of its container changes.
     * Defaults to `10`. To disable the automatic resizing, set it to `0`.
     *
     * @default 10
     */
    this.resizeRateLimit = 10;
    /**
     * @hidden
     */
    this.showLicenseWatermark = false;
    this.theme = null;
    this.suppressTransitions = false;
    this.rtl = false;
    this.hostClasses = ['k-chart', 'k-widget'];
    this.drilldownState = [];
    const isValid = (0,_progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_9__.validatePackage)(packageMetadata);
    this.showLicenseWatermark = (0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.shouldShowValidationUI)(isValid);
    this.themeService.loadTheme();
    this.refreshWait();
  }
  /**
   * Gets or sets the current drill-down level for [Drilldown Charts](slug:drilldown_chart_charts).
   *
   * To return to a previous level, set the value to a number less than the current level.
   * To return to the root chart, set the value to 0.
   *
   * Setting the value to a number greater than the current level will have no effect.
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  set drilldownLevel(level) {
    const currentLevel = this.drilldownState.length;
    if (currentLevel <= level || !this.seriesComponents) {
      return;
    }
    const removed = this.drilldownState.slice(level);
    removed.forEach(view => view.destroy());
    this.drilldownState = this.drilldownState.slice(0, currentLevel - removed.length);
    this.seriesComponents.toArray().slice(-removed.length - 1).forEach(series => series.hidden = false);
    this.drilldownLevelChange.emit(level);
  }
  ngOnInit() {
    if (this.element) {
      this.hostClasses.forEach(name => {
        this.renderer.addClass(this.element.nativeElement, name);
      });
      this.renderer.setStyle(this.element.nativeElement, 'position', 'relative');
    }
  }
  ngAfterViewInit() {
    if (this.canRender) {
      this.ngZone.runOutsideAngular(() => {
        const chartMouseleave = this.renderer.listen(this.surfaceElement.nativeElement, 'mouseleave', this.chartMouseleave.bind(this));
        this.domSubscriptions = () => {
          chartMouseleave();
        };
      });
    }
    this.setDirection();
    this.subscriptions = this.intl.changes.subscribe(this.intlChange.bind(this));
    this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
  }
  onDrilldown(e) {
    const args = new DrilldownEvent(e, this);
    this.run(() => this.drilldown.emit(args));
    if (args.isDefaultPrevented()) {
      return;
    }
    const seriesCollection = this.seriesCollectionComponent.first;
    const seriesComponent = this.seriesComponents.find(sc => sc.name === e.series.name);
    if (seriesComponent.drilldownTemplate) {
      seriesComponent.hidden = true;
      const view = seriesCollection.viewContainer.createEmbeddedView(seriesComponent.drilldownTemplate.templateRef, {
        drilldownValue: e.value,
        point: e.point,
        series: e.series
      });
      view.markForCheck();
      this.drilldownState.push(view);
      this.drilldownLevelChange.emit(this.drilldownLevel);
    }
  }
  ngAfterViewChecked() {
    if (this.instance && this.autoResize) {
      this.ngZone.runOutsideAngular(() => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          this.resize();
        }, 0);
      });
    }
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    store.popupSettings = null;
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * chart.notifyChanges({ title: { text: 'New Title' } });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.destroyed = true;
    if (this.optionsChange) {
      this.optionsChange.unsubscribe();
    }
    if (this.domSubscriptions) {
      this.domSubscriptions();
      this.domSubscriptions = null;
    }
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.redrawTimeout);
  }
  createInstance(element, observer) {
    this.instance = new _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.Chart(element, this.options, this.theme, {
      intlService: this.intl,
      observer: observer,
      rtl: this.rtl,
      sender: this
    });
  }
  /**
   * Exports the Chart as an image. The export operation is asynchronous and returns a promise.
   *
   * @param {ImageExportOptions} options - The parameters for the exported image.
   * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
   */
  exportImage(options = {}) {
    return (0,_progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_10__["default"])(this.exportVisual(options), options);
  }
  /**
   * Exports the Chart as an SVG document. The export operation is asynchronous and returns a promise.
   *
   * @param options - The parameters for the exported file.
   * @returns - A promise that will be resolved with an SVG document that is encoded as a Data URI.
   */
  exportSVG(options = {}) {
    return (0,_progress_kendo_drawing__WEBPACK_IMPORTED_MODULE_11__["default"])(this.exportVisual(options), options);
  }
  /**
   * Exports the Chart as a Drawing `Scene`.
   *
   * @param options - The parameters for the export operation.
   * @returns - The root Group of the scene.
   */
  exportVisual(options = {}) {
    return this.instance.exportVisual(options);
  }
  /**
   * Returns the axis with the specified name.
   *
   * @param {string} name - The axis name.
   * @returns {ChartAxis} - The axis with a corresponding name.
   */
  findAxisByName(name) {
    if (this.instance) {
      return this.instance.findAxisByName(name);
    }
  }
  /**
   * Returns the pane at the specified index.
   *
   * @param {number} index - The pane index.
   * @returns {ChartPane} - The pane at the specified index.
   */
  findPaneByIndex(index) {
    if (this.instance) {
      return this.instance.findPaneByIndex(index);
    }
  }
  /**
   * Returns the pane with the specified name.
   *
   * @param {string} name - The name of the pane.
   * @returns {ChartPane} - The pane with the provided name.
   */
  findPaneByName(name) {
    if (this.instance) {
      return this.instance.findPaneByName(name);
    }
  }
  /**
   * Returns the plot area of the Chart.
   * @returns {ChartPlotArea} - The plot area of the Chart.
   */
  getPlotArea() {
    if (this.instance) {
      return this.instance.plotArea();
    }
  }
  /**
   * Highlights the series points or the segments of a Pie, Donut, Funnel or Pyramid charts.
   *
   * See [Series Highlight]({% slug serieshighlight_chart_charts %}) for more details (with an [example](slug:serieshighlight_chart_charts#toc-toggling-the-highlight-with-code)).
   * @param show - A Boolean value that indicates whether the highlight is shown or hidden.
   * @param filter - A string that represents the series or category name, an object with the series and category name, or a function which will be called for each point. The function should return `true` for the points for which the highlight is toggled.
   */
  toggleHighlight(show, filter) {
    if (this.instance) {
      this.instance.toggleHighlight(show, filter);
    }
  }
  /**
   * Hides the tooltip of the Chart.
   */
  hideTooltip() {
    if (this.instance) {
      this.instance.hideTooltip();
    }
  }
  /**
   * Shows the Chart tooltip of a specific point or the shared tooltip of a specific category.
   *
   * @param filter - The category for a shared tooltip or a function which will be called for each point until the function returns `true`.
   */
  showTooltip(filter) {
    if (this.instance) {
      this.instance.showTooltip(filter);
    }
  }
  init() {
    if (!this.canRender) {
      return;
    }
    const element = this.surfaceElement.nativeElement;
    const instanceObserver = new ChartInstanceObserver(this);
    this.createInstance(element, instanceObserver);
  }
  /**
   * Detects the size of the container and redraws the Chart.
   * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
   */
  resize() {
    if (this.instance) {
      this.instance.resize();
    }
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.autoResize) {
      this.resize();
    }
  }
  onLegendItemClick(e) {
    this.run(() => {
      const args = new LegendItemClickEvent(e, this);
      this.legendItemClick.emit(args);
      if (!args.isDefaultPrevented()) {
        const series = this.seriesComponents.toArray()[e.series.index];
        if (!series) {
          return;
        }
        if (e.pointIndex === undefined) {
          series.toggleVisibility();
        } else {
          series.togglePointVisibility(e.pointIndex);
        }
        this.suppressTransitions = true;
      }
    }, hasObservers(this.legendItemClick), this.seriesComponents.length > 0);
  }
  onInit(e) {
    this.instance = e.sender;
  }
  onRender(e) {
    const donutCenterStyle = this.getDonutCenterStyle();
    this.run(() => {
      const args = new RenderEvent(e, this);
      this.surface = e.sender.surface;
      this.render.emit(args);
      this.donutCenterStyle = donutCenterStyle;
    }, hasObservers(this.render), this.donutCenterStyle !== donutCenterStyle);
  }
  onShowTooltip(e) {
    this.run(() => {
      if (!e.crosshair) {
        this.tooltipInstance.show(e);
      } else {
        this.crossahirTooltips.show(e);
      }
    }, !e.crosshair, true);
  }
  onHideTooltip(e) {
    if (!e.crosshair) {
      if (this.tooltipInstance.active) {
        this.tooltipInstance.hide();
        this.detectChanges();
      }
    } else if (this.crossahirTooltips.active) {
      this.crossahirTooltips.hide();
      this.detectChanges();
    }
  }
  trigger(name, e) {
    if (name === 'resize') {
      return;
    }
    if (name === 'drilldown') {
      this.onDrilldown(e);
      return;
    }
    const emitter = this.activeEmitter(name);
    if (emitter) {
      const args = this.instanceEventService.create(name, e, this);
      this.run(() => {
        emitter.emit(args);
      });
      return args.isDefaultPrevented && args.isDefaultPrevented();
    }
  }
  requiresHandlers(names) {
    for (let idx = 0; idx < names.length; idx++) {
      if (this.activeEmitter(names[idx])) {
        return true;
      }
    }
    return false;
  }
  refresh() {
    clearTimeout(this.redrawTimeout);
    this.updateDirection();
    this.crossahirTooltips.createCrosshairTooltips(this.options);
    this.setChartAreaSize();
    if (!this.instance) {
      this.init();
      return;
    }
    const transitions = this.options.transitions;
    if (this.suppressTransitions) {
      this.options.transitions = false;
    }
    this.updateOptions();
    if (this.suppressTransitions) {
      this.options.transitions = transitions;
      this.suppressTransitions = false;
    }
  }
  setChartAreaSize() {
    if (!this.element) {
      return;
    }
    const element = this.element.nativeElement;
    const chartArea = this.options.chartArea || {};
    if (chartArea.width) {
      element.style.width = `${chartArea.width}px`;
    }
    if (chartArea.height) {
      element.style.height = `${chartArea.height}px`;
    }
  }
  updateOptions() {
    this.instance.setOptions(this.options);
  }
  /**
   * @hidden
   */
  tooltipMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !hasParent(relatedTarget, chartElement))) {
      this.instance.hideElements();
    }
  }
  /**
   * @hidden
   */
  chartMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !(this.tooltipInstance.containsElement(relatedTarget) || hasParent(relatedTarget, chartElement))) && !this.instance.handlingTap) {
      this.instance.hideElements();
    }
  }
  get canRender() {
    return (0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.isDocumentAvailable)() && Boolean(this.surfaceElement);
  }
  get autoResize() {
    return this.resizeRateLimit > 0;
  }
  activeEmitter(name) {
    const emitter = this[name];
    if (emitter && emitter.emit && hasObservers(emitter)) {
      return emitter;
    }
  }
  getDonutCenterStyle() {
    if (!this.instance || !this.options || !this.options.series) {
      return;
    }
    const firstSeries = this.options.series[0];
    const charts = this.instance._plotArea.charts;
    if (!firstSeries || firstSeries.type !== 'donut' || !charts || charts[0].points.length === 0) {
      return;
    }
    const firstPoint = charts[0].points[0];
    const center = firstPoint.box.center();
    const radius = firstPoint.sector.innerRadius;
    const top = center.y - radius;
    const left = center.x - radius;
    const size = radius * 2;
    return {
      height: size + 'px',
      left: left + 'px',
      top: top + 'px',
      width: size + 'px'
    };
  }
  refreshWait() {
    this.ngZone.runOutsideAngular(() => {
      this.optionsChange = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)(this.configurationService.onChange$, this.themeService.onChange$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(result => {
        this.options = result[0];
        this.theme = result[1];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.auditTime)(THROTTLE_MS)).subscribe(() => {
        this.refresh();
      });
    });
  }
  run(callback, inZone = true, detectChanges) {
    if (inZone) {
      if (detectChanges) {
        this.changeDetector.markForCheck();
      }
      this.ngZone.run(callback);
    } else {
      callback();
      if (detectChanges) {
        this.detectChanges();
      }
    }
  }
  detectChanges() {
    if (!this.destroyed) {
      this.changeDetector.detectChanges();
    }
  }
  intlChange() {
    if (this.instance) {
      this.deferredRedraw();
    }
  }
  rtlChange() {
    if (this.instance && this.rtl !== this.isRTL) {
      this.deferredRedraw();
    }
  }
  deferredRedraw() {
    this.ngZone.runOutsideAngular(() => {
      clearTimeout(this.redrawTimeout);
      this.redrawTimeout = setTimeout(() => {
        this.updateDirection();
        this.instance.noTransitionsRedraw();
      }, 0);
    });
  }
  updateDirection() {
    const current = this.isRTL;
    if (this.rtl !== current) {
      this.setDirection();
      if (this.instance) {
        this.instance.setDirection(current);
      }
    }
  }
  setDirection() {
    this.rtl = this.isRTL;
    if (this.element) {
      this.renderer.setAttribute(this.element.nativeElement, 'dir', this.rtl ? 'rtl' : 'ltr');
    }
  }
  get isRTL() {
    return Boolean(this.localizationService.rtl);
  }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) {
  return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InstanceEventService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
ChartComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChartComponent,
  selectors: [["kendo-chart"]],
  contentQueries: function ChartComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DonutCenterTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesComponent, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.donutCenterTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.seriesCollectionComponent = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.seriesComponents = _t);
    }
  },
  viewQuery: function ChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TooltipPopupComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CrosshairTooltipsContainerComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltipInstance = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.crossahirTooltips = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.surfaceElement = _t.first);
    }
  },
  inputs: {
    pannable: "pannable",
    renderAs: "renderAs",
    seriesColors: "seriesColors",
    subtitle: "subtitle",
    title: "title",
    transitions: "transitions",
    zoomable: "zoomable",
    axisDefaults: "axisDefaults",
    categoryAxis: "categoryAxis",
    chartArea: "chartArea",
    legend: "legend",
    panes: "panes",
    paneDefaults: "paneDefaults",
    plotArea: "plotArea",
    series: "series",
    seriesDefaults: "seriesDefaults",
    tooltip: "tooltip",
    valueAxis: "valueAxis",
    xAxis: "xAxis",
    yAxis: "yAxis",
    resizeRateLimit: "resizeRateLimit",
    popupSettings: "popupSettings",
    drilldownLevel: "drilldownLevel"
  },
  outputs: {
    axisLabelClick: "axisLabelClick",
    drag: "drag",
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    legendItemHover: "legendItemHover",
    legendItemLeave: "legendItemLeave",
    noteClick: "noteClick",
    noteHover: "noteHover",
    noteLeave: "noteLeave",
    paneRender: "paneRender",
    plotAreaClick: "plotAreaClick",
    plotAreaHover: "plotAreaHover",
    plotAreaLeave: "plotAreaLeave",
    render: "render",
    select: "select",
    selectEnd: "selectEnd",
    selectStart: "selectStart",
    seriesClick: "seriesClick",
    drilldown: "drilldown",
    seriesHover: "seriesHover",
    seriesOver: "seriesOver",
    seriesLeave: "seriesLeave",
    zoom: "zoom",
    zoomEnd: "zoomEnd",
    zoomStart: "zoomStart",
    legendItemClick: "legendItemClick",
    drilldownLevelChange: "drilldownLevelChange"
  },
  exportAs: ["kendoChart"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService, TooltipTemplateService, InstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
    provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
    useValue: 'kendo.chart'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 5,
  consts: [[1, "k-chart-surface"], ["surface", ""], [3, "popupSettings"], [3, "popupSettings", "leave"], [3, "rateLimit", "resize"], ["class", "k-chart-donut-center", 3, "ngStyle", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [1, "k-chart-donut-center", 3, "ngStyle"], [3, "ngTemplateOutlet"], ["kendoWatermarkOverlay", ""]],
  template: function ChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1)(2, "kendo-chart-crosshair-tooltips-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "kendo-chart-tooltip-popup", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leave", function ChartComponent_Template_kendo_chart_tooltip_popup_leave_3_listener($event) {
        return ctx.tooltipMouseleave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "kendo-resize-sensor", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ChartComponent_Template_kendo_resize_sensor_resize_4_listener() {
        return ctx.onResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChartComponent_div_5_Template, 2, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChartComponent_div_6_Template, 1, 0, "div", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rateLimit", ctx.resizeRateLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.donutCenterStyle && ctx.donutCenterTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkOverlayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      exportAs: 'kendoChart',
      providers: [ConfigurationService, TooltipTemplateService, InstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
        useValue: 'kendo.chart'
      }],
      selector: 'kendo-chart',
      template: `
    <div #surface class="k-chart-surface"></div>
    <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
    </kendo-chart-crosshair-tooltips-container>
    <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
    </kendo-chart-tooltip-popup>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
    <div class="k-chart-donut-center" [ngStyle]="donutCenterStyle" *ngIf="donutCenterStyle && donutCenterTemplate">
      <ng-template [ngTemplateOutlet]="donutCenterTemplate.templateRef"></ng-template>
    </div>

    <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
  `
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: InstanceEventService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    pannable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    renderAs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesColors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    subtitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    transitions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    axisDefaults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categoryAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    chartArea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    legend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    panes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    paneDefaults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotArea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    series: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesDefaults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    valueAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    axisLabelClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    legendItemHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    legendItemLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    noteClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    noteHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    noteLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    paneRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    plotAreaClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    plotAreaHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    plotAreaLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    render: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    selectEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    selectStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    seriesClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    seriesHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    seriesOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    seriesLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    zoomEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    zoomStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    legendItemClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldownLevelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    resizeRateLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    popupSettings: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    drilldownLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesCollectionComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [SeriesComponent]
    }],
    seriesComponents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [SeriesItemComponent, {
        descendants: true
      }]
    }],
    donutCenterTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [DonutCenterTemplateDirective, {
        static: false
      }]
    }],
    tooltipInstance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [TooltipPopupComponent, {
        static: true
      }]
    }],
    crossahirTooltips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [CrosshairTooltipsContainerComponent, {
        static: true
      }]
    }],
    surfaceElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['surface', {
        static: true
      }]
    }]
  });
})();

/**
 * The default options for all Chart axes ([see example](slug:axes_chart_charts#toc-default-axis-configuration)).
 * Accepts the options which are supported by [`categoryAxis`](slug:api_charts_categoryaxisitemcomponent),
 * [`valueAxis`](slug:api_charts_valueaxisitemcomponent),
 * [`xAxis`](slug:api_charts_xaxisitemcomponent),
 * and [`yAxis`](slug:api_charts_yaxisitemcomponent).
 *
 */
class AxisDefaultsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('axisDefaults', configurationService);
    this.configurationService = configurationService;
  }
}
AxisDefaultsComponent.ɵfac = function AxisDefaultsComponent_Factory(t) {
  return new (t || AxisDefaultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
AxisDefaultsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AxisDefaultsComponent,
  selectors: [["kendo-chart-axis-defaults"]],
  inputs: {
    background: "background",
    color: "color",
    line: "line",
    majorGridLines: "majorGridLines",
    majorTicks: "majorTicks",
    minorGridLines: "minorGridLines",
    minorTicks: "minorTicks",
    narrowRange: "narrowRange",
    pane: "pane",
    plotBands: "plotBands",
    reverse: "reverse",
    startAngle: "startAngle",
    visible: "visible",
    crosshair: "crosshair",
    labels: "labels",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AxisDefaultsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AxisDefaultsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-axis-defaults',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    narrowRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotBands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    startAngle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crosshair: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The crosshair configuration options ([see example](slug:axes_chart_charts#toc-default-axis-configuration)).
 */
class AxisDefaultsCrosshairComponent extends SettingsComponent {
  constructor(configurationService) {
    super('axisDefaults.crosshair', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
AxisDefaultsCrosshairComponent.ɵfac = function AxisDefaultsCrosshairComponent_Factory(t) {
  return new (t || AxisDefaultsCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
AxisDefaultsCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AxisDefaultsCrosshairComponent,
  selectors: [["kendo-chart-axis-defaults-crosshair"]],
  inputs: {
    color: "color",
    dashType: "dashType",
    opacity: "opacity",
    visible: "visible",
    width: "width",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AxisDefaultsCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AxisDefaultsCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-axis-defaults-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dashType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the [`axisDefaults.crosshair.tooltip.visible`]({% slug api_charts_axisdefaultscrosshairtooltipcomponent %}#toc-visible)
 * option is set to `true`.
 */
class AxisDefaultsCrosshairTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('axisDefaults.crosshair.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
AxisDefaultsCrosshairTooltipComponent.ɵfac = function AxisDefaultsCrosshairTooltipComponent_Factory(t) {
  return new (t || AxisDefaultsCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
AxisDefaultsCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AxisDefaultsCrosshairTooltipComponent,
  selectors: [["kendo-chart-axis-defaults-crosshair-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AxisDefaultsCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AxisDefaultsCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-axis-defaults-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the axis labels ([see example](slug:axes_chart_charts#toc-default-axis-configuration)).
 */
class AxisDefaultsLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('axisDefaults.labels', configurationService);
    this.configurationService = configurationService;
  }
}
AxisDefaultsLabelsComponent.ɵfac = function AxisDefaultsLabelsComponent_Factory(t) {
  return new (t || AxisDefaultsLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
AxisDefaultsLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AxisDefaultsLabelsComponent,
  selectors: [["kendo-chart-axis-defaults-labels"]],
  inputs: {
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    mirror: "mirror",
    padding: "padding",
    rotation: "rotation",
    skip: "skip",
    step: "step",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AxisDefaultsLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AxisDefaultsLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-axis-defaults-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mirror: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the axis title ([see example](slug:axes_chart_charts#toc-default-axis-configuration)).
 */
class AxisDefaultsTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('axisDefaults.title', configurationService);
    this.configurationService = configurationService;
  }
}
AxisDefaultsTitleComponent.ɵfac = function AxisDefaultsTitleComponent_Factory(t) {
  return new (t || AxisDefaultsTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
AxisDefaultsTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AxisDefaultsTitleComponent,
  selectors: [["kendo-chart-axis-defaults-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AxisDefaultsTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AxisDefaultsTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-axis-defaults-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Specifies the `weekStartDay` of a [CategoryAxisItemComponent]({% slug api_charts_categoryaxisitemcomponent %}).
 */
var WeekStartDay;
(function (WeekStartDay) {
  /**
   * Specifies Sunday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Sunday"] = 0] = "Sunday";
  /**
   * Specifies Monday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Monday"] = 1] = "Monday";
  /**
   * Specifies Tuesday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Tuesday"] = 2] = "Tuesday";
  /**
   * Specifies Wednesday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Wednesday"] = 3] = "Wednesday";
  /**
   * Specifies Thursday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Thursday"] = 4] = "Thursday";
  /**
   * Specifies Friday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Friday"] = 5] = "Friday";
  /**
   * Specifies Saturday as the first day of the week.
   */
  WeekStartDay[WeekStartDay["Saturday"] = 6] = "Saturday";
})(WeekStartDay || (WeekStartDay = {}));

/**
 * The configuration component for a category axis ([see example]({% slug axes_chart_charts %})).
 */
class CategoryAxisItemComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService, intl, localeId) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.notifyChanges({
      weekStartDay: intl.firstDay(localeId)
    });
  }
}
CategoryAxisItemComponent.ɵfac = function CategoryAxisItemComponent_Factory(t) {
  return new (t || CategoryAxisItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
};
CategoryAxisItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisItemComponent,
  selectors: [["kendo-chart-category-axis-item"]],
  inputs: {
    autoBaseUnitSteps: "autoBaseUnitSteps",
    axisCrossingValue: "axisCrossingValue",
    background: "background",
    baseUnit: "baseUnit",
    baseUnitStep: "baseUnitStep",
    categories: "categories",
    color: "color",
    justified: "justified",
    line: "line",
    majorGridLines: "majorGridLines",
    majorTicks: "majorTicks",
    max: "max",
    maxDateGroups: "maxDateGroups",
    maxDivisions: "maxDivisions",
    min: "min",
    minorGridLines: "minorGridLines",
    minorTicks: "minorTicks",
    name: "name",
    pane: "pane",
    plotBands: "plotBands",
    reverse: "reverse",
    roundToBaseUnit: "roundToBaseUnit",
    startAngle: "startAngle",
    type: "type",
    visible: "visible",
    weekStartDay: "weekStartDay",
    crosshair: "crosshair",
    labels: "labels",
    notes: "notes",
    select: "select",
    title: "title",
    rangeLabels: "rangeLabels"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-category-axis-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID]
      }]
    }];
  }, {
    autoBaseUnitSteps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    axisCrossingValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseUnitStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categories: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    justified: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxDateGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxDivisions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotBands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    roundToBaseUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    startAngle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    weekStartDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crosshair: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rangeLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more category axis items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="[2015, 2016]" color="#f00">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 * ```
 */
class CategoryAxisComponent extends CollectionComponent {
  constructor(configurationService, collectionService) {
    super('categoryAxis', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
CategoryAxisComponent.ɵfac = function CategoryAxisComponent_Factory(t) {
  return new (t || CategoryAxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
CategoryAxisComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisComponent,
  selectors: [["kendo-chart-category-axis"]],
  contentQueries: function CategoryAxisComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CategoryAxisItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-category-axis',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [CategoryAxisItemComponent]
    }]
  });
})();

/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
class CategoryAxisCrosshairComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
CategoryAxisCrosshairComponent.ɵfac = function CategoryAxisCrosshairComponent_Factory(t) {
  return new (t || CategoryAxisCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisCrosshairComponent,
  selectors: [["kendo-chart-category-axis-item-crosshair"]],
  inputs: {
    color: "color",
    dashType: "dashType",
    opacity: "opacity",
    visible: "visible",
    width: "width",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dashType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
class CategoryAxisCrosshairTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
CategoryAxisCrosshairTooltipComponent.ɵfac = function CategoryAxisCrosshairTooltipComponent_Factory(t) {
  return new (t || CategoryAxisCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisCrosshairTooltipComponent,
  selectors: [["kendo-chart-category-axis-item-crosshair-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the axis labels ([see example]({% slug labels_chart_charts %})).
 */
class CategoryAxisLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisLabelsComponent.ɵfac = function CategoryAxisLabelsComponent_Factory(t) {
  return new (t || CategoryAxisLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisLabelsComponent,
  selectors: [["kendo-chart-category-axis-item-labels"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    culture: "culture",
    dateFormats: "dateFormats",
    font: "font",
    format: "format",
    margin: "margin",
    mirror: "mirror",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    skip: "skip",
    step: "step",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    culture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dateFormats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mirror: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the axis date range labels ([see example]({% slug labels_chart_charts %})).
 */
class CategoryAxisRangeLabelsComponent extends CategoryAxisLabelsComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.configKey = 'rangeLabels';
    this.markAsVisible();
  }
}
CategoryAxisRangeLabelsComponent.ɵfac = function CategoryAxisRangeLabelsComponent_Factory(t) {
  return new (t || CategoryAxisRangeLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisRangeLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisRangeLabelsComponent,
  selectors: [["kendo-chart-category-axis-item-range-labels"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisRangeLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisRangeLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-range-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration of the category axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
class CategoryAxisNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisNotesComponent.ɵfac = function CategoryAxisNotesComponent_Factory(t) {
  return new (t || CategoryAxisNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisNotesComponent,
  selectors: [["kendo-chart-category-axis-item-notes"]],
  inputs: {
    data: "data",
    line: "line",
    position: "position",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class CategoryAxisNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisNotesIconComponent.ɵfac = function CategoryAxisNotesIconComponent_Factory(t) {
  return new (t || CategoryAxisNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisNotesIconComponent,
  selectors: [["kendo-chart-category-axis-item-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class CategoryAxisNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisNotesLabelComponent.ɵfac = function CategoryAxisNotesLabelComponent_Factory(t) {
  return new (t || CategoryAxisNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisNotesLabelComponent,
  selectors: [["kendo-chart-category-axis-item-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the
 * ([`select.from`]({% slug api_charts_categoryaxisselectcomponent %}#toc-from)
 * &mdash;[`select.to`]({% slug api_charts_categoryaxisselectcomponent %}#toc-to)) range will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has to be also specified with date values.
 */
class CategoryAxisSelectComponent extends SettingsComponent {
  constructor(configurationService) {
    super('select', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisSelectComponent.ɵfac = function CategoryAxisSelectComponent_Factory(t) {
  return new (t || CategoryAxisSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisSelectComponent,
  selectors: [["kendo-chart-category-axis-item-select"]],
  inputs: {
    from: "from",
    max: "max",
    min: "min",
    mousewheel: "mousewheel",
    to: "to"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisSelectComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-select',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mousewheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    to: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the category axis title.
 */
class CategoryAxisTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
CategoryAxisTitleComponent.ɵfac = function CategoryAxisTitleComponent_Factory(t) {
  return new (t || CategoryAxisTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
CategoryAxisTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoryAxisTitleComponent,
  selectors: [["kendo-chart-category-axis-item-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CategoryAxisTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryAxisTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-category-axis-item-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart area.
 * Represents the entire visible area of the Chart
 * ([see example]({% slug chartarea_chart_charts %})).
 */
class ChartAreaComponent extends SettingsComponent {
  constructor(configurationService) {
    super('chartArea', configurationService);
    this.configurationService = configurationService;
  }
}
ChartAreaComponent.ɵfac = function ChartAreaComponent_Factory(t) {
  return new (t || ChartAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ChartAreaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChartAreaComponent,
  selectors: [["kendo-chart-area"]],
  inputs: {
    background: "background",
    border: "border",
    height: "height",
    margin: "margin",
    opacity: "opacity",
    width: "width"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ChartAreaComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartAreaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-area',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart legend
 * ([see example]({% slug legend_chart_charts %})).
 */
class LegendComponent extends SettingsComponent {
  constructor(configurationService) {
    super('legend', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
LegendComponent.ɵfac = function LegendComponent_Factory(t) {
  return new (t || LegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
LegendComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LegendComponent,
  selectors: [["kendo-chart-legend"]],
  inputs: {
    align: "align",
    background: "background",
    border: "border",
    height: "height",
    labels: "labels",
    margin: "margin",
    offsetX: "offsetX",
    offsetY: "offsetY",
    orientation: "orientation",
    padding: "padding",
    position: "position",
    reverse: "reverse",
    visible: "visible",
    width: "width",
    markers: "markers",
    spacing: "spacing",
    inactiveItems: "inactiveItems",
    item: "item",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function LegendComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LegendComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-legend',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offsetY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    spacing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inactiveItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the inactive Chart legend items.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-inactive-items [labels]="{color: 'pink'}"></kendo-chart-legend-inactive-items>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
class LegendInactiveItemsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('legend.inactiveItems', configurationService);
    this.configurationService = configurationService;
  }
}
LegendInactiveItemsComponent.ɵfac = function LegendInactiveItemsComponent_Factory(t) {
  return new (t || LegendInactiveItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
LegendInactiveItemsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LegendInactiveItemsComponent,
  selectors: [["kendo-chart-legend-inactive-items"]],
  inputs: {
    labels: "labels"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function LegendInactiveItemsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LegendInactiveItemsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-legend-inactive-items',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart legend item.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-item cursor="crosshair"></kendo-chart-legend-item>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
class LegendItemComponent extends SettingsComponent {
  constructor(configurationService) {
    super('legend.item', configurationService);
    this.configurationService = configurationService;
  }
}
LegendItemComponent.ɵfac = function LegendItemComponent_Factory(t) {
  return new (t || LegendItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
LegendItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LegendItemComponent,
  selectors: [["kendo-chart-legend-item"]],
  inputs: {
    cursor: "cursor",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function LegendItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LegendItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-legend-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    cursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component for a Chart pane.
 *
 * @example
 * ```html
 * <kendo-chart>
 *   <kendo-chart-panes>
 *     <kendo-chart-pane
 *         name="top"
 *         background="pink"
 *         [border]="{ color: 'black', dashType: 'dash', width: 2 }">
 *     </kendo-chart-pane>
 *   </kendo-chart-panes>
 * </kendo-chart>
 * ```
 */
class PaneComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
PaneComponent.ɵfac = function PaneComponent_Factory(t) {
  return new (t || PaneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
PaneComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaneComponent,
  selectors: [["kendo-chart-pane"], ["kendo-chart-panes-item"]],
  inputs: {
    background: "background",
    border: "border",
    clip: "clip",
    height: "height",
    margin: "margin",
    name: "name",
    padding: "padding",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PaneComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-pane, kendo-chart-panes-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The default options for all chart panes,
 * ([see example]({% slug panes_chart_charts %}#toc-default-panes-configuration)).
 */
class PaneDefaultsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('paneDefaults', configurationService);
    this.configurationService = configurationService;
  }
}
PaneDefaultsComponent.ɵfac = function PaneDefaultsComponent_Factory(t) {
  return new (t || PaneDefaultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
PaneDefaultsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaneDefaultsComponent,
  selectors: [["kendo-chart-pane-defaults"]],
  inputs: {
    background: "background",
    border: "border",
    clip: "clip",
    height: "height",
    margin: "margin",
    padding: "padding",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PaneDefaultsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaneDefaultsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-pane-defaults',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the pane default title.
 */
class PaneDefaultsTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('paneDefaults.title', configurationService);
    this.configurationService = configurationService;
  }
}
PaneDefaultsTitleComponent.ɵfac = function PaneDefaultsTitleComponent_Factory(t) {
  return new (t || PaneDefaultsTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
PaneDefaultsTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaneDefaultsTitleComponent,
  selectors: [["kendo-chart-pane-defaults-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    position: "position",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PaneDefaultsTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaneDefaultsTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-pane-defaults-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more pane configuration components.
 *
 * @example
 * ```html
 * <kendo-chart>
 *   <kendo-chart-panes>
 *     <kendo-chart-pane name="topPane"></kendo-chart-pane>
 *     <kendo-chart-pane name="bottomPane"></kendo-chart-pane>
 *   </kendo-chart-panes>
 *   ...
 * </kendo-chart>
 * ```
 */
class PanesComponent extends CollectionComponent {
  constructor(configurationService, collectionService) {
    super('panes', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
PanesComponent.ɵfac = function PanesComponent_Factory(t) {
  return new (t || PanesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
PanesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PanesComponent,
  selectors: [["kendo-chart-panes"]],
  contentQueries: function PanesComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, PaneComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PanesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PanesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-panes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [PaneComponent]
    }]
  });
})();

/**
 * The configuration of the Chart pane title.
 */
class PanesTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
PanesTitleComponent.ɵfac = function PanesTitleComponent_Factory(t) {
  return new (t || PanesTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
PanesTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PanesTitleComponent,
  selectors: [["kendo-chart-pane-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    position: "position",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PanesTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PanesTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-pane-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the plot area
 * ([see example]({% slug plotarea_chart_charts %})).
 * The plot area is the area which displays the series.
 */
class PlotAreaComponent extends SettingsComponent {
  constructor(configurationService) {
    super('plotArea', configurationService);
    this.configurationService = configurationService;
  }
}
PlotAreaComponent.ɵfac = function PlotAreaComponent_Factory(t) {
  return new (t || PlotAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
PlotAreaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PlotAreaComponent,
  selectors: [["kendo-chart-plot-area"]],
  inputs: {
    background: "background",
    border: "border",
    margin: "margin",
    opacity: "opacity",
    padding: "padding"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PlotAreaComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlotAreaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-plot-area',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The default options for all series
 * ([see example]({% slug series_chart_charts %}#toc-default-series-configuration)).
 */
class SeriesDefaultsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesDefaultsComponent.ɵfac = function SeriesDefaultsComponent_Factory(t) {
  return new (t || SeriesDefaultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsComponent,
  selectors: [["kendo-chart-series-defaults"]],
  inputs: {
    border: "border",
    gap: "gap",
    highlight: "highlight",
    overlay: "overlay",
    spacing: "spacing",
    stack: "stack",
    type: "type",
    visual: "visual",
    labels: "labels",
    notes: "notes",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    gap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    highlight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    overlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    spacing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stack: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart series label.
 */
class SeriesDefaultsLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.labels', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesDefaultsLabelsComponent.ɵfac = function SeriesDefaultsLabelsComponent_Factory(t) {
  return new (t || SeriesDefaultsLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsLabelsComponent,
  selectors: [["kendo-chart-series-defaults-labels"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    visible: "visible",
    visual: "visual",
    from: "from",
    to: "to"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    to: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The `from` label configuration of the Chart series.
 */
class SeriesDefaultsLabelsFromComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.labels.from', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesDefaultsLabelsFromComponent.ɵfac = function SeriesDefaultsLabelsFromComponent_Factory(t) {
  return new (t || SeriesDefaultsLabelsFromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsLabelsFromComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsLabelsFromComponent,
  selectors: [["kendo-chart-series-defaults-labels-from"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsLabelsFromComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsLabelsFromComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-labels-from',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The `to` label configuration of the Chart series.
 */
class SeriesDefaultsLabelsToComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.labels.to', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesDefaultsLabelsToComponent.ɵfac = function SeriesDefaultsLabelsToComponent_Factory(t) {
  return new (t || SeriesDefaultsLabelsToComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsLabelsToComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsLabelsToComponent,
  selectors: [["kendo-chart-series-defaults-labels-to"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsLabelsToComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsLabelsToComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-labels-to',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent %}) notes.
 */
class SeriesDefaultsNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.notes', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesDefaultsNotesComponent.ɵfac = function SeriesDefaultsNotesComponent_Factory(t) {
  return new (t || SeriesDefaultsNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsNotesComponent,
  selectors: [["kendo-chart-series-defaults-notes"]],
  inputs: {
    line: "line",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class SeriesDefaultsNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesDefaultsNotesIconComponent.ɵfac = function SeriesDefaultsNotesIconComponent_Factory(t) {
  return new (t || SeriesDefaultsNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsNotesIconComponent,
  selectors: [["kendo-chart-series-defaults-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class SeriesDefaultsNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesDefaultsNotesLabelComponent.ɵfac = function SeriesDefaultsNotesLabelComponent_Factory(t) {
  return new (t || SeriesDefaultsNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsNotesLabelComponent,
  selectors: [["kendo-chart-series-defaults-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart series tooltip.
 */
class SeriesDefaultsTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('seriesDefaults.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesDefaultsTooltipComponent.ɵfac = function SeriesDefaultsTooltipComponent_Factory(t) {
  return new (t || SeriesDefaultsTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesDefaultsTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesDefaultsTooltipComponent,
  selectors: [["kendo-chart-series-defaults-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesDefaultsTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesDefaultsTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-defaults-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The error bars of the Chart series
 * ([see example]({% slug errorbars_chart_charts %})).
 */
class SeriesErrorBarsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('errorBars', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesErrorBarsComponent.ɵfac = function SeriesErrorBarsComponent_Factory(t) {
  return new (t || SeriesErrorBarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesErrorBarsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesErrorBarsComponent,
  selectors: [["kendo-chart-series-item-error-bars"]],
  inputs: {
    color: "color",
    endCaps: "endCaps",
    line: "line",
    value: "value",
    visual: "visual",
    xValue: "xValue",
    yValue: "yValue"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesErrorBarsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesErrorBarsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-error-bars',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    endCaps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    xValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    yValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart series extremes.
 * Applies to extreme outliers.
 * For more information, refer to [`series.outliers`]({% slug api_charts_seriesitemcomponent %}#toc-outliers).
 */
class SeriesExtremesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('extremes', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesExtremesComponent.ɵfac = function SeriesExtremesComponent_Factory(t) {
  return new (t || SeriesExtremesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesExtremesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesExtremesComponent,
  selectors: [["kendo-chart-series-item-extremes"]],
  inputs: {
    background: "background",
    border: "border",
    rotation: "rotation",
    size: "size",
    type: "type"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesExtremesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesExtremesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-extremes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The Chart series highlighting configuration options.
 */
class SeriesHighlightComponent extends SettingsComponent {
  constructor(configurationService) {
    super('highlight', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesHighlightComponent.ɵfac = function SeriesHighlightComponent_Factory(t) {
  return new (t || SeriesHighlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesHighlightComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesHighlightComponent,
  selectors: [["kendo-chart-series-item-highlight"]],
  inputs: {
    border: "border",
    color: "color",
    line: "line",
    markers: "markers",
    opacity: "opacity",
    toggle: "toggle",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesHighlightComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesHighlightComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-highlight',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart series label
 * ([see example]({% slug labels_chart_charts %})).
 */
class SeriesLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesLabelsComponent.ɵfac = function SeriesLabelsComponent_Factory(t) {
  return new (t || SeriesLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesLabelsComponent,
  selectors: [["kendo-chart-series-item-labels"]],
  inputs: {
    align: "align",
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    distance: "distance",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    visible: "visible",
    visual: "visual",
    from: "from",
    to: "to"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    distance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    to: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The `from` label configuration of the Chart series.
 */
class SeriesLabelsFromComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels.from', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesLabelsFromComponent.ɵfac = function SeriesLabelsFromComponent_Factory(t) {
  return new (t || SeriesLabelsFromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesLabelsFromComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesLabelsFromComponent,
  selectors: [["kendo-chart-series-item-labels-from"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    position: "position",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesLabelsFromComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesLabelsFromComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-labels-from',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The `to` label configuration of the Chart series.
 */
class SeriesLabelsToComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels.to', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
SeriesLabelsToComponent.ɵfac = function SeriesLabelsToComponent_Factory(t) {
  return new (t || SeriesLabelsToComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesLabelsToComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesLabelsToComponent,
  selectors: [["kendo-chart-series-item-labels-to"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    padding: "padding",
    position: "position",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesLabelsToComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesLabelsToComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-labels-to',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart series marker.
 *
 * @example
 * ```html
 * <kendo-chart ...>
 *   <kendo-chart-series>
 *     <kendo-chart-series-item type="line"...>
 *       <kendo-chart-series-item-markers background="blue"> </kendo-chart-series-item-markers>
 *     </kendo-chart-series-item>
 *   </kendo-chart-series>
 * </kendo-chart>
 * ```
 */
class SeriesMarkersComponent extends SettingsComponent {
  constructor(configurationService) {
    super('markers', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesMarkersComponent.ɵfac = function SeriesMarkersComponent_Factory(t) {
  return new (t || SeriesMarkersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesMarkersComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesMarkersComponent,
  selectors: [["kendo-chart-series-item-markers"]],
  inputs: {
    background: "background",
    border: "border",
    rotation: "rotation",
    size: "size",
    type: "type",
    visible: "visible",
    visual: "visual",
    from: "from",
    to: "to"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesMarkersComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesMarkersComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-markers',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    to: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The series notes configuration
 * ([see example]({% slug notes_chart_charts %})).
 *
 *  * @example
 * ```html
 * <kendo-chart ...>
 *   <kendo-chart-series>
 *     <kendo-chart-series-item type="line" [data]="data"...>
 *       <kendo-chart-series-item-notes [icon]="{type: 'square'}"> </kendo-chart-series-item-notes>
 *     </kendo-chart-series-item>
 *   </kendo-chart-series>
 * </kendo-chart>
 * ```
 */
class SeriesNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesNotesComponent.ɵfac = function SeriesNotesComponent_Factory(t) {
  return new (t || SeriesNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesNotesComponent,
  selectors: [["kendo-chart-series-item-notes"]],
  inputs: {
    line: "line",
    position: "position",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class SeriesNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesNotesIconComponent.ɵfac = function SeriesNotesIconComponent_Factory(t) {
  return new (t || SeriesNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesNotesIconComponent,
  selectors: [["kendo-chart-series-item-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class SeriesNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesNotesLabelComponent.ɵfac = function SeriesNotesLabelComponent_Factory(t) {
  return new (t || SeriesNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesNotesLabelComponent,
  selectors: [["kendo-chart-series-item-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Chart series outliers.
 * Applies to mild outliers.
 * For more information, refer to the [`series.extremes`]({% slug api_charts_seriesitemcomponent %}#toc-extremes) option.
 */
class SeriesOutliersComponent extends SettingsComponent {
  constructor(configurationService) {
    super('outliers', configurationService);
    this.configurationService = configurationService;
  }
}
SeriesOutliersComponent.ɵfac = function SeriesOutliersComponent_Factory(t) {
  return new (t || SeriesOutliersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SeriesOutliersComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeriesOutliersComponent,
  selectors: [["kendo-chart-series-item-outliers"]],
  inputs: {
    background: "background",
    border: "border",
    rotation: "rotation",
    size: "size",
    type: "type"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SeriesOutliersComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SeriesOutliersComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-series-item-outliers',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart subtitle or text
 * ([see example]({% slug title_chart_charts %})).
 *
 * @example
 * ```html
 * <kendo-chart [categoryAxis]="{ categories: categories }">
 *     <kendo-chart-subtitle text="/GDP annual %/"></kendo-chart-subtitle>
 * </kendo-chart>
 * ```
 */
class SubtitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('subtitle', configurationService);
    this.configurationService = configurationService;
  }
}
SubtitleComponent.ɵfac = function SubtitleComponent_Factory(t) {
  return new (t || SubtitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
SubtitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SubtitleComponent,
  selectors: [["kendo-chart-subtitle"]],
  inputs: {
    align: "align",
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    text: "text",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function SubtitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubtitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-subtitle',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart title or text
 * ([see example]({% slug title_chart_charts %})).
 *
 * @example
 * ```html
 * <kendo-chart [categoryAxis]="{ categories: categories }">
 *     <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *     ...
 * </kendo-chart>
 * ```
 */
class TitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) {
  return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
TitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TitleComponent,
  selectors: [["kendo-chart-title"]],
  inputs: {
    align: "align",
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    text: "text",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function TitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
class TooltipComponent extends SettingsComponent {
  constructor(configurationService, templateService) {
    super('tooltip', configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.markAsVisible();
  }
  ngAfterContentChecked() {
    this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
    this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
  }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TooltipTemplateService));
};
TooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TooltipComponent,
  selectors: [["kendo-chart-tooltip"]],
  contentQueries: function TooltipComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SeriesTooltipTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SharedTooltipTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.seriesTooltipTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sharedTooltipTemplate = _t.first);
    }
  },
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    opacity: "opacity",
    padding: "padding",
    shared: "shared",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function TooltipComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'kendo-chart-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: TooltipTemplateService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    seriesTooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SeriesTooltipTemplateDirective, {
        static: false
      }]
    }],
    sharedTooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SharedTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();

/**
 * The configuration component for a value axis.
 */
class ValueAxisItemComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
ValueAxisItemComponent.ɵfac = function ValueAxisItemComponent_Factory(t) {
  return new (t || ValueAxisItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
ValueAxisItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisItemComponent,
  selectors: [["kendo-chart-value-axis-item"]],
  inputs: {
    axisCrossingValue: "axisCrossingValue",
    background: "background",
    color: "color",
    line: "line",
    majorGridLines: "majorGridLines",
    majorTicks: "majorTicks",
    majorUnit: "majorUnit",
    max: "max",
    min: "min",
    minorGridLines: "minorGridLines",
    minorTicks: "minorTicks",
    minorUnit: "minorUnit",
    name: "name",
    narrowRange: "narrowRange",
    pane: "pane",
    plotBands: "plotBands",
    reverse: "reverse",
    type: "type",
    visible: "visible",
    crosshair: "crosshair",
    labels: "labels",
    notes: "notes",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-value-axis-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    axisCrossingValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    narrowRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotBands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crosshair: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more value axis configuration components.
 *
 * @example
 * ```html
 * <kendo-chart>
 *     <kendo-chart-value-axis>
 *         ....
 *     </kendo-chart-value-axis>
 * </kendo-chart>
 * ```
 */
class ValueAxisComponent extends CollectionComponent {
  constructor(configurationService, collectionService) {
    super('valueAxis', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
ValueAxisComponent.ɵfac = function ValueAxisComponent_Factory(t) {
  return new (t || ValueAxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
ValueAxisComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisComponent,
  selectors: [["kendo-chart-value-axis"]],
  contentQueries: function ValueAxisComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ValueAxisItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-value-axis',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [ValueAxisItemComponent]
    }]
  });
})();

/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
class ValueAxisCrosshairComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
ValueAxisCrosshairComponent.ɵfac = function ValueAxisCrosshairComponent_Factory(t) {
  return new (t || ValueAxisCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisCrosshairComponent,
  selectors: [["kendo-chart-value-axis-item-crosshair"]],
  inputs: {
    color: "color",
    opacity: "opacity",
    visible: "visible",
    width: "width",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
class ValueAxisCrosshairTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
ValueAxisCrosshairTooltipComponent.ɵfac = function ValueAxisCrosshairTooltipComponent_Factory(t) {
  return new (t || ValueAxisCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisCrosshairTooltipComponent,
  selectors: [["kendo-chart-value-axis-item-crosshair-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The axis labels configuration.
 */
class ValueAxisLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels', configurationService);
    this.configurationService = configurationService;
  }
}
ValueAxisLabelsComponent.ɵfac = function ValueAxisLabelsComponent_Factory(t) {
  return new (t || ValueAxisLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisLabelsComponent,
  selectors: [["kendo-chart-value-axis-item-labels"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    margin: "margin",
    mirror: "mirror",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    skip: "skip",
    step: "step",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mirror: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the value axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
class ValueAxisNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes', configurationService);
    this.configurationService = configurationService;
  }
}
ValueAxisNotesComponent.ɵfac = function ValueAxisNotesComponent_Factory(t) {
  return new (t || ValueAxisNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisNotesComponent,
  selectors: [["kendo-chart-value-axis-item-notes"]],
  inputs: {
    data: "data",
    line: "line",
    position: "position",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class ValueAxisNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
ValueAxisNotesIconComponent.ɵfac = function ValueAxisNotesIconComponent_Factory(t) {
  return new (t || ValueAxisNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisNotesIconComponent,
  selectors: [["kendo-chart-value-axis-item-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class ValueAxisNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
ValueAxisNotesLabelComponent.ɵfac = function ValueAxisNotesLabelComponent_Factory(t) {
  return new (t || ValueAxisNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisNotesLabelComponent,
  selectors: [["kendo-chart-value-axis-item-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The title configuration of the value axis.
 */
class ValueAxisTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
ValueAxisTitleComponent.ɵfac = function ValueAxisTitleComponent_Factory(t) {
  return new (t || ValueAxisTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ValueAxisTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ValueAxisTitleComponent,
  selectors: [["kendo-chart-value-axis-item-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ValueAxisTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueAxisTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-value-axis-item-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component for an X axis
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
class XAxisItemComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService, intl, localeId) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.intl = intl;
    this.notifyChanges({
      weekStartDay: intl.firstDay(localeId)
    });
  }
}
XAxisItemComponent.ɵfac = function XAxisItemComponent_Factory(t) {
  return new (t || XAxisItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
};
XAxisItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisItemComponent,
  selectors: [["kendo-chart-x-axis-item"]],
  inputs: {
    axisCrossingValue: "axisCrossingValue",
    background: "background",
    baseUnit: "baseUnit",
    categories: "categories",
    color: "color",
    line: "line",
    majorGridLines: "majorGridLines",
    majorTicks: "majorTicks",
    majorUnit: "majorUnit",
    max: "max",
    min: "min",
    minorGridLines: "minorGridLines",
    minorTicks: "minorTicks",
    minorUnit: "minorUnit",
    name: "name",
    narrowRange: "narrowRange",
    pane: "pane",
    plotBands: "plotBands",
    reverse: "reverse",
    startAngle: "startAngle",
    type: "type",
    visible: "visible",
    weekStartDay: "weekStartDay",
    crosshair: "crosshair",
    labels: "labels",
    notes: "notes",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-x-axis-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID]
      }]
    }];
  }, {
    axisCrossingValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categories: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    narrowRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotBands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    startAngle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    weekStartDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crosshair: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more X-axis configuration components.
 *
 * @example
 * ```html
 * <kendo-chart>
 *     <kendo-chart-x-axis>
 *         <kendo-chart-x-axis-item
 *           [background]="'rgba(100, 100, 100, 0.2)'"
 *           color="red"
 *           [notes]="notesConfig"
 *           [crosshair]="crosshairConfig">
 *         </kendo-chart-x-axis-item>
 *         <kendo-chart-x-axis-item name="secondAxis">
 *         </kendo-chart-x-axis-item>
 *     </kendo-chart-x-axis>
 * </kendo-chart>
 * ```
 */
class XAxisComponent extends CollectionComponent {
  constructor(configurationService, collectionService) {
    super('xAxis', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
XAxisComponent.ɵfac = function XAxisComponent_Factory(t) {
  return new (t || XAxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
XAxisComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisComponent,
  selectors: [["kendo-chart-x-axis"]],
  contentQueries: function XAxisComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, XAxisItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-x-axis',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [XAxisItemComponent]
    }]
  });
})();

/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
class XAxisCrosshairComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
XAxisCrosshairComponent.ɵfac = function XAxisCrosshairComponent_Factory(t) {
  return new (t || XAxisCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisCrosshairComponent,
  selectors: [["kendo-chart-x-axis-item-crosshair"]],
  inputs: {
    color: "color",
    opacity: "opacity",
    visible: "visible",
    width: "width",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
class XAxisCrosshairTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
XAxisCrosshairTooltipComponent.ɵfac = function XAxisCrosshairTooltipComponent_Factory(t) {
  return new (t || XAxisCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisCrosshairTooltipComponent,
  selectors: [["kendo-chart-x-axis-item-crosshair-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The axis labels configuration.
 */
class XAxisLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels', configurationService);
    this.configurationService = configurationService;
  }
}
XAxisLabelsComponent.ɵfac = function XAxisLabelsComponent_Factory(t) {
  return new (t || XAxisLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisLabelsComponent,
  selectors: [["kendo-chart-x-axis-item-labels"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    culture: "culture",
    dateFormats: "dateFormats",
    font: "font",
    format: "format",
    margin: "margin",
    mirror: "mirror",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    skip: "skip",
    step: "step",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    culture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dateFormats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mirror: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the X-axis notes.
 * For an example on the basic usage of the XAxisNotesComponent,
 * refer to the [demo on the XAxisComponent]({% slug api_charts_xaxiscomponent %})
 * or to the documentation about the
 * [axis notes]({% slug notes_chart_charts %}#toc-axis-notes).
 */
class XAxisNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes', configurationService);
    this.configurationService = configurationService;
  }
}
XAxisNotesComponent.ɵfac = function XAxisNotesComponent_Factory(t) {
  return new (t || XAxisNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisNotesComponent,
  selectors: [["kendo-chart-x-axis-item-notes"]],
  inputs: {
    data: "data",
    line: "line",
    position: "position",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class XAxisNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
XAxisNotesIconComponent.ɵfac = function XAxisNotesIconComponent_Factory(t) {
  return new (t || XAxisNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisNotesIconComponent,
  selectors: [["kendo-chart-x-axis-item-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class XAxisNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
XAxisNotesLabelComponent.ɵfac = function XAxisNotesLabelComponent_Factory(t) {
  return new (t || XAxisNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisNotesLabelComponent,
  selectors: [["kendo-chart-x-axis-item-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The title configuration of the Scatter Chart X axis.
 */
class XAxisTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
XAxisTitleComponent.ɵfac = function XAxisTitleComponent_Factory(t) {
  return new (t || XAxisTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
XAxisTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: XAxisTitleComponent,
  selectors: [["kendo-chart-x-axis-item-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function XAxisTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XAxisTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-x-axis-item-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component for the Y axis
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
class YAxisItemComponent extends CollectionItemComponent {
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
YAxisItemComponent.ɵfac = function YAxisItemComponent_Factory(t) {
  return new (t || YAxisItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
YAxisItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisItemComponent,
  selectors: [["kendo-chart-y-axis-item"]],
  inputs: {
    axisCrossingValue: "axisCrossingValue",
    background: "background",
    baseUnit: "baseUnit",
    categories: "categories",
    color: "color",
    line: "line",
    majorGridLines: "majorGridLines",
    majorTicks: "majorTicks",
    majorUnit: "majorUnit",
    max: "max",
    min: "min",
    minorGridLines: "minorGridLines",
    minorTicks: "minorTicks",
    minorUnit: "minorUnit",
    name: "name",
    narrowRange: "narrowRange",
    pane: "pane",
    plotBands: "plotBands",
    reverse: "reverse",
    type: "type",
    visible: "visible",
    crosshair: "crosshair",
    labels: "labels",
    notes: "notes",
    title: "title"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-y-axis-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    axisCrossingValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categories: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    majorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorGridLines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorTicks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minorUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    narrowRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plotBands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crosshair: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    notes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more Y-axis configuration components.
 *
 * @example
 * ```html
 * <kendo-chart>
 *     <kendo-chart-y-axis>
 *         <kendo-chart-y-axis-item
 *           [background]="'rgba(100, 100, 100, 0.2)'"
 *           color="red"
 *           [notes]="notesConfig"
 *           [crosshair]="crosshairConfig">
 *         </kendo-chart-y-axis-item>
 *         <kendo-chart-y-axis-item name="secondAxis">
 *         </kendo-chart-y-axis-item>
 *     </kendo-chart-y-axis>
 * </kendo-chart>
 * ```
 */
class YAxisComponent extends CollectionComponent {
  constructor(configurationService, collectionService) {
    super('yAxis', configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
YAxisComponent.ɵfac = function YAxisComponent_Factory(t) {
  return new (t || YAxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
YAxisComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisComponent,
  selectors: [["kendo-chart-y-axis"]],
  contentQueries: function YAxisComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YAxisItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-y-axis',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [YAxisItemComponent]
    }]
  });
})();

/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
class YAxisCrosshairComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
YAxisCrosshairComponent.ɵfac = function YAxisCrosshairComponent_Factory(t) {
  return new (t || YAxisCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisCrosshairComponent,
  selectors: [["kendo-chart-y-axis-item-crosshair"]],
  inputs: {
    color: "color",
    opacity: "opacity",
    visible: "visible",
    width: "width",
    tooltip: "tooltip"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
class YAxisCrosshairTooltipComponent extends SettingsComponent {
  constructor(configurationService) {
    super('crosshair.tooltip', configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
YAxisCrosshairTooltipComponent.ɵfac = function YAxisCrosshairTooltipComponent_Factory(t) {
  return new (t || YAxisCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisCrosshairTooltipComponent,
  selectors: [["kendo-chart-y-axis-item-crosshair-tooltip"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    format: "format",
    padding: "padding",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The axis labels configuration.
 */
class YAxisLabelsComponent extends SettingsComponent {
  constructor(configurationService) {
    super('labels', configurationService);
    this.configurationService = configurationService;
  }
}
YAxisLabelsComponent.ɵfac = function YAxisLabelsComponent_Factory(t) {
  return new (t || YAxisLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisLabelsComponent,
  selectors: [["kendo-chart-y-axis-item-labels"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    culture: "culture",
    dateFormats: "dateFormats",
    font: "font",
    format: "format",
    margin: "margin",
    mirror: "mirror",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    skip: "skip",
    step: "step",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    culture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dateFormats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mirror: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration of the Y axis notes
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
class YAxisNotesComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes', configurationService);
    this.configurationService = configurationService;
  }
}
YAxisNotesComponent.ɵfac = function YAxisNotesComponent_Factory(t) {
  return new (t || YAxisNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisNotesComponent,
  selectors: [["kendo-chart-y-axis-item-notes"]],
  inputs: {
    data: "data",
    line: "line",
    position: "position",
    visual: "visual",
    icon: "icon",
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    line: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The icon of the notes.
 */
class YAxisNotesIconComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.icon', configurationService);
    this.configurationService = configurationService;
  }
}
YAxisNotesIconComponent.ɵfac = function YAxisNotesIconComponent_Factory(t) {
  return new (t || YAxisNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisNotesIconComponent,
  selectors: [["kendo-chart-y-axis-item-notes-icon"]],
  inputs: {
    background: "background",
    border: "border",
    size: "size",
    type: "type",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The label of the notes.
 */
class YAxisNotesLabelComponent extends SettingsComponent {
  constructor(configurationService) {
    super('notes.label', configurationService);
    this.configurationService = configurationService;
  }
}
YAxisNotesLabelComponent.ɵfac = function YAxisNotesLabelComponent_Factory(t) {
  return new (t || YAxisNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisNotesLabelComponent,
  selectors: [["kendo-chart-y-axis-item-notes-label"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    content: "content",
    font: "font",
    format: "format",
    position: "position",
    rotation: "rotation",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The title configuration of the Scatter Chart Y axis.
 */
class YAxisTitleComponent extends SettingsComponent {
  constructor(configurationService) {
    super('title', configurationService);
    this.configurationService = configurationService;
  }
}
YAxisTitleComponent.ɵfac = function YAxisTitleComponent_Factory(t) {
  return new (t || YAxisTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
YAxisTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: YAxisTitleComponent,
  selectors: [["kendo-chart-y-axis-item-title"]],
  inputs: {
    background: "background",
    border: "border",
    color: "color",
    font: "font",
    margin: "margin",
    padding: "padding",
    position: "position",
    rotation: "rotation",
    text: "text",
    visible: "visible",
    visual: "visual"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function YAxisTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YAxisTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-y-axis-item-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    border: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visual: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Specifies if the Chart can be zoomed.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-zoomable [mousewheel]="false"></kendo-chart-zoomable>
 * </kendo-chart>
 * ```
 */
class ZoomableComponent extends SettingsComponent {
  constructor(configurationService) {
    super('zoomable', configurationService);
    this.configurationService = configurationService;
  }
}
ZoomableComponent.ɵfac = function ZoomableComponent_Factory(t) {
  return new (t || ZoomableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
ZoomableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ZoomableComponent,
  selectors: [["kendo-chart-zoomable"]],
  inputs: {
    mousewheel: "mousewheel",
    selection: "selection"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function ZoomableComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZoomableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-zoomable',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    mousewheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Navigation Breadcrumb component for Drilldown Charts.
 *
 * Use this component to implement navigation for [Drilldown Charts](slug:drilldown_chart_charts).
 * Use the `chart` input to link the Breadcrumb to the Chart instance.
 *
 */
class ChartBreadcrumbComponent {
  constructor() {
    /**
     * The definition of the breadcrumb root item.
     *
     * The default value is `{ icon: 'home', svgIcon: homeIcon, title: 'Home' }`.
     * (homeIcon is imported from '@progress/kendo-svg-icons')
     */
    this.rootItem = {
      icon: 'home',
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_15__.homeIcon,
      title: 'Home'
    };
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
  }
  ngOnInit() {
    this.items = [this.rootItem];
    if (this.chart) {
      this.subscription.add(this.chart.drilldown.subscribe(this.onDrilldown.bind(this)));
      this.subscription.add(this.chart.drilldownLevelChange.subscribe(this.onDrilldownLevelChange.bind(this)));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
      throw new Error('Chart Breadcrumb: No Chart instance supplied. Please add a reference using the "chart" attribute. For example: \n' + '<kendo-chart-breadcrumb [chart]="instance" />\n' + '<kendo-chart #instance>');
    }
  }
  ngOnChanges(changes) {
    const rootItemChange = changes['rootItem'];
    if (rootItemChange && this.items) {
      this.items[0] = rootItemChange.currentValue;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  /**
   * @hidden
   */
  onItemClick(target) {
    this.chart.drilldownLevel = this.items.findIndex(item => item === target);
  }
  onDrilldown(e) {
    this.items = [...this.items, {
      text: e.point.category.toString()
    }];
  }
  onDrilldownLevelChange(level) {
    this.items = this.items.slice(0, level + 1);
  }
}
ChartBreadcrumbComponent.ɵfac = function ChartBreadcrumbComponent_Factory(t) {
  return new (t || ChartBreadcrumbComponent)();
};
ChartBreadcrumbComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChartBreadcrumbComponent,
  selectors: [["kendo-chart-breadcrumb"]],
  viewQuery: function ChartBreadcrumbComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.breadcrumb = _t.first);
    }
  },
  inputs: {
    chart: "chart",
    rootItem: "rootItem"
  },
  exportAs: ["kendoChartBreadcrumb"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "items", "itemClick"]],
  template: function ChartBreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "kendo-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemClick", function ChartBreadcrumbComponent_Template_kendo_breadcrumb_itemClick_0_listener($event) {
        return ctx.onItemClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items);
    }
  },
  dependencies: [_progress_kendo_angular_navigation__WEBPACK_IMPORTED_MODULE_17__.BreadCrumbComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartBreadcrumbComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      exportAs: 'kendoChartBreadcrumb',
      selector: 'kendo-chart-breadcrumb',
      template: `
        <kendo-breadcrumb [items]="items" (itemClick)="onItemClick($event)">
        </kendo-breadcrumb>
    `
    }]
  }], null, {
    chart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rootItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    breadcrumb: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['breadcrumb', {
        static: true
      }]
    }]
  });
})();

/**
 * @hidden
 */
const CHART_DIRECTIVES = [ChartComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, DonutCenterTemplateDirective, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent];

// Re-export event types

/**
 * The arguments for the `navigatorFilter` event.
 */
class NavigatorFilterEvent extends BaseEvent {
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.from = e.from;
    this.to = e.to;
  }
}

// Re-export event types

/**
 * @hidden
 */
class RootConfigurationService extends ConfigurationService {}
RootConfigurationService.ɵfac = /* @__PURE__ */function () {
  let ɵRootConfigurationService_BaseFactory;
  return function RootConfigurationService_Factory(t) {
    return (ɵRootConfigurationService_BaseFactory || (ɵRootConfigurationService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RootConfigurationService)))(t || RootConfigurationService);
  };
}();
RootConfigurationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RootConfigurationService,
  factory: RootConfigurationService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootConfigurationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
const EVENT_MAP = {
  navigatorFilter: NavigatorFilterEvent
};
/**
 * @hidden
 */
class StockInstanceEventService extends InstanceEventService {
  create(name, args, sender) {
    if (EVENT_MAP[name]) {
      return new EVENT_MAP[name](args, sender);
    }
    return super.create(name, args, sender);
  }
}
const NAVIGATOR_DEFAULTS = {
  autoBindElements: true,
  liveDrag: false,
  partialRedraw: true
};
/**
 * The root StockChart component.
 *
 * @example
 * ```html
 * <kendo-stockchart>
 *     <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="data" field="value" categoryField="date">
 *         </kendo-chart-series-item>
 *     </kendo-chart-series>
 *     <kendo-chart-navigator>
 *         <kendo-chart-navigator-select to="2017/02/01">
 *         </kendo-chart-navigator-select>
 *         <kendo-chart-navigator-series>
 *             <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *             </kendo-chart-navigator-series-item>
 *         </kendo-chart-navigator-series>
 *     </kendo-chart-navigator>
 * </kendo-stockchart>
 * ```
 */
class StockChartComponent extends ChartComponent {
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    /**
     * @hidden
     */
    this.drilldown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * @hidden
     */
    this.drilldownLevelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Fires when the navigator range is changed.
     */
    this.navigatorFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * @hidden
     */
    this.showLicenseWatermark = false;
    this.redrawSlaves = false;
    this.hostClasses = ['k-chart', 'k-stockchart'];
    const isValid = (0,_progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_9__.validatePackage)(packageMetadata);
    this.showLicenseWatermark = (0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.shouldShowValidationUI)(isValid);
  }
  /**
   * @hidden
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  /**
   * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
   * The method is useful if you need to update only the main series data for the selected period.
   */
  skipNavigatorRedraw() {
    this.redrawSlaves = true;
  }
  createInstance(element, observer) {
    this.applyNavigatorDefaults();
    if (this.isDevMode() && (this.options.zoomable || this.options.pannable)) {
      throw new Error('The pannable and zoomable options are not supported by the StockChart component.');
    }
    this.instance = new _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.StockChart(element, this.options, this.theme, {
      intlService: this.intl,
      observer: observer,
      rtl: this.rtl,
      sender: this
    });
  }
  updateOptions() {
    this.applyNavigatorDefaults();
    if (this.redrawSlaves) {
      this.instance.applyOptions(this.options);
      this.instance.bindCategories();
      this.instance.navigator.redrawSlaves();
    } else {
      this.instance.setOptions(this.options);
    }
    this.redrawSlaves = false;
  }
  applyNavigatorDefaults() {
    this.options.navigator = Object.assign({}, this.options.navigator, NAVIGATOR_DEFAULTS);
  }
  isDevMode() {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)();
  }
}
StockChartComponent.ɵfac = function StockChartComponent_Factory(t) {
  return new (t || StockChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StockInstanceEventService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
StockChartComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: StockChartComponent,
  selectors: [["kendo-stockchart"]],
  inputs: {
    navigator: "navigator",
    pannable: "pannable",
    zoomable: "zoomable",
    drilldownLevel: "drilldownLevel"
  },
  outputs: {
    drilldown: "drilldown",
    drilldownLevelChange: "drilldownLevelChange",
    navigatorFilter: "navigatorFilter"
  },
  exportAs: ["kendoStockChart"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService, TooltipTemplateService, {
    provide: RootConfigurationService,
    useExisting: ConfigurationService
  }, StockInstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
    provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
    useValue: 'kendo.chart'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 3,
  consts: [[1, "k-chart-surface"], ["surface", ""], [3, "popupSettings"], [3, "popupSettings", "leave"], [3, "resize"], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]],
  template: function StockChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1)(2, "kendo-chart-crosshair-tooltips-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "kendo-chart-tooltip-popup", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leave", function StockChartComponent_Template_kendo_chart_tooltip_popup_leave_3_listener($event) {
        return ctx.tooltipMouseleave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "kendo-resize-sensor", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function StockChartComponent_Template_kendo_resize_sensor_resize_4_listener() {
        return ctx.onResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StockChartComponent_div_5_Template, 1, 0, "div", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkOverlayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockChartComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      exportAs: 'kendoStockChart',
      providers: [ConfigurationService, TooltipTemplateService, {
        provide: RootConfigurationService,
        useExisting: ConfigurationService
      }, StockInstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
        useValue: 'kendo.chart'
      }],
      selector: 'kendo-stockchart',
      template: `
        <div #surface class="k-chart-surface"></div>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: StockInstanceEventService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    navigator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pannable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    drilldown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldownLevelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldownLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    navigatorFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/**
 * @hidden
 */
const PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('configuration prefix');
/**
 * @hidden
 */
class PrefixConfigurationService extends ConfigurationService {
  constructor(rootService, prefix, ngZone) {
    super(ngZone);
    this.rootService = rootService;
    this.prefix = prefix;
  }
  push(store) {
    this.rootService.notify(new Change(this.prefix, store));
  }
  notify(change) {
    change.key = this.prefix + (change.key ? `.${change.key}` : '');
    this.rootService.notify(change);
  }
}
PrefixConfigurationService.ɵfac = function PrefixConfigurationService_Factory(t) {
  return new (t || PrefixConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](RootConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PREFIX), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
PrefixConfigurationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PrefixConfigurationService,
  factory: PrefixConfigurationService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrefixConfigurationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: RootConfigurationService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [RootConfigurationService]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [PREFIX]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, null);
})();

/**
 * The configuration options of the navigator
 * ([see runnable example]({% slug overview_stockchart_charts %}#toc-navigator)).
 *
 * @example
 * ```ts-no-run
 * _@Component({
 *     selector: 'my-app',
 *       template: `
 *         <kendo-stockchart (navigatorFilter)="onNavigatorFilter($event)">
 *             <kendo-chart-series>
 *                <kendo-chart-series-item
 *                type="candlestick"
 *                 [data]="seriesData"
 *                 openField="Open"
 *                 closeField="Close"
 *                 lowField="Low"
 *                 highField="High"
 *                 categoryField="Date">
 *             </kendo-chart-series-item>
 *          </kendo-chart-series>
 *          <kendo-chart-navigator
 *            [categoryAxis]="categoryAxisOptions"
 *            [hint]="hintOptions"
 *            [pane]="paneOptions"
 *            [visible]="isVisible">
 *            <kendo-chart-navigator-select [from]="from" [to]="to">
 *            </kendo-chart-navigator-select>
 *            <kendo-chart-navigator-series>
 *              <kendo-chart-navigator-series-item type="area" [data]="navigatorData" field="Close" categoryField="Date">
 *              </kendo-chart-navigator-series-item>
 *           </kendo-chart-navigator-series>
 *          </kendo-chart-navigator>
 *        </kendo-stockchart>
 *        <br /><br />
 *        <button kendoButton (click)="isVisible = !isVisible">Toggle Navigator</button>
 *    `
 * })
 * ```
 */
class NavigatorComponent extends SettingsComponent {
  constructor(configurationService) {
    super('', configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorComponent.ɵfac = function NavigatorComponent_Factory(t) {
  return new (t || NavigatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorComponent,
  selectors: [["kendo-chart-navigator"]],
  inputs: {
    position: "position",
    visible: "visible",
    categoryAxis: "categoryAxis",
    hint: "hint",
    pane: "pane",
    select: "select",
    series: "series"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: PREFIX,
    useValue: 'navigator'
  }, {
    provide: ConfigurationService,
    useClass: PrefixConfigurationService
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: 'navigator'
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: 'kendo-chart-navigator',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    categoryAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pane: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    series: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component of the navigator category axis.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-stockchart>
 *   <kendo-chart-navigator>
 *     <kendo-chart-navigator-category-axis
 *       color="maroon"
 *       [labels]="{color: 'green'}">
 *     </kendo-chart-navigator-category-axis>
 *   </kendo-chart-navigator>
 * </kendo-stockchart>
 * ```
 */
class NavigatorCategoryAxisComponent extends CategoryAxisItemComponent {
  constructor(configurationService, intl, localeId) {
    super(configurationService, null, intl, localeId);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisComponent.ɵfac = function NavigatorCategoryAxisComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
};
NavigatorCategoryAxisComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisComponent,
  selectors: [["kendo-chart-navigator-category-axis"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: PREFIX,
    useValue: 'navigator.categoryAxis'
  }, {
    provide: ConfigurationService,
    useClass: PrefixConfigurationService
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: 'navigator.categoryAxis'
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: 'kendo-chart-navigator-category-axis',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID]
      }]
    }];
  }, null);
})();

/**
 * The configuration options of the crosshair.
 */
class NavigatorCategoryAxisCrosshairComponent extends CategoryAxisCrosshairComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisCrosshairComponent.ɵfac = function NavigatorCategoryAxisCrosshairComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisCrosshairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisCrosshairComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisCrosshairComponent,
  selectors: [["kendo-chart-navigator-category-axis-crosshair"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisCrosshairComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisCrosshairComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-crosshair',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
class NavigatorCategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisCrosshairTooltipComponent.ɵfac = function NavigatorCategoryAxisCrosshairTooltipComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisCrosshairTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisCrosshairTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisCrosshairTooltipComponent,
  selectors: [["kendo-chart-navigator-category-axis-crosshair-tooltip"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisCrosshairTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisCrosshairTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-crosshair-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration of the axis labels.
 */
class NavigatorCategoryAxisLabelsComponent extends CategoryAxisLabelsComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisLabelsComponent.ɵfac = function NavigatorCategoryAxisLabelsComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisLabelsComponent,
  selectors: [["kendo-chart-navigator-category-axis-labels"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration of the category axis notes.
 */
class NavigatorCategoryAxisNotesComponent extends CategoryAxisNotesComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisNotesComponent.ɵfac = function NavigatorCategoryAxisNotesComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisNotesComponent,
  selectors: [["kendo-chart-navigator-category-axis-notes"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The icon of the notes.
 */
class NavigatorCategoryAxisNotesIconComponent extends CategoryAxisNotesIconComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisNotesIconComponent.ɵfac = function NavigatorCategoryAxisNotesIconComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisNotesIconComponent,
  selectors: [["kendo-chart-navigator-category-axis-notes-icon"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The label of the notes.
 */
class NavigatorCategoryAxisNotesLabelComponent extends CategoryAxisNotesLabelComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisNotesLabelComponent.ɵfac = function NavigatorCategoryAxisNotesLabelComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisNotesLabelComponent,
  selectors: [["kendo-chart-navigator-category-axis-notes-label"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the range (`select.from`, `select.to`) will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has also to be specified with date values.
 */
class NavigatorCategoryAxisSelectComponent extends CategoryAxisSelectComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisSelectComponent.ɵfac = function NavigatorCategoryAxisSelectComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisSelectComponent,
  selectors: [["kendo-chart-navigator-category-axis-select"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisSelectComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-select',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The title configuration of the navigator category axis.
 */
class NavigatorCategoryAxisTitleComponent extends CategoryAxisTitleComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorCategoryAxisTitleComponent.ɵfac = function NavigatorCategoryAxisTitleComponent_Factory(t) {
  return new (t || NavigatorCategoryAxisTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorCategoryAxisTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorCategoryAxisTitleComponent,
  selectors: [["kendo-chart-navigator-category-axis-title"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorCategoryAxisTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorCategoryAxisTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-category-axis-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The default options of the navigator hint
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
class NavigatorHintComponent extends SettingsComponent {
  constructor(configurationService) {
    super('hint', configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorHintComponent.ɵfac = function NavigatorHintComponent_Factory(t) {
  return new (t || NavigatorHintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorHintComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorHintComponent,
  selectors: [["kendo-chart-navigator-hint"]],
  inputs: {
    content: "content",
    format: "format",
    visible: "visible"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorHintComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorHintComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-hint',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component of the navigator pane
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
class NavigatorPaneComponent extends PaneComponent {
  constructor(configurationService) {
    super(configurationService, null);
    this.configurationService = configurationService;
  }
}
NavigatorPaneComponent.ɵfac = function NavigatorPaneComponent_Factory(t) {
  return new (t || NavigatorPaneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorPaneComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorPaneComponent,
  selectors: [["kendo-chart-navigator-pane"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: PREFIX,
    useValue: 'navigator.pane'
  }, {
    provide: ConfigurationService,
    useClass: PrefixConfigurationService
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorPaneComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorPaneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: 'navigator.pane'
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: 'kendo-chart-navigator-pane',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The title configuration of the StockChart navigator pane.
 */
class NavigatorPaneTitleComponent extends PanesTitleComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorPaneTitleComponent.ɵfac = function NavigatorPaneTitleComponent_Factory(t) {
  return new (t || NavigatorPaneTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorPaneTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorPaneTitleComponent,
  selectors: [["kendo-chart-navigator-pane-title"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorPaneTitleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorPaneTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-pane-title',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * Specifies the initially selected range.
 * If no range is specified, the full range of values is rendered.
 */
class NavigatorSelectComponent extends SettingsComponent {
  constructor(configurationService) {
    super('select', configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSelectComponent.ɵfac = function NavigatorSelectComponent_Factory(t) {
  return new (t || NavigatorSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSelectComponent,
  selectors: [["kendo-chart-navigator-select"]],
  inputs: {
    from: "from",
    to: "to",
    mousewheel: "mousewheel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSelectComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-select',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, {
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    to: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mousewheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * The configuration component of a navigator series item
 * ([see example]({% slug navigator_stockchart_charts %})).
 */
class NavigatorSeriesItemComponent extends SeriesItemComponent {
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
}
NavigatorSeriesItemComponent.ɵfac = function NavigatorSeriesItemComponent_Factory(t) {
  return new (t || NavigatorSeriesItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService));
};
NavigatorSeriesItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesItemComponent,
  selectors: [["kendo-chart-navigator-series-item"]],
  inputs: {
    drilldownField: "drilldownField"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesItemComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: 'kendo-chart-navigator-series-item',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    drilldownField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * A collection of one or more navigator series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-navigator>
 *             <kendo-chart-navigator-series>
 *                 <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *                 </kendo-chart-navigator-series-item>
 *             </kendo-chart-navigator-series>
 *         </kendo-chart-navigator>
 *     </kendo-stockchart>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [];
 *
 *   constructor() {
 *      for (let idx = 0; idx < 100; idx++) {
 *          this.data.push({
 *              date: new Date(2017, 0, idx),
 *              value: Math.random() * 100
 *          });
 *      }
 *   }
 * }
 *
 * ```
 */
class NavigatorSeriesComponent extends SeriesComponent {
  constructor(configurationService, collectionService, tooltipTemplateService, viewContainer) {
    super(configurationService, collectionService, tooltipTemplateService, viewContainer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.tooltipTemplateService = tooltipTemplateService;
    this.viewContainer = viewContainer;
  }
  readTooltipTemplates() {}
}
NavigatorSeriesComponent.ɵfac = function NavigatorSeriesComponent_Factory(t) {
  return new (t || NavigatorSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TooltipTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};
NavigatorSeriesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesComponent,
  selectors: [["kendo-chart-navigator-series"]],
  contentQueries: function NavigatorSeriesComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NavigatorSeriesItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.children = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CollectionService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: 'kendo-chart-navigator-series',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: TooltipTemplateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }];
  }, {
    children: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [NavigatorSeriesItemComponent]
    }]
  });
})();

/**
 * The error bars of the StockChart navigator series.
 */
class NavigatorSeriesErrorBarsComponent extends SeriesErrorBarsComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesErrorBarsComponent.ɵfac = function NavigatorSeriesErrorBarsComponent_Factory(t) {
  return new (t || NavigatorSeriesErrorBarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesErrorBarsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesErrorBarsComponent,
  selectors: [["kendo-chart-navigator-series-item-error-bars"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesErrorBarsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesErrorBarsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-error-bars',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The extremes configuration of the StockChart navigator series. Applies to extreme outliers.
 */
class NavigatorSeriesExtremesComponent extends SeriesExtremesComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesExtremesComponent.ɵfac = function NavigatorSeriesExtremesComponent_Factory(t) {
  return new (t || NavigatorSeriesExtremesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesExtremesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesExtremesComponent,
  selectors: [["kendo-chart-navigator-series-item-extremes"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesExtremesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesExtremesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-extremes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The configuration options of the StockChart series highlight.
 */
class NavigatorSeriesHighlightComponent extends SeriesHighlightComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesHighlightComponent.ɵfac = function NavigatorSeriesHighlightComponent_Factory(t) {
  return new (t || NavigatorSeriesHighlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesHighlightComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesHighlightComponent,
  selectors: [["kendo-chart-navigator-series-item-highlight"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesHighlightComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesHighlightComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-highlight',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The label configuration of the StockChart navigator series.
 */
class NavigatorSeriesLabelsComponent extends SeriesLabelsComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
NavigatorSeriesLabelsComponent.ɵfac = function NavigatorSeriesLabelsComponent_Factory(t) {
  return new (t || NavigatorSeriesLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesLabelsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesLabelsComponent,
  selectors: [["kendo-chart-navigator-series-item-labels"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesLabelsComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesLabelsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-labels',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The `from` label configuration of the StockChart navigator series.
 */
class NavigatorSeriesLabelsFromComponent extends SeriesLabelsFromComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
NavigatorSeriesLabelsFromComponent.ɵfac = function NavigatorSeriesLabelsFromComponent_Factory(t) {
  return new (t || NavigatorSeriesLabelsFromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesLabelsFromComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesLabelsFromComponent,
  selectors: [["kendo-chart-navigator-series-item-labels-from"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesLabelsFromComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesLabelsFromComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-labels-from',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The `to` label configuration of the StockChart navigator series.
 */
class NavigatorSeriesLabelsToComponent extends SeriesLabelsToComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
}
NavigatorSeriesLabelsToComponent.ɵfac = function NavigatorSeriesLabelsToComponent_Factory(t) {
  return new (t || NavigatorSeriesLabelsToComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesLabelsToComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesLabelsToComponent,
  selectors: [["kendo-chart-navigator-series-item-labels-to"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesLabelsToComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesLabelsToComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-labels-to',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The marker configuration of the StockChart navigator series.
 */
class NavigatorSeriesMarkersComponent extends SeriesMarkersComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesMarkersComponent.ɵfac = function NavigatorSeriesMarkersComponent_Factory(t) {
  return new (t || NavigatorSeriesMarkersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesMarkersComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesMarkersComponent,
  selectors: [["kendo-chart-navigator-series-item-markers"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesMarkersComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesMarkersComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-markers',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The notes configuration of the StockChart navigator series.
 */
class NavigatorSeriesNotesComponent extends SeriesNotesComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesNotesComponent.ɵfac = function NavigatorSeriesNotesComponent_Factory(t) {
  return new (t || NavigatorSeriesNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesNotesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesNotesComponent,
  selectors: [["kendo-chart-navigator-series-item-notes"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesNotesComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesNotesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-notes',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The icon of the notes.
 */
class NavigatorSeriesNotesIconComponent extends SeriesNotesIconComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesNotesIconComponent.ɵfac = function NavigatorSeriesNotesIconComponent_Factory(t) {
  return new (t || NavigatorSeriesNotesIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesNotesIconComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesNotesIconComponent,
  selectors: [["kendo-chart-navigator-series-item-notes-icon"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesNotesIconComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesNotesIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-notes-icon',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The label of the notes.
 */
class NavigatorSeriesNotesLabelComponent extends SeriesNotesLabelComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesNotesLabelComponent.ɵfac = function NavigatorSeriesNotesLabelComponent_Factory(t) {
  return new (t || NavigatorSeriesNotesLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesNotesLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesNotesLabelComponent,
  selectors: [["kendo-chart-navigator-series-item-notes-label"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesNotesLabelComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesNotesLabelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-notes-label',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The outliers configuration of the StockChart navigator series. Applies to mild outliers.
 */
class NavigatorSeriesOutliersComponent extends SeriesOutliersComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesOutliersComponent.ɵfac = function NavigatorSeriesOutliersComponent_Factory(t) {
  return new (t || NavigatorSeriesOutliersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesOutliersComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesOutliersComponent,
  selectors: [["kendo-chart-navigator-series-item-outliers"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesOutliersComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesOutliersComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-outliers',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * The tooltip configuration of the StockChart navigator series.
 * The StockChart navigator series tooltip is displayed when the `navigator.series.tooltip.visible` option is set to `true`.
 */
class NavigatorSeriesTooltipComponent extends SeriesTooltipComponent {
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
}
NavigatorSeriesTooltipComponent.ɵfac = function NavigatorSeriesTooltipComponent_Factory(t) {
  return new (t || NavigatorSeriesTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService));
};
NavigatorSeriesTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigatorSeriesTooltipComponent,
  selectors: [["kendo-chart-navigator-series-item-tooltip"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function NavigatorSeriesTooltipComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorSeriesTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-chart-navigator-series-item-tooltip',
      template: ''
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();

/**
 * @hidden
 */
const STOCK_CHART_DIRECTIVES = [StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent];

/**
 * The root Chart component.
 *
 * @example
 * ```html
 * <kendo-sparkline [data]="[936, 968, 1025, 999]" type="column">
 * </kendo-sparkline>
 * ```
 */
class SparklineComponent extends ChartComponent {
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    /**
     * @hidden
     */
    this.drilldown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * @hidden
     */
    this.drilldownLevelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * @hidden
     */
    this.tooltipWrapperClass = 'k-sparkline-tooltip-wrapper';
    /**
     * @hidden
     */
    this.tooltipContentClasses = {
      'k-sparkline-tooltip': true
    };
    /**
     * @hidden
     */
    this.showLicenseWatermark = false;
    this.hostClasses = ['k-sparkline', 'k-widget'];
    const isValid = (0,_progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_9__.validatePackage)(packageMetadata);
    this.showLicenseWatermark = (0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.shouldShowValidationUI)(isValid);
  }
  /**
   * @hidden
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  createInstance(element, observer) {
    this.instance = new _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.Sparkline(element, _progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.Sparkline.normalizeOptions(this.options), this.theme, {
      intlService: this.intl,
      observer: observer,
      rtl: this.rtl,
      sender: this
    });
  }
  updateOptions() {
    this.instance.setOptions(_progress_kendo_charts__WEBPACK_IMPORTED_MODULE_0__.Sparkline.normalizeOptions(this.options));
  }
}
SparklineComponent.ɵfac = function SparklineComponent_Factory(t) {
  return new (t || SparklineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InstanceEventService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
SparklineComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SparklineComponent,
  selectors: [["kendo-sparkline"]],
  inputs: {
    type: "type",
    data: "data",
    drilldownLevel: "drilldownLevel"
  },
  outputs: {
    drilldown: "drilldown",
    drilldownLevelChange: "drilldownLevelChange"
  },
  exportAs: ["kendoSparkline"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ConfigurationService, TooltipTemplateService, InstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
    provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
    useValue: 'kendo.chart'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 6,
  consts: [[1, "k-chart-surface"], ["surface", ""], [3, "popupSettings"], [3, "animate", "wrapperClass", "classNames", "popupSettings", "leave"], [3, "resize"], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]],
  template: function SparklineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 0, 1)(2, "kendo-chart-crosshair-tooltips-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "kendo-chart-tooltip-popup", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leave", function SparklineComponent_Template_kendo_chart_tooltip_popup_leave_3_listener($event) {
        return ctx.tooltipMouseleave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "kendo-resize-sensor", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SparklineComponent_Template_kendo_resize_sensor_resize_4_listener() {
        return ctx.onResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SparklineComponent_div_5_Template, 1, 0, "div", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animate", false)("wrapperClass", ctx.tooltipWrapperClass)("classNames", ctx.tooltipContentClasses)("popupSettings", ctx.popupSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkOverlayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SparklineComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      exportAs: 'kendoSparkline',
      providers: [ConfigurationService, TooltipTemplateService, InstanceEventService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService, {
        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.L10N_PREFIX,
        useValue: 'kendo.chart'
      }],
      selector: 'kendo-sparkline',
      template: `
        <span #surface class="k-chart-surface"></span>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup [animate]="false" [wrapperClass]="tooltipWrapperClass"
            [classNames]="tooltipContentClasses" (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function () {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__.IntlService
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_6__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: InstanceEventService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    drilldown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldownLevelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drilldownLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * @hidden
 */
const SPARKLINE_DIRECTIVES = [SparklineComponent];

/**
 * A [module](link:site.data.urls.angular['ngmoduleapi']) that includes the Chart component and directives.
 *
 * Imports the ChartModule into your application
 * [root module](link:site.data.urls.angular['ngmodules']#angular-modularity) or any other sub-module
 * that will use the Chart component.
  * @example
 * ```ts
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { ChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, ChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
class ChartModule {}
ChartModule.ɵfac = function ChartModule_Factory(t) {
  return new (t || ChartModule)();
};
ChartModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChartModule
});
ChartModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [ThemeService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_navigation__WEBPACK_IMPORTED_MODULE_17__.BreadCrumbModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [CHART_DIRECTIVES],
      exports: [CHART_DIRECTIVES],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_navigation__WEBPACK_IMPORTED_MODULE_17__.BreadCrumbModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule],
      providers: [ThemeService]
    }]
  }], null, null);
})();

/**
 * A [module](link:site.data.urls.angular['ngmoduleapi']) that includes the StockChart component and directives.
 *
 * Imports the StockChartModule into your application
 * [root module](link:site.data.urls.angular['ngmodules']#angular-modularity) or any other sub-module
 * that will use the StockChart component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { StockChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, StockChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
class StockChartModule {}
StockChartModule.ɵfac = function StockChartModule_Factory(t) {
  return new (t || StockChartModule)();
};
StockChartModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: StockChartModule
});
StockChartModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[ChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule], ChartModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockChartModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [STOCK_CHART_DIRECTIVES],
      exports: [STOCK_CHART_DIRECTIVES, ChartModule],
      imports: [ChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule]
    }]
  }], null, null);
})();

/**
 * A [module](link:site.data.urls.angular['ngmoduleapi']) that includes the Sparkline component and directives.
 *
 * Imports the SparklineModule into your application
 * [root module](link:site.data.urls.angular['ngmodules']#angular-modularity) or any other sub-module
 * that will use the Sparkline component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { SparklineModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, SparklineModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
class SparklineModule {}
SparklineModule.ɵfac = function SparklineModule_Factory(t) {
  return new (t || SparklineModule)();
};
SparklineModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SparklineModule
});
SparklineModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[ChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule], ChartModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SparklineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [SPARKLINE_DIRECTIVES],
      exports: [SPARKLINE_DIRECTIVES, ChartModule],
      imports: [ChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__.PopupModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.ResizeSensorModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_7__.WatermarkModule]
    }]
  }], null, null);
})();

/**
 * A [module](link:site.data.urls.angular['ngmoduleapi']) that includes all Chart components and directives.
 *
 * Imports the ChartsModule into your application
 * [root module](link:site.data.urls.angular['ngmodules']#angular-modularity) or any other sub-module
 * that will use the Charts components.
 *
 * @example
 * ```ts
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { ChartsModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, ChartsModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
class ChartsModule {}
ChartsModule.ɵfac = function ChartsModule_Factory(t) {
  return new (t || ChartsModule)();
};
ChartsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChartsModule
});
ChartsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [ChartModule, SparklineModule, StockChartModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [ChartModule, SparklineModule, StockChartModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 92339:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-angular-listview/fesm2020/progress-kendo-angular-listview.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCommandDirective: () => (/* binding */ AddCommandDirective),
/* harmony export */   CancelCommandDirective: () => (/* binding */ CancelCommandDirective),
/* harmony export */   DataBindingDirective: () => (/* binding */ DataBindingDirective),
/* harmony export */   EditCommandDirective: () => (/* binding */ EditCommandDirective),
/* harmony export */   EditTemplateDirective: () => (/* binding */ EditTemplateDirective),
/* harmony export */   FooterTemplateDirective: () => (/* binding */ FooterTemplateDirective),
/* harmony export */   HeaderTemplateDirective: () => (/* binding */ HeaderTemplateDirective),
/* harmony export */   ItemTemplateDirective: () => (/* binding */ ItemTemplateDirective),
/* harmony export */   ListViewComponent: () => (/* binding */ ListViewComponent),
/* harmony export */   ListViewModule: () => (/* binding */ ListViewModule),
/* harmony export */   LoaderTemplateDirective: () => (/* binding */ LoaderTemplateDirective),
/* harmony export */   PageSizeChangeEvent: () => (/* binding */ PageSizeChangeEvent),
/* harmony export */   RemoveCommandDirective: () => (/* binding */ RemoveCommandDirective),
/* harmony export */   SaveCommandDirective: () => (/* binding */ SaveCommandDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-common */ 20305);
/* harmony import */ var _progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-licensing */ 99307);
/* harmony import */ var _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-l10n */ 17534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _progress_kendo_angular_pager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-pager */ 51674);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-icons */ 65967);
/**-----------------------------------------------------------------------------------------
* Copyright © 2023 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/


















/**
 * @hidden
 */
const _c0 = ["contentContainer"];
function ListViewComponent_0_ng_template_0_Template(rf, ctx) {}
const _c1 = function () {
  return {
    pagerClass: "k-listview-pager k-listview-pager-top"
  };
};
function ListViewComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_0_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
  }
}
function ListViewComponent_div_1_ng_template_1_Template(rf, ctx) {}
function ListViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ListViewComponent_div_4_1_ng_template_0_Template(rf, ctx) {}
function ListViewComponent_div_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_div_4_1_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.editTemplate == null ? null : ctx_r13.editTemplate.templateRef)("ngTemplateOutletContext", ctx_r13.editTemplateContext(-1));
  }
}
function ListViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_div_4_1_Template, 1, 2, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", -1)("ngClass", ctx_r3.itemClass)("ngStyle", ctx_r3.itemStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx_r3.listItemRole)("data-kendo-listview-item-index", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.editTemplate);
  }
}
function ListViewComponent_div_5_ng_template_1_Template(rf, ctx) {}
function ListViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_div_5_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r16)("ngClass", ctx_r4.itemClass)("ngStyle", ctx_r4.itemStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx_r4.listItemRole)("aria-posinset", ctx_r4.itemPosInSet(index_r16))("aria-setsize", ctx_r4.total)("data-kendo-listview-item-index", index_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.isEdited(index_r16) ? ctx_r4.editTemplate == null ? null : ctx_r4.editTemplate.templateRef : ctx_r4.itemTemplate == null ? null : ctx_r4.itemTemplate.templateRef)("ngTemplateOutletContext", ctx_r4.isEdited(index_r16) ? ctx_r4.editTemplateContext(index_r16) : ctx_r4.templateContext(index_r16));
  }
}
function ListViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ListViewComponent_7_ng_template_0_Template(rf, ctx) {}
function ListViewComponent_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_7_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.loaderTemplate.templateRef);
  }
}
function ListViewComponent_div_8_ng_template_1_Template(rf, ctx) {}
function ListViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footerTemplate == null ? null : ctx_r7.footerTemplate.templateRef);
  }
}
function ListViewComponent_9_ng_template_0_Template(rf, ctx) {}
const _c2 = function () {
  return {
    pagerClass: "k-listview-pager"
  };
};
function ListViewComponent_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_9_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
  }
}
function ListViewComponent_ng_template_10_kendo_datapager_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-datapager", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListViewComponent_ng_template_10_kendo_datapager_0_Template_kendo_datapager_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.handlePageChange($event));
    })("pageSizeChange", function ListViewComponent_ng_template_10_kendo_datapager_0_Template_kendo_datapager_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.pageSizeChange.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagerClass_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().pagerClass;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](pagerClass_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r24.total)("pageSize", ctx_r24.pageSize)("skip", ctx_r24.skip)("buttonCount", ctx_r24.pagerSettings.buttonCount)("info", ctx_r24.pagerSettings.info)("previousNext", ctx_r24.pagerSettings.previousNext)("type", ctx_r24.pagerSettings.type)("pageSizeValues", ctx_r24.pagerSettings.pageSizeValues);
  }
}
function ListViewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_ng_template_10_kendo_datapager_0_Template, 1, 10, "kendo-datapager", 18);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.pageable);
  }
}
const _c3 = function (a0) {
  return {
    scroll: a0
  };
};
const _c4 = ["kendoListViewEditCommand", ""];
function EditCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function EditCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function EditCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.iconClass);
  }
}
const _c5 = ["*"];
const _c6 = ["kendoListViewAddCommand", ""];
function AddCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function AddCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function AddCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.iconClass);
  }
}
const _c7 = ["kendoListViewSaveCommand", ""];
function SaveCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function SaveCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function SaveCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.iconClass);
  }
}
const _c8 = ["kendoListViewCancelCommand", ""];
function CancelCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function CancelCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function CancelCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.iconClass);
  }
}
const _c9 = ["kendoListViewRemoveCommand", ""];
function RemoveCommandDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function RemoveCommandDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemoveCommandDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.iconClass);
  }
}
const packageMetadata = {
  name: '@progress/kendo-angular-listview',
  productName: 'Kendo UI for Angular',
  productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
  publishDate: 1694533107,
  version: '13.5.0',
  licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/'
};
const LISTVIEW_ITEM_SELECTOR = '.k-listview-item';
/**
 * @hidden
 */
const isPresent = item => item !== null && item !== undefined;
/**
 * @hidden
 */
const isObject = item => isPresent(item) && typeof item === 'object';
/**
 * @hidden
 *
 * Polyfill for `Element.matches`.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
const match = (element, selector) => {
  const matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  if (!isPresent(matcher)) {
    return false;
  }
  return matcher.call(element, selector);
};
/**
 * @hidden
 *
 * Checks if a target element has the `.k-listview-item` CSS class.
 */
const isListViewItem = element => {
  if (!isPresent(element)) {
    return false;
  }
  return match(element, LISTVIEW_ITEM_SELECTOR);
};
/**
 * @hidden
 *
 * Extracts and parses to a number the `data-kendo-listview-item-index` attribute value from the targeted element.
 */
const getListItemIndex = item => {
  if (!isPresent(item)) {
    return null;
  }
  return Number(item.getAttribute('data-kendo-listview-item-index'));
};
/**
 * @hidden
 *
 * Gets the new focus target from a blur event.
 * Queries both event.relatedTarget and document.activeElement for compatibility with IE.
 */
const relatedTarget = event => {
  if (!isPresent(event.relatedTarget) || !(0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.isDocumentAvailable)()) {
    return null;
  }
  return event.relatedTarget || document.activeElement;
};
/**
 * @hidden
 *
 * If the given contender number is not defined or lower than the specified min - returns min, if its above the specified max - returns max.
 * If the number is in the given bounds, it is returned.
 */
const fitIntoRange = (contender, min, max) => {
  if (!isPresent(contender) || contender <= min) {
    return min;
  } else if (contender >= max) {
    return max;
  } else {
    return contender;
  }
};
/**
 * @hidden
 */
const closestWithMatch = (element, selector) => {
  let parent = element;
  while (parent !== null && parent.nodeType === 1) {
    if (match(parent, selector)) {
      return parent;
    }
    parent = parent.parentElement || parent.parentNode;
  }
  return null;
};
/**
 * @hidden
 *
 * Extracts and parses to a number the `data-kendo-listview-item-index` attribute value from the targeted element.
 */
const getClosestListItemIndex = element => {
  if (!isPresent(element)) {
    return null;
  }
  const closestListViewItem = closestWithMatch(element, LISTVIEW_ITEM_SELECTOR);
  return getListItemIndex(closestListViewItem);
};

/**
 * @hidden
 *
 * Provided per ListView instance. Keeps the availability, active index and focused state of the current ListView.
 * Emits `changes` when any of the aforementioned states changes.
 */
class NavigationService {
  constructor() {
    /**
     * Emits every time a change in active index/focus/blur/navigation availability occurs.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Specifies if a ListView item currently holds focus.
     */
    this.isFocused = false;
    /**
     * Keeps track of the index of the items that should be the current focus target (tabindex="0").
     * When set to `null`/`undefined`, the navigation is disabled and the items should not render a tabindex.
     */
    this.activeIndex = null;
  }
  /**
   * Sets or gets if the navigation is enabled.
   * When no activeIndex is present, the navigation is inferred as disabled.
   * Toggling the service availability clears the current active index or activates the first one.
   */
  get isEnabled() {
    return isPresent(this.activeIndex);
  }
  set isEnabled(enabled) {
    if (enabled) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = null;
    }
    this.changes.next();
  }
  /**
   * Shows if the checked index should be the current available focus target (tabindex="0").
   */
  isActive(index) {
    return index === this.activeIndex;
  }
  handleKeyDown(event, totalItemsCount) {
    const {
      keyCode
    } = event;
    switch (keyCode) {
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.ArrowLeft:
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.ArrowUp:
        this.navigateToPrevious();
        break;
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.ArrowRight:
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.ArrowDown:
        this.navigateToNext(totalItemsCount);
        break;
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.Home:
        {
          const firstIndex = 0;
          this.navigateTo(firstIndex);
          break;
        }
      case _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.Keys.End:
        {
          const lastIndex = totalItemsCount - 1;
          this.navigateTo(lastIndex);
          break;
        }
      default:
        return;
    }
    // the following line is executed only if the pressed key matches one of the listview hotkeys -
    // they `break`, while the `default` case `return`s
    event.preventDefault();
  }
  handleFocusIn(event) {
    const target = event.target;
    if (!isListViewItem(target)) {
      const listViewItemSelector = '.k-listview-item';
      const closestListViewItem = closestWithMatch(target, listViewItemSelector);
      const isListViewItemChild = isPresent(closestListViewItem);
      if (isListViewItemChild) {
        const itemIndex = getListItemIndex(closestListViewItem);
        this.setActiveIndex(itemIndex);
      }
      return;
    }
    const targetIndex = getListItemIndex(target);
    // don't emit if the no change in focused state has occurred and the targeted index is the same as the current activeIndex
    if (this.isFocused && targetIndex === this.activeIndex) {
      return;
    }
    this.activeIndex = targetIndex;
    this.isFocused = true;
    this.changes.next();
  }
  handleFocusOut(event) {
    // don't emit if the blurred item is not a listview item or if the new focus target is another listview item
    if (!isListViewItem(event.target) || isListViewItem(relatedTarget(event))) {
      return;
    }
    this.isFocused = false;
    this.changes.next();
  }
  /**
   * Sets the `activeIndex` and triggers changes without focusing the corresponding ListView item.
   */
  setActiveIndex(index) {
    if (!this.isEnabled) {
      return;
    }
    if (index === this.activeIndex) {
      return;
    }
    this.activeIndex = index;
    this.changes.next();
  }
  /**
   * Focuses item at the targeted index. If no index is passed, the current `activeIndex` is used.
   * The passed target index is normalized to fit the min/max available indices bounds.
   */
  focusIndex(index, totalItemsCount) {
    if (!this.isEnabled) {
      return;
    }
    const parsed = parseInt(index, 10);
    const firstIndex = 0;
    const lastIndex = totalItemsCount - 1;
    const targetIndex = isNaN(parsed) ? this.activeIndex : fitIntoRange(parsed, firstIndex, lastIndex);
    this.navigateTo(targetIndex);
  }
  navigateTo(index) {
    if (this.isFocused && this.activeIndex === index) {
      return;
    }
    this.isFocused = true;
    this.activeIndex = index;
    this.changes.next();
  }
  navigateToPrevious() {
    const previousIndex = Math.max(this.activeIndex - 1, 0);
    this.navigateTo(previousIndex);
  }
  navigateToNext(totalItemsCount) {
    const lastAvailableIndex = totalItemsCount - 1;
    const nextIndex = Math.min(this.activeIndex + 1, lastAvailableIndex);
    this.navigateTo(nextIndex);
  }
}
NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)();
};
NavigationService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * @hidden
 */
class ListViewNavigableItemDirective {
  constructor(hostElement, renderer, navigationService) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.navigationService = navigationService;
  }
  ngOnChanges() {
    this.updateNavigationState();
  }
  ngOnInit() {
    this.navigationSubscription = this.navigationService.changes.subscribe(this.updateNavigationState.bind(this));
  }
  ngOnDestroy() {
    if (isPresent(this.navigationSubscription)) {
      this.navigationSubscription.unsubscribe();
    }
  }
  updateNavigationState() {
    this.updateTabIndex();
    this.updateFocusedState();
  }
  updateFocusedState() {
    const shouldFocus = this.navigationService.isActive(this.index) && this.navigationService.isFocused;
    const focusedCssClass = 'k-focus';
    if (shouldFocus) {
      this.renderer.addClass(this.hostElement.nativeElement, focusedCssClass);
      this.hostElement.nativeElement.focus();
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, focusedCssClass);
    }
  }
  updateTabIndex() {
    if (!this.navigationService.isEnabled) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, 'tabindex');
    } else if (this.navigationService.isActive(this.index)) {
      this.renderer.setAttribute(this.hostElement.nativeElement, 'tabindex', '0');
    } else {
      this.renderer.setAttribute(this.hostElement.nativeElement, 'tabindex', '-1');
    }
  }
}
ListViewNavigableItemDirective.ɵfac = function ListViewNavigableItemDirective_Factory(t) {
  return new (t || ListViewNavigableItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService));
};
ListViewNavigableItemDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ListViewNavigableItemDirective,
  selectors: [["", "kendoListViewNavigableItem", ""]],
  inputs: {
    index: "index"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListViewNavigableItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewNavigableItem]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NavigationService
    }];
  }, {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Renders the list item content. To define an item template, nest an `<ng-template>` tag
 * with the `kendoListViewItemTemplate` directive inside the `<kendo-listview>` tag
 * [see example]({% slug templates_listview %}#toc-item-template).
 *
 * The following values are available as context variables:
 * - `let-dataItem="dataItem"` (`any`) - The current data item. Also available as implicit context variable.
 * - `let-index="index"` (`number`) - The current item index.
 * - `let-isFirst="isFirst"` (`boolean`) - Indicates whether the current data item will be rendered as the first item on the list.
 * - `let-isLast="isLast"` (`boolean`)- Indicates whether the current data item will be rendered as the last item on the list.
 */
class ItemTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
ItemTemplateDirective.ɵfac = function ItemTemplateDirective_Factory(t) {
  return new (t || ItemTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
ItemTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ItemTemplateDirective,
  selectors: [["", "kendoListViewItemTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewItemTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Renders the header content of the ListView. To define a header template, nest an `<ng-template>` tag
 * with the `kendoListViewHeaderTemplate` directive inside the `<kendo-listview>` tag
 * [see example]({% slug templates_listview %}#toc-header-template).
 */
class HeaderTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
HeaderTemplateDirective.ɵfac = function HeaderTemplateDirective_Factory(t) {
  return new (t || HeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
HeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: HeaderTemplateDirective,
  selectors: [["", "kendoListViewHeaderTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewHeaderTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Renders the footer content of the ListView. To define a footer template, nest an `<ng-template>` tag
 * with the `kendoListViewFooterTemplate` directive inside the `<kendo-listview>` tag
 * [see example]({% slug templates_listview %}#toc-footer-template).
 */
class FooterTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
FooterTemplateDirective.ɵfac = function FooterTemplateDirective_Factory(t) {
  return new (t || FooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
FooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FooterTemplateDirective,
  selectors: [["", "kendoListViewFooterTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewFooterTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Overrides the default loader content of the ListView. To define a loader template, nest an `<ng-template>` tag
 * with the `kendoListViewLoaderTemplate` directive inside the `<kendo-listview>` tag
 * [see example]({% slug templates_listview %}#toc-loader-template).
 */
class LoaderTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
LoaderTemplateDirective.ɵfac = function LoaderTemplateDirective_Factory(t) {
  return new (t || LoaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
LoaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LoaderTemplateDirective,
  selectors: [["", "kendoListViewLoaderTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewLoaderTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Represents the edit template of the ListView ([see example]({% slug editing_template_forms_listview %})).
 * Helps to customize the content of the edited items. To define the template, nest an `<ng-template>`
 * tag with the `kendoListViewEditTemplate` directive inside a `<kendo-listview>` tag.
 *
 * The template context contains the following fields:
 * - `formGroup`&mdash;The current [`FormGroup`](link:site.data.urls.angular['formgroupapi']).
 * If you use the ListView inside [Template-Driven Forms](link:site.data.urls.angular['forms']), it will be `undefined`.
 * - `itemIndex`&mdash;The current item index. If inside a new item, `itemIndex` is `-1`.
 * - `dataItem`&mdash;The current data item.
 * - `isNew`&mdash;The state of the current item.
 */
class EditTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
EditTemplateDirective.ɵfac = function EditTemplateDirective_Factory(t) {
  return new (t || EditTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 8));
};
EditTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EditTemplateDirective,
  selectors: [["", "kendoListViewEditTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewEditTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/**
 * @hidden
 */
const isEqual = index => item => item.index === index;
/**
 * @hidden
 */
const isNotEqual = index => item => item.index !== index;
/**
 * @hidden
 */
const isNewItem = index => index === -1 || index === undefined;
/**
 * @hidden
 */
class EditService {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.editedIndices = [];
    this.changedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.changed = this.changedSource.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))));
  }
  editItem(index, group = undefined) {
    this.editedIndices.push({
      index,
      group
    });
    this.onChanged();
  }
  addItem(group) {
    this.newItem = {
      group
    };
    this.onChanged();
  }
  isEditing() {
    return this.editedIndices.length > 0;
  }
  get hasNewItem() {
    return isPresent(this.newItem);
  }
  get newDataItem() {
    if (this.hasNewItem) {
      return this.newItem.group.value;
    }
    return {};
  }
  get newItemGroup() {
    if (this.hasNewItem) {
      return this.newItem.group;
    }
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
  }
  editGroup(index) {
    return this.context(index).group;
  }
  close(index) {
    if (isNewItem(index)) {
      this.newItem = undefined;
      return;
    }
    this.editedIndices = this.editedIndices.filter(isNotEqual(index));
    this.onChanged();
  }
  context(index) {
    if (isNewItem(index)) {
      return this.newItem;
    }
    return this.findByIndex(index);
  }
  isEdited(index) {
    if (isNewItem(index) && isPresent(this.newItem)) {
      return true;
    }
    return isPresent(this.findByIndex(index));
  }
  hasEdited(index) {
    return isPresent(this.context(index));
  }
  beginEdit(itemIndex) {
    this.changes.emit({
      action: 'edit',
      itemIndex
    });
  }
  beginAdd() {
    this.changes.emit({
      action: 'add'
    });
  }
  endEdit(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: 'cancel',
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  save(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: 'save',
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  remove(itemIndex) {
    this.changes.emit({
      action: 'remove',
      itemIndex
    });
  }
  findByIndex(index) {
    return this.editedIndices.find(isEqual(index));
  }
  onChanged() {
    this.ngZone.runOutsideAngular(() => {
      this.changedSource.next();
    });
  }
}
EditService.ɵfac = function EditService_Factory(t) {
  return new (t || EditService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
EditService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: EditService,
  factory: EditService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
const DEFAULT_PAGER_SETTINGS = {
  position: 'bottom',
  buttonCount: 5,
  info: true,
  previousNext: true,
  type: 'numeric',
  pageSizeValues: [5, 10, 20]
};
const createControl = source => (acc, key) => {
  acc[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(source[key]);
  return acc;
};
/**
 * Represents the Kendo UI ListView component for Angular.
 */
class ListViewComponent {
  constructor(ngZone, element, renderer, changeDetectorRef, editService, navigationService) {
    this.ngZone = ngZone;
    this.element = element;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.editService = editService;
    this.navigationService = navigationService;
    /**
     * @hidden
     */
    this.className = true;
    /**
     * Specifies if the loading indicator of the ListView will be displayed
     * ([see example]({% slug paging_listview %}#toc-remote-binding)).
     */
    this.loading = false;
    /**
     * Specifies the content container `role` attribute
     * ([more details]({% slug accessibility_listview %}#toc-wai-aria-support)).
     * By default, the container `role` is set to `list`.
     */
    this.containerRole = 'list';
    /**
     * Specifies the list item `role` attribute
     * ([more details]({% slug accessibility_listview %}#toc-wai-aria-support)).
     * By default, the list item `role` is set to `listitem`.
     */
    this.listItemRole = 'listitem';
    /**
     * Fires when the user scrolls to the last record on the page
     * ([see endless scrolling example]({% slug scrollmodes_listview %}#toc-endless-scrolling)).
     */
    this.scrollBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the page or the page size of the ListView is changed
     * ([see example]({% slug paging_listview %}#toc-remote-binding)).
     * You have to handle the event yourself and page the data.
     */
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the page size of the ListView is changed. This event can be prevented (`$event.preventDefault()`).
     * If not prevented, the `pageChange` event will be fired subsequently.
     */
    this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the user clicks the **Edit** command button to edit an item
     * ([see example]({% slug editing_template_forms_listview %}#toc-editing-records)).
     */
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the user clicks the **Cancel** command button to close an item
     * ([see example]({% slug editing_template_forms_listview %}#toc-cancelling-editing)).
     */
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the user clicks the **Save** command button to save changes in an item
     * ([see example]({% slug editing_template_forms_listview %}#toc-saving-records)).
     */
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the user clicks the **Remove** command button to remove an item
     * ([see example]({% slug editing_template_forms_listview %}#toc-removing-records)).
     */
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the user clicks the **Add** command button to add a new item
     * ([see example]({% slug editing_template_forms_listview %}#toc-adding-records)).
     */
    this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._skip = 0;
    this._navigable = false;
    (0,_progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_6__.validatePackage)(packageMetadata);
    this.attachEditHandlers();
  }
  /**
   * Specifies whether the keyboard navigation is enabled
   * ([see example]({% slug keyboard_navigation_listview %})).
   * By default, the navigation is disabled.
   */
  set navigable(navigable) {
    if (!navigable && isPresent(this.removeNavigationListeners)) {
      this.removeNavigationListeners();
      this.removeNavigationListeners = null;
      this.navigationService.isEnabled = false;
    } else if (navigable && !isPresent(this.removeNavigationListeners)) {
      this.addNavigationListeners();
      this.navigationService.isEnabled = true;
    }
    this._navigable = navigable;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Defines the number of records to be skipped by the pager
   * ([more details]({% slug paging_listview %})).
   */
  set skip(skip) {
    const parsed = parseInt(skip, 10);
    const defaultSkipValue = 0;
    this._skip = !isNaN(parsed) ? parsed : defaultSkipValue;
  }
  get skip() {
    return this._skip;
  }
  /**
   * Configures whether the ListView will render a pager
   * ([more details]({% slug paging_listview %})).
   * Providing a boolean value will render a pager with the default settings.
   */
  set pageable(pageable) {
    this._pageable = pageable;
    this.pagerSettings = pageable ? Object.assign({}, DEFAULT_PAGER_SETTINGS, pageable) : null;
  }
  get pageable() {
    return this._pageable;
  }
  /**
   * @hidden
   *
   * Gets the data items passed to the ListView.
   * If a ListViewDataResult is passed, the data value is used. If an array is passed - it's directly used.
   */
  get items() {
    if (!isPresent(this.data)) {
      return [];
    }
    return Array.isArray(this.data) ? this.data : this.data.data;
  }
  /**
   * @hidden
   *
   * Gets the total number of records passed to the ListView.
   * If a ListViewDataResult is passed, the total value is used. If an array is passed - its length is used.
   */
  get total() {
    if (!this.pageable) {
      return;
    }
    if (!isPresent(this.data)) {
      return 0;
    }
    return Array.isArray(this.data) ? this.data.length : this.data.total;
  }
  /**
   * @hidden
   */
  get containerTabindex() {
    // workaround for FF, where a scrollable container is focusable even without a tabindex and creates an unwanted tab stop
    // https://bugzilla.mozilla.org/show_bug.cgi?id=616594
    return this.navigable ? -1 : null;
  }
  /**
   * Gets the current active item index
   * ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)).
   * Returns `null` when the keyboard navigation is disabled.
   */
  get activeIndex() {
    return this.navigationService.activeIndex;
  }
  ngOnChanges(changes) {
    if ((0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.isChanged)('height', changes, false)) {
      this.renderer.setStyle(this.element.nativeElement, 'height', `${this.height}px`);
    }
  }
  ngOnDestroy() {
    if (isPresent(this.editServiceSubscription)) {
      this.editServiceSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  templateContext(index) {
    return {
      "$implicit": this.items[index],
      "isLast": index === this.items.length - 1,
      "isFirst": index === 0,
      "dataItem": this.items[index],
      "index": index
    };
  }
  /**
   * @hidden
   */
  editTemplateContext(index) {
    const isNew = index === -1;
    const group = isNew ? this.editService.newItemGroup : this.editService.editGroup(index);
    return {
      "$implicit": group,
      "formGroup": group,
      "dataItem": isNew ? this.editService.newDataItem : this.items[index],
      "isNew": isNew,
      "index": index
    };
  }
  /**
   * Focuses the item at the specified index ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)):
   * - If no index is specified, the current active index will be focused.
   * - If the passed value is below `0`, the first item receives focus.
   * - If the passed value is above the last available index, the last item receives focus.
   *
   * > The index param is based on the logical structure of the ListView and does not correspond to the data item index -
   * > i.e. the index `0` corresponds to the first rendered list item. Paging is not taken into account.
   * > Also, for the focusing to work, the `navigable` prop must first be set to `true`.
   */
  focus(index) {
    const totalRenderedItems = this.listViewItems.length;
    this.navigationService.focusIndex(index, totalRenderedItems);
  }
  /**
   * Creates a new item editor ([see example]({% slug editing_template_forms_listview %}#toc-adding-records)).
   *
   * @param {FormGroup} group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi']) that describes
   * the edit form. If called with a data item, it will build the `FormGroup` from the data item fields.
   */
  addItem(group) {
    const isFormGroup = group instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup;
    if (!isFormGroup) {
      const fields = Object.keys(group).reduce(createControl(group), {});
      group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup(fields);
    }
    this.editService.addItem(group);
  }
  /**
   * Switches the specified item to edit mode ([see example]({% slug editing_template_forms_listview %}#toc-editing-records)).
   *
   * @param index - The item index that will be switched to edit mode.
   * @param group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi'])
   * that describes the edit form.
   */
  editItem(index, group) {
    this.editService.editItem(index, group);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * Closes the editor for a given item ([see example]({% slug editing_template_forms_listview %}#toc-cancelling-editing)).
   *
   * @param {number} index - The item index that will be switched out of the edit mode. If no index is provided, it is assumed
   * that the new item editor will be closed.
   */
  closeItem(index) {
    this.editService.close(index);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * @hidden
   */
  isEdited(index) {
    return this.editService.isEdited(index);
  }
  /**
   * @hidden
   */
  handlePageChange(event) {
    this.scrollToContainerTop();
    const firstIndex = 0;
    this.navigationService.setActiveIndex(firstIndex);
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  handleContentScroll() {
    if (!(0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.hasObservers)(this.scrollBottom)) {
      return;
    }
    const THRESHOLD = 2;
    const {
      scrollHeight,
      scrollTop,
      clientHeight
    } = this.contentContainer.nativeElement;
    const atBottom = scrollHeight - clientHeight - scrollTop <= THRESHOLD;
    if (atBottom) {
      this.ngZone.run(() => {
        const event = {
          sender: this
        };
        this.scrollBottom.emit(event);
      });
    }
  }
  /**
   * @hidden
   */
  itemPosInSet(index) {
    if (!this.pageable) {
      return;
    }
    // adds 1 as the aria-posinset is not zero-based and the counting starts from 1
    return this.skip + index + 1;
  }
  scrollToContainerTop() {
    const container = this.contentContainer.nativeElement;
    container.scrollTop = 0;
    container.scrollLeft = 0;
  }
  addNavigationListeners() {
    this.ngZone.runOutsideAngular(() => {
      const removeKeydownListener = this.renderer.listen(this.contentContainer.nativeElement, 'keydown', event => this.navigationService.handleKeyDown(event, this.listViewItems.length));
      const removeFocusInListener = this.renderer.listen(this.contentContainer.nativeElement, 'focusin', event => this.navigationService.handleFocusIn(event));
      const removeFocusOutListener = this.renderer.listen(this.contentContainer.nativeElement, 'focusout', event => this.navigationService.handleFocusOut(event));
      this.removeNavigationListeners = () => {
        removeKeydownListener();
        removeFocusInListener();
        removeFocusOutListener();
      };
    });
  }
  attachEditHandlers() {
    if (!isPresent(this.editService)) {
      return;
    }
    this.editServiceSubscription = this.editService.changes.subscribe(this.emitCRUDEvent.bind(this));
  }
  emitCRUDEvent(args) {
    const {
      action,
      itemIndex,
      formGroup
    } = args;
    let dataItem = this.items[itemIndex];
    if (action !== 'add' && formGroup) {
      dataItem = formGroup.value;
    }
    Object.assign(args, {
      dataItem: dataItem,
      sender: this
    });
    this[action].emit(args);
  }
}
ListViewComponent.ɵfac = function ListViewComponent_Factory(t) {
  return new (t || ListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService));
};
ListViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ListViewComponent,
  selectors: [["kendo-listview"]],
  contentQueries: function ListViewComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ItemTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HeaderTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, FooterTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, LoaderTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, EditTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loaderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editTemplate = _t.first);
    }
  },
  viewQuery: function ListViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ListViewNavigableItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewItems = _t);
    }
  },
  hostVars: 6,
  hostBindings: function ListViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-listview", ctx.className)("k-listview-bordered", ctx.className)("k-d-flex", ctx.className);
    }
  },
  inputs: {
    data: "data",
    loading: "loading",
    containerStyle: "containerStyle",
    itemStyle: "itemStyle",
    containerClass: "containerClass",
    itemClass: "itemClass",
    containerLabel: "containerLabel",
    containerRole: "containerRole",
    listItemRole: "listItemRole",
    navigable: "navigable",
    pageSize: "pageSize",
    skip: "skip",
    pageable: "pageable",
    height: "height"
  },
  outputs: {
    scrollBottom: "scrollBottom",
    pageChange: "pageChange",
    pageSizeChange: "pageSizeChange",
    edit: "edit",
    cancel: "cancel",
    save: "save",
    remove: "remove",
    add: "add"
  },
  exportAs: ["kendoListView"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EditService, NavigationService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService, {
    provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.L10N_PREFIX,
    useValue: 'kendo.listview'
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 12,
  vars: 17,
  consts: [[4, "ngIf"], ["class", "k-listview-header", 4, "ngIf"], [1, "k-listview-content", 3, "ngClass", "ngStyle", "kendoEventsOutsideAngular", "scope"], ["contentContainer", ""], ["class", "k-listview-item", "kendoListViewNavigableItem", "", 3, "index", "ngClass", "ngStyle", 4, "ngIf"], ["class", "k-listview-item", "kendoListViewNavigableItem", "", 3, "index", "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "k-loading-mask", 4, "ngIf"], ["class", "k-listview-footer", 4, "ngIf"], ["pagerTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-listview-header"], [3, "ngTemplateOutlet"], ["kendoListViewNavigableItem", "", 1, "k-listview-item", 3, "index", "ngClass", "ngStyle"], [1, "k-loading-mask"], [1, "k-loading-text"], [1, "k-loading-image"], [1, "k-loading-color"], [1, "k-listview-footer"], [3, "class", "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues", "pageChange", "pageSizeChange", 4, "ngIf"], [3, "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues", "pageChange", "pageSizeChange"]],
  template: function ListViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_0_Template, 1, 3, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListViewComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListViewComponent_div_4_Template, 2, 6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListViewComponent_div_5_Template, 2, 9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListViewComponent_div_6_Template, 5, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListViewComponent_7_Template, 1, 1, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListViewComponent_div_8_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListViewComponent_9_Template, 1, 3, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListViewComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.containerStyle)("kendoEventsOutsideAngular", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.handleContentScroll))("scope", ctx);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.containerTabindex)("role", ctx.containerRole)("aria-label", ctx.containerLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editService.hasNewItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loaderTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.loaderTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "top");
    }
  },
  dependencies: [_progress_kendo_angular_pager__WEBPACK_IMPORTED_MODULE_8__.PagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.EventsOutsideAngularDirective, ListViewNavigableItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      exportAs: 'kendoListView',
      selector: 'kendo-listview',
      providers: [EditService, NavigationService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService, {
        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.L10N_PREFIX,
        useValue: 'kendo.listview'
      }],
      template: `
        <!-- top pager -->
        <ng-template
            *ngIf="pagerSettings?.position !== 'bottom'"
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager k-listview-pager-top' }"
        >
        </ng-template>

        <!-- header -->
        <div
            *ngIf="headerTemplate"
            class="k-listview-header"
        >
            <ng-template
                [ngTemplateOutlet]="headerTemplate?.templateRef"
            >
            </ng-template>
        </div>

        <!-- content -->
        <div
            #contentContainer
            [attr.tabindex]="containerTabindex"
            class="k-listview-content"
            [ngClass]="containerClass"
            [ngStyle]="containerStyle"
            [kendoEventsOutsideAngular]="{
                scroll: handleContentScroll
            }"
            [scope]="this"
            [attr.role]="containerRole"
            [attr.aria-label]="containerLabel"
        >
            <!-- new item edit template -->
            <div
                *ngIf="editService.hasNewItem"
                class="k-listview-item"
                [attr.role]="listItemRole"
                kendoListViewNavigableItem
                [index]="-1"
                [attr.data-kendo-listview-item-index]="-1"
                [ngClass]="itemClass"
                [ngStyle]="itemStyle"
            >
                <ng-template
                    *ngIf="editTemplate"
                    [ngTemplateOutlet]="editTemplate?.templateRef"
                    [ngTemplateOutletContext]="editTemplateContext(-1)"
                >
                </ng-template>
            </div>

            <!-- items -->
            <div
                *ngFor="let dataItem of items; let index = index; let first = first; let last = last;"
                class="k-listview-item"
                [attr.role]="listItemRole"
                [attr.aria-posinset]="itemPosInSet(index)"
                [attr.aria-setsize]="total"
                kendoListViewNavigableItem
                [index]="index"
                [attr.data-kendo-listview-item-index]="index"
                [ngClass]="itemClass"
                [ngStyle]="itemStyle"
            >
                <ng-template
                    [ngTemplateOutlet]="isEdited(index) ? editTemplate?.templateRef : itemTemplate?.templateRef"
                    [ngTemplateOutletContext]="isEdited(index) ? editTemplateContext(index) : templateContext(index)"
                >
                </ng-template>
            </div>

            <!-- loading indicator -->
            <div
                *ngIf="loading && !loaderTemplate"
                class="k-loading-mask"
            >
                <!-- TODO: the k-loading-text is hidden with css but read by readers - review when implementing accessibility + possible localization case -->
                <span class="k-loading-text">Loading</span>
                <div class="k-loading-image"></div>
                <div class="k-loading-color"></div>
            </div>
            <ng-template
                *ngIf="loading && loaderTemplate"
                [ngTemplateOutlet]="loaderTemplate.templateRef"
            >
            </ng-template>
        </div>

        <!-- footer -->
        <div
            *ngIf="footerTemplate"
            class="k-listview-footer"
        >
            <ng-template
                [ngTemplateOutlet]="footerTemplate?.templateRef"
            >
            </ng-template>
        </div>

        <!-- bottom pager -->
        <ng-template
            *ngIf="pagerSettings?.position !== 'top'"
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager' }"
        >
        </ng-template>

        <!-- pager template -->
        <ng-template #pagerTemplate let-pagerClass="pagerClass">
            <kendo-datapager
                *ngIf="pageable"
                [class]="pagerClass"
                [total]="total"
                [pageSize]="pageSize"
                [skip]="skip"
                [buttonCount]="pagerSettings.buttonCount"
                [info]="pagerSettings.info"
                [previousNext]="pagerSettings.previousNext"
                [type]="pagerSettings.type"
                [pageSizeValues]="pagerSettings.pageSizeValues"
                (pageChange)="handlePageChange($event)"
                (pageSizeChange)="pageSizeChange.emit($event)"
            >
            </kendo-datapager>
        </ng-template>
    `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: EditService
    }, {
      type: NavigationService
    }];
  }, {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.k-listview']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.k-listview-bordered']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.k-d-flex']
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    loaderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [LoaderTemplateDirective, {
        static: false
      }]
    }],
    contentContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentContainer', {
        static: true
      }]
    }],
    editTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [EditTemplateDirective, {
        static: false
      }]
    }],
    listViewItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [ListViewNavigableItemDirective]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listItemRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollBottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    edit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    save: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    remove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    add: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * A directive that encapsulates the in-memory handling of paging
 * ([see example]({% slug paging_listview %}#toc-binding-directive)).
 */
class DataBindingDirective {
  constructor(listView) {
    this.listView = listView;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
  }
  /**
   * The array of data which will be used to populate the ListView.
   */
  set data(data) {
    this._data = data || [];
    this.updateListViewData();
  }
  get data() {
    return this._data;
  }
  ngOnInit() {
    this.subscriptions.add(this.listView.pageChange.subscribe(this.handlePageChange.bind(this)));
    this.subscriptions.add(this.listView.pageSizeChange.subscribe(this.handlePageSizeChange.bind(this)));
    this.updateListViewData();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handlePageChange(event) {
    this.listView.skip = event.skip;
    this.listView.pageSize = event.take;
    this.updateListViewData();
  }
  handlePageSizeChange(event) {
    this.listView.pageSize = Number(event.newPageSize);
  }
  updateListViewData() {
    const from = this.listView.skip || 0;
    const to = from + (this.listView.pageSize || this.data.length);
    this.listView.data = {
      data: this.data.slice(from, to),
      total: this.data.length
    };
  }
}
DataBindingDirective.ɵfac = function DataBindingDirective_Factory(t) {
  return new (t || DataBindingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ListViewComponent));
};
DataBindingDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataBindingDirective,
  selectors: [["", "kendoListViewBinding", ""]],
  inputs: {
    data: ["kendoListViewBinding", "data"]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataBindingDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoListViewBinding]'
    }]
  }], function () {
    return [{
      type: ListViewComponent
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['kendoListViewBinding']
    }]
  });
})();

/**
 * The arguments of the [`pageSizeChange`]({% slug api_listview_listviewcomponent %}#toc-pagesizechange) event of the ListView
 * ([more details]({% slug paging_listview %}).
 */
class PageSizeChangeEvent extends _progress_kendo_angular_pager__WEBPACK_IMPORTED_MODULE_8__.PageSizeChangeEvent {}

/**
 * Represents the `edit` command of the ListView. You can apply this directive to any `button`
 * element inside a [`EditTemplateDirective`]({% slug api_listview_edittemplatedirective %}) template.
 * When an associated button with the directive is clicked, the
 * [`edit`]({% slug api_listview_listviewcomponent %}#toc-edit) event
 * is triggered ([see example]({% slug editing_listview %})).
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate>
 *     <button kendoListViewEditCommand class="k-primary">Edit</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 *
 */
class EditCommandDirective extends _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.Button {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.beginEdit(index);
  }
}
EditCommandDirective.ɵfac = function EditCommandDirective_Factory(t) {
  return new (t || EditCommandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
EditCommandDirective.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditCommandDirective,
  selectors: [["", "kendoListViewEditCommand", ""]],
  hostBindings: function EditCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c4,
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function EditCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCommandDirective_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditCommandDirective_span_2_Template, 1, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon || ctx.svgIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass);
    }
  },
  dependencies: [_progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCommandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[kendoListViewEditCommand]',
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function () {
    return [{
      type: EditService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    clickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * Represents the command for adding a new item to the ListView. You can apply this directive to any
 * `button` element inside a [`HeaderTemplate`]({% slug api_listview_headertemplatedirective %}).
 * When an associated button with the directive is clicked, the
 * [`add`]({% slug api_listview_listviewcomponent %}#toc-add) event is triggered
 * ([see example]({% slug editing_listview %})).
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *    <ng-template kendoListViewHeaderTemplate>
 *       <button kendoListViewAddCommand>Add new</button>
 *    </ng-template>
 * </kendo-listview>
 * ```
 */
class AddCommandDirective extends _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.Button {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    this.editService.beginAdd();
  }
}
AddCommandDirective.ɵfac = function AddCommandDirective_Factory(t) {
  return new (t || AddCommandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
AddCommandDirective.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddCommandDirective,
  selectors: [["", "kendoListViewAddCommand", ""]],
  hostBindings: function AddCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c6,
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function AddCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCommandDirective_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddCommandDirective_span_2_Template, 1, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon || ctx.svgIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass);
    }
  },
  dependencies: [_progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[kendoListViewAddCommand]',
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function () {
    return [{
      type: EditService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    clickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * Represents the `save` command of the ListView. You can apply this directive to any `button`
 * element inside a [`EditTemplateDirective`]({% slug api_listview_edittemplatedirective %}) template.
 * When an associated button with the directive is clicked, the
 * [`save`]({% slug api_listview_listviewcomponent %}#toc-save) event
 * is triggered ([see example]({% slug editing_listview %})).
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate>
 *     <button kendoListViewSaveCommand>Save changes</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 *
 * You can control the content of the button based on the state of the item.
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate let-isNew="isNew">
 *     <button kendoListViewSaveCommand>{{isNew ? 'Add' : 'Update'}}</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 */
class SaveCommandDirective extends _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.Button {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.save(index);
    }
  }
}
SaveCommandDirective.ɵfac = function SaveCommandDirective_Factory(t) {
  return new (t || SaveCommandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
SaveCommandDirective.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SaveCommandDirective,
  selectors: [["", "kendoListViewSaveCommand", ""]],
  hostBindings: function SaveCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c7,
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function SaveCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SaveCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaveCommandDirective_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SaveCommandDirective_span_2_Template, 1, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon || ctx.svgIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass);
    }
  },
  dependencies: [_progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveCommandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[kendoListViewSaveCommand]',
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function () {
    return [{
      type: EditService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    clickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * Represents the `cancel` command of the ListView. You can apply this directive to any `button`
 * element inside a [`EditTemplateDirective`]({% slug api_listview_edittemplatedirective %}) template.
 * When an associated button with the directive is clicked, the
 * [`cancel`]({% slug api_listview_listviewcomponent %}#toc-cancel) event
 * is triggered ([see example]({% slug editing_listview %})).
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate>
 *     <button kendoListViewCancelCommand>Cancel changes</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 *
 * You can control the content of the button based on the state of the item.
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate let-isNew="isNew">
 *     <button kendoListViewCancelCommand>{{isNew ? 'Discard' : 'Cancel changes'}}</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 */
class CancelCommandDirective extends _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.Button {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.endEdit(index);
    }
  }
}
CancelCommandDirective.ɵfac = function CancelCommandDirective_Factory(t) {
  return new (t || CancelCommandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CancelCommandDirective.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CancelCommandDirective,
  selectors: [["", "kendoListViewCancelCommand", ""]],
  hostBindings: function CancelCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c8,
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function CancelCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CancelCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CancelCommandDirective_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CancelCommandDirective_span_2_Template, 1, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon || ctx.svgIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass);
    }
  },
  dependencies: [_progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelCommandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[kendoListViewCancelCommand]',
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function () {
    return [{
      type: EditService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    clickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * Represents the `remove` command of the ListView. You can apply this directive to any `button` element
 * inside a [`EditTemplateDirective`]({% slug api_listview_edittemplatedirective %}) template.
 * When an associated button with the directive is clicked, the
 * [`remove` event]({% slug api_listview_listviewcomponent %}#toc-remove)
 * is triggered ([see example]({% slug editing_listview %})).
 *
 * @example
 * ```html-no-run
 * <kendo-listview>
 *   <ng-template kendoListViewEditTemplate>
 *     <button kendoListViewRemoveCommand>Remove item</button>
 *   </ng-template>
 * </kendo-listview>
 * ```
 */
class RemoveCommandDirective extends _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.Button {
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.remove(index);
  }
}
RemoveCommandDirective.ɵfac = function RemoveCommandDirective_Factory(t) {
  return new (t || RemoveCommandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
RemoveCommandDirective.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RemoveCommandDirective,
  selectors: [["", "kendoListViewRemoveCommand", ""]],
  hostBindings: function RemoveCommandDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveCommandDirective_click_HostBindingHandler($event) {
        return ctx.clickHandler($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c9,
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function RemoveCommandDirective_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemoveCommandDirective_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemoveCommandDirective_span_1_Template, 2, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoveCommandDirective_span_2_Template, 1, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon || ctx.svgIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass);
    }
  },
  dependencies: [_progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveCommandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[kendoListViewRemoveCommand]',
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function () {
    return [{
      type: EditService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_7__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    clickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * @hidden
 */
class TemplateContextDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  set templateContext(context) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = undefined;
    }
    if (context.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
    }
  }
}
TemplateContextDirective.ɵfac = function TemplateContextDirective_Factory(t) {
  return new (t || TemplateContextDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
TemplateContextDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TemplateContextDirective,
  selectors: [["", "templateContext", ""]],
  inputs: {
    templateContext: "templateContext"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateContextDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[templateContext]' // eslint-disable-line
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    templateContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const TEMPLATE_DIRECTIVES = [ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective];
const BINDING_DIRECTIVES = [DataBindingDirective];
const EDITING_DIRECTIVES = [EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective];
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the ListView component.
 * @example
 *
 * ```ts
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { NgModule } from '@angular/core';
 * import { ListViewModule } from '@progress/kendo-angular-listview';
 * import { AppComponent } from './app.component';
 *
 * @NgModule({
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, BrowserAnimationsModule, ListViewModule],
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *```
 */
class ListViewModule {}
ListViewModule.ɵfac = function ListViewModule_Factory(t) {
  return new (t || ListViewModule)();
};
ListViewModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ListViewModule
});
ListViewModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _progress_kendo_angular_pager__WEBPACK_IMPORTED_MODULE_8__.PagerModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.EventsModule, _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconsModule], _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.EventsModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListViewModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [TEMPLATE_DIRECTIVES, BINDING_DIRECTIVES, EDITING_DIRECTIVES, ListViewComponent, TemplateContextDirective, ListViewNavigableItemDirective],
      exports: [TEMPLATE_DIRECTIVES, BINDING_DIRECTIVES, EDITING_DIRECTIVES, ListViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.EventsModule],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _progress_kendo_angular_pager__WEBPACK_IMPORTED_MODULE_8__.PagerModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_1__.EventsModule, _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_12__.IconsModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 51674:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-angular-pager/fesm2020/progress-kendo-angular-pager.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMessagesComponent: () => (/* binding */ CustomMessagesComponent),
/* harmony export */   LocalizedMessagesDirective: () => (/* binding */ LocalizedMessagesDirective),
/* harmony export */   PageSizeChangeEvent: () => (/* binding */ PageSizeChangeEvent),
/* harmony export */   PagerComponent: () => (/* binding */ PagerComponent),
/* harmony export */   PagerFocusableDirective: () => (/* binding */ PagerFocusableDirective),
/* harmony export */   PagerInfoComponent: () => (/* binding */ PagerInfoComponent),
/* harmony export */   PagerInputComponent: () => (/* binding */ PagerInputComponent),
/* harmony export */   PagerModule: () => (/* binding */ PagerModule),
/* harmony export */   PagerNextButtonsComponent: () => (/* binding */ PagerNextButtonsComponent),
/* harmony export */   PagerNumericButtonsComponent: () => (/* binding */ PagerNumericButtonsComponent),
/* harmony export */   PagerPageSizesComponent: () => (/* binding */ PagerPageSizesComponent),
/* harmony export */   PagerPrevButtonsComponent: () => (/* binding */ PagerPrevButtonsComponent),
/* harmony export */   PagerTemplateDirective: () => (/* binding */ PagerTemplateDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-l10n */ 17534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-svg-icons */ 5108);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ 28277);
/* harmony import */ var _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-common */ 20305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-licensing */ 99307);
/**-----------------------------------------------------------------------------------------
* Copyright © 2023 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/


















/**
 * @hidden
 */
const _c0 = ["dropdownlist"];
const _c1 = ["select"];
const _c2 = ["numbers"];
function PagerNumericButtonsComponent_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.pageLabel(ctx_r1.start - 1));
  }
}
const _c3 = function (a0) {
  return {
    "k-selected": a0
  };
};
function PagerNumericButtonsComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", num_r8.toString())("selected", num_r8 === ctx_r2.currentPage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx_r2.currentPage === num_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.pageLabel(num_r8))("aria-current", ctx_r2.currentPage === num_r8 ? "page" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r8, " ");
  }
}
function PagerNumericButtonsComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.pageLabel(ctx_r3.end + 1));
  }
}
function PagerNumericButtonsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerNumericButtonsComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.changePage(ctx_r9.start - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r5.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.pageLabel(ctx_r5.start - 1))("title", ctx_r5.pageLabel(ctx_r5.start - 1));
  }
}
function PagerNumericButtonsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerNumericButtonsComponent_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const num_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.changePage(num_r11 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r6.size)("selected", ctx_r6.currentPage === num_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.pageLabel(num_r11))("title", ctx_r6.pageLabel(num_r11))("aria-current", ctx_r6.currentPage === num_r11 ? "page" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r11, " ");
  }
}
function PagerNumericButtonsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerNumericButtonsComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.changePage(ctx_r14.end));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r7.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r7.pageLabel(ctx_r7.end + 1))("title", ctx_r7.pageLabel(ctx_r7.end + 1));
  }
}
const _c4 = function () {
  return {
    "k-pager-input": true,
    "k-label": true
  };
};
const _c5 = function (a0, a1) {
  return {
    keydown: a0,
    focusout: a1
  };
};
function PagerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template.first == null ? null : ctx_r0.template.first.templateRef)("ngTemplateOutletContext", ctx_r0.templateContext);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_prev_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-prev-buttons", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r2.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_numeric_buttons_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-numeric-buttons", 9);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r3.size)("buttonCount", ctx_r3.buttonCount);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-input", 8);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r4.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_next_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-next-buttons", 8);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r5.size);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_page_sizes_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-page-sizes", 10);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r6.size)("pageSizes", ctx_r6.pageSizeValues);
  }
}
function PagerComponent_ng_container_2_kendo_datapager_info_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-datapager-info");
  }
}
function PagerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagerComponent_ng_container_2_kendo_datapager_prev_buttons_2_Template, 1, 1, "kendo-datapager-prev-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagerComponent_ng_container_2_kendo_datapager_numeric_buttons_3_Template, 1, 2, "kendo-datapager-numeric-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PagerComponent_ng_container_2_kendo_datapager_input_4_Template, 1, 1, "kendo-datapager-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PagerComponent_ng_container_2_kendo_datapager_next_buttons_5_Template, 1, 1, "kendo-datapager-next-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PagerComponent_ng_container_2_kendo_datapager_page_sizes_6_Template, 1, 2, "kendo-datapager-page-sizes", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagerComponent_ng_container_2_kendo_datapager_info_7_Template, 1, 0, "kendo-datapager-info", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "numeric" && ctx_r1.buttonCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pageSizeValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.info);
  }
}
class PreventableEvent {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
}

/**
 * Arguments for the `pageSizeChange` event. The `pageSizeChange` event fires when the page size
 * is changed from the UI. If you cancel the event, the change is prevented.
 */
class PageSizeChangeEvent extends PreventableEvent {
  /**
   * Constructs the event arguments for the `pageSizeChange` event.
   * @param newPageSize - The newly selected page size.
   * @hidden
   */
  constructor(newPageSize) {
    super();
    this.newPageSize = newPageSize;
  }
}

/**
 * @hidden
 */
class Messages extends _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.ComponentMessages {}
Messages.ɵfac = /* @__PURE__ */function () {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(t) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](Messages)))(t || Messages);
  };
}();
Messages.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Messages,
  selectors: [["kendoPagerMessages"]],
  inputs: {
    firstPage: "firstPage",
    lastPage: "lastPage",
    previousPage: "previousPage",
    nextPage: "nextPage",
    page: "page",
    pageNumberInputTitle: "pageNumberInputTitle",
    itemsPerPage: "itemsPerPage",
    of: "of",
    items: "items",
    selectPage: "selectPage",
    inputLabel: "inputLabel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Messages, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'kendoPagerMessages'
    }]
  }], null, {
    firstPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lastPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageNumberInputTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemsPerPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    of: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Custom component messages override default component messages
 * ([see example]({% slug pager_globalization %}#toc-messages)).
 */
class CustomMessagesComponent extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
}
CustomMessagesComponent.ɵfac = function CustomMessagesComponent_Factory(t) {
  return new (t || CustomMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService));
};
CustomMessagesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomMessagesComponent,
  selectors: [["kendo-datapager-messages"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Messages,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CustomMessagesComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function CustomMessagesComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomMessagesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CustomMessagesComponent)
      }],
      selector: 'kendo-datapager-messages',
      template: ``
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }];
  }, null);
})();

/**
 * @hidden
 */
class LocalizedMessagesDirective extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
}
LocalizedMessagesDirective.ɵfac = function LocalizedMessagesDirective_Factory(t) {
  return new (t || LocalizedMessagesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService));
};
LocalizedMessagesDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LocalizedMessagesDirective,
  selectors: [["", "kendoDataPagerLocalizedMessages", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Messages,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => LocalizedMessagesDirective)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizedMessagesDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => LocalizedMessagesDirective)
      }],
      selector: '[kendoDataPagerLocalizedMessages]'
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }];
  }, null);
})();

/**
 * @hidden
 */
class PagerContextService {
  constructor() {
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.pageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.pageSizeChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  get currentPage() {
    return this.skip / this.pageSize;
  }
  notifyChanges(changes) {
    this.total = changes.total;
    this.pageSize = changes.pageSize;
    this.skip = changes.skip;
    this.changes.next(changes);
  }
  changePage(page) {
    this.pageChange.next({
      skip: page * this.pageSize,
      take: this.pageSize
    });
  }
  changePageSize(event) {
    this.pageSizeChange.next(event);
  }
  nextPage() {
    const nextPage = this.currentPage + 1;
    if (nextPage * this.pageSize <= this.total) {
      this.changePage(nextPage);
    }
  }
  prevPage() {
    const prevPage = this.currentPage - 1;
    if (prevPage * this.pageSize >= 0) {
      this.changePage(prevPage);
    }
  }
}

/**
 * @hidden
 */
class PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    this.localization = localization;
    this.pagerContext = pagerContext;
    this.cd = cd;
    this.total = this.pagerContext.total;
    this.skip = this.pagerContext.skip;
    this.pageSize = this.pagerContext.pageSize;
    this.caretAltLeftIcon = _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltLeftIcon;
    this.caretAltToLeftIcon = _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltToLeftIcon;
    this.caretAltRightIcon = _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltRightIcon;
    this.caretAltToRightIcon = _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltToRightIcon;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  /**
   * @hidden
   *
   * @param {string} key
   * @returns {string}
   *
   * @memberOf PagerElementComponent
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   *
   * @param {number} page
   *
   * @memberOf PagerElementComponent
   */
  changePage(page) {
    this.pagerContext.changePage(page);
    return false;
  }
  /**
   * @hidden
   *
   * @memberOf PagerElementComponent
   */
  ngOnInit() {
    this.subscriptions = this.pagerContext.changes.subscribe(this.onChanges.bind(this));
    this.subscriptions.add(this.localization.changes.subscribe(() => this.cd.markForCheck()));
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  get prevArrowIcons() {
    return !this.localization.rtl ? ['caret-alt-to-left', 'caret-alt-left'] : ['caret-alt-to-right', 'caret-alt-right'];
  }
  get prevArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltToLeftIcon, this.caretAltLeftIcon] : [this.caretAltToRightIcon, this.caretAltRightIcon];
  }
  get nextArrowIcons() {
    return !this.localization.rtl ? ['caret-alt-right', 'caret-alt-to-right'] : ['caret-alt-left', 'caret-alt-to-left'];
  }
  get nextArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltRightIcon, this.caretAltToRightIcon] : [this.caretAltLeftIcon, this.caretAltToLeftIcon];
  }
}
PagerElementComponent.ɵfac = function PagerElementComponent_Factory(t) {
  return new (t || PagerElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PagerElementComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerElementComponent,
  selectors: [["kendo-pager-element"]],
  decls: 0,
  vars: 0,
  template: function PagerElementComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerElementComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'kendo-pager-element',
      template: ``
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();

/**
 * @hidden
 */
const DEFAULT_PAGE_SIZE_VALUES = [5, 10, 20];
/**
 * @hidden
 */
const focusableDirectiveSelector = '[kendoPagerFocusable]';
/**
 * @hidden
 */
const getAllFocusableChildren = parent => {
  return parent.querySelectorAll(focusableDirectiveSelector);
};
/**
 * @hidden
 */
const focusableSelector = ['a[href]:not([disabled])', 'area[href]:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button', 'iframe:not([disabled])', 'object:not([disabled])', 'embed:not([disabled])', '*[tabindex]:not([disabled])', '*[contenteditable]:not([disabled]):not([contenteditable="false"])'].join(',');
/**
 * @hidden
 */
const DEFAULT_SIZE = 'medium';
const SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg'
};
/**
 * @hidden
 *
 * Returns the styling classes to be added and removed
 */
const getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case 'size':
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== 'none' ? `k-${componentType}-${SIZES[newValue]}` : ''
      };
    default:
      break;
  }
};

/**
 * @hidden
 */
class PagerNavigationService {
  constructor() {
    this.isNavigable = false;
    this.innerNavigationChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  toggleInnerNavigation(value) {
    this.innerNavigationChange.next(value);
  }
  keepFocusWithinComponent(wrapper, target, event) {
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  getFirstAndLastFocusable(wrapper) {
    const all = getAllFocusableChildren(wrapper);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
}

/**
 * Place the directive on custom focusable elements in the [`kendoDataPagerTemplate`]({% slug api_pager_pagertemplatedirective %}) to include them in the built-in Pager keyboard navigation.
 */
class PagerFocusableDirective {
  constructor(navigationService, element, renderer) {
    this.navigationService = navigationService;
    this.element = element;
    this.renderer = renderer;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  innerNavigationChange(value) {
    if (!this.navigationService.isNavigable) {
      return;
    }
    const index = value ? '0' : '-1';
    if (this.nativeElement.matches(focusableSelector)) {
      this.renderer.setAttribute(this.nativeElement, 'tabindex', index);
    }
    const focusableElements = this.nativeElement.querySelectorAll(focusableSelector);
    focusableElements.forEach(el => {
      this.renderer.setAttribute(el, 'tabindex', index);
    });
  }
}
PagerFocusableDirective.ɵfac = function PagerFocusableDirective_Factory(t) {
  return new (t || PagerFocusableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerNavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
PagerFocusableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PagerFocusableDirective,
  selectors: [["", "kendoPagerFocusable", ""]],
  exportAs: ["kendoPagerFocusable"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerFocusableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoPagerFocusable]',
      exportAs: 'kendoPagerFocusable'
    }]
  }], function () {
    return [{
      type: PagerNavigationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, null);
})();

// eslint-disable no-access-missing-member
/**
 * Displays buttons for navigating to the first and to the previous page ([see example]({% slug pager_settings %})).
 */
class PagerPrevButtonsComponent extends PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
    /**
     * Specifies the padding of the buttons.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    this.size = DEFAULT_SIZE;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerPrevButtonsComponent
   */
  get disabled() {
    return this.currentPage === 1 || !this.total;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
}
PagerPrevButtonsComponent.ɵfac = function PagerPrevButtonsComponent_Factory(t) {
  return new (t || PagerPrevButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PagerPrevButtonsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerPrevButtonsComponent,
  selectors: [["kendo-datapager-prev-buttons"]],
  inputs: {
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 12,
  consts: [["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-first", 3, "disabled", "icon", "svgIcon", "size", "title", "click"], ["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "disabled", "icon", "svgIcon", "size", "title", "click"]],
  template: function PagerPrevButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerPrevButtonsComponent_Template_button_click_0_listener() {
        return ctx.currentPage !== 1 ? ctx.changePage(0) : false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerPrevButtonsComponent_Template_button_click_1_listener() {
        return ctx.currentPage !== 1 ? ctx.changePage(ctx.currentPage - 2) : false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("icon", ctx.prevArrowIcons[0])("svgIcon", ctx.prevArrowSVGIcons[0])("size", ctx.size)("title", ctx.textFor("firstPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.textFor("firstPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("icon", ctx.prevArrowIcons[1])("svgIcon", ctx.prevArrowSVGIcons[1])("size", ctx.size)("title", ctx.textFor("previousPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.textFor("previousPage"));
    }
  },
  dependencies: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerPrevButtonsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-datapager-prev-buttons',
      template: `
        <button
            type="button" kendoButton kendoPagerFocusable
            class="k-pager-nav k-pager-first"
            [disabled]="disabled"
            [icon]="prevArrowIcons[0]"
            [svgIcon]="prevArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('firstPage')"
            [attr.aria-label]="textFor('firstPage')"
            (click)="currentPage !== 1 ? changePage(0) : false">
        </button>
        <button
            type="button" kendoButton kendoPagerFocusable
            class="k-pager-nav"
            [disabled]="disabled"
            [icon]="prevArrowIcons[1]"
            [svgIcon]="prevArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('previousPage')"
            [attr.aria-label]="textFor('previousPage')"
            (click)="currentPage !== 1 ? changePage(currentPage-2) : false">
        </button>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Displays a drop-down list for the page size selection ([see example]({% slug pager_settings %})).
 */
class PagerPageSizesComponent extends PagerElementComponent {
  constructor(localization, cd, pagerContext, element, ngZone) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.element = element;
    this.ngZone = ngZone;
    /**
     * Specifies the padding of the dropdown.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    this.size = DEFAULT_SIZE;
    this._pageSizes = [];
  }
  /**
   * The page sizes collection. Can contain numbers and [PageSizeItem]({% slug api_pager_pagesizeitem %}) objects.
   *
   * @example
   *
   * ```ts-preview
   * _@Component({
   *    selector: 'my-app',
   *    template: `
   *        <div *ngFor="let item of pagedData" style="border: 1px solid black; padding: 10px;">
   *            <span>{{item.ProductID}}. </span>
   *            <span>{{item.ProductName}}</span>
   *        </div>
   *        <kendo-datapager
   *             [skip]="skip"
   *             [pageSize]="pageSize"
   *             [total]="total"
   *             (pageChange)="onPageChange($event)">
   *           <ng-template kendoDataPagerTemplate>
   *               <kendo-datapager-page-sizes [pageSizes]="pagesizes"></kendo-datapager-page-sizes>
   *           </ng-template>
   *        </kendo-datapager>
   *    `
   * })
   * class AppComponent {
   *    public data: any[] = products;
   *    public pagedData = [];
   *    public skip = 0;
   *    public pageSize = 2;
   *    public total = products.length;
   *    public pagesizes = [{text: 'One', value: 1}, {text: 'Two', value: 2}, {text: 'All', value : 'all'}];
   *
   *    public ngOnInit() {
   *        this.pageData();
   *    }
   *
   *    public onPageChange(e) {
   *        this.skip = e.skip;
   *        this.pageSize = e.take;
   *        this.pageData();
   *    }
   *
   *    private pageData() {
   *        this.pagedData = this.data.slice(this.skip, this.skip + this.pageSize);
   *    }
   * }
   *
   * const products = [{
   *   'ProductID' : 1,
   *   'ProductName' : "Chai",
   *   'SupplierID' : 1,
   *   'CategoryID' : 1,
   *   'QuantityPerUnit' : "10 boxes x 20 bags",
   *   'UnitPrice' : 18.0000,
   *   'UnitsInStock' : 39,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 10,
   *   'Discontinued' : false
   *
   * }, {
   *   'ProductID' : 2,
   *   'ProductName' : "Chang",
   *   'SupplierID' : 1,
   *   'CategoryID' : 1,
   *   'QuantityPerUnit' : "24 - 12 oz bottles",
   *   'UnitPrice' : 19.0000,
   *   'UnitsInStock' : 17,
   *   'UnitsOnOrder' : 40,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 3,
   *   'ProductName' : "Aniseed Syrup",
   *   'SupplierID' : 1,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "12 - 550 ml bottles",
   *   'UnitPrice' : 10.0000,
   *   'UnitsInStock' : 13,
   *   'UnitsOnOrder' : 70,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 4,
   *   'ProductName' : "Chef Anton\'s Cajun Seasoning",
   *   'SupplierID' : 2,
   *  'CategoryID' : 2,
   *   'QuantityPerUnit' : "48 - 6 oz jars",
   *   'UnitPrice' : 22.0000,
   *   'UnitsInStock' : 53,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 0,
   *   'Discontinued' : false
   * }, {
   *   'ProductID' : 5,
   *   'ProductName' : "Chef Anton\'s Gumbo Mix",
   *   'SupplierID' : 2,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "36 boxes",
   *   'UnitPrice' : 21.3500,
   *   'UnitsInStock' : 0,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 0,
   *   'Discontinued' : true
   * }, {
   *   'ProductID' : 6,
   *   'ProductName' : "Grandma\'s Boysenberry Spread",
   *   'SupplierID' : 3,
   *   'CategoryID' : 2,
   *   'QuantityPerUnit' : "12 - 8 oz jars",
   *   'UnitPrice' : 25.0000,
   *   'UnitsInStock' : 120,
   *   'UnitsOnOrder' : 0,
   *   'ReorderLevel' : 25,
   *   'Discontinued' : false
   * }];
   * ```
   *
   */
  set pageSizes(pageSizes) {
    let normalizedItems = [];
    if (Array.isArray(pageSizes)) {
      pageSizes.forEach(item => {
        if (typeof item === 'number') {
          normalizedItems.push({
            text: item.toString(),
            value: item
          });
        } else {
          normalizedItems.push(item);
        }
      });
    }
    if (this.pageSize && !normalizedItems.some(item => item.value === this.pageSize)) {
      normalizedItems = [{
        text: this.pageSize.toString(),
        value: this.pageSize
      }, ...normalizedItems];
    }
    this._pageSizes = normalizedItems;
  }
  get pageSizes() {
    return this._pageSizes;
  }
  /**
   * @hidden
   *
   * @readonly
   */
  get classes() {
    return true;
  }
  ngAfterViewInit() {
    this.dropDownList.wrapper.nativeElement.setAttribute('aria-label', this.textFor('itemsPerPage'));
    this.ngZone.runOutsideAngular(() => {
      this.element.nativeElement.addEventListener('keydown', this.keyDownHandler.bind(this), true);
    });
  }
  ngOnDestroy() {
    this.element.nativeElement.removeEventListener('keydown', this.keyDownHandler);
  }
  /**
   * @hidden
   */
  pageSizeChange(value, dropdownlist) {
    const event = new PageSizeChangeEvent(value);
    this.pagerContext.changePageSize(event);
    if (event.isDefaultPrevented()) {
      dropdownlist.writeValue(this.pageSize);
    }
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = typeof pageSize === 'number' ? pageSize : this.total;
    this.cd.markForCheck();
  }
  keyDownHandler(ev) {
    if (ev.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Escape && this.dropDownList.isOpen) {
      ev.stopPropagation();
      this.dropDownList.toggle(false);
    }
  }
}
PagerPageSizesComponent.ɵfac = function PagerPageSizesComponent_Factory(t) {
  return new (t || PagerPageSizesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
PagerPageSizesComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerPageSizesComponent,
  selectors: [["kendo-datapager-page-sizes"]],
  viewQuery: function PagerPageSizesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropDownList = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PagerPageSizesComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-pager-sizes", ctx.classes);
    }
  },
  inputs: {
    pageSizes: "pageSizes",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 5,
  consts: [["kendoPagerFocusable", "", "textField", "text", "valueField", "value", 1, "k-dropdown", 3, "size", "data", "valuePrimitive", "value", "valueChange"], ["dropdownlist", ""]],
  template: function PagerPageSizesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-dropdownlist", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PagerPageSizesComponent_Template_kendo_dropdownlist_valueChange_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageSizeChange($event, _r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.size)("data", ctx.pageSizes)("valuePrimitive", true)("value", ctx.pageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.textFor("itemsPerPage"), " ");
    }
  },
  dependencies: [_progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__.DropDownListComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerPageSizesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-datapager-page-sizes',
      template: `
        <kendo-dropdownlist kendoPagerFocusable
            class="k-dropdown"
            #dropdownlist
            [size]="size"
            [data]="pageSizes"
            textField="text"
            valueField="value"
            [valuePrimitive]="true"
            [value]="pageSize"
            (valueChange)="pageSizeChange($event, dropdownlist)"></kendo-dropdownlist>
        {{ textFor('itemsPerPage') }}
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    dropDownList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['dropdownlist', {
        static: true
      }]
    }],
    pageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.k-pager-sizes"]
    }]
  });
})();

/**
 * Represents the pager template which helps to customize the pager appearance. To define a pager
 * template, nest an `<ng-template>` tag with the `kendoDataPagerTemplate` directive inside `<kendo-datapager>`.
 *
 * The template context provides the following fields:
 * * `currentPage`&mdash;The index of the displayed page.
 * * `pageSize`&mdash;The value of the current `pageSize`.
 * * `skip`&mdash;The current skip value.
 * * `total`&mdash;The total number of records.
 * * `totalPages`&mdash;The total number of available pages.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *       <kendo-datapager [total]="total" [pageSize]="pageSize" [skip]="skip" (pageChange)="onPageChange($event)">
 *           <ng-template kendoDataPagerTemplate let-totalPages="totalPages" let-currentPage="currentPage">
 *               <kendo-datapager-prev-buttons></kendo-datapager-prev-buttons>
 *               <kendo-datapager-numeric-buttons [buttonCount]="10"></kendo-datapager-numeric-buttons>
 *               <kendo-datapager-next-buttons></kendo-datapager-next-buttons>
 *               <kendo-datapager-info></kendo-datapager-info>
 *               Current page: {{currentPage}}
 *           </ng-template>
 *        </kendo-datapager>
 *     `
 * })
 *
 * class AppComponent {
 *     public skip = 0;
 *     public pageSize = 10;
 *     public total = 100;
 *
 *     public onPageChange(e: any): void {
 *         this.skip = e.skip;
 *         this.pageSize = e.take;
 *     }
 * }
 *
 * ```
 */
class PagerTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
PagerTemplateDirective.ɵfac = function PagerTemplateDirective_Factory(t) {
  return new (t || PagerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 8));
};
PagerTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PagerTemplateDirective,
  selectors: [["", "kendoDataPagerTemplate", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[kendoDataPagerTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/**
 * Displays numeric buttons to enable navigation between the pages.
 */
class PagerNumericButtonsComponent extends PagerElementComponent {
  constructor(localization, cd, pagerContext, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.renderer = renderer;
    this._size = DEFAULT_SIZE;
  }
  /**
   * Specifies the padding of the numeric buttons.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, 'size');
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number[]}
   * @memberOf PagerNumericButtonsComponent
   */
  get buttons() {
    const result = [];
    for (let idx = this.start; idx <= this.end; idx++) {
      result.push(idx);
    }
    return result;
  }
  /**
   * @hidden
   */
  get end() {
    return Math.min(this.start + this.buttonCount - 1, this.totalPages);
  }
  /**
   * @hidden
   */
  get start() {
    const page = this.currentPage;
    const buttonCount = this.buttonCount;
    if (page > buttonCount) {
      const reminder = page % buttonCount;
      return reminder === 0 ? page - buttonCount + 1 : page - reminder + 1;
    }
    return 1;
  }
  ngAfterViewInit() {
    this.handleClasses(this.size, 'size');
  }
  /**
   * @hidden
   */
  pageLabel(num) {
    const pageText = this.textFor('page');
    if (pageText) {
      return pageText + ' ' + num;
    }
    return num.toString();
  }
  /**
   * @hidden
   */
  onSelectChange(e) {
    const target = e.target;
    const valueAsNumber = Number(target.value);
    if (!Number.isNaN(valueAsNumber)) {
      this.changePage(valueAsNumber - 1);
    } else {
      if (target.value === 'previousButtons') {
        this.changePage(this.start - 2);
      } else {
        this.changePage(this.end);
      }
    }
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  get pageChooserLabel() {
    return this.textFor('selectPage');
  }
  handleClasses(value, input) {
    const elem = this.selectElement?.nativeElement;
    const classes = getStylingClasses('picker', input, this[input], value);
    if (!elem) {
      return;
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
}
PagerNumericButtonsComponent.ɵfac = function PagerNumericButtonsComponent_Factory(t) {
  return new (t || PagerNumericButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
PagerNumericButtonsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerNumericButtonsComponent,
  selectors: [["kendo-datapager-numeric-buttons"]],
  viewQuery: function PagerNumericButtonsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numbersElement = _t.first);
    }
  },
  inputs: {
    buttonCount: "buttonCount",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 10,
  consts: [["kendoPagerFocusable", "", 1, "k-dropdown-list", "k-dropdown", "k-picker", "k-picker-solid", "k-rounded-md", 3, "change"], ["select", ""], ["value", "previousButtons", 3, "selected", 4, "ngIf"], [3, "value", "selected", "ngClass", 4, "ngFor", "ngForOf"], ["value", "nextButtons", 3, "selected", 4, "ngIf"], [1, "k-pager-numbers"], ["numbers", ""], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "click", 4, "ngIf"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "selected", "click", 4, "ngFor", "ngForOf"], ["value", "previousButtons", 3, "selected"], [3, "value", "selected", "ngClass"], ["value", "nextButtons", 3, "selected"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "click"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "selected", "click"]],
  template: function PagerNumericButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagerNumericButtonsComponent_Template_select_change_0_listener($event) {
        return ctx.onSelectChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagerNumericButtonsComponent_option_2_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagerNumericButtonsComponent_option_3_Template, 2, 8, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PagerNumericButtonsComponent_option_4_Template, 2, 2, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagerNumericButtonsComponent_button_7_Template, 2, 3, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PagerNumericButtonsComponent_button_8_Template, 2, 6, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PagerNumericButtonsComponent_button_9_Template, 2, 3, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.pageChooserLabel)("aria-label", ctx.pageChooserLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.start > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.end < ctx.totalPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.start > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.end < ctx.totalPages);
    }
  },
  dependencies: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, PagerFocusableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerNumericButtonsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-datapager-numeric-buttons',
      template: `
        <select kendoPagerFocusable #select
            class="k-dropdown-list k-dropdown k-picker k-picker-solid k-rounded-md"
            [style.display]="'none'"
            [attr.title]="pageChooserLabel"
            [attr.aria-label]="pageChooserLabel"
            (change)="onSelectChange($event)">
            <option *ngIf="start > 1"
                value="previousButtons"
                [selected]="false"
                [attr.aria-label]="pageLabel(start - 1)">...
            </option>
            <option *ngFor="let num of buttons"
                [value]="num.toString()"
                [selected]="num === currentPage"
                [attr.aria-label]="pageLabel(num)"
                [attr.aria-current]="currentPage === num ? 'page' : undefined"
                [ngClass]="{'k-selected':currentPage === num}">
                {{num}}
            </option>
            <option *ngIf="end < totalPages"
                value="nextButtons"
                [selected]="false"
                [attr.aria-label]="pageLabel(end + 1)">...
            </option>
        </select>
        <div class="k-pager-numbers" #numbers>
            <button *ngIf="start > 1"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(start - 1)"
                [attr.title]="pageLabel(start - 1)"
                (click)="changePage(start - 2)">...</button>
            <button *ngFor="let num of buttons"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(num)"
                [attr.title]="pageLabel(num)"
                [attr.aria-current]="currentPage === num ? 'page' : undefined"
                [selected]="currentPage === num"
                (click)="changePage(num - 1)">
                {{num}}
            </button>
            <button *ngIf="end < totalPages"
                type="button"
                kendoPagerFocusable
                kendoButton
                [size]="size"
                fillMode="flat"
                themeColor="primary"
                rounded="none"
                [attr.aria-label]="pageLabel(end + 1)"
                [attr.title]="pageLabel(end + 1)"
                (click)="changePage(end)">...</button>
        </div>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    selectElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['select', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    numbersElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['numbers', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    buttonCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// eslint-disable  no-access-missing-member
/**
 * Displays buttons for navigating to the next and to the last page ([see example]({% slug pager_settings %})).
 */
class PagerNextButtonsComponent extends PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
    /**
     * Specifies the padding of the buttons.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    this.size = DEFAULT_SIZE;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerNextButtonsComponent
   */
  get disabled() {
    return this.currentPage === this.totalPages || !this.total;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
}
PagerNextButtonsComponent.ɵfac = function PagerNextButtonsComponent_Factory(t) {
  return new (t || PagerNextButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PagerNextButtonsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerNextButtonsComponent,
  selectors: [["kendo-datapager-next-buttons"]],
  inputs: {
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 12,
  consts: [["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "size", "icon", "svgIcon", "disabled", "title", "click"], ["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-last", 3, "size", "icon", "svgIcon", "disabled", "title", "click"]],
  template: function PagerNextButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerNextButtonsComponent_Template_button_click_0_listener() {
        return ctx.currentPage !== ctx.totalPages ? ctx.changePage(ctx.currentPage) : false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerNextButtonsComponent_Template_button_click_1_listener() {
        return ctx.currentPage !== ctx.totalPages ? ctx.changePage(ctx.totalPages - 1) : false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.size)("icon", ctx.nextArrowIcons[0])("svgIcon", ctx.nextArrowSVGIcons[0])("disabled", ctx.disabled)("title", ctx.textFor("nextPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.textFor("nextPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.size)("icon", ctx.nextArrowIcons[1])("svgIcon", ctx.nextArrowSVGIcons[1])("disabled", ctx.disabled)("title", ctx.textFor("lastPage"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.textFor("lastPage"));
    }
  },
  dependencies: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, PagerFocusableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerNextButtonsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-datapager-next-buttons',
      template: `
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[0]"
            [svgIcon]="nextArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav"
            [disabled]="disabled"
            [title]="textFor('nextPage')"
            [attr.aria-label]="textFor('nextPage')"
            (click)="currentPage !== totalPages ? changePage(currentPage) : false">
        </button>
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[1]"
            [svgIcon]="nextArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav k-pager-last"
            [disabled]="disabled"
            [title]="textFor('lastPage')"
            [attr.aria-label]="textFor('lastPage')"
            (click)="currentPage !== totalPages ? changePage(totalPages-1) : false">
        </button>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Displays an input element which allows the typing and rendering of page numbers.
 */
class PagerInputComponent extends PagerElementComponent {
  constructor(localization, pagerContext, zone, cd, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.zone = zone;
    this.renderer = renderer;
    /**
     * Specifies the padding of the internal numeric input element.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    this.size = DEFAULT_SIZE;
    /**
     * @hidden
     *
     * @param {string} value
     *
     * @memberOf PagerInputComponent
     */
    this.handleKeyDown = event => {
      const incomingValue = this.numericInput.value || this.current;
      // eslint-disable import/no-deprecated
      if (event.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Enter) {
        event.preventDefault();
        if (incomingValue !== this.current) {
          this.zone.run(() => {
            this.changePage(incomingValue - 1);
          });
        }
      }
    };
    /**
     * @hidden
     *
     * @param {string} value
     *
     * @memberOf PagerInputComponent
     */
    this.handleBlur = () => {
      const inputValue = this.numericInput.value;
      if (!inputValue) {
        this.numericInput.writeValue(this.current);
        return;
      }
      if (inputValue !== this.current) {
        this.zone.run(() => {
          this.changePage(inputValue - 1);
        });
      }
    };
  }
  /**
   * @hidden
   */
  get current() {
    return this.hasPages ? this.currentPage : 0;
  }
  /**
   * @hidden
   */
  get hasPages() {
    return this.totalPages !== 0;
  }
  ngAfterViewInit() {
    const innerNumericInput = this.numericInput.numericInput.nativeElement;
    this.renderer.setAttribute(innerNumericInput, 'aria-label', this.textFor('inputLabel'));
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
}
PagerInputComponent.ɵfac = function PagerInputComponent_Factory(t) {
  return new (t || PagerInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
PagerInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerInputComponent,
  selectors: [["kendo-datapager-input"]],
  viewQuery: function PagerInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.NumericTextBoxComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numericInput = _t.first);
    }
  },
  inputs: {
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 18,
  consts: [[3, "ngClass"], ["kendoPagerFocusable", "", "format", "n0", 3, "spinners", "decimals", "size", "disabled", "value", "min", "max", "autoCorrect", "title", "kendoEventsOutsideAngular"]],
  template: function PagerInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-numerictextbox", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.textFor("page"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinners", false)("decimals", 0)("size", ctx.size)("disabled", !ctx.hasPages)("value", ctx.current)("min", ctx.hasPages ? 1 : 0)("max", ctx.totalPages)("autoCorrect", true)("title", ctx.textFor("pageNumberInputTitle"))("kendoEventsOutsideAngular", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c5, ctx.handleKeyDown, ctx.handleBlur));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.textFor("of"), " ", ctx.totalPages, " ");
    }
  },
  dependencies: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.NumericTextBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, PagerFocusableDirective, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.EventsOutsideAngularDirective],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'kendo-datapager-input',
      template: `
     <span [ngClass]="{'k-pager-input': true, 'k-label': true}">
        {{textFor('page')}}
        <kendo-numerictextbox kendoPagerFocusable
            [spinners]="false"
            [decimals]="0"
            format="n0"
            [size]="size"
            [disabled]="!hasPages"
            [value]="current"
            [min]="hasPages ? 1 : 0"
            [max]="totalPages"
            [autoCorrect]="true"
            [title]="textFor('pageNumberInputTitle')"
            [kendoEventsOutsideAngular]="{
                keydown: handleKeyDown,
                focusout: handleBlur
            }">
        </kendo-numerictextbox>
        {{textFor('of')}} {{totalPages}}
     </span>
    `
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    numericInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.NumericTextBoxComponent, {
        static: true
      }]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// eslint-disable no-access-missing-member
/**
 * Displays information about the current page and the total number of records ([see example]({% slug pager_settings %})).
 */
class PagerInfoComponent extends PagerElementComponent {
  constructor(localization, cd, pagerContext) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get maxItems() {
    return Math.min(this.currentPage * this.pageSize, this.total);
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get currentPageText() {
    return this.total ? (this.currentPage - 1) * this.pageSize + 1 : 0;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerInfoComponent
   */
  get classes() {
    return true;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
}
PagerInfoComponent.ɵfac = function PagerInfoComponent_Factory(t) {
  return new (t || PagerInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService));
};
PagerInfoComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerInfoComponent,
  selectors: [["kendo-datapager-info"]],
  hostVars: 2,
  hostBindings: function PagerInfoComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-pager-info", ctx.classes);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 5,
  template: function PagerInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", ctx.currentPageText, " - ", ctx.maxItems, " ", ctx.textFor("of"), " ", ctx.total, " ", ctx.textFor("items"), "");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerInfoComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'kendo-datapager-info',
      template: `{{currentPageText}} - {{maxItems}} {{textFor('of')}} {{total}} {{textFor('items')}}`
    }]
  }], function () {
    return [{
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: PagerContextService
    }];
  }, {
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.k-pager-info"]
    }]
  });
})();

/**
 * @hidden
 */
const packageMetadata = {
  name: '@progress/kendo-angular-pager',
  productName: 'Kendo UI for Angular',
  productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
  publishDate: 1694533067,
  version: '13.5.0',
  licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/'
};

/**
 * @hidden
 */
const RESPONSIVE_BREAKPOINT_MEDIUM = 600;
/**
 * @hidden
 */
const RESPONSIVE_BREAKPOINT_LARGE = 768;
class PagerComponent {
  constructor(pagerContext, element, localization, renderer, ngZone, navigationService) {
    this.pagerContext = pagerContext;
    this.element = element;
    this.localization = localization;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.navigationService = navigationService;
    /**
     * Represents the total number of data items in the collection.
     */
    this.total = 0;
    /**
     * Defines the number of data items to be skipped.
     */
    this.skip = 0;
    /**
     * Sets the maximum numeric buttons count before the buttons are collapsed.
     */
    this.buttonCount = 10;
    /**
     * Toggles the information about the current page and the total number of records.
     */
    this.info = true;
    /**
     * Defines the type of the pager.
     */
    this.type = 'numeric';
    /**
     * Toggles the **Previous** and **Next** buttons.
     */
    this.previousNext = true;
    /**
     * Fires when the current page of the Pager is changed ([see example]({% slug overview_pager %}#toc-basic-usage)).
     * You have to handle the event yourself and page the data.
     */
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Fires when the page size of the Pager is changed.
     * You have to handle the event yourself and page the data.
     * If the event is prevented, the page size will remain unchanged ([see example]({% slug pager_events %})).
     */
    this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pagerClass = true;
    this.widgetRole = 'application';
    this.roleDescription = 'pager';
    this.keyShortcuts = 'Enter ArrowRight ArrowLeft';
    this.hostTabindex = '0';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this._templateContext = {};
    this._pageSizeValues = DEFAULT_PAGE_SIZE_VALUES;
    this.isInnerNavigationEnabled = false;
    this._navigable = false;
    this._size = DEFAULT_SIZE;
    this.resizeHandler = () => {
      if (this.template?.first) {
        return;
      }
      const width = this.element.nativeElement.offsetWidth;
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.numericButtons) {
            const selectElement = this.numericButtons.selectElement.nativeElement;
            const numbersElement = this.numericButtons.numbersElement.nativeElement;
            this.renderer.removeStyle(numbersElement, 'display');
            this.renderer.setStyle(selectElement, 'display', 'none');
            if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
              this.renderer.removeStyle(selectElement, 'display');
              this.renderer.setStyle(numbersElement, 'display', 'none');
            }
          }
          if (this.pagerInfo) {
            this.renderer.removeStyle(this.pagerInfo.nativeElement, 'display');
            if (width < RESPONSIVE_BREAKPOINT_LARGE) {
              this.renderer.setStyle(this.pagerInfo.nativeElement, 'display', 'none');
            }
          }
          if (this.pagerPageSizes) {
            this.renderer.removeStyle(this.pagerPageSizes.nativeElement, 'display');
            if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
              this.renderer.setStyle(this.pagerPageSizes.nativeElement, 'display', 'none');
            }
          }
        });
      });
    };
    (0,_progress_kendo_licensing__WEBPACK_IMPORTED_MODULE_10__.validatePackage)(packageMetadata);
    this.direction = localization.rtl ? 'rtl' : 'ltr';
  }
  /**
   * Shows a dropdown for selecting the page size.
   * When set to `true`, the dropdown will contain the default list of options - 5, 10, 20.
   * To customize the list of options, set `pageSizeValues` to an array of the desired values.
   * The array can contain numbers and [PageSizeItem]({% slug api_pager_pagesizeitem %}) objects.
   */
  set pageSizeValues(pageSizeValues) {
    this._pageSizeValues = Array.isArray(pageSizeValues) ? pageSizeValues : pageSizeValues ? DEFAULT_PAGE_SIZE_VALUES : false;
  }
  get pageSizeValues() {
    return this._pageSizeValues;
  }
  /**
   * If set to `true`, the user can use dedicated shortcuts to interact with the Pager ([see example]({% slug keyboard_navigation_pager %})).
   * By default, navigation is disabled and the Pager content is accessible in the normal tab sequence.
   * @default false
   */
  set navigable(value) {
    this._navigable = value;
    this.navigationService.isNavigable = value;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Specifies the padding of all Pager elements.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, 'size');
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    const isInnerNavigationEnabled = ev.target !== this.element.nativeElement;
    this.navigationService.toggleInnerNavigation(isInnerNavigationEnabled);
  }
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  get templateContext() {
    const context = this._templateContext;
    context.totalPages = this.totalPages;
    context.total = this.total;
    context.skip = this.skip;
    context.pageSize = this.pageSize;
    context.currentPage = this.currentPage;
    return context;
  }
  ngOnInit() {
    this.subscriptions.add(this.pagerContext.pageChange.subscribe(this.changePage.bind(this)));
    this.subscriptions.add(this.pagerContext.pageSizeChange.subscribe(this.changePageSize.bind(this)));
    this.subscriptions.add(this.resizeSensor.resize.subscribe(() => this.resizeHandler()));
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? 'rtl' : 'ltr';
    }));
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
    if (this.navigable) {
      const wrapper = this.element.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        this.subscriptions.add(this.renderer.listen(wrapper, 'keydown', this.keyDownHandler.bind(this)));
      });
    }
  }
  ngAfterViewInit() {
    this.resizeHandler();
    this.renderer.setAttribute(this.element.nativeElement, 'aria-label', this.ariaLabel);
    this.subscriptions.add(this.template.changes.subscribe(() => {
      this.resizeHandler();
    }));
    this.handleClasses(this.size, 'size');
  }
  ngOnChanges(changes) {
    if ((0,_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.anyChanged)(["pageSize", "skip", "total"], changes, false)) {
      this.pagerContext.notifyChanges({
        pageSize: this.pageSize,
        skip: this.skip,
        total: this.total
      });
      this.renderer.setAttribute(this.element.nativeElement, 'aria-label', this.ariaLabel);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  changePage(event) {
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  changePageSize(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      if (event.newPageSize === 'all') {
        this.pageChange.emit({
          skip: 0,
          take: this.total
        });
      } else {
        this.pageChange.emit({
          skip: 0,
          take: event.newPageSize
        });
      }
    }
  }
  /**
   * @hidden
   */
  onPageSizeChange(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      this.pageChange.emit({
        skip: this.skip,
        take: event.newPageSize
      });
    }
  }
  textFor(value) {
    return this.localization.get(value);
  }
  get ariaLabel() {
    return `${this.textFor('page')} ${this.currentPage} ${this.textFor('of')} ${this.totalPages}`;
  }
  keyDownHandler(e) {
    const target = e.target;
    const wrapper = this.element.nativeElement;
    const isArrowLeftOrPageUp = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.ArrowLeft || e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.PageUp;
    const isArrowRightOrPageDown = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.ArrowRight || e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.PageDown;
    const isEnter = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Enter;
    const isHome = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Home;
    const isEnd = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.End;
    const isEsc = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Escape;
    const isTab = e.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.Keys.Tab;
    const isFirstPage = this.currentPage === 1;
    const isLastPage = this.currentPage === this.totalPages;
    this.ngZone.run(() => {
      if (isHome) {
        e.preventDefault();
        !isFirstPage && this.pagerContext.changePage(0);
      } else if (isEnd) {
        e.preventDefault();
        !isLastPage && this.pagerContext.changePage(this.totalPages - 1);
      } else if (this.isInnerNavigationEnabled) {
        if (isEsc) {
          this.navigationService.toggleInnerNavigation(false);
          wrapper.focus();
        } else if (isTab) {
          this.navigationService.keepFocusWithinComponent(wrapper, target, e);
        }
      } else {
        if (isArrowLeftOrPageUp) {
          e.preventDefault();
          !isFirstPage && this.pagerContext.prevPage();
        } else if (isArrowRightOrPageDown) {
          e.preventDefault();
          !isLastPage && this.pagerContext.nextPage();
        } else if (isEnter) {
          if (e.target !== wrapper) {
            return;
          }
          e.preventDefault();
          const [firstFocusable] = this.navigationService.getFirstAndLastFocusable(wrapper);
          this.navigationService.toggleInnerNavigation(true);
          firstFocusable?.focus();
        }
      }
    });
  }
  innerNavigationChange(value) {
    this.isInnerNavigationEnabled = value;
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses('pager', input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) {
  return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerContextService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PagerNavigationService));
};
PagerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerComponent,
  selectors: [["kendo-datapager"]],
  contentQueries: function PagerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, PagerTemplateDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t);
    }
  },
  viewQuery: function PagerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.ResizeSensorComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](PagerInfoComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](PagerPageSizesComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](PagerNumericButtonsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeSensor = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagerInfo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagerPageSizes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numericButtons = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function PagerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function PagerComponent_focusin_HostBindingHandler($event) {
        return ctx.focusHandler($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.widgetRole)("aria-roledescription", ctx.roleDescription)("aria-keyshortcuts", ctx.keyShortcuts)("tabindex", ctx.hostTabindex)("dir", ctx.dir);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-pager", ctx.pagerClass);
    }
  },
  inputs: {
    total: "total",
    skip: "skip",
    pageSize: "pageSize",
    buttonCount: "buttonCount",
    info: "info",
    type: "type",
    pageSizeValues: "pageSizeValues",
    previousNext: "previousNext",
    navigable: "navigable",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange",
    pageSizeChange: "pageSizeChange"
  },
  exportAs: ["kendoDataPager"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService, PagerContextService, PagerNavigationService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 2,
  consts: function () {
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the first page button in the Pager
       * @meaning kendo.pager.firstPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7 = goog.getMsg("Go to the first page");
      i18n_6 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7;
    } else {
      i18n_6 = $localize`:kendo.pager.firstPage|The label for the first page button in the Pager:Go to the first page`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the previous page button in the Pager
       * @meaning kendo.pager.previousPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9 = goog.getMsg("Go to the previous page");
      i18n_8 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9;
    } else {
      i18n_8 = $localize`:kendo.pager.previousPage|The label for the previous page button in the Pager:Go to the previous page`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the next page button in the Pager
       * @meaning kendo.pager.nextPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_11 = goog.getMsg("Go to the next page");
      i18n_10 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_11;
    } else {
      i18n_10 = $localize`:kendo.pager.nextPage|The label for the next page button in the Pager:Go to the next page`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the last page button in the Pager
       * @meaning kendo.pager.lastPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_13 = goog.getMsg("Go to the last page");
      i18n_12 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_13;
    } else {
      i18n_12 = $localize`:kendo.pager.lastPage|The label for the last page button in the Pager:Go to the last page`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label before the current page number in the Pager
       * @meaning kendo.pager.page
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_15 = goog.getMsg("Page");
      i18n_14 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_15;
    } else {
      i18n_14 = $localize`:kendo.pager.page|The label before the current page number in the Pager:Page`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label before the total pages number in the Pager
       * @meaning kendo.pager.of
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_17 = goog.getMsg("of");
      i18n_16 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_17;
    } else {
      i18n_16 = $localize`:kendo.pager.of|The label before the total pages number in the Pager:of`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the pager input in the Pager
       * @meaning kendo.pager.pageNumberInputTitle
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_19 = goog.getMsg("Page Number");
      i18n_18 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_19;
    } else {
      i18n_18 = $localize`:kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager:Page Number`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label after the total pages number in the Pager
       * @meaning kendo.pager.items
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_21 = goog.getMsg("items");
      i18n_20 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_21;
    } else {
      i18n_20 = $localize`:kendo.pager.items|The label after the total pages number in the Pager:items`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The label for the page size chooser in the Pager
       * @meaning kendo.pager.itemsPerPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_23 = goog.getMsg("items per page");
      i18n_22 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_23;
    } else {
      i18n_22 = $localize`:kendo.pager.itemsPerPage|The label for the page size chooser in the Pager:items per page`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The text of the title and aria-label attributes applied to the page chooser in the Pager
       * @meaning kendo.pager.selectPage
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_25 = goog.getMsg("Select page");
      i18n_24 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_25;
    } else {
      i18n_24 = $localize`:kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager:Select page`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc The text of the aria-label attribute applied to the input element for entering the page number.
       * @meaning kendo.pager.inputLabel
       */
      const MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_27 = goog.getMsg("Type a page number");
      i18n_26 = MSG_D__NEW_WORKING16_BMEWEBUI_BMEWEB11_BMEWEB11_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2020_PROGRESS_KENDO_ANGULAR_PAGER_MJS_27;
    } else {
      i18n_26 = $localize`:kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number.:Type a page number`;
    }
    return [["kendoDataPagerLocalizedMessages", "", "firstPage", i18n_6, "previousPage", i18n_8, "nextPage", i18n_10, "lastPage", i18n_12, "page", i18n_14, "of", i18n_16, "pageNumberInputTitle", i18n_18, "items", i18n_20, "itemsPerPage", i18n_22, "selectPage", i18n_24, "inputLabel", i18n_26], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-pager-numbers-wrap"], [3, "size", 4, "ngIf"], [3, "size", "buttonCount", 4, "ngIf"], [3, "size", "pageSizes", 4, "ngIf"], [3, "size"], [3, "size", "buttonCount"], [3, "size", "pageSizes"]];
  },
  template: function PagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagerComponent_ng_container_1_Template, 1, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagerComponent_ng_container_2_Template, 8, 6, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "kendo-resize-sensor");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.template.first == null ? null : ctx.template.first.templateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.template == null ? null : ctx.template.first == null ? null : ctx.template.first.templateRef));
    }
  },
  dependencies: [PagerPrevButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerNextButtonsComponent, PagerPageSizesComponent, PagerInfoComponent, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.ResizeSensorComponent, LocalizedMessagesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'kendo-datapager',
      exportAs: 'kendoDataPager',
      providers: [_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService, PagerContextService, PagerNavigationService],
      template: `
        <ng-container kendoDataPagerLocalizedMessages
            i18n-firstPage="kendo.pager.firstPage|The label for the first page button in the Pager"
            firstPage="Go to the first page"

            i18n-previousPage="kendo.pager.previousPage|The label for the previous page button in the Pager"
            previousPage="Go to the previous page"

            i18n-nextPage="kendo.pager.nextPage|The label for the next page button in the Pager"
            nextPage="Go to the next page"

            i18n-lastPage="kendo.pager.lastPage|The label for the last page button in the Pager"
            lastPage="Go to the last page"

            i18n-page="kendo.pager.page|The label before the current page number in the Pager"
            page="Page"

            i18n-of="kendo.pager.of|The label before the total pages number in the Pager"
            of="of"

            i18n-pageNumberInputTitle="kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager"
            pageNumberInputTitle="Page Number"

            i18n-items="kendo.pager.items|The label after the total pages number in the Pager"
            items="items"

            i18n-itemsPerPage="kendo.pager.itemsPerPage|The label for the page size chooser in the Pager"
            itemsPerPage="items per page"

            i18n-selectPage="kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager"
            selectPage="Select page"

            i18n-inputLabel="kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number."
            inputLabel="Type a page number"
         >
        </ng-container>
        <ng-container
            *ngIf="template.first?.templateRef"
            [ngTemplateOutlet]="template.first?.templateRef"
            [ngTemplateOutletContext]="templateContext">
        </ng-container>
        <ng-container *ngIf="!template?.first?.templateRef">
            <div class="k-pager-numbers-wrap">
                <kendo-datapager-prev-buttons [size]="size" *ngIf="previousNext"></kendo-datapager-prev-buttons>
                <kendo-datapager-numeric-buttons
                    [size]="size"
                    *ngIf="type === 'numeric' && buttonCount > 0"
                    [buttonCount]="buttonCount">
                </kendo-datapager-numeric-buttons>
                <kendo-datapager-input [size]="size" *ngIf="type === 'input'"></kendo-datapager-input>
                <kendo-datapager-next-buttons [size]="size" *ngIf="previousNext"></kendo-datapager-next-buttons>
            </div>
            <kendo-datapager-page-sizes *ngIf="pageSizeValues"
                [size]="size"
                [pageSizes]="pageSizeValues">
            </kendo-datapager-page-sizes>
            <kendo-datapager-info *ngIf='info'>
            </kendo-datapager-info>
        </ng-container>
        <kendo-resize-sensor></kendo-resize-sensor>
  `
    }]
  }], function () {
    return [{
      type: PagerContextService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.LocalizationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: PagerNavigationService
    }];
  }, {
    resizeSensor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.ResizeSensorComponent, {
        static: true
      }]
    }],
    pagerInfo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [PagerInfoComponent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    pagerPageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [PagerPageSizesComponent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    numericButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [PagerNumericButtonsComponent]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [PagerTemplateDirective]
    }],
    total: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    skip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    buttonCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    info: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSizeValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousNext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pagerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.k-pager']
    }],
    widgetRole: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.role']
    }],
    roleDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-roledescription']
    }],
    keyShortcuts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-keyshortcuts']
    }],
    hostTabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.tabindex']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.dir']
    }],
    focusHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focusin', ['$event']]
    }]
  });
})();
const importedModules = [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.NumericTextBoxModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__.DropDownListModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonsModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.EventsModule, _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_6__.ResizeSensorModule];
const INTERNAL_COMPONENTS = [PagerComponent, PagerPrevButtonsComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerInfoComponent, PagerPageSizesComponent, PagerTemplateDirective, LocalizedMessagesDirective, CustomMessagesComponent, PagerFocusableDirective];
const providers = [{
  provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__.L10N_PREFIX,
  useValue: 'kendo.pager'
}];
/**
 * @hidden
 */
class PagerModule {
  static exports() {
    return [PagerComponent, PagerPrevButtonsComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerInfoComponent, PagerPageSizesComponent, PagerTemplateDirective];
  }
}
PagerModule.ɵfac = function PagerModule_Factory(t) {
  return new (t || PagerModule)();
};
PagerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PagerModule
});
PagerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [providers],
  imports: [[...importedModules]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [INTERNAL_COMPONENTS],
      exports: [INTERNAL_COMPONENTS],
      imports: [...importedModules],
      providers: [providers]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_main_dashboard_dashboard_module_ts.js.map