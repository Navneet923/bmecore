"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_finance-configuration_finance-configuration_module_ts"],{

/***/ 7995:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/1099-type-setup/type-master-ninety-nine/type-master-ninety-nine.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeMasterNinetyNineComponent: () => (/* binding */ TypeMasterNinetyNineComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var _models_type_setup_ninetynine_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/type-setup-ninetynine.model */ 28073);
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_type_setup_ninety_nine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/type-setup-ninety-nine.service */ 62632);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 21916);

























function TypeMasterNinetyNineComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_5_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.bmlfonDeleteLineItem(rowIndex_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r18, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.itemSelected = $event);
    })("change", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_6_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31);
      const dataItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.bmlfonSetupDetail(dataItem_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "rdoSelect", rowIndex_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", rowIndex_r18)("ngModel", ctx_r23.itemSelected)("checked", rowIndex_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("for", "rdoSelect", rowIndex_r18, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_7_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36);
      const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r35.marrSetupHeader[rowIndex_r18].TypeKey1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r24.marrSetupHeader[rowIndex_r18].TypeKey1099);
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_8_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.bmlfEOQChanges(rowIndex_r18, "marrSetupHeader"));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_8_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.marrSetupHeader[rowIndex_r18].Type1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r25.marrSetupHeader[rowIndex_r18].Type1099)("disabled", ctx_r25.marrSetupHeader[rowIndex_r18]["Flag"] == null || ctx_r25.marrSetupHeader[rowIndex_r18]["Flag"] == "M");
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_5_Template, 4, 2, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_6_Template, 4, 6, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, TypeMasterNinetyNineComponent_ng_template_48_div_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", column_r20.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", column_r20.Field.startsWith("User") || column_r20.Field.includes("CUSTOM") ? column_r20.Title : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 6, "TYPESETUP." + column_r20.Title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r20.Field == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r20.Field == "itemSelected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r20.Field == "TypeKey1099");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r20.Field == "Type1099");
  }
}
function TypeMasterNinetyNineComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TypeMasterNinetyNineComponent_ng_template_48_div_1_Template, 9, 8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.msGridTypecol);
  }
}
function TypeMasterNinetyNineComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_ng_template_51_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const rowIndex_r46 = restoredCtx.rowIndex;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r47.bmlfonDeleteLineItem(rowIndex_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r46 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r46, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 42)(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_54_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r51.itemSelected = $event);
    })("change", function TypeMasterNinetyNineComponent_ng_template_54_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52);
      const dataItem_r49 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.bmlfonSetupDetail(dataItem_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "rdoSelect", rowIndex_r50, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", rowIndex_r50)("ngModel", ctx_r3.itemSelected)("checked", rowIndex_r50 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("for", "rdoSelect", rowIndex_r50, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_57_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57);
      const rowIndex_r55 = restoredCtx.rowIndex;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.marrSetupHeader[rowIndex_r55].TypeKey1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r55 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r4.marrSetupHeader[rowIndex_r55].TypeKey1099);
  }
}
function TypeMasterNinetyNineComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_60_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const rowIndex_r59 = restoredCtx.rowIndex;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r60.bmlfEOQChanges(rowIndex_r59, "marrSetupHeader"));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_60_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const rowIndex_r59 = restoredCtx.rowIndex;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.marrSetupHeader[rowIndex_r59].Type1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r59 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r5.marrSetupHeader[rowIndex_r59].Type1099)("disabled", ctx_r5.marrSetupHeader[rowIndex_r59]["Flag"] == null || ctx_r5.marrSetupHeader[rowIndex_r59]["Flag"] == "M");
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_5_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r75);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r73.bmlfonDeleteLineItemSetupDetail(rowIndex_r64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r64, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r77.marrSetupDetailMainList[rowIndex_r64].SeqNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r69.marrSetupDetailMainList[rowIndex_r64].SeqNo);
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_7_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r81.bmlfvalicationDubicatecheck(ctx_r81.marrSetupDetailMainList[rowIndex_r64].Box1099));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_7_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r84.marrSetupDetailMainList[rowIndex_r64].Box1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r70.marrSetupDetailMainList[rowIndex_r64]["Flag"] == null || ctx_r70.marrSetupDetailMainList[rowIndex_r64]["Flag"] == "M")("ngModel", ctx_r70.marrSetupDetailMainList[rowIndex_r64].Box1099);
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_8_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r89);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r87.bmlfEOQChanges(rowIndex_r64, "marrSetupDetailMainList"));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_8_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r89);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r90.marrSetupDetailMainList[rowIndex_r64].BoxDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r71.marrSetupDetailMainList[rowIndex_r64].BoxDescription);
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 42)(2, "kendo-numerictextbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_9_Template_kendo_numerictextbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r94);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r93.marrSetupDetailMainList[rowIndex_r64]["Min1099Amt"] = $event);
    })("change", function TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_9_Template_kendo_numerictextbox_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r94);
      const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r96.bmlfEOQChanges(rowIndex_r64, "marrSetupDetailMainList"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).rowIndex;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Min1099Amt", rowIndex_r64, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r72.marrSetupDetailMainList[rowIndex_r64]["Min1099Amt"])("min", 0)("maxlength", 16)("autoCorrect", ctx_r72.autoCorrect)("decimals", ctx_r72.miPricePrecision)("format", ctx_r72.miPricePrecisionFormat);
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_5_Template, 4, 2, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_8_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, TypeMasterNinetyNineComponent_ng_template_79_div_1_ng_container_9_Template, 3, 9, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("field", column_r66.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", column_r66.Field.startsWith("User") || column_r66.Field.includes("CUSTOM") ? column_r66.Title : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 7, "TYPESETUP." + column_r66.Title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r66.Field == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r66.Field == "SeqNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r66.Field == "Box1099");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r66.Field == "BoxDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", column_r66.Field == "Min1099Amt");
  }
}
function TypeMasterNinetyNineComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TypeMasterNinetyNineComponent_ng_template_79_div_1_Template, 10, 9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r6.msGridBoxcol);
  }
}
function TypeMasterNinetyNineComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_ng_template_82_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r102);
      const rowIndex_r100 = restoredCtx.rowIndex;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r101.bmlfonDeleteLineItemSetupDetail(rowIndex_r100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r100 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r100, "");
  }
}
function TypeMasterNinetyNineComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_85_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r106);
      const rowIndex_r104 = restoredCtx.rowIndex;
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r105.marrSetupDetailMainList[rowIndex_r104].SeqNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r104 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r8.marrSetupDetailMainList[rowIndex_r104].SeqNo);
  }
}
function TypeMasterNinetyNineComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_88_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r110);
      const rowIndex_r108 = restoredCtx.rowIndex;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r109.bmlfvalicationDubicatecheck(ctx_r109.marrSetupDetailMainList[rowIndex_r108].Box1099));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_88_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r110);
      const rowIndex_r108 = restoredCtx.rowIndex;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r111.marrSetupDetailMainList[rowIndex_r108].Box1099 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r108 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r9.marrSetupDetailMainList[rowIndex_r108]["Flag"] == null || ctx_r9.marrSetupDetailMainList[rowIndex_r108]["Flag"] == "M")("ngModel", ctx_r9.marrSetupDetailMainList[rowIndex_r108].Box1099);
  }
}
function TypeMasterNinetyNineComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function TypeMasterNinetyNineComponent_ng_template_91_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r115);
      const rowIndex_r113 = restoredCtx.rowIndex;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r114.bmlfEOQChanges(rowIndex_r113, "marrSetupDetailMainList"));
    })("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_91_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r115);
      const rowIndex_r113 = restoredCtx.rowIndex;
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r116.marrSetupDetailMainList[rowIndex_r113].BoxDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r113 = ctx.rowIndex;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r10.marrSetupDetailMainList[rowIndex_r113].BoxDescription);
  }
}
function TypeMasterNinetyNineComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dd")(1, "div", 50)(2, "kendo-numerictextbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function TypeMasterNinetyNineComponent_ng_template_94_Template_kendo_numerictextbox_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r120);
      const rowIndex_r118 = restoredCtx.rowIndex;
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r119.marrSetupDetailMainList[rowIndex_r118]["Min1099Amt"] = $event);
    })("change", function TypeMasterNinetyNineComponent_ng_template_94_Template_kendo_numerictextbox_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r120);
      const rowIndex_r118 = restoredCtx.rowIndex;
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r121.bmlfEOQChanges(rowIndex_r118, "marrSetupDetailMainList"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r118 = ctx.rowIndex;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Min1099Amt", rowIndex_r118, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r11.marrSetupDetailMainList[rowIndex_r118]["Min1099Amt"])("min", 0)("maxlength", 16)("autoCorrect", ctx_r11.autoCorrect)("decimals", ctx_r11.miPricePrecision)("format", ctx_r11.miPricePrecisionFormat);
  }
}
function TypeMasterNinetyNineComponent_app_custom_lookup_modal_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function TypeMasterNinetyNineComponent_app_custom_lookup_modal_103_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r122.bmlfSaveLookupField($event));
    })("closeLookup", function TypeMasterNinetyNineComponent_app_custom_lookup_modal_103_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r123);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r124.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("keyData", ctx_r12.mobjLookupKeyData);
  }
}
function TypeMasterNinetyNineComponent_app_common_task_modal_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function TypeMasterNinetyNineComponent_app_common_task_modal_104_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r126);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r125.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r13.mobjTaskData);
  }
}
function TypeMasterNinetyNineComponent_kendo_dialog_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function TypeMasterNinetyNineComponent_kendo_dialog_105_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r127.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_105_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r128);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r129.bmlfdialogDeleteLineAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_105_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r128);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r130.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DEL_LINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function TypeMasterNinetyNineComponent_kendo_dialog_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function TypeMasterNinetyNineComponent_kendo_dialog_106_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r131.bmlfdialogDeleteLineSetupDetail("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_106_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r133.bmlfdialogDeleteLineSetupDetail("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_106_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r132);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r134.bmlfdialogDeleteLineSetupDetail("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DEL_LINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function TypeMasterNinetyNineComponent_kendo_dialog_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function TypeMasterNinetyNineComponent_kendo_dialog_107_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r136);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r135.bmlfonDialogAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_107_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r136);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r137.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_107_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r136);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r138.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_kendo_dialog_107_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r136);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r139.bmlfonDialogAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 7, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 9, "COMMON.MSG.ASKSAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 11, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 13, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 15, "COMMON.CANCEL"), " ");
  }
}
const _c0 = function (a0) {
  return {
    gridloading: a0
  };
};
class TypeMasterNinetyNineComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  getDataList() {}
  bmlfonSelectableSettings() {
    this.mobjSelectableSettings = {
      checkboxOnly: this.mbCheckboxOnly,
      mode: this.mode
    };
  }
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService, sanitizer) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.sanitizer = sanitizer;
    this.bmlfSelectedCallback = args => args.dataItem;
    this.mbIsLoading = false;
    this.msScreenName = '1099 Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.autoCorrect = true;
    this.pdfSrc = '';
    this.marrGridData = [];
    /**---Object Initialize---- */
    this.mobjTypeMasterNinetyNineModel = new _models_type_setup_ninetynine_model__WEBPACK_IMPORTED_MODULE_2__.TypeSetupNinetyNineModel();
    this.DeatilDataModel = new _models_type_setup_ninetynine_model__WEBPACK_IMPORTED_MODULE_2__.DeatilDataModel();
    this.mobjUserData = {};
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    this.msCloseActionModalName = "";
    this.mbSaveDialogView = false;
    this.mbIsCloseMode = false;
    this.mbLoaderEnabled = false;
    this.mbPageLoading = false;
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    this.ItemKeyFromDec = '';
    this.ItemKeyToDec = '';
    this.LocationToDec = '';
    this.LocationFromDec = '';
    this.marrItemGridData = [];
    this.marrPItemGridData = [];
    this.marrSetupDetailMainList = [];
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mbCheckboxOnly = false;
    this.mode = 'single';
    this.miGridDeleteLineIndexHeader = 0;
    this.miGridDeleteLineIndexSetup = 0;
    this.TypeKey1099 = 0;
    this.mbShowDialog = false;
    this.msCallFor = "";
    this.mbdeleteLineItem = false;
    this.mbdeleteLineItemSetupDetail = false;
    this.mbClickAddLine = false;
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_3__.GridSettings();
    this.msGridTypecol = [{
      Type: 'Action',
      Display: true,
      Field: 'Action',
      Title: 'Action'
    }, {
      Type: 'Radio',
      Display: true,
      Field: 'itemSelected',
      Title: 'SELECT',
      Index: 1
    }, {
      Type: 'Text',
      Display: true,
      Field: 'TypeKey1099',
      Title: 'TypeKey1099',
      Index: 2
    }, {
      Type: 'Text',
      Display: true,
      Field: 'Type1099',
      Title: 'Type1099',
      Index: 3
    }];
    this.msGridBoxcol = [{
      Type: 'Action',
      Display: true,
      Field: 'Action',
      Title: 'Action'
    }, {
      Type: 'readonly',
      Display: true,
      Field: 'SeqNo',
      Title: 'So',
      Index: 1
    }, {
      Type: 'readonly',
      Display: true,
      Field: 'Box1099',
      Title: 'Box1099',
      Index: 2
    }, {
      Type: 'Text',
      Display: true,
      Field: 'BoxDescription',
      Title: 'BoxDescription',
      Index: 3
    }, {
      Type: 'Text',
      Display: true,
      Field: 'Min1099Amt',
      Title: 'Min1099Amt',
      Index: 4
    }];
  }
  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfGet1099Type();
    this.mskeyValue = '1099 Type Setup'; //scr 154855
    let parrRoundingDefaults = JSON.parse(localStorage.getItem("RoundingDefaults"));
    this.miQtyPrecision = parrRoundingDefaults[0].Default_Value || 2;
    let formatType = typeof parrRoundingDefaults[0].Default_Value == 'number' ? String(parrRoundingDefaults[0].Default_Value) : parrRoundingDefaults[0].Default_Value;
    this.miQtyPrecisionFormat = 'n' + formatType || 0;
  }
  /*--------- get main table start --------*/
  bmlfGet1099Type() {
    this.mbIsLoading = true;
    let pobjOData = {
      Response: []
    };
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGet1099SetupHeader(psJson).subscribe(res => {
      this.mbIsLoading = false;
      this.itemSelected = 0;
      this.marrSetupHeader = res.HeaderData.map(ele => Object.assign({}, ele));
      this.marrSetupDetail = res.DetailData.map(ele => Object.assign({}, ele));
      this.bmlfonSetupDetail(this.marrSetupHeader[0]); // secand table call
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  /**--------Start: Delete Functionality----- */
  bmlfonDeleteLineItem(rowIndex) {
    if (!this.utilService.mbDelete) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      return;
    }
    ;
    this.miGridDeleteLineIndexHeader = rowIndex;
    this.mbdeleteLineItem = true;
  }
  bmlfdialogDeleteLineAction(action) {
    if (action == 'Yes') {
      this.mbdeleteLineItem = false;
      let psFlag = this.marrSetupHeader[this.miGridDeleteLineIndexHeader].Flag;
      if (psFlag == "A") {
        this.marrSetupHeader.splice(this.miGridDeleteLineIndexHeader, 1);
        return;
      }
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            TypeKey1099: this.marrSetupHeader[this.miGridDeleteLineIndexHeader].TypeKey1099
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfDelete1099HeaderAndDetail(reqData).subscribe(res => {
        if (res == null) {
          return;
        }
        if (res.Response[0].ErrorCode != "") {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.LINEDELETE'));
          this.marrSetupHeader.splice(this.miGridDeleteLineIndexHeader, 1);
          this.bmlfGet1099Type();
        }
      });
    }
    if (action == 'No') {
      this.mbdeleteLineItem = false;
    }
  }
  /**--------close: Delete Functionality----- */
  /** ---Degoult value array valication for insert line--- */
  bmlfValidItemDataSetupHeaders() {
    let RowNumbers = 0;
    let pbResult = true;
    this.marrSetupHeader.forEach(ele => {
      if (pbResult == true) {
        RowNumbers = RowNumbers + 1;
        if (ele.Type1099 == '') {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TYPESETUP.MSG.TYPEKEY') + ': Row No. ' + RowNumbers);
          pbResult = false;
        }
      }
    });
    return pbResult;
  }
  /** -- Add New row for defoult value --- */
  bmlfAddItemSetupHeader() {
    this.mbClickAddLine = true;
    if (this.bmlfValidItemDataSetupHeaders()) {
      let pobjData = new _models_type_setup_ninetynine_model__WEBPACK_IMPORTED_MODULE_2__.TypeSetupNinetyNineModel();
      pobjData.TypeKey1099 = this.marrSetupHeader.slice(-1)[0].TypeKey1099 + 1;
      pobjData.Type1099 = '';
      pobjData.RecUserID = this.mobjUserData.UserId;
      pobjData.Flag = "A";
      this.marrSetupHeader.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
      this.itemSelected = this.marrSetupHeader.slice(-1)[0].TypeKey1099 - 1;
      var pobjFieldData = {
        'TypeKey1099': this.itemSelected + 1
      };
      this.bmlfonSetupDetail(pobjFieldData);
    }
  }
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  /*--------- get main table end code --------*/
  /*--------- get Secand table start code --------*/
  // GlobalOnChanges Event
  bmlfonSetupDetail(pobjFieldData) {
    if (pobjFieldData == null) {
      return false;
    }
    this.TypeKey1099 = pobjFieldData.TypeKey1099;
    this.marrSetupDetailMainList = [];
    this.marrSetupDetail.forEach(ele => {
      if (ele.TypeKey1099 == pobjFieldData.TypeKey1099) {
        this.marrSetupDetailMainList.push(ele);
      }
    });
    if (this.marrSetupDetailMainList.length == 0) {
      this.bmlfAddItemDetailSetup();
    }
  }
  /** ---Degoult value array valication for insert line--- */
  bmlfValidItemDataSetupDetail() {
    let RowNumbers = 0;
    let pbResult = true;
    this.marrSetupDetailMainList.forEach(ele => {
      if (pbResult == true) {
        RowNumbers = this.marrSetupDetailMainList.slice(-1)[0].SeqNo;
        if (ele.Box1099 == '') {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TYPESETUP.MSG.Box1099') + ': Sr. No. ' + RowNumbers);
          pbResult = false;
        } else if (ele.Min1099Amt == '') {
          if (ele.Min1099Amt == '0') {
            pbResult = true;
          } else {
            this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TYPESETUP.MSG.MIN1099AMT') + ': Sr. No. ' + RowNumbers);
            pbResult = false;
          }
        }
      }
    });
    return pbResult;
  }
  /** -- Add New row for defoult value --- */
  bmlfAddItemDetailSetup() {
    var SeqNo = 0;
    if (this.marrSetupDetailMainList.length == 0) {
      SeqNo = 0;
    } else {
      SeqNo = this.marrSetupDetailMainList.slice(-1)[0].SeqNo;
    }
    this.mbClickAddLine = true;
    if (this.bmlfValidItemDataSetupDetail()) {
      let pobjData = new _models_type_setup_ninetynine_model__WEBPACK_IMPORTED_MODULE_2__.DeatilDataModel();
      pobjData.TypeKey1099 = this.TypeKey1099;
      pobjData.SeqNo = SeqNo + 1;
      pobjData.Box1099 = '';
      pobjData.BoxDescription = '';
      pobjData.Min1099Amt = '0';
      pobjData.RecUserID = this.mobjUserData.UserId;
      pobjData.Flag = "A";
      this.marrSetupDetailMainList.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
    }
  }
  /**--------Start: Delete Functionality----- */
  bmlfonDeleteLineItemSetupDetail(rowIndex) {
    if (!this.utilService.mbDelete) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      return;
    }
    ;
    this.miGridDeleteLineIndexSetup = rowIndex;
    this.mbdeleteLineItemSetupDetail = true;
  }
  bmlfdialogDeleteLineSetupDetail(action) {
    if (action == 'Yes') {
      this.mbdeleteLineItemSetupDetail = false;
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            'TypeKey1099': this.marrSetupDetailMainList[this.miGridDeleteLineIndexSetup].TypeKey1099,
            'Box1099': this.marrSetupDetailMainList[this.miGridDeleteLineIndexSetup].Box1099
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfDelete1099SetupDetail(reqData).subscribe(res => {
        if (res == null) {
          return;
        }
        if (res.Response[0].ErrorCode != "") {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.LINEDELETE'));
          this.marrSetupDetailMainList.splice(this.miGridDeleteLineIndexSetup, 1);
          this.bmlfGet1099Type();
        }
      });
    }
    if (action == 'No') {
      this.mbdeleteLineItemSetupDetail = false;
    }
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  /*--------- get Secand table start code --------*/
  /** -- change flag for updates --- */
  bmlfEOQChanges(rowIndex, psType) {
    this.mbIsChangeData = true;
    if (this.marrSetupDetailMainList[rowIndex]['Min1099Amt'] == " " || this.marrSetupDetailMainList[rowIndex]['Min1099Amt'] == null) {
      this.marrSetupHeader[rowIndex]['Min1099Amt'] = '0';
    }
    if (psType == 'marrSetupHeader') {
      if (this.marrSetupHeader[rowIndex]['Flag'] == " " || this.marrSetupHeader[rowIndex]['Flag'] == null) {
        this.marrSetupHeader[rowIndex]['Flag'] = 'M';
      }
    } else {
      if (this.marrSetupDetailMainList[rowIndex]['Flag'] == " " || this.marrSetupDetailMainList[rowIndex]['Flag'] == null) {
        this.marrSetupDetailMainList[rowIndex]['Flag'] = 'M';
      }
    }
  }
  /** -- dubicate entry valication for Box1099 --- */
  bmlfvalicationDubicatecheck(pobjEvent) {
    let pbResult = true;
    this.marrSetupDetailMainList.forEach(ele => {
      if (pbResult == true) {
        if (ele.Box1099.toUpperCase() == pobjEvent.toUpperCase() && ele.SeqNo != this.marrSetupDetailMainList.slice(-1)[0].SeqNo) {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TYPESETUP.MSG.DUPLICATEBOX'));
          this.marrSetupDetailMainList.slice(-1)[0].Box1099 = '';
          pbResult = false;
        }
      }
    });
    return pbResult;
  }
  /** --Save section check with valication --- */
  bmlfonSave(prkey) {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.marrSetupHeader.length == 0) {
      return;
    }
    if (!this.mbIsChangeData) {
      return;
    }
    ;
    if (!this.bmlfValidItemDataSetupHeaders()) {
      return;
    }
    ;
    if (!this.bmlfValidItemDataSetupDetail()) {
      return;
    }
    ;
    this.msCallFor = "Save";
    this.bmlfonSubmitData(prkey);
  }
  /** --Save data --- */
  bmlfonSubmitData(prkey) {
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: this.marrSetupHeader,
        DetailData: Array.from(new Set(this.marrSetupDetail.concat(this.marrSetupDetailMainList))),
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfSave1099Setup(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
          this.mbIsChangeData = false;
          this.mbShowDialog = false;
          if (this.msCallFor == "Save") {
            this.bmlfGet1099Type();
          }
        }
        if (this.msCallFor == "FormClose") {
          this.router.navigate(['main']);
        } else if (prkey == 'close') {
          this.router.navigate(['main']);
        }
      } else {
        if (this.utilService.bmgffindString(res.Response[0].ResponseText, 'EXISTS')) {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.EXIST'));
        } else {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        }
        this.mbShowDialog = false;
      }
    });
    this.mbShowDialog = false;
  }
  bmlfCloseProduct() {
    if (!this.mbIsChangeData) {
      this.router.navigate(['main']);
    } else {
      this.mbShowDialog = true;
      this.msCallFor = "FormClose";
    }
  }
  /** -- close main section buttons --- */
  bmlfonDialogAction(action) {
    if (action == 'No') {
      this.mbShowDialog = false;
      this.mbIsChangeData = false;
      this.router.navigate(['main']);
    } else if (action == 'Yes' && this.mbShowDialog == true) {
      this.mbShowDialog = false;
      this.bmlfonSave('close');
    } else if (action == 'Yes') {
      this.mbShowDialog = false;
      this.bmlfonSave('');
    } else {
      this.mbShowDialog = false;
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
      // pobjFormRec.primeKey = this.mobjProductModel.Productkey;
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  bmlFilterSetting() {
    this.filterEnabled = !this.filterEnabled;
  }
  bmlFilterSetting1() {
    this.filterEnableds = !this.filterEnableds;
  }
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/1099 Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function TypeMasterNinetyNineComponent_Factory(t) {
    return new (t || TypeMasterNinetyNineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_type_setup_ninety_nine_service__WEBPACK_IMPORTED_MODULE_4__.TypeSetupNinetyNineService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: TypeMasterNinetyNineComponent,
    selectors: [["app-type-master-ninety-nine"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
    decls: 108,
    vars: 84,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "form-container"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["id", "divKendoGrid", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "dtItemGrid", 1, "low_space_table", "responsive_grid", 3, "data", "ngClass", "loading", "resizable", "selectable"], [3, "noRecords"], ["media", "(max-width: 767px)"], ["kendoGridCellTemplate", ""], ["media", "(min-width: 768px)", 1, "grid-action-column", 3, "width", "title"], ["media", "(min-width: 768px)", 1, "grid-action-column", 3, "title"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["id", "Kendo_dialog_msg", "style", "z-index: 10000000;", 3, "minWidth", "width", "close", 4, "ngIf"], [3, "field", 4, "ngFor", "ngForOf"], [3, "field"], [3, "width", 4, "ngIf"], [3, "width"], [1, "form-group"], [3, "id", "click"], [1, "fa", "fa-trash-o"], ["type", "radio", "name", "itemName", 1, "k-radio", 3, "value", "ngModel", "checked", "id", "ngModelChange", "change"], [1, "k-radio-label", "m_r_10", 3, "for"], ["type", "text", "id", "txtWIPAccount", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", "maxlength", "100", "id", "txtType1099", 1, "form-control", 3, "ngModel", "disabled", "change", "ngModelChange"], [1, "grid-icon-sec"], [1, "col-md-12", "custom_flex", "md_p_r_30"], ["type", "text", "id", "txtSoNo", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", "maxlength", "50", "id", "txtBox1099", 1, "form-control", 3, "disabled", "ngModel", "change", "ngModelChange"], ["type", "text", "maxlength", "250", "id", "txtBoxDescription", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "spinners", "step", "ngModel", "id", "min", "maxlength", "autoCorrect", "decimals", "format", "ngModelChange", "change"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"], ["id", "Kendo_dialog_msg", 2, "z-index", "10000000", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"]],
    template: function TypeMasterNinetyNineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, TypeMasterNinetyNineComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "span")(32, "div", 19)(33, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "section", 20)(37, "div", 19)(38, "div", 21)(39, "div", 22)(40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_40_listener() {
          return ctx.bmlfAddItemSetupHeader();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 24)(44, "kendo-grid", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "kendo-grid-messages", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "kendo-grid-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, TypeMasterNinetyNineComponent_ng_template_48_Template, 2, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "kendo-grid-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, TypeMasterNinetyNineComponent_ng_template_51_Template, 3, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "kendo-grid-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, TypeMasterNinetyNineComponent_ng_template_54_Template, 3, 5, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, TypeMasterNinetyNineComponent_ng_template_57_Template, 3, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, TypeMasterNinetyNineComponent_ng_template_60_Template, 3, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "span")(63, "div", 19)(64, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 19)(69, "div", 21)(70, "div", 22)(71, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_71_listener() {
          return ctx.bmlfAddItemDetailSetup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 24)(75, "kendo-grid", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](76, "kendo-grid-messages", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](78, "kendo-grid-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](79, TypeMasterNinetyNineComponent_ng_template_79_Template, 2, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "kendo-grid-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, TypeMasterNinetyNineComponent_ng_template_82_Template, 3, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](85, TypeMasterNinetyNineComponent_ng_template_85_Template, 3, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](88, TypeMasterNinetyNineComponent_ng_template_88_Template, 3, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](91, TypeMasterNinetyNineComponent_ng_template_91_Template, 3, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "kendo-grid-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](94, TypeMasterNinetyNineComponent_ng_template_94_Template, 3, 9, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 31)(96, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_96_listener() {
          return ctx.bmlfonSave("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](99, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TypeMasterNinetyNineComponent_Template_button_click_99_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](103, TypeMasterNinetyNineComponent_app_custom_lookup_modal_103_Template, 1, 1, "app-custom-lookup-modal", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](104, TypeMasterNinetyNineComponent_app_common_task_modal_104_Template, 1, 1, "app-common-task-modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](105, TypeMasterNinetyNineComponent_kendo_dialog_105_Template, 16, 14, "kendo-dialog", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](106, TypeMasterNinetyNineComponent_kendo_dialog_106_Template, 16, 14, "kendo-dialog", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, TypeMasterNinetyNineComponent_kendo_dialog_107_Template, 19, 17, "kendo-dialog", 37);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 40, "TYPESETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 42, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 44, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](35, 46, "TYPESETUP.TABLE1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](42, 48, "COMMON.ADDLINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.marrSetupHeader)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](80, _c0, ctx.loadingEnabled == true))("loading", false)("resizable", true)("selectable", ctx.mobjSelectableSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](46, 50, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](50, 52, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](53, 54, "TYPESETUP.SELECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](56, 56, "TYPESETUP.TypeKey1099"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](59, 58, "TYPESETUP.Type1099"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](66, 60, "TYPESETUP.TABLE2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](73, 62, "COMMON.ADDLINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.marrSetupDetailMainList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](82, _c0, ctx.loadingEnabled == true))("loading", false)("resizable", true)("selectable", ctx.mobjSelectableSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](77, 64, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](81, 66, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](84, 68, "TYPESETUP.So"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](87, 70, "TYPESETUP.Box1099"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](90, 72, "TYPESETUP.BoxDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](93, 74, "TYPESETUP.Min1099Amt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](98, 76, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](101, 78, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItemSetupDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbShowDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__.NumericTextBoxComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_14__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogActionsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
    styles: [".k-grid[_ngcontent-%COMP%]   .no-padding[_ngcontent-%COMP%] {\n        padding: 0;\n      }\n      .whole-cell[_ngcontent-%COMP%] {\n        display: block;\n        padding: 8px 12px; \n\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9maW5hbmNlLWNvbmZpZ3VyYXRpb24vY29tcG9uZW50cy8xMDk5LXR5cGUtc2V0dXAvdHlwZS1tYXN0ZXItbmluZXR5LW5pbmUvdHlwZS1tYXN0ZXItbmluZXR5LW5pbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFVBQVU7TUFDWjtNQUNBO1FBQ0UsY0FBYztRQUNkLGlCQUFpQixFQUFFLHFCQUFxQjtNQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmstZ3JpZCAubm8tcGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAud2hvbGUtY2VsbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDsgLyogZGVwZW5kcyBvbiB0aGVtZSAqL1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 81462:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/account-group-sequence-setup/account-group-sequence-setup.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountGroupSequenceSetupComponent: () => (/* binding */ AccountGroupSequenceSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _models_account_group_sequence_setup_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/account-group-sequence-setup.model */ 14559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_account_group_sequence_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/account-group-sequence-setup.service */ 68160);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var src_app_shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/directives/numbers-only.directive */ 44794);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-treelist */ 67884);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 21916);






















const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function AccountGroupSequenceSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-loader");
  }
}
function AccountGroupSequenceSetupComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", obj_r8.GroupTypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", obj_r8.GroupTypeName, " ");
  }
}
function AccountGroupSequenceSetupComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", dataItem_r9.GroupID);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", dataItem_r9.GroupID, "");
  }
}
function AccountGroupSequenceSetupComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AccountGroupSequenceSetupComponent_ng_template_58_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const dataItem_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](dataItem_r10.GroupSeqNo = $event);
    })("change", function AccountGroupSequenceSetupComponent_ng_template_58_Template_input_change_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const dataItem_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.bmlfGridRowChange(dataItem_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("id", "txt", dataItem_r10.GROUPID, "", rowIndex_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", dataItem_r10.GroupSeqNo)("name", rowIndex_r11 + "_" + dataItem_r10.GroupID);
  }
}
function AccountGroupSequenceSetupComponent_kendo_dialog_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "kendo-dialog", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close", function AccountGroupSequenceSetupComponent_kendo_dialog_66_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_kendo_dialog_66_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_kendo_dialog_66_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_kendo_dialog_66_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 10, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 12, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r4.mbIsCloseMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](18, 14, "COMMON.CANCEL"));
  }
}
function AccountGroupSequenceSetupComponent_app_common_task_modal_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-common-task-modal", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeTaskModal", function AccountGroupSequenceSetupComponent_app_common_task_modal_67_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("taskData", ctx_r5.mobjTaskData);
  }
}
function AccountGroupSequenceSetupComponent_app_esignature_from_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-esignature-from", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("action", function AccountGroupSequenceSetupComponent_app_esignature_from_68_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r6.mobjSignatureData);
  }
}
function AccountGroupSequenceSetupComponent_kendo_dialog_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "kendo-dialog", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close", function AccountGroupSequenceSetupComponent_kendo_dialog_69_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_kendo_dialog_69_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r26.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_kendo_dialog_69_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
class AccountGroupSequenceSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'Account Group Sequence Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mbSaveDialogView = false;
    this.mbIsCloseMode = false;
    this.msGroupType = "";
    this.mArrGroupType = [];
    this.marrTreeList = [];
    this.mArrSaveLines = [];
    this.mObjModelGrid1 = new _models_account_group_sequence_setup_model__WEBPACK_IMPORTED_MODULE_1__.AccountGroupSequenceSetupModel();
    this.mobjUserData = {};
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.bmlfGetGroupType();
  }
  ngOnInit() {
    this.utilService.getBMEScreePermission(this.msScreenName);
    this.mobjUserData = this.lsService.getUserSession();
  }
  //--------------------------------------------------------------------------------------
  bmlfGetGroupType() {
    this.mbIsLoading = true;
    this.mArrGroupType = [];
    let pobjReqData = {
      ScreenName: 'Account Group Master',
      LookUpKey: 'GroupType',
      Filter1: ''
    };
    // let pobjReqData = {
    //   ScreenName: 'Account Group Master',
    //   LookUpKey: 'GroupType'
    // }
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
      } else {
        if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
          this.mArrGroupType = res.LookupData;
        }
      }
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfonGroupTypeChange(psGroupType) {
    //alert(psGroupType);
    if (this.mbIsChangeData == true) {
      this.mbSaveDialogView = true;
      return false;
    }
    this.mbIsLoading = true;
    this.mArrSaveLines = [];
    this.mbIsChangeData = false;
    let pobjJData = {
      JSON: JSON.stringify({
        HeaderData: [{
          "GroupType": this.bmlfIsEmpty(psGroupType) ? this.msGroupType : psGroupType
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetAcGroupSequenceData(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res != null && res.length > 0) {
        this.marrTreeList = res;
        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      if (this.mbIsCloseMode == false) {
        this.mbIsChangeData = false;
        this.bmlfonGroupTypeChange(this.msGroupType);
      } else {
        this.router.navigate(['/main/dashboard/dashboardpage']);
      }
    } else {
      this.mbSaveDialogView = false;
      this.mbIsCloseMode = false;
    }
  }
  //-----------------------------------------------------------------------------------    
  bmlfIsEmpty(value) {
    return typeof value === "undefined" || value === null || value === '';
  }
  //--------------------------------------------------------------------------------------
  bmlfGridRowChange(dataItem) {
    let pRowExsist;
    if (this.bmlfIsEmpty(dataItem.GroupSeqNo)) {
      dataItem.GroupSeqNo = 0;
    }
    let pobjData = Object.assign({}, dataItem);
    delete pobjData.child1;
    pRowExsist = this.mArrSaveLines.findIndex(val => val.GroupID == dataItem.GroupID);
    if (pRowExsist >= 0) {
      this.mArrSaveLines.splice(pRowExsist, 1);
    }
    this.mArrSaveLines.push(pobjData);
    this.mbIsChangeData = true;
  }
  //--------------------------------------------------------------------------------------
  bmlfSaveData() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.mArrSaveLines.length == 0) {
      return;
    }
    if (this.mbIsChangeData == false) {
      return;
    }
    this.mbIsLoading = true;
    let pobjJData = {
      JSON: JSON.stringify({
        HeaderData: this.mArrSaveLines,
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonUpdateAcGroupSequenceData(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
        this.mArrSaveLines = [];
        this.mbIsChangeData = false;
        if (this.mbIsCloseMode == true) {
          this.router.navigate(['/main/dashboard/dashboardpage']);
        } else {
          this.bmlfonGroupTypeChange(this.msGroupType);
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Account Group Sequence Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function AccountGroupSequenceSetupComponent_Factory(t) {
    return new (t || AccountGroupSequenceSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_http_account_group_sequence_setup_service__WEBPACK_IMPORTED_MODULE_2__.AccountGroupSequenceSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_5__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: AccountGroupSequenceSetupComponent,
    selectors: [["app-account-group-sequence-setup"]],
    viewQuery: function AccountGroupSequenceSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 70,
    vars: 49,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-3", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-5", "custom_flex", "md_p_r_30"], ["tabindex", "1", "id", "cmbGroupType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "rowheight100p"], ["childrenField", "child1", "kendoTreeListExpandable", "", 1, "explosion_list", 3, "kendoTreeListHierarchyBinding", "resizable", "height"], ["field", "GroupID", 3, "width", "expandable", "title"], ["kendoTreeListCellTemplate", ""], ["width", "150", "field", "GroupName", 3, "title"], ["width", "150", "field", "ParentGroupID", 3, "title"], ["width", "150", "field", "ParentGroupTree", 3, "title"], ["width", "150", "field", "GroupLevel", 3, "title"], ["width", "120", 3, "title"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [3, "value"], [3, "title"], ["type", "text", "maxlength", "4", "placeholder", "0", "numbersOnly", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "hidden", "click"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function AccountGroupSequenceSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, AccountGroupSequenceSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 18)(30, "section", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 26)(40, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AccountGroupSequenceSetupComponent_Template_select_ngModelChange_40_listener($event) {
          return ctx.msGroupType = $event;
        })("change", function AccountGroupSequenceSetupComponent_Template_select_change_40_listener() {
          return ctx.bmlfonGroupTypeChange(ctx.msGroupType);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, AccountGroupSequenceSetupComponent_option_41_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 29)(44, "kendo-treelist", 30)(45, "kendo-treelist-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, AccountGroupSequenceSetupComponent_ng_template_47_Template, 2, 2, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "kendo-treelist-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "kendo-treelist-column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](52, "kendo-treelist-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](54, "kendo-treelist-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "kendo-treelist-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, AccountGroupSequenceSetupComponent_ng_template_58_Template, 1, 4, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 38)(60, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_button_click_60_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccountGroupSequenceSetupComponent_Template_button_click_63_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, AccountGroupSequenceSetupComponent_kendo_dialog_66_Template, 19, 16, "kendo-dialog", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, AccountGroupSequenceSetupComponent_app_common_task_modal_67_Template, 1, 1, "app-common-task-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](68, AccountGroupSequenceSetupComponent_app_esignature_from_68_Template, 1, 1, "app-esignature-from", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, AccountGroupSequenceSetupComponent_kendo_dialog_69_Template, 16, 12, "kendo-dialog", 44);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 25, "ACCOUNTGROUPSEQUENCESETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](18, 27, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 29, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](38, 31, "ACCOUNTGROUPSEQUENCESETUP.GROUPTYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.msGroupType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.mArrGroupType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("kendoTreeListHierarchyBinding", ctx.marrTreeList)("resizable", false)("height", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](46, 33, "ACCOUNTGROUPSEQUENCESETUP.GROUPID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", 100)("expandable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](49, 35, "ACCOUNTGROUPSEQUENCESETUP.GROUPNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](51, 37, "ACCOUNTGROUPSEQUENCESETUP.PARENTGROUPID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](53, 39, "ACCOUNTGROUPSEQUENCESETUP.PARENTGROUPTREE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](55, 41, "ACCOUNTGROUPSEQUENCESETUP.GROUPLEVEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](57, 43, "ACCOUNTGROUPSEQUENCESETUP.GROUPSEQNO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](62, 45, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 47, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__.LoaderComponent, src_app_shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_10__.NumbersOnlyDirective, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_11__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_13__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogActionsComponent, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__.TreeListComponent, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__.HierarchyBindingDirective, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__.ExpandableDirective, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__.ColumnComponent, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_20__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16115:
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/account-segment-setup/account-segment-setup.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSegmentSetupComponent: () => (/* binding */ AccountSegmentSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_account_segment_setup_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/account-segment-setup.model */ 5254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_account_segment_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/account-segment-setup.service */ 55086);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/custom-component-form/custom-component-form.component */ 37638);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 21916);























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function AccountSegmentSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-loader");
  }
}
function AccountSegmentSetupComponent_option_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](option_r9);
  }
}
function AccountSegmentSetupComponent_ng_container_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-custom-component-form", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msScreenName", ctx_r2.msScreenName)("maInputJsonData", ctx_r2.mobjAccountSegmentModel)("mFormMode", ctx_r2.msFormMode)("tabIndex", "-1");
  }
}
function AccountSegmentSetupComponent_kendo_dialog_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function AccountSegmentSetupComponent_kendo_dialog_178_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r11.bmlfonDialogAction("OK"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_178_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r13.bmlfonDialogAction("OK"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 7, "ACCOUNTSEGMENTSETUP.MSG.LENGTHVALIDATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 9, "COMMON.OK"), " ");
  }
}
function AccountSegmentSetupComponent_kendo_dialog_179_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function AccountSegmentSetupComponent_kendo_dialog_179_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r14.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_179_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r16.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_179_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_179_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function AccountSegmentSetupComponent_app_common_task_modal_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-task-modal", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeTaskModal", function AccountSegmentSetupComponent_app_common_task_modal_180_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r19.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("taskData", ctx_r6.mobjTaskData);
  }
}
function AccountSegmentSetupComponent_app_esignature_from_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-esignature-from", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("action", function AccountSegmentSetupComponent_app_esignature_from_181_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r21.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx_r7.mobjSignatureData);
  }
}
function AccountSegmentSetupComponent_kendo_dialog_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function AccountSegmentSetupComponent_kendo_dialog_182_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_182_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_kendo_dialog_182_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r26.bmlfEsignAuditAlertEvent("CANCEL"));
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
class AccountSegmentSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.DisplayData = '';
    this.DisplayModel = '';
    this.DivisionName = [];
    this.mbDislable = false;
    this.mbDislableAccountExists = false;
    this.mbIsLoading = false;
    this.msScreenName = 'Account Segment Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.autoCorrect = true;
    this.msFormMode = "U";
    /**---Object Initialize---- */
    this.mobjAccountSegmentModel = new _models_account_segment_setup_model__WEBPACK_IMPORTED_MODULE_2__.AccountSegmentSetupModel();
    this.mobjOtherInfoModel = new _models_account_segment_setup_model__WEBPACK_IMPORTED_MODULE_2__.OtherInfoModel();
    this.mobjUserData = {};
    this.mbDeleteLineItemDialog = false;
    this.mbShowDeleteDialog = false;
    this.mbShowValidationDialog = false;
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    this.msCloseActionModalName = "";
    this.mbSaveDialogView = false;
    this.mbIsSearchMode = false;
    this.mbIsAddMode = false;
    this.mbIsCopyMode = false;
    this.mbIsDeleteMode = false;
    this.mbIsCloseMode = false;
    this.msCopyRecord = "N";
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
  }

  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfGetAccountSegmentData();
    this.mobjSignatureData = {
      scrrenName: this.msScreenName,
      reasonMinLength: 10,
      reqSignAuth: 2,
      date: moment__WEBPACK_IMPORTED_MODULE_1__().format(this.msCustomDateFormat.toUpperCase()),
      userName: this.mobjUserData.UserId
    };
    this.bmlfCheckEsignApplicableOnForm();
  }
  bmlfGetAccountSegmentData() {
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "Productkey": this.msPrdKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetAccountSegmentSetup(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.HeaderData.length > 0) {
        this.mbCustomControl = true;
        this.mobjAccountSegmentModel = Object.assign({}, res.HeaderData[0]);
        this.mobjOtherInfoModel = Object.assign({}, res.OtherInfo[0]);
        this.msFormMode = 'U';
        if (this.mobjOtherInfoModel.TransactionExists == 'Yes') {
          this.mbDislable = true;
        } else {
          this.mbDislable = false;
        }
        if (this.mobjOtherInfoModel.AccountExists == 'Yes') {
          this.mbDislableAccountExists = true;
        } else {
          this.mbDislableAccountExists = false;
        }
        this.bmlfDisplayFieldGet();
        this.bmlfPushDivisonName();
      }
      this.bmlfCheckEsignApplicableOnForm();
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfOnFormFieldChange(psParam) {
    this.mbIsChangeData = true;
    this.bmlfDisplayFieldGet();
    this.bmlfPushDivisonName();
    this.bmlfTotalLength(psParam);
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  bmlfStarCreate(psParam) {
    var star = '';
    for (var i = 1; i <= psParam; i++) {
      star = '*'.repeat(i);
    }
    return star ? star : '';
  }
  /**--- Check Display format with string--- */
  bmlfDisplayFieldGet() {
    this.DisplayModel = "";
    var psSeq = this.mobjAccountSegmentModel.SegSeq.toString();
    var Mark = this.mobjOtherInfoModel.MaskingCharacter ? this.mobjOtherInfoModel.MaskingCharacter : "";
    var temp1 = "";
    for (var ids of psSeq) {
      if (ids != "") {
        switch (ids) {
          case "1":
            this.DisplayModel += this.bmlfStarCreate(this.mobjAccountSegmentModel.SegLength1) + Mark;
            break;
          case "2":
            this.DisplayModel += this.bmlfStarCreate(this.mobjAccountSegmentModel.SegLength2) + Mark;
            break;
          case "3":
            this.DisplayModel += this.bmlfStarCreate(this.mobjAccountSegmentModel.SegLength3) + Mark;
            break;
          case "4":
            this.DisplayModel += this.bmlfStarCreate(this.mobjAccountSegmentModel.SegLength4) + Mark;
            break;
          case "5":
            this.DisplayModel += this.bmlfStarCreate(this.mobjAccountSegmentModel.AcctSegLength5) + Mark;
            break;
        }
      }
      this.DisplayModel += temp1;
    }
  }
  bmlfPushDivisonName() {
    this.DivisionName = [];
    if (this.mobjAccountSegmentModel.SegmentedYearEnd == 'Y') {
      if (this.mobjAccountSegmentModel.YearEndSegment != '') {
        localStorage.setItem('YearEndSegment', this.mobjAccountSegmentModel.YearEndSegment);
      }
      // this.mobjAccountSegmentModel.NoOfSeg=1;
      // if(this.mobjAccountSegmentModel.SegName1){
      //     this.DivisionName.push(this.mobjAccountSegmentModel.SegName1)
      //     this.mobjAccountSegmentModel.NoOfSeg += 1;
      // }
      // if(this.mobjAccountSegmentModel.SegName2){
      //     this.DivisionName.push(this.mobjAccountSegmentModel.SegName2)
      //     this.mobjAccountSegmentModel.NoOfSeg += 1;
      // }
      // if(this.mobjAccountSegmentModel.SegName3){
      //     this.DivisionName.push(this.mobjAccountSegmentModel.SegName3)
      //     this.mobjAccountSegmentModel.NoOfSeg += 1;
      // }
      // if(this.mobjAccountSegmentModel.SegName4){
      //     this.DivisionName.push(this.mobjAccountSegmentModel.SegName4)
      //     this.mobjAccountSegmentModel.NoOfSeg += 1;
      // }
      // this.mobjAccountSegmentModel.NoOfSeg.toString()
    } else {
      this.DivisionName = [];
      this.mobjAccountSegmentModel.YearEndSegment = '';
    }
    this.mobjAccountSegmentModel.NoOfSeg = 1;
    if (this.mobjAccountSegmentModel.SegName1) {
      this.DivisionName.push(this.mobjAccountSegmentModel.SegName1);
      this.mobjAccountSegmentModel.NoOfSeg += 1;
    }
    if (this.mobjAccountSegmentModel.SegName2) {
      this.DivisionName.push(this.mobjAccountSegmentModel.SegName2);
      this.mobjAccountSegmentModel.NoOfSeg += 1;
    }
    if (this.mobjAccountSegmentModel.SegName3) {
      this.DivisionName.push(this.mobjAccountSegmentModel.SegName3);
      this.mobjAccountSegmentModel.NoOfSeg += 1;
    }
    if (this.mobjAccountSegmentModel.SegName4) {
      this.DivisionName.push(this.mobjAccountSegmentModel.SegName4);
      this.mobjAccountSegmentModel.NoOfSeg += 1;
    }
    this.mobjAccountSegmentModel.NoOfSeg.toString();
    let YearEndSegment = localStorage.getItem('YearEndSegment');
    if (YearEndSegment != '' && this.mobjAccountSegmentModel.SegmentedYearEnd == 'Y') {
      // SCR 3370-1001 Western India Cashew
      this.mobjAccountSegmentModel.YearEndSegment = YearEndSegment == "null" ? '' : YearEndSegment;
    }
  }
  bmlfTotalLength(psParam) {
    this.DisplayData = psParam;
    this.mobjAccountSegmentModel.TotalSegLength = 0;
    var total = Math.floor(this.mobjAccountSegmentModel.SegLength1) + Math.floor(this.mobjAccountSegmentModel.SegLength2) + Math.floor(this.mobjAccountSegmentModel.SegLength3) + Math.floor(this.mobjAccountSegmentModel.SegLength4) + Math.floor(this.mobjAccountSegmentModel.AcctSegLength5);
    this.mobjAccountSegmentModel.TotalSegLength = total;
    if (this.mobjAccountSegmentModel.TotalSegLength > 80) {
      this.mbShowValidationDialog = true;
    } else {
      this.mbShowValidationDialog = false;
    }
  }
  bmlfonDialogAction(psParam) {
    this.mobjAccountSegmentModel[this.DisplayData] = '';
    this.mbShowValidationDialog = false;
    this.bmlfTotalLength('');
  }
  bmlfonlyNumberKey(event) {
    let seperator = '^([1-5])';
    let maskSeperator = new RegExp(seperator, 'g');
    let result = maskSeperator.test(event.key);
    return result;
  }
  bmlfonAssignCustValues(custom) {
    this.mobjAccountSegmentModel.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : "";
    this.mobjAccountSegmentModel.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : "";
    this.mobjAccountSegmentModel.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : "";
    this.mobjAccountSegmentModel.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : "";
    this.mobjAccountSegmentModel.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : "";
    this.mobjAccountSegmentModel.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : "";
    this.mobjAccountSegmentModel.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : "";
    this.mobjAccountSegmentModel.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : "";
    this.mobjAccountSegmentModel.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : "";
    this.mobjAccountSegmentModel.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : "";
    this.mobjAccountSegmentModel.User1 = custom.User1 ? custom.User1 : "";
    this.mobjAccountSegmentModel.User2 = custom.User2 ? custom.User2 : "";
    this.mobjAccountSegmentModel.User3 = custom.User3 ? custom.User3 : "";
    this.mobjAccountSegmentModel.User4 = custom.User4 ? custom.User4 : "";
    this.mobjAccountSegmentModel.User5 = custom.User5 ? custom.User5 : "";
    this.mobjAccountSegmentModel.User6 = custom.User6 ? custom.User6 : "";
    this.mobjAccountSegmentModel.User7 = custom.User7 ? custom.User7 : "";
    this.mobjAccountSegmentModel.User8 = custom.User8 ? custom.User8 : "";
    this.mobjAccountSegmentModel.User9 = custom.User9 ? custom.User9 : "";
    this.mobjAccountSegmentModel.User10 = custom.User10 ? custom.User10 : "";
    this.mobjAccountSegmentModel.User11 = custom.User11 ? custom.User11 : "";
    this.mobjAccountSegmentModel.User12 = custom.User12 ? custom.User12 : "";
  }
  bmlfSubmitData(pbClose = false) {
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.customCtrl.mbChange != true) {
      return;
    }
    // if (!this.mbIsChangeData) {
    //     return;
    // };
    //Validate Field Extender -- Start
    let resultString = this.FieldExtender.bmgfValidationCheck();
    if (resultString.value == false) {
      this.toastMessageService.notifyError(resultString.msg);
      return;
    }
    if (this.mbIsEsignature) {
      this.bmlfopenESignatureModal();
      return;
    }
    //Customization
    let data = this.utilService.bmgfCustomModelTransform(this.customCtrl);
    this.bmlfonAssignCustValues(data);
    if (this.customCtrl != undefined) {
      if (!this.customCtrl.bmgIsMandatary(this.mobjAccountSegmentModel)) {
        return;
      }
    }
    this.bmlfSaveProductData();
  }
  bmlfSaveProductData() {
    this.mbIsLoading = true;
    let parrHeaderData = [];
    this.mobjAccountSegmentModel.Recuserid = this.mobjUserData.UserId;
    // SCR 3370-1001 Western India Cashew
    this.mobjAccountSegmentModel.AutoPadding = this.mobjAccountSegmentModel.AutoPadding == true ? 1 : 0;
    parrHeaderData.push(Object.assign({}, this.mobjAccountSegmentModel));
    let pobjJData = {
      HeaderData: parrHeaderData,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSegmentData(pobjJson, this.msFormMode).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.msFormMode = 'U';
        this.bmlfGetAccountSegmentData();
        this.FieldExtender.mbChange = false;
        if (this.customCtrl != undefined) {
          this.customCtrl.mbChange = false;
        }
        this.mbIsChangeData = false;
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate(res.Response[0].ResponseText));
        // FieldExtender -- start update
        let screenKeyValue = this.msScreenName + " — " + this.msPrdKey;
        let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
        if (jsonData.length > 0) {
          this.FieldExtender.bmlfCallApi(jsonData).then(res => {
            if (res != null) {}
          });
        }
        ;
        // FieldExtender -- End update
        if (this.mbIsCloseMode) {
          this.mbIsCloseMode = false;
          this.router.navigate(["/main/dashboard/dashboardpage"]);
        } else {
          this.bmlfGetAccountSegmentData();
        }
      } else {
        this.mbIsCloseMode = false;
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfCloseProduct() {
    if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(["/main/dashboard/dashboardpage"]);
    }
  }
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSubmitData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbIsCloseMode = false;
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
      //pobjFormRec.primeKey = this.mobjProductModel.Productkey;
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  /**----E- Signature Code----- */
  // check e signature
  bmlfCheckEsignApplicableOnForm() {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          MenuScreenName: this.msScreenName
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
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
    //this.mobjSignatureData.primaryKey = this.mobjProductModel.Productkey;
  }
  // check e signature
  bmlfChkESignature(pobjData) {
    this.mbSignatureModal = pobjData.isShow;
    if (pobjData.event == 'Save') {
      this.mbIsEsignature = false;
      this.mobjAccountSegmentModel.ESG_REASON = pobjData.changeReason;
      this.mobjAccountSegmentModel.ESG_APPROVER = pobjData.eSignApprover;
      this.mbIsChangeData = true;
      this.bmlfSubmitData();
    } else if (pobjData.event == 'Cancel') {
      this.mobjCommonAlertData = {};
      this.mbCommonAlertDialog = true;
      this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
      this.mobjCommonAlertData.event = 'close';
      this.mbIsChangeData = true;
    }
  }
  bmlfEsignAuditAlertEvent(event) {
    if (event == 'No') {} else {
      this.mbIsEsignAuditDialog = false;
    }
  }
  /**---END----E- Signature Code----- */
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Account Segment Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function AccountSegmentSetupComponent_Factory(t) {
    return new (t || AccountSegmentSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_account_segment_setup_service__WEBPACK_IMPORTED_MODULE_3__.AccountSegmentSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: AccountSegmentSetupComponent,
    selectors: [["app-account-segment-setup"]],
    viewQuery: function AccountSegmentSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 183,
    vars: 102,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "id", "txtAcctSegName5", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], [1, "col-md-5"], ["type", "number", "id", "AcctSegLength5", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtSegName1", "maxlength", "80", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "number", "id", "SegLength1", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtSegName2", "maxlength", "80", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "number", "id", "SegLength2", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtSegName3", "maxlength", "80", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "number", "id", "SegLength3", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtSegName4", "maxlength", "80", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "number", "id", "SegLength4", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "number", "id", "txtSegSeq", "onKeyPress", "if(this.value.length==5) return false;", "min", "0", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change", "keypress"], ["type", "number", "id", "txtTotalSegLength", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], [1, "custom-control", "custom-checkbox", "mr-2"], ["type", "checkbox", "name", "chSegmentedYearEnd", "id", "chSegmentedYearEnd", 1, "custom-control-input", 3, "disabled", "ngModel", "ngModelChange", "change"], ["for", "chSegmentedYearEnd", 1, "custom-control-label"], ["id", "cmbYearEndSegment", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "chkAutoPadding", "id", "chkAutoPadding", 1, "custom-control-input", 3, "disabled", "ngModel", "value", "ngModelChange", "change"], ["for", "chkAutoPadding", 1, "custom-control-label"], [1, "col-md-4"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [3, "value"], [3, "msScreenName", "maInputJsonData", "mFormMode", "tabIndex"], ["custom", ""], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function AccountSegmentSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, AccountSegmentSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 18)(30, "section", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 26)(40, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.mobjAccountSegmentModel.AcctSegName5 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "div", 28)(44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 26)(48, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_48_listener($event) {
          return ctx.mobjAccountSegmentModel.AcctSegLength5 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_48_listener() {
          return ctx.bmlfOnFormFieldChange("AcctSegLength5");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "div", 24)(53, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](56, "div", 26)(57, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_57_listener($event) {
          return ctx.mobjAccountSegmentModel.SegName1 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_57_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 22)(59, "div", 23)(60, "div", 28)(61, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](64, "div", 26)(65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_65_listener($event) {
          return ctx.mobjAccountSegmentModel.SegLength1 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_65_listener() {
          return ctx.bmlfOnFormFieldChange("SegLength1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "div", 21)(67, "div", 22)(68, "div", 23)(69, "div", 24)(70, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "div", 26)(74, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_74_listener($event) {
          return ctx.mobjAccountSegmentModel.SegName2 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_74_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "div", 22)(76, "div", 23)(77, "div", 28)(78, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "div", 26)(82, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_82_listener($event) {
          return ctx.mobjAccountSegmentModel.SegLength2 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_82_listener() {
          return ctx.bmlfOnFormFieldChange("SegLength2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](83, "div", 21)(84, "div", 22)(85, "div", 23)(86, "div", 24)(87, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](90, "div", 26)(91, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_91_listener($event) {
          return ctx.mobjAccountSegmentModel.SegName3 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_91_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "div", 22)(93, "div", 23)(94, "div", 28)(95, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](98, "div", 26)(99, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_99_listener($event) {
          return ctx.mobjAccountSegmentModel.SegLength3 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_99_listener() {
          return ctx.bmlfOnFormFieldChange("SegLength3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](100, "div", 21)(101, "div", 22)(102, "div", 23)(103, "div", 24)(104, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](107, "div", 26)(108, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_108_listener($event) {
          return ctx.mobjAccountSegmentModel.SegName4 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_108_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "div", 22)(110, "div", 23)(111, "div", 28)(112, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](115, "div", 26)(116, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_116_listener($event) {
          return ctx.mobjAccountSegmentModel.SegLength4 = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_116_listener() {
          return ctx.bmlfOnFormFieldChange("SegLength4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](117, "div", 21)(118, "div", 22)(119, "div", 23)(120, "div", 24)(121, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](124, "div", 26)(125, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_125_listener($event) {
          return ctx.mobjAccountSegmentModel.SegSeq = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_125_listener() {
          return ctx.bmlfOnFormFieldChange("");
        })("keypress", function AccountSegmentSetupComponent_Template_input_keypress_125_listener($event) {
          return ctx.bmlfonlyNumberKey($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](126, "div", 22)(127, "div", 23)(128, "div", 28)(129, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](132, "div", 26)(133, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_133_listener($event) {
          return ctx.mobjAccountSegmentModel.TotalSegLength = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_133_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](134, "div", 21)(135, "div", 22)(136, "div", 23)(137, "div", 24)(138, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](141, "div", 26)(142, "div", 40)(143, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_143_listener($event) {
          return ctx.mobjAccountSegmentModel.SegmentedYearEnd = $event ? "Y" : "N";
        })("change", function AccountSegmentSetupComponent_Template_input_change_143_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](144, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](145, "div", 22)(146, "div", 23)(147, "div", 28)(148, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](151, "div", 26)(152, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_select_ngModelChange_152_listener($event) {
          return ctx.mobjAccountSegmentModel.YearEndSegment = $event;
        })("change", function AccountSegmentSetupComponent_Template_select_change_152_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](153, AccountSegmentSetupComponent_option_153_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](154, "div", 21)(155, "div", 22)(156, "div", 23)(157, "div", 24)(158, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](161, "div", 26)(162, "div", 40)(163, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AccountSegmentSetupComponent_Template_input_ngModelChange_163_listener($event) {
          return ctx.mobjAccountSegmentModel.AutoPadding = $event;
        })("change", function AccountSegmentSetupComponent_Template_input_change_163_listener() {
          return ctx.bmlfOnFormFieldChange("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](164, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](165, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](166, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](167, AccountSegmentSetupComponent_ng_container_167_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](168, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](169, "app-field-extender", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](171, "div", 51)(172, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_button_click_172_listener() {
          return ctx.bmlfSubmitData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](174, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](175, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AccountSegmentSetupComponent_Template_button_click_175_listener() {
          return ctx.bmlfCloseProduct();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](178, AccountSegmentSetupComponent_kendo_dialog_178_Template, 13, 11, "kendo-dialog", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](179, AccountSegmentSetupComponent_kendo_dialog_179_Template, 19, 15, "kendo-dialog", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](180, AccountSegmentSetupComponent_app_common_task_modal_180_Template, 1, 1, "app-common-task-modal", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](181, AccountSegmentSetupComponent_app_esignature_from_181_Template, 1, 1, "app-esignature-from", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](182, AccountSegmentSetupComponent_kendo_dialog_182_Template, 16, 12, "kendo-dialog", 58);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 62, "ACCOUNTSEGMENTSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 64, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 66, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](38, 68, "ACCOUNTSEGMENTSETUP.SEGMEMT5"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.AcctSegName5)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](46, 70, "ACCOUNTSEGMENTSETUP.LENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.AcctSegLength5)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](55, 72, "ACCOUNTSEGMENTSETUP.SEGMEMT1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegName1)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](63, 74, "ACCOUNTSEGMENTSETUP.LENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegLength1)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](72, 76, "ACCOUNTSEGMENTSETUP.SEGMEMT2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegName2)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](80, 78, "ACCOUNTSEGMENTSETUP.LENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegLength2)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](89, 80, "ACCOUNTSEGMENTSETUP.SEGMEMT3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegName3)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](97, 82, "ACCOUNTSEGMENTSETUP.LENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegLength3)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](106, 84, "ACCOUNTSEGMENTSETUP.SEGMEMT4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegName4)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](114, 86, "ACCOUNTSEGMENTSETUP.LENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegLength4)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](123, 88, "ACCOUNTSEGMENTSETUP.SEGSQU"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.SegSeq)("disabled", ctx.mbDislableAccountExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](131, 90, "ACCOUNTSEGMENTSETUP.TOTALLENGTH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.TotalSegLength)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](140, 92, "ACCOUNTSEGMENTSETUP.CLOSETODIV"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.mbDislable)("ngModel", ctx.mobjAccountSegmentModel.SegmentedYearEnd == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](150, 94, "ACCOUNTSEGMENTSETUP.DIVINAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mobjAccountSegmentModel.YearEndSegment)("disabled", ctx.mobjAccountSegmentModel.SegmentedYearEnd != "Y" || ctx.mbDislable);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.DivisionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](160, 96, "ACCOUNTSEGMENTSETUP.AUTOZERO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.mbDislable)("ngModel", ctx.mobjAccountSegmentModel.AutoPadding)("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbCustomControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](174, 98, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](177, 100, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbShowValidationDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_10__.CustomComponentFormComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_12__.FieldExtenderComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_13__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_15__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87746:
/*!******************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/dimensions-setup/dimensions-setup.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionsSetupComponent: () => (/* binding */ DimensionsSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_dimensions_setup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dimensions-setup.model */ 51470);
/* harmony import */ var _constant_dimensions_setup_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/dimensions-setup.const */ 48961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_dimensions_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/dimensions-setup.service */ 18014);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_directives_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/directives/decima-number.directive */ 93545);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_directives_integer_number_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/directives/integer-number.directive */ 67776);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 21916);




























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function DimensionsSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader");
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_dt_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "DIMENSIONSSETUP." + item_r14.Title));
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 55)(2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26);
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).rowIndex;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r24.bmlfonDeleteLineItem(rowIndex_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r12, "");
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 58)(2, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r29);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r28.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r14.Field, "", rowIndex_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r19.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field])("name", rowIndex_r12 + "_" + item_r14.Field);
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 58)(2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r34.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field] = $event);
    })("change", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_6_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r35);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r38.bmlfNgGrid1Changes(rowIndex_r12, item_r14.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r14.Field, "", rowIndex_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r20.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field])("name", rowIndex_r12 + "_" + item_r14.Field)("disabled", ctx_r20.mArrMultiDimensionGroupGrid[rowIndex_r12]["Flag"] != "A");
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 58)(2, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_7_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field] = $event);
    })("change", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_7_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r47.bmlfNgGrid1Changes(rowIndex_r12, item_r14.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r14.Field, "", rowIndex_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r21.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field])("name", rowIndex_r12 + "_" + item_r14.Field);
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 62)(2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_ng_template_60_div_1_ng_container_8_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r53);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r52.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r14.Field, "", rowIndex_r12, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r22.mArrMultiDimensionGroupGrid[rowIndex_r12][item_r14.Field])("name", rowIndex_r12 + "_" + item_r14.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "txt", item_r14.Field, "", rowIndex_r12, "A");
  }
}
function DimensionsSetupComponent_ng_template_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DimensionsSetupComponent_ng_template_60_div_1_dt_1_Template, 3, 3, "dt", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DimensionsSetupComponent_ng_template_60_div_1_ng_container_3_Template, 4, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, DimensionsSetupComponent_ng_template_60_div_1_ng_container_4_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DimensionsSetupComponent_ng_template_60_div_1_ng_container_5_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, DimensionsSetupComponent_ng_template_60_div_1_ng_container_6_Template, 3, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, DimensionsSetupComponent_ng_template_60_div_1_ng_container_7_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, DimensionsSetupComponent_ng_template_60_div_1_ng_container_8_Template, 4, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Field != "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "textReadOnly" && item_r14.Field == "SeqNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "textReadOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "checkbox");
  }
}
function DimensionsSetupComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, DimensionsSetupComponent_ng_template_60_div_1_Template, 9, 7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.mArrMultiDimensionGrid1Col);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_grid_column_61_2_ng_template_0_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r74);
      const rowIndex_r72 = restoredCtx.rowIndex;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r73.bmlfonDeleteLineItem(rowIndex_r72));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r72 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r72, "");
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_2_ng_template_0_Template, 3, 1, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 62)(1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_3_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79);
      const rowIndex_r77 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r78.mArrMultiDimensionGroupGrid[rowIndex_r77][item_r58.Field] = $event);
    })("change", function DimensionsSetupComponent_kendo_grid_column_61_3_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79);
      const rowIndex_r77 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r81.bmlfNgGrid1Changes(rowIndex_r77, item_r58.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r77 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r58.Field, "", rowIndex_r77, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r75.mArrMultiDimensionGroupGrid[rowIndex_r77][item_r58.Field])("name", rowIndex_r77 + "_" + item_r58.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "txt", item_r58.Field, "", rowIndex_r77, "A");
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_3_ng_template_0_Template, 3, 6, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58)(1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_4_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r88);
      const rowIndex_r86 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r87.mArrMultiDimensionGroupGrid[rowIndex_r86][item_r58.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r86 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r58.Field, "", rowIndex_r86, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r84.mArrMultiDimensionGroupGrid[rowIndex_r86][item_r58.Field])("name", rowIndex_r86 + "_" + item_r58.Field);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_4_ng_template_0_Template, 2, 4, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58)(1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_5_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r95);
      const rowIndex_r93 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r94.mArrMultiDimensionGroupGrid[rowIndex_r93][item_r58.Field] = $event);
    })("blur", function DimensionsSetupComponent_kendo_grid_column_61_5_ng_template_0_Template_input_blur_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r95);
      const rowIndex_r93 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r97.bmlfNgGrid1Changes(rowIndex_r93, item_r58.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r93 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r58.Field, "", rowIndex_r93, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r91.mArrMultiDimensionGroupGrid[rowIndex_r93][item_r58.Field])("name", rowIndex_r93 + "_" + item_r58.Field)("disabled", ctx_r91.mArrMultiDimensionGroupGrid[rowIndex_r93]["Flag"] != "A");
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_5_ng_template_0_Template, 2, 5, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58)(1, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_6_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r104);
      const rowIndex_r102 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r103.mArrMultiDimensionGroupGrid[rowIndex_r102][item_r58.Field] = $event);
    })("blur", function DimensionsSetupComponent_kendo_grid_column_61_6_ng_template_0_Template_input_blur_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r104);
      const rowIndex_r102 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r106.bmlfNgGrid1Changes(rowIndex_r102, item_r58.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r102 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r58.Field, "", rowIndex_r102, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r100.mArrMultiDimensionGroupGrid[rowIndex_r102][item_r58.Field])("name", rowIndex_r102 + "_" + item_r58.Field);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_6_ng_template_0_Template, 2, 4, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "kendo-datepicker", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_7_ng_template_0_Template_kendo_datepicker_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r113);
      const rowIndex_r111 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r112.mArrMultiDimensionGroupGrid[rowIndex_r111][item_r58.Field] = $event);
    })("valueChange", function DimensionsSetupComponent_kendo_grid_column_61_7_ng_template_0_Template_kendo_datepicker_valueChange_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r113);
      const rowIndex_r111 = restoredCtx.rowIndex;
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r115.bmlfNgChanges(rowIndex_r111));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r111 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", ctx_r109.msCustomDateFormat)("ngModel", ctx_r109.mArrMultiDimensionGroupGrid[rowIndex_r111][item_r58.Field]);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_7_ng_template_0_Template, 2, 2, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "kendo-timepicker", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_8_ng_template_0_Template_kendo_timepicker_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r121);
      const rowIndex_r119 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r120.mArrMultiDimensionGroupGrid[rowIndex_r119][item_r58.Field] = $event);
    })("valueChange", function DimensionsSetupComponent_kendo_grid_column_61_8_ng_template_0_Template_kendo_timepicker_valueChange_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r121);
      const rowIndex_r119 = restoredCtx.rowIndex;
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r123.bmlfNgChanges(rowIndex_r119));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r119 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", "hh:mm a")("ngModel", ctx_r117.mArrMultiDimensionGroupGrid[rowIndex_r119][item_r58.Field]);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_8_ng_template_0_Template, 2, 2, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_9_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r129);
      const rowIndex_r127 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r128.mArrMultiDimensionGroupGrid[rowIndex_r127][item_r58.Field] = $event);
    })("change", function DimensionsSetupComponent_kendo_grid_column_61_9_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r129);
      const rowIndex_r127 = restoredCtx.rowIndex;
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r131.bmlfNgChanges(rowIndex_r127));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r127 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r125.mArrMultiDimensionGroupGrid[rowIndex_r127][item_r58.Field]);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_9_ng_template_0_Template, 2, 1, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_10_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r137);
      const rowIndex_r135 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r136.mArrMultiDimensionGroupGrid[rowIndex_r135][item_r58.Field] = $event);
    })("change", function DimensionsSetupComponent_kendo_grid_column_61_10_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r137);
      const rowIndex_r135 = restoredCtx.rowIndex;
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r139.bmlfNgChanges(rowIndex_r135));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r135 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r133.mArrMultiDimensionGroupGrid[rowIndex_r135][item_r58.Field])("Precision", 6);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_10_ng_template_0_Template, 2, 2, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_11_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r145);
      const rowIndex_r143 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r144.mArrMultiDimensionGroupGrid[rowIndex_r143][item_r58.Field] = $event);
    })("change", function DimensionsSetupComponent_kendo_grid_column_61_11_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r145);
      const rowIndex_r143 = restoredCtx.rowIndex;
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r147.bmlfNgChanges(rowIndex_r143));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r143 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r141.mArrMultiDimensionGroupGrid[rowIndex_r143][item_r58.Field])("Precision", 6);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_11_ng_template_0_Template, 2, 2, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_kendo_grid_column_61_12_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r153);
      const rowIndex_r151 = restoredCtx.rowIndex;
      const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r152.mArrMultiDimensionGroupGrid[rowIndex_r151][item_r58.Field] = $event);
    })("change", function DimensionsSetupComponent_kendo_grid_column_61_12_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r153);
      const rowIndex_r151 = restoredCtx.rowIndex;
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r155.bmlfNgChanges(rowIndex_r151));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r151 = ctx.rowIndex;
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r149.mArrMultiDimensionGroupGrid[rowIndex_r151][item_r58.Field]);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_kendo_grid_column_61_12_ng_template_0_Template, 2, 1, "ng-template", 41);
  }
}
function DimensionsSetupComponent_kendo_grid_column_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-grid-column", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, DimensionsSetupComponent_kendo_grid_column_61_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, DimensionsSetupComponent_kendo_grid_column_61_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, DimensionsSetupComponent_kendo_grid_column_61_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, DimensionsSetupComponent_kendo_grid_column_61_5_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, DimensionsSetupComponent_kendo_grid_column_61_6_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, DimensionsSetupComponent_kendo_grid_column_61_7_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, DimensionsSetupComponent_kendo_grid_column_61_8_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, DimensionsSetupComponent_kendo_grid_column_61_9_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, DimensionsSetupComponent_kendo_grid_column_61_10_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, DimensionsSetupComponent_kendo_grid_column_61_11_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, DimensionsSetupComponent_kendo_grid_column_61_12_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("field", item_r58.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", item_r58.Field.startsWith("User") || item_r58.Field.includes("CUSTOM") ? item_r58.Title : _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 15, "DIMENSIONSSETUP." + item_r58.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("width", item_r58.Type == "Action" || item_r58.Field == "SeqNum" || item_r58.Field == "Active" ? "20" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hidden", !item_r58.Display);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "textReadOnly" && item_r58.Field == "SeqNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "textReadOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "DateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "Integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "Float");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "Decimal(22,6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r58.Type == "AlphaNumeric");
  }
}
function DimensionsSetupComponent_kendo_dialog_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function DimensionsSetupComponent_kendo_dialog_69_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r158);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r157.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_69_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r158);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r159.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_69_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r158);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r160.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DELMESSAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function DimensionsSetupComponent_kendo_dialog_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function DimensionsSetupComponent_kendo_dialog_70_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r162);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r161.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_70_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r162);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r163.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_70_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r162);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r164.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_70_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r162);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r165.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function DimensionsSetupComponent_kendo_dialog_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function DimensionsSetupComponent_kendo_dialog_71_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r167);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r166.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_71_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r167);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r168.bmlfdialogDeleteLineAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_71_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r167);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r169.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DEL_LINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function DimensionsSetupComponent_app_custom_lookup_modal_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-custom-lookup-modal", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("saveLookupField", function DimensionsSetupComponent_app_custom_lookup_modal_73_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r171);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r170.bmlfSaveLookupField($event));
    })("closeLookup", function DimensionsSetupComponent_app_custom_lookup_modal_73_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r171);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r172.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("keyData", ctx_r7.mobjLookupKeyData);
  }
}
function DimensionsSetupComponent_app_common_task_modal_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-common-task-modal", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeTaskModal", function DimensionsSetupComponent_app_common_task_modal_74_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r174);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r173.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("taskData", ctx_r8.mobjTaskData);
  }
}
function DimensionsSetupComponent_app_esignature_from_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-esignature-from", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("action", function DimensionsSetupComponent_app_esignature_from_75_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r176);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r175.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("data", ctx_r9.mobjSignatureData);
  }
}
function DimensionsSetupComponent_kendo_dialog_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function DimensionsSetupComponent_kendo_dialog_76_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r178);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r177.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_76_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r178);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r179.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_kendo_dialog_76_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r178);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r180.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
class DimensionsSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'Dimensions Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.autoCorrect = true;
    this.msFormMode = "I";
    this.msMultiDimKeyDescription = "";
    /**---Object Initialize---- */
    this.mobjModel = new _models_dimensions_setup_model__WEBPACK_IMPORTED_MODULE_3__.DimensionsSetupModel();
    this.mObjModelGrid1 = new _models_dimensions_setup_model__WEBPACK_IMPORTED_MODULE_3__.DimensionsSetupModel();
    this.mobjUserData = {};
    //public mnumDeleteLineIndex: number;
    this.miGridDeleteLineIndex = 0;
    //public mbDeleteLineItemDialog: boolean = false;
    this.mbdeleteLineItem = false;
    this.mbShowDeleteDialog = false;
    this.msLookupField = "";
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    this.msCloseActionModalName = "";
    this.mbSaveDialogView = false;
    this.mbIsSearchMode = false;
    this.mbIsAddMode = false;
    this.mbIsCopyMode = false;
    this.mbIsDeleteMode = false;
    this.mbIsCloseMode = false;
    this.msCopyRecord = "N";
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mArrMultiDimensionGrid1Col = _constant_dimensions_setup_const__WEBPACK_IMPORTED_MODULE_4__.DimensionsSetupConstants.garrLineGridCol.map(ele => Object.assign({}, ele));
    this.mArrMultiDimensionGroupGrid = []; //values
  }

  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.mobjSignatureData = {
      scrrenName: this.msScreenName,
      reasonMinLength: 10,
      reqSignAuth: 2,
      date: moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase()),
      userName: this.mobjUserData.UserId
    };
    //this.bmlfCheckEsignApplicableOnForm();
  }
  //--------------------------------------------------------------------------------------
  DimensionSetupDetail() {
    this.mbIsLoading = true;
    this.mArrMultiDimensionGroupGrid = [];
    let pobjJData = {
      JSON: JSON.stringify({
        Response: [{
          "MultiDimKey": this.msMultiDimKeyDescription,
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetDimensionSetupDetail(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        if (res.HeaderData.length > 0) {
          this.mArrMultiDimensionGroupGrid = res.HeaderData;
          // let parrGridData = res.HeaderData;
          // parrGridData.forEach(ele => {
          //     const pobjDataCopy: any = Object.assign({}, this.mObjModelGrid1);
          //      pobjDataCopy.Active = ele.Active;
          //      pobjDataCopy.SeqNum = ele.SeqNum;
          //      pobjDataCopy.DimensionID = ele.DimensionID;
          //      pobjDataCopy.DimensionDesc = ele.DimensionDesc;
          //     ele.RecDate = new Date(ele.RecDate);
          //     this.mArrMultiDimensionGroupGrid.push(pobjDataCopy)
          // })
        }

        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfSaveData() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.mArrMultiDimensionGroupGrid.length == 0) {
      return;
    }
    if (this.mbIsChangeData == false) {
      return;
    }
    if (!this.bmlfValidateAllData()) {
      return;
    }
    let parrDataList = this.mArrMultiDimensionGroupGrid.map(x => Object.assign({}, x));
    parrDataList.map(ele => {
      ele.MultiDimKey = this.msMultiDimKeyDescription;
    });
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrDataList,
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonSaveDimensionSetupDetail(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
        if (this.mbIsCloseMode == true) {
          this.mbIsChangeData = false;
          this.mbIsCloseMode = false;
          this.bmlfCloseForm();
        } else {
          this.DimensionSetupDetail();
        }
      }
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfValidateAllData() {
    let pbResult = true;
    if (this.msMultiDimKeyDescription == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.msMultiDimKeyDescription)) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.DIMENSIONCHK'));
      pbResult = false;
    }
    this.mArrMultiDimensionGroupGrid.forEach(ele => {
      if (ele.Active == true && ele.DimensionID == '') {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.ROWCHECK') + ele.SeqNum);
        pbResult = false;
      }
    });
    return pbResult;
  }
  //--------------------------------------------------------------------------------------
  bmlfNgGrid1Changes(rowIndex, itemField) {
    this.mbIsChangeData = true;
    let fieldID;
    fieldID = 'txt' + itemField + rowIndex;
    if (this.mArrMultiDimensionGroupGrid[rowIndex]['DimensionID'] == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mArrMultiDimensionGroupGrid[rowIndex]['DimensionID']) && itemField != "Active") {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.DIMENSIONIDCHK') + this.mArrMultiDimensionGroupGrid[rowIndex]['SeqNum']);
      document.getElementById(fieldID).focus();
      return false;
    } else {
      //DimensionID already Exist
      let piIDCount = 0;
      this.mArrMultiDimensionGroupGrid.forEach(ele => {
        if (ele.DimensionID == this.mArrMultiDimensionGroupGrid[rowIndex]['DimensionID']) {
          piIDCount = piIDCount + 1;
        }
      });
      if (piIDCount > 1) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.DIMENSIONIDEXISTCHK'));
        document.getElementById(fieldID).focus();
        return false;
      }
    }
    if (this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'] == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'])) {
      this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'] = 'M';
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  //--------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------
  bmlfOnGlobalFocus(field, value) {
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  //---------------------------------------------------------------------------------------
  bmlfAddLineValidation() {
    let pbResult = true;
    this.mArrMultiDimensionGroupGrid.forEach(ele => {
      if (ele.Active == true && ele.DimensionID == '') {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.ROWCHECK') + ele.SeqNum);
        pbResult = false;
      }
    });
    return pbResult;
  }
  //--------------------------------------------------------------------------------------
  bmlfonAddLineGrid() {
    debugger;
    if (this.bmlfAddLineValidation() == true) {
      if (!this.utilService.mbWrite) {
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
        return false;
      }
      let pRowIndex = 1;
      if (this.mArrMultiDimensionGroupGrid.length > 0) {
        //pRowIndex = this.mArrMultiDimensionGroupGrid.length + 1;
        pRowIndex = this.mArrMultiDimensionGroupGrid[this.mArrMultiDimensionGroupGrid.length - 1].SeqNum + 1;
      } else {
        pRowIndex = 1;
      }
      //let RowNumber: number = Number(rowIndex) + 1;
      const pobjDataCopy = Object.assign({}, this.mobjModel);
      if (this.mArrMultiDimensionGroupGrid.length > 0) {
        // this.mArrMultiDimensionGroupGrid.unshift(pobjDataCopy);
        pobjDataCopy.Flag = 'A';
        pobjDataCopy.SeqNum = pRowIndex;
        //this.mArrMultiDimensionGroupGrid[pRowIndex]['Flag'] = 'A';
        //this.mArrMultiDimensionGroupGrid[pRowIndex]['SeqNum'] = pRowIndex;
        this.mArrMultiDimensionGroupGrid.push(pobjDataCopy);
      } else {
        pobjDataCopy.Flag = 'A';
        pobjDataCopy.SeqNum = pRowIndex;
        //this.mArrMultiDimensionGroupGrid[pRowIndex]['Flag'] = 'A';
        //this.mArrMultiDimensionGroupGrid[pRowIndex]['SeqNum'] = pRowIndex;
        this.mArrMultiDimensionGroupGrid.push(pobjDataCopy);
      }
      this.mbIsChangeData = true;
    }
  }
  //---------------------------------------------------------------------------------------
  bmlfonDeleteLineItem(rowIndex) {
    debugger;
    if (!this.utilService.mbDelete) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      return;
    }
    ;
    this.miGridDeleteLineIndex = rowIndex;
    this.mbdeleteLineItem = true;
  }
  //---------------------------------------------------------------------------------------
  bmlfdialogDeleteLineAction(action) {
    if (action == 'Yes') {
      this.mbdeleteLineItem = false;
      let psFlag = this.mArrMultiDimensionGroupGrid[this.miGridDeleteLineIndex].Flag;
      if (psFlag == "A") {
        this.mArrMultiDimensionGroupGrid.splice(this.miGridDeleteLineIndex, 1);
        // let pnumRowIdx: number = 1;
        // this.mArrMultiDimensionGroupGrid.forEach(ele => {
        //    ele.SeqNum = pnumRowIdx;
        //    pnumRowIdx = pnumRowIdx +1;
        // });
        //this.bmlfResequenceSeqNo();
        return;
      }
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            MultiDimKey: this.mArrMultiDimensionGroupGrid[this.miGridDeleteLineIndex].MultiDimKey,
            DimensionID: this.mArrMultiDimensionGroupGrid[this.miGridDeleteLineIndex].DimensionID
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfonDeleteDimensionSetupDetail(reqData).subscribe(res => {
        if (res == null) {
          return;
        }
        if (res.Response[0].ErrorCode != "") {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else if (this.utilService.bmgffindString(res.Response[0].ResponseText, 'EXIST')) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
          //this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.EXIST'));
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.LINEDELETE'));
          this.mArrMultiDimensionGroupGrid.splice(this.miGridDeleteLineIndex, 1);
          //this.bmlfResequenceSeqNo();
          //this.DimensionSetupDetail();
        }
      });
    }

    if (action == 'No') {
      this.mbdeleteLineItem = false;
    }
  }
  //----------------------------------------------------------------------------------------------
  bmlfResequenceSeqNo() {
    let pnumRowIdx = 1;
    this.mArrMultiDimensionGroupGrid.forEach(ele => {
      ele.SeqNum = pnumRowIdx;
      pnumRowIdx = pnumRowIdx + 1;
    });
  }
  //----------------------------------------------------------------------------------------------
  /**--------Start: Lookup Functionality----- */
  // LOOKUP MODAL 
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.bmlfcleanDescription(psField, psValue);
      this.mobjModel[psField] = "";
      this.mbIsLoading = false;
      return false;
    }
    let psReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookUpKey,
      Filter1: "",
      Filter2: "",
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
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase());
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
    if (pobjEvent.type == 'custom') {}
    if (pobjEvent.field == "MultiDimKey") {
      this.mobjModel.MultiDimKey = pobjEvent.valueKey.trim();
      this.msMultiDimKeyDescription = pobjEvent.value["DimensionKey"].trim();
      this.mbIsChangeData = true;
      this.DimensionSetupDetail();
    }
  }
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    document.getElementById(pobjEvent.eleId).focus();
  }
  //-----------------------------------------------------------------------------------    
  // Clean Description
  bmlfcleanDescription(eleId, value) {
    if (this.bmlfIsEmpty(value)) {
      if (eleId == "MultiDimKey") {
        this.msMultiDimKeyDescription = '';
      }
    }
  }
  //-----------------------------------------------------------------------------------    
  bmlfIsEmpty(value) {
    return typeof value === "undefined" || value === null || value === '';
  }
  /**--------End: Lookup Functionality----- */
  //--------------------------------------------------------------------------------------
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  //--------------------------------------------------------------------------------------
  // bmlfonAssignCustValues(custom) {
  //     this.mobjModel.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : "";
  //     this.mobjModel.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : "";
  //     this.mobjModel.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : "";
  //     this.mobjModel.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : "";
  //     this.mobjModel.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : "";
  //     this.mobjModel.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : "";
  //     this.mobjModel.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : "";
  //     this.mobjModel.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : "";
  //     this.mobjModel.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : "";
  //     this.mobjModel.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : "";
  //     this.mobjModel.User1 = custom.User1 ? custom.User1 : "";
  //     this.mobjModel.User2 = custom.User2 ? custom.User2 : "";
  //     this.mobjModel.User3 = custom.User3 ? custom.User3 : "";
  //     this.mobjModel.User4 = custom.User4 ? custom.User4 : "";
  //     this.mobjModel.User5 = custom.User5 ? custom.User5 : "";
  //     this.mobjModel.User6 = custom.User6 ? custom.User6 : "";
  //     this.mobjModel.User7 = custom.User7 ? custom.User7 : "";
  //     this.mobjModel.User8 = custom.User8 ? custom.User8 : "";
  //     this.mobjModel.User9 = custom.User9 ? custom.User9 : "";
  //     this.mobjModel.User10 = custom.User10 ? custom.User10 : "";
  //     this.mobjModel.User11 = custom.User11 ? custom.User11 : "";
  //     this.mobjModel.User12 = custom.User12 ? custom.User12 : "";
  // }
  //--------------------------------------------------------------------------------------
  // bmlfSubmitData(pbClose: boolean = false): void {
  //     if (!this.utilService.mbWrite) {
  //         this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
  //         return;
  //     };
  //     if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.customCtrl.mbChange != true && (this.msFormMode == 'U')) {
  //         return;
  //     }
  //     if (!this.bmlfValidData()) {
  //         return;
  //     }
  //     //Validate Field Extender -- Start
  //     let resultString = this.FieldExtender.bmgfValidationCheck();
  //     if (resultString.value == false) {
  //         this.toastMessageService.notifyError(resultString.msg);
  //         return;
  //     }
  //     if (this.mbIsEsignature) {
  //         this.bmlfopenESignatureModal();
  //         return;
  //     }
  //     //Customization
  //     let data = this.utilService.bmgfCustomModelTransform(this.customCtrl);
  //     this.bmlfonAssignCustValues(data)
  //     this.bmlfSaveDepartmentData();
  // }
  //--------------------------------------------------------------------------------------
  // bmlfSaveDepartmentData(): void {
  //     this.mbIsLoading = true;
  //     let parrHeaderData = [];
  //     this.mobjModel.Recuserid = this.mobjUserData.UserId;
  //     parrHeaderData.push(Object.assign({}, this.mobjModel));
  //     let pobjJData = {
  //         HeaderData: parrHeaderData,
  //         Response: [{
  //             "ResponseText": "",
  //             "ErrorCode": ""
  //         }]
  //     };
  //     let pobjJson = {
  //         JSON: JSON.stringify(pobjJData)
  //     };
  //     this.formService.bmlfSaveDepartmentMaster(pobjJson, this.msFormMode).subscribe(
  //         res => {
  //             this.mbIsLoading = false;
  //             if (res.Response[0].ErrorCode == "") {
  //                 this.FieldExtender.mbChange = false;
  //                 this.customCtrl.mbChange = false;
  //                 this.mbIsChangeData = false;
  //                 if (this.msFormMode == "I") {
  //                     this.msFormMode = "U";
  //                     this.msCopyRecord = "N";
  //                     this.mobjModel.DepartmentID = res.HeaderData[0].DepartmentID;
  //                     this.msDepartmentID = this.mobjModel.DepartmentID;
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
  //                 } else if (this.msFormMode == "U") {
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.EDIT"));
  //                 }
  //                 // FieldExtender -- start update
  //                 let screenKeyValue = this.msScreenName + " — " + this.msDepartmentID;
  //                 let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
  //                 if (jsonData.length > 0) {
  //                     this.FieldExtender.bmlfCallApi(jsonData).then(res => {
  //                         if (res != null) { }
  //                     });
  //                 };
  //                 // FieldExtender -- End update
  //                 if (this.mbIsSearchMode) {
  //                     this.mbIsSearchMode = false;
  //                     this.bmlfOpenLookupModal('DepartmentMasterList', this.msScreenName, 'DepartmentMasterList', 'click', '', 'custom', 'cmdSearch', 'DEPARTMENTMASTER.TITLE');
  //                 } else if (this.mbIsAddMode) {
  //                     this.mbIsAddMode = false;
  //                     this.bmlfRefreshForm();
  //                 } else if (this.mbIsCopyMode) {
  //                     this.mbIsCopyMode = false;
  //                     this.bmlfCopyData();
  //                 } else if (this.mbIsCloseMode) {
  //                     this.mbIsCloseMode = false;
  //                     this.router.navigate(["/main/purchase/departmentmaster"]);
  //                 } else {
  //                     this.bmlfGetDepartmentData();
  //                 }
  //             } else {
  //                 this.mbIsSearchMode = false;
  //                 this.mbIsAddMode = false;
  //                 this.mbIsCopyMode = false;
  //                 this.mbIsDeleteMode = false;
  //                 this.mbIsCloseMode = false;
  //                 this.toastMessageService.notifyError(res.Response[0].ResponseText)
  //             }
  //             console.log(res);
  //         }
  //     ).add(() => { this.mbIsLoading = false; })
  // }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = false;
    }
  }
  // bmlfOnConfirmModal(psype) {
  //     if (psype == 'YES') {
  //         this.bmlfSubmitData();
  //         this.mbSaveDialogView = false;
  //     } else if (psype == 'NO') {
  //         this.mbSaveDialogView = false;
  //         if (this.mbIsSearchMode) {
  //             this.mbIsSearchMode = false;
  //             this.bmlfOpenLookupModal('DepartmentMasterList', this.msScreenName, 'DepartmentMasterList', 'click', '', 'custom', 'cmdSearch', 'DEPARTMENTMASTER.TITLE');
  //         } else if (this.mbIsAddMode) {
  //             this.mbIsAddMode = false;
  //             this.bmlfRefreshForm();
  //         } else if (this.mbIsCopyMode) {
  //             this.mbIsCopyMode = false;
  //             this.bmlfCopyData();
  //         } else if (this.mbIsDeleteMode) {
  //             this.mbIsDeleteMode = false;
  //             this.mbShowDeleteDialog = true;
  //         }
  //         else {
  //             this.router.navigate(['/main/purchase/departmentmaster']);
  //         }
  //     } else {
  //         this.mbSaveDialogView = false;
  //         this.mbIsSearchMode = false;
  //         this.mbIsCopyMode = false;
  //         this.mbIsAddMode = false;
  //         this.mbIsCloseMode = false;
  //     }
  // }
  //--------------------------------------------------------------------------------------
  // // Delete Sales Order Dialog events
  // bmlfonDialogAction(psAction) {
  //     if (psAction == 'No') {
  //         this.mbShowDeleteDialog = false;
  //     } else if (psAction == 'Yes') {
  //         if (this.msFormMode == "I") {
  //             this.bmlfRefreshForm();
  //             return false;
  //         }
  //         let parrHeaderData = [];
  //         parrHeaderData = [{ DepartmentID: this.mobjModel.DepartmentID }]
  //         let reqData: any = {
  //             JSON: JSON.stringify({
  //                 ParaData: parrHeaderData,
  //                 Response: [{
  //                     "ResponseText": "", "ErrorCode": ""
  //                 }]
  //             })
  //         };
  //         this.formService.bmlfDeleteDepartmentMaster(reqData).subscribe(res => {
  //             if (res == null) {
  //                 this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
  //                 return false;
  //             }
  //             if (res.Response[0].ErrorCode == "") {
  //                 {
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.DELETE'));
  //                     this.mbShowDeleteDialog = false;
  //                     let deleteKey = this.msScreenName + " — " + this.msDepartmentID;
  //                     this.FieldExtender.bmgfDeleteData(deleteKey);
  //                     //this.bmlfRefreshForm();
  //                 }
  //             } else {
  //                 this.toastMessageService.notifyError(res.Response[0].ResponseText);
  //                 this.mbShowDeleteDialog = false;
  //             }
  //         })
  //     }
  // }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Dimensions Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function DimensionsSetupComponent_Factory(t) {
    return new (t || DimensionsSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_http_dimensions_setup_service__WEBPACK_IMPORTED_MODULE_5__.DimensionsSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: DimensionsSetupComponent,
    selectors: [["app-dimensions-setup"]],
    viewQuery: function DimensionsSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 77,
    vars: 39,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "name", "MultiDimKey", "id", "txtMultiDimKey", "tabindex", "2", 1, "form-control", 3, "ngModel", "ngModelChange", "blur", "change", "focus"], ["id", "cmdMultiDimKeyLookup", 1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [1, "col-md-12"], ["type", "text", "id", "txtMultiDimKeyDesc", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], [1, "row", "rowheight100p"], ["id", "kendodiv", 1, "col-md-12", "height100p", "full-height-grid", "form-container"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "data-target", "dtLineGrid1", "id", "cmdAddLineItem", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "click"], ["id", "dtMultiDimensionGrid1", 1, "custom_h_grid", "max_scroll", "low_space_table", 3, "kendoGridBinding", "resizable"], ["grid", "kendoGrid"], [3, "noRecords"], ["media", "(max-width: 767px)"], ["kendoGridCellTemplate", ""], ["media", "(min-width: 768px)", 3, "field", "title", "width", "hidden", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "Kendo_dialog_msg", "style", "z-index: 10000000;", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "grid-icon-sec"], [3, "id", "click"], [1, "fa", "fa-trash-o"], [1, "form-group", "custom-inline-input"], ["type", "text", "maxlength", "50", "disabled", "", "hidden", "true", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange"], ["type", "text", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "disabled", "ngModelChange", "change"], ["type", "text", "maxlength", "100", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], ["media", "(min-width: 768px)", 3, "field", "title", "width", "hidden"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange", "change"], ["type", "text", "maxlength", "50", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange"], ["type", "text", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "disabled", "ngModelChange", "blur"], ["type", "text", "maxlength", "100", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "blur"], [1, "form-group"], [1, "form-control", 3, "format", "ngModel", "ngModelChange", "valueChange"], ["type", "text", "appIntegerNumber", "true", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "appDecimaNumber", "", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "Precision", "ngModelChange", "change"], ["type", "text", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "ngModelChange", "change"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoDelAction", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], ["id", "Kendo_dialog_msg", 2, "z-index", "10000000", 3, "minWidth", "width", "close"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function DimensionsSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, DimensionsSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 18)(30, "section", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "div", 26)(40, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.mobjModel.MultiDimKey = $event;
        })("blur", function DimensionsSetupComponent_Template_input_blur_40_listener() {
          return ctx.bmlfOpenLookupModal("MultiDimKey", ctx.msScreenName, "DimensionId", "blur", ctx.mobjModel.MultiDimKey, "custom", "txtMultiDimKey", "DIMENSIONSSETUP.MULTIDIMENSION");
        })("change", function DimensionsSetupComponent_Template_input_change_40_listener() {
          return ctx.bmlfOnFormFieldChange();
        })("focus", function DimensionsSetupComponent_Template_input_focus_40_listener() {
          return ctx.bmlfOnGlobalFocus("MultiDimKey", ctx.mobjModel.MultiDimKey);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_span_click_41_listener() {
          return ctx.bmlfOpenLookupModal("MultiDimKey", ctx.msScreenName, "DimensionId", "click", ctx.mobjModel.MultiDimKey, "custom", "txtMultiDimKey", "DIMENSIONSSETUP.MULTIDIMENSION");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](42, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 30)(46, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function DimensionsSetupComponent_Template_input_ngModelChange_46_listener($event) {
          return ctx.msMultiDimKeyDescription = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "div", 32)(49, "div", 33)(50, "div", 34)(51, "div", 35)(52, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_button_click_52_listener() {
          return ctx.bmlfonAddLineGrid();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "kendo-grid", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](57, "kendo-grid-messages", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](59, "kendo-grid-column", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](60, DimensionsSetupComponent_ng_template_60_Template, 2, 1, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](61, DimensionsSetupComponent_kendo_grid_column_61_Template, 13, 17, "kendo-grid-column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "div", 43)(63, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_button_click_63_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](66, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function DimensionsSetupComponent_Template_button_click_66_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](69, DimensionsSetupComponent_kendo_dialog_69_Template, 16, 14, "kendo-dialog", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](70, DimensionsSetupComponent_kendo_dialog_70_Template, 19, 15, "kendo-dialog", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](71, DimensionsSetupComponent_kendo_dialog_71_Template, 16, 14, "kendo-dialog", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](72, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](73, DimensionsSetupComponent_app_custom_lookup_modal_73_Template, 1, 1, "app-custom-lookup-modal", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](74, DimensionsSetupComponent_app_common_task_modal_74_Template, 1, 1, "app-common-task-modal", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](75, DimensionsSetupComponent_app_esignature_from_75_Template, 1, 1, "app-esignature-from", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](76, DimensionsSetupComponent_kendo_dialog_76_Template, 16, 12, "kendo-dialog", 53);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 23, "DIMENSIONSSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 25, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 27, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](38, 29, "DIMENSIONSSETUP.MULTIDIMKEY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.mobjModel.MultiDimKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.msMultiDimKeyDescription)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](54, 31, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("kendoGridBinding", ctx.mArrMultiDimensionGroupGrid)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](58, 33, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.mArrMultiDimensionGrid1Col);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](65, 35, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](68, 37, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_directives_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__.DecimaNumberDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__.LoaderComponent, _shared_directives_integer_number_directive__WEBPACK_IMPORTED_MODULE_15__.IntegerNumberDirective, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_16__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_17__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogActionsComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DatePickerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.TimePickerComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 33141:
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/multi-dimensional-setup/multi-dimensional-setup.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDimensionalSetupComponent: () => (/* binding */ MultiDimensionalSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_multi_dimensional_setup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/multi-dimensional-setup.model */ 6816);
/* harmony import */ var _constant_multi_dimensional_setup_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/multi-dimensional-setup.const */ 88344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_multi_dimensional_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/multi-dimensional-setup.service */ 92160);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_directives_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/directives/decima-number.directive */ 93545);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_directives_integer_number_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/directives/integer-number.directive */ 67776);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 21916);




























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function MultiDimensionalSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader");
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_dt_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "MULTIDIMENSIONALSETUP." + item_r13.Title));
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 38)(2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r21.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r13.Field, "", rowIndex_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r17.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field])("name", rowIndex_r11 + "_" + item_r13.Field);
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 38)(2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r27.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_5_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).rowIndex;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.bmlfNgGrid1Changes(rowIndex_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r13.Field, "", rowIndex_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r18.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field])("name", rowIndex_r11 + "_" + item_r13.Field);
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 41)(2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r36);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r35.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().rowIndex;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r13.Field, "", rowIndex_r11, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r19.mArrMultiDimensionGroupGrid[rowIndex_r11][item_r13.Field])("name", rowIndex_r11 + "_" + item_r13.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "txt", item_r13.Field, "", rowIndex_r11, "A");
  }
}
function MultiDimensionalSetupComponent_ng_template_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MultiDimensionalSetupComponent_ng_template_37_div_1_dt_1_Template, 3, 3, "dt", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_3_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_4_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_5_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MultiDimensionalSetupComponent_ng_template_37_div_1_ng_container_6_Template, 4, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r13.Field != "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r13.Type == "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r13.Type == "textReadOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r13.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r13.Type == "checkbox");
  }
}
function MultiDimensionalSetupComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MultiDimensionalSetupComponent_ng_template_37_div_1_Template, 7, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.mArrMultiDimensionGrid1Col);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 41)(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_2_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const rowIndex_r53 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r54.mArrMultiDimensionGroupGrid[rowIndex_r53][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_2_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r55);
      const rowIndex_r53 = restoredCtx.rowIndex;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r57.bmlfNgGrid1Changes(rowIndex_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r53 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r41.Field, "", rowIndex_r53, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r51.mArrMultiDimensionGroupGrid[rowIndex_r53][item_r41.Field])("name", rowIndex_r53 + "_" + item_r41.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("for", "txt", item_r41.Field, "", rowIndex_r53, "A");
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_2_ng_template_0_Template, 3, 6, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 38)(1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_3_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63);
      const rowIndex_r61 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r62.mArrMultiDimensionGroupGrid[rowIndex_r61][item_r41.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r61 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r41.Field, "", rowIndex_r61, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r59.mArrMultiDimensionGroupGrid[rowIndex_r61][item_r41.Field])("name", rowIndex_r61 + "_" + item_r41.Field);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_3_ng_template_0_Template, 2, 4, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 38)(1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_4_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const rowIndex_r68 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r69.mArrMultiDimensionGroupGrid[rowIndex_r68][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_4_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const rowIndex_r68 = restoredCtx.rowIndex;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r72.bmlfNgGrid1Changes(rowIndex_r68));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r68 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("id", "txt", item_r41.Field, "", rowIndex_r68, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r66.mArrMultiDimensionGroupGrid[rowIndex_r68][item_r41.Field])("name", rowIndex_r68 + "_" + item_r41.Field);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_4_ng_template_0_Template, 2, 4, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "kendo-datepicker", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_5_ng_template_0_Template_kendo_datepicker_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r78);
      const rowIndex_r76 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r77.mArrMultiDimensionGroupGrid[rowIndex_r76][item_r41.Field] = $event);
    })("valueChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_5_ng_template_0_Template_kendo_datepicker_valueChange_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r78);
      const rowIndex_r76 = restoredCtx.rowIndex;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r80.bmlfNgChanges(rowIndex_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r76 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", ctx_r74.msCustomDateFormat)("ngModel", ctx_r74.mArrMultiDimensionGroupGrid[rowIndex_r76][item_r41.Field]);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_5_ng_template_0_Template, 2, 2, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "kendo-timepicker", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_6_ng_template_0_Template_kendo_timepicker_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r86);
      const rowIndex_r84 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r85.mArrMultiDimensionGroupGrid[rowIndex_r84][item_r41.Field] = $event);
    })("valueChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_6_ng_template_0_Template_kendo_timepicker_valueChange_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r86);
      const rowIndex_r84 = restoredCtx.rowIndex;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r88.bmlfNgChanges(rowIndex_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r84 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("format", "hh:mm a")("ngModel", ctx_r82.mArrMultiDimensionGroupGrid[rowIndex_r84][item_r41.Field]);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_6_ng_template_0_Template, 2, 2, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_7_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const rowIndex_r92 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r93.mArrMultiDimensionGroupGrid[rowIndex_r92][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_7_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const rowIndex_r92 = restoredCtx.rowIndex;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r96.bmlfNgChanges(rowIndex_r92));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r92 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r90.mArrMultiDimensionGroupGrid[rowIndex_r92][item_r41.Field]);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_7_ng_template_0_Template, 2, 1, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_8_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r102);
      const rowIndex_r100 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r101.mArrMultiDimensionGroupGrid[rowIndex_r100][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_8_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r102);
      const rowIndex_r100 = restoredCtx.rowIndex;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r104.bmlfNgChanges(rowIndex_r100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r100 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r98.mArrMultiDimensionGroupGrid[rowIndex_r100][item_r41.Field])("Precision", 6);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_8_ng_template_0_Template, 2, 2, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_9_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r110);
      const rowIndex_r108 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r109.mArrMultiDimensionGroupGrid[rowIndex_r108][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_9_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r110);
      const rowIndex_r108 = restoredCtx.rowIndex;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r112.bmlfNgChanges(rowIndex_r108));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r108 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r106.mArrMultiDimensionGroupGrid[rowIndex_r108][item_r41.Field])("Precision", 6);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_9_ng_template_0_Template, 2, 2, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 46)(1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function MultiDimensionalSetupComponent_kendo_grid_column_38_10_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r118);
      const rowIndex_r116 = restoredCtx.rowIndex;
      const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r117.mArrMultiDimensionGroupGrid[rowIndex_r116][item_r41.Field] = $event);
    })("change", function MultiDimensionalSetupComponent_kendo_grid_column_38_10_ng_template_0_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r118);
      const rowIndex_r116 = restoredCtx.rowIndex;
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r120.bmlfNgChanges(rowIndex_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r116 = ctx.rowIndex;
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r114.mArrMultiDimensionGroupGrid[rowIndex_r116][item_r41.Field]);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_kendo_grid_column_38_10_ng_template_0_Template, 2, 1, "ng-template", 25);
  }
}
function MultiDimensionalSetupComponent_kendo_grid_column_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-grid-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MultiDimensionalSetupComponent_kendo_grid_column_38_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, MultiDimensionalSetupComponent_kendo_grid_column_38_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, MultiDimensionalSetupComponent_kendo_grid_column_38_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, MultiDimensionalSetupComponent_kendo_grid_column_38_5_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MultiDimensionalSetupComponent_kendo_grid_column_38_6_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, MultiDimensionalSetupComponent_kendo_grid_column_38_7_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MultiDimensionalSetupComponent_kendo_grid_column_38_8_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, MultiDimensionalSetupComponent_kendo_grid_column_38_9_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, MultiDimensionalSetupComponent_kendo_grid_column_38_10_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("field", item_r41.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", item_r41.Field.startsWith("User") || item_r41.Field.includes("CUSTOM") ? item_r41.Title : _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 13, "MULTIDIMENSIONALSETUP." + item_r41.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("width", item_r41.Field == "SeqNum" || item_r41.Field == "Active" ? "20" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hidden", !item_r41.Display);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "textReadOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "DateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "Integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "Float");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "Decimal(22,6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r41.Type == "AlphaNumeric");
  }
}
function MultiDimensionalSetupComponent_kendo_dialog_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function MultiDimensionalSetupComponent_kendo_dialog_46_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r122.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_46_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r123);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r124.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_46_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r123);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r125.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DELMESSAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function MultiDimensionalSetupComponent_kendo_dialog_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function MultiDimensionalSetupComponent_kendo_dialog_47_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r127);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r126.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_47_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r127);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r128.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_47_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r127);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r129.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_47_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r127);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r130.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function MultiDimensionalSetupComponent_app_custom_lookup_modal_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-custom-lookup-modal", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("saveLookupField", function MultiDimensionalSetupComponent_app_custom_lookup_modal_49_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r131.bmlfSaveLookupField($event));
    })("closeLookup", function MultiDimensionalSetupComponent_app_custom_lookup_modal_49_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r133.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function MultiDimensionalSetupComponent_app_common_task_modal_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-common-task-modal", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeTaskModal", function MultiDimensionalSetupComponent_app_common_task_modal_50_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r135);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r134.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
