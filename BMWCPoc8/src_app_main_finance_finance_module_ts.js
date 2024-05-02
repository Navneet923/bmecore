"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_finance_finance_module_ts"],{

/***/ 39110:
/*!****************************************************************************************!*\
  !*** ./src/app/main/finance/components/download-finance/download-finance.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadFinanceComponent: () => (/* binding */ DownloadFinanceComponent)
/* harmony export */ });
/* harmony import */ var _models_download_finance_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/download-finance.model */ 11009);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/download-finance.const */ 63479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_download_finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/download-finance.service */ 59855);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var _core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
























const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function DownloadFinanceComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function DownloadFinanceComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transactionType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", transactionType_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transactionType_r8.value);
  }
}
function DownloadFinanceComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 23)(8, "div", 18)(9, "div", 45)(10, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_div_40_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.bmlfNextPrevious("PREVIOUS"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "kendo-numerictextbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_div_40_Template_kendo_numerictextbox_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.miStartPosition = $event);
    })("blur", function DownloadFinanceComponent_div_40_Template_kendo_numerictextbox_blur_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.bmlfOnChangeNavigation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 49)(14, "kendo-numerictextbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_div_40_Template_kendo_numerictextbox_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.miMaxResult = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_div_40_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.bmlfNextPrevious("NEXT"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 15, "DOWNLOADFINANCE.DATARANGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r2.miStartPosition)("spinners", false)("step", 0)("decimals", "0")("format", "n0")("min", 0)("autoCorrect", ctx_r2.mbautoCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r2.miMaxResult)("spinners", false)("step", 0)("decimals", "0")("format", "n0")("autoCorrect", ctx_r2.mbautoCorrect)("min", 0);
  }
}
function DownloadFinanceComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 23)(8, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_div_41_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.mobjModel.Class = $event);
    })("focus", function DownloadFinanceComponent_div_41_Template_input_focus_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.bmlfOnGlobalFocus("Class", ctx_r17.mobjModel.Class));
    })("blur", function DownloadFinanceComponent_div_41_Template_input_blur_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r18.bmlfOpenLookupModal("Class Lookup", ctx_r18.msscreenName, "Class", "blur", ctx_r18.mobjModel.Class, "custom", "txtClass");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.bmlfOnchange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_div_41_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.bmlfOpenLookupModal("Class Lookup", ctx_r19.msscreenName, "Class", "click", ctx_r19.mobjModel.Class, "custom", "txtClass"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 19)(12, "div", 20)(13, "div", 21)(14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 23)(18, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_div_41_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.msClassID = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 4, "DOWNLOADFINANCE.CLASS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r3.mobjModel.Class);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](16, 6, "DOWNLOADFINANCE.CLASSID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r3.msClassID);
  }
}
function DownloadFinanceComponent_div_81_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function DownloadFinanceComponent_div_81_ng_template_5_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.selectAllRows($event));
    })("ngModelChange", function DownloadFinanceComponent_div_81_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.allRowsSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r22.allRowsSelected);
  }
}
function DownloadFinanceComponent_div_81_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_div_81_ng_template_6_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const dataItem_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](dataItem_r31.Sel = $event);
    })("change", function DownloadFinanceComponent_div_81_ng_template_6_Template_input_change_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const rowIndex_r32 = restoredCtx.rowIndex;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r35.selectSingleRow($event, rowIndex_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r31 = ctx.$implicit;
    const rowIndex_r32 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("name", "checked_", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", dataItem_r31.Sel);
  }
}
function DownloadFinanceComponent_div_81_ng_template_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 68)(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r38 = ctx.$implicit;
    const dataItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", column_r38.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](column_r38.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](dataItem_r36[column_r38.field]);
  }
}
function DownloadFinanceComponent_div_81_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DownloadFinanceComponent_div_81_ng_template_10_div_1_Template, 5, 3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r24.mobjGridSettings.columnsConfig);
  }
}
function DownloadFinanceComponent_div_81_kendo_grid_column_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "kendo-grid-column", 69);
  }
  if (rf & 2) {
    const column_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", column_r40.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", column_r40.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", column_r40.hidden);
  }
}
const _c2 = function () {
  return [5, 10, 20, 50, 100];
};
function DownloadFinanceComponent_div_81_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 70);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c2));
  }
}
const _c3 = function (a0) {
  return {
    gridloading: a0
  };
};
function DownloadFinanceComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 18)(1, "div", 55)(2, "kendo-grid", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChange", function DownloadFinanceComponent_div_81_Template_kendo_grid_selectionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r41.bmlfonselectionChange($event));
    })("dataStateChange", function DownloadFinanceComponent_div_81_Template_kendo_grid_dataStateChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r43.bmlfonDataStateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "kendo-grid-column", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, DownloadFinanceComponent_div_81_ng_template_5_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, DownloadFinanceComponent_div_81_ng_template_6_Template, 1, 2, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "kendo-grid-messages", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-grid-column", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, DownloadFinanceComponent_div_81_ng_template_10_Template, 2, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, DownloadFinanceComponent_div_81_kendo_grid_column_11_Template, 1, 3, "kendo-grid-column", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, DownloadFinanceComponent_div_81_ng_template_12_Template, 4, 2, "ng-template", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("filterable", ctx_r4.filterEnabled)("sortable", true)("filter", ctx_r4.mobjGridSettings.state.filter)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](20, _c3, ctx_r4.mbLoadingEnabled == true))("kendoGridBinding", ctx_r4.mobjgrdModel)("reorderable", true)("sort", ctx_r4.mobjGridSettings.state.sort)("skip", ctx_r4.mobjGridSettings.state.skip)("selectable", ctx_r4.mobjSelectableSettings)("columnMenu", false)("kendoGridSelectBy", ctx_r4.bmlfSelectedCallback)("selectedKeys", ctx_r4.maarraySelected)("loading", ctx_r4.mbLoadingEnabled)("resizable", true)("height", 500)("rowClass", ctx_r4.rowCallback);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 18, "CommonNoRecordsAvailable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r4.mobjGridSettings.columnsConfig);
  }
}
function DownloadFinanceComponent_app_custom_lookup_modal_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function DownloadFinanceComponent_app_custom_lookup_modal_96_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r44.bmlfSaveLookupField($event));
    })("closeLookup", function DownloadFinanceComponent_app_custom_lookup_modal_96_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r46.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("keyData", ctx_r5.mobjLookupKeyData);
  }
}
function DownloadFinanceComponent_kendo_dialog_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function DownloadFinanceComponent_kendo_dialog_97_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r47.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "kendo-dialog-actions")(3, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_kendo_dialog_97_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r49.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r6.msReportDl, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 2, "COMMON.CLOSE"), " ");
  }
}
function DownloadFinanceComponent_app_common_task_modal_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function DownloadFinanceComponent_app_common_task_modal_98_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
const _c4 = function (a0) {
  return {
    modalLoading: a0
  };
};
class DownloadFinanceComponent {
  constructor(router, objService, lookupService, lsService, objToastService, dateFormatService, objUtils, userFieldService) {
    this.router = router;
    this.objService = objService;
    this.lookupService = lookupService;
    this.lsService = lsService;
    this.objToastService = objToastService;
    this.dateFormatService = dateFormatService;
    this.objUtils = objUtils;
    this.userFieldService = userFieldService;
    this.msscreenName = "Download From Finance";
    this.msLookupFrom = "From Lookup";
    this.msLookupTo = "To Lookup";
    this.msToDesc = '';
    this.msFromDesc = '';
    this.msClassID = '';
    this.mbloaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjModel = new _models_download_finance_model__WEBPACK_IMPORTED_MODULE_0__.DownloadFinanceModel();
    this.mobjLookupDataModel = new _models_download_finance_model__WEBPACK_IMPORTED_MODULE_0__.DownloadFinanceModel();
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_3__.GridSettings();
    this.maarraySelected = [];
    this.msLookupField = "";
    this.mbIsLoading = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mnumLineItemRowIndex = null;
    this.msCustomDateFormat = "";
    this.paramValueArray = [];
    this.mobjgrdModel = [];
    this.miPagesize = 10;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_2__.CommonConstants.gsServerDateFormat;
    this.mbReportDialog = false;
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.mobjUserData = {};
    this.bmlfSelectedCallback = args => args.dataItem;
    this.allRowsSelected = false;
    this.msReportDl = '';
    this.mbisGridShow = false;
    this.msCustomFinName = '';
    this.miMaxLengthForAcctDownload = 80;
    this.msSeparator = '×'; //'';
    this.miStartPosition = 1;
    this.miMaxResult = 501;
    this.mbautoCorrect = true;
    this.mbFinInterfaced = false;
    // public mbAPInterfaced: boolean = false;
    // public mbARInterfaced: boolean = false;
    // public mbGLInterfaced: boolean = false;
    this.marrBCDynamicTSF = _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__.DownloadFInance.garrBCDynamicTsf;
    this.marrQuickBookOnline = _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__.DownloadFInance.garrQuickBooksOnline;
    this.marrAccPac = _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__.DownloadFInance.garrAccPac;
    this.marrgreatPlains = _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__.DownloadFInance.garrGreatePlans;
    this.marrBME = _constant_download_finance_const__WEBPACK_IMPORTED_MODULE_4__.DownloadFInance.garrBME;
    this.marrTransactionType = [];
    this.rowCallback = context => {
      if (this.mobjModel.TableName == 'Account') {
        if (context.dataItem.Acct.length > this.miMaxLengthForAcctDownload || context.dataItem.Acct.toString().includes("'")) {
          return {
            gold: true
          };
        } else {
          //return { green: true };
        }
      }
    };
  }
  ngOnInit() {
    debugger;
    let parrFinSchema = JSON.parse(localStorage.getItem("SCMPHData"));
    if (parrFinSchema.length > 0) {
      if (parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE.toUpperCase() == 'CUSTOM FINANCE') {
        this.msCustomFinName = parrFinSchema[0].CustomFinanceName;
      } else {
        this.msCustomFinName = parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE;
      }
    }
    this.bmlfSetTransactionType(this.msCustomFinName);
    this.objUtils.getBMEScreePermission(this.msscreenName);
    this.mobjUserData = this.lsService.getUserSession();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjModel.TableName = 'Vendor Master';
    this.bmlfsetformLoadModel();
    if (this.msCustomFinName == 'QuickBooks Online') {
      this.bmlfGetQBConnectionStatus();
    } else {
      this.bmlfGetFinanceIterfacedStatus();
    }
  }
  bmlfonTypeChange() {
    this.bmlfsetformLoadModel();
    this.bmlfGetFinanceIterfacedStatus();
  }
  bmlfsetformLoadModel() {
    this.mobjModel.From = '';
    this.msFromDesc = '';
    this.mobjModel.To = '';
    this.msToDesc = '';
    this.mobjgrdModel = [];
    this.mbisGridShow = false;
    this.miStartPosition = 1;
    this.miMaxResult = 501;
    this.msClassID = '';
    this.mobjModel.Class = '';
  }
  bmlfonClose() {
    this.router.navigate(['main']);
  }
  bmlfonInitGridSettings() {
    const parrColumnList = Object.keys(this.mobjgrdModel[0]);
    parrColumnList.forEach(ele => {
      let pobjCol = {
        field: ele,
        title: ele,
        filter: '',
        type: 'text',
        filterable: true,
        hidden: this.mobjModel.TableName == 'Account' && ele == 'Spare1' ? true : false
      };
      if (ele == 'Sel') {
        pobjCol.hidden = true;
      }
      this.mobjGridSettings.columnsConfig.push(pobjCol);
    });
  }
  selectAllRows(e) {
    if (e.target.checked) {
      this.allRowsSelected = true;
      if (this.mobjModel.TableName == 'Account') {
        this.mobjgrdModel.forEach(ele => {
          if (ele.Acct.length <= this.miMaxLengthForAcctDownload && !ele.Acct.toString().includes("'")) {
            ele.Sel = true;
          } else {
            ele.Sel = false;
          }
        });
      } else {
        this.mobjgrdModel.forEach(ele => {
          ele.Sel = true;
        });
      }
    } else {
      this.allRowsSelected = false;
      this.mobjgrdModel.forEach(ele => {
        ele.Sel = false;
      });
    }
  }
  selectSingleRow(e, rowIndex) {
    if (e.target.checked == false) {
      this.mobjgrdModel[rowIndex].Sel = false;
    } else {
      if (this.mobjgrdModel[rowIndex].Acct.length <= this.miMaxLengthForAcctDownload && !this.mobjgrdModel[rowIndex].Acct.toString().includes("'")) {
        this.mobjgrdModel[rowIndex].Sel = true;
      } else {
        e.target.checked = false;
        this.mobjgrdModel[rowIndex].Sel = false;
        if (this.mobjgrdModel[rowIndex].Acct.length > this.miMaxLengthForAcctDownload) {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.MSG.ACCTDOWNLOADCHK') + this.miMaxLengthForAcctDownload);
        } else if (this.mobjgrdModel[rowIndex].Acct.toString().includes("'")) {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.MSG.ACCTDOWNLOADCHK1') + "'");
        }
      }
    }
  }
  bmlfonselectionChange(e) {
    debugger;
    if (e.selectedRows.length > 0) {
      e.selectedRows.forEach(ele => {
        this.maarraySelected.push(ele.dataItem);
      });
    } else if (e.deselectedRows.length > 0) {
      e.deselectedRows.forEach(ele => {
        let pobjTempData = ele.dataItem;
        this.maarraySelected = this.maarraySelected.filter(x => {
          if (x.Itemkey != pobjTempData.Itemkey) {
            return x;
          }
        });
      });
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
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, pnumRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      if (psLookUpKey == 'Class') {
        this.msClassID = '';
      }
      return false;
    }
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjLookupDataModel[psField] = "";
      return false;
    }
    let pobjReqData = {
      JSON: JSON.stringify({
        Details: [{
          TableName: psLookUpKey == 'Class' ? 'Class' : this.mobjModel.TableName,
          StartPosition: this.miStartPosition,
          MaxResult: 500
          //MaxResult: this.miMaxResult
        }],

        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.mbIsLoading = true;
    this.objService.GetLookupDataFromFinance(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.bmlfOpenErrorBlock('COMMON.MSG.NODATA');
        return false;
      }
      if (res.Response[0].ErrorCode != "") {
        if (res.Response[0].ResponseText != "") {
          this.bmlfOpenErrorBlock(res.Response[0].ResponseText);
          return false;
        } else {
          this.bmlfOpenErrorBlock('Server Error');
          return false;
        }
      }
      if (Object.entries(res).length > 0 && res.HeaderData.length > 0) {
        let psLookupHeading = '';
        if (psLookUpKey == 'Class') {
          psLookupHeading = psField;
        } else {
          psLookupHeading = this.mobjModel.TableName + ' ' + psField;
        }
        // res.LookupData.forEach(ele => {
        //   ele.RecDate = moment(ele.RecDate).format(this.msCustomDateFormat.toUpperCase());
        //   ele.IndentDate = moment(ele.IndentDate).format(this.msCustomDateFormat.toUpperCase());
        // });
        res.HeaderData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1 || psKey.search('DEX_ROW_TS') != -1 || psKey.search('DEX_ROW_TS') != -1 || psKey.search('CRTEXPDT') != -1 || psKey.search('MODIFDT') != -1 || psKey.search('BRTHDATE') != -1 || psKey.search('CREATDDT') != -1 || psKey.search('CRTCOMDT') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        // res.HeaderData.forEach(ele => {
        //   ele.CRTCOMDT = moment(ele.CRTCOMDT).format(this.msCustomDateFormat.toUpperCase());
        //   ele.CRTEXPDT = moment(ele.CRTEXPDT).format(this.msCustomDateFormat.toUpperCase());
        //   ele.MODIFDT = moment(ele.MODIFDT).format(this.msCustomDateFormat.toUpperCase());
        //   ele.CREATDDT = moment(ele.CREATDDT).format(this.msCustomDateFormat.toUpperCase());
        //   ele.DEX_ROW_TS = moment(ele.DEX_ROW_TS).format(this.msCustomDateFormat.toUpperCase());
        //   ele.BRTHDATE= moment(ele.BRTHDATE).format(this.msCustomDateFormat.toUpperCase());
        // });
        this.marrLookupGridData = res.HeaderData;
        this.mnumLineItemRowIndex = pnumRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.title = psLookupHeading;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = String(psValue).trim();
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let parrFilterdArr = [];
          /** --- Check : enter key matching record found. if find single row then direct call save lookup function --*/
          let pobjFirstInput = Object.keys(this.marrLookupGridData[0])[0];
          parrFilterdArr = this.marrLookupGridData.filter(obj => {
            if (String(obj[pobjFirstInput]).toUpperCase().trim() == String(psValue).toUpperCase().trim()) {
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
  bmlfSaveLookupField(pobjEvent) {
    debugger;
    this.mbIsLookupModal = false;
    if (pobjEvent.field == this.msLookupFrom) {
      this.mobjModel.From = pobjEvent.valueKey;
      this.msFromDesc = '';
    } else if (pobjEvent.field == this.msLookupTo) {
      this.mobjModel.To = pobjEvent.valueKey;
      this.msToDesc = '';
    } else if (pobjEvent.field == 'Class Lookup') {
      this.mobjModel.Class = pobjEvent.valueKey;
      this.msClassID = pobjEvent.value["Id"];
    }
    // if (this.mobjModel.TableName == 'Vendor Class') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Class_Key"];
    //     this.msFromDesc = pobjEvent.value["Description"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Class_Key"];
    //     this.msToDesc = pobjEvent.value["Description"];
    //   }
    // } else if (this.mobjModel.TableName == 'Vendor Master') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Vendor_Key"];
    //     this.msFromDesc = pobjEvent.value["Vendor_Name"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Vendor_Key"];
    //     this.msToDesc = pobjEvent.value["Vendor_Name"];
    //   }
    // } else if (this.mobjModel.TableName == 'Branch') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Branch_Key"];
    //     this.msFromDesc = pobjEvent.value["Company_Nam"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Branch_Key"];
    //     this.msToDesc = pobjEvent.value["Company_Nam"];
    //   }
    // } else if (this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'AR Terms') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Terms_Key"];
    //     this.msFromDesc = pobjEvent.value["Description"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Terms_Key"];
    //     this.msToDesc = pobjEvent.value["Description"];
    //   }
    // } else if (this.mobjModel.TableName == 'Customer Master') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Customer_Key"];
    //     this.msFromDesc = pobjEvent.value["Customer_Name"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Customer_Key"];
    //     this.msToDesc = pobjEvent.value["Customer_Name"];
    //   }
    // } else if (this.mobjModel.TableName == 'Customer Class') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Class_Key"];
    //     this.msFromDesc = pobjEvent.value["Class_Descr"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Class_Key"];
    //     this.msToDesc = pobjEvent.value["Class_Descr"];
    //   }
    // } else if (this.mobjModel.TableName == 'Sales Person') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Salesp_Key"];
    //     this.msFromDesc = pobjEvent.value["Salesp_Name"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Salesp_Key"];
    //     this.msToDesc = pobjEvent.value["Salesp_Name"];
    //   }
    // } else if (this.mobjModel.TableName == 'AR FOB') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["FOB_Key"];
    //     this.msFromDesc = pobjEvent.value["Description"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["FOB_Key"];
    //     this.msToDesc = pobjEvent.value["Description"];
    //   }
    // } else if (this.mobjModel.TableName == 'AR Ship Via') {
    //   return '';
    // } else if (this.mobjModel.TableName == 'AR Ship To') {
    //   return '';
    // } else if (this.mobjModel.TableName == 'Invoice') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Tranno"];
    //     this.msFromDesc = "";
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Tranno"];
    //     this.msToDesc = "";
    //   }
    // } else if (this.mobjModel.TableName == 'Territory') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["Terr_Key"];
    //     this.msFromDesc = pobjEvent.value["Description"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["Terr_Key"];
    //     this.msToDesc = pobjEvent.value["Description"];
    //   }
    // } else if (this.mobjModel.TableName == 'GL Entries') {
    //   if (pobjEvent.field == this.msLookupFrom) {
    //     this.mobjModel.From = pobjEvent.value["JrnlBtchNo"];
    //     this.msFromDesc = pobjEvent.value["Description"];
    //   } else {
    //     this.mobjModel.To = pobjEvent.value["JrnlBtchNo"];
    //     this.msToDesc = pobjEvent.value["Description"];
    //   }
    // }
  }

  bmlfGetLookupKey() {
    if (this.mobjModel.TableName == '') {
      return '';
    } else if (this.mobjModel.TableName == 'Vendor Class') {
      return 'VendorClass';
    } else if (this.mobjModel.TableName == 'Vendor Master') {
      return 'VendorKey';
    } else if (this.mobjModel.TableName == 'Branch') {
      return 'Branch';
    } else if (this.mobjModel.TableName == 'AP Terms') {
      return 'APTerms';
    } else if (this.mobjModel.TableName == 'Customer Master') {
      return 'Customer';
    } else if (this.mobjModel.TableName == 'Customer Class') {
      return 'CustomerClass';
    } else if (this.mobjModel.TableName == 'Sales Person') {
      return 'SalesPerson';
    } else if (this.mobjModel.TableName == 'AR FOB') {
      return 'ARFOB';
    } else if (this.mobjModel.TableName == 'AR Ship Via') {
      return '';
    } else if (this.mobjModel.TableName == 'AR Ship To') {
      return '';
    } else if (this.mobjModel.TableName == 'AR Terms') {
      return 'ARTerms';
    } else if (this.mobjModel.TableName == 'Territory') {
      return 'Territory';
    }
  }
  bmlfOpenErrorBlock(psMsg) {
    this.objToastService.notifyError(this.objUtils.bmgfonTranslate(psMsg));
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psfield) {
    if (this.mobjModel.TableName == 'Vendor Class') {
      return 'Class_Key';
    } else if (this.mobjModel.TableName == 'Vendor Master') {
      return 'Vendor_Key';
    } else if (this.mobjModel.TableName == 'Branch') {
      return 'Branch_Key';
    } else if (this.mobjModel.TableName == 'AP Terms') {
      return 'Terms_Key';
    } else if (this.mobjModel.TableName == 'Customer Master') {
      return 'Customer_Key';
    } else if (this.mobjModel.TableName == 'Customer Class') {
      return 'Class_Key';
    } else if (this.mobjModel.TableName == 'Sales Person') {
      return 'Salesp_Key';
    } else if (this.mobjModel.TableName == 'AR FOB') {
      return 'FOB_Key';
    } else if (this.mobjModel.TableName == 'AR Terms') {
      return 'Terms_Key';
    } else if (this.mobjModel.TableName == 'Invoice') {
      return 'Tranno';
    } else if (this.mobjModel.TableName == 'Territory') {
      return 'Terr_Key';
    } else if (this.mobjModel.TableName == 'GL Entries') {
      return 'JrnlBtchNo';
    } else if (this.mobjModel.TableName == 'AR Ship Via') {
      return '';
    } else if (this.mobjModel.TableName == 'AR Ship To') {
      return '';
    }
  }
  ////Value from Modal
  bmlfGetModelField(psfield) {
    if (psfield == this.msLookupFrom) {
      this.mobjModel.From = '';
      this.msFromDesc = '';
    } else if (psfield == this.msLookupTo) {
      this.mobjModel.To = '';
      this.msToDesc = '';
    } else if (psfield == 'Class Lookup') {
      this.mobjModel.Class = '';
      this.msClassID = '';
    }
  }
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => String(obj[psInputKey]).toUpperCase() == String(pobjData.searchValue).toUpperCase());
      }
      if (parrFilterData.length == 0) {
        this.bmlfGetModelField(pobjData.field);
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  // Report expanded Modal
  bmlfReportModal(psKey) {
    debugger;
    if (psKey == 'open') {
      this.mbReportDialog = true;
    } else if (psKey == 'close' || psKey == 'ok') {
      this.mbReportDialog = false;
      this.bmlfsetformLoadModel();
      this.maarraySelected = [];
      this.mbloaderEnabled = false;
    }
  }
  //Open Task MODAL 
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msscreenName;
      pobjFormRec.primeKey = "";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //Services 
  bmlfProcessValidate(upload = false) {
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return false;
    }
    ;
    if (this.mobjModel.TableName == '') {
      return false;
    }
    if (this.mobjModel.From != '' && this.mobjModel.To != '') {
      if (this.mobjModel.From > this.mobjModel.To) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.VALUECOMPARE'));
        setTimeout(function () {
          document.getElementById('txtFrom').focus();
        }, 10);
        return false;
      }
    }
    if (upload == true) {
      if (this.mobjgrdModel.length == 0) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.NODATA'));
        return false;
      }
      let parrSelected = this.mobjgrdModel.filter(x => x['Sel'] == true);
      if (parrSelected.length == 0) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.SELECTRECORD'));
        return false;
      }
    }
    return true;
  }
  bmlfonProcess() {
    debugger;
    let pbResult = false;
    this.mobjgrdModel = [];
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_3__.GridSettings();
    this.maarraySelected = [];
    pbResult = this.bmlfProcessValidate();
    if (pbResult == true) {
      this.mbIsLoading = true;
      let pobjReqData = {
        JSON: JSON.stringify({
          Details: [{
            From: this.mobjModel.From,
            To: this.mobjModel.To,
            TableName: this.mobjModel.TableName,
            StartPosition: this.miStartPosition,
            //MaxResult: this.miMaxResult
            MaxResult: 500
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.GetFinDataToDisplay(pobjReqData).subscribe(res => {
        debugger;
        this.mbIsLoading = false;
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          this.mbIsLoading = false;
          return false;
        }
        if (res.Response[0].ErrorCode != "") {
          if (res.Response[0].ResponseText != "") {
            this.bmlfOpenErrorBlock(res.Response[0].ResponseText);
            return false;
          } else {
            this.bmlfOpenErrorBlock('Server Error');
            return false;
          }
        }
        if (res.HeaderData.length > 0) {
          this.mbisGridShow = true;
          this.allRowsSelected = false;
          //--------------
          if (this.mobjModel.Class != '') {
            res.HeaderData.forEach(ele => {
              ele.Acct = ele.Acct + this.msSeparator + this.mobjModel.Class;
              ele.SubSysKy = ele.SubSysKy + this.msSeparator + this.msClassID;
            });
          }
          //--------------
          // res.HeaderData.forEach(ele => {
          //   ele.CRTCOMDT = moment(ele.CRTCOMDT).format(this.msCustomDateFormat.toUpperCase());
          //   ele.CRTEXPDT = moment(ele.CRTEXPDT).format(this.msCustomDateFormat.toUpperCase());
          //   ele.MODIFDT = moment(ele.MODIFDT).format(this.msCustomDateFormat.toUpperCase());
          //   ele.CREATDDT = moment(ele.CREATDDT).format(this.msCustomDateFormat.toUpperCase());
          //   ele.DEX_ROW_TS = moment(ele.DEX_ROW_TS).format(this.msCustomDateFormat.toUpperCase());
          //   ele.BRTHDATE = moment(ele.BRTHDATE).format(this.msCustomDateFormat.toUpperCase());
          // });
          res.HeaderData.forEach(ele => {
            Object.keys(ele).forEach(key => {
              let psKey = key.toUpperCase();
              if (psKey.search('DEX_ROW_TS') != -1 || psKey.search('DEX_ROW_TS') != -1 || psKey.search('CRTEXPDT') != -1 || psKey.search('MODIFDT') != -1 || psKey.search('BRTHDATE') != -1 || psKey.search('CREATDDT') != -1 || psKey.search('CRTCOMDT') != -1) {
                if (ele[key] && ele[key] != '') {
                  ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
                } else {
                  ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__().format(this.msCustomDateFormat.toUpperCase());
                }
              }
            });
          });
          this.mobjgrdModel = res.HeaderData;
          this.bmlfonInitGridSettings();
          this.mbIsLoading = false;
        } else {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('DOWNLOADFINANCE.NODATA'));
          this.mbIsLoading = false;
        }
      }), err => {
        console.log(err);
        this.mbIsLoading = false;
      };
    }
  }
  bmlfonDownload(evtWithId) {
    debugger;
    if (this.bmlfCheckForFinanceModuleInterfaced() == false) {
      return;
    }
    let pbResult = false;
    pbResult = this.bmlfProcessValidate(true);
    let parrSelected = this.mobjgrdModel.filter(x => x['Sel'] == true);
    if (this.mobjModel.TableName == 'Account') {
      parrSelected.forEach(ele => {
        if (ele.Description.length > 50) {
          ele.Description = ele.Description.substr(0, 50);
        }
        ele.User3 = this.msClassID;
      });
    }
    if (pbResult == true) {
      this.mbIsLoading = true;
      let pobjReqData = {
        JSON: JSON.stringify({
          Header: [{
            TableName: this.mobjModel.TableName,
            DownloadWithID: evtWithId
          }],
          Details: parrSelected,
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.DownloadDataToBME(pobjReqData).subscribe(res => {
        debugger;
        this.mbIsLoading = false;
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          this.msReportDl = res.Response[0].ResponseText;
          this.bmlfReportModal('open');
          this.bmlfsetformLoadModel();
          this.mbIsLoading = false;
        } else {
          this.msReportDl = res.Response[0].ResponseText;
          this.bmlfReportModal('open');
          this.bmlfsetformLoadModel();
          this.mbIsLoading = false;
        }
      }), err => {
        console.log(err);
        this.mbIsLoading = false;
      };
    }
  }
  //-----------------------------------------
  bmlfNextPrevious(event) {
    if (event == 'NEXT') {
      this.miStartPosition = this.miMaxResult;
      this.miMaxResult = this.miStartPosition + 500;
    } else if (event == 'PREVIOUS') {
      this.miStartPosition = this.miStartPosition - 500;
      if (this.miStartPosition < 0) {
        this.miStartPosition = 1;
        this.miMaxResult = this.miStartPosition + 500;
      } else {
        this.miMaxResult = this.miMaxResult - 500;
      }
    }
  }
  bmlfOnChangeNavigation() {
    if (this.miStartPosition < 0 || this.miStartPosition == null) {
      this.miStartPosition = 1;
      this.miMaxResult = parseInt(this.miStartPosition.toString()) + 500;
    } else {
      this.miMaxResult = parseInt(this.miStartPosition.toString()) + 500;
    }
  }
  //-----------------------------------------
  /**----Get decimal validation---- */
  bmlfValidationdecimalCheck(e) {
    if (!(e.keyCode > 95 && e.keyCode < 106 || e.keyCode > 47 && e.keyCode < 58 || e.keyCode == 8) || e.keyCode > 31 && e.keyCode > 95 && e.keyCode < 106) {
      return false;
    }
  }
  //-----------------------------------------
  bmlfOnchange() {
    if (this.mobjModel.Class == '') {
      this.msClassID = '';
    }
  }
  //------------------------------------------
  bmlfGetQBConnectionStatus() {
    let pobjReqData = {
      ScreenName: 'QBConnection',
      LookUpKey: 'CheckStatus'
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        if (res.LookupData[0].QBConnectStatus == 'CONNECT') {
          this.bmlfGetFinanceIterfacedStatus();
        } else {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.QBCONNECTCHK'));
          this.router.navigate(['main']);
        }
      }
    });
  }
  //--------------------------------
  bmlfCheckForFinanceModuleInterfaced() {
    if (this.mobjModel.TableName == 'Vendor Master' || this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'Voucher' || this.mobjModel.TableName == 'Vendor Class') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.APINTERFACED'));
        return false;
      }
    } else if (this.mobjModel.TableName == 'Customer Master' || this.mobjModel.TableName == 'AR Terms' || this.mobjModel.TableName == 'Invoice' || this.mobjModel.TableName == 'Sales Person' || this.mobjModel.TableName == 'Customer Class' || this.mobjModel.TableName == 'Territory' || this.mobjModel.TableName == 'AR Ship To' || this.mobjModel.TableName == 'AR Ship Via' || this.mobjModel.TableName == 'AR Tax' || this.mobjModel.TableName == 'AR FOB') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.ARINTERFACED'));
        return false;
      }
    } else if (this.mobjModel.TableName == 'GL Entries' || this.mobjModel.TableName == 'Account') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.GLINTERFACED'));
        return false;
      }
    }
    return true;
  }
  //--------------------------------
  //-------------------------------------------------
  bmlfGetFinanceIterfacedStatus() {
    let psfilter = '';
    if (this.mobjModel.TableName == 'Vendor Master' || this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'Voucher' || this.mobjModel.TableName == 'Vendor Class') {
      psfilter = 'AP_Interfaced';
    } else if (this.mobjModel.TableName == 'Customer Master' || this.mobjModel.TableName == 'AR Terms' || this.mobjModel.TableName == 'Invoice' || this.mobjModel.TableName == 'Sales Person' || this.mobjModel.TableName == 'Customer Class' || this.mobjModel.TableName == 'Territory' || this.mobjModel.TableName == 'AR Ship To' || this.mobjModel.TableName == 'AR Ship Via' || this.mobjModel.TableName == 'AR Tax' || this.mobjModel.TableName == 'AR FOB') {
      psfilter = 'AR_Interfaced';
    } else if (this.mobjModel.TableName == 'GL Entries' || this.mobjModel.TableName == 'Account') {
      psfilter = 'GL_Interfaced';
    }
    let pobjReqData = {
      ScreenName: 'Configuration Finance Setup',
      LookUpKey: 'CheckInterfacing',
      Filter1: psfilter
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        if (res.LookupData[0].Default_Value.toUpperCase() == 'YES') {
          //Enable field
          this.mbFinInterfaced = true;
        } else {
          //Disable field
          this.mbFinInterfaced = false;
        }
        this.bmlfCheckForFinanceModuleInterfaced();
      }
    });
  }
  //-------------------------------------------------
  bmlfSetTransactionType(customFinName) {
    debugger;
    if (customFinName == 'BC Dynamic 365') {
      this.marrTransactionType = this.marrBCDynamicTSF;
    } else if (customFinName == 'QuickBooks Online') {
      this.marrTransactionType = this.marrQuickBookOnline;
    } else if (customFinName == 'GreatPlains') {
      this.marrTransactionType = this.marrgreatPlains;
    } else if (customFinName == 'ACCPAC') {
      this.marrTransactionType = this.marrAccPac;
    } else if (customFinName == "BME") {
      this.marrTransactionType = this.marrBME;
    }
  }
  static #_ = this.ɵfac = function DownloadFinanceComponent_Factory(t) {
    return new (t || DownloadFinanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_download_finance_service__WEBPACK_IMPORTED_MODULE_5__.DownloadFinanceService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_9__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_11__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: DownloadFinanceComponent,
    selectors: [["app-download-finance"]],
    viewQuery: function DownloadFinanceComponent_Query(rf, ctx) {
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
    decls: 99,
    vars: 53,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["onclick", "window.open('../../../../../../assets/help files/Download From Finance.pdf','_blank');", "type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["tabindex", "1", "id", "cmbTableName", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", 3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["type", "text", "tabindex", "2", "maxlength", "100", "id", "txtFrom", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], ["hidden", "true", 1, "col-form-label"], ["type", "text", "maxlength", "100", "id", "txtFromDescription", "disabled", "", "hidden", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "tabindex", "3", "maxlength", "100", "id", "txtTo", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "blur"], ["type", "text", "maxlength", "100", "id", "txtToDescription", "disabled", "", "hidden", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "seprator"], [1, "modal-footer"], ["type", "button", "id", "btnProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnUpload", 1, "btn", "btn-info", "btn-sm", 3, "hidden", "click"], ["type", "button", "id", "btnUpload", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "dlgLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "processMsgDialog", "style", "z-index: 10000000;", "class", "process-dialog", 3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["value", "", 3, "value"], [1, "col-md-6", "flex_box", "flex_h_s_b", "pl-2", "pr-1"], ["title", "Previous", 1, "input-group-addon", "fsearchPre", 3, "click"], [1, "fa", "fa-caret-square-o-left"], ["id", "txtStartPosition", 1, "form-control", 3, "ngModel", "spinners", "step", "decimals", "format", "min", "autoCorrect", "ngModelChange", "blur"], [1, "col-md-6", "flex_box", "flex_h_s_b", "pl-0", "pr-2"], ["id", "txtMaxResult", "disabled", "", 1, "form-control", 3, "ngModel", "spinners", "step", "decimals", "format", "autoCorrect", "min", "ngModelChange"], ["title", "Next", 1, "input-group-addon", "fsearchNext", 3, "click"], [1, "fa", "fa-caret-square-o-right"], ["type", "text", "tabindex", "2", "maxlength", "100", "id", "txtClass", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "blur"], ["type", "text", "maxlength", "100", "id", "txtClassID", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "divKendodiv", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "kendoLookupGrid", 1, "custom_h_grid", "max_scroll", "low_space_table", 3, "filterable", "sortable", "filter", "ngClass", "kendoGridBinding", "reorderable", "sort", "skip", "selectable", "columnMenu", "kendoGridSelectBy", "selectedKeys", "loading", "resizable", "height", "rowClass", "selectionChange", "dataStateChange"], ["grid", "kendoGrid"], ["field", "checked", "width", "30"], ["kendoGridHeaderTemplate", ""], ["kendoGridCellTemplate", ""], [3, "noRecords"], ["media", "(max-width: 767px)"], ["media", "(min-width: 768px)", "width", "150", 3, "field", "title", "hidden", 4, "ngFor", "ngForOf"], ["kendoPagerTemplate", ""], ["type", "checkbox", "name", "selectAll", 3, "ngModel", "change", "ngModelChange"], ["type", "checkbox", 3, "name", "ngModel", "ngModelChange", "change"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], ["media", "(min-width: 768px)", "width", "150", 3, "field", "title", "hidden"], [3, "pageSizes"], [3, "keyData", "saveLookupField", "closeLookup"], ["id", "processMsgDialog", 1, "process-dialog", 2, "z-index", "10000000", 3, "close"], [3, "innerHTML"], ["kendoButton", "", "id", "cmdCloseDescription", 3, "click"], [3, "taskData", "closeTaskModal"]],
    template: function DownloadFinanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DownloadFinanceComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 12)(23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_button_click_25_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 23)(38, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_Template_select_ngModelChange_38_listener($event) {
          return ctx.mobjModel.TableName = $event;
        })("change", function DownloadFinanceComponent_Template_select_change_38_listener() {
          return ctx.bmlfonTypeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, DownloadFinanceComponent_option_39_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, DownloadFinanceComponent_div_40_Template, 17, 17, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, DownloadFinanceComponent_div_41_Template, 19, 8, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 18)(43, "div", 19)(44, "div", 20)(45, "div", 21)(46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 23)(50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_Template_input_ngModelChange_50_listener($event) {
          return ctx.mobjModel.From = $event;
        })("focus", function DownloadFinanceComponent_Template_input_focus_50_listener() {
          return ctx.bmlfOnGlobalFocus("From", ctx.mobjModel.From);
        })("blur", function DownloadFinanceComponent_Template_input_blur_50_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupFrom, ctx.msscreenName, "From", "blur", ctx.mobjModel.From, "custom", "txtFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_span_click_51_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupFrom, ctx.msscreenName, "From", "click", ctx.mobjModel.From, "custom", "txtFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 23)(60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_Template_input_ngModelChange_60_listener($event) {
          return ctx.msFromDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 18)(62, "div", 19)(63, "div", 20)(64, "div", 21)(65, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 23)(69, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_Template_input_ngModelChange_69_listener($event) {
          return ctx.mobjModel.To = $event;
        })("focus", function DownloadFinanceComponent_Template_input_focus_69_listener() {
          return ctx.bmlfOnGlobalFocus("To", ctx.mobjModel.To);
        })("blur", function DownloadFinanceComponent_Template_input_blur_69_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupTo, ctx.msscreenName, "To", "blur", ctx.mobjModel.To, "custom", "txtTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_span_click_70_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupTo, ctx.msscreenName, "To", "click", ctx.mobjModel.To, "custom", "txtTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](71, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 19)(73, "div", 20)(74, "div", 21)(75, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](78, "div", 23)(79, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DownloadFinanceComponent_Template_input_ngModelChange_79_listener($event) {
          return ctx.msToDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](80, "hr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](81, DownloadFinanceComponent_div_81_Template, 13, 22, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 35)(83, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_button_click_83_listener() {
          return ctx.bmlfonProcess();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_button_click_86_listener() {
          return ctx.bmlfonDownload("YES");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_button_click_89_listener() {
          return ctx.bmlfonDownload("NO");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DownloadFinanceComponent_Template_button_click_92_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, DownloadFinanceComponent_app_custom_lookup_modal_96_Template, 1, 1, "app-custom-lookup-modal", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](97, DownloadFinanceComponent_kendo_dialog_97_Template, 6, 4, "kendo-dialog", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](98, DownloadFinanceComponent_app_common_task_modal_98_Template, 1, 1, "app-common-task-modal", 43);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](51, _c4, ctx.mbloaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 27, "DOWNLOADFINANCE.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 29, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 31, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](36, 33, "DOWNLOADFINANCE.TRANSACTIONTYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjModel.TableName);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrTransactionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.msCustomFinName == "QuickBooks Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mobjModel.TableName == "Account" && ctx.msCustomFinName == "QuickBooks Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](48, 35, "DOWNLOADFINANCE.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjModel.From);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](58, 37, "DOWNLOADFINANCE.FROMDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.msFromDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](67, 39, "DOWNLOADFINANCE.TO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjModel.To);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](77, 41, "DOWNLOADFINANCE.TODESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.msToDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbisGridShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](85, 43, "DOWNLOADFINANCE.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.msCustomFinName != "QuickBooks Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](88, 45, "DOWNLOADFINANCE.DOWNLOADWITHID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](91, 47, "DOWNLOADFINANCE.DOWNLOAD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](94, 49, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbReportDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__.NumericTextBoxComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.SelectionDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.HeaderTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.PagerTemplateDirective, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    styles: [".fsearchPre[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #ced4da;\n  border: 1px solid #ced4da;\n  padding: 0px 0px 0px 0px;\n  height: 29px;\n  line-height: 25px;\n  text-align: center;\n  border-radius: 5px 0px 0px 5px;\n  cursor: pointer;\n  flex: 0 0 35px;\n  position: relative;\n  right: -3px;\n  z-index: 100;\n}\n\n.fsearchNext[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #ced4da;\n  border: 1px solid #ced4da;\n  padding: 0px 0px 0px 0px;\n  height: 29px;\n  line-height: 25px;\n  text-align: center;\n  margin-left: -5px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer;\n  flex: 0 0 35px;\n  z-index: 100;\n}\n\n  tr.gold,   tr.k-alt.gold {\n  background-color: #FFE4E1 !important;\n  border-style: solid;\n  border-color: gray !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9maW5hbmNlL2NvbXBvbmVudHMvZG93bmxvYWQtZmluYW5jZS9kb3dubG9hZC1maW5hbmNlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9maW5hbmNlL2NvbXBvbmVudHMvZG93bmxvYWQtZmluYW5jZS9kb3dubG9hZC1maW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmZzZWFyY2hQcmUge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZDRkYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsZXg6IDAgMCAzNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC0zcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5mc2VhcmNoTmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbGV4OiAwIDAgMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHRyLmdvbGQsOjpuZy1kZWVwIHRyLmstYWx0LmdvbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTRFMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIH0iLCIuZnNlYXJjaFByZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZDRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAwIDAgMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTNweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZnNlYXJjaE5leHQge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCAzNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbjo6bmctZGVlcCB0ci5nb2xkLCA6Om5nLWRlZXAgdHIuay1hbHQuZ29sZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU0RTEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64899:
/*!********************************************************************************************************!*\
  !*** ./src/app/main/finance/components/download-upload-defaults/download-upload-defaults.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadUploadDefaultsComponent: () => (/* binding */ DownloadUploadDefaultsComponent)
/* harmony export */ });
/* harmony import */ var D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _models_download_upload_default_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/download-upload-default.model */ 26079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _http_download_upload_default_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/download-upload-default.service */ 6162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/alert.service */ 99758);
/* harmony import */ var _core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/toast-message.service */ 48770);
/* harmony import */ var _core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/utility.services */ 14158);
/* harmony import */ var _shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 21916);




















function DownloadUploadDefaultsComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-loader");
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function DownloadUploadDefaultsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_div_35_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.bmlfswitchTab("TAB2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, ctx_r1.mstabType == "TAB2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "DOWNLOADUPLOADDEFAULTS.TAB2"), " ");
  }
}
function DownloadUploadDefaultsComponent_app_custom_lookup_modal_179_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-custom-lookup-modal", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveLookupField", function DownloadUploadDefaultsComponent_app_custom_lookup_modal_179_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r7.bmlfSaveLookupField($event));
    })("closeLookup", function DownloadUploadDefaultsComponent_app_custom_lookup_modal_179_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r9.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("keyData", ctx_r2.mobjLookupKeyData);
  }
}
function DownloadUploadDefaultsComponent_kendo_dialog_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "kendo-dialog", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("close", function DownloadUploadDefaultsComponent_kendo_dialog_180_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r10.bmlfonDialogAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_kendo_dialog_180_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_kendo_dialog_180_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.ASKSAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function DownloadUploadDefaultsComponent_app_common_task_modal_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-common-task-modal", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTaskModal", function DownloadUploadDefaultsComponent_app_common_task_modal_181_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("taskData", ctx_r4.mobjTaskData);
  }
}
const _c1 = function (a0) {
  return {
    modalLoading: a0
  };
};
class DownloadUploadDefaultsComponent {
  constructor(location, objService, activeRoute, objAlertService, objToastService, objUtils, objLookupService, router, dateFormatService, lsService, userService) {
    this.location = location;
    this.objService = objService;
    this.activeRoute = activeRoute;
    this.objAlertService = objAlertService;
    this.objToastService = objToastService;
    this.objUtils = objUtils;
    this.objLookupService = objLookupService;
    this.router = router;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.userService = userService;
    this.msScreenName = 'Upload and Download Defaults';
    this.mObjModel = new _models_download_upload_default_model__WEBPACK_IMPORTED_MODULE_1__.DownloadUploadDfltModel();
    this.mObjModelBlank = new _models_download_upload_default_model__WEBPACK_IMPORTED_MODULE_1__.DownloadUploadDfltModel();
    this.mobjLookupDataModel = new _models_download_upload_default_model__WEBPACK_IMPORTED_MODULE_1__.DownloadUploadDfltModel();
    this.mbChange = false;
    this.mbShowDialog = false;
    this.msCallFor = "";
    this.mbloaderEnabled = false;
    this.mbisLookupModal = false;
    this.mbIsLoading = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.mnumLineItemRowIndex = null;
    this.mbIsLookupModal = false;
    this.msPrecisionFormat = '';
    this.miPrecision = 0;
    this.msLookupField = "";
    this.mbisOvrVendAddr = false;
    this.mbisAddVendName = false;
    this.mbisOvrCustAddr = false;
    this.mbisAddCustName = false;
    this.mbisOvrBMEInvQBInv = false;
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.mobjUserData = {};
    this.msCustomDateFormat = '';
    this.msLookupVendorClass = 'Vendor Class Lookup';
    this.msLookupExpAccount = 'Account Lookup';
    this.msLookupCustomerClass = 'Customer Class Lookup';
    this.msCalendarDescription = '';
    this.msPopQBRefNoVouch = 'IO';
    this.mstabType = "TAB1";
    this.msCustomFinName = '';
  }
  ngOnInit() {
    //Interface wise show dropdown option
    let parrFinSchema = JSON.parse(localStorage.getItem("SCMPHData"));
    if (parrFinSchema.length > 0) {
      if (parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE.toUpperCase() == 'CUSTOM FINANCE') {
        this.msCustomFinName = parrFinSchema[0].CustomFinanceName;
      } else {
        this.msCustomFinName = parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE;
      }
    }
    this.mobjUserData = this.lsService.getUserSession();
    this.objUtils.getBMEScreePermission(this.msScreenName);
    this.mObjModel.PopQBRefNoVouch = this.msPopQBRefNoVouch;
    this.bmlfGetDataOnLoad();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
  }
  bmlfGetDataOnLoad() {
    debugger;
    let reqData = {
      JSON: JSON.stringify({
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.mbIsLoading = true;
    this.objService.BMGFGetUpldDnldDefaults(reqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        return;
      }
      if (res.HeaderData.length > 0) {
        this.mObjModel = res.HeaderData[0];
        if (this.mObjModel.OvrVendAddr == "1") {
          this.mObjModel.OvrVendAddr = true;
        } else {
          this.mObjModel.OvrVendAddr = false;
        }
        if (this.mObjModel.AddVendName == "1") {
          this.mObjModel.AddVendName = true;
        } else {
          this.mObjModel.AddVendName = false;
        }
        if (this.mObjModel.OvrCustAddr == "1") {
          this.mObjModel.OvrCustAddr = true;
        } else {
          this.mObjModel.OvrCustAddr = false;
        }
        if (this.mObjModel.AddCustName == "1") {
          this.mObjModel.AddCustName = true;
        } else {
          this.mObjModel.AddCustName = false;
        }
        if (this.mObjModel.OvrBMEInvQBInv == "1") {
          this.mObjModel.OvrBMEInvQBInv = true;
        } else {
          this.mObjModel.OvrBMEInvQBInv = false;
        }
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  bmlfswitchTab(type) {
    var _this = this;
    return (0,D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (type == 'TAB1') {
        _this.mstabType = 'TAB1';
      } else if (type == 'TAB2') {
        _this.mstabType = 'TAB2';
      }
    })();
  }
  bmlfGetLookupDes(pobjData) {
    let parrSetKeyData = [{
      KeyCode: 'CALENDARKEY',
      KeyValue1: pobjData.CalendarKey,
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
    this.userService.bmlfFetchKeyDescription(reqData).subscribe(res => {
      this.mLookupDesc = res.LookupData;
      this.mLookupDesc.forEach(element => {
        if (element.KeyCode == 'CALENDARKEY') {
          this.msCalendarDescription = element.KeyDescription;
        }
      });
    });
  }
  //Open Task MODAL 
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msScreenName;
      pobjFormRec.primeKey = '';
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  bmlfViewHelpDoc() {
    window.open('../../../../../assets/help files/Upload and Download Defaults.pdf', '_blank');
  }
  bmlfonClose() {
    debugger;
    if (!this.mbChange) {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbShowDialog = true;
      this.msCallFor = "FormClose";
    }
  }
  //Lookup
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, pnumRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjLookupDataModel[psField] = "";
      this.mbIsLoading = false;
      return false;
    }
    let psReqData;
    if (psLookUpKey != "") {
      psReqData = {
        "ScreenName": psScreenName,
        "LookUpKey": psLookUpKey,
        "Filter1": "",
        "Filter2": "",
        "Filter3": "",
        "Filter4": "",
        "Filter5": ""
      };
    }
    ;
    this.objLookupService.getLookup(psReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.bmlfOpenErrorBlock('COMMON.MSG.NODATA');
        return false;
      }
      let obj1 = {};
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        // res.LookupData.forEach(ele => {
        //   if (psLookUpKey == "PlanningCalendar") {
        //     ele.RecDate = moment(ele.RecDate).format(this.msCustomDateFormat.toUpperCase());
        //   }
        // });
        this.marrLookupGridData = res.LookupData;
        this.mnumLineItemRowIndex = pnumRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
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
    if (pobjEvent.field == this.msLookupVendorClass) {
      this.mObjModel.VendClass = pobjEvent.value["Class_Key"].trim();
      this.mObjModel.VendClassDesc = pobjEvent.value["Description"].trim();
    } else if (pobjEvent.field == this.msLookupCustomerClass) {
      this.mObjModel.CustClass = pobjEvent.value["Class_Key"].trim();
      this.mObjModel.CustClassDesc = pobjEvent.value["Class_Descr"].trim();
    } else if (pobjEvent.field == this.msLookupExpAccount) {
      this.mObjModel.ExpAccount = pobjEvent.value["Acct"].trim();
      this.mObjModel.ExpAccountDesc = pobjEvent.value["Description"].trim();
    }
    this.bmlfonChange();
  }
  bmlfonChange() {
    this.mbChange = true;
    if (this.mObjModel.VendClass == '') {
      this.mObjModel.VendClassDesc = '';
    }
    if (this.mObjModel.CustClass == '') {
      this.mObjModel.CustClassDesc = '';
    }
    if (this.mObjModel.ExpAccount == '') {
      this.mObjModel.ExpAccountDesc = '';
    }
  }
  bmlfOpenErrorBlock(psMsg) {
    this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate(psMsg));
  }
  bmlfGetInputColumn(psfield) {
    if (psfield == this.msLookupCustomerClass) {
      return 'Class_Key';
    } else if (psfield == this.msLookupVendorClass) {
      return 'Class_Key';
    } else if (psfield == this.msLookupExpAccount) {
      return 'Acct';
    }
  }
  //Return Model Field
  bmlfGetModelField(psfield, rowIndex) {
    if (psfield == this.msLookupCustomerClass) {
      return 'CustClass';
    } else if (psfield == this.msLookupVendorClass) {
      return 'VendClass';
    } else if (psfield == this.msLookupExpAccount) {
      return 'ExpAccount';
    }
  }
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        let psModelField = this.bmlfGetModelField(pobjData.field, pobjData.eleId);
        this.mObjModel[psModelField] = '';
        this.bmlfonChange();
      }
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
  bmlfonValidateFormData() {
    // if (this.mObjModel.CalendarKey == '') {
    //   this.objToastService.notifyError((this.objUtils.bmgfonTranslate('MPSSETUP.MSG.CALENDARKEY')));
    //   setTimeout(function () { document.getElementById('txtCalendarKey').focus(); }, 10);  //Avanish 8May20 SCR:134599 
    //   return false;
    // }
    return true;
  }
  bmlfonSave() {
    //check Write permission
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    let pbResult = this.bmlfonValidateFormData();
    if (pbResult == false) {
      return;
    }
    if (!this.mbChange) {
      return;
    }
    ;
    this.msCallFor = "Save";
    this.bmlfonSubmitData();
  }
  bmlfonSubmitData() {
    debugger;
    //check Write permission
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    if (!this.mbChange) {
      return;
    }
    ;
    let pbResult = this.bmlfonValidateFormData();
    if (pbResult) {
      let pobjModel = Object.assign({}, this.mObjModel);
      if (pobjModel.OvrVendAddr == false) {
        pobjModel.OvrVendAddr = "0";
      } else {
        pobjModel.OvrVendAddr = "1";
      }
      if (pobjModel.AddVendName == false) {
        pobjModel.AddVendName = "0";
      } else {
        pobjModel.AddVendName = "1";
      }
      if (pobjModel.OvrCustAddr == false) {
        pobjModel.OvrCustAddr = "0";
      } else {
        pobjModel.OvrCustAddr = "1";
      }
      if (pobjModel.AddCustName == false) {
        pobjModel.AddCustName = "0";
      } else {
        pobjModel.AddCustName = "1";
      }
      if (pobjModel.OvrBMEInvQBInv == false) {
        pobjModel.OvrBMEInvQBInv = "0";
      } else {
        pobjModel.OvrBMEInvQBInv = "1";
      }
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            ...pobjModel
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.BMGFSaveUpldDnldDefaults(reqData).subscribe(res => {
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          this.objToastService.notifySuccess(this.objUtils.bmgfonTranslate('COMMON.MSG.SAVE'));
          if (this.msCallFor == "Save") {
            this.mbChange = false;
            this.mbShowDialog = false;
            this.bmlfGetDataOnLoad();
          }
          if (this.msCallFor == "FormClose") {
            this.router.navigate(['/main/dashboard/dashboardpage']);
          }
        } else {
          if (this.objUtils.bmgffindString(res.Response[0].ResponseText, 'EXIST')) {
            this.objToastService.notifyError(this.objUtils.bmgfonTranslate('COMMON.MSG.EXIST'));
          } else {
            this.objToastService.notifyError(res.Response[0].ResponseText);
          }
          this.mbShowDialog = false;
        }
      });
    }
    this.mbShowDialog = false;
  }
  bmlfonDialogAction(action) {
    debugger;
    if (action == 'No') {
      this.mbShowDialog = false;
      this.mbChange = false;
      if (this.msCallFor == "FormClose") {
        this.router.navigate(['/main/dashboard/dashboardpage']);
      } else {
        return;
      }
    } else if (action == 'Yes' && this.msCallFor == "FormClose") {
      this.bmlfonSubmitData();
    } else if (action == 'Yes') {
      this.mbChange = false;
      this.mbShowDialog = false;
      this.msCallFor = '';
    } else {
      this.mbShowDialog = false;
    }
  }
  static #_ = this.ɵfac = function DownloadUploadDefaultsComponent_Factory(t) {
    return new (t || DownloadUploadDefaultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_http_download_upload_default_service__WEBPACK_IMPORTED_MODULE_2__.DownloadUploadDefaultService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: DownloadUploadDefaultsComponent,
    selectors: [["app-download-upload-defaults"]],
    decls: 182,
    vars: 80,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["onclick", "window.open('../../../../../assets/help files/Upload and Download Defaults.pdf','_blank');", "type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-head-sec", "not_printable"], ["id", "tab1", 1, "tab-item", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-handshake-o"], ["class", "tab-item", "id", "tab2", 3, "ngClass", "click", 4, "ngIf"], ["id", "secTab1", 1, "tab-container", 3, "hidden"], [1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "tabindex", "1", "maxlength", "100", "id", "txtVendClass", 1, "form-control", 3, "ngModel", "ngModelChange", "change", "focus", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-5"], ["for", "txtVendClassDesc", 1, "col-form-label"], ["type", "text", "maxlength", "100", "id", "txtVendClassDesc", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "tabindex", "2", "maxlength", "100", "id", "txtExpAccount", 1, "form-control", 3, "ngModel", "ngModelChange", "change", "focus", "blur"], ["for", "txtExpAccountDesc", 1, "col-form-label"], ["type", "text", "maxlength", "100", "id", "txtExpAccountDesc", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "tabindex", "3", "maxlength", "100", "id", "txtCustClass", 1, "form-control", 3, "ngModel", "ngModelChange", "change", "focus", "blur"], ["for", "txtCustClassDesc", 1, "col-form-label"], ["type", "text", "maxlength", "100", "id", "txtCustClassDesc", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "secTab2", 1, "tab-container", 3, "hidden"], [1, "col-md-12", "xs_p_0"], [1, "col-md-4", "col-lg-4"], [1, "col-md-6", "col-lg-4", "custom_flex"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", "id", "chkOvrVendAddr", "tabindex", "4", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkOvrVendAddr", 1, "custom-control-label"], ["type", "checkbox", "id", "chkAddVendName", "tabindex", "5", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkAddVendName", 1, "custom-control-label"], ["type", "checkbox", "id", "chkOvrCustAddr", "tabindex", "6", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkOvrCustAddr", 1, "custom-control-label"], ["type", "checkbox", "id", "chkAddCustName", "tabindex", "7", 1, "custom-control-input", 3, "checked", "ngModel", "ngModelChange", "change"], ["for", "chkAddCustName", 1, "custom-control-label"], ["type", "checkbox", "id", "chkOvrBMEInvQBInv", "tabindex", "8", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "chkOvrBMEInvQBInv", 1, "custom-control-label"], ["tabindex", "9", "id", "cmbPopQBRefNoVouch", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "IO"], ["value", "PO"], ["value", "VO"], ["value", "IOVO"], ["value", "POVO"], [1, "modal-footer"], ["type", "button", "id", "btnSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "dlgLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["id", "tab2", 1, "tab-item", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-reply"], [3, "keyData", "saveLookupField", "closeLookup"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "taskData", "closeTaskModal"]],
    template: function DownloadUploadDefaultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, DownloadUploadDefaultsComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "button", 12)(23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_button_click_25_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 16)(29, "aside", 17)(30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_div_click_30_listener() {
          return ctx.bmlfswitchTab("TAB1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, DownloadUploadDefaultsComponent_div_35_Template, 5, 6, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "section", 21)(37, "div", 22)(38, "div", 23)(39, "div", 24)(40, "div", 25)(41, "div", 26)(42, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 28)(46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_46_listener($event) {
          return ctx.mObjModel.VendClass = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_46_listener() {
          return ctx.bmlfonChange();
        })("focus", function DownloadUploadDefaultsComponent_Template_input_focus_46_listener() {
          return ctx.bmlfOnGlobalFocus("VendorClass", ctx.mObjModel.VendClass);
        })("blur", function DownloadUploadDefaultsComponent_Template_input_blur_46_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupVendorClass, ctx.msScreenName, "VendorClass", "blur", ctx.mObjModel.VendClass, "custom", "txtVendClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_span_click_47_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupVendorClass, ctx.msScreenName, "VendorClass", "click", ctx.mObjModel.VendClass, "custom", "txtVendClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](48, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div", 24)(50, "div", 25)(51, "div", 32)(52, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 28)(56, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_56_listener($event) {
          return ctx.mObjModel.VendClassDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 23)(58, "div", 24)(59, "div", 25)(60, "div", 26)(61, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "div", 28)(65, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_65_listener($event) {
          return ctx.mObjModel.ExpAccount = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_65_listener() {
          return ctx.bmlfonChange();
        })("focus", function DownloadUploadDefaultsComponent_Template_input_focus_65_listener() {
          return ctx.bmlfOnGlobalFocus("ExpAccount", ctx.mObjModel.ExpAccount);
        })("blur", function DownloadUploadDefaultsComponent_Template_input_blur_65_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupExpAccount, "Account", "Account", "blur", ctx.mObjModel.ExpAccount, "custom", "txtExpAccount");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_span_click_66_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupExpAccount, "Account", "Account", "click", ctx.mObjModel.ExpAccount, "custom", "txtExpAccount");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](67, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 24)(69, "div", 25)(70, "div", 32)(71, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "div", 28)(75, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_75_listener($event) {
          return ctx.mObjModel.ExpAccountDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "div", 23)(77, "div", 24)(78, "div", 25)(79, "div", 26)(80, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 28)(84, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_84_listener($event) {
          return ctx.mObjModel.CustClass = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_84_listener() {
          return ctx.bmlfonChange();
        })("focus", function DownloadUploadDefaultsComponent_Template_input_focus_84_listener() {
          return ctx.bmlfOnGlobalFocus("CustomerClass", ctx.mObjModel.CustClass);
        })("blur", function DownloadUploadDefaultsComponent_Template_input_blur_84_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupCustomerClass, ctx.msScreenName, "CustomerClass", "blur", ctx.mObjModel.CustClass, "custom", "txtCustClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_span_click_85_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupCustomerClass, ctx.msScreenName, "CustomerClass", "click", ctx.mObjModel.CustClass, "custom", "txtCustClass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](86, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 24)(88, "div", 25)(89, "div", 32)(90, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "div", 28)(94, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_94_listener($event) {
          return ctx.mObjModel.CustClassDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "section", 41)(96, "div", 22)(97, "div", 23)(98, "div", 42)(99, "div", 25)(100, "div", 43)(101, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 44)(105, "div", 45)(106, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_106_listener($event) {
          return ctx.mObjModel.OvrVendAddr = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_106_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](107, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "div", 23)(109, "div", 42)(110, "div", 25)(111, "div", 43)(112, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 44)(116, "div", 45)(117, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_117_listener($event) {
          return ctx.mObjModel.AddVendName = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_117_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](118, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 23)(120, "div", 42)(121, "div", 25)(122, "div", 43)(123, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "div", 44)(127, "div", 45)(128, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_128_listener($event) {
          return ctx.mObjModel.OvrCustAddr = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_128_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](129, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 23)(131, "div", 42)(132, "div", 25)(133, "div", 43)(134, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "div", 44)(138, "div", 45)(139, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_139_listener($event) {
          return ctx.mObjModel.AddCustName = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_139_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](140, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 23)(142, "div", 42)(143, "div", 25)(144, "div", 43)(145, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](148, "div", 44)(149, "div", 45)(150, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_input_ngModelChange_150_listener($event) {
          return ctx.mObjModel.OvrBMEInvQBInv = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_input_change_150_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](151, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "div", 23)(153, "div", 42)(154, "div", 25)(155, "div", 43)(156, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](159, "div", 44)(160, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function DownloadUploadDefaultsComponent_Template_select_ngModelChange_160_listener($event) {
          return ctx.mObjModel.PopQBRefNoVouch = $event;
        })("change", function DownloadUploadDefaultsComponent_Template_select_change_160_listener() {
          return ctx.bmlfonChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](162, " Invoice No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](163, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](164, " Purchase Order No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](166, " Voucher No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](168, " Invoice No. + Voucher No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, " Purchase Order No. + Voucher No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](171, "div", 62)(172, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_button_click_172_listener() {
          return ctx.bmlfonSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](174, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](175, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DownloadUploadDefaultsComponent_Template_button_click_175_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](178, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](179, DownloadUploadDefaultsComponent_app_custom_lookup_modal_179_Template, 1, 1, "app-custom-lookup-modal", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](180, DownloadUploadDefaultsComponent_kendo_dialog_180_Template, 16, 14, "kendo-dialog", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](181, DownloadUploadDefaultsComponent_app_common_task_modal_181_Template, 1, 1, "app-common-task-modal", 68);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](76, _c1, ctx.mbloaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 40, "DOWNLOADUPLOADDEFAULTS.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 42, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](21, 44, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](78, _c0, ctx.mstabType == "TAB1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](34, 46, "DOWNLOADUPLOADDEFAULTS.TAB1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.msCustomFinName != "BC Dynamic 365");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.mstabType != "TAB1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](44, 48, "DOWNLOADUPLOADDEFAULTS.DFLTVENDORCLS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.VendClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](54, 50, "DOWNLOADUPLOADDEFAULTS.VENDCLSDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.VendClassDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](63, 52, "DOWNLOADUPLOADDEFAULTS.DFLTEXPACCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.ExpAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](73, 54, "DOWNLOADUPLOADDEFAULTS.ACCTDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.ExpAccountDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](82, 56, "DOWNLOADUPLOADDEFAULTS.DFLTCUSTCLS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.CustClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](92, 58, "DOWNLOADUPLOADDEFAULTS.CUSTCLSDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.CustClassDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.mstabType != "TAB2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](103, 60, "DOWNLOADUPLOADDEFAULTS.OVERRIDEVENDOR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.OvrVendAddr);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](114, 62, "DOWNLOADUPLOADDEFAULTS.ADDVENDOR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.AddVendName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](125, 64, "DOWNLOADUPLOADDEFAULTS.OVERRIDECUSTOMER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.OvrCustAddr);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](136, 66, "DOWNLOADUPLOADDEFAULTS.ADDCUSTOMER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx.mbisAddCustName)("ngModel", ctx.mObjModel.AddCustName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](147, 68, "DOWNLOADUPLOADDEFAULTS.OVERRIDEINVOICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.OvrBMEInvQBInv);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](158, 70, "DOWNLOADUPLOADDEFAULTS.POPULATEQUICKBOOK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.mObjModel.PopQBRefNoVouch);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](174, 72, "COMMON.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](177, 74, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbShowDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__.CommonTaskModalComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8664:
/*!**************************************************************************************!*\
  !*** ./src/app/main/finance/components/finance-mapping/finance-mapping.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceMappingComponent: () => (/* binding */ FinanceMappingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var _http_finance_mapping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/finance-mapping.service */ 65343);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_custom_message_model_custom_msg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/custom-message-model/custom-msg.component */ 15845);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 21916);























function FinanceMappingComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function FinanceMappingComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function FinanceMappingComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const types_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", types_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", types_r11, " ");
  }
}
function FinanceMappingComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51)(4, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_ng_template_56_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const dataItem_r12 = restoredCtx.$implicit;
      const rowIndex_r13 = restoredCtx.rowIndex;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.bmlfLineActionFn("deleteLineEvn", dataItem_r12, rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r13 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "COMMON.ACTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r13, "");
  }
}
function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 55)(2, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const rowIndex_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.marrLineGridData[rowIndex_r19][item_r16.field] = $event);
    })("blur", function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const rowIndex_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r25.bmlfonOpenLookupModal(item_r16.field, "blur", ctx_r25.marrLineGridData[rowIndex_r19][item_r16.field], "custom", "txt" + item_r16.field + rowIndex_r19, rowIndex_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.bmlfonGlobalOnChangesFn(item_r16.field, ctx_r25.marrLineGridData[rowIndex_r19], rowIndex_r19));
    })("focus", function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const rowIndex_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.bmlfOnGlobalFocus(item_r16.field, ctx_r28.marrLineGridData[rowIndex_r19]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const rowIndex_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.bmlfonOpenLookupModal(item_r16.field, "click", ctx_r31.marrLineGridData[rowIndex_r19][item_r16.field], "custom", "txt" + item_r16.field + rowIndex_r19, rowIndex_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", "txt" + item_r16.field + rowIndex_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r20.marrLineGridData[rowIndex_r19][item_r16.field])("name", rowIndex_r19 + "_" + item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r16.field, "Lookup", rowIndex_r19, "");
  }
}
function FinanceMappingComponent_kendo_grid_column_57_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, FinanceMappingComponent_kendo_grid_column_57_ng_template_2_ng_container_3_Template, 5, 5, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "FINANCEMAPPING." + item_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r16.type == "lookup");
  }
}
function FinanceMappingComponent_kendo_grid_column_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-grid-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, FinanceMappingComponent_kendo_grid_column_57_ng_template_2_Template, 4, 4, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", item_r16.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 3, "FINANCEMAPPING." + item_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !item_r16.display);
  }
}
function FinanceMappingComponent_app_custom_lookup_modal_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function FinanceMappingComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r37.bmlfonSaveLookupField($event));
    })("closeLookup", function FinanceMappingComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.bmlfonCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("multiSelection", ctx_r6.mbMutiSelectionLookup)("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function FinanceMappingComponent_kendo_dialog_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function FinanceMappingComponent_kendo_dialog_67_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.bmlfCommonDialogAction(ctx_r40.mobjCommonDialogData.btnClose));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "kendo-dialog-actions")(9, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_dialog_67_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.bmlfCommonDialogAction(ctx_r42.mobjCommonDialogData.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_dialog_67_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r43.bmlfCommonDialogAction(ctx_r43.mobjCommonDialogData.btnClose));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.mobjCommonDialogData.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.mobjCommonDialogData.btnAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.mobjCommonDialogData.btnClose);
  }
}
function FinanceMappingComponent_app_common_task_modal_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function FinanceMappingComponent_app_common_task_modal_68_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r44.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r8.mobjTaskData);
  }
}
function FinanceMappingComponent_app_custom_msg_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-msg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_app_custom_msg_69_Template_app_custom_msg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r46.bmlfonCloseModal("BulkResponseClose"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("MsgData", ctx_r9.msMsgData);
  }
}
function FinanceMappingComponent_kendo_dialog_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function FinanceMappingComponent_kendo_dialog_70_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r48.bmlfonConfirmModal("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_dialog_70_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.bmlfonConfirmModal("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_dialog_70_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r51.bmlfonConfirmModal("no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_kendo_dialog_70_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r52.bmlfonConfirmModal("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 9, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 11, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"), " ");
  }
}
const _c0 = function (a0) {
  return {
    modalLoading: a0
  };
};
const _c1 = function (a0) {
  return {
    gridloading: a0
  };
};
class FinanceMappingComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  getDataList() {}
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(lookupService, modalservice, finMappService, dateFormatService, lsService, router, utilService, toastMessageService, userFieldService) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.lookupService = lookupService;
    this.modalservice = modalservice;
    this.finMappService = finMappService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.router = router;
    this.utilService = utilService;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.mobjUserData = {};
    this.mbLoaderEnabled = false;
    this.mbPageLoading = false;
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.msScreenName = 'Finance Mapping';
    this.mbIsChange = false;
    this.mbIsCloseMode = false;
    this.mbDeleteDialogView = false;
    this.mbSaveDialogView = false;
    this.mbIsLoading = false;
    this.marrLineGridData = [];
    this.mobjSelectedItemData = {};
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    this.mbIsSaveDone = false;
    this.mbIsAddMode = false;
    this.mbIsDeleteMode = false;
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.msCustomDateFormat = "";
    this.marrLineItemCol = [{
      type: 'text',
      display: false,
      field: 'AM',
      title: ''
    }, {
      type: 'lookup',
      display: true,
      field: 'OptiKey',
      title: 'FROMKEY'
    }, {
      type: 'lookup',
      display: true,
      field: 'FinKey',
      title: 'TOKEY'
    }, {
      type: 'text',
      display: false,
      field: 'SNO',
      title: ''
    }, {
      type: 'text',
      display: false,
      field: 'Module',
      title: ''
    }];
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
    this.mobjSelectedLine = {};
    this.miLineItemRowIndex = null;
    this.marrModuleName = ['CURRENCY', 'SALES TAX', 'PURCHASE TAX'];
    this.msSelectedModule = this.marrModuleName[0];
  }
  ngOnInit() {
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfOnGetFinMapping(this.msSelectedModule);
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
      pobjFormRec.primeKey = "";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  // View Help Dcoumnet
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Finance Mapping.pdf', '_blank');
  }
  // Close Modal
  bmlfonCloseModal(type) {
    if (type == 'screenClose') {
      if (this.mbIsChange) {
        this.mbIsCloseMode = true;
        this.mbSaveDialogView = true;
        return false;
      }
      this.router.navigate(['/main/dashboard']);
    } else if (type == 'BulkResponseClose') {
      this.mbBulkResponseView = false;
    }
  }
  // GlobalOnChanges Event
  bmlfonGlobalOnChangesFn(psFieldName, pobjFieldData, piIndex, eleId) {
    if (pobjFieldData == null) {
      return false;
    }
    if (psFieldName == 'changeModule') {
      this.bmlfOnGetFinMapping(this.msSelectedModule);
    }
    if (piIndex != undefined) {
      this.mbIsChange = true;
      if (this.marrLineGridData[piIndex]['AM'] != 'A') {
        this.marrLineGridData[piIndex]['AM'] = 'M';
      }
    }
  }
  bmlfOnGetFinMapping(psModuleName) {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          Modulename: psModuleName
        }],
        Response: [{
          ResponseText: '',
          'ErrorCode': ''
        }]
      })
    };
    this.mbIsLoading = true;
    this.marrLineGridData = [];
    this.finMappService.bmgfGetFinanceMapping(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        if (res.HeaderData.length) {
          this.marrLineGridData = res.HeaderData;
          if (this.mbIsCloseMode) {
            this.mbIsCloseMode = false;
            this.router.navigate(['/main/dashboard']);
          }
        }
      } else if (res.Response[0].ErrorCode != '') {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
    });
  }
  // Add Line Item
  bmlfonAddLineItem(piIndex = null) {
    // if (!this.utilService.mbWrite){
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return false;
    // };
    if (this.bmlfChkBlankLineType()) {
      return false;
    }
    const pobjDataCopy = {};
    let piLastIndex;
    if (this.marrLineGridData.length > 0) {
      piLastIndex = this.marrLineGridData.reduce((acc, obj) => acc = acc > obj.SNO ? acc : obj.SNO, 0);
    } else {
      piLastIndex = this.marrLineGridData.length;
    }
    pobjDataCopy.OptiKey = '';
    pobjDataCopy.FinKey = '';
    pobjDataCopy.Module = this.msSelectedModule;
    pobjDataCopy.AM = 'A';
    pobjDataCopy.SNO = Number(piLastIndex) + 1;
    this.marrLineGridData.push(pobjDataCopy);
    let lastRowIdx = this.marrLineGridData.length - 1;
    let tableElement = document.getElementById("dtLineItemGrid");
    setTimeout(() => {
      let rowElement = tableElement.getElementsByTagName('tr');
      let tdElement = rowElement[lastRowIdx + 1].getElementsByTagName('td');
      let fromElement = tdElement[1].getElementsByTagName('input');
      fromElement[0].focus();
    }, 100);
    this.mbIsChange = true;
  }
  // Global focus Fn
  bmlfOnGlobalFocus(field, value) {
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  //Open LOOKUP MODAL
  bmlfonOpenLookupModal(psField, psEvent, psValue, psType, psEleId, piRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.mbMutiSelectionLookup = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    let pobjReqData = {
      ScreenName: 'Finance Mapping'
    };
    if (this.msSelectedModule == this.marrModuleName[0]) {
      pobjReqData.LookUpKey = 'Currency';
    } else {
      pobjReqData.LookUpKey = 'TxRateKey';
      pobjReqData.Filter1 = this.msSelectedModule == this.marrModuleName[1] ? 'AR' : this.msSelectedModule == this.marrModuleName[2] ? 'AP' : '';
    }
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    let pfnCallingFn = this.lookupService.getLookup(pobjReqData);
    if (psField == 'FinKey') {
      pobjReqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            Condition: this.msSelectedModule == this.marrModuleName[0] ? 'AR' : this.msSelectedModule == this.marrModuleName[1] ? 'AR' : 'AP',
            Module: this.msSelectedModule
          }],
          Response: [{
            ResponseText: '',
            'ErrorCode': ''
          }]
        })
      };
      pfnCallingFn = this.finMappService.bmgfGetFinLookupForFinMapping(pobjReqData);
    }
    pfnCallingFn.subscribe(res => {
      setTimeout(() => {
        this.utilService.bmgfOnKeyInputEnable();
        this.mbIsLoading = false;
      }, 500);
      if (res == null) {
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
        if (psEleId) {
          let elementExists = document.getElementById(psEleId);
          if (elementExists) {
            document.getElementById(psEleId).focus();
          }
        }
        return false;
      }
      let psDataKey = 'LookupData';
      if (psField == 'FinKey') {
        psDataKey = 'HeaderData';
      }
      if (Object.entries(res).length > 0 && res[psDataKey].length > 0) {
        res[psDataKey].forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res[psDataKey];
        let title = this.utilService.bmgfonTranslate(psField);
        if (psField == 'FinKey') {
          title = this.utilService.bmgfonTranslate('FINANCEMAPPING.TOKEY');
        }
        if (psField == 'OptiKey') {
          title = this.utilService.bmgfonTranslate('FINANCEMAPPING.FROMKEY');
        }
        this.miLineItemRowIndex = piRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.title = title + ' Lookup';
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue;
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let psInputKey = this.bmlfGetInputColumn(psField);
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
            document.getElementById(psEleId).value = '';
            let elementExists = document.getElementById(psEleId);
            if (elementExists) {
              document.getElementById(psEleId).focus();
            }
            this.mbIsLookupModal = true;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        if (piRowIdx != null) {
          this.marrLineGridData[piRowIdx][psField] = '';
        }
        let elementExists = document.getElementById(psEleId);
        if (elementExists) {
          document.getElementById(psEleId).focus();
        }
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      console.log(err);
    });
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
        let linePos = this.marrLineGridData.findIndex(ele => ele[pobjData.field] == pobjData.searchValue);
        this.marrLineGridData[linePos][pobjData.field] = '';
        document.getElementById(pobjData.eleId).value = '';
      }
      let elementExists = document.getElementById(pobjData.eleId);
      if (elementExists) {
        document.getElementById(pobjData.eleId).focus();
      }
    }
  }
  bmlfonSaveLookupField(pobjData) {
    let psInputKey = this.bmlfGetInputColumn(pobjData.field);
    this.mbIsLookupModal = false;
    this.mbMutiSelectionLookup = false;
    if (!Array.isArray(pobjData.value)) {
      if (pobjData.type == 'custom') {
        if (this.miLineItemRowIndex != null) {
          this.marrLineGridData[this.miLineItemRowIndex][pobjData.field] = pobjData.value[psInputKey];
        }
        this.bmlfonGlobalOnChangesFn(pobjData.field, pobjData, this.miLineItemRowIndex);
      }
    }
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'OptiKey') {
      let psKey;
      if (this.msSelectedModule == this.marrModuleName[0]) {
        psKey = 'Curr_Id';
      }
      if (this.msSelectedModule == this.marrModuleName[1] || this.msSelectedModule == this.marrModuleName[2]) {
        psKey = 'TxRateKey';
      }
      return psKey;
    }
    if (psField == 'FinKey') {
      let psKey;
      if (this.msSelectedModule == this.marrModuleName[0]) {
        psKey = 'Name';
      }
      if (this.msSelectedModule == this.marrModuleName[1] || this.msSelectedModule == this.marrModuleName[2]) {
        psKey = 'Name';
      }
      return psKey;
    }
  }
  bmlfChkBlankLineType() {
    let isBlankLine = false;
    this.marrLineGridData.some((pobjEle, piRowIdx) => {
      let psMsg = this.utilService.bmgfonTranslate('FINANCEMAPPING.COMPLETEROWENTRY') + ' ' + '(' + this.utilService.bmgfonTranslate('COMMON.ROWNO') + (piRowIdx + 1) + ')';
      if (pobjEle.OptiKey == '') {
        this.toastMessageService.notifyWarning(psMsg);
        isBlankLine = true;
        return false;
      }
      if (pobjEle.FinKey == '') {
        this.toastMessageService.notifyWarning(psMsg);
        isBlankLine = true;
        return false;
      }
    });
    return isBlankLine;
  }
  // common Action Event
  bmlfCommonDialogAction(psAction) {
    if (psAction == 'Cancel' || psAction == 'No') {
      this.mbCommonDialogView = false;
    } else if (psAction == 'deleteLineEvent') {
      this.bmlfonDeleteLine();
    }
  }
  // Delete Line
  bmlfonDeleteLine() {
    this.mbCommonDialogView = false;
    let piLineIndex = this.marrSelectedData[0].index;
    let pobjRecordSet = {
      HeaderData: [],
      Response: [{
        ResponseText: '',
        'ErrorCode': ''
      }]
    };
    pobjRecordSet.HeaderData.push(this.marrSelectedData[0].lineObj);
    let pobjReqData = {
      JSON: JSON.stringify(pobjRecordSet)
    };
    this.finMappService.bmgfDeleteFinanceMappingLine(pobjReqData).subscribe(parrRes => {
      this.mbIsLoading = false;
      if (parrRes == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (parrRes.Response[0].ErrorCode == '') {
        if (parrRes.HeaderData.length > 0) {
          this.marrLineGridData.splice(piLineIndex, 1);
          this.bmlfOnServiceResponseView(parrRes.Response[0].ErrorCode, this.utilService.bmgfonTranslate('COMMON.MSG.DELETEDLINE'));
          // -- End
        }
      } else {
        this.bmlfOnServiceResponseView(parrRes.Response[0].ErrorCode, parrRes.Response[0].ResponseText);
      }
    }, err => {
      this.mbIsLoading = false;
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
    });
  }
  bmlfonConfirmModal(psype) {
    if (psype == 'yes') {
      this.bmlfOnAdd();
      this.mbSaveDialogView = false;
    } else if (psype == 'no') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard']);
    } else {
      this.mbSaveDialogView = false;
      this.mbIsCloseMode = false;
    }
  }
  // Add Record
  bmlfOnAdd() {
    // if (!this.utilService.mbWrite){
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return false;
    // }
    if (this.bmlfChkBlankLineType()) {
      return false;
    }
    if (!this.mbIsChange) {
      return false;
    }
    this.mbIsChange = false;
    let parrLineItemCopy = this.marrLineGridData.map(x => Object.assign({}, x));
    let pobjRecordSet = {
      HeaderData: [],
      Response: [{
        ResponseText: '',
        'ErrorCode': ''
      }]
    };
    pobjRecordSet.HeaderData = parrLineItemCopy;
    let pobjReqData = {
      JSON: JSON.stringify(pobjRecordSet)
    };
    this.mbIsLoading = true;
    this.bmlfonSaveRecord(pobjReqData);
  }
  // save update record
  bmlfonSaveRecord(pobjData) {
    this.finMappService.bmgfSaveFinanceMapping(pobjData).subscribe(parrRes => {
      this.mbIsLoading = false;
      if (parrRes == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (parrRes.Response[0].ErrorCode == '') {
        if (parrRes.HeaderData.length > 0) {
          this.mbSaveDialogView = false;
          this.bmlfOnGetFinMapping(this.msSelectedModule);
          this.bmlfOnServiceResponseView(parrRes.Response[0].ErrorCode, this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
          // -- End
        }
      } else {
        this.bmlfOnServiceResponseView(parrRes.Response[0].ErrorCode, parrRes.Response[0].ResponseText);
      }
    }, err => {
      this.mbIsLoading = false;
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
    });
  }
  // service response view
  bmlfOnServiceResponseView(isError, res) {
    let resCount = res.length;
    if (resCount > 50) {
      this.msMsgData.Data = res;
      this.mbBulkResponseView = true;
      this.msMsgData.Header = this.utilService.bmgfonTranslate('COMMON.BATCHMASTER');
      this.mbBulkResponseMsg = false;
      return false;
    }
    if (isError == '') {
      this.toastMessageService.notifySuccess(res);
    } else {
      this.toastMessageService.notifyError(res);
    }
  }
  // common action events
  bmlfActionFn(event, pobjData, index) {
    if (event == 'deleteLineEve') {
      let pobjRec = {
        lineObj: pobjData,
        index: index
      };
      this.bmlfCommonAction(pobjRec, event);
      // if (this.marrLineGridData.length == 1) {
      //   let pobjRec:any = {};
      //   pobjRec.FiscalYear = this.mobjOrderEntry.FiscalYear;
      //   this.bmlfCommonAction(pobjRec, 'deleteLastLineEve');
      // } else {
      // }
    }
  }

  bmlfCommonAction(pobjData, type) {
    let parrRecordData = [];
    this.marrCommonRecordSet = [];
    this.marrSelectedData = [];
    if (!Array.isArray(pobjData)) {
      this.mbBulkResponseMsg = false;
      parrRecordData.push(pobjData);
    } else {
      this.mbBulkResponseMsg = true;
      parrRecordData = pobjData;
    }
    this.marrSelectedData = parrRecordData;
    this.mobjCommonDialogData = {};
    if (type == 'deleteLineEve') {
      // if (!this.utilService.mbDelete) {
      //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      //   return false;
      // };
      this.mobjCommonDialogData.message = this.utilService.bmgfonTranslate('COMMON.MSG.DEL_LINE');
      this.mobjCommonDialogData.btnAction = this.utilService.bmgfonTranslate('COMMON.DELETE');
      this.mobjCommonDialogData.btnClose = this.utilService.bmgfonTranslate('COMMON.CANCEL');
      this.mobjCommonDialogData.event = 'deleteLineEvent';
    }
    this.mbCommonDialogView = true;
  }
  //Line Action
  bmlfLineActionFn(event, data, index) {
    if (event == 'deleteLineEvn') {
      // if (!this.utilService.mbDelete){
      //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      //   return false;
      // };
      this.bmlfActionFn('deleteLineEve', data, index);
    }
  }
  static #_ = this.ɵfac = function FinanceMappingComponent_Factory(t) {
    return new (t || FinanceMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_finance_mapping_service__WEBPACK_IMPORTED_MODULE_5__.FinanceMappingService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: FinanceMappingComponent,
    selectors: [["app-finance-mapping"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
    decls: 71,
    vars: 48,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "loader-outer", 4, "ngIf"], [1, "tab-container"], [1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5"], ["for", "cmbSelectModule", "id", "lblSelectModule", 1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["id", "cmbSelectModule", "name", "SelectModule", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["id", "divKendoGridLineType", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "dtLineItemGrid", 1, "custom_h_grid", "max_scroll", "low_space_table", "responsive_grid", 3, "ngClass", "kendoGridBinding", "loading", "resizable", "selectable"], ["grid", "kendoGrid"], [3, "noRecords"], [1, "grid-action-column", 3, "width", "title"], ["kendoGridCellTemplate", ""], ["width", "120", 3, "field", "title", "hidden", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "modal-backdrop", "fade", "show"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "MsgData", "click", 4, "ngIf"], [1, "loader-outer"], [1, "loader"], [3, "value"], [1, "mob-label"], [1, "grid-icon-sec"], [3, "id", "click"], [1, "fa", "fa-trash-o"], ["width", "120", 3, "field", "title", "hidden"], [1, "form-group", "custom_flex"], ["type", "text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "ngModelChange", "blur", "focus"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["id", "custom-lookup", 3, "multiSelection", "keyData", "saveLookupField", "closeLookup"], [3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-question"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdCommonActionSo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCommonCancelSo", 3, "click"], [3, "taskData", "closeTaskModal"], [3, "MsgData", "click"], [1, "k-icon", "k-i-warning"], ["kendoButton", "", "id", "cmdSaveDialog_yes", 3, "click"], ["kendoButton", "", "id", "cmdSaveDialog_no", 3, "click"], ["kendoButton", "", "id", "cmdSaveDialog_cancel", 3, "click"]],
    template: function FinanceMappingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, FinanceMappingComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_button_click_22_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_button_click_25_listener() {
          return ctx.bmlfonCloseModal("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, FinanceMappingComponent_div_29_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "form")(31, "section", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22)(36, "div", 23)(37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 25)(41, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function FinanceMappingComponent_Template_select_ngModelChange_41_listener($event) {
          return ctx.msSelectedModule = $event;
        })("change", function FinanceMappingComponent_Template_select_change_41_listener() {
          return ctx.bmlfonGlobalOnChangesFn("changeModule", ctx.msSelectedModule);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, FinanceMappingComponent_option_42_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_button_click_46_listener() {
          return ctx.bmlfonAddLineItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 32)(50, "kendo-grid", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "kendo-grid-messages", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "kendo-grid-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, FinanceMappingComponent_ng_template_56_Template, 6, 4, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, FinanceMappingComponent_kendo_grid_column_57_Template, 3, 5, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 39)(59, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_button_click_59_listener() {
          return ctx.bmlfOnAdd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FinanceMappingComponent_Template_button_click_62_listener() {
          return ctx.bmlfonCloseModal("screenClose");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, FinanceMappingComponent_app_custom_lookup_modal_66_Template, 1, 2, "app-custom-lookup-modal", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, FinanceMappingComponent_kendo_dialog_67_Template, 13, 6, "kendo-dialog", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](68, FinanceMappingComponent_app_common_task_modal_68_Template, 1, 1, "app-common-task-modal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, FinanceMappingComponent_app_custom_msg_69_Template, 1, 1, "app-custom-msg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, FinanceMappingComponent_kendo_dialog_70_Template, 19, 15, "kendo-dialog", 44);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](44, _c0, ctx.mbLoaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 26, "FINANCEMAPPING.FINMAP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 28, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 30, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbLoaderEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](39, 32, "FINANCEMAPPING.SELECTMODULE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.msSelectedModule);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrModuleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](48, 34, "FINANCEMAPPING.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](46, _c1, ctx.loadingEnabled == true))("kendoGridBinding", ctx.marrLineGridData)("loading", false)("resizable", true)("selectable", ctx.mobjSelectableSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](53, 36, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](55, 38, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.marrLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](61, 40, "COMMON.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](64, 42, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbCommonDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbBulkResponseView);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent, _shared_components_custom_message_model_custom_msg_component__WEBPACK_IMPORTED_MODULE_13__.CustomMsgComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__.CellTemplateDirective, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6768:
/*!****************************************************************************************************!*\
  !*** ./src/app/main/finance/components/qbo-connection-details/qbo-connection-details.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QboConnectionDetailsComponent: () => (/* binding */ QboConnectionDetailsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_qbo_connection_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/qbo-connection.model */ 58922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _http_qbo_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/qbo-connection.service */ 77328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/alert.service */ 99758);
/* harmony import */ var _core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/toast-message.service */ 48770);
/* harmony import */ var _core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/utility.services */ 14158);
/* harmony import */ var _shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/custom-component-form/custom-component-form.component */ 37638);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_notes_notes_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/notes/notes.components */ 22022);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 21916);























