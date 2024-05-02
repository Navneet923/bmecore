"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["src_app_main_crm_crm_module_ts"],{

/***/ 82686:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-opportunity-master/sales-opportunity-master/sales-opportunity-master.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityMasterComponent: () => (/* binding */ SalesOpportunityMasterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _models_sales_opportunity_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/sales-opportunity-master */ 61142);
/* harmony import */ var _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constant/salesopportunitymasterconst */ 13959);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _http_sales_opportunity_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/sales-opportunity-master.service */ 18471);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-component-form/custom-component-form.component */ 37638);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/esignature-from/esignature-from.component */ 37743);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/common-grid-customization/common-grid-customization */ 9537);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 21916);




























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function SalesOpportunityMasterComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-loader");
  }
}
function SalesOpportunityMasterComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemType_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("value", itemType_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", itemType_r12.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", itemType_r12.value, " ");
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 53)(1, "dd")(2, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_grid_column_53_1_ng_template_0_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const rowIndex_r23 = restoredCtx.rowIndex;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r24.bmlfonDeleteLineItem(rowIndex_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r23 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("id", "cmdRemoveItem", rowIndex_r23, "");
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_kendo_grid_column_53_1_ng_template_0_Template, 4, 1, "ng-template", 52);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dd")(1, "div", 56)(2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SalesOpportunityMasterComponent_kendo_grid_column_53_2_ng_template_0_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const rowIndex_r28 = restoredCtx.rowIndex;
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.msMarray[rowIndex_r28][item_r14.Field] = $event);
    })("keydown", function SalesOpportunityMasterComponent_kendo_grid_column_53_2_ng_template_0_Template_input_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r32.keyDownHandler($event));
    })("change", function SalesOpportunityMasterComponent_kendo_grid_column_53_2_ng_template_0_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const rowIndex_r28 = restoredCtx.rowIndex;
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.bmlfvalicationDubicatecheck(ctx_r33.msMarray[rowIndex_r28][item_r14.Field], rowIndex_r28, item_r14.Field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r28 = ctx.rowIndex;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", "txtValue" + rowIndex_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r26.msMarray[rowIndex_r28].Flag != "A")("ngModel", ctx_r26.msMarray[rowIndex_r28][item_r14.Field])("name", rowIndex_r28 + "_" + item_r14.Field);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_kendo_grid_column_53_2_ng_template_0_Template, 3, 4, "ng-template", 52);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dd")(1, "div", 56)(2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function SalesOpportunityMasterComponent_kendo_grid_column_53_3_ng_template_0_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r40);
      const rowIndex_r38 = restoredCtx.rowIndex;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r39.bmlfOnChange(rowIndex_r38));
    })("ngModelChange", function SalesOpportunityMasterComponent_kendo_grid_column_53_3_ng_template_0_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r40);
      const rowIndex_r38 = restoredCtx.rowIndex;
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r41.msMarray[rowIndex_r38][item_r14.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r38 = ctx.rowIndex;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", "txtValue" + rowIndex_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r36.msMarray[rowIndex_r38][item_r14.Field])("name", rowIndex_r38 + "_" + item_r14.Field);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_kendo_grid_column_53_3_ng_template_0_Template, 3, 3, "ng-template", 52);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dd")(1, "div", 56)(2, "kendo-numerictextbox", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function SalesOpportunityMasterComponent_kendo_grid_column_53_4_ng_template_0_Template_kendo_numerictextbox_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const rowIndex_r46 = restoredCtx.rowIndex;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r47.bmlfOnChange(rowIndex_r46));
    })("ngModelChange", function SalesOpportunityMasterComponent_kendo_grid_column_53_4_ng_template_0_Template_kendo_numerictextbox_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const rowIndex_r46 = restoredCtx.rowIndex;
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r49.msMarray[rowIndex_r46][item_r14.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r46 = ctx.rowIndex;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("spinners", false)("step", 0)("min", 0)("max", 100)("ngModel", ctx_r44.msMarray[rowIndex_r46][item_r14.Field])("id", "txtValue" + rowIndex_r46)("name", rowIndex_r46 + "_" + item_r14.Field)("autoCorrect", ctx_r44.autoCorrect)("decimals", ctx_r44.miQtyPrecision)("format", ctx_r44.miQtyPrecisionFormat);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_kendo_grid_column_53_4_ng_template_0_Template, 3, 10, "ng-template", 52);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "dd")(1, "div", 56)(2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const rowIndex_r54 = restoredCtx.rowIndex;
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r55.msMarray[rowIndex_r54][item_r14.Field] = $event);
    })("change", function SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const rowIndex_r54 = restoredCtx.rowIndex;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.bmlfOnChange(rowIndex_r54));
    })("blur", function SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template_input_blur_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const rowIndex_r54 = restoredCtx.rowIndex;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r59.bmlfOpenLookupModal("DefaultStrengthKey", ctx_r59.msScreenName, "SaOpCompetitorMaster", "blur", ctx_r59.msMarray[rowIndex_r54]["DefaultStrengthKey"], "custom", "DefaultStrengthKey" + rowIndex_r54, "SALESOPPORTUNITY.STRNGTHLOOKUP", rowIndex_r54));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const rowIndex_r54 = restoredCtx.rowIndex;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r60.bmlfOpenLookupModal("DefaultStrengthKey", ctx_r60.msScreenName, "SaOpCompetitorMaster", "click", ctx_r60.msMarray[rowIndex_r54]["DefaultStrengthKey"], "custom", "DefaultStrengthKey" + rowIndex_r54, "SALESOPPORTUNITY.STRNGTHLOOKUP", rowIndex_r54));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rowIndex_r54 = ctx.rowIndex;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("id", "DefaultStrengthKey" + rowIndex_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r52.msMarray[rowIndex_r54][item_r14.Field])("name", rowIndex_r54 + "_" + item_r14.Field);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_kendo_grid_column_53_5_ng_template_0_Template, 5, 3, "ng-template", 52);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-common-grid-customization", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("msChangeField", function SalesOpportunityMasterComponent_kendo_grid_column_53_ng_template_6_Template_app_common_grid_customization_msChangeField_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r66);
      const rowIndex_r63 = restoredCtx.rowIndex;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r65.bmlfFieldEvent($event, rowIndex_r63));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r62 = ctx.dataItem;
    const rowIndex_r63 = ctx.rowIndex;
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msGridColumn", ctx_r20.mArrGridColumns)("msGridBinding", ctx_r20.msMarray)("dataItem", dataItem_r62)("item", item_r14)("rowIndex", rowIndex_r63)("mFormMode", ctx_r20.msFormMode);
  }
}
function SalesOpportunityMasterComponent_kendo_grid_column_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-grid-column", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOpportunityMasterComponent_kendo_grid_column_53_1_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SalesOpportunityMasterComponent_kendo_grid_column_53_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, SalesOpportunityMasterComponent_kendo_grid_column_53_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, SalesOpportunityMasterComponent_kendo_grid_column_53_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, SalesOpportunityMasterComponent_kendo_grid_column_53_5_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, SalesOpportunityMasterComponent_kendo_grid_column_53_ng_template_6_Template, 2, 6, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("field", item_r14.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", item_r14.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("width", item_r14.Type == "Action" ? "50" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Texts");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r14.Type == "lookup");
  }
}
function SalesOpportunityMasterComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-custom-component-form", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msScreenName", ctx_r4.msScreenName)("maInputJsonData", ctx_r4.mobjModel)("mFormMode", ctx_r4.msFormMode)("tabIndex", "-1");
  }
}
function SalesOpportunityMasterComponent_app_custom_lookup_modal_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-custom-lookup-modal", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("saveLookupField", function SalesOpportunityMasterComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r69.bmlfSaveLookupField($event));
    })("closeLookup", function SalesOpportunityMasterComponent_app_custom_lookup_modal_66_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r71.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function SalesOpportunityMasterComponent_kendo_dialog_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function SalesOpportunityMasterComponent_kendo_dialog_67_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r72.bmlfdialogDeleteLineAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_67_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r74.bmlfdialogDeleteLineAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_67_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r75.bmlfdialogDeleteLineAction("No"));
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
function SalesOpportunityMasterComponent_app_common_task_modal_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-common-task-modal", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeTaskModal", function SalesOpportunityMasterComponent_app_common_task_modal_68_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r76.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("taskData", ctx_r8.mobjTaskData);
  }
}
function SalesOpportunityMasterComponent_app_esignature_from_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-esignature-from", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("action", function SalesOpportunityMasterComponent_app_esignature_from_69_Template_app_esignature_from_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r78.bmlfChkESignature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("data", ctx_r9.mobjSignatureData);
  }
}
function SalesOpportunityMasterComponent_kendo_dialog_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function SalesOpportunityMasterComponent_kendo_dialog_70_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r80.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_70_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r82.bmlfEsignAuditAlertEvent("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_70_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r83.bmlfEsignAuditAlertEvent("CANCEL"));
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
function SalesOpportunityMasterComponent_kendo_dialog_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "kendo-dialog", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("close", function SalesOpportunityMasterComponent_kendo_dialog_71_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r84.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_71_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r86.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_71_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r87.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_kendo_dialog_71_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r88.bmlfOnConfirmModal("CANCEL"));
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
class SalesOpportunityMasterComponent {
  constructor(router, route, renderer, lsService, formService, toastMessageService, dateFormatService, utilService, lookupService, userFieldService) {
    this.router = router;
    this.route = route;
    this.renderer = renderer;
    this.lsService = lsService;
    this.formService = formService;
    this.toastMessageService = toastMessageService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.lookupService = lookupService;
    this.userFieldService = userFieldService;
    this.mbIsLoading = false;
    this.msScreenName = 'Sales Opportunity Master';
    this.mbChange = false;
    this.msCustomDateFormat = "";
    this.msFormMode = "U";
    this.MaterType = [{
      value: 'Competitor Master'
    }, {
      value: 'Industry Type Master'
    }, {
      value: 'Information Source Master'
    }, {
      value: 'Phase Master'
    }, {
      value: 'Priority Master'
    }, {
      value: 'Project Category Master'
    }, {
      value: 'Reason Master'
    }, {
      value: 'Strength Master'
    }];
    /**---Object Initialize-----**/
    this.mobjModel = new _models_sales_opportunity_master__WEBPACK_IMPORTED_MODULE_1__.SalesOpportunityMasterModel();
    this.mObjModelDetailData = new _models_sales_opportunity_master__WEBPACK_IMPORTED_MODULE_1__.SalesOpportunityDetailMasterModel();
    this.mArrGridColumns = '';
    this.msMarray = [];
    this.mobjUserData = {};
    this.mbShowDeleteDialog = false;
    this.mbPrimaryKey = false;
    this.msGridCoumn = '';
    this.GridName = 'DataTable';
    this.mbShowDialog = false;
    this.msPrForDelete = '';
    this.mbdeleteDialogView = false;
    this.mbdeleteLineItem = false;
    this.miGrid1DeleteLineIndex = 0;
    this.miSelectedRowIndex = 0;
    this.msMasterName = '';
    this.miGridKey = '';
    this.msPrKey = '';
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    /**---Lookup realted field----**/
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.mnumLineItemRowIndex = -1;
    /**---END : Lookup realted field----**/
    this.mbSaveDialogView = false;
    this.mbIsAddMode = false;
    this.mbIsDeleteMode = false;
    this.mbIsCloseMode = false;
    this.mbCustomControl = false;
    this.mskeyValue = ""; //FieldExtender
    /**-------START: TASK Field ----**/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ------**/
    /**-----------START E-Signature Field----------**/
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
  }
  ngOnInit() {
    this.utilService.bmgfAddCustomLineToModel(this.mArrGridColumns, this.msScreenName, this.GridName).then(res => {});
    //this.SetGridColumns(this.GridName, this.mArrGridColumns);
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.mobjModel.MasterName = 'Competitor Master';
    let prdKey = this.mobjModel.MasterName;
    this.bmlfGetMasterData(prdKey);
  }
  // Get Data
  bmlfGetMasterData(prdKey) {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          "MasterName": prdKey
        }]
      })
    };
    this.formService.bmlfonGetData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      this.mbCustomControl = true;
      this.mobjModel = Object.assign({}, res.HeaderData[0]);
      let parrGridData = res.DetailData;
      this.bmlfGetGridColumn(prdKey);
      this.msMarray = parrGridData;
      this.msMarray.forEach(ele => {
        ele.Flag = 'M';
      });
    });
  }
  // On Change Master Master
  bmlfOnFormFieldChange() {
    if (this.mbChange && this.mbIsAddMode) {
      this.mbSaveDialogView = true;
    } else if (this.mobjModel.MasterName) {
      let prdKey = this.mobjModel.MasterName;
      this.bmlfGetMasterData(prdKey);
    }
  }
  //On Change Value
  bmlfOnChange(pRowId) {
    if (pRowId >= 0) {
      this.mbChange = true;
    } else {
      this.mbChange = false;
    }
    //this.mbIsAddMode = true;
  }
  //Bug 192980
  bmlfOnChangeValues() {
    let psErrMsg = "";
    for (let i = 0; i < this.msMarray.length; i++) {
      if (this.msMarray[i].Percentage > 100 || this.msMarray[i].Percentage < 0) {
        psErrMsg = this.utilService.bmgfonTranslate('SALESOPPORTUNITY.MSG.VALIDPER');
        this.msMarray[i]['Percentage'] = "";
        break;
      }
    }
    if (psErrMsg) {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  // Change Grid as per Master Name
  bmlfGetGridColumn(ModelName) {
    if (ModelName == 'Industry Type Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridIndusColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Information Source Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridSouceColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Phase Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridPhaseColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Priority Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridPriorityColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Project Category Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridProjectColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Reason Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridReasonColumns.map(ele => Object.assign({}, ele));
    } else if (ModelName == 'Strength Master') {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridStrengthColumns.map(ele => Object.assign({}, ele));
    } else {
      this.Temp = _constant_salesopportunitymasterconst__WEBPACK_IMPORTED_MODULE_2__.SalesOppMstConstant.gArrLineGridCompColumns.map(ele => Object.assign({}, ele));
    }
    this.mArrGridColumns = this.Temp;
  }
  //Add Line 
  bmlfonAddLineToGrid() {
    // Check Permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return false;
    }
    ;
    this.msMasterName = this.mobjModel.MasterName;
    this.msPrKey = this.mobjModel.MasterName == "Competitor Master" ? 'CompetitorKey' : this.mobjModel.MasterName == "Industry Type Master" ? 'IndustryKey' : this.mobjModel.MasterName == "Information Source Master" ? 'InfSourceKey' : this.mobjModel.MasterName == "Phase Master" ? 'PhaseKey' : this.mobjModel.MasterName == 'Priority Master' ? 'PriorityKey' : this.mobjModel.MasterName == "Project Category Master" ? 'ProjectCategoryKey' : this.mobjModel.MasterName == "Reason Master" ? 'ReasonKey' : this.mobjModel.MasterName == "Strength Master" ? 'StrengthKey' : '';
    this.mbIsAddMode = true;
    this.mbChange = true;
    const pobjDataCopy = Object.assign({}, this.mObjModelDetailData);
    let piLastIndex;
    piLastIndex = this.msMarray.length;
    if (piLastIndex > 0) {
      let index = this.msMarray.length - 1;
      this.miGrid1DeleteLineIndex = index;
      if (this.isEmpty(this.msMarray[this.miGrid1DeleteLineIndex][this.msPrKey])) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('SALESOPPORTUNITY.MSG.REQID') + " " + 'RowNo.' + " " + (index + 1).toString());
        let eleID = 'txtValue' + index.toString();
        setTimeout(function () {
          document.getElementById(eleID).focus();
        }, 10);
        return;
      } else {
        pobjDataCopy.Flag = "A";
        pobjDataCopy.RowId = this.msMarray.length + 1;
        this.msMarray.push(pobjDataCopy);
        // this.msMarray.forEach((data, i) => {
        //   if (data.Flag == 'A') {
        //     this.mbPrimaryKey = true;
        //   }
        // })
        let eleID = 'txtValue' + piLastIndex.toString();
        setTimeout(() => {
          document.getElementById(eleID).focus();
        }, 10);
      }
    } else {
      pobjDataCopy.Flag = "A";
      pobjDataCopy.RowId = this.msMarray.length + 1;
      this.msMarray.push(pobjDataCopy);
      this.mbPrimaryKey = true;
      let eleID = 'txtValue' + piLastIndex.toString();
      setTimeout(() => {
        document.getElementById(eleID).focus();
      }, 10);
    }
  }
  // Check Empty
  isEmpty(value) {
    return typeof value === "undefined" || value === null || value === '';
  }
  // Validate ID Field
  bmlfValidDetailData() {
    if (this.mbIsAddMode) {
      this.msPrKey = this.msMasterName == "Competitor Master" ? 'CompetitorKey' : this.msMasterName == "Industry Type Master" ? 'IndustryKey' : this.msMasterName == "Information Source Master" ? 'InfSourceKey' : this.msMasterName == "Phase Master" ? 'PhaseKey' : this.msMasterName == 'Priority Master' ? 'PriorityKey' : this.msMasterName == "Project Category Master" ? 'ProjectCategoryKey' : this.msMasterName == "Reason Master" ? 'ReasonKey' : this.msMasterName == "Strength Master" ? 'StrengthKey' : '';
    } ///Bug 192893
    else {
      this.msPrKey = this.mobjModel.MasterName == "Competitor Master" ? 'CompetitorKey' : this.mobjModel.MasterName == "Industry Type Master" ? 'IndustryKey' : this.mobjModel.MasterName == "Information Source Master" ? 'InfSourceKey' : this.mobjModel.MasterName == "Phase Master" ? 'PhaseKey' : this.mobjModel.MasterName == 'Priority Master' ? 'PriorityKey' : this.mobjModel.MasterName == "Project Category Master" ? 'ProjectCategoryKey' : this.mobjModel.MasterName == "Reason Master" ? 'ReasonKey' : this.mobjModel.MasterName == "Strength Master" ? 'StrengthKey' : '';
    }
    let psErrMsg = "";
    let pstemp = this.msPrKey;
    for (let i = 0; i < this.msMarray.length; i++) {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.msMarray[i][pstemp])) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITY.MSG.REQID") + " " + (i + 1);
        if (this.mbIsAddMode) {
          this.mobjModel.MasterName = this.msMasterName; //Bug 192893
        }

        document.getElementById('txtValue' + i).focus();
        break;
      }
    }
    if (psErrMsg != "") {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  // Check Duplicate Id Record in Grid
  bmlfValidDuplicateData() {
    let psErrMsg = "";
    let temp = '';
    temp = this.msMarray[0][this.msPrKey];
    for (let i = 1; i < this.msMarray.length; i++) {
      if (this.msMarray[i][this.msPrKey] == temp) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITY.MSG.DUPLICATE") + " " + (i + 1);
        this.msMarray[i][this.msPrKey] = '';
        document.getElementById('txtValue' + i).focus();
        break;
      }
    }
    if (psErrMsg != "") {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  /**--------Start: Lookup Functionality----- */
  // LOOKUP MODAL 
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle = "", pnumRowIdx = null) {
    this.mbIsLoading = true;
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    if (psEvent == 'blur' && (psValue == undefined || psValue == '')) {
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
                ele[key] = moment__WEBPACK_IMPORTED_MODULE_3__(ele[key]).format(this.msCustomDateFormat.toUpperCase());
              } else {
                ele[key] = '';
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
      if (pobjEvent.field == "DefaultStrengthKey") {
        this.msMarray[this.mnumLineItemRowIndex]['DefaultStrengthKey'] = pobjEvent.valueKey;
      }
      this.mbChange = true;
    }
  }
  bmlfCloseLookupModal(pobjEvent) {
    this.mbIsLookupModal = pobjEvent.isLookupModal;
    if (pobjEvent.searchValue == null) {
      this.msMarray[this.mnumLineItemRowIndex][pobjEvent.field] = "";
    } else if (pobjEvent.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjEvent.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjEvent.gridData.filter(obj => obj[psInputKey] == pobjEvent.searchValue);
      }
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjEvent.eleId) != undefined) {
          document.getElementById(pobjEvent.eleId)['value'] = "";
        }
        if (this.mnumLineItemRowIndex != null && this.mnumLineItemRowIndex >= 0) {
          this.msMarray[this.mnumLineItemRowIndex][pobjEvent.field] = "";
          setTimeout(function () {
            document.getElementById(pobjEvent.eleId).focus();
          }, 10);
          return;
        }
      }
    }
    let elementExists = document.getElementById(pobjEvent.eleId);
    if (elementExists) {
      document.getElementById(pobjEvent.eleId).focus();
    }
  }
  // get Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'DefaultStrengthKey') {
      return 'DefaultStrengthKey';
    }
  }
  /**--------End: Lookup Functionality----- */
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  //Bug 187960
  keyDownHandler(event) {
    if (event.keyCode === 32) event.preventDefault();
  }
  bmlfvalicationDubicatecheck(pobjEvent, rowIndex, type) {
    let pbResult = true;
    this.msMarray.forEach((ele, i) => {
      if (pbResult == true) {
        if (type == type && pobjEvent != '') {
          if (ele[type].toUpperCase() == pobjEvent.toUpperCase() && i != rowIndex) {
            this.toastMessageService.notifyError('ID. No. ' + 'at Row No.' + ' ' + ' ' + this.msMarray.slice(-1)[0].RowId + ' ' + this.utilService.bmgfonTranslate('SALESOPPORTUNITY.MSG.DUPLICATEID'));
            this.msMarray[rowIndex][type] = '';
            pbResult = false;
            this.mbChange = false;
          }
        } else {
          if (ele[type] == this.msMarray.slice(-1)[0][type] && /\s/.test(pobjEvent) == true) {
            if (/\s/.test(pobjEvent)) {
              this.mbChange = true;
              this.msMarray[rowIndex].type = '';
              this.toastMessageService.notifyError('ID. No. ' + ele[type] + ' ' + this.utilService.bmgfonTranslate('SALESOPPORTUNITY.MSG.SPACE'));
              this.mbChange = false;
              return;
            }
          }
          if (pobjEvent != '' && ele[type].toUpperCase() == pobjEvent.toUpperCase() && i != rowIndex) {
            this.toastMessageService.notifyError('ID. No. ' + 'at Row No.' + this.msMarray.slice(-1)[0].RowId + ' ' + this.utilService.bmgfonTranslate('SALESOPPORTUNITY.MSG.DUPLICATEID'));
            this.msMarray[rowIndex].type = '';
            pbResult = false;
            this.mbChange = false;
          }
        }
      }
    });
    return pbResult;
  }
  //On Submit Data
  bmlfSubmitData() {
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    if (!this.mbChange) {
      return;
    }
    if (!this.bmlfValidDetailData()) {
      return;
    }
    if (!this.bmlfOnChangeValues()) {
      return;
    }
    this.bmlfSaveData();
  }
  bmlfSaveData() {
    this.mbIsLoading = true;
    //Customization
    let data = this.utilService.bmgfCustomModelTransform(this.customCtrl);
    this.bmlfonAssignCustValues(data);
    let parrHeaderData = [];
    this.mobjModel.MasterName = this.msMasterName;
    parrHeaderData.push(Object.assign({}, this.mobjModel));
    let pobjJData = {
      HeaderData: parrHeaderData,
      DetailData: this.msMarray,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    console.log('Pratik', pobjJson);
    // if(!this.bmlfValidDuplicateData()){
    //   this.mbIsLoading = false;
    //   return;
    // }
    this.formService.bmlfonSaveMasterData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == "") {
        this.msMarray = res.DetailData;
        this.FieldExtender.mbChange = false;
        this.customCtrl.mbChange = false;
        this.mbChange = false;
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
        if (this.msFormMode == "I") {
          this.msFormMode = "U";
          this.mobjModel.MasterName = res.HeaderData[0];
          this.msMasterName = this.mobjModel.MasterName;
          this.msMarray = res.DetailData;
        }
        // FieldExtender -- start update
        let screenKeyValue = this.msScreenName + " — " + this.msMasterName;
        let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
        if (jsonData.length > 0) {
          this.FieldExtender.bmlfCallApi(jsonData).then(res => {
            if (res != null) {}
          });
        }
        ;
        // FieldExtender -- End updat
        if (this.mbIsCloseMode) {
          this.mbIsCloseMode = false;
          this.router.navigate(["/main/dashboard/dashboardpage"]);
        } else {
          this.bmlfGetMasterData(this.mobjModel.MasterName);
        }
      } else {
        this.mbIsDeleteMode = false;
        this.mbIsCloseMode = false;
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  // On Close Form
  bmlfCloseForm() {
    if (!this.mbChange && !this.customCtrl.mbChange && !this.FieldExtender.mbChange) {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    } else {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    }
  }
  bmlfonAssignCustValues(custom) {
    this.mObjModelDetailData.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : null;
    this.mObjModelDetailData.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : null;
    this.mObjModelDetailData.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : null;
    this.mObjModelDetailData.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : null;
    this.mObjModelDetailData.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : null;
    this.mObjModelDetailData.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : null;
    this.mObjModelDetailData.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : null;
    this.mObjModelDetailData.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : null;
    this.mObjModelDetailData.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : null;
    this.mObjModelDetailData.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : null;
    this.mObjModelDetailData.User1 = custom.User1 ? custom.User1 : null;
    this.mObjModelDetailData.User2 = custom.User2 ? custom.User2 : null;
    this.mObjModelDetailData.User3 = custom.User3 ? custom.User3 : null;
    this.mObjModelDetailData.User4 = custom.User4 ? custom.User4 : null;
    this.mObjModelDetailData.User5 = custom.User5 ? custom.User5 : null;
    this.mObjModelDetailData.User6 = custom.User6 ? custom.User6 : null;
    this.mObjModelDetailData.User7 = custom.User7 ? custom.User7 : null;
    this.mObjModelDetailData.User8 = custom.User8 ? custom.User8 : null;
    this.mObjModelDetailData.User9 = custom.User9 ? custom.User9 : null;
    this.mObjModelDetailData.User10 = custom.User10 ? custom.User10 : null;
    this.mObjModelDetailData.User11 = custom.User11 ? custom.User11 : null;
    this.mObjModelDetailData.User12 = custom.User12 ? custom.User12 : null;
  }
  // For Delete Line Item
  bmlfonDeleteLineItem(piRowId) {
    this.miGrid1DeleteLineIndex = piRowId;
    this.miGridKey = this.mobjModel.MasterName == "Competitor Master" ? 'CompetitorKey' : this.mobjModel.MasterName == "Industry Type Master" ? 'IndustryKey' : this.mobjModel.MasterName == "Information Source Master" ? 'InfSourceKey' : this.mobjModel.MasterName == "Phase Master" ? 'PhaseKey' : this.mobjModel.MasterName == 'Priority Master' ? 'PriorityKey' : this.mobjModel.MasterName == "Project Category Master" ? 'ProjectCategoryKey' : this.mobjModel.MasterName == "Reason Master" ? 'ReasonKey' : this.mobjModel.MasterName == "Strength Master" ? 'StrengthKey' : '';
    this.mbdeleteLineItem = true;
  }
  //Action Delete line
  bmlfdialogDeleteLineAction(action) {
    if (action == 'Yes') {
      this.bmlfonDeleteGrid1Line();
      this.mbdeleteLineItem = false;
    }
    if (action == 'No') {
      this.mbdeleteLineItem = false;
    }
  }
  //Delete Line Record
  bmlfonDeleteGrid1Line() {
    if (this.msMarray[this.miGrid1DeleteLineIndex][this.msPrKey] != '') {
      let pSreqObj = {
        HeaderData: [{
          'MasterName': this.mobjModel.MasterName
        }],
        Response: [{
          ResponseText: '',
          'ErrorCode': ''
        }]
      };
      pSreqObj.HeaderData[0][this.miGridKey] = this.msMarray[this.miGrid1DeleteLineIndex][this.miGridKey];
      let reqData = {
        JSON: JSON.stringify(pSreqObj)
      };
      this.formService.bmlfonDeleteLineData(reqData).subscribe(res => {
        if (res == null) {
          return false;
        }
        if (!this.isEmpty(res.Response[0].ErrorCode)) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.LINEDELETE'));
          this.msMarray.splice(this.miGrid1DeleteLineIndex, 1);
        }
      });
    } else {
      this.msMarray.splice(this.miGrid1DeleteLineIndex, 1);
      this.mbChange = false;
      this.mbIsAddMode = false;
    }
  }
  // On confirm Model 
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      this.bmlfSubmitData();
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      if (this.mbIsAddMode && this.mbIsCloseMode) {
        this.mbIsAddMode = false;
        this.mbIsCloseMode = false;
        this.mbChange = false;
        this.router.navigate(['/main/dashboard/dashboardpage']);
      } else if (this.mbIsAddMode) {
        this.mbIsAddMode = false;
        this.bmlfGetMasterData(this.mobjModel.MasterName);
        this.mbChange = false;
      } else {
        this.mbIsCloseMode = false;
        this.router.navigate(['/main/dashboard/dashboardpage']);
      }
    } else {
      this.mbSaveDialogView = false;
      this.mbIsAddMode = false;
      this.mbIsCloseMode = false;
    }
  }
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
    this.mobjSignatureData.primaryKey = this.mobjModel.MasterName;
  }
  // check e signature
  bmlfChkESignature(pobjData) {
    this.mbSignatureModal = pobjData.isShow;
    if (pobjData.event == 'Save') {
      this.mbIsEsignature = false;
      this.mObjModelDetailData.ESG_REASON = pobjData.changeReason;
      this.mObjModelDetailData.ESG_APPROVER = pobjData.eSignApprover;
      this.mbChange = true;
      this.bmlfSubmitData();
    } else if (pobjData.event == 'Cancel') {
      this.mobjCommonAlertData = {};
      this.mbCommonAlertDialog = true;
      this.mobjCommonAlertData.message = this.utilService.bmgfonTranslate('ESIGNREASONMSG');
      this.mobjCommonAlertData.event = 'close';
      this.mbChange = true;
    }
  }
  bmlfEsignAuditAlertEvent(event) {
    if (event == 'No') {} else {
      this.mbIsEsignAuditDialog = false;
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
      pobjFormRec.primeKey = "";
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  // For Help PDF 
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Sales Opportunity Master.pdf', '_blank');
  }
  static #_ = this.ɵfac = function SalesOpportunityMasterComponent_Factory(t) {
    return new (t || SalesOpportunityMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_http_sales_opportunity_master_service__WEBPACK_IMPORTED_MODULE_5__.SalesOpportinityMasterService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: SalesOpportunityMasterComponent,
    selectors: [["app-sales-opportunity-master"]],
    viewQuery: function SalesOpportunityMasterComponent_Query(rf, ctx) {
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
    decls: 72,
    vars: 42,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-container"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["id", "ddlMaterType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", "id", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-3", "m_b_10", "br-1", "md_minw_305", "p-1"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", 3, "click"], ["id", "divKendoGrid", 1, "col-md-12"], ["id", "dtGrid", 1, "gridloading", "custom_h_grid", "max_scroll", "low_space_table", "scrolled-grid", 3, "kendoGridBinding", "resizable", "filterable", "columnMenu"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "divCustomLookup"], [3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], [3, "data", "action", 4, "ngIf"], [3, "close", 4, "ngIf"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], [3, "value", "id"], [3, "field", "title", "width"], ["kendoGridCellTemplate", ""], [1, "grid-icon-sec"], [3, "id", "click"], [1, "fa", "fa-trash-o"], [1, "form-group", "custom_flex"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "disabled", "ngModel", "id", "name", "ngModelChange", "keydown", "change"], ["type", "text", "maxlength", "100", 1, "form-control", 3, "ngModel", "id", "name", "change", "ngModelChange"], [1, "form-control", 3, "spinners", "step", "min", "max", "ngModel", "id", "name", "autoCorrect", "decimals", "format", "change", "ngModelChange"], ["type", "text", "maxlength", "50", "maxlength", "30", 1, "form-control", 3, "ngModel", "id", "name", "ngModelChange", "change", "blur"], ["id", "'lookup' + rowIndex+'_' +item.Field", 1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], [3, "msGridColumn", "msGridBinding", "dataItem", "item", "rowIndex", "mFormMode", "msChangeField"], ["customGrid", ""], [3, "msScreenName", "maInputJsonData", "mFormMode", "tabIndex"], ["custom", ""], [3, "keyData", "saveLookupField", "closeLookup"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "taskData", "closeTaskModal"], [3, "data", "action"], [3, "close"], ["kendoButton", "", "id", "cmdCommonYes", 3, "click"], ["kendoButton", "", "id", "cmdCommonNo ", 3, "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"]],
    template: function SalesOpportunityMasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, SalesOpportunityMasterComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 25)(39, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SalesOpportunityMasterComponent_Template_select_ngModelChange_39_listener($event) {
          return ctx.mobjModel.MasterName = $event;
        })("change", function SalesOpportunityMasterComponent_Template_select_change_39_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](40, SalesOpportunityMasterComponent_option_40_Template, 2, 3, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div", 20)(42, "div", 28)(43, "div", 29)(44, "div", 30)(45, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_button_click_45_listener() {
          return ctx.bmlfonAddLineToGrid();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](48, "div", 32)(49, "kendo-grid", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](51, "kendo-grid-messages", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](53, SalesOpportunityMasterComponent_kendo_grid_column_53_Template, 7, 8, "kendo-grid-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](54, SalesOpportunityMasterComponent_ng_container_54_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](56, "app-field-extender", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "div", 40)(59, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_button_click_59_listener() {
          return ctx.bmlfSubmitData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOpportunityMasterComponent_Template_button_click_62_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](65, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](66, SalesOpportunityMasterComponent_app_custom_lookup_modal_66_Template, 1, 1, "app-custom-lookup-modal", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](67, SalesOpportunityMasterComponent_kendo_dialog_67_Template, 16, 14, "kendo-dialog", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](68, SalesOpportunityMasterComponent_app_common_task_modal_68_Template, 1, 1, "app-common-task-modal", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](69, SalesOpportunityMasterComponent_app_esignature_from_69_Template, 1, 1, "app-esignature-from", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](70, SalesOpportunityMasterComponent_kendo_dialog_70_Template, 16, 12, "kendo-dialog", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](71, SalesOpportunityMasterComponent_kendo_dialog_71_Template, 19, 15, "kendo-dialog", 49);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 26, "SALESOPPORTUNITY.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 28, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 30, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 32, "SALESOPPORTUNITY.MASTERNAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.mobjModel.MasterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.MaterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](47, 34, "COMMON.ADDLINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("kendoGridBinding", ctx.msMarray)("resizable", true)("filterable", false)("columnMenu", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](52, 36, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.mArrGridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbCustomControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](61, 38, "COMMON.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](64, 40, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbdeleteLineItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSignatureModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbIsEsignAuditDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_11__.CustomLookupModalComponent, _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_12__.CustomComponentFormComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__.NumericTextBoxComponent, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__.FieldExtenderComponent, _shared_components_esignature_from_esignature_from_component__WEBPACK_IMPORTED_MODULE_15__.EsignatureFromComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_16__.CommonTaskModalComponent, _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_17__.CommonGridCustomizationComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_18__.HowToVideoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_25__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_26__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 72418:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/crm-competitors/crm-competitors.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrmCompetitorsComponent: () => (/* binding */ CrmCompetitorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constant/salesOpportunityTran.const */ 13117);
/* harmony import */ var _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/sales-opportunity-transaction.model */ 96821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../http/sales-opportunity-transaction.service */ 21129);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/common-grid-customization/common-grid-customization */ 9537);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);

























const _c0 = ["customGrid"];
const _c1 = ["customGrid1"];
const _c2 = ["FieldExtender"];
function CrmCompetitorsComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-loader");
  }
}
function CrmCompetitorsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 25)(4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_ng_template_17_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const rowIndex_r9 = restoredCtx.rowIndex;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r10.mbIsDisabled ? false : ctx_r10.bmlfDeleteCompetitorData(rowIndex_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "COMMON.ACTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", "cmdDeleteCompItem" + rowIndex_r9);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 29)(4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const dataItem_r18 = restoredCtx.dataItem;
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r18[item_r12.Field] = $event);
    })("blur", function CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template_input_blur_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const dataItem_r18 = restoredCtx.dataItem;
      const rowIndex_r19 = restoredCtx.rowIndex;
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.bmlfOpenLookupModal(item_r12.Field, "Sales Opportunity Transaction", "Phase", "blur", dataItem_r18[item_r12.Field], "custom", "txt" + item_r12.Field + rowIndex_r19, item_r12.Title, rowIndex_r19));
    })("focus", function CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template_input_focus_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const dataItem_r18 = restoredCtx.dataItem;
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.bmlfOnGlobalFocus(item_r12.Field, dataItem_r18[item_r12.Field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const dataItem_r18 = restoredCtx.dataItem;
      const rowIndex_r19 = restoredCtx.rowIndex;
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.mbIsDisabled ? false : ctx_r27.bmlfOpenLookupModal(item_r12.Field, "Sales Opportunity Transaction", "Phase", "click", dataItem_r18[item_r12.Field], "custom", "txt" + item_r12.Field + rowIndex_r19, item_r12.Title, rowIndex_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r18 = ctx.dataItem;
    const rowIndex_r19 = ctx.rowIndex;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.Field.startsWith("User") || item_r12.Field.includes("CUSTOM") ? item_r12.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 9, "SALESOPPORTUNITYTRAN." + item_r12.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "txt", item_r12.Field, "", rowIndex_r19, "")("name", "txt", item_r12.Field, "", rowIndex_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r18[item_r12.Field])("disabled", ctx_r17.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r12.Field, "Lookup", rowIndex_r19, "");
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_kendo_grid_column_18_2_ng_template_0_Template, 7, 11, "ng-template", 13);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 33)(4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmCompetitorsComponent_kendo_grid_column_18_3_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const dataItem_r31 = restoredCtx.dataItem;
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r31[item_r12.Field] = $event);
    })("change", function CrmCompetitorsComponent_kendo_grid_column_18_3_ng_template_0_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r31 = ctx.dataItem;
    const rowIndex_r32 = ctx.rowIndex;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.Field.startsWith("User") || item_r12.Field.includes("CUSTOM") ? item_r12.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, "SALESOPPORTUNITYTRAN." + item_r12.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "txt", item_r12.Field, "", rowIndex_r32, "")("name", "txt", item_r12.Field, "", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r31[item_r12.Field])("disabled", ctx_r30.mbIsDisabled);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_kendo_grid_column_18_3_ng_template_0_Template, 5, 9, "ng-template", 13);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 35)(4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmCompetitorsComponent_kendo_grid_column_18_4_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const dataItem_r39 = restoredCtx.dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r39.Won = $event);
    })("change", function CrmCompetitorsComponent_kendo_grid_column_18_4_ng_template_0_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const rowIndex_r40 = restoredCtx.rowIndex;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      ctx_r43.bmlfOnFormFieldChange();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.bmlfChangeWonEvent(rowIndex_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r39 = ctx.dataItem;
    const rowIndex_r40 = ctx.rowIndex;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r12.Field.startsWith("User") || item_r12.Field.includes("CUSTOM") ? item_r12.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, "SALESOPPORTUNITYTRAN." + item_r12.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r39.Won)("id", "CHK_Won" + rowIndex_r40)("name", "CHK_Won" + rowIndex_r40)("disabled", ctx_r38.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("for", "CHK_Won" + rowIndex_r40);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_kendo_grid_column_18_4_ng_template_0_Template, 6, 8, "ng-template", 13);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-grid-customization", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("msChangeField", function CrmCompetitorsComponent_kendo_grid_column_18_ng_template_5_Template_app_common_grid_customization_msChangeField_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r49);
      const rowIndex_r46 = restoredCtx.rowIndex;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.bmlfFieldEvent($event, rowIndex_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r45 = ctx.dataItem;
    const rowIndex_r46 = ctx.rowIndex;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msGridColumn", ctx_r16.marrLineItemCol)("msGridBinding", ctx_r16.marrItemWiseGridData)("dataItem", dataItem_r45)("item", item_r12)("rowIndex", rowIndex_r46)("mFormMode", ctx_r16.msMode);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-grid-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CrmCompetitorsComponent_kendo_grid_column_18_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, CrmCompetitorsComponent_kendo_grid_column_18_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CrmCompetitorsComponent_kendo_grid_column_18_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, CrmCompetitorsComponent_kendo_grid_column_18_ng_template_5_Template, 2, 6, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("field", item_r12.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", item_r12.Field.startsWith("User") || item_r12.Field.includes("CUSTOM") ? item_r12.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 6, "SALESOPPORTUNITYTRAN." + item_r12.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r12.Type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r12.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r12.Type == "checkbox");
  }
}
function CrmCompetitorsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 25)(4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_ng_template_32_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);
      const rowIndex_r52 = restoredCtx.rowIndex;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.mbIsDisabled ? false : ctx_r53.bmlfDeleteReasonData(rowIndex_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r52 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "COMMON.ACTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", "cmdDeleteReasonItem" + rowIndex_r52);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 29)(4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const dataItem_r60 = restoredCtx.dataItem;
      const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r60[item_r55.Field] = $event);
    })("blur", function CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template_input_blur_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const dataItem_r60 = restoredCtx.dataItem;
      const rowIndex_r61 = restoredCtx.rowIndex;
      const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.bmlfOpenLookupModal(item_r55.Field, "Sales Opportunity Transaction", "Phase", "blur", dataItem_r60[item_r55.Field], "custom", "txt" + item_r55.Field + rowIndex_r61, item_r55.Title, rowIndex_r61));
    })("focus", function CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template_input_focus_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const dataItem_r60 = restoredCtx.dataItem;
      const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r67.bmlfOnGlobalFocus(item_r55.Field, dataItem_r60[item_r55.Field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63);
      const dataItem_r60 = restoredCtx.dataItem;
      const rowIndex_r61 = restoredCtx.rowIndex;
      const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r69.mbIsDisabled ? false : ctx_r69.bmlfOpenLookupModal(item_r55.Field, "Sales Opportunity Transaction", "Phase", "click", dataItem_r60[item_r55.Field], "custom", "txt" + item_r55.Field + rowIndex_r61, item_r55.Title, rowIndex_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r60 = ctx.dataItem;
    const rowIndex_r61 = ctx.rowIndex;
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r55.Field.startsWith("User") || item_r55.Field.includes("CUSTOM") ? item_r55.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 9, "SALESOPPORTUNITYTRAN." + item_r55.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "txt", item_r55.Field, "", rowIndex_r61, "")("name", "txt", item_r55.Field, "", rowIndex_r61, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r60[item_r55.Field])("disabled", ctx_r59.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "cmd", item_r55.Field, "Lookup", rowIndex_r61, "");
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_kendo_grid_column_33_2_ng_template_0_Template, 7, 11, "ng-template", 13);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 33)(4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmCompetitorsComponent_kendo_grid_column_33_3_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76);
      const dataItem_r73 = restoredCtx.dataItem;
      const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r73[item_r55.Field] = $event);
    })("change", function CrmCompetitorsComponent_kendo_grid_column_33_3_ng_template_0_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r78.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r73 = ctx.dataItem;
    const rowIndex_r74 = ctx.rowIndex;
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r55.Field.startsWith("User") || item_r55.Field.includes("CUSTOM") ? item_r55.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, "SALESOPPORTUNITYTRAN." + item_r55.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("id", "txt", item_r55.Field, "", rowIndex_r74, "")("name", "txt", item_r55.Field, "", rowIndex_r74, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r73[item_r55.Field])("disabled", ctx_r72.mbIsDisabled);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_kendo_grid_column_33_3_ng_template_0_Template, 5, 9, "ng-template", 13);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-grid-customization", 38, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("msChangeField", function CrmCompetitorsComponent_kendo_grid_column_33_ng_template_4_Template_app_common_grid_customization_msChangeField_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r84);
      const rowIndex_r81 = restoredCtx.rowIndex;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r83.bmlfFieldEvent($event, rowIndex_r81));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r80 = ctx.dataItem;
    const rowIndex_r81 = ctx.rowIndex;
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msGridColumn", ctx_r58.marrReasonLineItemCol)("msGridBinding", ctx_r58.marrReasonGridData)("dataItem", dataItem_r80)("item", item_r55)("rowIndex", rowIndex_r81)("mFormMode", ctx_r58.msMode);
  }
}
function CrmCompetitorsComponent_kendo_grid_column_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-grid-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CrmCompetitorsComponent_kendo_grid_column_33_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, CrmCompetitorsComponent_kendo_grid_column_33_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CrmCompetitorsComponent_kendo_grid_column_33_ng_template_4_Template, 2, 6, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("field", item_r55.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", item_r55.Field.startsWith("User") || item_r55.Field.includes("CUSTOM") ? item_r55.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 5, "SALESOPPORTUNITYTRAN." + item_r55.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r55.Type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r55.Type == "text");
  }
}
function CrmCompetitorsComponent_app_custom_lookup_modal_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-custom-lookup-modal", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("saveLookupField", function CrmCompetitorsComponent_app_custom_lookup_modal_37_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r86.bmlfSaveLookupField($event));
    })("closeLookup", function CrmCompetitorsComponent_app_custom_lookup_modal_37_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r88.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyData", ctx_r6.mobjLookupKeyData);
  }
}
function CrmCompetitorsComponent_kendo_dialog_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function CrmCompetitorsComponent_kendo_dialog_38_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r89.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_kendo_dialog_38_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r91.bmlfDeleteLineItemAction("Delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_kendo_dialog_38_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r92.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 6, "COMMON.MSG.DELETECONFIRMATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 8, "COMMON.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"));
  }
}
class CrmCompetitorsComponent {
  constructor(router, toastMessageService, utilService, userFieldService, formService, lookupService, dateFormatService, lsService) {
    this.router = router;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.formService = formService;
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.msTrnKey = "";
    this.mbIsDisabled = false;
    this.bmgfShowHeaderEvnt = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_1__.CommonConstants.gsServerDateFormat;
    this.mbIsLoading = false;
    this.msMode = "I";
    this.mobjUserData = {};
    this.msScreenName = "Competitors";
    this.msReasonMode = "I";
    this.mbIsChangeData = false;
    this.msCustomDateFormat = "";
    this.marrItemWiseGridData = [];
    this.marrReasonGridData = [];
    this.marrLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_3__.SalesOpportunityTranConstant.garrCompetitorItemCol.map(ele => Object.assign({}, ele));
    this.marrReasonLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_3__.SalesOpportunityTranConstant.garrReasonCol.map(ele => Object.assign({}, ele));
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    this.mbDeleteLineItemDialog = false;
    this.msDeleteType = "";
    this.mbEnableReasonBtn = false;
    this.mskeyValue = ""; //FieldExtender
  }

  ngOnInit() {
    this.utilService.bmgfAddCustomLineToModel(this.marrLineItemCol, this.msScreenName, 'DTTable').then(res => {});
    this.utilService.bmgfAddCustomLineToModel(this.marrReasonLineItemCol, this.msScreenName, 'DTTable1').then(res => {});
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mskeyValue = this.msTrnKey;
    this.mobjUserData = this.lsService.getUserSession();
    this.SetGridColumns('DTTable', this.marrLineItemCol);
    this.SetGridColumns('DTTable1', this.marrReasonLineItemCol);
    this.bmlfGetCompetitorsData();
    this.bmlfGetReasonData();
  }
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  bmlfGetCompetitorsData(type = "") {
    this.marrItemWiseGridData = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "Competitors",
      "OpportunityNo": this.msTrnKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.Competitors.length > 0) {
        let parrGridData = res.Competitors;
        parrGridData.forEach(ele => {
          ele.mode = "U";
        });
        this.marrItemWiseGridData = parrGridData;
        this.msMode = "U";
        this.bmlfChangeWonEvent();
        if (type == "Save") {
          let parrFilterWonRow = this.marrItemWiseGridData.filter(x => x.Won == true);
          if (parrFilterWonRow.length > 0) {
            this.mbIsDisabled = true;
            let pobj = {
              type: "ChangeStatus"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          }
        }
      } else {
        this.msMode = "I";
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfGetReasonData() {
    this.marrReasonGridData = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "Reason",
      "OpportunityNo": this.msTrnKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.Reason.length > 0) {
        let parrGridData = res.Reason;
        parrGridData.forEach(ele => {
          ele.mode = "U";
        });
        this.marrReasonGridData = parrGridData;
        this.msReasonMode = "U";
      } else {
        this.msReasonMode = "I";
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  //Open LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle, pnumRowIdx = null) {
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psTitle != "") {
      this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    } else {
      this.mobjLookupKeyData.title = psTitle;
    }
    if (psEvent == 'blur' && (psValue == undefined || psValue == '' || this.msLookupField == psValue)) {
      this.msLookupField = '';
      if (psValue == undefined || psValue == '') {
        if (pnumRowIdx != null) {
          if (psField == "ReasonKey") {
            this.marrReasonGridData[pnumRowIdx][psField] = "";
          } else {
            this.marrItemWiseGridData[pnumRowIdx][psField] = "";
          }
          this.bmlfClearLookupField(psField, pnumRowIdx);
        }
      }
      return false;
    }
    let psLookup = "";
    if (psField == "ReasonKey") {
      psLookup = "Reason";
    } else if (psField == "CompetitorKey") {
      psLookup = "Competitor";
    } else if (psField == "StrengthKey") {
      psLookup = "Strength";
    } else {
      psLookup = psLookUpKey;
    }
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookup,
      Filter1: "",
      Filter2: "",
      Filter3: "",
      Filter4: "",
      Filter5: ""
    };
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      this.utilService.bmgfOnKeyInputEnable();
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
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
                ele[key] = '';
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
          let psInputKey = this.bmlfGetInputColumn(psField, pnumRowIdx);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : typeof obj[psInputKey] == 'number' ? obj[psInputKey] : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.mobjLookupKeyData.valueKey = parrFilterData[0][psInputKey];
            this.bmlfSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        this.mbIsLookupModal = false;
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  //Close LOOKUP MODAL
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field, this.mnumLineItemRowIndex);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjData.eleId) != undefined) {
          document.getElementById(pobjData.eleId).value = '';
        }
        if (this.mnumLineItemRowIndex != null && this.mnumLineItemRowIndex >= 0) {
          if (pobjData.field == "ReasonKey") {
            this.marrReasonGridData[this.mnumLineItemRowIndex][pobjData.field] = "";
          } else {
            this.marrItemWiseGridData[this.mnumLineItemRowIndex][pobjData.field] = "";
          }
          this.bmlfClearLookupField(pobjData.field, this.mnumLineItemRowIndex);
          setTimeout(function () {
            document.getElementById(pobjData.eleId).focus();
          }, 10);
          return;
        }
      }
    }
    let elementExists = document.getElementById(pobjData.eleId);
    if (elementExists) {
      document.getElementById(pobjData.eleId).focus();
    }
  }
  bmlfSaveLookupField(pobjData) {
    this.mbIsLookupModal = false;
    this.mbIsChangeData = true;
    this.mbIsLoading = false;
    this.bmlfonTransferValues(pobjData.field, pobjData.value);
  }
  // Transfer Lookup Values
  bmlfonTransferValues(psFName, pobjValue) {
    switch (psFName) {
      case 'ReasonKey':
        {
          this.marrReasonGridData[this.mnumLineItemRowIndex].ReasonKey = pobjValue['ReasonKey'];
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].Description = pobjValue['Description'];
          break;
        }
      case 'CompetitorKey':
        {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].CompetitorKey = pobjValue['CompetitorKey'];
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].StrengthKey = pobjValue['DefaultStrengthKey'];
          break;
        }
      case 'StrengthKey':
        {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].StrengthKey = pobjValue['StrengthKey'];
          break;
        }
      default:
        {
          break;
        }
    }
  }
  // get Lookup Value Column
  bmlfGetInputColumn(psField, index) {
    if (psField == 'StrengthKey') {
      return 'StrengthKey';
    } else if (psField == 'CompetitorKey') {
      return 'CompetitorKey';
    } else if (psField == 'ReasonKey') {
      return 'ReasonKey';
    }
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
  bmlfClearLookupField(psField, index) {
    if (psField == "ReasonKey") {
      this.marrReasonGridData[index].ReasonKey = "";
      this.marrReasonGridData[index].Description = "";
    } else if (psField == "CompetitorKey") {
      this.marrItemWiseGridData[index].CompetitorKey = "";
      this.marrItemWiseGridData[index].StrengthKey = "";
    }
  }
  bmlfChangeWonEvent(rowIndex = null) {
    let parrFilterWonRow = this.marrItemWiseGridData.filter(x => x.Won == true);
    if (parrFilterWonRow.length > 1) {
      parrFilterWonRow.forEach(element => {
        element.Won = false;
      });
      this.marrItemWiseGridData[rowIndex].Won = true;
    }
    if (parrFilterWonRow.length > 0) {
      this.mbEnableReasonBtn = true;
    } else {
      this.mbEnableReasonBtn = false;
    }
  }
  bmlfValidLineItem(type) {
    let psErrMsg = "";
    if (type == "Competitors") {
      for (let i = 0; i < this.marrItemWiseGridData.length; i++) {
        if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].CompetitorKey)) {
          psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ENTERCOMPETITORS") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
          break;
        } else {
          psErrMsg = "";
        }
      }
    }
    if (type == "Reason") {
      for (let i = 0; i < this.marrReasonGridData.length; i++) {
        if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.marrReasonGridData[i].ReasonKey)) {
          psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ENTERREASON") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
          break;
        } else {
          psErrMsg = "";
        }
      }
    }
    if (psErrMsg != "") {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  bmlfAddCompetitorLineItem() {
    if (this.bmlfValidLineItem("Competitors")) {
      let pobjData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_4__.CompetitorsModal();
      let maxLineNo = 0;
      if (this.marrItemWiseGridData.length == 0) {
        maxLineNo = 1;
      } else {
        const a = this.marrItemWiseGridData.reduce(function (prev, current) {
          return prev.RowId > current.RowId ? prev : current;
        });
        maxLineNo = a.RowId + 1;
      }
      pobjData.OppNo = this.msTrnKey;
      pobjData.RowId = maxLineNo;
      this.marrItemWiseGridData.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
    }
  }
  bmlfAddReasonLineItem() {
    if (this.bmlfValidLineItem("Reason")) {
      let pobjData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_4__.ReasonModal();
      let maxLineNo = 0;
      if (this.marrReasonGridData.length == 0) {
        maxLineNo = 1;
      } else {
        const a = this.marrReasonGridData.reduce(function (prev, current) {
          return prev.RowId > current.RowId ? prev : current;
        });
        maxLineNo = a.RowId + 1;
      }
      pobjData.OppNo = this.msTrnKey;
      pobjData.RowId = maxLineNo;
      this.marrReasonGridData.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
    }
  }
  bmlfSubmitForm(psType) {
    // if (!this.utilService.mbWrite) {
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return;
    // };
    if (this.marrItemWiseGridData.length == 0) {
      this.msMode = "I";
    }
    if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.msMode == 'U') {
      return;
    }
    if (!this.bmlfValidLineItem("Competitors")) {
      return;
    }
    let parrFilterWon = this.marrItemWiseGridData.filter(x => x.Won == true);
    if (parrFilterWon.length > 0 && this.marrReasonGridData.length == 0) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ADDREASON"));
      return;
    }
    if (!this.bmlfValidLineItem("Reason")) {
      return;
    }
    if (this.customGridCtrl != undefined) {
      if (!this.customGridCtrl.bmlfGlobalIsMandatory()) {
        return;
      }
    }
    if (this.customGridCtrl1 != undefined) {
      if (!this.customGridCtrl1.bmlfGlobalIsMandatory()) {
        return;
      }
    }
    //Validate Field Extender -- Start
    let resultString = this.FieldExtender.bmgfValidationCheck();
    if (resultString.value == false) {
      this.toastMessageService.notifyError(resultString.msg);
      return;
    }
    this.bmlfSaveCompetitorsData(psType);
  }
  bmlfSaveCompetitorsData(psType) {
    this.mbIsLoading = true;
    let parrHeaderData = [];
    this.marrItemWiseGridData.forEach(data => {
      let element = Object.assign({}, data);
      element.OppNo = this.msTrnKey;
      delete element.mode;
      parrHeaderData.push(element);
    });
    let pobjJData = {
      ParameterData: [{
        "Mode": this.msMode == "I" ? "Insert" : "Update",
        "TransactionTabName": "Competitors"
      }],
      Competitors: parrHeaderData,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSalesOpportunityTranData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.mbIsChangeData = false;
        this.FieldExtender.mbChange = false;
        if (res.Response[0].ResponseText.includes("Unable")) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          // FieldExtender -- start update
          let screenKeyValue = this.msScreenName + " — " + this.mskeyValue;
          let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
          if (jsonData.length > 0) {
            this.FieldExtender.bmlfCallApi(jsonData).then(res => {
              if (res != null) {}
            });
          }
          ;
          // FieldExtender -- End update
          let parrFilterReasonData = this.marrReasonGridData.filter(x => x.mode == "I");
          if (this.marrReasonGridData.length > 0 && parrFilterReasonData != undefined && parrFilterReasonData.length > 0) {
            this.bmlfSaveReasonData(psType);
            if (this.msMode == "I") {
              this.msMode = "U";
            }
            this.bmlfGetCompetitorsData("Save");
          } else {
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
            if (psType == "New") {
              let pobj = {
                type: "New"
              };
              this.bmgfShowHeaderEvnt.emit(pobj);
            } else if (psType == "Close") {
              this.bmlfCloseForm();
            } else if (psType == "Search") {
              let pobj = {
                type: "Search"
              };
              this.bmgfShowHeaderEvnt.emit(pobj);
            } else if (psType == "TabChange") {
              let pobj = {
                type: "TabChange"
              };
              this.bmgfShowHeaderEvnt.emit(pobj);
            } else {
              if (this.msMode == "I") {
                this.msMode = "U";
              }
              this.bmlfGetCompetitorsData("Save");
            }
          }
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfSaveReasonData(psType) {
    this.mbIsLoading = true;
    let parrHeaderData = [];
    this.marrReasonGridData.forEach(data => {
      let element = Object.assign({}, data);
      element.OppNo = this.msTrnKey;
      delete element.mode;
      parrHeaderData.push(element);
    });
    let pobjJData = {
      ParameterData: [{
        "Mode": this.msReasonMode == "I" ? "Insert" : "Update",
        "TransactionTabName": "Reason"
      }],
      Reason: parrHeaderData,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSalesOpportunityTranData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.mbIsChangeData = false;
        if (res.Response[0].ResponseText.includes("Unable")) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
          if (psType == "New") {
            let pobj = {
              type: "New"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "Close") {
            this.bmlfCloseForm();
          } else if (psType == "Search") {
            let pobj = {
              type: "Search"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "TabChange") {
            let pobj = {
              type: "TabChange"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            if (this.msReasonMode == "I") {
              this.msReasonMode = "U";
            }
            this.bmlfGetReasonData();
          }
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfCloseForm() {
    this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
  }
  bmlfDeleteCompetitorData(pnumIndex) {
    this.mnumDeleteLineIndex = pnumIndex;
    this.mbDeleteLineItemDialog = true;
    this.msDeleteType = "Competitor";
  }
  bmlfDeleteReasonData(pnumIndex) {
    this.mnumDeleteLineIndex = pnumIndex;
    this.mbDeleteLineItemDialog = true;
    this.msDeleteType = "Reason";
  }
  /**---Confirm box event of delete Item Row ------ */
  bmlfDeleteLineItemAction(psAction) {
    if (psAction == 'Cancel') {
      this.mbDeleteLineItemDialog = false;
    } else if (psAction == 'Delete') {
      if (this.msDeleteType == "Competitor") {
        if (this.marrItemWiseGridData[this.mnumDeleteLineIndex].mode == "I") {
          let parrArrData = Object.assign([], this.marrItemWiseGridData);
          parrArrData.splice(this.mnumDeleteLineIndex, 1);
          this.marrItemWiseGridData = parrArrData;
          this.mbDeleteLineItemDialog = false;
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
          if (this.marrItemWiseGridData.length == 0) {
            this.msMode = "I";
          }
        } else {
          this.mbIsLoading = true;
          let pobjOData = {
            HeaderData: [],
            Response: []
          };
          pobjOData.HeaderData.push({
            "TransactionTabName": "Competitors",
            "OpportunityNo": this.msTrnKey,
            "RowId": this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId
          });
          pobjOData.Response.push({
            "ResponseText": "",
            "ErrorCode": ""
          });
          let psJData = JSON.stringify(pobjOData);
          let psTempjData = JSON.stringify(psJData);
          let psJson = '{"JSON":' + psTempjData + '}';
          this.formService.bmlfDeleteSalesOpportunityRowData(psJson).subscribe(res => {
            this.mbIsLoading = false;
            if (res.Response[0].ErrorCode == "") {
              let parrArrData = Object.assign([], this.marrItemWiseGridData);
              parrArrData.splice(this.mnumDeleteLineIndex, 1);
              this.marrItemWiseGridData = parrArrData;
              this.mbDeleteLineItemDialog = false;
              this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
              if (this.marrItemWiseGridData.length == 0) {
                this.msMode = "I";
              }
            } else {
              this.toastMessageService.notifyError(res.Response[0].ResponseText);
            }
          }).add(() => {
            this.mbIsLoading = false;
          });
        }
      } else {
        if (this.marrReasonGridData[this.mnumDeleteLineIndex].mode == "I") {
          let parrArrData = Object.assign([], this.marrReasonGridData);
          parrArrData.splice(this.mnumDeleteLineIndex, 1);
          this.marrReasonGridData = parrArrData;
          this.mbDeleteLineItemDialog = false;
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
          if (this.marrReasonGridData.length == 0) {
            this.msReasonMode = "I";
          }
        } else {
          this.mbIsLoading = true;
          let pobjOData = {
            HeaderData: [],
            Response: []
          };
          pobjOData.HeaderData.push({
            "TransactionTabName": "Reason",
            "OpportunityNo": this.msTrnKey,
            "RowId": this.marrReasonGridData[this.mnumDeleteLineIndex].RowId
          });
          pobjOData.Response.push({
            "ResponseText": "",
            "ErrorCode": ""
          });
          let psJData = JSON.stringify(pobjOData);
          let psTempjData = JSON.stringify(psJData);
          let psJson = '{"JSON":' + psTempjData + '}';
          this.formService.bmlfDeleteSalesOpportunityRowData(psJson).subscribe(res => {
            this.mbIsLoading = false;
            if (res.Response[0].ErrorCode == "") {
              let parrArrData = Object.assign([], this.marrReasonGridData);
              parrArrData.splice(this.mnumDeleteLineIndex, 1);
              this.marrReasonGridData = parrArrData;
              this.mbDeleteLineItemDialog = false;
              this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
              if (this.marrReasonGridData.length == 0) {
                this.msReasonMode = "I";
              }
            } else {
              this.toastMessageService.notifyError(res.Response[0].ResponseText);
            }
          }).add(() => {
            this.mbIsLoading = false;
          });
        }
      }
    }
  }
  SetGridColumns(GridName, parrGridCol) {
    this.utilService.GetJsonSetting(this.msScreenName, this.mobjUserData.UserId, GridName, parrGridCol).then(pArrGridChangedCol => {
      if (pArrGridChangedCol != null && pArrGridChangedCol != undefined) {
        parrGridCol = pArrGridChangedCol;
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfFieldEvent(type, rowIndex) {
    this.mbIsChangeData = type;
  }
  static #_ = this.ɵfac = function CrmCompetitorsComponent_Factory(t) {
    return new (t || CrmCompetitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: CrmCompetitorsComponent,
    selectors: [["app-crm-competitors"]],
    viewQuery: function CrmCompetitorsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customGridCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customGridCtrl1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    inputs: {
      msTrnKey: "msTrnKey",
      mbIsDisabled: "mbIsDisabled"
    },
    outputs: {
      bmgfShowHeaderEvnt: "bmgfShowHeaderEvnt"
    },
    decls: 39,
    vars: 44,
    consts: [[4, "ngIf"], ["autocomplete", "off"], [1, "form-container"], [1, "row"], [1, "col-md-7"], [1, "form-group", "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-6", "col-lg-6", "m_b_10", "br-1"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["id", "divCompetitorKendo", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "CompetitorGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", "scrolled-grid", "custom-height", "custom_h_grid", "max_scroll", 3, "data", "pageable", "sortable", "resizable", "reorderable", "groupable", "pageSize", "rowHeight"], [3, "noRecords"], [1, "grid-action-column", 3, "width", "title"], ["kendoGridCellTemplate", ""], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], [1, "col-md-5"], ["type", "button", "id", "cmdAddLineBtn1", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "disabled", "click"], ["id", "divReasonKendo", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "ReasonGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", "scrolled-grid", "custom-height", "custom_h_grid", "max_scroll", 3, "data", "pageable", "sortable", "resizable", "reorderable", "groupable", "pageSize", "rowHeight"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "deleteLineItemDialog", 3, "close", 4, "ngIf"], [1, "mob-label"], [1, "grid-icon-sec"], ["title", "Delete", 1, "", 3, "id", "click"], [1, "fa", "fa-trash-o"], [3, "field", "title", "width"], [1, "from-group", "custom_flex", "grid-label-link"], ["type", "text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "blur", "focus"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], [1, "form-group", "custom-inline-input"], ["type", " text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "change"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "change"], [1, "custom-control-label", 3, "for"], [3, "msGridColumn", "msGridBinding", "dataItem", "item", "rowIndex", "mFormMode", "msChangeField"], ["customGrid", ""], ["customGrid1", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup"], ["id", "deleteLineItemDialog", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdDeleteLineItemAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"]],
    template: function CrmCompetitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmCompetitorsComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_Template_button_click_8_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfAddCompetitorLineItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 9)(12, "kendo-grid", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "kendo-grid-messages", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "kendo-grid-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, CrmCompetitorsComponent_ng_template_17_Template, 6, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, CrmCompetitorsComponent_kendo_grid_column_18_Template, 6, 8, "kendo-grid-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 15)(20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmCompetitorsComponent_Template_button_click_23_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfAddReasonLineItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 17)(27, "kendo-grid", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "kendo-grid-messages", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "kendo-grid-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, CrmCompetitorsComponent_ng_template_32_Template, 6, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, CrmCompetitorsComponent_kendo_grid_column_33_Template, 5, 7, "kendo-grid-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "app-field-extender", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, CrmCompetitorsComponent_app_custom_lookup_modal_37_Template, 1, 1, "app-custom-lookup-modal", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, CrmCompetitorsComponent_kendo_dialog_38_Template, 16, 12, "kendo-dialog", 23);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 32, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx.marrItemWiseGridData)("pageable", true)("sortable", false)("resizable", true)("reorderable", true)("groupable", false)("pageSize", 50)("rowHeight", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 34, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 36, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.marrLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.mbEnableReasonBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 38, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx.marrReasonGridData)("pageable", true)("sortable", false)("resizable", true)("reorderable", true)("groupable", false)("pageSize", 50)("rowHeight", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](29, 40, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](31, 42, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.marrReasonLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbDeleteLineItemDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__.FieldExtenderComponent, _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_15__.CommonGridCustomizationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_21__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_22__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76741:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/crm-customer-information/crm-customer-information.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrmCustomerInformationComponent: () => (/* binding */ CrmCustomerInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/sales-opportunity-transaction.model */ 96821);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constant/salesOpportunityTran.const */ 13117);
/* harmony import */ var src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/lookupKeyDesc.const */ 91519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var _http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../http/sales-opportunity-transaction.service */ 21129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/custom-component-form/custom-component-form.component */ 37638);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var src_app_shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/directives/numbers-only.directive */ 44794);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);

























const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function CrmCustomerInformationComponent_div_2_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", x_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", x_r20.value, "");
  }
}
function CrmCustomerInformationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 3)(1, "div", 10)(2, "div", 11)(3, "div", 20)(4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 14)(8, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r21.mobjCustInfoModel.OppNo = $event);
    })("change", function CrmCustomerInformationComponent_div_2_Template_input_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r23.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 14)(16, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_select_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r24.mobjCustInfoModel.Status = $event);
    })("change", function CrmCustomerInformationComponent_div_2_Template_select_change_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r25.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, CrmCustomerInformationComponent_div_2_option_17_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 14)(25, "kendo-datepicker", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_kendo_datepicker_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r26.mobjCustInfoModel.EntryDate = $event);
    })("valueChange", function CrmCustomerInformationComponent_div_2_Template_kendo_datepicker_valueChange_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r27.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "div", 20)(29, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 14)(33, "kendo-datepicker", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_kendo_datepicker_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r28.mobjCustInfoModel.ClosingDate = $event);
    })("valueChange", function CrmCustomerInformationComponent_div_2_Template_kendo_datepicker_valueChange_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r29.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 10)(35, "div", 11)(36, "div", 20)(37, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 14)(41, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r30.mobjCustInfoModel.Name = $event);
    })("change", function CrmCustomerInformationComponent_div_2_Template_input_change_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r31.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div", 10)(43, "div", 11)(44, "div", 20)(45, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 14)(49, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_2_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r32.mnumClosingPer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 20, "SALESOPPORTUNITYTRAN.OPPORTUNITYNO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r0.mobjCustInfoModel.OppNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 22, "SALESOPPORTUNITYTRAN.STATUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r0.mobjCustInfoModel.Status)("disabled", ctx_r0.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.marrStatusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](23, 24, "SALESOPPORTUNITYTRAN.DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("format", ctx_r0.msCustomDateFormat)("placeholder", ctx_r0.msCustomDateFormat)("ngModel", ctx_r0.mobjCustInfoModel.EntryDate)("disabled", ctx_r0.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](31, 26, "SALESOPPORTUNITYTRAN.CLOSINGDATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("format", ctx_r0.msCustomDateFormat)("placeholder", ctx_r0.msCustomDateFormat)("ngModel", ctx_r0.mobjCustInfoModel.ClosingDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](39, 28, "SALESOPPORTUNITYTRAN.OPPORTUNITYNAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r0.mobjCustInfoModel.Name)("disabled", ctx_r0.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](47, 30, "SALESOPPORTUNITYTRAN.CLOSINGPER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r0.mnumClosingPer);
  }
}
function CrmCustomerInformationComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", x_r33.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", x_r33.value, "");
  }
}
function CrmCustomerInformationComponent_label_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.CUSTOMER"), " ");
  }
}
function CrmCustomerInformationComponent_label_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.PROSPECT"), " ");
  }
}
function CrmCustomerInformationComponent_label_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.NEWPROSPECT"), " ");
  }
}
function CrmCustomerInformationComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 14)(1, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_43_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r34.mobjCustInfoModel.CusKey = $event);
    })("blur", function CrmCustomerInformationComponent_div_43_Template_input_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r36.bmlfOpenLookupModal("CusKey", "Sales Opportunity Transaction", "Customer", "blur", ctx_r36.mobjCustInfoModel.CusKey, "custom", "txtCustomerId", "SALESOPPORTUNITYTRAN.CUSTOMER"));
    })("focus", function CrmCustomerInformationComponent_div_43_Template_input_focus_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r37.bmlfOnGlobalFocus("CusKey", ctx_r37.mobjCustInfoModel.CusKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_div_43_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r38.msMode == "U" || ctx_r38.mbIsDisabled ? false : ctx_r38.bmlfOpenLookupModal("CusKey", "Sales Opportunity Transaction", "Customer", "click", ctx_r38.mobjCustInfoModel.CusKey, "custom", "txtCustomerId", "SALESOPPORTUNITYTRAN.CUSTOMER"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r5.mobjCustInfoModel.CusKey)("disabled", ctx_r5.msMode == "U" || ctx_r5.mbIsDisabled);
  }
}
function CrmCustomerInformationComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 14)(1, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_44_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r39.mobjCustInfoModel.CusKey = $event);
    })("change", function CrmCustomerInformationComponent_div_44_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r41.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r6.mobjCustInfoModel.CusKey)("disabled", ctx_r6.mbIsDisabled);
  }
}
function CrmCustomerInformationComponent_ng_container_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-custom-component-form", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("msScreenName", ctx_r7.msScreenName)("maInputJsonData", ctx_r7.mobjCustInfoModel)("mFormMode", ctx_r7.msMode)("tabIndex", "0");
  }
}
function CrmCustomerInformationComponent_option_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", x_r43.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", x_r43.value, "");
  }
}
function CrmCustomerInformationComponent_label_257_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.LINKEDCUSTOMER"), " ");
  }
}
function CrmCustomerInformationComponent_label_258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.LINKEDPROSPECT"), " ");
  }
}
function CrmCustomerInformationComponent_label_259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.LINKEDVENDOR"), " ");
  }
}
function CrmCustomerInformationComponent_label_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.LINKEDOTHER"), " ");
  }
}
function CrmCustomerInformationComponent_div_261_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 14)(1, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_261_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r44.mobjCustInfoModel.ChannelCusKey = $event);
    })("blur", function CrmCustomerInformationComponent_div_261_Template_input_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r46.bmlfOpenLookupModal("ChannelCusKey", "Sales Opportunity Transaction", "Customer", "blur", ctx_r46.mobjCustInfoModel.ChannelCusKey, "custom", "txtLinkCustomerId", "SALESOPPORTUNITYTRAN.CUSTOMER"));
    })("focus", function CrmCustomerInformationComponent_div_261_Template_input_focus_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r47.bmlfOnGlobalFocus("ChannelCusKey", ctx_r47.mobjCustInfoModel.ChannelCusKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_div_261_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r48.mbIsDisabled ? false : ctx_r48.bmlfOpenLookupModal("ChannelCusKey", "Sales Opportunity Transaction", "Customer", "click", ctx_r48.mobjCustInfoModel.ChannelCusKey, "custom", "txtLinkCustomerId", "SALESOPPORTUNITYTRAN.CUSTOMER"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r14.mobjCustInfoModel.ChannelCusKey)("disabled", ctx_r14.mbIsDisabled);
  }
}
function CrmCustomerInformationComponent_div_262_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 14)(1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_div_262_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r49.mobjCustInfoModel.ChannelCusKey = $event);
    })("change", function CrmCustomerInformationComponent_div_262_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r51.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r15.mobjCustInfoModel.ChannelCusKey)("disabled", ctx_r15.mbIsDisabled);
  }
}
function CrmCustomerInformationComponent_ng_container_361_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-custom-component-form", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("msScreenName", ctx_r16.msScreenName)("maInputJsonData", ctx_r16.mobjCustInfoModel)("mFormMode", ctx_r16.msMode)("tabIndex", "1");
  }
}
function CrmCustomerInformationComponent_app_custom_lookup_modal_365_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-custom-lookup-modal", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("saveLookupField", function CrmCustomerInformationComponent_app_custom_lookup_modal_365_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r53.bmlfSaveLookupField($event));
    })("closeLookup", function CrmCustomerInformationComponent_app_custom_lookup_modal_365_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r55.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("keyData", ctx_r18.mobjLookupKeyData);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
class CrmCustomerInformationComponent {
  constructor(router, dateFormatService, toastMessageService, utilService, lsService, userFieldService, lookupService, formService) {
    this.router = router;
    this.dateFormatService = dateFormatService;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.lsService = lsService;
    this.userFieldService = userFieldService;
    this.lookupService = lookupService;
    this.formService = formService;
    this.mbShowHeader = true;
    this.msMode = "I";
    this.msTrnKey = "";
    this.mnumClosingPer = 0;
    this.mnumPotentialAmt = 0;
    this.bmgfShowHeaderEvnt = new _angular_core__WEBPACK_IMPORTED_MODULE_17__.EventEmitter();
    this.msScreenName = "Customer & General Information";
    this.autoCorrect = true;
    this.mbIsDisabled = false;
    this.msInnertab = "CUSTOMER";
    this.marrType = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_4__.SalesOpportunityTranConstant.garrTypeList;
    this.marrLinkedType = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_4__.SalesOpportunityTranConstant.garrLinkedTypeList;
    this.marrStatusList = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_4__.SalesOpportunityTranConstant.garrStatusList;
    this.mobjCustInfoModel = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.CRMCustomerInfoModel();
    this.mobjCustProsInfoModel = {};
    this.msCustomDateFormat = "";
    this.msCustomDateTimeFormat = "";
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    /**---END : Lookup realted field--- */
    this.mobjUserData = {};
    this.mbIsLoading = false;
    this.mbIsChangeData = false;
    this.miAmountPrecision = 0;
    this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
    this.mskeyValue = ""; //FieldExtender
    this.mbCustomControl = true;
  }
  ngOnInit() {
    let pobjCopyData = localStorage.getItem('copySalesOpportunityData');
    if (pobjCopyData) {
      let pobjGetCopyData = JSON.parse(pobjCopyData);
      this.bmlfSetCopyData(pobjGetCopyData);
      localStorage.removeItem('copySalesOpportunityData');
    }
    let parrDefaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    parrDefaultFormat.forEach(ele => {
      if (ele.Default_Key == "CURR_DECIMAL") {
        this.miAmountPrecision = Number(ele.Default_Value);
        this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
      }
    });
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.msCustomDateTimeFormat = this.dateFormatService.getDateTimeFormat();
    this.mobjUserData = this.lsService.getUserSession();
    // this.msTrnKey = "00000010";
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.msTrnKey)) {
      this.mskeyValue = this.msTrnKey;
      this.bmlfGetCustomerInfoData();
    }
  }
  bmlfSetCopyData(pobjGetCopyData) {
    let pobjData = Object.assign({}, pobjGetCopyData.HeaderData);
    pobjData.OppNo = "";
    pobjData.Status = "NEW";
    pobjData.StartDate = new Date();
    pobjData.PredClosing = 0;
    pobjData.PredClosingDate = new Date();
    pobjData.ClosingDate = null;
    pobjData.Recdate = new Date();
    pobjData.EntryDate = new Date();
    pobjData.SubmittedDate = new Date();
    pobjData.EstReven = 0;
    pobjData.WeightedAmt = 0;
    pobjData.SONO = "";
    this.mobjCustInfoModel = pobjData;
    this.mobjCustProsInfoModel = Object.assign({}, pobjGetCopyData.CustomerData);
    this.mbIsChangeData = true;
  }
  bmlfonSwitchInnerTab(psValue) {
    this.msInnertab = psValue;
  }
  bmlfGetCustomerInfoData(flag = "") {
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "CustomerInfo",
      "OpportunityNo": this.msTrnKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.CustomerInfo.length > 0) {
        let pobjCustInfoData = Object.assign({}, res.CustomerInfo[0]);
        pobjCustInfoData.ClosingDate = pobjCustInfoData.ClosingDate == null ? null : new Date(pobjCustInfoData.ClosingDate);
        pobjCustInfoData.EntryDate = pobjCustInfoData.EntryDate == null ? null : new Date(pobjCustInfoData.EntryDate);
        pobjCustInfoData.PredClosingDate = pobjCustInfoData.PredClosingDate == null ? null : new Date(pobjCustInfoData.PredClosingDate);
        pobjCustInfoData.StartDate = pobjCustInfoData.StartDate == null ? null : new Date(pobjCustInfoData.StartDate);
        pobjCustInfoData.SubmittedDate = pobjCustInfoData.Recdate;
        pobjCustInfoData.SubmittedDate = pobjCustInfoData.SubmittedDate == null ? null : new Date(pobjCustInfoData.SubmittedDate);
        this.mobjCustInfoModel = pobjCustInfoData;
        this.mobjCustInfoModel.EstReven = this.mnumPotentialAmt;
        this.mobjCustInfoModel.WeightedAmt = Number(this.mnumPotentialAmt * this.mnumClosingPer / 100);
        this.mbIsDisabled = this.mobjCustInfoModel.Status == "LOST" || this.mobjCustInfoModel.Status == 'WON' ? true : false;
        if (flag == "") {
          let pobj = {
            type: "Get",
            data: pobjCustInfoData
          };
          this.bmgfShowHeaderEvnt.emit(pobj);
        } else {
          this.mbShowHeader = true;
          let pobj = {
            type: "Save",
            data: pobjCustInfoData,
            key: this.msTrnKey
          };
          this.bmgfShowHeaderEvnt.emit(pobj);
        }
        if (res.CustProsInfo.length > 0) {
          this.mobjCustProsInfoModel = res.CustProsInfo[0];
          this.mobjCustProsInfoModel.Ship_Via_Code = this.mobjCustInfoModel.ShipViaKey;
        }
        this.bmlfGetDescriptionData();
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfGetDescriptionData() {
    let parrSetKeyData = [{
      KeyCode: src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.SHIPVIAKEY,
      KeyValue1: this.mobjCustProsInfoModel.Ship_Via_Code,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.TERRITORY,
      KeyValue1: this.mobjCustInfoModel.Territory,
      KeyValue2: '',
      KeyDescription: ''
    }, {
      KeyCode: src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.SALESPERSON,
      KeyValue1: this.mobjCustInfoModel.SalesEmp,
      KeyValue2: '',
      KeyDescription: ''
    }];
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: parrSetKeyData,
        ScreenName: [{
          ScreenName: "Sales Opportunity Transaction"
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
          if (ele.KeyCode == src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.TERRITORY) {
            this.mobjCustInfoModel.TerritoryDesc = ele.KeyDescription;
          } else if (ele.KeyCode == src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.SALESPERSON) {
            this.mobjCustInfoModel.SalesEmpDesc = ele.KeyDescription;
          } else if (ele.KeyCode == src_app_core_constants_lookupKeyDesc_const__WEBPACK_IMPORTED_MODULE_5__.LookupKeyDescConstants.SHIPVIAKEY) {
            this.mobjCustProsInfoModel.Ship_Via_CodeDesc = ele.KeyDescription;
          }
        });
      }
    }, err => {
      console.log(err);
    });
  }
  //Open LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle, piRowIdx = null) {
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psTitle != "") {
      if (psField == "CusKey" && this.mobjCustInfoModel.ProspactCustomer == "C" || psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "C") {
        this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.CUSTOMER");
      } else if (psField == "CusKey" && this.mobjCustInfoModel.ProspactCustomer == "P" || psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "P") {
        this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.PROSPECT");
      } else if (psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "V") {
        this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.VENDOR");
      } else {
        this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
      }
    } else {
      this.mobjLookupKeyData.title = psTitle;
    }
    if (psEvent == 'blur' && (psValue == undefined || psValue == '' || this.msLookupField == psValue)) {
      this.msLookupField = '';
      if (psValue == undefined || psValue == '') {
        this.bmlfClearValues(psField);
      }
      return false;
    }
    let psLookup = "";
    if (psField == "CusKey" && this.mobjCustInfoModel.ProspactCustomer == "C" || psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "C") {
      psLookup = "Customer";
    } else if (psField == "CusKey" && this.mobjCustInfoModel.ProspactCustomer == "P" || psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "P") {
      psLookup = "Prospect";
    } else if (psField == "ChannelCusKey" && this.mobjCustInfoModel.LinkCpv == "V") {
      psLookup = "Vendor";
    } else {
      psLookup = psLookUpKey;
    }
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookup,
      Filter1: "",
      Filter2: "",
      Filter3: "",
      Filter4: "",
      Filter5: ""
    };
    if (psField == "SONO") {
      pobjReqData.Filter1 = this.mobjCustInfoModel.CusKey;
    }
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      this.utilService.bmgfOnKeyInputEnable();
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
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
                ele[key] = '';
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
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
          let psInputKey = this.bmlfGetInputColumn(psField);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : typeof obj[psInputKey] == 'number' ? obj[psInputKey] : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.bmlfSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        this.mbIsLookupModal = false;
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  //Close LOOKUP MODAL
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => {
          if (pobjData.searchValue != null && obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase()) {
            return obj;
          }
        });
      }
      // console.log(pos);
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjData.eleId) != undefined) {
          document.getElementById(pobjData.eleId).value = '';
        }
        if (this.mobjCustInfoModel[pobjData.field] != undefined) {
          this.mobjCustInfoModel[pobjData.field] = '';
          this.bmlfClearValues(pobjData.field);
          setTimeout(function () {
            document.getElementById(pobjData.eleId).focus();
          }, 10);
        }
        if (this.mobjCustProsInfoModel[pobjData.field] != undefined) {
          this.mobjCustProsInfoModel[pobjData.field] = '';
          this.bmlfClearValues(pobjData.field);
          setTimeout(function () {
            document.getElementById(pobjData.eleId).focus();
          }, 10);
        }
      }
    }
    let elementExists = document.getElementById(pobjData.eleId);
    if (elementExists) {
      document.getElementById(pobjData.eleId).focus();
    }
  }
  bmlfSaveLookupField(pobjData) {
    this.mbIsLookupModal = false;
    this.mbIsChangeData = true;
    this.mbIsLoading = false;
    this.bmlfonTransferValues(pobjData.field, pobjData.value);
  }
  bmlfClearValues(psFName) {
    if (psFName == "smCustomerKey") {
      this.mobjCustInfoModel.CusKey = "";
      this.mobjCustProsInfoModel.Customer_Name = "";
      this.mobjCustInfoModel.Email = "";
      this.mobjCustInfoModel.SalesEmp = "";
      this.mobjCustInfoModel.SalesEmpDesc = "";
      this.mobjCustInfoModel.Territory = "";
      this.mobjCustInfoModel.TerritoryDesc = "";
      this.mobjCustInfoModel.CusContact = "";
      this.mobjCustInfoModel.ContactPhone = "";
      this.mobjCustProsInfoModel = {};
    } else if (psFName == "Ship_Via_Code") {
      this.mobjCustProsInfoModel.Ship_Via_CodeDesc = "";
    } else if (psFName == "SalesEmp") {
      this.mobjCustInfoModel.SalesEmpDesc = "";
    } else if (psFName == "Territory") {
      this.mobjCustInfoModel.TerritoryDesc = "";
    } else if (psFName == "ChannelCusKey") {
      this.mobjCustInfoModel.ChannelCusKey = "";
      this.mobjCustInfoModel.ChannelCusName = "";
      this.mobjCustInfoModel.channelContact = "";
    }
  }
  // Transfer Lookup Values
  bmlfonTransferValues(psFName, pobjValue) {
    switch (psFName) {
      case 'CusKey':
        {
          if (this.mobjCustInfoModel.ProspactCustomer == "C") {
            this.mobjCustInfoModel.CusKey = pobjValue['Customer_Key'];
          } else {
            this.mobjCustInfoModel.CusKey = pobjValue['Prospect_Key'];
          }
          this.mobjCustProsInfoModel.Customer_Name = pobjValue['Customer_Name'];
          this.mobjCustInfoModel.CusContact = pobjValue['Contact_Name'];
          this.mobjCustProsInfoModel.Address_1 = pobjValue['Address_1'];
          this.mobjCustProsInfoModel.Address_2 = pobjValue['Address_2'];
          this.mobjCustProsInfoModel.Address_3 = pobjValue['Address_3'];
          this.mobjCustProsInfoModel.City = pobjValue['City'];
          this.mobjCustProsInfoModel.State = pobjValue['State'];
          this.mobjCustProsInfoModel.Country = pobjValue['Country'];
          this.mobjCustProsInfoModel.Zip_Code = pobjValue['Zip_Code'];
          this.mobjCustProsInfoModel.Phone_1 = pobjValue['Phone_1'];
          this.mobjCustInfoModel.ContactPhone = pobjValue['Phone_2'];
          this.mobjCustProsInfoModel.Fax_No = pobjValue['Fax_No'];
          this.mobjCustInfoModel.Email = pobjValue['Email'];
          this.mobjCustProsInfoModel.Ship_Via_Code = pobjValue['Ship_Via_Code'];
          this.mobjCustProsInfoModel.Ship_Via_CodeDesc = pobjValue['Description'];
          this.mobjCustInfoModel.SalesEmp = pobjValue['Salespersn_Ky'];
          this.mobjCustInfoModel.SalesEmpDesc = pobjValue['Salesp_Name'];
          break;
        }
      case 'Country':
        {
          this.mobjCustProsInfoModel.Country = pobjValue['CountryId'];
          //this.mobjCustInfoModel.smCountryDesc = pobjValue['CountryName'];
          break;
        }
      case 'Ship_Via_Code':
        {
          this.mobjCustProsInfoModel.Ship_Via_Code = pobjValue['Ship_Via'];
          this.mobjCustProsInfoModel.Ship_Via_CodeDesc = pobjValue['Description'];
          break;
        }
      case 'SalesEmp':
        {
          this.mobjCustInfoModel.SalesEmp = pobjValue['Salesp_Key'];
          this.mobjCustInfoModel.SalesEmpDesc = pobjValue['Salesp_Name'];
          break;
        }
      case 'Territory':
        {
          this.mobjCustInfoModel.Territory = pobjValue['Terr_Key'];
          this.mobjCustInfoModel.TerritoryDesc = pobjValue['Description'];
          break;
        }
      case 'ChannelCusKey':
        {
          if (this.mobjCustInfoModel.LinkCpv == "C") {
            this.mobjCustInfoModel.ChannelCusKey = pobjValue['Customer_Key'];
            this.mobjCustInfoModel.ChannelCusName = pobjValue['Customer_Name'];
            this.mobjCustInfoModel.channelContact = pobjValue['Contact_Name'];
          } else if (this.mobjCustInfoModel.LinkCpv == "P") {
            this.mobjCustInfoModel.ChannelCusKey = pobjValue['Prospect_Key'];
            this.mobjCustInfoModel.ChannelCusName = pobjValue['Customer_Name'];
            this.mobjCustInfoModel.channelContact = pobjValue['Contact_Name'];
          } else {
            this.mobjCustInfoModel.ChannelCusKey = pobjValue['Vendor_Key'];
            this.mobjCustInfoModel.ChannelCusName = pobjValue['Name'];
            this.mobjCustInfoModel.channelContact = pobjValue['Contact'];
          }
          break;
        }
      case 'Priority':
        {
          this.mobjCustInfoModel.Priority = pobjValue['PriorityKey'];
          break;
        }
      case 'Project':
        {
          this.mobjCustInfoModel.Project = pobjValue['ProjectCategoryKey'];
          break;
        }
      case 'InformationSource':
        {
          this.mobjCustInfoModel.InformationSource = pobjValue['InformationSourceID'];
          break;
        }
      case 'Industry':
        {
          this.mobjCustInfoModel.Industry = pobjValue['IndustryKey'];
          break;
        }
      case 'SONO':
        {
          this.mobjCustInfoModel.SONO = pobjValue['Ordno'];
          break;
        }
      default:
        {
          break;
        }
    }
  }
  // get Lookup Value Column
  bmlfGetInputColumn(psField) {
    if (psField == 'CusKey') {
      return this.mobjCustInfoModel.ProspactCustomer == 'C' ? 'Customer_Key' : 'Prospect_Key';
    } else if (psField == 'Country') {
      return 'CountryId';
    } else if (psField == 'Ship_Via_Code') {
      return 'Ship_Via';
    } else if (psField == 'SalesEmp') {
      return 'Salesp_Key';
    } else if (psField == 'Territory') {
      return 'Terr_Key';
    } else if (psField == 'ChannelCusKey') {
      return this.mobjCustInfoModel.LinkCpv == 'C' ? 'Customer_Key' : this.mobjCustInfoModel.LinkCpv == "P" ? 'Prospect_Key' : 'Vendor_Key';
    } else if (psField == 'Priority') {
      return 'PriorityKey';
    } else if (psField == 'Project') {
      return 'ProjectCategoryKey';
    } else if (psField == 'InformationSource') {
      return 'InformationSourceID';
    } else if (psField == 'Industry') {
      return 'IndustryKey';
    } else if (psField == 'SONO') {
      return 'Ordno';
    }
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
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  bmlfChangeLinkedType() {
    this.mobjCustInfoModel.ChannelCusKey = "";
    this.mobjCustInfoModel.ChannelCusName = "";
    this.mobjCustInfoModel.channelContact = "";
  }
  bmlfChangeType() {
    this.bmlfClearValues("CusKey");
    if (this.mobjCustInfoModel.ProspactCustomer == "NP") {
      this.mobjCustProsInfoModel = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.CustomerProspectInfoModal();
    }
  }
  bmlfCalculateEstClosingDate() {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustInfoModel.StartDate)) {
      return;
    }
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustInfoModel.PredClosing) || Number(this.mobjCustInfoModel.PredClosing) == 0) {
      return;
    }
    const pdateStart = this.mobjCustInfoModel.StartDate;
    let pdateNew = new Date(pdateStart);
    pdateNew.setDate(pdateNew.getDate() + Number(this.mobjCustInfoModel.PredClosing));
    this.mobjCustInfoModel.PredClosingDate = pdateNew;
  }
  bmlfValidData() {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustInfoModel.CusKey)) {
      this.bmlfOpenErrorBlock("SALESOPPORTUNITYTRAN.MSG.CUSTOMERKEYREQ");
      return false;
    } else if (this.mobjCustInfoModel.ProspactCustomer == 'NP' && src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustProsInfoModel.Customer_Name)) {
      this.bmlfOpenErrorBlock("SALESOPPORTUNITYTRAN.MSG.NAMEREQ");
      return false;
    } else if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustInfoModel.PredClosingDate) && !src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.mobjCustInfoModel.StartDate) && !src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfCompareTwoDates(this.mobjCustInfoModel.StartDate, this.mobjCustInfoModel.PredClosingDate)) {
      this.bmlfOpenErrorBlock("SALESOPPORTUNITYTRAN.MSG.CLOSINGDATEGREATERTHANSTARTDATE");
    } else {
      return true;
    }
  }
  bmlfSubmitForm(psType) {
    // if (!this.utilService.mbWrite) {
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return;
    // };
    if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.customCtrl.mbChange == false && this.msMode == 'U') {
      return;
    }
    if (!this.bmlfValidData()) {
      return;
    }
    //Validate Field Extender -- Start
    let resultString = this.FieldExtender.bmgfValidationCheck();
    if (resultString.value == false) {
      this.toastMessageService.notifyError(resultString.msg);
      return;
    }
    //Customization
    let data = this.utilService.bmgfCustomModelTransform(this.customCtrl);
    this.bmlfonAssignCustValues(data);
    if (this.customCtrl != undefined) {
      if (!this.customCtrl.bmgIsMandatary(this.mobjCustInfoModel)) {
        return;
      }
    }
    this.bmlfSaveCustomerInfoData(psType);
  }
  bmlfSaveCustomerInfoData(psType) {
    this.mbIsLoading = true;
    let pobjData = Object.assign({}, this.mobjCustInfoModel);
    delete pobjData.SalesEmpDesc;
    delete pobjData.TerritoryDesc;
    delete pobjData.SubmittedDate;
    pobjData.ProspactCustomer = pobjData.ProspactCustomer == "NP" ? "P" : pobjData.ProspactCustomer;
    pobjData.StartDate = pobjData.StartDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.StartDate).format(this.msServeDateFormat);
    pobjData.PredClosingDate = pobjData.PredClosingDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.PredClosingDate).format(this.msServeDateFormat);
    pobjData.ClosingDate = pobjData.ClosingDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.ClosingDate).format(this.msServeDateFormat);
    pobjData.EntryDate = pobjData.EntryDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_3__(pobjData.EntryDate).format(this.msServeDateFormat);
    pobjData.EstReven = this.utilService.bmgfSetPrecision(pobjData.EstReven, this.miAmountPrecision);
    pobjData.WeightedAmt = this.utilService.bmgfSetPrecision(pobjData.WeightedAmt, this.miAmountPrecision);
    pobjData.ShipViaKey = this.mobjCustProsInfoModel.Ship_Via_Code;
    let parrHeaderData = [];
    parrHeaderData.push(pobjData);
    let parrCustProsData = [{
      "CusKey": this.mobjCustInfoModel.CusKey,
      "CustName": this.mobjCustProsInfoModel.Customer_Name,
      "CusContact": this.mobjCustInfoModel.CusContact,
      "Address1": this.mobjCustProsInfoModel.Address_1,
      "Address2": this.mobjCustProsInfoModel.Address_2,
      "Address3": this.mobjCustProsInfoModel.Address_3,
      "City": this.mobjCustProsInfoModel.City,
      "State": this.mobjCustProsInfoModel.State,
      "Country": this.mobjCustProsInfoModel.Country,
      "Zip": this.mobjCustProsInfoModel.Zip_Code,
      "Phone": this.mobjCustProsInfoModel.Phone_1,
      "ContactPhone": this.mobjCustInfoModel.ContactPhone,
      "Fax": this.mobjCustProsInfoModel.Fax_No,
      "Email": this.mobjCustInfoModel.Email,
      "URL": this.mobjCustProsInfoModel.URL,
      "SalesPerson": this.mobjCustInfoModel.SalesEmp,
      "ShipviaKey": this.mobjCustProsInfoModel.Ship_Via_Code,
      "Territoty": this.mobjCustInfoModel.Territory
    }];
    let pobjJData = {
      ParameterData: [{
        "Mode": this.msMode == "I" ? "Insert" : "Update",
        "TransactionTabName": "CustomerInfo",
        "CopyMode": ""
      }],
      CustomerInfo: parrHeaderData,
      CustProsInfo: parrCustProsData,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSalesOpportunityTranData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.mbIsChangeData = false;
        this.FieldExtender.mbChange = false;
        this.customCtrl.mbChange = false;
        if (res.Response[0].ResponseText.includes("Unable")) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
          if (this.msMode == "I") {
            this.msMode = "U";
            if (res.CustomerInfo.length > 0) {
              this.msTrnKey = res.CustomerInfo[0].OppNo;
              this.mskeyValue = this.msTrnKey;
            }
          }
          // FieldExtender -- start update
          let screenKeyValue = this.msScreenName + " — " + this.mskeyValue;
          let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
          if (jsonData.length > 0) {
            this.FieldExtender.bmlfCallApi(jsonData).then(res => {
              if (res != null) {}
            });
          }
          ;
          // FieldExtender -- End update
          if (psType == "New") {
            let pobj = {
              type: "New"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "Close") {
            this.bmlfCloseForm();
          } else if (psType == "Copy") {
            let pobj = {
              type: "Copy"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "Search") {
            let pobj = {
              type: "Search"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "TabChange") {
            let pobj = {
              type: "TabChange"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            this.bmlfGetCustomerInfoData("Save");
          }
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfCloseForm() {
    if (this.mbShowHeader == false && this.msMode == "U") {
      this.mbShowHeader = true;
      let pobj = {
        type: "Close"
      };
      this.bmgfShowHeaderEvnt.emit(pobj);
    } else {
      this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
    }
  }
  bmlfonAssignCustValues(custom) {
    this.mobjCustInfoModel.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : null;
    this.mobjCustInfoModel.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : null;
    this.mobjCustInfoModel.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : null;
    this.mobjCustInfoModel.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : null;
    this.mobjCustInfoModel.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : null;
    this.mobjCustInfoModel.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : null;
    this.mobjCustInfoModel.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : null;
    this.mobjCustInfoModel.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : null;
    this.mobjCustInfoModel.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : null;
    this.mobjCustInfoModel.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : null;
    this.mobjCustInfoModel.User1 = custom.User1 ? custom.User1 : "";
    this.mobjCustInfoModel.User2 = custom.User2 ? custom.User2 : "";
    this.mobjCustInfoModel.User3 = custom.User3 ? custom.User3 : "";
    this.mobjCustInfoModel.User4 = custom.User4 ? custom.User4 : "";
    this.mobjCustInfoModel.User5 = custom.User5 ? custom.User5 : "";
    this.mobjCustInfoModel.User6 = custom.User6 ? custom.User6 : null;
    this.mobjCustInfoModel.User7 = custom.User7 ? custom.User7 : 0;
    this.mobjCustInfoModel.User8 = custom.User8 ? custom.User8 : 0;
    this.mobjCustInfoModel.User9 = custom.User9 ? custom.User9 : 0;
    this.mobjCustInfoModel.User10 = custom.User10 ? custom.User10 : 0;
    this.mobjCustInfoModel.User11 = custom.User11 ? custom.User11 : 0;
    this.mobjCustInfoModel.User12 = custom.User12 ? custom.User12 : 0;
  }
  static #_ = this.ɵfac = function CrmCustomerInformationComponent_Factory(t) {
    return new (t || CrmCustomerInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_6__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_11__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_12__.SalesOpportunityTransactionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: CrmCustomerInformationComponent,
    selectors: [["app-crm-customer-information"]],
    viewQuery: function CrmCustomerInformationComponent_Query(rf, ctx) {
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
    inputs: {
      mbShowHeader: "mbShowHeader",
      msMode: "msMode",
      msTrnKey: "msTrnKey",
      mnumClosingPer: "mnumClosingPer",
      mnumPotentialAmt: "mnumPotentialAmt"
    },
    outputs: {
      bmgfShowHeaderEvnt: "bmgfShowHeaderEvnt"
    },
    decls: 366,
    vars: 234,
    consts: [["autocomplete", "off"], ["id", "divForm", 1, "form-container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "sub_title", "p_h_15", "collapsed", 2, "padding-left", "0", "padding-top", "10px", "padding-bottom", "0px"], [1, "tab-head-sec"], ["id", "tabCustInfo", 1, "tab-item", 3, "ngClass", "click"], ["id", "tabGeneralInfo", 1, "tab-item", 3, "ngClass", "click"], ["id", "sectabCust", 1, "tab-container", 3, "hidden"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["id", "cmbType", "name", "cmbType", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "id", "txtUrl", "name", "txtUrl", "maxlength", "255", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["class", "col-form-label ", 4, "ngIf"], ["class", "col-md-7 custom_flex md_p_r_30", 4, "ngIf"], [1, "col-md-5"], [1, "mandate_sign"], ["type", "text", "id", "txtCompName", "name", "txtCompName", "maxlength", "65", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtAddress1", "name", "txtAddress1", "maxlength", "50", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtCity", "name", "txtCity", "maxlength", "35", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtAddress2", "name", "txtAddress2", "maxlength", "50", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtState", "name", "txtState", "maxlength", "30", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtAddress3", "name", "txtAddress3", "maxlength", "50", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtZip", "name", "txtZip", "maxlength", "15", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtCountry", "name", "txtCountry", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdCountryLookup", 1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-search"], ["type", "text", "id", "txtEmail", "name", "txtEmail", "maxlength", "100", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtShipVia", "name", "txtShipVia", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdShipViaLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "txtDesc", "name", "txtDesc", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "txtSalesPerson", "name", "txtSalesPerson", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdSalesPersonLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "txtSPName", "name", "txtSPName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "txtTerritory", "name", "txtTerritory", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdTerritoryLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "txtTerrName", "name", "txtTerrName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "30", "id", "txtPhoneNo", "name", "txtPhoneNo", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtFaxNo", "name", "txtFaxNo", "maxlength", "30", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtContactName", "name", "txtContactName", "maxlength", "50", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtContPhn", "name", "txtContPhn", "maxlength", "30", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtSubmittedBy", "name", "txtSubmittedBy", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "txtEntryDAte", "name", "txtEntryDAte", "disabled", "", 1, "form-control", "enter-date-time", 3, "format", "placeholder", "ngModel", "ngModelChange", "valueChange"], [4, "ngIf"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], ["id", "sectabGeneral", 1, "tab-container", 3, "hidden"], ["id", "txtStartDate", "name", "txtStartDate", 1, "form-control", 3, "format", "placeholder", "ngModel", "disabled", "ngModelChange", "valueChange", "blur"], ["id", "cmbLinkedType", "name", "cmbLinkedType", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtcloseDays", "name", "txtcloseDays", "maxlength", "5", "numbersOnly", "", 1, "form-control", "text-right", 3, "ngModel", "disabled", "ngModelChange", "blur"], ["id", "txtEstCloseDate", "name", "txtEstCloseDate", 1, "form-control", 3, "format", "placeholder", "ngModel", "disabled", "ngModelChange", "valueChange"], ["type", "text", "id", "txtLinkedName", "name", "txtLinkedName", "maxlength", "65", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["name", "txtEstRevenue", "id", "txtEstRevenue", "name", "txtEstRevenue", "disabled", "", 3, "spinners", "step", "ngModel", "min", "autoCorrect", "decimals", "format", "ngModelChange"], ["type", "text", "id", "txtchannelContact", "name", "txtchannelContact", "maxlength", "100", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["name", "txtWeightedAmt", "id", "txtWeightedAmt", "disabled", "", 3, "spinners", "step", "ngModel", "min", "autoCorrect", "decimals", "format", "ngModelChange"], ["type", "text", "id", "txtRemark", "name", "txtRemark", "maxlength", "1000", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "cmbPriority", "name", "cmbPriority", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdPriorityLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "cmbProject", "name", "cmbProject", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdProjectLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "cmbInformationSource", "name", "cmbInformationSource", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdINFORMATIONSOURCELookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "cmbIndustryType", "name", "cmbIndustryType", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdIndustryTypeLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "txtSONO", "name", "txtSONO", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdSoNoLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["type", "text", "id", "txtOppNo", "name", "txtOppNo", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "cmbStatus", "name", "cmbStatus", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "txtDate", "name", "txtDate", 1, "form-control", 3, "format", "placeholder", "ngModel", "disabled", "ngModelChange", "valueChange"], ["id", "txtClosingDAte", "name", "txtClosingDAte", "disabled", "", 1, "form-control", 3, "format", "placeholder", "ngModel", "ngModelChange", "valueChange"], ["type", "text", "id", "txtOppName", "name", "txtOppName", "maxlength", "50", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["type", "text", "id", "txtClosePer", "name", "txtClosePer", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["type", "text", "id", "txtCustomerId", "name", "txtCustomerId", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdCustomerLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["type", "text", "id", "txtCustomerId", "name", "txtCustomerId", "maxlength", "25", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "msScreenName", "maInputJsonData", "mFormMode", "tabIndex"], ["custom", ""], ["type", "text", "id", "txtLinkCustomerId", "name", "txtLinkCustomerId", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["type", "text", "id", "txtLinkCustomerId", "name", "txtLinkCustomerId", "maxlength", "25", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup"]],
    template: function CrmCustomerInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, CrmCustomerInformationComponent_div_2_Template, 50, 32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "aside", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_div_click_9_listener() {
          return ctx.bmlfonSwitchInnerTab("CUSTOMER");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_div_click_13_listener() {
          return ctx.bmlfonSwitchInnerTab("GENERAL");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "section", 9)(18, "div", 3)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 14)(26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_select_ngModelChange_26_listener($event) {
          return ctx.mobjCustInfoModel.ProspactCustomer = $event;
        })("change", function CrmCustomerInformationComponent_Template_select_change_26_listener() {
          ctx.bmlfOnFormFieldChange();
          return ctx.bmlfChangeType();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, CrmCustomerInformationComponent_option_27_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 10)(29, "div", 11)(30, "div", 12)(31, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 14)(35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_35_listener($event) {
          return ctx.mobjCustProsInfoModel.URL = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_35_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 3)(37, "div", 10)(38, "div", 11)(39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, CrmCustomerInformationComponent_label_40_Template, 5, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, CrmCustomerInformationComponent_label_41_Template, 5, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, CrmCustomerInformationComponent_label_42_Template, 5, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, CrmCustomerInformationComponent_div_43_Template, 4, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, CrmCustomerInformationComponent_div_44_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 10)(46, "div", 11)(47, "div", 20)(48, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "div", 14)(54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_54_listener($event) {
          return ctx.mobjCustProsInfoModel.Customer_Name = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_54_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "div", 10)(56, "div", 11)(57, "div", 12)(58, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "div", 14)(62, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_62_listener($event) {
          return ctx.mobjCustProsInfoModel.Address_1 = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_62_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "div", 10)(64, "div", 11)(65, "div", 20)(66, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "div", 14)(70, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_70_listener($event) {
          return ctx.mobjCustProsInfoModel.City = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_70_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](71, "div", 10)(72, "div", 11)(73, "div", 12)(74, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](77, "div", 14)(78, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_78_listener($event) {
          return ctx.mobjCustProsInfoModel.Address_2 = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_78_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](79, "div", 10)(80, "div", 11)(81, "div", 20)(82, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](85, "div", 14)(86, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_86_listener($event) {
          return ctx.mobjCustProsInfoModel.State = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_86_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](87, "div", 10)(88, "div", 11)(89, "div", 12)(90, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](93, "div", 14)(94, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_94_listener($event) {
          return ctx.mobjCustProsInfoModel.Address_3 = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_94_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](95, "div", 10)(96, "div", 11)(97, "div", 20)(98, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](101, "div", 14)(102, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_102_listener($event) {
          return ctx.mobjCustProsInfoModel.Zip_Code = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_102_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](103, "div", 10)(104, "div", 11)(105, "div", 12)(106, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](109, "div", 14)(110, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_110_listener($event) {
          return ctx.mobjCustProsInfoModel.Country = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_110_listener() {
          return ctx.bmlfOpenLookupModal("Country", "Sales Opportunity Transaction", "Country", "blur", ctx.mobjCustProsInfoModel.Country, "custom", "txtCountry", "SALESOPPORTUNITYTRAN.COUNTRY");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_110_listener() {
          return ctx.bmlfOnGlobalFocus("Country", ctx.mobjCustProsInfoModel.Country);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](111, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_111_listener() {
          return ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Country", "Sales Opportunity Transaction", "Country", "click", ctx.mobjCustProsInfoModel.Country, "custom", "txtCountry", "SALESOPPORTUNITYTRAN.COUNTRY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](112, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](113, "div", 10)(114, "div", 11)(115, "div", 12)(116, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](119, "div", 14)(120, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_120_listener($event) {
          return ctx.mobjCustInfoModel.Email = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_120_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](121, "div", 10)(122, "div", 11)(123, "div", 12)(124, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](127, "div", 14)(128, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_128_listener($event) {
          return ctx.mobjCustProsInfoModel.Ship_Via_Code = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_128_listener() {
          return ctx.bmlfOpenLookupModal("Ship_Via_Code", "Sales Opportunity Transaction", "Shipvia", "blur", ctx.mobjCustProsInfoModel.Ship_Via_Code, "custom", "txtShipVia", "SALESOPPORTUNITYTRAN.SHIPVIA");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_128_listener() {
          return ctx.bmlfOnGlobalFocus("Ship_Via_Code", ctx.mobjCustProsInfoModel.Ship_Via_Code);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](129, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_129_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Ship_Via_Code", "Sales Opportunity Transaction", "Shipvia", "click", ctx.mobjCustProsInfoModel.Ship_Via_Code, "custom", "txtShipVia", "SALESOPPORTUNITYTRAN.SHIPVIA");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](130, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](131, "div", 10)(132, "div", 11)(133, "div", 20)(134, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](137, "div", 14)(138, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_138_listener($event) {
          return ctx.mobjCustProsInfoModel.Ship_Via_CodeDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](139, "div", 10)(140, "div", 11)(141, "div", 12)(142, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](145, "div", 14)(146, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_146_listener($event) {
          return ctx.mobjCustInfoModel.SalesEmp = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_146_listener() {
          return ctx.bmlfOpenLookupModal("SalesEmp", "Sales Opportunity Transaction", "SalesPerson", "blur", ctx.mobjCustInfoModel.SalesEmp, "custom", "txtSalesPerson", "SALESOPPORTUNITYTRAN.SALESPERSON");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_146_listener() {
          return ctx.bmlfOnGlobalFocus("SalesEmp", ctx.mobjCustInfoModel.SalesEmp);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](147, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_147_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("SalesEmp", "Sales Opportunity Transaction", "SalesPerson", "click", ctx.mobjCustInfoModel.SalesEmp, "custom", "txtSalesPerson", "SALESOPPORTUNITYTRAN.SALESPERSON");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](148, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](149, "div", 10)(150, "div", 11)(151, "div", 20)(152, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](155, "div", 14)(156, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_156_listener($event) {
          return ctx.mobjCustInfoModel.SalesEmpDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](157, "div", 10)(158, "div", 11)(159, "div", 12)(160, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](163, "div", 14)(164, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_164_listener($event) {
          return ctx.mobjCustInfoModel.Territory = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_164_listener() {
          return ctx.bmlfOpenLookupModal("Territory", "Sales Opportunity Transaction", "Territory", "blur", ctx.mobjCustInfoModel.Territory, "custom", "txtTerritory", "SALESOPPORTUNITYTRAN.TERRITORY");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_164_listener() {
          return ctx.bmlfOnGlobalFocus("Territory", ctx.mobjCustInfoModel.Territory);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](165, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_165_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Territory", "Sales Opportunity Transaction", "Territory", "click", ctx.mobjCustInfoModel.Territory, "custom", "txtTerritory", "SALESOPPORTUNITYTRAN.TERRITORY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](166, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](167, "div", 10)(168, "div", 11)(169, "div", 20)(170, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](173, "div", 14)(174, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_174_listener($event) {
          return ctx.mobjCustInfoModel.TerritoryDesc = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](175, "div", 10)(176, "div", 11)(177, "div", 12)(178, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](181, "div", 14)(182, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_182_listener($event) {
          return ctx.mobjCustProsInfoModel.Phone_1 = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_182_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](183, "div", 10)(184, "div", 11)(185, "div", 20)(186, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](189, "div", 14)(190, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_190_listener($event) {
          return ctx.mobjCustProsInfoModel.Fax_No = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_190_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](191, "div", 10)(192, "div", 11)(193, "div", 12)(194, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](196, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](197, "div", 14)(198, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_198_listener($event) {
          return ctx.mobjCustInfoModel.CusContact = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_198_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](199, "div", 10)(200, "div", 11)(201, "div", 20)(202, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](205, "div", 14)(206, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_206_listener($event) {
          return ctx.mobjCustInfoModel.ContactPhone = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_206_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](207, "div", 10)(208, "div", 11)(209, "div", 20)(210, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](212, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](213, "div", 14)(214, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_214_listener($event) {
          return ctx.mobjCustInfoModel.Recuserid = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](215, "div", 10)(216, "div", 11)(217, "div", 12)(218, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](219);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](220, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](221, "div", 14)(222, "kendo-datetimepicker", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_kendo_datetimepicker_ngModelChange_222_listener($event) {
          return ctx.mobjCustInfoModel.SubmittedDate = $event;
        })("valueChange", function CrmCustomerInformationComponent_Template_kendo_datetimepicker_valueChange_222_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](223, CrmCustomerInformationComponent_ng_container_223_Template, 3, 4, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](224, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](225, "app-field-extender", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](227, "section", 52)(228, "div", 3)(229, "div", 10)(230, "div", 11)(231, "div", 20)(232, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](234, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](235, "div", 14)(236, "kendo-datepicker", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_kendo_datepicker_ngModelChange_236_listener($event) {
          return ctx.mobjCustInfoModel.StartDate = $event;
        })("valueChange", function CrmCustomerInformationComponent_Template_kendo_datepicker_valueChange_236_listener() {
          return ctx.bmlfOnFormFieldChange();
        })("blur", function CrmCustomerInformationComponent_Template_kendo_datepicker_blur_236_listener() {
          return ctx.bmlfCalculateEstClosingDate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](237, "div", 10)(238, "div", 11)(239, "div", 20)(240, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](242, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](243, "div", 14)(244, "select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_select_ngModelChange_244_listener($event) {
          return ctx.mobjCustInfoModel.LinkCpv = $event;
        })("change", function CrmCustomerInformationComponent_Template_select_change_244_listener() {
          ctx.bmlfOnFormFieldChange();
          return ctx.bmlfChangeLinkedType();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](245, CrmCustomerInformationComponent_option_245_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](246, "div", 10)(247, "div", 11)(248, "div", 20)(249, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](250);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](251, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](252, "div", 14)(253, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_253_listener($event) {
          return ctx.mobjCustInfoModel.PredClosing = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_253_listener() {
          ctx.bmlfCalculateEstClosingDate();
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](254, "div", 10)(255, "div", 11)(256, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](257, CrmCustomerInformationComponent_label_257_Template, 3, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](258, CrmCustomerInformationComponent_label_258_Template, 3, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](259, CrmCustomerInformationComponent_label_259_Template, 3, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](260, CrmCustomerInformationComponent_label_260_Template, 3, 3, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](261, CrmCustomerInformationComponent_div_261_Template, 4, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](262, CrmCustomerInformationComponent_div_262_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](263, "div", 10)(264, "div", 11)(265, "div", 20)(266, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](268, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](269, "div", 14)(270, "kendo-datepicker", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_kendo_datepicker_ngModelChange_270_listener($event) {
          return ctx.mobjCustInfoModel.PredClosingDate = $event;
        })("valueChange", function CrmCustomerInformationComponent_Template_kendo_datepicker_valueChange_270_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](271, "div", 10)(272, "div", 11)(273, "div", 20)(274, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](275);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](276, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](277, "div", 14)(278, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_278_listener($event) {
          return ctx.mobjCustInfoModel.ChannelCusName = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_278_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](279, "div", 10)(280, "div", 11)(281, "div", 20)(282, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](284, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](285, "div", 14)(286, "kendo-numerictextbox", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_kendo_numerictextbox_ngModelChange_286_listener($event) {
          return ctx.mobjCustInfoModel.EstReven = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](287, "div", 10)(288, "div", 11)(289, "div", 20)(290, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](291);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](292, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](293, "div", 14)(294, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_294_listener($event) {
          return ctx.mobjCustInfoModel.channelContact = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_294_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](295, "div", 10)(296, "div", 11)(297, "div", 20)(298, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](300, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](301, "div", 14)(302, "kendo-numerictextbox", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_kendo_numerictextbox_ngModelChange_302_listener($event) {
          return ctx.mobjCustInfoModel.WeightedAmt = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](303, "div", 10)(304, "div", 11)(305, "div", 20)(306, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](307);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](308, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](309, "div", 14)(310, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_310_listener($event) {
          return ctx.mobjCustInfoModel.Remark = $event;
        })("change", function CrmCustomerInformationComponent_Template_input_change_310_listener() {
          return ctx.bmlfOnFormFieldChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](311, "div", 10)(312, "div", 11)(313, "div", 20)(314, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](315);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](316, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](317, "div", 14)(318, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_318_listener($event) {
          return ctx.mobjCustInfoModel.Priority = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_318_listener() {
          return ctx.bmlfOpenLookupModal("Priority", "Sales Opportunity Transaction", "PriorityMaster", "blur", ctx.mobjCustInfoModel.Priority, "custom", "Priority", "SALESOPPORTUNITYTRAN.PRIORITY");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_318_listener() {
          return ctx.bmlfOnGlobalFocus("Priority", ctx.mobjCustInfoModel.Priority);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](319, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_319_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Priority", "Sales Opportunity Transaction", "PriorityMaster", "click", ctx.mobjCustInfoModel.Priority, "custom", "Priority", "SALESOPPORTUNITYTRAN.PRIORITY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](320, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](321, "div", 10)(322, "div", 11)(323, "div", 20)(324, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](325);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](326, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](327, "div", 14)(328, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_328_listener($event) {
          return ctx.mobjCustInfoModel.Project = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_328_listener() {
          return ctx.bmlfOpenLookupModal("Project", "Sales Opportunity Transaction", "ProjectCategoryMaster", "blur", ctx.mobjCustInfoModel.Project, "custom", "cmbProject", "SALESOPPORTUNITYTRAN.PROJECTCATEGORY");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_328_listener() {
          return ctx.bmlfOnGlobalFocus("Project", ctx.mobjCustInfoModel.Project);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](329, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_329_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Project", "Sales Opportunity Transaction", "ProjectCategoryMaster", "click", ctx.mobjCustInfoModel.Project, "custom", "cmbProject", "SALESOPPORTUNITYTRAN.PROJECTCATEGORY");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](330, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](331, "div", 10)(332, "div", 11)(333, "div", 20)(334, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](335);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](336, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](337, "div", 14)(338, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_338_listener($event) {
          return ctx.mobjCustInfoModel.InformationSource = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_338_listener() {
          return ctx.bmlfOpenLookupModal("InformationSource", "Sales Opportunity Transaction", "SourceOfInformation", "blur", ctx.mobjCustInfoModel.InformationSource, "custom", "cmbInformationSource", "SALESOPPORTUNITYTRAN.INFORMATIONSOURCE");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_338_listener() {
          return ctx.bmlfOnGlobalFocus("InformationSource", ctx.mobjCustInfoModel.InformationSource);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](339, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_339_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("InformationSource", "Sales Opportunity Transaction", "SourceOfInformation", "click", ctx.mobjCustInfoModel.InformationSource, "custom", "cmbInformationSource", "SALESOPPORTUNITYTRAN.INFORMATIONSOURCE");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](340, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](341, "div", 10)(342, "div", 11)(343, "div", 20)(344, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](345);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](346, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](347, "div", 14)(348, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_348_listener($event) {
          return ctx.mobjCustInfoModel.Industry = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_348_listener() {
          return ctx.bmlfOpenLookupModal("Industry", "Sales Opportunity Transaction", "IndustryType", "blur", ctx.mobjCustInfoModel.Industry, "custom", "cmbIndustryType", "SALESOPPORTUNITYTRAN.INDUSTRYTYPE");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_348_listener() {
          return ctx.bmlfOnGlobalFocus("Industry", ctx.mobjCustInfoModel.Industry);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](349, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_349_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("Industry", "Sales Opportunity Transaction", "IndustryType", "click", ctx.mobjCustInfoModel.Industry, "custom", "cmbIndustryType", "SALESOPPORTUNITYTRAN.INDUSTRYTYPE");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](350, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](351, "div", 10)(352, "div", 11)(353, "div", 20)(354, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](355);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](356, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](357, "div", 14)(358, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function CrmCustomerInformationComponent_Template_input_ngModelChange_358_listener($event) {
          return ctx.mobjCustInfoModel.SONO = $event;
        })("blur", function CrmCustomerInformationComponent_Template_input_blur_358_listener() {
          return ctx.bmlfOpenLookupModal("SONO", "Sales Opportunity Transaction", "SalesOrderNo", "blur", ctx.mobjCustInfoModel.SONO, "custom", "txtSONO", "SALESOPPORTUNITYTRAN.SALESORDERNO");
        })("focus", function CrmCustomerInformationComponent_Template_input_focus_358_listener() {
          return ctx.bmlfOnGlobalFocus("SONO", ctx.mobjCustInfoModel.SONO);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](359, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CrmCustomerInformationComponent_Template_span_click_359_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenLookupModal("SONO", "Sales Opportunity Transaction", "SalesOrderNo", "click", ctx.mobjCustInfoModel.SONO, "custom", "txtSONO", "SALESOPPORTUNITYTRAN.SALESORDERNO");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](360, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](361, CrmCustomerInformationComponent_ng_container_361_Template, 3, 4, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](362, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](363, "app-field-extender", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](365, CrmCustomerInformationComponent_app_custom_lookup_modal_365_Template, 1, 1, "app-custom-lookup-modal", 72);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.mbShowHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 150, "SALESOPPORTUNITYTRAN.CUSTOMERGENERALINFO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](230, _c2, ctx.msInnertab == "CUSTOMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 152, "SALESOPPORTUNITYTRAN.CUSTOMER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](232, _c2, ctx.msInnertab == "GENERAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 154, "SALESOPPORTUNITYTRAN.GENERAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", ctx.msInnertab != "CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](24, 156, "SALESOPPORTUNITYTRAN.TYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.ProspactCustomer)("disabled", ctx.msMode == "U" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.marrType);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](33, 158, "SALESOPPORTUNITYTRAN.URL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.URL)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.ProspactCustomer == "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.ProspactCustomer == "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.ProspactCustomer == "NP");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.ProspactCustomer == "C" || ctx.mobjCustInfoModel.ProspactCustomer == "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.ProspactCustomer == "NP");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](50, 160, "SALESOPPORTUNITYTRAN.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Customer_Name)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](60, 162, "SALESOPPORTUNITYTRAN.ADDRESS1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Address_1)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](68, 164, "SALESOPPORTUNITYTRAN.CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.City)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](76, 166, "SALESOPPORTUNITYTRAN.ADDRESS2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Address_2)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](84, 168, "SALESOPPORTUNITYTRAN.STATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.State)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](92, 170, "SALESOPPORTUNITYTRAN.ADDRESS3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Address_3)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](100, 172, "SALESOPPORTUNITYTRAN.ZIP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Zip_Code)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](108, 174, "SALESOPPORTUNITYTRAN.COUNTRY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Country)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](118, 176, "SALESOPPORTUNITYTRAN.EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Email)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](126, 178, "SALESOPPORTUNITYTRAN.SHIPVIA"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Ship_Via_Code)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](136, 180, "SALESOPPORTUNITYTRAN.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Ship_Via_CodeDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](144, 182, "SALESOPPORTUNITYTRAN.SALESPERSON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.SalesEmp)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](154, 184, "SALESOPPORTUNITYTRAN.SALESPERSONNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.SalesEmpDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](162, 186, "SALESOPPORTUNITYTRAN.TERRITORY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Territory)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](172, 188, "SALESOPPORTUNITYTRAN.TERRITORYNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.TerritoryDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](180, 190, "SALESOPPORTUNITYTRAN.PHONE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Phone_1)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](188, 192, "SALESOPPORTUNITYTRAN.FAXNO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustProsInfoModel.Fax_No)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](196, 194, "SALESOPPORTUNITYTRAN.CONTACTNAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.CusContact)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](204, 196, "SALESOPPORTUNITYTRAN.CONTACTPHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.ContactPhone)("disabled", ctx.mobjCustInfoModel.ProspactCustomer != "NP" || ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](212, 198, "SALESOPPORTUNITYTRAN.SUBMITTEDBY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Recuserid);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](220, 200, "SALESOPPORTUNITYTRAN.SUBMITTEDDATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("format", ctx.msCustomDateTimeFormat)("placeholder", ctx.msCustomDateTimeFormat)("ngModel", ctx.mobjCustInfoModel.SubmittedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbCustomControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hidden", ctx.msInnertab != "GENERAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](234, 202, "SALESOPPORTUNITYTRAN.STARTDATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("format", ctx.msCustomDateFormat)("placeholder", ctx.msCustomDateFormat)("ngModel", ctx.mobjCustInfoModel.StartDate)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](242, 204, "SALESOPPORTUNITYTRAN.LINKEDTYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.LinkCpv)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.marrLinkedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](251, 206, "SALESOPPORTUNITYTRAN.ESTCLOSINGDAYS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.PredClosing)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv == "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv == "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv == "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv == "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv != "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mobjCustInfoModel.LinkCpv == "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](268, 208, "SALESOPPORTUNITYTRAN.ESTCLOSINGDATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("format", ctx.msCustomDateFormat)("placeholder", ctx.msCustomDateFormat)("ngModel", ctx.mobjCustInfoModel.PredClosingDate)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](276, 210, "SALESOPPORTUNITYTRAN.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.ChannelCusName)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](284, 212, "SALESOPPORTUNITYTRAN.ESTREVENUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx.mobjCustInfoModel.EstReven)("min", 0)("autoCorrect", ctx.autoCorrect)("decimals", ctx.miAmountPrecision)("format", ctx.miAmountPrecisionFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](292, 214, "SALESOPPORTUNITYTRAN.CONTACT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.channelContact)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](300, 216, "SALESOPPORTUNITYTRAN.WEIGHTEDAMT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx.mobjCustInfoModel.WeightedAmt)("min", 0)("autoCorrect", ctx.autoCorrect)("decimals", ctx.miAmountPrecision)("format", ctx.miAmountPrecisionFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](308, 218, "SALESOPPORTUNITYTRAN.REMARK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Remark)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](316, 220, "SALESOPPORTUNITYTRAN.PRIORITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Priority)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](326, 222, "SALESOPPORTUNITYTRAN.PROJECTCATEGORY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Project)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](336, 224, "SALESOPPORTUNITYTRAN.INFORMATIONSOURCE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.InformationSource)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](346, 226, "SALESOPPORTUNITYTRAN.INDUSTRYTYPE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.Industry)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](356, 228, "SALESOPPORTUNITYTRAN.SALESORDERNO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.mobjCustInfoModel.SONO)("disabled", ctx.mbIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbCustomControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__.CustomLookupModalComponent, _shared_components_custom_component_form_custom_component_form_component__WEBPACK_IMPORTED_MODULE_14__.CustomComponentFormComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__.NumericTextBoxComponent, src_app_shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_15__.NumbersOnlyDirective, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_16__.FieldExtenderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_22__.DateTimePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    styles: [".customer-Info .modal-backdrop {\n  z-index: 9999 !important;\n}\n\n  .customer-Info .NewHeight {\n  z-index: 10000 !important;\n}\n\n  .enter-date-time .k-dateinput {\n  width: calc(100% - 28px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy9zYWxlcy1vcHBwb3J0dW5pdHktdHJhbnNhY3Rpb24vY3JtLWN1c3RvbWVyLWluZm9ybWF0aW9uL2NybS1jdXN0b21lci1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL05ldyUyMFdvcmtpbmcxNi9CTUVXRUJVSS9CTUVXRUIxMS9CTUVXRUIxMS9zcmMvYXBwL21haW4vY3JtL2NvbXBvbmVudHMvc2FsZXMtb3BwcG9ydHVuaXR5LXRyYW5zYWN0aW9uL2NybS1jdXN0b21lci1pbmZvcm1hdGlvbi9jcm0tY3VzdG9tZXItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURHQTtFQUNJLG1DQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmN1c3RvbWVyLUluZm8gLm1vZGFsLWJhY2tkcm9we1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbWVyLUluZm8gLk5ld0hlaWdodHtcclxuICAgIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmVudGVyLWRhdGUtdGltZSAuay1kYXRlaW5wdXR7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjhweCkgIWltcG9ydGFudDtcclxufSIsIjo6bmctZGVlcCAuY3VzdG9tZXItSW5mbyAubW9kYWwtYmFja2Ryb3Age1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tZXItSW5mbyAuTmV3SGVpZ2h0IHtcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5lbnRlci1kYXRlLXRpbWUgLmstZGF0ZWlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 39847:
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/crm-phases/crm-phases.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrmPhasesComponent: () => (/* binding */ CrmPhasesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constant/salesOpportunityTran.const */ 13117);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/sales-opportunity-transaction.model */ 96821);
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../http/sales-opportunity-transaction.service */ 21129);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/common-grid-customization/common-grid-customization */ 9537);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 21916);



























const _c0 = ["customGrid"];
const _c1 = ["FieldExtender"];
function CrmPhasesComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-loader");
  }
}
function CrmPhasesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 21)(4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmPhasesComponent_ng_template_17_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const rowIndex_r7 = restoredCtx.rowIndex;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.mbIsDisabled ? false : ctx_r8.bmlfDeleteItemData(rowIndex_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r7 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "COMMON.ACTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", "cmdDeleteItem" + rowIndex_r7);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 25)(4, "kendo-datepicker", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmPhasesComponent_kendo_grid_column_18_2_ng_template_0_Template_kendo_datepicker_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const dataItem_r16 = restoredCtx.dataItem;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r16[item_r10.Field] = $event);
    })("valueChange", function CrmPhasesComponent_kendo_grid_column_18_2_ng_template_0_Template_kendo_datepicker_valueChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r21.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r16 = ctx.dataItem;
    const rowIndex_r17 = ctx.rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, "SALESOPPORTUNITYTRAN." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", "dt" + rowIndex_r17 + item_r10.Field)("name", "dt" + rowIndex_r17 + item_r10.Field)("format", ctx_r15.msCustomDateFormat)("placeholder", ctx_r15.msCustomDateFormat)("ngModel", dataItem_r16[item_r10.Field])("disabled", ctx_r15.mbIsDisabled);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmPhasesComponent_kendo_grid_column_18_2_ng_template_0_Template, 5, 9, "ng-template", 13);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 27)(4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const dataItem_r24 = restoredCtx.dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r24.Stage = $event);
    })("blur", function CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template_input_blur_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const dataItem_r24 = restoredCtx.dataItem;
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r28.bmlfOpenLookupModal("Stage", "Sales Opportunity Transaction", "Phase", "blur", dataItem_r24.Stage, "custom", "txtStage" + rowIndex_r25, "SALESOPPORTUNITYTRAN.PHASEID", rowIndex_r25));
    })("focus", function CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template_input_focus_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const dataItem_r24 = restoredCtx.dataItem;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r29.bmlfOnGlobalFocus("Stage", dataItem_r24.Stage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const dataItem_r24 = restoredCtx.dataItem;
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r30.mbIsDisabled ? false : ctx_r30.bmlfOpenLookupModal("Stage", "Sales Opportunity Transaction", "Phase", "click", dataItem_r24.Stage, "custom", "txtStage" + rowIndex_r25, "SALESOPPORTUNITYTRAN.PHASEID", rowIndex_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dataItem_r24 = ctx.dataItem;
    const rowIndex_r25 = ctx.rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, "SALESOPPORTUNITYTRAN." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "txtStage", rowIndex_r25, "")("name", "txtStage", rowIndex_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", dataItem_r24.Stage)("disabled", ctx_r23.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("id", "cmdItemLookup", rowIndex_r25, "");
  }
}
function CrmPhasesComponent_kendo_grid_column_18_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmPhasesComponent_kendo_grid_column_18_3_ng_template_0_Template, 7, 8, "ng-template", 13);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 25)(1, "kendo-numerictextbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_3_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const dataItem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r33.Percentage = $event);
    })("blur", function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_3_Template_kendo_numerictextbox_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      const dataItem_r33 = ctx_r41.dataItem;
      const rowIndex_r34 = ctx_r41.rowIndex;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      ctx_r40.bmlfOnFormFieldChange();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r40.bmlfChangeQty(dataItem_r33, rowIndex_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const rowIndex_r34 = ctx_r42.rowIndex;
    const dataItem_r33 = ctx_r42.dataItem;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("spinners", false)("step", 0)("name", "txtPercentage" + rowIndex_r34)("ngModel", dataItem_r33.Percentage)("id", "txtPercentage" + rowIndex_r34)("min", 0)("autoCorrect", ctx_r35.autoCorrect)("decimals", ctx_r35.miPercentagePrecision)("format", ctx_r35.miPercentagePrecisionFormat)("disabled", ctx_r35.mbIsDisabled);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 25)(1, "kendo-numerictextbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_4_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const dataItem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().dataItem;
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](dataItem_r33[item_r10.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const rowIndex_r34 = ctx_r48.rowIndex;
    const dataItem_r33 = ctx_r48.dataItem;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("spinners", false)("step", 0)("name", "txt" + item_r10.Field + rowIndex_r34)("ngModel", dataItem_r33[item_r10.Field])("id", "txt" + item_r10.Field + rowIndex_r34)("min", 0)("autoCorrect", true)("decimals", ctx_r36.miAmountPrecision)("format", ctx_r36.miAmountPrecisionFormat);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_3_Template, 2, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_div_4_Template, 2, 9, "div", 31);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "SALESOPPORTUNITYTRAN." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Field == "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Field != "Percentage");
  }
}
function CrmPhasesComponent_kendo_grid_column_18_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmPhasesComponent_kendo_grid_column_18_4_ng_template_0_Template, 5, 5, "ng-template", 13);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-common-grid-customization", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("msChangeField", function CrmPhasesComponent_kendo_grid_column_18_ng_template_5_Template_app_common_grid_customization_msChangeField_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);
      const rowIndex_r51 = restoredCtx.rowIndex;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.bmlfFieldEvent($event, rowIndex_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r50 = ctx.dataItem;
    const rowIndex_r51 = ctx.rowIndex;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msGridColumn", ctx_r14.marrLineItemCol)("msGridBinding", ctx_r14.marrItemWiseGridData)("dataItem", dataItem_r50)("item", item_r10)("rowIndex", rowIndex_r51)("mFormMode", ctx_r14.msMode);
  }
}
function CrmPhasesComponent_kendo_grid_column_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-grid-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CrmPhasesComponent_kendo_grid_column_18_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, CrmPhasesComponent_kendo_grid_column_18_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CrmPhasesComponent_kendo_grid_column_18_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, CrmPhasesComponent_kendo_grid_column_18_ng_template_5_Template, 2, 6, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("field", item_r10.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", item_r10.Field.startsWith("User") || item_r10.Field.includes("CUSTOM") ? item_r10.Title : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 6, "SALESOPPORTUNITYTRAN." + item_r10.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r10.Type == "number");
  }
}
function CrmPhasesComponent_app_custom_lookup_modal_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-custom-lookup-modal", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("saveLookupField", function CrmPhasesComponent_app_custom_lookup_modal_22_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.bmlfSaveLookupField($event));
    })("closeLookup", function CrmPhasesComponent_app_custom_lookup_modal_22_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("keyData", ctx_r4.mobjLookupKeyData);
  }
}
function CrmPhasesComponent_kendo_dialog_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "kendo-dialog", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("close", function CrmPhasesComponent_kendo_dialog_23_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmPhasesComponent_kendo_dialog_23_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.bmlfDeleteLineItemAction("Delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmPhasesComponent_kendo_dialog_23_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r62.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 6, "COMMON.MSG.DELETECONFIRMATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 8, "COMMON.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"));
  }
}
class CrmPhasesComponent {
  constructor(router, toastMessageService, utilService, userFieldService, formService, lookupService, dateFormatService, lsService) {
    this.router = router;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.formService = formService;
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.lsService = lsService;
    this.msTrnKey = "";
    this.mbIsDisabled = false;
    this.mnumPotentialAmt = 0;
    this.bmgfShowHeaderEvnt = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_4__.CommonConstants.gsServerDateFormat;
    this.mbIsLoading = false;
    this.msMode = "I";
    this.msScreenName = "Phases";
    this.mbIsChangeData = false;
    this.mobjUserData = {};
    this.msCustomDateFormat = "";
    this.marrItemWiseGridData = [];
    this.miAmountPrecision = 0;
    this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
    this.miCostPrecision = 6;
    this.miCostPrecisionFormat = 'n' + this.miCostPrecision;
    this.miPercentagePrecision = 2;
    this.miPercentagePrecisionnFormat = 'n' + this.miPercentagePrecision;
    this.marrLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_0__.SalesOpportunityTranConstant.garrPhasesLineItemCol.map(ele => Object.assign({}, ele));
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    this.mbDeleteLineItemDialog = false;
    this.mskeyValue = ""; //FieldExtender
  }

  ngOnInit() {
    this.utilService.bmgfAddCustomLineToModel(this.marrLineItemCol, this.msScreenName, 'DTTable').then(res => {});
    this.mobjUserData = this.lsService.getUserSession();
    let parrDefaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    parrDefaultFormat.forEach(ele => {
      if (ele.Default_Key == "CURR_DECIMAL") {
        this.miAmountPrecision = Number(ele.Default_Value);
        this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
      }
    });
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mskeyValue = this.msTrnKey;
    this.SetGridColumns('DTTable', this.marrLineItemCol);
    this.bmlfGetPhasesData();
  }
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  bmlfGetPhasesData() {
    this.marrItemWiseGridData = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "Phases",
      "OpportunityNo": this.msTrnKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.Phases.length > 0) {
        let parrGridData = res.Phases;
        parrGridData.forEach(ele => {
          ele.StartDate = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.StartDate) ? null : new Date(ele.StartDate);
          ele.ClosingDate = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.ClosingDate) ? null : new Date(ele.ClosingDate);
          ele.Percentage = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.Percentage) ? 0 : Number(ele.Percentage);
          ele.PotentialAmt = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.PotentialAmt) ? 0 : Number(ele.PotentialAmt);
          ele.WeightedAmt = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(ele.WeightedAmt) ? 0 : Number(ele.WeightedAmt);
          ele.mode = "U";
        });
        this.marrItemWiseGridData = parrGridData;
        this.msMode = "U";
      } else {
        this.msMode = "I";
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  //Open LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle, pnumRowIdx = null) {
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psTitle != "") {
      this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    } else {
      this.mobjLookupKeyData.title = psTitle;
    }
    if (psEvent == 'blur' && (psValue == undefined || psValue == '' || this.msLookupField == psValue)) {
      this.msLookupField = '';
      if (psValue == undefined || psValue == '') {
        if (pnumRowIdx != null) {
          this.marrItemWiseGridData[pnumRowIdx][psField] = "";
          this.bmlfClearLookupField(psField, pnumRowIdx);
        }
      }
      return false;
    }
    let psLookup = "";
    psLookup = psLookUpKey;
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookup,
      Filter1: "",
      Filter2: "",
      Filter3: "",
      Filter4: "",
      Filter5: ""
    };
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      this.utilService.bmgfOnKeyInputEnable();
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
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
                ele[key] = '';
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
          let psInputKey = this.bmlfGetInputColumn(psField, pnumRowIdx);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : typeof obj[psInputKey] == 'number' ? obj[psInputKey] : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.mobjLookupKeyData.valueKey = parrFilterData[0][psInputKey];
            this.bmlfSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        this.mbIsLookupModal = false;
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  //Close LOOKUP MODAL
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field, this.mnumLineItemRowIndex);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjData.eleId) != undefined) {
          document.getElementById(pobjData.eleId).value = '';
        }
        if (this.mnumLineItemRowIndex != null && this.mnumLineItemRowIndex >= 0) {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex][pobjData.field] = "";
          this.bmlfClearLookupField(pobjData.field, this.mnumLineItemRowIndex);
          setTimeout(function () {
            document.getElementById(pobjData.eleId).focus();
          }, 10);
          return;
        }
      }
    }
    let elementExists = document.getElementById(pobjData.eleId);
    if (elementExists) {
      document.getElementById(pobjData.eleId).focus();
    }
  }
  bmlfSaveLookupField(pobjData) {
    this.mbIsLookupModal = false;
    this.mbIsChangeData = true;
    this.mbIsLoading = false;
    this.bmlfonTransferValues(pobjData.field, pobjData.value);
  }
  // Transfer Lookup Values
  bmlfonTransferValues(psFName, pobjValue) {
    switch (psFName) {
      case 'Stage':
        {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].Stage = pobjValue['PhaseKey'];
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].Percentage = pobjValue['Percentage'];
          this.bmlfChangeQty(this.marrItemWiseGridData[this.mnumLineItemRowIndex], this.mnumLineItemRowIndex);
          break;
        }
      default:
        {
          break;
        }
    }
  }
  // get Lookup Value Column
  bmlfGetInputColumn(psField, index) {
    if (psField == 'Stage') {
      return 'PhaseKey';
    }
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
  bmlfClearLookupField(psField, index) {
    if (psField == "Stage") {
      this.marrItemWiseGridData[index].Stage = "";
      this.marrItemWiseGridData[index].Percentage = "";
    }
  }
  bmlfValidLineItem() {
    let psErrMsg = "";
    for (let i = 0; i < this.marrItemWiseGridData.length; i++) {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].StartDate)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ENTERSTARTDATE") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].ClosingDate)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ENTERCLOSINGDATE") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfCompareTwoDates(this.marrItemWiseGridData[i].StartDate, this.marrItemWiseGridData[i].ClosingDate)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.CLOSINGDATEGREATERTHANSTARTDATE") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].Stage)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.PHASEID") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (this.marrItemWiseGridData[i].Percentage > 100) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.PERCENTAGEVALID") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else {
        psErrMsg = "";
      }
    }
    if (psErrMsg != "") {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  bmlfAddLineItem() {
    if (this.bmlfValidLineItem()) {
      let pobjData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_3__.PhasesModal();
      let maxLineNo = 0;
      if (this.marrItemWiseGridData.length == 0) {
        maxLineNo = 1;
      } else {
        const a = this.marrItemWiseGridData.reduce(function (prev, current) {
          return prev.RowId > current.RowId ? prev : current;
        });
        maxLineNo = a.RowId + 1;
      }
      pobjData.OppNo = this.msTrnKey;
      pobjData.RowId = maxLineNo;
      pobjData.PotentialAmt = this.mnumPotentialAmt;
      this.marrItemWiseGridData.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
    }
  }
  bmlfChangeQty(data, index) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(data.Percentage)) {
      data.Percentage = 0;
    }
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(data.PotentialAmt)) {
      data.PotentialAmt = 0;
    }
    if (data.Percentage > 100) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.PERCENTAGEVALID"));
      //this.marrItemWiseGridData[index].Percentage = 0;
      return;
    }
    let WeightedAmt = data.Percentage * data.PotentialAmt / 100;
    this.marrItemWiseGridData[index].WeightedAmt = Number(WeightedAmt);
  }
  bmlfSubmitForm(psType) {
    // if (!this.utilService.mbWrite) {
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return;
    // };
    if (this.marrItemWiseGridData.length == 0) {
      this.msMode = "I";
    }
    if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.msMode == 'U') {
      return;
    }
    if (!this.bmlfValidLineItem()) {
      return;
    }
    if (this.customGridCtrl != undefined) {
      if (!this.customGridCtrl.bmlfGlobalIsMandatory()) {
        return;
      }
    }
    //Validate Field Extender -- Start
    let resultString = this.FieldExtender.bmgfValidationCheck();
    if (resultString.value == false) {
      this.toastMessageService.notifyError(resultString.msg);
      return;
    }
    this.bmlfSavePhasesData(psType);
  }
  bmlfSavePhasesData(psType) {
    this.mbIsLoading = true;
    let parrHeaderData = [];
    this.marrItemWiseGridData.forEach(data => {
      let element = Object.assign({}, data);
      element.OppNo = this.msTrnKey;
      element.StartDate = element.StartDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_1__(element.StartDate).format(this.msServeDateFormat);
      element.ClosingDate = element.ClosingDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_1__(element.ClosingDate).format(this.msServeDateFormat);
      element.Percentage = this.utilService.bmgfSetPrecision(element.Percentage, this.miPercentagePrecision);
      element.PotentialAmt = this.utilService.bmgfSetPrecision(element.PotentialAmt, this.miAmountPrecision);
      element.WeightedAmt = this.utilService.bmgfSetPrecision(element.WeightedAmt, this.miAmountPrecision);
      delete element.mode;
      parrHeaderData.push(element);
    });
    let pobjJData = {
      ParameterData: [{
        "Mode": this.msMode == "I" ? "Insert" : "Update",
        "TransactionTabName": "Phases"
      }],
      Phases: parrHeaderData,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSalesOpportunityTranData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.mbIsChangeData = false;
        this.FieldExtender.mbChange = false;
        if (res.Response[0].ResponseText.includes("Unable")) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
          let pobj = {
            type: "GetClosingPer"
          };
          this.bmgfShowHeaderEvnt.emit(pobj);
          // FieldExtender -- start update
          let screenKeyValue = this.msScreenName + " — " + this.mskeyValue;
          let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
          if (jsonData.length > 0) {
            this.FieldExtender.bmlfCallApi(jsonData).then(res => {
              if (res != null) {}
            });
          }
          ;
          // FieldExtender -- End update
          if (psType == "New") {
            let pobj = {
              type: "New"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "Close") {
            this.bmlfCloseForm();
          } else if (psType == "Search") {
            let pobj = {
              type: "Search"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "TabChange") {
            let pobj = {
              type: "TabChange"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            if (this.msMode == "I") {
              this.msMode = "U";
            }
            this.bmlfGetPhasesData();
          }
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfCloseForm() {
    this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
  }
  /** ---Delete event of Item Row Data--- */
  bmlfDeleteItemData(pnumIndex) {
    this.mnumDeleteLineIndex = pnumIndex;
    this.mbDeleteLineItemDialog = true;
  }
  /**---Confirm box event of delete Item Row ------ */
  bmlfDeleteLineItemAction(psAction) {
    if (psAction == 'Cancel') {
      this.mbDeleteLineItemDialog = false;
    } else if (psAction == 'Delete') {
      if (this.marrItemWiseGridData[this.mnumDeleteLineIndex].mode == "I") {
        let parrArrData = Object.assign([], this.marrItemWiseGridData);
        parrArrData.splice(this.mnumDeleteLineIndex, 1);
        this.marrItemWiseGridData = parrArrData;
        this.mbDeleteLineItemDialog = false;
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
        if (this.marrItemWiseGridData.length == 0) {
          this.msMode = "I";
        }
      } else {
        this.mbIsLoading = true;
        let pobjOData = {
          HeaderData: [],
          Response: []
        };
        pobjOData.HeaderData.push({
          "TransactionTabName": "Phases",
          "OpportunityNo": this.msTrnKey,
          "RowId": this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId
        });
        pobjOData.Response.push({
          "ResponseText": "",
          "ErrorCode": ""
        });
        let psJData = JSON.stringify(pobjOData);
        let psTempjData = JSON.stringify(psJData);
        let psJson = '{"JSON":' + psTempjData + '}';
        this.formService.bmlfDeleteSalesOpportunityRowData(psJson).subscribe(res => {
          this.mbIsLoading = false;
          if (res.Response[0].ErrorCode == "") {
            let parrArrData = Object.assign([], this.marrItemWiseGridData);
            parrArrData.splice(this.mnumDeleteLineIndex, 1);
            this.marrItemWiseGridData = parrArrData;
            this.mbDeleteLineItemDialog = false;
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
            if (this.marrItemWiseGridData.length == 0) {
              this.msMode = "I";
            }
            let pobj = {
              type: "GetClosingPer"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            this.toastMessageService.notifyError(res.Response[0].ResponseText);
          }
        }).add(() => {
          this.mbIsLoading = false;
        });
      }
    }
  }
  SetGridColumns(GridName, parrGridCol) {
    this.utilService.GetJsonSetting(this.msScreenName, this.mobjUserData.UserId, GridName, parrGridCol).then(pArrGridChangedCol => {
      if (pArrGridChangedCol != null && pArrGridChangedCol != undefined) {
        parrGridCol = pArrGridChangedCol;
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfFieldEvent(type, rowIndex) {
    this.mbIsChangeData = type;
  }
  static #_ = this.ɵfac = function CrmPhasesComponent_Factory(t) {
    return new (t || CrmPhasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: CrmPhasesComponent,
    selectors: [["app-crm-phases"]],
    viewQuery: function CrmPhasesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.customGridCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    inputs: {
      msTrnKey: "msTrnKey",
      mbIsDisabled: "mbIsDisabled",
      mnumPotentialAmt: "mnumPotentialAmt"
    },
    outputs: {
      bmgfShowHeaderEvnt: "bmgfShowHeaderEvnt"
    },
    decls: 24,
    vars: 24,
    consts: [[4, "ngIf"], ["autocomplete", "off"], [1, "form-container"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-2", "col-lg-2", "m_b_10", "br-1"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["id", "divPhasesKendo", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "PrdRangeGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", "scrolled-grid", "custom-height", "custom_h_grid", "max_scroll", 3, "data", "pageable", "sortable", "resizable", "reorderable", "groupable", "pageSize", "rowHeight"], [3, "noRecords"], [1, "grid-action-column", 3, "width", "title"], ["kendoGridCellTemplate", ""], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "deleteLineItemDialog", 3, "close", 4, "ngIf"], [1, "mob-label"], [1, "grid-icon-sec"], ["title", "Delete", 1, "", 3, "id", "click"], [1, "fa", "fa-trash-o"], [3, "field", "title", "width"], [1, "form-group", "custom-inline-input"], [1, "form-control", "grid-form-control", 3, "id", "name", "format", "placeholder", "ngModel", "disabled", "ngModelChange", "valueChange"], [1, "from-group", "custom_flex", "grid-label-link"], ["type", "text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "blur", "focus"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], ["class", "form-group custom-inline-input", 4, "ngIf"], [3, "spinners", "step", "name", "ngModel", "id", "min", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "blur"], ["disabled", "", 3, "spinners", "step", "name", "ngModel", "id", "min", "autoCorrect", "decimals", "format", "ngModelChange"], [3, "msGridColumn", "msGridBinding", "dataItem", "item", "rowIndex", "mFormMode", "msChangeField"], ["customGrid", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup"], ["id", "deleteLineItemDialog", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdDeleteLineItemAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"]],
    template: function CrmPhasesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, CrmPhasesComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CrmPhasesComponent_Template_button_click_8_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfAddLineItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 9)(12, "kendo-grid", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "kendo-grid-messages", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "kendo-grid-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, CrmPhasesComponent_ng_template_17_Template, 6, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, CrmPhasesComponent_kendo_grid_column_18_Template, 6, 8, "kendo-grid-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "app-field-extender", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, CrmPhasesComponent_app_custom_lookup_modal_22_Template, 1, 1, "app-custom-lookup-modal", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, CrmPhasesComponent_kendo_dialog_23_Template, 16, 12, "kendo-dialog", 19);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 18, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx.marrItemWiseGridData)("pageable", true)("sortable", false)("resizable", true)("reorderable", true)("groupable", false)("pageSize", 50)("rowHeight", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 20, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 22, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("width", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.marrLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mbDeleteLineItemDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_12__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__.NumericTextBoxComponent, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_14__.FieldExtenderComponent, _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_15__.CommonGridCustomizationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_23__.CellTemplateDirective, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__.DatePickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76374:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/crm-product-range/crm-product-range.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrmProductRangeComponent: () => (/* binding */ CrmProductRangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constant/salesOpportunityTran.const */ 13117);
/* harmony import */ var _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/sales-opportunity-transaction.model */ 96821);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_main_srm_models_sample_transaction_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/main/srm/models/sample-transaction.model */ 96160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../http/sales-opportunity-transaction.service */ 21129);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_main_srm_http_sample_transaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/main/srm/http/sample-transaction.service */ 62243);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/field-extender/field-extender.component */ 47);
/* harmony import */ var _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/common-grid-customization/common-grid-customization */ 9537);
/* harmony import */ var _shared_components_sales_template_modal_sales_template_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/sales-template-modal/sales-template-modal.component */ 3190);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 21916);




























const _c0 = ["customGrid"];
const _c1 = ["FieldExtender"];
function CrmProductRangeComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-loader");
  }
}
function CrmProductRangeComponent_ng_template_32_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_ng_template_32_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r14);
      const dataItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r13.mbIsDisabled || dataItem_r10.Status != "NEW" ? false : ctx_r13.bmlfSendForApproval(dataItem_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id", "cmdApproval" + rowIndex_r11);
  }
}
function CrmProductRangeComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 33)(4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_ng_template_32_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18);
      const dataItem_r10 = restoredCtx.$implicit;
      const rowIndex_r11 = restoredCtx.rowIndex;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r17.mbIsDisabled || dataItem_r10.Status != "NEW" && dataItem_r10.LineType == "New Sample" ? false : ctx_r17.bmlfDeleteItemData(rowIndex_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, CrmProductRangeComponent_ng_template_32_a_6_Template, 2, 1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "COMMON.ACTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id", "cmdDeleteItem" + rowIndex_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r10.LineType == "New Sample");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("value", x_r32.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", x_r32.key, "");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r35);
      const dataItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r26[item_r19.Field] = $event);
    })("change", function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_Template_select_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const rowIndex_r27 = ctx_r38.rowIndex;
      const dataItem_r26 = ctx_r38.dataItem;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      ctx_r37.bmlfOnFormFieldChange();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r37.bmlfChangeLineType(rowIndex_r27, dataItem_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_option_1_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const dataItem_r26 = ctx_r39.dataItem;
    const rowIndex_r27 = ctx_r39.rowIndex;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r26[item_r19.Field])("id", "cmb" + rowIndex_r27 + "LineType")("name", "cmb" + rowIndex_r27 + "LineType")("disabled", ctx_r28.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r28.marrLineTypeList);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43);
      const dataItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r26[item_r19.Field] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r27 = ctx_r45.rowIndex;
    const dataItem_r26 = ctx_r45.dataItem;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "txtLineType", rowIndex_r27, "")("name", "txtLineType", rowIndex_r27, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r26[item_r19.Field]);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", dataItem_r26.Status, " SAMPLE");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_select_4_Template, 2, 5, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_input_5_Template, 1, 3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_span_6_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r26 = ctx.dataItem;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r19.Field.startsWith("User") || item_r19.Field.includes("CUSTOM") ? item_r19.Title : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, "SALESOPPORTUNITYTRAN." + item_r19.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r26[item_r19.Field] != "New Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r26[item_r19.Field] == "New Sample" && dataItem_r26.Status == "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r26[item_r19.Field] == "New Sample" && dataItem_r26.Status != "NEW");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, CrmProductRangeComponent_kendo_grid_column_33_2_ng_template_0_Template, 7, 6, "ng-template", 22);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 51)(1, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const dataItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r50.ItemKey = $event);
    })("blur", function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template_input_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const dataItem_r50 = ctx_r58.dataItem;
      const rowIndex_r51 = ctx_r58.rowIndex;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r57.bmlfOpenLookupModal("ItemKey", "Sales Opportunity Transaction", "ItemKey", "blur", dataItem_r50.ItemKey, "custom", "txtItem" + rowIndex_r51, "ITEMKEY", rowIndex_r51));
    })("focus", function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template_input_focus_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const dataItem_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r59.bmlfOnGlobalFocus("ItemKey", dataItem_r50.ItemKey));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const dataItem_r50 = ctx_r62.dataItem;
      const rowIndex_r51 = ctx_r62.rowIndex;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r50.LineType != "Inventory" || ctx_r61.mbIsDisabled ? false : ctx_r61.bmlfOpenLookupModal("ItemKey", "Sales Opportunity Transaction", "ItemKey", "click", dataItem_r50.ItemKey, "custom", "txtItem" + rowIndex_r51, "ITEMKEY", rowIndex_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r51 = ctx_r63.rowIndex;
    const dataItem_r50 = ctx_r63.dataItem;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "txtItem", rowIndex_r51, "")("name", "txtItem", rowIndex_r51, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r50.ItemKey)("disabled", dataItem_r50.LineType != "Inventory" || ctx_r52.mbIsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "cmdItemLookup", rowIndex_r51, "");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_label_4_Template_label_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const rowIndex_r51 = ctx_r65.rowIndex;
      const dataItem_r50 = ctx_r65.dataItem;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r64.bmlfOpenSampleModal(rowIndex_r51, dataItem_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r51 = ctx_r67.rowIndex;
    const dataItem_r50 = ctx_r67.dataItem;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "btnLineType", rowIndex_r51, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](dataItem_r50[item_r19.Field]);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_div_3_Template, 4, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_label_4_Template, 2, 2, "label", 50);
  }
  if (rf & 2) {
    const dataItem_r50 = ctx.dataItem;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r19.Field.startsWith("User") || item_r19.Field.includes("CUSTOM") ? item_r19.Title : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "SALESOPPORTUNITYTRAN." + item_r19.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r50.LineType != "New Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", dataItem_r50.LineType == "New Sample");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, CrmProductRangeComponent_kendo_grid_column_33_3_ng_template_0_Template, 5, 5, "ng-template", 22);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r77);
      const dataItem_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r71.Description = $event);
    })("change", function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_3_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r78.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r72 = ctx_r79.rowIndex;
    const dataItem_r71 = ctx_r79.dataItem;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "txtItemDescription", rowIndex_r72, "")("name", "txtItemDescription", rowIndex_r72, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r71.Description)("disabled", ctx_r73.mbIsDisabled || dataItem_r71.LineType == "New Sample");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r82);
      const dataItem_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r71.Unit = $event);
    })("change", function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_4_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r82);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r83.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r72 = ctx_r84.rowIndex;
    const dataItem_r71 = ctx_r84.dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "txtUnit", rowIndex_r72, "")("name", "txtUnit", rowIndex_r72, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r71.Unit);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_3_Template, 2, 4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_div_4_Template, 2, 3, "div", 56);
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r19.Field.startsWith("User") || item_r19.Field.includes("CUSTOM") ? item_r19.Title : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "SALESOPPORTUNITYTRAN." + item_r19.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Field == "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Field == "Unit");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, CrmProductRangeComponent_kendo_grid_column_33_4_ng_template_0_Template, 5, 5, "ng-template", 22);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "kendo-numerictextbox", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_3_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r94);
      const dataItem_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r87.EstimatedQty = $event);
    })("blur", function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_3_Template_kendo_numerictextbox_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r94);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const dataItem_r87 = ctx_r96.dataItem;
      const rowIndex_r88 = ctx_r96.rowIndex;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      ctx_r95.bmlfOnFormFieldChange();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r95.bmlfChangeQty(dataItem_r87, rowIndex_r88));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r88 = ctx_r97.rowIndex;
    const dataItem_r87 = ctx_r97.dataItem;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("name", "txtQuantity" + rowIndex_r88)("ngModel", dataItem_r87.EstimatedQty)("id", "txtQuantity" + rowIndex_r88)("min", 0)("autoCorrect", ctx_r89.autoCorrect)("decimals", ctx_r89.miQtyPrecision)("format", ctx_r89.miQtyPrecisionFormat)("disabled", ctx_r89.mbIsDisabled || dataItem_r87.LineType == "New Sample");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "kendo-numerictextbox", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_4_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r100);
      const dataItem_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r87.Price = $event);
    })("blur", function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_4_Template_kendo_numerictextbox_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r100);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const dataItem_r87 = ctx_r102.dataItem;
      const rowIndex_r88 = ctx_r102.rowIndex;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      ctx_r101.bmlfOnFormFieldChange();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r101.bmlfChangeQty(dataItem_r87, rowIndex_r88));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r88 = ctx_r103.rowIndex;
    const dataItem_r87 = ctx_r103.dataItem;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("name", "txtCost" + rowIndex_r88)("ngModel", dataItem_r87.Price)("id", "txtPrice" + rowIndex_r88)("min", 0)("autoCorrect", true)("decimals", ctx_r90.miCostPrecision)("format", ctx_r90.miCostPrecisionFormat)("disabled", ctx_r90.mbIsDisabled || dataItem_r87.LineType == "New Sample");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r106);
      const dataItem_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().dataItem;
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](dataItem_r87.Amount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const rowIndex_r88 = ctx_r107.rowIndex;
    const dataItem_r87 = ctx_r107.dataItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "txtAmount", rowIndex_r88, "")("name", "txtAmount", rowIndex_r88, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", dataItem_r87.Amount);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_3_Template, 2, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_4_Template, 2, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_div_5_Template, 2, 3, "div", 56);
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r19.Field.startsWith("User") || item_r19.Field.includes("CUSTOM") ? item_r19.Title : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, "SALESOPPORTUNITYTRAN." + item_r19.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Field == "EstimatedQty");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Field == "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Field == "Amount");
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, CrmProductRangeComponent_kendo_grid_column_33_5_ng_template_0_Template, 6, 6, "ng-template", 22);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-common-grid-customization", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("msChangeField", function CrmProductRangeComponent_kendo_grid_column_33_ng_template_6_Template_app_common_grid_customization_msChangeField_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r113);
      const rowIndex_r110 = restoredCtx.rowIndex;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r112.bmlfFieldEvent($event, rowIndex_r110));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r109 = ctx.dataItem;
    const rowIndex_r110 = ctx.rowIndex;
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("msGridColumn", ctx_r24.marrLineItemCol)("msGridBinding", ctx_r24.marrItemWiseGridData)("dataItem", dataItem_r109)("item", item_r19)("rowIndex", rowIndex_r110)("mFormMode", ctx_r24.msMode);
  }
}
function CrmProductRangeComponent_kendo_grid_column_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "kendo-grid-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, CrmProductRangeComponent_kendo_grid_column_33_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CrmProductRangeComponent_kendo_grid_column_33_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, CrmProductRangeComponent_kendo_grid_column_33_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, CrmProductRangeComponent_kendo_grid_column_33_5_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, CrmProductRangeComponent_kendo_grid_column_33_ng_template_6_Template, 2, 6, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("field", item_r19.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", item_r19.Field.startsWith("User") || item_r19.Field.includes("CUSTOM") ? item_r19.Title : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 7, "SALESOPPORTUNITYTRAN." + item_r19.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", item_r19.Field == "ItemKey" ? "180" : "120");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Type == "combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Type == "lookup");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r19.Type == "number");
  }
}
function CrmProductRangeComponent_app_custom_lookup_modal_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-custom-lookup-modal", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("saveLookupField", function CrmProductRangeComponent_app_custom_lookup_modal_37_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r116);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r115.bmlfSaveLookupField($event));
    })("closeLookup", function CrmProductRangeComponent_app_custom_lookup_modal_37_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r116);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r117.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("keyData", ctx_r4.mobjLookupKeyData);
  }
}
function CrmProductRangeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "app-sales-template-modal", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("bmgfCloseSalesTemplateModal", function CrmProductRangeComponent_div_38_Template_app_sales_template_modal_bmgfCloseSalesTemplateModal_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r119);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r118.bmlfCloseSalesTemplate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function CrmProductRangeComponent_kendo_dialog_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "kendo-dialog", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("close", function CrmProductRangeComponent_kendo_dialog_39_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r121);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r120.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_39_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r121);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r122.bmlfDeleteLineItemAction("Delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_39_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r121);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r123.bmlfDeleteLineItemAction("Cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 6, "COMMON.MSG.DELETECONFIRMATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 8, "COMMON.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 10, "COMMON.CANCEL"));
  }
}
function CrmProductRangeComponent_kendo_dialog_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "kendo-dialog", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("close", function CrmProductRangeComponent_kendo_dialog_40_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r125);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r124.bmlfApprovalLineItemAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_40_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r125);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r126.bmlfApprovalLineItemAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_40_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r125);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r127.bmlfApprovalLineItemAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 6, "COMMON.MSG.CONTINUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 8, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 10, "COMMON.NO"));
  }
}
function CrmProductRangeComponent_kendo_dialog_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "kendo-dialog", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("close", function CrmProductRangeComponent_kendo_dialog_41_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r129);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r128.bmlfDescriptionModal("close", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "form", 75)(7, "div", 76)(8, "div", 4)(9, "textarea", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_41_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r129);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r130.CommentDescription = $event);
    })("change", function CrmProductRangeComponent_kendo_dialog_41_Template_textarea_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r129);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r131.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "kendo-dialog-actions")(12, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_41_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r129);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r132.bmlfDescriptionModal("close", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r8.msCommentField == "smSampleDescription" ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 5, "SAMPLETRANS.SAMPLEDESCRIPTION") : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 7, "SAMPLETRANS.SPECIALINSTRUCTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r8.CommentDescription)("maxlength", ctx_r8.msCommentMaxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 9, "COMMON.CLOSE"), " ");
  }
}
function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_8_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r141);
      const colIndex_r139 = restoredCtx.rowIndex;
      const rowIndex_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().rowIndex;
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r140.marrSampleTemplateMData[rowIndex_r135].SMTemplateMasterDetails[colIndex_r139].TargetValue = $event);
    })("change", function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_8_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r141);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r143.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colIndex_r139 = ctx.rowIndex;
    const rowIndex_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().rowIndex;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("id", "txtTargetValue", rowIndex_r135, "", colIndex_r139, "")("name", "txtTargetValue", rowIndex_r135, "", colIndex_r139, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r136.marrSampleTemplateMData[rowIndex_r135].SMTemplateMasterDetails[colIndex_r139].TargetValue)("disabled", ctx_r136.mbIsDisabled || ctx_r136.mobjSampleInfoModel.smStatus != "NEW");
  }
}
function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40)(1, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_11_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r148);
      const colIndex_r146 = restoredCtx.rowIndex;
      const rowIndex_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().rowIndex;
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r147.marrSampleTemplateMData[rowIndex_r135].SMTemplateMasterDetails[colIndex_r146].Description = $event);
    })("change", function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_11_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r148);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r150.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colIndex_r146 = ctx.rowIndex;
    const rowIndex_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().rowIndex;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("id", "txtDescription", rowIndex_r135, "", colIndex_r146, "")("name", "txtDescription", rowIndex_r135, "", colIndex_r146, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r137.marrSampleTemplateMData[rowIndex_r135].SMTemplateMasterDetails[colIndex_r146].Description)("disabled", ctx_r137.mbIsDisabled || ctx_r137.mobjSampleInfoModel.smStatus != "NEW");
  }
}
function CrmProductRangeComponent_kendo_dialog_42_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 113)(1, "kendo-grid", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "kendo-grid-column", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "kendo-grid-column", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "kendo-grid-column", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_8_Template, 2, 6, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "kendo-grid-column", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, CrmProductRangeComponent_kendo_dialog_42_ng_template_127_ng_template_11_Template, 2, 6, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dataItem_r134 = ctx.$implicit;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("kendoGridGroupBinding", dataItem_r134.SMTemplateMasterDetails)("pageable", true)("sortable", ctx_r133.sortable)("filterable", false)("resizable", true)("reorderable", true)("pageSize", 50)("rowHeight", 36)("selectable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 17, "SALESOPPORTUNITYTRAN.PROPERTYID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 19, "SALESOPPORTUNITYTRAN.PROPERTYDESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 21, "SALESOPPORTUNITYTRAN.TARGETVALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 23, "SALESOPPORTUNITYTRAN.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 120);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function CrmProductRangeComponent_kendo_dialog_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "kendo-dialog", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("close", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r152.bmlfCloseSampleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 80)(7, "aside", 81)(8, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r154.bmlfonSwitchInnerTab("SAMPLE"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r155.bmlfonSwitchInnerTab("SPECIFICATION"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "section", 84)(17, "div", 3)(18, "div", 85)(19, "div", 76)(20, "div", 86)(21, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 88)(27, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r156.mobjSampleInfoModel.smSampleDescription = $event);
    })("change", function CrmProductRangeComponent_kendo_dialog_42_Template_input_change_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r157.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_span_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r158.mbIsDisabled == true || ctx_r158.mobjSampleInfoModel.smStatus != "NEW" ? false : ctx_r158.bmlfDescriptionModal("open", "smSampleDescription"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 85)(31, "div", 76)(32, "div", 92)(33, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 88)(37, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r159.mobjSampleInfoModel.smSpecialInstruction = $event);
    })("change", function CrmProductRangeComponent_kendo_dialog_42_Template_input_change_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r160.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_span_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r161.mbIsDisabled == true || ctx_r161.mobjSampleInfoModel.smStatus != "NEW" ? false : ctx_r161.bmlfDescriptionModal("open", "smSpecialInstruction"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 85)(41, "div", 76)(42, "div", 92)(43, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 88)(47, "kendo-numerictextbox", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r162.mobjSampleInfoModel.smAnticipatedSalesVolume = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r163.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](48, "div", 85)(49, "div", 76)(50, "div", 92)(51, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "div", 88)(55, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r164.mobjSampleInfoModel.smSampleSizeUOM = $event);
    })("blur", function CrmProductRangeComponent_kendo_dialog_42_Template_input_blur_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r165.bmlfOpenLookupModal("smSampleSizeUOM", "Sampling Transaction", "UOMKey", "blur", ctx_r165.mobjSampleInfoModel.smSampleSizeUOM, "custom", "txtUOM", "SALESOPPORTUNITYTRAN.UOM"));
    })("focus", function CrmProductRangeComponent_kendo_dialog_42_Template_input_focus_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r166.bmlfOnGlobalFocus("smSampleSizeUOM", ctx_r166.mobjSampleInfoModel.smSampleSizeUOM));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_span_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r167.mbIsDisabled || ctx_r167.mobjSampleInfoModel.smStatus != "NEW" ? false : ctx_r167.bmlfOpenLookupModal("smSampleSizeUOM", "Sampling Transaction", "UOMKey", "click", ctx_r167.mobjSampleInfoModel.smSampleSizeUOM, "custom", "txtUOM", "SALESOPPORTUNITYTRAN.UOM"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](57, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 85)(59, "div", 76)(60, "div", 92)(61, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 88)(67, "kendo-numerictextbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r168.mobjSampleInfoModel.smTargetPrice = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r169.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](68, "div", 85)(69, "div", 76)(70, "div", 92)(71, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "div", 88)(77, "kendo-numerictextbox", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r170.mobjSampleInfoModel.smCurrentPrice = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r171.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "div", 85)(79, "div", 76)(80, "div", 92)(81, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "div", 88)(85, "kendo-numerictextbox", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r172.mobjSampleInfoModel.smSampleSize = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r173.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](86, "div", 85)(87, "div", 76)(88, "div", 92)(89, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](92, "div", 88)(93, "kendo-numerictextbox", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_93_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r174.mobjSampleInfoModel.smTimeRequired = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r175.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](94, "div", 85)(95, "div", 76)(96, "div", 92)(97, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](100, "div", 88)(101, "kendo-numerictextbox", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r176.mobjSampleInfoModel.smSamplePices = $event);
    })("valueChange", function CrmProductRangeComponent_kendo_dialog_42_Template_kendo_numerictextbox_valueChange_101_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r177.bmlfOnFormFieldChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](102, "section", 103)(103, "div", 3)(104, "div", 85)(105, "div", 76)(106, "div", 86)(107, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](110, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](111, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](112, "div", 88)(113, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_kendo_dialog_42_Template_input_ngModelChange_113_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r178.mobjAdditionalInfoModel.SpecTemplate = $event);
    })("blur", function CrmProductRangeComponent_kendo_dialog_42_Template_input_blur_113_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r179.bmlfOpenLookupModal("SpecTemplate", "Sampling Transaction", "TemplateMaster", "blur", ctx_r179.mobjAdditionalInfoModel.SpecTemplate, "custom", "txtSpecTemplate", "SALESOPPORTUNITYTRAN.SPECIFICATIONTEMPLATE"));
    })("focus", function CrmProductRangeComponent_kendo_dialog_42_Template_input_focus_113_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r180.bmlfOnGlobalFocus("SpecTemplate", ctx_r180.mobjAdditionalInfoModel.SpecTemplate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_span_click_114_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r181.mbIsDisabled || ctx_r181.mobjSampleInfoModel.smStatus != "NEW" ? false : ctx_r181.bmlfOpenLookupModal("SpecTemplate", "Sampling Transaction", "TemplateMaster", "click", ctx_r181.mobjAdditionalInfoModel.SpecTemplate, "custom", "txtSpecTemplate", "SALESOPPORTUNITYTRAN.SPECIFICATIONTEMPLATE"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](115, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](116, "div", 3)(117, "div", 4)(118, "div", 76)(119, "div", 106)(120, "kendo-grid", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](121, "kendo-grid-messages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](122, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](123, "kendo-grid-column", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](125, "kendo-grid-column", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](126, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](127, CrmProductRangeComponent_kendo_dialog_42_ng_template_127_Template, 12, 25, "ng-template", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](128, "kendo-dialog-actions")(129, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_button_click_129_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r182.mbIsDisabled || ctx_r182.mobjSampleInfoModel.smStatus != "NEW" ? false : ctx_r182.bmlfUpdateNewSampleData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_kendo_dialog_42_Template_button_click_132_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r183.bmlfCloseSampleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("minWidth", 900)("width", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 97, "SALESOPPORTUNITYTRAN.NEWSAMPLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](133, _c2, ctx_r9.msInnertab == "SAMPLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 99, "SALESOPPORTUNITYTRAN.SAMPLEINFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](135, _c2, ctx_r9.msInnertab == "SPECIFICATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 101, "SALESOPPORTUNITYTRAN.SPECIFICATIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx_r9.msInnertab != "SAMPLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](23, 103, "SALESOPPORTUNITYTRAN.SAMPLEDESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r9.mobjSampleInfoModel.smSampleDescription)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 105, "SALESOPPORTUNITYTRAN.SPECIALINSTRUCTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r9.mobjSampleInfoModel.smSpecialInstruction)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](45, 107, "SALESOPPORTUNITYTRAN.ANTICIPATEDSALESVOLUME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smAnticipatedSalesVolume)("min", 0)("max", 9999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", "0")("format", "n0")("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](53, 109, "SALESOPPORTUNITYTRAN.UOM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r9.mobjSampleInfoModel.smSampleSizeUOM)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](63, 111, "SALESOPPORTUNITYTRAN.TARGETPRICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("(", ctx_r9.msHomeCurrency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smTargetPrice)("min", 0)("max", 999999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", ctx_r9.miCostPrecision)("format", ctx_r9.miCostPrecisionFormat)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](73, 113, "SALESOPPORTUNITYTRAN.CURRENTPRICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("(", ctx_r9.msHomeCurrency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smCurrentPrice)("min", 0)("max", 999999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", ctx_r9.miCostPrecision)("format", ctx_r9.miCostPrecisionFormat)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](83, 115, "SALESOPPORTUNITYTRAN.SAMPLESIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smSampleSize)("min", 0)("max", 999999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", ctx_r9.miQtyPrecision)("format", ctx_r9.miQtyPrecisionFormat)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](91, 117, "SALESOPPORTUNITYTRAN.ESTTIMEREQ"), " (in Hrs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smTimeRequired)("min", 0)("max", 999999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", "2")("format", "n2")("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](99, 119, "SALESOPPORTUNITYTRAN.SAMPLEPIECES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r9.mobjSampleInfoModel.smSamplePices)("min", 0)("max", 999999)("autoCorrect", ctx_r9.autoCorrect)("decimals", "0")("format", "n0")("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx_r9.msInnertab != "SPECIFICATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](109, 121, "SALESOPPORTUNITYTRAN.SPECIFICATIONTEMPLATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r9.mobjAdditionalInfoModel.SpecTemplate)("disabled", ctx_r9.mbIsDisabled || ctx_r9.mobjSampleInfoModel.smStatus != "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("kendoGridGroupBinding", ctx_r9.marrSampleTemplateMData)("pageable", true)("sortable", false)("resizable", true)("reorderable", true)("groupable", false)("pageSize", 50)("rowHeight", 36)("selectable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](122, 123, "CommonNoRecordsAvailable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](124, 125, "SALESOPPORTUNITYTRAN.GROUPID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](126, 127, "SALESOPPORTUNITYTRAN.GROUPDESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](131, 129, "COMMON.OK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](134, 131, "COMMON.CANCEL"));
  }
}
class CrmProductRangeComponent {
  constructor(router, toastMessageService, utilService, userFieldService, formService, lookupService, dateFormatService, sampleservice, lsService) {
    this.router = router;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.formService = formService;
    this.lookupService = lookupService;
    this.dateFormatService = dateFormatService;
    this.sampleservice = sampleservice;
    this.lsService = lsService;
    this.msTrnKey = "";
    this.mbIsDisabled = false;
    this.bmgfShowHeaderEvnt = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
    this.mbIsLoading = false;
    this.msMode = "I";
    this.mobjUserData = {};
    this.msCustomDateFormat = "";
    this.msScreenName = "Product Range";
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.miAmountPrecision = 0;
    this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
    this.miCostPrecision = 6;
    this.miCostPrecisionFormat = 'n' + this.miCostPrecision;
    this.miPercentagePrecision = 2;
    this.miPercentagePrecisionnFormat = 'n' + this.miPercentagePrecision;
    this.mobjTotalValues = {
      TotalAmt: 0
    };
    this.marrLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_1__.SalesOpportunityTranConstant.garrPrdRangeLineItemCol.map(ele => Object.assign({}, ele));
    this.marrItemWiseGridData = [];
    this.mbIsChangeData = false;
    this.marrLineTypeList = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_1__.SalesOpportunityTranConstant.garrRangeTypeList;
    this.mobjSampleInfoModel = new src_app_main_srm_models_sample_transaction_model__WEBPACK_IMPORTED_MODULE_4__.SampleInfoModel();
    this.mobjAdditionalInfoModel = {
      SpecTemplate: "",
      SpecTemplateDesc: ""
    };
    this.marrSampleTemplateMData = [];
    this.msInnertab = "SAMPLE";
    this.mbNewSampleDialog = false;
    this.mobjTempLookupData = {};
    this.marrSampleInfoList = [];
    this.marrSpecificationList = [];
    this.marrSampleTemplateDataIdWise = [];
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    /**---END : Lookup realted field--- */
    /**-------Start--Comment Description -----*/
    this.mbCommentDialog = false;
    this.CommentDescription = "";
    this.msCommentMaxlength = 5000;
    this.msCommentField = "";
    this.msHomeCurrency = '';
    this.mbIsSalesTemplateModal = false;
    this.mbDeleteLineItemDialog = false;
    this.miSampleIndex = -1;
    this.mobjApprovalData = {};
    this.mbApprovalDialog = false;
    this.marrDefaultPriceList = [];
    this.mskeyValue = ""; //FieldExtender
  }

  ngOnInit() {
    this.utilService.bmgfAddCustomLineToModel(this.marrLineItemCol, this.msScreenName, 'DTTable').then(res => {});
    this.mobjUserData = this.lsService.getUserSession();
    let parrDefaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    parrDefaultFormat.forEach(ele => {
      if (ele.Default_Key == "CURR_DECIMAL") {
        this.miAmountPrecision = Number(ele.Default_Value);
        this.miAmountPrecisionFormat = 'n' + this.miAmountPrecision;
      }
    });
    let parrRoundingDefaults = JSON.parse(localStorage.getItem("RoundingDefaults"));
    this.miQtyPrecision = Number(parrRoundingDefaults[0].Default_Value);
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.bmlfGetDefaultPriceList();
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mskeyValue = this.msTrnKey;
    this.SetGridColumns('DTTable', this.marrLineItemCol);
    this.bmlfGetProductRangeData();
  }
  bmlfOnFormFieldChange() {
    this.mbIsChangeData = true;
  }
  bmlfGetProductRangeData() {
    this.marrItemWiseGridData = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "ProductRange",
      "OpportunityNo": this.msTrnKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.ProductRange.length > 0) {
        if (res.GetSamplingInfoData.length > 0) {
          this.marrSampleInfoList = res.GetSamplingInfoData;
        }
        let parrGridData = res.ProductRange;
        parrGridData.forEach(ele => {
          ele.EstimatedQty = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(ele.EstimatedQty) ? 0 : Number(ele.EstimatedQty);
          ele.Price = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(ele.Price) ? 0 : Number(ele.Price);
          ele.Amount = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(ele.Amount) ? this.utilService.bmgfSetPrecision(0, this.miAmountPrecision) : this.utilService.bmgfSetPrecision(Number(ele.Amount), this.miAmountPrecision);
          ele.mode = "U";
          let parrFilterStatus = this.marrSampleInfoList.filter(x => x.SMRequestNo == ele.RowId);
          if (parrFilterStatus != undefined && parrFilterStatus.length > 0) {
            ele.Status = parrFilterStatus[0].smStatus;
          }
        });
        this.marrItemWiseGridData = parrGridData;
        let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
        this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
        this.msMode = "U";
        if (res.GetSamplingTemplateData.length > 0) {
          let parrSampTempData = res.GetSamplingTemplateData;
          parrSampTempData.forEach(element => {
            element.TargetValue = element.SmPropertyValue || "";
            element.Description = element.SmDescription || "";
            delete element.SmPropertyValue;
            delete element.SmDescription;
          });
          this.marrSpecificationList = parrSampTempData;
        }
      } else {
        this.msMode = "I";
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  //Open LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle, pnumRowIdx = null) {
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psTitle != "") {
      this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    } else {
      this.mobjLookupKeyData.title = psTitle;
    }
    if (psEvent == 'blur' && (psValue == undefined || psValue == '' || this.msLookupField == psValue)) {
      this.msLookupField = '';
      if (psValue == undefined || psValue == '') {
        if (pnumRowIdx != null) {
          this.marrItemWiseGridData[pnumRowIdx][psField] = "";
          this.bmlfClearLookupField(psField, pnumRowIdx);
        } else {
          if (psField == "smSampleSizeUOM") {
            this.mobjSampleInfoModel[psField] = "";
          } else {
            this.mobjAdditionalInfoModel[psField] = "";
            this.bmlfClearLookupField(psField, -1);
          }
        }
      }
      return false;
    }
    let psLookup = "";
    psLookup = psLookUpKey;
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookup,
      Filter1: "",
      Filter2: "",
      Filter3: "",
      Filter4: "",
      Filter5: ""
    };
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.lookupService.getLookup(pobjReqData).subscribe(res => {
      this.utilService.bmgfOnKeyInputEnable();
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
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
                ele[key] = '';
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
          let psInputKey = this.bmlfGetInputColumn(psField, pnumRowIdx);
          let parrFilterData = [];
          parrFilterData = this.marrLookupGridData.filter(obj => {
            let tempValue = obj[psInputKey] == null || obj[psInputKey] == '' ? '' : typeof obj[psInputKey] == 'number' ? obj[psInputKey] : obj[psInputKey].toUpperCase();
            if (tempValue == psValue.toUpperCase()) {
              return obj;
            }
          });
          if (parrFilterData.length == 1) {
            this.mobjLookupKeyData.value = parrFilterData[0];
            this.mobjLookupKeyData.valueKey = parrFilterData[0][psInputKey];
            this.bmlfSaveLookupField(this.mobjLookupKeyData);
            this.mbIsLookupModal = false;
          } else {
            this.mbIsLookupModal = true;
          }
        } else if (psEvent == 'click') {
          this.mbIsLookupModal = true;
        }
      } else {
        this.mbIsLookupModal = false;
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  //Close LOOKUP MODAL
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
    if (pobjData.eleId != null) {
      let psInputKey = this.bmlfGetInputColumn(pobjData.field, this.mnumLineItemRowIndex);
      let parrFilterData = [];
      if (psInputKey) {
        parrFilterData = pobjData.gridData.filter(obj => obj[psInputKey].toUpperCase() == pobjData.searchValue.toUpperCase());
      }
      if (parrFilterData.length == 0) {
        if (document.getElementById(pobjData.eleId) != undefined) {
          document.getElementById(pobjData.eleId).value = '';
        }
        if (this.mnumLineItemRowIndex != null && this.mnumLineItemRowIndex >= 0) {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex][pobjData.field] = "";
          this.bmlfClearLookupField(pobjData.field, this.mnumLineItemRowIndex);
          setTimeout(function () {
            document.getElementById(pobjData.eleId).focus();
          }, 10);
          return;
        } else {
          if (this.mobjAdditionalInfoModel[pobjData.field] != undefined && pobjData.field == "SpecTemplate") {
            this.mobjAdditionalInfoModel[pobjData.field] = '';
            this.bmlfClearLookupField(pobjData.field, -1);
            setTimeout(function () {
              document.getElementById(pobjData.eleId).focus();
            }, 10);
          } else {
            this.mobjSampleInfoModel[pobjData.field] = '';
            setTimeout(function () {
              document.getElementById(pobjData.eleId).focus();
            }, 10);
          }
        }
      }
    }
    let elementExists = document.getElementById(pobjData.eleId);
    if (elementExists) {
      document.getElementById(pobjData.eleId).focus();
    }
  }
  bmlfSaveLookupField(pobjData) {
    this.mbIsLookupModal = false;
    this.mbIsChangeData = true;
    this.mbIsLoading = false;
    this.bmlfonTransferValues(pobjData.field, pobjData.value);
  }
  // Transfer Lookup Values
  bmlfonTransferValues(psFName, pobjValue) {
    switch (psFName) {
      case 'ItemKey':
        {
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].ItemKey = pobjValue['Itemkey'];
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].Description = pobjValue['Description'];
          this.marrItemWiseGridData[this.mnumLineItemRowIndex].Unit = pobjValue['SalesUOM'];
          let parrFilterPrice = this.marrDefaultPriceList.filter(x => x.itemkey == pobjValue['Itemkey']);
          if (parrFilterPrice.length > 0) {
            this.marrItemWiseGridData[this.mnumLineItemRowIndex].Price = parrFilterPrice[0].ListPrice;
          }
          break;
        }
      case 'smSampleSizeUOM':
        {
          this.mobjSampleInfoModel[psFName] = pobjValue['UomKey'];
        }
      case 'SpecTemplate':
        {
          if (this.mobjAdditionalInfoModel[psFName] != "" && this.mobjAdditionalInfoModel[psFName] != pobjValue["SMTEMPLATEID"] && this.miSampleIndex != -1) {
            this.mobjTempLookupData = pobjValue;
            this.bmlfDeleteExistingRecord(this.marrItemWiseGridData[this.miSampleIndex].RowId);
          } else {
            this.mobjAdditionalInfoModel[psFName] = pobjValue["SMTEMPLATEID"];
            this.mobjAdditionalInfoModel.SpecTemplateDesc = pobjValue["SMTemplateDesc"];
            if (psFName == "SpecTemplate") {
              this.bmlfGetSpecificationTemplateData('');
            }
          }
        }
      default:
        {
          break;
        }
    }
  }
  // get Lookup Value Column
  bmlfGetInputColumn(psField, index) {
    if (psField == 'ItemKey') {
      return 'Itemkey';
    } else if (psField == 'smSampleSizeUOM') {
      return 'UomKey';
    } else if (psField == 'SpecTemplate') {
      return 'SMTEMPLATEID';
    }
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
  bmlfClearLookupField(psField, index) {
    if (psField == "ItemKey") {
      this.marrItemWiseGridData[index].ItemKey = "";
      this.marrItemWiseGridData[index].Description = "";
      this.marrItemWiseGridData[index].Unit = "";
    } else {
      this.mobjAdditionalInfoModel.SpecTemplateDesc = "";
      if (psField == 'SpecTemplate') {
        this.marrSampleTemplateMData = [];
      }
    }
  }
  bmlfChangeLineType(index, data) {
    this.marrItemWiseGridData[index].ItemKey = "";
    this.marrItemWiseGridData[index].Description = "";
    this.marrItemWiseGridData[index].EstimatedQty = 0;
    this.marrItemWiseGridData[index].Price = 0;
    this.marrItemWiseGridData[index].Amount = 0;
    this.marrItemWiseGridData[index].Unit = "";
    let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
    this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
  }
  bmlfValidLineItem() {
    let psErrMsg = "";
    for (let i = 0; i < this.marrItemWiseGridData.length; i++) {
      if (this.marrItemWiseGridData[i].LineType == "Inventory" && src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].ItemKey)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ITEMKEYREQ") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (this.marrItemWiseGridData[i].LineType == "Non-Inventory" && src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].Description)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.DESCRIPTION") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.marrItemWiseGridData[i].EstimatedQty)) {
        psErrMsg = this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.MSG.ESTQTY") + " " + this.utilService.bmgfonTranslate("SALESOPPORTUNITYTRAN.ATROW") + (i + 1);
        break;
      } else {
        psErrMsg = "";
      }
    }
    if (psErrMsg != "") {
      this.toastMessageService.notifyError(psErrMsg);
      return false;
    } else {
      return true;
    }
  }
  bmlfAddLineItem() {
    if (this.bmlfValidLineItem()) {
      let pobjData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.ProductRangeModal();
      let maxLineNo = 0;
      if (this.marrItemWiseGridData.length == 0) {
        maxLineNo = 1;
      } else {
        const a = this.marrItemWiseGridData.reduce(function (prev, current) {
          return prev.RowId > current.RowId ? prev : current;
        });
        maxLineNo = a.RowId + 1;
      }
      pobjData.OppNo = this.msTrnKey;
      pobjData.RowId = maxLineNo;
      pobjData.Amount = this.utilService.bmgfSetPrecision(0, this.miAmountPrecision);
      this.marrItemWiseGridData.push(Object.assign({}, pobjData));
      this.mbIsChangeData = true;
    }
  }
  bmlfChangeQty(data, index) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(data.EstimatedQty)) {
      data.EstimatedQty = 0;
    }
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(data.Price)) {
      data.Price = 0;
    }
    let pnumAmount = data.EstimatedQty * data.Price;
    this.marrItemWiseGridData[index].Amount = this.utilService.bmgfSetPrecision(pnumAmount, this.miAmountPrecision);
    let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
    this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
  }
  bmlfOpenSalesTemplateModal() {
    if (this.bmlfValidLineItem()) {
      this.mbIsSalesTemplateModal = true;
    }
  }
  bmlfCloseSalesTemplate(evnt) {
    let parrSalesTempData = evnt.data;
    if (evnt.evt == "Ok") {
      let parrPerantRowTemp = [];
      let parrTemLineData = [];
      parrSalesTempData.forEach(obj => {
        if (obj.Sel == true) {
          parrPerantRowTemp.push(obj);
        }
        obj.lineItems.forEach(ele => {
          if (ele.Cell == true) {
            parrTemLineData.push(ele);
          }
        });
      });
      if (parrPerantRowTemp.length == 0) {
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('NOLINESELECTEDMSG'));
        return false;
      }
      if (parrTemLineData.length) {
        let pbIsLineBlank = false;
        pbIsLineBlank = this.bmlfChkBlankOrdTempLineType(parrTemLineData);
        if (pbIsLineBlank) {
          this.mbIsLoading = false;
          return false;
        }
      }
      //let marrTempInsertLineData = [];
      let piLastIndex;
      if (this.marrItemWiseGridData.length > 0) {
        piLastIndex = this.marrItemWiseGridData.reduce((acc, obj) => acc = acc > obj.RowId ? acc : obj.RowId, 0);
      } else {
        piLastIndex = this.marrItemWiseGridData.length;
      }
      parrSalesTempData.forEach(obj => {
        if (obj.Sel == true) {
          parrPerantRowTemp.push(obj);
        }
        obj.lineItems.forEach(ele => {
          if (ele.Cell == true) {
            let pobjDataCopy = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.ProductRangeModal();
            pobjDataCopy.OppNo = this.msTrnKey;
            pobjDataCopy.ItemKey = ele.ItemKey;
            pobjDataCopy.Description = ele.ItmDesc;
            pobjDataCopy.EstimatedQty = ele.OrdrQty;
            pobjDataCopy.Unit = ele.UOM;
            pobjDataCopy.RowId = Number(piLastIndex) + 1;
            this.marrItemWiseGridData.push(pobjDataCopy);
            ++piLastIndex;
          }
        });
      });
      this.mbIsChangeData = true;
    }
    this.mbIsSalesTemplateModal = false;
  }
  bmlfChkBlankOrdTempLineType(parrTempData) {
    let isBlankLine = false;
    parrTempData.some((pobjEle, piRowIdx) => {
      let psMsg = this.utilService.bmgfonTranslate('CHKITEMLOCAATIONMSG');
      if (pobjEle.ItemKey == '') {
        this.toastMessageService.notifyWarning(psMsg);
        isBlankLine = true;
        return false;
      }
      if (pobjEle.Location == '') {
        this.toastMessageService.notifyWarning(psMsg);
        isBlankLine = true;
        return false;
      }
    });
    return isBlankLine;
  }
  bmlfSubmitForm(psType) {
    // if (!this.utilService.mbWrite) {
    //   this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
    //   return;
    // };
    if (this.marrItemWiseGridData.length == 0) {
      this.msMode = "I";
    }
    if (this.mbIsChangeData == false && this.FieldExtender.mbChange == false && this.msMode == 'U') {
      return;
    }
    if (!this.bmlfValidLineItem()) {
      return;
    }
    if (this.customGridCtrl != undefined) {
      if (!this.customGridCtrl.bmlfGlobalIsMandatory()) {
        return;
      }
    }
    //Validate Field Extender -- Start
    let resultString = this.FieldExtender.bmgfValidationCheck();
    if (resultString.value == false) {
      this.toastMessageService.notifyError(resultString.msg);
      return;
    }
    this.bmlfSavePrdRangeData(psType);
  }
  bmlfSavePrdRangeData(psType) {
    this.mbIsLoading = true;
    let parrHeaderData = [];
    let parrSampleInfoList = [];
    this.marrItemWiseGridData.forEach(data => {
      let element = Object.assign({}, data);
      element.OppNo = this.msTrnKey;
      element.Amount = this.utilService.bmgfSetPrecision(element.Amount, this.miAmountPrecision);
      element.Price = this.utilService.bmgfSetPrecision(element.Price, this.miCostPrecision);
      element.EstimatedQty = this.utilService.bmgfSetPrecision(element.EstimatedQty, this.miQtyPrecision);
      delete element.mode;
      delete element.Status;
      parrHeaderData.push(element);
    });
    this.marrSampleInfoList.forEach(element => {
      let pobjData = {};
      pobjData = element;
      pobjData.smAnticipatedSalesVolume = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smAnticipatedSalesVolume) ? 0 : pobjData.smAnticipatedSalesVolume;
      pobjData.smCurrentPrice = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smCurrentPrice) ? this.utilService.bmgfSetPrecision(0, this.miCostPrecision) : this.utilService.bmgfSetPrecision(pobjData.smCurrentPrice, this.miCostPrecision);
      pobjData.smSampleSize = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smSampleSize) ? this.utilService.bmgfSetPrecision(0, this.miQtyPrecision) : this.utilService.bmgfSetPrecision(pobjData.smSampleSize, this.miQtyPrecision);
      pobjData.smTargetPrice = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smTargetPrice) ? this.utilService.bmgfSetPrecision(0, this.miCostPrecision) : this.utilService.bmgfSetPrecision(pobjData.smTargetPrice, this.miCostPrecision);
      pobjData.smTimeRequired = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smTimeRequired) ? this.utilService.bmgfSetPrecision(0, 2) : this.utilService.bmgfSetPrecision(pobjData.smTimeRequired, 2);
      pobjData.smSamplePices = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smSamplePices) ? 0 : pobjData.smSamplePices;
      parrSampleInfoList.push(pobjData);
    });
    let pobjJData = {
      ParameterData: [{
        "Mode": this.msMode == "I" ? "Insert" : "Update",
        "TransactionTabName": "ProductRange"
      }],
      ProductRange: parrHeaderData,
      GetSamplingInfoData: parrSampleInfoList,
      GetSamplingTemplateData: this.marrSpecificationList,
      Response: [{
        "ResponseText": "",
        "ErrorCode": ""
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    this.formService.bmlfSaveSalesOpportunityTranData(pobjJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res.Response[0].ErrorCode == "") {
        this.mbIsChangeData = false;
        this.FieldExtender.mbChange = false;
        if (res.Response[0].ResponseText.includes("Unable")) {
          this.toastMessageService.notifyError(res.Response[0].ResponseText);
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
          let pobj = {
            type: "CalcPotentialAmt"
          };
          this.bmgfShowHeaderEvnt.emit(pobj);
          // FieldExtender -- start update
          let screenKeyValue = this.msScreenName + " — " + this.mskeyValue;
          let jsonData = this.FieldExtender.bmlfSaveData(screenKeyValue);
          if (jsonData.length > 0) {
            this.FieldExtender.bmlfCallApi(jsonData).then(res => {
              if (res != null) {}
            });
          }
          ;
          // FieldExtender -- End update
          if (psType == "New") {
            let pobj = {
              type: "New"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "Close") {
            this.bmlfCloseForm();
          } else if (psType == "Search") {
            let pobj = {
              type: "Search"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else if (psType == "TabChange") {
            let pobj = {
              type: "TabChange"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            if (this.msMode == "I") {
              this.msMode = "U";
            }
            this.bmlfGetProductRangeData();
          }
        }
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
      }
      console.log(res);
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfCloseForm() {
    this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
  }
  /** ---Delete event of Item Row Data--- */
  bmlfDeleteItemData(pnumIndex) {
    this.mnumDeleteLineIndex = pnumIndex;
    this.mbDeleteLineItemDialog = true;
  }
  /**---Confirm box event of delete Item Row ------ */
  bmlfDeleteLineItemAction(psAction) {
    if (psAction == 'Cancel') {
      this.mbDeleteLineItemDialog = false;
    } else if (psAction == 'Delete') {
      if (this.marrItemWiseGridData[this.mnumDeleteLineIndex].mode == "I") {
        let parrFilterSpecData = this.marrSpecificationList.filter(x => x.SMRequestNo != this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId);
        if (parrFilterSpecData.length > 0) {
          this.marrSpecificationList = parrFilterSpecData;
        } else {
          this.marrSpecificationList = [];
        }
        let parrFilterSpecDetailData = this.marrSampleTemplateDataIdWise.filter(x => x.RowId != this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId);
        if (parrFilterSpecDetailData.length > 0) {
          this.marrSampleTemplateDataIdWise = parrFilterSpecDetailData;
        } else {
          this.marrSampleTemplateDataIdWise = [];
        }
        let parrArrData = Object.assign([], this.marrItemWiseGridData);
        parrArrData.splice(this.mnumDeleteLineIndex, 1);
        this.marrItemWiseGridData = parrArrData;
        this.mbDeleteLineItemDialog = false;
        this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
        let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
        this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
        if (this.marrItemWiseGridData.length == 0) {
          this.msMode = "I";
        }
      } else {
        this.mbIsLoading = true;
        let pobjOData = {
          HeaderData: [],
          Response: []
        };
        pobjOData.HeaderData.push({
          "TransactionTabName": "ProductRange",
          "OpportunityNo": this.msTrnKey,
          "RowId": this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId
        });
        pobjOData.Response.push({
          "ResponseText": "",
          "ErrorCode": ""
        });
        let psJData = JSON.stringify(pobjOData);
        let psTempjData = JSON.stringify(psJData);
        let psJson = '{"JSON":' + psTempjData + '}';
        this.formService.bmlfDeleteSalesOpportunityRowData(psJson).subscribe(res => {
          this.mbIsLoading = false;
          if (res.Response[0].ErrorCode == "") {
            let parrFilterSpecData = this.marrSpecificationList.filter(x => x.SMRequestNo != this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId);
            if (parrFilterSpecData.length > 0) {
              this.marrSpecificationList = parrFilterSpecData;
            } else {
              this.marrSpecificationList = [];
            }
            let parrFilterSpecDetailData = this.marrSampleTemplateDataIdWise.filter(x => x.RowId != this.marrItemWiseGridData[this.mnumDeleteLineIndex].RowId);
            if (parrFilterSpecDetailData.length > 0) {
              this.marrSampleTemplateDataIdWise = parrFilterSpecDetailData;
            } else {
              this.marrSampleTemplateDataIdWise = [];
            }
            let parrArrData = Object.assign([], this.marrItemWiseGridData);
            parrArrData.splice(this.mnumDeleteLineIndex, 1);
            this.marrItemWiseGridData = parrArrData;
            this.mbDeleteLineItemDialog = false;
            this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.LINEDELETE"));
            let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
            this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
            if (this.marrItemWiseGridData.length == 0) {
              this.msMode = "I";
            }
            let pobj = {
              type: "CalcPotentialAmt"
            };
            this.bmgfShowHeaderEvnt.emit(pobj);
          } else {
            this.toastMessageService.notifyError(res.Response[0].ResponseText);
          }
        }).add(() => {
          this.mbIsLoading = false;
        });
      }
    }
  }
  bmlfOpenSampleModal(index, data) {
    if (this.bmlfValidLineItem()) {
      this.bmlfGetDefault();
      if (index == -1) {
        this.mobjSampleInfoModel = new src_app_main_srm_models_sample_transaction_model__WEBPACK_IMPORTED_MODULE_4__.SampleInfoModel();
        this.marrSampleTemplateMData = [];
        this.mobjAdditionalInfoModel = {
          SpecTemplate: "",
          SpecTemplateDesc: ""
        };
      } else {
        let parrSampData = this.marrSampleInfoList.filter(x => x.SMRequestNo == data.RowId);
        if (parrSampData.length > 0) {
          let pobj = Object.assign({}, parrSampData[0]);
          pobj.smCurrentPrice = Number(pobj.smCurrentPrice);
          pobj.smSampleSize = Number(pobj.smSampleSize);
          pobj.smTargetPrice = Number(pobj.smTargetPrice);
          pobj.smTimeRequired = Number(pobj.smTimeRequired);
          this.mobjSampleInfoModel = pobj;
        }
        if (this.marrSampleTemplateDataIdWise.length == 0) {
          let parrFilterSPecif = this.marrSpecificationList.filter(x => x.SMRequestNo == data.RowId);
          if (parrFilterSPecif != undefined && parrFilterSPecif.length > 0) {
            this.mobjAdditionalInfoModel.SpecTemplate = parrFilterSPecif[0].SmTemplateID;
            this.mobjAdditionalInfoModel.SpecTemplateDesc = parrFilterSPecif[0].SmTemplateID;
            this.bmlfGetSpecificationTemplateData(data.RowId);
          } else {
            this.marrSampleTemplateMData = [];
            this.mobjAdditionalInfoModel = {
              SpecTemplate: "",
              SpecTemplateDesc: ""
            };
          }
        } else {
          this.marrSampleTemplateMData = this.marrSampleTemplateDataIdWise.filter(x => x.RowId == data.RowId);
          if (this.marrSampleTemplateMData.length > 0) {
            this.mobjAdditionalInfoModel.SpecTemplate = this.marrSampleTemplateMData[0].SMTemplateMasterDetails[0].SmTemplateID;
            this.mobjAdditionalInfoModel.SpecTemplateDesc = this.marrSampleTemplateMData[0].SMTemplateMasterDetails[0].SmTemplateID;
          } else {
            let parrFilterSPecif = this.marrSpecificationList.filter(x => x.SMRequestNo == data.RowId);
            if (parrFilterSPecif != undefined && parrFilterSPecif.length > 0) {
              this.mobjAdditionalInfoModel.SpecTemplate = parrFilterSPecif[0].SmTemplateID;
              this.mobjAdditionalInfoModel.SpecTemplateDesc = parrFilterSPecif[0].SmTemplateID;
              this.bmlfGetSpecificationTemplateData(data.RowId);
            } else {
              this.marrSampleTemplateMData = [];
              this.mobjAdditionalInfoModel = {
                SpecTemplate: "",
                SpecTemplateDesc: ""
              };
            }
          }
        }
      }
      this.msInnertab = "SAMPLE";
      this.miSampleIndex = Number(index);
      this.mbNewSampleDialog = true;
    }
  }
  bmlfCloseSampleModal() {
    this.mbNewSampleDialog = false;
  }
  bmlfonSwitchInnerTab(type) {
    this.msInnertab = type;
  }
  bmlfDescriptionModal(event, field) {
    if (event == 'open') {
      this.msCommentField = field;
      if (field == "smSampleDescription") {
        this.msCommentMaxlength = 500;
      } else {
        this.msCommentMaxlength = 5000;
      }
      this.CommentDescription = this.mobjSampleInfoModel[field];
      this.mbCommentDialog = true;
    } else if (event == 'close') {
      this.mobjSampleInfoModel[this.msCommentField] = this.CommentDescription;
      this.CommentDescription = "";
      this.mbCommentDialog = false;
    }
  }
  bmlfGetDefault() {
    let pobjReqData = {
      ScreenName: 'PaymentEntryComponent',
      LookUpKey: 'HomeCurrencyDesc'
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        this.msHomeCurrency = res.LookupData[0].HomeCurrency;
      }
    });
  }
  bmlfGetDefaultPriceList() {
    let pobjReqData = {
      ScreenName: 'Sales Opportunity',
      LookUpKey: 'GetPriceFromPriceList'
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res != null && res.LookupData.length > 0) {
        this.marrDefaultPriceList = res.LookupData;
      } else {
        this.marrDefaultPriceList = [];
      }
    });
  }
  bmlfGetSpecificationTemplateData(rowId) {
    this.mbIsLoading = true;
    this.marrSampleTemplateMData = "";
    let pobjOData = {
      DistReport: [],
      Response: []
    };
    pobjOData.DistReport.push({
      "SMTemplateID": this.mobjAdditionalInfoModel.SpecTemplate
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.sampleservice.bmlfGetSamplingTemplateMasterData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null) {
        this.marrSampleTemplateMData = res;
        if (rowId != "" && this.marrSpecificationList.length > 0) {
          this.marrSampleTemplateMData.forEach(element => {
            element.SMTemplateMasterDetails.forEach(value => {
              let parrfilterData = this.marrSpecificationList.filter(x => {
                if (x.SMRequestNo == rowId && x.SmGroupId == element.SmGroupId && x.SmPropertyId == value.SmPropertyId) {
                  return true;
                }
              });
              if (parrfilterData.length > 0) {
                value.Description = parrfilterData[0].Description;
                value.TargetValue = parrfilterData[0].TargetValue;
                value.RecDate = parrfilterData[0].RecDate;
                value.RecUserId = parrfilterData[0].RecUserId;
                value.User6 = parrfilterData[0].User6;
              }
            });
          });
        }
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfDeleteExistingRecord(rowId) {
    let pobjReqData = {
      ScreenName: "Sales Opportunity",
      LookUpKey: "DeleteSavedCRMTemplateDetails",
      Filter1: this.msTrnKey,
      Filter2: rowId.toString()
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.Response[0].ErrorCode == "") {
        this.marrSampleTemplateMData = [];
        // this.marrSpecificationList = [];
        this.mobjAdditionalInfoModel.SpecTemplate = this.mobjTempLookupData.SMTEMPLATEID;
        this.mobjAdditionalInfoModel.SpecTemplateDesc = this.mobjTempLookupData.SMTemplateDesc;
        // if (this.mobjTempLookupData.field == "SpecTemplate") {
        //   this.bmlfGetSpecificationTemplateData('');
        // }
        let parrFilterSpecData = this.marrSpecificationList.filter(x => x.SMRequestNo != this.marrItemWiseGridData[this.miSampleIndex].RowId);
        if (parrFilterSpecData.length > 0) {
          this.marrSpecificationList = parrFilterSpecData;
        } else {
          this.marrSpecificationList = [];
        }
        let parrFilterSpecDetailData = this.marrSampleTemplateDataIdWise.filter(x => x.RowId != this.marrItemWiseGridData[this.miSampleIndex].RowId);
        if (parrFilterSpecDetailData.length > 0) {
          this.marrSampleTemplateDataIdWise = parrFilterSpecDetailData;
        } else {
          this.marrSampleTemplateDataIdWise = [];
        }
        this.bmlfGetSpecificationTemplateData('');
      }
    }).add(() => {});
  }
  bmlfOpenErrorBlock(psMsg) {
    this.toastMessageService.notifyError(this.utilService.bmgfonTranslate(psMsg));
  }
  bmlfUpdateNewSampleData() {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.mobjSampleInfoModel.smSampleDescription)) {
      this.bmlfOpenErrorBlock("SALESOPPORTUNITYTRAN.MSG.ENTERSAMPLEDESC");
      return false;
    } else if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(this.mobjSampleInfoModel.smAnticipatedSalesVolume)) {
      this.bmlfOpenErrorBlock("SALESOPPORTUNITYTRAN.MSG.ENTERSALESVOLUME");
      return false;
    }
    let maxLineNo = 0;
    if (this.mobjSampleInfoModel.SMRequestNo == "" && this.miSampleIndex == -1) {
      let pobjPrdData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.ProductRangeModal();
      if (this.marrItemWiseGridData.length == 0) {
        maxLineNo = 1;
      } else {
        const a = this.marrItemWiseGridData.reduce(function (prev, current) {
          return prev.RowId > current.RowId ? prev : current;
        });
        maxLineNo = a.RowId + 1;
      }
      pobjPrdData.OppNo = this.msTrnKey;
      pobjPrdData.RowId = maxLineNo;
      pobjPrdData.LineType = "New Sample", pobjPrdData.ItemKey = this.mobjSampleInfoModel.smSampleDescription;
      pobjPrdData.Description = this.mobjSampleInfoModel.smSpecialInstruction;
      pobjPrdData.EstimatedQty = this.mobjSampleInfoModel.smAnticipatedSalesVolume;
      pobjPrdData.Unit = this.mobjSampleInfoModel.smSampleSizeUOM;
      pobjPrdData.Price = this.mobjSampleInfoModel.smTargetPrice;
      pobjPrdData.Amount = this.utilService.bmgfSetPrecision(this.mobjSampleInfoModel.smAnticipatedSalesVolume * this.mobjSampleInfoModel.smTargetPrice, this.miAmountPrecision);
      this.marrItemWiseGridData.push(Object.assign({}, pobjPrdData));
    } else {
      this.marrItemWiseGridData[this.miSampleIndex].ItemKey = this.mobjSampleInfoModel.smSampleDescription;
      this.marrItemWiseGridData[this.miSampleIndex].Description = this.mobjSampleInfoModel.smSpecialInstruction;
      this.marrItemWiseGridData[this.miSampleIndex].EstimatedQty = this.mobjSampleInfoModel.smAnticipatedSalesVolume;
      this.marrItemWiseGridData[this.miSampleIndex].Unit = this.mobjSampleInfoModel.smSampleSizeUOM;
      this.marrItemWiseGridData[this.miSampleIndex].Price = this.mobjSampleInfoModel.smTargetPrice;
      this.marrItemWiseGridData[this.miSampleIndex].Amount = this.utilService.bmgfSetPrecision(this.mobjSampleInfoModel.smAnticipatedSalesVolume * this.mobjSampleInfoModel.smTargetPrice, this.miAmountPrecision);
      maxLineNo = this.marrItemWiseGridData[this.miSampleIndex].RowId;
      let parrFilterSampleData = this.marrSampleInfoList.filter(x => x.SMRequestNo != this.marrItemWiseGridData[this.miSampleIndex].RowId);
      if (parrFilterSampleData.length > 0) {
        this.marrSampleInfoList = parrFilterSampleData;
      } else {
        this.marrSampleInfoList = [];
      }
      let parrFilterSpecData = this.marrSpecificationList.filter(x => x.SMRequestNo != this.marrItemWiseGridData[this.miSampleIndex].RowId);
      if (parrFilterSpecData.length > 0) {
        this.marrSpecificationList = parrFilterSpecData;
      } else {
        this.marrSpecificationList = [];
      }
      let parrFilterSpecDetailData = this.marrSampleTemplateDataIdWise.filter(x => x.RowId != this.marrItemWiseGridData[this.miSampleIndex].RowId);
      if (parrFilterSpecDetailData.length > 0) {
        this.marrSampleTemplateDataIdWise = parrFilterSpecDetailData;
      } else {
        this.marrSampleTemplateDataIdWise = [];
      }
    }
    this.mbIsChangeData = true;
    let pobjData = Object.assign({}, this.mobjSampleInfoModel);
    pobjData.SMTransactionNo = this.msTrnKey;
    pobjData.SMRequestNo = maxLineNo;
    pobjData.smAnticipatedSalesVolume = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smAnticipatedSalesVolume) ? 0 : pobjData.smAnticipatedSalesVolume;
    pobjData.smCurrentPrice = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smCurrentPrice) ? this.utilService.bmgfSetPrecision(0, this.miCostPrecision) : this.utilService.bmgfSetPrecision(pobjData.smCurrentPrice, this.miCostPrecision);
    pobjData.smSampleSize = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smSampleSize) ? this.utilService.bmgfSetPrecision(0, this.miQtyPrecision) : this.utilService.bmgfSetPrecision(pobjData.smSampleSize, this.miQtyPrecision);
    pobjData.smTargetPrice = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smTargetPrice) ? this.utilService.bmgfSetPrecision(0, this.miCostPrecision) : this.utilService.bmgfSetPrecision(pobjData.smTargetPrice, this.miCostPrecision);
    pobjData.smTimeRequired = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smTimeRequired) ? this.utilService.bmgfSetPrecision(0, 2) : this.utilService.bmgfSetPrecision(pobjData.smTimeRequired, 2);
    pobjData.smSamplePices = src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(pobjData.smSamplePices) ? 0 : pobjData.smSamplePices;
    this.marrSampleInfoList.push(pobjData);
    this.marrSampleTemplateMData.forEach(element => {
      element.RowId = maxLineNo;
      element.SMTemplateMasterDetails.forEach(value => {
        let pobjData = new _models_sales_opportunity_transaction_model__WEBPACK_IMPORTED_MODULE_2__.CRMAdditionalInfoModel();
        pobjData = value;
        pobjData.SMTransactionNo = this.msTrnKey;
        pobjData.SMRequestNo = maxLineNo.toString();
        pobjData.SmTemplateID = this.mobjAdditionalInfoModel.SpecTemplate;
        pobjData.SmTemplateDesc = this.mobjAdditionalInfoModel.SpecTemplateDesc;
        pobjData.SmGroupId = element.SmGroupId;
        pobjData.SmGroupDesc = element.SmGroupDesc;
        pobjData.SmPropertyValue = value.TargetValue || "";
        pobjData.SmDescription = value.Description || "";
        //  if (this.mobjSampleInfoModel.SMRequestNo == "") {
        pobjData.RecDate = new Date(pobjData.RecDate).getFullYear() == 1 ? new Date() : pobjData.RecDate;
        pobjData.User6 = new Date(pobjData.User6).getFullYear() == 1 ? new Date() : pobjData.User6;
        // }
        delete pobjData.TargetValue;
        delete pobjData.Description;
        pobjData.TargetValue = pobjData.SmPropertyValue;
        pobjData.Description = pobjData.SmDescription;
        delete pobjData.SmPropertyValue;
        delete pobjData.SmDescription;
        this.marrSpecificationList.push(pobjData);
      });
      this.marrSampleTemplateDataIdWise.push(element);
    });
    this.mbNewSampleDialog = false;
    let pnumTotalAmt = this.marrItemWiseGridData.reduce((sum, current) => sum + Number(current.Amount), 0);
    this.mobjTotalValues.TotalAmt = Number(pnumTotalAmt);
  }
  bmlfSendForApproval(data) {
    if (data.mode == "I") {
      this.bmlfOpenErrorBlock("COMMON.MSG.SAVEFIRST");
      return;
    }
    this.mobjApprovalData = data;
    this.mbApprovalDialog = true;
  }
  bmlfApprovalLineItemAction(type) {
    if (type == "Yes") {
      let pobjReqData = {
        ScreenName: 'Sales Opportunity',
        LookUpKey: 'UpdateSendForApproval',
        Filter1: this.msTrnKey,
        Filter2: this.mobjApprovalData.RowId
      };
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
        if (res != null && res.Response[0].ErrorCoe != "") {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SAVE"));
          this.bmlfGetProductRangeData();
        } else {
          this.toastMessageService.notifySuccess(this.utilService.bmgfonTranslate("COMMON.MSG.SERVERERROR"));
        }
      });
    }
    this.mbApprovalDialog = false;
  }
  SetGridColumns(GridName, parrGridCol) {
    this.utilService.GetJsonSetting(this.msScreenName, this.mobjUserData.UserId, GridName, parrGridCol).then(pArrGridChangedCol => {
      if (pArrGridChangedCol != null && pArrGridChangedCol != undefined) {
        parrGridCol = pArrGridChangedCol;
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfFieldEvent(type, rowIndex) {
    this.mbIsChangeData = type;
  }
  static #_ = this.ɵfac = function CrmProductRangeComponent_Factory(t) {
    return new (t || CrmProductRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_6__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_7__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_main_srm_http_sample_transaction_service__WEBPACK_IMPORTED_MODULE_11__.SampleTransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: CrmProductRangeComponent,
    selectors: [["app-crm-product-range"]],
    viewQuery: function CrmProductRangeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.customGridCtrl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.FieldExtender = _t.first);
      }
    },
    inputs: {
      msTrnKey: "msTrnKey",
      mbIsDisabled: "mbIsDisabled"
    },
    outputs: {
      bmgfShowHeaderEvnt: "bmgfShowHeaderEvnt"
    },
    decls: 43,
    vars: 44,
    consts: [[4, "ngIf"], ["autocomplete", "off"], [1, "form-container"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row", "rowheight100p"], [1, "d-flex", "w-100", "flex_wrap", "custom_size_input"], [1, "toolbar-btn-sec", "pt-1", "pb-0", "col-md-4", "col-lg-4", "m_b_10", "br-1"], ["type", "button", "id", "cmdAddLineBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["type", "button", "id", "cmdSalesTempBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", 3, "click"], ["type", "button", "id", "cmdNewSampleBtn", 1, "btn", "btn-sky", "btn-sm", "wrap_selector", "mr-1", 3, "click"], [1, "row", "text-right", "col-md-8", "col-lg-8", "d-md-flex", "pr-0", "pt-1", "border-left", "m_b_10"], [1, "col-sm-4"], [1, "form-group", "row", "mb-0"], [1, "col-md-5", "pr-0"], [1, "col-form-label"], [1, "col-md-7", "custom_flex", "pr-0"], ["id", "txtTotalAmt", "name", "TotalAmt", 1, "form-control", "DensityOverride", 3, "decimals", "format", "readonly", "ngModel", "spinners", "min", "autoCorrect", "ngModelChange"], ["id", "divPrdRangeKendo", 1, "col-md-12", "height100p", "full-height-grid"], ["id", "PrdRangeGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", "scrolled-grid", "ustom-height", "custom_h_grid", "max_scroll", 3, "data", "pageable", "sortable", "resizable", "reorderable", "groupable", "pageSize", "rowHeight"], [3, "noRecords"], [1, "grid-action-column", 3, "width", "title"], ["kendoGridCellTemplate", ""], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], ["id", "fieldDiv"], ["id", "FieldExtender", 3, "msScreenName", "keyValue"], ["FieldExtender", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "deleteLineItemDialog", 3, "close", 4, "ngIf"], ["id", "approveLineItemDialog", 3, "close", 4, "ngIf"], [3, "width", "close", 4, "ngIf"], ["id", "newSampleModal", 3, "minWidth", "width", "close", 4, "ngIf"], [1, "mob-label"], [1, "grid-icon-sec"], ["title", "Delete", 1, "", 3, "id", "click"], [1, "fa", "fa-trash-o"], ["class", "", "title", "Send For Approval", 3, "id", "click", 4, "ngIf"], ["title", "Send For Approval", 1, "", 3, "id", "click"], [1, "fa", "fa-check-square-o"], [3, "field", "title", "width"], [1, "form-group", "custom-inline-input"], ["class", " form-control grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "change", 4, "ngIf"], ["type", " text", "class", "form-control grid-form-control", "disabled", "", 3, "ngModel", "id", "name", "ngModelChange", 4, "ngIf"], ["style", "background-color: #f2f5f7;", "class", "form-control grid-form-control", 4, "ngIf"], [1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", " text", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "ngModelChange"], [1, "form-control", "grid-form-control", 2, "background-color", "#f2f5f7"], ["class", "from-group custom_flex grid-label-link", 4, "ngIf"], ["class", "form-control grid-form-control", "style", "color: #0775eb;\n                                    cursor: pointer;", 3, "id", "click", 4, "ngIf"], [1, "from-group", "custom_flex", "grid-label-link"], ["type", "text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "blur", "focus"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-search"], [1, "form-control", "grid-form-control", 2, "color", "#0775eb", "cursor", "pointer", 3, "id", "click"], ["class", "form-group custom-inline-input", 4, "ngIf"], ["type", " text", "maxlength", "80", 1, "form-control", "grid-form-control", 3, "ngModel", "disabled", "id", "name", "ngModelChange", "change"], ["type", " text", "disabled", "", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "ngModelChange", "change"], [3, "spinners", "step", "name", "ngModel", "id", "min", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "blur"], ["type", " text", "disabled", "", 1, "form-control", "grid-form-control", "text-right", "m_0", 3, "ngModel", "id", "name", "ngModelChange"], [3, "msGridColumn", "msGridBinding", "dataItem", "item", "rowIndex", "mFormMode", "msChangeField"], ["customGrid", ""], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup"], [3, "bmgfCloseSalesTemplateModal"], ["id", "deleteLineItemDialog", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdDeleteLineItemAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], ["id", "approveLineItemDialog", 3, "close"], ["kendoButton", "", "id", "cmdyesLineItemAction", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdNoLineItemAction", 3, "click"], [3, "width", "close"], ["autocomplete", "off", 1, "form-container"], [1, "form-group", "row"], ["row", "6", "name", "Description", "id", "txtDescriptionTextArea", "type", "text", 1, "form-control", 2, "height", "190px", 3, "ngModel", "maxlength", "ngModelChange", "change"], ["kendoButton", "", "id", "cmdDescription", 3, "click"], ["id", "newSampleModal", 3, "minWidth", "width", "close"], [1, "bodyContent", "form-container"], [1, "tab-head-sec"], ["id", "tabISampleInfo", 1, "tab-item", 3, "ngClass", "click"], ["id", "tabSpecificationInfo", 1, "tab-item", 3, "ngClass", "click"], ["id", "sectabInfo", 1, "tab-container", 3, "hidden"], [1, "col-md-6"], [1, "col-md-5", "flex_box", "flex_h_s_b"], [1, "mandate_sign"], [1, "col-md-7", "custom_flex", "md_p_r_30"], ["type", "text", "id", "txtSampleDesc", "name", "txtSampleDesc", "maxlength", "500", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "cmdOpenSampleDesc", 1, "input-group-addon", "fsearch", 3, "click"], [1, "fa", "fa-expand"], [1, "col-md-5"], ["type", "text", "id", "txtSplInst", "name", "txtSplInst", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "cmdOpenSpecialInst", 1, "input-group-addon", "fsearch", 3, "click"], ["name", "txtAntiSalesVal", "id", "txtAntiSalesVal", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["type", "text", "id", "txtUOM", "name", "txtUOM", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdUOMLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["name", "txtTargetPrice", "id", "txtTargetPrice", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["name", "txtCurrentPrice", "id", "txtCurrentPrice", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["name", "txtSampleSize", "id", "txtSampleSize", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["name", "txtEstTimeReq", "id", "txtEstTimeReq", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["name", "txtSamplePiece", "id", "txtSamplePiece", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "disabled", "ngModelChange", "valueChange"], ["id", "sectabSpecification", 1, "tab-container", 3, "hidden"], ["type", "text", "id", "txtSpecTemplate", "name", "txtSpecTemplate", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "blur", "focus"], ["id", "cmdSpecTempLookup", 1, "input-group-addon", "fsearch", 3, "click"], ["id", "divAddiInfoKendo", 1, "col-md-12"], ["id", "addInfoGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", 3, "kendoGridGroupBinding", "pageable", "sortable", "resizable", "reorderable", "groupable", "pageSize", "rowHeight", "selectable"], ["field", "SmGroupId", 3, "title"], ["field", "SmGroupDesc", 3, "title"], ["kendoGridDetailTemplate", ""], ["kendoButton", "", "id", "cmdOkSampleButton", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelSampleButton", 3, "click"], ["id", "divAddInfoDetailKendo", 1, "col-md-12"], ["id", "addInfoDetailGrid", "scrollable", "virtual", 1, "responsive_grid", "low_space_table", 3, "kendoGridGroupBinding", "pageable", "sortable", "filterable", "resizable", "reorderable", "pageSize", "rowHeight", "selectable"], ["field", "SmPropertyId", 3, "title", "width"], ["field", "SmPropertyDesc", 3, "title", "width"], ["field", "TargetValue", 3, "title", "width"], ["field", "Description", 3, "title", "width"], ["type", "text", 1, "form-control", "grid-form-control", 3, "ngModel", "id", "name", "disabled", "ngModelChange", "change"]],
    template: function CrmProductRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, CrmProductRangeComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_Template_button_click_8_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfAddLineItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_Template_button_click_11_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenSalesTemplateModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CrmProductRangeComponent_Template_button_click_14_listener() {
          return ctx.mbIsDisabled ? false : ctx.bmlfOpenSampleModal("-1", "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 16)(25, "kendo-numerictextbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function CrmProductRangeComponent_Template_kendo_numerictextbox_ngModelChange_25_listener($event) {
          return ctx.mobjTotalValues.TotalAmt = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 18)(27, "kendo-grid", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](28, "kendo-grid-messages", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "kendo-grid-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, CrmProductRangeComponent_ng_template_32_Template, 7, 5, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, CrmProductRangeComponent_kendo_grid_column_33_Template, 7, 9, "kendo-grid-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](35, "app-field-extender", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, CrmProductRangeComponent_app_custom_lookup_modal_37_Template, 1, 1, "app-custom-lookup-modal", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, CrmProductRangeComponent_div_38_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](39, CrmProductRangeComponent_kendo_dialog_39_Template, 16, 12, "kendo-dialog", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, CrmProductRangeComponent_kendo_dialog_40_Template, 16, 12, "kendo-dialog", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](41, CrmProductRangeComponent_kendo_dialog_41_Template, 15, 11, "kendo-dialog", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](42, CrmProductRangeComponent_kendo_dialog_42_Template, 135, 137, "kendo-dialog", 31);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 32, "COMMON.ADDLINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 34, "SALESOPPORTUNITYTRAN.SALESTEMPLATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 36, "SALESOPPORTUNITYTRAN.NEWSAMPLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](23, 38, "SALESOPPORTUNITYTRAN.TOTALAMT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("decimals", ctx.miAmountPrecision)("format", ctx.miAmountPrecisionFormat)("readonly", true)("ngModel", ctx.mobjTotalValues.TotalAmt)("spinners", false)("min", 0)("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("data", ctx.marrItemWiseGridData)("pageable", true)("sortable", false)("resizable", true)("reorderable", true)("groupable", false)("pageSize", 50)("rowHeight", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](29, 40, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 42, "COMMON.ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("width", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.marrLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("msScreenName", ctx.msScreenName)("keyValue", ctx.mskeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbIsSalesTemplateModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbDeleteLineItemDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbApprovalDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbCommentDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.mbNewSampleDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_13__.CustomLookupModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_21__.NumericTextBoxComponent, _shared_components_field_extender_field_extender_component__WEBPACK_IMPORTED_MODULE_15__.FieldExtenderComponent, _shared_components_common_grid_customization_common_grid_customization__WEBPACK_IMPORTED_MODULE_16__.CommonGridCustomizationComponent, _shared_components_sales_template_modal_sales_template_modal_component__WEBPACK_IMPORTED_MODULE_17__.SalesTemplateModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgForm, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_24__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.GroupBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.DetailTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_25__.CellTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
    styles: ["#newSampleModal.k-dialog-wrapper[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n\n#newSampleModal.k-dialog-wrapper[_ngcontent-%COMP%]   .k-dialog[_ngcontent-%COMP%] {\n  width: 900px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy9zYWxlcy1vcHBwb3J0dW5pdHktdHJhbnNhY3Rpb24vY3JtLXByb2R1Y3QtcmFuZ2UvY3JtLXByb2R1Y3QtcmFuZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2NybS9jb21wb25lbnRzL3NhbGVzLW9wcHBvcnR1bml0eS10cmFuc2FjdGlvbi9jcm0tcHJvZHVjdC1yYW5nZS9jcm0tcHJvZHVjdC1yYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3U2FtcGxlTW9kYWwuay1kaWFsb2ctd3JhcHBlcntcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgXHJcbn1cclxuI25ld1NhbXBsZU1vZGFsLmstZGlhbG9nLXdyYXBwZXIgLmstZGlhbG9nIHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG59IiwiI25ld1NhbXBsZU1vZGFsLmstZGlhbG9nLXdyYXBwZXIge1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jbmV3U2FtcGxlTW9kYWwuay1kaWFsb2ctd3JhcHBlciAuay1kaWFsb2cge1xuICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 96317:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/sales-opportunity-transaction-list/sales-opportunity-transaction-list.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityTransactionListComponent: () => (/* binding */ SalesOpportunityTransactionListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/grid-settings.interface */ 38434);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/grid-export-component/grid-export.component */ 90704);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_custom_message_model_custom_msg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/custom-message-model/custom-msg.component */ 15845);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/pipes/searchdata.pipe */ 80669);



















function SalesOpportunityTransactionListComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-loader");
  }
}
function SalesOpportunityTransactionListComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.bmlfonClearFilterEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "COMMON.CLEAR_FILTERS"), " ");
  }
}
function SalesOpportunityTransactionListComponent__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SalesOpportunityTransactionListComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "use", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SalesOpportunityTransactionListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_div_16_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const obj_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r15.bmlfonFilterEvent(obj_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 32)(3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const obj_r13 = ctx.$implicit;
    const idx_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMapInterpolate1"]("widget-box  ", obj_r13.colorClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdFilter", idx_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", obj_r13.Field, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](obj_r13.Count);
  }
}
function SalesOpportunityTransactionListComponent_ng_template_24_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 61);
  }
}
function SalesOpportunityTransactionListComponent_ng_template_24_kendo_grid_column_chooser_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "kendo-grid-column-chooser", 62);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("allowHideAll", false);
  }
}
function SalesOpportunityTransactionListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.bmlfonAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 38)(9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "use", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 42)(15, "ul")(16, "li")(17, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.bmlfSaveGridSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "li")(21, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_a_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.bmlfResetGridSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.bmlFilterSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, SalesOpportunityTransactionListComponent_ng_template_24_i_25_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, SalesOpportunityTransactionListComponent_ng_template_24_kendo_grid_column_chooser_28_Template, 1, 1, "kendo-grid-column-chooser", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 50)(30, "div", 51)(31, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.exportToExcel(_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.exportToPDF(_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_ng_template_24_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.printToPDF(_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "use", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 59)(42, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function SalesOpportunityTransactionListComponent_ng_template_24_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r27.msKeyword = $event);
    })("input", function SalesOpportunityTransactionListComponent_ng_template_24_Template_input_input_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r28.bmlfOnSearchRecord());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 10, "SALESOPPORTUNITYTRAN.ADDSALESOPPORTUNITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 12, "COMMON.SETTINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 14, "COMMON.SAVEGRIDSETTINGS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 16, "COMMON.RESETGRIDSETTINGS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r6.filterEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.columnMenuEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 18, "COMMON.EXPORTTOEXCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 20, "COMMON.EXPORTTOPDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 22, "COMMON.PRINT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r6.msKeyword);
  }
}
const _c0 = function () {
  return [5, 10, 20, 50, 100];
};
function SalesOpportunityTransactionListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "kendo-pager-prev-buttons")(1, "kendo-pager-info")(2, "kendo-pager-next-buttons")(3, "kendo-pager-page-sizes", 63);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](1, _c0));
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 67)(2, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39);
      const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.bmlfonCopy(dataItem_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "use", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 71)(9, "ul")(10, "li")(11, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_3_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39);
      const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.bmlfonCopy(dataItem_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "li")(15, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_3_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39);
      const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.bmlfonDelete(dataItem_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdDropdownLev", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 7, "COMMON.COPY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdActionButton", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdCopy", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 9, "COMMON.COPY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdDelete", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 11, "COMMON.DELETE"));
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_4_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.bmlfonEdit(dataItem_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const rowIndex_r32 = ctx_r48.rowIndex;
    const dataItem_r31 = ctx_r48.$implicit;
    const column_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "cmdLinkEdit", rowIndex_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", dataItem_r31[column_r29.field], " ");
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const column_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, dataItem_r31[column_r29.field], ctx_r35.msCustomDateFormat), " ");
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dataItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const column_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", dataItem_r31[column_r29.field], " ");
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_3_Template, 18, 13, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_5_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_ng_container_6_Template, 2, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const column_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, column_r29.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r29.field == "ActionCol");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r29.field == "SalesOppNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r29.type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r29.type != "date" && column_r29.field != "SalesOppNo");
  }
}
function SalesOpportunityTransactionListComponent_kendo_grid_column_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "kendo-grid-column", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SalesOpportunityTransactionListComponent_kendo_grid_column_27_ng_template_2_Template, 7, 7, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", column_r29.field)("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 7, column_r29.title))("filter", column_r29.type ? column_r29.type : column_r29.filter)("format", column_r29.format)("hidden", column_r29.hidden)("filterable", column_r29.filterable)("width", column_r29.field == "ActionCol" ? 100 : column_r29.width);
  }
}
function SalesOpportunityTransactionListComponent_kendo_dialog_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "kendo-dialog", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("close", function SalesOpportunityTransactionListComponent_kendo_dialog_29_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r55.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_dialog_29_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r57.bmlfonDialogAction("Yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_kendo_dialog_29_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r58.bmlfonDialogAction("No"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("minWidth", 250)("width", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 6, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 8, "COMMON.MSG.DELMESSAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 10, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 12, "COMMON.NO"), " ");
  }
}
function SalesOpportunityTransactionListComponent_app_custom_msg_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-custom-msg", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_app_custom_msg_30_Template_app_custom_msg_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r59.bmlfonCloseModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("MsgData", ctx_r10.msMsgData);
  }
}
const _c1 = function (a0) {
  return {
    show: a0
  };
};
const _c2 = function (a0) {
  return {
    gridloading: a0
  };
};
const _c3 = function () {
  return {
    checkboxOnly: true
  };
};
class SalesOpportunityTransactionListComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  constructor(router, renderer, lsService, dateFormatService, toastMessageService, utilService, userFieldService) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.router = router;
    this.renderer = renderer;
    this.lsService = lsService;
    this.dateFormatService = dateFormatService;
    this.toastMessageService = toastMessageService;
    this.utilService = utilService;
    this.userFieldService = userFieldService;
    this.bmlfSelectedCallback = args => args.dataItem;
    this.gridDataList = [];
    this.marrOrginalGridList = [];
    this.mbLoadingEnabled = false;
    this.msKeyword = '';
    this.mobjGridSettings = new src_app_core_models_grid_settings_interface__WEBPACK_IMPORTED_MODULE_0__.GridSettings();
    this.marrFilterList = [];
    this.filterCollapsed = true;
    this.mbClearFilter = false;
    this.msCustomDateFormat = "";
    this.msScreenName = "Sales Opportunity Transaction";
    this.mbShowDeleteDialog = false;
    this.msMsgData = {};
    this.mbBulkDeleteView = false;
    this.mbBulkDelete = false;
    this.mObjModel = {};
    this.marraySelected = [];
    this.mbIsLoading = false;
  }
  ngOnInit() {
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.utilService.getBMEScreePermission("Sales Opportunity Transaction");
    this.initGrid();
    this.getDataList();
    this.setExportData({
      'pageName': this.msScreenName
    });
    this.exportData.translateFrom = '';
  }
  getDataList() {
    this.mbLoadingEnabled = true;
    const pobjHeaderData = {
      "ScreenName": this.msScreenName,
      "LookUpKey": "SalesOpportunityList",
      "Filter1": "",
      "Filter2": "",
      "Filter3": "",
      "Filter4": "",
      "Filter5": ""
    };
    this.userFieldService.getLookupData(pobjHeaderData).subscribe(res => {
      let parrGridData = res.LookupData;
      parrGridData.forEach(ele => {
        ele.RecDate = new Date(ele.RecDate);
        ele.StartDate = new Date(ele.StartDate);
      });
      this.gridDataList = parrGridData;
      this.marrOrginalGridList = parrGridData;
      let parrSettingData = "";
      if (res.GridSettingData.length > 0) {
        parrSettingData = res.GridSettingData[0].JSONString;
      }
      this.setInitGridSettings(parrSettingData, "SALESOPPORTUNITYTRAN");
      this.exportData.columnsConfig = this.mobjGridSettings.columnsConfig;
      this.mobjGridSettings.state.take = 50;
      this.bmlfGetFiltersCounts();
      //  console.log(JSON.stringify(this.mobjGridSettings));
    }, error => {
      console.log(error);
    }).add(() => {
      this.mbLoadingEnabled = false;
    });
  }
  bmlfResetGridSettings() {
    this.bmlfOnResetGridSettings(this.msScreenName, "SALESOPPORTUNITYTRAN");
  }
  bmlfSaveGridSetting() {
    this.bmlfOnSaveGrid(this.msScreenName);
  }
  bmlfonAdd() {
    //check Write permission
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    this.router.navigate(['/main/crm/sales-opportunity-transaction/manage']);
  }
  bmlfonEdit(data) {
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return;
    }
    ;
    this.router.navigate(['/main/crm/sales-opportunity-transaction/manage'], {
      queryParams: {
        OppNo: data.SalesOppNo
      }
    });
  }
  bmlfonselectionChange(e) {
    if (e.selectedRows.length > 0) {
      e.selectedRows.forEach(ele => {
        let parrfilterData = this.marraySelected.filter(x => x.SalesOppNo == ele.dataItem.SalesOppNo);
        if (parrfilterData == undefined || parrfilterData.length == 0) {
          this.marraySelected.push(ele.dataItem);
        }
      });
    } else if (e.deselectedRows.length > 0) {
      e.deselectedRows.forEach(ele => {
        let pobjTempData = ele.dataItem;
        this.marraySelected = this.marraySelected.filter(x => {
          if (x.SalesOppNo != pobjTempData.SalesOppNo) {
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
  bmlfGetFiltersCounts() {
    this.mbIsLoading = true;
    let pobjReqData = {
      ScreenName: 'SALES OPPORTUNITY',
      LookUpKey: "FilterCount"
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      let resList = [];
      if (res.Table6 != undefined && res.Table6.length > 0) {
        let convToJson = res.Table6[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.LookupData != undefined && res.LookupData.length > 0) {
        let convToJson = res.LookupData[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.Table1 != undefined && res.Table1.length > 0) {
        let convToJson = res.Table1[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.Table2 != undefined && res.Table2.length > 0) {
        let convToJson = res.Table2[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.Table3 != undefined && res.Table3.length > 0) {
        let convToJson = res.Table3[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.Table4 != undefined && res.Table4.length > 0) {
        let convToJson = res.Table4[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      if (res.Table5 != undefined && res.Table5.length > 0) {
        let convToJson = res.Table5[0].RecCount;
        resList.push(JSON.parse(convToJson));
      }
      this.marrFilterList = resList;
      // resList.forEach(ele => {
      //   if (ele.Field == 'Return Orders') {
      //     ele.Field = this.utilService.bmgfonTranslate('ORDERSHIP.RETURNORDER');
      //   } else if (ele.Field == 'Pending Orders') {
      //     ele.Field = this.utilService.bmgfonTranslate('ORDERSHIP.PENDINGORDER');
      //   } else if (ele.Field == 'Orders to be Shipped Today') {
      //     ele.Field = this.utilService.bmgfonTranslate('ORDERSHIP.TODAYSHIPPEDORDER');
      //   } else if (ele.Field == 'Closed Orders') {
      //     ele.Field = this.utilService.bmgfonTranslate('ORDERSHIP.CLOSEDORDER');
      //   } else if (ele.Field == 'Processed Orders') {
      //     ele.Field = this.utilService.bmgfonTranslate('ORDERSHIP.PROCESSEDORDERS');
      //   }
      //   this.marrFilterList.push(ele);
      // });
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  bmlfonClearFilterEvent() {
    this.gridDataList = this.marrOrginalGridList;
    this.mbClearFilter = false;
  }
  bmlfonFilterEvent(pobjData) {
    this.mbClearFilter = true;
    this.bmlfonGetFilterOrderData(pobjData.Field);
    // skip pages
    this.mobjGridSettings.state.skip = 0;
  }
  bmlfonGetFilterOrderData(filterType) {
    this.mbIsLoading = true;
    let pobjReqData = {
      ScreenName: this.msScreenName,
      LookUpKey: ""
    };
    if (filterType == 'Lead') {
      pobjReqData.LookUpKey = "LeadSalesOpportunityList";
    } else if (filterType == 'Suspect') {
      pobjReqData.LookUpKey = "SuspectSalesOpportunityList";
    } else if (filterType == 'Prospect') {
      pobjReqData.LookUpKey = "ProspectSalesOpportunityList";
    } else if (filterType == 'Opportunity') {
      pobjReqData.LookUpKey = "OpportunitySalesOpportunityList";
    } else if (filterType == 'Won') {
      pobjReqData.LookUpKey = "WonSalesOpportunityList";
    } else if (filterType == 'Lost') {
      pobjReqData.LookUpKey = "LostSalesOpportunityList";
    } else if (filterType == 'New') {
      pobjReqData.LookUpKey = "NewSalesOpportunityList";
    }
    this.userFieldService.getLookupData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      this.gridDataList = [];
      if (res.LookupData.length) {
        let parrGridData = res.LookupData;
        parrGridData.forEach(ele => {
          ele.RecDate = new Date(ele.RecDate);
          ele.StartDate = new Date(ele.StartDate);
        });
        this.gridDataList = parrGridData;
      }
    }, err => {
      console.log(err);
      this.mbIsLoading = false;
    });
  }
  static #_ = this.ɵfac = function SalesOpportunityTransactionListComponent_Factory(t) {
    return new (t || SalesOpportunityTransactionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_3__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_5__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: SalesOpportunityTransactionListComponent,
    selectors: [["app-sales-opportunity-transaction-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 46,
    consts: [[4, "ngIf"], [1, "inner-wrapper", "height100p"], [1, "container-fluid", "height100p"], [1, "row", "page-head"], [1, "col-md-12", "page-head-col", "md_flex_box", "md_flex_h_s_b"], [1, ""], ["class", "k-button btn-icons", "id", "cmdClearFilter", 3, "click", 4, "ngIf"], ["id", "cmdFilterShow", 1, "k-button", "btn-icons", 3, "click"], ["viewBox", "0 0 491.86 491.86", "class", "grid-svg-icon", 4, "ngIf"], ["viewBox", "0 0 491.858 491.858", "class", "grid-svg-icon", 4, "ngIf"], [1, "row", "widget-section", "showFilter", 3, "ngClass"], ["class", "col-sm", 4, "ngFor", "ngForOf"], [1, "row", "rowheight100p"], ["id", "divKendodiv", 1, "col-md-12", "height100p", "full-height-grid"], ["scrollable", "virtual", 1, "responsive_grid", "scrolled-grid", 3, "ngClass", "kendoGridGroupBinding", "group", "pageable", "loading", "sortable", "filterable", "resizable", "reorderable", "groupable", "sort", "pageSize", "skip", "filter", "rowHeight", "selectable", "kendoGridSelectBy", "selectedKeys", "dataStateChange", "columnVisibilityChange", "selectionChange", "columnReorder", "columnResize"], ["grid", "kendoGrid"], [3, "noRecords"], ["kendoGridToolbarTemplate", ""], ["kendoPagerTemplate", ""], ["showSelectAll", "true", "width", "30", "reorderable", "false"], [3, "field", "title", "filter", "format", "hidden", "filterable", "width", 4, "ngFor", "ngForOf"], [3, "exportData", "IsCustomCol"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close", 4, "ngIf"], [3, "MsgData", "click", 4, "ngIf"], ["id", "cmdClearFilter", 1, "k-button", "btn-icons", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["viewBox", "0 0 491.86 491.86", 1, "grid-svg-icon"], [0, "xlink", "href", "#plusIcon"], ["viewBox", "0 0 491.858 491.858", 1, "grid-svg-icon"], [0, "xlink", "href", "#minusIcon"], [1, "col-sm"], [3, "click"], [1, "widget-box-details"], [1, "widget-box-title", 3, "id"], [1, "row"], [1, "col-md-12", "col-12"], [1, "left-action-button"], ["id", "cmdAddSalesOpp", 1, "k-button", "btn-icons", 3, "click"], [1, "dropdown", "grid-header-dropdown", "xs-hidden", "setting_btn"], ["id", "cmdSetting", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "k-button", "btn-icons"], ["viewBox", "0 0 386.257 386.257", 1, "grid-svg-icon"], [0, "xlink", "href", "#downArrowIcon"], [1, "dropdown-menu"], ["id", "cmdSaveGrid", 3, "click"], ["id", "cmdResetGrid", 3, "click"], ["id", "idfilterEnabled", 1, "k-button", "btn-icons", "min_h_24", "xs-hidden", 3, "click"], ["class", "fa fa-filter upper_filter", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-filter", "mr-0"], ["id", "divColumnChooser", 2, "display", "inline-block"], ["class", "xs-hidden", 3, "allowHideAll", 4, "ngIf"], [1, "right-search"], [1, "grid-action-buttons"], ["id", "cmdExportExcel", 1, "k-button", "btn-icons", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-file-excel-o", "icon-excel", "mr-0"], ["id", "cmdExportPDF", 1, "k-button", "btn-icons", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf-o", "icon-pdf", "mr-0"], ["id", "cmdExportPrint", 1, "k-button", "btn-icons", 3, "title", "click"], ["viewBox", "0 0 16 16", 1, "grid-svg-icon"], [0, "xlink", "href", "#printIcon"], [1, "grid-search", "xs_no_float"], ["type", "text", "id", "txtSearchKeyword", "name", "Search", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-hidden", "true", 1, "fa", "fa-filter", "upper_filter"], [1, "xs-hidden", 3, "allowHideAll"], [3, "pageSizes"], [3, "field", "title", "filter", "format", "hidden", "filterable", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "dropdown"], [1, "grid-action-button", 3, "id", "click"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "grid-action-button", 3, "id"], ["viewBox", "0 0 386.257 386.257"], [1, "dropdown-menu", "grid-action-menu"], [3, "id", "click"], [1, "link", 3, "id", "click"], ["id", "Kendo_dialog_msg", 3, "minWidth", "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "primary", "true", 3, "click"], ["kendoButton", "", 3, "click"], [3, "MsgData", "click"]],
    template: function SalesOpportunityTransactionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, SalesOpportunityTransactionListComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, SalesOpportunityTransactionListComponent_button_9_Template, 4, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOpportunityTransactionListComponent_Template_button_click_10_listener() {
          return ctx.onFilterShow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, SalesOpportunityTransactionListComponent__svg_svg_11_Template, 2, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, SalesOpportunityTransactionListComponent__svg_svg_12_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, SalesOpportunityTransactionListComponent_div_16_Template, 7, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "kendo-grid", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dataStateChange", function SalesOpportunityTransactionListComponent_Template_kendo_grid_dataStateChange_19_listener($event) {
          return ctx.dataStateChange($event);
        })("columnVisibilityChange", function SalesOpportunityTransactionListComponent_Template_kendo_grid_columnVisibilityChange_19_listener($event) {
          return ctx.bmlfOnVisibilityChange($event);
        })("selectionChange", function SalesOpportunityTransactionListComponent_Template_kendo_grid_selectionChange_19_listener($event) {
          return ctx.bmlfonselectionChange($event);
        })("columnReorder", function SalesOpportunityTransactionListComponent_Template_kendo_grid_columnReorder_19_listener($event) {
          return ctx.bmlfOnReorder($event);
        })("columnResize", function SalesOpportunityTransactionListComponent_Template_kendo_grid_columnResize_19_listener($event) {
          return ctx.bmlfOnResize($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "SearchData");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "kendo-grid-messages", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, SalesOpportunityTransactionListComponent_ng_template_24_Template, 43, 24, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, SalesOpportunityTransactionListComponent_ng_template_25_Template, 4, 2, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "kendo-grid-checkbox-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, SalesOpportunityTransactionListComponent_kendo_grid_column_27_Template, 3, 9, "kendo-grid-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "app-grid-export", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, SalesOpportunityTransactionListComponent_kendo_dialog_29_Template, 16, 14, "kendo-dialog", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, SalesOpportunityTransactionListComponent_app_custom_msg_30_Template, 1, 1, "app-custom-msg", 23);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 32, "SALESOPPORTUNITYTRAN.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbClearFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 34, "COMMON.FILTER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](41, _c1, ctx.filterCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.marrFilterList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](43, _c2, ctx.mbLoadingEnabled == true))("kendoGridGroupBinding", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](21, 36, ctx.gridDataList, ctx.msKeyword))("group", ctx.mobjGridSettings.state.group)("pageable", true)("loading", ctx.mbLoadingEnabled)("sortable", ctx.sortable)("filterable", ctx.filterEnabled)("resizable", true)("reorderable", true)("groupable", ctx.groupingEnabled)("sort", ctx.mobjGridSettings.state.sort)("pageSize", ctx.mobjGridSettings.state.take)("skip", ctx.mobjGridSettings.state.skip)("filter", ctx.mobjGridSettings.state.filter)("rowHeight", 36)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](45, _c3))("kendoGridSelectBy", ctx.bmlfSelectedCallback)("selectedKeys", ctx.marraySelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 39, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.mobjGridSettings.columnsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("exportData", ctx.exportData)("IsCustomCol", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbShowDeleteDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mbBulkDeleteView);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_grid_export_component_grid_export_component__WEBPACK_IMPORTED_MODULE_7__.GridExportComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, _shared_components_custom_message_model_custom_msg_component__WEBPACK_IMPORTED_MODULE_9__.CustomMsgComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_16__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.ToolbarTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.SelectionDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.GroupBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.CheckboxColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.PagerPrevButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.PagerNextButtonsComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.PagerInfoComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.PagerPageSizesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.PagerTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__.ColumnChooserComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_searchdata_pipe__WEBPACK_IMPORTED_MODULE_10__.SearchData],
    styles: ["@media (max-width: 767px) {\n  .showFilter.show[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy9zYWxlcy1vcHBwb3J0dW5pdHktdHJhbnNhY3Rpb24vc2FsZXMtb3Bwb3J0dW5pdHktdHJhbnNhY3Rpb24tbGlzdC9zYWxlcy1vcHBvcnR1bml0eS10cmFuc2FjdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy9zYWxlcy1vcHBwb3J0dW5pdHktdHJhbnNhY3Rpb24vc2FsZXMtb3Bwb3J0dW5pdHktdHJhbnNhY3Rpb24tbGlzdC9zYWxlcy1vcHBvcnR1bml0eS10cmFuc2FjdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBREo7SUFFUSx5QkFBQTtFQ0NOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd0ZpbHRlci5zaG93e1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2hvd0ZpbHRlci5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8438:
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/main/crm/components/sales-oppportunity-transaction/sales-opportunity-transaction-manage/sales-opportunity-transaction-manage.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityTransactionManageComponent: () => (/* binding */ SalesOpportunityTransactionManageComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var src_app_main_customization_ngrx_store_customization_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/main/customization/ngrx-store/customization.actions */ 93344);
/* harmony import */ var src_app_main_dashboard_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/dashboard/components/alerts/alerts.component */ 24047);
/* harmony import */ var _crm_competitors_crm_competitors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crm-competitors/crm-competitors.component */ 72418);
/* harmony import */ var _crm_customer_information_crm_customer_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crm-customer-information/crm-customer-information.component */ 76741);
/* harmony import */ var _crm_phases_crm_phases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crm-phases/crm-phases.component */ 39847);
/* harmony import */ var _crm_product_range_crm_product_range_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crm-product-range/crm-product-range.component */ 76374);
/* harmony import */ var _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constant/salesOpportunityTran.const */ 13117);
/* harmony import */ var src_app_main_customization_components_generic_custom_form_generic_custom_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/main/customization/components/generic-custom-form/generic-custom-form.component */ 79507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_main_customization_http_generic_custom_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/main/customization/http/generic-custom-form.service */ 32045);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../http/sales-opportunity-transaction.service */ 21129);
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/modal.service */ 82966);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 36270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/custom-lookup-modal/custom-lookup-modal.component */ 61554);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 57624);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_notes_notes_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shared/components/notes/notes.components */ 22022);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 21916);







































function SalesOpportunityTransactionManageComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-loader");
  }
}
function SalesOpportunityTransactionManageComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "li", 58)(1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_li_18_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r26);
      const x_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r25.bmlfonSwitchTab(x_r24.MenuItem_Name, x_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("id", x_r24.MenuItem_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", x_r24.ItemIcon == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵattribute"]("href", x_r24.ItemIcon, null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", x_r24.ItemIcon != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", x_r24.MenuItem_Name, " ");
  }
}
function SalesOpportunityTransactionManageComponent_div_23_span_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_span_37_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r28.bmlfUpdateHeader());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, "SALESOPPORTUNITYTRAN.EDITHEADER"));
  }
}
function SalesOpportunityTransactionManageComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "div")(4, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 68)(10, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 68)(17, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "div", 65)(26, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_Template_span_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r30.bmlfOnClickType("quotation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](28, "use", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_Template_span_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r32.bmlfOnClickType("samples"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](31, "use", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_Template_span_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r33.bmlfOnClickType("transaction"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](34, "use", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "span", 75)(36, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_Template_i_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r34.bmlfOpenNotesModal("Sales_Opp_Tran", ctx_r34.mobjHeaderData.OppNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, SalesOpportunityTransactionManageComponent_div_23_span_37_Template, 3, 3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_div_23_Template_span_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r35.bmlfViewHelpDoc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](40, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 12, "SALESOPPORTUNITYTRAN.OPPORTUNITYNO"), " : ", ctx_r2.mobjHeaderData.OppNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r2.mobjHeaderData.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](12, 14, "SALESOPPORTUNITYTRAN.STATUS"), " : ", ctx_r2.mobjHeaderData.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](15, 16, "SALESOPPORTUNITYTRAN.CLOSINGPER"), " : ", ctx_r2.mnumShowClosingPer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](19, 18, "SALESOPPORTUNITYTRAN.DATE"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](20, 20, ctx_r2.mobjHeaderData.EntryDate, ctx_r2.msCustomDateFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](23, 23, "SALESOPPORTUNITYTRAN.CLOSINGDATE"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](24, 25, ctx_r2.mobjHeaderData.ClosingDate, ctx_r2.msCustomDateFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.msTabType == "Customer & General Information");
  }
}
function SalesOpportunityTransactionManageComponent_h4_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r3.msScreenName, " ");
  }
}
function SalesOpportunityTransactionManageComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "app-crm-customer-information", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfShowHeaderEvnt", function SalesOpportunityTransactionManageComponent_div_26_Template_app_crm_customer_information_bmgfShowHeaderEvnt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r37.bmlfShowHeaderEvnt($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("msMode", ctx_r4.msMode)("mbShowHeader", ctx_r4.mbShowHeader)("msTrnKey", ctx_r4.msOppNo)("mnumClosingPer", ctx_r4.mnumClosingPer)("mnumPotentialAmt", ctx_r4.mnumPotentialAmt);
  }
}
function SalesOpportunityTransactionManageComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "app-crm-product-range", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfShowHeaderEvnt", function SalesOpportunityTransactionManageComponent_div_27_Template_app_crm_product_range_bmgfShowHeaderEvnt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r40.bmlfShowHeaderEvnt($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("msTrnKey", ctx_r5.msOppNo)("mbIsDisabled", ctx_r5.mbIsDisabled);
  }
}
function SalesOpportunityTransactionManageComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "app-crm-phases", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfShowHeaderEvnt", function SalesOpportunityTransactionManageComponent_div_28_Template_app_crm_phases_bmgfShowHeaderEvnt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r43.bmlfShowHeaderEvnt($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("msTrnKey", ctx_r6.msOppNo)("mnumPotentialAmt", ctx_r6.mnumPotentialAmt)("mbIsDisabled", ctx_r6.mbIsDisabled);
  }
}
function SalesOpportunityTransactionManageComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "app-crm-competitors", 85, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfShowHeaderEvnt", function SalesOpportunityTransactionManageComponent_div_29_Template_app_crm_competitors_bmgfShowHeaderEvnt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r46.bmlfShowHeaderEvnt($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("msTrnKey", ctx_r7.msOppNo)("mbIsDisabled", ctx_r7.mbIsDisabled);
  }
}
function SalesOpportunityTransactionManageComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-alerts", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("mobjAlertData", ctx_r8.mobjAlertData);
  }
}
function SalesOpportunityTransactionManageComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "app-generic-custom-form", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfShowHeaderEvnt", function SalesOpportunityTransactionManageComponent_div_31_Template_app_generic_custom_form_bmgfShowHeaderEvnt_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r50.bmlfShowHeaderEvnt($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("inputPrimaryKey", ctx_r9.mPrimaryKeyArray)("InputParaName", "Get");
  }
}
function SalesOpportunityTransactionManageComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 1, "SALESOPPORTUNITYTRAN.CREATEQUOTATION"));
  }
}
function SalesOpportunityTransactionManageComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r52.bmlfCopySalesOpportunityData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 1, "COMMON.COPY"), " ");
  }
}
const _c0 = function (a0) {
  return {
    "disabled_button": a0
  };
};
function SalesOpportunityTransactionManageComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r54.mbIsDisabled ? false : ctx_r54.bmlfSaveSalesOpportunityData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](4, _c0, ctx_r12.mbIsDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 2, "COMMON.SAVE"));
  }
}
function SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-dialog", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("close", function SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r56.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "kendo-dialog-actions")(10, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r58.bmlfOnConfirmModal("YES"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r57);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r59.bmlfOnConfirmModal("NO"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r57);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r60.bmlfOnConfirmModal("CANCEL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](5, 5, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](8, 7, "COMMON.MSG.ASKSAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](12, 9, "COMMON.YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](15, 11, "COMMON.NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](18, 13, "COMMON.CANCEL"));
  }
}
function SalesOpportunityTransactionManageComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 104)(1, "app-notes", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("bmgfCloseNotes", function SalesOpportunityTransactionManageComponent_div_40_Template_app_notes_bmgfCloseNotes_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r61.bmlfCloseNotesModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("keyName", ctx_r14.msNotesName)("keyValue", ctx_r14.msNotesValue);
  }
}
function SalesOpportunityTransactionManageComponent_app_custom_lookup_modal_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "app-custom-lookup-modal", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("saveLookupField", function SalesOpportunityTransactionManageComponent_app_custom_lookup_modal_41_Template_app_custom_lookup_modal_saveLookupField_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r63.bmlfSaveLookupField($event));
    })("closeLookup", function SalesOpportunityTransactionManageComponent_app_custom_lookup_modal_41_Template_app_custom_lookup_modal_closeLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r65.bmlfCloseLookupModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("keyData", ctx_r15.mobjLookupKeyData);
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_51_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r69 = ctx.dataItem;
    const item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 2, "SALESOPPORTUNITYTRAN." + item_r66.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", dataItem_r69[item_r66.Field], " ");
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_51_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_kendo_grid_column_51_2_ng_template_0_Template, 5, 4, "ng-template", 108);
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid-column", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, SalesOpportunityTransactionManageComponent_kendo_grid_column_51_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("field", item_r66.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 4, "SALESOPPORTUNITYTRAN." + item_r66.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r66.Type == "text");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r78 = ctx.dataItem;
    const item_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", dataItem_r78[item_r75.Field], " ");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_2_ng_template_0_Template, 2, 1, "ng-template", 108);
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid-column", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("field", item_r75.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 3, "SALESOPPORTUNITYTRAN." + item_r75.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r75.Type == "text");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, SalesOpportunityTransactionManageComponent_ng_template_52_kendo_grid_column_1_Template, 3, 5, "kendo-grid-column", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r72 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("data", dataItem_r72.SOQuotationDetails)("resizable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r18.marrQuotationDetailLineItemCol);
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_76_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r84 = ctx.dataItem;
    const item_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 2, "SALESOPPORTUNITYTRAN." + item_r81.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", dataItem_r84[item_r81.Field], " ");
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_76_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_kendo_grid_column_76_2_ng_template_0_Template, 5, 4, "ng-template", 108);
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid-column", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, SalesOpportunityTransactionManageComponent_kendo_grid_column_76_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("field", item_r81.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 4, "SALESOPPORTUNITYTRAN." + item_r81.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r81.Type == "text");
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_103_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r90 = ctx.dataItem;
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 2, "SALESOPPORTUNITYTRAN." + item_r87.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", dataItem_r90[item_r87.Field], " ");
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_103_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_kendo_grid_column_103_2_ng_template_0_Template, 5, 4, "ng-template", 108);
  }
}
function SalesOpportunityTransactionManageComponent_kendo_grid_column_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid-column", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, SalesOpportunityTransactionManageComponent_kendo_grid_column_103_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("field", item_r87.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 4, "SALESOPPORTUNITYTRAN." + item_r87.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r87.Type == "text");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r99 = ctx.dataItem;
    const item_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", dataItem_r99[item_r96.Field], " ");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_2_ng_template_0_Template, 2, 1, "ng-template", 108);
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid-column", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("field", item_r96.Field);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 3, "SALESOPPORTUNITYTRAN." + item_r96.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r96.Type == "text");
  }
}
function SalesOpportunityTransactionManageComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "kendo-grid", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, SalesOpportunityTransactionManageComponent_ng_template_104_kendo_grid_column_1_Template, 3, 5, "kendo-grid-column", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r93 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("data", dataItem_r93.SOInvoiceDetails)("resizable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r23.marrTransactionDetailCol);
  }
}
const _c1 = function (a0) {
  return {
    "btn-info": a0
  };
};
class SalesOpportunityTransactionManageComponent {
  get sidebarSize() {
    return this._sidebarSize;
  }
  set sidebarSize(newSize) {
    this._sidebarSize = newSize;
  }
  constructor(route, dateFormatService, utilService, router, toastMessageService, userFieldService, customService, lsService, formService, modalservice, store) {
    this.route = route;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.router = router;
    this.toastMessageService = toastMessageService;
    this.userFieldService = userFieldService;
    this.customService = customService;
    this.lsService = lsService;
    this.formService = formService;
    this.modalservice = modalservice;
    this.store = store;
    this._sidebarSize = '240px';
    this.msScreenName = "Sales Opportunity Transaction";
    this.mbIsLoading = false;
    this.msCustomDateFormat = "";
    this.msMode = "I";
    this.mbShowHeader = false;
    this.msTabType = "";
    this.msOppNo = "";
    this.mobjHeaderData = {};
    this.mbSaveDialogView = false;
    this.mbIsAddMode = false;
    this.mbIsCloseMode = false;
    this.mbIsSearchMode = false;
    this.mbIsCopyMode = false;
    this.mbIsDisabled = false;
    this.msTabChange = "";
    //public marrSampleReqList: any = [];
    this.marrSalesOpportunityTranMenu = [];
    // public marrSampleRequestMenu: any = [];
    this.mbIsNotesModal = false;
    this.msNotesName = "";
    this.msNotesValue = "";
    this.mPrimaryKeyArray = [];
    //public msReqNoForNextNo: string = "";
    this.mobjAlertData = {};
    this.mobjMenuData = {};
    this.mobjUserData = {};
    /**---Lookup realted field--- */
    this.mbIsLookupModal = false;
    this.mobjLookupKeyData = {};
    this.marrLookupGridData = [];
    this.msModalTitle = '';
    this.mnumLineItemRowIndex = -1;
    this.msLookupField = '';
    /**---END : Lookup realted field--- */
    this.mnumPotentialAmt = 0;
    this.mnumClosingPer = 0;
    this.mnumShowClosingPer = '0.00';
    this.mbIsCustomer = true;
    this.mbIsOpportunity = false;
    this.marrQuotationLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTranConstant.garrQuotationCol.map(ele => Object.assign({}, ele));
    this.marrQuotationDetailLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTranConstant.garrQuotationDetailCol.map(ele => Object.assign({}, ele));
    this.marrSampleLineItemCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTranConstant.garrSampleCol.map(ele => Object.assign({}, ele));
    this.marrTransactionCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTranConstant.garrTransactionCol.map(ele => Object.assign({}, ele));
    this.marrTransactionDetailCol = _constant_salesOpportunityTran_const__WEBPACK_IMPORTED_MODULE_8__.SalesOpportunityTranConstant.garrTransactionDetailCol.map(ele => Object.assign({}, ele));
    this.marrQuotationList = [];
    this.marrTransactionList = [];
    this.marrSamplingList = [];
    this.marrOriginalSamplingList = [];
    this.mnumNosTrans = 25;
  }
  ngOnInit() {
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    let psTrnNo = this.route.snapshot.queryParamMap.get('OppNo');
    this.bmlfGetSampleMenuList();
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(psTrnNo)) {
      this.msMode = "I";
      this.mbShowHeader = false;
      this.msOppNo = "";
      this.msTabType = "Customer & General Information";
    } else {
      this.msMode = "U";
      this.mbShowHeader = true;
      this.msOppNo = psTrnNo;
      this.bmlfGetPotentialAmtData();
    }
  }
  bmlfGetSampleMenuList() {
    this.marrSalesOpportunityTranMenu = [];
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "UserID": this.mobjUserData.UserId,
      "Group_Type": "CRM"
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityMenuList(psJson).subscribe(res => {
      if (res != null && res.ScreenPermission.length > 0) {
        let parrScreenPermission = res.ScreenPermission;
        if (res.Screen.length > 0) {
          let parrCRMScreen = res.Screen;
          parrCRMScreen.forEach(element => {
            let parrFilter = parrScreenPermission.filter(x => x.MenuItem_ID == element.MenuItem_ID);
            if (parrFilter.length > 0) {
              element.Permission = parrFilter[0].Permission;
              element.permission1 = parrFilter[0].permission1;
              this.marrSalesOpportunityTranMenu.push(element);
            }
          });
          this.msScreenName = this.marrSalesOpportunityTranMenu[0].MenuItem_Name;
          if (this.marrSalesOpportunityTranMenu[0].RoutingPath.includes("customization")) {
            this.msTabType = "customForm";
          }
        }
      }
    }).add(() => {});
  }
  bmlfonSwitchTab(value, data) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(this.msOppNo)) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSGSAVEFIRST'));
    } else {
      if (data.RoutingPath.includes("customization")) {
        value = "customForm";
      }
      if (this.msTabType != value || this.msTabType == value && this.msScreenName != data.MenuItem_Name) {
        let pbChangeData = false;
        pbChangeData = this.bmlfCheckMbChange();
        if (pbChangeData) {
          this.mbSaveDialogView = true;
          this.msTabChange = value;
          this.mobjMenuData = data;
        } else {
          this.bmlfSetTabData(value, data);
          this.msScreenName = data.MenuItem_Name;
        }
      }
    }
  }
  bmlfSetTabData(value, data) {
    if (value == "customForm") {
      localStorage.removeItem('Custom');
      this.bmlfGetCustomFormData(data.MenuItem_Name, value);
      this.msScreenName = this.mobjMenuData.MenuItem_Name;
    } else if (value == "Communication") {
      this.mobjAlertData.ScreenName = "Sales Opportunity Transaction";
      this.mobjAlertData.PrimaryKey = this.msOppNo;
      this.msTabType = value;
      this.msScreenName = this.mobjMenuData.MenuItem_Name;
    } else {
      this.msTabType = value;
      this.msScreenName = this.mobjMenuData.MenuItem_Name;
    }
  }
  bmlfInsertRecord() {
    let pbChangeData = false;
    pbChangeData = this.bmlfCheckMbChange();
    if (pbChangeData) {
      this.mbSaveDialogView = true;
      this.mbIsAddMode = true;
    } else {
      this.bmlfRefreshForm();
    }
  }
  bmlfUpdateHeader() {
    this.msMode = "U";
    this.mbShowHeader = false;
  }
  bmlfSearchRecord() {
    let pbChangeData = false;
    pbChangeData = this.bmlfCheckMbChange();
    if (pbChangeData) {
      this.mbSaveDialogView = true;
      this.mbIsSearchMode = true;
    } else {
      this.bmlfOpenLookupModal("SearchOpportunity", "Sales Opportunity Transaction", "SalesOpportunityList", "click", "", "custom", "cmdSearch", 'SALESOPPORTUNITYTRAN.TITLE');
    }
  }
  bmlfCopySalesOpportunityData() {
    if (this.msMode == "I") {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSGSAVEFIRST'));
      return;
    }
    let pbChangeData = false;
    pbChangeData = this.bmlfCheckMbChange();
    if (pbChangeData) {
      this.mbSaveDialogView = true;
      this.mbIsCopyMode = true;
    } else {
      this.bmlfCopyOppData();
    }
  }
  bmlfCopyOppData() {
    let HeaderData = Object.assign({}, this.mobjHeaderData);
    let parrCopyData = {
      HeaderData: HeaderData,
      CustomerData: this.custInfoComponent.mobjCustProsInfoModel,
      TrnKey: this.mobjHeaderData.OppNo
    };
    localStorage.setItem('copySalesOpportunityData', JSON.stringify(parrCopyData));
    this.bmlfRefreshForm();
  }
  bmlfSaveSalesOpportunityData(psType = "") {
    if (this.custInfoComponent != undefined) {
      this.custInfoComponent.bmlfSubmitForm(psType);
    }
    if (this.prdRangeComponent != undefined) {
      this.prdRangeComponent.bmlfSubmitForm(psType);
    }
    if (this.phasesComponent != undefined) {
      this.phasesComponent.bmlfSubmitForm(psType);
    }
    if (this.competitorsComponent != undefined) {
      this.competitorsComponent.bmlfSubmitForm(psType);
    }
    if (this.customFormComponent != undefined) {
      this.customFormComponent.bmlfonSaveMainFunction(psType);
    }
  }
  bmlfCloseSalesOpportunityTranData() {
    let pbChangeData = false;
    pbChangeData = this.bmlfCheckMbChange();
    if (pbChangeData) {
      this.mbSaveDialogView = true;
      this.mbIsCloseMode = true;
    } else {
      if (this.custInfoComponent != undefined) {
        this.custInfoComponent.bmlfCloseForm();
      }
      if (this.alertComponent != undefined) {
        this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
      }
      if (this.prdRangeComponent != undefined) {
        this.prdRangeComponent.bmlfCloseForm();
      }
      if (this.phasesComponent != undefined) {
        this.phasesComponent.bmlfCloseForm();
      }
      if (this.competitorsComponent != undefined) {
        this.competitorsComponent.bmlfCloseForm();
      }
      if (this.customFormComponent != undefined) {
        this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
      }
    }
  }
  bmlfCheckMbChange() {
    if (this.custInfoComponent != undefined) {
      return this.custInfoComponent.mbIsChangeData;
    }
    if (this.prdRangeComponent != undefined) {
      return this.prdRangeComponent.mbIsChangeData;
    }
    if (this.phasesComponent != undefined) {
      return this.phasesComponent.mbIsChangeData;
    }
    if (this.competitorsComponent != undefined) {
      return this.competitorsComponent.mbIsChangeData;
    }
    if (this.customFormComponent != undefined) {
      return this.customFormComponent.mbChange;
    }
  }
  bmlfSetMbChange() {
    if (this.custInfoComponent != undefined) {
      this.custInfoComponent.mbIsChangeData = false;
    }
  }
  bmlfOnConfirmModal(psype) {
    if (psype == 'YES') {
      if (this.mbIsAddMode) {
        this.bmlfSaveSalesOpportunityData("New");
      } else if (this.mbIsSearchMode) {
        this.bmlfSaveSalesOpportunityData("Search");
      } else if (this.msTabChange != "") {
        this.bmlfSaveSalesOpportunityData("TabChange");
      } else if (this.mbIsCloseMode) {
        this.bmlfSaveSalesOpportunityData("Close");
      } else if (this.mbIsCopyMode) {
        this.bmlfSaveSalesOpportunityData("Copy");
        this.mbIsCopyMode = false;
      }
      this.mbSaveDialogView = false;
    } else if (psype == 'NO') {
      this.mbSaveDialogView = false;
      if (this.mbIsAddMode) {
        this.mbIsAddMode = false;
        this.bmlfRefreshForm();
      } else if (this.mbIsSearchMode) {
        this.mbIsSearchMode = false;
        this.bmlfOpenLookupModal("SearchOpportunity", this.msScreenName, "SalesOpportunityList", "click", "", "custom", "cmdSearch", 'SALESOPPORTUNITYTRAN.TITLE');
      } else if (this.mbIsCopyMode) {
        this.mbIsCopyMode = false;
        this.bmlfCopyOppData();
      } else if (this.msTabChange != "") {
        this.bmlfSetTabData(this.msTabChange, this.mobjMenuData);
        //this.msTabType = this.msTabChange;
        this.msTabChange = "";
        this.mobjMenuData = {};
      } else {
        this.mbIsCloseMode = false;
        if (this.mbShowHeader == false && this.msMode == "U") {
          this.mbShowHeader = true;
          this.bmlfSetMbChange();
        } else {
          this.router.navigate(["/main/crm/sales-opportunity-transaction"]);
        }
      }
    } else {
      this.mbSaveDialogView = false;
      this.mbIsAddMode = false;
      this.mbIsCloseMode = false;
      this.msTabChange = "";
      this.mbIsSearchMode = false;
      this.mbIsCopyMode = false;
    }
  }
  bmlfRefreshForm() {
    this.utilService.bmgfRefreshReuse('/main/crm/sales-opportunity-transaction/manage', false);
  }
  bmlfShowHeaderEvnt(event) {
    if (event.type == "Close") {
      this.mbShowHeader = true;
    } else if (event.type == "Get") {
      this.mobjHeaderData = event.data;
      this.mbIsDisabled = this.mobjHeaderData.Status == "LOST" || this.mobjHeaderData.Status == "WON" ? true : false;
    } else if (event.type == "Save") {
      this.mobjHeaderData = event.data;
      this.msMode = "U";
      this.mbShowHeader = true;
      this.msOppNo = event.key;
      this.mbIsDisabled = this.mobjHeaderData.Status == "LOST" || this.mobjHeaderData.Status == "WON" ? true : false;
      if (this.mobjHeaderData.Status == "WON") {
        this.mnumClosingPer = 100;
        this.mnumShowClosingPer = this.utilService.bmgfSetPrecision(100, 2);
        //  }else if(this.mobjHeaderData.Status == "WON"){
        //   this.mnumClosingPer = 100;
        //   this.mnumShowClosingPer = this.utilService.bmgfSetPrecision(100, 2);
      }
    } else if (event.type == "New") {
      this.bmlfRefreshForm();
    } else if (event.type == "Search") {
      this.bmlfOpenLookupModal("SearchOpportunity", this.msScreenName, "SalesOpportunityList", "click", "", "custom", "cmdSearch", 'SALESOPPORTUNITYTRAN.TITLE');
    } else if (event.type == "TabChange") {
      this.bmlfSetTabData(this.msTabChange, this.mobjMenuData);
      this.msTabChange = "";
      this.mobjMenuData = {};
    } else if (event.type == "CalcPotentialAmt") {
      this.bmlfGetPotentialAmtData("Save");
    } else if (event.type == "GetClosingPer") {
      this.bmlfGetClosingPerData("Save");
    } else if (event.type == "ChangeStatus") {
      this.mobjHeaderData.Status = "LOST";
      this.mobjHeaderData.ClosingDate = new Date();
      this.mnumClosingPer = 0;
      this.mnumShowClosingPer = "0.00";
      this.mbIsDisabled = true;
    } else if (event.type == "Copy") {
      this.bmlfCopyOppData();
    }
  }
  /**--------------Get Custom Screen data----------------- */
  bmlfGetCustomFormData(psScreenName, value) {
    this.mbIsLoading = true;
    this.msTabType = "";
    this.customService.getCustomFormData(psScreenName, '').subscribe(res => {
      if (res != null) {
        this.mbIsLoading = false;
        if (res.Response[0].ErrorCode == '') {
          let psDbTableName = res.Response[0]['DbTableName'];
          if (res.HeaderSchema.length > 0) {
            this.mPrimaryKeyArray = [];
            res.HeaderSchema.forEach(data => {
              Object.keys(data).forEach(key => {
                if (key == 'PrimaryKey' && data[key] == true) {
                  this.mPrimaryKeyArray.push(data['ColumnName']);
                }
              });
            });
            let psParamJson = {};
            let psParamArray = [];
            for (var i = 0; i < this.mPrimaryKeyArray.length; i++) {
              if (this.mPrimaryKeyArray[i] == "OppNo") {
                psParamJson[this.mPrimaryKeyArray[i]] = this.mobjHeaderData.OppNo;
              }
            }
            psParamArray.push(psParamJson);
            localStorage.setItem('Custom', JSON.stringify({
              'parentscreenName': psScreenName,
              'tableName': psDbTableName,
              'paramArray': psParamArray
            }));
            this.store.dispatch(new src_app_main_customization_ngrx_store_customization_actions__WEBPACK_IMPORTED_MODULE_2__.LoadCustomizations(res));
            this.msTabType = value;
          }
        }
      } else {
        this.mbIsLoading = false;
      }
    });
  }
  /** ----START : NOTES FUNCTIONALITY--- */
  bmlfOpenNotesModal(psName, psValue) {
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidator.bmgfNullCheckValidator(psValue)) {
      this.mbIsNotesModal = true;
      this.msNotesName = psName;
      this.msNotesValue = psValue;
    } else {
      //Key cannot be empty
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.NOTES'));
    }
  }
  bmlfCloseNotesModal(pobjEvent) {
    this.mbIsNotesModal = pobjEvent.option;
  }
  /** ----END : NOTES FUNCTIONALITY--- */
  //Open LOOKUP MODAL
  bmlfOpenLookupModal(psField, psScreenName, psLookUpKey, psEvent, psValue, psType, psEleId, psTitle, piRowIdx = null) {
    this.marrLookupGridData = [];
    this.mobjLookupKeyData = {};
    if (psTitle != "") {
      this.mobjLookupKeyData.title = this.utilService.bmgfonTranslate(psTitle);
    } else {
      this.mobjLookupKeyData.title = psTitle;
    }
    let psLookup = psLookUpKey;
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: psLookup,
      Filter1: "",
      Filter2: "",
      Filter3: "",
      Filter4: "",
      Filter5: ""
    };
    this.utilService.bmgfOnKeyInputDisable();
    this.mbIsLoading = true;
    this.userFieldService.getLookupData(pobjReqData).subscribe(res => {
      this.utilService.bmgfOnKeyInputEnable();
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
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
                ele[key] = '';
              }
            }
          });
        });
        this.marrLookupGridData = res.LookupData;
        this.mobjLookupKeyData.field = psField;
        this.mobjLookupKeyData.gridData = this.marrLookupGridData;
        this.mobjLookupKeyData.type = psType;
        this.mobjLookupKeyData.eleId = psEleId;
        if (psValue) {
          this.mobjLookupKeyData.searchValue = psValue.toString();
        } else {
          this.mobjLookupKeyData.searchValue = '';
        }
        this.mbIsLookupModal = true;
      } else {
        this.mbIsLookupModal = false;
        this.mbIsLoading = false;
        this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('COMMON.MSG.NODATA'));
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  //Close LOOKUP MODAL
  bmlfCloseLookupModal(pobjData) {
    this.mbIsLookupModal = pobjData.isLookupModal;
  }
  bmlfSaveLookupField(pobjData) {
    this.mbIsLookupModal = false;
    this.mbIsLoading = false;
    let param = {
      OppNo: pobjData.value["SalesOppNo"]
    };
    this.utilService.bmgfRefreshReuse('/main/crm/sales-opportunity-transaction/manage', true, param);
  }
  bmlfGetPotentialAmtData(callFrom = "") {
    let pobjReqData = {
      ScreenName: 'Sales Opportunity Transaction',
      LookUpKey: 'GetPotentialamount',
      Filter1: this.msOppNo
    };
    this.mbIsLoading = true;
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.mnumPotentialAmt = Number(res.LookupData[0].Amount);
        if (callFrom == "") {
          this.bmlfGetClosingPerData();
        }
      } else {
        if (callFrom == "") {
          this.msTabType = "Customer & General Information";
        }
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  bmlfGetClosingPerData(callFrom = "") {
    let pobjReqData = {
      ScreenName: 'Sales Opportunity Transaction',
      LookUpKey: 'GetClosePercentage',
      Filter1: this.msOppNo
    };
    this.mbIsLoading = true;
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.mnumClosingPer = Number(res.LookupData[0].Percentage);
        this.mnumShowClosingPer = this.utilService.bmgfSetPrecision(this.mnumClosingPer, 2);
        if (callFrom == "") {
          this.msTabType = "Customer & General Information";
        }
      } else {
        if (callFrom == "") {
          this.msTabType = "Customer & General Information";
        }
      }
    }, err => {
      this.mbIsLoading = false;
      console.log(err);
    });
  }
  bmlfOnClickType(psId) {
    if (psId == "quotation") {
      this.bmlfGetQuotationData();
    } else if (psId == "transaction") {
      this.bmlfGetTransactionData();
    } else {
      this.bmlfGetSamplingData();
    }
    this.modalservice.open(psId);
  }
  bmlfChangeSampleFilter(value) {
    if (value == 'customer') {
      this.mbIsCustomer = true;
      this.mbIsOpportunity = false;
      this.marrSamplingList = this.marrOriginalSamplingList;
    }
    if (value == 'opportunity') {
      this.mbIsOpportunity = true;
      this.mbIsCustomer = false;
      let parrFilterData = this.marrOriginalSamplingList.filter(x => x.User4 != "");
      this.marrSamplingList = parrFilterData;
    }
  }
  bmlfOnCloseType(psId) {
    this.modalservice.close(psId);
  }
  bmlfGetQuotationData() {
    this.marrQuotationList = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "Quotation",
      "CustomerKey": this.mobjHeaderData.CusKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOppQuotationData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.length > 0) {
        let parrGridData = res;
        // parrGridData.forEach(ele => {
        //   ele.mode = "U";
        // });
        this.marrQuotationList = parrGridData;
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfGetSamplingData() {
    this.marrSamplingList = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "TransactionTabName": "Sampling",
      "OpportunityNo": this.mobjHeaderData.CusKey
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOpportunityData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.Sampling.length > 0) {
        let parrGridData = res.Sampling;
        parrGridData.forEach(ele => {
          ele.Date = ele.Date == null ? null : moment__WEBPACK_IMPORTED_MODULE_0__(ele.Date).format(this.msCustomDateFormat.toUpperCase());
          ele.Request_Date = ele.Request_Date == null ? null : moment__WEBPACK_IMPORTED_MODULE_0__(ele.Request_Date).format(this.msCustomDateFormat.toUpperCase());
          ele.Delivery_Date = ele.Delivery_Date == null ? null : moment__WEBPACK_IMPORTED_MODULE_0__(ele.Delivery_Date).format(this.msCustomDateFormat.toUpperCase());
        });
        this.marrOriginalSamplingList = parrGridData;
        this.marrSamplingList = parrGridData;
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfGetTransactionData() {
    this.marrTransactionList = [];
    this.mbIsLoading = true;
    let pobjOData = {
      HeaderData: [],
      Response: []
    };
    pobjOData.HeaderData.push({
      "CustomerKey": this.mobjHeaderData.CusKey,
      "Limit": this.mnumNosTrans,
      "Type": ""
    });
    pobjOData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let psJData = JSON.stringify(pobjOData);
    let psTempjData = JSON.stringify(psJData);
    let psJson = '{"JSON":' + psTempjData + '}';
    this.formService.bmlfGetSalesOppInvoicesData(psJson).subscribe(res => {
      this.mbIsLoading = false;
      if (res != null && res.length > 0) {
        let parrGridData = res;
        this.marrTransactionList = parrGridData;
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Sales Opportunity Transaction.pdf', '_blank');
  }
  static #_ = this.ɵfac = function SalesOpportunityTransactionManageComponent_Factory(t) {
    return new (t || SalesOpportunityTransactionManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_10__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_11__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_12__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_13__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_main_customization_http_generic_custom_form_service__WEBPACK_IMPORTED_MODULE_14__.CustomUserFormService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_http_sales_opportunity_transaction_service__WEBPACK_IMPORTED_MODULE_16__.SalesOpportunityTransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_17__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_24__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
    type: SalesOpportunityTransactionManageComponent,
    selectors: [["app-sales-opportunity-transaction-manage"]],
    viewQuery: function SalesOpportunityTransactionManageComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_crm_customer_information_crm_customer_information_component__WEBPACK_IMPORTED_MODULE_5__.CrmCustomerInformationComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_crm_product_range_crm_product_range_component__WEBPACK_IMPORTED_MODULE_7__.CrmProductRangeComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_crm_phases_crm_phases_component__WEBPACK_IMPORTED_MODULE_6__.CrmPhasesComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](src_app_main_dashboard_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__.AlertsComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_crm_competitors_crm_competitors_component__WEBPACK_IMPORTED_MODULE_4__.CrmCompetitorsComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](src_app_main_customization_components_generic_custom_form_generic_custom_form_component__WEBPACK_IMPORTED_MODULE_9__.GenericCustomFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.custInfoComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.prdRangeComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.phasesComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.alertComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.competitorsComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.customFormComponent = _t.first);
      }
    },
    decls: 109,
    vars: 96,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", "trans-modal", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "container-fluid"], [1, "row"], ["orientation", "horizontal"], ["max", "420px", 3, "collapsible", "size", "sizeChange"], [1, "link-box"], [1, "top-head"], ["id", "cmdInsert", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["id", "cmdSearch", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "middle-links"], [1, "main-nav"], [1, "links"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item", "blank"], [1, "clearfix"], [1, "row", 2, "width", "100%"], ["class", "col-md-12 header-block", 4, "ngIf"], [1, "col-md-12", "center-block", 3, "ngClass"], ["class", "sub_title p_h_15 collapsed", "style", "padding: 10px 0px 0px 10px;", 4, "ngIf"], [1, "col-md-12", "footer-block", "d-flex", "justify-content-center"], ["type", "button", "class", "btn btn-info btn-sm", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm ml-1 ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm ml-1 ", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "ml-1", "btn-sm", 3, "click"], ["id", "saveDailogBox", "style", "z-index: 10000000;", 3, "close", 4, "ngIf"], ["id", "divNotes", "style", "position: relative; z-index: 10000000;", 4, "ngIf"], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup", 4, "ngIf"], ["id", "quotation", 3, "modaltitle", "indexValue", "widthClass"], [1, "bodyContent", "form-container"], [1, "row", "rowheight100p"], ["id", "kendodiv", 1, "col-md-12", "height100p", "form-container"], ["id", "dtLineGrid1", 1, "max_scroll", "low_space_table", "responsive_grid", "gridloading", "full-height-grid", "quotation-grid", 3, "kendoGridBinding", "resizable"], ["grid", "kendoGrid"], [3, "noRecords"], [3, "field", "title", "width", 4, "ngFor", "ngForOf"], ["kendoGridDetailTemplate", ""], [1, "footerContent"], ["type", "button", "id", "btnItemClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["id", "samples", 3, "modaltitle", "indexValue", "widthClass"], [1, "col-md-12", "col-12"], [1, "left-action-button"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "ngClass", "click"], ["id", "dtLineGrid1", 1, "custom_h_grid", "max_scroll", "low_space_table", "responsive_grid", "gridloading", "full-height-grid", "quotation-grid", 3, "kendoGridBinding", "resizable"], ["id", "transaction", 3, "modaltitle", "indexValue", "widthClass"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-md-4"], [1, "col-form-label"], [1, "col-md-6", "col-md-6", "ml-0", "pl-0", "pr-0"], ["name", "noOfTrans", "id", "noOfTrans", 3, "spinners", "step", "ngModel", "min", "max", "autoCorrect", "decimals", "format", "ngModelChange"], [1, "col-md-2", "pl-1"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["id", "dtLineGrid3", 1, "max_scroll", "low_space_table", "responsive_grid", "gridloading", "full-height-grid", "quotation-grid", 3, "kendoGridBinding", "resizable"], [1, "nav-item"], [1, "nav-link", 3, "id", "click"], [1, "nav-link-sp", 3, "hidden"], ["viewBox", "0 0 256 256", 1, "sp-icon", "icon"], ["aria-hidden", "true", 1, "fa", "fa-address-card"], [1, "col-md-12", "header-block"], [1, "header-top"], [1, "d-flex"], [1, "font-bold"], [1, "mb-0"], [1, "d-flex", "flex-column"], ["title", "Quotation", 1, "right-icon", 3, "click"], ["href", "#partnersIcon"], ["title", "Samples", 1, "right-icon", 3, "click"], ["href", "#newProductDevelopment"], ["title", "Transaction", 1, "right-icon", 3, "click"], ["href", "#capitalProject"], ["title", "Notes", 1, "right-icon"], ["aria-hidden", "true", 1, "fa", "fa-file-o", 3, "click"], ["class", "right-icon", 3, "title", "click", 4, "ngIf"], ["title", "Help", 1, "right-icon", 3, "click"], [2, "font-size", "21px"], [1, "right-icon", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], [1, "sub_title", "p_h_15", "collapsed", 2, "padding", "10px 0px 0px 10px"], [3, "msMode", "mbShowHeader", "msTrnKey", "mnumClosingPer", "mnumPotentialAmt", "bmgfShowHeaderEvnt"], ["custInfoComponent", ""], [3, "msTrnKey", "mbIsDisabled", "bmgfShowHeaderEvnt"], ["prdRangeComponent", ""], [3, "msTrnKey", "mnumPotentialAmt", "mbIsDisabled", "bmgfShowHeaderEvnt"], ["phasesComponent", ""], ["competitorsComponent", ""], [3, "mobjAlertData"], ["alertComponent", ""], [3, "inputPrimaryKey", "InputParaName", "bmgfShowHeaderEvnt"], ["customFormComponent", ""], ["type", "button", 1, "btn", "btn-info", "btn-sm"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "ml-1", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "ml-1", 3, "ngClass", "click"], ["id", "saveDailogBox", 2, "z-index", "10000000", 3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdConfirmYes", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdConfirmNo", "primary", "true", 3, "click"], ["kendoButton", "", "id", "cmdCancelLineItemAction", 3, "click"], ["id", "divNotes", 2, "position", "relative", "z-index", "10000000"], [3, "keyName", "keyValue", "bmgfCloseNotes"], ["id", "custom-lookup", 3, "keyData", "saveLookupField", "closeLookup"], [3, "field", "title", "width"], ["kendoGridCellTemplate", ""], [1, "mob-label"], [1, "form-group", "custom-inline-input"], [1, "low_space_table", 3, "data", "resizable"], [3, "field", "title", 4, "ngFor", "ngForOf"], [3, "field", "title"]],
    template: function SalesOpportunityTransactionManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, SalesOpportunityTransactionManageComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "kendo-splitter", 5)(6, "kendo-splitter-pane", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("sizeChange", function SalesOpportunityTransactionManageComponent_Template_kendo_splitter_pane_sizeChange_6_listener($event) {
          return ctx.sidebarSize = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_a_click_9_listener() {
          return ctx.bmlfInsertRecord();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_a_click_12_listener() {
          return ctx.bmlfSearchRecord();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 13)(16, "nav", 14)(17, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, SalesOpportunityTransactionManageComponent_li_18_Template, 8, 5, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "kendo-splitter-pane")(22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, SalesOpportunityTransactionManageComponent_div_23_Template, 41, 28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, SalesOpportunityTransactionManageComponent_h4_25_Template, 2, 1, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, SalesOpportunityTransactionManageComponent_div_26_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, SalesOpportunityTransactionManageComponent_div_27_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, SalesOpportunityTransactionManageComponent_div_28_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, SalesOpportunityTransactionManageComponent_div_29_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, SalesOpportunityTransactionManageComponent_div_30_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, SalesOpportunityTransactionManageComponent_div_31_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](33, SalesOpportunityTransactionManageComponent_button_33_Template, 3, 3, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](34, SalesOpportunityTransactionManageComponent_button_34_Template, 3, 3, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](35, SalesOpportunityTransactionManageComponent_button_35_Template, 3, 6, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_36_listener() {
          return ctx.bmlfCloseSalesOpportunityTranData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](39, SalesOpportunityTransactionManageComponent_kendo_dialog_39_Template, 19, 15, "kendo-dialog", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, SalesOpportunityTransactionManageComponent_div_40_Template, 2, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, SalesOpportunityTransactionManageComponent_app_custom_lookup_modal_41_Template, 1, 1, "app-custom-lookup-modal", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "bm-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 32)(45, "div", 33)(46, "div", 34)(47, "kendo-grid", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](49, "kendo-grid-messages", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](51, SalesOpportunityTransactionManageComponent_kendo_grid_column_51_Template, 3, 6, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](52, SalesOpportunityTransactionManageComponent_ng_template_52_Template, 2, 3, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "div", 40)(54, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_54_listener() {
          return ctx.bmlfOnCloseType("quotation");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "bm-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "div", 32)(60, "div", 4)(61, "div", 43)(62, "div", 44)(63, "div", 45)(64, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_64_listener() {
          return ctx.bmlfChangeSampleFilter("customer");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](67, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_67_listener() {
          return ctx.bmlfChangeSampleFilter("opportunity");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "div", 33)(71, "div", 34)(72, "kendo-grid", 47, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](74, "kendo-grid-messages", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](76, SalesOpportunityTransactionManageComponent_kendo_grid_column_76_Template, 3, 6, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](77, "div", 40)(78, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_78_listener() {
          return ctx.bmlfOnCloseType("samples");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](81, "bm-modal", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](83, "div", 32)(84, "div", 4)(85, "div", 49)(86, "div", 50)(87, "div", 51)(88, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](91, "div", 53)(92, "kendo-numerictextbox", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function SalesOpportunityTransactionManageComponent_Template_kendo_numerictextbox_ngModelChange_92_listener($event) {
          return ctx.mnumNosTrans = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](93, "div", 55)(94, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_94_listener() {
          return ctx.bmlfGetTransactionData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](97, "div", 33)(98, "div", 34)(99, "kendo-grid", 57, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](101, "kendo-grid-messages", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](103, SalesOpportunityTransactionManageComponent_kendo_grid_column_103_Template, 3, 6, "kendo-grid-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](104, SalesOpportunityTransactionManageComponent_ng_template_104_Template, 2, 3, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](105, "div", 40)(106, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function SalesOpportunityTransactionManageComponent_Template_button_click_106_listener() {
          return ctx.bmlfOnCloseType("transaction");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("collapsible", true)("size", ctx.sidebarSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](10, 60, "COMMON.INSERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](13, 62, "COMMON.SEARCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.marrSalesOpportunityTranMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mbShowHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", ctx.mbShowHeader ? "center-block-header" : "center-block-noheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType != "Customer & General Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Customer & General Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Product Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Phases");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Competitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "customForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Product Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType == "Customer & General Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.msTabType != "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](38, 64, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mbSaveDialogView);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mbIsNotesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mbIsLookupModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("modaltitle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](43, 66, "SALESOPPORTUNITYTRAN.QUOTATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("indexValue", 999999)("widthClass", "width900");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("kendoGridBinding", ctx.marrQuotationList)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](50, 68, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.marrQuotationLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](56, 70, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("modaltitle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](58, 72, "SALESOPPORTUNITYTRAN.SAMPLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("indexValue", 999999)("widthClass", "width900");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](92, _c1, ctx.mbIsCustomer));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](66, 74, "SALESOPPORTUNITYTRAN.CUSTOMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](94, _c1, ctx.mbIsOpportunity));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](69, 76, "SALESOPPORTUNITYTRAN.OPPORTUNITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("kendoGridBinding", ctx.marrSamplingList)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](75, 78, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.marrSampleLineItemCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](80, 80, "COMMON.CLOSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("modaltitle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](82, 82, "SALESOPPORTUNITYTRAN.TRANSACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("indexValue", 999999)("widthClass", "width900");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](90, 84, "SALESOPPORTUNITYTRAN.NOOFTRANSACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx.mnumNosTrans)("min", 0)("max", 9999999)("autoCorrect", true)("decimals", "0")("format", "n0");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](96, 86, "SALESOPPORTUNITYTRAN.REFRESH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("kendoGridBinding", ctx.marrTransactionList)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](102, 88, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.marrTransactionCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](108, 90, "COMMON.CLOSE"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _shared_components_custom_lookup_modal_custom_lookup_modal_component__WEBPACK_IMPORTED_MODULE_18__.CustomLookupModalComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__.ModalComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_20__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_26__.NumericTextBoxComponent, _shared_components_notes_notes_components__WEBPACK_IMPORTED_MODULE_21__.NotesComponent, src_app_main_customization_components_generic_custom_form_generic_custom_form_component__WEBPACK_IMPORTED_MODULE_9__.GenericCustomFormComponent, src_app_main_dashboard_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__.AlertsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_28__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_29__.ButtonComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.DataBindingDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.DetailTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_30__.CellTemplateDirective, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_31__.SplitterComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_31__.SplitterPaneComponent, _crm_customer_information_crm_customer_information_component__WEBPACK_IMPORTED_MODULE_5__.CrmCustomerInformationComponent, _crm_product_range_crm_product_range_component__WEBPACK_IMPORTED_MODULE_7__.CrmProductRangeComponent, _crm_phases_crm_phases_component__WEBPACK_IMPORTED_MODULE_6__.CrmPhasesComponent, _crm_competitors_crm_competitors_component__WEBPACK_IMPORTED_MODULE_4__.CrmCompetitorsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe],
    styles: [".trans-modal[_ngcontent-%COMP%] {\n  background: #fffcfa;\n  z-index: 99999;\n  overflow: hidden;\n}\n.trans-modal[_ngcontent-%COMP%]   .top-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 0 10px !important;\n  background-color: #FFF;\n}\n.trans-modal[_ngcontent-%COMP%]   .top-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 7px !important;\n  display: block;\n  color: #183153;\n  cursor: pointer;\n}\n.trans-modal[_ngcontent-%COMP%]   .top-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  background-color: #FFF;\n  border-right: 1px solid #e7e7e7;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 !important;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 15px !important;\n  display: block;\n  color: #183153;\n  font-weight: 600;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #e9e9e9;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .blank[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .nav-link-sp[_ngcontent-%COMP%] {\n  margin-right: 1px;\n  font-size: 15px;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .link-el[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(100% - 50px);\n  top: 11px;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .drop-link[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  width: 69%;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.trans-modal[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .middle-links[_ngcontent-%COMP%]   .sam-menu[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.trans-modal[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  padding: 16px 20px 10px 20px;\n  top: 0;\n}\n.trans-modal[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: inline-block;\n  margin-right: 20px;\n}\n.trans-modal[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 36px;\n  text-align: center;\n  border: 1px solid #ccc;\n  font-size: 20px;\n  cursor: pointer;\n}\n.trans-modal[_ngcontent-%COMP%]   .center-block[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.trans-modal[_ngcontent-%COMP%]   .center-block-header[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 125px);\n  height: calc(100vh - 115px);\n}\n@media (max-width: 1200px) {\n  .trans-modal[_ngcontent-%COMP%]   .center-block-header[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 166px);\n  }\n}\n.trans-modal[_ngcontent-%COMP%]   .center-block-noheader[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 50px);\n  height: calc(100vh - 40px);\n}\n.trans-modal[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  background: #374359;\n  padding: 10px 0 !important;\n  bottom: 0;\n}\n.trans-modal[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f3f3;\n  background-color: #FFF;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  overflow: hidden;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  background: #EEEEEE;\n  color: #374359;\n}\n\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #0084c5 !important;\n  border-color: #0084c5 !important;\n  color: #FFF !important;\n}\n\n@media (min-width: 767px) {\n    .quotation-grid {\n    height: calc(100vh - 80px) !important;\n  }\n}\n\n  .quotation-grid {\n  height: calc(100vh - 200px) !important;\n}\n\n  .quotation-grid .k-grid-container {\n  max-height: calc(100vh - 120px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy9zYWxlcy1vcHBwb3J0dW5pdHktdHJhbnNhY3Rpb24vc2FsZXMtb3Bwb3J0dW5pdHktdHJhbnNhY3Rpb24tbWFuYWdlL3NhbGVzLW9wcG9ydHVuaXR5LXRyYW5zYWN0aW9uLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL05ldyUyMFdvcmtpbmcxNi9CTUVXRUJVSS9CTUVXRUIxMS9CTUVXRUIxMS9zcmMvYXBwL21haW4vY3JtL2NvbXBvbmVudHMvc2FsZXMtb3BwcG9ydHVuaXR5LXRyYW5zYWN0aW9uL3NhbGVzLW9wcG9ydHVuaXR5LXRyYW5zYWN0aW9uLW1hbmFnZS9zYWxlcy1vcHBvcnR1bml0eS10cmFuc2FjdGlvbi1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0NSO0FEQVE7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VaO0FERFk7RUFDSSxlQUFBO0FDR2hCO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUNDUjtBREVnQjtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNBcEI7QURHd0I7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNENUI7QURFNEI7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNBaEM7QURJb0I7RUFDSSxZQUFBO0FDRnhCO0FES2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDSHBCO0FES2dCO0VBQ0ksZUFBQTtBQ0hwQjtBREtnQjtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDSHBCO0FES2dCO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0FDSHBCO0FETVk7RUFDSSxxQkFBQTtBQ0poQjtBRE1ZO0VBQ0kscUJBQUE7QUNKaEI7QURXSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBRUEsNEJBQUE7RUFDQSxNQUFBO0FDVlI7QURXUTtFQUNRLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEV1E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1RaO0FEWUk7RUFDQSxjQUFBO0FDVko7QURZSTtFQUNJLCtCQUFBO0VBQ0EsMkJBQUE7QUNWUjtBRFdRO0VBSEo7SUFJUSwrQkFBQTtFQ1JWO0FBQ0Y7QURVSTtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUNSUjtBRFVJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUNSUjtBRFVJO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtBQ1JSOztBRFlBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEVUk7RUFDSSwyQkFBQTtBQ1JSO0FEU1E7RUFDSSxnQkFBQTtBQ1BaOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDUko7O0FEVUE7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVSTtFQURKO0lBRVEscUNBQUE7RUNOTjtBQUNGOztBRFNBO0VBQ0ksc0NBQUE7QUNOSjs7QURRQTtFQUNJLDBDQUFBO0FDTEoiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnMtbW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmY2ZhO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC50b3AtaGVhZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTgzMTUzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC5mYXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saW5rLWJveHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAubWlkZGxlLWxpbmtze1xyXG4gICAgICAgICAgICAubWFpbi1uYXZ7XHJcbiAgICAgICAgICAgICAgICAubGlua3N7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgzMTUzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJsYW5re1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1saW5rLXNwe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluay1lbHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3AtbGlua3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNhbS1tZW51e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcblxyXG4gICAgLmhlYWRlci10b3B7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jZW50ZXItYmxvY2t7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5jZW50ZXItYmxvY2staGVhZGVye1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjVweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE1cHgpO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLWJsb2NrLW5vaGVhZGVye1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxuICAgIH1cclxuICAgIC5mb290ZXItYmxvY2t7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM3NDM1OTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWJsb2Nre1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZ3JvdXB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIGNvbG9yOiAjMzc0MzU5O1xyXG59XHJcbi5idG4taW5mb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0YzUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwODRjNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnF1b3RhdGlvbi1ncmlke1xyXG4gICAgQG1lZGlhKG1pbi13aWR0aDo3NjdweCl7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5xdW90YXRpb24tZ3JpZHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAucXVvdGF0aW9uLWdyaWQgLmstZ3JpZC1jb250YWluZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpICFpbXBvcnRhbnQ7XHJcbn0iLCIudHJhbnMtbW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmY2ZhO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50cmFucy1tb2RhbCAudG9wLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi50cmFucy1tb2RhbCAudG9wLWhlYWQgYSB7XG4gIHBhZGRpbmc6IDEwcHggN3B4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzE4MzE1MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRyYW5zLW1vZGFsIC50b3AtaGVhZCBhIC5mYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50cmFucy1tb2RhbCAubGluay1ib3gge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTdlNztcbn1cbi50cmFucy1tb2RhbCAubGluay1ib3ggLm1pZGRsZS1saW5rcyAubWFpbi1uYXYgLmxpbmtzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLnRyYW5zLW1vZGFsIC5saW5rLWJveCAubWlkZGxlLWxpbmtzIC5tYWluLW5hdiAubGlua3MgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMxODMxNTM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udHJhbnMtbW9kYWwgLmxpbmstYm94IC5taWRkbGUtbGlua3MgLm1haW4tbmF2IC5saW5rcyBsaSBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuLnRyYW5zLW1vZGFsIC5saW5rLWJveCAubWlkZGxlLWxpbmtzIC5tYWluLW5hdiAubGlua3MgLmJsYW5rIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnRyYW5zLW1vZGFsIC5saW5rLWJveCAubWlkZGxlLWxpbmtzIC5tYWluLW5hdiAubmF2LWxpbmstc3Age1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRyYW5zLW1vZGFsIC5saW5rLWJveCAubWlkZGxlLWxpbmtzIC5tYWluLW5hdiAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4udHJhbnMtbW9kYWwgLmxpbmstYm94IC5taWRkbGUtbGlua3MgLm1haW4tbmF2IC5saW5rLWVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgdG9wOiAxMXB4O1xufVxuLnRyYW5zLW1vZGFsIC5saW5rLWJveCAubWlkZGxlLWxpbmtzIC5tYWluLW5hdiAuZHJvcC1saW5rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgd2lkdGg6IDY5JTtcbn1cbi50cmFucy1tb2RhbCAubGluay1ib3ggLm1pZGRsZS1saW5rcyAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi50cmFucy1tb2RhbCAubGluay1ib3ggLm1pZGRsZS1saW5rcyAuc2FtLW1lbnUge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4udHJhbnMtbW9kYWwgLmhlYWRlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweCAyMHB4IDEwcHggMjBweDtcbiAgdG9wOiAwO1xufVxuLnRyYW5zLW1vZGFsIC5oZWFkZXItdG9wIC5sb2dvIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi50cmFucy1tb2RhbCAuaGVhZGVyLXRvcCAucmlnaHQtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50cmFucy1tb2RhbCAuY2VudGVyLWJsb2NrIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4udHJhbnMtbW9kYWwgLmNlbnRlci1ibG9jay1oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50cmFucy1tb2RhbCAuY2VudGVyLWJsb2NrLWhlYWRlciB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KTtcbiAgfVxufVxuLnRyYW5zLW1vZGFsIC5jZW50ZXItYmxvY2stbm9oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xufVxuLnRyYW5zLW1vZGFsIC5mb290ZXItYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjMzc0MzU5O1xuICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwO1xufVxuLnRyYW5zLW1vZGFsIC5oZWFkZXItYmxvY2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ0bi1ncm91cCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLmJ0bi1ncm91cCAuYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZpbHRlci1idG4ge1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICBjb2xvcjogIzM3NDM1OTtcbn1cblxuLmJ0bi1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRjNSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDg0YzUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIDo6bmctZGVlcCAucXVvdGF0aW9uLWdyaWQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5xdW90YXRpb24tZ3JpZCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnF1b3RhdGlvbi1ncmlkIC5rLWdyaWQtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 16635:
/*!******************************************************************************************************!*\
  !*** ./src/app/main/crm/components/transfer-approved-samples/transfer-approved-samples.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferApprovedSamplesComponent: () => (/* binding */ TransferApprovedSamplesComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/common.const */ 21884);
/* harmony import */ var src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/basegrid */ 92867);
/* harmony import */ var _constant_transfer_approved_samples_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/transfer-approved-samples.const */ 42095);
/* harmony import */ var _models_transfer_approved_sample_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/transfer-approved-sample.modal */ 61704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var _http_transfer_approved_samples_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/transfer-approved-samples.service */ 48925);
/* harmony import */ var src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/http/lookup.service */ 10961);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 99185);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 2936);
/* harmony import */ var _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/common-task-modal/common-task-modal.component */ 87923);
/* harmony import */ var _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/how-to-video/how-to-video.component */ 9165);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 21916);






















const _c0 = ["custom"];
const _c1 = ["FieldExtender"];
function TransferApprovedSamplesComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-loader");
  }
}
function TransferApprovedSamplesComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function TransferApprovedSamplesComponent_ng_template_42_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r7.selectAllRows($event));
    })("ngModelChange", function TransferApprovedSamplesComponent_ng_template_42_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.allRowsSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r1.allRowsSelected);
  }
}
function TransferApprovedSamplesComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_ng_template_43_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const dataItem_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](dataItem_r10.Select = $event);
    })("change", function TransferApprovedSamplesComponent_ng_template_43_Template_input_change_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const rowIndex_r11 = restoredCtx.rowIndex;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.selectSingleRow($event, rowIndex_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataItem_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("name", "checked_", rowIndex_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", dataItem_r10.Select);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_2_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38);
      const rowIndex_r36 = restoredCtx.rowIndex;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.gridDataList[rowIndex_r36].SMRequestNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r36 = ctx.rowIndex;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r36 + "txtSMReqNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r34.gridDataList[rowIndex_r36].SMRequestNo);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_2_ng_template_0_Template, 2, 3, "ng-template", 40);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_3_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r43);
      const rowIndex_r41 = restoredCtx.rowIndex;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r42.gridDataList[rowIndex_r41].SMTransactionNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r41 = ctx.rowIndex;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r41 + "txtSMTransNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r39.gridDataList[rowIndex_r41].SMTransactionNo);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_3_ng_template_0_Template, 2, 3, "ng-template", 40);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_4_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48);
      const rowIndex_r46 = restoredCtx.rowIndex;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r47.gridDataList[rowIndex_r46].opportunityno = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r46 = ctx.rowIndex;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r46 + "txtSMOpprtNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r44.gridDataList[rowIndex_r46].opportunityno);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_4_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_5_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);
      const rowIndex_r51 = restoredCtx.rowIndex;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r52.gridDataList[rowIndex_r51].smStatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r51 = ctx.rowIndex;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r51 + "txtSMStatusNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r49.gridDataList[rowIndex_r51].smStatus);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_5_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_6_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const rowIndex_r56 = restoredCtx.rowIndex;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r57.gridDataList[rowIndex_r56].smSampleDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r56 = ctx.rowIndex;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r56 + "txtSMDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r54.gridDataList[rowIndex_r56].smSampleDescription);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_6_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_7_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63);
      const rowIndex_r61 = restoredCtx.rowIndex;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r62.gridDataList[rowIndex_r61].smSpecialInstruction = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_kendo_grid_column_44_7_ng_template_0_Template_span_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63);
      const rowIndex_r61 = restoredCtx.rowIndex;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r64.bmlfInstructModal(ctx_r64.gridDataList[rowIndex_r61].smSpecialInstruction, "open"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r61 = ctx.rowIndex;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r61 + "txtSMSpeclInstrucNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r59.gridDataList[rowIndex_r61].smSpecialInstruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "txtSMSpeclInstrucNo", rowIndex_r61, "");
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_7_ng_template_0_Template, 4, 4, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_8_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r69);
      const rowIndex_r67 = restoredCtx.rowIndex;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r68.gridDataList[rowIndex_r67].smAnticipatedSalesVolume = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r67 = ctx.rowIndex;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r67 + "txtSMAntiSalVol");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r65.gridDataList[rowIndex_r67].smAnticipatedSalesVolume);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_8_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_9_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      const rowIndex_r72 = restoredCtx.rowIndex;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r73.gridDataList[rowIndex_r72].smSampleSizeUOM = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r72 = ctx.rowIndex;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r72 + "txtSMUOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r70.gridDataList[rowIndex_r72].smSampleSizeUOM);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_9_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "kendo-numerictextbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_10_ng_template_0_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const rowIndex_r77 = restoredCtx.rowIndex;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r78.gridDataList[rowIndex_r77].smTargetPrice = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r77 = ctx.rowIndex;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r77 + "txtSMTargPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("name", "txtSMTargPrice", rowIndex_r77, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r75.gridDataList[rowIndex_r77].smTargetPrice)("min", 0)("autoCorrect", ctx_r75.autoCorrect)("decimals", ctx_r75.miPricePrecision)("format", ctx_r75.miPricePrecisionFormat)("disabled", true);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_10_ng_template_0_Template, 2, 10, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "kendo-numerictextbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_11_ng_template_0_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r84);
      const rowIndex_r82 = restoredCtx.rowIndex;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r83.gridDataList[rowIndex_r82].smCurrentPrice = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r82 = ctx.rowIndex;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r82 + "txtSMCurrntPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("name", "txtSMCurrntPrice", rowIndex_r82, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r80.gridDataList[rowIndex_r82].smCurrentPrice)("min", 0)("autoCorrect", ctx_r80.autoCorrect)("decimals", ctx_r80.miPricePrecision)("format", ctx_r80.miPricePrecisionFormat)("disabled", true);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_11_ng_template_0_Template, 2, 10, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "kendo-numerictextbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_12_ng_template_0_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89);
      const rowIndex_r87 = restoredCtx.rowIndex;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r88.gridDataList[rowIndex_r87].smSampleSize = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r87 = ctx.rowIndex;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("id", "txt", item_r15.field, "", rowIndex_r87, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spinners", false)("step", 0)("name", rowIndex_r87 + "_" + item_r15.field)("ngModel", ctx_r85.gridDataList[rowIndex_r87].smSampleSize)("min", 0)("autoCorrect", ctx_r85.autoCorrect)("decimals", ctx_r85.miQtyPrecision)("format", ctx_r85.miQtyPrecisionFormat)("disabled", true);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_12_ng_template_0_Template, 2, 11, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_13_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r95);
      const rowIndex_r93 = restoredCtx.rowIndex;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r94.gridDataList[rowIndex_r93].smTimeRequired = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r93 = ctx.rowIndex;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r93 + "txtSMTimeReq");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r91.gridDataList[rowIndex_r93].smTimeRequired);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_13_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "kendo-numerictextbox", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_14_ng_template_0_Template_kendo_numerictextbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const rowIndex_r98 = restoredCtx.rowIndex;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r99.gridDataList[rowIndex_r98].smSamplePices = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r98 = ctx.rowIndex;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r98 + "txtSMTimeReq");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spinners", false)("step", 0)("ngModel", ctx_r96.gridDataList[rowIndex_r98].smSamplePices)("autoCorrect", ctx_r96.autoCorrect)("decimals", ctx_r96.miQtyPrecision)("format", ctx_r96.miQtyPrecisionFormat)("disabled", true);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_14_ng_template_0_Template, 2, 8, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_15_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_15_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105);
      const rowIndex_r103 = restoredCtx.rowIndex;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r104.gridDataList[rowIndex_r103].LotNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r103 = ctx.rowIndex;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r103 + "txtSMLot");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r101.gridDataList[rowIndex_r103].LotNo);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_15_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_16_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r110);
      const rowIndex_r108 = restoredCtx.rowIndex;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r109.gridDataList[rowIndex_r108].OrdNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r108 = ctx.rowIndex;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r108 + "txtSMOrdLot");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r106.gridDataList[rowIndex_r108].OrdNo);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_16_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_17_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r115);
      const rowIndex_r113 = restoredCtx.rowIndex;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r114.gridDataList[rowIndex_r113].smBatchNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r113 = ctx.rowIndex;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r113 + "txtSMBatchNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r111.gridDataList[rowIndex_r113].smBatchNo);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_17_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_18_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_grid_column_44_18_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r120);
      const rowIndex_r118 = restoredCtx.rowIndex;
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r119.gridDataList[rowIndex_r118].smFormulaID = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowIndex_r118 = ctx.rowIndex;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", rowIndex_r118 + "txtSMFormulaID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r116.gridDataList[rowIndex_r118].smFormulaID);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_kendo_grid_column_44_18_ng_template_0_Template, 2, 3, "ng-template", 30);
  }
}
function TransferApprovedSamplesComponent_kendo_grid_column_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "kendo-grid-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, TransferApprovedSamplesComponent_kendo_grid_column_44_2_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, TransferApprovedSamplesComponent_kendo_grid_column_44_3_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, TransferApprovedSamplesComponent_kendo_grid_column_44_4_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, TransferApprovedSamplesComponent_kendo_grid_column_44_5_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, TransferApprovedSamplesComponent_kendo_grid_column_44_6_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, TransferApprovedSamplesComponent_kendo_grid_column_44_7_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, TransferApprovedSamplesComponent_kendo_grid_column_44_8_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, TransferApprovedSamplesComponent_kendo_grid_column_44_9_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, TransferApprovedSamplesComponent_kendo_grid_column_44_10_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, TransferApprovedSamplesComponent_kendo_grid_column_44_11_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, TransferApprovedSamplesComponent_kendo_grid_column_44_12_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, TransferApprovedSamplesComponent_kendo_grid_column_44_13_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, TransferApprovedSamplesComponent_kendo_grid_column_44_14_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, TransferApprovedSamplesComponent_kendo_grid_column_44_15_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, TransferApprovedSamplesComponent_kendo_grid_column_44_16_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, TransferApprovedSamplesComponent_kendo_grid_column_44_17_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, TransferApprovedSamplesComponent_kendo_grid_column_44_18_Template, 1, 0, null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 20, item_r15.Title));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", item_r15.Display == false)("width", item_r15.Field == "SMRequestNo" || item_r15.Field == "SMTransactionNo" || item_r15.Field == "opportunityno" ? "120" : item_r15.Field == "smSampleSizeUOM" ? "70" : "130");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "SMRequestNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "SMTransactionNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "opportunityno");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smSampleDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smSpecialInstruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smAnticipatedSalesVolume");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smSampleSizeUOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smTargetPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smCurrentPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smSampleSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smTimeRequired");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smSamplePices");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "LotNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "OrdNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smBatchNo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r15.Field == "smFormulaID");
  }
}
function TransferApprovedSamplesComponent_kendo_dialog_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "kendo-dialog", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close", function TransferApprovedSamplesComponent_kendo_dialog_52_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r121.bmlfInstructModal(ctx_r121.msInstrunction, "close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 52)(6, "div", 24)(7, "div", 22)(8, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TransferApprovedSamplesComponent_kendo_dialog_52_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r122);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r123.msInstrunction = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 3, "SAMPLETRANS.SPECIALINSTRUCTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r4.msInstrunction);
  }
}
function TransferApprovedSamplesComponent_app_common_task_modal_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-common-task-modal", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeTaskModal", function TransferApprovedSamplesComponent_app_common_task_modal_53_Template_app_common_task_modal_closeTaskModal_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r125);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r124.bmlfonCloseTaskModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("taskData", ctx_r5.mobjTaskData);
  }
}
class TransferApprovedSamplesComponent extends src_app_shared_components_basegrid__WEBPACK_IMPORTED_MODULE_1__.BaseGrid {
  getDataList() {}
  constructor(router, route, renderer, lsService, toastMessageService, formService, dateFormatService, utilService, lookupService, userFieldService) {
    super(lsService, dateFormatService, userFieldService, toastMessageService, utilService);
    this.router = router;
    this.route = route;
    this.renderer = renderer;
    this.lsService = lsService;
    this.toastMessageService = toastMessageService;
    this.formService = formService;
    this.dateFormatService = dateFormatService;
    this.utilService = utilService;
    this.lookupService = lookupService;
    this.userFieldService = userFieldService;
    this.allRowsSelected = false;
    this.mbInstructionDialog = false;
    this.msInstrunction = '';
    this.gridDataList = [];
    this.bmlfSelectedCallback = args => args.dataItem;
    this.msServeDateFormat = src_app_core_constants_common_const__WEBPACK_IMPORTED_MODULE_0__.CommonConstants.gsServerDateFormat;
    this.mbIsLoading = false;
    this.msScreenName = 'Transfer Approved Samples';
    this.mbChange = false;
    this.msCustomDateFormat = "";
    this.msFormMode = "I";
    /**---Object Initialize-----**/
    this.mobjUserData = {};
    this.mobjModel = new _models_transfer_approved_sample_modal__WEBPACK_IMPORTED_MODULE_3__.TransferApprovedSamplesModel();
    this.gridDataListCol = _constant_transfer_approved_samples_const__WEBPACK_IMPORTED_MODULE_2__.TransferApprovedSamplesConstant.garrSampTransferApprvItemCol.map(ele => Object.assign({}, ele));
    this.marrRowsSelected = [];
    this.mnumLineItemRowIndex = -1;
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.QtyMaxLen = 12;
    this.miPricePrecision = 6;
    this.miPricePrecisionFormat = 'n' + this.miPricePrecision;
    this.marrItemSelectData = [];
    this.mbdeleteLineItem = false;
    this.mbCustomControl = false;
    /**---END : Lookup realted field----**/
    /**-------START: TASK Field ----**/
    this.mbIsTaskModal = false;
    this.mobjTaskData = {};
    /**-------END: TASK Field ------**/
    /**-----------START E-Signature Field----------**/
    this.mbSignatureModal = false;
    this.mobjSignatureData = {};
    this.mbIsEsignature = false;
    this.mbIsEsignADTPermision = false;
    this.mbIsEsignAuditDialog = false;
    this.mobjCommonAlertData = {};
    this.mbCommonAlertDialog = false;
  }
  ngOnInit() {
    /*--------- get screen permission --------*/
    this.utilService.getBMEScreePermission(this.msScreenName);
    /**--- Get default date format from service--- */
    this.msCustomDateFormat = this.dateFormatService.getDateFormat();
    this.mobjUserData = this.lsService.getUserSession();
    this.bmlfGetSampleData();
  }
  bmlfGetSampleData() {
    let pobjReqData = {
      ScreenName: 'Sales Opportunity',
      LookUpKey: 'GetApprovedsalesOppRequsition',
      Filter1: ''
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res.LookupData.length > 0) {
        this.mbCustomControl = true;
        this.msFormMode = "U";
        this.gridDataList = null;
        let pobjData = res.LookupData;
        this.gridDataList = pobjData;
      } else {
        this.gridDataList = "";
      }
    });
  }
  selectAllRows(e) {
    if (e.target.checked) {
      this.allRowsSelected = true;
      this.gridDataList.forEach(ele => {
        ele.Select = true;
      });
    } else {
      this.allRowsSelected = false;
      let piRowIndex = 0;
      this.gridDataList.forEach(ele => {
        ele.Select = false;
        for (let i = 0; i < this.marrRowsSelected.length; i++) {
          if (this.marrRowsSelected[i] == piRowIndex) {
            ele.Select = true;
          }
        }
        ++piRowIndex;
      });
    }
  }
  selectSingleRow(e, rowIndex) {
    if (e.target.checked == false) {
      for (let i = 0; i < this.marrRowsSelected.length; i++) {
        if (this.marrRowsSelected[i] == rowIndex) {
          e.target.checked = true;
          //this.gridDataList[this.marrRowsSelected]['Select'] = 
        }
      }
    }
  }

  bmlfTransferApprover() {
    if (this.gridDataList.length == 0 || this.gridDataList == undefined) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('SAMPLETRANSFERAPPROVAL.MSG.NODATA'));
      return;
    }
    var parrSelected = "";
    parrSelected = this.gridDataList.filter(x => x['Select'] == true);
    if (parrSelected.length < 1) {
      this.toastMessageService.notifyError(this.utilService.bmgfonTranslate('SAMPLETRANSFERAPPROVAL.MSG.SELECTREQ'));
      return false;
    } else {
      this.bmlfSubmitData();
    }
  }
  bmlfSubmitData() {
    var pobJData = [];
    this.gridDataList.forEach(ele => {
      if (ele.Select == true) {
        pobJData.push({
          "SMTransactionNo": ele.SMTransactionNo,
          "SMRequestNo": ele.SMRequestNo,
          "Mode": 'Automatic'
        });
        this.marrItemSelectData = pobJData;
      }
    });
    let psJData = {
      JSON: JSON.stringify({
        ParameterData: this.marrItemSelectData,
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      })
    };
    if (!this.utilService.mbWrite) {
      this.toastMessageService.notifyWarning(this.utilService.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
      return false;
    }
    ;
    this.mbIsLoading = true;
    this.formService.bmlfTransferSampleTransferApprovalData(psJData).subscribe(res => {
      this.mbIsLoading = false;
      if (res == null) {
        this.toastMessageService.notifyError("Server Error.");
      }
      if (res.Response[0].ErrorCode == "") {
        //  this.toastMessageService.notifySuccess(res.Response[0].ResponseText); Bug 183214
        if (res.Response[0].ResponseText.match(/<br>/gi).length > 1) {
          let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, ',');
          let psRemoveLastComma = psFilteredRes.substr(0, psFilteredRes.lastIndexOf(','));
          this.toastMessageService.notifyError(psRemoveLastComma);
        } else {
          let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, '');
          this.toastMessageService.notifySuccess(psFilteredRes);
        }
        this.bmlfGetSampleData();
      } else {
        this.toastMessageService.notifyError(res.Response[0].ResponseText);
        this.bmlfRefresh(); //Bug 181755
        console.log(res);
      }
    }).add(() => {
      this.mbIsLoading = false;
    });
  }
  bmlfInstructModal(value, key) {
    if (key == 'open') {
      this.mbInstructionDialog = true;
      this.msInstrunction = value;
    } else if (key == 'close') {
      this.mbInstructionDialog = false;
      this.msInstrunction = '';
    }
  }
  bmlfViewHelpDoc() {
    window.open('../../../../assets/help files/Transfer Approved Samples.pdf', '_blank');
  }
  //Close Form
  bmlfCloseForm() {
    this.router.navigate(["/main/dashboard"]);
  }
  // Refresh
  bmlfRefresh() {
    this.router.navigate(["/main/crm/transfer-approved-samples"]);
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
      pobjFormRec.primeKey = '';
      this.mobjTaskData.innerRecord = pobjFormRec;
    }
    this.mbIsTaskModal = true;
  }
  //Close Task MODAL
  bmlfonCloseTaskModal(pobjData) {
    this.mbIsTaskModal = pobjData.isTaskModal;
  }
  static #_ = this.ɵfac = function TransferApprovedSamplesComponent_Factory(t) {
    return new (t || TransferApprovedSamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_http_transfer_approved_samples_service__WEBPACK_IMPORTED_MODULE_6__.TransferApprovedSamplesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_dateFormat_service__WEBPACK_IMPORTED_MODULE_7__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_8__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_10__.UserFieldService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: TransferApprovedSamplesComponent,
    selectors: [["app-transfer-approved-samples"]],
    viewQuery: function TransferApprovedSamplesComponent_Query(rf, ctx) {
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 54,
    vars: 26,
    consts: [[4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "full-width", 2, "display", "block"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "menu_block"], [3, "msRouterUrl"], [1, "dropdown"], ["type", "button", "id", "cmdTask", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "ml-1", "header-custom-btn", 2, "color", "#fff"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["aria-labelledby", "cmdTask", 1, "profile-menu", "dropdown-menu"], ["id", "cmdMyTask", 3, "click"], ["id", "cmdTaskRecord", 3, "click"], ["type", "button", "id", "cmdHelp", 1, "component-setting-icon-btn", 3, "click"], [2, "font-size", "21px"], ["type", "button", "id", "cmdCloseModel", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-container", "pt-2", "pb-2", "mt-2"], ["id", "divForm"], [1, "row"], [1, "col-md-12"], [1, "col-md-12", "col-lg-12", "mb-1"], [1, "form-group", "row"], ["id", "divKendoGrid", 1, "col-md-12", "height100p", "full-height-grid", "form-container"], ["id", "dtItemGrid", 1, "gridloading", "custom_h_grid", "max_scroll", "low_space_table", "height-full-page", 3, "data", "loading", "resizable"], [3, "noRecords"], ["field", "checked", "width", "30"], ["kendoGridHeaderTemplate", ""], ["kendoGridCellTemplate", ""], ["media", "(min-width: 768px)", 3, "title", "hidden", "width", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "cmdSave", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", "id", "cmdClose", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "width", "close", 4, "ngIf"], [3, "taskData", "closeTaskModal", 4, "ngIf"], ["type", "checkbox", "name", "selectAll", 3, "ngModel", "change", "ngModelChange"], ["type", "checkbox", 3, "name", "ngModel", "ngModelChange", "change"], ["media", "(min-width: 768px)", 3, "title", "hidden", "width"], ["kendoGridCellTemplate", "", "width", "50"], [1, "form-group", "custom_flex"], ["type", "text", 1, "form-control", "grid-form-control", 3, "disabled", "ngModel", "id", "ngModelChange"], [1, "input-group-addon", "fsearch", 3, "id", "click"], [1, "fa", "fa-expand"], ["type", "text", 1, "form-control", "number-input", "grid-form-control", 3, "disabled", "ngModel", "id", "ngModelChange"], [3, "spinners", "step", "ngModel", "id", "name", "min", "autoCorrect", "decimals", "format", "disabled", "ngModelChange"], [1, "form-control", "grid-form-control", 3, "spinners", "step", "ngModel", "id", "name", "min", "autoCorrect", "decimals", "format", "disabled", "ngModelChange"], [3, "spinners", "step", "name", "ngModel", "id", "min", "autoCorrect", "decimals", "format", "disabled", "ngModelChange"], [3, "spinners", "step", "ngModel", "id", "autoCorrect", "decimals", "format", "disabled", "ngModelChange"], [3, "width", "close"], [2, "font-size", "18px", "line-height", "1.3em"], ["autocomplete", "off", 1, "form-container"], ["row", "6", "name", "Description", "id", "txtDescription", "type", "text", "maxlength", "50", "disabled", "", 1, "form-control", 2, "height", "190px", 3, "ngModel", "ngModelChange"], [3, "taskData", "closeTaskModal"]],
    template: function TransferApprovedSamplesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, TransferApprovedSamplesComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_a_click_16_listener() {
          return ctx.bmlfOpenTaskModal("myTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_a_click_20_listener() {
          return ctx.bmlfOpenTaskModal("recordTask");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_button_click_23_listener() {
          return ctx.bmlfViewHelpDoc();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_button_click_26_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 18)(30, "section", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 21)(35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "kendo-grid", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "kendo-grid-messages", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "kendo-grid-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, TransferApprovedSamplesComponent_ng_template_42_Template, 1, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, TransferApprovedSamplesComponent_ng_template_43_Template, 1, 2, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, TransferApprovedSamplesComponent_kendo_grid_column_44_Template, 19, 22, "kendo-grid-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 32)(46, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_button_click_46_listener() {
          return ctx.bmlfTransferApprover();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TransferApprovedSamplesComponent_Template_button_click_49_listener() {
          return ctx.bmlfCloseForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, TransferApprovedSamplesComponent_kendo_dialog_52_Template, 10, 5, "kendo-dialog", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, TransferApprovedSamplesComponent_app_common_task_modal_53_Template, 1, 1, "app-common-task-modal", 36);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 14, "SAMPLETRANSFERAPPROVAL.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("msRouterUrl", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](18, 16, "MYTASK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 18, "TASKFORRECORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.gridDataList)("loading", false)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("noRecords", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](40, 20, "CommonNoRecordsAvailable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.gridDataListCol);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](48, 22, "SAMPLETRANSFERAPPROVAL.TRANSFER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](51, 24, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbInstructionDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.mbIsTaskModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__.LoaderComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__.NumericTextBoxComponent, _shared_components_common_task_modal_common_task_modal_component__WEBPACK_IMPORTED_MODULE_12__.CommonTaskModalComponent, _shared_components_how_to_video_how_to_video_component__WEBPACK_IMPORTED_MODULE_13__.HowToVideoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogTitleBarComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.CustomMessagesComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_20__.HeaderTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: ["@media (min-width: 767px) {\n    .k-grid.custom_h_grid.height-full-page .k-grid-container {\n    min-height: 450px;\n    max-height: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9jcm0vY29tcG9uZW50cy90cmFuc2Zlci1hcHByb3ZlZC1zYW1wbGVzL3RyYW5zZmVyLWFwcHJvdmVkLXNhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9OZXclMjBXb3JraW5nMTYvQk1FV0VCVUkvQk1FV0VCMTEvQk1FV0VCMTEvc3JjL2FwcC9tYWluL2NybS9jb21wb25lbnRzL3RyYW5zZmVyLWFwcHJvdmVkLXNhbXBsZXMvdHJhbnNmZXItYXBwcm92ZWQtc2FtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQ0NGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpeyBcclxuOjpuZy1kZWVwIC5rLWdyaWQuY3VzdG9tX2hfZ3JpZC5oZWlnaHQtZnVsbC1wYWdlIC5rLWdyaWQtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxufSIsIkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICA6Om5nLWRlZXAgLmstZ3JpZC5jdXN0b21faF9ncmlkLmhlaWdodC1mdWxsLXBhZ2UgLmstZ3JpZC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13117:
/*!*****************************************************************!*\
  !*** ./src/app/main/crm/constant/salesOpportunityTran.const.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityTranConstant: () => (/* binding */ SalesOpportunityTranConstant)
/* harmony export */ });
class SalesOpportunityTranConstant {
  static #_ = this.garrPrdRangeLineItemCol = [{
    Type: 'combo',
    Display: true,
    Field: 'LineType',
    Title: 'LINETYPE',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'ItemKey',
    Title: 'ITEMKEY',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'text',
    Display: true,
    Field: 'Description',
    Title: 'DESCRIPTION',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'EstimatedQty',
    Title: 'ESTIMATEDQTY',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'text',
    Display: true,
    Field: 'Unit',
    Title: 'UNIT',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'Price',
    Title: 'PRICE',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'Amount',
    Title: 'AMOUNT',
    IsHyperLink: false,
    MsLabelKey: ''
  }];
  static #_2 = this.garrPhasesLineItemCol = [{
    Type: 'date',
    Display: true,
    Field: 'StartDate',
    Title: 'STARTDATE',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'date',
    Display: true,
    Field: 'ClosingDate',
    Title: 'CLOSINGDATE',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'Stage',
    Title: 'PHASEID',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'Percentage',
    Title: 'PERCENTAGE',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'PotentialAmt',
    Title: 'POTENTIALAMT',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'number',
    Display: true,
    Field: 'WeightedAmt',
    Title: 'WEIGHTEDAMT',
    IsHyperLink: false,
    MsLabelKey: ''
  }];
  static #_3 = this.garrCompetitorItemCol = [{
    Type: 'lookup',
    Display: true,
    Field: 'CompetitorKey',
    Title: 'COMPETITORID',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'StrengthKey',
    Title: 'STRENGTHID',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'text',
    Display: true,
    Field: 'Remarks',
    Title: 'REMARK',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'Won',
    Title: 'WON',
    IsHyperLink: false,
    MsLabelKey: ''
  }];
  static #_4 = this.garrReasonCol = [{
    Type: 'lookup',
    Display: true,
    Field: 'ReasonKey',
    Title: 'REASONID',
    IsHyperLink: false,
    MsLabelKey: ''
  }, {
    Type: 'text',
    Display: true,
    Field: 'Description',
    Title: 'DESCRIPTION',
    IsHyperLink: false,
    MsLabelKey: ''
  }];
  static #_5 = this.garrTypeList = [{
    key: "C",
    value: "Customer"
  }, {
    key: "P",
    value: "Prospect"
  }, {
    key: "NP",
    value: "New Prospect"
  }];
  static #_6 = this.garrLinkedTypeList = [{
    key: "C",
    value: "Customer"
  }, {
    key: "P",
    value: "Prospect"
  }, {
    key: "V",
    value: "Vendor"
  }, {
    key: "O",
    value: "Other"
  }];
  static #_7 = this.garrRangeTypeList = [{
    key: "Inventory"
  }, {
    key: "Non-Inventory"
  }];
  static #_8 = this.garrStatusList = [{
    key: "NEW",
    value: "New"
  }, {
    key: "LEAD",
    value: "Lead"
  }, {
    key: "SUSPECT",
    value: "Suspect"
  }, {
    key: "PROSPECT",
    value: "Prospect"
  }, {
    key: "OPPORTUNITY",
    value: "Opportunity"
  }, {
    key: "WON",
    value: "Won"
  }, {
    key: "LOST",
    value: "Lost"
  }];
  static #_9 = this.garrQuotationCol = [{
    Type: 'text',
    Display: true,
    Field: 'OrderNo',
    Title: 'ORDERNO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerKey',
    Title: 'CUSTOMERKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerName',
    Title: 'CUSTOMERNAME'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerAddress1',
    Title: 'CUSTOMERADDRESSONE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerAddres2',
    Title: 'CUSTOMERADDRESSTWO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerAddress3',
    Title: 'CUSTOMERADDRESSTHREE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerCity',
    Title: 'CUSTOMERCITY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerState',
    Title: 'CUSTOMERSTATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerZip',
    Title: 'CUSTOMERZIP'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerCountry',
    Title: 'CUSTOMERCOUNTRY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustoemrAttention',
    Title: 'CUSTOMERATTENTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipKey',
    Title: 'SHIPKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipName',
    Title: 'SHIPNAME'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipAddress1',
    Title: 'SHIPADDRESS1'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipAddress2',
    Title: 'SHIPADDRESS2'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipAddress3',
    Title: 'SHIPADDRESS3'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipCity',
    Title: 'SHIPCITY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipState',
    Title: 'SHIPSTATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipZip',
    Title: 'SHIPZIP'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipCountry',
    Title: 'SHIPCOUNTRY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipAttention',
    Title: 'SHIPATTENTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Status',
    Title: 'STATUS'
  }, {
    Type: 'text',
    Display: true,
    Field: 'OrderDate',
    Title: 'ORDDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'RequestedDate',
    Title: 'REQUESTEDDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CancelDate',
    Title: 'CANCELDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Buyer',
    Title: 'BUYER'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerPONO',
    Title: 'CUSTOMERPONO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TerritoryKey',
    Title: 'TERRITORYKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SalesPersonKey',
    Title: 'SALESPERSONKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TermsKey',
    Title: 'TERMSKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'FOBKey',
    Title: 'FOBKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipViaKey',
    Title: 'SHIPVIAKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Buyer1',
    Title: 'BUYERONE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CommentKey',
    Title: 'COMMENTKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CustomerClass',
    Title: 'CUSTOMERCLASS'
  }, {
    Type: 'text',
    Display: true,
    Field: 'FreightAmount',
    Title: 'FRIGHTAMT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'DocTaxAmt',
    Title: 'DOCTAXAMT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SubTotal',
    Title: 'SUBTOTAL'
  }, {
    Type: 'text',
    Display: true,
    Field: 'OrderTotal',
    Title: 'ORDERTOTAL'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CurrencyKey',
    Title: 'CURRENCYKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SalesOrderNo',
    Title: 'SONO'
  }];
  static #_10 = this.garrQuotationDetailCol = [{
    Type: 'text',
    Display: true,
    Field: 'ItemKey',
    Title: 'ITEMKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Description',
    Title: 'DESCRIPTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Location',
    Title: 'LOCATION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Unitprice',
    Title: 'UNITPRICE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'QuantityOrder',
    Title: 'QUANTITYORDER'
  }, {
    Type: 'text',
    Display: true,
    Field: 'QuantityRemaining',
    Title: 'QUANTITYREM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'DiscoiuntPercent',
    Title: 'DESCPRCENT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TaxKey',
    Title: 'TAXKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'RevenueAccount',
    Title: 'REVENUEACCOUNT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'QuantityShip',
    Title: 'QUANTITYSHIP'
  }, {
    Type: 'text',
    Display: true,
    Field: 'RequestedDate',
    Title: 'REQUESTEDDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ShipDate',
    Title: 'SHIPDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'UOM',
    Title: 'UOM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TaxAmt',
    Title: 'TAXAMOUNT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'ExtLinAmt',
    Title: 'EXTLINEAMT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'LineNet',
    Title: 'LINENET'
  }, {
    Type: 'text',
    Display: true,
    Field: 'BasePrice',
    Title: 'BASEPRICE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'PriceUOM',
    Title: 'PRICEUOM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'DispBasePrice',
    Title: 'DISPBASEPRICE'
  }];
  static #_11 = this.garrSampleCol = [{
    Type: 'text',
    Display: true,
    Field: 'Project_ID',
    Title: 'PROJECTID'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Project_Name',
    Title: 'PROJECTNAME'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Transaction_No',
    Title: 'TRANSACTIONNO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Date',
    Title: 'DATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Request_Date',
    Title: 'REQUESTDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Delivery_Date',
    Title: 'DELIVERYDATE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Priority',
    Title: 'PRIORITY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Internal_Notes',
    Title: 'INTERNALNOTES'
  }];
  static #_12 = this.garrTransactionCol = [{
    Type: 'text',
    Display: true,
    Field: 'ItemKey',
    Title: 'ITEMKEY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Description',
    Title: 'DESCRIPTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Location',
    Title: 'LOCATION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'UOM',
    Title: 'UOM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TotQty',
    Title: 'TOTALQTY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'TotCredit',
    Title: 'TOTALCREDIT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'AvgQty',
    Title: 'AVGQTY'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Credit',
    Title: 'AVRAGECREDIT'
  }, {
    Type: 'text',
    Display: true,
    Field: 'CreditPer',
    Title: 'CREDITPERCENT'
  }];
  static #_13 = this.garrTransactionDetailCol = [{
    Type: 'text',
    Display: true,
    Field: 'OrderNo',
    Title: 'ORDERNO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Order',
    Title: 'ORDER'
  }, {
    Type: 'text',
    Display: true,
    Field: 'Credit',
    Title: 'CREDIT'
  }];
}

/***/ }),

/***/ 13959:
/*!******************************************************************!*\
  !*** ./src/app/main/crm/constant/salesopportunitymasterconst.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOppMstConstant: () => (/* binding */ SalesOppMstConstant)
/* harmony export */ });
class SalesOppMstConstant {
  static #_ = this.gArrLineGridCompColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'CompetitorKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }, {
    Type: 'lookup',
    Display: true,
    Field: 'DefaultStrengthKey',
    Title: 'Default Strength Key',
    index: 3
  }];
  static #_2 = this.gArrLineGridIndusColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'IndustryKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Name',
    Title: 'Name',
    index: 2
  }];
  static #_3 = this.gArrLineGridSouceColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'InfSourceKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Name',
    Title: 'Name',
    index: 2
  }];
  static #_4 = this.gArrLineGridPhaseColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'PhaseKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }, {
    Type: 'Number',
    Display: true,
    Field: 'Percentage',
    Title: 'Percentage',
    index: 3
  }];
  static #_5 = this.gArrLineGridPriorityColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'PriorityKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }];
  static #_6 = this.gArrLineGridProjectColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'ProjectCategoryKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }];
  static #_7 = this.gArrLineGridReasonColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'ReasonKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }];
  static #_8 = this.gArrLineGridStrengthColumns = [{
    Type: 'Action',
    Display: true,
    Field: 'Delete',
    Title: 'Action',
    index: 0
  }, {
    Type: 'Text',
    Display: true,
    Field: 'StrengthKey',
    Title: 'Id',
    index: 1
  }, {
    Type: 'Texts',
    Display: true,
    Field: 'Description',
    Title: 'Name',
    index: 2
  }];
}

/***/ }),

/***/ 42095:
/*!**********************************************************************!*\
  !*** ./src/app/main/crm/constant/transfer-approved-samples.const.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferApprovedSamplesConstant: () => (/* binding */ TransferApprovedSamplesConstant)
/* harmony export */ });
class TransferApprovedSamplesConstant {
  static #_ = this.garrSampTransferApprvItemCol = [
  // {
  //     Type: 'checkbox',
  //     Display: true,
  //     Field: 'Select',
  //     Title: 'Select'
  // },        
  {
    Type: 'text',
    Display: true,
    Field: 'SMRequestNo',
    Title: 'SAMPLETRANSFERAPPROVAL.REQUESTNO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'SMTransactionNo',
    Title: 'SALESOPPORTUNITYTRAN.TRANSACTIONNO'
  }, {
    Type: 'text',
    Display: false,
    Field: 'opportunityno',
    Title: 'SAMPLETRANSFERAPPROVAL.OPPRTUNITYNO'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smStatus',
    Title: 'SALESOPPORTUNITYTRAN.STATUS'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smSampleDescription',
    Title: 'SALESOPPORTUNITYTRAN.SAMPLEDESCRIPTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smSpecialInstruction',
    Title: 'SALESOPPORTUNITYTRAN.SPECIALINSTRUCTION'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smAnticipatedSalesVolume',
    Title: 'SALESOPPORTUNITYTRAN.ANTICIPATEDSALESVOLUME'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smSampleSizeUOM',
    Title: 'SALESOPPORTUNITYTRAN.UOM'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smTargetPrice',
    Title: 'SALESOPPORTUNITYTRAN.TARGETPRICE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smCurrentPrice',
    Title: 'SALESOPPORTUNITYTRAN.CURRENTPRICE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smSampleSize',
    Title: 'SALESOPPORTUNITYTRAN.SAMPLESIZE'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smTimeRequired',
    Title: 'SAMPLETRANSFERAPPROVAL.ESTTIMEREQ'
  }, {
    Type: 'text',
    Display: true,
    Field: 'smSamplePices',
    Title: 'SALESOPPORTUNITYTRAN.SAMPLEPIECES'
  }, {
    Type: 'text',
    Display: false,
    Field: 'LotNo',
    Title: 'SAMPLETRANSFERAPPROVAL.LOTNO'
  }, {
    Type: 'text',
    Display: false,
    Field: 'OrdNo',
    Title: 'SAMPLETRANSFERAPPROVAL.ORDERNO'
  }, {
    Type: 'text',
    Display: false,
    Field: 'smBatchNo',
    Title: 'SAMPLETRANSFERAPPROVAL.SAMPLEBATCHNO'
  }, {
    Type: 'text',
    Display: false,
    Field: 'smFormulaID',
    Title: 'SAMPLETRANSFERAPPROVAL.FORMULAKEY'
  }];
}

/***/ }),

/***/ 4002:
/*!************************************************!*\
  !*** ./src/app/main/crm/crm-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRMRoutingModule: () => (/* binding */ CRMRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _crm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crm.component */ 17321);
/* harmony import */ var _components_sales_opportunity_master_sales_opportunity_master_sales_opportunity_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sales-opportunity-master/sales-opportunity-master/sales-opportunity-master.component */ 82686);
/* harmony import */ var _components_sales_oppportunity_transaction_sales_opportunity_transaction_list_sales_opportunity_transaction_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/sales-opportunity-transaction-list/sales-opportunity-transaction-list.component */ 96317);
/* harmony import */ var _components_sales_oppportunity_transaction_sales_opportunity_transaction_manage_sales_opportunity_transaction_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/sales-opportunity-transaction-manage/sales-opportunity-transaction-manage.component */ 8438);
/* harmony import */ var _components_transfer_approved_samples_transfer_approved_samples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/transfer-approved-samples/transfer-approved-samples.component */ 16635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: '',
  component: _crm_component__WEBPACK_IMPORTED_MODULE_1__.CRMComponent,
  children: [{
    path: '',
    redirectTo: 'crm',
    pathMatch: 'full'
  }, {
    path: 'sales-opportunity-master',
    component: _components_sales_opportunity_master_sales_opportunity_master_sales_opportunity_master_component__WEBPACK_IMPORTED_MODULE_2__.SalesOpportunityMasterComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'sales-opportunity-transaction',
    component: _components_sales_oppportunity_transaction_sales_opportunity_transaction_list_sales_opportunity_transaction_list_component__WEBPACK_IMPORTED_MODULE_3__.SalesOpportunityTransactionListComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'sales-opportunity-transaction/manage',
    component: _components_sales_oppportunity_transaction_sales_opportunity_transaction_manage_sales_opportunity_transaction_manage_component__WEBPACK_IMPORTED_MODULE_4__.SalesOpportunityTransactionManageComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }, {
    path: 'transfer-approved-samples',
    component: _components_transfer_approved_samples_transfer_approved_samples_component__WEBPACK_IMPORTED_MODULE_5__.TransferApprovedSamplesComponent,
    canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
  }]
}];
class CRMRoutingModule {
  static #_ = this.ɵfac = function CRMRoutingModule_Factory(t) {
    return new (t || CRMRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CRMRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CRMRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 17321:
/*!*******************************************!*\
  !*** ./src/app/main/crm/crm.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRMComponent: () => (/* binding */ CRMComponent)
/* harmony export */ });
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ 67755);
/* harmony import */ var _i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/hi */ 56146);
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/zh */ 25234);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 48045);
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ 80075);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 14981);
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/vi */ 56288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ 6301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);










class CRMComponent {
  constructor(_lanTranslationLoaderService) {
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
    this._lanTranslationLoaderService.loadTranslations(_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale, _i18n_zh__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, _i18n_es__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale, _i18n_vi__WEBPACK_IMPORTED_MODULE_6__.locale);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CRMComponent_Factory(t) {
    return new (t || CRMComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__.LanTranslationLoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CRMComponent,
    selectors: [["app-crm"]],
    decls: 1,
    vars: 0,
    template: function CRMComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 10316:
/*!****************************************!*\
  !*** ./src/app/main/crm/crm.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRMModule: () => (/* binding */ CRMModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _crm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crm.component */ 17321);
/* harmony import */ var _crm_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crm-routing.module */ 4002);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ 4244);
/* harmony import */ var src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipes/pipe.modue */ 234);
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ 54250);
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-intl */ 87809);
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ 28277);
/* harmony import */ var src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/shared-component.module */ 90358);
/* harmony import */ var _components_sales_opportunity_master_sales_opportunity_master_sales_opportunity_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sales-opportunity-master/sales-opportunity-master/sales-opportunity-master.component */ 82686);
/* harmony import */ var _components_sales_oppportunity_transaction_sales_opportunity_transaction_list_sales_opportunity_transaction_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/sales-opportunity-transaction-list/sales-opportunity-transaction-list.component */ 96317);
/* harmony import */ var _components_sales_oppportunity_transaction_sales_opportunity_transaction_manage_sales_opportunity_transaction_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/sales-opportunity-transaction-manage/sales-opportunity-transaction-manage.component */ 8438);
/* harmony import */ var _components_sales_oppportunity_transaction_crm_customer_information_crm_customer_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/crm-customer-information/crm-customer-information.component */ 76741);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 4627);
/* harmony import */ var _components_sales_oppportunity_transaction_crm_product_range_crm_product_range_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/crm-product-range/crm-product-range.component */ 76374);
/* harmony import */ var _components_sales_oppportunity_transaction_crm_phases_crm_phases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/crm-phases/crm-phases.component */ 39847);
/* harmony import */ var _components_sales_oppportunity_transaction_crm_competitors_crm_competitors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sales-oppportunity-transaction/crm-competitors/crm-competitors.component */ 72418);
/* harmony import */ var _components_transfer_approved_samples_transfer_approved_samples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/transfer-approved-samples/transfer-approved-samples.component */ 16635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);























class CRMModule {
  static #_ = this.ɵfac = function CRMModule_Factory(t) {
    return new (t || CRMModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: CRMModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _crm_routing_module__WEBPACK_IMPORTED_MODULE_1__.CRMRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__.ButtonsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PDFModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_2__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DateInputsModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DatePickerModule, _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_20__.IntlModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownsModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_22__.SplitterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CRMModule, {
    declarations: [_crm_component__WEBPACK_IMPORTED_MODULE_0__.CRMComponent, _components_sales_opportunity_master_sales_opportunity_master_sales_opportunity_master_component__WEBPACK_IMPORTED_MODULE_4__.SalesOpportunityMasterComponent, _components_sales_oppportunity_transaction_sales_opportunity_transaction_list_sales_opportunity_transaction_list_component__WEBPACK_IMPORTED_MODULE_5__.SalesOpportunityTransactionListComponent, _components_sales_oppportunity_transaction_sales_opportunity_transaction_manage_sales_opportunity_transaction_manage_component__WEBPACK_IMPORTED_MODULE_6__.SalesOpportunityTransactionManageComponent, _components_sales_oppportunity_transaction_crm_customer_information_crm_customer_information_component__WEBPACK_IMPORTED_MODULE_7__.CrmCustomerInformationComponent, _components_sales_oppportunity_transaction_crm_product_range_crm_product_range_component__WEBPACK_IMPORTED_MODULE_8__.CrmProductRangeComponent, _components_sales_oppportunity_transaction_crm_phases_crm_phases_component__WEBPACK_IMPORTED_MODULE_9__.CrmPhasesComponent, _components_sales_oppportunity_transaction_crm_competitors_crm_competitors_component__WEBPACK_IMPORTED_MODULE_10__.CrmCompetitorsComponent, _components_transfer_approved_samples_transfer_approved_samples_component__WEBPACK_IMPORTED_MODULE_11__.TransferApprovedSamplesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _crm_routing_module__WEBPACK_IMPORTED_MODULE_1__.CRMRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, src_app_shared_modules_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__.ButtonsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.GridModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.ExcelModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__.PDFModule, src_app_shared_pipes_pipe_modue__WEBPACK_IMPORTED_MODULE_2__.PipeModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DateInputsModule, _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__.DatePickerModule, _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_20__.IntlModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownsModule, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_22__.SplitterModule]
  });
})();

/***/ }),

/***/ 18471:
/*!*******************************************************************!*\
  !*** ./src/app/main/crm/http/sales-opportunity-master.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportinityMasterService: () => (/* binding */ SalesOpportinityMasterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class SalesOpportinityMasterService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetSalesOpportunityMaster`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfonSaveMasterData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveSalesOpportunityMaster`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfonDeleteLineData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteSalesOpportunityMaster`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function SalesOpportinityMasterService_Factory(t) {
    return new (t || SalesOpportinityMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SalesOpportinityMasterService,
    factory: SalesOpportinityMasterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21129:
/*!************************************************************************!*\
  !*** ./src/app/main/crm/http/sales-opportunity-transaction.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityTransactionService: () => (/* binding */ SalesOpportunityTransactionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class SalesOpportunityTransactionService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfSaveSalesOpportunityTranData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveSalesOpportunityTransaction`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSalesOpportunityMenuList(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetMenuScreen`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSalesOpportunityData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetSalesOpportunityTransaction`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfDeleteSalesOpportunityRowData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteSalesOpportunityTransaction`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSalesOppQuotationData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetSalesOpportunityQuaotation`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSalesOppInvoicesData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetSalesOpportunityInvoices`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function SalesOpportunityTransactionService_Factory(t) {
    return new (t || SalesOpportunityTransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SalesOpportunityTransactionService,
    factory: SalesOpportunityTransactionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48925:
/*!********************************************************************!*\
  !*** ./src/app/main/crm/http/transfer-approved-samples.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferApprovedSamplesService: () => (/* binding */ TransferApprovedSamplesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class TransferApprovedSamplesService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfTransferSampleTransferApprovalData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/TrasferOpportunityNoToSampling`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function TransferApprovedSamplesService_Factory(t) {
    return new (t || TransferApprovedSamplesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TransferApprovedSamplesService,
    factory: TransferApprovedSamplesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 67755:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/en.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    SALESOPPORTUNITY: {
      TITLE: 'Sales Opportunity Master',
      MASTERNAME: 'Master Name',
      ID: 'Id',
      NAME: 'Name',
      PERCENTAGE: 'Percentage',
      DEFAULTSTRNKEY: 'Default Strength Key',
      RECORD: 'Record Info :',
      USERID: 'User ID - ',
      DATE: 'Date - ',
      STRNGTHLOOKUP: 'Strength Key lookup',
      MSG: {
        REQID: 'Id Cannot be Blank',
        DUPLICATE: 'Id Cannot be Duplicate at Row No. ',
        DUPLICATEID: 'Cannot be Duplicate ',
        VALIDPER: 'Invalid Percentage'
      }
    },
    SALESOPPORTUNITYTRAN: {
      TITLE: "Sales Opportunity Transaction",
      OPPORTUNITYNO: "Opportunity No.",
      STATUS: "Status",
      DATE: "Date",
      CLOSINGDATE: "Closing Date",
      OPPORTUNITYNAME: "Opportunity Name",
      CLOSINGPER: "Closing Percentage",
      EDITHEADER: "Edit Header",
      CUSTOMERINFORMATION: "Customer Info",
      CUSTOMERGENERALINFO: "Customer & General Information",
      NAME: "Name",
      TYPE: "Type",
      ADDRESS1: "Address 1",
      SUBMITTEDDATE: "Submitted Date",
      SUBMITTEDBY: "Submitted By",
      URL: "URL",
      EMAIL: "Email",
      CONTACTPHONE: "Contact Phone",
      CONTACTNAME: "Contact Name",
      FAXNO: "Fax No",
      PHONE: "Phone",
      TERRITORYNAME: "Territory Name",
      TERRITORY: "Territory",
      SALESPERSONNAME: "Sales Person Name",
      SALESPERSON: "Sales Person",
      SHIPVIA: "Ship Via",
      DESCRIPTION: "Description",
      COUNTRY: "Country",
      ZIP: "Zip",
      ADDRESS3: "Address 3",
      STATE: "State",
      ADDRESS2: "Address 2",
      CITY: "City",
      CUSTOMER: "Customer",
      PROSPECT: "Prospect",
      NEWPROSPECT: "New Prospect",
      SALESTEMPLATE: "Sales Template",
      TOTALAMT: "Total Amount",
      LINETYPE: "Line Type",
      ITEMKEY: "Item Key",
      ESTIMATEDQTY: "Estimated Qty",
      UNIT: "Unit",
      PRICE: "Price",
      AMOUNT: "Amount",
      GENERAL: "General",
      LINKEDCUSTOMER: "Linked Customer",
      LINKEDPROSPECT: "Linked Prospect",
      LINKEDVENDOR: "Linked Vendor",
      LINKEDOTHER: "Linked Other",
      ESTCLOSINGDAYS: "Est. Closing Days",
      ESTCLOSINGDATE: "Est. Closing Date",
      LINKEDTYPE: "Linked Type",
      STARTDATE: "Start Date",
      ESTREVENUE: "Est. Revenue",
      CONTACT: "Contact",
      WEIGHTEDAMT: "Weighted Amt.",
      REMARK: "Remark",
      VENDOR: "Vendor",
      SALESORDERNO: "SO No.",
      INDUSTRYTYPE: "Industry Type",
      INFORMATIONSOURCE: "Source of Information",
      PROJECTCATEGORY: "Project Category",
      PRIORITY: "Priority",
      CUSTOMERPROSPECT: "Customer/Prospect",
      RECUSERID: "Rec UserID",
      RECDATE: "Rec Date",
      ADDSALESOPPORTUNITY: "Add Sales Opportunity",
      ATROW: "at row ",
      PHASEID: "Phase ID",
      PERCENTAGE: "Percentage",
      POTENTIALAMT: "Potential Amt.",
      COMPETITORID: "Competitor ID",
      STRENGTHID: "Strength ID",
      WON: "Won",
      REASONID: "Reason ID",
      ORDERNO: 'Order No.',
      CUSTOMERKEY: 'Customer Key',
      CUSTOMERNAME: 'Customer Name',
      CUSTOMERADDRESSONE: 'Customer Address1',
      CUSTOMERADDRESSTWO: 'Customer Address2',
      CUSTOMERADDRESSTHREE: 'Customer Address3',
      CUSTOMERCITY: 'Customer City',
      CUSTOMERSTATE: 'Customer State',
      CUSTOMERZIP: 'Customer ZIP',
      CUSTOMERCOUNTRY: 'Customer Country',
      CUSTOMERATTENTION: 'Customer Attention',
      SHIPKEY: 'Ship Key',
      SHIPNAME: 'Ship Name',
      SHIPADDRESS1: 'Ship Address1',
      SHIPADDRESS2: 'Ship Address2',
      SHIPADDRESS3: 'Ship Address3',
      SHIPCITY: 'Ship City',
      SHIPSTATE: 'Ship State',
      SHIPZIP: 'Ship ZIP',
      SHIPCOUNTRY: 'Ship Country',
      SHIPATTENTION: 'Ship Attention',
      ORDDATE: 'Orddate',
      REQUESTEDDATE: 'Requested Date',
      CANCELDATE: 'Cancel Date',
      BUYER: 'Buyer',
      CUSTOMERPONO: 'Customer PO NO',
      TERRITORYKEY: 'Territory Key',
      SALESPERSONKEY: 'Salesperson Key',
      TERMSKEY: 'Terms Key',
      FOBKEY: 'FOB Key',
      SHIPVIAKEY: 'Ship Via Key',
      BUYERONE: 'Buyer1',
      COMMENTKEY: 'Comment Key',
      CUSTOMERCLASS: 'Customer Class',
      FRIGHTAMT: 'Freight Amt.',
      DOCTAXAMT: 'Doc Tax Amt.',
      SUBTOTAL: 'Sub Total',
      CURRENCYKEY: 'Currency Key',
      NEWSAMPLE: "New Sample",
      SAMPLEINFO: "Sample Information",
      SPECIFICATIONS: "Specifications",
      SAMPLEDESCRIPTION: "Sample Description",
      SPECIALINSTRUCTION: "Special Instruction",
      ANTICIPATEDSALESVOLUME: "Anticipated Sales Volume",
      CURRENTPRICE: "Current Price",
      TARGETPRICE: "Target Price",
      SAMPLESIZE: "Sample Size",
      ESTTIMEREQ: "Estimated Time Req",
      SAMPLEPIECES: "Sample Pieces",
      UOM: "UOM",
      SPECIFICATIONTEMPLATE: "Specification Template",
      GROUPID: "Group Id",
      GROUPDESC: "Group Description",
      PROPERTYID: "Property Id",
      PROPERTYDESC: "Property Description",
      TARGETVALUE: "Target Value",
      LOCATION: 'Location',
      UNITPRICE: 'Unit Price',
      QUANTITYORDER: 'Quantity Order',
      QUANTITYREM: 'Quantity Remaining',
      DESCPRCENT: 'Desc Percent',
      TAXKEY: 'Tax Key',
      REVENUEACCOUNT: 'Revenue Account',
      QUANTITYSHIP: 'Quantity Ship',
      SHIPDATE: 'Ship Date',
      TAXAMOUNT: 'Tax Amt',
      EXTLINEAMT: 'Ext Line Amount',
      LINENET: 'Line Net',
      BASEPRICE: 'Base Price',
      PRICEUOM: 'Price UOM',
      DISPBASEPRICE: 'Disp Base Price',
      PROJECTID: 'Project ID',
      PROJECTNAME: 'Project Name',
      TRANSACTIONNO: 'Transaction No.',
      REQUESTDATE: 'Request Data',
      DELIVERYDATE: 'Delivery Date',
      INTERNALNOTES: 'Internal Notes',
      OPPORTUNITY: 'Opportunity',
      QUOTATION: 'Quotation',
      SAMPLE: 'Sample',
      TRANSACTION: 'Transaction',
      REFRESH: 'Refresh',
      NOOFTRANSACTION: 'No. of Transaction',
      TOTALQTY: 'Total Qty',
      TOTALCRED: 'Total Credit',
      AVGQTY: 'Average Qty',
      TOTALCREDIT: 'Total Credit',
      SONO: "So No.",
      ORDERTOTAL: "Order Total",
      AVRAGECREDIT: "Average Credit",
      CREDITPERCENT: "Credit %",
      ORDER: "Order",
      CREDIT: "Credit",
      CREATEQUOTATION: "Create Quotation",
      MSG: {
        CUSTOMERKEYREQ: "Enter Customer Key/Prospect Key",
        NAMEREQ: "Enter Name",
        ITEMKEYREQ: "Enter Item Key",
        DESCRIPTION: "Enter Description",
        PHASEID: "Enter Phase ID",
        ENTERSTARTDATE: "Enter Start Date",
        ENTERCLOSINGDATE: "Enter Closing Date",
        CLOSINGDATEGREATERTHANSTARTDATE: "Closing Date should be greater than Start Date",
        ENTERCOMPETITORS: "Enter Competitors ID.",
        ENTERREASON: "Enter Reason ID.",
        ENTERSAMPLEDESC: "Enter Sample Description",
        ADDREASON: "Add Reason",
        PERCENTAGEVALID: "Percentage cannot be greater than 100",
        ESTQTY: "Enter Estimated Qty",
        ENTERSALESVOLUME: "Enter Anticipated Sales Volume"
      }
    },
    SAMPLETRANSFERAPPROVAL: {
      TITLE: 'Transfer Approved Samples',
      ORDERNO: 'Order No.',
      REQUESTNO: 'Request No.',
      OPPRTUNITYNO: 'Opportunity No.',
      ESTTIMEREQ: 'Estimated Time Req (in Hrs)',
      TRANSFER: 'Transfer',
      LOTNO: 'Lot No.',
      SAMPLEBATCHNO: 'Sample Batch No.',
      FORMULAKEY: 'Formula Key',
      MSG: {
        SELECTREQ: 'No Row is Selected',
        NODATA: 'No Data Available'
      }
    }
  }
};

/***/ }),

/***/ 80075:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/es.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    SALESOPPORTUNITY: {
      TITLE: 'Maestro de Oportunidades de Venta',
      MASTERNAME: 'Nombre del Maestro',
      ID: 'ID',
      NAME: 'Nombre',
      PERCENTAGE: 'Porcentaje',
      DEFAULTSTRNKEY: 'Clave de Fortaleza Predeterminada',
      RECORD: 'Información del Registro:',
      USERID: 'ID de Usuario - ',
      DATE: 'Fecha - ',
      STRNGTHLOOKUP: 'Búsqueda de Clave de Fortaleza',
      MSG: {
        REQID: 'El ID no puede estar en blanco',
        DUPLICATE: 'El ID no puede duplicarse en la fila No. ',
        DUPLICATEID: 'No puede duplicarse ',
        VALIDPER: 'Porcentaje no válido'
      }
    },
    SALESOPPORTUNITYTRAN: {
      TITLE: "Transacción de Oportunidades de Venta",
      OPPORTUNITYNO: "Número de Oportunidad",
      STATUS: "Estado",
      DATE: "Fecha",
      CLOSINGDATE: "Fecha de Cierre",
      OPPORTUNITYNAME: "Nombre de la Oportunidad",
      CLOSINGPER: "Porcentaje de Cierre",
      EDITHEADER: "Editar Encabezado",
      CUSTOMERINFORMATION: "Información del Cliente",
      CUSTOMERGENERALINFO: "Información General del Cliente",
      NAME: "Nombre",
      TYPE: "Tipo",
      ADDRESS1: "Dirección 1",
      SUBMITTEDDATE: "Fecha de Presentación",
      SUBMITTEDBY: "Presentado por",
      URL: "URL",
      EMAIL: "Correo Electrónico",
      CONTACTPHONE: "Teléfono de Contacto",
      CONTACTNAME: "Nombre de Contacto",
      FAXNO: "Número de Fax",
      PHONE: "Teléfono",
      TERRITORYNAME: "Nombre del Territorio",
      TERRITORY: "Territorio",
      SALESPERSONNAME: "Nombre del Representante de Ventas",
      SALESPERSON: "Representante de Ventas",
      SHIPVIA: "Envío Via",
      DESCRIPTION: "Descripción",
      COUNTRY: "País",
      ZIP: "Código Postal",
      ADDRESS3: "Dirección 3",
      STATE: "Estado",
      ADDRESS2: "Dirección 2",
      CITY: "Ciudad",
      CUSTOMER: "Cliente",
      PROSPECT: "Perspectiva",
      NEWPROSPECT: "Nueva Perspectiva",
      SALESTEMPLATE: "Plantilla de Ventas",
      TOTALAMT: "Monto Total",
      LINETYPE: "Tipo de Línea",
      ITEMKEY: "Clave del Artículo",
      ESTIMATEDQTY: "Cantidad Estimada",
      UNIT: "Unidad",
      PRICE: "Precio",
      AMOUNT: "Monto",
      GENERAL: "General",
      LINKEDCUSTOMER: "Cliente Vinculado",
      LINKEDPROSPECT: "Perspectiva Vinculada",
      LINKEDVENDOR: "Proveedor Vinculado",
      LINKEDOTHER: "Otro Vinculado",
      ESTCLOSINGDAYS: "Est. Días de Cierre",
      ESTCLOSINGDATE: "Est. Fecha de Cierre",
      LINKEDTYPE: "Tipo Vinculado",
      STARTDATE: "Fecha de Inicio",
      ESTREVENUE: "Est. Ingresos",
      CONTACT: "Contacto",
      WEIGHTEDAMT: "Monto Ponderado",
      REMARK: "Observación",
      VENDOR: "Proveedor",
      SALESORDERNO: "N° de Orden de Venta",
      INDUSTRYTYPE: "Tipo de Industria",
      INFORMATIONSOURCE: "Fuente de Información",
      PROJECTCATEGORY: "Categoría de Proyecto",
      PRIORITY: "Prioridad",
      CUSTOMERPROSPECT: "Cliente/Perspectiva",
      RECUSERID: "ID de Usuario de Registro",
      RECDATE: "Fecha de Registro",
      ADDSALESOPPORTUNITY: "Agregar Oportunidad de Venta",
      ATROW: "en la fila ",
      PHASEID: "ID de Fase",
      PERCENTAGE: "Porcentaje",
      POTENTIALAMT: "Monto Potencial",
      COMPETITORID: "ID de Competidor",
      STRENGTHID: "ID de Fortaleza",
      WON: "Ganado",
      REASONID: "ID de Razón",
      ORDERNO: 'N° de Orden',
      CUSTOMERKEY: 'Clave de Cliente',
      CUSTOMERNAME: 'Nombre de Cliente',
      CUSTOMERADDRESSONE: 'Dirección1 del Cliente',
      CUSTOMERADDRESSTWO: 'Dirección2 del Cliente',
      CUSTOMERADDRESSTHREE: 'Dirección3 del Cliente',
      CUSTOMERCITY: 'Ciudad del Cliente',
      CUSTOMERSTATE: 'Estado del Cliente',
      CUSTOMERZIP: 'Código Postal del Cliente',
      CUSTOMERCOUNTRY: 'País del Cliente',
      CUSTOMERATTENTION: 'Atención del Cliente',
      SHIPKEY: 'Clave de Envío',
      SHIPNAME: 'Nombre de Envío',
      SHIPADDRESS1: 'Dirección1 de Envío',
      SHIPADDRESS2: 'Dirección2 de Envío',
      SHIPADDRESS3: 'Dirección3 de Envío',
      SHIPCITY: 'Ciudad de Envío',
      SHIPSTATE: 'Estado de Envío',
      SHIPZIP: 'Código Postal de Envío',
      SHIPCOUNTRY: 'País de Envío',
      SHIPATTENTION: 'Atención de Envío',
      ORDDATE: 'Fecha de Orden',
      REQUESTEDDATE: 'Fecha Solicitada',
      CANCELDATE: 'Fecha de Cancelación',
      BUYER: 'Comprador',
      CUSTOMERPONO: 'N° de Orden de Compra del Cliente',
      TERRITORYKEY: 'Clave de Territorio',
      SALESPERSONKEY: 'Clave de Representante de Ventas',
      TERMSKEY: 'Clave de Términos',
      FOBKEY: 'Clave de FOB',
      SHIPVIAKEY: 'Clave de Envío Via',
      BUYERONE: 'Comprador1',
      COMMENTKEY: 'Clave de Comentario',
      CUSTOMERCLASS: 'Clase de Cliente',
      FRIGHTAMT: 'Monto de Flete',
      DOCTAXAMT: 'Monto de Impuestos del Documento',
      SUBTOTAL: 'Subtotal',
      CURRENCYKEY: 'Clave de Moneda',
      NEWSAMPLE: "Nueva Muestra",
      SAMPLEINFO: "Información de la Muestra",
      SPECIFICATIONS: "Especificaciones",
      SAMPLEDESCRIPTION: "Descripción de la Muestra",
      SPECIALINSTRUCTION: "Instrucción Especial",
      ANTICIPATEDSALESVOLUME: "Volumen de Ventas Previsto",
      CURRENTPRICE: "Precio Actual",
      TARGETPRICE: "Precio Objetivo",
      SAMPLESIZE: "Tamaño de la Muestra",
      ESTTIMEREQ: "Tiempo Estimado Req",
      SAMPLEPIECES: "Piezas de Muestra",
      UOM: "Unidad de Medida",
      SPECIFICATIONTEMPLATE: "Plantilla de Especificaciones",
      GROUPID: "ID de Grupo",
      GROUPDESC: "Descripción del Grupo",
      PROPERTYID: "ID de Propiedad",
      PROPERTYDESC: "Descripción de la Propiedad",
      TARGETVALUE: "Valor Objetivo",
      LOCATION: 'Ubicación',
      UNITPRICE: 'Precio Unitario',
      QUANTITYORDER: 'Cantidad Ordenada',
      QUANTITYREM: 'Cantidad Restante',
      DESCPRCENT: 'Porcentaje de Descuento',
      TAXKEY: 'Clave de Impuesto',
      REVENUEACCOUNT: 'Cuenta de Ingresos',
      QUANTITYSHIP: 'Cantidad Enviada',
      SHIPDATE: 'Fecha de Envío',
      TAXAMOUNT: 'Monto de Impuestos',
      EXTLINEAMT: 'Monto Total de la Línea',
      LINENET: 'Neto de la Línea',
      BASEPRICE: 'Precio Base',
      PRICEUOM: 'Unidad de Medida del Precio',
      DISPBASEPRICE: 'Precio Base de Disponibilidad',
      PROJECTID: 'ID del Proyecto',
      PROJECTNAME: 'Nombre del Proyecto',
      TRANSACTIONNO: 'Número de Transacción',
      REQUESTDATE: 'Fecha de Solicitud',
      DELIVERYDATE: 'Fecha de Entrega',
      INTERNALNOTES: 'Notas Internas',
      OPPORTUNITY: 'Oportunidad',
      QUOTATION: 'Cotización',
      SAMPLE: 'Muestra',
      TRANSACTION: 'Transacción',
      REFRESH: 'Actualizar',
      NOOFTRANSACTION: 'Número de Transacciones',
      TOTALQTY: 'Cantidad Total',
      TOTALCRED: 'Crédito Total',
      AVGQTY: 'Cantidad Promedio',
      TOTALCREDIT: 'Crédito Total',
      SONO: "Número de Orden de Venta",
      ORDERTOTAL: "Total de la Orden",
      AVRAGECREDIT: "Crédito Promedio",
      CREDITPERCENT: "Porcentaje de Crédito",
      ORDER: "Orden",
      CREDIT: "Crédito",
      CREATEQUOTATION: "Crear Cotización",
      MSG: {
        CUSTOMERKEYREQ: "Ingrese la Clave del Cliente/Prospecto",
        NAMEREQ: "Ingrese el Nombre",
        ITEMKEYREQ: "Ingrese la Clave del Artículo",
        DESCRIPTION: "Ingrese la Descripción",
        PHASEID: "Ingrese el ID de la Fase",
        ENTERSTARTDATE: "Ingrese la Fecha de Inicio",
        ENTERCLOSINGDATE: "Ingrese la Fecha de Cierre",
        CLOSINGDATEGREATERTHANSTARTDATE: "La Fecha de Cierre debe ser mayor que la Fecha de Inicio",
        ENTERCOMPETITORS: "Ingrese el ID de los Competidores",
        ENTERREASON: "Ingrese el ID de la Razón",
        ENTERSAMPLEDESC: "Ingrese la Descripción de la Muestra",
        ADDREASON: "Agregar Razón",
        PERCENTAGEVALID: "El Porcentaje no puede ser mayor al 100",
        ESTQTY: "Ingrese la Cantidad Estimada",
        ENTERSALESVOLUME: "Ingrese el Volumen de Ventas Previsto"
      }
    },
    SAMPLETRANSFERAPPROVAL: {
      TITLE: 'Aprobación de Transferencia de Muestras',
      ORDERNO: 'Número de Orden',
      REQUESTNO: 'Número de Solicitud',
      OPPRTUNITYNO: 'Número de Oportunidad',
      ESTTIMEREQ: 'Tiempo Estimado Req (en horas)',
      TRANSFER: 'Transferir',
      LOTNO: 'Número de Lote',
      SAMPLEBATCHNO: 'Número de Lote de Muestra',
      FORMULAKEY: 'Clave de Fórmula',
      MSG: {
        SELECTREQ: 'No se ha seleccionado ninguna fila',
        NODATA: 'No hay datos disponibles'
      }
    }
  }
};

/***/ }),

/***/ 48045:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/fr.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    "SALESOPPORTUNITY": {
      "TITLE": "Maître des opportunités de vente",
      "MASTERNAME": "Nom du maître",
      "ID": "Id",
      "NAME": "Nom",
      "PERCENTAGE": "Pourcentage",
      "DEFAULTSTRNKEY": "Clé de force par défaut",
      "RECORD": "Info d'enregistrement :",
      "USERID": "ID utilisateur - ",
      "DATE": "Date - ",
      "STRNGTHLOOKUP": "Recherche de clé de force",
      "MSG": {
        "REQID": "L'ID ne peut pas être vide",
        "DUPLICATE": "L'ID ne peut pas être en double à la ligne n°",
        "DUPLICATEID": "Ne peut pas être en double",
        "VALIDPER": "Pourcentage invalide"
      }
    },
    "SALESOPPORTUNITYTRAN": {
      "TITLE": "Transaction des opportunités de vente",
      "OPPORTUNITYNO": "Numéro d'opportunité",
      "STATUS": "Statut",
      "DATE": "Date",
      "CLOSINGDATE": "Date de clôture",
      "OPPORTUNITYNAME": "Nom de l'opportunité",
      "CLOSINGPER": "Pourcentage de clôture",
      "EDITHEADER": "Modifier l'en-tête",
      "CUSTOMERINFORMATION": "Info client",
      "CUSTOMERGENERALINFO": "Informations client et générales",
      "NAME": "Nom",
      "TYPE": "Type",
      "ADDRESS1": "Adresse 1",
      "SUBMITTEDDATE": "Date de soumission",
      "SUBMITTEDBY": "Soumis par",
      "URL": "URL",
      "EMAIL": "Email",
      "CONTACTPHONE": "Téléphone de contact",
      "CONTACTNAME": "Nom du contact",
      "FAXNO": "Numéro de fax",
      "PHONE": "Téléphone",
      "TERRITORYNAME": "Nom du territoire",
      "TERRITORY": "Territoire",
      "SALESPERSONNAME": "Nom du vendeur",
      "SALESPERSON": "Vendeur",
      "SHIPVIA": "Expédié via",
      "DESCRIPTION": "Description",
      "COUNTRY": "Pays",
      "ZIP": "Code postal",
      "ADDRESS3": "Adresse 3",
      "STATE": "État",
      "ADDRESS2": "Adresse 2",
      "CITY": "Ville",
      "CUSTOMER": "Client",
      "PROSPECT": "Prospect",
      "NEWPROSPECT": "Nouveau prospect",
      "SALETEMPLATE": "Modèle de vente",
      "TOTALAMT": "Montant total",
      "LINETYPE": "Type de ligne",
      "ITEMKEY": "Clé de l'article",
      "ESTIMATEDQTY": "Quantité estimée",
      "UNIT": "Unité",
      "PRICE": "Prix",
      "AMOUNT": "Montant",
      "GENERAL": "Général",
      "LINKEDCUSTOMER": "Client lié",
      "LINKEDPROSPECT": "Prospect lié",
      "LINKEDVENDOR": "Fournisseur lié",
      "LINKEDOTHER": "Autre lié",
      "ESTCLOSINGDAYS": "Jours de clôture estimés",
      "ESTCLOSINGDATE": "Date de clôture estimée",
      "LINKEDTYPE": "Type lié",
      "STARTDATE": "Date de début",
      "ESTREVENUE": "Revenu estimé",
      "CONTACT": "Contact",
      "WEIGHTEDAMT": "Montant pondéré",
      "REMARK": "Remarque",
      "VENDOR": "Fournisseur",
      "SALESORDERNO": "Numéro de commande de vente",
      "INDUSTRYTYPE": "Type d'industrie",
      "INFORMATIONSOURCE": "Source d'information",
      "PROJECTCATEGORY": "Catégorie de projet",
      "PRIORITY": "Priorité",
      "CUSTOMERPROSPECT": "Client/Prospect",
      "RECUSERID": "ID utilisateur d'enregistrement",
      "RECDATE": "Date d'enregistrement",
      "ADDSALESOPPORTUNITY": "Ajouter une opportunité de vente",
      "ATROW": "à la ligne ",
      "PHASEID": "ID de phase",
      "PERCENTAGE": "Pourcentage",
      "POTENTIALAMT": "Montant potentiel",
      "COMPETITORID": "ID du concurrent",
      "STRENGTHID": "ID de force",
      "WON": "Gagné",
      "REASONID": "ID de raison",
      "ORDERNO": "Numéro de commande",
      "CUSTOMERKEY": "Clé du client",
      "CUSTOMERNAME": "Nom du client",
      "CUSTOMERADDRESSONE": "Adresse du client 1",
      "CUSTOMERADDRESSTWO": "Adresse du client 2",
      "CUSTOMERADDRESSTHREE": "Adresse du client 3",
      "CUSTOMERCITY": "Ville du client",
      "CUSTOMERSTATE": "État du client",
      "CUSTOMERZIP": "Code postal du client",
      "CUSTOMERCOUNTRY": "Pays du client",
      "CUSTOMERATTENTION": "Attention du client",
      "SHIPKEY": "Clé de l'expédition",
      "SHIPNAME": "Nom de l'expédition",
      "SHIPADDRESS1": "Adresse d'expédition 1",
      "SHIPADDRESS2": "Adresse d'expédition 2",
      "SHIPADDRESS3": "Adresse d'expédition 3",
      "SHIPCITY": "Ville d'expédition",
      "SHIPSTATE": "État d'expédition",
      "SHIPZIP": "Code postal d'expédition",
      "SHIPCOUNTRY": "Pays d'expédition",
      "SHIPATTENTION": "Attention de l'expédition",
      "ORDDATE": "Date de commande",
      "REQUESTEDDATE": "Date demandée",
      "CANCELDATE": "Date d'annulation",
      "BUYER": "Acheteur",
      "CUSTOMERPONO": "Numéro de commande client",
      "TERRITORYKEY": "Clé du territoire",
      "SALESPERSONKEY": "Clé du vendeur",
      "TERMSKEY": "Clé des termes",
      "FOBKEY": "Clé FOB",
      "SHIPVIAKEY": "Clé d'expédition",
      "BUYERONE": "Acheteur 1",
      "COMMENTKEY": "Clé de commentaire",
      "CUSTOMERCLASS": "Classe du client",
      "FRIGHTAMT": "Montant du fret",
      "DOCTAXAMT": "Montant de la taxe sur les documents",
      "SUBTOTAL": "Sous-total",
      "CURRENCYKEY": "Clé de la devise",
      "NEWSAMPLE": "Nouvel échantillon",
      "SAMPLEINFO": "Informations sur l'échantillon",
      "SPECIFICATIONS": "Spécifications",
      "SAMPLEDESCRIPTION": "Description de l'échantillon",
      "SPECIALINSTRUCTION": "Instruction spéciale",
      "ANTICIPATEDSALESVOLUME": "Volume des ventes anticipé",
      "CURRENTPRICE": "Prix actuel",
      "TARGETPRICE": "Prix cible",
      "SAMPLESIZE": "Taille de l'échantillon",
      "ESTTIMEREQ": "Temps estimé requis",
      "SAMPLEPIECES": "Pièces de l'échantillon",
      "UOM": "Unité de mesure",
      "SPECIFICATIONTEMPLATE": "Modèle de spécification",
      "GROUPID": "ID du groupe",
      "GROUPDESC": "Description du groupe",
      "PROPERTYID": "ID de propriété",
      "PROPERTYDESC": "Description de la propriété",
      "TARGETVALUE": "Valeur cible",
      "LOCATION": "Emplacement",
      "UNITPRICE": "Prix unitaire",
      "QUANTITYORDER": "Quantité commandée",
      "QUANTITYREM": "Quantité restante",
      "DESCPRCENT": "Pourcentage de réduction",
      "TAXKEY": "Clé de la taxe",
      "REVENUEACCOUNT": "Compte de revenus",
      "QUANTITYSHIP": "Quantité expédiée",
      "SHIPDATE": "Date d'expédition",
      "TAXAMOUNT": "Montant de la taxe",
      "EXTLINEAMT": "Montant de la ligne étendue",
      "LINENET": "Ligne nette",
      "BASEPRICE": "Prix de base",
      "PRICEUOM": "Unité de mesure du prix",
      "DISPBASEPRICE": "Prix de base affiché",
      "PROJECTID": "ID de projet",
      "PROJECTNAME": "Nom du projet",
      "TRANSACTIONNO": "Numéro de transaction",
      "REQUESTDATE": "Date de demande",
      "DELIVERYDATE": "Date de livraison",
      "INTERNALNOTES": "Notes internes",
      "OPPORTUNITY": "Opportunité",
      "QUOTATION": "Devis",
      "SAMPLE": "Échantillon",
      "TRANSACTION": "Transaction",
      "REFRESH": "Actualiser",
      "NOOFTRANSACTION": "Nombre de transactions",
      "TOTALQTY": "Quantité totale",
      "TOTALCRED": "Crédit total",
      "AVGQTY": "Quantité moyenne",
      "TOTALCREDIT": "Crédit total",
      "SONO": "Numéro de commande de vente",
      "ORDERTOTAL": "Total de la commande",
      "AVRAGECREDIT": "Crédit moyen",
      "CREDITPERCENT": "Pourcentage de crédit",
      "ORDER": "Commande",
      "CREDIT": "Crédit",
      "CREATEQUOTATION": "Créer un devis",
      "MSG": {
        "CUSTOMERKEYREQ": "Entrez la clé du client/Prospect",
        "NAMEREQ": "Entrez le nom",
        "ITEMKEYREQ": "Entrez la clé de l'article",
        "DESCRIPTION": "Entrez la description",
        "PHASEID": "Entrez l'ID de phase",
        "ENTERSTARTDATE": "Entrez la date de début",
        "ENTERCLOSINGDATE": "Entrez la date de clôture",
        "CLOSINGDATEGREATERTHANSTARTDATE": "La date de clôture doit être supérieure à la date de début",
        "ENTERCOMPETITORS": "Entrez l'ID des concurrents",
        "ENTERREASON": "Entrez l'ID de la raison",
        "ENTERSAMPLEDESC": "Entrez la description de l'échantillon",
        "ADDREASON": "Ajouter une raison",
        "PERCENTAGEVALID": "Le pourcentage ne peut pas être supérieur à 100",
        "ESTQTY": "Entrez la quantité estimée",
        "ENTERSALESVOLUME": "Entrez le volume des ventes anticipé"
      }
    },
    "SAMPLETRANSFERAPPROVAL": {
      "TITLE": "Transférer les échantillons approuvés",
      "ORDERNO": "Numéro de commande",
      "REQUESTNO": "Numéro de demande",
      "OPPRTUNITYNO": "Numéro d'opportunité",
      "ESTTIMEREQ": "Temps estimé requis (en heures)",
      "TRANSFER": "Transférer",
      "LOTNO": "Numéro de lot",
      "SAMPLEBATCHNO": "Numéro de lot d'échantillons",
      "FORMULAKEY": "Clé de formule",
      "MSG": {
        "SELECTREQ": "Aucune ligne sélectionnée",
        "NODATA": "Aucune donnée disponible"
      }
    }
  }
};

/***/ }),

/***/ 56146:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/hi.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'hi',
  data: {}
};

/***/ }),

/***/ 14981:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/pt.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    SALESOPPORTUNITY: {
      TITLE: 'Mestre de Oportunidade de Vendas',
      MASTERNAME: 'Nome do Mestre',
      ID: 'Id',
      NAME: 'Nome',
      PERCENTAGE: 'Percentagem',
      DEFAULTSTRNKEY: 'Chave de Força Padrão',
      RECORD: 'Informações do Registro:',
      USERID: 'ID do Usuário - ',
      DATE: 'Data - ',
      STRNGTHLOOKUP: 'Consulta de Chave de Força',
      MSG: {
        REQID: 'O Id não pode estar em branco',
        DUPLICATE: 'O Id não pode ser duplicado na linha nº ',
        DUPLICATEID: 'Não pode ser duplicado ',
        VALIDPER: 'Percentagem inválida'
      }
    },
    SALESOPPORTUNITYTRAN: {
      TITLE: "Transação de Oportunidade de Vendas",
      OPPORTUNITYNO: "Número da Oportunidade",
      STATUS: "Status",
      DATE: "Data",
      CLOSINGDATE: "Data de Fechamento",
      OPPORTUNITYNAME: "Nome da Oportunidade",
      CLOSINGPER: "Percentagem de Fechamento",
      EDITHEADER: "Editar Cabeçalho",
      CUSTOMERINFORMATION: "Informações do Cliente",
      CUSTOMERGENERALINFO: "Informações do Cliente e Gerais",
      NAME: "Nome",
      TYPE: "Tipo",
      ADDRESS1: "Endereço 1",
      SUBMITTEDDATE: "Data de Envio",
      SUBMITTEDBY: "Enviado Por",
      URL: "URL",
      EMAIL: "Email",
      CONTACTPHONE: "Telefone de Contato",
      CONTACTNAME: "Nome do Contato",
      FAXNO: "Número do Fax",
      PHONE: "Telefone",
      TERRITORYNAME: "Nome do Território",
      TERRITORY: "Território",
      SALESPERSONNAME: "Nome do Vendedor",
      SALESPERSON: "Vendedor",
      SHIPVIA: "Enviar Via",
      DESCRIPTION: "Descrição",
      COUNTRY: "País",
      ZIP: "CEP",
      ADDRESS3: "Endereço 3",
      STATE: "Estado",
      ADDRESS2: "Endereço 2",
      CITY: "Cidade",
      CUSTOMER: "Cliente",
      PROSPECT: "Prospecto",
      NEWPROSPECT: "Novo Prospecto",
      SALESTEMPLATE: "Modelo de Vendas",
      TOTALAMT: "Valor Total",
      LINETYPE: "Tipo de Linha",
      ITEMKEY: "Chave do Item",
      ESTIMATEDQTY: "Qtd Estimada",
      UNIT: "Unidade",
      PRICE: "Preço",
      AMOUNT: "Valor",
      GENERAL: "Geral",
      LINKEDCUSTOMER: "Cliente Associado",
      LINKEDPROSPECT: "Prospecto Associado",
      LINKEDVENDOR: "Fornecedor Associado",
      LINKEDOTHER: "Outro Associado",
      ESTCLOSINGDAYS: "Dias de Fechamento Est.",
      ESTCLOSINGDATE: "Data de Fechamento Est.",
      LINKEDTYPE: "Tipo Associado",
      STARTDATE: "Data de Início",
      ESTREVENUE: "Receita Est.",
      CONTACT: "Contato",
      WEIGHTEDAMT: "Valor Ponderado",
      REMARK: "Observação",
      VENDOR: "Fornecedor",
      SALESORDERNO: "Nº do Pedido de Vendas",
      INDUSTRYTYPE: "Tipo de Indústria",
      INFORMATIONSOURCE: "Fonte de Informação",
      PROJECTCATEGORY: "Categoria do Projeto",
      PRIORITY: "Prioridade",
      CUSTOMERPROSPECT: "Cliente/Prospecto",
      RECUSERID: "ID do Usuário de Registro",
      RECDATE: "Data de Registro",
      ADDSALESOPPORTUNITY: "Adicionar Oportunidade de Vendas",
      ATROW: "na linha ",
      PHASEID: "ID da Fase",
      PERCENTAGE: "Percentagem",
      POTENTIALAMT: "Montante Potencial",
      COMPETITORID: "ID do Concorrente",
      STRENGTHID: "ID da Força",
      WON: "Ganho",
      REASONID: "ID do Motivo",
      ORDERNO: 'Nº do Pedido',
      CUSTOMERKEY: 'Chave do Cliente',
      CUSTOMERNAME: 'Nome do Cliente',
      CUSTOMERADDRESSONE: 'Endereço do Cliente 1',
      CUSTOMERADDRESSTWO: 'Endereço do Cliente 2',
      CUSTOMERADDRESSTHREE: 'Endereço do Cliente 3',
      CUSTOMERCITY: 'Cidade do Cliente',
      CUSTOMERSTATE: 'Estado do Cliente',
      CUSTOMERZIP: 'CEP do Cliente',
      CUSTOMERCOUNTRY: 'País do Cliente',
      CUSTOMERATTENTION: 'Atenção do Cliente',
      SHIPKEY: 'Chave de Envio',
      SHIPNAME: 'Nome do Envio',
      SHIPADDRESS1: 'Endereço de Envio 1',
      SHIPADDRESS2: 'Endereço de Envio 2',
      SHIPADDRESS3: 'Endereço de Envio 3',
      SHIPCITY: 'Cidade de Envio',
      SHIPSTATE: 'Estado de Envio',
      SHIPZIP: 'CEP de Envio',
      SHIPCOUNTRY: 'País de Envio',
      SHIPATTENTION: 'Atenção de Envio',
      ORDDATE: 'Data do Pedido',
      REQUESTEDDATE: 'Data Solicitada',
      CANCELDATE: 'Data de Cancelamento',
      BUYER: 'Comprador',
      CUSTOMERPONO: 'Nº do Pedido do Cliente',
      TERRITORYKEY: 'Chave do Território',
      SALESPERSONKEY: 'Chave do Vendedor',
      TERMSKEY: 'Chave dos Termos',
      FOBKEY: 'Chave FOB',
      SHIPVIAKEY: 'Chave de Envio Via',
      BUYERONE: 'Comprador 1',
      COMMENTKEY: 'Chave do Comentário',
      CUSTOMERCLASS: 'Classe do Cliente',
      FRIGHTAMT: 'Montante do Frete',
      DOCTAXAMT: 'Montante de Taxa do Documento',
      SUBTOTAL: 'Subtotal',
      CURRENCYKEY: 'Chave da Moeda',
      NEWSAMPLE: "Novo Amostra",
      SAMPLEINFO: "Informações da Amostra",
      SPECIFICATIONS: "Especificações",
      SAMPLEDESCRIPTION: "Descrição da Amostra",
      SPECIALINSTRUCTION: "Instrução Especial",
      ANTICIPATEDSALESVOLUME: "Volume de Vendas Antecipado",
      CURRENTPRICE: "Preço Atual",
      TARGETPRICE: "Preço Alvo",
      SAMPLESIZE: "Tamanho da Amostra",
      ESTTIMEREQ: "Tempo Estimado Necessário",
      SAMPLEPIECES: "Peças da Amostra",
      UOM: "Unidade de Medida",
      SPECIFICATIONTEMPLATE: "Modelo de Especificação",
      GROUPID: "ID do Grupo",
      GROUPDESC: "Descrição do Grupo",
      PROPERTYID: "ID da Propriedade",
      PROPERTYDESC: "Descrição da Propriedade",
      TARGETVALUE: "Valor Alvo",
      LOCATION: 'Localização',
      UNITPRICE: 'Preço Unitário',
      QUANTITYORDER: 'Quantidade do Pedido',
      QUANTITYREM: 'Quantidade Restante',
      DESCPRCENT: 'Percentual de Desconto',
      TAXKEY: 'Chave do Imposto',
      REVENUEACCOUNT: 'Conta de Receita',
      QUANTITYSHIP: 'Quantidade Enviada',
      SHIPDATE: 'Data de Envio',
      TAXAMOUNT: 'Montante de Imposto',
      EXTLINEAMT: 'Montante da Linha Estendida',
      LINENET: 'Linha Líquida',
      BASEPRICE: 'Preço Base',
      PRICEUOM: 'Preço UOM',
      DISPBASEPRICE: 'Preço de Display Base',
      PROJECTID: 'ID do Projeto',
      PROJECTNAME: 'Nome do Projeto',
      TRANSACTIONNO: 'Nº da Transação',
      REQUESTDATE: 'Data de Solicitação',
      DELIVERYDATE: 'Data de Entrega',
      INTERNALNOTES: 'Notas Internas',
      OPPORTUNITY: 'Oportunidade',
      QUOTATION: 'Cotação',
      SAMPLE: 'Amostra',
      TRANSACTION: 'Transação',
      REFRESH: 'Atualizar',
      NOOFTRANSACTION: 'Nº de Transações',
      TOTALQTY: 'Quantidade Total',
      TOTALCRED: 'Crédito Total',
      AVGQTY: 'Quantidade Média',
      TOTALCREDIT: 'Crédito Total',
      SONO: "Nº do Pedido de Venda",
      ORDERTOTAL: "Total do Pedido",
      AVRAGECREDIT: "Média de Crédito",
      CREDITPERCENT: "Percentual de Crédito",
      ORDER: "Pedido",
      CREDIT: "Crédito",
      CREATEQUOTATION: "Criar Cotação",
      MSG: {
        CUSTOMERKEYREQ: "Digite a Chave do Cliente/Chave do Prospecto",
        NAMEREQ: "Digite o Nome",
        ITEMKEYREQ: "Digite a Chave do Item",
        DESCRIPTION: "Digite a Descrição",
        PHASEID: "Digite a Chave da Fase",
        ENTERSTARTDATE: "Digite a Data de Início",
        ENTERCLOSINGDATE: "Digite a Data de Encerramento",
        CLOSINGDATEGREATERTHANSTARTDATE: "A Data de Encerramento deve ser maior que a Data de Início",
        ENTERCOMPETITORS: "Digite a Chave do Concorrente",
        ENTERREASON: "Digite a Chave do Motivo",
        ENTERSAMPLEDESC: "Digite a Descrição da Amostra",
        ADDREASON: "Adicionar Motivo",
        PERCENTAGEVALID: "A Percentagem não pode ser maior que 100",
        ESTQTY: "Digite a Quantidade Estimada",
        ENTERSALESVOLUME: "Digite o Volume de Vendas Antecipado"
      }
    },
    SAMPLETRANSFERAPPROVAL: {
      TITLE: 'Transferir Amostras Aprovadas',
      ORDERNO: 'Nº do Pedido',
      REQUESTNO: 'Nº da Solicitação',
      OPPRTUNITYNO: 'Nº da Oportunidade',
      ESTTIMEREQ: 'Tempo Estimado Req (em Horas)',
      TRANSFER: 'Transferir',
      LOTNO: 'Nº do Lote',
      SAMPLEBATCHNO: 'Nº do Lote da Amostra',
      FORMULAKEY: 'Chave da Fórmula',
      MSG: {
        SELECTREQ: 'Nenhuma Linha Selecionada',
        NODATA: 'Nenhum Dado Disponível'
      }
    }
  }
};

/***/ }),

/***/ 56288:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/vi.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    SALESOPPORTUNITY: {
      "TITLE": "Bảng Quản lý Cơ hội Bán hàng",
      "MASTERNAME": "Tên Master",
      "ID": "ID",
      "NAME": "Tên",
      "PERCENTAGE": "Phần trăm",
      "DEFAULTSTRNKEY": "Khóa Sức mạnh Mặc định",
      "RECORD": "Thông tin Bản ghi:",
      "USERID": "User ID - ",
      "DATE": "Ngày - ",
      "STRNGTHLOOKUP": "Tìm kiếm Khóa Sức mạnh",
      "MSG": {
        "REQID": "ID không thể để trống",
        "DUPLICATE": "ID không thể trùng lặp ở dòng số ",
        "DUPLICATEID": "Không thể trùng lặp ",
        "VALIDPER": "Phần trăm không hợp lệ"
      }
    },
    "SALESOPPORTUNITYTRAN": {
      "TITLE": "Giao dịch Cơ hội Bán hàng",
      "OPPORTUNITYNO": "Số Cơ hội",
      "STATUS": "Trạng thái",
      "DATE": "Ngày",
      "CLOSINGDATE": "Ngày Đóng",
      "OPPORTUNITYNAME": "Tên Cơ hội",
      "CLOSINGPER": "Phần trăm Đóng",
      "EDITHEADER": "Sửa Tiêu đề",
      "CUSTOMERINFORMATION": "Thông tin Khách hàng",
      "CUSTOMERGENERALINFO": "Thông tin Khách hàng & Tổng quát",
      "NAME": "Tên",
      "TYPE": "Loại",
      "ADDRESS1": "Địa chỉ 1",
      "SUBMITTEDDATE": "Ngày Đệ trình",
      "SUBMITTEDBY": "Đã Đệ trình Bởi",
      "URL": "URL",
      "EMAIL": "Email",
      "CONTACTPHONE": "Số Điện thoại Liên hệ",
      "CONTACTNAME": "Tên Người liên hệ",
      "FAXNO": "Số Fax",
      "PHONE": "Số Điện thoại",
      "TERRITORYNAME": "Tên Lãnh thổ",
      "TERRITORY": "Lãnh thổ",
      "SALESPERSONNAME": "Tên Nhân viên Bán hàng",
      "SALESPERSON": "Nhân viên Bán hàng",
      "SHIPVIA": "Vận chuyển qua",
      "DESCRIPTION": "Mô tả",
      "COUNTRY": "Quốc gia",
      "ZIP": "Zip",
      "ADDRESS3": "Địa chỉ 3",
      "STATE": "Tiểu bang",
      "ADDRESS2": "Địa chỉ 2",
      "CITY": "Thành phố",
      "CUSTOMER": "Khách hàng",
      "PROSPECT": "Tiềm năng",
      "NEWPROSPECT": "Tiềm năng mới",
      "SALESTEMPLATE": "Mẫu Bán hàng",
      "TOTALAMT": "Tổng Số tiền",
      "LINETYPE": "Loại Dòng",
      "ITEMKEY": "Khóa Mục hàng",
      "ESTIMATEDQTY": "Số lượng Ước tính",
      "UNIT": "Đơn vị",
      "PRICE": "Giá",
      "AMOUNT": "Số tiền",
      "GENERAL": "Tổng quát",
      "LINKEDCUSTOMER": "Khách hàng Liên kết",
      "LINKEDPROSPECT": "Tiềm năng Liên kết",
      "LINKEDVENDOR": "Nhà cung cấp Liên kết",
      "LINKEDOTHER": "Liên kết khác",
      "ESTCLOSINGDAYS": "Ngày Đóng Ước tính",
      "ESTCLOSINGDATE": "Ngày Đóng Ước tính",
      "LINKEDTYPE": "Loại Liên kết",
      "STARTDATE": "Ngày bắt đầu",
      "ESTREVENUE": "Doanh thu Ước tính",
      "CONTACT": "Liên hệ",
      "WEIGHTEDAMT": "Số tiền được đánh trọng số",
      "REMARK": "Ghi chú",
      "VENDOR": "Nhà cung cấp",
      "SALESORDERNO": "Số ĐH bán hàng",
      "INDUSTRYTYPE": "Loại Ngành nghề",
      "INFORMATIONSOURCE": "Nguồn Thông tin",
      "PROJECTCATEGORY": "Dự án Danh mục",
      "PRIORITY": "Ưu tiên",
      "CUSTOMERPROSPECT": "Khách hàng/Tiềm năng",
      "RECUSERID": "ID Người tạo bản ghi",
      "RECDATE": "Ngày tạo bản ghi",
      "ADDSALESOPPORTUNITY": "Thêm Cơ hội Bán hàng",
      "ATROW": "tại dòng số ",
      "PHASEID": "ID Giai đoạn",
      "PERCENTAGE": "Phần trăm",
      "POTENTIALAMT": "Số tiền Tiềm năng",
      "COMPETITORID": "ID Đối thủ cạnh tranh",
      "STRENGTHID": "ID Sức mạnh",
      "WON": "Đã thắng",
      "REASONID": "ID Lý do",
      "ORDERNO": "Số ĐH.",
      "CUSTOMERKEY": "Khóa Khách hàng",
      "CUSTOMERNAME": "Tên Khách hàng",
      "CUSTOMERADDRESSONE": "Địa chỉ Khách hàng 1",
      "CUSTOMERADDRESSTWO": "Địa chỉ Khách hàng 2",
      "CUSTOMERADDRESSTHREE": "Địa chỉ Khách hàng 3",
      "CUSTOMERCITY": "Thành phố Khách hàng",
      "CUSTOMERSTATE": "Tiểu bang Khách hàng",
      "CUSTOMERZIP": "ZIP của Khách hàng",
      "CUSTOMERCOUNTRY": "Quốc gia của Khách hàng",
      "CUSTOMERATTENTION": "Chú ý của Khách hàng",
      "SHIPKEY": "Khóa Giao hàng",
      "SHIPNAME": "Tên Giao hàng",
      "SHIPADDRESS1": "Địa chỉ Giao hàng 1",
      "SHIPADDRESS2": "Địa chỉ Giao hàng 2",
      "SHIPADDRESS3": "Địa chỉ Giao hàng 3",
      "SHIPCITY": "Thành phố Giao hàng",
      "SHIPSTATE": "Tiểu bang Giao hàng",
      "SHIPZIP": "ZIP Giao hàng",
      "SHIPCOUNTRY": "Quốc gia Giao hàng",
      "SHIPATTENTION": "Chú ý Giao hàng",
      "ORDDATE": "Ngày Đặt hàng",
      "REQUESTEDDATE": "Ngày Yêu cầu",
      "CANCELDATE": "Ngày Hủy",
      "BUYER": "Người mua",
      "CUSTOMERPONO": "Số PO của Khách hàng",
      "TERRITORYKEY": "Khóa Lãnh thổ",
      "SALESPERSONKEY": "Khóa Nhân viên Bán hàng",
      "TERMSKEY": "Khóa Điều khoản",
      "FOBKEY": "Khóa FOB",
      "SHIPVIAKEY": "Khóa Vận chuyển qua",
      "BUYERONE": "Người mua 1",
      "COMMENTKEY": "Khóa Bình luận",
      "CUSTOMERCLASS": "Lớp của Khách hàng",
      "FRIGHTAMT": "Số tiền Vận chuyển",
      "DOCTAXAMT": "Số tiền Thuế",
      "SUBTOTAL": "Tổng phụ",
      "CURRENCYKEY": "Khóa Tiền tệ",
      "NEWSAMPLE": "Mẫu Mới",
      "SAMPLEINFO": "Thông tin Mẫu",
      "SPECIFICATIONS": "Đặc điểm kỹ thuật",
      "SAMPLEDESCRIPTION": "Mô tả Mẫu",
      "SPECIALINSTRUCTION": "Hướng dẫn đặc biệt",
      "ANTICIPATEDSALESVOLUME": "Dự kiến Doanh số bán hàng",
      "CURRENTPRICE": "Giá hiện tại",
      "TARGETPRICE": "Mục tiêu Giá",
      "SAMPLESIZE": "Kích thước Mẫu",
      "ESTTIMEREQ": "Thời gian ước tính cần thiết",
      "SAMPLEPIECES": "Số mẫu",
      "UOM": "Đơn vị",
      "SPECIFICATIONTEMPLATE": "Mẫu Đặc điểm kỹ thuật",
      "GROUPID": "ID Nhóm",
      "GROUPDESC": "Mô tả Nhóm",
      "PROPERTYID": "ID Thuộc tính",
      "PROPERTYDESC": "Mô tả Thuộc tính",
      "TARGETVALUE": "Giá trị Mục tiêu",
      "LOCATION": "Vị trí",
      "UNITPRICE": "Giá Đơn vị",
      "QUANTITYORDER": "Số lượng Đặt hàng",
      "QUANTITYREM": "Số lượng Còn lại",
      "DESCPRCENT": "Phần trăm Giảm giá",
      "TAXKEY": "Khóa Thuế",
      "REVENUEACCOUNT": "Tài khoản Doanh thu",
      "QUANTITYSHIP": "Số lượng Giao hàng",
      "SHIPDATE": "Ngày Giao hàng",
      "TAXAMOUNT": "Số tiền Thuế",
      "EXTLINEAMT": "Số tiền Dòng mở rộng",
      "LINENET": "Dòng Net",
      "BASEPRICE": "Giá cơ sở",
      "PRICEUOM": "Đơn vị Giá",
      "DISPBASEPRICE": "Giá hiển thị cơ sở",
      "PROJECTID": "ID Dự án",
      "PROJECTNAME": "Tên Dự án",
      "TRANSACTIONNO": "Số Giao dịch",
      "REQUESTDATE": "Ngày Yêu cầu",
      "DELIVERYDATE": "Ngày Giao hàng",
      "INTERNALNOTES": "Ghi chú Nội bộ",
      "OPPORTUNITY": "Cơ hội",
      "QUOTATION": "Báo giá",
      "SAMPLE": "Mẫu",
      "TRANSACTION": "Giao dịch",
      "REFRESH": "Làm mới",
      "NOOFTRANSACTION": "Số lượng Giao dịch",
      "TOTALQTY": "Tổng Số lượng",
      "TOTALCRED": "Tổng Tín dụng",
      "AVRAGECREDIT": "Tín dụng Trung bình",
      "CREDITPERCENT": "Tỷ lệ Tín dụng",
      "ORDER": "Đơn hàng",
      "CREDIT": "Tín dụng",
      "CREATEQUOTATION": "Tạo Báo giá",
      "MSG": {
        "CUSTOMERKEYREQ": "Nhập Khóa Khách hàng/Tiềm năng",
        "NAMEREQ": "Nhập Tên",
        "ITEMKEYREQ": "Nhập Khóa Mục hàng",
        "DESCRIPTION": "Nhập Mô tả",
        "PHASEID": "Nhập ID Giai đoạn",
        "ENTERSTARTDATE": "Nhập Ngày bắt đầu",
        "ENTERCLOSINGDATE": "Nhập Ngày Đóng",
        "CLOSINGDATEGREATERTHANSTARTDATE": "Ngày Đóng phải lớn hơn Ngày bắt đầu",
        "ENTERCOMPETITORS": "Nhập ID Đối thủ cạnh tranh.",
        "ENTERREASON": "Nhập ID Lý do.",
        "ENTERSAMPLEDESC": "Nhập Mô tả Mẫu",
        "ADDREASON": "Thêm Lý do",
        "PERCENTAGEVALID": "Phần trăm không thể lớn hơn 100",
        "ESTQTY": "Nhập Số lượng Ước tính",
        "ENTERSALESVOLUME": "Nhập Dự kiến Doanh số bán hàng"
      }
    },
    SAMPLETRANSFERAPPROVAL: {
      "TITLE": "Chuyển Mẫu đã Duyệt",
      "ORDERNO": "Số Đơn hàng",
      "REQUESTNO": "Số Yêu cầu",
      "OPPRTUNITYNO": "Số Cơ hội",
      "ESTTIMEREQ": "Thời gian Ước tính (trong giờ)",
      "TRANSFER": "Chuyển",
      "LOTNO": "Số Lô",
      "SAMPLEBATCHNO": "Số Lô Mẫu",
      "FORMULAKEY": "Khóa Công thức",
      "MSG": {
        "SELECTREQ": "Không có hàng nào được chọn",
        "NODATA": "Không có Dữ liệu"
      }
    }
  }
};

/***/ }),

/***/ 25234:
/*!*************************************!*\
  !*** ./src/app/main/crm/i18n/zh.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    "SALESOPPORTUNITY": {
      "TITLE": "销售机会主数据",
      "MASTERNAME": "主数据名称",
      "ID": "标识",
      "NAME": "名称",
      "PERCENTAGE": "百分比",
      "DEFAULTSTRNKEY": "默认强度关键字",
      "RECORD": "记录信息：",
      "USERID": "用户标识 - ",
      "DATE": "日期 - ",
      "STRNGTHLOOKUP": "强度关键字查找",
      "MSG": {
        "REQID": "标识不能为空",
        "DUPLICATE": "标识不能在行号重复",
        "DUPLICATEID": "不能重复",
        "VALIDPER": "无效的百分比"
      }
    },
    "SALESOPPORTUNITYTRAN": {
      "TITLE": "销售机会交易",
      "OPPORTUNITYNO": "机会编号",
      "STATUS": "状态",
      "DATE": "日期",
      "CLOSINGDATE": "截止日期",
      "OPPORTUNITYNAME": "机会名称",
      "CLOSINGPER": "截止百分比",
      "EDITHEADER": "编辑标题",
      "CUSTOMERINFORMATION": "客户信息",
      "CUSTOMERGENERALINFO": "客户与常规信息",
      "NAME": "名称",
      "TYPE": "类型",
      "ADDRESS1": "地址 1",
      "SUBMITTEDDATE": "提交日期",
      "SUBMITTEDBY": "提交人",
      "URL": "网址",
      "EMAIL": "电子邮件",
      "CONTACTPHONE": "联系电话",
      "CONTACTNAME": "联系人姓名",
      "FAXNO": "传真号",
      "PHONE": "电话",
      "TERRITORYNAME": "区域名称",
      "TERRITORY": "区域",
      "SALESPERSONNAME": "销售人员姓名",
      "SALESPERSON": "销售人员",
      "SHIPVIA": "发运方式",
      "DESCRIPTION": "描述",
      "COUNTRY": "国家",
      "ZIP": "邮编",
      "ADDRESS3": "地址 3",
      "STATE": "州",
      "ADDRESS2": "地址 2",
      "CITY": "城市",
      "CUSTOMER": "客户",
      "PROSPECT": "前景",
      "NEWPROSPECT": "新前景",
      "SALESTEMPLATE": "销售模板",
      "TOTALAMT": "总金额",
      "LINETYPE": "行类型",
      "ITEMKEY": "项目关键字",
      "ESTIMATEDQTY": "估计数量",
      "UNIT": "单位",
      "PRICE": "价格",
      "AMOUNT": "金额",
      "GENERAL": "通用",
      "LINKEDCUSTOMER": "关联客户",
      "LINKEDPROSPECT": "关联前景",
      "LINKEDVENDOR": "关联供应商",
      "LINKEDOTHER": "关联其他",
      "ESTCLOSINGDAYS": "估计关闭天数",
      "ESTCLOSINGDATE": "估计关闭日期",
      "LINKEDTYPE": "关联类型",
      "STARTDATE": "开始日期",
      "ESTREVENUE": "估计收入",
      "CONTACT": "联系",
      "WEIGHTEDAMT": "加权金额",
      "REMARK": "备注",
      "VENDOR": "供应商",
      "SALESORDERNO": "销售订单号",
      "INDUSTRYTYPE": "行业类型",
      "INFORMATIONSOURCE": "信息来源",
      "PROJECTCATEGORY": "项目类别",
      "PRIORITY": "优先级",
      "CUSTOMERPROSPECT": "客户/前景",
      "RECUSERID": "记录用户 ID",
      "RECDATE": "记录日期",
      "ADDSALESOPPORTUNITY": "添加销售机会",
      "ATROW": "在行 ",
      "PHASEID": "阶段 ID",
      "PERCENTAGE": "百分比",
      "POTENTIALAMT": "潜在金额",
      "COMPETITORID": "竞争对手 ID",
      "STRENGTHID": "强度 ID",
      "WON": "已赢得",
      "REASONID": "原因 ID",
      "ORDERNO": "订单号",
      "CUSTOMERKEY": "客户关键字",
      "CUSTOMERNAME": "客户名称",
      "CUSTOMERADDRESSONE": "客户地址 1",
      "CUSTOMERADDRESSTWO": "客户地址 2",
      "CUSTOMERADDRESSTHREE": "客户地址 3",
      "CUSTOMERCITY": "客户城市",
      "CUSTOMERSTATE": "客户州",
      "CUSTOMERZIP": "客户邮编",
      "CUSTOMERCOUNTRY": "客户国家",
      "CUSTOMERATTENTION": "客户注意事项",
      "SHIPKEY": "发货关键字",
      "SHIPNAME": "发货名称",
      "SHIPADDRESS1": "发货地址 1",
      "SHIPADDRESS2": "发货地址 2",
      "SHIPADDRESS3": "发货地址 3",
      "SHIPCITY": "发货城市",
      "SHIPSTATE": "发货州",
      "SHIPZIP": "发货邮编",
      "SHIPCOUNTRY": "发货国家",
      "SHIPATTENTION": "发货注意事项",
      "ORDDATE": "订单日期",
      "REQUESTEDDATE": "要求日期",
      "CANCELDATE": "取消日期",
      "BUYER": "买方",
      "CUSTOMERPONO": "客户采购订单号",
      "TERRITORYKEY": "区域关键字",
      "SALESPERSONKEY": "销售人员关键字",
      "TERMSKEY": "条款关键字",
      "FOBKEY": "FOB 关键字",
      "SHIPVIAKEY": "发运方式关键字",
      "BUYERONE": "买方 1",
      "COMMENTKEY": "评论关键字",
      "CUSTOMERCLASS": "客户类别",
      "FRIGHTAMT": "运费金额",
      "DOCTAXAMT": "文档税金额",
      "SUBTOTAL": "小计",
      "CURRENCYKEY": "货币关键字",
      "NEWSAMPLE": "新样品",
      "SAMPLEINFO": "样品信息",
      "SPECIFICATIONS": "规格",
      "SAMPLEDESCRIPTION": "样品描述",
      "SPECIALINSTRUCTION": "特别说明",
      "ANTICIPATEDSALESVOLUME": "预期销售量",
      "CURRENTPRICE": "当前价格",
      "TARGETPRICE": "目标价格",
      "SAMPLESIZE": "样品尺寸",
      "ESTTIMEREQ": "估计所需时间",
      "SAMPLEPIECES": "样品件数",
      "UOM": "单位",
      "SPECIFICATIONTEMPLATE": "规格模板",
      "GROUPID": "组 ID",
      "GROUPDESC": "组描述",
      "PROPERTYID": "属性 ID",
      "PROPERTYDESC": "属性描述",
      "TARGETVALUE": "目标值",
      "LOCATION": "位置",
      "UNITPRICE": "单价",
      "QUANTITYORDER": "订单数量",
      "QUANTITYREM": "剩余数量",
      "DESCPRCENT": "折扣百分比",
      "TAXKEY": "税收关键字",
      "REVENUEACCOUNT": "收入账户",
      "QUANTITYSHIP": "发货数量",
      "SHIPDATE": "发货日期",
      "TAXAMOUNT": "税额",
      "EXTLINEAMT": "扩展行金额",
      "LINENET": "行净额",
      "BASEPRICE": "基准价格",
      "PRICEUOM": "价格单位",
      "DISPBASEPRICE": "显示基准价格",
      "PROJECTID": "项目 ID",
      "PROJECTNAME": "项目名称",
      "TRANSACTIONNO": "交易号",
      "REQUESTDATE": "请求日期",
      "DELIVERYDATE": "交货日期",
      "INTERNALNOTES": "内部注释",
      "OPPORTUNITY": "机会",
      "QUOTATION": "报价",
      "SAMPLE": "样品",
      "TRANSACTION": "交易",
      "REFRESH": "刷新",
      "NOOFTRANSACTION": "交易数量",
      "TOTALQTY": "总数量",
      "TOTALCRED": "总信用",
      "AVGQTY": "平均数量",
      "TOTALCREDIT": "总信用",
      "SONO": "销售订单号",
      "ORDERTOTAL": "订单总额",
      "AVRAGECREDIT": "平均信用",
      "CREDITPERCENT": "信用百分比",
      "ORDER": "订单",
      "CREDIT": "信用",
      "CREATEQUOTATION": "创建报价",
      "MSG": {
        "CUSTOMERKEYREQ": "输入客户关键字/展望关键字",
        "NAMEREQ": "输入名称",
        "ITEMKEYREQ": "输入项目关键字",
        "DESCRIPTION": "输入描述",
        "PHASEID": "输入阶段 ID",
        "ENTERSTARTDATE": "输入开始日期",
        "ENTERCLOSINGDATE": "输入截止日期",
        "CLOSINGDATEGREATERTHANSTARTDATE": "截止日期应大于开始日期",
        "ENTERCOMPETITORS": "输入竞争对手 ID",
        "ENTERREASON": "输入原因 ID",
        "ENTERSAMPLEDESC": "输入样品描述",
        "ADDREASON": "添加原因",
        "PERCENTAGEVALID": "百分比不能大于 100",
        "ESTQTY": "输入估计数量",
        "ENTERSALESVOLUME": "输入预期销售量"
      }
    },
    "SAMPLETRANSFERAPPROVAL": {
      "TITLE": "样品转移批准",
      "ORDERNO": "订单号",
      "REQUESTNO": "请求号",
      "OPPRTUNITYNO": "机会号",
      "ESTTIMEREQ": "估计所需时间（小时）",
      "TRANSFER": "转移",
      "LOTNO": "批号",
      "SAMPLEBATCHNO": "样品批号",
      "FORMULAKEY": "配方关键字",
      "MSG": {
        "SELECTREQ": "未选择任何行",
        "NODATA": "无可用数据"
      }
    }
  }
};

/***/ }),

/***/ 61142:
/*!*************************************************************!*\
  !*** ./src/app/main/crm/models/sales-opportunity-master.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOpportunityDetailMasterModel: () => (/* binding */ SalesOpportunityDetailMasterModel),
/* harmony export */   SalesOpportunityMasterModel: () => (/* binding */ SalesOpportunityMasterModel)
/* harmony export */ });
class SalesOpportunityMasterModel {
  constructor() {
    this.MasterName = "";
  }
}
class SalesOpportunityDetailMasterModel {
  constructor() {
    this.RecUserID = "";
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
    this.Flag = 'M';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date();
    ;
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
    this.Flag = 'A';
  }
}

/***/ }),

/***/ 96821:
/*!************************************************************************!*\
  !*** ./src/app/main/crm/models/sales-opportunity-transaction.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRMAdditionalInfoModel: () => (/* binding */ CRMAdditionalInfoModel),
/* harmony export */   CRMCustomerInfoModel: () => (/* binding */ CRMCustomerInfoModel),
/* harmony export */   CompetitorsModal: () => (/* binding */ CompetitorsModal),
/* harmony export */   CustomerProspectInfoModal: () => (/* binding */ CustomerProspectInfoModal),
/* harmony export */   PhasesModal: () => (/* binding */ PhasesModal),
/* harmony export */   ProductRangeModal: () => (/* binding */ ProductRangeModal),
/* harmony export */   ReasonModal: () => (/* binding */ ReasonModal)
/* harmony export */ });
class CRMCustomerInfoModel {
  constructor() {
    this.OppNo = "";
    this.Name = "";
    this.Status = "NEW";
    this.StartDate = new Date();
    this.PredClosing = 0;
    this.PredClosingDate = new Date();
    this.ClosingDate = null;
    this.ProspactCustomer = "C";
    this.CusKey = "";
    this.CusContact = "";
    this.ContactPhone = "";
    this.Email = "";
    this.SalesEmp = "";
    this.Territory = "";
    this.EstReven = 0;
    this.WeightedAmt = 0;
    this.LinkCpv = "C";
    this.ChannelCusKey = "";
    this.ChannelCusName = "";
    this.channelContact = "";
    this.Project = "";
    this.InformationSource = "";
    this.Industry = "";
    this.Remark = "";
    this.Priority = "";
    this.SONO = "";
    this.Recuserid = "";
    this.Recdate = new Date();
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
    this.EntryDate = new Date();
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.ShipViaKey = "";
    this.SalesEmpDesc = "";
    this.TerritoryDesc = "";
    this.SubmittedDate = null;
  }
}
class CustomerProspectInfoModal {
  constructor() {
    this.URL = "";
    this.CustName = "";
    this.Address_1 = "";
    this.City = "";
    this.Address_2 = "";
    this.State = "";
    this.Address_3 = "";
    this.Zip_Code = "";
    this.Country = "";
    this.Ship_Via_Code = "";
    this.Ship_Via_CodeDesc = "";
    this.Phone_1 = "";
    this.Fax_No = "";
  }
}
class ProductRangeModal {
  constructor() {
    this.OppNo = "";
    this.RowId = 0;
    this.LineType = "Inventory";
    this.ItemKey = "";
    this.Description = "";
    this.EstimatedQty = 0;
    this.Unit = "";
    this.Price = 0;
    this.Amount = 0;
    this.Recuserid = "";
    this.Recdate = null;
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.mode = "I";
    this.Status = "NEW";
  }
}
class PhasesModal {
  constructor() {
    this.OppNo = "";
    this.RowId = 0;
    this.StartDate = new Date();
    this.ClosingDate = new Date();
    this.Stage = "";
    this.Percentage = 0;
    this.PotentialAmt = 0;
    this.WeightedAmt = 0;
    this.Recuserid = "";
    this.Recdate = new Date();
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.mode = "I";
  }
}
class CompetitorsModal {
  constructor() {
    this.OppNo = "";
    this.RowId = 0;
    this.CompetitorKey = "";
    this.StrengthKey = "";
    this.Remarks = "";
    this.Won = false;
    this.Recuserid = "";
    this.Recdate = new Date();
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.mode = "I";
  }
}
class ReasonModal {
  constructor() {
    this.OppNo = "";
    this.RowId = 0;
    this.ReasonKey = "";
    this.Description = "";
    this.Recuserid = "";
    this.Recdate = new Date();
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.mode = "I";
  }
}
class CRMAdditionalInfoModel {
  constructor() {
    this.SMTransactionNo = "";
    this.SMRequestNo = "";
    this.SmTemplateID = "";
    this.SmTemplateDesc = "";
    this.RowId = 0;
    this.SmPropertyId = "";
    this.SmGroupId = "";
    this.SmPropertyDesc = "";
    this.SmGroupDesc = "";
    this.SMGroupSeq = 0;
    this.SMPropertySeq = 0;
    this.SmPropertyValue = "";
    this.SmDescription = "";
    this.RecUserId = "";
    this.RecDate = new Date();
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
    this.TargetValue = "";
    this.Description = "";
  }
}

/***/ }),

/***/ 61704:
/*!*******************************************************************!*\
  !*** ./src/app/main/crm/models/transfer-approved-sample.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferApprovedSamplesModel: () => (/* binding */ TransferApprovedSamplesModel)
/* harmony export */ });
class TransferApprovedSamplesModel {
  constructor() {
    this.SMTransactionNo = "";
    this.LotNo = "";
    this.OrdNo = "";
    this.SMRequestNo = "";
    this.opportunityno = "";
    this.smAnticipatedSalesVolume = "";
    this.smBatchNo = "";
    this.smCurrentPrice = "";
    this.smFormulaID = "";
    this.smSampleDesciption = "";
    this.smSamplePices = "";
    this.smSampleSize = "";
    this.smSampleSizeUOM = "";
    this.smSpecialInstruction = "";
    this.smStatus = "";
    this.smTargetPrice = "";
    this.smTimeRequired = "";
    this.Recuserid = "";
    this.recdate = new Date();
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
    this.ESG_REASON = "";
    this.ESG_APPROVER = "";
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
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_main_crm_crm_module_ts.js.map