function MultiDimensionalSetupComponent_app_esignature_from_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-esignature-from", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("action", function MultiDimensionalSetupComponent_app_esignature_from_51_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r136.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("data", ctx_r8.mobjSignatureData);
  }
}
function MultiDimensionalSetupComponent_kendo_dialog_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function MultiDimensionalSetupComponent_kendo_dialog_52_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r139);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r138.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_52_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r139);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r140.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_kendo_dialog_52_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r139);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r141.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
class MultiDimensionalSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'Multi-Dimensional Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.autoCorrect = true;
    this.msFormMode = "I";
    /**---Object Initialize---- */
    this.mobjModel = new _models_multi_dimensional_setup_model__WEBPACK_IMPORTED_MODULE_3__.MultiDimensionalSetupModel();
    this.mObjModelGrid1 = new _models_multi_dimensional_setup_model__WEBPACK_IMPORTED_MODULE_3__.MultiDimensionalSetupModel();
    this.mobjUserData = {};
    this.mbDeleteLineItemDialog = false;
    this.mbShowDeleteDialog = false;
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    this.msCloseActionModalName = "";
    this.mbSaveDialogView = false;
    this.mbIsSearchMode = false;
    this.mbIsAddMode = false;
    this.mbIsCopyMode = false;
    this.mbIsDeleteMode = false;
    this.mbIsCloseMode = false;
    this.msCopyRecord = "N";
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mArrMultiDimensionGrid1Col = _constant_multi_dimensional_setup_const__WEBPACK_IMPORTED_MODULE_4__.MultiDimensionalSetupConstants.garrLineGridCol.map(ele => Object.assign({}, ele));
    this.mArrMultiDimensionGroupGrid = []; //values
  }

  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfGetMultiDimensionSetup();
    this.mobjSignatureData = {
      scrrenName: this.msScreenName,
      reasonMinLength: 10,
      reqSignAuth: 2,
      date: moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase()),
      userName: this.mobjUserData.UserId
    };
    //this.bmlfCheckEsignApplicableOnForm();
  }
  //--------------------------------------------------------------------------------------
  bmlfGetMultiDimensionSetup() {
    this.mbIsLoading = true;
    this.mArrMultiDimensionGroupGrid = [];
    let pobjJData = {
      JSON: JSON.stringify({
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetMultiDimensionSetup(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        if (res.HeaderData.length > 0) {
          this.mArrMultiDimensionGroupGrid = res.HeaderData;
        }
        // let parrGridData = res.HeaderData;
        // parrGridData.forEach(ele => {
        //     const pobjDataCopy: any = Object.assign({}, this.mObjModelGrid1);
        //     pobjDataCopy.Active = ele.Active;
        //     pobjDataCopy.SeqNum = ele.SeqNum;
        //     pobjDataCopy.DimensionKey = ele.DimensionKey;
        //     pobjDataCopy.DimensionDesc = ele.DimensionDesc;
        //     //ele.Recdate = new Date(ele.Recdate);
        //     this.mArrMultiDimensionGroupGrid.push(pobjDataCopy)
        // })
        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfSaveData() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.mArrMultiDimensionGroupGrid.length == 0) {
      return;
    }
    if (this.mbIsChangeData == false) {
      return;
    }
    if (!this.bmlfValidateAllData()) {
      return;
    }
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: this.mArrMultiDimensionGroupGrid,
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonSaveMultiDimensionSetup(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
        this.bmlfGetMultiDimensionSetup();
        this.mbIsChangeData = false;
      }
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfValidateAllData() {
    this.mArrMultiDimensionGroupGrid.forEach(ele => {
      if (ele.Active == true && ele.DimensionDesc == '') {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('MULTIDIMENSIONALSETUP.MSG.DESCRIPTIONCHECK') + ele.SeqNum);
        return false;
      }
    });
    return true;
  }
  //--------------------------------------------------------------------------------------
  bmlfNgGrid1Changes(rowIndex) {
    debugger;
    this.mbIsChangeData = true;
    if (this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'] == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'])) {
      this.mArrMultiDimensionGroupGrid[rowIndex]['Flag'] = 'M';
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  //--------------------------------------------------------------------------------------
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  //--------------------------------------------------------------------------------------
  bmlfonAssignCustValues(custom) {
    this.mobjModel.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : "";
    this.mobjModel.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : "";
    this.mobjModel.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : "";
    this.mobjModel.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : "";
    this.mobjModel.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : "";
    this.mobjModel.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : "";
    this.mobjModel.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : "";
    this.mobjModel.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : "";
    this.mobjModel.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : "";
    this.mobjModel.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : "";
    this.mobjModel.User1 = custom.User1 ? custom.User1 : "";
    this.mobjModel.User2 = custom.User2 ? custom.User2 : "";
    this.mobjModel.User3 = custom.User3 ? custom.User3 : "";
    this.mobjModel.User4 = custom.User4 ? custom.User4 : "";
    this.mobjModel.User5 = custom.User5 ? custom.User5 : "";
    this.mobjModel.User6 = custom.User6 ? custom.User6 : "";
    this.mobjModel.User7 = custom.User7 ? custom.User7 : "";
    this.mobjModel.User8 = custom.User8 ? custom.User8 : "";
    this.mobjModel.User9 = custom.User9 ? custom.User9 : "";
    this.mobjModel.User10 = custom.User10 ? custom.User10 : "";
    this.mobjModel.User11 = custom.User11 ? custom.User11 : "";
    this.mobjModel.User12 = custom.User12 ? custom.User12 : "";
  }
  //--------------------------------------------------------------------------------------
  // bmlfSubmitData(pbClose: boolean = false): void {
  //     if (!this.utilService.mbWrite) {
  //         this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
  //         return;
  //     };
  //     if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.customCtrl.mbChange != true && (this.msFormMode == 'U')) {
  //         return;
  //     }
  //     if (!this.bmlfValidData()) {
  //         return;
  //     }
  //     //Validate Field Extender -- Start
  //     let resultString = this.FieldExtender.bmgfValidationCheck();
  //     if (resultString.value == false) {
  //         this.toastMessageService.notifyError(resultString.msg);
  //         return;
  //     }
  //     if (this.mbIsEsignature) {
  //         this.bmlfopenESignatureModal();
  //         return;
  //     }
  //     //Customization
  //     let data = this.utilService.bmgfCustomModelTransform(this.customCtrl);
  //     this.bmlfonAssignCustValues(data)
  //     this.bmlfSaveDepartmentData();
  // }
  //--------------------------------------------------------------------------------------
  // bmlfSaveDepartmentData(): void {
  //     this.mbIsLoading = true;
  //     let parrHeaderData = [];
  //     this.mobjModel.Recuserid = this.mobjUserData.UserId;
  //     parrHeaderData.push(Object.assign({}, this.mobjModel));
  //     let pobjJData = {
  //         HeaderData: parrHeaderData,
  //         Response: [{
  //             "ResponseText": "",
  //             "ErrorCode": ""
  //         }]
  //     };
  //     let pobjJson = {
  //         JSON: JSON.stringify(pobjJData)
  //     };
  //     this.formService.bmlfSaveDepartmentMaster(pobjJson, this.msFormMode).subscribe(
  //         res => {
  //             this.mbIsLoading = false;
  //             if (res.Response[0].ErrorCode == "") {
  //                 this.FieldExtender.mbChange = false;
  //                 this.customCtrl.mbChange = false;
  //                 this.mbIsChangeData = false;
  //                 if (this.msFormMode == "I") {
  //                     this.msFormMode = "U";
  //                     this.msCopyRecord = "N";
  //                     this.mobjModel.DepartmentID = res.HeaderData[0].DepartmentID;
  //                     this.msDepartmentID = this.mobjModel.DepartmentID;
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
  //                 } else if (this.msFormMode == "U") {
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.EDIT"));
  //                 }
  //                 // FieldExtender -- start update
  //                 let screenKeyValue = this.msScreenName + " — " + this.msDepartmentID;
  //                 let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
  //                 if (jsonData.length > 0) {
  //                     this.FieldExtender.bmlfCallApi(jsonData).then(res => {
  //                         if (res != null) { }
  //                     });
  //                 };
  //                 // FieldExtender -- End update
  //                 if (this.mbIsSearchMode) {
  //                     this.mbIsSearchMode = false;
  //                     this.bmlfOpenLookupModal('DepartmentMasterList', this.msScreenName, 'DepartmentMasterList', 'click', '', 'custom', 'cmdSearch', 'DEPARTMENTMASTER.TITLE');
  //                 } else if (this.mbIsAddMode) {
  //                     this.mbIsAddMode = false;
  //                     this.bmlfRefreshForm();
  //                 } else if (this.mbIsCopyMode) {
  //                     this.mbIsCopyMode = false;
  //                     this.bmlfCopyData();
  //                 } else if (this.mbIsCloseMode) {
  //                     this.mbIsCloseMode = false;
  //                     this.router.navigate(["/main/purchase/departmentmaster"]);
  //                 } else {
  //                     this.bmlfGetDepartmentData();
  //                 }
  //             } else {
  //                 this.mbIsSearchMode = false;
  //                 this.mbIsAddMode = false;
  //                 this.mbIsCopyMode = false;
  //                 this.mbIsDeleteMode = false;
  //                 this.mbIsCloseMode = false;
  //                 this.toastMessageService.notifyError(res.Response[0].ResponseText)
  //             }
  //             console.log(res);
  //         }
  //     ).add(() => { this.mbIsLoading = false; })
  // }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
      if (this.mbIsCloseMode == true) {
        this.router.navigate(['/main/dashboard/dashboardpage']);
      }
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = false;
    }
  }
  // bmlfOnConfirmModal(psype) {
  //     if (psype == 'YES') {
  //         this.bmlfSubmitData();
  //         this.mbSaveDialogView = false;
  //     } else if (psype == 'NO') {
  //         this.mbSaveDialogView = false;
  //         if (this.mbIsSearchMode) {
  //             this.mbIsSearchMode = false;
  //             this.bmlfOpenLookupModal('DepartmentMasterList', this.msScreenName, 'DepartmentMasterList', 'click', '', 'custom', 'cmdSearch', 'DEPARTMENTMASTER.TITLE');
  //         } else if (this.mbIsAddMode) {
  //             this.mbIsAddMode = false;
  //             this.bmlfRefreshForm();
  //         } else if (this.mbIsCopyMode) {
  //             this.mbIsCopyMode = false;
  //             this.bmlfCopyData();
  //         } else if (this.mbIsDeleteMode) {
  //             this.mbIsDeleteMode = false;
  //             this.mbShowDeleteDialog = true;
  //         }
  //         else {
  //             this.router.navigate(['/main/purchase/departmentmaster']);
  //         }
  //     } else {
  //         this.mbSaveDialogView = false;
  //         this.mbIsSearchMode = false;
  //         this.mbIsCopyMode = false;
  //         this.mbIsAddMode = false;
  //         this.mbIsCloseMode = false;
  //     }
  // }
  //--------------------------------------------------------------------------------------
  // // Delete Sales Order Dialog events
  // bmlfonDialogAction(psAction) {
  //     if (psAction == 'No') {
  //         this.mbShowDeleteDialog = false;
  //     } else if (psAction == 'Yes') {
  //         if (this.msFormMode == "I") {
  //             this.bmlfRefreshForm();
  //             return false;
  //         }
  //         let parrHeaderData = [];
  //         parrHeaderData = [{ DepartmentID: this.mobjModel.DepartmentID }]
  //         let reqData: any = {
  //             JSON: JSON.stringify({
  //                 ParaData: parrHeaderData,
  //                 Response: [{
  //                     "ResponseText": "", "ErrorCode": ""
  //                 }]
  //             })
  //         };
  //         this.formService.bmlfDeleteDepartmentMaster(reqData).subscribe(res => {
  //             if (res == null) {
  //                 this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
  //                 return false;
  //             }
  //             if (res.Response[0].ErrorCode == "") {
  //                 {
  //                     this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.DELETE'));
  //                     this.mbShowDeleteDialog = false;
  //                     let deleteKey = this.msScreenName + " — " + this.msDepartmentID;
  //                     this.FieldExtender.bmgfDeleteData(deleteKey);
  //                     //this.bmlfRefreshForm();
  //                 }
  //             } else {
  //                 this.toastMessageService.notifyError(res.Response[0].ResponseText);
  //                 this.mbShowDeleteDialog = false;
  //             }
  //         })
  //     }
  // }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Multi Dimensional Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function MultiDimensionalSetupComponent_Factory(t) {
    return new (t || MultiDimensionalSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_http_multi_dimensional_setup_service__WEBPACK_IMPORTED_MODULE_5__.MultiDimensionalSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: MultiDimensionalSetupComponent,
    selectors: [["app-multi-dimensional-setup"]],
    viewQuery: function MultiDimensionalSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 53,
    vars: 29,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "rowheight100p"], ["id", "kendodiv", 1, "col-md-12", "height100p", "full-height-grid", "form-container"], ["id", "dtMultiDimensionGrid1", 1, "custom_h_grid", "max_scroll", "low_space_table", 3, "kendoGridBinding", "resizable"], ["grid", "kendoGrid"], [3, "noRecords"], ["media", "(max-width: 767px)"], ["kendoGridCellTemplate", ""], ["media", "(min-width: 768px)", 3, "field", "title", "width", "hidden", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 2, "z-index", "9999", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "form-group", "custom-inline-input"], ["type", "text", "disabled", "", "readonly", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange"], ["type", "text", "maxlength", "100", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], ["media", "(min-width: 768px)", 3, "field", "title", "width", "hidden"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "name", "id", "ngModelChange", "change"], [1, "form-group"], [1, "form-control", 3, "format", "ngModel", "ngModelChange", "valueChange"], ["type", "text", "appIntegerNumber", "true", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "appDecimaNumber", "", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "Precision", "ngModelChange", "change"], ["type", "text", 1, "form-control", "grid-form-control", "number-input", 3, "ngModel", "ngModelChange", "change"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoDelAction", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function MultiDimensionalSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MultiDimensionalSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "kendo-grid", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "kendo-grid-messages", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "kendo-grid-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, MultiDimensionalSetupComponent_ng_template_37_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](38, MultiDimensionalSetupComponent_kendo_grid_column_38_Template, 11, 15, "kendo-grid-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](39, "div", 27)(40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_button_click_40_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](43, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MultiDimensionalSetupComponent_Template_button_click_43_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](46, MultiDimensionalSetupComponent_kendo_dialog_46_Template, 16, 14, "kendo-dialog", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](47, MultiDimensionalSetupComponent_kendo_dialog_47_Template, 19, 15, "kendo-dialog", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](49, MultiDimensionalSetupComponent_app_custom_lookup_modal_49_Template, 1, 1, "app-custom-lookup-modal", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](50, MultiDimensionalSetupComponent_app_common_task_modal_50_Template, 1, 1, "app-common-task-modal", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](51, MultiDimensionalSetupComponent_app_esignature_from_51_Template, 1, 1, "app-esignature-from", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](52, MultiDimensionalSetupComponent_kendo_dialog_52_Template, 16, 12, "kendo-dialog", 36);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 17, "MULTIDIMENSIONALSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 19, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 21, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("kendoGridBinding", ctx.mArrMultiDimensionGroupGrid)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](35, 23, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.mArrMultiDimensionGrid1Col);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](42, 25, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](45, 27, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_directives_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__.DecimaNumberDirective, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__.LoaderComponent, _shared_directives_integer_number_directive__WEBPACK_IMPORTED_MODULE_15__.IntegerNumberDirective, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_16__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_17__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogActionsComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DatePickerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.TimePickerComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 66230:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/retain-earning-account-setup/retain-earning-account-setup.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetainEarningAccountSetupComponent: () => (/* binding */ RetainEarningAccountSetupComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_retain_earning_account_setup_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/retain-earning-account-setup.model */ 26756);
/* harmony import */ var _constant_retain_earning_account_setup_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/retain-earning-account-setup.const */ 8014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_retain_earning_account_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/retain-earning-account-setup.service */ 32570);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 21916);























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function RetainEarningAccountSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-loader");
  }
}
function RetainEarningAccountSetupComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 26)(7, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function RetainEarningAccountSetupComponent_div_31_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.mobjHeaderModel.YearEndSegment = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 2, "RETAINEARNNINGACCSETUP.SEGMENTNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r1.mobjHeaderModel.YearEndSegment);
  }
}
function RetainEarningAccountSetupComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 26)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RetainEarningAccountSetupComponent_div_38_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.bmlfonChange());
    })("ngModelChange", function RetainEarningAccountSetupComponent_div_38_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.mobjHeaderModel.AcctKey = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r2.mobjHeaderModel.AcctKey)("disabled", ctx_r2.mbAccountKeyDisabled)("maxlength", ctx_r2.miAccountKeyLength);
  }
}
const _c2 = function (a0) {
  return {
    "disabled_button": a0
  };
};
function RetainEarningAccountSetupComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 26)(1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function RetainEarningAccountSetupComponent_div_39_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.mobjHeaderModel.AcctKey = $event);
    })("blur", function RetainEarningAccountSetupComponent_div_39_Template_input_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.bmlfOpenLookupModal("AccountKey", ctx_r19.msScreenName, "AccountKey", "blur", ctx_r19.mobjHeaderModel.AcctKey, "custom", "txtAccountKey", "RETAINEARNNINGACCSETUP.ACCOUNTKEY"));
    })("change", function RetainEarningAccountSetupComponent_div_39_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.bmlfOnFormFieldChange());
    })("focus", function RetainEarningAccountSetupComponent_div_39_Template_input_focus_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.bmlfOnGlobalFocus("AccountKey", ctx_r21.mobjHeaderModel.AcctKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_div_39_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.bmlfOpenLookupModal("AccountKey", ctx_r22.msScreenName, "AccountKey", "click", ctx_r22.mobjModel.AccountKey, "custom", "txtAccountKey", "RETAINEARNNINGACCSETUP.ACCOUNTKEY"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r3.mobjHeaderModel.AcctKey)("maxlength", ctx_r3.miAccountKeyLength)("disabled", ctx_r3.mbAccountKeyDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c2, ctx_r3.mbAccountKeyDisabled));
  }
}
function RetainEarningAccountSetupComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_div_58_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.bmlfonGenerateAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r4.mobjHeaderModel.AcctKey == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 2, "RETAINEARNNINGACCSETUP.GENERATEACCT"), " ");
  }
}
function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 58)(2, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const rowIndex_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r33.mArrAccountSetupGrid[rowIndex_r30][item_r27.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "txt", item_r27.Field, "", rowIndex_r30, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r31.mArrAccountSetupGrid[rowIndex_r30][item_r27.Field])("name", rowIndex_r30 + "_" + item_r27.Field);
  }
}
function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 60)(2, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r40);
      const rowIndex_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
      const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.mArrAccountSetupGrid[rowIndex_r30][item_r27.Field] = $event);
    })("change", function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_4_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r40);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r43.bmlfNgGrid1Changes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().rowIndex;
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("id", "txt", item_r27.Field, "", rowIndex_r30, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r32.mArrAccountSetupGrid[rowIndex_r30][item_r27.Field])("name", rowIndex_r30 + "_" + item_r27.Field);
  }
}
function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_3_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_ng_container_4_Template, 3, 4, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r27.Field.startsWith("User") || item_r27.Field.includes("CUSTOM") ? item_r27.Title : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "RETAINEARNNINGACCSETUP." + item_r27.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r27.Type == "textReadOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r27.Type == "text");
  }
}
function RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-grid-column", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_ng_template_2_Template, 5, 5, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("field", item_r27.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", (item_r27.Field.startsWith("User") || item_r27.Field.includes("CUSTOM") || item_r27.Field.includes("Seg")) && item_r27.Field != "User1" && item_r27.Field != "User2" ? item_r27.Title : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 4, "RETAINEARNNINGACCSETUP." + item_r27.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !item_r27.Display)("width", item_r27.Field == "Select" ? "30" : "120");
  }
}
function RetainEarningAccountSetupComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 50)(1, "kendo-grid", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "kendo-grid-messages", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RetainEarningAccountSetupComponent_div_59_kendo_grid_column_5_Template, 3, 6, "kendo-grid-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("kendoGridBinding", ctx_r5.mArrAccountSetupGrid)("resizable", true)("height", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 5, "CommonNoRecordsAvailable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r5.mArrAccountSetupCol);
  }
}
function RetainEarningAccountSetupComponent_kendo_dialog_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function RetainEarningAccountSetupComponent_kendo_dialog_67_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r47.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_67_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r49.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_67_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_67_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r51.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function RetainEarningAccountSetupComponent_app_custom_lookup_modal_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-custom-lookup-modal", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("saveLookupField", function RetainEarningAccountSetupComponent_app_custom_lookup_modal_69_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r52.bmlfSaveLookupField($event));
    })("closeLookup", function RetainEarningAccountSetupComponent_app_custom_lookup_modal_69_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r54.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("keyData", ctx_r7.mobjLookupKeyData);
  }
}
function RetainEarningAccountSetupComponent_kendo_dialog_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function RetainEarningAccountSetupComponent_kendo_dialog_70_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r55.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "kendo-dialog-actions")(3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_70_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r57.bmlfReportModal("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r8.msReport, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 2, "COMMON.CLOSE"), " ");
  }
}
function RetainEarningAccountSetupComponent_app_common_task_modal_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-task-modal", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeTaskModal", function RetainEarningAccountSetupComponent_app_common_task_modal_71_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r58.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("taskData", ctx_r9.mobjTaskData);
  }
}
function RetainEarningAccountSetupComponent_app_esignature_from_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-esignature-from", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("action", function RetainEarningAccountSetupComponent_app_esignature_from_72_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r60.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx_r10.mobjSignatureData);
  }
}
function RetainEarningAccountSetupComponent_kendo_dialog_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "kendo-dialog", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function RetainEarningAccountSetupComponent_kendo_dialog_73_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_73_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r64.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_kendo_dialog_73_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r65.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
class RetainEarningAccountSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'Retain Earning Account Setup';
    this.mbIsChangeData = false;
    this.mobjModel = new _models_retain_earning_account_setup_model__WEBPACK_IMPORTED_MODULE_1__.RetainEarningAccountSetupModel();
    this.mobjHeaderModel = new _models_retain_earning_account_setup_model__WEBPACK_IMPORTED_MODULE_1__.RetainEarningAccountSetupHeaderModel();
    this.miAccountKeyLength = 0;
    this.msCustomDateFormat = "";
    this.mobjUserData = {};
    this.mbSaveDialogView = false;
    this.mbIsCloseMode = false;
    this.mbReportDialog = false;
    this.msReport = '';
    this.mbGenerateAccount = false;
    this.msExistAccountKey = "";
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    this.mbDisabledSegmentedYearEndFields = false;
    this.mbAccountKeyDisabled = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mArrAccountSetupCol = _constant_retain_earning_account_setup_const__WEBPACK_IMPORTED_MODULE_2__.RetainEarningAccountSetupConstants.garrLineGridCol.map(ele => Object.assign({}, ele));
    this.mArrAccountSetupGrid = []; //values
  }
  //--------------------------------------------------------------------------------------
  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.GetRetainEarningAccountSetup();
  }
  //--------------------------------------------------------------------------------------
  GetRetainEarningAccountSetup() {
    this.mbIsLoading = true;
    this.mArrAccountSetupGrid = [];
    let pobjJData = {
      JSON: JSON.stringify({
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetRetainEarningSetup(pobjJData).subscribe(res => {
      debugger;
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        if (res.OtherInfo.length > 0) {
          if (res.OtherInfo[0].TransactionExists == "Yes") {
            this.mbAccountKeyDisabled = true;
          }
        }
        if (res.SegmentData.length > 0) {
          this.mobjHeaderModel.SegmentedYearEnd = res.SegmentData[0].SegmentedYearEnd;
          this.mobjHeaderModel.YearEndSegment = res.SegmentData[0].YearEndSegment;
          this.mArrAccountSetupCol[2].Title = res.SegmentData[0].YearEndSegment;
          this.mArrAccountSetupCol[3].Title = res.SegmentData[0].YearEndSegment + " Description";
          this.miAccountKeyLength = res.SegmentData[0].AcctSegLength5;
          this.mbDisabledSegmentedYearEndFields = this.mobjHeaderModel.SegmentedYearEnd == 'Y' ? true : false;
        }
        if (res.HeaderData.length > 0) {
          //this.mobjHeaderModel.AcctKey = res.HeaderData[0].AcctKey; // 183900 Discussed with Suraj sir n Rajesh sir 
          this.msExistAccountKey = res.HeaderData[0].AcctKey;
          //this.mobjHeaderModel.Description = res.HeaderData[0].Description; // 183900 Discussed with Suraj sir n Rajesh sir 
          this.mobjHeaderModel.AcctKey = "";
          this.mobjHeaderModel.Description = "";
          if (this.mbDisabledSegmentedYearEndFields) {
            this.mArrAccountSetupCol[2].Title = res.SegmentData[0].YearEndSegment;
            this.mArrAccountSetupCol[3].Title = res.SegmentData[0].YearEndSegment + " Description";
            this.mArrAccountSetupGrid = res.HeaderData;
          }
        }
        // let parrGridData = res.HeaderData;
        // parrGridData.forEach(ele => {
        //     const pobjDataCopy: any = Object.assign({}, this.mObjModelGrid1);
        //     pobjDataCopy.Active = ele.Active;
        //     pobjDataCopy.SeqNum = ele.SeqNum;
        //     pobjDataCopy.DimensionKey = ele.DimensionKey;
        //     pobjDataCopy.DimensionDesc = ele.DimensionDesc;
        //     //ele.Recdate = new Date(ele.Recdate);
        //     this.mArrMultiDimensionGroupGrid.push(pobjDataCopy)
        // })
        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = false;
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfonGenerateAccount() {
    if (this.mbGenerateAccount == false) {
      this.mbIsLoading = true;
      if (this.mbAccountKeyDisabled == false && this.mobjHeaderModel.AcctKey == this.msExistAccountKey) {
        this.mArrAccountSetupGrid = [];
      }
      let pobjJData = {
        JSON: JSON.stringify({
          HeaderData: [{
            "Acct": this.mobjHeaderModel.AcctKey,
            "Description": this.mobjHeaderModel.Description
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfonGenerateRetainEarningAccount(pobjJData).subscribe(res => {
        debugger;
        this.mbIsLoading = false;
        if (res == null) {
          this.toastMessageService.notifyError("Failure.");
          return;
        }
        if (res.Response[0].ErrorCode == "") {
          if (res.DetailData.length > 0) {
            let parrGridData = res.DetailData;
            parrGridData.forEach(ele => {
              const pobjDataCopy = Object.assign({}, this.mobjModel);
              pobjDataCopy.AccountKey = ele.AccountKey;
              pobjDataCopy.Description = ele.Description;
              pobjDataCopy.SegValue = ele.SegValue;
              pobjDataCopy.SegDesc = ele.SegDesc;
              pobjDataCopy.AcctKey = ele.AcctKey;
              //this.mArrAccountSetupGrid.push(pobjDataCopy) // Bug 185011
              this.mArrAccountSetupGrid.push(pobjDataCopy); // Revert changes as per functionality
              //this.mArrAccountSetupGrid = parrGridData; // // Revert changes as per functionality
            });
          }

          this.mbIsChangeData = true;
          this.mbGenerateAccount = true;
        } else {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        }
      }, err => {
        console.log(err);
        this.mbIsLoading = false;
      });
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfSaveData() {
    this.mbIsLoading = true;
    let pobjJData;
    if (this.mbDisabledSegmentedYearEndFields == true) {
      pobjJData = {
        JSON: JSON.stringify({
          HeaderData: this.mArrAccountSetupGrid,
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
    } else {
      pobjJData = {
        JSON: JSON.stringify({
          HeaderData: [{
            "AccountKey": this.mobjHeaderModel.AcctKey,
            "Description": this.mobjHeaderModel.Description,
            "SegValue": "",
            "SegDesc": "",
            "AcctKey": this.mobjHeaderModel.AcctKey
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
    }
    this.formService.bmlfonSaveRetainEarningSetup(pobjJData).subscribe(res => {
      debugger;
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      } else if (res.Response[0].ErrorCode == "") {
        if (res.Response[0].ResponseText != "") {
          //this.toastMessageService.notifyError(res.Response[0].ResponseText);
          this.msReport = res.Response[0].ResponseText;
          this.mbReportDialog = true;
        }
        this.mbIsChangeData = false;
        this.mbGenerateAccount = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfNgGrid1Changes() {
    this.mbIsChangeData = true;
  }
  bmlfonChange() {
    this.mbIsChangeData = true;
  }
  //---------------------------------------------------------------------------------------
  // Report Modal
  bmlfReportModal(event) {
    if (event == 'open') {
      this.mbReportDialog = true;
    } else if (event == 'close') {
      this.mbReportDialog = false;
      this.GetRetainEarningAccountSetup();
    }
  }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**--------Start: Lookup Functionality----- */
  // LOOKUP MODAL 
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      //this.bmlfcleanDescription(psField, psValue)
      this.mobjModel[psField] = "";
      this.mbIsLoading = false;
      return false;
    }
    let psReqData;
    if (psLookUpKey == "AccountKey") {
      psReqData = {
        ScreenName: "Account",
        LookUpKey: "Account",
        Filter1: "",
        Filter2: "",
        Filter3: "",
        Filter4: '',
        Filter5: ''
      };
    } else {
      psReqData = {
        ScreenName: psScreenName,
        LookUpKey: psLookUpKey,
        Filter1: "",
        Filter2: "",
        Filter3: "",
        Filter4: '',
        Filter5: ''
      };
    }
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
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_0__().format(this.msCustomDateFormat.toUpperCase());
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
  //----------------------------------------------------------------------------------------
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  //----------------------------------------------------------------------------------------
  /** save lookup field data */
  bmlfSaveLookupField(pobjEvent) {
    this.mbIsLoading = false;
    this.mbIsLookupModal = false;
    if (pobjEvent.type == 'custom') {}
    if (pobjEvent.field == "AccountKey") {
      this.mobjHeaderModel.AcctKey = pobjEvent.valueKey.trim();
      this.mbIsChangeData = true;
    }
  }
  //----------------------------------------------------------------------------------------
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    document.getElementById(pobjEvent.eleId).focus();
  }
  //----------------------------------------------------------------------------------------
  /**--------End: Lookup Functionality----- */
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Retain Earning Account Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function RetainEarningAccountSetupComponent_Factory(t) {
    return new (t || RetainEarningAccountSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_http_retain_earning_account_setup_service__WEBPACK_IMPORTED_MODULE_3__.RetainEarningAccountSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_7__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_8__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: RetainEarningAccountSetupComponent,
    selectors: [["app-retain-earning-account-setup"]],
    viewQuery: function RetainEarningAccountSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 74,
    vars: 39,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], ["class", "col-md-7 custom_flex md_p_r_30", 4, "ngIf"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "tabindex", "1", "id", "txtAccountKeyFormat", "disabled", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "tabindex", "1", "id", "txtDefaultDescription", "maxlength", "50", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "row", "rowheight100p"], ["class", "d-flex w-100 flex_wrap custom_size_input", 4, "ngIf"], ["id", "kendodiv", "class", " col-md-12 height100p form-container", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "processMsgDialog", "style", "z-index: 10000000;", "class", "process-dialog", 3, "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], ["type", "text", "tabindex", "1", "id", "txtSegmentName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "tabindex", "1", "id", "txtAccountKey1", 1, "form-control", 3, "ngModel", "disabled", "maxlength", "change", "ngModelChange"], ["type", "text", "name", "AccountKey", "id", "txtAccountKey", "tabindex", "1", 1, "form-control", 3, "ngModel", "maxlength", "disabled", "ngModelChange", "blur", "change", "focus"], ["id", "cmdAccountKeyLookup", 1, "input-group-addon", "fsearch", 3, "ngClass", "click"], [1, "fa", "fa-search"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "data-target", "dtLineGrid2", "id", "cmdGenerateAccount", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "disabled", "click"], ["id", "kendodiv", 1, "col-md-12", "height100p", "form-container"], ["id", "dtLineGrid2", 1, "low_space_table", "responsive_grid", 3, "kendoGridBinding", "resizable", "height"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "hidden", "title", "width", 4, "ngFor", "ngForOf"], [3, "field", "hidden", "title", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "form-group", "custom-inline-input"], ["type", "text", "disabled", "", "readonly", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange"], [1, "form-group"], ["type", "text", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange", "change"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"], ["id", "processMsgDialog", 1, "process-dialog", 2, "z-index", "10000000", 3, "close"], [3, "innerHTML"], ["kendoButton", "", "id", "cmdCloseDescription", 3, "click"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function RetainEarningAccountSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, RetainEarningAccountSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 18)(30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, RetainEarningAccountSetupComponent_div_31_Template, 8, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, RetainEarningAccountSetupComponent_div_38_Template, 2, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, RetainEarningAccountSetupComponent_div_39_Template, 4, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 19)(41, "div", 21)(42, "div", 22)(43, "div", 23)(44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 26)(48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RetainEarningAccountSetupComponent_Template_input_change_48_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function RetainEarningAccountSetupComponent_Template_input_ngModelChange_48_listener($event) {
          return ctx.mobjHeaderModel.AcctKey = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "div", 26)(56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RetainEarningAccountSetupComponent_Template_input_change_56_listener() {
          return ctx.bmlfonChange();
        })("ngModelChange", function RetainEarningAccountSetupComponent_Template_input_ngModelChange_56_listener($event) {
          return ctx.mobjHeaderModel.Description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, RetainEarningAccountSetupComponent_div_58_Template, 5, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, RetainEarningAccountSetupComponent_div_59_Template, 6, 7, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 32)(61, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_button_click_61_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RetainEarningAccountSetupComponent_Template_button_click_64_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, RetainEarningAccountSetupComponent_kendo_dialog_67_Template, 19, 15, "kendo-dialog", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, RetainEarningAccountSetupComponent_app_custom_lookup_modal_69_Template, 1, 1, "app-custom-lookup-modal", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, RetainEarningAccountSetupComponent_kendo_dialog_70_Template, 6, 4, "kendo-dialog", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, RetainEarningAccountSetupComponent_app_common_task_modal_71_Template, 1, 1, "app-common-task-modal", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, RetainEarningAccountSetupComponent_app_esignature_from_72_Template, 1, 1, "app-esignature-from", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, RetainEarningAccountSetupComponent_kendo_dialog_73_Template, 16, 12, "kendo-dialog", 41);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 23, "RETAINEARNNINGACCSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 25, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 27, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbDisabledSegmentedYearEndFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](37, 29, "RETAINEARNNINGACCSETUP.ACCOUNTKEY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbDisabledSegmentedYearEndFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.mbDisabledSegmentedYearEndFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](46, 31, "RETAINEARNNINGACCSETUP.ACCOUNTKEYFORMAT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjHeaderModel.AcctKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](54, 33, "RETAINEARNNINGACCSETUP.DEFAULTDESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.mobjHeaderModel.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbDisabledSegmentedYearEndFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbDisabledSegmentedYearEndFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](63, 35, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](66, 37, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbReportDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_10__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_12__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_13__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_14__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogActionsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3725:
/*!****************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/tds-setup/tds-setup.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TDSSetupComponent: () => (/* binding */ TDSSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_tds_setup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tds-setup.model */ 73332);
/* harmony import */ var _constant_tds_setup_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/tds-setup.const */ 69732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_tds_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/tds-setup.service */ 96446);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function TDSSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-loader");
  }
}
function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 53)(2, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r18.bmlfonDeleteLineItem(rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r13, "");
  }
}
function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 56)(2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r22.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    })("blur", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_4_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r26.bmlfNgGrid1Changes(rowIndex_r13, item_r10.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("id", "txt", item_r10.Field, "", rowIndex_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r15.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field])("name", "txt" + item_r10.Field + rowIndex_r13)("disabled", ctx_r15.mArrMultiTDSSetupGrid[rowIndex_r13]["Flag"] != "A");
  }
}
function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 56)(2, "kendo-numerictextbox", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_5_Template_kendo_numerictextbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r31.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    })("valueChange", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_5_Template_kendo_numerictextbox_valueChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r35.bmlfNgChanges(rowIndex_r13));
    })("blur", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_5_Template_kendo_numerictextbox_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r37.bmlfRateChange(rowIndex_r13, item_r10.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("id", "txt", item_r10.Field, "", rowIndex_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("spinners", false)("step", 0)("name", "txt" + item_r10.Field + rowIndex_r13)("ngModel", ctx_r16.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field])("decimals", ctx_r16.miAmountPrecision)("format", ctx_r16.miAmountPrecisionFormat)("min", ctx_r16.miMinValue)("max", ctx_r16.miMaxValue)("autoCorrect", ctx_r16.mbautoCorrect);
  }
}
function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 59)(2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r42.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    })("blur", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r46.bmlfOpenLookupModal(item_r10.Field, "TDS Setup", "TDSAccounts", "blur", ctx_r46.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "TDSSETUP.ACCOUNTS", rowIndex_r13));
    })("change", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r49.bmlfNgChanges(rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r51.bmlfOpenLookupModal(item_r10.Field, "TDS Setup", "TDSAccounts", "click", ctx_r51.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "TDSSETUP.ACCOUNTS", rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.Field + rowIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r17.mArrMultiTDSSetupGrid[rowIndex_r13][item_r10.Field])("name", "txt" + item_r10.Field + rowIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r10.Field, "Lookup", rowIndex_r13, "");
  }
}
function TDSSetupComponent_kendo_grid_column_54_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_3_Template, 4, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_4_Template, 3, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_5_Template, 3, 11, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, TDSSetupComponent_kendo_grid_column_54_ng_template_2_ng_container_6_Template, 5, 5, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 5, "TDSSETUP." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.Type == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.Type == "text" && item_r10.Field == "TDSType");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.Type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.Type == "lookup");
  }
}
function TDSSetupComponent_kendo_grid_column_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-grid-column", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TDSSetupComponent_kendo_grid_column_54_ng_template_2_Template, 7, 7, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("field", item_r10.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", (item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM")) && item_r10.Field != "User1" && item_r10.Field != "User2" ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 4, "TDSSETUP." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", !item_r10.Display)("width", item_r10.Type == "Action" || item_r10.Field == "TDSRate" ? "30" : item_r10.Field == "TDSType" ? "250" : "100");
  }
}
function TDSSetupComponent_kendo_dialog_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-dialog", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close", function TDSSetupComponent_kendo_dialog_62_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r57.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_62_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r59.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_62_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r60.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DELMESSAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function TDSSetupComponent_kendo_dialog_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-dialog", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close", function TDSSetupComponent_kendo_dialog_63_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r61.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_63_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r63.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_63_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r64.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_63_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r65.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function TDSSetupComponent_kendo_dialog_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-dialog", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close", function TDSSetupComponent_kendo_dialog_64_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r66.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_64_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r68.bmlfdialogDeleteLineAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_64_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r69.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DEL_LINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function TDSSetupComponent_app_custom_lookup_modal_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-custom-lookup-modal", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("saveLookupField", function TDSSetupComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r70.bmlfSaveLookupField($event));
    })("closeLookup", function TDSSetupComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r71);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r72.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function TDSSetupComponent_app_common_task_modal_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-common-task-modal", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("closeTaskModal", function TDSSetupComponent_app_common_task_modal_67_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r73.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