const _c0 = ["custom"];
function QboConnectionDetailsComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-loader");
  }
}
function QboConnectionDetailsComponent_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_button_81_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.bmlfOpenCommonModal("removeValue", "Client ID"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function QboConnectionDetailsComponent_button_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_button_97_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.bmlfOpenCommonModal("removeValue", "Client Secret"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function QboConnectionDetailsComponent_div_120_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_120_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.bmlfOpenCommonModal("removeValue", "Realm ID"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function QboConnectionDetailsComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 23)(8, "div", 30)(9, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_div_120_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.bmlfonChange());
    })("ngModelChange", function QboConnectionDetailsComponent_div_120_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.mObjModel.RelamID = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, QboConnectionDetailsComponent_div_120_button_11_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_120_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.bmlfOpenCommonModal("enterValue", "Realm ID"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 5, "QBOCONNECTION.RELAMID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.mObjModel.RelamID);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r3.mObjModel.RelamID != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 7, "QBOCONNECTION.ENTER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 9, "QBOCONNECTION.RELAMID"), " ");
  }
}
function QboConnectionDetailsComponent_div_121_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_121_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.bmlfOpenCommonModal("removeValue", "Access Token"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function QboConnectionDetailsComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 23)(8, "div", 30)(9, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_div_121_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r29.bmlfonChange());
    })("ngModelChange", function QboConnectionDetailsComponent_div_121_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r31.mObjModel.accessToken = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, QboConnectionDetailsComponent_div_121_button_11_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_121_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r32.bmlfOpenCommonModal("enterValue", "Access Token"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 5, "QBOCONNECTION.ACCESSTOKEN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r4.mObjModel.accessToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r4.mObjModel.accessToken != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 7, "QBOCONNECTION.ENTER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 9, "QBOCONNECTION.ACCESSTOKEN"), " ");
  }
}
function QboConnectionDetailsComponent_div_122_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_122_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r34.bmlfOpenCommonModal("removeValue", "Refresh Token"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function QboConnectionDetailsComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 23)(8, "div", 30)(9, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_div_122_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.bmlfonChange());
    })("ngModelChange", function QboConnectionDetailsComponent_div_122_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r38.mObjModel.refreshtoken = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, QboConnectionDetailsComponent_div_122_button_11_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_div_122_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r39.bmlfOpenCommonModal("enterValue", "Refresh Token"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 5, "QBOCONNECTION.REFRESHTOKEN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r5.mObjModel.refreshtoken);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r5.mObjModel.refreshtoken != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 7, "QBOCONNECTION.ENTER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 9, "QBOCONNECTION.REFRESHTOKEN"), " ");
  }
}
function QboConnectionDetailsComponent_ng_container_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-custom-component-form", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msscreenName", ctx_r6.msscreenName)("maInputJsonData", ctx_r6.mObjModel)("mFormMode", ctx_r6.msFormMode)("tabIndex", "-1");
  }
}
function QboConnectionDetailsComponent_app_custom_lookup_modal_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-custom-lookup-modal", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("saveLookupField", function QboConnectionDetailsComponent_app_custom_lookup_modal_208_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.bmlfSaveLookupField($event));
    })("closeLookup", function QboConnectionDetailsComponent_app_custom_lookup_modal_208_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyData", ctx_r7.mobjLookupKeyData)("mbIsQuantity", true)("multiSelection", ctx_r7.mbMutiSelectionLookup);
  }
}
function QboConnectionDetailsComponent_kendo_dialog_209_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function QboConnectionDetailsComponent_kendo_dialog_209_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r44.bmlfonDialogAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_209_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r46.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_209_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r47.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.ASKSAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function QboConnectionDetailsComponent_app_common_task_modal_210_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-task-modal", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeTaskModal", function QboConnectionDetailsComponent_app_common_task_modal_210_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("taskData", ctx_r9.mobjTaskData);
  }
}
function QboConnectionDetailsComponent_app_esignature_from_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-esignature-from", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("action", function QboConnectionDetailsComponent_app_esignature_from_211_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r50.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx_r10.mobjSignatureData);
  }
}
function QboConnectionDetailsComponent_kendo_dialog_212_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function QboConnectionDetailsComponent_kendo_dialog_212_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r52.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_212_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_212_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
function QboConnectionDetailsComponent_div_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 76)(1, "app-notes", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("bmgfCloseNotes", function QboConnectionDetailsComponent_div_213_Template_app_notes_bmgfCloseNotes_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.bmlfCloseNotesModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyName", ctx_r12.msNotesName)("keyValue", ctx_r12.msNotesValue);
  }
}
function QboConnectionDetailsComponent_kendo_dialog_214_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function QboConnectionDetailsComponent_kendo_dialog_214_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.bmlfCommonFieldAction("removeValue", "No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "kendo-dialog-actions")(11, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_214_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r60.bmlfCommonFieldAction("removeValue", "Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_214_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.bmlfCommonFieldAction("removeValue", "No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 8, "QBOCONNECTION.FIELDVALUEALERT"), " ", ctx_r13.msEncrptedFieldName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 10, "QBOCONNECTION.VALUE"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 12, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 14, "COMMON.NO"), " ");
  }
}
function QboConnectionDetailsComponent_kendo_dialog_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function QboConnectionDetailsComponent_kendo_dialog_215_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r62.bmlfCommonFieldAction("enterValue", "No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 20)(7, "div", 81)(8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 82)(12, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function QboConnectionDetailsComponent_kendo_dialog_215_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.msFiledValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "kendo-dialog-actions")(14, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_215_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.bmlfCommonFieldAction("enterValue", "Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_kendo_dialog_215_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r66.bmlfCommonFieldAction("enterValue", "No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", ctx_r14.msEncrptedFieldName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 8, "QBOCONNECTION.VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r14.msEncrptedFieldName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 10, "QBOCONNECTION.VALUE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("maxlength", ctx_r14.miFiledlength)("ngModel", ctx_r14.msFiledValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 12, "COMMON.OK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 14, "COMMON.CANCEL"), " ");
  }
}
const _c1 = function (a0) {
  return {
    modalLoading: a0
  };
};
class QboConnectionDetailsComponent {
  constructor(location, objService, activeRoute, objAlertService, objToastService, objUtils, objLookupService, router, dateFormatService, lsService, userService) {
    this.location = location;
    this.objService = objService;
    this.activeRoute = activeRoute;
    this.objAlertService = objAlertService;
    this.objToastService = objToastService;
    this.objUtils = objUtils;
    this.objLookupService = objLookupService;
    this.router = router;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.userService = userService;
    this.msscreenName = 'QuickBooks Online Connection Details'; //'QBO Connection Details';
    this.mObjModel = new _models_qbo_connection_model__WEBPACK_IMPORTED_MODULE_1__.QBOConnectionModel();
    this.mObjSaveModel = new _models_qbo_connection_model__WEBPACK_IMPORTED_MODULE_1__.QBOCconnectionSaveModel();
    this.mObjModelBlank = new _models_qbo_connection_model__WEBPACK_IMPORTED_MODULE_1__.QBOConnectionModel();
    this.mobjLookupDataModel = new _models_qbo_connection_model__WEBPACK_IMPORTED_MODULE_1__.QBOConnectionModel();
    this.mbChange = false;
    this.mbShowDialog = false;
    this.msCallFor = "";
    this.mbloaderEnabled = false;
    this.mbisLookupModal = false;
    this.mbIsLoading = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.mnumLineItemRowIndex = null;
    this.mbIsLookupModal = false;
    this.msPrecisionFormat = '';
    this.miPrecision = 0;
    this.marrGrid = [];
    this.mbCustomControl = false;
    this.msCompanyID = '';
    this.mbIsNotesModal = false;
    this.msNotesName = "";
    this.msNotesValue = "";
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.mobjUserData = {};
    //Esignature
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbCommonAlertDialog = false;
    this.mobjCommonAlertData = {};
    this.msCustomDateFormat = '';
    //Encrytion----S
    this.mbRemoveValue = false;
    this.mbEnterValue = false;
    this.msEncrptedFieldName = '';
    this.msFiledValue = '';
    this.miFiledlength = 0;
    this.mbClinetIDChange = false;
    this.mbClinetSecretChange = false;
    this.mbRelamIDChange = false;
    this.mbAccessTokenChange = false;
    this.mbRefreshTokenChange = false;
    //Encryption----E
    this.mbQBtokenView = true;
  }
  ngOnInit() {
    debugger;
    this.mobjUserData = this.lsService.getUserSession();
    this.msCompanyID = this.mobjUserData.CmpDbName;
    this.objUtils.getBMEScreePermission(this.msscreenName);
    this.bmlfGetDataOnLoad();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    //e-Sgnature -s
    this.mobjSignatureData = {
      scrrenName: this.msscreenName,
      reasonMinLength: 10,
      reqSignAuth: 2,
      date: moment__WEBPACK_IMPORTED_MODULE_0__().format(this.msCustomDateFormat.toUpperCase()),
      userName: this.mobjUserData.UserId
    };
    this.bmlfCheckEsignApplicableOnForm();
    let parrDistParam = JSON.parse(localStorage.getItem("DistributionParameter"));
    if (parrDistParam.length > 0) {
      let parrFilteredData = parrDistParam.filter(item => item.DEFAULT_KEY == 'QBFieldVisible');
      if (parrFilteredData) {
        if (parrFilteredData[0].DEFAULT_VALUE.toUpperCase() == 'YES') {
          this.mbQBtokenView = true;
        } else {
          this.mbQBtokenView = false;
        }
      }
    }
  }
  bmlfGetDataOnLoad() {
    debugger;
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          CompanyId: this.msCompanyID
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.mbIsLoading = true;
    this.objService.GetQBOConnectionDetails(reqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        return;
      }
      if (res.QBODetails.length > 0) {
        this.mObjModel = res.QBODetails[0];
        this.mbCustomControl = true;
        res.QBODetails.forEach(ele => {
          if (ele.KeyType == "RelamID") {
            //this.mObjModel[ele.KeyType] = this.objUtils.bmlfonDecryption(ele.KeyTypeValue);
            this.mObjModel[ele.KeyType] = ele.KeyTypeValue;
          } else {
            this.mObjModel[ele.KeyType] = ele.KeyTypeValue;
          }
        });
        this.bmlfonEnvironmentChange();
      } else {
        this.mbCustomControl = true;
        this.bmlfonEnvironmentChange();
      }
      this.mbChange = false;
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //---------------------------------------------------------------------------------------
  //Open Task MODAL 
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msscreenName;
      pobjFormRec.primeKey = '';
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  // check e signature
  bmlfCheckEsignApplicableOnForm() {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          MenuScreenName: this.msscreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        this.mbIsEsignature = res.ESignData[0].Permision;
        this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
        this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
        this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
      }
    }, err => {
      console.log(err);
    });
  }
  // open e signature modal
  bmlfopenESignatureModal() {
    this.mbSignatureModal = true;
    this.mobjSignatureData.isShow = true;
    this.mobjSignatureData.primaryKey = '';
  }
  // check e signature
  bmlfChkESignature(pobjData) {
    this.mbSignatureModal = pobjData.isShow;
    if (pobjData.event == 'Save') {
      this.mbIsEsignature = false;
      // this.mObjModel.ESG_REASON = pobjData.changeReason;
      // this.mObjModel.ESG_APPROVER = pobjData.eSignApprover;
      this.mbChange = true;
      this.bmlfonSubmitData();
    } else if (pobjData.event == 'Cancel') {
      this.mobjCommonAlertData = {};
      this.mbCommonAlertDialog = true;
      this.mobjCommonAlertData.message = this.objUtils.bmgfonTranslate('ESIGNREASONMSG');
      this.mobjCommonAlertData.event = 'close';
      this.mbChange = true;
    }
  }
  // ESIGN Audit alert event 
  bmlfEsignAuditAlertEvent(event) {
    if (event == 'No') {} else {
      this.mbIsEsignAuditDialog = false;
    }
  }
  // CommonAlertDialog
  bmlfmbCommonAlertDialog(event) {
    this.mbCommonAlertDialog = false;
  }
  bmlfViewHelpDoc() {
    window.open('../../../../../assets/help files/QuickBooks Online Connection Details.pdf', '_blank');
  }
  bmlfonClose() {
    debugger;
    if (!this.mbChange && !this.customCtrl.mbChange) {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbShowDialog = true;
      this.msCallFor = "FormClose";
    }
  }
  bmlfonChange() {
    this.mbChange = true;
  }
  bmlfOpenErrorBlock(psMsg) {
    this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate(psMsg));
  }
  //Save
  bmlfonValidateFormData() {
    if (this.msCompanyID == '') {
      // this.objToastService.notifyError((this.objUtils.bmgfonTranslate('MPSSETUP.MSG.CALENDARKEY')));
      // setTimeout(function () { document.getElementById('txtCalendarKey').focus(); }, 10);  
      return false;
    }
    return true;
  }
  bmlfonSave() {
    //check Write permission
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    let pbResult = this.bmlfonValidateFormData();
    if (pbResult == false) {
      return;
    }
    if (!this.mbChange && !this.customCtrl.mbChange) {
      return;
    }
    ;
    this.msCallFor = "Save";
    this.bmlfonSubmitData();
  }
  bmlfonSubmitData() {
    debugger;
    //check Write permission
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    if (!this.mbChange && this.customCtrl.mbChange == false) {
      return;
    }
    ;
    let pbResult = this.bmlfonValidateFormData();
    if (pbResult) {
      //Save e-Signature function -S
      // if (this.mbIsEsignature) {
      //   this.bmlfopenESignatureModal();
      //   return false;
      // }
      //Save e-Signature Function -E
      // let data = this.objUtils.bmgfCustomModelTransform(this.customCtrl);
      // this.bmlfonAssignCustValues(data)
      this.marrGrid = [];
      Object.keys(this.mObjModel).forEach(key => {
        if (key != 'KeyType' && key != 'KeyTypeValue') {
          const pobjDataCopy = Object.assign({}, this.mObjSaveModel);
          pobjDataCopy.CompanyId = this.msCompanyID;
          pobjDataCopy.KeyType = key;
          if (key.toUpperCase() == 'CLIENTID' && this.mbClinetIDChange == true) {
            pobjDataCopy.KeyTypeValue = this.objUtils.bmgfonEncryption(this.mObjModel[key]);
          } else if (key.toUpperCase() == 'CLIENTSECRET' && this.mbClinetSecretChange == true) {
            pobjDataCopy.KeyTypeValue = this.objUtils.bmgfonEncryption(this.mObjModel[key]);
          } else if (key.toUpperCase() == 'RELAMID' && this.mbRelamIDChange == true) {
            pobjDataCopy.KeyTypeValue = this.objUtils.bmgfonEncryption(this.mObjModel[key]);
          } else if (key.toUpperCase() == 'ACCESSTOKEN' && this.mbAccessTokenChange == true) {
            pobjDataCopy.KeyTypeValue = this.objUtils.bmgfonEncryption(this.mObjModel[key]);
          } else if (key.toUpperCase() == 'REFRESHTOKEN' && this.mbRefreshTokenChange == true) {
            pobjDataCopy.KeyTypeValue = this.objUtils.bmgfonEncryption(this.mObjModel[key]);
          } else {
            pobjDataCopy.KeyTypeValue = this.mObjModel[key];
          }
          this.marrGrid.push(pobjDataCopy);
        }
      });
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: this.marrGrid,
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.SaveQBOConnectionDetails(reqData).subscribe(res => {
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          this.objToastService.notifySuccess(this.objUtils.bmgfonTranslate('COMMON.MSG.SAVE'));
          if (this.msCallFor == "Save") {
            this.mbChange = false;
            this.customCtrl.mbChange = false;
            this.mbShowDialog = false;
            this.mbClinetIDChange = false;
            this.mbClinetSecretChange = false;
            this.mbRelamIDChange = false;
            this.mbAccessTokenChange = false;
            this.mbRefreshTokenChange = false;
            this.bmlfGetDataOnLoad();
          }
          if (this.msCallFor == "FormClose") {
            this.router.navigate(['/main/dashboard/dashboardpage']);
          }
        } else {
          if (this.objUtils.bmgffindString(res.Response[0].ResponseText, 'EXIST')) {
            this.objToastService.notifyError(this.objUtils.bmgfonTranslate('COMMON.MSG.EXIST'));
          } else {
            this.objToastService.notifyError(res.Response[0].ResponseText);
          }
          this.mbShowDialog = false;
        }
      });
    }
    this.mbShowDialog = false;
  }
  bmlfonDialogAction(action) {
    debugger;
    if (action == 'No') {
      this.mbShowDialog = false;
      this.mbChange = false;
      if (this.msCallFor == "FormClose") {
        this.router.navigate(['/main/dashboard/dashboardpage']);
      } else {
        return;
      }
    } else if (action == 'Yes' && this.msCallFor == "FormClose") {
      this.bmlfonSubmitData();
    } else if (action == 'Yes') {
      this.mbChange = false;
      this.mbShowDialog = false;
      this.msCallFor = '';
    } else {
      this.mbShowDialog = false;
    }
  }
  GetSaveJson() {}
  //-------------------------------------------------
  bmlfOpenCommonModal(psAction, psFiled, event) {
    this.msEncrptedFieldName = psFiled;
    if (psFiled == 'Client ID' || psFiled == 'Client Secret' || psFiled == 'Realm ID') {
      this.miFiledlength = 4000;
    }
    if (psAction == 'removeValue') {
      this.mbRemoveValue = true;
    }
    if (psAction == 'enterValue') {
      this.mbEnterValue = true;
    }
  }
  //-------------------------------------------------
  bmlfCommonFieldAction(psAction, event) {
    if (psAction == 'removeValue') {
      if (event == 'Yes') {
        if (this.msEncrptedFieldName.toUpperCase() == 'CLIENT ID') {
          this.mObjModel.clientid = '';
          this.mbClinetIDChange = true;
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'CLIENT SECRET') {
          this.mObjModel.clientsecret = '';
          this.mbClinetSecretChange = true;
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'REALM ID') {
          this.mObjModel.RelamID = '';
          this.mbRelamIDChange = true;
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'ACCESS TOKEN') {
          this.mObjModel.accessToken = '';
          this.mbAccessTokenChange = true;
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'REFRESH TOKEN') {
          this.mObjModel.refreshtoken = '';
          this.mbRefreshTokenChange = true;
          this.mbChange = true;
        }
      }
      this.mbRemoveValue = false;
    }
    if (psAction == 'enterValue') {
      if (event == 'Yes') {
        if (this.msEncrptedFieldName.toUpperCase() == 'CLIENT ID') {
          this.mObjModel.clientid = this.msFiledValue;
          this.mbClinetIDChange = true;
          //this.msForEncrptclientid = this.msFiledValue;
          this.msFiledValue = '';
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'CLIENT SECRET') {
          this.mObjModel.clientsecret = this.msFiledValue;
          this.mbClinetSecretChange = true;
          this.msFiledValue = '';
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'REALM ID') {
          this.mObjModel.RelamID = this.msFiledValue;
          this.mbRelamIDChange = true;
          this.msFiledValue = '';
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'ACCESS TOKEN') {
          this.mObjModel.accessToken = this.msFiledValue;
          this.mbAccessTokenChange = true;
          this.msFiledValue = '';
          this.mbChange = true;
        } else if (this.msEncrptedFieldName.toUpperCase() == 'REFRESH TOKEN') {
          this.mObjModel.refreshtoken = this.msFiledValue;
          this.mbRefreshTokenChange = true;
          this.msFiledValue = '';
          this.mbChange = true;
        }
      }
      this.mbEnterValue = false;
    }
  }
  //-------------------------------------------------
  bmlfonEnvironmentChange() {
    this.mbChange = true;
    if (this.mObjModel.environment.toUpperCase() == 'SANDBOX') {
      this.mObjModel.QBOBaseUrl = 'https://sandbox-quickbooks.api.intuit.com';
      this.mObjModel.discoveryUrl = 'https://developer.api.intuit.com/.wellknown/openid_sandbox_configuration/';
    } else {
      this.mObjModel.QBOBaseUrl = 'https://quickbooks.api.intuit.com';
      this.mObjModel.discoveryUrl = 'https://developer.api.intuit.com/.wellknown/openid_configuration/';
    }
  }
  static #_ = this.ɵfac = function QboConnectionDetailsComponent_Factory(t) {
    return new (t || QboConnectionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_qbo_connection_service__WEBPACK_IMPORTED_MODULE_2__.QboConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: QboConnectionDetailsComponent,
    selectors: [["app-qbo-connection-details"]],
    viewQuery: function QboConnectionDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
      }
    },
    decls: 216,
    vars: 111,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "form-container"], ["id", "custInfoCont", 1, "form-container"], [1, "row"], [1, "col-md-12", "xs_p_0"], [1, "form-group", "row"], [1, "col-md-4", "col-lg-4"], [1, "col-form-label"], [1, "col-md-6", "col-lg-4", "custom_flex"], ["tabindex", "1", "id", "cmbenvironment", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "sandbox"], ["value", "production"], ["type", "text", "maxlength", "1000", "tabindex", "1", "id", "txtQBOBaseUrl", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "1", "id", "txtdiscoveryUrl", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "2", "id", "txtredirectURI", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "input-group"], ["type", "text", "maxlength", "4000", "tabindex", "3", "id", "txtclientid", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "input-group-append"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-min-width", 3, "click"], ["type", "text", "maxlength", "4000", "tabindex", "4", "id", "txtclientsecret", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "5", "id", "txtDiscoveryAuthority", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "6", "id", "txttokenendpoint", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "seprator"], [1, "sub_title"], ["type", "text", "maxlength", "4000", "tabindex", "10", "id", "txtInvoice", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "11", "id", "txtVoucher", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "12", "id", "txtInvoiceReturn", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "13", "id", "txtVoucherReturn", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "14", "id", "txtGLCr", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "15", "id", "txtGLDr", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "16", "id", "txtGDelayTimeLCr", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "dlgLookup"], [3, "keyData", "mbIsQuantity", "multiSelection", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], ["id", "divNotes", "style", "position: relative; z-index: 100000;", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "text", "maxlength", "4000", "tabindex", "7", "id", "txtRelamID", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "8", "id", "txtaccessToken", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "4000", "tabindex", "9", "id", "txtrefreshtoken", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "msscreenName", "maInputJsonData", "mFormMode", "tabIndex"], ["custom", ""], [3, "keyData", "mbIsQuantity", "multiSelection", "saveLookupField", "closeLookup"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"], ["id", "divNotes", 2, "position", "relative", "z-index", "100000"], [3, "keyName", "keyValue", "bmgfCloseNotes"], ["kendoButton", "", "id", "cmdRemoveValueYes", 3, "click"], ["kendoButton", "", "id", "cmdRemoveValueNo ", 3, "click"], [1, "k-icon", "k-i-info"], [1, "col-md-5"], [1, "col-md-7"], ["type", "text", "id", "txtValue", 1, "form-control", 3, "maxlength", "ngModel", "ngModelChange"], ["kendoButton", "", "id", "cmdEnterenterValueYes", 3, "click"], ["kendoButton", "", "id", "cmdEnterenterValueNo", 3, "click"]],
    template: function QboConnectionDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, QboConnectionDetailsComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_22_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_25_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 23)(38, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function QboConnectionDetailsComponent_Template_select_ngModelChange_38_listener($event) {
          return ctx.mObjModel.environment = $event;
        })("change", function QboConnectionDetailsComponent_Template_select_change_38_listener() {
          return ctx.bmlfonEnvironmentChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, " Sandbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, " Production ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "div", 20)(46, "div", 21)(47, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "div", 23)(51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_51_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_51_listener($event) {
          return ctx.mObjModel.QBOBaseUrl = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 18)(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "div", 23)(60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_60_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_60_listener($event) {
          return ctx.mObjModel.discoveryUrl = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "div", 18)(62, "div", 19)(63, "div", 20)(64, "div", 21)(65, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "div", 23)(69, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_69_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_69_listener($event) {
          return ctx.mObjModel.redirectURI = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "div", 18)(71, "div", 19)(72, "div", 20)(73, "div", 21)(74, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](77, "div", 23)(78, "div", 30)(79, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_79_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_79_listener($event) {
          return ctx.mObjModel.clientid = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](81, QboConnectionDetailsComponent_button_81_Template, 2, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_82_listener() {
          return ctx.bmlfOpenCommonModal("enterValue", "Client ID");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](86, "div", 18)(87, "div", 19)(88, "div", 20)(89, "div", 21)(90, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](93, "div", 23)(94, "div", 30)(95, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_95_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_95_listener($event) {
          return ctx.mObjModel.clientsecret = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](97, QboConnectionDetailsComponent_button_97_Template, 2, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](98, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_98_listener() {
          return ctx.bmlfOpenCommonModal("enterValue", "Client Secret");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](102, "div", 18)(103, "div", 19)(104, "div", 20)(105, "div", 21)(106, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "div", 23)(110, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_110_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_110_listener($event) {
          return ctx.mObjModel.DiscoveryAuthority = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](111, "div", 18)(112, "div", 19)(113, "div", 20)(114, "div", 21)(115, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](118, "div", 23)(119, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_119_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_119_listener($event) {
          return ctx.mObjModel.tokenendpoint = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](120, QboConnectionDetailsComponent_div_120_Template, 16, 11, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](121, QboConnectionDetailsComponent_div_121_Template, 16, 11, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](122, QboConnectionDetailsComponent_div_122_Template, 16, 11, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](123, "hr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](124, "div", 18)(125, "div", 19)(126, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](129, "div", 18)(130, "div", 19)(131, "div", 20)(132, "div", 21)(133, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](136, "div", 23)(137, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_137_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_137_listener($event) {
          return ctx.mObjModel.Invoice = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](138, "div", 18)(139, "div", 19)(140, "div", 20)(141, "div", 21)(142, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](145, "div", 23)(146, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_146_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_146_listener($event) {
          return ctx.mObjModel.Voucher = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](147, "div", 18)(148, "div", 19)(149, "div", 20)(150, "div", 21)(151, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](154, "div", 23)(155, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_155_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_155_listener($event) {
          return ctx.mObjModel.InvoiceReturn = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](156, "div", 18)(157, "div", 19)(158, "div", 20)(159, "div", 21)(160, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](163, "div", 23)(164, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_164_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_164_listener($event) {
          return ctx.mObjModel.VoucherReturn = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](165, "div", 18)(166, "div", 19)(167, "div", 20)(168, "div", 21)(169, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](172, "div", 23)(173, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_173_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_173_listener($event) {
          return ctx.mObjModel.GLCr = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](174, "div", 18)(175, "div", 19)(176, "div", 20)(177, "div", 21)(178, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](181, "div", 23)(182, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_182_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_182_listener($event) {
          return ctx.mObjModel.GLDr = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](183, "hr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](184, "div", 18)(185, "div", 19)(186, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](189, "div", 18)(190, "div", 19)(191, "div", 20)(192, "div", 21)(193, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](196, "div", 23)(197, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function QboConnectionDetailsComponent_Template_input_change_197_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function QboConnectionDetailsComponent_Template_input_ngModelChange_197_listener($event) {
          return ctx.mObjModel.DelayTime = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](198, QboConnectionDetailsComponent_ng_container_198_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](199, "div", 48)(200, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_200_listener() {
          return ctx.bmlfonSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](202, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](203, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](204, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function QboConnectionDetailsComponent_Template_button_click_204_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](207, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](208, QboConnectionDetailsComponent_app_custom_lookup_modal_208_Template, 1, 3, "app-custom-lookup-modal", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](209, QboConnectionDetailsComponent_kendo_dialog_209_Template, 16, 14, "kendo-dialog", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](210, QboConnectionDetailsComponent_app_common_task_modal_210_Template, 1, 1, "app-common-task-modal", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](211, QboConnectionDetailsComponent_app_esignature_from_211_Template, 1, 1, "app-esignature-from", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](212, QboConnectionDetailsComponent_kendo_dialog_212_Template, 16, 12, "kendo-dialog", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](213, QboConnectionDetailsComponent_div_213_Template, 2, 2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](214, QboConnectionDetailsComponent_kendo_dialog_214_Template, 17, 16, "kendo-dialog", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](215, QboConnectionDetailsComponent_kendo_dialog_215_Template, 20, 16, "kendo-dialog", 56);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](109, _c1, ctx.mbloaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 57, "QBOCONNECTION.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 59, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 61, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](36, 63, "QBOCONNECTION.ENVIORMENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.environment);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](49, 65, "QBOCONNECTION.QBOBASEURL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.QBOBaseUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](58, 67, "QBOCONNECTION.DISCOVERYURL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.discoveryUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](67, 69, "QBOCONNECTION.REDIRECTURL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.redirectURI);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](76, 71, "QBOCONNECTION.CLIENTID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.clientid);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mObjModel.clientid != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](84, 73, "QBOCONNECTION.ENTER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](85, 75, "QBOCONNECTION.CLIENTID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](92, 77, "QBOCONNECTION.CLIENTSERVER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.clientsecret);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mObjModel.clientsecret != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](100, 79, "QBOCONNECTION.ENTER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](101, 81, "QBOCONNECTION.CLIENTSERVER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](108, 83, "QBOCONNECTION.DISCOVERYAUTHORITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.DiscoveryAuthority);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](117, 85, "QBOCONNECTION.TOKENENDPOINT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.tokenendpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbQBtokenView == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbQBtokenView == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbQBtokenView == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](128, 87, "QBOCONNECTION.MEMOFIELD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](135, 89, "QBOCONNECTION.INVOICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.Invoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](144, 91, "QBOCONNECTION.VOUCHER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.Voucher);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](153, 93, "QBOCONNECTION.INVOICERETURN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.InvoiceReturn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](162, 95, "QBOCONNECTION.VOUCHERRETURN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.VoucherReturn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](171, 97, "QBOCONNECTION.GLCREDIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.GLCr);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](180, 99, "QBOCONNECTION.GLDEBIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.GLDr);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](188, 101, "QBOCONNECTION.AGEBRACKET"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](195, 103, "QBOCONNECTION.DELAYTIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjModel.DelayTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbCustomControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](202, 105, "COMMON.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](206, 107, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbShowDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsNotesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbRemoveValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbEnterValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__.CustomLookupModalComponent, _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_11__.CustomComponentFormComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent, _shared_components_notes_notes_components__WEBPACK_IMPORTED_MODULE_13__.NotesComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_14__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_15__.CommonTaskModalComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: [".btn-min-width[_ngcontent-%COMP%] {\n  min-width: 137px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9maW5hbmNlL2NvbXBvbmVudHMvcWJvLWNvbm5lY3Rpb24tZGV0YWlscy9xYm8tY29ubmVjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9maW5hbmNlL2NvbXBvbmVudHMvcWJvLWNvbm5lY3Rpb24tZGV0YWlscy9xYm8tY29ubmVjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW1pbi13aWR0aHtcclxuICAgIG1pbi13aWR0aDogMTM3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iLCIuYnRuLW1pbi13aWR0aCB7XG4gIG1pbi13aWR0aDogMTM3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 62067:
/*!************************************************************************************!*\
  !*** ./src/app/main/finance/components/upload-finance/upload-finance.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFinanceComponent: () => (/* binding */ UploadFinanceComponent)
/* harmony export */ });
/* harmony import */ var _models_upload_finance_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/upload-finance.model */ 86436);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/custom.validators */ 41563);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constant/upload-finance.const */ 78100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_upload_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/upload-finance.service */ 19244);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var _core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/directives/uppercase.directive */ 47225);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


























const _c0 = ["paramCtrl"];
const _c1 = ["dataListCtrl"];
function UploadFinanceComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-loader");
  }
}
function UploadFinanceComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transactionType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", transactionType_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](transactionType_r7.value);
  }
}
function UploadFinanceComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 23)(8, "kendo-datepicker", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_div_78_Template_kendo_datepicker_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r8.mobjModel.DateFrom = $event);
    })("valueChange", function UploadFinanceComponent_div_78_Template_kendo_datepicker_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r10.bmlfonFromChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "div", 21)(12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 23)(16, "kendo-datepicker", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_div_78_Template_kendo_datepicker_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r11.mobjModel.DateTo = $event);
    })("valueChange", function UploadFinanceComponent_div_78_Template_kendo_datepicker_valueChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r12.bmlfonToChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 6, "UPLOADFINANCE.STARTDATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.mobjModel.DateFrom)("format", ctx_r2.msCustomDateFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 8, "UPLOADFINANCE.ENDDATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.mobjModel.DateTo)("format", ctx_r2.msCustomDateFormat);
  }
}
function UploadFinanceComponent_div_80_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function UploadFinanceComponent_div_80_ng_template_5_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r20.selectAllRows($event));
    })("ngModelChange", function UploadFinanceComponent_div_80_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r22.allRowsSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r14.allRowsSelected);
  }
}
function UploadFinanceComponent_div_80_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_div_80_ng_template_6_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r26);
      const dataItem_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](dataItem_r23.Sel = $event);
    })("change", function UploadFinanceComponent_div_80_ng_template_6_Template_input_change_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r26);
      const rowIndex_r24 = restoredCtx.rowIndex;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r27.selectSingleRow($event, rowIndex_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r23 = ctx.$implicit;
    const rowIndex_r24 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("name", "checked_", rowIndex_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", dataItem_r23.Sel);
  }
}
function UploadFinanceComponent_div_80_ng_template_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 59)(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    const dataItem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", column_r30.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](column_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](dataItem_r28[column_r30.field]);
  }
}
function UploadFinanceComponent_div_80_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, UploadFinanceComponent_div_80_ng_template_10_div_1_Template, 5, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r16.mobjGridSettings.columnsConfig);
  }
}
function UploadFinanceComponent_div_80_kendo_grid_column_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "kendo-grid-column", 60);
  }
  if (rf & 2) {
    const column_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("field", column_r32.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", column_r32.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", column_r32.hidden);
  }
}
const _c2 = function () {
  return [5, 10, 20, 50, 100];
};
function UploadFinanceComponent_div_80_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 61);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](1, _c2));
  }
}
const _c3 = function (a0) {
  return {
    gridloading: a0
  };
};
function UploadFinanceComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 18)(1, "div", 46)(2, "kendo-grid", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function UploadFinanceComponent_div_80_Template_kendo_grid_selectionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r33.bmlfonselectionChange($event));
    })("dataStateChange", function UploadFinanceComponent_div_80_Template_kendo_grid_dataStateChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r35.bmlfonDataStateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "kendo-grid-column", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, UploadFinanceComponent_div_80_ng_template_5_Template, 1, 1, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, UploadFinanceComponent_div_80_ng_template_6_Template, 1, 2, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "kendo-grid-messages", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "kendo-grid-column", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, UploadFinanceComponent_div_80_ng_template_10_Template, 2, 1, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, UploadFinanceComponent_div_80_kendo_grid_column_11_Template, 1, 3, "kendo-grid-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, UploadFinanceComponent_div_80_ng_template_12_Template, 4, 2, "ng-template", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](17, _c3, ctx_r3.mbLoadingEnabled == true))("kendoGridBinding", ctx_r3.mobjgrdModel)("sortable", true)("reorderable", true)("sort", ctx_r3.mobjGridSettings.state.sort)("skip", ctx_r3.mobjGridSettings.state.skip)("selectable", ctx_r3.mobjSelectableSettings)("columnMenu", false)("kendoGridSelectBy", ctx_r3.bmlfSelectedCallback)("selectedKeys", ctx_r3.maarraySelected)("loading", ctx_r3.mbLoadingEnabled)("resizable", true)("height", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 15, "CommonNoRecordsAvailable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r3.mobjGridSettings.columnsConfig);
  }
}
function UploadFinanceComponent_app_custom_lookup_modal_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-custom-lookup-modal", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("saveLookupField", function UploadFinanceComponent_app_custom_lookup_modal_92_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r36.bmlfSaveLookupField($event));
    })("closeLookup", function UploadFinanceComponent_app_custom_lookup_modal_92_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r38.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("keyData", ctx_r4.mobjLookupKeyData);
  }
}
function UploadFinanceComponent_kendo_dialog_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-dialog", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close", function UploadFinanceComponent_kendo_dialog_93_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r39.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "kendo-dialog-actions")(3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_kendo_dialog_93_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r41.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", ctx_r5.msReportDl, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 2, "COMMON.CLOSE"), " ");
  }
}
function UploadFinanceComponent_app_common_task_modal_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-common-task-modal", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("closeTaskModal", function UploadFinanceComponent_app_common_task_modal_94_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r42.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("taskData", ctx_r6.mobjTaskData);
  }
}
const _c4 = function (a0) {
  return {
    modalLoading: a0
  };
};
class UploadFinanceComponent {
  constructor(router, objService, lookupService, lsService, objToastService, dateFormatService, objUtils, userFieldService) {
    this.router = router;
    this.objService = objService;
    this.lookupService = lookupService;
    this.lsService = lsService;
    this.objToastService = objToastService;
    this.dateFormatService = dateFormatService;
    this.objUtils = objUtils;
    this.userFieldService = userFieldService;
    this.msscreenName = "Upload To Finance";
    this.msLookupFrom = "From Lookup";
    this.msLookupTo = "To Lookup";
    this.msToDesc = '';
    this.msFromDesc = '';
    this.mbloaderEnabled = false;
    this.mbIsLookupModal = false;
    this.mobjModel = new _models_upload_finance_model__WEBPACK_IMPORTED_MODULE_0__.UploadFinanceModel();
    this.mobjLookupDataModel = new _models_upload_finance_model__WEBPACK_IMPORTED_MODULE_0__.UploadFinanceModel();
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_4__.GridSettings();
    this.maarraySelected = [];
    this.msLookupField = "";
    this.mbIsLoading = false;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mnumLineItemRowIndex = null;
    this.msCustomDateFormat = "";
    this.paramValueArray = [];
    this.mobjgrdModel = [];
    this.miPagesize = 10;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_3__.CommonConstants.gsServerDateFormat;
    this.mbReportDialog = false;
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.mobjUserData = {};
    this.bmlfSelectedCallback = args => args.dataItem;
    this.allRowsSelected = false;
    this.msReportDl = '';
    this.mbisGridShow = false;
    this.mbShowDate = false;
    this.msCustomFinName = '';
    this.mbFinInterfaced = false;
    this.mbDescHide = false;
    this.marrBCDynamicTSF = _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__.UploadFinance.garrBCDynamicTsf;
    this.marrQuickBookOnline = _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__.UploadFinance.garrQuickBooksOnline;
    this.marrAccPac = _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__.UploadFinance.garrAccPac;
    this.marrgreatPlains = _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__.UploadFinance.garrGreatePlans;
    this.marrBME = _constant_upload_finance_const__WEBPACK_IMPORTED_MODULE_5__.UploadFinance.garrBME;
    this.marrTransactionType = [];
  }
  ngOnInit() {
    debugger;
    //Interface wise show dropdown option
    let parrFinSchema = JSON.parse(localStorage.getItem("SCMPHData"));
    if (parrFinSchema.length > 0) {
      if (parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE.toUpperCase() == 'CUSTOM FINANCE') {
        this.msCustomFinName = parrFinSchema[0].CustomFinanceName;
      } else {
        this.msCustomFinName = parrFinSchema[0].FINANCE_PACKAGE_DB_TYPE;
      }
    }
    this.bmlfSetTransactionType(this.msCustomFinName);
    this.objUtils.getBMEScreePermission(this.msscreenName);
    this.mobjUserData = this.lsService.getUserSession();
    this.mobjModel.TableName = 'Vendor Master';
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.bmlfsetformLoadModel();
    if (this.msCustomFinName == 'QuickBooks Online') {
      this.bmlfGetQBConnectionStatus();
    } else {
      this.bmlfGetFinanceIterfacedStatus();
    }
  }
  bmlfonTypeChange() {
    this.bmlfsetformLoadModel();
    this.bmlfGetFinanceIterfacedStatus();
  }
  bmlfsetformLoadModel() {
    this.mobjModel.From = '';
    this.msFromDesc = '';
    this.mobjModel.To = '';
    this.msToDesc = '';
    this.mobjModel.DateFrom = new Date();
    this.mobjModel.DateTo = new Date();
    this.mobjgrdModel = [];
    this.mbisGridShow = false;
    this.mbShowDate = false;
    this.mbDescHide = false;
    this.allRowsSelected = false;
    if (this.mobjModel.TableName == "Invoice" || this.mobjModel.TableName == "Voucher" || this.mobjModel.TableName == "GL Entries") {
      this.mbShowDate = true;
    }
    if (this.mobjModel.TableName == "Invoice" || this.mobjModel.TableName == "Voucher") {
      this.mbDescHide = true;
    }
  }
  bmlfonClose() {
    this.router.navigate(['main']);
  }
  bmlfFormatDate() {
    this.mobjgrdModel.forEach(ele => {
      if (!_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.IndentDate)) {
        ele.IndentDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.IndentDate).format(this.msCustomDateFormat.toUpperCase());
      }
      if (!_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.PODate)) {
        ele.PODate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.PODate).format(this.msCustomDateFormat.toUpperCase());
      }
    });
  }
  bmlfonInitGridSettings() {
    const parrColumnList = Object.keys(this.mobjgrdModel[0]);
    parrColumnList.forEach(ele => {
      let pobjCol = {
        field: ele,
        title: ele,
        filter: '',
        type: 'text',
        filterable: true,
        hidden: false
      };
      if (ele == 'Sel') {
        pobjCol.hidden = true;
      }
      this.mobjGridSettings.columnsConfig.push(pobjCol);
    });
  }
  bmlfonFromChange(value) {
    let pbResult = true;
    pbResult = _core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfCompareTwoDates(value, this.mobjModel.DateTo);
    if (pbResult == false) {
      this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.VALIDFROMDATE'));
      this.mobjModel.DateFrom = new Date();
      return false;
    }
  }
  bmlfonToChange(value) {
    let pbResult = true;
    pbResult = _core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfCompareTwoDates(this.mobjModel.DateFrom, value);
    if (pbResult == false) {
      this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.VALIDTODATE'));
      this.mobjModel.DateTo = this.mobjModel.DateFrom;
      return false;
    }
  }
  selectAllRows(e) {
    if (e.target.checked) {
      this.allRowsSelected = true;
      this.mobjgrdModel.forEach(ele => {
        ele.Sel = true;
      });
    } else {
      this.allRowsSelected = false;
      this.mobjgrdModel.forEach(ele => {
        ele.Sel = false;
      });
    }
  }
  selectSingleRow(e, rowIndex) {
    if (e.target.checked == false) {
      this.mobjgrdModel[rowIndex].Sel = false;
    } else {
      this.mobjgrdModel[rowIndex].Sel = true;
    }
  }
  bmlfonselectionChange(e) {
    debugger;
    if (e.selectedRows.length > 0) {
      e.selectedRows.forEach(ele => {
        this.maarraySelected.push(ele.dataItem);
      });
    } else if (e.deselectedRows.length > 0) {
      e.deselectedRows.forEach(ele => {
        let pobjTempData = ele.dataItem;
        this.maarraySelected = this.maarraySelected.filter(x => {
          if (x.Itemkey != pobjTempData.Itemkey) {
            return x;
          }
        });
      });
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
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, pnumRowIdx = null) {
    if (psEvent == 'blur' && this.msLookupField == psValue) {
      this.msLookupField = '';
      return false;
    }
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.mobjLookupDataModel[psField] = "";
      return false;
    }
    this.mbIsLoading = true;
    let psReqData;
    psLookUpKey = this.bmlfGetLookupKey();
    if (psLookUpKey != "") {
      psReqData = {
        "ScreenName": this.msscreenName,
        "LookUpKey": psLookUpKey,
        "Filter1": "",
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
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        let psLookupHeading = this.mobjModel.TableName + ' ' + psField;
        res.LookupData.forEach(ele => {
          Object.keys(ele).forEach(key => {
            let psKey = key.toUpperCase();
            if (psKey.search('DATE') != -1 || psKey.search('PURCHASEDT') != -1 || psKey.search('RECEIPTDT') != -1) {
              if (ele[key] && ele[key] != '') {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_1__().format(this.msCustomDateFormat.toUpperCase());
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        this.mnumLineItemRowIndex = pnumRowIdx;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.title = psLookupHeading;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = String(psValue);
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        if (psEvent == 'blur' && psValue) {
          let parrFilterdArr = [];
          /** --- Check : enter key matching record found. if find single row then direct call save lookup function --*/
          let pobjFirstInput = Object.keys(this.marrLookupGridData[0])[0];
          parrFilterdArr = this.marrLookupGridData.filter(obj => {
            if (String(obj[pobjFirstInput]).toUpperCase() == String(psValue).toUpperCase()) {
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
  bmlfSaveLookupField(pobjEvent) {
    debugger;
    this.mbIsLookupModal = false;
    if (this.mobjModel.TableName == 'Vendor Class') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Class_Key"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["Class_Key"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    } else if (this.mobjModel.TableName == 'Vendor Master') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Vendor_Key"];
        this.msFromDesc = pobjEvent.value["Vendor_Name"];
      } else {
        this.mobjModel.To = pobjEvent.value["Vendor_Key"];
        this.msToDesc = pobjEvent.value["Vendor_Name"];
      }
    } else if (this.mobjModel.TableName == 'Branch') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Branch_Key"];
        this.msFromDesc = pobjEvent.value["Company_Nam"];
      } else {
        this.mobjModel.To = pobjEvent.value["Branch_Key"];
        this.msToDesc = pobjEvent.value["Company_Nam"];
      }
    } else if (this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'AR Terms') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Terms_Key"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["Terms_Key"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    } else if (this.mobjModel.TableName == 'Customer Master') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Customer_Key"];
        this.msFromDesc = pobjEvent.value["Customer_Name"];
      } else {
        this.mobjModel.To = pobjEvent.value["Customer_Key"];
        this.msToDesc = pobjEvent.value["Customer_Name"];
      }
    } else if (this.mobjModel.TableName == 'Customer Class') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Class_Key"];
        this.msFromDesc = pobjEvent.value["Class_Descr"];
      } else {
        this.mobjModel.To = pobjEvent.value["Class_Key"];
        this.msToDesc = pobjEvent.value["Class_Descr"];
      }
    } else if (this.mobjModel.TableName == 'Sales Person') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Salesp_Key"];
        this.msFromDesc = pobjEvent.value["Salesp_Name"];
      } else {
        this.mobjModel.To = pobjEvent.value["Salesp_Key"];
        this.msToDesc = pobjEvent.value["Salesp_Name"];
      }
    } else if (this.mobjModel.TableName == 'AR FOB') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["FOB_Key"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["FOB_Key"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    } else if (this.mobjModel.TableName == 'AR Ship Via') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Ship_Via"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["Ship_Via"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    } else if (this.mobjModel.TableName == 'AR Ship To') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["ShipToKey"];
        this.msFromDesc = pobjEvent.value["ShipToName"];
      } else {
        this.mobjModel.To = pobjEvent.value["ShipToKey"];
        this.msToDesc = pobjEvent.value["ShipToName"];
      }
    } else if (this.mobjModel.TableName == 'Invoice') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Tranno"];
        this.msFromDesc = "";
      } else {
        this.mobjModel.To = pobjEvent.value["Tranno"];
        this.msToDesc = "";
      }
    } else if (this.mobjModel.TableName == 'Voucher') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Vouchno"];
        this.msFromDesc = "";
      } else {
        this.mobjModel.To = pobjEvent.value["Vouchno"];
        this.msToDesc = "";
      }
    } else if (this.mobjModel.TableName == 'GL Entries') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["JrnlBtchNo"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["JrnlBtchNo"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    } else if (this.mobjModel.TableName == 'Territory') {
      if (pobjEvent.field == this.msLookupFrom) {
        this.mobjModel.From = pobjEvent.value["Terr_Key"];
        this.msFromDesc = pobjEvent.value["Description"];
      } else {
        this.mobjModel.To = pobjEvent.value["Terr_Key"];
        this.msToDesc = pobjEvent.value["Description"];
      }
    }
  }
  bmlfGetLookupKey() {
    if (this.mobjModel.TableName == '') {
      return '';
    } else if (this.mobjModel.TableName == 'Vendor Class') {
      return 'VendorClass';
    } else if (this.mobjModel.TableName == 'Vendor Master') {
      return 'VendorKey';
    } else if (this.mobjModel.TableName == 'Branch') {
      return 'Branch';
    } else if (this.mobjModel.TableName == 'AP Terms') {
      return 'APTerms';
    } else if (this.mobjModel.TableName == 'Customer Master') {
      return 'Customer';
    } else if (this.mobjModel.TableName == 'Customer Class') {
      return 'CustomerClass';
    } else if (this.mobjModel.TableName == 'Sales Person') {
      return 'SalesPerson';
    } else if (this.mobjModel.TableName == 'AR FOB') {
      return 'ARFOB';
    } else if (this.mobjModel.TableName == 'AR Terms') {
      return 'ARTerms';
    } else if (this.mobjModel.TableName == 'Invoice') {
      return 'Invoice';
    } else if (this.mobjModel.TableName == 'Voucher') {
      return 'Voucher';
    } else if (this.mobjModel.TableName == 'GL Entries') {
      return 'GLEntries';
    } else if (this.mobjModel.TableName == 'Territory') {
      return 'Territory';
    } else if (this.mobjModel.TableName == 'AR Ship To') {
      return 'ShipTo';
    } else if (this.mobjModel.TableName == 'AR Ship Via') {
      return 'ShipVia';
    }
  }
  bmlfOpenErrorBlock(psMsg) {
    this.objToastService.notifyError(this.objUtils.bmgfonTranslate(psMsg));
  }
  // Set Lookup Value Column
  bmlfGetInputColumn(psfield) {
    if (this.mobjModel.TableName == 'Vendor Class') {
      return 'Class_Key';
    } else if (this.mobjModel.TableName == 'Vendor Master') {
      return 'Vendor_Key';
    } else if (this.mobjModel.TableName == 'Branch') {
      return 'Branch_Key';
    } else if (this.mobjModel.TableName == 'AP Terms') {
      return 'Terms_Key';
    } else if (this.mobjModel.TableName == 'Customer Master') {
      return 'Customer_Key';
    } else if (this.mobjModel.TableName == 'Customer Class') {
      return 'Class_Key';
    } else if (this.mobjModel.TableName == 'Sales Person') {
      return 'Salesp_Key';
    } else if (this.mobjModel.TableName == 'AR FOB') {
      return 'FOB_Key';
    } else if (this.mobjModel.TableName == 'AR Terms') {
      return 'Terms_Key';
    } else if (this.mobjModel.TableName == 'Invoice') {
      return 'Tranno';
    } else if (this.mobjModel.TableName == 'Voucher') {
      return 'Vouchno';
    } else if (this.mobjModel.TableName == 'GL Entries') {
      return 'JrnlBtchNo';
    } else if (this.mobjModel.TableName == 'AR Ship Via') {
      return '';
    } else if (this.mobjModel.TableName == 'AR Ship To') {
      return '';
    }
  }
  ////Value from Modal
  bmlfGetModelField(psfield) {
    if (psfield == this.msLookupFrom) {
      this.mobjModel.From = '';
      this.msFromDesc = '';
    } else {
      this.mobjModel.To = '';
      this.msToDesc = '';
    }
  }
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => String(obj[psInputKey]).toUpperCase() == String(pobjData.searchValue).toUpperCase());
      }
      if (parrFilterData.length == 0) {
        this.bmlfGetModelField(pobjData.field);
      }
    }
  }
  // Report expanded Modal
  bmlfReportModal(psKey) {
    if (psKey == 'open') {
      this.mbReportDialog = true;
    } else if (psKey == 'close' || psKey == 'ok') {
      this.mbReportDialog = false;
      this.bmlfsetformLoadModel();
      this.maarraySelected = [];
      this.mbloaderEnabled = false;
    }
  }
  //Open Task MODAL 
  bmlfOpenTaskModal(taskType) {
    this.mobjTaskData = {};
    this.mobjTaskData.taskType = taskType;
    if (taskType == 'myTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('MYTASK');
      this.mobjTaskData.innerRecord = this.mobjUserData;
    } else if (taskType == 'recordTask') {
      this.mobjTaskData.title = this.objUtils.bmgfonTranslate('TASKFORRECORD');
      let pobjFormRec = {};
      pobjFormRec.formName = this.msscreenName;
      pobjFormRec.primeKey = "";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //Services 
  bmlfProcessValidate(upload = false) {
    if (!this.objUtils.mbWrite) {
      this.objToastService.notifyWarning(this.objUtils.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return false;
    }
    if (this.mobjModel.TableName == '') {
      return false;
    }
    if (this.mobjModel.From != '' && this.mobjModel.To != '') {
      if (this.mobjModel.From > this.mobjModel.To) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.VALUECOMPARE'));
        setTimeout(function () {
          document.getElementById('txtFrom').focus();
        }, 10);
        return false;
      }
    }
    if (upload == true) {
      if (this.mobjgrdModel.length == 0) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.NODATA'));
        return false;
      }
      let parrSelected = this.mobjgrdModel.filter(x => x['Sel'] == true);
      if (parrSelected.length == 0) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.SELECTRECORD'));
        return false;
      }
    }
    return true;
  }
  bmlfonProcess() {
    debugger;
    let pbResult = false;
    this.mobjgrdModel = [];
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_4__.GridSettings();
    this.maarraySelected = [];
    pbResult = this.bmlfProcessValidate();
    let dateFrom = '';
    let dateTo = '';
    let psCustomDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_3__.CommonConstants.gsServerDateFormat;
    if (this.mobjModel.DateFrom == null || this.mobjModel.DateFrom == undefined) {
      dateFrom = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(2000, 1, 1)).format(psCustomDateFormat.toUpperCase());
    } else {
      dateFrom = moment__WEBPACK_IMPORTED_MODULE_1__(this.mobjModel.DateFrom).format(psCustomDateFormat.toUpperCase());
    }
    if (this.mobjModel.DateTo == null || this.mobjModel.DateTo == undefined) {
      dateTo = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(2070, 1, 1)).format(psCustomDateFormat.toUpperCase());
    } else {
      dateTo = moment__WEBPACK_IMPORTED_MODULE_1__(this.mobjModel.DateTo).format(psCustomDateFormat.toUpperCase());
    }
    if (pbResult == true) {
      this.mbIsLoading = true;
      let pobjReqData;
      pobjReqData = {
        JSON: JSON.stringify({
          Details: [{
            From: this.mobjModel.From,
            To: this.mobjModel.To,
            TableName: this.mobjModel.TableName,
            StartDate: dateFrom,
            EndDate: dateTo
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.BMGFGetFinUploadData(pobjReqData).subscribe(res => {
        debugger;
        this.mbIsLoading = false;
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          return false;
        }
        if (res.HeaderData.length > 0) {
          this.mbisGridShow = true;
          this.mobjgrdModel = res.HeaderData;
          this.bmlfChangeDateFormat();
          this.bmlfonInitGridSettings();
          this.mbIsLoading = false;
        } else {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('UPLOADFINANCE.NODATA'));
        }
      }), err => {
        console.log(err);
        this.mbIsLoading = false;
      };
    }
  }
  bmlfChangeDateFormat() {
    this.mobjgrdModel.forEach(ele => {
      if (this.mobjModel.TableName == "GL Entries") {
        ele.AplDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.AplDate).format(this.msCustomDateFormat.toUpperCase());
        ele.PstDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.PstDate).format(this.msCustomDateFormat.toUpperCase());
      } else if (this.mobjModel.TableName == "Invoice") {
        ele.InvDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.InvDate).format(this.msCustomDateFormat.toUpperCase());
      } else if (this.mobjModel.TableName == "Voucher") {
        ele.VoucherDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.VoucherDate).format(this.msCustomDateFormat.toUpperCase());
      }
      ele.RecDate = moment__WEBPACK_IMPORTED_MODULE_1__(ele.RecDate).format(this.msCustomDateFormat.toUpperCase());
    });
  }
  bmlfonUpload() {
    debugger;
    if (this.bmlfCheckForFinanceModuleInterfaced() == false) {
      return;
    }
    let pbResult = false;
    pbResult = this.bmlfProcessValidate(true);
    let dateFrom = '';
    let dateTo = '';
    let psCustomDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_3__.CommonConstants.gsServerDateFormat;
    if (this.mobjModel.DateFrom == null || this.mobjModel.DateFrom == undefined) {
      dateFrom = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(2000, 1, 1)).format(psCustomDateFormat.toUpperCase());
    } else {
      dateFrom = moment__WEBPACK_IMPORTED_MODULE_1__(this.mobjModel.DateFrom).format(psCustomDateFormat.toUpperCase());
    }
    if (this.mobjModel.DateTo == null || this.mobjModel.DateTo == undefined) {
      dateTo = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(2070, 1, 1)).format(psCustomDateFormat.toUpperCase());
    } else {
      dateTo = moment__WEBPACK_IMPORTED_MODULE_1__(this.mobjModel.DateTo).format(psCustomDateFormat.toUpperCase());
    }
    let parrSelected = this.mobjgrdModel.filter(x => x['Sel'] == true);
    if (pbResult == true) {
      this.mbIsLoading = true;
      let pobjReqData = {
        JSON: JSON.stringify({
          Header: [{
            TableName: this.mobjModel.TableName
          }],
          Details: parrSelected,
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.objService.BMGFUploadDataInFIN(pobjReqData).subscribe(res => {
        debugger;
        this.mbIsLoading = false;
        if (res == null) {
          this.objToastService.notifyError('Server Error');
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          this.msReportDl = res.Response[0].ResponseText;
          this.bmlfReportModal('open');
          this.bmlfsetformLoadModel();
          this.mbIsLoading = false;
        } else {
          this.msReportDl = res.Response[0].ResponseText;
          this.bmlfReportModal('open');
          this.bmlfsetformLoadModel();
          this.mbIsLoading = false;
        }
      }), err => {
        console.log(err);
        this.mbIsLoading = false;
      };
    }
  }
  //------------------------------------
  bmlfOnChange(fld) {
    if (fld == 'TO') {
      if (this.mobjModel.To == '') {
        this.msToDesc = '';
      }
    } else if (fld == 'FROM') {
      if (this.mobjModel.From == '') {
        this.msFromDesc = '';
      }
    }
  }
  //------------------------------------
  bmlfGetQBConnectionStatus() {
    let pobjReqData = {
      ScreenName: 'QBConnection',
      LookUpKey: 'CheckStatus'
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        if (res.LookupData[0].QBConnectStatus == 'CONNECT') {
          this.bmlfGetFinanceIterfacedStatus();
        } else {
          this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.QBCONNECTCHK'));
          this.router.navigate(['main']);
        }
      }
    });
  }
  //----------------------------------
  bmlfCheckForFinanceModuleInterfaced() {
    if (this.mobjModel.TableName == 'Vendor Master' || this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'Voucher' || this.mobjModel.TableName == 'Vendor Class' || this.mobjModel.TableName == 'Branch') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.APINTERFACED'));
        return false;
      }
    } else if (this.mobjModel.TableName == 'Customer Master' || this.mobjModel.TableName == 'AR Terms' || this.mobjModel.TableName == 'Invoice' || this.mobjModel.TableName == 'Sales Person' || this.mobjModel.TableName == 'Customer Class' || this.mobjModel.TableName == 'Territory' || this.mobjModel.TableName == 'AR Ship To' || this.mobjModel.TableName == 'AR Ship Via' || this.mobjModel.TableName == 'AR Tax' || this.mobjModel.TableName == 'AR FOB') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.ARINTERFACED'));
        return false;
      }
    } else if (this.mobjModel.TableName == 'GL Entries' || this.mobjModel.TableName == 'Account') {
      if (this.mbFinInterfaced == false) {
        this.objToastService.notifyError(this.objUtils.bmgfonTranslate('QBOCONNECTION.GLINTERFACED'));
        return false;
      }
    }
    return true;
  }
  //-------------------------------------------------
  bmlfGetFinanceIterfacedStatus() {
    let psfilter = '';
    if (this.mobjModel.TableName == 'Vendor Master' || this.mobjModel.TableName == 'AP Terms' || this.mobjModel.TableName == 'Voucher' || this.mobjModel.TableName == 'Vendor Class' || this.mobjModel.TableName == 'Branch') {
      psfilter = 'AP_Interfaced';
    } else if (this.mobjModel.TableName == 'Customer Master' || this.mobjModel.TableName == 'AR Terms' || this.mobjModel.TableName == 'Invoice' || this.mobjModel.TableName == 'Sales Person' || this.mobjModel.TableName == 'Customer Class' || this.mobjModel.TableName == 'Territory' || this.mobjModel.TableName == 'AR Ship To' || this.mobjModel.TableName == 'AR Ship Via' || this.mobjModel.TableName == 'AR Tax' || this.mobjModel.TableName == 'AR FOB') {
      psfilter = 'AR_Interfaced';
    } else if (this.mobjModel.TableName == 'GL Entries' || this.mobjModel.TableName == 'Account') {
      psfilter = 'GL_Interfaced';
    }
    let pobjReqData = {
      ScreenName: 'Configuration Finance Setup',
      LookUpKey: 'CheckInterfacing',
      Filter1: psfilter
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        if (res.LookupData[0].Default_Value.toUpperCase() == 'YES') {
          //Enable field
          this.mbFinInterfaced = true;
        } else {
          //Disable field
          this.mbFinInterfaced = false;
        }
        this.bmlfCheckForFinanceModuleInterfaced();
      }
    });
  }
  //-------------------------------------------------
  bmlfSetTransactionType(customFinName) {
    debugger;
    if (customFinName == 'BC Dynamic 365') {
      this.marrTransactionType = this.marrBCDynamicTSF;
    } else if (customFinName == 'QuickBooks Online') {
      this.marrTransactionType = this.marrQuickBookOnline;
    } else if (customFinName == 'GreatPlains') {
      this.marrTransactionType = this.marrgreatPlains;
    } else if (customFinName == 'ACCPAC') {
      this.marrTransactionType = this.marrAccPac;
    } else if (customFinName == "BME") {
      this.marrTransactionType = this.marrBME;
    }
  }
  static #_ = this.ɵfac = function UploadFinanceComponent_Factory(t) {
    return new (t || UploadFinanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_http_upload_finance_service__WEBPACK_IMPORTED_MODULE_6__.UploadFinanceService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_7__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_9__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_12__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: UploadFinanceComponent,
    selectors: [["app-upload-finance"]],
    viewQuery: function UploadFinanceComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.paramCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.dataListCtrl = _t.first);
      }
    },
    decls: 95,
    vars: 52,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "ngClass"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], [3, "click"], ["onclick", "window.open('../../../../../../assets/help files/Upload To Finance.pdf','_blank');", "type", "button", "id", "cmdSettingToggle", 1, "component-setting-icon-btn"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["tabindex", "1", "id", "cmbTableName", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", 3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "tabindex", "2", "maxlength", "100", "id", "txtFrom", "uppercase", "", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "change", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-form-label", 3, "hidden"], ["type", "text", "maxlength", "100", "id", "txtFromDescription", "disabled", "", 1, "form-control", 3, "ngModel", "hidden", "ngModelChange"], ["type", "text", "tabindex", "3", "maxlength", "100", "id", "txtTo", "uppercase", "", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "change", "blur"], ["type", "text", "maxlength", "100", "id", "txtToDescription", "disabled", "", 1, "form-control", 3, "ngModel", "hidden", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "seprator"], [1, "modal-footer"], ["type", "button", "id", "btnProcess", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnUpload", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "btnClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "dlgLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "processMsgDialog", "style", "z-index: 10000000;", "class", "process-dialog", 3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["value", "", 3, "value"], ["name", "dtStartDate", "tabindex", "4", "id", "dtStartDate", 1, "form-control", 3, "ngModel", "format", "ngModelChange", "valueChange"], ["name", "dtEndDate", "tabindex", "5", "id", "dtEndDate", 1, "form-control", 3, "ngModel", "format", "ngModelChange", "valueChange"], ["id", "divKendodiv", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "kendoLookupGrid", 1, "custom_h_grid", "max_scroll", "low_space_table", 3, "ngClass", "kendoGridBinding", "sortable", "reorderable", "sort", "skip", "selectable", "columnMenu", "kendoGridSelectBy", "selectedKeys", "loading", "resizable", "height", "selectionChange", "dataStateChange"], ["grid", "kendoGrid"], ["field", "checked", "width", "30"], ["kendoGridHeaderTemplate", ""], ["kendoGridCellTemplate", ""], [3, "noRecords"], ["media", "(max-width: 767px)"], ["media", "(min-width: 768px)", "width", "150", 3, "field", "title", "hidden", 4, "ngFor", "ngForOf"], ["kendoPagerTemplate", ""], ["type", "checkbox", "name", "selectAll", 3, "ngModel", "change", "ngModelChange"], ["type", "checkbox", 3, "name", "ngModel", "ngModelChange", "change"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], ["media", "(min-width: 768px)", "width", "150", 3, "field", "title", "hidden"], [3, "pageSizes"], [3, "keyData", "saveLookupField", "closeLookup"], ["id", "processMsgDialog", 1, "process-dialog", 2, "z-index", "10000000", 3, "close"], [3, "innerHTML"], ["kendoButton", "", "id", "cmdCloseDescription", 3, "click"], [3, "taskData", "closeTaskModal"]],
    template: function UploadFinanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, UploadFinanceComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 10)(13, "ul")(14, "li")(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_a_click_15_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_a_click_19_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "button", 12)(23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_button_click_25_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 23)(38, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_Template_select_ngModelChange_38_listener($event) {
          return ctx.mobjModel.TableName = $event;
        })("change", function UploadFinanceComponent_Template_select_change_38_listener() {
          return ctx.bmlfonTypeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, UploadFinanceComponent_option_39_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 18)(41, "div", 19)(42, "div", 20)(43, "div", 21)(44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "div", 23)(48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_Template_input_ngModelChange_48_listener($event) {
          return ctx.mobjModel.From = $event;
        })("focus", function UploadFinanceComponent_Template_input_focus_48_listener() {
          return ctx.bmlfOnGlobalFocus("From", ctx.mobjModel.From);
        })("change", function UploadFinanceComponent_Template_input_change_48_listener() {
          return ctx.bmlfOnChange("FROM");
        })("blur", function UploadFinanceComponent_Template_input_blur_48_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupFrom, ctx.msscreenName, "From", "blur", ctx.mobjModel.From, "custom", "txtFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_span_click_49_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupFrom, ctx.msscreenName, "From", "click", ctx.mobjModel.From, "custom", "txtFrom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](50, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 19)(52, "div", 20)(53, "div", 21)(54, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 23)(58, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_Template_input_ngModelChange_58_listener($event) {
          return ctx.msFromDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 18)(60, "div", 19)(61, "div", 20)(62, "div", 21)(63, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "div", 23)(67, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_Template_input_ngModelChange_67_listener($event) {
          return ctx.mobjModel.To = $event;
        })("focus", function UploadFinanceComponent_Template_input_focus_67_listener() {
          return ctx.bmlfOnGlobalFocus("To", ctx.mobjModel.To);
        })("change", function UploadFinanceComponent_Template_input_change_67_listener() {
          return ctx.bmlfOnChange("TO");
        })("blur", function UploadFinanceComponent_Template_input_blur_67_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupTo, ctx.msscreenName, "To", "blur", ctx.mobjModel.To, "custom", "txtTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_span_click_68_listener() {
          return ctx.bmlfOpenLookupModal(ctx.msLookupTo, ctx.msscreenName, "To", "click", ctx.mobjModel.To, "custom", "txtTo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](69, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "div", 19)(71, "div", 20)(72, "div", 21)(73, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](76, "div", 23)(77, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function UploadFinanceComponent_Template_input_ngModelChange_77_listener($event) {
          return ctx.msToDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](78, UploadFinanceComponent_div_78_Template, 17, 10, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](79, "hr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](80, UploadFinanceComponent_div_80_Template, 13, 19, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "div", 35)(82, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_button_click_82_listener() {
          return ctx.bmlfonProcess();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](85, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_button_click_85_listener() {
          return ctx.bmlfonUpload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](88, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function UploadFinanceComponent_Template_button_click_88_listener() {
          return ctx.bmlfonClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](92, UploadFinanceComponent_app_custom_lookup_modal_92_Template, 1, 1, "app-custom-lookup-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](93, UploadFinanceComponent_kendo_dialog_93_Template, 6, 4, "kendo-dialog", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](94, UploadFinanceComponent_app_common_task_modal_94_Template, 1, 1, "app-common-task-modal", 42);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](50, _c4, ctx.mbloaderEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 28, "UPLOADFINANCE.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](17, 30, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 32, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](36, 34, "UPLOADFINANCE.TRANSACTIONTYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjModel.TableName);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.marrTransactionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](46, 36, "UPLOADFINANCE.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjModel.From);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", ctx.mbDescHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](56, 38, "UPLOADFINANCE.FROMDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.msFromDesc)("hidden", ctx.mbDescHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](65, 40, "UPLOADFINANCE.TO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjModel.To);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", ctx.mbDescHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](75, 42, "UPLOADFINANCE.TODESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.msToDesc)("hidden", ctx.mbDescHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbShowDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbisGridShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](84, 44, "UPLOADFINANCE.PROCESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](87, 46, "UPLOADFINANCE.UPLOAD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](90, 48, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbReportDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__.CustomLookupModalComponent, _shared_directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_14__.UppercaseDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__.LoaderComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_16__.CommonTaskModalComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.SelectionDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.HeaderTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.PagerTemplateDirective, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 63479:
/*!*****************************************************************!*\
  !*** ./src/app/main/finance/constant/download-finance.const.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadFInance: () => (/* binding */ DownloadFInance)
/* harmony export */ });
class DownloadFInance {
  static #_ = this.garrBCDynamicTsf = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Account',
    value: 'Account'
  }];
  static #_2 = this.garrQuickBooksOnline = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Account',
    value: 'Account'
  }];
  static #_3 = this.garrGreatePlans = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'Territory',
    value: 'Territory'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Ship Via',
    value: 'AR Ship Via'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Account',
    value: 'Account'
  }];
  static #_4 = this.garrBME = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'Territory',
    value: 'Territory'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Ship Via',
    value: 'AR Ship Via'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }, {
    key: 'Account',
    value: 'Account'
  }];
  static #_5 = this.garrAccPac = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Account',
    value: 'Account'
  }];
}