function TDSSetupComponent_app_esignature_from_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-esignature-from", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("action", function TDSSetupComponent_app_esignature_from_68_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r75.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx_r8.mobjSignatureData);
  }
}
function TDSSetupComponent_kendo_dialog_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "kendo-dialog", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("close", function TDSSetupComponent_kendo_dialog_69_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r77.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_69_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r79.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_kendo_dialog_69_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r80.bmlfEsignAuditAlertEvent("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 6, "ESIGNAUDITMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 8, "COMMON.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"), " ");
  }
}
class TDSSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'TDS Setup';
    this.mbIsChangeData = false;
    this.mbValidateData = true;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.msFormMode = "I";
    this.msTDSAcctForReceipt = "";
    this.mObjModelGrid1 = new _models_tds_setup_model__WEBPACK_IMPORTED_MODULE_3__.TDSSetupModel();
    this.mbautoCorrect = true;
    this.miAmountPrecision = 2;
    this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
    this.miMinValue = 0;
    this.miMaxValue = 100;
    this.mobjUserData = {};
    this.miGridDeleteLineIndex = 0;
    this.mbdeleteLineItem = false;
    this.mbShowDeleteDialog = false;
    this.msLookupField = "";
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    this.mbSaveDialogView = false;
    this.mbIsCloseMode = false;
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mArrMultiTDSSetupGrid1Col = _constant_tds_setup_const__WEBPACK_IMPORTED_MODULE_4__.TDSSetupConstants.garrLineGridCol.map(ele => Object.assign({}, ele));
    this.mArrMultiTDSSetupGrid = []; //values
  }

  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.mobjSignatureData = {
      scrrenName: this.msScreenName,
      reasonMinLength: 10,
      reqSignAuth: 2,
      date: moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase()),
      userName: this.mobjUserData.UserId
    };
    //this.bmlfCheckEsignApplicableOnForm();
    this.getTDSSetupDetail();
  }
  //-----------------------------------------------------------------------
  getTDSSetupDetail() {
    this.mbIsLoading = true;
    this.mArrMultiTDSSetupGrid = [];
    let pobjJData = {
      JSON: JSON.stringify({
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetTDSSetupDetail(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        if (res.ReceiptAcct.length > 0) {
          this.msTDSAcctForReceipt = res.ReceiptAcct[0].TDSAcctForReceipt;
        }
        if (res.HeaderData.length > 0) {
          this.mArrMultiTDSSetupGrid = res.HeaderData;
          // let parrGridData = res.HeaderData;
          // parrGridData.forEach(ele => {
          //     const pobjDataCopy: any = Object.assign({}, this.mObjModelGrid1);
          //      pobjDataCopy.Active = ele.Active;
          //      pobjDataCopy.SeqNum = ele.SeqNum;
          //      pobjDataCopy.DimensionID = ele.DimensionID;
          //      pobjDataCopy.DimensionDesc = ele.DimensionDesc;
          //     ele.RecDate = new Date(ele.RecDate);
          //     this.mArrMultiDimensionGroupGrid.push(pobjDataCopy)
          // })
        }

        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfValidateAllData() {
    let pbResult = true;
    if (this.bmlfIsEmpty(this.msTDSAcctForReceipt)) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.TDSRECEIPTACCCHK'));
      pbResult = false;
    }
    this.mArrMultiTDSSetupGrid.forEach(ele => {
      if (this.bmlfIsEmpty(ele.TDSType) || this.bmlfIsEmpty(ele.Acct)) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.ROWCHECK') + ele.SeqNum);
        pbResult = false;
      }
    });
    return pbResult;
  }
  //-----------------------------------------------------------------------
  bmlfSaveData() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.mArrMultiTDSSetupGrid.length == 0) {
      return;
    }
    if (this.mbIsChangeData == false || this.mbValidateData == false) {
      return;
    }
    if (!this.bmlfValidateAllData()) {
      return;
    }
    this.mArrMultiTDSSetupGrid.forEach(element => {
      element.TDSRate = this.utilService.bmgfSetPrecision(Number(element.TDSRate), 2);
    });
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: this.mArrMultiTDSSetupGrid,
        ReceiptAcct: [{
          "TDSAcctForReceipt": this.msTDSAcctForReceipt
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonSaveTDSSetupDetail(reqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
        this.getTDSSetupDetail();
        this.mbIsChangeData = false;
      }
      //Bug 183418 - 08-12-23
      else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
        this.mbIsChangeData = false;
      }
    });
  }
  //-----------------------------------------------------------------------
  bmlfNgGrid1Changes(rowIndex, itemField) {
    this.mbIsChangeData = true;
    this.mbValidateData = true;
    let fieldID;
    fieldID = 'txt' + itemField + rowIndex;
    let piIDCount = 0;
    this.mArrMultiTDSSetupGrid.forEach(ele => {
      if (ele.TDSType == this.mArrMultiTDSSetupGrid[rowIndex]['TDSType']) {
        piIDCount = piIDCount + 1;
      }
    });
    if (piIDCount > 1) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.TDSTYPEEXISTCHK'));
      document.getElementById(fieldID).focus();
      this.mbValidateData = false;
      return false;
    }
    // if (this.bmlfIsEmpty(this.mArrMultiTDSSetupGrid[rowIndex]['TDSType']) || this.bmlfIsEmpty(this.mArrMultiTDSSetupGrid[rowIndex]['Acct'])  ) {
    //     this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.ROWCHECK') + this.mArrMultiTDSSetupGrid[rowIndex]['SeqNum']);
    //     document.getElementById(fieldID).focus();
    //     return false;
    // }else{
    //     //TDS Type already Exist
    //     let piIDCount: number = 0;
    //     this.mArrMultiTDSSetupGrid.forEach(ele => {
    //         if(ele.TDSType == this.mArrMultiTDSSetupGrid[rowIndex]['TDSType']){
    //             piIDCount = piIDCount + 1;
    //         }
    //     });
    //     if(piIDCount > 1){
    //         this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.TDSTYPEEXISTCHK'));
    //         document.getElementById(fieldID).focus();
    //         return false;
    //     }
    // }
    if (this.mArrMultiTDSSetupGrid[rowIndex]['Flag'] == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mArrMultiTDSSetupGrid[rowIndex]['Flag'])) {
      this.mArrMultiTDSSetupGrid[rowIndex]['Flag'] = 'M';
    }
  }
  bmlfNgChanges(prowIndex) {
    this.mbIsChangeData = true;
    if (this.mArrMultiTDSSetupGrid[prowIndex]['Flag'] == '' || src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mArrMultiTDSSetupGrid[prowIndex]['Flag'])) {
      this.mArrMultiTDSSetupGrid[prowIndex]['Flag'] = 'M';
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfRateChange(prowIndex, pField) {
    if (this.bmlfIsEmpty(this.mArrMultiTDSSetupGrid[prowIndex][pField])) {
      this.mArrMultiTDSSetupGrid[prowIndex][pField] = 0;
    }
    this.mbIsChangeData = true;
  }
  //---------------------------------------------------------------------------------------
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  //--------------------------------------------------------------------------------------
  bmlfOnGlobalFocus(field, value) {
    if (typeof value === 'object' && value.constructor === Object) {
      let valueCopy = Object.assign({}, value);
      this.msLookupField = valueCopy[field];
    } else {
      this.msLookupField = value;
    }
  }
  //---------------------------------------------------------------------------------------
  bmlfAddLineValidation() {
    let pbResult = true;
    this.mArrMultiTDSSetupGrid.forEach(ele => {
      if (this.bmlfIsEmpty(ele.TDSType) || this.bmlfIsEmpty(ele.Acct)) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('TDSSETUP.MSG.ROWCHECK') + ele.SeqNum);
        pbResult = false;
      }
    });
    return pbResult;
  }
  //--------------------------------------------------------------------------------------
  bmlfonAddLineGrid() {
    debugger;
    if (this.bmlfAddLineValidation() == true) {
      if (!this.utilService.mbWrite) {
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
        return false;
      }
      let pRowIndex = 1;
      if (this.mArrMultiTDSSetupGrid.length > 0) {
        //pRowIndex = this.mArrMultiTDSSetupGrid.length + 1;
        pRowIndex = this.mArrMultiTDSSetupGrid[this.mArrMultiTDSSetupGrid.length - 1].SeqNum + 1;
      } else {
        pRowIndex = 1;
      }
      //let RowNumber: number = Number(rowIndex) + 1;
      const pobjDataCopy = Object.assign({}, this.mObjModelGrid1);
      if (this.mArrMultiTDSSetupGrid.length > 0) {
        pobjDataCopy.Flag = 'A';
        pobjDataCopy.SeqNum = pRowIndex;
        this.mArrMultiTDSSetupGrid.push(pobjDataCopy);
      } else {
        pobjDataCopy.Flag = 'A';
        pobjDataCopy.SeqNum = pRowIndex;
        this.mArrMultiTDSSetupGrid.push(pobjDataCopy);
      }
      this.mbIsChangeData = true;
    }
  }
  //---------------------------------------------------------------------------------------
  bmlfonDeleteLineItem(rowIndex) {
    debugger;
    if (!this.utilService.mbDelete) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      return;
    }
    ;
    this.miGridDeleteLineIndex = rowIndex;
    this.mbdeleteLineItem = true;
  }
  //---------------------------------------------------------------------------------------
  bmlfdialogDeleteLineAction(action) {
    if (action == 'Yes') {
      this.mbdeleteLineItem = false;
      let psFlag = this.mArrMultiTDSSetupGrid[this.miGridDeleteLineIndex].Flag;
      if (psFlag == "A") {
        this.mArrMultiTDSSetupGrid.splice(this.miGridDeleteLineIndex, 1);
        return;
      }
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            "TDSType": this.mArrMultiTDSSetupGrid[this.miGridDeleteLineIndex].TDSType
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfonDeleteTDSSetupLine(reqData).subscribe(res => {
        if (res == null) {
          return;
        }
        if (res.Response[0].ErrorCode != "") {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else if (this.utilService.bmgffindString(res.Response[0].ResponseText, 'EXIST')) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
          //this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.EXIST'));
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.LINEDELETE'));
          this.mArrMultiTDSSetupGrid.splice(this.miGridDeleteLineIndex, 1);
        }
      });
    }
    if (action == 'No') {
      this.mbdeleteLineItem = false;
    }
  }
  //-----------------------------------------------------------------------
  /**--------Start: Lookup Functionality----- */
  // LOOKUP MODAL 
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    if (this.mbValidateData == false) {
      return false;
    }
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      this.bmlfcleanDescription(psField, psValue);
      //this.mobjModel[psField] = "";
      this.mbIsLoading = false;
      return false;
    }
    let psReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookUpKey,
      Filter1: "",
      Filter2: "",
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
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_2__().format(this.msCustomDateFormat.toUpperCase());
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
    if (pobjEvent.type == 'custom') {}
    if (pobjEvent.field == "TDSAcctForReceipt") {
      this.msTDSAcctForReceipt = pobjEvent.valueKey.trim();
      this.mbIsChangeData = true;
    }
    if (pobjEvent.field == "Acct") {
      this.mArrMultiTDSSetupGrid[this.mnumLineItemRowIndex].Acct = pobjEvent.valueKey.trim();
      this.mbIsChangeData = true;
      this.bmlfNgChanges(this.mnumLineItemRowIndex);
    }
  }
  // bmlfCloseLookupModal(pobjEvent): void {
  //   this.mbIsLookupModal = pobjEvent.isLookupModal;
  //   document.getElementById(pobjEvent.eleId).focus();
  // }
  bmlfGetInputColumn(psfield) {
    if (psfield == 'TDSAcctForReceipt') {
      return 'Acct';
    } else if (psfield == 'Acct') {
      return 'Acct';
    }
  }
  bmlfGetModelField(psfield) {
    if (psfield == 'TDSAcctForReceipt') {
      return 'msTDSAcctForReceipt';
    } else if (psfield == 'Acct') {
      return 'Acct';
    }
  }
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    if (pobjEvent.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjEvent.field);
      let parrFilterData = [];
      if (psInputKey && pobjEvent.searchValue != null) {
        parrFilterData = pobjEvent.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjEvent.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0 || pobjEvent.searchValue == null) {
        let psModelField = this.bmlfGetModelField(pobjEvent.field);
        if (psModelField == 'Acct') {
          this.mArrMultiTDSSetupGrid[this.mnumLineItemRowIndex][psModelField] = '';
        } else {
          this.msTDSAcctForReceipt = '';
        }
      }
      document.getElementById(pobjEvent.eleId).focus();
    }
  }
  //-----------------------------------------------------------------------------------    
  // Clean Description
  bmlfcleanDescription(eleId, value) {
    if (this.bmlfIsEmpty(value)) {}
  }
  //-----------------------------------------------------------------------------------    
  bmlfIsEmpty(value) {
    return typeof value === "undefined" || value === null || value === '';
  }
  /**--------End: Lookup Functionality----- */
  //--------------------------------------------------------------------------------------
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = false;
    }
  }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/TDS Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function TDSSetupComponent_Factory(t) {
    return new (t || TDSSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_http_tds_setup_service__WEBPACK_IMPORTED_MODULE_5__.TDSSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_9__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: TDSSetupComponent,
    selectors: [["app-tds-setup"]],
    viewQuery: function TDSSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 70,
    vars: 38,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row", "rowheight100p"], ["id", "kendodiv", 1, "col-md-12", "height100p", "form-container"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "data-target", "dtLineGrid1", "id", "cmdAddLineItem", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "click"], [1, "row", "text-right", "col-md-8", "col-lg-9", "d-md-flex", "pr-0", "pt-1", "border-left", "m_b_10"], [1, "col-sm-12"], [1, "form-group", "row", "mb-0"], [1, "col-md-8", "pr-0"], ["id", "lblTDSAcctForReceipt", "for", "txtTDSAcctForReceipt", 1, "col-form-label"], [1, "col-md-4", "custom_flex", "pr-0"], ["type", "text", "tabindex", "1", "id", "txtTDSAcctForReceipt", 1, "form-control", 3, "ngModel", "ngModelChange", "change", "focus", "blur"], [1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], ["id", "dtLineGrid2", 1, "low_space_table", "responsive_grid", 3, "kendoGridBinding", "resizable", "height"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "hidden", "title", "width", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "Kendo_dialog_msg", "style", "z-index: 10000000;", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [3, "field", "hidden", "title", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "grid-icon-sec"], [3, "id", "click"], [1, "fa", "fa-trash-o"], [1, "form-group", "custom-inline-input"], ["type", "text", "maxlength", "100", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "disabled", "ngModelChange", "blur"], [1, "form-control", "grid-form-control", 3, "spinners", "step", "name", "ngModel", "decimals", "format", "min", "max", "autoCorrect", "id", "ngModelChange", "valueChange", "blur"], [1, "form-group", "custom_flex"], ["type", "text", "maxlength", "50", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "ngModelChange", "blur", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoDelAction", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], ["id", "Kendo_dialog_msg", 2, "z-index", "10000000", 3, "minWidth", "width", "close"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function TDSSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, TDSSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 18)(30, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_button_click_36_listener() {
          return ctx.bmlfonAddLineGrid();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 29)(43, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div", 31)(47, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TDSSetupComponent_Template_input_ngModelChange_47_listener($event) {
          return ctx.msTDSAcctForReceipt = $event;
        })("change", function TDSSetupComponent_Template_input_change_47_listener() {
          return ctx.bmlfOnFormFieldChange();
        })("focus", function TDSSetupComponent_Template_input_focus_47_listener() {
          return ctx.bmlfOnGlobalFocus("TDSAcctForReceipt", ctx.msTDSAcctForReceipt);
        })("blur", function TDSSetupComponent_Template_input_blur_47_listener() {
          return ctx.bmlfOpenLookupModal("TDSAcctForReceipt", "TDS Setup", "ReceiptAccounts", "blur", ctx.msTDSAcctForReceipt, "custom", "txtTDSAcctForReceipt", "TDSSETUP.ACCOUNTS");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_span_click_48_listener() {
          return ctx.bmlfOpenLookupModal("TDSAcctForReceipt", "TDS Setup", "ReceiptAccounts", "click", ctx.msTDSAcctForReceipt, "custom", "txtTDSAcctForReceipt", "TDSSETUP.ACCOUNTS");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "kendo-grid", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](52, "kendo-grid-messages", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](54, TDSSetupComponent_kendo_grid_column_54_Template, 3, 6, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "div", 39)(56, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_button_click_56_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TDSSetupComponent_Template_button_click_59_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](62, TDSSetupComponent_kendo_dialog_62_Template, 16, 14, "kendo-dialog", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](63, TDSSetupComponent_kendo_dialog_63_Template, 19, 15, "kendo-dialog", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, TDSSetupComponent_kendo_dialog_64_Template, 16, 14, "kendo-dialog", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](66, TDSSetupComponent_app_custom_lookup_modal_66_Template, 1, 1, "app-custom-lookup-modal", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](67, TDSSetupComponent_app_common_task_modal_67_Template, 1, 1, "app-common-task-modal", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](68, TDSSetupComponent_app_esignature_from_68_Template, 1, 1, "app-esignature-from", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](69, TDSSetupComponent_kendo_dialog_69_Template, 16, 12, "kendo-dialog", 49);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 22, "TDSSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 24, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](22, 26, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](38, 28, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](45, 30, "TDSSETUP.TDSACCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.msTDSAcctForReceipt);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("kendoGridBinding", ctx.mArrMultiTDSSetupGrid)("resizable", true)("height", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](53, 32, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.mArrMultiTDSSetupGrid1Col);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](58, 34, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](61, 36, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_21__.NumericTextBoxComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_14__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_15__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_16__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogActionsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_24__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66988:
/*!******************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/components/user-setup/user-setup.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSetupComponent: () => (/* binding */ UserSetupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user_setup_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-setup.model */ 40552);
/* harmony import */ var _constant_user_setup_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/user-setup.const */ 74981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _http_user_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/user-setup.service */ 48475);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function UserSetupComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-loader");
  }
}
function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 64)(2, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r20);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.bmlfonDeleteLineItem(rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r13, "");
  }
}
function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 67)(2, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.mArrUserSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "txt", item_r10.Field, "", rowIndex_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r15.mArrUserSetupGrid[rowIndex_r13][item_r10.Field])("name", rowIndex_r13 + "_" + item_r10.Field);
  }
}
function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 69)(2, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r28.mArrUserSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    })("blur", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r32.bmlfOpenLookupModal(item_r10.Field, "Finance User Setup", "UserId", "blur", ctx_r32.mArrUserSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "USERSETUP.USERID", rowIndex_r13));
    })("change", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r35.bmlfNgChanges(rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r37.bmlfOpenLookupModal(item_r10.Field, "Finance User Setup", "UserId", "click", ctx_r37.mArrUserSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "USERSETUP.USERID", rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.Field + rowIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r16.mArrUserSetupGrid[rowIndex_r13][item_r10.Field])("name", rowIndex_r13 + "_" + item_r10.Field)("disabled", ctx_r16.mbDiabledAllFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r10.Field, "Lookup", rowIndex_r13, "");
  }
}
function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 69)(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r42.mArrUserSetupGrid[rowIndex_r13][item_r10.Field] = $event);
    })("blur", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r46.bmlfOpenLookupModal(item_r10.Field, "Finance User Setup", "FinanceSeries", "blur", ctx_r46.mArrUserSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "USERSETUP.FINANCESERIES", rowIndex_r13));
    })("change", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r49.bmlfNgChanges(rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r43);
      const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.bmlfOpenLookupModal(item_r10.Field, "Finance User Setup", "FinanceSeries", "click", ctx_r51.mArrUserSetupGrid[rowIndex_r13][item_r10.Field], "custom", "txt" + item_r10.Field + rowIndex_r13, "USERSETUP.FINANCESERIES", rowIndex_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", "txt" + item_r10.Field + rowIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r17.mArrUserSetupGrid[rowIndex_r13][item_r10.Field])("name", rowIndex_r13 + "_" + item_r10.Field)("disabled", ctx_r17.mbDiabledAllFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r10.Field, "Lookup", rowIndex_r13, "");
  }
}
function UserSetupComponent_kendo_grid_column_79_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_3_Template, 4, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_4_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_5_Template, 5, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, UserSetupComponent_kendo_grid_column_79_ng_template_2_ng_container_6_Template, 5, 6, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 5, "USERSETUP." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "readonly");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "lookup" && item_r10.Field == "UserID");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "lookup" && item_r10.Field == "DefaultSeries");
  }
}
function UserSetupComponent_kendo_grid_column_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-grid-column", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, UserSetupComponent_kendo_grid_column_79_ng_template_2_Template, 7, 7, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("field", item_r10.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", (item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM")) && item_r10.Field != "User1" && item_r10.Field != "User2" ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 4, "USERSETUP." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", !item_r10.Display)("width", item_r10.Field == "SeqNo" || item_r10.Type == "Action" ? "30" : "120");
  }
}
function UserSetupComponent_kendo_dialog_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function UserSetupComponent_kendo_dialog_87_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r57.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_87_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_87_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r60.bmlfonDialogAction("No"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DELMESSAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function UserSetupComponent_kendo_dialog_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function UserSetupComponent_kendo_dialog_88_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_88_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r63.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_88_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_88_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function UserSetupComponent_kendo_dialog_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function UserSetupComponent_kendo_dialog_89_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r66.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_89_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r68.bmlfdialogDeleteLineAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_89_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r67);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r69.bmlfdialogDeleteLineAction("No"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DEL_LINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function UserSetupComponent_app_custom_lookup_modal_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-custom-lookup-modal", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("saveLookupField", function UserSetupComponent_app_custom_lookup_modal_91_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r70.bmlfSaveLookupField($event));
    })("closeLookup", function UserSetupComponent_app_custom_lookup_modal_91_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r71);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r72.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function UserSetupComponent_app_common_task_modal_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-task-modal", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeTaskModal", function UserSetupComponent_app_common_task_modal_92_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r73.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("taskData", ctx_r7.mobjTaskData);
  }
}
function UserSetupComponent_app_esignature_from_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-esignature-from", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("action", function UserSetupComponent_app_esignature_from_93_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r75.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx_r8.mobjSignatureData);
  }
}
function UserSetupComponent_kendo_dialog_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function UserSetupComponent_kendo_dialog_94_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r77.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_94_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r79.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_kendo_dialog_94_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r78);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r80.bmlfEsignAuditAlertEvent("CANCEL"));
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
class UserSetupComponent {
  constructor(route, router, formService, lookupService, toastMessageService, dateFormatService, utilService, userFieldService, lsService) {
    this.route = route;
    this.router = router;
    this.formService = formService;
    this.lookupService = lookupService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.lsService = lsService;
    this.mbIsLoading = false;
    this.msScreenName = 'User Setup';
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mObjHeaderModel = new _models_user_setup_model__WEBPACK_IMPORTED_MODULE_2__.UserSetupHeaderModel();
    this.mObjModelGrid1 = new _models_user_setup_model__WEBPACK_IMPORTED_MODULE_2__.UserSetupModel();
    this.mobjUserData = {};
    //public mnumDeleteLineIndex: number;
    this.miGridDeleteLineIndex = 0;
    this.mbdeleteLineItem = false;
    this.mbDeleteLineItemDialog = false;
    this.mbShowDeleteDialog = false;
    this.mbSaveDialogView = false;
    this.mbIsCloseMode = false;
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field--- */
    /**-------START: TASK Field ----*/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ----*/
    /**--------------E-Signature Field */
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
    /**--------------END : E-Signature Field */
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    this.mArrUserSetupGrid1Col = _constant_user_setup_const__WEBPACK_IMPORTED_MODULE_3__.UserSetupConstants.garrLineGridCol.map(ele => Object.assign({}, ele));
    this.mArrUserSetupGrid = []; //values
    this.msIsDelete = false;
  }
  ngOnInit() {
    //Roopesh Dube: 06July2021
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfonTypeChange();
  }
  //--------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------
  /**--------Start: Lookup Functionality----- */
  // LOOKUP MODAL 
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
      //this.bmlfcleanDescription(psField, psValue)
      this.mObjModelGrid1[psField] = "";
      this.mbIsLoading = false;
      return false;
    }
    let psReqData;
    if (psLookUpKey == 'FinanceSeries') {
      psReqData = {
        ScreenName: psScreenName,
        LookUpKey: psLookUpKey,
        Filter1: this.mObjHeaderModel.Type,
        Filter2: this.mArrUserSetupGrid[pnumRowIdx].UserID,
        Filter3: "",
        Filter4: '',
        Filter5: ''
      };
    } else if (psLookUpKey == 'UserId') {
      psReqData = {
        ScreenName: psScreenName,
        LookUpKey: psLookUpKey,
        Filter1: this.mobjUserData.CompName,
        Filter2: "",
        Filter3: "",
        Filter4: '',
        Filter5: ''
      };
    } else {
      psReqData = {
        ScreenName: psScreenName,
        LookUpKey: psLookUpKey,
        Filter1: "",
        Filter2: "",
        Filter3: "",
        Filter4: '',
        Filter5: ''
      };
    }
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
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        this.mobjLookupKeyData.event = psEvent;
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
    if (pobjEvent.type == 'custom') {}
    if (pobjEvent.field == "UserID") {
      //this.mArrUserSetupGrid[this.mnumLineItemRowIndex].UserID = pobjEvent.valueKey.trim();
      //this.mbIsChangeData = true;
      //this.bmlfUserExistChk(pobjEvent.valueKey.trim())
      let parrFilterData = [];
      this.mArrUserSetupGrid[this.mnumLineItemRowIndex].UserID = pobjEvent.valueKey.trim();
      //this.mArrUserSetupGrid[this.mnumLineItemRowIndex].DefaultSeries = '';
      parrFilterData = this.mArrUserSetupGrid.filter(obj => obj['UserID'].toUpperCase() == pobjEvent.valueKey.trim().toUpperCase());
      if (parrFilterData.length == 0) {
        this.mArrUserSetupGrid[this.mnumLineItemRowIndex].UserID = pobjEvent.valueKey.trim();
        this.mArrUserSetupGrid[this.mnumLineItemRowIndex].DefaultSeries = '';
      } else if (parrFilterData.length == 2) {
        this.mArrUserSetupGrid[this.mnumLineItemRowIndex].UserID = '';
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('USERSETUP.MSG.USERIDEXISTCHK'));
      }
    } else if (pobjEvent.field == "DefaultSeries") {
      this.mArrUserSetupGrid[this.mnumLineItemRowIndex].DefaultSeries = pobjEvent.valueKey.trim();
      this.mbIsChangeData = true;
    }
  }
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    document.getElementById(pobjEvent.eleId).focus();
  }
  //-----------------------------------------------------------------------------------    
  // Clean Description
  //    bmlfcleanDescription(eleId: any, value: any) {
  //     if (this.bmlfIsEmpty(value)) {
  //         if (eleId == "MultiDimKey") {
  //             this.msMultiDimKeyDescription = '';
  //         }
  //     }
  // }
  //-----------------------------------------------------------------------------------    
  bmlfIsEmpty(value) {
    return typeof value === "undefined" || value === null || value === '';
  }
  //--------------------------------------------------------------------------------------
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  /**--------End: Lookup Functionality----- */
  //--------------------------------------------------------------------------------------
  bmlfonTypeChange() {
    this.mbIsLoading = true;
    this.mArrUserSetupGrid = [];
    let pobjJData = {
      JSON: JSON.stringify({
        HeaderData: [{
          "ScreenName": this.mObjHeaderModel.Type
        }],
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    this.formService.bmlfonGetUserSetupDetail(pobjJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Failure.");
        return;
      }
      if (res.Response[0].ErrorCode == "") {
        if (res.DetailData.length > 0) {
          this.mArrUserSetupGrid = res.DetailData;
        }
        // let parrGridData = res.HeaderData;
        // parrGridData.forEach(ele => {
        //     const pobjDataCopy: any = Object.assign({}, this.mObjModelGrid1);
        //     pobjDataCopy.Active = ele.Active;
        //     pobjDataCopy.SeqNum = ele.SeqNum;
        //     pobjDataCopy.DimensionKey = ele.DimensionKey;
        //     pobjDataCopy.DimensionDesc = ele.DimensionDesc;
        //     //ele.Recdate = new Date(ele.Recdate);
        //     this.mArrMultiDimensionGroupGrid.push(pobjDataCopy)
        // })
        this.mbIsChangeData = false;
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  //--------------------------------------------------------------------------------------
  bmlfNgChanges(rowIndex) {
    this.mbIsChangeData = true;
  }
  //--------------------------------------------------------------------------------------
  bmlfAddLineValidation() {
    let pbResult = true;
    this.mArrUserSetupGrid.some(ele => {
      if (this.bmlfIsEmpty(ele.UserID) || this.bmlfIsEmpty(ele.DefaultSeries)) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('DIMENSIONSSETUP.MSG.ROWCHECK') + ele.SeqNo);
        let fieldID;
        if (this.bmlfIsEmpty(ele.UserID)) {
          fieldID = 'txtUserID' + (ele.SeqNo - 1);
          document.getElementById(fieldID).focus();
        } else {
          fieldID = 'txtDefaultSeries' + (ele.SeqNo - 1);
          document.getElementById(fieldID).focus();
        }
        pbResult = false;
      }
    });
    return pbResult;
  }
  //--------------------------------------------------------------------------------------
  bmlfonAddLineGrid() {
    if (this.bmlfAddLineValidation() == true) {
      if (!this.utilService.mbWrite) {
        this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
        return false;
      }
      let pRowIndex = 1;
      if (this.mArrUserSetupGrid.length > 0) {
        pRowIndex = this.mArrUserSetupGrid[this.mArrUserSetupGrid.length - 1].SeqNo + 1;
      } else {
        pRowIndex = 1;
      }
      const pobjDataCopy = Object.assign({}, this.mObjModelGrid1);
      pobjDataCopy.SeqNo = pRowIndex;
      this.mArrUserSetupGrid.push(pobjDataCopy);
      this.mbIsChangeData = true;
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfonDeleteLineItem(rowIndex) {
    debugger;
    if (!this.utilService.mbDelete) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_DELETE'));
      return;
    }
    ;
    this.miGridDeleteLineIndex = rowIndex;
    this.mbdeleteLineItem = true;
  }
  //--------------------------------------------------------------------------------------
  bmlfdialogDeleteLineAction(action) {
    if (action == 'Yes') {
      this.mbdeleteLineItem = false;
      this.msIsDelete = true;
      this.mArrUserSetupGrid.splice(this.miGridDeleteLineIndex, 1);
      this.mbIsChangeData = true;
      this.bmlfSaveData();
    }
    if (action == 'No') {
      this.mbdeleteLineItem = false;
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfSaveData() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    if (this.mArrUserSetupGrid.length == 0) {
      return;
    }
    if (this.mbIsChangeData == false) {
      return;
    }
    if (this.bmlfAddLineValidation() == true) {
      let parrDataList = this.mArrUserSetupGrid.map(x => Object.assign({}, x));
      parrDataList.map(ele => {
        ele.Type = this.mObjHeaderModel.Type;
      });
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: parrDataList,
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.formService.bmlfonSaveUserSetupDetail(reqData).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          if (this.msIsDelete) {
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.DELETE'));
          } else {
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.SAVE'));
          }
          if (this.mbIsCloseMode == true) {
            this.router.navigate(['/main/dashboard/dashboardpage']);
          } else {
            this.bmlfonTypeChange();
            this.mbIsChangeData = false;
          }
          this.msIsDelete = false;
        }
      });
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfCloseForm() {
    if (this.mbIsChangeData == true) {
      //if (this.mbIsChangeData == true || this.FieldExtender.mbChange == true || this.customCtrl.mbChange == true) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
  }
  //--------------------------------------------------------------------------------------
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSaveData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = false;
    }
  }
  //--------------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------
  //Close Task MODAL 
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  //--------------------------------------------------------------------------------------
  /**----E- Signature Code----- */
  // check e signature
  // bmlfCheckEsignApplicableOnForm() {
  //     let pobjReqData: any = {
  //         JSON: JSON.stringify({
  //             HeaderData: [{
  //                 MenuScreenName: this.msScreenName,
  //             }],
  //             Response: [{
  //                 ResponseText: '',
  //                 ErrorCode: ''
  //             }]
  //         })
  //     };
  //     this.userFieldService.bmlfCheckEsignApplicable(pobjReqData).subscribe(res => {
  //         if (res == null) {
  //             return false;
  //         }
  //         if (res.Response[0].ErrorCode == '') {
  //             this.mbIsEsignature = res.ESignData[0].Permision;
  //             this.mbIsEsignADTPermision = res.ESignData[0].ADTPermision;
  //             this.mobjSignatureData.reasonMinLength = res.ESignData[0].ReasonLength;
  //             this.mobjSignatureData.reqSignAuth = res.ESignData[0].NoOfReqSign;
  //         }
  //     }, err => {
  //         console.log(err);
  //     });
  // }
  // open e signature modal
  // bmlfopenESignatureModal() {
  //     this.mbSignatureModal = true;
  //     this.mobjSignatureData.isShow = true;
  //     this.mobjSignatureData.primaryKey = this.mobjModel.DepartmentID;
  // }
  // check e signature
  // bmlfChkESignature(pobjData) {
  //     this.mbSignatureModal = pobjData.isShow;
  //     if (pobjData.event == 'Save') {
  //         this.mbIsEsignature = false;
  //         this.mobjModel.ESG_REASON = pobjData.changeReason;
  //         this.mobjModel.ESG_APPROVER = pobjData.eSignApprover;
  //         this.mbIsChangeData = true;
  //         this.bmlfSubmitData();
  //     } else if (pobjData.event == 'Cancel') {
  //         this.mobjCommonAlertData = {}
  //         this.mbCommonAlertDialog = true;
  //         this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
  //         this.mobjCommonAlertData.event = 'close';
  //         this.mbIsChangeData = true;
  //     }
  // }
  // bmlfEsignAuditAlertEvent(event) {
  //     if (event == 'No') {
  //     } else {
  //         this.mbIsEsignAuditDialog = false;
  //     }
  // }
  /**---END----E- Signature Code----- */
  //--------------------------------------------------------------------------------------
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Finance User Setup.pdf', '_blank');
  }
  static #_ = this.ɵfac = function UserSetupComponent_Factory(t) {
    return new (t || UserSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_user_setup_service__WEBPACK_IMPORTED_MODULE_4__.UserSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_5__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_9__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: UserSetupComponent,
    selectors: [["app-user-setup"]],
    viewQuery: function UserSetupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    decls: 95,
    vars: 38,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container"], ["id", "divForm", 1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["tabindex", "5", "id", "cmbType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "Payment Entry"], ["value", "Receipt Entry"], ["value", "Vendor Debit Note"], ["value", "AR Invoice"], ["value", "AP Voucher"], ["value", "Customer Credit Note"], ["value", "Journal Entry"], ["value", "Contra Entry"], ["value", "Write Off Vendor Document"], ["value", "Write Off Customer Document"], ["value", "Salary And Advances"], ["value", "Banking GL Entry"], ["value", "Customer Vendor GL"], [1, "row", "rowheight100p"], ["id", "kendodiv", 1, "col-md-12", "height100p", "form-container"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305"], ["type", "button", "data-target", "dtLineGrid1", "id", "cmdAddLineItem", 1, "btn", "btn-sky", "btn-sm", "m_b_10", 3, "click"], ["id", "dtEquationLineGrid", 1, "low_space_table", "responsive_grid", 3, "kendoGridBinding", "resizable", "height"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "hidden", "title", "width", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "Kendo_dialog_msg", "style", "z-index: 10000000;", 3, "minWidth", "width", "close", 4, "ngIf"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], [3, "field", "hidden", "title", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "grid-icon-sec"], [3, "id", "click"], [1, "fa", "fa-trash-o"], [1, "form-group", "custom-inline-input"], ["type", "text", "disabled", "", "readonly", "", 1, "form-control", "grid-form-control", 3, "ngModel", "name", "id", "ngModelChange"], [1, "form-group", "custom_flex"], ["type", "text", "maxlength", "100", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "blur", "change"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["type", "text", "maxlength", "80", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "blur", "change"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdYesDelAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoDelAction", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], ["id", "Kendo_dialog_msg", 2, "z-index", "10000000", 3, "minWidth", "width", "close"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "keyData", "saveLookupField", "closeLookup"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"]],
    template: function UserSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, UserSetupComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "app-how-to-video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 11)(14, "ul")(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 18)(30, "section", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 26)(40, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function UserSetupComponent_Template_select_ngModelChange_40_listener($event) {
          return ctx.mObjHeaderModel.Type = $event;
        })("change", function UserSetupComponent_Template_select_change_40_listener() {
          return ctx.bmlfonTypeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, " Payment Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, " Receipt Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, " Vendor Debit Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, " AR Invoice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, " AP Voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, " Customer Credit Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, " Journal Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56, " Contra Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, " Write Off Vendor Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60, " Write Off Customer Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62, " Salary And Advances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64, " Banking GL Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, " Customer Vendor GL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "div", 41)(69, "div", 42)(70, "div", 43)(71, "div", 44)(72, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_button_click_72_listener() {
          return ctx.bmlfonAddLineGrid();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "kendo-grid", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](77, "kendo-grid-messages", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](79, UserSetupComponent_kendo_grid_column_79_Template, 3, 6, "kendo-grid-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div", 50)(81, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_button_click_81_listener() {
          return ctx.bmlfSaveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UserSetupComponent_Template_button_click_84_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, UserSetupComponent_kendo_dialog_87_Template, 16, 14, "kendo-dialog", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](88, UserSetupComponent_kendo_dialog_88_Template, 19, 15, "kendo-dialog", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](89, UserSetupComponent_kendo_dialog_89_Template, 16, 14, "kendo-dialog", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](90, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](91, UserSetupComponent_app_custom_lookup_modal_91_Template, 1, 1, "app-custom-lookup-modal", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](92, UserSetupComponent_app_common_task_modal_92_Template, 1, 1, "app-common-task-modal", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](93, UserSetupComponent_app_esignature_from_93_Template, 1, 1, "app-esignature-from", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](94, UserSetupComponent_kendo_dialog_94_Template, 16, 12, "kendo-dialog", 60);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 22, "USERSETUP.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 24, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 26, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](38, 28, "USERSETUP.TYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.mObjHeaderModel.Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](74, 30, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("kendoGridBinding", ctx.mArrUserSetupGrid)("resizable", true)("height", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](78, 32, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.mArrUserSetupGrid1Col);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](83, 34, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](86, 36, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_13__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_14__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_15__.HowToVideoComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogActionsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 48961:
/*!*******************************************************************************!*\
  !*** ./src/app/main/finance-configuration/constant/dimensions-setup.const.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionsSetupConstants: () => (/* binding */ DimensionsSetupConstants)
/* harmony export */ });
class DimensionsSetupConstants {
  static #_ = this.garrLineGridCol = [{
    Type: 'Action',
    Display: true,
    Field: '',
    Title: 'ACTION'
  }, {
    Type: 'textReadOnly',
    Display: false,
    Field: 'SeqNum',
    Title: 'SEQNUM'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'Active',
    Title: 'ACTIVE'
  }, {
    Type: 'textReadOnly',
    Display: true,
    Field: 'DimensionID',
    Title: 'DIMENSIONID'
  }, {
    Type: 'text',
    Display: true,
    Field: 'DimensionDesc',
    Title: 'DESCRIPTION'
  }];
}