/***/ }),

/***/ 78100:
/*!***************************************************************!*\
  !*** ./src/app/main/finance/constant/upload-finance.const.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFinance: () => (/* binding */ UploadFinance)
/* harmony export */ });
class UploadFinance {
  static #_ = this.garrBCDynamicTsf = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }, {
    key: 'Account',
    value: 'Account'
  }];
  static #_2 = this.garrQuickBooksOnline = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }
  // {
  //     key:'Account',
  //     value:'Account'
  // }
  ];
  static #_3 = this.garrGreatePlans = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'Territory',
    value: 'Territory'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Ship Via',
    value: 'AR Ship Via'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }];
  static #_4 = this.garrBME = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'Territory',
    value: 'Territory'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Ship Via',
    value: 'AR Ship Via'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }
  // {
  //     key:'Account',
  //     value:'Account'
  // }
  ];
  static #_5 = this.garrAccPac = [{
    key: 'Vendor Master',
    value: 'Vendor Master'
  }, {
    key: 'Vendor Class',
    value: ' Vendor Class'
  }, {
    key: 'AP Terms',
    value: 'AP Terms'
  }, {
    key: 'Voucher',
    value: 'Voucher'
  }, {
    key: 'Customer Master',
    value: 'Customer Master'
  }, {
    key: 'Customer Class',
    value: 'Customer Class'
  }, {
    key: 'Sales Person',
    value: 'Sales Person'
  }, {
    key: 'AR Ship To',
    value: 'AR Ship To'
  }, {
    key: 'AR Terms',
    value: 'AR Terms'
  }, {
    key: 'Invoice',
    value: 'Invoice'
  }, {
    key: 'GL Entries',
    value: 'GL Entries'
  }];
}

/***/ }),

/***/ 30316:
/*!********************************************************!*\
  !*** ./src/app/main/finance/finance-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceRoutingModule: () => (/* binding */ FinanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance.component */ 78134);
/* harmony import */ var _components_upload_finance_upload_finance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/upload-finance/upload-finance.component */ 62067);
/* harmony import */ var _components_download_finance_download_finance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/download-finance/download-finance.component */ 39110);
/* harmony import */ var _components_qbo_connection_details_qbo_connection_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/qbo-connection-details/qbo-connection-details.component */ 6768);
/* harmony import */ var _components_finance_mapping_finance_mapping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/finance-mapping/finance-mapping.component */ 8664);
/* harmony import */ var _components_download_upload_defaults_download_upload_defaults_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/download-upload-defaults/download-upload-defaults.component */ 64899);
/* harmony import */ var _components_finance_series_finance_series_finance_series_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/finance-series/finance-series/finance-series.component */ 82913);
/* harmony import */ var _components_finance_series_finance_series_manage_finance_series_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/finance-series/finance-series-manage/finance-series-manage.component */ 97379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);












// import {TypeMasterList1099Component} from './components/1099-type-master/type-master-list1099/type-master-list1099.component';
// import {TypeMasterManage1099Component} from './components/1099-type-master/type-master-manage1099/type-master-manage1099.component'
const routes = [{
  path: '',
  component: _finance_component__WEBPACK_IMPORTED_MODULE_1__.FinanceComponent,
  children: [{
    path: '',
    redirectTo: 'upload-finance',
    pathMatch: 'full'
  }, {
    path: 'upload-finance',
    component: _components_upload_finance_upload_finance_component__WEBPACK_IMPORTED_MODULE_2__.UploadFinanceComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'download-finance',
    component: _components_download_finance_download_finance_component__WEBPACK_IMPORTED_MODULE_3__.DownloadFinanceComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'qbo-connection',
    component: _components_qbo_connection_details_qbo_connection_details_component__WEBPACK_IMPORTED_MODULE_4__.QboConnectionDetailsComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'finance-mapping',
    component: _components_finance_mapping_finance_mapping_component__WEBPACK_IMPORTED_MODULE_5__.FinanceMappingComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'download-upload-defaults',
    component: _components_download_upload_defaults_download_upload_defaults_component__WEBPACK_IMPORTED_MODULE_6__.DownloadUploadDefaultsComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'finance-series',
    component: _components_finance_series_finance_series_finance_series_component__WEBPACK_IMPORTED_MODULE_7__.FinanceSeriesComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'finance-series/manage',
    component: _components_finance_series_finance_series_manage_finance_series_manage_component__WEBPACK_IMPORTED_MODULE_8__.FinanceSeriesManageComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }
  // { path: '1099-type-master', component: TypeMasterList1099Component, canActivate: [AuthGuard] },
  // { path: '1099-type-manage/manage', component: TypeMasterManage1099Component, canActivate: [AuthGuard] }
  ]
}];