/***/ }),

/***/ 88344:
/*!**************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/constant/multi-dimensional-setup.const.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDimensionalSetupConstants: () => (/* binding */ MultiDimensionalSetupConstants)
/* harmony export */ });
class MultiDimensionalSetupConstants {
  static #_ = this.garrLineGridCol = [{
    Type: 'textReadOnly',
    Display: true,
    Field: 'SeqNum',
    Title: 'SEQNUM'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'Active',
    Title: 'ACTIVE'
  }, {
    Type: 'textReadOnly',
    Display: true,
    Field: 'DimensionKey',
    Title: 'DIMENSION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'DimensionDesc',
    Title: 'DESCRIPTION'
  }];
}

/***/ }),

/***/ 8014:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/constant/retain-earning-account-setup.const.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetainEarningAccountSetupConstants: () => (/* binding */ RetainEarningAccountSetupConstants)
/* harmony export */ });
class RetainEarningAccountSetupConstants {
  static #_ = this.garrLineGridCol = [{
    Type: 'textReadOnly',
    Display: true,
    Field: 'AccountKey',
    Title: 'ACCOUNTKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Description',
    Title: 'DESCRIPTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SegValue',
    Title: 'REGION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SegDesc',
    Title: 'REGIONDESC'
  }, {
    Type: 'textReadOnly',
    Display: false,
    Field: 'AcctKey',
    Title: ''
  }];
}