class FinanceRoutingModule {
  static #_ = this.ɵfac = function FinanceRoutingModule_Factory(t) {
    return new (t || FinanceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: FinanceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FinanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 78134:
/*!***************************************************!*\
  !*** ./src/app/main/finance/finance.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceComponent: () => (/* binding */ FinanceComponent)
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 96423);
/* harmony import */ var _i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/hi */ 63590);
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/zh */ 6198);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 87378);
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ 69595);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 96218);
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/vi */ 4610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);










class FinanceComponent {
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
  static #_ = this.ɵfac = function FinanceComponent_Factory(t) {
    return new (t || FinanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: FinanceComponent,
    selectors: [["app-finance"]],
    decls: 1,
    vars: 0,
    template: function FinanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76172:
/*!************************************************!*\
  !*** ./src/app/main/finance/finance.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceModule: () => (/* binding */ FinanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance-routing.module */ 30316);
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance.component */ 78134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/searchdata.pipe */ 80669);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ 28277);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _common_report_http_commonreport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-report/http/commonreport.service */ 2453);
/* harmony import */ var _components_upload_finance_upload_finance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upload-finance/upload-finance.component */ 62067);
/* harmony import */ var _components_download_finance_download_finance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/download-finance/download-finance.component */ 39110);
/* harmony import */ var _components_qbo_connection_details_qbo_connection_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/qbo-connection-details/qbo-connection-details.component */ 6768);
/* harmony import */ var _components_finance_mapping_finance_mapping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/finance-mapping/finance-mapping.component */ 8664);
/* harmony import */ var _components_download_upload_defaults_download_upload_defaults_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/download-upload-defaults/download-upload-defaults.component */ 64899);
/* harmony import */ var _http_finance_series_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/finance-series.service */ 79964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);





