/***/ }),

/***/ 69732:
/*!************************************************************************!*\
  !*** ./src/app/main/finance-configuration/constant/tds-setup.const.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TDSSetupConstants: () => (/* binding */ TDSSetupConstants)
/* harmony export */ });
class TDSSetupConstants {
  static #_ = this.garrLineGridCol = [{
    Type: 'Action',
    Display: true,
    Field: '',
    Title: 'ACTION'
  }, {
    Type: 'text',
    Display: false,
    Field: 'SeqNum',
    Title: 'SEQNUM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TDSType',
    Title: 'TDSTYPE'
  }, {
    Type: 'text',
    Display: false,
    Field: 'Threshold',
    Title: 'THRESHOLD'
  }, {
    Type: 'number',
    Display: true,
    Field: 'TDSRate',
    Title: 'TDSRATE'
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'Acct',
    Title: 'ACCT'
  }, {
    Type: 'text',
    Display: false,
    Field: 'Flag',
    Title: ''
  }];
}

/***/ }),

/***/ 74981:
/*!*************************************************************************!*\
  !*** ./src/app/main/finance-configuration/constant/user-setup.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSetupConstants: () => (/* binding */ UserSetupConstants)
/* harmony export */ });
class UserSetupConstants {
  static #_ = this.garrLineGridCol = [{
    Type: 'Action',
    Display: true,
    Field: '',
    Title: 'ACTION'
  }, {
    Type: 'readonly',
    Display: false,
    Field: 'SeqNo',
    Title: 'SEQNO'
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'UserID',
    Title: 'USERID'
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'DefaultSeries',
    Title: 'DEFAULTSERIES'
  }];
}