// import { TypeMasterList1099Component } from './components/1099-type-master/type-master-list1099/type-master-list1099.component';
// import { TypeMasterManage1099Component } from './components/1099-type-master/type-master-manage1099/type-master-manage1099.component';
class FinanceModule {
  static #_ = this.ɵfac = function FinanceModule_Factory(t) {
    return new (t || FinanceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: FinanceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [src_app_shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchData, _common_report_http_commonreport_service__WEBPACK_IMPORTED_MODULE_5__.CommonReportService, _http_finance_series_service__WEBPACK_IMPORTED_MODULE_11__.FinanceSeriesService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinanceRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.PDFModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_4__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__.DropDownsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__.ButtonsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FinanceModule, {
    declarations: [_finance_component__WEBPACK_IMPORTED_MODULE_1__.FinanceComponent, _components_upload_finance_upload_finance_component__WEBPACK_IMPORTED_MODULE_6__.UploadFinanceComponent, _components_download_finance_download_finance_component__WEBPACK_IMPORTED_MODULE_7__.DownloadFinanceComponent, _components_qbo_connection_details_qbo_connection_details_component__WEBPACK_IMPORTED_MODULE_8__.QboConnectionDetailsComponent, _components_finance_mapping_finance_mapping_component__WEBPACK_IMPORTED_MODULE_9__.FinanceMappingComponent, _components_download_upload_defaults_download_upload_defaults_component__WEBPACK_IMPORTED_MODULE_10__.DownloadUploadDefaultsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _finance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinanceRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__.PDFModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_4__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_17__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__.DropDownsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__.ButtonsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogsModule]
  });
})();