/***/ }),

/***/ 62881:
/*!************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/finance-configuration-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceConfigurationRoutingModule: () => (/* binding */ FinanceConfigurationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/guards/auth.guard */ 8036);
/* harmony import */ var _finance_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance-configuration.component */ 52051);
/* harmony import */ var _components_multi_dimensional_setup_multi_dimensional_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/multi-dimensional-setup/multi-dimensional-setup.component */ 33141);
/* harmony import */ var _components_dimensions_setup_dimensions_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dimensions-setup/dimensions-setup.component */ 87746);
/* harmony import */ var _components_user_setup_user_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-setup/user-setup.component */ 66988);
/* harmony import */ var _components_account_segment_setup_account_segment_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-segment-setup/account-segment-setup.component */ 16115);
/* harmony import */ var _components_retain_earning_account_setup_retain_earning_account_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/retain-earning-account-setup/retain-earning-account-setup.component */ 66230);
/* harmony import */ var _components_account_group_sequence_setup_account_group_sequence_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-group-sequence-setup/account-group-sequence-setup.component */ 81462);
/* harmony import */ var _components_1099_type_setup_type_master_ninety_nine_type_master_ninety_nine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/1099-type-setup/type-master-ninety-nine/type-master-ninety-nine.component */ 7995);
/* harmony import */ var _components_tds_setup_tds_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tds-setup/tds-setup.component */ 3725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);