/***/ }),

/***/ 6162:
/*!**********************************************************************!*\
  !*** ./src/app/main/finance/http/download-upload-default.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadUploadDefaultService: () => (/* binding */ DownloadUploadDefaultService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class DownloadUploadDefaultService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  BMGFGetUpldDnldDefaults(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetUpldDnldDefaults`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFSaveUpldDnldDefaults(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveUpldDnldDefaults`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function DownloadUploadDefaultService_Factory(t) {
    return new (t || DownloadUploadDefaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DownloadUploadDefaultService,
    factory: DownloadUploadDefaultService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65343:
/*!**************************************************************!*\
  !*** ./src/app/main/finance/http/finance-mapping.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceMappingService: () => (/* binding */ FinanceMappingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class FinanceMappingService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmgfGetFinanceMapping(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFinanceMapping`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfSaveFinanceMapping(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveFinanceMapping`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfDeleteFinanceMappingLine(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteFinanceMappingLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfGetFinLookupForFinMapping(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFinLookupForFinMapping`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function FinanceMappingService_Factory(t) {
    return new (t || FinanceMappingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FinanceMappingService,
    factory: FinanceMappingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 77328:
/*!*************************************************************!*\
  !*** ./src/app/main/finance/http/qbo-connection.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QboConnectionService: () => (/* binding */ QboConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class QboConnectionService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  GetQBOConnectionDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetQBOConnectionDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  SaveQBOConnectionDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveQBOConnectionDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function QboConnectionService_Factory(t) {
    return new (t || QboConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: QboConnectionService,
    factory: QboConnectionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19244:
/*!*************************************************************!*\
  !*** ./src/app/main/finance/http/upload-finance.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFinanceService: () => (/* binding */ UploadFinanceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class UploadFinanceService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  BMGFGetFinUploadData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFinUploadData`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFUploadDataInFIN(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUploadDataInFIN`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function UploadFinanceService_Factory(t) {
    return new (t || UploadFinanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: UploadFinanceService,
    factory: UploadFinanceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96423:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/en.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    UPLOADFINANCE: {
      TITLE: 'Upload Finance Data',
      TRANSACTIONTYPE: 'Transaction/Master Type',
      FROM: 'From',
      FROMDESC: 'From Description',
      TODESC: 'To Description',
      TO: 'To',
      STARTDATE: 'Start Date',
      ENDDATE: 'End Date',
      PROCESS: 'Process',
      UPLOAD: 'Upload',
      NODATA: "No data found.",
      SELECTRECORD: "No record is selected to process.",
      VALIDFROMDATE: "From date can not be greater than To date.",
      VALIDTODATE: "To date can not be less than From date.",
      VALUECOMPARE: "From value can not be greater than To value."
    },
    DOWNLOADFINANCE: {
      TITLE: 'Download Finance Data',
      TRANSACTIONTYPE: 'Master Type',
      FROM: 'From',
      FROMDESC: 'From Description',
      TODESC: 'To Description',
      TO: 'To',
      STARTDATE: 'Start Date',
      ENDDATE: 'End Date',
      PROCESS: 'Process',
      DOWNLOAD: 'Download',
      NODATA: "No data found.",
      SELECTRECORD: "No record is selected to process.",
      VALIDFROMDATE: "From date can not be greater than To date.",
      VALIDTODATE: "To date can not be less than From date.",
      VALUECOMPARE: "From value can not be greater than To value.",
      DATARANGE: 'Data Range',
      DOWNLOADWITHID: 'Download With ID',
      CLASS: 'Class Name',
      CLASSID: 'Class Id',
      MSG: {
        ACCTDOWNLOADCHK: 'Cannot download Account, its length is greater than ',
        ACCTDOWNLOADCHK1: 'Cannot download Account having character '
      }
    },
    QBOCONNECTION: {
      TITLE: 'QuickBooks Online Connection Details',
      QBO: 'QuickBooks Online',
      DISCOVERYURL: 'Discovery URL',
      REDIRECTURL: 'Redirect URL',
      CLIENTID: 'Client ID',
      CLIENTSERVER: 'Client Secret',
      DISCOVERYAUTHORITY: 'Discovery Authority',
      TOKENENDPOINT: 'Token End  Point',
      RELAMID: 'Realm ID',
      ACCESSTOKEN: 'Access Token',
      REFRESHTOKEN: 'Refresh Token',
      //MEMOFIELD: "Memo Field Sql",
      MEMOFIELD: "Memo Field SQL",
      INVOICE: 'Invoice',
      VOUCHER: 'Voucher',
      INVOICERETURN: 'Invoice Return',
      VOUCHERRETURN: 'Voucher Return',
      GLCREDIT: 'GL Credit',
      GLDEBIT: 'GL Debit',
      AGEBRACKET: 'Age Bracket Delay Time',
      DELAYTIME: 'Delay Time (1000=1 Sec)',
      //FIELDVALUE: 'Field Value',
      VALUE: 'Value',
      FIELDVALUEALERT: 'Do you want to delete ',
      ENTER: 'Enter ',
      ENVIORMENT: 'Enviorment',
      QBOBASEURL: 'Base URL',
      QBCONNECTCHK: 'QuickBooks Online is dis-connected, First connect to QuickBooks Online.',
      QBAUTHORIZE: 'Connected to QuickBooks Online.',
      QBAUTHORIZEERROR: 'Error in connecting to QuickBooks Online.',
      QBDISCONNECT: 'Disconnected from QuickBooks Online',
      QBDISCONNECTERROR: 'Error in disconnecting from QuickBooks Online',
      APINTERFACED: 'AP is not finance interfaced at Finance setup.',
      ARINTERFACED: 'AR is not finance interfaced at Finance setup.',
      GLINTERFACED: 'GL is not finance interfaced at Finance setup.'
    },
    DOWNLOADUPLOADDEFAULTS: {
      TITLE: 'Upload and Download Defaults',
      TAB1: 'Download Default',
      TAB2: 'Upload Default',
      DFLTVENDORCLS: 'Default Vendor Class',
      VENDCLSDESC: 'Vendor Class Description',
      DFLTEXPACCT: 'Default Expense Account',
      ACCTDESC: 'Account Description',
      DFLTCUSTCLS: 'Default Customer Class',
      CUSTCLSDESC: 'Customer Class Description',
      OVERRIDEVENDOR: 'Override Vendor Address on Update',
      ADDVENDOR: 'Add Vendor Name in Address 1',
      OVERRIDECUSTOMER: 'Override Customer Address on Update',
      ADDCUSTOMER: 'Add Customer Name in Address 1',
      OVERRIDEINVOICE: 'Override BatchMaster Invoice No. with QuickBooks Online Invoice No.',
      POPULATEQUICKBOOK: 'Populate QuickBooks Online Ref No. with Voucher'
    },
    FINANCEMAPPING: {
      FINMAP: 'Finance Mapping',
      SELECTMODULE: 'Select Module',
      ADDLINE: 'Add Line',
      FROMKEY: 'From Key (BME)',
      TOKEY: 'To Key (Finance)',
      COMPLETEROWENTRY: "Complete the row entry"
    },
    FINANCESERIES: {
      COMONTITLE: "NC CAPA Master Screen",
      TITLE: "Finance Series",
      ADDFINANCE: "Add Finance Series",
      TYPE: "Type",
      SERIES: "Series (Option 1)",
      CUSTOMOPTION: "Custom (Option 2)",
      MNTH: "Month (Option 3)",
      RECUSERID: "Rec UserId",
      RECDATE: "Rec Date",
      YER: "Year (Option 4)",
      SEQU: "Sequence No (Option 5)",
      GENRATEID: "Generate ID",
      MNTHYER: "MonthYear",
      AUTOSEQUENCE: "AutoSequence",
      REINITALIZE: "Reinitalize",
      USERGROUP: "UserGroup",
      //GENRATESEQUENCE:"Genrate Sequence",
      GENRATESEQUENCE: "Sequence Option",
      SEQUENCEOPTION: "Sequence Option",
      AUTOINSERT: "Auto Insert Series For Month & Year",
      INITIALIZESERIES: "Initialize Series For The Month/Year",
      INITIALIZESERIESMONTH: "Initialize Series From Month",
      DISPLAYFORMAT: "Display Format",
      MONTH: "Month",
      YEAR: "Year",
      CHAR3: "3-Char[01/JAN]",
      CHAR2: "2-Char[01/02]",
      MSG: {
        DISPLAYVALIDATION: "Finance Series length cannot exceed 12 Characters",
        INVALIDMONTH: "Invalid Month",
        INVOICESERIES: "Enter Invoice series (Option 1)",
        MONTH: "Enter Month (Option 3)",
        YEAR: "Enter Year (Option 4)",
        SEQU: "Enter Sequence No (Option 5)",
        GenrateSequence: "Enter Sequence Option",
        VALIDMONTH: "Enter Valid Year",
        PRDKEYREQ: "Series can not be blank",
        UserGroup: "User Group can not be blank"
      }
    },
    TYPEMASTER1099: {
      TITLE: '1099 Type Master',
      ADD1099TYPEMASTER: 'Add 1099 Type Master',
      TYPEKEY1099: "1099 Type Key",
      TYPE1099: "1099 Type",
      DESCRIPTION: "Type Master Description",
      RECUSERID: "Rec UserId",
      RECDATE: "Rec Date"
    }
  }
};

/***/ }),

/***/ 69595:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/es.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    UPLOADFINANCE: {
      "TITLE": "Subir datos financieros",
      "TRANSACTIONTYPE": "Tipo de transacción/maestro",
      "FROM": "Desde",
      "FROMDESC": "Descripción desde",
      "TODESC": "Descripción hasta",
      "TO": "Hasta",
      "STARTDATE": "Fecha de inicio",
      "ENDDATE": "Fecha de fin",
      "PROCESS": "Proceso",
      "UPLOAD": "Subir",
      "NODATA": "No se encontraron datos.",
      "SELECTRECORD": "No se ha seleccionado ningún registro para procesar.",
      "VALIDFROMDATE": "La fecha desde no puede ser mayor que la fecha hasta.",
      "VALIDTODATE": "La fecha hasta no puede ser menor que la fecha desde.",
      "VALUECOMPARE": "El valor desde no puede ser mayor que el valor hasta."
    },
    "DOWNLOADFINANCE": {
      "TITLE": "Descargar datos financieros",
      "TRANSACTIONTYPE": "Tipo de maestro",
      "FROM": "Desde",
      "FROMDESC": "Descripción desde",
      "TODESC": "Descripción hasta",
      "TO": "Hasta",
      "STARTDATE": "Fecha de inicio",
      "ENDDATE": "Fecha de fin",
      "PROCESS": "Proceso",
      "DOWNLOAD": "Descargar",
      "NODATA": "No se encontraron datos.",
      "SELECTRECORD": "No se ha seleccionado ningún registro para procesar.",
      "VALIDFROMDATE": "La fecha desde no puede ser mayor que la fecha hasta.",
      "VALIDTODATE": "La fecha hasta no puede ser menor que la fecha desde.",
      "VALUECOMPARE": "El valor desde no puede ser mayor que el valor hasta.",
      "DATARANGE": "Rango de datos",
      "DOWNLOADWITHID": "Descargar con ID",
      "CLASS": "Nombre de la clase",
      "CLASSID": "ID de la clase",
      "MSG": {
        "ACCTDOWNLOADCHK": "No se puede descargar la cuenta, su longitud es mayor que ",
        "ACCTDOWNLOADCHK1": "No se puede descargar la cuenta que tiene el carácter "
      }
    },
    "QBOCONNECTION": {
      "TITLE": "Detalles de conexión de QuickBooks Online",
      "QBO": "QuickBooks Online",
      "DISCOVERYURL": "URL de descubrimiento",
      "REDIRECTURL": "URL de redirección",
      "CLIENTID": "ID del cliente",
      "CLIENTSERVER": "Secreto del cliente",
      "DISCOVERYAUTHORITY": "Autoridad de descubrimiento",
      "TOKENENDPOINT": "Punto final del token",
      "RELAMID": "ID del reino",
      "ACCESSTOKEN": "Token de acceso",
      "REFRESHTOKEN": "Token de actualización",
      "MEMOFIELD": "Campo de memo SQL",
      "INVOICE": "Factura",
      "VOUCHER": "Vale",
      "INVOICERETURN": "Devolución de factura",
      "VOUCHERRETURN": "Devolución de vale",
      "GLCREDIT": "Crédito de GL",
      "GLDEBIT": "Débito de GL",
      "AGEBRACKET": "Tiempo de demora en el intervalo de edad",
      "DELAYTIME": "Tiempo de demora (1000=1 seg)",
      "VALUE": "Valor",
      "FIELDVALUEALERT": "¿Desea eliminar ",
      "ENTER": "Ingrese ",
      "ENVIORMENT": "Entorno",
      "QBOBASEURL": "URL base",
      "QBCONNECTCHK": "QuickBooks Online está desconectado, primero conéctese a QuickBooks Online.",
      "QBAUTHORIZE": "Conectado a QuickBooks Online.",
      "QBAUTHORIZEERROR": "Error al conectar con QuickBooks Online.",
      "QBDISCONNECT": "Desconectado de QuickBooks Online",
      "QBDISCONNECTERROR": "Error al desconectar de QuickBooks Online",
      "APINTERFACED": "AP no está interfazado financieramente en la configuración financiera.",
      "ARINTERFACED": "AR no está interfazado financieramente en la configuración financiera.",
      "GLINTERFACED": "GL no está interfazado financieramente en la configuración financiera."
    },
    "DOWNLOADUPLOADDEFAULTS": {
      "TITLE": "Valores predeterminados de carga y descarga",
      "TAB1": "Descarga predeterminada",
      "TAB2": "Carga predeterminada",
      "DFLTVENDORCLS": "Clase de proveedor predeterminada",
      "VENDCLSDESC": "Descripción de la clase de proveedor",
      "DFLTEXPACCT": "Cuenta de gasto predeterminada",
      "ACCTDESC": "Descripción de la cuenta",
      "DFLTCUSTCLS": "Clase de cliente predeterminada",
      "CUSTCLSDESC": "Descripción de la clase de cliente",
      "OVERRIDEVENDOR": "Anular la dirección del proveedor en la actualización",
      "ADDVENDOR": "Agregar el nombre del proveedor en la dirección 1",
      "OVERRIDECUSTOMER": "Anular la dirección del cliente en la actualización",
      "ADDCUSTOMER": "Agregar el nombre del cliente en la dirección 1",
      "OVERRIDEINVOICE": "Anular el número de factura de BatchMaster con el número de factura de QuickBooks Online.",
      "POPULATEQUICKBOOK": "Rellenar QuickBooks Online Ref No. con Voucher"
    },
    "FINANCEMAPPING": {
      "FINMAP": "Mapeo financiero",
      "SELECTMODULE": "Seleccionar módulo",
      "ADDLINE": "Agregar línea",
      "FROMKEY": "Desde clave (BME)",
      "TOKEY": "Hasta clave (Finanzas)",
      "COMPLETEROWENTRY": "Complete la entrada de la fila"
    },
    "FINANCESERIES": {
      "COMONTITLE": "NC CAPA Master Screen",
      "TITLE": "Serie financiera",
      "ADDFINANCE": "Agregar serie financiera",
      "TYPE": "Tipo",
      "SERIES": "Serie (Opción 1)",
      "CUSTOMOPTION": "Personalizado (Opción 2)",
      "MNTH": "Mes (Opción 3)",
      "RECUSERID": "ID de usuario",
      "RECDATE": "Fecha de creación",
      "YER": "Año (Opción 4)",
      "SEQU": "Número de secuencia (Opción 5)",
      "GENRATEID": "Generar ID",
      "MNTHYER": "MesAño",
      "AUTOSEQUENCE": "AutoSecuencia",
      "REINITALIZE": "Reinicializar",
      "USERGROUP": "Grupo de usuarios",
      "GENRATESEQUENCE": "Opción de secuencia",
      "SEQUENCEOPTION": "Opción de secuencia",
      "AUTOINSERT": "Insertar automáticamente serie para mes y año",
      "INITIALIZESERIES": "Inicializar serie para mes/año",
      "INITIALIZESERIESMONTH": "Inicializar serie desde mes",
      "DISPLAYFORMAT": "Formato de visualización",
      "MONTH": "Mes",
      "YEAR": "Año",
      "CHAR3": "3 caracteres [01/ENE]",
      "CHAR2": "2 caracteres [01/02]",
      "MSG": {
        "DISPLAYVALIDATION": "La longitud de la serie financiera no puede exceder los 12 caracteres",
        "INVALIDMONTH": "Mes no válido",
        "INVOICESERIES": "Ingrese la serie de facturas (Opción 1)",
        "MONTH": "Ingrese el mes (Opción 3)",
        "YEAR": "Ingrese el año (Opción 4)",
        "SEQU": "Ingrese el número de secuencia (Opción 5)",
        "GenrateSequence": "Ingrese la opción de secuencia",
        "VALIDMONTH": "Ingrese un año válido"
      }
    },
    "TYPEMASTER1099": {
      "TITLE": "Maestro de tipo 1099",
      "ADD1099TYPEMASTER": "Agregar maestro de tipo 1099",
      "TYPEKEY1099": "Clave del tipo 1099",
      "TYPE1099": "Tipo 1099",
      "DESCRIPTION": "Descripción del maestro de tipo",
      "RECUSERID": "ID de usuario",
      "RECDATE": "Fecha de creación"
    }
  }
};

/***/ }),

/***/ 87378:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/fr.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    "UPLOADFINANCE": {
      "TITLE": "Télécharger les données financières",
      "TRANSACTIONTYPE": "Type de transaction/Maître",
      "FROM": "De",
      "FROMDESC": "Description de départ",
      "TODESC": "Description de destination",
      "TO": "À",
      "STARTDATE": "Date de début",
      "ENDDATE": "Date de fin",
      "PROCESS": "Traiter",
      "UPLOAD": "Télécharger",
      "NODATA": "Aucune donnée trouvée.",
      "SELECTRECORD": "Aucun enregistrement sélectionné pour le traitement.",
      "VALIDFROMDATE": "La date de début ne peut pas être supérieure à la date de fin.",
      "VALIDTODATE": "La date de fin ne peut pas être inférieure à la date de début.",
      "VALUECOMPARE": "La valeur de départ ne peut pas être supérieure à la valeur de destination."
    },
    "DOWNLOADFINANCE": {
      "TITLE": "Télécharger les données financières",
      "TRANSACTIONTYPE": "Type de maître",
      "FROM": "De",
      "FROMDESC": "Description de départ",
      "TODESC": "Description de destination",
      "TO": "À",
      "STARTDATE": "Date de début",
      "ENDDATE": "Date de fin",
      "PROCESS": "Traiter",
      "DOWNLOAD": "Télécharger",
      "NODATA": "Aucune donnée trouvée.",
      "SELECTRECORD": "Aucun enregistrement sélectionné pour le traitement.",
      "VALIDFROMDATE": "La date de début ne peut pas être supérieure à la date de fin.",
      "VALIDTODATE": "La date de fin ne peut pas être inférieure à la date de début.",
      "VALUECOMPARE": "La valeur de départ ne peut pas être supérieure à la valeur de destination.",
      "DATARANGE": "Plage de données",
      "DOWNLOADWITHID": "Télécharger avec l'ID",
      "CLASS": "Nom de la classe",
      "CLASSID": "ID de la classe",
      "MSG": {
        "ACCTDOWNLOADCHK": "Impossible de télécharger le compte, sa longueur est supérieure à ",
        "ACCTDOWNLOADCHK1": "Impossible de télécharger le compte ayant le caractère "
      }
    },
    "QBOCONNECTION": {
      "TITLE": "Détails de la connexion à QuickBooks Online",
      "QBO": "QuickBooks Online",
      "DISCOVERYURL": "URL de découverte",
      "REDIRECTURL": "URL de redirection",
      "CLIENTID": "Identifiant du client",
      "CLIENTSERVER": "Secret du client",
      "DISCOVERYAUTHORITY": "Autorité de découverte",
      "TOKENENDPOINT": "Point de terminaison du jeton",
      "RELAMID": "ID du Royaume",
      "ACCESSTOKEN": "Jeton d'accès",
      "REFRESHTOKEN": "Jeton de rafraîchissement",
      "MEMOFIELD": "Champ de mémo SQL",
      "INVOICE": "Facture",
      "VOUCHER": "Bon",
      "INVOICERETURN": "Retour de facture",
      "VOUCHERRETURN": "Retour de bon",
      "GLCREDIT": "Crédit GL",
      "GLDEBIT": "Débit GL",
      "AGEBRACKET": "Délai de bracket d'âge",
      "DELAYTIME": "Temps de retard (1000=1 seconde)",
      "VALUE": "Valeur",
      "FIELDVALUEALERT": "Voulez-vous supprimer ",
      "ENTER": "Entrer ",
      "ENVIORMENT": "Environnement",
      "QBOBASEURL": "URL de base",
      "QBCONNECTCHK": "QuickBooks Online est déconnecté, connectez-vous d'abord à QuickBooks Online.",
      "QBAUTHORIZE": "Connecté à QuickBooks Online.",
      "QBAUTHORIZEERROR": "Erreur lors de la connexion à QuickBooks Online.",
      "QBDISCONNECT": "Déconnecté de QuickBooks Online",
      "QBDISCONNECTERROR": "Erreur lors de la déconnexion de QuickBooks Online",
      "APINTERFACED": "AP n'est pas interfacé financièrement dans la configuration financière.",
      "ARINTERFACED": "AR n'est pas interfacé financièrement dans la configuration financière.",
      "GLINTERFACED": "GL n'est pas interfacé financièrement dans la configuration financière."
    },
    "DOWNLOADUPLOADDEFAULTS": {
      "TITLE": "Téléchargement et téléchargement par défaut",
      "TAB1": "Téléchargement par défaut",
      "TAB2": "Téléchargement par défaut",
      "DFLTVENDORCLS": "Classe de fournisseur par défaut",
      "VENDCLSDESC": "Description de la classe de fournisseur",
      "DFLTEXPACCT": "Compte de dépenses par défaut",
      "ACCTDESC": "Description du compte",
      "DFLTCUSTCLS": "Classe de client par défaut",
      "CUSTCLSDESC": "Description de la classe de client",
      "OVERRIDEVENDOR": "Remplacer l'adresse du fournisseur lors de la mise à jour",
      "ADDVENDOR": "Ajouter le nom du fournisseur dans l'adresse 1",
      "OVERRIDECUSTOMER": "Remplacer l'adresse du client lors de la mise à jour",
      "ADDCUSTOMER": "Ajouter le nom du client dans l'adresse 1",
      "OVERRIDEINVOICE": "Remplacer le numéro de facture BatchMaster par le numéro de facture QuickBooks Online",
      "POPULATEQUICKBOOK": "Remplir le numéro de référence QuickBooks Online avec le bon"
    },
    "FINANCEMAPPING": {
      "FINMAP": "Mapping financier",
      "SELECTMODULE": "Sélectionner le module",
      "ADDLINE": "Ajouter une ligne",
      "FROMKEY": "Clé source (BME)",
      "TOKEY": "Clé cible (Finance)",
      "COMPLETEROWENTRY": "Compléter l'entrée de la ligne"
    },
    "FINANCESERIES": {
      "COMONTITLE": "Écran principal du module NC CAPA",
      "TITLE": "Séries financières",
      "ADDFINANCE": "Ajouter une série financière",
      "TYPE": "Type",
      "SERIES": "Série (Option 1)",
      "CUSTOMOPTION": "Personnalisé (Option 2)",
      "MNTH": "Mois (Option 3)",
      "RECUSERID": "Identifiant d'utilisateur (Rec)",
      "RECDATE": "Date de création (Rec)",
      "YER": "Année (Option 4)",
      "SEQU": "Numéro de séquence (Option 5)",
      "GENRATEID": "Générer l'ID",
      "MNTHYER": "Mois et année",
      "AUTOSEQUENCE": "AutoSéquence",
      "REINITALIZE": "Réinitialiser",
      "USERGROUP": "Groupe d'utilisateurs",
      "GENRATESEQUENCE": "Option de séquence",
      "SEQUENCEOPTION": "Option de séquence",
      "AUTOINSERT": "Insérer automatiquement la série pour le mois et l'année",
      "INITIALIZESERIES": "Initialiser la série pour le mois/année",
      "INITIALIZESERIESMONTH": "Initialiser la série à partir du mois",
      "DISPLAYFORMAT": "Format d'affichage",
      "MONTH": "Mois",
      "YEAR": "Année",
      "CHAR3": "3 caractères [01/JAN]",
      "CHAR2": "2 caractères [01/02]",
      "MSG": {
        "DISPLAYVALIDATION": "La longueur de la série financière ne peut pas dépasser 12 caractères",
        "INVALIDMONTH": "Mois invalide",
        "INVOICESERIES": "Entrez la série de factures (Option 1)",
        "MONTH": "Entrez le mois (Option 3)",
        "YEAR": "Entrez l'année (Option 4)",
        "SEQU": "Entrez le numéro de séquence (Option 5)",
        "GenrateSequence": "Entrez l'option de séquence",
        "VALIDMONTH": "Entrez une année valide"
      }
    },
    "TYPEMASTER1099": {
      "TITLE": "Maître des types 1099",
      "ADD1099TYPEMASTER": "Ajouter le maître des types 1099",
      "TYPEKEY1099": "Clé du type 1099",
      "TYPE1099": "Type 1099",
      "DESCRIPTION": "Description du maître des types",
      "RECUSERID": "Identifiant d'utilisateur (Rec)",
      "RECDATE": "Date de création (Rec)"
    }
  }
};

/***/ }),

/***/ 63590:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/hi.ts ***!
  \*****************************************/
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
    }
  }
};

/***/ }),

/***/ 96218:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/pt.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    UPLOADFINANCE: {
      TITLE: 'Enviar Dados Financeiros',
      TRANSACTIONTYPE: 'Tipo de Transação/Mestre',
      FROM: 'De',
      FROMDESC: 'Descrição de Origem',
      TODESC: 'Descrição de Destino',
      TO: 'Para',
      STARTDATE: 'Data de Início',
      ENDDATE: 'Data de Fim',
      PROCESS: 'Processar',
      UPLOAD: 'Enviar',
      NODATA: 'Nenhum dado encontrado.',
      SELECTRECORD: 'Nenhum registro selecionado para processar.',
      VALIDFROMDATE: 'A data de início não pode ser maior que a data de fim.',
      VALIDTODATE: 'A data de fim não pode ser menor que a data de início.',
      VALUECOMPARE: 'O valor de início não pode ser maior que o valor de fim.'
    },
    DOWNLOADFINANCE: {
      TITLE: 'Baixar Dados Financeiros',
      TRANSACTIONTYPE: 'Tipo de Mestre',
      FROM: 'De',
      FROMDESC: 'Descrição de Origem',
      TODESC: 'Descrição de Destino',
      TO: 'Para',
      STARTDATE: 'Data de Início',
      ENDDATE: 'Data de Fim',
      PROCESS: 'Processar',
      DOWNLOAD: 'Baixar',
      NODATA: 'Nenhum dado encontrado.',
      SELECTRECORD: 'Nenhum registro selecionado para processar.',
      VALIDFROMDATE: 'A data de início não pode ser maior que a data de fim.',
      VALIDTODATE: 'A data de fim não pode ser menor que a data de início.',
      VALUECOMPARE: 'O valor de início não pode ser maior que o valor de fim.',
      DATARANGE: 'Intervalo de Datas',
      DOWNLOADWITHID: 'Baixar com ID',
      CLASS: 'Nome da Classe',
      CLASSID: 'ID da Classe',
      MSG: {
        ACCTDOWNLOADCHK: 'Não é possível baixar a conta, seu comprimento é maior que ',
        ACCTDOWNLOADCHK1: 'Não é possível baixar a conta que contém o caractere '
      }
    },
    QBOCONNECTION: {
      TITLE: 'Detalhes da Conexão com o QuickBooks Online',
      QBO: 'QuickBooks Online',
      DISCOVERYURL: 'URL de Descoberta',
      REDIRECTURL: 'URL de Redirecionamento',
      CLIENTID: 'ID do Cliente',
      CLIENTSERVER: 'Segredo do Cliente',
      DISCOVERYAUTHORITY: 'Autoridade de Descoberta',
      TOKENENDPOINT: 'Ponto Final do Token',
      RELAMID: 'ID do Reino',
      ACCESSTOKEN: 'Token de Acesso',
      REFRESHTOKEN: 'Token de Atualização',
      MEMOFIELD: 'Campo Memo SQL',
      INVOICE: 'Fatura',
      VOUCHER: 'Voucher',
      INVOICERETURN: 'Devolução de Fatura',
      VOUCHERRETURN: 'Devolução de Voucher',
      GLCREDIT: 'Crédito de GL',
      GLDEBIT: 'Débito de GL',
      AGEBRACKET: 'Tempo de Atraso do Intervalo de Idade',
      DELAYTIME: 'Tempo de Atraso (1000=1 Seg)',
      VALUE: 'Valor',
      FIELDVALUEALERT: 'Deseja excluir ',
      ENTER: 'Digite ',
      ENVIORMENT: 'Ambiente',
      QBOBASEURL: 'URL Base',
      QBCONNECTCHK: 'O QuickBooks Online está desconectado. Primeiro, conecte-se ao QuickBooks Online.',
      QBAUTHORIZE: 'Conectado ao QuickBooks Online.',
      QBAUTHORIZEERROR: 'Erro ao conectar ao QuickBooks Online.',
      QBDISCONNECT: 'Desconectado do QuickBooks Online',
      QBDISCONNECTERROR: 'Erro ao desconectar do QuickBooks Online',
      APINTERFACED: 'AP não está interfaceado financeiramente na configuração financeira.',
      ARINTERFACED: 'AR não está interfaceado financeiramente na configuração financeira.',
      GLINTERFACED: 'GL não está interfaceado financeiramente na configuração financeira.'
    },
    DOWNLOADUPLOADDEFAULTS: {
      TITLE: 'Padrões de Download e Upload',
      TAB1: 'Padrão de Download',
      TAB2: 'Padrão de Upload',
      DFLTVENDORCLS: 'Classe Padrão do Fornecedor',
      VENDCLSDESC: 'Descrição da Classe do Fornecedor',
      DFLTEXPACCT: 'Conta de Despesa Padrão',
      ACCTDESC: 'Descrição da Conta',
      DFLTCUSTCLS: 'Classe Padrão do Cliente',
      CUSTCLSDESC: 'Descrição da Classe do Cliente',
      OVERRIDEVENDOR: 'Substituir Endereço do Fornecedor na Atualização',
      ADDVENDOR: 'Adicionar Nome do Fornecedor no Endereço 1',
      OVERRIDECUSTOMER: 'Substituir Endereço do Cliente na Atualização',
      ADDCUSTOMER: 'Adicionar Nome do Cliente no Endereço 1',
      OVERRIDEINVOICE: 'Substituir Número da Fatura BatchMaster pelo Número da Fatura do QuickBooks Online',
      POPULATEQUICKBOOK: 'Preencher o Número de Referência do QuickBooks Online com o Voucher'
    },
    FINANCEMAPPING: {
      FINMAP: 'Mapeamento Financeiro',
      SELECTMODULE: 'Selecionar Módulo',
      ADDLINE: 'Adicionar Linha',
      FROMKEY: 'Chave de Origem (BME)',
      TOKEY: 'Chave de Destino (Financeiro)',
      COMPLETEROWENTRY: "Complete a entrada da linha"
    },
    FINANCESERIES: {
      COMONTITLE: "Tela Mestre NC CAPA",
      TITLE: "Séries Financeiras",
      ADDFINANCE: "Adicionar Séries Financeiras",
      TYPE: "Tipo",
      SERIES: "Série (Opção 1)",
      CUSTOMOPTION: "Personalizado (Opção 2)",
      MNTH: "Mês (Opção 3)",
      RECUSERID: "ID do Usuário de Registro",
      RECDATE: "Data de Registro",
      YER: "Ano (Opção 4)",
      SEQU: "Número de Sequência (Opção 5)",
      GENRATEID: "Gerar ID",
      MNTHYER: "MêsAno",
      AUTOSEQUENCE: "Auto Sequência",
      REINITALIZE: "Reinicializar",
      USERGROUP: "Grupo de Usuários",
      GENRATESEQUENCE: "Opção de Sequência",
      SEQUENCEOPTION: "Opção de Sequência",
      AUTOINSERT: "Inserir Automaticamente Séries para Mês e Ano",
      INITIALIZESERIES: "Inicializar Séries para o Mês/Ano",
      INITIALIZESERIESMONTH: "Inicializar Séries Desde o Mês",
      DISPLAYFORMAT: "Formato de Exibição",
      MONTH: "Mês",
      YEAR: "Ano",
      CHAR3: "3 Carac[01/JAN]",
      CHAR2: "2 Carac[01/02]",
      MSG: {
        DISPLAYVALIDATION: "O comprimento da Série Financeira não pode exceder 12 caracteres",
        INVALIDMONTH: "Mês Inválido",
        INVOICESERIES: "Digite a série da fatura (Opção 1)",
        MONTH: "Digite o mês (Opção 3)",
        YEAR: "Digite o ano (Opção 4)",
        SEQU: "Digite o Número de Sequência (Opção 5)",
        GenrateSequence: "Digite a Opção de Sequência",
        VALIDMONTH: "Digite um ano válido"
      }
    },
    TYPEMASTER1099: {
      TITLE: 'Mestre de Tipo 1099',
      ADD1099TYPEMASTER: 'Adicionar Mestre de Tipo 1099',
      TYPEKEY1099: 'Chave do Tipo 1099',
      TYPE1099: 'Tipo 1099',
      DESCRIPTION: 'Descrição do Mestre de Tipo',
      RECUSERID: 'ID do Usuário de Registro',
      RECDATE: 'Data de Registro'
    }
  }
};

/***/ }),

/***/ 4610:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/vi.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    UPLOADFINANCE: {
      TITLE: 'Tải lên Dữ liệu Tài chính',
      TRANSACTIONTYPE: 'Loại Giao dịch/Master',
      FROM: 'Từ',
      FROMDESC: 'Mô tả Từ',
      TODESC: 'Mô tả Đến',
      TO: 'Đến',
      STARTDATE: 'Ngày bắt đầu',
      ENDDATE: 'Ngày kết thúc',
      PROCESS: 'Xử lý',
      UPLOAD: 'Tải lên',
      NODATA: 'Không có dữ liệu được tìm thấy.',
      SELECTRECORD: 'Không có bản ghi nào được chọn để xử lý.',
      VALIDFROMDATE: 'Ngày Bắt đầu không được lớn hơn Ngày Kết thúc.',
      VALIDTODATE: 'Ngày Kết thúc không được nhỏ hơn Ngày Bắt đầu.',
      VALUECOMPARE: 'Giá trị Từ không được lớn hơn Giá trị Đến.'
    },
    DOWNLOADFINANCE: {
      TITLE: 'Tải xuống Dữ liệu Tài chính',
      TRANSACTIONTYPE: 'Loại Master',
      FROM: 'Từ',
      FROMDESC: 'Mô tả Từ',
      TODESC: 'Mô tả Đến',
      TO: 'Đến',
      STARTDATE: 'Ngày bắt đầu',
      ENDDATE: 'Ngày kết thúc',
      PROCESS: 'Xử lý',
      DOWNLOAD: 'Tải xuống',
      NODATA: 'Không có dữ liệu được tìm thấy.',
      SELECTRECORD: 'Không có bản ghi nào được chọn để xử lý.',
      VALIDFROMDATE: 'Ngày Bắt đầu không được lớn hơn Ngày Kết thúc.',
      VALIDTODATE: 'Ngày Kết thúc không được nhỏ hơn Ngày Bắt đầu.',
      VALUECOMPARE: 'Giá trị Từ không được lớn hơn Giá trị Đến.',
      DATARANGE: 'Dải dữ liệu',
      DOWNLOADWITHID: 'Tải xuống với ID',
      CLASS: 'Tên Lớp',
      CLASSID: 'ID Lớp',
      MSG: {
        ACCTDOWNLOADCHK: 'Không thể tải xuống Tài khoản, độ dài vượt quá ',
        ACCTDOWNLOADCHK1: 'Không thể tải xuống Tài khoản có ký tự '
      }
    },
    QBOCONNECTION: {
      TITLE: 'Chi tiết Kết nối QuickBooks Online',
      QBO: 'QuickBooks Online',
      DISCOVERYURL: 'URL khám phá',
      REDIRECTURL: 'URL chuyển hướng',
      CLIENTID: 'ID khách hàng',
      CLIENTSERVER: 'Bí mật khách hàng',
      DISCOVERYAUTHORITY: 'Quyền khám phá',
      TOKENENDPOINT: 'Điểm kết thúc Token',
      RELAMID: 'ID Realm',
      ACCESSTOKEN: 'Mã truy cập',
      REFRESHTOKEN: 'Mã làm mới',
      MEMOFIELD: "Mô tả SQL",
      INVOICE: 'Hóa đơn',
      VOUCHER: 'Voucher',
      INVOICERETURN: 'Hóa đơn Trả lại',
      VOUCHERRETURN: 'Voucher Trả lại',
      GLCREDIT: 'GL Credit',
      GLDEBIT: 'GL Debit',
      AGEBRACKET: 'Thời gian trễ độ tuổi',
      DELAYTIME: 'Thời gian trễ (1000=1 Giây)',
      //FIELDVALUE: 'Giá trị trường',
      VALUE: 'Giá trị',
      FIELDVALUEALERT: 'Bạn có muốn xóa ',
      ENTER: 'Nhập ',
      ENVIORMENT: 'Môi trường',
      QBOBASEURL: 'URL cơ bản',
      QBCONNECTCHK: 'QuickBooks Online đã ngắt kết nối, Kết nối với QuickBooks Online trước tiên.',
      QBAUTHORIZE: 'Đã kết nối với QuickBooks Online.',
      QBAUTHORIZEERROR: 'Lỗi khi kết nối với QuickBooks Online.',
      QBDISCONNECT: 'Ngắt kết nối từ QuickBooks Online',
      QBDISCONNECTERROR: 'Lỗi khi ngắt kết nối từ QuickBooks Online',
      APINTERFACED: 'AP không được kết nối tại cài đặt Tài chính.',
      ARINTERFACED: 'AR không được kết nối tại cài đặt Tài chính.',
      GLINTERFACED: 'GL không được kết nối tại cài đặt Tài chính.'
    },
    DOWNLOADUPLOADDEFAULTS: {
      TITLE: 'Tải lên và Tải xuống Mặc định',
      TAB1: 'Tải xuống Mặc định',
      TAB2: 'Tải lên Mặc định',
      DFLTVENDORCLS: 'Lớp Nhà cung cấp Mặc định',
      VENDCLSDESC: 'Mô tả Lớp Nhà cung cấp',
      DFLTEXPACCT: 'Tài khoản Chi phí Mặc định',
      ACCTDESC: 'Mô tả Tài khoản',
      DFLTCUSTCLS: 'Lớp Khách hàng Mặc định',
      CUSTCLSDESC: 'Mô tả Lớp Khách hàng',
      OVERRIDEVENDOR: 'Ghi đè Địa chỉ Nhà cung cấp khi Cập nhật',
      ADDVENDOR: 'Thêm Tên Nhà cung cấp vào Địa chỉ 1',
      OVERRIDECUSTOMER: 'Ghi đè Địa chỉ Khách hàng khi Cập nhật',
      ADDCUSTOMER: 'Thêm Tên Khách hàng vào Địa chỉ 1',
      OVERRIDEINVOICE: 'Ghi đè Số hóa đơn BatchMaster bằng Số hóa đơn QuickBooks Online.',
      POPULATEQUICKBOOK: 'Điền Số tham chiếu QuickBooks Online bằng Voucher'
    },
    FINANCEMAPPING: {
      FINMAP: 'Ánh xạ Tài chính',
      SELECTMODULE: 'Chọn Module',
      ADDLINE: 'Thêm Dòng',
      FROMKEY: 'Từ Key (BME)',
      TOKEY: 'Đến Key (Tài chính)',
      COMPLETEROWENTRY: "Hoàn tất nhập dòng"
    },
    FINANCESERIES: {
      COMONTITLE: "Màn hình Master CAPA NC",
      TITLE: "Loạt Tài chính",
      ADDFINANCE: "Thêm Loạt Tài chính",
      TYPE: "Loại",
      SERIES: "Loạt (Tùy chọn 1)",
      CUSTOMOPTION: "Tùy chỉnh (Tùy chọn 2)",
      MNTH: "Tháng (Tùy chọn 3)",
      RECUSERID: "Rec UserId",
      RECDATE: "Rec Date",
      YER: "Năm (Tùy chọn 4)",
      SEQU: "Số thứ tự (Tùy chọn 5)",
      GENRATEID: "Tạo ID",
      MNTHYER: "ThángNăm",
      AUTOSEQUENCE: "Tự động Sắp xếp",
      REINITALIZE: "Khởi tạo lại",
      USERGROUP: "Nhóm người dùng",
      GENRATESEQUENCE: "Tùy chọn Số thứ tự",
      SEQUENCEOPTION: "Tùy chọn Số thứ tự",
      AUTOINSERT: "Tự động chèn Loạt cho Tháng & Năm",
      INITIALIZESERIES: "Khởi tạo Loạt cho Tháng/Năm",
      INITIALIZESERIESMONTH: "Khởi tạo Loạt Từ Tháng",
      DISPLAYFORMAT: "Định dạng Hiển thị",
      MONTH: "Tháng",
      YEAR: "Năm",
      CHAR3: "3-Ký tự[01/THÁNG MỘT]",
      CHAR2: "2-Ký tự[01/02]",
      MSG: {
        DISPLAYVALIDATION: "Độ dài Loạt Tài chính không thể vượt quá 12 Ký tự",
        INVALIDMONTH: "Tháng không hợp lệ",
        INVOICESERIES: "Nhập Loạt hóa đơn (Tùy chọn 1)",
        MONTH: "Nhập Tháng (Tùy chọn 3)",
        YEAR: "Nhập Năm (Tùy chọn 4)",
        SEQU: "Nhập Số thứ tự (Tùy chọn 5)",
        GenrateSequence: "Nhập Tùy chọn Số thứ tự",
        VALIDMONTH: "Nhập Năm hợp lệ"
      }
    },
    TYPEMASTER1099: {
      TITLE: 'Màn hình Master Loại 1099',
      ADD1099TYPEMASTER: 'Thêm Master Loại 1099',
      TYPEKEY1099: "Key Loại 1099",
      TYPE1099: "Loại 1099",
      DESCRIPTION: "Mô tả Master Loại",
      RECUSERID: "Rec UserId",
      RECDATE: "Rec Date"
    }
  }
};

/***/ }),

/***/ 6198:
/*!*****************************************!*\
  !*** ./src/app/main/finance/i18n/zh.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    "UPLOADFINANCE": {
      "TITLE": "上传财务数据",
      "TRANSACTIONTYPE": "交易/主数据类型",
      "FROM": "从",
      "FROMDESC": "从描述",
      "TODESC": "到描述",
      "TO": "到",
      "STARTDATE": "开始日期",
      "ENDDATE": "结束日期",
      "PROCESS": "处理",
      "UPLOAD": "上传",
      "NODATA": "未找到数据。",
      "SELECTRECORD": "未选择记录进行处理。",
      "VALIDFROMDATE": "开始日期不能大于结束日期。",
      "VALIDTODATE": "结束日期不能小于开始日期。",
      "VALUECOMPARE": "从值不能大于到值。"
    },
    "DOWNLOADFINANCE": {
      "TITLE": "下载财务数据",
      "TRANSACTIONTYPE": "主数据类型",
      "FROM": "从",
      "FROMDESC": "从描述",
      "TODESC": "到描述",
      "TO": "到",
      "STARTDATE": "开始日期",
      "ENDDATE": "结束日期",
      "PROCESS": "处理",
      "DOWNLOAD": "下载",
      "NODATA": "未找到数据。",
      "SELECTRECORD": "未选择记录进行处理。",
      "VALIDFROMDATE": "开始日期不能大于结束日期。",
      "VALIDTODATE": "结束日期不能小于开始日期。",
      "VALUECOMPARE": "从值不能大于到值。",
      "DATARANGE": "数据范围",
      "DOWNLOADWITHID": "通过 ID 下载",
      "CLASS": "类名",
      "CLASSID": "类 ID",
      "MSG": {
        "ACCTDOWNLOADCHK": "无法下载账户，其长度大于",
        "ACCTDOWNLOADCHK1": "无法下载包含字符"
      }
    },
    "QBOCONNECTION": {
      "TITLE": "QuickBooks Online连接详情",
      "QBO": "QuickBooks Online",
      "DISCOVERYURL": "发现URL",
      "REDIRECTURL": "重定向URL",
      "CLIENTID": "客户端ID",
      "CLIENTSERVER": "客户端密钥",
      "DISCOVERYAUTHORITY": "发现授权",
      "TOKENENDPOINT": "令牌终点",
      "RELAMID": "领域ID",
      "ACCESSTOKEN": "访问令牌",
      "REFRESHTOKEN": "刷新令牌",
      "MEMOFIELD": "备忘字段SQL",
      "INVOICE": "发票",
      "VOUCHER": "凭证",
      "INVOICERETURN": "发票退还",
      "VOUCHERRETURN": "凭证退还",
      "GLCREDIT": "总账贷方",
      "GLDEBIT": "总账借方",
      "AGEBRACKET": "账龄档次延迟时间",
      "DELAYTIME": "延迟时间（1000=1秒）",
      "VALUE": "值",
      "FIELDVALUEALERT": "您是否要删除 ",
      "ENTER": "输入 ",
      "ENVIORMENT": "环境",
      "QBOBASEURL": "基本URL",
      "QBCONNECTCHK": "QuickBooks Online已断开连接，请先连接到QuickBooks Online。",
      "QBAUTHORIZE": "已连接到QuickBooks Online。",
      "QBAUTHORIZEERROR": "连接到QuickBooks Online时出错。",
      "QBDISCONNECT": "已从QuickBooks Online断开连接",
      "QBDISCONNECTERROR": "从QuickBooks Online断开连接时出错",
      "APINTERFACED": "在财务设置中，AP未与财务接口。",
      "ARINTERFACED": "在财务设置中，AR未与财务接口。",
      "GLINTERFACED": "在财务设置中，GL未与财务接口。"
    },
    "DOWNLOADUPLOADDEFAULTS": {
      "TITLE": "上传和下载默认设置",
      "TAB1": "下载默认设置",
      "TAB2": "上传默认设置",
      "DFLTVENDORCLS": "默认供应商类别",
      "VENDCLSDESC": "供应商类别描述",
      "DFLTEXPACCT": "默认费用账户",
      "ACCTDESC": "账户描述",
      "DFLTCUSTCLS": "默认客户类别",
      "CUSTCLSDESC": "客户类别描述",
      "OVERRIDEVENDOR": "更新时覆盖供应商地址",
      "ADDVENDOR": "在地址1中添加供应商名称",
      "OVERRIDECUSTOMER": "更新时覆盖客户地址",
      "ADDCUSTOMER": "在地址1中添加客户名称",
      "OVERRIDEINVOICE": "使用QuickBooks Online发票号覆盖BatchMaster发票号",
      "POPULATEQUICKBOOK": "使用凭证填充QuickBooks Online参考号"
    },
    "FINANCEMAPPING": {
      "FINMAP": "财务映射",
      "SELECTMODULE": "选择模块",
      "ADDLINE": "添加行",
      "FROMKEY": "来源键（BME）",
      "TOKEY": "目标键（财务）",
      "COMPLETEROWENTRY": "完成行条目"
    },
    "FINANCESERIES": {
      "COMONTITLE": "NC CAPA主屏幕",
      "TITLE": "财务系列",
      "ADDFINANCE": "添加财务系列",
      "TYPE": "类型",
      "SERIES": "系列（选项1）",
      "CUSTOMOPTION": "自定义（选项2）",
      "MNTH": "月份（选项3）",
      "RECUSERID": "记录用户ID",
      "RECDATE": "记录日期",
      "YER": "年份（选项4）",
      "SEQU": "序列号（选项5）",
      "GENRATEID": "生成ID",
      "MNTHYER": "月年",
      "AUTOSEQUENCE": "自动序列",
      "REINITALIZE": "重新初始化",
      "USERGROUP": "用户组",
      "GENRATESEQUENCE": "序列选项",
      "SEQUENCEOPTION": "序列选项",
      "AUTOINSERT": "自动插入月份和年份的系列",
      "INITIALIZESERIES": "初始化月份/年份的系列",
      "INITIALIZESERIESMONTH": "从月份初始化系列",
      "DISPLAYFORMAT": "显示格式",
      "MONTH": "月份",
      "YEAR": "年份",
      "CHAR3": "3字符[01/JAN]",
      "CHAR2": "2字符[01/02]",
      "MSG": {
        "DISPLAYVALIDATION": "财务系列长度不能超过12个字符",
        "INVALIDMONTH": "无效的月份",
        "INVOICESERIES": "输入发票系列（选项1）",
        "MONTH": "输入月份（选项3）",
        "YEAR": "输入年份（选项4）",
        "SEQU": "输入序列号（选项5）",
        "GenrateSequence": "输入序列选项",
        "VALIDMONTH": "输入有效的年份"
      }
    },
    "TYPEMASTER1099": {
      "TITLE": "1099类型主数据",
      "ADD1099TYPEMASTER": "添加1099类型主数据",
      "TYPEKEY1099": "1099类型关键字",
      "TYPE1099": "1099类型",
      "DESCRIPTION": "类型主数据描述",
      "RECUSERID": "记录用户ID",
      "RECDATE": "记录日期"
    }
  }
};

/***/ }),

/***/ 11009:
/*!***************************************************************!*\
  !*** ./src/app/main/finance/models/download-finance.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadFinanceModel: () => (/* binding */ DownloadFinanceModel)
/* harmony export */ });
class DownloadFinanceModel {
  constructor() {
    this.From = '';
    this.To = '';
    this.TableName = '';
    this.Class = '';
  }
}

/***/ }),

/***/ 26079:
/*!**********************************************************************!*\
  !*** ./src/app/main/finance/models/download-upload-default.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadUploadDfltModel: () => (/* binding */ DownloadUploadDfltModel)
/* harmony export */ });
class DownloadUploadDfltModel {
  constructor() {
    this.VendClass = '';
    this.VendClassDesc = '';
    this.CustClass = '';
    this.CustClassDesc = '';
    this.ExpAccount = '';
    this.ExpAccountDesc = '';
    this.OvrVendAddr = 0;
    this.AddVendName = 0;
    this.OvrCustAddr = 0;
    this.AddCustName = 0;
    this.OvrBMEInvQBInv = 0;
    this.PopQBRefNoVouch = '';
    this.TaxApplicable = 0;
    this.ZeroRateTax = '';
    this.ZeroRateTaxDesc = '';
    this.TaxableTax = '';
    this.TaxableTaxDesc = '';
    this.NonTaxableTax = '';
  }
}

/***/ }),

/***/ 58922:
/*!*************************************************************!*\
  !*** ./src/app/main/finance/models/qbo-connection.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QBOCconnectionSaveModel: () => (/* binding */ QBOCconnectionSaveModel),
/* harmony export */   QBOConnectionModel: () => (/* binding */ QBOConnectionModel)
/* harmony export */ });
class QBOConnectionModel {
  constructor() {
    this.accessToken = '';
    this.clientid = '';
    this.clientsecret = '';
    this.tokenendpoint = '';
    this.refreshtoken = '';
    this.RelamID = '';
    this.discoveryUrl = '';
    this.DiscoveryAuthority = '';
    this.redirectURI = '';
    this.Invoice = '';
    this.Voucher = '';
    this.InvoiceReturn = '';
    this.VoucherReturn = '';
    this.GLCr = '';
    this.GLDr = '';
    this.DelayTime = '';
    this.environment = 'production';
    this.QBOBaseUrl = '';
  }
}
class QBOCconnectionSaveModel {
  constructor() {
    this.CompanyId = '';
    this.KeyType = '';
    this.KeyTypeValue = '';
  }
}

/***/ }),

/***/ 86436:
/*!*************************************************************!*\
  !*** ./src/app/main/finance/models/upload-finance.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFinanceModel: () => (/* binding */ UploadFinanceModel)
/* harmony export */ });
class UploadFinanceModel {
  constructor() {
    this.From = '';
    this.To = '';
    this.TableName = '';
    this.DateFrom = new Date();
    this.DateTo = new Date();
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_main_finance_finance_module_ts.js.map