const routes = [{
  path: '',
  component: _finance_configuration_component__WEBPACK_IMPORTED_MODULE_1__.FinanceConfigurationComponent,
  children: [{
    path: 'multi-dimensional-setup',
    component: _components_multi_dimensional_setup_multi_dimensional_setup_component__WEBPACK_IMPORTED_MODULE_2__.MultiDimensionalSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'dimensions-setup',
    component: _components_dimensions_setup_dimensions_setup_component__WEBPACK_IMPORTED_MODULE_3__.DimensionsSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'user-setup',
    component: _components_user_setup_user_setup_component__WEBPACK_IMPORTED_MODULE_4__.UserSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'account-segment-setup',
    component: _components_account_segment_setup_account_segment_setup_component__WEBPACK_IMPORTED_MODULE_5__.AccountSegmentSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'retain-earning-account-setup',
    component: _components_retain_earning_account_setup_retain_earning_account_setup_component__WEBPACK_IMPORTED_MODULE_6__.RetainEarningAccountSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'account-group-sequence-setup',
    component: _components_account_group_sequence_setup_account_group_sequence_setup_component__WEBPACK_IMPORTED_MODULE_7__.AccountGroupSequenceSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: '1099-type-setup',
    component: _components_1099_type_setup_type_master_ninety_nine_type_master_ninety_nine_component__WEBPACK_IMPORTED_MODULE_8__.TypeMasterNinetyNineComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'tds-setup',
    component: _components_tds_setup_tds_setup_component__WEBPACK_IMPORTED_MODULE_9__.TDSSetupComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }]
}];
class FinanceConfigurationRoutingModule {
  static #_ = this.ɵfac = function FinanceConfigurationRoutingModule_Factory(t) {
    return new (t || FinanceConfigurationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: FinanceConfigurationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FinanceConfigurationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 52051:
/*!*******************************************************************************!*\
  !*** ./src/app/main/finance-configuration/finance-configuration.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceConfigurationComponent: () => (/* binding */ FinanceConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 33794);
/* harmony import */ var _i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/hi */ 27884);
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/zh */ 97395);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 99686);
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ 64061);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 93324);
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/vi */ 39313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);










class FinanceConfigurationComponent {
  /**
   * Constructor
   * @param {LanTranslationLoaderService} _lanTranslationLoaderService
   */
  constructor(_lanTranslationLoaderService) {
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
    this._lanTranslationLoaderService.loadTranslations(_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale, _i18n_zh__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, _i18n_es__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_vi__WEBPACK_IMPORTED_MODULE_6__.locale);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FinanceConfigurationComponent_Factory(t) {
    return new (t || FinanceConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: FinanceConfigurationComponent,
    selectors: [["app-r-and-d"]],
    decls: 1,
    vars: 0,
    template: function FinanceConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37414:
/*!****************************************************************************!*\
  !*** ./src/app/main/finance-configuration/finance-configuration.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceConfigurationModule: () => (/* binding */ FinanceConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-intl */ 87809);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ 28277);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 90393);
/* harmony import */ var _finance_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance-configuration.component */ 52051);
/* harmony import */ var _finance_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-configuration-routing.module */ 62881);
/* harmony import */ var _components_multi_dimensional_setup_multi_dimensional_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/multi-dimensional-setup/multi-dimensional-setup.component */ 33141);
/* harmony import */ var _http_multi_dimensional_setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/multi-dimensional-setup.service */ 92160);
/* harmony import */ var _http_dimensions_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/dimensions-setup.service */ 18014);
/* harmony import */ var _components_dimensions_setup_dimensions_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dimensions-setup/dimensions-setup.component */ 87746);
/* harmony import */ var _components_user_setup_user_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-setup/user-setup.component */ 66988);
/* harmony import */ var _http_user_setup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/user-setup.service */ 48475);
/* harmony import */ var _components_account_segment_setup_account_segment_setup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account-segment-setup/account-segment-setup.component */ 16115);
/* harmony import */ var _http_account_segment_setup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/account-segment-setup.service */ 55086);
/* harmony import */ var _components_retain_earning_account_setup_retain_earning_account_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/retain-earning-account-setup/retain-earning-account-setup.component */ 66230);
/* harmony import */ var _http_retain_earning_account_setup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http/retain-earning-account-setup.service */ 32570);
/* harmony import */ var _components_account_group_sequence_setup_account_group_sequence_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/account-group-sequence-setup/account-group-sequence-setup.component */ 81462);
/* harmony import */ var _http_account_group_sequence_setup_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./http/account-group-sequence-setup.service */ 68160);
/* harmony import */ var _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @progress/kendo-angular-treelist */ 67884);
/* harmony import */ var _components_1099_type_setup_type_master_ninety_nine_type_master_ninety_nine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/1099-type-setup/type-master-ninety-nine/type-master-ninety-nine.component */ 7995);
/* harmony import */ var _http_type_setup_ninety_nine_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./http/type-setup-ninety-nine.service */ 62632);
/* harmony import */ var _components_tds_setup_tds_setup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tds-setup/tds-setup.component */ 3725);
/* harmony import */ var _http_tds_setup_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./http/tds-setup.service */ 96446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 61699);

































class FinanceConfigurationModule {
  static #_ = this.ɵfac = function FinanceConfigurationModule_Factory(t) {
    return new (t || FinanceConfigurationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: FinanceConfigurationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    providers: [_http_multi_dimensional_setup_service__WEBPACK_IMPORTED_MODULE_5__.MultiDimensionalSetupService, _http_dimensions_setup_service__WEBPACK_IMPORTED_MODULE_6__.DimensionsSetupService, _http_user_setup_service__WEBPACK_IMPORTED_MODULE_9__.UserSetupService, _http_account_segment_setup_service__WEBPACK_IMPORTED_MODULE_11__.AccountSegmentSetupService, _http_retain_earning_account_setup_service__WEBPACK_IMPORTED_MODULE_13__.RetainEarningAccountSetupService, _http_account_group_sequence_setup_service__WEBPACK_IMPORTED_MODULE_15__.AccountGroupSequenceSetupService, _http_type_setup_ninety_nine_service__WEBPACK_IMPORTED_MODULE_17__.TypeSetupNinetyNineService, _http_tds_setup_service__WEBPACK_IMPORTED_MODULE_19__.TDSSetupService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _finance_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__.FinanceConfigurationRoutingModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogsModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DateInputsModule, _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_26__.IntlModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_27__.DropDownsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.PDFModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__.NgxExtendedPdfViewerModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.TreeListModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.ExcelModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.PDFModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](FinanceConfigurationModule, {
    declarations: [_finance_configuration_component__WEBPACK_IMPORTED_MODULE_2__.FinanceConfigurationComponent, _components_multi_dimensional_setup_multi_dimensional_setup_component__WEBPACK_IMPORTED_MODULE_4__.MultiDimensionalSetupComponent, _components_dimensions_setup_dimensions_setup_component__WEBPACK_IMPORTED_MODULE_7__.DimensionsSetupComponent, _components_user_setup_user_setup_component__WEBPACK_IMPORTED_MODULE_8__.UserSetupComponent, _components_account_segment_setup_account_segment_setup_component__WEBPACK_IMPORTED_MODULE_10__.AccountSegmentSetupComponent, _components_retain_earning_account_setup_retain_earning_account_setup_component__WEBPACK_IMPORTED_MODULE_12__.RetainEarningAccountSetupComponent, _components_account_group_sequence_setup_account_group_sequence_setup_component__WEBPACK_IMPORTED_MODULE_14__.AccountGroupSequenceSetupComponent, _components_1099_type_setup_type_master_ninety_nine_type_master_ninety_nine_component__WEBPACK_IMPORTED_MODULE_16__.TypeMasterNinetyNineComponent, _components_tds_setup_tds_setup_component__WEBPACK_IMPORTED_MODULE_18__.TDSSetupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _finance_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__.FinanceConfigurationRoutingModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_23__.ButtonsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogsModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DateInputsModule, _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_26__.IntlModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_1__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_25__.DatePickerModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_27__.DropDownsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_28__.PDFModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_30__.NgxExtendedPdfViewerModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.TreeListModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.ExcelModule, _progress_kendo_angular_treelist__WEBPACK_IMPORTED_MODULE_31__.PDFModule]
  });
})();

/***/ }),

/***/ 68160:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/account-group-sequence-setup.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountGroupSequenceSetupService: () => (/* binding */ AccountGroupSequenceSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class AccountGroupSequenceSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetAcGroupSequenceData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetAcGroupSequenceData`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonUpdateAcGroupSequenceData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateAcGroupSequenceData`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function AccountGroupSequenceSetupService_Factory(t) {
    return new (t || AccountGroupSequenceSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AccountGroupSequenceSetupService,
    factory: AccountGroupSequenceSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55086:
/*!**********************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/account-segment-setup.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSegmentSetupService: () => (/* binding */ AccountSegmentSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class AccountSegmentSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfSaveSegmentData(headerData, formMode) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSegmentData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetAccountSegmentSetup(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetAccountSegmentSetup`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfUpdateFormatData(headerData, formMode) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateMasking`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function AccountSegmentSetupService_Factory(t) {
    return new (t || AccountSegmentSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AccountSegmentSetupService,
    factory: AccountSegmentSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18014:
/*!*****************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/dimensions-setup.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionsSetupService: () => (/* binding */ DimensionsSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class DimensionsSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetDimensionSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetDimensionSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveDimensionSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveDimensionSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonDeleteDimensionSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteDimensionSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function DimensionsSetupService_Factory(t) {
    return new (t || DimensionsSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DimensionsSetupService,
    factory: DimensionsSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 92160:
/*!************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/multi-dimensional-setup.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDimensionalSetupService: () => (/* binding */ MultiDimensionalSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class MultiDimensionalSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetMultiDimensionSetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetMultiDimensionSetup`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveMultiDimensionSetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveMultiDimensionSetup`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function MultiDimensionalSetupService_Factory(t) {
    return new (t || MultiDimensionalSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MultiDimensionalSetupService,
    factory: MultiDimensionalSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32570:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/retain-earning-account-setup.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetainEarningAccountSetupService: () => (/* binding */ RetainEarningAccountSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class RetainEarningAccountSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetRetainEarningSetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetRetainEarningSetup`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveRetainEarningSetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveRetainEarningSetup`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonGenerateRetainEarningAccount(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GenerateRetainEarningAccount`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function RetainEarningAccountSetupService_Factory(t) {
    return new (t || RetainEarningAccountSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RetainEarningAccountSetupService,
    factory: RetainEarningAccountSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96446:
/*!**********************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/tds-setup.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TDSSetupService: () => (/* binding */ TDSSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class TDSSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetTDSSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetTDSSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveTDSSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveTDSSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonDeleteTDSSetupLine(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteTDSSetupLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function TDSSetupService_Factory(t) {
    return new (t || TDSSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TDSSetupService,
    factory: TDSSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62632:
/*!***********************************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/type-setup-ninety-nine.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeSetupNinetyNineService: () => (/* binding */ TypeSetupNinetyNineService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class TypeSetupNinetyNineService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfDelete1099HeaderAndDetail(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/Delete1099HeaderAndDetail`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfDelete1099SetupDetail(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/Delete1099SetupDetail`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSave1099Setup(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/CreateUpdate1099Detail`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGet1099SetupHeader(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/Get1099SetupHeaderDetail`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGet1099SetupDetail(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/Get1099SetupDetail`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function TypeSetupNinetyNineService_Factory(t) {
    return new (t || TypeSetupNinetyNineService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TypeSetupNinetyNineService,
    factory: TypeSetupNinetyNineService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48475:
/*!***********************************************************************!*\
  !*** ./src/app/main/finance-configuration/http/user-setup.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSetupService: () => (/* binding */ UserSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class UserSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetUserSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetUserSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveUserSetupDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveUserSetupDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function UserSetupService_Factory(t) {
    return new (t || UserSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: UserSetupService,
    factory: UserSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 33794:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/en.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    MULTIDIMENSIONALSETUP: {
      TITLE: "Multi-Dimensional Setup",
      SEQNUM: "Seq No.",
      ACTIVE: "Active",
      DIMENSION: "Dimension",
      DESCRIPTION: "Description",
      MSG: {
        DESCRIPTIONCHECK: "Enter Description for Line No. "
      }
    },
    DIMENSIONSSETUP: {
      TITLE: "Dimensions Setup",
      ACTION: "Action",
      SEQNUM: "Seq No.",
      ACTIVE: "Active",
      MULTIDIMKEY: "Dimension",
      DIMENSIONID: "ID",
      DESCRIPTION: "Description",
      MULTIDIMENSION: "  Multi Dimension",
      MSG: {
        ROWCHECK: "Please Complete the Entries in Row No.  ",
        DIMENSIONCHK: "Dimension cannot be blank.",
        DIMENSIONIDCHK: "Dimension ID cannot be blank in Row No. ",
        DIMENSIONIDEXISTCHK: "Dimension ID already Exist."
      }
    },
    USERSETUP: {
      TITLE: "User Setup",
      ACTION: "Action",
      TYPE: "Type",
      SEQNO: "Seq No.",
      USERID: "User ID",
      DEFAULTSERIES: "Default Series",
      FINANCESERIES: "Finance Series",
      MSG: {
        ROWCHECK: "Please Complete the Entries in Row No.  ",
        USERIDEXISTCHK: "User ID already Exist."
      }
    },
    ACCOUNTSEGMENTSETUP: {
      TITLE: 'Account Segment Setup',
      SEGMEMTNAME: 'Segment Name',
      LENGTH: 'Length',
      SEGMEMT5: 'Segment [5]',
      SEGMEMT1: 'Segment [1]',
      SEGMEMT2: 'Segment [2]',
      SEGMEMT3: 'Segment [3]',
      SEGMEMT4: 'Segment [4]',
      TOTALLENGTH: "Total Length",
      SEGSQU: "Segment Sequence",
      ACCOUNTKEY: "Account Key Formate Separator and Display",
      UPDATEFORMAT: "Update Format",
      AUTOZERO: "Without Auto Zero Padding",
      CLOSETODIV: "Close to Divisonal Account Segments",
      DIVINAME: "Division Name",
      MSG: {
        LENGTHVALIDATION: "Total length of all segments should not be greater then 80"
      }
    },
    RETAINEARNNINGACCSETUP: {
      TITLE: "Retain Earning Account Setup",
      SEGMENTNAME: " Segment Name",
      ACCOUNTKEY: "Account Key",
      ACCOUNTKEYFORMAT: "Account Format",
      DEFAULTDESC: "Default Description",
      DESCRIPTION: "Description",
      REGION: "Region",
      REGIONDESC: "Region Description",
      GENERATEACCT: "Generate Account",
      MSG: {}
    },
    ACCOUNTGROUPSEQUENCESETUP: {
      TITLE: "Account Group Sequence Setup",
      GROUPID: "Group ID",
      GROUPNAME: "Group Name",
      GROUPTYPE: "Group Type",
      PARENTGROUPID: "Parent ID",
      PARENTGROUPTREE: "Parent Group Tree",
      GROUPLEVEL: "Level",
      GROUPSEQNO: "Seq. No."
    },
    TYPESETUP: {
      TITLE: "1099 Setup",
      TABLE1: "1099 Type",
      TABLE2: "1099 Box",
      TypeKey1099: "1099 Type Key",
      Type1099: "1099 Type",
      Box1099: "1099 Box",
      BoxDescription: "Box Description",
      RecUserid: "Rec UserId",
      RecDate: "Rec Date",
      Min1099Amt: "Minimum 1099 Amount",
      Action: "Action",
      SELECT: "Select",
      So: "Sr.No.",
      MSG: {
        Box1099: "Enter Box1099",
        TYPEKEY: "Enter 1099 Type",
        MIN1099AMT: "Enter Minimum 1099 Amount",
        DUPLICATEBOX: "Duplicate 1099 Box"
      }
    },
    TDSSETUP: {
      TITLE: "TDS Setup",
      ACTION: "Action",
      SEQNUM: "Seq Num.",
      TDSTYPE: "Type",
      TDSRATE: "Rate",
      ACCT: "Account No.",
      THRESHOLD: "Threshold",
      TDSACCT: "TDS Account No. For Receipts",
      ACCOUNTS: "Accounts",
      MSG: {
        ROWCHECK: "Please Complete the Entries in Row No.  ",
        TDSTYPEEXISTCHK: "TDS Type Already Entered.",
        TDSRECEIPTACCCHK: "TDS Account No. For Receipts cannot be blank."
      }
    }
  }
};

/***/ }),

/***/ 64061:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/es.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    MULTIDIMENSIONALSETUP: {
      "TITLE": "Configuración multidimensional",
      "SEQNUM": "Número de secuencia",
      "ACTIVE": "Activo",
      "DIMENSION": "Dimensión",
      "DESCRIPTION": "Descripción",
      "MSG": {
        "DESCRIPTIONCHECK": "Ingrese la descripción para la línea N.° "
      }
    },
    "DIMENSIONSSETUP": {
      "TITLE": "Configuración de dimensiones",
      "ACTION": "Acción",
      "SEQNUM": "Número de secuencia",
      "ACTIVE": "Activo",
      "MULTIDIMKEY": "Dimensión",
      "DIMENSIONID": "ID",
      "DESCRIPTION": "Descripción",
      "MULTIDIMENSION": "Multi Dimensión",
      "MSG": {
        "ROWCHECK": "Complete las entradas en la fila N.° ",
        "DIMENSIONCHK": "La dimensión no puede estar en blanco.",
        "DIMENSIONIDCHK": "El ID de dimensión no puede estar en blanco en la fila N.° ",
        "DIMENSIONIDEXISTCHK": "El ID de dimensión ya existe."
      }
    },
    "USERSETUP": {
      "TITLE": "Configuración de usuario",
      "ACTION": "Acción",
      "TYPE": "Tipo",
      "SEQNO": "Número de secuencia",
      "USERID": "ID de usuario",
      "DEFAULTSERIES": "Serie predeterminada",
      "FINANCESERIES": "Serie financiera",
      "MSG": {
        "ROWCHECK": "Complete las entradas en la fila N.° ",
        "USERIDEXISTCHK": "El ID de usuario ya existe."
      }
    },
    "ACCOUNTSEGMENTSETUP": {
      "TITLE": "Configuración de segmentos de cuenta",
      "SEGMEMTNAME": "Nombre del segmento",
      "LENGTH": "Longitud",
      "SEGMEMT5": "Segmento [5]",
      "SEGMEMT1": "Segmento [1]",
      "SEGMEMT2": "Segmento [2]",
      "SEGMEMT3": "Segmento [3]",
      "SEGMEMT4": "Segmento [4]",
      "TOTALLENGTH": "Longitud total",
      "SEGSQU": "Secuencia de segmento",
      "ACCOUNTKEY": "Clave de cuenta Formato Separador y Visualización",
      "UPDATEFORMAT": "Actualizar formato",
      "AUTOZERO": "Sin relleno automático de cero",
      "CLOSETODIV": "Cerca de segmentos de cuenta divisional",
      "DIVINAME": "Nombre de la división",
      "MSG": {
        "LENGTHVALIDATION": "La longitud total de todos los segmentos no debe ser mayor a 80"
      }
    },
    "RETAINEARNNINGACCSETUP": {
      "TITLE": "Configuración de cuenta de retención de ganancias",
      "SEGMENTNAME": "Nombre del segmento",
      "ACCOUNTKEY": "Clave de cuenta",
      "ACCOUNTKEYFORMAT": "Formato de cuenta",
      "DEFAULTDESC": "Descripción predeterminada",
      "DESCRIPTION": "Descripción",
      "REGION": "Región",
      "REGIONDESC": "Descripción de la región",
      "GENERATEACCT": "Generar cuenta",
      "MSG": {}
    },
    "ACCOUNTGROUPSEQUENCESETUP": {
      "TITLE": "Configuración de secuencia de grupo de cuentas",
      "GROUPID": "ID de grupo",
      "GROUPNAME": "Nombre del grupo",
      "GROUPTYPE": "Tipo de grupo",
      "PARENTGROUPID": "ID del grupo principal",
      "PARENTGROUPTREE": "Árbol de grupo principal",
      "GROUPLEVEL": "Nivel de grupo",
      "GROUPSEQNO": "N.° de secuencia de grupo"
    },
    "TYPESETUP": {
      "TITLE": "Configuración 1099",
      "TABLE1": "Tipo 1099",
      "TABLE2": "Caja 1099",
      "TypeKey1099": "Clave de tipo 1099",
      "Type1099": "Tipo 1099",
      "Box1099": "Caja 1099",
      "BoxDescription": "Descripción de la caja",
      "RecUserid": "ID de usuario",
      "RecDate": "Fecha de creación",
      "Min1099Amt": "Monto mínimo 1099",
      "Action": "Acción",
      "SELECT": "Seleccionar",
      "So": "N.° de secuencia",
      "MSG": {
        "Box1099": "Ingrese Caja 1099",
        "TYPEKEY": "Ingrese Tipo 1099",
        "MIN1099AMT": "Ingrese el monto mínimo 1099",
        "DUPLICATEBOX": "Caja 1099 duplicada"
      }
    },
    "TDSSETUP": {
      "TITLE": "Configuración de TDS",
      "ACTION": "Acción",
      "SEQNUM": "N.° de secuencia",
      "TDSTYPE": "Tipo",
      "TDSRATE": "Tarifa",
      "ACCT": "Número de cuenta",
      "THRESHOLD": "Umbral",
      "TDSACCT": "Número de cuenta TDS para recibos",
      "ACCOUNTS": "Cuentas",
      "MSG": {
        "ROWCHECK": "Complete las entradas en la fila N.° ",
        "TDSTYPEEXISTCHK": "Tipo de TDS ya ingresado.",
        "TDSRECEIPTACCCHK": "El número de cuenta TDS para recibos no puede estar en blanco."
      }
    }
  }
};

/***/ }),

/***/ 99686:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/fr.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    "MULTIDIMENSIONALSETUP": {
      "TITLE": "Configuration Multi-Dimensionnelle",
      "SEQNUM": "Numéro de Séquence",
      "ACTIVE": "Actif",
      "DIMENSION": "Dimension",
      "DESCRIPTION": "Description",
      "MSG": {
        "DESCRIPTIONCHECK": "Entrez une description pour la ligne numéro "
      }
    },
    "DIMENSIONSSETUP": {
      "TITLE": "Configuration des Dimensions",
      "ACTION": "Action",
      "SEQNUM": "Numéro de Séquence",
      "ACTIVE": "Actif",
      "MULTIDIMKEY": "Dimension",
      "DIMENSIONID": "ID",
      "DESCRIPTION": "Description",
      "MULTIDIMENSION": "Multi-Dimension",
      "MSG": {
        "ROWCHECK": "Veuillez compléter les entrées dans la ligne numéro ",
        "DIMENSIONCHK": "La dimension ne peut pas être vide.",
        "DIMENSIONIDCHK": "L'ID de la dimension ne peut pas être vide dans la ligne numéro ",
        "DIMENSIONIDEXISTCHK": "L'ID de la dimension existe déjà."
      }
    },
    "USERSETUP": {
      "TITLE": "Configuration Utilisateur",
      "ACTION": "Action",
      "TYPE": "Type",
      "SEQNO": "Numéro de Séquence",
      "USERID": "Identifiant Utilisateur",
      "DEFAULTSERIES": "Série par Défaut",
      "FINANCESERIES": "Série Financière",
      "MSG": {
        "ROWCHECK": "Veuillez compléter les entrées dans la ligne numéro ",
        "USERIDEXISTCHK": "L'identifiant utilisateur existe déjà."
      }
    },
    "ACCOUNTSEGMENTSETUP": {
      "TITLE": "Configuration des Segments de Compte",
      "SEGMEMTNAME": "Nom du Segment",
      "LENGTH": "Longueur",
      "SEGMEMT5": "Segment [5]",
      "SEGMEMT1": "Segment [1]",
      "SEGMEMT2": "Segment [2]",
      "SEGMEMT3": "Segment [3]",
      "SEGMEMT4": "Segment [4]",
      "TOTALLENGTH": "Longueur Totale",
      "SEGSQU": "Séquence des Segments",
      "ACCOUNTKEY": "Clé de Compte - Séparateur et Affichage du Format",
      "UPDATEFORMAT": "Mettre à Jour le Format",
      "AUTOZERO": "Sans Remplissage Auto Zéro",
      "CLOSETODIV": "Proche des Segments de Compte Divisionnaires",
      "DIVINAME": "Nom de la Division",
      "MSG": {
        "LENGTHVALIDATION": "La longueur totale de tous les segments ne doit pas dépasser 80"
      }
    },
    "RETAINEARNNINGACCSETUP": {
      "TITLE": "Configuration du Compte de Report des Bénéfices",
      "SEGMENTNAME": "Nom du Segment",
      "ACCOUNTKEY": "Clé de Compte",
      "ACCOUNTKEYFORMAT": "Format de Compte",
      "DEFAULTDESC": "Description par Défaut",
      "DESCRIPTION": "Description",
      "REGION": "Région",
      "REGIONDESC": "Description de la Région",
      "GENERATEACCT": "Générer le Compte",
      "MSG": {}
    },
    "ACCOUNTGROUPSEQUENCESETUP": {
      "TITLE": "Configuration de la Séquence des Groupes de Comptes",
      "GROUPID": "ID du Groupe",
      "GROUPNAME": "Nom du Groupe",
      "GROUPTYPE": "Type de Groupe",
      "PARENTGROUPID": "ID du Groupe Parent",
      "PARENTGROUPTREE": "Arbre du Groupe Parent",
      "GROUPLEVEL": "Niveau",
      "GROUPSEQNO": "Numéro de Séquence"
    },
    "TYPESETUP": {
      "TITLE": "Configuration 1099",
      "TABLE1": "Type 1099",
      "TABLE2": "Case 1099",
      "TypeKey1099": "Clé Type 1099",
      "Type1099": "Type 1099",
      "Box1099": "Case 1099",
      "BoxDescription": "Description de la Case",
      "RecUserid": "ID d'Utilisateur Enregistrement",
      "RecDate": "Date d'Enregistrement",
      "Min1099Amt": "Montant Minimum 1099",
      "Action": "Action",
      "SELECT": "Sélectionner",
      "So": "Numéro de Séquence",
      "MSG": {
        "Box1099": "Entrez la Case 1099",
        "TYPEKEY": "Entrez le Type 1099",
        "MIN1099AMT": "Entrez le Montant Minimum 1099",
        "DUPLICATEBOX": "Case 1099 en double"
      }
    },
    "TDSSETUP": {
      "TITLE": "Configuration de la TDS",
      "ACTION": "Action",
      "SEQNUM": "Numéro de Séquence",
      "TDSTYPE": "Type de TDS",
      "TDSRATE": "Taux",
      "ACCT": "Numéro de Compte",
      "THRESHOLD": "Seuil",
      "TDSACCT": "Numéro de Compte TDS pour les Reçus",
      "ACCOUNTS": "Comptes",
      "MSG": {
        "ROWCHECK": "Veuillez compléter les entrées dans la ligne numéro ",
        "TDSTYPEEXISTCHK": "Type de TDS déjà saisi.",
        "TDSRECEIPTACCCHK": "Le numéro de compte TDS pour les reçus ne peut pas être vide."
      }
    }
  }
};

/***/ }),

/***/ 27884:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/hi.ts ***!
  \*******************************************************/
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

/***/ 93324:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/pt.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    MULTIDIMENSIONALSETUP: {
      TITLE: "Configuração Multidimensional",
      SEQNUM: "Seq No.",
      ACTIVE: "Ativo",
      DIMENSION: "Dimensão",
      DESCRIPTION: "Descrição",
      MSG: {
        DESCRIPTIONCHECK: "Digite uma descrição para a linha nº "
      }
    },
    DIMENSIONSSETUP: {
      TITLE: "Configuração de Dimensões",
      ACTION: "Ação",
      SEQNUM: "Seq No.",
      ACTIVE: "Ativo",
      MULTIDIMKEY: "Dimensão",
      DIMENSIONID: "ID",
      DESCRIPTION: "Descrição",
      MULTIDIMENSION: "Multi Dimensão",
      MSG: {
        ROWCHECK: "Por favor, complete as entradas na linha nº ",
        DIMENSIONCHK: "A dimensão não pode estar em branco.",
        DIMENSIONIDCHK: "O ID da dimensão não pode estar em branco na linha nº ",
        DIMENSIONIDEXISTCHK: "ID da dimensão já existe."
      }
    },
    USERSETUP: {
      TITLE: "Configuração de Usuário",
      ACTION: "Ação",
      TYPE: "Tipo",
      SEQNO: "Seq No.",
      USERID: "ID do Usuário",
      DEFAULTSERIES: "Série Padrão",
      FINANCESERIES: "Série Financeira",
      MSG: {
        ROWCHECK: "Por favor, complete as entradas na linha nº ",
        USERIDEXISTCHK: "ID do usuário já existe."
      }
    },
    ACCOUNTSEGMENTSETUP: {
      TITLE: 'Configuração de Segmento de Conta',
      SEGMEMTNAME: 'Nome do Segmento',
      LENGTH: 'Comprimento',
      SEGMEMT5: 'Segmento [5]',
      SEGMEMT1: 'Segmento [1]',
      SEGMEMT2: 'Segmento [2]',
      SEGMEMT3: 'Segmento [3]',
      SEGMEMT4: 'Segmento [4]',
      TOTALLENGTH: "Comprimento Total",
      SEGSQU: "Sequência de Segmento",
      ACCOUNTKEY: "Chave da Formatação e Exibição da Conta",
      UPDATEFORMAT: "Atualizar Formato",
      AUTOZERO: "Sem Preenchimento Automático de Zero",
      CLOSETODIV: "Próximo aos Segmentos de Conta Divisionais",
      DIVINAME: "Nome da Divisão",
      MSG: {
        LENGTHVALIDATION: "O comprimento total de todos os segmentos não deve ser superior a 80"
      }
    },
    RETAINEARNNINGACCSETUP: {
      TITLE: "Configuração de Conta de Lucros Retidos",
      SEGMENTNAME: "Nome do Segmento",
      ACCOUNTKEY: "Chave da Conta",
      ACCOUNTKEYFORMAT: "Formato da Conta",
      DEFAULTDESC: "Descrição Padrão",
      DESCRIPTION: "Descrição",
      REGION: "Região",
      REGIONDESC: "Descrição da Região",
      GENERATEACCT: "Gerar Conta",
      MSG: {}
    },
    ACCOUNTGROUPSEQUENCESETUP: {
      TITLE: "Configuração de Sequência de Grupo de Conta",
      GROUPID: "ID do Grupo",
      GROUPNAME: "Nome do Grupo",
      GROUPTYPE: "Tipo de Grupo",
      PARENTGROUPID: "ID do Grupo Pai",
      PARENTGROUPTREE: "Árvore do Grupo Pai",
      GROUPLEVEL: "Nível do Grupo",
      GROUPSEQNO: "Seq. No. do Grupo"
    },
    TYPESETUP: {
      TITLE: "Configuração 1099",
      TABLE1: "Tipo 1099",
      TABLE2: "Caixa 1099",
      TypeKey1099: "Chave do Tipo 1099",
      Type1099: "Tipo 1099",
      Box1099: "Caixa 1099",
      BoxDescription: "Descrição da Caixa",
      RecUserid: "ID do Usuário de Registro",
      RecDate: "Data de Registro",
      Min1099Amt: "Valor Mínimo 1099",
      Action: "Ação",
      SELECT: "Selecionar",
      So: "Nr.",
      MSG: {
        Box1099: "Digite a Caixa 1099",
        TYPEKEY: "Digite o Tipo 1099",
        MIN1099AMT: "Digite o Valor Mínimo 1099",
        DUPLICATEBOX: "Caixa 1099 duplicada"
      }
    },
    TDSSETUP: {
      TITLE: "Configuração TDS",
      ACTION: "Ação",
      SEQNUM: "Nr. Seq.",
      TDSTYPE: "Tipo",
      TDSRATE: "Taxa",
      ACCT: "Número da Conta",
      THRESHOLD: "Limiar",
      TDSACCT: "Número da Conta TDS Para Recebimentos",
      ACCOUNTS: "Contas",
      MSG: {
        ROWCHECK: "Por favor, complete as entradas na linha nº ",
        TDSTYPEEXISTCHK: "Tipo TDS já inserido.",
        TDSRECEIPTACCCHK: "Número da Conta TDS Para Recebimentos não pode estar em branco."
      }
    }
  }
};

/***/ }),

/***/ 39313:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/vi.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    MULTIDIMENSIONALSETUP: {
      TITLE: "Thiết lập Đa Chiều",
      SEQNUM: "Số thứ tự",
      ACTIVE: "Hoạt động",
      DIMENSION: "Chiều",
      DESCRIPTION: "Mô tả",
      MSG: {
        DESCRIPTIONCHECK: "Nhập Mô tả cho Dòng số "
      }
    },
    DIMENSIONSSETUP: {
      TITLE: "Thiết lập Chiều",
      ACTION: "Hành động",
      SEQNUM: "Số thứ tự",
      ACTIVE: "Hoạt động",
      MULTIDIMKEY: "Chiều",
      DIMENSIONID: "ID",
      DESCRIPTION: "Mô tả",
      MULTIDIMENSION: "  Đa chiều",
      MSG: {
        ROWCHECK: "Vui lòng Hoàn tất các Mục nhập ở Dòng số ",
        DIMENSIONCHK: "Chiều không thể trống.",
        DIMENSIONIDCHK: "ID Chiều không thể trống ở Dòng số ",
        DIMENSIONIDEXISTCHK: "ID Chiều đã tồn tại."
      }
    },
    USERSETUP: {
      TITLE: "Thiết lập Người dùng",
      ACTION: "Hành động",
      TYPE: "Loại",
      SEQNO: "Số thứ tự",
      USERID: "ID Người dùng",
      DEFAULTSERIES: "Loạt mặc định",
      FINANCESERIES: "Loạt tài chính",
      MSG: {
        ROWCHECK: "Vui lòng Hoàn tất các Mục nhập ở Dòng số ",
        USERIDEXISTCHK: "ID Người dùng đã tồn tại."
      }
    },
    ACCOUNTSEGMENTSETUP: {
      TITLE: 'Thiết lập Đoạn tài khoản',
      SEGMEMTNAME: 'Tên đoạn',
      LENGTH: 'Độ dài',
      SEGMEMT5: 'Đoạn [5]',
      SEGMEMT1: 'Đoạn [1]',
      SEGMEMT2: 'Đoạn [2]',
      SEGMEMT3: 'Đoạn [3]',
      SEGMEMT4: 'Đoạn [4]',
      TOTALLENGTH: "Tổng độ dài",
      SEGSQU: "Thứ tự đoạn",
      ACCOUNTKEY: "Định dạng và Hiển thị Key Tài khoản",
      UPDATEFORMAT: "Cập nhật định dạng",
      AUTOZERO: "Không có Auto Zero Padding",
      CLOSETODIV: "Gần với Các đoạn tài khoản Phòng ban",
      DIVINAME: "Tên phòng ban",
      MSG: {
        LENGTHVALIDATION: "Tổng độ dài của tất cả các đoạn không được lớn hơn 80"
      }
    },
    RETAINEARNNINGACCSETUP: {
      TITLE: "Thiết lập Tài khoản Lưu lượng lợi nhuận",
      SEGMENTNAME: " Tên đoạn",
      ACCOUNTKEY: "Key Tài khoản",
      ACCOUNTKEYFORMAT: "Định dạng Tài khoản",
      DEFAULTDESC: "Mô tả Mặc định",
      DESCRIPTION: "Mô tả",
      REGION: "Khu vực",
      REGIONDESC: "Mô tả Khu vực",
      GENERATEACCT: "Tạo Tài khoản",
      MSG: {}
    },
    ACCOUNTGROUPSEQUENCESETUP: {
      TITLE: "Thiết lập Thứ tự Nhóm Tài khoản",
      GROUPID: "ID Nhóm",
      GROUPNAME: "Tên Nhóm",
      GROUPTYPE: "Loại Nhóm",
      PARENTGROUPID: "ID Nhóm cha",
      PARENTGROUPTREE: "Cây Nhóm cha",
      GROUPLEVEL: "Cấp độ",
      GROUPSEQNO: "Số thứ tự Nhóm"
    },
    TYPESETUP: {
      TITLE: "Thiết lập 1099",
      TABLE1: "Loại 1099",
      TABLE2: "Hộp 1099",
      TypeKey1099: "Key Loại 1099",
      Type1099: "Loại 1099",
      Box1099: "Hộp 1099",
      BoxDescription: "Mô tả Hộp",
      RecUserid: "Rec UserId",
      RecDate: "Rec Date",
      Min1099Amt: "Số tiền tối thiểu 1099",
      Action: "Hành động",
      SELECT: "Chọn",
      So: "Số thứ tự",
      MSG: {
        Box1099: "Nhập Hộp1099",
        TYPEKEY: "Nhập Loại 1099",
        MIN1099AMT: "Nhập Số tiền tối thiểu 1099",
        DUPLICATEBOX: "Hộp 1099 Trùng lặp"
      }
    },
    TDSSETUP: {
      TITLE: "Thiết lập TDS",
      ACTION: "Hành động",
      SEQNUM: "Số thứ tự",
      TDSTYPE: "Loại",
      TDSRATE: "Tỷ lệ",
      ACCT: "Số tài khoản",
      THRESHOLD: "Ngưỡng",
      TDSACCT: "Số tài khoản TDS cho Tiếp nhận",
      ACCOUNTS: "Tài khoản",
      MSG: {
        ROWCHECK: "Vui lòng Hoàn tất các Mục nhập ở Dòng số ",
        TDSTYPEEXISTCHK: "Loại TDS đã được Nhập.",
        TDSRECEIPTACCCHK: "Số tài khoản TDS cho Tiếp nhận không thể trống."
      }
    }
  }
};

/***/ }),

/***/ 97395:
/*!*******************************************************!*\
  !*** ./src/app/main/finance-configuration/i18n/zh.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    "MULTIDIMENSIONALSETUP": {
      "TITLE": "多维设置",
      "SEQNUM": "序号",
      "ACTIVE": "激活",
      "DIMENSION": "维度",
      "DESCRIPTION": "描述",
      "MSG": {
        "DESCRIPTIONCHECK": "输入第 "
      }
    },
    "DIMENSIONSSETUP": {
      "TITLE": "维度设置",
      "ACTION": "操作",
      "SEQNUM": "序号",
      "ACTIVE": "激活",
      "MULTIDIMKEY": "维度",
      "DIMENSIONID": "ID",
      "DESCRIPTION": "描述",
      "MULTIDIMENSION": "多维度",
      "MSG": {
        "ROWCHECK": "请完成第 ",
        "DIMENSIONCHK": "维度不能为空。",
        "DIMENSIONIDCHK": "在第 行，维度 ID 不能为空。",
        "DIMENSIONIDEXISTCHK": "维度 ID 已经存在。"
      }
    },
    "USERSETUP": {
      "TITLE": "用户设置",
      "ACTION": "操作",
      "TYPE": "类型",
      "SEQNO": "序号",
      "USERID": "用户ID",
      "DEFAULTSERIES": "默认系列",
      "FINANCESERIES": "财务系列",
      "MSG": {
        "ROWCHECK": "请完成第 ",
        "USERIDEXISTCHK": "用户ID已存在。"
      }
    },
    "ACCOUNTSEGMENTSETUP": {
      "TITLE": "账户分段设置",
      "SEGMEMTNAME": "分段名称",
      "LENGTH": "长度",
      "SEGMEMT5": "分段 [5]",
      "SEGMEMT1": "分段 [1]",
      "SEGMEMT2": "分段 [2]",
      "SEGMEMT3": "分段 [3]",
      "SEGMEMT4": "分段 [4]",
      "TOTALLENGTH": "总长度",
      "SEGSQU": "分段序列",
      "ACCOUNTKEY": "账户键格式分隔符和显示",
      "UPDATEFORMAT": "更新格式",
      "AUTOZERO": "无自动零填充",
      "CLOSETODIV": "接近事业部账户分段",
      "DIVINAME": "事业部名称",
      "MSG": {
        "LENGTHVALIDATION": "所有分段的总长度不应大于80"
      }
    },
    "RETAINEARNNINGACCSETUP": {
      "TITLE": "留存收益账户设置",
      "SEGMENTNAME": "分段名称",
      "ACCOUNTKEY": "账户键",
      "ACCOUNTKEYFORMAT": "账户格式",
      "DEFAULTDESC": "默认描述",
      "DESCRIPTION": "描述",
      "REGION": "区域",
      "REGIONDESC": "区域描述",
      "GENERATEACCT": "生成账户",
      "MSG": {}
    },
    "ACCOUNTGROUPSEQUENCESETUP": {
      "TITLE": "账户组序列设置",
      "GROUPID": "组 ID",
      "GROUPNAME": "组名称",
      "GROUPTYPE": "组类型",
      "PARENTGROUPID": "父级 ID",
      "PARENTGROUPTREE": "父级组树",
      "GROUPLEVEL": "级别",
      "GROUPSEQNO": "序列号"
    },
    "TYPESETUP": {
      "TITLE": "1099 设置",
      "TABLE1": "1099 类型",
      "TABLE2": "1099 方框",
      "TypeKey1099": "1099 类型键",
      "Type1099": "1099 类型",
      "Box1099": "1099 方框",
      "BoxDescription": "方框描述",
      "RecUserid": "记录用户 ID",
      "RecDate": "记录日期",
      "Min1099Amt": "最小 1099 金额",
      "Action": "操作",
      "SELECT": "选择",
      "So": "序号",
      "MSG": {
        "Box1099": "请输入 1099 方框",
        "TYPEKEY": "请输入 1099 类型",
        "MIN1099AMT": "请输入最小 1099 金额",
        "DUPLICATEBOX": "重复的 1099 方框"
      }
    },
    "TDSSETUP": {
      "TITLE": "TDS 设置",
      "ACTION": "操作",
      "SEQNUM": "序号",
      "TDSTYPE": "类型",
      "TDSRATE": "税率",
      "ACCT": "账户号码",
      "THRESHOLD": "阈值",
      "TDSACCT": "用于收款的 TDS 账户号码",
      "ACCOUNTS": "账户",
      "MSG": {
        "ROWCHECK": "请完成第几行的输入",
        "TDSTYPEEXISTCHK": "TDS 类型已存在。",
        "TDSRECEIPTACCCHK": "用于收款的 TDS 账户号码不能为空。"
      }
    }
  }
};

/***/ }),

/***/ 14559:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/account-group-sequence-setup.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountGroupSequenceSetupModel: () => (/* binding */ AccountGroupSequenceSetupModel)
/* harmony export */ });
class AccountGroupSequenceSetupModel {
  constructor() {
    this.GroupID = 0;
    this.GroupName = "";
    this.GroupType = 0;
    this.ParentGroupID = 0;
    this.ParentGroupTree = "";
    this.GroupLevel = 0;
    this.GroupSeqNo = 0;
    this.Recuserid = "";
    this.Recdate = new Date();
    this.CreateDate = new Date();
    this.CreateUserID = "";
    this.ModifyDate = new Date();
    this.ModifyUserID = "";
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM1 = 0;
    this.CUSTOM2 = 0;
    this.CUSTOM3 = 0;
    this.CUSTOM4 = 0;
    this.CUSTOM5 = 0;
    this.CUSTOM6 = 0;
    this.CUSTOM7 = 0;
    this.CUSTOM8 = 0;
    this.CUSTOM9 = 0;
    this.CUSTOM10 = 0;
    this.Segment1 = 0;
  }
}

/***/ }),

/***/ 5254:
/*!**********************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/account-segment-setup.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSegmentSetupModel: () => (/* binding */ AccountSegmentSetupModel),
/* harmony export */   OtherInfoModel: () => (/* binding */ OtherInfoModel)
/* harmony export */ });
class AccountSegmentSetupModel {
  constructor() {
    this.SegName1 = "";
    this.SegLength1 = "";
    this.SegName2 = "";
    this.SegLength2 = "";
    this.SegName3 = "";
    this.SegLength3 = "";
    this.SegName4 = "";
    this.SegLength4 = "";
    this.AcctSegName5 = "Account Key";
    this.AcctSegLength5 = "";
    this.SegSeq = "";
    this.NoOfSeg = "";
    this.TotalSegLength = "";
    // SCR 3370-1001 Western India Cashew
    // public SegmentedYearEnd: any = "";
    this.Recdate = new Date();
    this.Recuserid = "";
    this.CreateDate = new Date();
    this.CreateUserID = "";
    this.ModifyDate = new Date();
    this.ModifyUserID = "";
    this.User1 = "";
    this.User2 = "";
    this.User3 = "";
    this.User4 = "";
    this.User5 = "";
    this.User6 = null;
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_APPROVER = "";
    this.ESG_REASON = "";
    this.CUSTOM1 = null;
    this.CUSTOM2 = null;
    this.CUSTOM3 = null;
    this.CUSTOM4 = null;
    this.CUSTOM5 = null;
    this.CUSTOM6 = null;
    this.CUSTOM7 = null;
    this.CUSTOM8 = null;
    this.CUSTOM9 = null;
    this.CUSTOM10 = null;
    this.SegmentedYearEnd = "N";
    this.YearEndSegment = "";
    this.AutoPadding = "";
  }
}
class OtherInfoModel {
  constructor() {
    this.MaskingCharacter = "";
    this.TransactionExists = "";
    this.AccountExists = "";
  }
}

/***/ }),

/***/ 51470:
/*!*****************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/dimensions-setup.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DimensionsSetupModel: () => (/* binding */ DimensionsSetupModel)
/* harmony export */ });
class DimensionsSetupModel {
  constructor() {
    this.SeqNum = 0;
    this.Active = true;
    this.MultiDimKey = "";
    this.DimensionID = "";
    this.DimensionDesc = "";
    this.RecUserID = "";
    this.RecDate = new Date();
    this.CreateUserID = "";
    this.CreateDate = new Date();
    this.ModifyUserID = "";
    this.ModifyDate = new Date();
    this.RecUserID = '';
    //this.RecDate = new Date();
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM1 = 0;
    this.CUSTOM2 = 0;
    this.CUSTOM3 = 0;
    this.CUSTOM4 = 0;
    this.CUSTOM5 = 0;
    this.CUSTOM6 = 0;
    this.CUSTOM7 = 0;
    this.CUSTOM8 = 0;
    this.CUSTOM9 = 0;
    this.CUSTOM10 = 0;
    this.Flag = '';
  }
}

/***/ }),

/***/ 6816:
/*!************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/multi-dimensional-setup.model.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDimensionalSetupModel: () => (/* binding */ MultiDimensionalSetupModel)
/* harmony export */ });
class MultiDimensionalSetupModel {
  constructor() {
    this.SeqNum = 0;
    this.Active = true;
    this.DimensionKey = "";
    this.DimensionDesc = "";
    this.RecUserID = "";
    this.RecDate = new Date();
    this.CreateUserID = "";
    this.CreateDate = new Date();
    this.ModifyUserID = "";
    this.ModifyDate = new Date();
    this.RecUserID = '';
    this.RecDate = new Date();
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM1 = 0;
    this.CUSTOM2 = 0;
    this.CUSTOM3 = 0;
    this.CUSTOM4 = 0;
    this.CUSTOM5 = 0;
    this.CUSTOM6 = 0;
    this.CUSTOM7 = 0;
    this.CUSTOM8 = 0;
    this.CUSTOM9 = 0;
    this.CUSTOM10 = 0;
    this.Flag = '';
  }
}

/***/ }),

/***/ 26756:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/retain-earning-account-setup.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetainEarningAccountSetupHeaderModel: () => (/* binding */ RetainEarningAccountSetupHeaderModel),
/* harmony export */   RetainEarningAccountSetupModel: () => (/* binding */ RetainEarningAccountSetupModel)
/* harmony export */ });
class RetainEarningAccountSetupHeaderModel {
  constructor() {
    this.YearEndSegment = "";
    this.SegmentedYearEnd = "";
    this.AcctKey = "";
    this.Description = "";
  }
}
class RetainEarningAccountSetupModel {
  constructor() {
    this.AccountKey = "";
    this.Description = "";
    this.SegValue = "";
    this.SegDesc = "";
    this.AcctKey = "";
  }
}

/***/ }),

/***/ 73332:
/*!**********************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/tds-setup.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TDSSetupModel: () => (/* binding */ TDSSetupModel)
/* harmony export */ });
class TDSSetupModel {
  constructor() {
    this.SeqNum = 0;
    this.TDSType = "";
    this.Threshold = 0;
    this.TDSRate = 0.0;
    this.Acct = "";
    this.RecUserID = "";
    this.RecDate = new Date();
    this.CreateUserID = "";
    this.CreateDate = new Date();
    this.ModifyUserID = "";
    this.ModifyDate = new Date();
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM1 = null;
    this.CUSTOM2 = null;
    this.CUSTOM3 = null;
    this.CUSTOM4 = null;
    this.CUSTOM5 = null;
    this.CUSTOM6 = null;
    this.CUSTOM7 = null;
    this.CUSTOM8 = null;
    this.CUSTOM9 = null;
    this.CUSTOM10 = null;
    this.Flag = '';
  }
}

/***/ }),

/***/ 28073:
/*!**********************************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/type-setup-ninetynine.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeatilDataModel: () => (/* binding */ DeatilDataModel),
/* harmony export */   TypeSetupNinetyNineModel: () => (/* binding */ TypeSetupNinetyNineModel)
/* harmony export */ });
class TypeSetupNinetyNineModel {
  constructor() {
    this.TypeKey1099 = "";
    this.Type1099 = "";
    this.RecUserID = "";
    this.RecDate = new Date();
    this.CreateUserID = "";
    this.CreateDate = new Date();
    this.ModifyUserID = "";
    this.ModifyDate = new Date();
    this.User1 = "";
    this.User2 = "";
    this.User3 = "";
    this.User4 = "";
    this.User5 = "";
    this.User6 = null;
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_APPROVER = "";
    this.ESG_REASON = "";
    this.CUSTOM1 = null;
    this.CUSTOM2 = null;
    this.CUSTOM3 = null;
    this.CUSTOM4 = null;
    this.CUSTOM5 = null;
    this.CUSTOM6 = null;
    this.CUSTOM7 = null;
    this.CUSTOM8 = null;
    this.CUSTOM9 = null;
    this.CUSTOM10 = null;
    this.Flag = "";
  }
}
class DeatilDataModel {
  constructor() {
    this.TypeKey1099 = "";
    this.SeqNo = "";
    this.Box1099 = "";
    this.BoxDescription = "";
    this.Min1099Amt = "";
    this.RecUserID = "";
    this.RecDate = new Date();
    this.CreateUserID = "";
    this.CreateDate = new Date();
    this.ModifyUserID = "";
    this.ModifyDate = new Date();
    this.User1 = "";
    this.User2 = "";
    this.User3 = "";
    this.User4 = "";
    this.User5 = "";
    this.User6 = null;
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_APPROVER = "";
    this.ESG_REASON = "";
    this.CUSTOM1 = null;
    this.CUSTOM2 = null;
    this.CUSTOM3 = null;
    this.CUSTOM4 = null;
    this.CUSTOM5 = null;
    this.CUSTOM6 = null;
    this.CUSTOM7 = null;
    this.CUSTOM8 = null;
    this.CUSTOM9 = null;
    this.CUSTOM10 = null;
    this.Flag = "";
  }
}

/***/ }),

/***/ 40552:
/*!***********************************************************************!*\
  !*** ./src/app/main/finance-configuration/models/user-setup.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSetupHeaderModel: () => (/* binding */ UserSetupHeaderModel),
/* harmony export */   UserSetupModel: () => (/* binding */ UserSetupModel)
/* harmony export */ });
class UserSetupHeaderModel {
  constructor() {
    this.Type = "Payment Entry";
  }
}
class UserSetupModel {
  constructor() {
    this.SeqNo = 0;
    this.Type = "";
    this.UserID = "";
    this.DefaultSeries = "";
    this.Recuserid = "";
    this.Recdate = new Date();
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM1 = 0;
    this.CUSTOM2 = 0;
    this.CUSTOM3 = 0;
    this.CUSTOM4 = 0;
    this.CUSTOM5 = 0;
    this.CUSTOM6 = 0;
    this.CUSTOM7 = 0;
    this.CUSTOM8 = 0;
    this.CUSTOM9 = 0;
    this.CUSTOM10 = 0;
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_main_finance-configuration_finance-configuration_module_ts.js.map