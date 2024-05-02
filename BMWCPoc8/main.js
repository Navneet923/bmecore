(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["main"],{

/***/ 92170:
/*!***************************!*\
  !*** ./src/app/Global.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Globals: () => (/* binding */ Globals)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class Globals {
  constructor() {
    this.gCmpName = '';
    this.gCmpID = '';
    this.isRelogin = true;
  }
  static #_ = this.ɵfac = function Globals_Factory(t) {
    return new (t || Globals)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Globals,
    factory: Globals.ɵfac
  });
}

/***/ }),

/***/ 43397:
/*!*************************************************************!*\
  !*** ./src/app/account/components/login/login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _models_login_reqeust_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login-reqeust.model */ 46169);
/* harmony import */ var _models_login_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login-response.model */ 26908);
/* harmony import */ var src_app_core_models_app_user_session_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/app-user-session.model */ 35311);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login.service */ 96897);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/toast-message.service */ 48770);
/* harmony import */ var src_app_Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Global */ 92170);
/* harmony import */ var src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/utility.services */ 14158);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 21916);



















function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function LoginComponent_select_23_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comp_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", comp_r10.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](comp_r10.Name);
  }
}
function LoginComponent_select_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_select_23_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.selectedCompId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, LoginComponent_select_23_option_1_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.selectedCompId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.marrCompanyList);
  }
}
function LoginComponent_ng_template_24_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comp_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", comp_r14.TenantId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](comp_r14.TenantId);
  }
}
function LoginComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_24_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.selectedTenantId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, LoginComponent_ng_template_24_option_1_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.selectedTenantId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.marrCompanyList);
  }
}
function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_div_26_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r17.sendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r4.mbIsCmpList);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r4.sendOTPButtonTitle, " ");
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 48)(1, "div", 31)(2, "div", 49)(3, "div", 50)(4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_27_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.loginReqeustModel.OTP = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_div_27_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.verifyOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "COMMON.ENTEROTP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.mbIsSendOTP)("ngModel", ctx_r5.loginReqeustModel.OTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.mbIsSendOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 7, "COMMON.VERIFYOTP"), " ");
  }
}
function LoginComponent_kendo_dialog_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "kendo-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function LoginComponent_kendo_dialog_39_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.noErrorClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "kendo-dialog-actions")(9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_kendo_dialog_39_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.yesErrorclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_kendo_dialog_39_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.noErrorClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r6.modalErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 6, "COMMON.YES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 8, "COMMON.NO"), " ");
  }
}
function LoginComponent_kendo_dialog_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "kendo-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function LoginComponent_kendo_dialog_40_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.bmlfClickLicenseExipredOk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "kendo-dialog-actions")(8, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_kendo_dialog_40_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.bmlfClickLicenseExipredOk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 2, "COMMON.BATCHMASTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx_r7.modalErrorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
  }
}
function LoginComponent_kendo_dialog_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "kendo-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function LoginComponent_kendo_dialog_107_Template_kendo_dialog_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.bmlfCommoActionDialog("closeFrogotPass"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "kendo-dialog-titlebar")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 30)(7, "div", 31)(8, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "use", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_kendo_dialog_107_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.mobjForgotPassData.LoginId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 30)(20, "div", 31)(21, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 8)(27, "div", 9)(28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "use", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_kendo_dialog_107_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.mobjForgotPassData.email = $event);
    })("blur", function LoginComponent_kendo_dialog_107_Template_input_blur_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.bmlfChkPassStrType(ctx_r33.mobjForgotPassData.email, "chkEmailId"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 30)(33, "div", 31)(34, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 8)(40, "div", 9)(41, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "use", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_kendo_dialog_107_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.mobjForgotPassData.phoneDetails = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "kendo-dialog-actions")(49, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_kendo_dialog_107_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.bmlfCommoActionDialog("ForgotPass"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_kendo_dialog_107_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.bmlfCommoActionDialog("closeFrogotPass"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 10, "COMMON.FORGOTPASSWORD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 12, "COMMON.USERID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r8.mobjForgotPassData.LoginId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 14, "COMMON.REGISTEREDEMAILID"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r8.mobjForgotPassData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](36, 16, "COMMON.REGISTEREDPHONE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r8.mobjForgotPassData.phoneDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](47, 18, "COMMON.FORGOTALERTMSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](51, 20, "COMMON.RESETPASSWORD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](54, 22, "COMMON.CANCEL"), " ");
  }
}
// import * as CryptoJS from 'crypto-js';
class LoginComponent {
  constructor(lsService, router, renderer, loginService, userService, alertService, _toastMessageService, globals, utilService, appSettings) {
    this.lsService = lsService;
    this.router = router;
    this.renderer = renderer;
    this.loginService = loginService;
    this.userService = userService;
    this.alertService = alertService;
    this._toastMessageService = _toastMessageService;
    this.globals = globals;
    this.utilService = utilService;
    this.appSettings = appSettings;
    this.loginReqeustModel = new _models_login_reqeust_model__WEBPACK_IMPORTED_MODULE_0__.LoginReqeustModel();
    this.loginResponseModel = new _models_login_response_model__WEBPACK_IMPORTED_MODULE_1__.LoginResponseModel();
    this.modalErrorBool = false;
    this.modalLicenseExpired = false;
    this.mbshowLoader = false;
    this.msLoginUser = ''; // deepak porwal 20/nov/2020 scr no.142973
    this.msCompanyId = ''; // deepak porwal 24/Nov/2020 to fetch usersetting
    this.msGroupType = 'Normal';
    this.mobjChangePassData = {};
    this.mbIsChangePassModal = false;
    this.mobjForgotPassData = {};
    this.mbIsForgotPassModal = false;
    this.msAppVersion = '';
    this.msAppCreateDate = '';
    this.msGuiAppVersion = '';
    this.mbIsCmpList = false;
    this.marrCompanyList = [];
    this.mbIsSendOTP = false;
    this.mbIsVerifyOTP = false;
    this.timeLeft = 60;
    this.sendOTPButtonTitle = '';
    this.msPreUserId = '';
    this.msPrePwd = '';
    this.mbIsSkip2FASecurity = false;
    this.mobjUserData = this.lsService.getUserSession();
  }
  ngOnInit() {
    this.renderer.setAttribute(document.body, 'class', '');
    this.renderer.addClass(document.body, 'body-bg');
    if (this.lsService.isUserLogin()) {
      this.msGroupType = localStorage.getItem("isLoginType");
      if (this.msGroupType == 'Admin' || this.msGroupType == 'Super Admin') {
        this.router.navigate(['/main/admin/admin']);
      } else if (this.msGroupType.toUpperCase() == 'WMS') {
        this.router.navigate(['/main/wmsprofile/wmsprofile']);
      } else {
        this.router.navigate(['/main/dashboard/dashboardpage']);
      }
    }
    this.loginResponseModel.CompanyList = [];
    // this.msGuiAppVersion
    setTimeout(() => {
      this.bmlfGetAppVersion();
    }, 500);
    localStorage.removeItem('AlertCount');
    localStorage.removeItem('dashboardLayout');
    this.sendOTPButtonTitle = this.utilService.bmgfonTranslate('COMMON.SENDOTP');
  }
  onLogin() {
    let userSession = new src_app_core_models_app_user_session_model__WEBPACK_IMPORTED_MODULE_2__.UserSessionModel();
    let selectedComps = this.loginResponseModel.CompanyList.filter(s => s.Name.toUpperCase() == this.selectedCompId.toUpperCase());
    if (selectedComps.length == 0) {
      selectedComps = this.loginResponseModel.CompanyList;
    }
    if (selectedComps && selectedComps.length > 0) {
      userSession.UserId = selectedComps[0].LoginId;
      userSession.UserName = selectedComps[0].LoginId;
      ;
      userSession.CmpDbName = selectedComps[0].CmpDbName;
      userSession.CompName = selectedComps[0].Name;
      userSession.CompanyList = this.loginResponseModel.CompanyList;
      userSession.GroupType = selectedComps[0].TenantId == '00' ? 'Super Admin' : selectedComps[0].GroupType;
      userSession.TenantId = selectedComps[0].TenantId;
      userSession.SecondaryGroup = selectedComps[0].SecondaryGroup == null ? '' : selectedComps[0].SecondaryGroup;
      userSession.langcode = this.loginResponseModel.tblValidUser[0].LANGCODE;
      userSession.langdescription = this.loginResponseModel.tblValidUser[0].LANGDESCRIPTION;
      userSession.User_LangID = this.loginResponseModel.tblValidUser[0].User_LangID;
      userSession.PrimaryGroup = this.loginResponseModel.tblValidUser[0].GroupId;
      this.lsService.setUserSession(userSession);
      //Begin 03/Dec/2020 SCR No.147854
      //this.globals.gCmpID = userSession.CmpDbName;
      //this.globals.gCmpName =userSession.CompName;
      this.globals.gCmpID = userSession.CompName;
      this.globals.gCmpName = userSession.CmpDbName;
      //End 03/Dec/2020 SCR No.147854
      this.msLoginUser = selectedComps[0].LoginId; // deepak porwal 20/nov/2020 scr no.142973
      this.msCompanyId = selectedComps[0].CmpDbName; // deepak porwal 24/Nov/2020 to fetch usersetting
    }

    this.mbshowLoader = true;
    this.loginService.setConnection().subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
        this.lsService.clear();
        this.mbshowLoader = false;
        // Added by Satish Thalke
        this.router.navigate(['account/login']);
        return false;
      }
      if (res != null) {
        // Uncomment when license is given
        if (res.Response[0].ResponseText == "Success" && res.Response[0].AlreadyLogin.toUpperCase() == "false".toUpperCase()) {
          if (this.msGroupType != 'Super Admin') {
            if (res.CmpDefaults.length == 0) {
              this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
              this.lsService.clear();
              this.mbshowLoader = false;
              // Added by Satish Thalke
              this.router.navigate(['account/login']);
            }
            localStorage.setItem("DistributionParameter", JSON.stringify(res.DistributionParameter));
            localStorage.setItem("CompanyDefaults", JSON.stringify(res.CmpDefaults));
            localStorage.setItem("SCMPHData", JSON.stringify(res.SCMPHData));
            localStorage.setItem("RoundingDefaults", JSON.stringify(res.RoundingDefaults));
            localStorage.setItem("FinSchema", JSON.stringify(res.FinSchema));
            localStorage.setItem("UMCONFIG", JSON.stringify(res.UMCONFIG));
            // deepak porwal 17/dec/2020 in case of bme financeonly
            if (res['FINSEGMENTSETUP'] != undefined) {
              localStorage.setItem("FINSEGMENTSETUP", JSON.stringify(res['FINSEGMENTSETUP']));
            }
            if (res['FINMULTIDIMSETUP'] != undefined) {
              localStorage.setItem("FINMULTIDIMSETUP", JSON.stringify(res['FINSEGMENTSETUP']));
            }
            this.getDefaultValues(res.CmpDefaults);
            this.bmlfGetUserValidateandCustomData();
          }
          this.getWhatsNewUrl();
          this.getUserSettingCopyFromTo(); // deepak porwal 20/nov/2020 scr no.142973
          this.lsService.setUserLogin(this.msGroupType);
          this.bmlfGetMenuByGrp(this.msLoginUser, this.msGroupType, true);
        } else if (res.Response[0].ResponseText == "Success" && res.Response[0].AlreadyLogin.toUpperCase() == "true".toUpperCase()) {
          this.modalErrorBool = true;
          this.modalErrorTitle = "User Login Alert";
          this.modalErrorMessage = "Previous session was ended abnormally or someone else is already logged-in using this account. If you continue, the other user will be disconnected. Continue?";
        }
        // Begin..... Comment if license not given
        else if (res.Response[0].ErrorCode == "7002") {
          //this.modalErrorBool = true;
          //this.modalErrorTitle = "User Licence Error";
          //this.modalErrorMessage = res.Response[0].ResponseText;
          this.onOpenErrorBlock(res.Response[0].ResponseText);
          this.mbshowLoader = false;
        } else if (res.Response[0].ErrorCode == "7004") {
          this.modalLicenseExpired = true;
          this.modalErrorTitle = "User Login Alert";
          this.modalErrorMessage = res.Response[0].ResponseText;
          this.mbshowLoader = false;
        } //End..... Comment if license not given
        else {
          this.onOpenErrorBlock(res.Response[0].ResponseText);
          this.mbshowLoader = false;
        }
        // this.getFormulaActive();
      }
    }, err => {
      console.log(err);
      this.mbshowLoader = false;
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
      this.lsService.clear();
      // Added by Satish Thalke
      this.router.navigate(['account/login']);
    });
  }
  getWmsScreenSettingPermission() {
    let pobjReqData = {
      ScreenName: 'Login',
      LookupKey: 'AllowWMSLayout',
      Filter1: this.msLoginUser
    };
    this.userService.GETSysAdminGeneralSqlData(pobjReqData).subscribe(res => {
      localStorage.setItem("WMSPermission", JSON.stringify(res.LookupData[0].Column1));
      this.mbshowLoader = false;
    }).add(() => {
      this.mbshowLoader = false;
    });
  }
  bmlfGetUserValidateandCustomData() {
    let pobjReqData = {
      ScreenName: 'User Validation',
      LookupKey: 'ValidationInfo',
      Filter1: this.msLoginUser
    };
    this.userService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res != null) {
        if (res.LookupData.length > 0) {
          localStorage.setItem("UserValidationData", JSON.stringify(res.LookupData));
        }
        if (res.Table1.length > 0) {
          localStorage.setItem("CustomServiceData", JSON.stringify(res.Table1));
        }
      }
    }).add(() => {
      this.mbshowLoader = false;
    });
  }
  getWhatsNewUrl() {
    let pobjReqData = {
      ScreenName: 'WhatsNEW',
      LookupKey: 'WhatsNEWURL'
    };
    this.userService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res != null) {
        if (res.LookupData.length > 0) {
          localStorage.setItem("WhatsNewUrl", JSON.stringify(res.LookupData[0].Column1));
        }
      }
    }).add(() => {
      this.mbshowLoader = false;
    });
  }
  getFormulaActive() {
    //   try {
    //   let reqData: any = {
    //     JSON: JSON.stringify({
    //       HeaderData: [{   
    //         Result: "",    
    //       }],
    //       Response: [{
    //         "ResponseText": "", "ErrorCode": ""
    //       }]
    //     })
    //   };
    //   this.loginService.bmgfActiveFormula(reqData).subscribe((res) => { 
    //     if (res == null) {
    //       return;
    //     }      
    //   })
    // } catch (e) {
    //   console.log(e);
    // }
  }
  getDefaultValues(parrCmpDefaults) {
    if (parrCmpDefaults.length > 0) {
      let defaultArr = [];
      parrCmpDefaults.map(ele => {
        let defaultObj = {};
        if (ele.Default_Key == 'DateFormat' || ele.Default_Key == 'COST_METHOD' || ele.Default_Key == 'CURR_DECIMAL' || ele.Default_Key == 'TIME_ZONEDIFF') {
          defaultObj.Default_Key = ele.Default_Key;
          defaultObj.Default_Value = ele.Default_Value;
          defaultObj.Description = ele.Description;
          defaultObj.Module_Code = ele.Module_Code;
          defaultArr.push(defaultObj);
        }
      });
      this.lsService.setDefaultFormat(defaultArr);
    }
  }
  onUserIDBlur() {
    //if(this.msPreUserId != this.loginReqeustModel.LoginId){
    //this.msPreUserId = this.loginReqeustModel.LoginId;
    //this.msPrePwd = "";
    //this.loginReqeustModel.Password = "";
    this.resetLogin();
    this.authenticateUser();
    //}
  }

  onPasswordBlur() {
    //if(this.msPrePwd != this.loginReqeustModel.Password){
    //  this.msPrePwd = this.loginReqeustModel.Password;
    this.resetLogin();
    this.authenticateUser();
    //}
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'body-bg');
  }
  authenticateUser() {
    this.loginResponseModel.CompanyList = [];
    if (this.loginReqeustModel.LoginId && this.loginReqeustModel.Password) {
      this.mbshowLoader = true;
      let psEncPassword = this.utilService.bmgfonEncryption(this.loginReqeustModel.Password);
      let pobjReqData = {
        LoginId: this.loginReqeustModel.LoginId,
        Password: psEncPassword
      };
      this.loginService.authenticateUser(pobjReqData).subscribe(res => {
        this.mbshowLoader = false;
        // let psRes : string = res;
        // let encryptedJson =  psRes.slice(10);
        // const decodedData = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedJson));
        // this.loginResponseModel = JSON.parse(decodedData);
        this.loginResponseModel = res;
        if (this.loginResponseModel.tblValidUser[0] != null) {
          if (this.loginResponseModel.tblValidUser[0].IsValid.toUpperCase() === "FALSE") {
            this.msPreUserId = '';
            this.msPrePwd = '';
            this.onOpenErrorBlock("Incorrect Username/Password.");
            return;
          }
          if (this.loginResponseModel.tblValidUser[0].Token != '') {
            this.lsService.setToken(this.loginResponseModel.tblValidUser[0].Token);
            this.lsService.setUserImage(this.loginResponseModel.tblValidUser[0].UserImage);
          }
          if (this.loginResponseModel.tblValidUser[0].UserStatus.toUpperCase() === "INACTIVE") {
            this.onOpenErrorBlock("Inactive User.");
            return;
          }
          if (this.loginResponseModel.tblValidUser[0].PasswordExpired.toUpperCase() === "TRUE") {
            this.onOpenErrorBlock("Password Expired.");
            //  this.bmlfCommoActionDialog('openChangePassModal');
            this.loginResponseModel.CompanyList = [];
            this.loginReqeustModel.Password = '';
            this.loginReqeustModel.LoginId = '';
            this.mbIsCmpList = false;
            this.marrCompanyList = [];
            return;
          }
          if (this.loginResponseModel.tblValidUser[0].RenewalExpired.toUpperCase() === "TRUE") {
            this.onOpenErrorBlock("Password Expired.");
            this.bmlfCommoActionDialog('openChangePassModal');
            this.loginResponseModel.CompanyList = [];
            this.loginReqeustModel.Password = '';
            this.loginReqeustModel.LoginId = '';
            this.mbIsCmpList = false;
            this.marrCompanyList = [];
            return;
          }
          if (this.loginResponseModel.tblValidUser[0].Skip2FASecurity == 1 && this.loginResponseModel.tblValidUser[0].GroupId != "ADMIN") {
            this.mbIsSendOTP = false; //verify button
            this.mbIsCmpList = false; //send OTP button
            this.mbIsVerifyOTP = true; //Login Button
            this.mbIsSkip2FASecurity = false; //visible false
          } else {
            if (this.loginReqeustModel.LoginId.toUpperCase() == 'ADMIN') {
              this.mbIsSendOTP = false; //verify button
              this.mbIsCmpList = false; //send OTP button
              this.mbIsVerifyOTP = true; //Login Button
              this.mbIsSkip2FASecurity = false; //visible false
            } else {
              this.mbIsCmpList = true; //send OTP button
              this.mbIsSkip2FASecurity = true; //visible true
            }
          }
        }

        if (this.loginResponseModel.CompanyList != undefined && this.loginResponseModel.CompanyList.length > 0) {
          //---------Admin user check skip OTP functionality---------S
          // if(this.loginReqeustModel.LoginId.toUpperCase() == 'ADMIN' || this.loginResponseModel.CompanyList[0]['GroupType'] == 'Tenant Admin' ){
          //   this.mbIsSendOTP = false; //verify button
          //   this.mbIsCmpList = false; //send OTP button
          //   this.mbIsVerifyOTP = true; //Login Button
          // }else{
          //   this.mbIsCmpList = true;  
          // }
          //---------Admin user check skip OTP functionality---------E
          //this.mbIsCmpList = true; --comment for admin user
          //----Check for admin user one time password --10/10/2023 --S
          if (this.loginReqeustModel.LoginId.toUpperCase() == 'ADMIN' && this.loginReqeustModel.Password == 'admin') {
            this.bmlfCommoActionDialog('openChangePassModal');
            this.loginResponseModel.CompanyList = [];
            this.loginReqeustModel.Password = '';
            return false;
          }
          //----Check for admin user one time password --10/10/2023 --E
          this.marrCompanyList = this.loginResponseModel.CompanyList.map(i => Object.assign({}, i));
          if (this.loginResponseModel.CompanyList[0]['GroupType'] == 'Tenant Admin') {
            this.msGroupType = 'Admin';
          } else {
            this.msGroupType = this.loginResponseModel.CompanyList[0]['GroupType'];
          }
          if (this.loginResponseModel.CompanyList[0]['PwdType'] != null && this.loginResponseModel.CompanyList[0]['PwdType'].toUpperCase() == 'T') {
            this.bmlfCommoActionDialog('openChangePassModal');
            this.loginResponseModel.CompanyList = [];
            this.loginReqeustModel.Password = '';
            return false;
          }
          if (this.loginResponseModel.LastLoginDetail.length > 0) {
            this.selectedCompId = this.loginResponseModel.LastLoginDetail[0].MFG_COMPANY_ID;
            // this.selectedCompId = this.loginResponseModel.CompanyList[0].Name;
          } else {
            this.selectedCompId = this.loginResponseModel.CompanyList[0].Name;
          }
          this.selectedTenantId = this.loginResponseModel.CompanyList[0].TenantId;
          if (this.loginResponseModel.CompanyList[0].TenantId == '00') {
            this.msGroupType = 'Super Admin';
            // if(this.loginReqeustModel.LoginId.toUpperCase() == 'ADMIN' || this.loginResponseModel.CompanyList[0]['GroupType'] == 'Tenant Admin' ){
            //   this.mbIsCmpList = false; //Admin skip OTP Change
            // }else{
            //   this.mbIsCmpList = true;
            // }
            this.marrCompanyList = [];
          }
        } else {
          this.mbIsCmpList = false;
          this.marrCompanyList = [];
        }
      }, error => {
        console.log(error);
      });
    }
  }
  // uncomment when license is given
  noErrorClick() {
    // Begin..... Comment if license not given
    this.modalErrorBool = false;
    this.mbshowLoader = false;
    // End..... Comment if license not given
  }

  bmlfClickLicenseExipredOk() {
    // Begin..... Comment if license not given
    this.modalLicenseExpired = false;
    this.mbshowLoader = false;
    this.yesErrorclick();
    // End..... Comment if license not given
  }

  yesErrorclick() {
    // Begin..... Comment if license not given
    this.loginService.updateGuid().subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
        this.lsService.clear();
        // Added by Satish Thalke
        this.router.navigate(['account/login']);
        return false;
      }
      if (this.msGroupType != 'Super Admin') {
        if (res.CmpDefaults.length == 0) {
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
          this.lsService.clear();
          // Added by Satish Thalke
          this.router.navigate(['account/login']);
        }
        localStorage.setItem("DistributionParameter", JSON.stringify(res.DistributionParameter));
        localStorage.setItem("CompanyDefaults", JSON.stringify(res.CmpDefaults));
        localStorage.setItem("SCMPHData", JSON.stringify(res.SCMPHData));
        localStorage.setItem("RoundingDefaults", JSON.stringify(res.RoundingDefaults));
        localStorage.setItem("FinSchema", JSON.stringify(res.FinSchema));
        localStorage.setItem("UMCONFIG", JSON.stringify(res.UMCONFIG));
        this.getWhatsNewUrl();
        this.bmlfGetUserValidateandCustomData();
        this.getDefaultValues(res.CmpDefaults);
        // deepak porwal 17/dec/2020 in case of bme financeonly
        if (res['FINSEGMENTSETUP'] != undefined) {
          localStorage.setItem("FINSEGMENTSETUP", JSON.stringify(res['FINSEGMENTSETUP']));
        }
        if (res['FINMULTIDIMSETUP'] != undefined) {
          localStorage.setItem("FINMULTIDIMSETUP", JSON.stringify(res['FINSEGMENTSETUP']));
        }
      }
      if (res != null) {
        this.bmlfGetMenuByGrp(this.msLoginUser, this.msGroupType, true);
      }
    }, err => {
      console.log(err);
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SOMETHINGWRONG'));
      this.lsService.clear();
      // Added by Satish Thalke
      this.router.navigate(['account/login']);
    });
    // End..... Comment if license not given
  }

  onOpenErrorBlock(msg) {
    this._toastMessageService.notifyError(msg);
  }
  bmlfOnCreateUserCompanySetup() {
    try {
      const loginId = this.lsService.getUserSession().UserId.toUpperCase();
      const cmpId = this.lsService.getUserSession().CompName;
      let reqData = {
        JSON: JSON.stringify({
          HeaderData: [{
            "CompanyId": cmpId,
            "UserId": loginId
          }],
          Response: [{
            "ResponseText": "",
            "ErrorCode": ""
          }]
        })
      };
      this.loginService.CreateUserCompanySetup(reqData).subscribe(res => {});
    } catch (e) {
      console.log(e);
    }
    // Added By Satish Thalke
    this.modalErrorBool = false;
    this.mbshowLoader = false;
    if (this.msGroupType == 'Admin' || this.msGroupType == 'Super Admin') {
      this.router.navigate(['/main/admin/admin']);
    } else if (this.msGroupType.toUpperCase() == 'WMS') {
      this.router.navigate(['/main/wmsprofile/wmsprofile']);
    } else {
      this.router.navigate(['/main/dashboard/dashboardpage']);
    }
    // window.location.reload();
  }
  // deepak porwal 20/nov/2020 scr no.142973
  getUserSettingCopyFromTo() {
    let pobjReqData = {
      ScreenName: 'LoginComponent',
      LookUpKey: 'UserSettings',
      Filter1: this.msLoginUser,
      Filter2: this.msCompanyId
    };
    this.userService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res == null) {
        return false;
      }
      if (Object.entries(res).length > 0 && res.LookupData.length > 0) {
        this.lsService.setUserSettings(res.LookupData);
        // deepak porwal shift above 12/apr/21 to fetch usersetting
        let msCopyFromTo = '';
        let psXmlSTRING = res.LookupData.filter(s => s.SETTING_TYPE == 'FROM_TO_VALUE');
        if (psXmlSTRING.length) {
          msCopyFromTo = psXmlSTRING[0]["XML_STRING"];
          this.lsService.setCopyFromToValue(msCopyFromTo);
        }
      }
    }, err => {
      console.log(err);
    });
  }
  // common action function
  bmlfCommoActionDialog(event) {
    if (event == 'openChangePassModal') {
      this.mbIsChangePassModal = true;
      this.mobjChangePassData.LoginId = this.loginReqeustModel.LoginId;
    }
    if (event == 'openForgotPassModal') {
      this.mbIsForgotPassModal = true;
      this.mobjForgotPassData.LoginId = this.loginReqeustModel.LoginId;
    }
    if (event == 'closeChangePass' || event == 'closeFrogotPass') {
      this.mbIsChangePassModal = false;
      this.mobjChangePassData = {};
      this.mbIsForgotPassModal = false;
      this.mobjForgotPassData = {};
    }
    if (event == 'ChangePass') {
      if (this.bmlfMendentFiledsMsg('changePassword')) {
        return false;
      }
      this.bmlfOnChangePassword(this.mobjChangePassData);
    }
    if (event == 'ForgotPass') {
      if (this.bmlfMendentFiledsMsg('ForgotPass')) {
        return false;
      }
      this.bmlfOnForgotPassword(this.mobjForgotPassData);
    }
  }
  // change password
  bmlfOnChangePassword(pobjData) {
    let pobjReqData = {
      JSON: JSON.stringify({
        loginData: [{
          loginId: this.mobjChangePassData.LoginId,
          oldPassword: this.utilService.bmgfonEncryption(this.mobjChangePassData.OTPPassword),
          newPassword: this.utilService.bmgfonEncryption(this.mobjChangePassData.Password)
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.loginService.bmgfChangePassword(pobjReqData).subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        this._toastMessageService.notifySuccess(res.Response[0].ResponseText);
        this.bmlfCommoActionDialog('closeChangePass');
        this.resetLogin(); //reset login page after change password
        //this.msPreUserId = '';
        //this.loginReqeustModel.LoginId='';
        this.msPrePwd = '';
        this.loginReqeustModel.Password = '';
        this.loginReqeustModel.OTP = '';
        this.mbIsSkip2FASecurity = false;
      } else {
        this.onOpenErrorBlock(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
    });
  }
  // forgot password
  bmlfOnForgotPassword(pobjData) {
    let pobjReqData = {
      JSON: JSON.stringify({
        loginData: [{
          loginId: this.mobjForgotPassData.LoginId,
          email: this.mobjForgotPassData.email,
          phoneDetails: this.mobjForgotPassData.phoneDetails
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: '',
          MailResponse: '',
          SMSResponse: ''
        }]
      })
    };
    this.loginService.bmgfForgotPassword(pobjReqData).subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        this._toastMessageService.notifySuccess(res.Response[0].ResponseText);
        this.bmlfCommoActionDialog('closeFrogotPass');
        this.bmlfCommoActionDialog('openChangePassModal');
      } else {
        this.onOpenErrorBlock(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
    });
  }
  // check password strong type
  bmlfChkPassStrType(psText, type) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(psText)) {
      return false;
    }
    if (type == 'chkStrongPassword' && psText != '') {
      if (psText.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) == null) {
        this.mobjChangePassData.Password = '';
        document.getElementById('txtPassword').focus();
        if (this.mobjChangePassData.RetypePassword != psText) {
          this.mobjChangePassData.RetypePassword = '';
        }
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.PASSPATTERN'));
        return false;
      }
    }
    if (type == 'chkSamePassword' && psText != '') {
      if (this.mobjChangePassData.Password != psText) {
        this.mobjChangePassData.RetypePassword = '';
        document.getElementById('txtRetypePassword').focus();
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.RETYPEPASSALERMSG'));
        return false;
      }
    }
    if (type == 'chkEmailId' && psText != '') {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfEmailValidator(this.mobjForgotPassData.email)) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.VALIDEMAIL'));
        this.mobjForgotPassData.email = '';
        document.getElementById('txtEmail').focus();
        return false;
      }
      return false;
    }
  }
  bmlfMendentFiledsMsg(eventType) {
    let isMendentFiled = false;
    let msg = this.utilService.bmgfonTranslate('COMMON.REQFIELDALERMSG');
    if (eventType == 'changePassword') {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjChangePassData.LoginId)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjChangePassData.OTPPassword)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjChangePassData.Password)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjChangePassData.RetypePassword)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
    }
    if (eventType == 'ForgotPass') {
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjForgotPassData.LoginId)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjForgotPassData.email)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
      if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.bmgfNullCheckValidator(this.mobjForgotPassData.phoneDetails)) {
        this.onOpenErrorBlock(msg);
        isMendentFiled = true;
        return isMendentFiled;
      }
    }
  }
  // get app version
  bmlfGetAppVersion() {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          BMWInfo_VERSION: ''
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.loginService.bmgfGetOnlineVersion(pobjReqData).subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        return false;
      }
      if (res.HeaderData.length > 0) {
        let psGuiVersion = this.appSettings.AppGuiVersion.split('.');
        let psSetVersion = `${psGuiVersion[2]}.${psGuiVersion[3]}.${psGuiVersion[4]}`;
        this.msAppVersion = `${res.HeaderData[0].BMWInfo_VERSION}.${psSetVersion}`;
        this.msAppCreateDate = `${res.HeaderData[0].BMWInfo_Date}`;
        localStorage.setItem("appVersion", this.msAppVersion);
        localStorage.setItem("appCreateDate", this.msAppCreateDate);
      }
    }, err => {
      console.log(err);
    });
  }
  bmlfGetCheckAppVersion() {
    let pobjReqData = {
      JSON: JSON.stringify({
        Result: ''
      })
    };
    this.loginService.bmgfGetCheckOnlineVersion(pobjReqData).subscribe(res => {
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        return false;
      }
    }, err => {
      console.log(err);
    });
  }
  // get menu by group type
  bmlfGetMenuByGrp(UserId, msGroupType, isProfile) {
    let reqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          UserID: UserId,
          Group_Type: msGroupType
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.loginService.getTreeMenu(reqData).subscribe(res => {
      if (res != null && res.length > 0) {
        this.lsService.setBMEScreePermission(JSON.parse(res[0].screenpermissions));
        this.lsService.setUserLogin(this.msGroupType);
        this.lsService.setTreeMenu(res);
        if (isProfile) {
          this.getUserSettingCopyFromTo();
          this.getWmsScreenSettingPermission();
          // this.bmlfOnCreateUserCompanySetup(); // as per discussed with suraj sir 03/11/23
          this.modalErrorBool = false;
          this.mbshowLoader = false;
          if (this.msGroupType == 'Admin' || this.msGroupType == 'Super Admin') {
            this.router.navigate(['/main/admin/admin']);
          } else if (this.msGroupType.toUpperCase() == 'WMS') {
            this.router.navigate(['/main/wmsprofile/wmsprofile']);
          } else {
            this.router.navigate(['/main/dashboard/dashboardpage']);
          }
        }
      }
    });
  }
  //----------------------------------------------------------
  sendOTP() {
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          LoginId: this.loginReqeustModel.LoginId
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.mbshowLoader = true;
    this.loginService.bmgfSendOTP(pobjReqData).subscribe(res => {
      this.mbshowLoader = false;
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        this.mbIsSendOTP = false; //verify button
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        this.mbIsSendOTP = true; //verify button
        this.mbIsCmpList = false; //send OTP button
        //this._toastMessageService.notifySuccess(res.Response[0].ResponseText);
        this._toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.OTPSENDSUCCESS'));
        this.startTimer();
      } else {
        this.mbIsSendOTP = false; //verify button
        this.onOpenErrorBlock(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
    });
  }
  //----------------------------------------------------------
  verifyOTP() {
    if (this.loginReqeustModel.OTP == '') {
      this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.MSG.ENTEROTP'));
      return false;
    }
    this.mbshowLoader = true;
    let pobjReqData = {
      JSON: JSON.stringify({
        HeaderData: [{
          LoginId: this.loginReqeustModel.LoginId,
          OTP: this.loginReqeustModel.OTP,
          OTPStatus: 'False'
        }],
        Response: [{
          ResponseText: '',
          ErrorCode: ''
        }]
      })
    };
    this.loginService.bmgfVerifyOTP(pobjReqData).subscribe(res => {
      this.mbshowLoader = false;
      if (res == null) {
        this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.SERVERERROR'));
        this.mbIsSendOTP = true; //verify button
        return false;
      }
      if (res.Response[0].ErrorCode == '') {
        if (res.HeaderData[0].OTPStatus.toUpperCase() == 'TRUE') {
          this.mbIsSendOTP = false; //verify button
          this.mbIsCmpList = false; //send OTP button
          this.mbIsVerifyOTP = true; //Login Button
          this._toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.VERIFYOTP'));
          this.loginReqeustModel.OTP = '';
          this.sendOTPButtonTitle = this.utilService.bmgfonTranslate('COMMON.SENDOTP');
          this.pauseTimer();
        } else if (res.HeaderData[0].OTPStatus.toUpperCase() == 'FALSE') {
          this.mbIsSendOTP = true; //verify button
          this.mbIsCmpList = false; //send OTP button
          this.mbIsVerifyOTP = false; //Login Button
          this.onOpenErrorBlock(this.utilService.bmgfonTranslate('COMMON.MSG.ENTERVALIDOTP'));
        }
      } else {
        this.mbIsSendOTP = true;
        this.onOpenErrorBlock(res.Response[0].ResponseText);
      }
    }, err => {
      console.log(err);
    });
  }
  //----------------------------------------------------------
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.sendOTPButtonTitle = this.timeLeft + ' seconds left to verify OTP';
      } else {
        this._toastMessageService.notifySuccess(this.utilService.bmgfonTranslate('COMMON.MSG.OTPEXPIRE'));
        this.loginReqeustModel.OTP = '';
        this.sendOTPButtonTitle = this.utilService.bmgfonTranslate('COMMON.SENDOTP');
        this.timeLeft = 60;
        this.pauseTimer();
        this.mbIsSendOTP = false;
        this.mbIsCmpList = true;
      }
    }, 1000);
  }
  //----------------------------------------------------------
  pauseTimer() {
    clearInterval(this.interval);
  }
  //----------------------------------------------------------
  resetLogin() {
    this.mbIsSendOTP = false;
    this.mbIsCmpList = false;
    this.mbIsVerifyOTP = false;
    this.loginReqeustModel.OTP = '';
    this.marrCompanyList = [];
    this.sendOTPButtonTitle = this.utilService.bmgfonTranslate('COMMON.SENDOTP');
    this.timeLeft = 60;
    this.pauseTimer();
    //----------------------------------------------------------
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Global__WEBPACK_IMPORTED_MODULE_9__.Globals), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_utility_services__WEBPACK_IMPORTED_MODULE_10__.AppUtility), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_11__.AppSettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 108,
    vars: 47,
    consts: [["class", "app-loader", 4, "ngIf"], [1, "login-page"], [1, "login-section"], [1, "login-logo"], ["src", "assets/images/logo.png"], [1, "login-welcome-text"], [1, "login-form"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["viewBox", "0 0 350 350", 1, "login-icons"], [0, "xlink", "href", "#userIcon"], ["type", "text", "maxlength", "8", "placeholder", "User ID", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["viewBox", "0 0 516.375 516.375", 1, "login-icons"], [0, "xlink", "href", "#changePasswordIcon"], ["type", "password", "maxlength", "15", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["adminOpt", ""], ["class", "form-group text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "login-footer"], [1, "link", 3, "click"], [3, "close", 4, "ngIf"], [3, "hidden"], [3, "close"], [2, "font-size", "18px", "line-height", "1.3em"], [1, "k-icon", "k-i-password"], [1, "form-group", "row", "mb-1"], [1, "col-md-12"], ["for", "txtLoginId", "id", "lblLoginId", 1, "col-form-label"], [1, "mandate_sign"], ["type", "text", "maxlength", "8", "id", "txtLoginId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtOTPPassword", "id", "lblOTPPassword", 1, "col-form-label"], ["type", "password", "maxlength", "15", "id", "txtOTPPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtPassword", "id", "lblPassword", 1, "col-form-label"], ["type", "password", "maxlength", "15", "id", "txtPassword", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["for", "txtRetypePassword", "id", "lblRetypePassword", 1, "col-form-label"], ["type", "password", "maxlength", "15", "id", "txtRetypePassword", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["kendoButton", "", "id", "cmdChangePass", 3, "click"], ["kendoButton", "", "id", "cmdCancelPass", 3, "click"], [1, "app-loader"], ["src", "assets/images/loading.gif"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "row"], [1, "form-group", "row"], [1, "col-md-12", "custom_flex", "md_p_r_30"], ["type", "password", "maxlength", "4", 1, "form-control", 2, "padding-right", "120px !important", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], [1, "btn", "btn-sky", "btn-sm", "ml-1", "width-200px", 3, "disabled", "click"], [1, "k-icon", "k-i-warning"], [2, "margin", "30px", "text-align", "center"], ["kendoButton", "", "id", "cmdSaveDialog_yes", 3, "click"], ["kendoButton", "", "id", "cmdSaveDialog_no", 3, "click"], [2, "margin", "30px", "text-align", "center", 3, "innerHTML"], ["viewBox", "0 0 380 380", 1, "login-icons"], [0, "xlink", "href", "#emailBorderIcon"], ["type", "text", "id", "txtEmail", 1, "form-control", 3, "ngModel", "ngModelChange", "blur"], ["for", "txtPhoneDetails", "id", "lblPhoneDetails", 1, "col-form-label"], ["viewBox", "0 0 500 500", 1, "login-icons"], [0, "xlink", "href", "#phoneBorderIcon"], ["type", "text", "id", "txtPhoneDetails", "maxlength", "16", "numbersOnly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["kendoButton", "", "id", "cmdForgotPass", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "section", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.loginReqeustModel.LoginId = $event;
        })("blur", function LoginComponent_Template_input_blur_14_listener() {
          return ctx.onUserIDBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.loginReqeustModel.Password = $event;
        })("blur", function LoginComponent_Template_input_blur_21_listener() {
          return ctx.onPasswordBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, LoginComponent_select_23_Template, 2, 2, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, LoginComponent_ng_template_24_Template, 2, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 9, 9, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 21)(29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.onLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 23)(33, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_33_listener() {
          return ctx.bmlfCommoActionDialog("openChangePassModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_36_listener() {
          return ctx.bmlfCommoActionDialog("openForgotPassModal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, LoginComponent_kendo_dialog_39_Template, 15, 10, "kendo-dialog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, LoginComponent_kendo_dialog_40_Template, 10, 4, "kendo-dialog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 26)(42, "kendo-dialog", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function LoginComponent_Template_kendo_dialog_close_42_listener() {
          return ctx.bmlfCommoActionDialog("closeChangePass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "kendo-dialog-titlebar")(44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 30)(49, "div", 31)(50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 8)(56, "div", 9)(57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_60_listener($event) {
          return ctx.mobjChangePassData.LoginId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 30)(62, "div", 31)(63, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 8)(69, "div", 9)(70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](72, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_73_listener($event) {
          return ctx.mobjChangePassData.OTPPassword = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 30)(75, "div", 31)(76, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "div", 8)(82, "div", 9)(83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](85, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_86_listener($event) {
          return ctx.mobjChangePassData.Password = $event;
        })("blur", function LoginComponent_Template_input_blur_86_listener() {
          return ctx.bmlfChkPassStrType(ctx.mobjChangePassData.Password, "chkStrongPassword");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 30)(88, "div", 31)(89, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 8)(95, "div", 9)(96, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](98, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_99_listener($event) {
          return ctx.mobjChangePassData.RetypePassword = $event;
        })("blur", function LoginComponent_Template_input_blur_99_listener() {
          return ctx.bmlfChkPassStrType(ctx.mobjChangePassData.RetypePassword, "chkSamePassword");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "kendo-dialog-actions")(101, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_101_listener() {
          return ctx.bmlfCommoActionDialog("ChangePass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_104_listener() {
          return ctx.bmlfCommoActionDialog("closeChangePass");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](107, LoginComponent_kendo_dialog_107_Template, 55, 24, "kendo-dialog", 25);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.mbshowLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.msAppVersion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.loginReqeustModel.LoginId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.loginReqeustModel.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.msGroupType != "Admin")("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.mbIsSkip2FASecurity);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.mbIsSkip2FASecurity);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.mbIsVerifyOTP);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](31, 27, "COMMON.LOGIN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](35, 29, "COMMON.CHANGEPASSWORD"), "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](38, 31, "COMMON.FORGOTPASSWORD"), "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.modalErrorBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.modalLicenseExpired);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx.mbIsChangePassModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](47, 33, "COMMON.CHANGEPASSWORD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](52, 35, "COMMON.USERID"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.mobjChangePassData.LoginId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](65, 37, "COMMON.OLDOTP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.mobjChangePassData.OTPPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](78, 39, "COMMON.NEWPASSWORD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.mobjChangePassData.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](91, 41, "COMMON.RETYPEPASSWORD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.mobjChangePassData.RetypePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](103, 43, "COMMON.CHANGEPASSWORD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](106, 45, "COMMON.CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.mbIsForgotPassModal);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogTitleBarComponent, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogActionsComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_17__.ButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
    styles: [".login-section[_ngcontent-%COMP%] {\n  max-width: 320px;\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 12px #292929;\n}\n.login-section[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.login-section[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #0582be;\n  border-color: #0582be;\n}\n\n.login-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n  color: orange;\n  margin-bottom: 10px;\n}\n\n.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.login-welcome-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 10px;\n  margin-top: -8px;\n  padding-left: 34px;\n}\n\n.login-icons[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: #848484;\n}\n\n.login-form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.6rem;\n}\n\n.app-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.app-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  width: 80px;\n}\n\n.md_p_r_30[_ngcontent-%COMP%] {\n  padding-right: 15px !important;\n}\n\n.btn-sky[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0582be !important;\n  border-bottom: 2px solid #00a0ed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTmV3JTIwV29ya2luZzE2L0JNRVdFQlVJL0JNRVdFQjExL0JNRVdFQjExL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQUFBO0FDQUo7QURDSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7QUNFWjs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDQ1I7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FESUk7RUFDSSx3QkFBQTtBQ0RSOztBREtBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0ZKO0FER0k7RUFDSSwrQkFBQTtFQUNBLFdBQUE7QUNEUjs7QURPQTtFQUNJLDhCQUFBO0FDSko7O0FEUUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQ0xKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvOyBmb3IgaWUgaXNzdWVcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTJweCAjMjkyOTI5O1xyXG4gICAgLmxvZ2luLWZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTgyYmU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDU4MmJlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdlbGNvbWUtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG5cclxuLmxvZ2luLWljb25zIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmlsbDogIzg0ODQ4NDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjByZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5tZF9wX3JfMzAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJ0bi1za3kge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4MmJlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwYTBlZDtcclxufSIsIi5sb2dpbi1zZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEycHggIzI5MjkyOTtcbn1cbi5sb2dpbi1zZWN0aW9uIC5sb2dpbi1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubG9naW4tc2VjdGlvbiAubG9naW4tZm9vdGVyIC5saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tcGFnZSAuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4MmJlO1xuICBib3JkZXItY29sb3I6ICMwNTgyYmU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdlbGNvbWUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG59XG5cbi5sb2dpbi1pY29ucyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZpbGw6ICM4NDg0ODQ7XG59XG5cbi5sb2dpbi1mb3JtIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC42cmVtO1xufVxuXG4uYXBwLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmFwcC1sb2FkZXIgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5tZF9wX3JfMzAge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc2t5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTgyYmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGEwZWQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46169:
/*!*******************************************************!*\
  !*** ./src/app/account/models/login-reqeust.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginReqeustModel: () => (/* binding */ LoginReqeustModel)
/* harmony export */ });
class LoginReqeustModel {
  constructor() {
    this.OTP = '';
  }
}

/***/ }),

/***/ 26908:
/*!********************************************************!*\
  !*** ./src/app/account/models/login-response.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyResponseModel: () => (/* binding */ CompanyResponseModel),
/* harmony export */   LoginResponseModel: () => (/* binding */ LoginResponseModel),
/* harmony export */   Table1ResponseModel: () => (/* binding */ Table1ResponseModel),
/* harmony export */   TblValidUserResponseModel: () => (/* binding */ TblValidUserResponseModel)
/* harmony export */ });
class LoginResponseModel {}
class TblValidUserResponseModel {}
class CompanyResponseModel {}
class Table1ResponseModel {}

/***/ }),

/***/ 96897:
/*!***************************************************!*\
  !*** ./src/app/account/services/login.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class LoginService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  authenticateUser(request) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/login/BMLogin`;
    return this.httpExt.post(url, request, null);
  }
  bmgfCheckUserPWD(request) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/login/CheckUserPWD`;
    return this.httpExt.post(url, request, null);
  }
  getTreeMenu(data) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetSmenuDetails`;
    return this.httpExt.post(url, data, null);
  }
  setConnection() {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMSetDefaults`;
    return this.httpExt.get(url, null);
  }
  updateGuid() {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/UpdateGuid`;
    return this.httpExt.post(url, {}, null);
  }
  CreateUserCompanySetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/CreateCompanyUserDirectoryPath`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfChangePassword(reqData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/Login/ChangePassword`;
    return this.httpExt.post(url, reqData, null);
  }
  bmgfForgotPassword(reqData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/Login/ResetPassword`;
    return this.httpExt.post(url, reqData, null);
  }
  bmgfGetOnlineVersion(reqData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/Login/GetOnline_VERSION`;
    return this.httpExt.post(url, reqData, null);
  }
  bmgfGetCheckOnlineVersion(reqData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/Login/CheckOnline_VERSION`;
    return this.httpExt.post(url, reqData, null);
  }
  bmgfActiveFormula(headerData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFActiveFormula`;
    return this.httpExt.post(url, headerData, null);
  }
  bmgfSendOTP(headerData) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/Login/BMGFGenerateEmailOTP`;
    return this.httpExt.post(url, headerData, null);
  }
  // public bmgfSendOTP(request: LoginReqeustModel): Observable<''> {
  //   const url = `${this.appSettings.ServerAPIEndpointnew}/login/BMGFGenerateEmailOTP`;
  //   return this.httpExt.post<LoginReqeustModel>(url, request, null);
  // }
  bmgfVerifyOTP(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/Login/BMGFOTPVerification`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function LoginService_Factory(t) {
    return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LoginService,
    factory: LoginService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _account_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/components/login/login.component */ 43397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: 'account/login',
  component: _account_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}, {
  path: 'main',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 61679)).then(m => m.MainModule),
  data: {
    preload: true
  }
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/shared/i18n/en */ 14195);
/* harmony import */ var _app_shared_i18n_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/shared/i18n/hi */ 21470);
/* harmony import */ var _app_shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/shared/i18n/es */ 36584);
/* harmony import */ var _app_shared_i18n_vi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/shared/i18n/vi */ 25398);
/* harmony import */ var _app_shared_i18n_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/shared/i18n/pt */ 38394);
/* harmony import */ var _app_shared_i18n_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/shared/i18n/zh */ 27210);
/* harmony import */ var _app_shared_i18n_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/shared/i18n/fr */ 87544);
/* harmony import */ var _app_core_i18n_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/core/i18n/en */ 57829);
/* harmony import */ var _app_core_i18n_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/core/i18n/hi */ 87520);
/* harmony import */ var _app_core_i18n_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/core/i18n/es */ 69695);
/* harmony import */ var _app_core_i18n_vi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/core/i18n/vi */ 21235);
/* harmony import */ var _app_core_i18n_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/core/i18n/pt */ 26208);
/* harmony import */ var _app_core_i18n_zh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/core/i18n/zh */ 49376);
/* harmony import */ var _app_core_i18n_fr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/core/i18n/fr */ 15781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/translation-loader.service */ 6301);
/* harmony import */ var _core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/appsettings.service */ 67341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);



















class AppComponent {
  constructor(_translateService, _lanTranslationLoaderService, appSettingsService) {
    this._translateService = _translateService;
    this._lanTranslationLoaderService = _lanTranslationLoaderService;
    this.appSettingsService = appSettingsService;
    this.title = 'BMWCPoc8';
    // 
    this.appSettingsService.configure();
    // Add languages
    this._translateService.addLangs(['en', 'hi', 'vi', 'pt', 'es', 'fr', 'zh']);
    // Set the default language
    this._translateService.setDefaultLang('en');
    // Set the navigation translations
    this._lanTranslationLoaderService.loadTranslations(_app_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _app_shared_i18n_hi__WEBPACK_IMPORTED_MODULE_1__.locale, _app_shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__.locale, _app_shared_i18n_vi__WEBPACK_IMPORTED_MODULE_3__.locale, _app_shared_i18n_pt__WEBPACK_IMPORTED_MODULE_4__.locale, _app_shared_i18n_zh__WEBPACK_IMPORTED_MODULE_5__.locale, _app_shared_i18n_fr__WEBPACK_IMPORTED_MODULE_6__.locale);
    this._lanTranslationLoaderService.loadTranslations(_app_core_i18n_en__WEBPACK_IMPORTED_MODULE_7__.locale, _app_core_i18n_hi__WEBPACK_IMPORTED_MODULE_8__.locale, _app_core_i18n_es__WEBPACK_IMPORTED_MODULE_9__.locale, _app_core_i18n_vi__WEBPACK_IMPORTED_MODULE_10__.locale, _app_core_i18n_pt__WEBPACK_IMPORTED_MODULE_11__.locale, _app_core_i18n_zh__WEBPACK_IMPORTED_MODULE_12__.locale, _app_core_i18n_fr__WEBPACK_IMPORTED_MODULE_13__.locale);
    // Use a language
    this._translateService.use('en');
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_14__.LanTranslationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_15__.AppSettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 98142:
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppEffects: () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 1575);


class AppEffects {
  constructor(actions$) {
    this.actions$ = actions$;
  }
  static #_ = this.ɵfac = function AppEffects_Factory(t) {
    return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppEffects,
    factory: AppEffects.ɵfac
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   commonHeaderInterceptorProviders: () => (/* binding */ commonHeaderInterceptorProviders),
/* harmony export */   globalErrror: () => (/* binding */ globalErrror)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 48081);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-notification */ 68419);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/http/http-client-ext.service */ 83040);
/* harmony import */ var _account_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/components/login/login.component */ 43397);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/http/userfield.service */ 22201);
/* harmony import */ var _core_interceptors_commonHeader_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptors/commonHeader-interceptor */ 81265);
/* harmony import */ var _core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/toast-message.service */ 48770);
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ 50487);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 73627);
/* harmony import */ var _core_interceptors_globalerrorhandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/globalerrorhandler */ 74994);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store */ 36270);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ 24127);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store-devtools */ 50448);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ 20553);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.effects */ 98142);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Global */ 92170);
/* harmony import */ var _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-icons */ 65967);







// import { GridModule } from '@progress/kendo-angular-grid';


// import { ChartsModule } from '@progress/kendo-angular-charts';

















// import { SharedComponentModule } from './shared/modules/shared-component.module';
// import { GanttModule } from "@progress/kendo-angular-gantt";






/** Http interceptor providers in outside-in order */
const commonHeaderInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
  useClass: _core_interceptors_commonHeader_interceptor__WEBPACK_IMPORTED_MODULE_7__.CommonHeaderInterceptor,
  multi: true
}];
const globalErrror = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ErrorHandler,
  useClass: _core_interceptors_globalerrorhandler__WEBPACK_IMPORTED_MODULE_9__.gloabalErrorHandler
}];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    providers: [_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_4__.HttpCleintExtService, commonHeaderInterceptorProviders, _shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__.UserFieldService, _core_services_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService, globalErrror, _Global__WEBPACK_IMPORTED_MODULE_13__.Globals],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
    // GridModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
    // ChartsModule,
    _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_20__.NotificationModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__.ButtonsModule,
    // SharedComponentModule,
    // GanttModule,
    //KanbanModule,
    _ngrx_store__WEBPACK_IMPORTED_MODULE_23__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_10__.reducers, {
      metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_10__.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.production
    }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.EffectsModule.forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_12__.AppEffects]), _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_26__.IconsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _account_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
    // GridModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
    // ChartsModule,
    _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_20__.NotificationModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogsModule, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__.ButtonsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_23__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__.EffectsRootModule, _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_26__.IconsModule]
  });
})();

/***/ }),

/***/ 48081:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 8036);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/local-storage.service */ 78895);
/* harmony import */ var _services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);





class CoreModule {
  constructor(core) {
    if (core) {
      throw new Error("You should import core module only in the root module");
    }
  }
  static #_ = this.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CoreModule, 12));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService, _services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AdminAuthGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.SuperAdminAuthGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.WMSAuthGuard],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
})();

/***/ }),

/***/ 8036:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAuthGuard: () => (/* binding */ AdminAuthGuard),
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard),
/* harmony export */   SuperAdminAuthGuard: () => (/* binding */ SuperAdminAuthGuard),
/* harmony export */   WMSAuthGuard: () => (/* binding */ WMSAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage.service */ 78895);



class AuthGuard {
  constructor(router, lsService) {
    this.router = router;
    this.lsService = lsService;
    this.mobjUserData = this.lsService.getUserSession();
  }
  canActivate(route, state) {
    let psLoginType = localStorage.getItem("isLoginType");
    if (this.lsService.isUserLogin() && psLoginType == 'Normal') {
      return true;
    } else {
      if (this.lsService.isUserLogin() && psLoginType == 'WMS') {
        this.router.navigate(['/main/wmsprofile/wmsprofile']);
        setTimeout(() => {
          window.location.reload();
        }, 500);
        return true;
      } else {
        this.router.navigate(['account/login']);
        return false;
      }
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac
  });
}
class WMSAuthGuard {
  constructor(router, lsService) {
    this.router = router;
    this.lsService = lsService;
    this.mobjUserData = this.lsService.getUserSession();
  }
  canActivate(route, state) {
    let psLoginType = localStorage.getItem("isLoginType");
    if (this.lsService.isUserLogin() && psLoginType == 'WMS') {
      return true;
    } else {
      if (this.lsService.isUserLogin() && psLoginType == 'Normal') {
        this.router.navigate(['/main/dashboard/dashboardpage']);
        setTimeout(() => {
          window.location.reload();
        }, 500);
        return true;
      } else {
        this.router.navigate(['account/login']);
        return false;
      }
    }
  }
  static #_ = this.ɵfac = function WMSAuthGuard_Factory(t) {
    return new (t || WMSAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: WMSAuthGuard,
    factory: WMSAuthGuard.ɵfac
  });
}
class AdminAuthGuard {
  constructor(router, lsService) {
    this.router = router;
    this.lsService = lsService;
    this.mobjUserData = this.lsService.getUserSession();
  }
  canActivate(route, state) {
    let psLoginType = localStorage.getItem("isLoginType");
    if (this.lsService.isUserLogin() && psLoginType == 'Admin') {
      return true;
    } else {
      this.router.navigate(['account/login']);
      return false;
    }
  }
  static #_ = this.ɵfac = function AdminAuthGuard_Factory(t) {
    return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AdminAuthGuard,
    factory: AdminAuthGuard.ɵfac
  });
}
class SuperAdminAuthGuard {
  constructor(router, lsService) {
    this.router = router;
    this.lsService = lsService;
    this.mobjUserData = this.lsService.getUserSession();
  }
  canActivate(route, state) {
    let psLoginType = localStorage.getItem("isLoginType");
    if (this.lsService.isUserLogin() && psLoginType == 'Super Admin') {
      return true;
    } else {
      this.router.navigate(['account/login']);
      return false;
    }
  }
  static #_ = this.ɵfac = function SuperAdminAuthGuard_Factory(t) {
    return new (t || SuperAdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SuperAdminAuthGuard,
    factory: SuperAdminAuthGuard.ɵfac
  });
}

/***/ }),

/***/ 83040:
/*!******************************************************!*\
  !*** ./src/app/core/http/http-client-ext.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpCleintExtService: () => (/* binding */ HttpCleintExtService)
/* harmony export */ });
/* harmony import */ var D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);




class HttpCleintExtService {
  constructor(http) {
    this.http = http;
  }
  get(url, httpOptions) {
    //  httpOptions = this.setRequestOptions(httpOptions);
    // url = this.appendTimeInUrl(url);
    return this.http.get(url, {
      headers: httpOptions
    });
    // return this.http.get<T>(url, { headers: httpOptions })
    //     .pipe(map(res => {
    //         return res;
    //     }),
    //         //Added for Error Handling
    //         catchError(this.handleError)
    //     );
  }

  getList(url, httpOptions, actionMethodName) {
    // httpOptions = this.setRequestOptions(httpOptions);
    //   url = this.appendTimeInUrl(url);
    return this.http.get(url, httpOptions);
  }
  getAsync(url, httpOptions, actionMethodName) {
    var _this = this;
    return (0,D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //  httpOptions = this.setRequestOptions(httpOptions);
      // url = this.appendTimeInUrl(url);
      return yield _this.http.get(url, httpOptions).toPromise();
    })();
  }
  /**
   * Executes the post request with given uri parameters and header values.
   * @param url: The reqeust URI.
   * @param data: The reqeust object.
   * @param args: The request argument.
   */
  post(url, data, httpOptions) {
    // Commenting This Line As Header Is already getting Set in requestOption
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    // httpOptions = this.setRequestOptions(httpOptions);
    //   url = this.appendTimeInUrl(url);
    // Adding Error Handling
    return this.http.post(url, data, {
      headers: httpOptions
    });
    // return this.http.post<T>(url, data, { headers: httpOptions })
    //     .pipe(map(res => {
    //         return res;
    //     }),
    //         catchError(this.handleError)
    //     );
  }
  /**
   * Executes the post request with given uri parameters and header values.
   * @param url: The reqeust URI.
   * @param data: The reqeust object.
   * @param args: The request argument.
   */
  postFile(url, data, httpOptions, actionMethodName) {
    // httpOptions = this.setRequestOptions(httpOptions);
    //  url = this.appendTimeInUrl(url);
    return this.http.post(url, data, httpOptions);
  }
  /**
   * Executes the put request with given uri parameters and header values.
   * @param url: The reqeust URI.
   * @param data: The reqesut object.
   * @param args: The reqesut argument.
   */
  put(url, data, httpOptions, actionMethodName) {
    //httpOptions = this.setRequestOptions(httpOptions);
    // url = this.appendTimeInUrl(url);
    return this.http.put(url, data, httpOptions);
  }
  /**
  * Executes the put request with given uri parameters and header values.
   * @param url: The reqeust URI.
   * @param data: The reqesut object.
   * @param args: The reqesut argument.
   */
  delete(url, httpOptions, actionMethodName) {
    //httpOptions = this.setRequestOptions(httpOptions);
    //url = this.appendTimeInUrl(url);
    return this.http.delete(url, httpOptions);
  }
  //private appendTimeInUrl(url: string): string {
  // if (url.indexOf('?') > -1) {
  //     return url += '&dt=' + new Date().toTimeString();
  // }
  // else {
  //     return url += '?dt=' + new Date().toTimeString();
  // }
  // return url;
  //}
  // Added for error handling
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Something bad happened; please try again later.');
  }
  static #_ = this.ɵfac = function HttpCleintExtService_Factory(t) {
    return new (t || HttpCleintExtService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HttpCleintExtService,
    factory: HttpCleintExtService.ɵfac
  });
}

/***/ }),

/***/ 57829:
/*!*********************************!*\
  !*** ./src/app/core/i18n/en.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    COMMON: {
      UPLOADTOLISSAM: 'Upload to Lisam',
      PRINTSDS: 'Print SDS',
      CREATE: 'Create',
      SETTINGS: 'Settings',
      CUSTOMFIELDS: 'Custom Fields',
      SAVE: "Save",
      SAVED: "Record Saved",
      REFRESH: "Refresh",
      PRINT: "Print",
      CANCEL: "Cancel",
      CLOSE: "Close",
      IMPORT: "Import",
      APPLY: "Apply",
      COMMENTS: "Comments",
      SELECT: "Select",
      ADDLINE: "Add Line",
      ADD: "New",
      ADDNEW: "Add",
      COPY: "Copy",
      EDIT: "Edit",
      SEARCH: "Search",
      ACTION: "Action",
      TITLE: 'Title',
      HIDDEN: 'Hidden',
      LABELS: 'Label',
      OK: "OK",
      DELETE: "Delete",
      POST: "Post",
      DELETEALL: "Delete All",
      FILTER: "Filter",
      MSGSAVEFIRST: "Save record first.",
      SAVEGRIDSETTINGS: "Save Grid Settings",
      RESETGRIDSETTINGS: "Reset Grid Settings",
      BATCHMASTER: 'BatchMaster',
      SHOWCOLUMNFILTER: "Show Column Filter",
      YES: "Yes",
      NO: "No",
      NOTE: "Notes",
      NOTES: "Source Key cannot be blank",
      ENTERQUANTITY: "Enter Quantity",
      ENTERLISTPRICE: "Enter List Price",
      WAREHOUSETRANSFER: "Warehouse Transfer",
      SHOW_COLUMN_FILTER: "Show Column Filter",
      EXPORTTOPDF: "Export To PDF",
      EXPORTTOEXCEL: "Export To Excel",
      SCAN: "Scan",
      PROCESS: "Process",
      SELECTLINES: "Select Lines",
      SELECTROWS: "Select Rows",
      SUCCESS: "Success",
      CLEAR_FILTERS: "Clear Filters",
      FILTERS: "Filters",
      ADDLOT: "Add Lot",
      MYTASK: "Show My Task",
      TASKFORRECORD: "Show Task for this record",
      VIEW: "View",
      DELETELINES: "Delete Lines",
      GET: "Get",
      CLEAR: "Clear",
      ALERT: "Alert",
      SEND: "Send",
      TO: "To",
      EMAILID: "Email-ID",
      SUBJECT: "Subject",
      ATTACHMENT: "Attachment",
      LINK: "Link",
      FROM: "From",
      REPLY: "Reply",
      REPLYALL: "Reply To All",
      PRIORITY: "Priority",
      FORWARD: "Forward",
      LOW: "Low",
      HIGH: "High",
      SENDEMAIL: "Send Email",
      CONTACT: "Contact",
      BMUSERS: "BatchMaster Users",
      TOUSERALERT: "To field should not be blank.",
      READALL: 'Mark All As Read',
      UNREADALL: 'Mark All As Unread',
      READ: 'Mark As Read',
      UNREAD: 'Mark As Unread',
      READTITLE: 'Read',
      UNREADTITLE: 'Unread',
      INFORMATION: "Information",
      SOMETHINGWRONG: 'Something went wrong please re-login again',
      NEXT: "Next",
      PREVIOUS: "Previous",
      SUBMIT: "Submit",
      DONE: "Done",
      GETDATA: "Get Data",
      PRINTLABEL: "Print Label",
      UPDATE: "Update",
      CHART: "Chart",
      SCHEDULER: "Scheduler",
      INSERT: "Insert",
      RELEASE: "Release",
      ALERTBOLCK: {
        INBOX: 'In Box',
        OUTBOX: 'Out Box',
        NEW: "New FYI",
        ATTACHMENT: "Attachment",
        FROM: "From",
        TO: "To",
        SUBJECT: "Subject",
        DATERECIVED: "Date Received",
        DATESENT: "Date Sent"
      },
      MSG: {
        RECORDNOTSAVE: "Record not save",
        COPY: "Save record first",
        SAVEFIRST: "Save record first",
        DEL_FIRST: "Save record first.",
        DELMESSAGE: "Delete Record?",
        //NODATA:"No Data",
        NODATA: "No data available",
        NODATADELETE: "No data to delete.",
        NODATAFORDELETE: "No data is selected to delete.",
        NODATAFORRELEASE: "No data is selected to release.",
        NODATASELECT: "No record selected.",
        NODATASAVE: "No Data to Save",
        SAVE: "Record Saved",
        DELETE: "Record Deleted",
        LINE_DELETED: "Line Item Deleted.",
        EDIT: "Record Saved",
        NODATAFOUND: "No Record Found",
        ASKSAVE: "Save Record?",
        ASKSUBMIT: "Submit Record?",
        ASKIMPORT: "Import Record?",
        EXIST: "Record Exists",
        EXIST_REF: "Cannot Delete this Key Reference(s) Exists",
        DEL_LINE: "Delete Line?",
        LOTFEATURENOTDEFINED: "Lot Feature not defined",
        SAVEGRIDSETTING: "Grid Setting saved successfully",
        RESETGRIDSETTING: "Grid Setting reset successfully",
        SERVERERROR: "Server Error",
        LOOKUPNODATA: "No Data Available for Lookup",
        CONTINUE: "Do you want to Continue?",
        LINEDELETE: "Line deleted successfully",
        DELETECONFIRMATION: "Do you want to delete?",
        DELETE_LINE_WITH_HEADER: "Do you want to Delete Line ? Header will also be deleted ",
        NOCHANGESAPPLY: "No Changes to Apply",
        SAVEREPORTSETTING: "Report setting saved successfully",
        SELECTATLEASTONERECORD: "Select atleast one record",
        NODATAPROCESS: "No Data to Process",
        DELETEDLINE: "Line Deleted successfully",
        INVALIDKEY: "Invalid Key",
        RECORDADDED: "Record Added",
        NOLOCKNOTEXIST: "This query does not have nolock, Do you want to transfer ?",
        ENTEROTP: 'Please enter OTP.',
        ENTERVALIDOTP: 'Enter a valid OTP.',
        VERIFYOTP: 'OTP verified successfully, proceed to Login.',
        OTPEXPIRE: 'OTP has expired, click the Send OTP button to re-generate the OTP.',
        NOIMAGEFOUND: 'No Image Found',
        STORAGECONDITION: "Storage Condition not matched with Item Master. Do you want to Continue?",
        STORAGECONDITIONBLOCK: "Storage Condition not matched with Item Master.",
        LOTNOLENGTHLIMIT: "Lot No. length cannot exceed 31 characters",
        CONTAINERQUANTITY: "Selected Containers are more than TI-HI. ",
        WANTTOCONTINUE: "Do You want to Continue ?",
        FROMTOVALUECHANGE: 'From value can not be greater than To value',
        TOFROMVALUECHANGE: 'To value can not be less than From value',
        QBCONNECTCHK: 'QuickBooks Online is dis-connected, First connect to QuickBooks Online.',
        QBAUTHORIZE: 'Connected to QuickBooks Online.',
        QBAUTHORIZEERROR: 'Error in connecting to QuickBooks Online.',
        QBDISCONNECT: 'Disconnected from QuickBooks Online',
        QBDISCONNECTERROR: 'Error in disconnecting from QuickBooks Online',
        COPYSUCESS: "Copied Sucessfully",
        REVISESUCESS: "Revised Sucessfully"
      },
      PERMISSION_WRITE: 'You do not have permissions for performing this operation.',
      PERMISSION_DELETE: 'You do not have permission to delete record.',
      WEIGHTNVOLU: "Either Weight or Volumn are not assign",
      ROWNO: 'Row No.',
      HOLD: 'Hold',
      ACTIVE: 'Active',
      INACTIVE: 'Inactive',
      HOLDVENDORALERTMSG: "Hold Vendor?",
      ACTIVEVENDORALERTMSG: "Active Vendor?",
      REPORTPROCESSMSG: "Processing Report.",
      PROCESSMSG: 'Processing',
      THEMESAVED: 'Theme saved.',
      THEMENOTSAVED: 'Theme not saved.',
      CARDNUMBER: 'Card Number',
      ENTERCARDNO: 'Enter Card No.',
      REMOVECARDNOALERT: "Do you want to delete Credit Card Number?",
      CARDSECURITYMSG: 'Credit card number will be encrypted for security reason. Last 4 number of card will  be displayed after saving.',
      LOGIN: "Login",
      CHANGEPASSWORD: 'Change Password',
      FORGOTPASSWORD: "Forgot Password",
      USERID: "User ID",
      OLDOTP: "Old/One Time Password",
      NEWPASSWORD: "New Password",
      RETYPEPASSWORD: "Retype Password",
      REGISTEREDEMAILID: "Registered Email ID",
      REGISTEREDPHONE: "Registered Phone Number",
      FORGOTALERTMSG: "New password will be sent to your registered email id / Phone number",
      RESETPASSWORD: "Reset Password",
      PASSPATTERN: "Password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
      RETYPEPASSALERMSG: "New password and retype password should be same.",
      REQFIELDALERMSG: "All fields must be required.",
      VALIDEMAIL: "Enter valid email id.",
      CONFIGURATION: "Configuration",
      SENDOTP: "Send OTP",
      VERIFYOTP: "Verify OTP",
      ENTEROTP: "Enter OTP",
      OTPSENDSUCCESS: 'An OTP has been sent to your registered contact details, please authenticate user using this OTP.'
    },
    LOT: {
      //MSG: {
      //}
    }
  }
};

/***/ }),

/***/ 69695:
/*!*********************************!*\
  !*** ./src/app/core/i18n/es.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    COMMON: {
      UPLOADTOLISSAM: 'Subir a Lisam',
      PRINTSDS: 'Imprimir SDS',
      CREATE: 'Crear',
      SETTINGS: 'Configuración',
      CUSTOMFIELDS: 'Campos Personalizados',
      SAVE: "Guardar",
      SAVED: "Registro Guardado",
      REFRESH: "Actualizar",
      PRINT: "Imprimir",
      CANCEL: "Cancelar",
      CLOSE: "Cerrar",
      IMPORT: "Importar",
      APPLY: "Aplicar",
      COMMENTS: "Comentarios",
      SELECT: "Seleccionar",
      ADDLINE: "Agregar Línea",
      ADD: "Nuevo",
      ADDNEW: "Agregar Nuevo",
      COPY: "Copiar",
      EDIT: "Editar",
      SEARCH: "Buscar",
      ACTION: "Acción",
      TITLE: 'Título',
      HIDDEN: 'Oculto',
      LABELS: 'Etiquetas',
      OK: "Aceptar",
      DELETE: "Eliminar",
      POST: "Publicar",
      DELETEALL: "Eliminar Todo",
      FILTER: "Filtrar",
      MSGSAVEFIRST: "Guardar el registro primero.",
      SAVEGRIDSETTINGS: "Guardar Configuraciones de la Cuadrícula",
      RESETGRIDSETTINGS: "Restablecer Configuraciones de la Cuadrícula",
      BATCHMASTER: 'BatchMaster',
      SHOWCOLUMNFILTER: "Mostrar Filtro de Columna",
      YES: "Sí",
      NO: "No",
      NOTE: "Nota",
      NOTES: "La clave de origen no puede estar en blanco",
      ENTERQUANTITY: "Ingresar Cantidad",
      ENTERLISTPRICE: "Ingresar Precio de Lista",
      WAREHOUSETRANSFER: "Transferencia de Almacén",
      SHOW_COLUMN_FILTER: "Mostrar Filtro de Columna",
      EXPORTTOPDF: "Exportar a PDF",
      EXPORTTOEXCEL: "Exportar a Excel",
      SCAN: "Escanear",
      PROCESS: "Procesar",
      SELECTLINES: "Seleccionar Líneas",
      SELECTROWS: "Seleccionar Filas",
      SUCCESS: "Éxito",
      CLEAR_FILTERS: "Limpiar Filtros",
      FILTERS: "Filtros",
      ADDLOT: "Agregar Lote",
      MYTASK: "Mostrar Mis Tareas",
      TASKFORRECORD: "Mostrar Tareas para este Registro",
      VIEW: "Ver",
      DELETELINES: "Eliminar Líneas",
      GET: "Obtener",
      CLEAR: "Limpiar",
      ALERT: "Alerta",
      SEND: "Enviar",
      TO: "Para",
      EMAILID: "Email-ID",
      SUBJECT: "Asunto",
      ATTACHMENT: "Adjunto",
      LINK: "Enlace",
      FROM: "De",
      REPLY: "Responder",
      REPLYALL: "Responder a Todos",
      PRIORITY: "Prioridad",
      FORWARD: "Reenviar",
      LOW: "Bajo",
      HIGH: "Alto",
      SENDEMAIL: "Enviar Email",
      CONTACT: "Contacto",
      BMUSERS: "Usuarios de BatchMaster",
      TOUSERALERT: "El campo 'Para' no debe estar en blanco.",
      READALL: 'Marcar Todo como Leído',
      UNREADALL: 'Marcar Todo como No Leído',
      READ: 'Marcar como Leído',
      UNREAD: 'Marcar como No Leído',
      READTITLE: 'Leído',
      UNREADTITLE: 'No Leído',
      INFORMATION: "Información",
      SOMETHINGWRONG: 'Algo salió mal, por favor, vuelva a iniciar sesión',
      NEXT: "Siguiente",
      PREVIOUS: "Anterior",
      SUBMIT: "Enviar",
      DONE: "Hecho",
      GETDATA: "Obtener Datos",
      PRINTLABEL: "Imprimir Etiqueta",
      UPDATE: "Actualizar",
      CHART: "Gráfico",
      SCHEDULER: "Programador",
      INSERT: "Insertar",
      RELEASE: "Liberar",
      ALERTBOLCK: {
        INBOX: 'Bandeja de Entrada',
        OUTBOX: 'Bandeja de Salida',
        NEW: "Nuevo FYI",
        ATTACHMENT: "Adjunto",
        FROM: "De",
        TO: "Para",
        SUBJECT: "Asunto",
        DATERECIVED: "Fecha de Recepción",
        DATESENT: "Fecha de Envío"
      },
      MSG: {
        RECORDNOTSAVE: "Registro no guardado",
        COPY: "Guardar el registro primero",
        SAVEFIRST: "Guardar el registro primero",
        DEL_FIRST: "Guardar el registro primero.",
        DELMESSAGE: "¿Eliminar Registro?",
        NODATA: "Sin Datos",
        NODATADELETE: "No hay datos para eliminar",
        NODATAFORDELETE: "No se han seleccionado datos para eliminar.",
        NODATAFORRELEASE: "No se han seleccionado datos para liberar.",
        NODATASELECT: "Ningún registro seleccionado.",
        NODATASAVE: "No hay datos para guardar",
        SAVE: "Registro Guardado",
        DELETE: "Registro Eliminado",
        LINE_DELETED: "Ítem de Línea Eliminado.",
        EDIT: "Registro Guardado",
        NODATAFOUND: "Ningún Registro Encontrado",
        ASKSAVE: "¿Guardar Registro?",
        ASKSUBMIT: "¿Enviar Registro?",
        ASKIMPORT: "¿Importar Registro?",
        EXIST: "Registro ya existe",
        EXIST_REF: "No se puede eliminar esta clave, ya que existen referencias de clave",
        DEL_LINE: "¿Eliminar Línea?",
        LOTFEATURENOTDEFINED: "Característica de Lote no definida",
        SAVEGRIDSETTING: "Configuración de la Cuadrícula guardada exitosamente",
        RESETGRIDSETTING: "Configuración de la Cuadrícula restablecida exitosamente",
        SERVERERROR: "Error del Servidor",
        LOOKUPNODATA: "No hay Datos Disponibles para la Búsqueda",
        CONTINUE: "¿Desea Continuar?",
        LINEDELETE: "Línea eliminada exitosamente",
        DELETECONFIRMATION: "¿Desea eliminar?",
        DELETE_LINE_WITH_HEADER: "¿Desea Eliminar Línea? También se eliminará el Encabezado",
        NOCHANGESAPPLY: "No hay cambios para aplicar",
        SAVEREPORTSETTING: "Configuración de Reporte guardada exitosamente",
        SELECTATLEASTONERECORD: "Seleccione al menos un registro",
        NODATAPROCESS: "No hay datos para procesar",
        DELETEDLINE: "Línea Eliminada exitosamente",
        INVALIDKEY: "Clave Inválida",
        RECORDADDED: "Registro Agregado",
        NOLOCKNOTEXIST: "Esta consulta no tiene nolock, ¿Desea transferir?",
        ENTEROTP: 'Por favor, ingrese OTP.',
        ENTERVALIDOTP: 'Ingrese un OTP válido.',
        VERIFYOTP: 'OTP verificado exitosamente, proceda con el inicio de sesión.',
        OTPEXPIRE: 'El OTP ha expirado, haga clic en el botón Enviar OTP para regenerar el OTP.',
        NOIMAGEFOUND: 'No se encontró ninguna Imagen',
        STORAGECONDITION: "La Condición de Almacenamiento no coincide con el Maestro de Artículos. ¿Desea Continuar?",
        STORAGECONDITIONBLOCK: "La Condición de Almacenamiento no coincide con el Maestro de Artículos.",
        LOTNOLENGTHLIMIT: "La longitud del Número de Lote no puede exceder los 31 caracteres",
        CONTAINERQUANTITY: "Los Contenedores seleccionados son más de TI-HI.",
        WANTTOCONTINUE: "¿Desea Continuar?",
        FROMTOVALUECHANGE: 'El valor De no puede ser mayor que el valor Para',
        TOFROMVALUECHANGE: 'El valor Para no puede ser menor que el valor De',
        QBCONNECTCHK: 'QuickBooks Online está desconectado, primero conéctese a QuickBooks Online.',
        QBAUTHORIZE: 'Conectado a QuickBooks Online.',
        QBAUTHORIZEERROR: 'Error al conectar a QuickBooks Online.',
        QBDISCONNECT: 'Desconectado de QuickBooks Online',
        QBDISCONNECTERROR: 'Error al desconectar de QuickBooks Online',
        COPYSUCESS: "Copiado exitosamente",
        REVISESUCESS: "Revisado exitosamente"
      }
    },
    PERMISSION_WRITE: 'No tienes permisos para realizar esta operación.',
    PERMISSION_DELETE: 'No tienes permisos para eliminar el registro.',
    WEIGHTNVOLU: "Ni el Peso ni el Volumen están asignados",
    ROWNO: 'Número de Fila',
    HOLD: 'Retener',
    ACTIVE: 'Activo',
    INACTIVE: 'Inactivo',
    HOLDVENDORALERTMSG: "¿Retener Proveedor?",
    ACTIVEVENDORALERTMSG: "¿Activar Proveedor?",
    REPORTPROCESSMSG: "Procesando Informe.",
    PROCESSMSG: 'Procesando',
    THEMESAVED: 'Tema guardado.',
    THEMENOTSAVED: 'Tema no guardado.',
    CARDNUMBER: 'Número de Tarjeta',
    ENTERCARDNO: 'Ingrese el Número de Tarjeta',
    REMOVECARDNOALERT: "¿Desea eliminar el Número de Tarjeta de Crédito?",
    CARDSECURITYMSG: 'El número de tarjeta de crédito se cifrará por razones de seguridad. Los últimos 4 dígitos de la tarjeta se mostrarán después de guardar.',
    LOGIN: "Iniciar Sesión",
    CHANGEPASSWORD: 'Cambiar Contraseña',
    FORGOTPASSWORD: "Olvidé la Contraseña",
    USERID: "ID de Usuario",
    OLDOTP: "Contraseña Antigua / Contraseña de un solo uso",
    NEWPASSWORD: "Nueva Contraseña",
    RETYPEPASSWORD: "Vuelva a escribir la Contraseña",
    REGISTEREDEMAILID: "ID de Correo Electrónico Registrado",
    REGISTEREDPHONE: "Número de Teléfono Registrado",
    FORGOTALERTMSG: "Se enviará una nueva contraseña a su correo electrónico / número de teléfono registrado",
    RESETPASSWORD: "Restablecer Contraseña",
    PASSPATTERN: "La contraseña debe contener al menos 8 caracteres, al menos 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial",
    RETYPEPASSALERMSG: "La nueva contraseña y la contraseña de reescritura deben ser iguales.",
    REQFIELDALERMSG: "Todos los campos son obligatorios.",
    VALIDEMAIL: "Ingrese un correo electrónico válido.",
    CONFIGURATION: "Configuración",
    SENDOTP: "Enviar OTP",
    VERIFYOTP: "Verificar OTP",
    ENTEROTP: "Ingrese OTP",
    OTPSENDSUCCESS: 'Se ha enviado un OTP a sus detalles de contacto registrados, por favor, autentique al usuario usando este OTP.'
  },
  LOT: {
    //MSG: {
    //}
  }
};

/***/ }),

/***/ 15781:
/*!*********************************!*\
  !*** ./src/app/core/i18n/fr.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    COMMON: {
      UPLOADTOLISSAM: 'Télécharger vers Lisam',
      PRINTSDS: 'Imprimer la FDS',
      CREATE: 'Créer',
      SETTINGS: 'Paramètres',
      CUSTOMFIELDS: 'Champs Personnalisés',
      SAVE: "Enregistrer",
      SAVED: "Enregistrement Enregistré",
      REFRESH: "Actualiser",
      PRINT: "Imprimer",
      CANCEL: "Annuler",
      CLOSE: "Fermer",
      IMPORT: "Importer",
      APPLY: "Appliquer",
      COMMENTS: "Commentaires",
      SELECT: "Sélectionner",
      ADDLINE: "Ajouter une Ligne",
      ADD: "Nouveau",
      ADDNEW: "Ajouter",
      COPY: "Copier",
      EDIT: "Éditer",
      SEARCH: "Rechercher",
      ACTION: "Action",
      TITLE: 'Titre',
      HIDDEN: 'Caché',
      LABELS: 'Étiquettes',
      OK: "OK",
      DELETE: "Supprimer",
      POST: "Publier",
      DELETEALL: "Tout Supprimer",
      FILTER: "Filtrer",
      MSGSAVEFIRST: "Enregistrez d'abord le record.",
      SAVEGRIDSETTINGS: "Enregistrer les Paramètres de la Grille",
      RESETGRIDSETTINGS: "Réinitialiser les Paramètres de la Grille",
      BATCHMASTER: 'BatchMaster',
      SHOWCOLUMNFILTER: "Afficher le Filtre de Colonne",
      YES: "Oui",
      NO: "Non",
      NOTE: "Note",
      NOTES: "La clé source ne peut pas être vide",
      ENTERQUANTITY: "Entrer la Quantité",
      ENTERLISTPRICE: "Entrer le Prix de Liste",
      WAREHOUSETRANSFER: "Transfert d'Entrepôt",
      SHOW_COLUMN_FILTER: "Afficher le Filtre de Colonne",
      EXPORTTOPDF: "Exporter en PDF",
      EXPORTTOEXCEL: "Exporter en Excel",
      SCAN: "Scanner",
      PROCESS: "Traiter",
      SELECTLINES: "Sélectionner les Lignes",
      SELECTROWS: "Sélectionner les Lignes",
      SUCCESS: "Succès",
      CLEAR_FILTERS: "Effacer les Filtres",
      FILTERS: "Filtres",
      ADDLOT: "Ajouter un Lot",
      MYTASK: "Afficher Mes Tâches",
      TASKFORRECORD: "Afficher les Tâches pour cet Enregistrement",
      VIEW: "Voir",
      DELETELINES: "Supprimer les Lignes",
      GET: "Obtenir",
      CLEAR: "Effacer",
      ALERT: "Alerte",
      SEND: "Envoyer",
      TO: "À",
      EMAILID: "ID de l'E-mail",
      SUBJECT: "Sujet",
      ATTACHMENT: "Pièce Jointe",
      LINK: "Lien",
      FROM: "De",
      REPLY: "Répondre",
      REPLYALL: "Répondre à Tous",
      PRIORITY: "Priorité",
      FORWARD: "Transférer",
      LOW: "Faible",
      HIGH: "Élevé",
      SENDEMAIL: "Envoyer un E-mail",
      CONTACT: "Contact",
      BMUSERS: "Utilisateurs BatchMaster",
      TOUSERALERT: "Le champ 'À' ne doit pas être vide.",
      READALL: 'Marquer Tout comme Lu',
      UNREADALL: 'Marquer Tout comme Non Lu',
      READ: 'Marquer comme Lu',
      UNREAD: 'Marquer comme Non Lu',
      READTITLE: 'Lu',
      UNREADTITLE: 'Non Lu',
      INFORMATION: "Information",
      SOMETHINGWRONG: 'Quelque chose s\'est mal passé, veuillez vous reconnecter',
      NEXT: "Suivant",
      PREVIOUS: "Précédent",
      SUBMIT: "Soumettre",
      DONE: "Terminé",
      GETDATA: "Obtenir des Données",
      PRINTLABEL: "Imprimer l'Étiquette",
      UPDATE: "Mettre à Jour",
      CHART: "Graphique",
      SCHEDULER: "Planificateur",
      INSERT: "Insérer",
      RELEASE: "Libérer",
      ALERTBOLCK: {
        INBOX: 'Boîte de Réception',
        OUTBOX: 'Boîte d\'Envoi',
        NEW: "Nouveau FYI",
        ATTACHMENT: "Pièce Jointe",
        FROM: "De",
        TO: "À",
        SUBJECT: "Sujet",
        DATERECIVED: "Date de Réception",
        DATESENT: "Date d'Envoi"
      },
      MSG: {
        RECORDNOTSAVE: "Enregistrement non enregistré",
        COPY: "Enregistrez d'abord l'enregistrement",
        SAVEFIRST: "Enregistrez d'abord l'enregistrement",
        DEL_FIRST: "Enregistrez d'abord l'enregistrement.",
        DELMESSAGE: "Supprimer l'enregistrement?",
        NODATA: "Pas de Données",
        NODATADELETE: "Pas de Données à Supprimer",
        NODATAFORDELETE: "Aucune donnée sélectionnée à supprimer.",
        NODATAFORRELEASE: "Aucune donnée sélectionnée à libérer.",
        NODATASELECT: "Aucun enregistrement sélectionné.",
        NODATASAVE: "Pas de Données à Enregistrer",
        SAVE: "Enregistrement Enregistré",
        DELETE: "Enregistrement Supprimé",
        LINE_DELETED: "Élément de Ligne Supprimé.",
        EDIT: "Enregistrement Enregistré",
        NODATAFOUND: "Aucun Enregistrement Trouvé",
        ASKSAVE: "Enregistrer l'enregistrement?",
        ASKSUBMIT: "Soumettre l'enregistrement?",
        ASKIMPORT: "Importer l'enregistrement?",
        EXIST: "L'enregistrement existe déjà",
        EXIST_REF: "Impossible de supprimer cette clé, des références de clé existent",
        DEL_LINE: "Supprimer la Ligne?",
        LOTFEATURENOTDEFINED: "Fonctionnalité de Lot non définie",
        SAVEGRIDSETTING: "Paramètres de la Grille enregistrés avec succès",
        RESETGRIDSETTING: "Paramètres de la Grille réinitialisés avec succès",
        SERVERERROR: "Erreur du Serveur",
        LOOKUPNODATA: "Pas de Données Disponibles pour la Recherche",
        CONTINUE: "Voulez-vous Continuer?",
        LINEDELETE: "Ligne supprimée avec succès",
        DELETECONFIRMATION: "Voulez-vous supprimer?",
        DELETE_LINE_WITH_HEADER: "Voulez-vous Supprimer la Ligne ? L'en-tête sera également supprimé",
        NOCHANGESAPPLY: "Aucun Changement à Appliquer",
        SAVEREPORTSETTING: "Paramètres du Rapport enregistrés avec succès",
        SELECTATLEASTONERECORD: "Sélectionnez au moins un enregistrement",
        NODATAPROCESS: "Pas de Données à Traiter",
        DELETEDLINE: "Ligne Supprimée avec succès",
        INVALIDKEY: "Clé Invalide",
        RECORDADDED: "Enregistrement Ajouté",
        NOLOCKNOTEXIST: "Cette requête n'a pas de nolock, voulez-vous transférer?",
        ENTEROTP: 'Veuillez entrer OTP.',
        ENTERVALIDOTP: 'Entrez un OTP valide.',
        VERIFYOTP: 'OTP vérifié avec succès, procédez à la Connexion.',
        OTPEXPIRE: 'OTP a expiré, cliquez sur le bouton Envoyer OTP pour régénérer l\'OTP.',
        NOIMAGEFOUND: 'Aucune Image Trouvée',
        STORAGECONDITION: "La Condition de Stockage ne correspond pas au Maître des Articles. Voulez-vous Continuer?",
        STORAGECONDITIONBLOCK: "La Condition de Stockage ne correspond pas au Maître des Articles.",
        LOTNOLENGTHLIMIT: "La longueur du Numéro de Lot ne peut pas dépasser 31 caractères",
        CONTAINERQUANTITY: "Les Conteneurs sélectionnés sont plus que TI-HI.",
        WANTTOCONTINUE: "Voulez-vous Continuer?",
        FROMTOVALUECHANGE: 'La valeur De ne peut pas être supérieure à la valeur À',
        TOFROMVALUECHANGE: 'La valeur À ne peut pas être inférieure à la valeur De',
        QBCONNECTCHK: 'QuickBooks Online est déconnecté, connectez-vous d\'abord à QuickBooks Online.',
        QBAUTHORIZE: 'Connecté à QuickBooks Online.',
        QBAUTHORIZEERROR: 'Erreur de connexion à QuickBooks Online.',
        QBDISCONNECT: 'Déconnecté de QuickBooks Online',
        QBDISCONNECTERROR: 'Erreur de déconnexion de QuickBooks Online',
        COPYSUCESS: "Copié avec Succès",
        REVISESUCESS: "Révisé avec Succès"
      }
    },
    PERMISSION_WRITE: 'Vous n\'avez pas les autorisations pour effectuer cette opération.',
    PERMISSION_DELETE: 'Vous n\'avez pas la permission de supprimer l\'enregistrement.',
    WEIGHTNVOLU: "Le Poids ou le Volume ne sont pas assignés",
    ROWNO: 'Numéro de Ligne',
    HOLD: 'Maintenir',
    ACTIVE: 'Actif',
    INACTIVE: 'Inactif',
    HOLDVENDORALERTMSG: "Maintenir le Fournisseur?",
    ACTIVEVENDORALERTMSG: "Activer le Fournisseur?",
    REPORTPROCESSMSG: "Traitement du Rapport.",
    PROCESSMSG: 'Traitement',
    THEMESAVED: 'Thème enregistré.',
    THEMENOTSAVED: 'Thème non enregistré.',
    CARDNUMBER: 'Numéro de Carte',
    ENTERCARDNO: 'Entrer le Numéro de Carte',
    REMOVECARDNOALERT: "Voulez-vous supprimer le Numéro de Carte de Crédit?",
    CARDSECURITYMSG: 'Le numéro de carte de crédit sera crypté pour des raisons de sécurité. Les 4 derniers chiffres de la carte seront affichés après l\'enregistrement.',
    LOGIN: "Connexion",
    CHANGEPASSWORD: 'Changer le Mot de Passe',
    FORGOTPASSWORD: "Mot de Passe Oublié",
    USERID: "ID de l'Utilisateur",
    OLDOTP: "Ancien/Mot de Passe à Usage Unique",
    NEWPASSWORD: "Nouveau Mot de Passe",
    RETYPEPASSWORD: "Retaper le Mot de Passe",
    REGISTEREDEMAILID: "ID de Messagerie Enregistré",
    REGISTEREDPHONE: "Numéro de Téléphone Enregistré",
    FORGOTALERTMSG: "Le nouveau mot de passe sera envoyé à votre adresse e-mail / numéro de téléphone enregistré",
    RESETPASSWORD: "Réinitialiser le Mot de Passe",
    PASSPATTERN: "Le mot de passe doit contenir au moins 8 caractères, au moins 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial",
    RETYPEPASSALERMSG: "Le nouveau mot de passe et le mot de passe retapé doivent être identiques.",
    REQFIELDALERMSG: "Tous les champs sont obligatoires.",
    VALIDEMAIL: "Entrez une adresse e-mail valide.",
    CONFIGURATION: "Configuration",
    SENDOTP: "Envoyer OTP",
    VERIFYOTP: "Vérifier OTP",
    ENTEROTP: "Entrer OTP",
    OTPSENDSUCCESS: 'Un OTP a été envoyé à vos coordonnées enregistrées, veuillez authentifier l\'utilisateur en utilisant cet OTP.'
  },
  LOT: {
    //MSG: {
    //}
  }
};

/***/ }),

/***/ 87520:
/*!*********************************!*\
  !*** ./src/app/core/i18n/hi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'hi',
  data: {
    COMMON: {
      SETTINGS: 'Settings',
      CUSTOMFIELDS: 'Custom Fields',
      SAVE: "Save",
      REFRESH: "Refresh",
      PRINT: "Print",
      CANCEL: "Cancel",
      CLOSE: "Close",
      APPLY: "Apply",
      COMMENTS: "Comments",
      SELECT: "Select",
      ADDLINE: "Add Line",
      ACTION: "Action",
      OK: "OK",
      DELETE: "Delete",
      SAVEGRIDSETTINGS: "Save Grid Settings",
      RESETGRIDSETTINGS: "Reset Grid Settings",
      ENTERQUANTITY: "Enter Quantity",
      WAREHOUSETRANSFER: "Warehouse Transfer",
      MSG: {
        NODATA: "No Data",
        NODATADELETE: "No Data for Delete",
        SAVE: "Record saved successfully",
        EDIT: "Record edited successfully",
        NODATAFOUND: "No Record Found"
      }
    }
  }
};

/***/ }),

/***/ 26208:
/*!*********************************!*\
  !*** ./src/app/core/i18n/pt.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    COMMON: {
      UPLOADTOLISSAM: 'Enviar para Lisam',
      PRINTSDS: 'Imprimir FDS',
      CREATE: 'Criar',
      SETTINGS: 'Configurações',
      CUSTOMFIELDS: 'Campos Personalizados',
      SAVE: "Salvar",
      SAVED: "Registro Salvo",
      REFRESH: "Atualizar",
      PRINT: "Imprimir",
      CANCEL: "Cancelar",
      CLOSE: "Fechar",
      IMPORT: "Importar",
      APPLY: "Aplicar",
      COMMENTS: "Comentários",
      SELECT: "Selecionar",
      ADDLINE: "Adicionar Linha",
      ADD: "Novo",
      ADDNEW: "Adicionar Novo",
      COPY: "Copiar",
      EDIT: "Editar",
      SEARCH: "Buscar",
      ACTION: "Ação",
      TITLE: 'Título',
      HIDDEN: 'Oculto',
      LABELS: 'Etiqueta',
      OK: "OK",
      DELETE: "Excluir",
      POST: "Publicar",
      DELETEALL: "Excluir Tudo",
      FILTER: "Filtrar",
      MSGSAVEFIRST: "Salve o registro primeiro.",
      SAVEGRIDSETTINGS: "Salvar Configurações da Grade",
      RESETGRIDSETTINGS: "Redefinir Configurações da Grade",
      BATCHMASTER: 'BatchMaster',
      SHOWCOLUMNFILTER: "Mostrar Filtro de Coluna",
      YES: "Sim",
      NO: "Não",
      NOTE: "Nota",
      NOTES: "A chave de origem não pode ficar em branco",
      ENTERQUANTITY: "Informe a Quantidade",
      ENTERLISTPRICE: "Informe o Preço de Lista",
      WAREHOUSETRANSFER: "Transferência de Armazém",
      SHOW_COLUMN_FILTER: "Mostrar Filtro de Coluna",
      EXPORTTOPDF: "Exportar para PDF",
      EXPORTTOEXCEL: "Exportar para Excel",
      SCAN: "Escanear",
      PROCESS: "Processar",
      SELECTLINES: "Selecionar Linhas",
      SELECTROWS: "Selecionar Linhas",
      SUCCESS: "Sucesso",
      CLEAR_FILTERS: "Limpar Filtros",
      FILTERS: "Filtros",
      ADDLOT: "Adicionar Lote",
      MYTASK: "Mostrar Minhas Tarefas",
      TASKFORRECORD: "Mostrar Tarefas para este Registro",
      VIEW: "Visualizar",
      DELETELINES: "Excluir Linhas",
      GET: "Obter",
      CLEAR: "Limpar",
      ALERT: "Alerta",
      SEND: "Enviar",
      TO: "Para",
      EMAILID: "E-mail",
      SUBJECT: "Assunto",
      ATTACHMENT: "Anexo",
      LINK: "Link",
      FROM: "De",
      REPLY: "Responder",
      REPLYALL: "Responder a Todos",
      PRIORITY: "Prioridade",
      FORWARD: "Encaminhar",
      LOW: "Baixa",
      HIGH: "Alta",
      SENDEMAIL: "Enviar E-mail",
      CONTACT: "Contato",
      BMUSERS: "Usuários BatchMaster",
      TOUSERALERT: "O campo 'Para' não deve ficar em branco.",
      READALL: 'Marcar Todos como Lidos',
      UNREADALL: 'Marcar Todos como Não Lidos',
      READ: 'Marcar como Lido',
      UNREAD: 'Marcar como Não Lido',
      READTITLE: 'Lido',
      UNREADTITLE: 'Não Lido',
      INFORMATION: "Informação",
      SOMETHINGWRONG: 'Algo deu errado, por favor, faça login novamente',
      NEXT: "Próximo",
      PREVIOUS: "Anterior",
      SUBMIT: "Enviar",
      DONE: "Concluído",
      GETDATA: "Obter Dados",
      PRINTLABEL: "Imprimir Etiqueta",
      UPDATE: "Atualizar",
      CHART: "Gráfico",
      SCHEDULER: "Agendador",
      INSERT: "Inserir",
      RELEASE: "Liberar",
      ALERTBOLCK: {
        INBOX: 'Caixa de Entrada',
        OUTBOX: 'Caixa de Saída',
        NEW: "Novo FYI",
        ATTACHMENT: "Anexo",
        FROM: "De",
        TO: "Para",
        SUBJECT: "Assunto",
        DATERECIVED: "Data Recebida",
        DATESENT: "Data Enviada"
      },
      MSG: {
        RECORDNOTSAVE: "Registro não salvo",
        COPY: "Salve o registro primeiro",
        SAVEFIRST: "Salve o registro primeiro",
        DEL_FIRST: "Salve o registro primeiro.",
        DELMESSAGE: "Excluir Registro?",
        NODATA: "Sem Dados",
        NODATADELETE: "Nenhum dado para excluir",
        NODATAFORDELETE: "Nenhum dado selecionado para excluir.",
        NODATAFORRELEASE: "Nenhum dado selecionado para liberar.",
        NODATASELECT: "Nenhum registro selecionado.",
        NODATASAVE: "Nenhum dado para salvar",
        SAVE: "Registro Salvo",
        DELETE: "Registro Excluído",
        LINE_DELETED: "Item de Linha Excluído.",
        EDIT: "Registro Salvo",
        NODATAFOUND: "Nenhum Registro Encontrado",
        ASKSAVE: "Salvar Registro?",
        ASKSUBMIT: "Enviar Registro?",
        ASKIMPORT: "Importar Registro?",
        EXIST: "Registro Já Existe",
        EXIST_REF: "Não é possível Excluir esta Referência de Chave, pois já Existem Referências",
        DEL_LINE: "Excluir Linha?",
        LOTFEATURENOTDEFINED: "Recurso de Lote não definido",
        SAVEGRIDSETTING: "Configuração da Grade salva com sucesso",
        RESETGRIDSETTING: "Configuração da Grade redefinida com sucesso",
        SERVERERROR: "Erro no Servidor",
        LOOKUPNODATA: "Nenhum Dado Disponível para Pesquisa",
        CONTINUE: "Deseja Continuar?",
        LINEDELETE: "Linha excluída com sucesso",
        DELETECONFIRMATION: "Deseja excluir?",
        DELETE_LINE_WITH_HEADER: "Deseja Excluir Linha? O Cabeçalho também será excluído",
        NOCHANGESAPPLY: "Nenhuma alteração para aplicar",
        SAVEREPORTSETTING: "Configuração de Relatório salva com sucesso",
        SELECTATLEASTONERECORD: "Selecione pelo menos um registro",
        NODATAPROCESS: "Nenhum dado para processar",
        DELETEDLINE: "Linha Excluída com sucesso",
        INVALIDKEY: "Chave Inválida",
        RECORDADDED: "Registro Adicionado",
        NOLOCKNOTEXIST: "Esta consulta não tem nolock, Deseja transferir?",
        ENTEROTP: 'Por favor, insira o OTP.',
        ENTERVALIDOTP: 'Insira um OTP válido.',
        VERIFYOTP: 'OTP verificado com sucesso, prossiga para o Login.',
        OTPEXPIRE: 'O OTP expirou, clique no botão Enviar OTP para regerar o OTP.',
        NOIMAGEFOUND: 'Nenhuma Imagem Encontrada',
        STORAGECONDITION: "Condição de Armazenamento não corresponde ao Mestre de Itens. Deseja Continuar?",
        STORAGECONDITIONBLOCK: "Condição de Armazenamento não corresponde ao Mestre de Itens.",
        LOTNOLENGTHLIMIT: "O comprimento do Número do Lote não pode exceder 31 caracteres",
        CONTAINERQUANTITY: "Os Contêineres selecionados são mais do que TI-HI.",
        WANTTOCONTINUE: "Deseja Continuar?",
        FROMTOVALUECHANGE: 'O valor De não pode ser maior que o valor Para',
        TOFROMVALUECHANGE: 'O valor Para não pode ser menor que o valor De',
        QBCONNECTCHK: 'QuickBooks Online está desconectado, primeiro conecte-se ao QuickBooks Online.',
        QBAUTHORIZE: 'Conectado ao QuickBooks Online.',
        QBAUTHORIZEERROR: 'Erro ao conectar ao QuickBooks Online.',
        QBDISCONNECT: 'Desconectado do QuickBooks Online',
        QBDISCONNECTERROR: 'Erro ao desconectar do QuickBooks Online',
        COPYSUCESS: "Copiado com Sucesso",
        REVISESUCESS: "Revisado com Sucesso"
      }
    },
    PERMISSION_WRITE: 'Você não tem permissão para realizar esta operação.',
    PERMISSION_DELETE: 'Você não tem permissão para excluir o registro.',
    WEIGHTNVOLU: "Peso ou Volume não estão atribuídos",
    ROWNO: 'Número da Linha',
    HOLD: 'Pausa',
    ACTIVE: 'Ativo',
    INACTIVE: 'Inativo',
    HOLDVENDORALERTMSG: "Pausar Fornecedor?",
    ACTIVEVENDORALERTMSG: "Ativar Fornecedor?",
    REPORTPROCESSMSG: "Processando Relatório.",
    PROCESSMSG: 'Processando',
    THEMESAVED: 'Tema salvo.',
    THEMENOTSAVED: 'Tema não salvo.',
    CARDNUMBER: 'Número do Cartão',
    ENTERCARDNO: 'Informe o Número do Cartão',
    REMOVECARDNOALERT: "Deseja excluir o Número do Cartão de Crédito?",
    CARDSECURITYMSG: 'O número do cartão de crédito será criptografado por razões de segurança. Os últimos 4 dígitos do cartão serão exibidos após salvar.',
    LOGIN: "Login",
    CHANGEPASSWORD: 'Alterar Senha',
    FORGOTPASSWORD: "Esqueci a Senha",
    USERID: "ID do Usuário",
    OLDOTP: "Senha Antiga / Senha Única",
    NEWPASSWORD: "Nova Senha",
    RETYPEPASSWORD: "Digite Novamente a Senha",
    REGISTEREDEMAILID: "ID de E-mail Registrado",
    REGISTEREDPHONE: "Número de Telefone Registrado",
    FORGOTALERTMSG: "A nova senha será enviada para o seu e-mail / número de telefone registrado",
    RESETPASSWORD: "Redefinir Senha",
    PASSPATTERN: "A senha deve conter no mínimo 8 caracteres, pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial",
    RETYPEPASSALERMSG: "A nova senha e a senha de digitação devem ser iguais.",
    REQFIELDALERMSG: "Todos os campos são obrigatórios.",
    VALIDEMAIL: "Informe um e-mail válido.",
    CONFIGURATION: "Configuração",
    SENDOTP: "Enviar OTP",
    VERIFYOTP: "Verificar OTP",
    ENTEROTP: "Informe o OTP",
    OTPSENDSUCCESS: 'Um OTP foi enviado para os seus detalhes de contato registrados, por favor, autentique o usuário usando este OTP.'
  },
  LOT: {
    //MSG: {
    //}
  }
};

/***/ }),

/***/ 21235:
/*!*********************************!*\
  !*** ./src/app/core/i18n/vi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    COMMON: {
      UPLOADTOLISSAM: 'Tải lên Lisam',
      PRINTSDS: 'In SDS',
      CREATE: 'Tạo mới',
      SETTINGS: 'Cài đặt',
      CUSTOMFIELDS: 'Trường tùy chỉnh',
      SAVE: "Lưu",
      SAVED: "Ghi được lưu",
      REFRESH: "Làm mới",
      PRINT: "In",
      CANCEL: "Hủy",
      CLOSE: "Đóng",
      IMPORT: "Nhập",
      APPLY: "Áp dụng",
      COMMENTS: "Bình luận",
      SELECT: "Chọn",
      ADDLINE: "Thêm dòng",
      ADD: "Mới",
      ADDNEW: "Thêm",
      COPY: "Sao chép",
      EDIT: "Sửa",
      SEARCH: "Tìm kiếm",
      ACTION: "Hành động",
      TITLE: 'Tiêu đề',
      HIDDEN: 'Ẩn',
      LABELS: 'Nhãn',
      OK: "OK",
      DELETE: "Xóa",
      POST: "Gửi",
      DELETEALL: "Xóa tất cả",
      FILTER: "Lọc",
      MSGSAVEFIRST: "Lưu bản ghi trước.",
      SAVEGRIDSETTINGS: "Lưu cài đặt lưới",
      RESETGRIDSETTINGS: "Đặt lại cài đặt lưới",
      BATCHMASTER: 'BatchMaster',
      SHOWCOLUMNFILTER: "Hiển thị bộ lọc cột",
      YES: "Có",
      NO: "Không",
      NOTE: "Ghi chú",
      NOTES: "Khóa nguồn không thể để trống",
      ENTERQUANTITY: "Nhập số lượng",
      ENTERLISTPRICE: "Nhập giá niêm yết",
      WAREHOUSETRANSFER: "Chuyển kho",
      SHOW_COLUMN_FILTER: "Hiển thị Bộ lọc cột",
      EXPORTTOPDF: "Xuất ra PDF",
      EXPORTTOEXCEL: "Xuất ra Excel",
      SCAN: "Quét",
      PROCESS: "Xử lý",
      SELECTLINES: "Chọn dòng",
      SELECTROWS: "Chọn hàng",
      SUCCESS: "Thành công",
      CLEAR_FILTERS: "Xóa bộ lọc",
      FILTERS: "Bộ lọc",
      ADDLOT: "Thêm Lô",
      MYTASK: "Hiển thị Công việc của tôi",
      TASKFORRECORD: "Hiển thị Công việc cho bản ghi này",
      VIEW: "Xem",
      DELETELINES: "Xóa dòng",
      GET: "Lấy",
      CLEAR: "Xóa",
      ALERT: "Cảnh báo",
      SEND: "Gửi",
      TO: "Đến",
      EMAILID: "Email-ID",
      SUBJECT: "Chủ đề",
      ATTACHMENT: "Đính kèm",
      LINK: "Liên kết",
      FROM: "Từ",
      REPLY: "Trả lời",
      REPLYALL: "Trả lời tất cả",
      PRIORITY: "Ưu tiên",
      FORWARD: "Chuyển tiếp",
      LOW: "Thấp",
      HIGH: "Cao",
      SENDEMAIL: "Gửi Email",
      CONTACT: "Liên hệ",
      BMUSERS: "Người dùng BatchMaster",
      TOUSERALERT: "Trường 'Đến' không được để trống.",
      READALL: 'Đánh dấu Tất cả là đã đọc',
      UNREADALL: 'Đánh dấu Tất cả là chưa đọc',
      READ: 'Đánh dấu là đã đọc',
      UNREAD: 'Đánh dấu là chưa đọc',
      READTITLE: 'Đã đọc',
      UNREADTITLE: 'Chưa đọc',
      INFORMATION: "Thông tin",
      SOMETHINGWRONG: 'Có lỗi xảy ra, vui lòng đăng nhập lại',
      NEXT: "Tiếp theo",
      PREVIOUS: "Trước đó",
      SUBMIT: "Gửi",
      DONE: "Hoàn tất",
      GETDATA: "Lấy dữ liệu",
      PRINTLABEL: "In nhãn",
      UPDATE: "Cập nhật",
      CHART: "Biểu đồ",
      SCHEDULER: "Lập lịch",
      INSERT: "Chèn",
      RELEASE: "Phát hành",
      ALERTBOLCK: {
        INBOX: 'Hộp thư đến',
        OUTBOX: 'Hộp thư đi',
        NEW: "FYI mới",
        ATTACHMENT: "Đính kèm",
        FROM: "Từ",
        TO: "Đến",
        SUBJECT: "Chủ đề",
        DATERECIVED: "Ngày nhận",
        DATESENT: "Ngày gửi"
      },
      MSG: {
        RECORDNOTSAVE: "Bản ghi không được lưu",
        COPY: "Lưu bản ghi trước",
        SAVEFIRST: "Lưu bản ghi trước",
        DEL_FIRST: "Lưu bản ghi trước.",
        DELMESSAGE: "Xóa bản ghi?",
        NODATA: "Không có dữ liệu",
        NODATADELETE: "Không có dữ liệu để xóa",
        NODATAFORDELETE: "Không có dữ liệu được chọn để xóa.",
        NODATAFORRELEASE: "Không có dữ liệu được chọn để phát hành.",
        NODATASELECT: "Không có bản ghi được chọn.",
        NODATASAVE: "Không có dữ liệu để lưu",
        SAVE: "Ghi được lưu",
        DELETE: "Bản ghi đã xóa",
        LINE_DELETED: "Dòng đã xóa.",
        EDIT: "Ghi được lưu",
        NODATAFOUND: "Không tìm thấy bản ghi",
        ASKSAVE: "Lưu bản ghi?",
        ASKSUBMIT: "Gửi bản ghi?",
        ASKIMPORT: "Nhập bản ghi?",
        EXIST: "Bản ghi đã tồn tại",
        EXIST_REF: "Không thể xóa bản ghi này vì có tham chiếu từ khóa(s) đã tồn tại",
        DEL_LINE: "Xóa dòng?",
        LOTFEATURENOTDEFINED: "Tính năng Lô không được xác định",
        SAVEGRIDSETTING: "Lưu cài đặt lưới thành công",
        RESETGRIDSETTING: "Đặt lại cài đặt lưới thành công",
        SERVERERROR: "Lỗi máy chủ",
        LOOKUPNODATA: "Không có dữ liệu để tìm kiếm",
        CONTINUE: "Bạn có muốn tiếp tục không?",
        LINEDELETE: "Dòng đã xóa thành công",
        DELETECONFIRMATION: "Bạn có muốn xóa không?",
        DELETE_LINE_WITH_HEADER: "Bạn có muốn xóa dòng? Tiêu đề cũng sẽ bị xóa",
        NOCHANGESAPPLY: "Không có thay đổi để áp dụng",
        SAVEREPORTSETTING: "Cài đặt báo cáo được lưu thành công",
        SELECTATLEASTONERECORD: "Chọn ít nhất một bản ghi",
        NODATAPROCESS: "Không có dữ liệu để xử lý",
        DELETEDLINE: "Dòng đã xóa thành công",
        INVALIDKEY: "Khóa không hợp lệ",
        RECORDADDED: "Bản ghi được thêm",
        NOLOCKNOTEXIST: "Truy vấn này không có nolock, Bạn có muốn chuyển không?",
        ENTEROTP: 'Vui lòng nhập OTP.',
        ENTERVALIDOTP: 'Nhập OTP hợp lệ.',
        VERIFYOTP: 'OTP đã được xác minh thành công, tiếp tục đăng nhập.',
        OTPEXPIRE: 'OTP đã hết hạn, nhấn nút Gửi OTP để tạo lại OTP.',
        NOIMAGEFOUND: 'Không tìm thấy hình ảnh',
        STORAGECONDITION: "Điều kiện lưu trữ không khớp với Mục Master. Bạn có muốn tiếp tục không?",
        STORAGECONDITIONBLOCK: "Điều kiện lưu trữ không khớp với Mục Master.",
        LOTNOLENGTHLIMIT: "Độ dài số Lô không thể vượt quá 31 ký tự",
        CONTAINERQUANTITY: "Các Container được chọn nhiều hơn TI-HI.",
        WANTTOCONTINUE: "Bạn có muốn tiếp tục không?",
        FROMTOVALUECHANGE: 'Giá trị Từ không thể lớn hơn giá trị Đến',
        TOFROMVALUECHANGE: 'Giá trị Đến không thể nhỏ hơn giá trị Từ',
        QBCONNECTCHK: 'QuickBooks Online đã ngắt kết nối, Đầu tiên kết nối với QuickBooks Online.',
        QBAUTHORIZE: 'Đã kết nối với QuickBooks Online.',
        QBAUTHORIZEERROR: 'Lỗi kết nối với QuickBooks Online.',
        QBDISCONNECT: 'Đã ngắt kết nối từ QuickBooks Online',
        QBDISCONNECTERROR: 'Lỗi ngắt kết nối từ QuickBooks Online',
        COPYSUCESS: "Sao chép thành công",
        REVISESUCESS: "Revised thành công"
      }
    },
    PERMISSION_WRITE: 'Bạn không có quyền thực hiện thao tác này.',
    PERMISSION_DELETE: 'Bạn không có quyền xóa bản ghi.',
    WEIGHTNVOLU: "Cả trọng lượng và Dung tích không được gán",
    ROWNO: 'Số dòng',
    HOLD: 'Dừng',
    ACTIVE: 'Hoạt động',
    INACTIVE: 'Không hoạt động',
    HOLDVENDORALERTMSG: "Dừng nhà cung cấp?",
    ACTIVEVENDORALERTMSG: "Kích hoạt nhà cung cấp?",
    REPORTPROCESSMSG: "Đang xử lý báo cáo.",
    PROCESSMSG: 'Đang xử lý',
    THEMESAVED: 'Chủ đề đã được lưu.',
    THEMENOTSAVED: 'Chủ đề không được lưu.',
    CARDNUMBER: 'Số thẻ',
    ENTERCARDNO: 'Nhập số thẻ',
    REMOVECARDNOALERT: "Bạn có muốn xóa số thẻ tín dụng không?",
    CARDSECURITYMSG: 'Số thẻ tín dụng sẽ được mã hóa vì lý do an ninh. 4 số cuối cùng của thẻ sẽ được hiển thị sau khi lưu.',
    LOGIN: "Đăng nhập",
    CHANGEPASSWORD: 'Đổi mật khẩu',
    FORGOTPASSWORD: "Quên mật khẩu",
    USERID: "ID người dùng",
    OLDOTP: "Mật khẩu cũ / Mật khẩu một lần",
    NEWPASSWORD: "Mật khẩu mới",
    RETYPEPASSWORD: "Nhập lại mật khẩu",
    REGISTEREDEMAILID: "Địa chỉ Email đã đăng ký",
    REGISTEREDPHONE: "Số điện thoại đã đăng ký",
    FORGOTALERTMSG: "Mật khẩu mới sẽ được gửi đến địa chỉ email / số điện thoại đã đăng ký của bạn",
    RESETPASSWORD: "Đặt lại mật khẩu",
    PASSPATTERN: "Mật khẩu phải chứa ít nhất 8 ký tự, ít nhất 1 chữ in hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
    RETYPEPASSALERMSG: "Mật khẩu mới và mật khẩu nhập lại phải giống nhau.",
    REQFIELDALERMSG: "Tất cả các trường là bắt buộc.",
    VALIDEMAIL: "Nhập địa chỉ email hợp lệ.",
    CONFIGURATION: "Cấu hình",
    SENDOTP: "Gửi OTP",
    VERIFYOTP: "Xác minh OTP",
    ENTEROTP: "Nhập OTP",
    OTPSENDSUCCESS: 'Một OTP đã được gửi đến thông tin liên hệ đã đăng ký của bạn, vui lòng xác minh người dùng bằng OTP này.'
  },
  LOT: {
    //MSG: {
    //}
  }
};

/***/ }),

/***/ 49376:
/*!*********************************!*\
  !*** ./src/app/core/i18n/zh.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    COMMON: {
      UPLOADTOLISSAM: '上传至Lisam',
      PRINTSDS: '打印SDS',
      CREATE: '创建',
      SETTINGS: '设置',
      CUSTOMFIELDS: '自定义字段',
      SAVE: "保存",
      SAVED: "记录已保存",
      REFRESH: "刷新",
      PRINT: "打印",
      CANCEL: "取消",
      CLOSE: "关闭",
      IMPORT: "导入",
      APPLY: "应用",
      COMMENTS: "评论",
      SELECT: "选择",
      ADDLINE: "添加行",
      ADD: "新建",
      ADDNEW: "添加",
      COPY: "复制",
      EDIT: "编辑",
      SEARCH: "搜索",
      ACTION: "操作",
      TITLE: '标题',
      HIDDEN: '隐藏',
      LABELS: '标签',
      OK: "确定",
      DELETE: "删除",
      POST: "发布",
      DELETEALL: "全部删除",
      FILTER: "过滤",
      MSGSAVEFIRST: "先保存记录。",
      SAVEGRIDSETTINGS: "保存网格设置",
      RESETGRIDSETTINGS: "重置网格设置",
      BATCHMASTER: '批量主数据',
      SHOWCOLUMNFILTER: "显示列过滤器",
      YES: "是",
      NO: "否",
      NOTE: "注意",
      NOTES: "源关键字不能为空",
      ENTERQUANTITY: "输入数量",
      ENTERLISTPRICE: "输入列表价格",
      WAREHOUSETRANSFER: "仓库转移",
      SHOW_COLUMN_FILTER: "显示列过滤器",
      EXPORTTOPDF: "导出为PDF",
      EXPORTTOEXCEL: "导出为Excel",
      SCAN: "扫描",
      PROCESS: "处理",
      SELECTLINES: "选择行",
      SELECTROWS: "选择行",
      SUCCESS: "成功",
      CLEAR_FILTERS: "清除过滤器",
      FILTERS: "过滤器",
      ADDLOT: "添加批次",
      MYTASK: "显示我的任务",
      TASKFORRECORD: "显示与此记录相关的任务",
      VIEW: "查看",
      DELETELINES: "删除行",
      GET: "获取",
      CLEAR: "清除",
      ALERT: "警告",
      SEND: "发送",
      TO: "至",
      EMAILID: "电子邮件ID",
      SUBJECT: "主题",
      ATTACHMENT: "附件",
      LINK: "链接",
      FROM: "从",
      REPLY: "回复",
      REPLYALL: "全部回复",
      PRIORITY: "优先级",
      FORWARD: "转发",
      LOW: "低",
      HIGH: "高",
      SENDEMAIL: "发送电子邮件",
      CONTACT: "联系人",
      BMUSERS: "BatchMaster用户",
      TOUSERALERT: "To字段不能为空。",
      READALL: '全部标记为已读',
      UNREADALL: '全部标记为未读',
      READ: '标记为已读',
      UNREAD: '标记为未读',
      READTITLE: '已读',
      UNREADTITLE: '未读',
      INFORMATION: "信息",
      SOMETHINGWRONG: '出了些问题，请重新登录',
      NEXT: "下一步",
      PREVIOUS: "上一步",
      SUBMIT: "提交",
      DONE: "完成",
      GETDATA: "获取数据",
      PRINTLABEL: "打印标签",
      UPDATE: "更新",
      CHART: "图表",
      SCHEDULER: "调度器",
      INSERT: "插入",
      RELEASE: "释放",
      ALERTBOLCK: {
        INBOX: '收件箱',
        OUTBOX: '发件箱',
        NEW: "新的FYI",
        ATTACHMENT: "附件",
        FROM: "来自",
        TO: "至",
        SUBJECT: "主题",
        DATERECIVED: "接收日期",
        DATESENT: "发送日期"
      },
      MSG: {
        RECORDNOTSAVE: "记录未保存",
        COPY: "请先保存记录",
        SAVEFIRST: "请先保存记录",
        DEL_FIRST: "请先保存记录。",
        DELMESSAGE: "删除记录？",
        NODATA: "无数据",
        NODATADELETE: "无数据可删除",
        NODATAFORDELETE: "未选择要删除的数据。",
        NODATAFORRELEASE: "未选择要释放的数据。",
        NODATASELECT: "未选择记录。",
        NODATASAVE: "无数据可保存",
        SAVE: "记录已保存",
        DELETE: "记录已删除",
        LINE_DELETED: "已删除行项目。",
        EDIT: "记录已保存",
        NODATAFOUND: "未找到记录",
        ASKSAVE: "保存记录？",
        ASKSUBMIT: "提交记录？",
        ASKIMPORT: "导入记录？",
        EXIST: "记录已存在",
        EXIST_REF: "无法删除此键，存在引用关系",
        DEL_LINE: "删除行？",
        LOTFEATURENOTDEFINED: "批次功能未定义",
        SAVEGRIDSETTING: "网格设置已成功保存",
        RESETGRIDSETTING: "网格设置已成功重置",
        SERVERERROR: "服务器错误",
        LOOKUPNODATA: "查找无数据",
        CONTINUE: "是否要继续？",
        LINEDELETE: "已成功删除行",
        DELETECONFIRMATION: "是否要删除？",
        DELETE_LINE_WITH_HEADER: "是否要删除行？标题也将被删除",
        NOCHANGESAPPLY: "没有要应用的更改",
        SAVEREPORTSETTING: "报表设置已成功保存",
        SELECTATLEASTONERECORD: "至少选择一条记录",
        NODATAPROCESS: "无数据可处理",
        DELETEDLINE: "已成功删除行",
        INVALIDKEY: "无效的键",
        RECORDADDED: "记录已添加",
        NOLOCKNOTEXIST: "此查询没有nolock，是否要传输？",
        ENTEROTP: '请输入OTP。',
        ENTERVALIDOTP: '请输入有效的OTP。',
        VERIFYOTP: 'OTP验证成功，请继续登录。',
        OTPEXPIRE: 'OTP已过期，请点击“发送OTP”按钮重新生成OTP。',
        NOIMAGEFOUND: '未找到图像',
        STORAGECONDITION: "存储条件与物料主数据不匹配。是否要继续？",
        STORAGECONDITIONBLOCK: "存储条件与物料主数据不匹配。",
        LOTNOLENGTHLIMIT: "批次号长度不能超过31个字符",
        CONTAINERQUANTITY: "所选容器超过TI-HI。",
        WANTTOCONTINUE: "是否要继续？",
        FROMTOVALUECHANGE: '开始值不能大于结束值',
        TOFROMVALUECHANGE: '结束值不能小于开始值',
        QBCONNECTCHK: 'QuickBooks Online已断开连接，请先连接到QuickBooks Online。',
        QBAUTHORIZE: '已连接到QuickBooks Online。',
        QBAUTHORIZEERROR: '连接到QuickBooks Online时出错。',
        QBDISCONNECT: '已断开与QuickBooks Online的连接',
        QBDISCONNECTERROR: '与QuickBooks Online断开连接时出错',
        COPYSUCESS: "复制成功",
        REVISESUCESS: "修订成功"
      }
    },
    PERMISSION_WRITE: '您没有执行此操作的权限。',
    PERMISSION_DELETE: '您无权删除记录。',
    WEIGHTNVOLU: "重量或体积未分配",
    ROWNO: '行号',
    HOLD: '保留',
    ACTIVE: '活动',
    INACTIVE: '非活动',
    HOLDVENDORALERTMSG: "保留供应商？",
    ACTIVEVENDORALERTMSG: "激活供应商？",
    REPORTPROCESSMSG: "处理报告。",
    PROCESSMSG: '处理',
    THEMESAVED: '主题已保存。',
    THEMENOTSAVED: '主题未保存。',
    CARDNUMBER: '卡号',
    ENTERCARDNO: '输入卡号',
    REMOVECARDNOALERT: "是否要删除信用卡号？",
    CARDSECURITYMSG: '为安全原因，信用卡号将被加密。保存后，将显示卡的最后4位数字。',
    LOGIN: "登录",
    CHANGEPASSWORD: '更改密码',
    FORGOTPASSWORD: "忘记密码",
    USERID: "用户ID",
    OLDOTP: "旧/一次性密码",
    NEWPASSWORD: "新密码",
    RETYPEPASSWORD: "重新输入密码",
    REGISTEREDEMAILID: "注册电子邮件ID",
    REGISTEREDPHONE: "注册电话号码",
    FORGOTALERTMSG: "新密码将发送到您注册的电子邮件地址/电话号码",
    RESETPASSWORD: "重置密码",
    PASSPATTERN: "密码必须包含至少8个字符，至少1个大写字母，1个小写字母，1个数字和1个特殊字符",
    RETYPEPASSALERMSG: "新密码和重新输入的密码应相同。",
    REQFIELDALERMSG: "所有字段都必须填写。",
    VALIDEMAIL: "请输入有效的电子邮件地址。",
    CONFIGURATION: "配置",
    SENDOTP: "发送OTP",
    VERIFYOTP: "验证OTP",
    ENTEROTP: "输入OTP",
    OTPSENDSUCCESS: '已向您的注册联系方式发送OTP，请使用此OTP验证用户。'
  },
  LOT: {
    //MSG: {
    //}
  }
};

/***/ }),

/***/ 81265:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/commonHeader-interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonHeaderInterceptor: () => (/* binding */ CommonHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage.service */ 78895);
/* harmony import */ var _services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appsettings.service */ 67341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Global */ 92170);
/* harmony import */ var _services_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast-message.service */ 48770);
/* harmony import */ var _services_utility_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility.services */ 14158);

// import 'rxjs/add/observable/fromPromise';
//import 'rxjs/add/operator/do';









// import * as CryptoJS from 'crypto-js';
class CommonHeaderInterceptor {
  constructor(lsService, appSettings, router, globals, objToastService, utilService) {
    this.lsService = lsService;
    this.appSettings = appSettings;
    this.router = router;
    this.globals = globals;
    this.objToastService = objToastService;
    this.utilService = utilService;
    this.tmpLoginId = '';
  }
  intercept(request, next) {
    let headers;
    if (request.url.startsWith("assets/apipath/apiurl.txt")) {
      request = request.clone();
    } else if (request.url.startsWith(this.appSettings.ServerAPIEndpointnew) && this.AuthUrl(request) == false) {
      const companyName = this.lsService.getUserSession().CmpDbName;
      if (this.lsService.getUserSession().UserId != undefined) {
        this.tmpLoginId = this.lsService.getUserSession().UserId.toUpperCase();
      } else {
        this.tmpLoginId = this.lsService.getUserSession().UserId;
      }
      const loginId = this.tmpLoginId;
      const token = this.lsService.getToken();
      const cmpId = this.lsService.getUserSession().CompName;
      const gCmpId = this.globals.gCmpID;
      const gCmpName = this.globals.gCmpName;
      if (request.headers.get('Anonymous') == '') {
        headers = request.headers.set('Access-Control-Allow-Credentials', 'true').set('DBCompanyName', `${companyName}`).set('LoginId', `${loginId}`).set('Authorization', `${token}`).set('CompId', `${cmpId}`).set('GCompId', `${gCmpId}`).set('GCompName', `${gCmpName}`).set('Accept', '*/*');
      } else {
        headers = request.headers.set('Access-Control-Allow-Credentials', 'true').set('DBCompanyName', `${companyName}`).set('Content-Type', 'application/json').set('LoginId', `${loginId}`).set('Authorization', `${token}`).set('CompId', `${cmpId}`).set('GCompId', `${gCmpId}`).set('GCompName', `${gCmpName}`).set('Accept', '*/*');
      }
      if (request.url.includes('GETCustomSqlData')) {
        let body;
        body = request.body;
        request = request.clone({
          headers,
          body
        });
      } else {
        request = request.clone({
          headers
        });
        // if (request.body != null) {
        //   if (request.body.JSON) {
        //     request = this.encryptRequest(request);
        //   }else if(typeof request.body === 'string' && request.body.includes('"JSON":')){
        //     let parseJson = JSON.parse(request.body);
        //     request = this.encryptRequest(request,parseJson);
        //   }
        // }
      }
    } else if (request.url.startsWith(this.appSettings.ServerAPIEndpointnew) && this.AuthUrl(request) == true) {
      headers = request.headers.set('Access-Control-Allow-Credentials', 'true').set('Content-Type', 'application/json');
      request = request.clone({
        headers
      });
      // if (request.body.JSON) {
      //   request = this.encryptRequest(request);
      // }
    }

    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
      next: event => {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpResponse) {
          //console.log(event);
          if (event.body.Response != undefined) {
            if (event.body.Response[0].ErrorCode == "5002") {
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => '5002');
            } else if (event.body.Response[0].ErrorCode == "5003") {
              // naviate to list page
              let navurl = location.href.split('/manage')[0];
              if (navurl != undefined) {
                //17 Sep 2020 Handle Scenario for delete record from list page
                if (location.href.includes('/manage') == true) {
                  let navurl2 = navurl.split('#')[1];
                  setTimeout(() => {
                    this.router.navigate([navurl2]);
                  }, 2000);
                  this.objToastService.notifyError(event.body.Response[0].ResponseText);
                  return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => '5003');
                } else {
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                  return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => '5003');
                }
              }
            }
          }
        }
      },
      error: error => {
        if (error.status == 401) {
          // this.objToastService.notifyError('Since you have logged in another company in another session, you are automatically logged in to that company.');
          this.objToastService.notifyError('Something went wrong. Please re-login');
          this.lsService.clear();
          this.globals.gCmpID = '';
          this.globals.gCmpName = '';
          this.globals.isRelogin = false;
          console.log(error);
          this.router.navigate(['/account/login']);
          window.location.reload();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => '401');
        } else if (error.status == 409) {
          alert("Something went wrong, Error Code - 409. Please re-login"); // As disscution with Rajesh sir 19-12-2022
          // window.location.reload();
          this.lsService.clear();
          this.globals.gCmpID = '';
          this.globals.gCmpName = '';
          this.globals.isRelogin = false;
          console.log(error);
          this.router.navigate(['/account/login']);
          window.location.reload();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error.status);
        } else {
          // alert("Something went wrong, Page will be refresh , Error Code - "+  error.status); // As disscution with Rajesh sir
          console.log(error);
          alert("Something went wrong, Please try Again , Error Code - " + error.status); // As disscution with Rajesh sir 19-12-2022
          window.location.reload();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error.status);
        }
      }
    }));
    //   if (error.status == 401) {
    //     alert("ErrorCode " + error.status); // As disscution with Rajesh sir 
    //     //alert("Unathuorized Access");
    //     this.objToastService.notifyError('Your session has logged out. Please re-login.');
    //     this.lsService.clear();
    //     this.globals.gCmpID = '';
    //     this.globals.gCmpName = '';
    //     this.globals.isRelogin = false;
    //     this.router.navigate(['/account/login']);
    //     window.location.reload();
    //     return throwError('401');
    //   } else if (error.status == 409) {
    //     this.objToastService.notifyError('Since you have logged in another company in another session, you are automatically logged in to that company.');
    //     this.lsService.clear();
    //     this.globals.gCmpID = '';
    //     this.globals.gCmpName = '';
    //     this.globals.isRelogin = false;
    //     this.router.navigate(['/account/login']);
    //     window.location.reload();
    //     return throwError('409');
    //   } else if (error.status == 302) {
    //     alert("ErrorCode " + error.status); 
    //     this.objToastService.notifyError('Your session has logged out. Please re-login.');
    //     this.globals.gCmpID = '';
    //     this.globals.gCmpName = '';
    //     this.globals.isRelogin = false;
    //     this.router.navigate(['/account/login']);
    //     window.location.reload();
    //     return throwError('302');
    //   } else {
    //     alert("ErrorCode " + error.status);
    //     this.objToastService.notifyError('Your session has logged out. Please re-login. ');
    //     this.lsService.clear();
    //     this.globals.gCmpID = '';
    //     this.globals.gCmpName = '';
    //     this.globals.isRelogin = false;
    //     window.location.reload();
    //     this.router.navigate(['/account/login']);
    //     // console.log('Line No.128:error');
    //     return throwError('error');
    //   }
    // });
  }

  AuthUrl(request) {
    if (request.url.includes('login/BMLogin') || request.url.includes('Login/ChangePassword') || request.url.includes('Login/ResetPassword') || request.url.includes('Login/GetOnline_VERSION')) {
      return true;
    } else {
      return false;
    }
  }
  static #_ = this.ɵfac = function CommonHeaderInterceptor_Factory(t) {
    return new (t || CommonHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_Global__WEBPACK_IMPORTED_MODULE_2__.Globals), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_utility_services__WEBPACK_IMPORTED_MODULE_4__.AppUtility));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: CommonHeaderInterceptor,
    factory: CommonHeaderInterceptor.ɵfac
  });
}

/***/ }),

/***/ 74994:
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/globalerrorhandler.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gloabalErrorHandler: () => (/* binding */ gloabalErrorHandler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class gloabalErrorHandler {
  handleError(error) {
    console.error('globalErrorHandler', error);
  }
  static #_ = this.ɵfac = function gloabalErrorHandler_Factory(t) {
    return new (t || gloabalErrorHandler)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: gloabalErrorHandler,
    factory: gloabalErrorHandler.ɵfac
  });
}

/***/ }),

/***/ 35311:
/*!*******************************************************!*\
  !*** ./src/app/core/models/app-user-session.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSessionModel: () => (/* binding */ UserSessionModel)
/* harmony export */ });
class UserSessionModel {}

/***/ }),

/***/ 99758:
/*!************************************************!*\
  !*** ./src/app/core/services/alert.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertService: () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class AlertService {
  infoAlert(title, description) {
    let that = this;
    let modalHTML = '<div id="infoAlertModal"><div class="modal fade show" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content" style="height: 30%;"><div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" id="myclose" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div id="infoAlertModalBody" class="modal-body">' + description + '</div><div class="modal-footer"><button type="button" id="okBtn" class="btn btn-info btn-sm">OK</button></div></div></div></div><div class="modal-backdrop fade show"> </div> </div>';
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('infoAlertModalBody').innerHTML = description;
    document.body.querySelector('#okBtn').addEventListener('click', function () {
      that.removeAlert('infoAlertModal');
    });
    document.body.querySelector('#myclose').addEventListener('click', function () {
      that.removeAlert('infoAlertModal');
    });
  }
  signatureAlert(title, description, okCallbackHandler, cancelCallbackHandler, okBtnLabel = '', cancelBtnLabel = '') {
    let that = this;
    let arg = {};
    let commentsInput = document.createElement('textarea');
    commentsInput.className = 'form-control';
    if (okBtnLabel == '') {
      okBtnLabel = 'OK';
    }
    if (cancelBtnLabel == '') {
      cancelBtnLabel = 'Cancel';
    }
    let modalHTML = '<div id="signatureModal"><div class="modal fade show" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" id="closeBtn" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body form-container"><div class="alert alert-primary signature-des">' + description + '</div><div class="form-group" id="commentHolder"><label>Comments</label></div></div><div class="modal-footer"><button type="button" id="confirmBtn" class="btn btn-info btn-sm">' + okBtnLabel + '</button> <button type="button" id="confirmCancelBtn" class="btn btn-secondary btn-sm">' + cancelBtnLabel + '</button></div></div></div></div><div class="modal-backdrop fade show"> </div> </div>';
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('commentHolder').appendChild(commentsInput);
    document.body.querySelector('#confirmBtn').addEventListener('click', function () {
      that.removeAlert('signatureModal');
      if (okCallbackHandler != null) {
        //modalHTML      
        arg.commentsInput = commentsInput.value;
        okCallbackHandler(arg);
      }
    });
    document.body.querySelector('#confirmCancelBtn').addEventListener('click', function () {
      that.removeAlert('signatureModal');
      if (cancelCallbackHandler != null) {
        cancelCallbackHandler(arg);
      }
    });
    // 
    document.body.querySelector('#closeBtn').addEventListener('click', function () {
      that.removeAlert('signatureModal');
      if (cancelCallbackHandler != null) {
        cancelCallbackHandler(arg);
      }
    });
  }
  confirmAlert(title, description, okCallbackHandler, cancelCallbackHandler, okBtnLabel = '', cancelBtnLabel = '') {
    let that = this;
    let arg = 'ss';
    if (okBtnLabel == '') {
      okBtnLabel = 'OK';
    }
    if (cancelBtnLabel == '') {
      cancelBtnLabel = 'Cancel';
    }
    let modalHTML = '<div id="confirmModal"><div class="modal fade show" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + title + '</h5><button type="button" id="closeBtn" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + description + '</div><div class="modal-footer"><button type="button" id="confirmBtn" class="btn btn-info btn-sm">' + okBtnLabel + '</button> <button type="button" id="confirmCancelBtn" class="btn btn-secondary btn-sm">' + cancelBtnLabel + '</button></div></div></div></div><div class="modal-backdrop fade show"> </div> </div>';
    if (document.getElementById("confirmModal")) {
      let errorElement = document.createElement('span');
      errorElement.innerHTML = '<br/>' + description;
      document.body.querySelector('#confirmModal .modal-body').appendChild(errorElement);
    } else {
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      document.body.querySelector('#confirmBtn').addEventListener('click', function () {
        that.removeAlert('confirmModal');
        if (okCallbackHandler != null) {
          okCallbackHandler(arg);
        }
      });
      document.body.querySelector('#confirmCancelBtn').addEventListener('click', function () {
        that.removeAlert('confirmModal');
        if (cancelCallbackHandler != null) {
          cancelCallbackHandler(arg);
        }
      });
      // 
    }

    document.body.querySelector('#closeBtn').addEventListener('click', function () {
      that.removeAlert('confirmModal');
      if (cancelCallbackHandler != null) {
        cancelCallbackHandler(arg);
      }
    });
  }
  removeAlert(selector) {
    let child = document.getElementById(selector);
    child.parentNode.removeChild(child);
  }
  static #_ = this.ɵfac = function AlertService_Factory(t) {
    return new (t || AlertService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AlertService,
    factory: AlertService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 67341:
/*!******************************************************!*\
  !*** ./src/app/core/services/appsettings.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSettingsService: () => (/* binding */ AppSettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);


class AppSettingsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.appSettingsFilePath = "../../assets/appsettings.json"; //"../assets/config.json";
    this.ServerAPIEndpoint = '';
    this.ServerAPIEndpointnew = '';
    this.DragAndAnalyzeEndPoints = '';
    this.AppGuiVersion = '';
    this.socketIoEndPoints = '';
    this.WhatsNewEndPoints = '';
    this.AdminUrl = '';
    this.Sprint = '';
  }
  configure() {
    this.httpClient.get("assets/apipath/apiurl.txt").subscribe(data => {
      this.ServerAPIEndpoint = data['apiurl'];
      this.ServerAPIEndpointnew = data['apiurl'];
      this.DragAndAnalyzeEndPoints = data["daurl"];
      this.AppGuiVersion = data["appVersion"];
      this.socketIoEndPoints = data["socketUrl"];
      this.WhatsNewEndPoints = data["whatsNew"];
      this.AdminUrl = data["adminUrl"];
    });
  }
  static #_ = this.ɵfac = function AppSettingsService_Factory(t) {
    return new (t || AppSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppSettingsService,
    factory: AppSettingsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41563:
/*!****************************************************!*\
  !*** ./src/app/core/services/custom.validators.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidator: () => (/* binding */ CustomValidator)
/* harmony export */ });
class CustomValidator {
  static bmgfNullCheckValidator(value) {
    if (value == "" || value == null || value == undefined) {
      return true;
    } else {
      return false;
    }
  }
  static bmgfZeroValueValidator(value) {
    if (value == 0 || value == "" || value == null || value == undefined) {
      return true;
    } else {
      return false;
    }
  }
  static bmgfMobileNoValidator(value) {
    const MOBILE_REGEXP = /^[0-9]{10}$/;
    if (value != null) {
      if ((value != "" || value != 0) && !MOBILE_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfPhoneNoValidator(value) {
    const PHONE_REGEXP = /^[0-9]{10,11}$/;
    if (value != null) {
      if (value != "" && !PHONE_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfEmailValidator(value) {
    const EMAIL_REGEXP = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*$/;
    if (value != null) {
      if (value != "" && !EMAIL_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfNumberValidator(value) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    if (value != null) {
      if (value != "" && !NUMBER_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfAlphaNumericValidator(value) {
    const ALPHA_REGEXP = /^[a-zA-Z0-9 ]*$/;
    if (value != null) {
      if (value != "" && !ALPHA_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfDecimalFormValidator(value) {
    const DECIMAL_REGEXP = /^[0-9]+(\.[0-9]{1,4})?$/;
    if (value != null) {
      if (value != "" && !DECIMAL_REGEXP.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  static bmgfCompareTwoDates(smallerDate, biggerDate) {
    if (smallerDate !== 'Invalid Date' && biggerDate !== 'Invalid Date') {
      if (smallerDate.getFullYear() < biggerDate.getFullYear()) {
        return true;
      } else if (smallerDate.getFullYear() === biggerDate.getFullYear()) {
        if (smallerDate.getMonth() < biggerDate.getMonth()) {
          return true;
        } else if (smallerDate.getMonth() === biggerDate.getMonth()) {
          if (smallerDate.getDate() <= biggerDate.getDate()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  static bmgfCompareTwoDatesWithEqual(smallerDate, biggerDate) {
    if (smallerDate !== 'Invalid Date' && biggerDate !== 'Invalid Date') {
      if (smallerDate.getFullYear() < biggerDate.getFullYear()) {
        return true;
      } else if (smallerDate.getFullYear() === biggerDate.getFullYear()) {
        if (smallerDate.getMonth() < biggerDate.getMonth()) {
          return true;
        } else if (smallerDate.getMonth() === biggerDate.getMonth()) {
          if (smallerDate.getDate() < biggerDate.getDate()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if (smallerDate.getFullYear() == biggerDate.getFullYear() && smallerDate.getMonth() === biggerDate.getMonth() && smallerDate.getDate() == biggerDate.getDate()) {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),

/***/ 46216:
/*!*****************************************************!*\
  !*** ./src/app/core/services/dateFormat.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatService: () => (/* binding */ DateFormatService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class DateFormatService {
  constructor() {
    this.defaultDateValue = 1;
  }
  getDateFormat() {
    this.defaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    if (this.defaultFormat != null) {
      this.defaultFormat.forEach(ele => {
        if (ele.Default_Key == "DateFormat") {
          this.defaultDateValue = ele.Default_Value;
        }
      });
      if (this.defaultDateValue == 1) {
        return "MM/dd/yy";
      } else if (this.defaultDateValue == 2) {
        return "dd/MM/yy";
      } else if (this.defaultDateValue == 3) {
        return "yy/MM/dd";
      } else if (this.defaultDateValue == 4) {
        return "MM/dd/yyyy";
      } else if (this.defaultDateValue == 5) {
        return "dd/MM/yyyy";
      } else if (this.defaultDateValue == 6) {
        return "yyyy/MM/dd";
      } else {
        return "dd/MM/yyyy";
      }
    } else {
      if (this.defaultDateValue == 1) {
        return "MM/dd/yy";
      }
    }
  }
  getDateTimeFormat() {
    this.defaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    if (this.defaultFormat != null) {
      this.defaultFormat.forEach(ele => {
        if (ele.Default_Key == "DateFormat") {
          this.defaultDateValue = ele.Default_Value;
        }
      });
      if (this.defaultDateValue == 1) {
        return "MM/dd/yy hh:mm a";
      } else if (this.defaultDateValue == 2) {
        return "dd/MM/yy hh:mm a";
      } else if (this.defaultDateValue == 3) {
        return "yy/MM/dd hh:mm a";
      } else if (this.defaultDateValue == 4) {
        return "MM/dd/yyyy hh:mm a";
      } else if (this.defaultDateValue == 5) {
        return "dd/MM/yyyy hh:mm a";
      } else if (this.defaultDateValue == 6) {
        return "yyyy/MM/dd hh:mm a";
      } else {
        return "dd/MM/yyyy hh:mm a";
      }
    } else {
      if (this.defaultDateValue == 1) {
        return "MM/dd/yy hh:mm a";
      }
    }
  }
  static #_ = this.ɵfac = function DateFormatService_Factory(t) {
    return new (t || DateFormatService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DateFormatService,
    factory: DateFormatService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78895:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _models_app_user_session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/app-user-session.model */ 35311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class LocalStorageService {
  constructor() {}
  getUserSession() {
    if (localStorage.getItem("usersession") != null) {
      this.userSession = JSON.parse(localStorage.getItem("usersession"));
    } else {
      this.userSession = new _models_app_user_session_model__WEBPACK_IMPORTED_MODULE_0__.UserSessionModel();
    }
    return this.userSession;
  }
  isUserLogin() {
    if (localStorage.getItem("islogin") == 'true') {
      return true;
    }
    return false;
  }
  setUserLogin(psLoginType) {
    localStorage.setItem("islogin", 'true');
    localStorage.setItem("isLoginType", psLoginType);
  }
  setUserSession(userSession) {
    localStorage.setItem("usersession", JSON.stringify(userSession));
  }
  setDefaultFormat(data) {
    localStorage.setItem("defaultFormats", JSON.stringify(data));
  }
  clear() {
    // localStorage.removeItem("usersession");
    // localStorage.setItem("islogin", 'false');
    // localStorage.removeItem("token");
    // localStorage.removeItem("defaultFormats");
    // localStorage.removeItem("BMEMenu");
    // localStorage.removeItem("DistributionParameter");
    // localStorage.removeItem("CompanyDefaults")
    // localStorage.removeItem("SCMPHData");
    // localStorage.removeItem("BMEScreePermission");
    // localStorage.removeItem("userimage");
    // localStorage.removeItem("activescreen");
    // localStorage.removeItem("FinSchema");
    // localStorage.removeItem("UMCONFIG");
    // localStorage.removeItem("CopyFromTo"); // deepak porwal 20/nov/2020 scr no.142973
    // localStorage.removeItem("UserSetting"); // deepak porwal 24/Nov/2020 to fetch usersetting
    localStorage.clear();
    this.userSession = null;
    try {
      // localStorage.removeItem("FINSEGMENTSETUP");
      // localStorage.removeItem("FINMULTIDIMSETUP");
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
  getGridSettings() {
    const strSettings = localStorage.getItem("gridsettings");
    return strSettings ? JSON.parse(strSettings) : strSettings;
  }
  resetGridSettings() {
    localStorage.removeItem("gridsettings");
  }
  setGridSettings(settings) {
    localStorage.setItem("gridsettings", JSON.stringify(settings));
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setTreeMenu(treeMenu) {
    localStorage.setItem("BMEMenu", JSON.stringify(treeMenu));
  }
  getTreeMenu() {
    return localStorage.getItem("BMEMenu");
  }
  resetTreeMenu() {
    localStorage.removeItem("BMEMenu");
  }
  setBMEScreePermission(objScreens) {
    localStorage.setItem("BMEScreePermission", JSON.stringify(objScreens));
  }
  setUserImage(img) {
    localStorage.setItem("userimage", img);
  }
  // deepak porwal 20/nov/2020 scr no.142973
  setCopyFromToValue(data) {
    localStorage.setItem("CopyFromTo", data);
  }
  setUserSettings(data) {
    localStorage.setItem("UserSetting", JSON.stringify(data));
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac
  });
}

/***/ }),

/***/ 48770:
/*!********************************************************!*\
  !*** ./src/app/core/services/toast-message.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastMessageService: () => (/* binding */ ToastMessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-notification */ 68419);


class ToastMessageService {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  notifySuccess(message) {
    this.notificationService.show({
      content: message,
      cssClass: 'button-notification',
      animation: {
        type: 'fade',
        duration: 500
      },
      position: {
        horizontal: 'center',
        vertical: 'top'
      },
      type: {
        style: 'success',
        icon: true
      },
      closable: false,
      hideAfter: 5000
    });
  }
  notifyError(message) {
    this.notificationService.show({
      content: message,
      cssClass: 'button-notification',
      animation: {
        type: 'fade',
        duration: 500
      },
      position: {
        horizontal: 'center',
        vertical: 'top'
      },
      type: {
        style: 'error',
        icon: true
      },
      closable: false,
      hideAfter: 5000
    });
  }
  notifyWarning(message) {
    this.notificationService.show({
      content: message,
      cssClass: 'button-notification',
      animation: {
        type: 'fade',
        duration: 500
      },
      position: {
        horizontal: 'center',
        vertical: 'top'
      },
      type: {
        style: 'warning',
        icon: true
      },
      closable: false,
      hideAfter: 5000
    });
  }
  notifyInfo(message) {
    this.notificationService.show({
      content: message,
      cssClass: 'button-notification',
      animation: {
        type: 'fade',
        duration: 500
      },
      position: {
        horizontal: 'center',
        vertical: 'top'
      },
      type: {
        style: 'info',
        icon: true
      },
      closable: false,
      hideAfter: 5000
    });
  }
  notifyAlerts(message) {
    this.notificationService.show({
      content: message,
      cssClass: 'button-notification',
      animation: {
        type: 'fade',
        duration: 500
      },
      position: {
        horizontal: 'right',
        vertical: 'bottom'
      },
      type: {
        style: 'info',
        icon: true
      },
      closable: true,
      hideAfter: 100000
    });
  }
  static #_ = this.ɵfac = function ToastMessageService_Factory(t) {
    return new (t || ToastMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_progress_kendo_angular_notification__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastMessageService,
    factory: ToastMessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6301:
/*!*************************************************************!*\
  !*** ./src/app/core/services/translation-loader.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanTranslationLoaderService: () => (/* binding */ LanTranslationLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


class LanTranslationLoaderService {
  /**
   * Constructor
   *
   * @param {TranslateService} _translateService
   */
  constructor(_translateService) {
    this._translateService = _translateService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Load translations
   *
   * @param {Locale} args
   */
  loadTranslations(...args) {
    const locales = [...args];
    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this._translateService.setTranslation(locale.lang, locale.data, true);
    });
  }
  static #_ = this.ɵfac = function LanTranslationLoaderService_Factory(t) {
    return new (t || LanTranslationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanTranslationLoaderService,
    factory: LanTranslationLoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 14158:
/*!***************************************************!*\
  !*** ./src/app/core/services/utility.services.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppUtility: () => (/* binding */ AppUtility)
/* harmony export */ });
/* harmony import */ var D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ 62630);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/http-client-ext.service */ 83040);
/* harmony import */ var _appsettings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appsettings.service */ 67341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/http/userfield.service */ 22201);
/* harmony import */ var _toast_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast-message.service */ 48770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _dateFormat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dateFormat.service */ 46216);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 99758);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 78895);















// import printPackage  from 'print-js'
// declare var printJS: any;
class AppUtility {
  constructor(translateService, httpExt, appSettings, router, userFieldService, toastMessageService, _location, dateFormatService, alertservice, localStorageService) {
    this.translateService = translateService;
    this.httpExt = httpExt;
    this.appSettings = appSettings;
    this.router = router;
    this.userFieldService = userFieldService;
    this.toastMessageService = toastMessageService;
    this._location = _location;
    this.dateFormatService = dateFormatService;
    this.alertservice = alertservice;
    this.localStorageService = localStorageService;
    this.marrDefaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    this.miDefaultPrecision = 2;
    //public mbRead: boolean = false;
    this.mbWrite = false;
    this.mbDelete = false;
    this.msCustomDateFormat = "";
    this.miQtyPrecision = 0;
    this.miQtyPrecisionFormat = 'n' + this.miQtyPrecision;
    this.msPrintType = '';
    // Encryption
    this.msKeyVal = "RAJESH@SUHANE007";
    /**--- Get default formats from localStorage--- */
    let parrRoundingDefaults = JSON.parse(localStorage.getItem("RoundingDefaults"));
    this.miQtyPrecision = parrRoundingDefaults != null ? parrRoundingDefaults[0].Default_Value || 2 : 2;
    let parrDistributionParameter = JSON.parse(localStorage.getItem("DistributionParameter"));
    if (parrDistributionParameter != null) {
      let parrWmsDefaultKeysData = parrDistributionParameter.filter(x => x.MODULE_CODE == 'WMS');
      parrWmsDefaultKeysData.forEach(ele => {
        if (ele.DEFAULT_KEY == 'WMSReport') {
          this.msPrintType = ele.DEFAULT_VALUE;
        }
      });
    }
    if (this.marrDefaultFormat) {
      if (this.marrDefaultFormat.length) {
        this.marrDefaultFormat.forEach(ele => {
          if (ele.Default_Key == "CURR_DECIMAL") {
            this.miDefaultPrecision = Number(ele.Default_Value);
          }
        });
      }
    }
  }
  bmgfonTranslate(psKey) {
    let psMessage;
    this.translateService.get(psKey).subscribe(psRes => {
      psMessage = psRes;
    });
    return psMessage;
  }
  bmgfSetPrecision(psValue, piPrecision) {
    if (typeof psValue == 'string') {
      psValue = +psValue;
    }
    let piStrValue = psValue.toFixed(piPrecision || this.miDefaultPrecision);
    return piStrValue;
  }
  bmgfcommafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
  // To Use This Function Array Should Be Sorted Always
  bmgfbinarySearch(sortedArray, targetValue) {
    let startIndex = 0;
    let lastIndex = sortedArray.length - 1;
    while (startIndex <= lastIndex) {
      let midIndex = Math.floor((startIndex + lastIndex) / 2);
      if (targetValue == sortedArray[midIndex]) {
        return {
          originalArray: sortedArray,
          indexOfSearchValue: midIndex,
          searchValue: sortedArray[midIndex],
          response: "Found"
        };
      } else if (targetValue > sortedArray[midIndex]) {
        startIndex = midIndex + 1;
      } else if (targetValue < sortedArray[midIndex]) {
        lastIndex = midIndex - 1;
      } else {
        return {
          originalArray: sortedArray,
          response: "Not Found"
        };
      }
    }
  }
  // Transfer Reactive Controls To Template
  // bmgfCustomModelTransform(component) {
  //     let customObject = {};
  //     try {
  //         if (component == null || component == undefined) throw new Error("Custom Component Object Is Null");
  //         let controls = component.mfCustomComponentForm.controls;
  //         if (controls == null) throw new Error('Controls Are Null');
  //         let customMap: Map<string, {}> = component.mmMasterJsonData;
  //         if (customMap == null) throw new Error('Map Object is null');
  //         Object.entries(controls).forEach(element => {
  //             let tempData = element;
  //             let ctrlValue = tempData[1]['value'];
  //             try {
  //                 if (customMap.get(tempData[0])['DataType'] == "DateTime") {
  //                     ctrlValue = this.bmlfGetFormatedDate(tempData[1]['value']);
  //                 }
  //                 if (customMap.get(tempData[0])['DataType'] == "Boolean") {
  //                     if (tempData[1]['value'] == true) {
  //                         ctrlValue = '1'
  //                     } else {
  //                         ctrlValue = '0';
  //                     }
  //                 }
  //             }
  //             catch {
  //             }
  //             if (ctrlValue == null || ctrlValue == undefined) throw new Error('Value Is Null In Object.enteries Loop');
  //             let FieldName = customMap.get(tempData[0])['FieldName'];
  //             if (FieldName == null || FieldName == undefined) throw new Error('FieldName Is Null In Object.enteried Loop');
  //             customObject[FieldName] = ctrlValue;
  //         })
  //     }
  //     catch (e) {
  //         console.trace();
  //         console.log(e);
  //     }
  //     return customObject;
  // }
  // Transfer Reactive Controls To Template
  // bmgfCustomModelTransform(component) {
  //     let customObject = {};
  //     try {
  //         if (component == null || component == undefined) throw new Error("Custom Component Object Is Null");
  //         let controls = component.mfCustomComponentForm.controls;
  //         if (controls == null) throw new Error('Controls Are Null');
  //         let customMap: Map<string, {}> = component.mmMasterJsonData;
  //         if (customMap == null) throw new Error('Map Object is null');
  //         Object.entries(controls).forEach(element => {
  //             let tempData = element;
  //             let ctrlValue = tempData[1]['value'];
  //             if (customMap.get(tempData[0])['DataType'] == "DateTime") {
  //                 ctrlValue = this.bmlfGetFormatedDate(tempData[1]['value']);
  //             }
  //             if (customMap.get(tempData[0])['DataType'] == "Boolean") {
  //                 if (tempData[1]['value'] == true) {
  //                     ctrlValue = Number(1);
  //                 } else {
  //                     ctrlValue = Number(0);
  //                 }
  //             }
  //             let FieldName = customMap.get(tempData[0])['FieldName'];
  //             if ( ctrlValue == '' || ctrlValue == null || ctrlValue == undefined) {
  //                 customObject[FieldName] = null;
  //             } else {
  //                 customObject[FieldName] = ctrlValue;
  //             }
  //         })
  //     }
  //     catch (e) {
  //         console.trace();
  //         console.log(e);
  //     }
  //     return customObject;
  // }
  //Transfer Reactive Controls To Template
  // bmgfCustomModelTransform(component) {
  //     let customObject = {};
  //     try {
  //         if (component == null || component == undefined) throw new Error("Custom Component Object Is Null");
  //         let controls = component.mfCustomComponentForm.controls;
  //         if (controls == null) throw new Error('Controls Are Null');
  //         let customMap: Map<string, {}> = component.mmMasterJsonData;
  //         if (customMap == null) throw new Error('Map Object is null');
  //         Object.entries(controls).forEach(element => {
  //             let ctrlValue = element[1]['value'];
  //             let FieldName = customMap.get(element[0])['FieldName'];
  //             customMap.get(element[0])['DataType'] == "DateTime"      ? customObject[FieldName] = this.bmlfGetFormatedDate(ctrlValue) : '';
  //             customMap.get(element[0])['DataType'] == "Integer"       ? customObject[FieldName] = ctrlValue == '' ? Number(0) : Number(ctrlValue) : '';
  //             customMap.get(element[0])['DataType'] == "Decimal(22,6)" ? customObject[FieldName] = ctrlValue == '' ? String(0.0) : String(this.bmgfSetPrecision(ctrlValue, this.miQtyPrecision)) : '';
  //             customMap.get(element[0])['DataType'] == "Float"         ? customObject[FieldName] = ctrlValue == '' ? String(0.0) : String(this.bmgfSetPrecision(ctrlValue, this.miQtyPrecision)) : '';
  //             customMap.get(element[0])['DataType'] == "Boolean"       ? customObject[FieldName] = ctrlValue == true ? "true" : "false" : '';
  //             customMap.get(element[0])['DataType'] == "LookUp"        ? customObject[FieldName] = ctrlValue  :'';
  //             customMap.get(element[0])['DataType'] == "AlphaNumeric"  ? customObject[FieldName] = ctrlValue  :'';
  //             customMap.get(element[0])['DataType'] == "Dropdown"      ? customObject[FieldName] = ctrlValue  :'';
  //             customMap.get(element[0])['DataType'] == "TEXT"          ? customObject[FieldName] = ctrlValue  :'';
  //         })
  //     }
  //     catch (e) {
  //         console.trace();
  //         console.log(e);
  //     }
  //     return customObject;
  // }
  // Change as per Discussion with Madhav Sir
  bmgfCustomModelTransform(component) {
    let customObject = {};
    try {
      if (component == null || component == undefined) throw new Error("Custom Component Object Is Null");
      let controls = component.mfCustomComponentForm.controls;
      if (controls == null) throw new Error('Controls Are Null');
      let customMap = component.mmMasterJsonData;
      if (customMap == null) throw new Error('Map Object is null');
      Object.entries(controls).forEach(element => {
        let ctrlValue = element[1]['value'];
        let FieldName = customMap.get(element[0])['FieldName'];
        if (customMap.get(element[0])['DataType'] == "DateTime") {
          // customObject[FieldName] = (ctrlValue == '' || ctrlValue == null) ?  "":"";
          // customObject[FieldName] = (ctrlValue == '' || ctrlValue == null) ? '' : ctrlValue;
          customObject[FieldName] = ctrlValue == '' || ctrlValue == null ? new Date() : this.bmlfGetFormatedDate(ctrlValue);
        } else if (customMap.get(element[0])['DataType'] == "Integer") {
          customObject[FieldName] = ctrlValue == '' || ctrlValue == null ? String(0) : Number(ctrlValue);
        } else if (customMap.get(element[0])['DataType'] == "Decimal(22,6)" || customMap.get(element[0])['DataType'] == "Float") {
          if (ctrlValue == '' || ctrlValue == null) {
            ctrlValue = Number(0.0);
          }
          customObject[FieldName] = String(this.bmgfSetPrecision(ctrlValue, 6));
        } else if (customMap.get(element[0])['DataType'] == "Boolean") {
          customObject[FieldName] = ctrlValue == true ? "true" : "false";
        } else if (customMap.get(element[0])['DataType'] == "LookUp" || customMap.get(element[0])['DataType'] == "AlphaNumeric" || customMap.get(element[0])['DataType'] == "Dropdown") {
          customObject[FieldName] = ctrlValue == '' || ctrlValue == null ? '' : ctrlValue;
        } else if (customMap.get(element[0])['DataType'] == "AlphaNumeric") {
          customObject[FieldName] = ctrlValue == '' || ctrlValue == null ? '' : ctrlValue;
        } else {
          customObject[FieldName] = ctrlValue;
        }
        // if (ctrlValue == null || ctrlValue == undefined) throw new Error('Value Is Null In Object.enteries Loop');
        // let FieldName = customMap.get(tempData[0])['FieldName'];
        // if (FieldName == null || FieldName == undefined) throw new Error('FieldName Is Null In Object.enteried Loop');
        // customObject[FieldName] = ctrlValue;
      });
    } catch (e) {
      console.trace();
      console.log(e);
    }
    return customObject;
  }
  bmgfObjIsEmpty(obj) {
    return Object.keys(obj).length > 0 ? true : false;
  }
  // Remove Duplicates Object from array;
  bmgfRemoveDupObj(parrData, psProp) {
    return parrData.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[psProp]).indexOf(obj[psProp]) === pos;
    });
  }
  // this will remove only beginning and end of string whitespace.
  bmgftrim(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  }
  // bmgfAddCustomLineToModel(obj: any, screenName, psGridName: string = '', keyCase?) {
  //     return new Promise((resolve, reject) => {
  //         let pobjReqData = {
  //             ScreenName: 'UtilityService',
  //             LookUpKey: 'DetailUserfields',
  //             Filter1: screenName,
  //             Filter2: psGridName
  //         };
  //         this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
  //             if (data != null) {
  //                 if (data.LookupData.length > 0) {
  //                     data.LookupData.forEach(element => {
  //                         element.ExtendedFuntionality = element.ExtendedFuntionality.trim();
  //                         let data = {}
  //                         if (keyCase == 'smallCase') {
  //                             if (element.ExtendedFuntionality != '') {
  //                                 data['type'] = element.ExtendedFuntionality.toLowerCase() + 'custom';
  //                                 data['SQL'] = element.LookupQuery
  //                             }
  //                             else {
  //                                 data['type'] = element.DataType;
  //                             }
  //                             data['display'] = false;;
  //                             data['field'] = element.FieldName;
  //                             data['title'] = element.FieldCaption;
  //                             data['size'] = element.size;
  //                             data['isCustomField'] = true;
  //                         } else {
  //                             if (element.ExtendedFuntionality != '') {
  //                                 data['Type'] = element.ExtendedFuntionality.toLowerCase() + 'custom';
  //                                 data['SQL'] = element.LookupQuery
  //                             }
  //                             else {
  //                                 data['Type'] = element.DataType;
  //                             }
  //                             data['Display'] = true;;
  //                             data['Field'] = element.FieldName;
  //                             data['Title'] = element.FieldCaption;
  //                             data['Size'] = element.size;
  //                             data['isCustomField'] = true;
  //                         }
  //                         obj.splice(obj.length, 0, data); // scr no.142732 04/aug/2020 deepak porwal
  //                     });
  //                     resolve(data);
  //                 }
  //                 else {
  //                     // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
  //                     // reject(console.log("No Data In API"));
  //                     console.log("No Data In API")
  //                 }
  //             }
  //             else {
  //                 // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
  //                 // reject(console.log("No Response"));
  //                 console.log("No Response")
  //             }
  //         })
  //     });
  // }
  // bmgfAddCustomLineToModel(obj: any, screenName, psGridName: string = '', keyCase?) {
  //     localStorage.setItem('KeyCase', keyCase)
  //     return new Promise((resolve, reject) => {
  //         let pobjReqData = {
  //             ScreenName: 'UtilityService',
  //             LookUpKey: 'DetailUserfields',
  //             Filter1: screenName,
  //             Filter2: psGridName
  //         };
  //         this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
  //             if (data != null) {
  //                 if (data.LookupData.length > 0) {
  //                     // Change by Madhav Soni on 24/Feb/2023 
  //                     data.LookupData.forEach(element => {
  //                         element.ExtendedFuntionality = element.ExtendedFuntionality.trim();
  //                         let data = {}
  //                         element.ExtendedFuntionality != '' ? data['Type'] = element.ExtendedFuntionality.toLowerCase() + 'custom' : data['Type'] = element.DataType;
  //                         element.ExtendedFuntionality != '' ? data['SQL'] = element.LookupQuery : ''
  //                         element.DataType == "Dropdown" ? data['DropDown'] = element.LookupQuery : ''
  //                         keyCase == 'smallCase' ? data['display'] = true : data['Display'] = true;
  //                         keyCase == 'smallCase' ? data['field'] = element.FieldName : data['Field'] = element.FieldName;
  //                         keyCase == 'smallCase' ? data['title'] = element.FieldCaption : data['Title'] = element.FieldCaption;
  //                         keyCase == 'smallCase' ? data['size'] = element.size : data['Size'] = element.size;
  //                         keyCase == 'smallCase' ? data['isCustomField'] = true : data['isCustomField'] = true;
  //                         keyCase == 'smallCase' ? data['IsMandatory'] = element.IsMandatory : data['IsMandatory'] = element.IsMandatory;
  //                         keyCase == 'smallCase' ? data['IsEnabled'] = element.IsEnabled : data['IsEnabled'] = element.IsEnabled;
  //                         keyCase == 'smallCase' ? data['IsVisible'] = element.IsVisible : data['IsVisible'] = element.IsVisible;
  //                         obj.splice(obj.length, 0, data); // scr no.142732 04/aug/2020 deepak porwal
  //                     });
  //                     resolve(data);
  //                 } else {
  //                     // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
  //                     // reject(console.log("No Data In API"));
  //                     console.log("No Data In API")
  //                 }
  //             } else {
  //                 // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
  //                 // reject(console.log("No Response"));
  //                 console.log("No Response")
  //             }
  //         })
  //     });
  // }
  bmgfAddCustomLineToModel(obj, screenName, psGridName = '', keyCase) {
    localStorage.setItem('KeyCase', keyCase);
    return new Promise((resolve, reject) => {
      let pobjReqData = {
        ScreenName: 'UtilityService',
        LookUpKey: 'DetailUserfields',
        Filter1: screenName,
        Filter2: psGridName
      };
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
        if (data != null) {
          if (data.LookupData.length > 0) {
            localStorage.setItem("GridButton", JSON.stringify(data.LookupData));
            // Change by Madhav Soni on 24/Feb/2023 
            data.LookupData.forEach(element => {
              element.ExtendedFuntionality = element.ExtendedFuntionality.trim();
              let data = {};
              element.ExtendedFuntionality != '' ? data['Type'] = element.ExtendedFuntionality.toLowerCase() + 'custom' : data['Type'] = element.DataType;
              element.ExtendedFuntionality != '' ? data['SQL'] = element.LookupQuery : '';
              element.DataType == "Dropdown" ? data['DropDown'] = element.LookupQuery : '';
              keyCase == 'smallCase' ? data['display'] = true : data['Display'] = true;
              /*--- for Rest api/ sqlquery / button -----*/
              keyCase == 'smallCase' ? element.FieldName == "CustomAction1" || element.FieldName == "CustomAction2" || element.FieldName == "CustomAction3" || element.FieldName == "CustomAction4" || element.FieldName == "CustomAction5" || element.DataType == "RestAPI" || element.DataType == "SQLQuery" || element.DataType == "Formula" ? data['display'] = false : data['display'] = true : '';
              keyCase != 'smallCase' ? element.FieldName == "CustomAction1" || element.FieldName == "CustomAction2" || element.FieldName == "CustomAction3" || element.FieldName == "CustomAction4" || element.FieldName == "CustomAction5" || element.DataType == "RestAPI" || element.DataType == "SQLQuery" || element.DataType == "Formula" ? data['Display'] = false : data['Display'] = true : '';
              /*--- for Rest api/ sqlquery / button -----*/
              keyCase == 'smallCase' ? data['field'] = element.FieldName : data['Field'] = element.FieldName;
              keyCase == 'smallCase' ? data['title'] = element.FieldCaption : data['Title'] = element.FieldCaption;
              keyCase == 'smallCase' ? data['size'] = element.size : data['Size'] = element.size;
              keyCase == 'smallCase' ? data['isCustomField'] = true : data['isCustomField'] = true;
              keyCase == 'smallCase' ? data['IsMandatory'] = element.IsMandatory : data['IsMandatory'] = element.IsMandatory;
              keyCase == 'smallCase' ? data['IsEnabled'] = element.IsEnabled : data['IsEnabled'] = element.IsEnabled;
              keyCase == 'smallCase' ? data['IsVisible'] = element.IsVisible : data['IsVisible'] = element.IsVisible;
              obj.splice(obj.length, 0, data); // scr no.142732 04/aug/2020 deepak porwal
            });

            resolve(data);
          } else {
            // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
            // reject(console.log("No Data In API"));
            resolve(data);
            console.log("No Data In API");
          }
        } else {
          // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
          // reject(console.log("No Response"));
          console.log("No Response");
        }
      });
    });
  }
  // async bmlfCallGridCustomizationSyn(obj: any, screenName, psGridName: string = '', keyCase?) {
  //     var mstype = await this.bmgfAddCustomLineToModel(obj, screenName, psGridName, keyCase);
  //     
  //     console.log(psGridName);
  //     if(mstype == false){
  //         return;
  //     }
  //     //console.log(mstype);
  // }
  getCustomSqlData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETCustomSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  refreshUrlAndInitCustom(refreshUrl, navigateUrl, extraParam, json) {
    this.router.navigateByUrl(refreshUrl, {
      skipLocationChange: true
    }).then(() => {
      if (extraParam == true) {
        this.router.navigate([navigateUrl], {
          queryParams: json
        });
        // this.router.navigate([navigateUrl, json]);
      } else {
        this.router.navigate([navigateUrl]);
      }
    });
  }
  getBMEScreePermission(psScreenName, pnMenuItem_ID) {
    let objScreenPermission = JSON.parse(localStorage.getItem("BMEScreePermission"));
    let objPermission;
    if (typeof pnMenuItem_ID != 'undefined') {
      objPermission = objScreenPermission.filter(x => {
        if (x.MenuItem_ID == pnMenuItem_ID) {
          return x;
        }
      });
    } else {
      objPermission = objScreenPermission.filter(x => {
        if (x.MenuItem_Name == psScreenName) {
          return x;
        }
      });
    }
    if (objPermission.length > 0) {
      //this.mbRead = false;
      this.mbWrite = false;
      this.mbDelete = false;
      // if (objPermission[0].Permission=="Read"){
      //     this.mbRead=true;
      // }
      if (objPermission[0].Permission == "Write") {
        this.mbWrite = true;
      }
      if (objPermission[0].permission1 == "Delete") {
        this.mbDelete = true;
      }
    } else
      //Added by Deepak Porwal on 15/Dec/2020 for Common permission handling
      {
        // does not have permission of screen
        this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.PERMISSION_WRITE'));
        this.router.navigate(['/main/dashboard']); // As discuss with Amit sir routed back to Dashboard
        //this._location.back();
        //setTimeout(()=>{
        //this._location.forward();
        //},1000)
      }
  }

  trimStringSpace(str) {
    if (!str) return str;
    return str.replace(/^\s+/g, '');
  }
  bmgffindString(MainStr, pssubStr) {
    // if (MainStr.toLowerCase().includes(pssubStr.toLowerCase()) != '-1') {
    // if (MainStr.toLowerCase().includes(pssubStr.toLowerCase()) != '-1') {
    //     return true;
    // } else { return false; }
    return MainStr.toLowerCase().includes(pssubStr.toLowerCase());
  }
  bmgfSplitString(msstr, mspattern) {
    var splitArray = msstr.split("-");
    var finalString = "";
    for (let i = 0; i < splitArray.length; i++) {
      finalString += splitArray[i] + "<hr/>";
    }
    return finalString;
  }
  bmgfGroupBy(arrayData, clause) {
    return arrayData.reduce((acc, obj) => {
      let key = obj[clause];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  bmgfRefreshReuse(url, extraParam, param) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    if (extraParam == true) {
      this.router.navigate([url], {
        queryParams: param
      });
    } else {
      this.router.navigate([url]);
    }
  }
  bmlfGetCostMethod() {
    this.marrDefaultCost = JSON.parse(localStorage.getItem("CompanyDefaults"));
    let psCost;
    this.marrDefaultCost.forEach(element => {
      if (element.Default_Key == 'COST_METHOD') {
        psCost = element.Default_Value;
      }
    });
    return psCost;
  }
  bmlfGetFormatedDate(dtValue) {
    var year, month, date, hour, min;
    var resultDt;
    year = dtValue.getFullYear();
    month = dtValue.getMonth() + 1;
    date = dtValue.getDate();
    hour = dtValue.getHours();
    min = dtValue.getMinutes();
    //2017-02-23 21:30:00
    resultDt = year.toString() + '-' + month.toString() + '-' + date.toString() + ' ' + hour.toString() + ':' + min.toString() + ':00';
    return resultDt.toString();
  }
  // Added For Check Number Format by Madhav Soni 02-08-23
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  bmlfTransformCustomFieldsGet(objDetail) {
    try {
      objDetail = objDetail.map(element => {
        let mDateColumns = ['CUSTOM1', 'CUSTOM2', 'CUSTOM3', 'CUSTOM4', 'CUSTOM5', 'CUSTOM6', 'CUSTOM7', 'CUSTOM8', 'CUSTOM9', 'CUSTOM10', 'USER1', 'USER2', 'USER3', 'USER4', 'USER5', 'USER6', 'USER7', 'USER8', 'USER9', 'USER10', 'USER11', 'USER12', 'User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10', 'User11', 'User12'];
        Object.keys(element).forEach(data => {
          if (mDateColumns.includes(data)) {
            // let dateFormatVaild = moment(element[data], moment.ISO_8601, true).isValid();
            let dateFormatVaild = String(element[data]).includes(":");
            if (dateFormatVaild == true) {
              // try {
              element[data] = new Date(element[data]);
              // }
              // catch (e) {
              // }
            } else {
              if (element[data] == null || element[data] == undefined) {
                element[data] = "";
              } else if (element[data].toString() == "0" || element[data].toString() == "0.00") {
                element[data] = "";
              } else if (element[data].toString().toUpperCase() == "FALSE") {
                element[data] = "";
              } else if (this.isNumeric(element[data])) {
                element[data] = Number(element[data]);
              } else {
                element[data] = element[data];
              }
            }
          }
        });
        return element;
      });
    } catch (error) {
      console.log(error);
    }
  }
  bmlfTransformCustomFieldsPost(objDetail) {
    try {
      objDetail = objDetail.map(element => {
        let mDateColumns = ['CUSTOM1', 'CUSTOM2', 'CUSTOM3', 'CUSTOM4', 'CUSTOM5', 'CUSTOM6', 'CUSTOM7', 'CUSTOM8', 'CUSTOM9', 'CUSTOM10', 'USER1', 'USER2', 'USER3', 'USER4', 'USER5', 'USER6', 'USER7', 'USER8', 'USER9', 'USER10', 'USER11', 'USER12', 'User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10', 'User11', 'User12'];
        Object.keys(element).forEach(data => {
          if (mDateColumns.includes(data)) {
            // let dateFormatVaild = moment(element[data], moment.ISO_8601, true).isValid();
            let dateFormatVaild = String(element[data]).includes(":");
            if (dateFormatVaild == true) {
              // try {
              element[data] = this.bmlfGetFormatedDate(element[data]);
              // }
              // catch (e) {
              // }
            } else {
              if (element[data] == null || element[data] == undefined) {
                element[data] = "";
              }
              // 08-Sep-2020  Deepak Porwal
              // If custom field is of checkbox type then it clear the value and set blank that's why commented
              // else if (element[data].toString() == "0" || element[data].toString() == "0.00") {
              //     element[data] = "";
              // }
              // else if (element[data].toString().toUpperCase() == "FALSE") {
              //     element[data] = "";
              // }
              else {
                element[data] = String(element[data]);
              }
            }
          }
        });
        return element;
      });
    } catch (error) {
      console.log(error);
    }
  }
  bmgfOnKeyInputDisable() {
    document.onkeydown = e => false;
  }
  bmgfOnKeyInputEnable() {
    document.onkeydown = e => true;
  }
  bmgfRoundingDefaults() {}
  bmgfToFixNumConversion(psData, pIfixLength) {
    return Number(parseFloat(psData).toFixed(pIfixLength));
  }
  bmlfGetFormatedDateWithoutTime(dtValue) {
    try {
      var year, month, date, hour, min;
      var resultDt;
      year = dtValue.getFullYear();
      month = dtValue.getMonth() + 1;
      date = dtValue.getDate();
      hour = dtValue.getHours();
      min = dtValue.getMinutes();
      if (month.toString().length == 1) {
        month = '0' + month.toString();
      }
      if (date.toString().length == 1) {
        date = '0' + date.toString();
      }
      //2020-08-12T00:00:00
      resultDt = year.toString() + '-' + month.toString() + '-' + date.toString() + 'T00:00:00';
      return resultDt.toString();
    } catch (e) {
      console.log(e);
    }
  }
  bmlfConvertRtfToText(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    return rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "").trim();
  }
  bmlfTransformCustomFields(objDetail, psJsonMap) {
    try {
      objDetail = objDetail.map(element => {
        let mDateColumns = ['CUSTOM1', 'CUSTOM2', 'CUSTOM3', 'CUSTOM4', 'CUSTOM5', 'CUSTOM6', 'CUSTOM7', 'CUSTOM8', 'CUSTOM9', 'CUSTOM10', 'USER1', 'USER2', 'USER3', 'USER4', 'USER5', 'USER6', 'USER7', 'USER8', 'USER9', 'USER10', 'USER11', 'USER12', 'User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10', 'User11', 'User12'];
        Object.keys(element).forEach(data => {
          if (mDateColumns.includes(data)) {
            let dateFormatVaild = moment__WEBPACK_IMPORTED_MODULE_1__(element[data], moment__WEBPACK_IMPORTED_MODULE_1__.ISO_8601, true).isValid();
            if (dateFormatVaild == true) {
              try {
                element[data] = this.bmlfGetFormatedDate(element[data]);
              } catch (e) {}
            } else {
              let localDataCtrl = psJsonMap.get(data);
              if (localDataCtrl != undefined) {
                if (localDataCtrl['DataType'] == 'Float') {
                  if (element[data] == null || element[data] == undefined || element[data] == "") {
                    element[data] = "0.00";
                  } else {
                    element[data] = Number(element[data]).toFixed(3);
                  }
                } else if (localDataCtrl['DataType'] == 'Decimal(22,6)') {
                  if (element[data] == null || element[data] == undefined || element[data] == "") {
                    element[data] = "0.00";
                  } else {
                    element[data] = Number(element[data]).toFixed(3);
                  }
                } else if (localDataCtrl['DataType'] == 'Integer') {
                  if (element[data] == null || element[data] == undefined || element[data] == "") {
                    element[data] = "0";
                  } else {
                    element[data] = element[data].toString();
                  }
                } else if (localDataCtrl['DataType'] == 'Boolean') {
                  if (element[data] == null || element[data] == undefined || element[data] == "") {
                    element[data] = "0";
                  } else {
                    element[data] = element[data].toString();
                  }
                }
              } else {
                if (element[data] == null || element[data] == undefined || element[data] == "") {
                  element[data] = "";
                }
                // else if (element[data].toString() == "0" || element[data].toString() == "0.00") {
                //     element[data] = "";
                // }
                // else if (element[data].toString().toUpperCase() == "FALSE") {
                //     element[data] = "";
                // }
                else {
                  element[data] = element[data];
                }
              }
            }
          }
        });
        return element;
      });
    } catch (error) {
      console.log(error);
    }
  }
  // 05/Nov/2020 Added by Deepak Porwal for Custom Events
  bmfgInputCommonCustomEvent(screenname, controlId, controltype, customObj) {
    return new Promise((resolve, reject) => {
      let pobjReqData = {
        ScreenName: 'UtilityService',
        LookUpKey: 'ScreenName',
        Filter1: screenname,
        Filter2: controlId,
        Filter3: controltype
      };
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
        if (res == null) {
          reject();
          return false;
        } else {
          resolve(res);
        }
      }), err => {
        console.log(err);
      };
    });
  }
  // Added By Satish Thalke for Report Action
  bmgfReportAction(data, screenName) {
    data.length;
    let parrReportData = [];
    parrReportData.push(data);
    let pobjReqData = {
      JSON: JSON.stringify({
        DistReport: data.length > 1 ? data : screenName == 'Item Label' ? data : parrReportData,
        Response: [{
          ResponseText: '',
          ErrorCode: '',
          Pdfpath: ''
        }]
      })
    };
    let pDefaultReportType = localStorage.getItem('reportType');
    return new Promise((resolve, reject) => {
      this.toastMessageService.notifySuccess(this.bmgfonTranslate('COMMON.REPORTPROCESSMSG'));
      this.userFieldService.bmlfDISTReportProcess(pobjReqData).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          reject();
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          let pPDFSrc = res.Response[0].Pdfpath;
          if (res.Response[0].Pdfpath) {
            if (pDefaultReportType == 'Print') {
              this.bmgfPrintPDF(pPDFSrc);
            } else if (pDefaultReportType == 'NewTab') {
              this.bmgfOpenPDFNewTab(pPDFSrc);
            } else {
              this.bmgfDownloadFile(pPDFSrc, screenName, pDefaultReportType);
            }
            resolve(res);
          } else {
            if (this.msPrintType == 'Printer Server') {
              this.toastMessageService.notifySuccess('Report sent to Printer Server');
              // this.alertservice.infoAlert('Alert', '<div class="about-list">' + 'Report sent to Server' + '</div>');
              //  this.toastMessageService.notifyWarning('Report sent to Server');
            } else if (pDefaultReportType == 'Print') {
              this.toastMessageService.notifySuccess('Report sent to Printer Server');
              //  this.toastMessageService.notifyWarning('Report sent to Server');
            } else {
              if (res.Response[0].Pdfpath == '') {
                this.toastMessageService.notifySuccess(res.Response[0].ResponseText);
              } else {
                this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
              }
            }
            reject();
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            if (res.Response[0].ResponseText == '') {
              this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
            } else {
              this.toastMessageService.notifyError(res.Response[0].ResponseText);
            }
          } else {
            this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
          }
          reject();
        }
      }, err => {
        console.log(err);
        reject();
      });
    });
  }
  //added by Nisha for url different to distReportService
  bmgfReportActionWithOthAPI(data, screenName, apiEndPoint) {
    let parrReportData = [];
    parrReportData.push(data);
    let pobjReqData = {
      JSON: JSON.stringify({
        DistReport: data.length > 1 ? data : parrReportData,
        Response: [{
          ResponseText: '',
          ErrorCode: '',
          Pdfpath: ''
        }]
      })
    };
    let pDefaultReportType = localStorage.getItem('reportType');
    return new Promise((resolve, reject) => {
      this.toastMessageService.notifySuccess(this.bmgfonTranslate('COMMON.REPORTPROCESSMSG'));
      //added by Nisha Gupta for BOM Purge Prior Versions report
      this.userFieldService.bmlfonReportActionWithDiffUrl(pobjReqData, apiEndPoint).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          reject();
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          let pPDFSrc = res.Response[0].Pdfpath;
          if (res.Response[0].Pdfpath) {
            if (pDefaultReportType == 'Print') {
              this.bmgfPrintPDF(pPDFSrc);
            } else if (pDefaultReportType == 'NewTab') {
              this.bmgfOpenPDFNewTab(pPDFSrc);
            } else {
              this.bmgfDownloadFile(pPDFSrc, screenName, pDefaultReportType);
            }
            resolve(res);
          } else {
            if (pDefaultReportType == 'Print') {
              this.alertservice.infoAlert('Alert', '<div class="about-list">' + 'Report sent to Server' + '</div>');
              //  this.toastMessageService.notifyWarning('Report sent to Server');
            } else {
              this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
            }
            reject();
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            if (res.Response[0].ResponseText == '') {
              this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
            } else {
              this.toastMessageService.notifyError(res.Response[0].ResponseText);
            }
          } else {
            this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
          }
          reject();
        }
      }, err => {
        console.log(err);
        reject();
      });
    });
  }
  //added by Nisha for url different to distReportService and JSON object is different
  bmgfReportActionWithOthAPIAndJSON(param, gridData, screenName, apiEndPoint) {
    let pobjJData = {
      Parameters: param,
      GridData: gridData,
      Response: [{
        ResponseText: '',
        ErrorCode: '',
        Pdfpath: ''
      }]
    };
    let pobjJson = {
      JSON: JSON.stringify(pobjJData)
    };
    let pDefaultReportType = localStorage.getItem('reportType');
    return new Promise((resolve, reject) => {
      this.toastMessageService.notifySuccess(this.bmgfonTranslate('COMMON.REPORTPROCESSMSG'));
      //added by Nisha Gupta for BOM Purge Prior Versions report
      this.userFieldService.bmlfonReportActionWithDiffUrl(pobjJson, apiEndPoint).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          reject();
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          let pPDFSrc = res.Response[0].Pdfpath;
          if (res.Response[0].Pdfpath) {
            if (pDefaultReportType == 'Print') {
              this.bmgfPrintPDF(pPDFSrc);
            } else if (pDefaultReportType == 'NewTab') {
              this.bmgfOpenPDFNewTab(pPDFSrc);
            } else {
              this.bmgfDownloadFile(pPDFSrc, screenName, pDefaultReportType);
            }
            resolve(res);
          } else {
            if (pDefaultReportType == 'Print') {
              this.alertservice.infoAlert('Alert', '<div class="about-list">' + 'Report sent to Server' + '</div>');
              //  this.toastMessageService.notifyWarning('Report sent to Server');
            } else {
              this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
            }
            reject();
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            if (res.Response[0].ResponseText == '') {
              this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
            } else {
              this.toastMessageService.notifyError(res.Response[0].ResponseText);
            }
          } else {
            this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
          }
          reject();
        }
      }, err => {
        console.log(err);
        reject();
      });
    });
  }
  //added by Nisha Gupta for SDS Print
  bmgfsdsPrint(data, screenName) {
    let parrReportData = [];
    parrReportData.push(data);
    let pobjReqData = {
      JSON: JSON.stringify({
        ExESSPHPropMap: data,
        Response: [{
          ResponseText: '',
          ErrorCode: '',
          Pdfpath: '',
          fileName: ''
        }]
      })
    };
    return new Promise((resolve, reject) => {
      this.toastMessageService.notifySuccess(this.bmgfonTranslate('COMMON.PROCESSMSG'));
      this.userFieldService.bmlfExessSheetPrint(pobjReqData).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          reject();
          return false;
        }
        if (res.Response[0].ErrorCode == "") {
          let pPDFSrc = res.Response[0].Pdfpath;
          if (res.Response[0].Pdfpath) {
            this.bmgfDownloadFile(pPDFSrc, res.Response[0].fileName, 'Download image');
            resolve(res);
          } else {
            if (res.Response[0].ResponseText.includes('<br>')) {
              if (res.Response[0].ResponseText.match(/<br>/gi).length > 1) {
                let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, ',');
                let psRemoveLastComma = psFilteredRes.substr(0, psFilteredRes.lastIndexOf(','));
                this.toastMessageService.notifyError(psRemoveLastComma);
              } else {
                let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, '');
                this.toastMessageService.notifyError(psFilteredRes);
              }
            } else {
              this.toastMessageService.notifyWarning(this.bmgfonTranslate(res.Response[0].ResponseText));
            }
            reject();
          }
        } else {
          if (res.Response[0].ErrorCode != '') {
            if (res.Response[0].ResponseText == '') {
              this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
            } else {
              if (res.Response[0].ResponseText.includes('<br>')) {
                if (res.Response[0].ResponseText.match(/<br>/gi).length > 1) {
                  let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, ',');
                  let psRemoveLastComma = psFilteredRes.substr(0, psFilteredRes.lastIndexOf(','));
                  this.toastMessageService.notifyError(psRemoveLastComma);
                } else {
                  let psFilteredRes = res.Response[0].ResponseText.replace(/<br>/g, '');
                  this.toastMessageService.notifyError(psFilteredRes);
                }
              } else {
                this.toastMessageService.notifyError(res.Response[0].ResponseText);
              }
            }
          } else {
            this.toastMessageService.notifyWarning(this.bmgfonTranslate('COMMON.MSG.NODATAFOUND'));
          }
          reject();
        }
      }, err => {
        console.log(err);
        reject();
      });
    });
  }
  bmgfDownloadFile(pdf, ScreenName, type = 'Download PDF') {
    if (type == "Download Excel") {
      this.bmgfDownloadExcel(pdf, ScreenName);
    } else if (type == "Download Word") {
      this.bmgfDownloadWord(pdf, ScreenName);
    } else if (type == 'Download image') {
      this.bmgfDownloadZip(pdf, ScreenName);
    } else {
      this.bmgfDownloadPDF(pdf, ScreenName);
    }
  }
  bmgfDownloadZip(zipSrc, screenName) {
    const linkSource = `data:application/zip;base64,${zipSrc}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = `${screenName}.zip`;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfDownloadPDF(pdf, ScreenName) {
    const linkSource = `data:application/pdf;base64,${pdf}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = `${ScreenName}.pdf`;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfDownloadExcel(pdf, ScreenName) {
    const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${pdf}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = `${ScreenName}.xls`;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfDownloadWord(pdf, ScreenName) {
    const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${pdf}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = `${ScreenName}.doc`;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfPrintPDF(base64) {
    const byteArray = this.bmgfConvertBase64ToByteArray(base64);
    let blob = new Blob([byteArray], {
      type: 'application/pdf'
    });
    const blobUrl = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = blobUrl;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
  bmgfOpenPDFNewTab(base64) {
    const byteArray = this.bmgfConvertBase64ToByteArray(base64);
    let blob = new Blob([byteArray], {
      type: 'application/pdf'
    });
    const nav = window.navigator;
    if (window.navigator && nav.msSaveOrOpenBlob) {
      nav.msSaveOrOpenBlob(blob);
      return;
    }
    let url = URL.createObjectURL(blob);
    window.open(url);
  }
  bmgfConvertBase64ToByteArray(base64) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return byteArray;
  }
  bmlfChkRecordAuthorization(data) {
    return new Promise((resolve, reject) => {
      this.userFieldService.GETGeneralSqlData(data).subscribe(res => {
        if (res == null) {
          this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
          resolve(2);
          return false;
        }
        let permission = '';
        if (res.LookupData && res.LookupData.length) {
          permission = res.LookupData[0]['READWRITE'];
        } else {
          permission = 2;
        }
        resolve(permission);
      }, err => {
        resolve(2);
      });
    });
  }
  bmlfSetDateAsDateFormat(date) {
    if (src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(date)) {
      return new Date();
    }
    let defaultFormat;
    let defaultDateValue = 0;
    defaultFormat = JSON.parse(localStorage.getItem("defaultFormats"));
    defaultFormat.forEach(ele => {
      if (ele.Default_Key == "DateFormat") {
        defaultDateValue = ele.Default_Value;
      }
    });
    if (defaultDateValue == 1) {
      this.msCustomDateFormat = "MM/dd/yy";
    } else if (defaultDateValue == 2) {
      this.msCustomDateFormat = "dd/MM/yy";
    } else if (defaultDateValue == 3) {
      this.msCustomDateFormat = "yy/MM/dd";
    } else if (defaultDateValue == 4) {
      this.msCustomDateFormat = "MM/dd/yyyy";
    } else if (defaultDateValue == 5) {
      this.msCustomDateFormat = "dd/MM/yyyy";
    } else if (defaultDateValue == 6) {
      this.msCustomDateFormat = "yyyy/MM/dd";
    } else {
      this.msCustomDateFormat = "dd/MM/yyyy";
    }
    let parrDate = date.split('/');
    if (date.includes('-')) {
      parrDate = date.split('-');
    }
    let psSetDate = '';
    switch (this.msCustomDateFormat) {
      case 'MM/dd/yy':
        {
          psSetDate = `${parrDate[0]}/${parrDate[1]}/${parrDate[2]}`;
          let chkDate = new Date(psSetDate);
          if (chkDate == 'Invalid Date') {
            psSetDate = `${parrDate[1]}/${parrDate[0]}/${parrDate[2]}`;
            return new Date(psSetDate);
          } else {
            return chkDate;
          }
          break;
        }
      case 'dd/MM/yy':
        {
          psSetDate = `${parrDate[1]}/${parrDate[0]}/${parrDate[2]}`;
          return new Date(psSetDate);
          break;
        }
      case 'yy/MM/dd':
        {
          psSetDate = `${parrDate[1]}/${parrDate[2]}/${parrDate[0]}`;
          return new Date(psSetDate);
          break;
        }
      case 'dd/MM/yyyy':
        {
          psSetDate = `${parrDate[1]}/${parrDate[0]}/${parrDate[2]}`;
          return new Date(psSetDate);
          break;
        }
      case 'yyyy/MM/dd':
        {
          psSetDate = `${parrDate[1]}/${parrDate[2]}/${parrDate[0]}`;
          return new Date(psSetDate);
          break;
        }
      case 'MM/dd/yyyy':
        {
          psSetDate = `${parrDate[0]}/${parrDate[1]}/${parrDate[2]}`;
          let chkDate = new Date(psSetDate);
          if (chkDate == 'Invalid Date') {
            psSetDate = `${parrDate[1]}/${parrDate[0]}/${parrDate[2]}`;
            return new Date(psSetDate);
          } else {
            return chkDate;
          }
          break;
        }
    }
  }
  // Get number of days between two dates
  bmgfGetNoOfDaysWithDates(startDate, endDate) {
    let date1 = new Date(startDate);
    let date2 = new Date(endDate);
    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }
  // download text file;
  bmgfDwonloadHtmlEleToText(psContent) {
    window.open("data:application/txt," + encodeURIComponent(psContent), "_self");
  }
  bmgfonEncryption(psEnString, KeyVal) {
    if (KeyVal == undefined || KeyVal == null) {
      KeyVal = this.msKeyVal;
    }
    let piKeyValLen;
    let psEncpsEnString = '';
    let psSingeChar;
    let piSingeASC;
    let psEncryptedKeyVal;
    let piCount;
    piKeyValLen = KeyVal.length + 100;
    piCount = 1;
    for (var i = 0; i < psEnString.length; i++) {
      psSingeChar = psEnString.charCodeAt(i);
      piSingeASC = psSingeChar; //String.fromCharCode(psSingeChar)
      piSingeASC = piSingeASC + piKeyValLen + piCount;
      if (piCount > 150) {
        piCount = 1;
      } else {
        piCount = piCount + 1;
      }
      psEncryptedKeyVal = this.bmgfGetEncryptedKeyVal(KeyVal, piSingeASC);
      psEncpsEnString = psEncpsEnString + piSingeASC + psEncryptedKeyVal;
    }
    return psEncpsEnString;
  }
  bmgfGetEncryptedKeyVal(KeyVal, AddCharASCII) {
    let psEncKeyVal = '';
    let psSingeChar;
    let piSingeASC;
    for (var i = 0; i < KeyVal.length; i++) {
      psSingeChar = KeyVal.charCodeAt(i);
      piSingeASC = psSingeChar; //String.fromCharCode(psSingeChar);
      psEncKeyVal = psEncKeyVal + (AddCharASCII + piSingeASC + (i + 1));
    }
    return psEncKeyVal;
  }
  bmlfonDecryption(encryptedString, KeyVal) {
    if (KeyVal == undefined || KeyVal == null) {
      KeyVal = this.msKeyVal;
    }
    let piKeyValLen;
    let psDecrString = '';
    piKeyValLen = KeyVal.length + 100;
    if (piKeyValLen > 125) {
      piKeyValLen = 125;
    }
    for (var i = 0; i < encryptedString.length; i += KeyVal.length + 1) {
      psDecrString = psDecrString + String.fromCharCode(encryptedString.charCodeAt(i) - piKeyValLen);
    }
    return psDecrString;
  }
  bmgfDownloadRPT(psStr, ScreenName) {
    const linkSource = `data:application/text;base64,${psStr}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = `${ScreenName}.rpt`;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfDownloadCommonFilesWithOutlink(psStr, fileName) {
    let marrFileExt = fileName.split('.');
    let msFileExt = marrFileExt[marrFileExt.length - 1];
    let msGetExt = this.bmgfGetFileType(msFileExt);
    const linkSource = psStr;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = fileName;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfDownloadCommonFiles(psStr, fileName) {
    let marrFileExt = fileName.split('.');
    let msFileExt = marrFileExt[marrFileExt.length - 1];
    let msGetExt = this.bmgfGetFileType(msFileExt);
    const linkSource = `data:${msGetExt};base64,${psStr}`;
    let link = document.createElement('a');
    link.href = linkSource;
    link.download = fileName;
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(link);
    }, 100);
  }
  bmgfGetFileType(extension) {
    switch (extension.toLowerCase()) {
      case "323":
        return "text/h323";
      case "3g2":
        return "video/3gpp2";
      case "3gp":
        return "video/3gpp";
      case "3gp2":
        return "video/3gpp2";
      case "3gpp":
        return "video/3gpp";
      case "7z":
        return "application/x-7z-compressed";
      case "aa":
        return "audio/audible";
      case "aac":
        return "audio/aac";
      case "aaf":
        return "application/octet-stream";
      case "aax":
        return "audio/vnd.audible.aax";
      case "ac3":
        return "audio/ac3";
      case "aca":
        return "application/octet-stream";
      case "accda":
        return "application/msaccess.addin";
      case "accdb":
        return "application/msaccess";
      case "accdc":
        return "application/msaccess.cab";
      case "accde":
        return "application/msaccess";
      case "accdr":
        return "application/msaccess.runtime";
      case "accdt":
        return "application/msaccess";
      case "accdw":
        return "application/msaccess.webapplication";
      case "accft":
        return "application/msaccess.ftemplate";
      case "acx":
        return "application/internet-property-stream";
      case "addin":
        return "text/xml";
      case "ade":
        return "application/msaccess";
      case "adobebridge":
        return "application/x-bridge-url";
      case "adp":
        return "application/msaccess";
      case "adt":
        return "audio/vnd.dlna.adts";
      case "adts":
        return "audio/aac";
      case "afm":
        return "application/octet-stream";
      case "ai":
        return "application/postscript";
      case "aif":
        return "audio/x-aiff";
      case "aifc":
        return "audio/aiff";
      case "aiff":
        return "audio/aiff";
      case "air":
        return "application/vnd.adobe.air-application-installer-package+zip";
      case "amc":
        return "application/x-mpeg";
      case "application":
        return "application/x-ms-application";
      case "art":
        return "image/x-jg";
      case "asa":
        return "application/xml";
      case "asax":
        return "application/xml";
      case "ascx":
        return "application/xml";
      case "asd":
        return "application/octet-stream";
      case "asf":
        return "video/x-ms-asf";
      case "ashx":
        return "application/xml";
      case "asi":
        return "application/octet-stream";
      case "asm":
        return "text/plain";
      case "asmx":
        return "application/xml";
      case "aspx":
        return "application/xml";
      case "asr":
        return "video/x-ms-asf";
      case "asx":
        return "video/x-ms-asf";
      case "atom":
        return "application/atom+xml";
      case "au":
        return "audio/basic";
      case "avi":
        return "video/x-msvideo";
      case "axs":
        return "application/olescript";
      case "bas":
        return "text/plain";
      case "bcpio":
        return "application/x-bcpio";
      case "bin":
        return "application/octet-stream";
      case "bmp":
        return "image/bmp";
      case "c":
        return "text/plain";
      case "cab":
        return "application/octet-stream";
      case "caf":
        return "audio/x-caf";
      case "calx":
        return "application/vnd.ms-office.calx";
      case "cat":
        return "application/vnd.ms-pki.seccat";
      case "cc":
        return "text/plain";
      case "cd":
        return "text/plain";
      case "cdda":
        return "audio/aiff";
      case "cdf":
        return "application/x-cdf";
      case "cer":
        return "application/x-x509-ca-cert";
      case "chm":
        return "application/octet-stream";
      case "class":
        return "application/x-java-applet";
      case "clp":
        return "application/x-msclip";
      case "cmx":
        return "image/x-cmx";
      case "cnf":
        return "text/plain";
      case "cod":
        return "image/cis-cod";
      case "config":
        return "application/xml";
      case "contact":
        return "text/x-ms-contact";
      case "coverage":
        return "application/xml";
      case "cpio":
        return "application/x-cpio";
      case "cpp":
        return "text/plain";
      case "crd":
        return "application/x-mscardfile";
      case "crl":
        return "application/pkix-crl";
      case "crt":
        return "application/x-x509-ca-cert";
      case "cs":
        return "text/plain";
      case "csdproj":
        return "text/plain";
      case "csh":
        return "application/x-csh";
      case "csproj":
        return "text/plain";
      case "css":
        return "text/css";
      case "csv":
        return "text/csv";
      case "cur":
        return "application/octet-stream";
      case "cxx":
        return "text/plain";
      case "dat":
        return "application/octet-stream";
      case "datasource":
        return "application/xml";
      case "dbproj":
        return "text/plain";
      case "dcr":
        return "application/x-director";
      case "def":
        return "text/plain";
      case "deploy":
        return "application/octet-stream";
      case "der":
        return "application/x-x509-ca-cert";
      case "dgml":
        return "application/xml";
      case "dib":
        return "image/bmp";
      case "dif":
        return "video/x-dv";
      case "dir":
        return "application/x-director";
      case "disco":
        return "text/xml";
      case "dll":
        return "application/x-msdownload";
      case "dll.config":
        return "text/xml";
      case "dlm":
        return "text/dlm";
      case "doc":
        return "application/msword";
      case "docm":
        return "application/vnd.ms-word.document.macroenabled.12";
      case "docx":
        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      case "dot":
        return "application/msword";
      case "dotm":
        return "application/vnd.ms-word.template.macroenabled.12";
      case "dotx":
        return "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
      case "dsp":
        return "application/octet-stream";
      case "dsw":
        return "text/plain";
      case "dtd":
        return "text/xml";
      case "dtsconfig":
        return "text/xml";
      case "dv":
        return "video/x-dv";
      case "dvi":
        return "application/x-dvi";
      case "dwf":
        return "drawing/x-dwf";
      case "dwp":
        return "application/octet-stream";
      case "dxr":
        return "application/x-director";
      case "eml":
        return "message/rfc822";
      case "emz":
        return "application/octet-stream";
      case "eot":
        return "application/octet-stream";
      case "eps":
        return "application/postscript";
      case "etl":
        return "application/etl";
      case "etx":
        return "text/x-setext";
      case "evy":
        return "application/envoy";
      case "exe":
        return "application/octet-stream";
      case "exe.config":
        return "text/xml";
      case "fdf":
        return "application/vnd.fdf";
      case "fif":
        return "application/fractals";
      case "filters":
        return "application/xml";
      case "fla":
        return "application/octet-stream";
      case "flr":
        return "x-world/x-vrml";
      case "flv":
        return "video/x-flv";
      case "fsscript":
        return "application/fsharp-script";
      case "fsx":
        return "application/fsharp-script";
      case "generictest":
        return "application/xml";
      case "gif":
        return "image/gif";
      case "group":
        return "text/x-ms-group";
      case "gsm":
        return "audio/x-gsm";
      case "gtar":
        return "application/x-gtar";
      case "gz":
        return "application/x-gzip";
      case "h":
        return "text/plain";
      case "hdf":
        return "application/x-hdf";
      case "hdml":
        return "text/x-hdml";
      case "hhc":
        return "application/x-oleobject";
      case "hhk":
        return "application/octet-stream";
      case "hhp":
        return "application/octet-stream";
      case "hlp":
        return "application/winhlp";
      case "hpp":
        return "text/plain";
      case "hqx":
        return "application/mac-binhex40";
      case "hta":
        return "application/hta";
      case "htc":
        return "text/x-component";
      case "htm":
        return "text/html";
      case "html":
        return "text/html";
      case "htt":
        return "text/webviewhtml";
      case "hxa":
        return "application/xml";
      case "hxc":
        return "application/xml";
      case "hxd":
        return "application/octet-stream";
      case "hxe":
        return "application/xml";
      case "hxf":
        return "application/xml";
      case "hxh":
        return "application/octet-stream";
      case "hxi":
        return "application/octet-stream";
      case "hxk":
        return "application/xml";
      case "hxq":
        return "application/octet-stream";
      case "hxr":
        return "application/octet-stream";
      case "hxs":
        return "application/octet-stream";
      case "hxt":
        return "text/html";
      case "hxv":
        return "application/xml";
      case "hxw":
        return "application/octet-stream";
      case "hxx":
        return "text/plain";
      case "i":
        return "text/plain";
      case "ico":
        return "image/x-icon";
      case "ics":
        return "application/octet-stream";
      case "idl":
        return "text/plain";
      case "ief":
        return "image/ief";
      case "iii":
        return "application/x-iphone";
      case "inc":
        return "text/plain";
      case "inf":
        return "application/octet-stream";
      case "inl":
        return "text/plain";
      case "ins":
        return "application/x-internet-signup";
      case "ipa":
        return "application/x-itunes-ipa";
      case "ipg":
        return "application/x-itunes-ipg";
      case "ipproj":
        return "text/plain";
      case "ipsw":
        return "application/x-itunes-ipsw";
      case "iqy":
        return "text/x-ms-iqy";
      case "isp":
        return "application/x-internet-signup";
      case "ite":
        return "application/x-itunes-ite";
      case "itlp":
        return "application/x-itunes-itlp";
      case "itms":
        return "application/x-itunes-itms";
      case "itpc":
        return "application/x-itunes-itpc";
      case "ivf":
        return "video/x-ivf";
      case "jar":
        return "application/java-archive";
      case "java":
        return "application/octet-stream";
      case "jck":
        return "application/liquidmotion";
      case "jcz":
        return "application/liquidmotion";
      case "jfif":
        return "image/pjpeg";
      case "jnlp":
        return "application/x-java-jnlp-file";
      case "jpb":
        return "application/octet-stream";
      case "jpe":
        return "image/jpeg";
      case "jpeg":
        return "image/jpeg";
      case "jpg":
        return "image/jpeg";
      case "js":
        return "application/x-javascript";
      case "jsx":
        return "text/jscript";
      case "jsxbin":
        return "text/plain";
      case "latex":
        return "application/x-latex";
      case "library-ms":
        return "application/windows-library+xml";
      case "lit":
        return "application/x-ms-reader";
      case "loadtest":
        return "application/xml";
      case "lpk":
        return "application/octet-stream";
      case "lsf":
        return "video/x-la-asf";
      case "lst":
        return "text/plain";
      case "lsx":
        return "video/x-la-asf";
      case "lzh":
        return "application/octet-stream";
      case "m13":
        return "application/x-msmediaview";
      case "m14":
        return "application/x-msmediaview";
      case "m1v":
        return "video/mpeg";
      case "m2t":
        return "video/vnd.dlna.mpeg-tts";
      case "m2ts":
        return "video/vnd.dlna.mpeg-tts";
      case "m2v":
        return "video/mpeg";
      case "m3u":
        return "audio/x-mpegurl";
      case "m3u8":
        return "audio/x-mpegurl";
      case "m4a":
        return "audio/m4a";
      case "m4b":
        return "audio/m4b";
      case "m4p":
        return "audio/m4p";
      case "m4r":
        return "audio/x-m4r";
      case "m4v":
        return "video/x-m4v";
      case "mac":
        return "image/x-macpaint";
      case "mak":
        return "text/plain";
      case "man":
        return "application/x-troff-man";
      case "manifest":
        return "application/x-ms-manifest";
      case "map":
        return "text/plain";
      case "master":
        return "application/xml";
      case "mda":
        return "application/msaccess";
      case "mdb":
        return "application/x-msaccess";
      case "mde":
        return "application/msaccess";
      case "mdp":
        return "application/octet-stream";
      case "me":
        return "application/x-troff-me";
      case "mfp":
        return "application/x-shockwave-flash";
      case "mht":
        return "message/rfc822";
      case "mhtml":
        return "message/rfc822";
      case "mid":
        return "audio/mid";
      case "midi":
        return "audio/mid";
      case "mix":
        return "application/octet-stream";
      case "mk":
        return "text/plain";
      case "mmf":
        return "application/x-smaf";
      case "mno":
        return "text/xml";
      case "mny":
        return "application/x-msmoney";
      case "mod":
        return "video/mpeg";
      case "mov":
        return "video/quicktime";
      case "movie":
        return "video/x-sgi-movie";
      case "mp2":
        return "video/mpeg";
      case "mp2v":
        return "video/mpeg";
      case "mp3":
        return "audio/mpeg";
      case "mp4":
        return "video/mp4";
      case "mp4v":
        return "video/mp4";
      case "mpa":
        return "video/mpeg";
      case "mpe":
        return "video/mpeg";
      case "mpeg":
        return "video/mpeg";
      case "mpf":
        return "application/vnd.ms-mediapackage";
      case "mpg":
        return "video/mpeg";
      case "mpp":
        return "application/vnd.ms-project";
      case "mpv2":
        return "video/mpeg";
      case "mqv":
        return "video/quicktime";
      case "ms":
        return "application/x-troff-ms";
      case "msi":
        return "application/octet-stream";
      case "mso":
        return "application/octet-stream";
      case "mts":
        return "video/vnd.dlna.mpeg-tts";
      case "mtx":
        return "application/xml";
      case "mvb":
        return "application/x-msmediaview";
      case "mvc":
        return "application/x-miva-compiled";
      case "mxp":
        return "application/x-mmxp";
      case "nc":
        return "application/x-netcdf";
      case "nsc":
        return "video/x-ms-asf";
      case "nws":
        return "message/rfc822";
      case "ocx":
        return "application/octet-stream";
      case "oda":
        return "application/oda";
      case "odc":
        return "text/x-ms-odc";
      case "odh":
        return "text/plain";
      case "odl":
        return "text/plain";
      case "odp":
        return "application/vnd.oasis.opendocument.presentation";
      case "ods":
        return "application/oleobject";
      case "odt":
        return "application/vnd.oasis.opendocument.text";
      case "one":
        return "application/onenote";
      case "onea":
        return "application/onenote";
      case "onepkg":
        return "application/onenote";
      case "onetmp":
        return "application/onenote";
      case "onetoc":
        return "application/onenote";
      case "onetoc2":
        return "application/onenote";
      case "orderedtest":
        return "application/xml";
      case "osdx":
        return "application/opensearchdescription+xml";
      case "p10":
        return "application/pkcs10";
      case "p12":
        return "application/x-pkcs12";
      case "p7b":
        return "application/x-pkcs7-certificates";
      case "p7c":
        return "application/pkcs7-mime";
      case "p7m":
        return "application/pkcs7-mime";
      case "p7r":
        return "application/x-pkcs7-certreqresp";
      case "p7s":
        return "application/pkcs7-signature";
      case "pbm":
        return "image/x-portable-bitmap";
      case "pcast":
        return "application/x-podcast";
      case "pct":
        return "image/pict";
      case "pcx":
        return "application/octet-stream";
      case "pcz":
        return "application/octet-stream";
      case "pdf":
        return "application/pdf";
      case "pfb":
        return "application/octet-stream";
      case "pfm":
        return "application/octet-stream";
      case "pfx":
        return "application/x-pkcs12";
      case "pgm":
        return "image/x-portable-graymap";
      case "pic":
        return "image/pict";
      case "pict":
        return "image/pict";
      case "pkgdef":
        return "text/plain";
      case "pkgundef":
        return "text/plain";
      case "pko":
        return "application/vnd.ms-pki.pko";
      case "pls":
        return "audio/scpls";
      case "pma":
        return "application/x-perfmon";
      case "pmc":
        return "application/x-perfmon";
      case "pml":
        return "application/x-perfmon";
      case "pmr":
        return "application/x-perfmon";
      case "pmw":
        return "application/x-perfmon";
      case "png":
        return "image/png";
      case "pnm":
        return "image/x-portable-anymap";
      case "pnt":
        return "image/x-macpaint";
      case "pntg":
        return "image/x-macpaint";
      case "pnz":
        return "image/png";
      case "pot":
        return "application/vnd.ms-powerpoint";
      case "potm":
        return "application/vnd.ms-powerpoint.template.macroenabled.12";
      case "potx":
        return "application/vnd.openxmlformats-officedocument.presentationml.template";
      case "ppa":
        return "application/vnd.ms-powerpoint";
      case "ppam":
        return "application/vnd.ms-powerpoint.addin.macroenabled.12";
      case "ppm":
        return "image/x-portable-pixmap";
      case "pps":
        return "application/vnd.ms-powerpoint";
      case "ppsm":
        return "application/vnd.ms-powerpoint.slideshow.macroenabled.12";
      case "ppsx":
        return "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
      case "ppt":
        return "application/vnd.ms-powerpoint";
      case "pptm":
        return "application/vnd.ms-powerpoint.presentation.macroenabled.12";
      case "pptx":
        return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      case "prf":
        return "application/pics-rules";
      case "prm":
        return "application/octet-stream";
      case "prx":
        return "application/octet-stream";
      case "ps":
        return "application/postscript";
      case "psc1":
        return "application/powershell";
      case "psd":
        return "application/octet-stream";
      case "psess":
        return "application/xml";
      case "psm":
        return "application/octet-stream";
      case "psp":
        return "application/octet-stream";
      case "pub":
        return "application/x-mspublisher";
      case "pwz":
        return "application/vnd.ms-powerpoint";
      case "qht":
        return "text/x-html-insertion";
      case "qhtm":
        return "text/x-html-insertion";
      case "qt":
        return "video/quicktime";
      case "qti":
        return "image/x-quicktime";
      case "qtif":
        return "image/x-quicktime";
      case "qtl":
        return "application/x-quicktimeplayer";
      case "qxd":
        return "application/octet-stream";
      case "ra":
        return "audio/x-pn-realaudio";
      case "ram":
        return "audio/x-pn-realaudio";
      case "rar":
        return "application/octet-stream";
      case "ras":
        return "image/x-cmu-raster";
      case "rat":
        return "application/rat-file";
      case "rc":
        return "text/plain";
      case "rc2":
        return "text/plain";
      case "rct":
        return "text/plain";
      case "rdlc":
        return "application/xml";
      case "resx":
        return "application/xml";
      case "rf":
        return "image/vnd.rn-realflash";
      case "rgb":
        return "image/x-rgb";
      case "rgs":
        return "text/plain";
      case "rm":
        return "application/vnd.rn-realmedia";
      case "rmi":
        return "audio/mid";
      case "rmp":
        return "application/vnd.rn-rn_music_package";
      case "roff":
        return "application/x-troff";
      case "rpm":
        return "audio/x-pn-realaudio-plugin";
      case "rqy":
        return "text/x-ms-rqy";
      case "rtf":
        return "application/rtf";
      case "rtx":
        return "text/richtext";
      case "ruleset":
        return "application/xml";
      case "s":
        return "text/plain";
      case "safariextz":
        return "application/x-safari-safariextz";
      case "scd":
        return "application/x-msschedule";
      case "sct":
        return "text/scriptlet";
      case "sd2":
        return "audio/x-sd2";
      case "sdp":
        return "application/sdp";
      case "sea":
        return "application/octet-stream";
      case "searchconnector-ms":
        return "application/windows-search-connector+xml";
      case "setpay":
        return "application/set-payment-initiation";
      case "setreg":
        return "application/set-registration-initiation";
      case "settings":
        return "application/xml";
      case "sgimb":
        return "application/x-sgimb";
      case "sgml":
        return "text/sgml";
      case "sh":
        return "application/x-sh";
      case "shar":
        return "application/x-shar";
      case "shtml":
        return "text/html";
      case "sit":
        return "application/x-stuffit";
      case "sitemap":
        return "application/xml";
      case "skin":
        return "application/xml";
      case "sldm":
        return "application/vnd.ms-powerpoint.slide.macroenabled.12";
      case "sldx":
        return "application/vnd.openxmlformats-officedocument.presentationml.slide";
      case "slk":
        return "application/vnd.ms-excel";
      case "sln":
        return "text/plain";
      case "slupkg-ms":
        return "application/x-ms-license";
      case "smd":
        return "audio/x-smd";
      case "smi":
        return "application/octet-stream";
      case "smx":
        return "audio/x-smd";
      case "smz":
        return "audio/x-smd";
      case "snd":
        return "audio/basic";
      case "snippet":
        return "application/xml";
      case "snp":
        return "application/octet-stream";
      case "sol":
        return "text/plain";
      case "sor":
        return "text/plain";
      case "spc":
        return "application/x-pkcs7-certificates";
      case "spl":
        return "application/futuresplash";
      case "src":
        return "application/x-wais-source";
      case "srf":
        return "text/plain";
      case "ssisdeploymentmanifest":
        return "text/xml";
      case "ssm":
        return "application/streamingmedia";
      case "sst":
        return "application/vnd.ms-pki.certstore";
      case "stl":
        return "application/vnd.ms-pki.stl";
      case "sv4cpio":
        return "application/x-sv4cpio";
      case "sv4crc":
        return "application/x-sv4crc";
      case "svc":
        return "application/xml";
      case "swf":
        return "application/x-shockwave-flash";
      case "t":
        return "application/x-troff";
      case "tar":
        return "application/x-tar";
      case "tcl":
        return "application/x-tcl";
      case "testrunconfig":
        return "application/xml";
      case "testsettings":
        return "application/xml";
      case "tex":
        return "application/x-tex";
      case "texi":
        return "application/x-texinfo";
      case "texinfo":
        return "application/x-texinfo";
      case "tgz":
        return "application/x-compressed";
      case "thmx":
        return "application/vnd.ms-officetheme";
      case "thn":
        return "application/octet-stream";
      case "tif":
        return "image/tiff";
      case "tiff":
        return "image/tiff";
      case "tlh":
        return "text/plain";
      case "tli":
        return "text/plain";
      case "toc":
        return "application/octet-stream";
      case "tr":
        return "application/x-troff";
      case "trm":
        return "application/x-msterminal";
      case "trx":
        return "application/xml";
      case "ts":
        return "video/vnd.dlna.mpeg-tts";
      case "tsv":
        return "text/tab-separated-values";
      case "ttf":
        return "application/octet-stream";
      case "tts":
        return "video/vnd.dlna.mpeg-tts";
      case "txt":
        return "text/plain";
      case "u32":
        return "application/octet-stream";
      case "uls":
        return "text/iuls";
      case "user":
        return "text/plain";
      case "ustar":
        return "application/x-ustar";
      case "vb":
        return "text/plain";
      case "vbdproj":
        return "text/plain";
      case "vbk":
        return "video/mpeg";
      case "vbproj":
        return "text/plain";
      case "vbs":
        return "text/vbscript";
      case "vcf":
        return "text/x-vcard";
      case "vcproj":
        return "application/xml";
      case "vcs":
        return "text/plain";
      case "vcxproj":
        return "application/xml";
      case "vddproj":
        return "text/plain";
      case "vdp":
        return "text/plain";
      case "vdproj":
        return "text/plain";
      case "vdx":
        return "application/vnd.ms-visio.viewer";
      case "vml":
        return "text/xml";
      case "vscontent":
        return "application/xml";
      case "vsct":
        return "text/xml";
      case "vsd":
        return "application/vnd.visio";
      case "vsi":
        return "application/ms-vsi";
      case "vsix":
        return "application/vsix";
      case "vsixlangpack":
        return "text/xml";
      case "vsixmanifest":
        return "text/xml";
      case "vsmdi":
        return "application/xml";
      case "vspscc":
        return "text/plain";
      case "vss":
        return "application/vnd.visio";
      case "vsscc":
        return "text/plain";
      case "vssettings":
        return "text/xml";
      case "vssscc":
        return "text/plain";
      case "vst":
        return "application/vnd.visio";
      case "vstemplate":
        return "text/xml";
      case "vsto":
        return "application/x-ms-vsto";
      case "vsw":
        return "application/vnd.visio";
      case "vsx":
        return "application/vnd.visio";
      case "vtx":
        return "application/vnd.visio";
      case "wav":
        return "audio/wav";
      case "wave":
        return "audio/wav";
      case "wax":
        return "audio/x-ms-wax";
      case "wbk":
        return "application/msword";
      case "wbmp":
        return "image/vnd.wap.wbmp";
      case "wcm":
        return "application/vnd.ms-works";
      case "wdb":
        return "application/vnd.ms-works";
      case "wdp":
        return "image/vnd.ms-photo";
      case "webarchive":
        return "application/x-safari-webarchive";
      case "webtest":
        return "application/xml";
      case "wiq":
        return "application/xml";
      case "wiz":
        return "application/msword";
      case "wks":
        return "application/vnd.ms-works";
      case "wlmp":
        return "application/wlmoviemaker";
      case "wlpginstall":
        return "application/x-wlpg-detect";
      case "wlpginstall3":
        return "application/x-wlpg3-detect";
      case "wm":
        return "video/x-ms-wm";
      case "wma":
        return "audio/x-ms-wma";
      case "wmd":
        return "application/x-ms-wmd";
      case "wmf":
        return "application/x-msmetafile";
      case "wml":
        return "text/vnd.wap.wml";
      case "wmlc":
        return "application/vnd.wap.wmlc";
      case "wmls":
        return "text/vnd.wap.wmlscript";
      case "wmlsc":
        return "application/vnd.wap.wmlscriptc";
      case "wmp":
        return "video/x-ms-wmp";
      case "wmv":
        return "video/x-ms-wmv";
      case "wmx":
        return "video/x-ms-wmx";
      case "wmz":
        return "application/x-ms-wmz";
      case "wpl":
        return "application/vnd.ms-wpl";
      case "wps":
        return "application/vnd.ms-works";
      case "wri":
        return "application/x-mswrite";
      case "wrl":
        return "x-world/x-vrml";
      case "wrz":
        return "x-world/x-vrml";
      case "wsc":
        return "text/scriptlet";
      case "wsdl":
        return "text/xml";
      case "wvx":
        return "video/x-ms-wvx";
      case "x":
        return "application/directx";
      case "xaf":
        return "x-world/x-vrml";
      case "xaml":
        return "application/xaml+xml";
      case "xap":
        return "application/x-silverlight-app";
      case "xbap":
        return "application/x-ms-xbap";
      case "xbm":
        return "image/x-xbitmap";
      case "xdr":
        return "text/plain";
      case "xht":
        return "application/xhtml+xml";
      case "xhtml":
        return "application/xhtml+xml";
      case "xla":
        return "application/vnd.ms-excel";
      case "xlam":
        return "application/vnd.ms-excel.addin.macroenabled.12";
      case "xlc":
        return "application/vnd.ms-excel";
      case "xld":
        return "application/vnd.ms-excel";
      case "xlk":
        return "application/vnd.ms-excel";
      case "xll":
        return "application/vnd.ms-excel";
      case "xlm":
        return "application/vnd.ms-excel";
      case "xls":
        return "application/vnd.ms-excel";
      case "xlsb":
        return "application/vnd.ms-excel.sheet.binary.macroenabled.12";
      case "xlsm":
        return "application/vnd.ms-excel.sheet.macroenabled.12";
      case "xlsx":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case "xlt":
        return "application/vnd.ms-excel";
      case "xltm":
        return "application/vnd.ms-excel.template.macroenabled.12";
      case "xltx":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
      case "xlw":
        return "application/vnd.ms-excel";
      case "xml":
        return "text/xml";
      case "xmta":
        return "application/xml";
      case "xof":
        return "x-world/x-vrml";
      case "xoml":
        return "text/plain";
      case "xpm":
        return "image/x-xpixmap";
      case "xps":
        return "application/vnd.ms-xpsdocument";
      case "xrm-ms":
        return "text/xml";
      case "xsc":
        return "application/xml";
      case "xsd":
        return "text/xml";
      case "xsf":
        return "text/xml";
      case "xsl":
        return "text/xml";
      case "xslt":
        return "text/xml";
      case "xsn":
        return "application/octet-stream";
      case "xss":
        return "application/xml";
      case "xtp":
        return "application/octet-stream";
      case "xwd":
        return "image/x-xwindowdump";
      case "z":
        return "application/x-compress";
      case "zip":
        return "application/x-zip-compressed";
      default:
        return "application/octet-stream";
    }
  }
  //   json to xlsx data
  bmgfJsonToXlsxExport(parrData, psName) {
    /* generate worksheet */
    const ws = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.aoa_to_sheet(parrData);
    // /* generate workbook and add the worksheet */
    const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_append_sheet(wb, ws, 'Book1');
    // /* save to file */
    xlsx__WEBPACK_IMPORTED_MODULE_3__.writeFile(wb, psName);
  }
  // xlsx to json file upload
  bmgfxlsxToJsonUpload(evt) {
    let data = [];
    /* wire up file reader */
    return new Promise((resolve, reject) => {
      const target = evt.target;
      const reader = new FileReader();
      reader.onload = e => {
        /* read workbook */
        const bstr = e.target.result;
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__.read(bstr, {
          type: 'binary'
        });
        /* grab first sheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* save data */
        data = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.sheet_to_json(ws, {
          header: 1
        });
        resolve(data);
      };
      reader.readAsBinaryString(target.files[0]);
    });
  }
  //Round of roundTo(2.985,2)    result 2.99
  roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }
  bmgfCheckFileExtension(fileName) {
    let ext = fileName.split('.').pop();
    if (ext == 'exe' || ext == "apk" || ext == "bat" || ext == "msi" || ext == "sys") {
      return false;
    } else {
      return true;
    }
  }
  //Save Settings For Manage Page
  bmlfSaveManageGrid(e, ScreenName, GridName, LeftPaneName) {
    let GridKeys = {};
    let JsonObj = {
      JsonData: []
    };
    e.columns.forEach(column => {
      if (column.field != undefined) {
        GridKeys = {
          Index: column.leafIndex,
          field: column.field,
          title: column.title,
          filter: column.filter,
          filterable: column.filterable,
          format: '',
          hidden: !column.isVisible
        };
        JsonObj.JsonData.push(GridKeys);
      }
    });
    let reqData = JSON.stringify(JsonObj);
    if (LeftPaneName == '') {
      LeftPaneName = ScreenName;
    }
    let pobjReqData = {
      ScreenName: 'UserSetting',
      LookUpKey: 'InsertBlankUserDetails',
      Filter1: ScreenName,
      Filter2: reqData,
      Filter3: LeftPaneName,
      Filter4: GridName
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res == null) {
        this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
      }
      if (res.Response[0].ErrorCode == "") {
        this.toastMessageService.notifySuccess(this.bmgfonTranslate('COMMON.MSG.SAVE'));
      } else {
        this.toastMessageService.notifyError(this.bmgfonTranslate(res.Response[0].ResponseText));
      }
    });
  }
  // GetJsonSetting(ScreenName, UserID, GridName, pArrGridCol) {
  //     let pobjReqData = {
  //         ScreenName: 'UserSettingsManagePage',
  //         LookUpKey: 'ManageJSONString',
  //         Filter1: ScreenName,
  //         Filter2: UserID,
  //         Filter3: GridName
  //     }
  //     return new Promise((resolve, reject) => {
  //         this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
  //             if (res.LookupData) {
  //                 if (res.LookupData[0].JSONString == '') {
  //                     resolve(null);
  //                 } else {
  //                     let piIndex = 1;
  //                     pArrGridCol.forEach(ele => {
  //                         ele.index = piIndex;
  //                         ++piIndex;
  //                     });
  //                     let parrSettingData = JSON.parse(res.LookupData[0].JSONString);
  //                     let parrGridSetting = parrSettingData.JsonData;
  //                     let parrAction = parrGridSetting.filter(i => i.field == 'ActionCol');
  //                     if (parrAction.length > 0) {
  //                         let pnActionPos = parrGridSetting.findIndex(i => i.field == 'ActionCol');
  //                         if (pnActionPos != -1) {
  //                             parrGridSetting.splice(pnActionPos, 1);
  //                         }
  //                         parrGridSetting.unshift(parrAction[0]);
  //                     }
  //                     if (parrGridSetting != null && parrGridSetting != undefined) {
  //                         piIndex = 1;
  //                         parrGridSetting.forEach(ele => {
  //                             if (ele.hidden == true) {
  //                                 let pnhiddenPos = pArrGridCol.findIndex(i => i.field == ele.field || i.Field == ele.field);
  //                                 if (pnhiddenPos != -1) {
  //                                     pArrGridCol.splice(pnhiddenPos, 1);
  //                                 }
  //                             }
  //                             pArrGridCol.filter(x => {
  //                                 if (x.field == ele.field || x.Field == ele.field) {
  //                                     x.index = piIndex;
  //                                     // x.Display = !ele.hidden;
  //                                 }
  //                             })
  //                             ++piIndex;
  //                         })
  //                         pArrGridCol.sort(function (a, b) { return a.index - b.index });
  //                     }
  //                     resolve(pArrGridCol);
  //                 }
  //             } else {
  //                 resolve(null);
  //             }
  //         });
  //     });
  // }
  // GetJsonSetting(ScreenName, UserID, GridName, pArrGridCol: any, pArrGridAction: any = null) {
  //     let objUserData: any = {};
  //     objUserData = this.localStorageService.getUserSession();
  //     let pobjReqData = {
  //         ScreenName: 'UserSettingsManagePage',
  //         LookUpKey: 'ManageJSONString',
  //         Filter1: ScreenName,
  //         Filter2: objUserData.UserId,
  //         Filter3: GridName
  //     }
  //     return new Promise((resolve, reject) => {
  //         this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
  //             if (res.LookupData) {
  //                 if (res.LookupData[0].JSONString == '') {
  //                     resolve(null);
  //                 } else {
  //                     let piIndex = 1;
  //                     pArrGridCol.forEach(ele => {
  //                         ele.index = piIndex;
  //                         ++piIndex;
  //                     });
  //                     let parrSettingData = JSON.parse(res.LookupData[0].JSONString);
  //                     let parrGridSetting = parrSettingData.JsonData;
  //                     let parrAction = parrGridSetting.filter(i => i.field == 'ActionCol');
  //                     if (parrAction.length > 0) {
  //                         let pnActionPos = parrGridSetting.findIndex(i => i.field == 'ActionCol');
  //                         if (pnActionPos != -1) {
  //                             parrGridSetting.splice(pnActionPos, 1);
  //                         }
  //                         parrGridSetting.unshift(parrAction[0]);
  //                     }
  //                     if (parrGridSetting != null && parrGridSetting != undefined) {
  //                         piIndex = 1;
  //                         parrGridSetting.forEach(ele => {
  //                             if (ele.hidden == true) {
  //                                 let pnhiddenPos = pArrGridCol.findIndex(i => i.field == ele.field || i.Field == ele.field);
  //                                 if (pnhiddenPos != -1) {
  //                                     pArrGridCol.splice(pnhiddenPos, 1);
  //                                 }
  //                             }
  //                             pArrGridCol.filter(x => {
  //                                 if (x.field == ele.field || x.Field == ele.field) {
  //                                     x.index = piIndex;
  //                                     // x.Display = !ele.hidden;
  //                                 }
  //                             })
  //                             ++piIndex;
  //                         })
  //                         pArrGridCol.sort(function (a, b) { return a.index - b.index });
  //                     }
  //                     pArrGridCol.sort(function (a, b) { return a.index - b.index });
  //                     if (res.LookupData[0].ActionJSONString != '' && pArrGridAction != null) {
  //                         piIndex = 1;
  //                         pArrGridAction.forEach(ele => {
  //                             ele.index = piIndex;
  //                             ++piIndex;
  //                         });
  //                         let parrActionBtnSettingData = JSON.parse(res.LookupData[0].ActionJSONString);
  //                         let parrActionBtnSetting = parrActionBtnSettingData.JsonData;
  //                         if (parrActionBtnSetting != null && parrActionBtnSetting != undefined) {
  //                             piIndex = 1;
  //                             parrActionBtnSetting.forEach(ele => {
  //                                 if (ele.hidden == true) {
  //                                     let pnhiddenPos = pArrGridAction.findIndex(i => i.key == ele.field || i.Key == ele.field);
  //                                     if (pnhiddenPos != -1) {
  //                                         pArrGridAction.splice(pnhiddenPos, 1);
  //                                     }
  //                                 }
  //                                 pArrGridAction.filter(x => {
  //                                     if (x.key == ele.field || x.Key == ele.field) {
  //                                         x.index = piIndex;
  //                                     }
  //                                 })
  //                                 ++piIndex;
  //                             })
  //                         }
  //                         pArrGridAction.sort(function (a, b) { return a.index - b.index });
  //                         resolve(pArrGridCol);
  //                     } else {
  //                         resolve(pArrGridCol);
  //                     }
  //                 }
  //             } else {
  //                 resolve(null);
  //             }
  //         });
  //     });
  // }
  GetJsonSetting(ScreenName, UserID, GridName, pArrGridCol, pArrGridAction = null) {
    let objUserData = {};
    objUserData = this.localStorageService.getUserSession();
    let pobjReqData = {
      ScreenName: 'UserSettingsManagePage',
      LookUpKey: 'ManageJSONString',
      Filter1: ScreenName,
      Filter2: objUserData.UserId,
      Filter3: GridName
    };
    return new Promise((resolve, reject) => {
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
        if (res.LookupData) {
          if (res.LookupData[0].JSONString == '') {
            resolve(null);
          } else {
            pArrGridCol.forEach((ele, i) => {
              if (ele.field != undefined && ele.field.includes('CustomAction5') || ele.Field != undefined && ele.Field.includes('CustomAction5')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction4') || ele.Field != undefined && ele.Field.includes('CustomAction4')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction3') || ele.Field != undefined && ele.Field.includes('CustomAction3')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction2') || ele.Field != undefined && ele.Field.includes('CustomAction2')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction1') || ele.Field != undefined && ele.Field.includes('CustomAction1')) {
                pArrGridCol.splice(i, 1);
              }
            });
            let piIndex = 1;
            pArrGridCol.forEach(ele => {
              ele.index = piIndex;
              ++piIndex;
            });
            let parrSettingData = JSON.parse(res.LookupData[0].JSONString);
            let parrGridSetting = parrSettingData.JsonData;
            let parrAction = parrGridSetting.filter(i => i.field == 'ActionCol');
            if (parrAction.length > 0) {
              let pnActionPos = parrGridSetting.findIndex(i => i.field == 'ActionCol');
              if (pnActionPos != -1) {
                parrGridSetting.splice(pnActionPos, 1);
              }
              parrGridSetting.unshift(parrAction[0]);
            }
            if (parrGridSetting != null && parrGridSetting != undefined) {
              piIndex = 1;
              parrGridSetting.forEach(ele => {
                if (ele.hidden == true) {
                  let pnhiddenPos = pArrGridCol.findIndex(i => i.field == ele.field || i.Field == ele.field);
                  if (pnhiddenPos != -1) {
                    pArrGridCol.splice(pnhiddenPos, 1);
                  }
                }
                pArrGridCol.filter((x, i) => {
                  if (x.field == ele.field || x.Field == ele.field) {
                    x.index = piIndex;
                    // x.Display = !ele.hidden;
                  }

                  if (x.field != undefined && x.field.includes('CustomAction') || x.Field != undefined && x.Field.includes('CustomAction')) {
                    pArrGridCol.splice(i, 1);
                  }
                });
                ++piIndex;
              });
              pArrGridCol.sort(function (a, b) {
                return a.index - b.index;
              });
            }
            pArrGridCol.sort(function (a, b) {
              return a.index - b.index;
            });
            pArrGridCol.forEach((ele, i) => {
              if (ele.field != undefined && ele.field.includes('CustomAction5') || ele.Field != undefined && ele.Field.includes('CustomAction5')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction4') || ele.Field != undefined && ele.Field.includes('CustomAction4')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction3') || ele.Field != undefined && ele.Field.includes('CustomAction3')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction2') || ele.Field != undefined && ele.Field.includes('CustomAction2')) {
                pArrGridCol.splice(i, 1);
              }
              if (ele.field != undefined && ele.field.includes('CustomAction1') || ele.Field != undefined && ele.Field.includes('CustomAction1')) {
                pArrGridCol.splice(i, 1);
              }
            });
            if (res.LookupData[0].ActionJSONString != '' && pArrGridAction != null) {
              piIndex = 1;
              pArrGridAction.forEach(ele => {
                ele.index = piIndex;
                ++piIndex;
              });
              let parrActionBtnSettingData = JSON.parse(res.LookupData[0].ActionJSONString);
              let parrActionBtnSetting = parrActionBtnSettingData.JsonData;
              if (parrActionBtnSetting != null && parrActionBtnSetting != undefined) {
                piIndex = 1;
                parrActionBtnSetting.forEach(ele => {
                  if (ele.hidden == true) {
                    let pnhiddenPos = pArrGridAction.findIndex(i => i.Field == ele.field);
                    if (pnhiddenPos != -1) {
                      pArrGridAction.splice(pnhiddenPos, 1);
                    }
                  } else {
                    if (ele.filter == 'Custombutton' || ele.Filter == 'Custombutton') {
                      pArrGridAction.push(ele);
                    }
                  }
                  pArrGridAction.filter(x => {
                    if (x.Field == ele.field || x.field == ele.field) {
                      x.Index = piIndex;
                    }
                  });
                  ++piIndex;
                });
              }
              pArrGridAction.sort(function (a, b) {
                return a.Index - b.Index;
              });
              var GridButton;
              GridButton = JSON.parse(localStorage.getItem('GridButton'));
              pArrGridAction.forEach(element => {
                GridButton.forEach(ele => {
                  if (element.field == ele.FieldName) {
                    element.title = ele.FieldCaption;
                    element.DataType = ele.DataType;
                    element.LookupQuery = ele.LookupQuery;
                    element.IsVisible = ele.IsVisible;
                    element.ValidateEvent_Message = ele.ValidateEvent_Message;
                  }
                });
              });
              resolve(pArrGridCol);
            } else {
              resolve(pArrGridCol);
            }
          }
        } else {
          resolve(null);
        }
      });
    });
  }
  // get grid name list
  bmlfGetGridNameLists(screenName) {
    let marrGridNameList = [];
    let pobjReqData = {
      ScreenName: 'Customization Tool',
      LookUpKey: 'DataTableName',
      Filter1: screenName
    };
    this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
      if (res != null) {
        if (res.LookupData.length > 0) {
          marrGridNameList = res.LookupData;
        }
      }
    });
    return marrGridNameList;
  }
  bmlfSetMaxLenForFinSchema(type, defaultvalue) {
    let parrFinSchema = JSON.parse(localStorage.getItem("FinSchema"));
    if (parrFinSchema.length > 0) {
      let parrFilterData = parrFinSchema.filter(x => x.Int_Parameter == type);
      if (parrFilterData.length > 0) {
        return Number(parrFilterData[0].Fin_Param_Size);
      } else {
        return defaultvalue;
      }
    } else {
      return defaultvalue;
    }
  }
  bmgfParseGS1Code(barcode, type) {
    return new Promise((resolve, reject) => {
      let pobjReturnData = {};
      let parrParsedCodeItems;
      try {
        let parrParseCode = parseBarcode(barcode);
        parrParsedCodeItems = parrParseCode.parsedCodeItems;
        let pbValidLotno = true;
        parrParsedCodeItems.forEach(element => {
          if (element.dataTitle == "BATCH/LOT") {
            if (element.data.length > 31) {
              this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.LOTNOLENGTHLIMIT'));
              pbValidLotno = false;
            }
          }
        });
        if (pbValidLotno) {
          pobjReturnData.parsedCodeItems = parrParsedCodeItems;
          if (type == "ITEM") {
            let pobjReqData = {
              ScreenName: 'ItemDataforGS1',
              LookUpKey: 'UPCCODE',
              Filter1: parrParsedCodeItems[0].data
            };
            this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
              if (res != null) {
                if (res.LookupData.length > 0) {
                  pobjReturnData.lookupData = res.LookupData;
                  resolve(pobjReturnData);
                } else {
                  this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.NODATA'));
                }
              } else {
                this.toastMessageService.notifyError(this.bmgfonTranslate('COMMON.MSG.SERVERERROR'));
              }
            }, err => {
              console.log(err);
              reject();
            });
          }
        } else {
          resolve();
        }
      } catch (ex) {
        resolve(pobjReturnData);
      }
    });
  }
  // Added on 16-06-2023
  // Validation for Common Warning and cancel
  bmlfonAssignCustValues(custom) {
    this.mObjModel.CUSTOM1 = custom.CUSTOM1 ? custom.CUSTOM1 : "";
    this.mObjModel.CUSTOM2 = custom.CUSTOM2 ? custom.CUSTOM2 : "";
    this.mObjModel.CUSTOM3 = custom.CUSTOM3 ? custom.CUSTOM3 : "";
    this.mObjModel.CUSTOM4 = custom.CUSTOM4 ? custom.CUSTOM4 : "";
    this.mObjModel.CUSTOM5 = custom.CUSTOM5 ? custom.CUSTOM5 : "";
    this.mObjModel.CUSTOM6 = custom.CUSTOM6 ? custom.CUSTOM6 : "";
    this.mObjModel.CUSTOM7 = custom.CUSTOM7 ? custom.CUSTOM7 : "";
    this.mObjModel.CUSTOM8 = custom.CUSTOM8 ? custom.CUSTOM8 : "";
    this.mObjModel.CUSTOM9 = custom.CUSTOM9 ? custom.CUSTOM9 : "";
    this.mObjModel.CUSTOM10 = custom.CUSTOM10 ? custom.CUSTOM10 : "";
  }
  bmlfCustomCheckValidationMsg(ScreenName, FormJson, psType) {
    var _this = this;
    return (0,D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mObjModel = FormJson;
      // let data = this.bmgfCustomModelTransform(customCtrl);
      // this.bmlfonAssignCustValues(data);
      // if (!FormGridJson) {
      //     FormGridJson = [];
      // }
      let parrHeaderData = [{
        ScreenName: ScreenName,
        ButtonCaption: psType
      }];
      // let pobjJData = {
      //     ParameterData: parrHeaderData,
      //     HeaderData: [FormJson],
      //     DetailData: FormGridJson,
      //     Response: [{
      //         "ResponseText": "",
      //         "ErrorCode": ""
      //     }]
      // };
      let pobjJData = {
        ParameterData: parrHeaderData
      };
      Object.keys(FormJson).forEach(key => {
        pobjJData[key] = FormJson[key];
      });
      pobjJData.Response = [{
        "ResponseText": "",
        "ErrorCode": ""
      }];
      let pobjJson = {
        JSON: JSON.stringify(pobjJData)
      };
      var jsonData = [];
      return new Promise((resolve, reject) => {
        _this.userFieldService.bmlfCheckValidationEvent(pobjJson).subscribe(res => {
          if (Object.keys(res).length === 0) {
            resolve(false);
            return;
          } else if (res.Response[0].ResponseText == undefined) {
            resolve(false);
            return;
          } else if (res.Response[0].ErrorCode == "5001" || res.Response[0].ErrorCode == 5001) {
            jsonData = res.Response;
            resolve(jsonData[0]);
            return;
          } else {
            if (res.Response[0].ResponseText) {
              jsonData = res.Response[0].ResponseText.split("|");
              resolve(jsonData);
            } else {
              resolve(false);
            }
          }
        });
      });
    })();
  }
  bmlfCheckValidationMsg(customCtrl, ScreenName, FormJson, FormGridJson, psType) {
    var _this2 = this;
    return (0,D_New_Working16_BMEWEBUI_BMEWEB11_BMEWEB11_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.mObjModel = FormJson;
      let data = _this2.bmgfCustomModelTransform(customCtrl);
      _this2.bmlfonAssignCustValues(data);
      if (!FormGridJson) {
        FormGridJson = [];
      }
      let parrHeaderData = [];
      parrHeaderData.push({
        ScreenName: ScreenName,
        ButtonCaption: psType
      });
      let pobjJData = {
        ParameterData: parrHeaderData,
        HeaderData: [FormJson],
        DetailData: FormGridJson,
        Response: [{
          "ResponseText": "",
          "ErrorCode": ""
        }]
      };
      let pobjJson = {
        JSON: JSON.stringify(pobjJData)
      };
      var jsonData = [];
      return new Promise((resolve, reject) => {
        _this2.userFieldService.bmlfCheckValidationEvent(pobjJson).subscribe(res => {
          if (Object.keys(res).length === 0) {
            resolve(false);
            return;
          } else if (res.Response[0].ResponseText == undefined) {
            resolve(false);
            return;
          } else if (res.Response[0].ErrorCode == "5001" || res.Response[0].ErrorCode == 5001) {
            jsonData = res.Response;
            resolve(jsonData[0]);
            return;
          } else {
            if (res.Response[0].ResponseText) {
              jsonData = res.Response[0].ResponseText.split("|");
              resolve(jsonData);
            } else {
              resolve(false);
            }
          }
        });
      });
    })();
  }
  bmgIsMandatary(Json, msScreenName) {
    let pobjReqData = {
      ScreenName: 'CustomComponent',
      LookUpKey: 'CustomFields',
      Filter1: msScreenName,
      Filter2: '0'
    };
    return new Promise((resolve, reject) => {
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(res => {
        let pbShowMsg = false;
        res.LookupData.forEach(element => {
          if (element.FieldName.includes('CUSTOM') && element.IsMandatory == true) {
            if (Json[element.FieldName] == '' || Json[element.FieldName] == undefined || Json[element.FieldName] == null) {
              this.toastMessageService.notifyError(this.bmgfonTranslate('Enter ' + [element.FieldName.toLowerCase()] + ' Value'));
              pbShowMsg = true;
            }
          }
        });
        if (pbShowMsg) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
  // How to Videos for Non Listing Screens
  bmgfHowToVideo(psUrl) {
    let psCurrUrl = psUrl;
    let objScreenPermission = JSON.parse(localStorage.getItem("BMEScreePermission"));
    let psWhatsNewUrl = '';
    psWhatsNewUrl = JSON.parse(localStorage.getItem("WhatsNewUrl"));
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
        if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.bmgfNullCheckValidator(psWhatsNewUrl)) {
          psPortUrl = psWhatsNewUrl;
        } else {
          psPortUrl = this.appSettings.WhatsNewEndPoints;
        }
        let psUrl = psPortUrl + "bmeweb/howto/" + objPermission[0].MenuItem_ID + "?otp=" + otp;
        window.open(psUrl, '_blank');
      }, error => {
        console.log(error);
      }).add(() => {});
    }
  }
  //All Grid Customization In One Service
  bmgfAddCustomLineToModelAll(screenName) {
    return new Promise((resolve, reject) => {
      let pobjReqData = {
        ScreenName: 'UtilityService',
        LookUpKey: 'DetailUserfieldsAll',
        Filter1: screenName
      };
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
        if (data != null) {
          if (data.LookupData.length > 0) {
            resolve(data.LookupData);
          } else {
            resolve(null);
            console.log("No Data In API");
          }
        } else {
          resolve(null);
          console.log("Server Error");
        }
      });
    });
  }
  bmgfAddGridSettingManageAll(screenName) {
    return new Promise((resolve, reject) => {
      let pobjReqData = {
        ScreenName: 'UtilityService',
        LookUpKey: 'DetailUserfieldsAll',
        Filter1: screenName
      };
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
        if (data != null) {
          if (data.LookupData.length > 0) {
            resolve(data.LookupData);
          } else {
            console.log("No Data In API");
          }
        } else {
          console.log("Server Error");
        }
      });
    });
  }
  bmgfAddCustomColumnsAll(obj, data, keyCase) {
    localStorage.setItem('KeyCase', keyCase);
    if (data != null) {
      //if (data.LookupData.length > 0) {
      localStorage.setItem("GridButton", JSON.stringify(data.LookupData));
      // Change by Madhav Soni on 24/Feb/2023 
      data.forEach(element => {
        element.ExtendedFuntionality = element.ExtendedFuntionality.trim();
        let data = {};
        element.ExtendedFuntionality != '' ? data['Type'] = element.ExtendedFuntionality.toLowerCase() + 'custom' : data['Type'] = element.DataType;
        element.ExtendedFuntionality != '' ? data['SQL'] = element.LookupQuery : '';
        element.DataType == "Dropdown" ? data['DropDown'] = element.LookupQuery : '';
        keyCase == 'smallCase' ? data['display'] = true : data['Display'] = true;
        /*--- for Rest api/ sqlquery / button -----*/
        keyCase == 'smallCase' ? element.FieldName == "CustomAction1" || element.FieldName == "CustomAction2" || element.FieldName == "CustomAction3" || element.FieldName == "CustomAction4" || element.FieldName == "CustomAction5" || element.DataType == "RestAPI" || element.DataType == "SQLQuery" || element.DataType == "Formula" ? data['display'] = false : data['display'] = true : '';
        keyCase != 'smallCase' ? element.FieldName == "CustomAction1" || element.FieldName == "CustomAction2" || element.FieldName == "CustomAction3" || element.FieldName == "CustomAction4" || element.FieldName == "CustomAction5" || element.DataType == "RestAPI" || element.DataType == "SQLQuery" || element.DataType == "Formula" ? data['Display'] = false : data['Display'] = true : '';
        /*--- for Rest api/ sqlquery / button -----*/
        keyCase == 'smallCase' ? data['field'] = element.FieldName : data['Field'] = element.FieldName;
        keyCase == 'smallCase' ? data['title'] = element.FieldCaption : data['Title'] = element.FieldCaption;
        keyCase == 'smallCase' ? data['size'] = element.size : data['Size'] = element.size;
        keyCase == 'smallCase' ? data['isCustomField'] = true : data['isCustomField'] = true;
        keyCase == 'smallCase' ? data['IsMandatory'] = element.IsMandatory : data['IsMandatory'] = element.IsMandatory;
        keyCase == 'smallCase' ? data['IsEnabled'] = element.IsEnabled : data['IsEnabled'] = element.IsEnabled;
        keyCase == 'smallCase' ? data['IsVisible'] = element.IsVisible : data['IsVisible'] = element.IsVisible;
        obj.splice(obj.length, 0, data); // scr no.142732 04/aug/2020 deepak porwal
      });

      return obj;
      //resolve(obj);
      // } else {
      //     // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
      //     // reject(console.log("No Data In API"));               
      //     console.log("No Data In API")
      // }
    } else {
      // Change by deepak porwal on 18/Mar/2020 for Automation Stuck Issue
      // reject(console.log("No Response"));
      console.log("No Response");
    }
  }
  bmgfGetJsonSettingAll(ScreenName) {
    let objUserData = {};
    objUserData = this.localStorageService.getUserSession();
    let pobjReqData = {
      ScreenName: 'UserSettingsManagePage',
      LookUpKey: 'ManageJSONStringALL',
      Filter1: ScreenName,
      Filter2: objUserData.UserId
    };
    return new Promise((resolve, reject) => {
      this.userFieldService.GETGeneralSqlData(pobjReqData).subscribe(data => {
        if (data != null) {
          if (data.LookupData.length > 0) {
            resolve(data.LookupData);
          } else {
            console.log("No Data In API");
          }
        } else {
          console.log("Server Error");
        }
      });
    });
  }
  bmgfSetGridSettingAll(pArrGridCol, data, pArrGridAction = null) {
    if (data) {
      if (data.JSONString == '') {
        return pArrGridCol;
      } else {
        pArrGridCol.forEach((ele, i) => {
          if (ele.field != undefined && ele.field.includes('CustomAction5') || ele.Field != undefined && ele.Field.includes('CustomAction5')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction4') || ele.Field != undefined && ele.Field.includes('CustomAction4')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction3') || ele.Field != undefined && ele.Field.includes('CustomAction3')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction2') || ele.Field != undefined && ele.Field.includes('CustomAction2')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction1') || ele.Field != undefined && ele.Field.includes('CustomAction1')) {
            pArrGridCol.splice(i, 1);
          }
        });
        let piIndex = 1;
        pArrGridCol.forEach(ele => {
          ele.index = piIndex;
          ++piIndex;
        });
        let parrSettingData = JSON.parse(data.JSONString);
        let parrGridSetting = parrSettingData.JsonData;
        let parrAction = parrGridSetting.filter(i => i.field == 'ActionCol');
        if (parrAction.length > 0) {
          let pnActionPos = parrGridSetting.findIndex(i => i.field == 'ActionCol');
          if (pnActionPos != -1) {
            parrGridSetting.splice(pnActionPos, 1);
          }
          parrGridSetting.unshift(parrAction[0]);
        }
        if (parrGridSetting != null && parrGridSetting != undefined) {
          piIndex = 1;
          parrGridSetting.forEach(ele => {
            if (ele.hidden == true) {
              let pnhiddenPos = pArrGridCol.findIndex(i => i.field == ele.field || i.Field == ele.field);
              if (pnhiddenPos != -1) {
                pArrGridCol.splice(pnhiddenPos, 1);
              }
            }
            pArrGridCol.filter((x, i) => {
              if (x.field == ele.field || x.Field == ele.field) {
                x.index = piIndex;
                // x.Display = !ele.hidden;
              }

              if (x.field != undefined && x.field.includes('CustomAction') || x.Field != undefined && x.Field.includes('CustomAction')) {
                pArrGridCol.splice(i, 1);
              }
            });
            ++piIndex;
          });
          pArrGridCol.sort(function (a, b) {
            return a.index - b.index;
          });
        }
        pArrGridCol.sort(function (a, b) {
          return a.index - b.index;
        });
        pArrGridCol.forEach((ele, i) => {
          if (ele.field != undefined && ele.field.includes('CustomAction5') || ele.Field != undefined && ele.Field.includes('CustomAction5')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction4') || ele.Field != undefined && ele.Field.includes('CustomAction4')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction3') || ele.Field != undefined && ele.Field.includes('CustomAction3')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction2') || ele.Field != undefined && ele.Field.includes('CustomAction2')) {
            pArrGridCol.splice(i, 1);
          }
          if (ele.field != undefined && ele.field.includes('CustomAction1') || ele.Field != undefined && ele.Field.includes('CustomAction1')) {
            pArrGridCol.splice(i, 1);
          }
        });
        if (data.ActionJSONString != '' && pArrGridAction != null) {
          piIndex = 1;
          pArrGridAction.forEach(ele => {
            ele.index = piIndex;
            ++piIndex;
          });
          let parrActionBtnSettingData = JSON.parse(data.ActionJSONString);
          let parrActionBtnSetting = parrActionBtnSettingData.JsonData;
          if (parrActionBtnSetting != null && parrActionBtnSetting != undefined) {
            piIndex = 1;
            parrActionBtnSetting.forEach(ele => {
              if (ele.hidden == true) {
                let pnhiddenPos = pArrGridAction.findIndex(i => i.Field == ele.field);
                if (pnhiddenPos != -1) {
                  pArrGridAction.splice(pnhiddenPos, 1);
                }
              } else {
                if (ele.filter == 'Custombutton' || ele.Filter == 'Custombutton') {
                  pArrGridAction.push(ele);
                }
              }
              pArrGridAction.filter(x => {
                if (x.Field == ele.field || x.field == ele.field) {
                  x.Index = piIndex;
                }
              });
              ++piIndex;
            });
          }
          pArrGridAction.sort(function (a, b) {
            return a.Index - b.Index;
          });
          var GridButton;
          GridButton = JSON.parse(localStorage.getItem('GridButton'));
          pArrGridAction.forEach(element => {
            GridButton.forEach(ele => {
              if (element.field == ele.FieldName) {
                element.title = ele.FieldCaption;
                element.DataType = ele.DataType;
                element.LookupQuery = ele.LookupQuery;
                element.IsVisible = ele.IsVisible;
                element.ValidateEvent_Message = ele.ValidateEvent_Message;
              }
            });
          });
          //  resolve(pArrGridCol);
        } else {
          //  resolve(pArrGridCol);
        }
        return pArrGridCol;
      }
      // } else {
      //     resolve(null);
    }
  }
  static #_ = this.ɵfac = function AppUtility_Factory(t) {
    return new (t || AppUtility)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_4__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_appsettings_service__WEBPACK_IMPORTED_MODULE_5__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_shared_http_userfield_service__WEBPACK_IMPORTED_MODULE_6__.UserFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_toast_message_service__WEBPACK_IMPORTED_MODULE_7__.ToastMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_dateFormat_service__WEBPACK_IMPORTED_MODULE_8__.DateFormatService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: AppUtility,
    factory: AppUtility.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 24127:
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metaReducers: () => (/* binding */ metaReducers),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);

const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];

/***/ }),

/***/ 22201:
/*!**************************************************!*\
  !*** ./src/app/shared/http/userfield.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFieldService: () => (/* binding */ UserFieldService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 74300);
/* harmony import */ var src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/custom.validators */ 41563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);
 // RxJS 6 syntax




class UserFieldService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  getUserFieldList() {
    const url = `${this.appSettings.ServerAPIEndpoint}/odata/UserFields/('ScreenName=ABC')`;
    return this.httpExt.get(url, null);
  }
  bmlfGetExecuteCustomSql(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/ExecuteCustomSql`;
    return this.httpExt.post(url, reqdata, null);
  }
  getLookupData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetLookupData`;
    return this.httpExt.post(url, headerData, null);
  }
  getCustomSqlData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETCustomSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfSaveGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveUpdateGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfResetGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFResetGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfFSaveManagGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveManagGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDeleteManageGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFDeleteManagGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfFetchKeyDescription(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMFetchKeyDescription`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfCheckApplicationSetup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMLFCheckApplicationSetup`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetNotes(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetNote`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfSaveNotes(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUpdateNote`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDeleteNotes(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteNote`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfBMGFSaveAttachDocInfo(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveAttachDocInfo`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfBMGFUpdateAttachDocInfo(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUpdateAttachDocInfo`;
    return this.httpExt.post(url, reqdata, null);
  }
  GETGeneralSqlData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETGeneralSqlData`;
    return this.httpExt.post(url, headerData, null);
  }
  GETSysAdminGeneralSqlData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETSysAdminGeneralSqlData`;
    return this.httpExt.post(url, headerData, null);
  }
  //   public getLocation(itemKey:string): Observable<ODataModel> {
  //     const url = `${environment.serverapiurl}/odata/INLOCDs/('${itemKey}')`;
  //     return this.httpExt.get<ODataModel>(url, null, 'getLocation');
  //   }
  //   public addLocation(location: LocationModel): Observable<LocationModel> {
  //     const url = `${environment.serverapiurl}/odata/INLOCDs`;
  //     return this.httpExt.post<LocationModel>(url, location, null, 'addLocation');
  //   }
  //   public updateLocation(location: LocationModel,locationKey:string): Observable<LocationModel> {
  //     const url = `${environment.serverapiurl}/odata/INLOCDs/('${locationKey}')`;
  //     return this.httpExt.put<LocationModel>(url, location, null, 'updateLocation');
  //   }
  //   public deleteLocation(locationKey:string): Observable<any> {
  //     const url = `${environment.serverapiurl}/odata/INLOCDs/('${locationKey}')`;
  //     return this.httpExt.delete(url,  null, 'deleteLocation');
  //   }
  bmlfCheckEsignApplicable(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCheckEsignApplicableOnForm`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetEsignUserPassApproval(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFEsignGetUserPassApproval`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetESignUserDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetESignUserDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGETSysAdminCustomSqlData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETSysAdminCustomSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  getUomUnit(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetItemUOMConversion`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetLandedCostData(orderShipment) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetLandedCostDataForPOReceipt`;
    return this.httpExt.post(url, orderShipment, null);
  }
  bmlfGetLandedCostDetailData(orderShipment) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetLandedCostDetailsForPOReceipt`;
    return this.httpExt.post(url, orderShipment, null);
  }
  bmlfApplyLandedCostData(orderShipment) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/ApplyLandedCostData`;
    return this.httpExt.post(url, orderShipment, null);
  }
  bmlfSaveLandedCostData(orderShipment) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/SaveLandedCostData`;
    return this.httpExt.post(url, orderShipment, null);
  }
  bmlfGetFreightBreakupDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFreightBreakupDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetFreightDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFreightDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfRunMultipleAPI(reqdata, apiName) {
    const url = `${this.appSettings.ServerAPIEndpoint + apiName}`;
    let responseList = [];
    if (reqdata.length) {
      reqdata.forEach(data => {
        let pobjData = this.httpExt.post(url, data, null);
        responseList.push(pobjData);
      });
    }
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(responseList);
  }
  bmlfGetWhereUsed(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFExplodeWhereUsed`;
    return this.httpExt.post(url, reqdata, null);
  }
  getPriceUnit(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetAvailablePriceUOMRSItemWise`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetAttachedDocument(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetAttachDocument`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfViewAttachedDocument(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFViewAttachDocLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDeleteAttachedDocument(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteAttachDocLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfCheckOutAttachDocLine(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCheckOutAttachDocLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfCheckInAttachDocLine(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCheckInAttachDocLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfUndoCheckOutAttachDocLine(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUndoCheckOutAttachDocLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfUploadDocument(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UploadDocument`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDISTReportProcess(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DISTReportProcess`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonBOMPurgePriorVersions(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BOMPurgePriorVersions`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfExessSheetPrint(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFExessSheetPrint`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfSaveUserSettings(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveUserSettings`;
    return this.httpExt.post(url, reqdata, null);
  }
  // RPT SERVICES
  bmlfonGet(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetPreparePhysicalCount`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSave(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/SavePreparePhysicalCount`;
    return this.httpExt.post(url, reqdata, null);
  }
  getReportParameterValue(screenName, param) {
    let json = {
      'ScreenName': screenName,
      'ParametreValue': param
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetReportParameterValue`;
    return this.httpExt.post(url, json, null);
  }
  saveReportParameters(controls, header) {
    let oData = {};
    oData.HeaderData = [...header];
    oData.Controls = [...controls];
    oData.Response = [];
    oData.Response.push({
      "ResponseText": "",
      "ErrorCode": ""
    });
    let jData = JSON.stringify(oData);
    let tempjData = JSON.stringify(jData);
    let json = '{"CustomToken":' + tempjData + '}';
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveCustomParameter`;
    return this.httpExt.post(url, json, null);
  }
  DeleteReportParameter(screenname, ParaValue) {
    let json = {
      'ScreenName': screenname,
      'ParametreValue': ParaValue
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteCustomParameters`;
    return this.httpExt.post(url, json, null);
  }
  getReportParameter(screenName) {
    let json = {
      'ScreenName': screenName
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetReportParameter`;
    return this.httpExt.post(url, json, null);
  }
  bmgfCheckSQLValidationOnlineDashboard(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCheckSQLValidationOnlineDashboard`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfAdminSaveGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSysAdminSaveGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfAdminResetGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSysAdminResetGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfAdminGeneralSqlData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GETSysAdminGeneralSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfAdminLookupData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GETSysAdminLookupData`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfProcessArchiveContract(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/ProcessArchiveContract`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetMailSetings(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetUserSetings`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfSaveMailSetings(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveUserSetings`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfOnUploadDocument(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UploadDocument`;
    return this.httpExt.post(url, reqdata, {
      Anonymous: ''
    });
  }
  bmlfSaveRecordAuthData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/SaveSalesRecAuth`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDeleteLineRecordAuthData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/DeleteSalesRecAuthLine`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfDeleteRecordAuthData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFDeleteSalesRecAuth`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFExeDataView(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFExeDataView`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFGetErrorHandler(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetErrorHandler`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFClearErrorHandler(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFClearErrorHandler`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFGetWMSScreenSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetWMSScreenSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFSaveWMSScreenSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveWMSScreenSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFDeleteWMSScreenSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFDeleteWMSScreenSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  //// dock Scheduler ///
  bmgfGetDockKeyList(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDockLookup`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfSaveDockKeyList(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDockUserMaster`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfGetDockScheduling(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetDockScheduling`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfSaveDockScheduling(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveDockScheduling`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfDeleteDockScheduling(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteDockScheduling`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfGetTodoList(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFShowTask`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmgfSaveToDoData(reqdata, mode) {
    if (mode == "I") {
      const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveTODO`;
      return this.httpExt.post(url, reqdata, null);
    } else {
      const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUpdateTODO`;
      return this.httpExt.post(url, reqdata, null);
    }
  }
  bmgfGetTodoData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetTODO`;
    return this.httpExt.post(url, reqdata, null);
  }
  //added by Nisha Gupta for Different Api call for Report
  bmlfonReportActionWithDiffUrl(headerData, serviceName) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/${serviceName}`;
    return this.httpExt.post(url, headerData, null);
  }
  //added by Nisha Gupta to save Report Json
  bmlfSaveReportJSON(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveReportJSON`;
    return this.httpExt.post(url, headerData, null);
  }
  //added by Madhav Soni to Get Doc Path
  bmlfViewSOPConfiguratorFile(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFViewSOPConfiguratorFile`;
    return this.httpExt.post(url, headerData, null);
  }
  //added by Madhav Soni to Get custom rest api call 
  bmlfCustomizationRestApiCall(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCustomizationAPI`;
    console.log(url);
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetWhatsNewOTP() {
    let psWhatsNewUrl = JSON.parse(localStorage.getItem("WhatsNewUrl"));
    let psPortUrl = "";
    if (!src_app_core_services_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidator.bmgfNullCheckValidator(psWhatsNewUrl)) {
      psPortUrl = psWhatsNewUrl;
    } else {
      psPortUrl = this.appSettings.WhatsNewEndPoints;
    }
    const url = `${psPortUrl}/generate-otp.php`;
    return this.httpExt.get(url, null);
  }
  //added by Madhav Soni to Get Doc Path
  bmlfCheckValidationEvent(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCheckUserValidation`;
    console.log(url);
    return this.httpExt.post(url, headerData, null);
  }
  bmgfCustomToolbarService(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFToolbarCustomAPI`;
    return this.httpExt.post(url, headerData, null);
  }
  setConnectionAdmin() {
    const url = `${this.appSettings.AdminUrl}/get-token?name=admin&email=admin@batchmaster.com`;
    return this.httpExt.get(url, null);
  }
  bmgfGetAdminReminderCode(headerData) {
    const url = `${this.appSettings.AdminUrl}/tenant-list`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function UserFieldService_Factory(t) {
    return new (t || UserFieldService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_1__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_2__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: UserFieldService,
    factory: UserFieldService.ɵfac
  });
}

/***/ }),

/***/ 14195:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/en.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    'SidebarMenu': {
      "Common": "Common",
      'Inbound': 'Inbound',
      'Outbound': 'Outbound',
      'Reports': 'Reports',
      'Internal Movements': 'Internal Movements',
      'Inquiry and Reports': 'Inquiry and Reports',
      'Admin': 'Admin',
      'Finance': 'Finance',
      "ChangeCompany": "Change Company",
      "Dashboard": "Dashboard",
      "Favorites": "Favorites",
      "TimeANDExpenses": "Time and Expenses",
      "Finanace": "Finanace",
      "Projects": "Projects",
      "Receivables": "Receivables",
      "General Table View": "General Table View",
      "SalesOrders": "Sales Orders",
      "Purchase": "Purchase",
      "Inventory": "Inventory",
      "Configuration": "Configuration",
      "WMS Configuration": "Configuration",
      "Put Away": "Put Away",
      "QualityAssurance": "Quality Assurance",
      "Quality Control": "Quality Control",
      "Sales": "Sales",
      "Master": "Master",
      "ABC": "ABC",
      "Location": "Location",
      "Prospect": "Prospect",
      "Customer": "Customer",
      "ShipTo": "Ship To",
      "SalesTemplate": "Sales Template",
      "SalesKit": "Sales Kit",
      "Territory": "Territory",
      "Salesperson": "Salesperson",
      "SalesCommission": "Sales Commission",
      "SalesContract": "Sales Contract",
      "ArchiveSalesContract": "Archive Sales Contract",
      "DisplayArchiveSalesContract": "Display Archive Sales Contract",
      "PriceSearchOrder": "Price Search Order",
      "PromotionalPricing": "Promotional Pricing",
      "PriceMatrix-Customer/Item": "Price Matrix-Customer/Item",
      "PriceMatrix-Customer/Price Group": "Price Matrix-Customer/Price Group",
      "PriceMatrix-Customer Class/Item": "Price Matrix-Customer Class/Item",
      "PriceMatrix-Customer Class/Price Group": "Price Matrix-Customer Class/Price Group",
      "PriceMatrix-Customer Class/Item Class": "Price Matrix-Customer Class/Item Class",
      "PriceListMaster": "Price List Master",
      "RebateMaster": "Rebate Master",
      "RemitTo": "Remit To",
      "SalesRecordAuthorization": "Sales Record Authorization",
      "InvoiceSeries": "Invoice Series",
      "CustomerSpecificQC": "Customer Specific QC",
      "RouteMaster": "Route Master",
      "RouteSequence": "Route Sequence",
      "Transactions": "Transactions",
      "Quotation/SalesRequisition": "Quotation/Sales Requisition",
      "QuickSalesOrderEntry": "Quick Sales Order Entry",
      "SalesOrderEntry": "Sales Order Entry",
      "PickList": "Pick List",
      "MaintainShipment": "Maintain Shipment",
      "PrintBillofLading": "Print Bill of Lading",
      "TransferToInvoice": "Transfer To Invoice",
      "SuperInvoice": "Super Invoice",
      "DirectInvoice/CreditMemo": "Direct Invoice/Credit Memo",
      "ShipmentRangeProcess": "Shipment Range Process",
      "QuotationRangeProcessing": "Quotation Range Processing",
      "PackingSlip": "Packing Slip",
      "LightCRM": "Light CRM",
      "InventoryBillOfLading": "Inventory Bill Of Lading",
      "MaterialPackaging": "Material Packaging",
      "ArchiveSalesOrder": "Archive Sales Order",
      "DisplaySalesOrderHistory": "Display Sales Order History",
      "InvoiceReversal": "Invoice Reversal",
      "TruckLoadUtility": "Truck Load Utility",
      "MasterReports": "Master Reports",
      "SalesContractReport": "Sales Contract Report",
      "ProspectReport": "Prospect Report",
      "CustomerReport": "Customer Report",
      "ShipToReport": "Ship To Report",
      "CustomerItemReport": "Customer Item Report",
      "CustomerClassReport": "Customer Class Report",
      "CustomerClassItemReport": "Customer Class Item Report",
      "CustomerByClassReport": "Customer By Class Report",
      "CustomerSalespersonReport": "Customer Salesperson Report",
      "SalesCommissionReport": "Sales Commission Report",
      "SalespersonReport": "Salesperson Report",
      "TerritoryReport": "Territory Report",
      "PriceMatrixReport": "Price Matrix Report",
      "SalesKitReport": "Sales Kit Report",
      "TransactionsReports": "Transactions Reports",
      "PrintSalesOrderReport": "Print Sales Order Report",
      "Invoices": "Invoices",
      "Pick-ListReport": "Pick-List Report",
      "InventoryCommitmentReport": "Inventory Commitment Report",
      "SalesAnalysisReport": "Sales Analysis Report",
      "SOGrossProfitReport": "SO Gross Profit Report",
      "SalesOrderHistoryReport": "Sales Order History Report",
      "SalesOrderByItem": "Sales Order By Item",
      "SalesOrderByCustomer": "Sales Order By Customer",
      "ShipmentWithOnhandReport": "Shipment With Onhand Report",
      "ShipmentOverdueReport": "Shipment Overdue Report",
      "ShipmentStatusWiseReport": "Shipment Status Wise Report",
      "ShipmentItemWiseReport": "Shipment Item Wise Report",
      "ProductionReconciliation": "Production Reconciliation",
      "MaterialAnalysisReport": "Material Analysis Report",
      "CertificateofAnalysis": "Certificate of Analysis",
      "TruckDeliveryReport": "Truck Delivery Report",
      "Customization": "Customization",
      "TaskSetup": "Task Setup",
      "Accounts Payable": "Accounts Payable",
      "Accounts Receivable": "Accounts Receivable",
      "General Ledger": "General Ledger",
      "Bank/Cash": "Bank/Cash",
      "Finance Configuration": "Finance Configuration",
      "R and D": "R and D",
      "BOM": "BOM",
      "Routing": "Routing",
      "Production": "Production",
      "ProcessCell": "ProcessCell",
      "Costing": "Costing",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "Customer Master",
      "CustomerSalesperson": "Customer Salesperson",
      "BillofLadingInventoryInfo": "Bill of Lading Inventory Info",
      "BillofLadingShipToInfo": "Bill of Lading ShipTo Info",
      "BillofLadingSetup": "Bill of Lading Setup",
      "CustomerItem": "Customer Item",
      "CustomerClass": "Customer Class",
      "CustomerClassItem": "Customer Class Item",
      "CustomerSaleableItems": "Customer Saleable Items",
      "CustomerGroupSaleableItems": "Customer Group Saleable Items",
      "CustomerGroup": "Customer Group",
      "SalesApproverGroup": "Sales Approver Group",
      "SOSeriesMaster": "SO Series Master",
      "DISeriesMaster": "DI Series Master",
      "SalesSetup": "Sales Setup",
      "Sample Management": "Sample Management",
      "NPD/SRM": 'NPD/SRM',
      "CRM": "CRM"
    },
    // SPLITCONTAINER: {
    //     HEADING: "Split Container",
    // },
    "PublisherPortalTitle": "Publisher Portal",
    "UserManagementTitle": "Users Management",
    "ListExportToExcel": "Export to Excel",
    "ListExportToPdf": "Export to PDF",
    "UserManagementAddUser": "Add User",
    "ListPrint": "Print",
    "ListColumn": "Columns",
    "ListPermissions": "Permissions",
    "CommonInvitedBy": "Invited By",
    "ListJoinedOn": "Joined On",
    "ListRole": "Role",
    "UserAdmin": "Admin",
    "CommonOther": "Other",
    "CommonStatus": "Status",
    "UserActive": "Active",
    "UserInActive": "Inactive",
    "CommonAction": "Action",
    "UserAddForm": "New User Form",
    "UserEditForm": "Edit User Form",
    "CommonFirstName": "First Name",
    "CommonFirstNameRequired": "First name is required.",
    "CommonLastName": "Last Name",
    "CommonLastNameRequired": "Last name is required.",
    "CommonInviteEmail": "Invite Email",
    "CommonEmail": "Email",
    "CommonEmailRequired": "Email is required.",
    "CommonInvalidEmail": "Invalid email address.",
    "CommonSetPassword": "Set Password",
    "CommonPassword": "Password",
    "CommonPasswordRequired": "Password is required.",
    "CommonInvalidPassword": "Invalid password.",
    "CommonPhone": "Phone",
    "CommonInvitedOn": "Invited On",
    "CommonInvite": "Invite",
    "CommonCancel": "Cancel",
    "CommonSave": "Save",
    "CommonUser": "User",
    "CommonConcurrencyError": "Please refresh your screen and try again.",
    "CommonUnhandleError": "Sorry an error occurred, please try again later. We would appreciate any feedback or details of what went wrong.",
    "CommonBrandingSettings": "Branding",
    "CommonBusinessName": "Business Name",
    "CommonSelectTheme": "Select Theme",
    "CommonConfiguration": "Configuration",
    "CommonBasicDetails": "Basic Details",
    "CommonCompany": "Company Name",
    "CommonCompanyNameIsRequired": "Company name is required",
    "CommonBusinessID": "Business ID",
    "CommonCompanyID": "Company ID",
    "CommonAddress": "Address",
    "CommonAddressIsRequired": "Address is required",
    "CommonPrimaryAdmin": "Primary Admin",
    "CommonPreAdminEmail": "Pre Admin Email",
    "CommonBusinessPortalURL": "Business Portal URL",
    "CommonPartnerPortalURL": "Partner Portal URL",
    "CommonSubscriptionDetails": "Subscription Details",
    "CommonPlanName": "Plan Name",
    "CommonWantToChange?": "Want to change?",
    "CommonActivationDate": "Activation Date",
    "CommonEndDate": "End Date",
    "CommonMaximumUsers": "Maximum Users",
    "CommonPaymentCycle": "Payment Cycle",
    "CommonPriceInUSD": "Price (in USD)",
    "CommonGracePeriod": "Grace Period (in Days)",
    "CommonAutoRenewal": "Auto Renewal",
    "CommonCreditCardInfo": "Credit Card info",
    "CommonCreditCardNumberIsRequired": "Credit card number is required",
    "CommonChange": "Change",
    "CommonConnectorConfig": "Connector Config",
    "CommonCapabilityConnectionString": "Capability Connection String",
    "CommonTestConnection": "Test Connection",
    "CommonSuccess": "Success",
    "CommonCapabilityStringIsRequired": "Capability string is required",
    "CommonConnectorConnectionString": "Connector Connection String",
    "CommonFailed": "Failed",
    "CommonConnectorStringIsRequired": "Connector string is required",
    "CommonPaymentReceivableSettings": "Payment Receivable Settings",
    "CommonPrimaryAC": "Primary A/C",
    "CommonPrimaryAccountNumberIsRequired": "Primary account number is required",
    "CommonAddAnotherAccount": "Add another account",
    "ComonSelectPermission": "Please select atleast one permission",
    "CommonAlert": "Alert",
    "CommonCustomerNameRequired": "Customer name is required.",
    "CommonRefIdRequired": "CustomerRefId is required.",
    "CommonLanguage": "Language",
    "Freight Master": 'Freight Master',
    "CommonCurrency": "Currency",
    "CommonTimeZone": "Time Zone",
    "CommonDateFormat": "Date Format",
    "CommonInvoiceNameRequired": "Invoice Name is required.",
    "CommonInvoicenumberRequired": "Invoice Number is required.",
    "CommonInvoicePoNumbeRequired": "PO Number is required.",
    "CommonInvoiceOrderNumberRequired": "Order Id is required.",
    "CommonInvoicAmountRequired": "Amount is required.",
    "CommonStreet1Required": "Street 1 is required.",
    "CommonCityRequired": "City is required.",
    "CommonStateRequired": "State is required.",
    "CommonCountryRequired": "Country is required.",
    "CommonZipcodeRequired": "Zip code is required.",
    "CommonInvoiceItemDescriptionRequired": "Item Description is required.",
    "CommonInvoiceItemCodeRequired": "Item Code is required.",
    "CommonInvoiceItemPrice": "Item Price is required.",
    "CommonReinvite": "Reinvite",
    "CommonInvited": "Invited",
    "CommonActive": "Active",
    "CommonInactive": "Inactive",
    "CommonPayable": "Payable",
    "CommonPay": "Pay",
    "CommonSaveInvoiceAndGenerateUrl": "Create invoice & generate quickpay url",
    "CommonReceipt": "Receipt",
    "CommonPaymentStatus": "Transaction Status",
    "CommonPaymentID": "Transaction ID",
    "CommonAccountCardNo": "Account# / Card#",
    "CommonAccountOrCard": "Account / Card",
    "CommonRefreshstatus": "Refresh status",
    "CommonPaymentReceipt": "Transaction Receipt",
    "CommonPaymentService": "Transaction Service",
    "CommonInvoiceCurrentStatus": "Invoice Current Status",
    "CommonInvoiceInvoiceOriginalAmount": "Invoice Original Amount",
    "CommonContactPhone": "Contact Phone",
    "CommonName": "Name",
    "CommonWebsite": "Website",
    "CommonFaxNumber": "Fax Number",
    "CommonZipCode": "Zip Code",
    "CommonCountry": "Country",
    "CommonState": "State",
    "CommonCity": "City",
    "CommonStreet1": "Street 1",
    "CommonStreet2": "Street 2",
    "CommonStreet3": "Street 3",
    "CommonBillingAddress": "Billing Address",
    "CommonCustomerID": "Customer ID",
    "CommonCustomerName": "Customer Name",
    "CommonTax": "Tax",
    "CommonShipping": "Shipping",
    "CommonDiscount": "Discount",
    "CommonSubTotal": "Sub Total",
    "CommonLineItemOn": "Line Item On",
    "CommonDueDate": "Due Date",
    "CommonGeneratedOn": "Generated On",
    "CommonOrderID": "Order ID",
    "CommonPONumber": "PO Number",
    "CommonInvoiceName": "Invoice Name",
    "CommonInvoiceNumber": "Invoice ID",
    "CommonOrderInfo": "Order Info",
    "CommonCustomerInfo": "Customer Info",
    "CommonInvoiceDetails": "Invoice Details",
    "CommonPaidAmount": "Paid Amount",
    "CommonCustomerNotes": "Customer Notes",
    "CommonCustomerNote": "Customer Note",
    "CommonItemCode": "Item Code",
    "CommonQuantity": "Quantity",
    "CommonPrice": "Price ",
    "CommonPricePerunit": "Unit Price",
    "CommonTotal": "Total",
    "CommonLastMonth": "Last Month",
    "CommonLast3Months": "Last 3 Months",
    "CommonLast6Months": "Last 6 Months",
    "CommonThisYear": "This Year",
    "CommonDeletedInvoices": "Deleted Invoices",
    "CommonApply": "Apply",
    "CommonOriginal": "Original",
    "CommonOutstanding": "Outstanding",
    "CommonAmountPayable": "Amount Payable",
    "CommonPaymentMode": "Transaction Mode",
    "CommonACHPayment": "ACH Payment",
    "CommonACH": "ACH",
    "CommonBankName": "Bank Name",
    "CommonBankAccountName": "Bank Account Name",
    "CommonAccountNumber": "Account Number",
    "CommonABARoutingNumber": "ABA Routing Number",
    "CommonAccountType": "Account Type",
    "CommonSECCode": "SEC Code",
    "CommonTrermsAgreement": "I agree to make the payment from my above given bank account.",
    "CommonNotes": "Notes",
    "CommonPaymentForm": "Payment Form",
    "CommonCreditCardPayment": "Credit Card Payment",
    "CommonPaymentOn": "Transaction On",
    "CommonContactPersonDetails": "Contact Person Details",
    "CommonVoidPayment": "Void",
    "CommonRefundPayment": "Refund",
    "CommonAmount": "Amount",
    "CommonSubTotalAmount": "SubTotal is required.",
    "Commonblank": "(blank)",
    "CommonRequiredValidation": "This info is required.",
    "CommonIpaymentBusinessPortal": "iPayment Business Portal",
    "CommonVersion": "Version",
    "CommonChangePassword": "Change Password",
    "CommonCurrentPassword": "Current Password",
    "CommonForgotYourPassword?": "Forgot your password?",
    "CommonNewPassword": "New Password",
    "CommonConfirmPassowrd": "Confirm Passowrd",
    "CommonSignInToYourCompany": "Sign in to your Business",
    "CommonUpcomingPayments": "Upcoming Payments",
    "CommonRecentPayment": "Recent Payments",
    "CommonTotalOpenInvoices": "Total Open Invoices",
    "CommonPartialPaidInvoicesOpen": "Partial Paid Invoices (Open)",
    "CommonTotalPaidInvoices": "Total Paid Invoices",
    "CommonPaidInvoicesLastWeek": "Paid Invoices (Last Week)",
    "CommonPaidLastWeek": "Paid (Last Week) $",
    "CommonPaymentsDoneInUSD": "Payments Done (in USD)",
    "CommonEditTicketForm": "Edit Ticket Form",
    "CommonCreatedBy": "Created By",
    "CommonCreatedOn": "Created On",
    "CommonContactEmail": "Contact Email",
    "CommonCustomerDetails": "Customer Details",
    "CommonIssueDetails": "Issue Details",
    "CommonTitle": "Title",
    "CommonTitleIsRequired": "Title is required.",
    "CommonDescription": "Description",
    "CommonDescriptionIsRequired": "Description is required.",
    "CommonTicketID#": "Ticket ID",
    "CommonPriority": "Priority",
    "CommonAssignedTo": "Assigned To",
    "CommonModifiedOn": "Modified On",
    "CommonModifiedBy": "Modified By",
    "CommonAttachment": "Attachment",
    "CommonAddYourComments": "Add Your Comments",
    "CommonAddYourComment": "Add Your Comment",
    "CommonComments": "Comments",
    "CommonDeletedTickets": "Deleted Tickets",
    "CommonTenantName": "Tenant Name",
    "CommonLow": "Low",
    "CommonMedium": "Medium",
    "CommonHigh": "High",
    "CommonOpen": "Open",
    "CommonOnHold": "On Hold",
    "CommonResolved": "Resolved",
    "CommonClosed": "Closed",
    "CommonNewTicketForm": "New Ticket Form",
    "CommonCreate": "Create",
    "CommonBusinessDetails": "Other Details",
    "CommonAddTicket": "New Ticket",
    "CommonTicketId": "Ticket ID",
    "CommonNewCustomerForm": "New Customer Form",
    "CommonGeneral": "General",
    "CommonPaymentDetails": "Transaction Details",
    "CommonContactInfo": "Contact Info",
    "CommonAdminUserDetails": "Admin User Details",
    "CommonApplicationsDetails": "Applications Details",
    "CommonEnabledServices": "Enabled Services",
    "CommonCustomerPortalURL": "Customer Portal URL",
    "CommonCreditCardDetails": "Credit Card Details",
    "CommonSavedCreditCards": "Saved Credit Cards",
    "CommonNameOnCard": "Name on Card",
    "CommonCardExpiry": "Card Expiry",
    "CommonCardNumber": "Card Number",
    "CommonExpiry": "Expiry",
    "CommonCVV": "CVV",
    "CommonCardType": "Card Type",
    "CommonAddCreditCard": "Add Credit Card",
    "CommonACHPaymentDetails": "ACH Payment Details",
    "CommonCustomerAddress": "Customer Address",
    "CommonSameAsAboveAddress": "Same as above address",
    "CommonSaveInvite": "Save & Invite",
    "CommonEditCustomerForm": "Edit Customer Form",
    "CommonCustomer": "Customer",
    "CommonAddCustomer": "Add Customer",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "Open Sales Orders",
    "CommonInvoice": "Invoice",
    "CommonUpcomingDeliveryDate": "Upcoming Delivery",
    "CommonLastDeliveryOn": "Last Delivery",
    "CommonTotalSalesOrder": "Total Sales Order",
    "CommonPending": "Pending",
    "Common(Pending)": "(Pending)",
    "CommonDetails": "Details",
    "CommonDesktop": "Desktop",
    "CommonSMS": "SMS",
    "CommonHelpDeskNotifications": "Help Desk Notifications",
    "CommonMyTicketStatusIsChanged": "My Ticket Status is changed.",
    "CommonCustomerTicketStatusIsChanged": "Customer Ticket status is changed.",
    "CommonMyTicketIsReassigned": "My Ticket is reassigned",
    "CommonCustomerTicketIsReassigned": "Customer Ticket is reassigned.",
    "CommonMyTicketPriorityIsChanged": "My Ticket Priority is changed.",
    "CommonCustomerTicketPriorityIsChanged": "Customer Ticket priority is changed.",
    "CommonNewCommentAddedInMyTicket": "New Comment added in My Ticket.",
    "CommonNewCommentAddedInCustomerTicket": "New Comment added in Customer Ticket.",
    "CommonInvoiceNotifications": "Invoice Notifications",
    "CommonInvoicePaymentIsReceived": "Invoice payment is received.",
    "CommonCustomersReport": "Customers Report",
    "CommonLastWeek": "Last Week",
    "CommonFrom": "From",
    "CommonTo": "To",
    "CommonTotalInvoices": "Total Invoices",
    "CommonOpenInvoices": "Open Invoices",
    "CommonCustomerWisePaymentReport": "Customer Wise Payment Report",
    "CommonPartialPaidInvoices": "Partial Paid Invoices",
    "CommonPaidInvoices": "Paid Invoices",
    "CommonCreditAmount": "Credit Amount",
    "CommonInvoicesReport": "Invoices Report",
    "CommonPaidOn": "Paid On",
    "CommonAmountPaid": "Amount Paid",
    "CommonPaymentReceivedReport": "Payment Received Report",
    "CommonPaymentType": "Payment Type",
    "CommonInvoiceID": "Invoice ID",
    "CommonOriginalAmount": "Original Amount",
    "CommonPortalUsersReport": "Portal Users Report",
    "CommonTicketsReport": "Tickets Report",
    "CommonInvoicesDetails": "Invoices Details",
    "CommonBankAccountNameIsRequired ": " BankAccountName is required. ",
    "AccountNumberIsRequired": "Account number is required.",
    "CommonABARoutingNumberIsRequired": "ABARoutingNumber is required.",
    "CommonOriginated": "Originated",
    "CommonReturned": "Returned",
    "CommonSetteled": "Settled",
    "CommonOk": "OK",
    "CommonMsgPaymentHistory": "You can close this window and see the current status in Transaction History",
    "CommonInvoiceNumb": "Invoice Number",
    "CommonPaid": "Paid",
    "CommonDue": "Due",
    "CommonBlueStar": "BlueStar",
    "CommonBillToAddress": "Bill To Address",
    "CommonlineItemsOn": "line Items On",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "Voided",
    "CommonVoid": "Void",
    "CommonVoidRequested": "Void Requested",
    "CommonRefundRequested": "Refund Requested",
    "CommonRefunded": "Refunded",
    "CommonRefundCancelled": "Refund Cancelled ",
    "CommonVeriCheckACH ": "VeriCheck ACH ",
    "CommonMonthly": "Monthly",
    "CommonQuartly": "Quartly",
    "CommonHalfyearly": "Half yearly",
    "CommonYearly": "Yearly",
    "CommonNewInvoiceForm": "New Invoice Form",
    "CommonSTEP": "STEP",
    "CommonPrefix": "Prefix",
    "Commonselect": "select",
    "CommonAddNew": "Add New",
    "CommonNumber": "Number",
    "CommonTaxRate": "Tax Rate",
    "CommonAddMoreItems": "Add More Items",
    "CommonNext": "Next",
    "CommonBack": "Back",
    "CommonDone": "Done",
    "CommonLastLogin": "Last Login:",
    "CommonAdmin": "Admin",
    "CommonBusinessPortal": "Business Portal",
    "CommonMyProfile": "My Profile",
    "CommonChangePassword ": "Change Password ",
    "CommonSync": "Sync",
    "CommonPreferences": "Preferences",
    "CommonAbout": "About",
    "CommonLogout": "Logout",
    "CommonToggleNavigation": "Toggle navigation",
    "CommonHome": "Home",
    "CommonCustomers": "Customers",
    "CommonInvoices": "Invoices",
    "CommonPaymentHistory": "Transaction History",
    "CommonReports": "Reports",
    "CommonPaymentReceived": "Payment Received",
    "CommonCustomerWisePayment": "Customer Wise Payment",
    "PortalUsers": "Portal Users",
    "CommonTickets": "Tickets",
    "CommonBusinessPortalSettings": "Business Portal Settings",
    "CommonConfigurations": "Configurations",
    "CommonAlerts": "Alerts",
    "CommonHelpDesk": "Help Desk",
    "CommonCustomerTickets": "Customer Tickets",
    "CommonMyTickets": "My Tickets",
    "CommonDocumentation": "Documentation",
    "CommonPoweredBy": "Powered by",
    "CommonCompanyPortalSettings": "Company Portal Settings",
    "CommonCustomerPortalSettings": "Customer Portal Settings",
    "CommonDelete": "Delete",
    "CommonNoResultFound": "No Result found",
    "CommonPaymentDate": "Transaction Date",
    "CommonInvoicesStatus": "Invoices Status",
    "CommonPaymentsDoneInLast6Months": "Payments done in last 6 months",
    "CommonRecentTranscations": "Recent Transcations",
    "CommonCompletedOrder(Closed)": "Completed",
    "CommonOpenOrders(Open)": "Open",
    "CommonPartialDeliveredOrder(Open)": "Partial Delivered",
    "CommonServices": "Services",
    "CommonPartnerCompanySubDomain": "Partner Company Sub Domain",
    "CommonPortalDetails": "Portal Details",
    "CommonPortalURL": "Portal URL",
    "CommonEdit": "Edit",
    "CommonAddAnAccount": "Add an account",
    "CommonPayments": "Payments",
    "CommonNewAttachmentAddedInMyTicket": "New Attachment added in My Ticket.",
    "CommonNewAttachmentAddedInCustomerTicket": "New Attachment added in Customer Ticket.",
    "CommonRefreshStatus": "Refresh status",
    "CommonID#": "ID#",
    "CommonSubscription": "Subscription",
    "CommonCompanySubDomain": "Company Sub Domain",
    "CommonMyPortalURL": "My Portal URL",
    "CommonPortalLocalizationSettings": "Portal Localization",
    "CommonDeletedOn": "Deleted On",
    "CommonDeletedBy": "Deleted By",
    "CommonNewInvoiceisgenerated": "New Invoice is generated.",
    "CommonInvoicepaymentstatusischanged": "Invoice payment status is changed.",
    "CommonExistingInvoiceiscancelled": "Existing Invoice is cancelled.",
    "CommonOrderId": "Order Id",
    "CommonStartDate": "Start date",
    "CommonNextPaymentdate": "Upcoming Transaction On",
    "CommonRecurringPeriod": "Pay frequency",
    "CommonRecurringTerms": "Pay terms",
    "CommonTermAmount": "Each Pay Amount",
    "CommonRemainingPayCounts": "Remaining Pay Counts",
    "CommonOrderAmount": "Order amount",
    "CommonAddRecurring": "Add Recurring",
    "CommonOrderIdRequired": "Order id is required.",
    "CommonRecurringTermRequired": "Term should be greater then 0.",
    "CommonRecurringTermAmountRequired": "Term amount should be greater then 0.",
    "CommonWebsiteValidation": "Invalid website url.",
    "CommonNoRecordsAvailable": "No records yet created.",
    "CommonPaymentDone": "Payment Done",
    "CommonPaymentDoneReport": "Payment Done Report",
    "CommonByJoiningYouAgreeToOur": "By joining you agree to our",
    "CommonTerms": "Terms",
    "CommonPrivacyPolicy": "Privacy Policy.",
    "CommonAnd": "and",
    "CommonEnterYourCompanyID": "Enter your Business URL",
    "CommonDontRememberCompanyID": "Don't remember your Sub Domain?",
    "CommonClickHere": "Click here",
    "CommonWantToCreate": "Want to create a new Business Account?",
    "CommonFindMyCompanyID": "Find My Sub Domain!",
    "CommonFindMyCompanyIDTitle": "We'll send you an email to confirm your Login ID and find your Sub Domain by which you can join.",
    "CommonEnterYourEmail": "Enter your email",
    "CommonContinue": "Continue",
    "CommonCheckYourEmail": "Check your email!",
    "CommonCheckYourTitle": "We've emailed you a link to",
    "CommonGetStartedTitle": "Click the link and get started.",
    "CommonEnteredWrongEmail": "Entered wrong email?",
    "CommonItemName": "Item Name",
    "CommonQuickpay": "Generate Quickpay Url",
    "PFCommonPermission": "Permission",
    "PFCommonPermissions": "Permissions",
    "PFCommonPortalUsers": "Portal Users",
    "PFCommonUsers": "Users",
    "PFCommonUser": "User",
    "PFCommonActive": "Active",
    "PFCommonInActive": "InActive",
    "PFCommonAdmin": "Admin",
    "PFCommonAction": "Action",
    "PFCommonPending": "Pending",
    "CommonPortalOwnerName": "Portal Owner Name",
    "CommonPoweredByText": "Powered by Text",
    "CommonCopyrightText": "Copyright",
    "CommonPublisherPortalTheme": "Publisher Portal Theme",
    "CommonTenantTickets": "Business Tickets",
    "CommonTenantID": "Business ID",
    "CommonAdd": "Add",
    "CommonDragDropFileText": "Drag and Drop files here or Click on Upload.",
    "CommonValidFileFormatMsg": "Please enter a valid file format. Supported file formats are: JPG,JPEG,TIFF,GIF,PNG,WEBP,SVG,BMP,TIF,ICO.",
    "CommonError": "Error",
    "CommonFileSizeError": "The file size is too large. Please select a file of size upto 10 MB.",
    "CommonMoreThanOneFileError": "Multiple files not allowed",
    "CommonOrderNameRequired": "Order name is required.",
    "CommonPackageNameRequired": "Package type is required.",
    "CommonFillAllRequiredFeildErrorMsg": "Please fill in the required fields and provide valid data.",
    "CommonContactUs": "Contact Us",
    "CommonContactFormTitle": "Type your message below. We'll get back to you at the earliest!",
    "CommonMessage": "Message",
    "CommonMailingAddress": "Mailing Address",
    "CommonSend": "Send",
    "CommonUpcomingShipments": "Upcoming Shipments",
    "CommonRecentShipments": "Recent Shipments",
    "CommonDeliveryID": "Delivery ID",
    "CommonPostedOn": "Posted On",
    "CommonShippingNo": "Shipping No.",
    "CommonShipmentHistory": "Shipment History",
    "CommonTrackingNo": "Tracking No.",
    "CommonPackages": "Packages",
    "CommonCarrier": "Carrier",
    "CommonDestination": "Destination",
    "CommonPickUpOn": "Pick Up On",
    "CommonDeliveredOn": "Delivered On",
    "CommonDeliveryDate": "Delivery Date",
    "CommonOrderName": "Order Name",
    "CommonNoPackageValidationMessage": "At least one package must be added to get shipping quote.",
    "CommonNoCarrierValidationMessage": "At least one carrier must subscribe.",
    "CommonPlanSelectionValidationMessage": "Select a valid carrier plan.",
    "CommonGenerateQuoteAgainValidationMessage": "Form has been modified. Please generate the Quote again.",
    "CommonAddressDetails": "Address Details",
    "CommonConfigurationSavedMsg": "Your changes have been successfully saved.",
    "Common4X6LabelPrinter": "4X6 Label Printer",
    "CommonTraditionalPrinters": "Traditional Printers",
    "CommonCarriersInfo": "Carriers Info",
    "CommonAddresses": "Addresses",
    "CommonNewAddress": "New Address",
    "CommonValidateAddress": "Validate Address",
    "CommonVerifiedBy": "Verified By",
    "CommonLabel": "Label",
    "CommonPrintingInfo": "Printing Info",
    "CommonContactPerson": "Contact Person",
    "CommonDecimalValues": "Decimal Values",
    "CommonGroupingDecimalSeparator": "Grouping & Decimal Separator",
    "CommonGroupingValues": "Grouping Values",
    "CommonCurrencyLocalization": "Currency Localization",
    "CommonDesignation": "Designation",
    "CommonSubDomain": "Sub Domain",
    "CommonAccountNo": "Account No.",
    "CommonValidate": "Validate",
    "CommonNoOfDeliveries": "No Of Deliveries",
    "CommonNoOfSalesOrderDeliveries": "No Of Sales Order",
    "CommonNoOfSalesAmount": "Sales Amount",
    "CommonTopMostValuableCustomer": "Top 5 Most Valuable Customers",
    "CommonTotalOpenOrders": "Total Open Orders",
    "CommonPartialDeliveredOrders": "Partial Delivered Orders",
    "CommonCompletedOrders": "Completed Orders",
    "CommonPendingShipping": "Pending Shippings",
    "CommonTotalShipping": "Total Shipping",
    "CommonTotalSales": "Total Sales",
    "CommonTotalSalesinLast6Months": "Total Sales in Last 6 Months",
    "CommonSalesOrdersStatus": "Sales Orders Status",
    "CommonSalesOrders": "Sales Orders",
    "CommonShippingStatus": "Shipping Status",
    "CommonShipmentByCarrier": " Shipment by Carrier",
    "CommonTotalDeliveriesinlast6months": "Total Deliveries in Last 6 Months",
    "CommonQty": "Qty",
    "CommonValue": "Value",
    "CommonTop5mostvaluablecustomers": "Top 5 Most Valuable Customers",
    "CommonDeliveriesAcrossGlobe": "Deliveries Across Globe",
    "CommonAddressErrorMsg": "Atleast one address is required.",
    "CommonCurrencyLocalizationsConfirmMsg": "This will permanently save your Currency Localizations",
    "CommonConfirmation": "Confirmation",
    "CommonService": "Service",
    "CommonShipConfirm": "Do you want to ship this Sales Order?",
    "CommonCarriers": "Carriers",
    "CommonShipFromAddresses": "Ship From Addresses",
    "CommonBusinessAddresses": "Business Addresses",
    "CommonNewItem": "New Item",
    "CommonPackageItemEqlDistributionMsg": "There is a mismatch between sales order items and packaged items. Please adjust the changes and generate the Quote again.",
    "CommonPackageAllItemDistributionMsg": "Please pack all the items of Sales Order before generating the Quote.",
    "CommonZeroItemInItemMaster": "There is no item available in Items Master to add. First add Item in Items Master.",
    "CommonShipFromAddressErrorMsg": "Atleast one ship from address is required.",
    TOTALRECORDS: 'Total Records',
    VIEWITEMLOCATION: "View Item Location",
    SELECTLOTFEATUREWISE: 'Select lot features',
    ITEMKEY: "Item Key",
    DESCRIPTION: "Description",
    LOCATION: "Location",
    LOCATIONDITAIL: "Location Detail",
    LOTBINDITAIL: "Lot/Bin No Detail",
    STOCKUOM: "Stock UOM",
    DISPLAYUOM: "Display UOM",
    COMMITTOPRODUCTION: "Qty Commit To Production",
    COMMITTOSALES: 'Qty Commit To Sales',
    DESC1: 'Desc1',
    EOQ: 'EOQ',
    INCLASSKEY: 'In Class Key',
    MULTIPLEBINSREQ: 'Multiple Bins Req',
    QTYONHAND: 'Qty On Hand',
    QTYONORDER: 'Qty On Order',
    QTYOVERSOLD: 'Qty Oversold',
    SERIALLOTFLG: 'Seriallotflg',
    STATUSCODE: 'Status Code',
    STOCKUOMCODE: 'Stock Uom Code',
    TRANSITIN: 'Transit In',
    TRANSITOUT: 'Transit Out',
    QTYUNDERPURCHASEQC: 'Qty Under Purchase QC',
    QTYUNDERINVENTORYQC: 'Qty Under Inventory QC',
    QTYONORDERDETAILS: 'Qty On Order Details',
    QTYCOMMITTOSALESDETAILS: 'Qty Committed To Sales Details',
    QTYCOMMITTOPRODUCTIONDETAILS: "Qty Committed To Production Details",
    TRANSACTION: "Transaction",
    TRANSACTIONNO: "Transaction No.",
    TRANSACTIONDATE: "Transaction Date",
    TRANSACTIONTYPE: "Transaction Type",
    AVGLOTSTR: "Average Lot Strength",
    LOTSTRENGTH: "Lot Strength",
    QTYREQ: "Qty Required",
    LOTQTYSEL: "Lot Qty Selected",
    SOLVENTQTY: "Solvent Qty Selected",
    STRDSTRENGTH: "Standard Strength",
    COMMITDOCNO: 'Commitment Document No',
    VENDKEY: "Vend Key",
    TOTALHOLD: "Total Hold",
    TOTAL: "Total",
    CUSTKEY: "Customer Key",
    QTYCOMMITTOSALES: 'Qty Committed To Sales',
    QTYCOMMITTOPRODUCTION: "Qty Committed To Production",
    QTYCOMMIT: "Qty Committed",
    BINNO: "Bin No",
    DATEEXPIRY: "Expiry Date",
    DATEQUARANTINE: "Quarantine Date",
    DATERECEIVED: "Received Date",
    LOTNO: "Lot No",
    LOTSTATUS: "Lot Status",
    QTYCOMMITSALES: "Qty Commit To Sales",
    RECUSERID: "Rec User Id",
    RECDATE: "Rec Date",
    VENDORKEY: "Vendor Key",
    VENDORLOTNO: "Vendor Lot No",
    QUANTITY: "Quantity",
    SALESUOMCODE: "Sales UOM Code",
    QTYCOMMITPROD: "Qty Commit Prod",
    ITEMTYP: "Item Type",
    PRICEGRP: "Price Group",
    STDCOST: "Std Cost",
    AVGCOST: "Avg Cost",
    LSTCOST: "Lst Cost",
    BASEPRICE: "Base Price",
    REVACCT: "Rev Account",
    SALESTAXKEY: "Sales Tax Key",
    DESC2: "Desc2",
    SALETOSTKCNVFCTR: "Sale To Stk Cnvfctr",
    INACCT: "In Account",
    InserLineInventory: 'Inventory Lookup',
    InsertLineInventory: 'Inventory Lookup',
    InserLineNonInventory: 'Non-Inventory Lookup',
    InsertLineNonInventory: 'Non-Inventory Lookup',
    InsertLineCustFavorite: 'Customer Favorite Lookup',
    InsertLineCustFavourate: 'Customer Favorite Lookup',
    CustFavouriteItems: 'Add Customer Item',
    AddCustItem: 'Add Customer Item',
    // Ordno: 'SO Series',
    Custkey: 'CustKey',
    Shipkey: 'Ship To',
    Reference: 'Reference',
    Salespkey: 'Sales Person',
    Tax_key: 'Tax Rate',
    Tax: 'Tax Key',
    AccountKey: 'Chart of Accounts',
    PromAccountKey: 'Chart of Accounts',
    Fobkey: "FOB(Free On Board)",
    Commentkey: "Comments",
    Shipviakey: "Ship Via",
    Territkey: "Territory",
    Termskey: "Terms",
    Location: "Location",
    RebateKey: "Rebate",
    Recurkey: "Recur Cycle",
    Custcntry: "Country",
    PromAccountKeyHdr: 'Promo Account Key',
    Currency_Key: 'Currency Key',
    ItemKey: 'Item Key',
    ITEMKEYLOOKUP: 'Item Key Lookup',
    ITEMDESC: 'Item Description',
    Description: 'Description',
    FEATUREIDCANNOTBEBLANK: 'Feature ID can not be blank',
    FEATUREIDANDVALUECANNOTBESAME: 'Do not add same Feature ID and Value in multiple line',
    WAREHOUESTATUSTITLE: 'Processing Report',
    InsertLineKit: 'KIT Lookup',
    InsertLineKitItem: 'KIT Lookup',
    RELEASEORDERALERTMSG: "Do you want to release this order?",
    CRDLIMITPASSWORDCAPTION: 'Enter Password To Save',
    SALESPARAMETERMSG: 'Sales Order Entry Parameters are not defined',
    VIEWSALESCONTRACT: "View Sales Contract",
    NOTHOLDCANCELLED: "Cannot Hold a Cancelled Order",
    NOTHOLDCLOSED: "Cannot Hold a Closed Order",
    HOLDRESAONALERTMSG: "Please specify reason for hold.",
    WAREHOUSESOSAVEALERT: "Save the record,.",
    AlternateItemKey: "Alternate Items",
    SERIES: "Series",
    SERIES_DESC: "Series Description",
    ORDER_TYPE: "Order Type",
    WAREHOUSETRANSFER: "Warehouse Transfer Details",
    ContractNo: 'Contract No Lookup',
    CONTRACTNO: 'Contract No',
    COMMITMENTAMT: "Commitment Amount",
    CONTRACTDATE: "Contract Date",
    COSTORQTYCOMMITMENT: "Cost Or Qty Commitment",
    EFFECTIVEDATE: "Effective Date",
    EXPDATE: "Expiry Date",
    ORIGINALAMT: "Original Amount",
    PRICEQUOTED: "Price Quoted",
    CustomerItem: "Customer Lookup",
    CUSTOMERITEMS: "Customer Item Lookup",
    PurchaseUomCode: "Purchase UOM Code",
    CustitemKey: "CustItemKey",
    OtempItemKey: "Item Key Lookup",
    NOLINESELECTEDMSG: "No line is selected.",
    OtempLocation: "Location Lookup",
    GOTOSHIPMENT: "Go To Shipment",
    REQUIREDFREIGHTALERMSG: "Freight Require. Do you want to continue?",
    FavoriteItems: "Favorite Items",
    LocationKey: 'Location Key',
    SalesOrderEntryList: 'Sales Orders',
    PRICERECALCULATEMSG: 'Price will be recalculated.',
    QTYCOMMITTED: 'Qty Committed',
    QTYQUARANTINED: 'Qty Quarantined',
    QTYEXPIRED: 'Qty Expired',
    QTYAVAILABLE: 'Qty Available',
    CUSTOMERKEY: "Customer Key",
    LOTCOMMITMENTDETAILS: 'Lot Commitment Details',
    CONTAINERIZEDLOTS: 'Containerized Lots',
    SALESISSUES: 'Sales Issues',
    NEGATIVEADJUSTMENT: 'Negative Adjustment',
    POSITIVEADJUSTMENT: 'Positive Adjustment',
    PURECEPIT: 'Purchase Recepit',
    PURETURN: 'Purchase Return',
    MFGISSUES: 'Manufacturing Issue',
    MFGRETURN: 'Manufacturing Return',
    INVENTORYTRAN: 'Inventory Transfer',
    INVADJP: 'Inventory Positive Adjustment',
    INVADJN: 'Inventory Negative Adjustment',
    DAMAGED: 'Damaged',
    CYCLECNT: 'Cycle Count',
    TRANIN: 'Transfer In',
    TRANOUT: 'Transfer Out',
    INVEDITP: 'Inventory Positive Edit',
    INVEDITN: 'Inventory Negative Edit',
    SLPROV: 'Sales Provisional',
    SALESRETURN: 'Sales Return',
    CONTAINERNO: 'Container No',
    PALLETID: 'Pallet Id',
    PLEASEADDCONTAINER: 'Please select Container',
    NEXTPALLET: "Next Pallet",
    ESIGNATURE: 'E-Signature',
    SCREENNAME: 'Screen Name',
    DOCNO: 'Doc No.',
    REQUIREDSIGNAUTH: 'Required Sign. Authorities',
    DATE: 'Date',
    REASONFORCHANGE: 'Reason For Changes',
    MODIFIEDBY: 'Modified By',
    PASSWORD: 'Password',
    USER: 'User',
    DATETIME: 'Date/Time',
    SEQNO: 'Seq No.',
    TESTAMNET: 'Testament',
    AddSIGNATURE: 'Add Signature',
    USERID: 'User Id',
    USERNAME: 'User',
    TESTMENT: 'Testament',
    ENTERPASSWORD: 'Enter Password',
    WRONGPASSWORD: 'Wrong Password',
    ENTERMODIFIED: 'Enter Modified By',
    ENTERUSERID: 'Enter User Id',
    USERNOTAUTHORISEMSG: 'User is not authorised to sign this document.',
    USERALREADYSIGNMSG: 'This user has already signed.',
    REQSIGNATUREMISSING: 'Some required signatures are missing.',
    REASONMINLENGTHMSG: 'Reason for change must contain at least',
    CHARACTER: 'character.',
    ESIGNREASONMSG: 'This screen requires reason for changes and electronic signature.',
    CHKITEMLOCAATIONMSG: 'Check item and location.',
    RETURNORDRECALCULATEMSG: 'Return order, cannot recalculate.',
    COMMENT: "Comments",
    TOTALSPLITQTY: "Total Qty to Split",
    UNIT: "Unit",
    ITEMDESCRIPTION: 'Item Description',
    SPLITCONTAINER: "Split Container",
    SPLITQTY: "Qty to Split",
    CONVNOTFORITEMMSG: "Conversion not defined for item ",
    UNITSAREMSG: "Units are ",
    QUOTATIONTITLE: "Quotation/Sales Requisition",
    CANCELQUOTATIONALERTMSG: "Cancel Quotation?",
    CALCULATETAXDISCOUNT: "Calculate Tax and Discount",
    CANCELSO: "Cancel SO",
    CLOSESO: "Close SO",
    VIEWCONTRACT: "View Contract",
    RELEASEHOLDORDER: "Release/Hold Order",
    CHANGEOWNER: "Change Owner",
    MAILTOCUSTOMER: "Mail to Customer",
    SALESORDERPEGGING: "Sales Order Pegging",
    SALESHISTORY: "Sales History",
    VIEWAGEBRACKETS: "View Age Brackets",
    LIGHTCRM: "Light CRM",
    LADEDWEIGHT: "Laded Weight",
    TRANSFERTOSO: 'Transfer To SO',
    TRANSFERTOSOMSG: 'Transfer To SO?',
    CANCELQUOTATION: "Cancel Quotation",
    TOTALRECALCULATE: "Total Recalculate",
    NOTMAINTAINLOTWITHZERO: "Lots with Zero Quantity cannot be maintained.",
    ALLOWMINQTY: "Allow Min",
    ALLOWMAXQTY: "Allow Max",
    APPROVALS: "Approvals",
    GROUP: "Group",
    GROUPDES: "Group Description",
    APPROVER: "Approver",
    SENDEMAIL: "Send Email",
    CANCELAPPROVALS: "Cancel prior approvals",
    APPROVERDATE: "Approver Date",
    EMAILID: "Email Id",
    GROUPVALIDATEMSG: "Select Approvers Group",
    CANCELQUOTATIONMSG: "Cancel Quotation?",
    QUOTATIONTRANSUCCMSG: "Quotation transferred successfully",
    CANCELVALIDATEMSG: "Order status is CANCELLED, can't transfer",
    TRANSFERVALIDATEMSG: "Order is already TRANSFERRED",
    APPROVERVALIDATEMSG: "Order status is APPROVER, can't transfer",
    SalesRequisitionList: "Quotation/Sales Requisition",
    QUOTATRANPROSPECTVALIMSG: "Cannot transfer a sales quotation into sales order for a prospect",
    CUSTHOLDTRANSVALIMSG: "Customer status is on hold can't transfer",
    CREDITLIMITVALIDATETRANMSG: "Credit limit exceeds, cannot transfer",
    CREDITLMIITTRANSHOLDALERTMSG: "Credit Limit Exceed, Order will be saved with Hold status.",
    LOTFEATURE: "Lot Feature",
    CONTAINER: "Container",
    FEATUREID: "Feature Id",
    FEATUREDESC: "Feature Description",
    VALUE: "Values",
    /**----------- LANDED COST CALCULATION--- */
    LANDEDCOSTCALCULATION: "Landed Cost Calculation",
    LANDEDCOSTGROUPID: "Landed Cost Group Id",
    LANDEDCOSTGROUPDESC: "Landed Cost Group Description",
    ACCUREDLANDEDCOSTACC: "Accured Landed Cost A/c",
    ACCUREDLANDEDCOSTACCDESC: "Accured Landed Cost A/c Desc",
    LANDEDCOSTACC: "Landed Cost A/c",
    LANDEDCOSTACCDESC: "Landed Cost A/c Desc",
    CURRENCY: "Currency",
    LANDEDCOSTID: "Landed Cost Id",
    APPORTIONEDBY: "Apportioned By",
    PERCENTVALUE: "Percent/Value",
    DICREDMEMOTITLE: "Direct Invoice/Credit Memo",
    DirectInvoiceList: "Direct Invoice/Credit Memo",
    PROCESSREPORT: "Process Report",
    DAY: "Day(s)",
    GENERATE: "Generate",
    QTYISSUED: "Qty To Issue",
    QTYRECEIVE: "Qty Received",
    AVAILABLEQTY: "Available Qty",
    PONO: "Purchase Order No.",
    RECEIPTNO: "Receipt No",
    ROWNO: "Row No",
    APPORTIONEDAMT: "Apportioned Amt",
    INCLUDEFREIGHTREBATE: "Include Freight For Rebate",
    RECURRED: "Recurred",
    FOREIGNAMT: "For_Amt",
    FREIGHTACCOUNT: "Account",
    AMT: "Amt",
    TOTALFREIGHT: "Total Freight",
    CHARTACCOUNT: "Chart of Account",
    FREIGHTKEY: "Freight Key",
    FREIGHTMASTER: "Freight Master",
    FREIGHTBREAKUP: "Freight Breakup",
    SCAN: "Scan",
    PALLETNO: "Pallet No",
    QUARANDATE: "Quarantine Date",
    ITEMQTY: "Item Qty",
    ITEMQTYREM: "Item Rem Qty",
    DOCUMENTNO: "Document No",
    DOCLINENO: "Doc Line No",
    VIEWLOTFEATURE: "View Lot Feature",
    VIEWSELECTEDLOT: "View Selected Lot",
    QTY: "Qty",
    SELECTLOT: "Select Lot",
    AUTOSELECT: "Auto Select",
    UNSELECTALL: "Unselect All",
    FROMCONTAINER: "From Container",
    TOCONTAINER: "To Container",
    CONATINERSEARCH: "Container Search",
    MSG: {
      CONTACT_NAME_REQUIRED: "Enter Contact Name",
      EMAILVALIDATEMSG: 'Enter Valid E-Mail',
      PLEASEENTERTENDIGITNUMBER: 'Please enter 10 digit number',
      NOTVALIDNO: 'Not a valid number',
      LOTREQ: "Lot No required.",
      BINREQ: "Bin No required.",
      LOTQTYGREATERFROMZERO: "Lot Qty must be greater than zero.",
      CONTAINERQTYMISMATCH: "Lot quantity and selected container quantity mismatch.",
      CONTAINERNOTMAINTAIN: "Cannot Save. Container not maintained for Lot No.",
      BLOCKSHELFLIFE: "Not enough shelf life for the item. ",
      AVAILABLESHELFLIFE: "Available shelf life is ",
      REQSHELFLIFE: " and required shelf life is ",
      ISSUEQTYEQUALSELECTQTY: "Qty To Issue is already equal to selected qty",
      HARDALLOCATION: "Use Hard allocation is set Yes in inventory setup. Cannot allocate more than quantity available - Quantity Allocated.",
      ITEMNOTCONTAINERIZED: "Item is not Containerized.",
      DUPLICATENO: "Duplicate Number",
      SELECTEDCONTAINEREQUALTOQTY: "Selected Container Quantity must be equal to Lot Quantity",
      FROMTOVALUECHECK: 'From Value can not be greater than To value',
      TOTALSPLITQTYEQUALTOQTY: "Total Split to Quantity must be equal to Quantity Available",
      QTYSPLITREQ: "Qty to Split required",
      LANDEDCOSTREQ: "Landed Cost Id required",
      LANDEDCOSTGROUPREQ: "Landed Cost Group Id required",
      ACCUREDLANDEDCOSTREQ: "Accured Landed Cost A/C required",
      LANDEDCOSTACCOUNTREQ: "Landed Cost A/C required",
      LANDEDCOSTSELECTIONREQ: "Landed Cost Detail Data required",
      FREIGHTDESC: "Add freight description",
      FREIGHTAMT: "Add freight account",
      QTYITEMNOTGREATER: "Item Qty should not be greater than Qty Order.",
      QTYITEMNOTGREATERNEW: "Item Qty should not be greater than QtyOnHand Order.",
      QTYNOTGREATERTHANORDQTY: "Quantity should not be greater than Order Qty.",
      QTYISSUEREQ: "Qty To Issue required",
      REMQTYZERO: "Remaining Item Qty is Zero",
      SERAILNOEXIST: "Serial No already exist for item - ",
      QTYISSUENOTGREATERONHAND: "Qty on Hand should be greater than Qty To Issue.",
      CONTAINERREQ: "Container Required",
      BLOCKSHELFLIFELOTNO: "Not enough shelf life for the item and lot no ",
      QTYREQ: "Quantity required",
      QUARANDATELESSTHANEXPIRYDATE: "Quarantine date cannot be greater than or equal to Expiry Date",
      EXPIRYGREATERTHANRECEIPTDATE: "Expiry date cannot be less than or equal to Receipt date",
      QUARANTINEGREATERTHANRECEIPTDATE: "Quarantine date cannot be less than or equal to Receipt date",
      TOTALCONTAINERQTYEXCEED: "Total container quantity exceeds the required quantity, cannot generate the container.",
      DELETECONTAINERCONFIRMATION: "Container details are maintained. Do you want to delete some container data?",
      QTYNOTGREATERTHANONE: "Qty to issue is not greater than one for serial track item",
      PALLETANDLOTSELECTEDSUCCESSFULLY: "Pallet and Lot added",
      LOTSELECTEDSUCCESSFULLY: "Lot added",
      PALLETNOREQ: "Pallet No Required",
      FROMCONTAINERREQ: "From Container Required",
      TOCONTAINERREQ: "To Container Required",
      SEARCHBYCONATINERREQ: "Search By Container Required",
      ENTERCONTAINERQTY: "Enter Container Quantity",
      ITEMKEYREQ: "Enter Item Key",
      DUPLICATELOTBINCOMBINATION: "Duplicate combination of Lot + Bin found (Row No : ",
      CORRECTSQLQUERY: "Correct SQL Query",
      CHECKOUTSUCCESS: "Record Checked Out Successfully",
      UNDOCHECKOUTSUCCESS: "Record Undo Checked Out Successfully",
      CHECKINSUCCESS: "Record Checked In Successfully",
      ORDERNOREQ: "Order No Required",
      FROMDATETIME: "From Datetime Required",
      TODATETIME: "To Datetime Required",
      PURCHASENOTPERMISSION: "You don't have permission of Purchase Order Receipt",
      SALESNOTPERMISSION: "You don't have permission of Maintain Shipment",
      TODATETIMEGREATER: "To Datetime must be greater than From Datetime",
      WHTRANSFEROUTNOTPERMISSION: "You don't have permission of WH Transfer Out",
      WHTRANSFERINNOTPERMISSION: "You don't have permission of WH Transfer In"
    },
    SUPERINVOICETITLE: 'Super Invoice',
    SONOEXIST: "Order already exist",
    PROCESS: "Process",
    PurchaseOrderEntryList: "Purchase Order",
    PurchaseRequisitionEntryList: "Purchase Requisition",
    PurchaseIndentEntryList: "Purchase Indent",
    SuperVoucherList: "Super Voucher",
    FillVendAdd: "Fill Vendor Address",
    VendorMasterList: "Vendor Key",
    Expense_Acct: "Chart of Accounts",
    Cashacct: "Chart of Accounts",
    CountryLookup: "Country Lookup",
    Vend_Class_Ky: "Vendor Class Lookup",
    Ship_Via: "Ship Via",
    Fob: "FOB Lookup",
    Branch_Ky: "Branch Lookup",
    Comment_Ky: "Comment Lookup",
    DfltTxKey: "Tax Key Lookup",
    Terms: "Terms Lookup",
    Location_Ky: "Location Lookup",
    DfltLandedCostGroupID: "Landed Cost Group",
    FreightKey: "Freight Master",
    TaxType: "Tax Type Lookup",
    TaxType1099: "1099 Box Lookup",
    Language_key: "Language Lookup",
    BRANCHKEYLOOKUP: 'Ship To Lookup',
    APPLYWORKFLOW: "Apply Workflow",
    //**Specification Template * *//
    SPEC: {
      HEADER: "Specification Template",
      TMP_ID: "Specification Template ID",
      VALID: {
        GRPID: 'Specification Group Id cannot be blank.',
        SPECID: 'Specification Id cannot be blank.',
        COMBINATION: 'Duplication Combination of Group Id and Specification Id are not permitted.',
        TMPKEY: 'Do you want to change the Template key ?'
      }
    },
    DocTxKey: "Tax Key",
    ORDRECEIVEDTHISWEEK: "Orders to be received This Week",
    CLOSEDORDER: "Closed Order",
    PROCESSEDORDER: "Processed order",
    GOTRANSINVOICE: "Go To Transfer To Invoice",
    GOSUPERINVOICE: "Go To Super Invoice",
    GOTRANSFERSOBATCH: "Go To Transfer To Batch",
    PRINTINVOICE: "Print Invoice",
    PRINTCREDITMEMO: "Print Credit Memo",
    ARCHIVEDORDER: "Archived Order",
    PROCESSEDORDERS: "Processed Orders",
    GOTRANSVOUCHER: "Go To Transfer To Voucher",
    GOSUPERVOUCHER: "Go To Super Voucher",
    GOPURCHASEORDER: "Go To Purchase Order",
    GOSALESORDER: "Go To Sales Order",
    GOMAINTAINSHIPMENT: "Go To Maintain Shipment",
    PRINTVOUCHER: "Print Voucher",
    PRINTDEBITMEMO: "Print Debit Memo",
    CLOSEDORDERS: "Closed Orders",
    PRINT: "Print",
    LANDEDCOSTNOTONRECEIP: "Landed cost not maintained for the receipt.",
    MYTASK: "Show My Task",
    TASKFORRECORD: "Show Task for this Record",
    USERNAMELBL: "User Name",
    FORMNAME: "Form Name",
    PRIMARYKEY: "Primary Key",
    ESIGNAUDITMSG: "Audit History is applicable on this screen. Save data first before Navigation/Closing screen. Click Cancel to go back to form. Click No to loose changes.",
    VENDORACTIVE: "Active Vendors",
    VENDORHOLD: "Hold Vendors",
    CLOSEDELETEALERT: "Close order cannot be deleted",
    PROCESSEDDELETEALERT: "Processed order cannot be deleted",
    SERIALLOTMAINTENANCE: "Serial Lot Maintenance",
    DOCUMENTTYPE: "Document Type",
    DOCUMENTNUMBER: "Document Number",
    ITEM: "Item",
    DOCUMENTLINENO: "Document Line No.",
    SELQTY: "Selected Quantity",
    SHOWBINONLY: "Show Empty Bins Only",
    RECEIPTDATE: "Receipt Date",
    COMMITQTY: "Commited Qty",
    EXPIRYDATE: "Expiry Date",
    SHIPMENTDETAIL: "Shipment Detail",
    REQDATE: "Req Date",
    PROMISEDATE: "Promise Date",
    PODDOC: "POD Document",
    PODRECBY: "POD Recieved By",
    SHIPDATE: "Ship Date",
    TARGETSHIPDATE: "Target Ship Date",
    PODDATE: "POD Date",
    SHIPTRACKNO: "Shipping Tracking No.",
    LOTQTY: "Lot Qty",
    REMQTY: "Remaining Qty",
    PROCESSEDCLOSEDALERT: "Processed order cannot be closed",
    WHEREUSED: "Where Used",
    GenrateID: "Generate ID",
    KEY: "Key",
    NODIMENSION: "No dimensions defined at multi-dimensional setup.",
    SAVERECFIRST: "Please save the record first",
    STATUS: "Status",
    TRNQTY: "Trn Qty",
    ORIGINALFILENAME: "Original File Name",
    DOCUMENTTITLE: "Document Title",
    DOCUMENTSUMMARY: "Document Summary",
    PRIORITY: "Priority",
    CHECKOUTBY: "CheckOut By",
    CHECKOUTSTATUS: "CheckOut Status",
    CREATEDDATE: "Created Date",
    CREATEDBY: "Created By",
    MODIFIEDDATE: "Modified Date",
    SHOWACTIVEONLY: "Show Active Only",
    READONLYOTHERUSER: "Readonly for other users",
    DOCUMENTS: "Documents",
    NOTES: "Notes",
    CHECKOUT: "Check Out",
    CHECKIN: "Check In",
    UNDOCHECKOUT: "Undo Check Out",
    DELETELINE: "Delete Line",
    ATTACH: "Attach",
    TITLENAME: "Title Name",
    FILENAME: "File Name",
    SUMMARY: "Summary",
    AUTHORIZEDGROUP: "Authorized group",
    DOCUMENTCREATEDDATE: "Document Created Date",
    DOCUMENTCREATEDBy: "Document Created By",
    DOCUMENTMODIFIEDDATE: "Document Modified Date",
    DOCUMENTMODIFIEDBy: "Document Modified By",
    PLZSELECTFILE: "Please select file",
    ENTERFILENAME: "Enter File Name",
    ENTERAUTHGROUP: "Enter Authorized Group",
    FROM: "From",
    TO: "To",
    SCANLOT: "Scan Lot",
    READFILEFORSUMMARY: "Read File for Summary",
    SCANATTACH: "Scan & Attach",
    RECORDNEWDOCUMENT: "Record New Document",
    QTYRECEIVED: "Qty Received",
    VIEWPALLET: "View Pallet",
    ASSIGNDIMID: "Assign Dimension ID",
    ASSIGNTOROW: "Assign To All Rows",
    ShipViaKey: "Ship Via",
    VendCity: "Vendor City",
    VendName: "Vendor Name",
    VouchNo: "Voucher No.",
    VoucherDate: "Voucher Date",
    CustCity: "Customer City",
    CustName: "Customer Name",
    Invdate: "Invoice Date",
    SoInvoice: "Invoice No.",
    TranNo: "Tran No.",
    ASSIGNDIMENSIONID: "Assign Dimension Id",
    QUERYANALYZER: "Query Analyzer",
    ORDERNO: "Order No.",
    FILEEXTNOTSUPPORT: "File extension not supported",
    FILENAMENOTMATCH: "File Name not match with previous file",
    PRINTLISTLABEL: {
      PRINTINV: 'Print Invoice',
      CUSTOMERKEY: "Customer Key",
      CUSTOMERNAME: "Customer Name",
      ORDERDATE: "Order Date",
      ORDERTYPE: "Order Type",
      PROMISEDATE: "Promise Date",
      RECDATE: "Rec Date",
      RECUSERID: "Rec User ID",
      REQUESTEDDATE: "Requested Date",
      SOTOTAL: 'So Total',
      SALESORDERNO: "Sales Order No.",
      SHIPTOKEY: "Ship To Key",
      STATUS: "Status",
      TRAGETSHIPDATE: "Traget Ship Date",
      HOLDINGREASON: "Hold Reason",
      TRANNO: "Tran No.",
      SOINVOICE: "SO Invoice",
      INVOICEDATE: "Invoice Date",
      INVOICETOTAL: "Invoice Total",
      PRINTVOUCHER: 'Print Voucher',
      VOUCHNO: "Voucher No.",
      FINVOUCHERNO: "Fin Voucher No.",
      PURCHASEORDERNO: "Purchase Order No.",
      VENDORKEY: "Vendor Key",
      VENDORNAME: "Vendor Name",
      VOUCHERDATE: "Voucher Date",
      VOUCHERTOTAL: "Voucher Total"
    },
    LINEITEM: "Line Item",
    ISSUEDQTY: "Issued Qty",
    HOLDORDPRINTMSG: "Hold order cannot be print.",
    DUPLICATE: "Duplicate",
    FOUND: "found",
    FROMLOCATION: "From Location",
    INVENTORYTRANSFER: "Inventory Transfer",
    INVENTORYMOVE: "Inventory Move",
    DELMSG: "Deleted Successfully.",
    PRMEMPTY: "Parameter cannot be empty",
    SELRPTPRM: "Select Report Parameter",
    PARAMETER: "Parameter",
    SAVEMSG: "Saved Successfully",
    QUERYBUILDER: "Query Builder",
    CLEAR: "Clear",
    TESTSQL: "Test SQL",
    BTN_CONTACT: "Contact Details",
    QUERYEDITOR: "Query Editor",
    TRANSFER: "Transfer",
    CONTACTLIST: {
      DELTE_HEADER: "Batchmaster",
      TRANSFER: "Data from the selected row will be transfered to the parent screen. Do you want to Continue ?",
      CUSTOMER_KEY_REQUIRED: "Enter Customer Key",
      VEND_KEY_REQUIRED: "Enter Vendor Key",
      PROSPECT_KEY_REQUIRED: "Enter Prospect Key",
      NOT_SAVED: "Record not Saved.",
      NAME: "Name",
      CATEGORY: "Category",
      JOB_TITLE: "Job_Title",
      PHONE: "Phone",
      EMAIL: "Email",
      QUOTATION: 'Quotation',
      SALESORDER: "SalesOrder",
      INVOICE: 'Invoice'
    },
    ARCHIVECONTRACT: {
      SALESARCHIVECONT: "Archive Sales Contract",
      PURARCHIVECONT: "Archive Purchase Contract",
      EXPIRYDATEFROM: "Expiry Date From",
      EXPIRYDATETO: "Expiry Date To",
      CUSTKEY: "Customer Key",
      CUSTNAME: "Customer Name",
      VENDKEY: "Vendor Key",
      VENDNAME: "Vendor Name"
    },
    MAILSETTINGS: {
      MAILSETTINGS: "Mail Settings",
      SERVER: "Server",
      USEREMAIL: "User",
      PASSWORD: "Password",
      PORT: "Port",
      ENABLESSL: "Enable SSL",
      BCCMAILSENDER: "BCC Mail to Sender",
      SAVEMAILSETTING: "Mail setting saved successfully"
    },
    PURCHASEAPPROVERGRP: {
      TITLEPR: "Purchase Approver Group",
      TITLESR: "Sales Approver Group",
      TITLEFM: "Formula Approver Group",
      TITLESRM: "Sample Approver Group",
      TITLECM: "Common Approver Group",
      ADDPURAPPROVERGROUP: "Add Purchase Approver Group",
      ADDSALAPPROVERGROUP: "Add Sales Approver Group",
      ADDFORAPPROVERGROUP: "Add Formula Approver Group",
      ADDSMAPPROVERGROUP: "Add Sample Approver Group",
      ADDCMAPPROVERGROUP: "Add Common Approver Group",
      APPROVER_GROUP: "Group ID",
      DOC_TYPE: "Doc Type",
      DESCRIPTION: "Group Description",
      RECDATE: "Rec. Date",
      RECUSERID: "Rec UserId",
      USERSEQNO: "User Seq. No.",
      ACTION: "Action",
      APPROVER: "Approver",
      NAME: "Name",
      EMAIL: "Email",
      APPROVERINFORMATION: "Approver Information",
      RESEQUENCE: "Resequence",
      TYPE: 'Type',
      MSG: {
        APPROVERNAMEREQ: "Enter Approver In Row",
        USERSEQNOREQ: "Enter User Seq. No. In Row",
        GROUPIDREQ: "Enter Group Id",
        ENTERUSERINFORMATION: "Enter User Information",
        DUPLICATESEQNO: "Duplicate Sequence Number",
        APPROVEREXIST: "Approver Already Exist",
        SAVESEQORDER: "Please Save Your Record After Delete Line Item"
      }
    },
    GENERICFORM: {
      BATCHMASTER: 'BatchMaster',
      DELMESSAGE: 'Delete Record?',
      ASKSAVE: 'Save Record?',
      YES: 'Yes',
      NO: 'No',
      CANCEL: 'Cancel',
      MSGDELETE: "No data to delete.",
      MSGSAVEFIRST: "Save record first.",
      UPLOADPHOTO: "Upload"
    },
    RECORDAUTHORIZATION: {
      USER: "User",
      USERID: "User ID",
      USER_DESCRIPTION: "User Name",
      GROUPID: "Group ID",
      GROUPDESCRIPTION: "Group Name",
      RECUSERID: "Rec User Id",
      RECDATE: "Rec Date",
      TITLESR: "Sales Record Authorization",
      TITLEFM: "Formula Record Authorization",
      ADDSALRECORDAUTH: "Add Sales Record Authorization",
      ADDFORRECORDAUTH: "Add Formula Record Authorization",
      AUTHORIZEDUSER: "Authorized User",
      INSERTUSER: "Insert User",
      READ: "Read",
      WRITE: "Write",
      DELETE: "Delete",
      MSG: {
        ALREADYEXIST: "Already Exist",
        USERIDREQ: "Enter User ID",
        ENTERAUTHORIZEDUSERINFORMATION: "Enter Authorized User Information"
      }
    },
    DATAVIEW: {
      TITLE: "Data View",
      COMPANY: "Company Id",
      COMPANYNAME: "Company Name",
      SQL: "SQL",
      EXECUTE: "Execute SQL",
      ENTERCOMPANY: "Enter Company Id",
      ENTERSQL: "Enter SQL",
      MSG: {
        ASKCHECK: "record(s) Affected",
        RECORDFOUND: "record(s) Found",
        ASKSAVE: "Do you want to continue?"
      }
    },
    GANTTCHART: {
      BATCHNO: "Batch Number",
      PROCESSCELL: "Process Cell",
      STATUS: "Batch Status",
      BATCHTYPE: "Batch Type",
      RESCHEDULE: "Reschedule",
      MANUAL: "Manual",
      AUTO: "Auto Arrange",
      GETBATCHES: "Get Batches",
      REARRANGE: "Rearrange",
      PREDECESSORBATCH: "Predecessor Batch",
      DELAY: "Delay",
      SEQNO: "Seq No.",
      COLLAPSEPANE: "Collapse/Expand Pane",
      SHOWTOOLBAR: "Show/Hide Toolbar",
      UPDATEPROCEES: "Update Process Cell",
      FORWARD: "Forward",
      BACKWARD: "Backward",
      SELECTEDBATCH: "Selected Batch",
      FORMULAITEM: "Formula ID/Item Key",
      ORIGSTARTDATE: "Orig Sch Start Date",
      ORIGENDDATE: "Orig Sch End Date",
      SCHEDULING: "Scheduling",
      PASTDUE: "Past Due",
      SNO: "No.",
      STARTDATE: "Scheduled Start Date",
      ENDDATE: "Scheduled End Date",
      REMOVELINK: "Remove Link",
      ASSIGNLINK: "Assign Link",
      ENTERPROCESSCELL: "Please enter process cell."
    },
    BININQUIRY: {
      TITLE: "Bin Inquiry",
      LOOKUPTITLE: 'BIN Lookup',
      BIN: 'Bin #',
      ITEM: 'Item',
      LOCATION: 'Location',
      LOTNUMBER: 'Lot No.',
      ItemKey: 'Item Key',
      LocationKey: 'Location Key',
      LotNo: 'Lot No',
      QtyAvailable: 'Qty Available',
      ITEMKEY: 'Item',
      LOCATIONKEY: 'Location',
      LOTNO: 'Lot No.',
      QTYAVAILABLE: 'Qty Available',
      QTYONHAND: 'Qty On hand',
      STOCKUOMCODE: 'UOM',
      DESCRIPTION: 'Item Desc',
      QtyOnHand: '',
      VIEW: 'View',
      CONTAINERTAB: 'Container',
      AISLE: 'Aisle',
      ROW: 'Row',
      RACK: 'Rack'
    },
    PALLETINQUIRY: {
      TITLE: "Pallet Inquiry",
      LOOKUPTITLE: 'Pallet Lookup',
      PALLET: 'Pallet Id',
      ITEMKEY: 'Item',
      ITEMDESCRIPTION: 'Item Description',
      LOCATIONKEY: 'Location',
      LOTNO: 'Lot No.',
      BINNO: 'Bin No.',
      CUSTOMER: 'Customer',
      SONO: 'So No',
      STATUS: 'Status',
      BATCHNO: 'Batch No',
      COMMENTS: 'Comments',
      LOTDETAILS: 'Lot Details',
      PALLETDETAILS: 'Pallet Details',
      STOCKUOMCODE: 'UOM',
      CONTAINERNO: 'Cont',
      QUANTITY: 'Qty',
      LOCATION: 'Location',
      QTYONHAND: 'Qty on Hand',
      PALLETID: 'Pallet ID',
      ALLOWPARTISSUESERIALIZATION: 'AP',
      DEFAULTCONTAINERQTY: 'Default Cont',
      PALLETLABEL: 'Pallet Label',
      PALLETMENIFEST: 'Pallet Manifest',
      MSG: {
        PALLTEIDREQ: 'Pallet Id Cannot be Blank'
      }
    },
    DOWNLOADERROR: {
      TITLE: "Download ErrorHandler",
      COMPANYID: "Company Id",
      COMPANYNAME: "Company Name",
      USERID: "User Id",
      USERNAME: "User Name",
      DOWNLOADERRORLOG: "Download Error Log",
      CLEARERRORLOG: "Clear Error Log",
      ENTERCOMPANY: "Enter Company Id",
      ENTERUSER: "Enter User Id",
      NOERRORLOG: "No Error Log"
    },
    WMSLOTINQUIRY: {
      TITLE: "Lot Inquiry",
      LOTNO: "Lot #",
      ITEMKEY: "Item Key",
      ITEMDESC: "Item Description",
      EXPDATE: "Exp. Date",
      LOTSTATUS: "Lot Status",
      QUARTINEDATE: "Quarantine Date",
      STOCKUOM: "Stock UOM",
      DISPUOM: "Display UOM",
      //---------------------------------------------
      QUANTITYTAB: "Quantity",
      TOTALONHANDQTY: "Total OnHand Qty.",
      TOTALAVAILABLEQTY: "Total Available Qty.",
      BINNO: "Bin No.",
      LOCATION: "Location",
      QTYONHAND: "Qty. On Hand",
      AVAILABLEQTY: "Available Qty.",
      //---------------------------------------------
      SOURCETAB: "Source",
      ITEMTYPE: "Make/Buy",
      DOCDATE: "Doc Date",
      DOCNO: "Doc No",
      QTY: "Qty",
      VENDLOTNO: "Vendor Lot No",
      VENDORKEY: "Vendor Key",
      VENDORNAME: "Vendor Name",
      //---------------------------------------------
      FEATURETAB: "Features",
      FEATUREID: "FeatureID",
      DESCRIPTION: "Description",
      VALUE: "Value",
      //---------------------------------------------
      CONTAINERTAB: "Container",
      CONTAINERNO: 'Container No',
      PALLETNO: 'Pallet ID',
      COMMENTS: "Comments",
      VIEW: 'View '
    },
    BOMEXPLOSION: {
      MSG: {
        NORECORDSTOSHOW: "No Record Found"
      }
    },
    PASSWORDCONFIGURATION: {
      TITLE: "Password Configuration",
      PASSWORDRENEWALCYCLE: "Password Renewal Cycle (In Days)",
      MINIMUMPASSWORDLENGTH: "Minimum Password Length (In Char)",
      RESTRICTIONFORSAMEPASSWORD: "Restriction for same password (In Days)",
      FAILURELOGINATTEMPTS: "Failure login attempts",
      LOGINDURATIONFORONETIMEPASSWORD: "Login duration for One Time Password (In Days)",
      MAXIMUMALLOWEDINACTIVITYPERIOD: "Maximum allowed inactivity period (In Days)",
      STRONGPASSWORD: "Strong Password",
      MAILANDSMSSETTINGS: "Mail And SMS Settings",
      SERVER: "Server",
      USER: "User",
      BCCMAILTOSENDER: "BCC Mail to Sender",
      PASSWORD: "Password",
      ENABLESSL: "Enable SSL",
      PORT: "Port",
      SMSURL: "SMS URL"
    },
    TODO: {
      TITLE: "To-Do",
      TYPE: "Type",
      STATUS: "Status",
      PRIORITY: "Priority",
      CLOSINGPER: "Completion Percentage",
      REQBY: "Requested By",
      DUEDATE: "Due Date",
      DESC: "Description",
      DOCID: "Document ID",
      FOLLOWUP: "Follow Up",
      BUSINESSPARTER: "Business  Partner ",
      CONTACTPERSON: "Contact Person",
      CONTACTNO: "Contact No.",
      EMAILId: "E-mail ID",
      COMMENTS: "Comments",
      ATTACHEDDOCS: "Attached Docs",
      ATTACHMENT: "Attachment",
      ACTIVITYJOUNAL: "Activity Journal",
      NEWTODO: "New To-Do",
      FOLLOWUPDATE: "Follow Up Date",
      SUBJECT: "Subject",
      REQUESTEDBY: "Requested By",
      ASSIGNEDTO: "Assigned To",
      SUMMARY: "Summary",
      DATE: "Date",
      NEWACTIVITY: "New Activity",
      INPROGRESS: "In Progress",
      COMPLETED: "Completed",
      CANCELLED: "Cancelled",
      ASSIGNTODOANOTHERUSER: "Assign To-Do To Another User",
      DOCUMENTS: "Documents",
      SHOWBUSINESS: "Show Business",
      MYTODO: "My To-Do",
      ALLUSER: "All User",
      REASSIGNED: "Reassigned",
      NEWDOCUMENT: "New Document",
      MSG: {
        SELECTBUSINESSPARTNER: "Select Business Partner",
        SELECTFILE: "Select File",
        DUEDATEGREATERTHANFOLLOWDATE: "Due date should be greater than Follow Up Date",
        FOLLOWDATENOTLESSTHANCURRENT: "Follow Up Date not less than Current Date",
        TARGETDATEVALIDATION: "TargetDate is can not be blank",
        CLOSEPERNOTGREATERTHAN100: "Closing Percentage should not be greater than 100"
      }
    },
    ACTIVITYMASTER: {
      TITLE: 'Activity Master',
      NEWFYI: 'New FYI',
      TYPE: 'Type',
      USER: 'User',
      SUMMARY: 'Summary',
      DATE: 'Date',
      TODO: 'To-Do',
      DOCUMENTID: 'Document ID',
      BUSSINESSPARTNER: 'Business  Partner',
      CONTACTPERSON: 'Contact Person',
      CONTACTNO: 'Contact No.',
      EMAILID: 'E-mail ID',
      COMMENT: 'Comments',
      ATTACHEDDOCS: 'Attached Docs',
      COMMENTS: 'Comments',
      ADDDOCK: 'Add Document',
      TITLEONE: 'Title',
      STATUS: 'Status',
      MSG: {
        BUSSINESSKEYCANNOTBENULL: 'Bussiness Key can not be null'
      }
    },
    WORKFLOW: {
      NEWTODO: 'New',
      TYPE: 'Type',
      PRIORITY: 'Priority',
      ASSIGNEDTO: 'Assigned To',
      STATUS: 'Status',
      DESCRIPTION: 'Description',
      COMMENTS: 'Comments',
      DUEDAYS: 'Due Days',
      CREATEON: 'Create On',
      PREDECESSOR: 'Predecessor',
      TODOSTATUS: 'ToDo Status',
      CREATEFYI: 'Create FYI',
      TITLE: "ToDo List",
      MANDATORYFIELDS: 'Please fill Mandatory Fields',
      ASSIGNTOcHECK: "Enter Assigned To",
      TODOTYPECHECK: "Select Type",
      WORKFLOWACESS: "Workflow is not applicable for this screen.",
      FORMTITLE: 'Workflow ToDo Settings'
    },
    FINANCESERIES: {
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
        INVOICESERIES: "Enter Common series (Option 1)",
        MONTH: "Enter Month (Option 3)",
        YEAR: "Enter Year (Option 4)",
        SEQU: "Enter Sequence No (Option 5)",
        GenrateSequence: "Enter Sequence Option",
        VALIDMONTH: "Enter Valid Year",
        PRDKEYREQ: "Common Series can not be blank",
        UserGroup: "User Group can not be blank"
      }
    },
    username: "UserName",
    email: "Email",
    status: "Status",
    MYPROFILE: "My Profile",
    REPORTACTION: "Report Action",
    PROFILEACTION: "Profile",
    INQUIRY: 'Inquiry',
    ITEMINQUIRY: "Item Inquiry",
    LOTSPOT: 'LotNo Required',
    ITEMKEYREQ: 'ItemKey Required',
    PALLETNOREQ: 'PalletNo Required',
    BINNOREQ: 'Bin No. Required',
    CUSTNAME: 'Customer Name',
    Free_Text: 'Free Text ',
    QCITEMPROCESSALERT: 'Some items are in QC status, These items not processed.',
    Back_Yes_No: 'Back Order',
    BLOCKSHELFLIFE: "Not enough shelf life for the item. ",
    AVAILABLESHELFLIFE: "Available shelf life is ",
    REQSHELFLIFE: " and required shelf life is ",
    BACKORDERNOTALLOW: "Back Order not allowed, Order will be closed.",
    SELECTPARENTQTY: "Kit Parent ShipQty should be greater then 0",
    Ref_So: "Ref So No.",
    FORMSETTING: "Form Settings",
    ROWSETTING: 'Row Settings',
    FOOTERSETTING: 'Footer Settings',
    GRIDSETTING: 'Grid Settings',
    PICKEDGRIDSETTING: "Picked Grid Settings",
    DROPPEDGRIDSETTING: "Dropped Grid Settings",
    ALLGRIDSETTING: "All Grid Settings",
    STAGEDGRIDSETTING: "Staged Grid Settings",
    RELEASEDGRIDSETTING: "Released Grid Settings",
    PACKEDGRIDSETTING: "Packed Grid Settings",
    RESTORE: "Restore",
    SELECTEDUSER: "Select Users",
    SELECTEDUSERS: "Selected Users",
    LABELS: "Labels",
    VISIBLE: "Visible",
    ACTIVE: "Active",
    BTNVISIBLE: "Button Visible",
    BTNACTIVE: "Button Active",
    MANDATORY: "Mandatory",
    ACTION: "Action",
    SAVEFORMSETTING: "Form setting saved successfully",
    RESTOREFORMSETTING: "Form setting restore successfully",
    RESTOREGRIDSETTING: 'Grid setting restore successfully',
    User_Id: "User Id",
    SELECTALL: "Select All",
    THEME: "Theme",
    DISPLAYREPORT: "Display Report",
    ABOUT: "About",
    SCHEDULER: "Dock Scheduler",
    DOCKKEY: "Dock Name",
    FROMDATETIME: "From DateTime",
    TODATETIME: "To DateTime",
    TRUCKNO: "Truck No",
    DRIVERNAME: "Driver Name",
    DRIVERCONTACTNO: "Driver Contact No.",
    SHIPINGCONTACTNO: "Carrier Contact No",
    CITY: "City",
    STATE: "State",
    BUSINESSPARTNER: "Business Partner",
    ADDEVENT: "Add Dock Appointment",
    EDITEVENT: "Edit Dock Appointment",
    DOCKKEYLIST: "Dock Key List",
    DOCKNAME: "Dock Name",
    DOCKTYPE: "Dock Type",
    SCHEDULEDOCK: "Schedule Dock",
    FETCHUSERSETTINGS: 'Fetch User Settings',
    ACTIONSETTING: 'Action Setting',
    WMSEWS: {
      WEIGHINGFOR: "Weighing For",
      SELECTEDLOT: "Selected Lot",
      REMAININGQTY: "Rem. Qty",
      SCALEQTY: "Scale Qty",
      SELECTSCALE: "Select Scale",
      CLEARALL: "Clear All",
      WEIGHT: "Weight",
      TOTALQTY: "Total Qty",
      ACCEPT: "Accept",
      SELECTLOT: "Please Select Lot No.",
      SELECTITEM: "Please Select Item Key.",
      CHKREMQTY: "Remaining Qty should be greater than zero",
      CHKSCALEQTY: "Invalid Scale Qty",
      CHKSCALELOTQTY: "Scale Qty Should not be greater than Lot Qty",
      ZEROSCALEQTY: "Please enter Scale Qty",
      CHKSELECTSCALE: "Please Select Scale"
    },
    ASSIGNDIMENSIONNOTOPEN: "Applicable for bme finance only",
    QUERYWIZARD: {
      ACTION: 'Action',
      TRANSFER: 'Generate',
      SEQNO: 'Seq No.',
      SQL: 'SQL',
      JOIN: 'Join',
      LEVEL: 'Level',
      PARENTLEVEL: 'Parent Level',
      FINALSQL: 'Final SQL',
      QUERY: 'Query',
      HIERARCHICALQUERY: 'Hierarchical Query',
      COLUMN1: 'Column1',
      HYPERLINK: 'Hyperlink',
      DISPLAYDRILLDOWNFIELD1: 'Display Drilldown Field 1',
      DISPLAYDRILLDOWNFIELD2: 'Display Drilldown Field 2',
      DRILLDOWNFIELD1: 'Drilldown Field 1',
      DRILLDOWNFIELD2: 'Drilldown Field 2',
      HYPERLINKID: 'HyperLinkID',
      RECORDKEY1: 'RecordKey 1',
      RECORDKEY2: 'RecordKey 2',
      ROUTINGPATH: 'Routing Path',
      SCREENNAME: 'Screen Name',
      TARGETSCREENNAME: 'Target Screen Name',
      MSG: {
        ENTERSQL: 'Enter SQL',
        ENTERJOIN: 'Enter Join',
        ENTERLEVEL: 'Enter Level',
        ENTERPARENTLEVEL: 'Enter Parent Level',
        ENTERFINALSQL: 'Generate Final SQL',
        MASTEREXISTS: 'First save the Master record.',
        DELETELEVELCHECKK: 'This line has parent record cannot delete.',
        NODATASAVE: 'No Data to save.',
        DISPLAYDRILLDOWNFIELD1: 'Display Drilldown Field 1',
        ENTERSCREENNAME: 'Enter Screen Name ',
        ENTERDISPLAYDRILLDOWNFIELD1: 'Enter Display Drilldown Field 1'
      }
    },
    TEMPLATE_ID: "Template ID",
    SDSNUMERICVALUE: {
      TITLE: 'SDS Numeric Information',
      CASNUM: 'CAS Number',
      CODE: 'Code',
      DESCRIPTION: 'Description',
      VALUE: 'Value',
      NORECOD: 'No records yet created.',
      CAS: 'CAS Number',
      BOILERPLATEGROUP: 'Boilerplate Group',
      ITEM: 'Item Key',
      DES: 'Description'
    },
    GHSLABEL: {
      TITLE: 'Print Lisam ExESS Label',
      ITEMDETAIL: 'Item Detail',
      LABELTYPE: 'Label Type',
      FGLABEL: 'FG Label',
      QCLABEL: 'QC Label',
      ITEMLABEL: 'Item Label',
      BATCHNO: 'Batch No.',
      ITEMKEY: 'Item Key',
      DESCRIPTION: 'Description',
      LOCATION: 'Location',
      LOTNO: 'Lot No.',
      VENDORLOTNO: 'Vendor Lot No.',
      PONO: 'PO. No.',
      PORECEIPT: 'PO Receipt',
      SAMPLEQTY: 'Sample Qty.',
      QCORDER: 'QC Order',
      GROSSWEIGHT: 'Gross Weight',
      UNIT: 'Unit',
      NETWEIGHT: 'Net Weight',
      TAREWEIGHT: 'Tare Weight',
      VOLUME: 'Volume',
      PACKINGSIZE: 'Packing Size',
      PRODUCTIONDATE: 'Production Date',
      EXPIRYDATE: 'Expiry Date',
      LABELMASTERFORM: 'Label Master Format',
      TEMPLATE: 'Template',
      LANGUAGE: 'Language',
      CLASSIFICATION: 'Classification Version',
      BLOCKSEQ: 'Block Sequence',
      PRINTLABEL: 'Print Label',
      BATCHNOLOOKUP: 'BatchNo. Lookup',
      ITEMLOOKUP: 'Item Lookup',
      LOTNOLOOKUP: 'LotNo. Lookup',
      VENDLOTNOLOOKUP: 'Vendor LotNo. Lookup',
      OUTPUT: 'Output',
      OUTPUTFILEFORMATE: 'Output File Format'
    }
  }
};

/***/ }),

/***/ 36584:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/es.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'es',
  data: {
    'SidebarMenu': {
      "Freight Master": "Maestro de carga",
      "Common": "Común",
      "Inbound": "Entrada",
      "Outbound": "Salida",
      "Reports": "Informes",
      "Internal Movements": "Movimientos Internos",
      "Inquiry and Reports": "Consulta e Informes",
      "Admin": "Admin",
      "Finance": "Finanzas",
      "ChangeCompany": "Cambiar Compañía",
      "Dashboard": "Tablero de Control",
      "Favorites": "Favoritos",
      "TimeANDExpenses": "Tiempo y Gastos",
      "Finanace": "Finanzas",
      "Projects": "Proyectos",
      "Receivables": "Cuentas por Cobrar",
      "General Table View": "Vista General de Tablas",
      "SalesOrders": "Órdenes de Venta",
      "Purchase": "Compras",
      "Inventory": "Inventario",
      "Configuration": "Configuración",
      "WMS Configuration": "Configuración WMS",
      "Put Away": "Almacenar",
      "QualityAssurance": "Aseguramiento de Calidad",
      "Quality Control": "Control de Calidad",
      "Sales": "Ventas",
      "Master": "Maestro",
      "ABC": "ABC",
      "Location": "Ubicación",
      "Prospect": "Prospecto",
      "Customer": "Cliente",
      "ShipTo": "Enviar A",
      "SalesTemplate": "Plantilla de Ventas",
      "SalesKit": "Kit de Ventas",
      "Territory": "Territorio",
      "Salesperson": "Vendedor",
      "SalesCommission": "Comisión de Ventas",
      "SalesContract": "Contrato de Ventas",
      "ArchiveSalesContract": "Archivo de Contratos de Ventas",
      "DisplayArchiveSalesContract": "Mostrar Archivo de Contratos de Ventas",
      "PriceSearchOrder": "Buscar Precio de Órdenes",
      "PromotionalPricing": "Precios Promocionales",
      "PriceMatrix-Customer/Item": "Matriz de Precios-Cliente/Ítem",
      "PriceMatrix-Customer/Price Group": "Matriz de Precios-Cliente/Grupo de Precios",
      "PriceMatrix-Customer Class/Item": "Matriz de Precios-Clase de Cliente/Ítem",
      "PriceMatrix-Customer Class/Price Group": "Matriz de Precios-Clase de Cliente/Grupo de Precios",
      "PriceMatrix-Customer Class/Item Class": "Matriz de Precios-Clase de Cliente/Clase de Ítem",
      "PriceListMaster": "Maestro de Lista de Precios",
      "RebateMaster": "Maestro de Descuentos",
      "RemitTo": "Enviar a",
      "SalesRecordAuthorization": "Autorización de Registros de Ventas",
      "InvoiceSeries": "Serie de Facturas",
      "CustomerSpecificQC": "Control de Calidad Específico del Cliente",
      "RouteMaster": "Maestro de Rutas",
      "RouteSequence": "Secuencia de Rutas",
      "Transactions": "Transacciones",
      "Quotation/SalesRequisition": "Cotización/Requisición de Ventas",
      "QuickSalesOrderEntry": "Entrada Rápida de Órdenes de Venta",
      "SalesOrderEntry": "Entrada de Órdenes de Venta",
      "PickList": "Lista de Recogida",
      "MaintainShipment": "Mantenimiento de Envíos",
      "PrintBillofLading": "Imprimir Conocimiento de Embarque",
      "TransferToInvoice": "Transferir a Factura",
      "SuperInvoice": "Super Factura",
      "DirectInvoice/CreditMemo": "Factura Directa/Nota de Crédito",
      "ShipmentRangeProcess": "Proceso de Rango de Envío",
      "QuotationRangeProcessing": "Proceso de Rango de Cotización",
      "PackingSlip": "Packing Slip",
      "LightCRM": "CRM Ligero",
      "InventoryBillOfLading": "Conocimiento de Embarque de Inventario",
      "MaterialPackaging": "Empaque de Material",
      "ArchiveSalesOrder": "Archivo de Órdenes de Venta",
      "DisplaySalesOrderHistory": "Mostrar Historial de Órdenes de Venta",
      "InvoiceReversal": "Anulación de Factura",
      "TruckLoadUtility": "Utilidad de Carga de Camión",
      "MasterReports": "Informes Maestros",
      "SalesContractReport": "Informe de Contratos de Ventas",
      "ProspectReport": "Informe de Prospectos",
      "CustomerReport": "Informe de Clientes",
      "ShipToReport": "Informe de Envío a",
      "CustomerItemReport": "Informe de Cliente-Ítem",
      "CustomerClassReport": "Informe de Clase de Cliente",
      "CustomerClassItemReport": "Informe de Clase de Cliente-Ítem",
      "CustomerByClassReport": "Informe de Cliente por Clase",
      "CustomerSalespersonReport": "Informe de Cliente por Vendedor",
      "SalesCommissionReport": "Informe de Comisión de Ventas",
      "SalespersonReport": "Informe de Vendedor",
      "TerritoryReport": "Informe de Territorio",
      "PriceMatrixReport": "Informe de Matriz de Precios",
      "SalesKitReport": "Informe de Kit de Ventas",
      "TransactionsReports": "Informes de Transacciones",
      "PrintSalesOrderReport": "Imprimir Informe de Órdenes de Venta",
      "Invoices": "Facturas",
      "Pick-ListReport": "Informe de Lista de Recogida",
      "InventoryCommitmentReport": "Informe de Compromiso de Inventario",
      "SalesAnalysisReport": "Informe de Análisis de Ventas",
      "SOGrossProfitReport": "Informe de Ganancia Bruta de Órdenes de Venta",
      "SalesOrderHistoryReport": "Informe de Historial de Órdenes de Venta",
      "SalesOrderByItem": "Informe de Órdenes de Venta por Ítem",
      "SalesOrderByCustomer": "Informe de Órdenes de Venta por Cliente",
      "ShipmentWithOnhandReport": "Informe de Envío con Existencias",
      "ShipmentOverdueReport": "Informe de Envíos Atrasados",
      "ShipmentStatusWiseReport": "Informe de Envíos por Estado",
      "ShipmentItemWiseReport": "Informe de Envíos por Ítem",
      "ProductionReconciliation": "Reconciliación de Producción",
      "MaterialAnalysisReport": "Informe de Análisis de Material",
      "CertificateofAnalysis": "Certificado de Análisis",
      "TruckDeliveryReport": "Informe de Entrega de Camiones",
      "Customization": "Personalización",
      "TaskSetup": "Configuración de Tareas",
      "Accounts Payable": "Cuentas por Pagar",
      "Accounts Receivable": "Cuentas por Cobrar",
      "General Ledger": "Libro Mayor",
      "Bank/Cash": "Banco/Efectivo",
      "Finance Configuration": "Configuración de Finanzas",
      "R and D": "I+D",
      "BOM": "Lista de Materiales (BOM)",
      "Routing": "Enrutamiento",
      "Production": "Producción",
      "ProcessCell": "Celda de Proceso",
      "Costing": "Costeo",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "Maestro de Clientes",
      "CustomerSalesperson": "Cliente-Vendedor",
      "BillofLadingInventoryInfo": "Información de Inventario en Conocimiento de Embarque",
      "BillofLadingShipToInfo": "Información de Envío a en Conocimiento de Embarque",
      "BillofLadingSetup": "Configuración de Conocimiento de Embarque",
      "CustomerItem": "Cliente-Ítem",
      "CustomerClass": "Clase de Cliente",
      "CustomerClassItem": "Clase de Cliente-Ítem",
      "CustomerSaleableItems": "Ítems Vendibles por Cliente",
      "CustomerGroupSaleableItems": "Ítems Vendibles por Grupo de Clientes",
      "CustomerGroup": "Grupo de Clientes",
      "SalesApproverGroup": "Grupo de Aprobadores de Ventas",
      "SOSeriesMaster": "Maestro de Series de Órdenes de Venta",
      "DISeriesMaster": "Maestro de Series de Facturas Directas/Notas de Crédito",
      "SalesSetup": "Configuración de Ventas",
      "Sample Management": "Gestión de Muestras",
      "NPD/SRM": "NPD/SRM",
      "CRM": "CRM"
    },
    // SPLITCONTAINER: {
    //     HEADING: "Split Container",
    // },
    "PublisherPortalTitle": "Portal del Editor",
    "UserManagementTitle": "Gestión de Usuarios",
    "ListExportToExcel": "Exportar a Excel",
    "ListExportToPdf": "Exportar a PDF",
    "UserManagementAddUser": "Agregar Usuario",
    "ListPrint": "Imprimir",
    "ListColumn": "Columnas",
    "ListPermissions": "Permisos",
    "CommonInvitedBy": "Invitado por",
    "ListJoinedOn": "Unido en",
    "ListRole": "Rol",
    "UserAdmin": "Admin",
    "CommonOther": "Otro",
    "CommonStatus": "Estado",
    "UserActive": "Activo",
    "UserInActive": "Inactivo",
    "CommonAction": "Acción",
    "UserAddForm": "Formulario de Nuevo Usuario",
    "UserEditForm": "Formulario de Edición de Usuario",
    "CommonFirstName": "Nombre",
    "CommonFirstNameRequired": "El nombre es obligatorio.",
    "CommonLastName": "Apellido",
    "CommonLastNameRequired": "El apellido es obligatorio.",
    "CommonInviteEmail": "Correo de Invitación",
    "CommonEmail": "Correo Electrónico",
    "CommonEmailRequired": "El correo electrónico es obligatorio.",
    "CommonInvalidEmail": "Dirección de correo electrónico no válida.",
    "CommonSetPassword": "Establecer Contraseña",
    "CommonPassword": "Contraseña",
    "CommonPasswordRequired": "La contraseña es obligatoria.",
    "CommonInvalidPassword": "Contraseña no válida.",
    "CommonPhone": "Teléfono",
    "CommonInvitedOn": "Invitado el",
    "CommonInvite": "Invitar",
    "CommonCancel": "Cancelar",
    "CommonSave": "Guardar",
    "CommonUser": "Usuario",
    "CommonConcurrencyError": "Por favor, actualiza tu pantalla e inténtalo de nuevo.",
    "CommonUnhandleError": "Lo siento, se produjo un error. Por favor, inténtalo de nuevo más tarde. Agradeceríamos cualquier comentario o detalles sobre lo que salió mal.",
    "CommonBrandingSettings": "Configuración de Marca",
    "CommonBusinessName": "Nombre Comercial",
    "CommonSelectTheme": "Seleccionar Tema",
    "CommonConfiguration": "Configuración",
    "CommonBasicDetails": "Detalles Básicos",
    "CommonCompany": "Nombre de la Empresa",
    "CommonCompanyNameIsRequired": "El nombre de la empresa es obligatorio",
    "CommonBusinessID": "ID del Negocio",
    "CommonCompanyID": "ID de la Empresa",
    "CommonAddress": "Dirección",
    "CommonAddressIsRequired": "La dirección es obligatoria",
    "CommonPrimaryAdmin": "Administrador Principal",
    "CommonPreAdminEmail": "Correo Electrónico del Administrador Pre",
    "CommonBusinessPortalURL": "URL del Portal de Negocios",
    "CommonPartnerPortalURL": "URL del Portal del Socio",
    "CommonSubscriptionDetails": "Detalles de Suscripción",
    "CommonPlanName": "Nombre del Plan",
    "CommonWantToChange?": "¿Quieres cambiar?",
    "CommonActivationDate": "Fecha de Activación",
    "CommonEndDate": "Fecha de Fin",
    "CommonMaximumUsers": "Usuarios Máximos",
    "CommonPaymentCycle": "Ciclo de Pago",
    "CommonPriceInUSD": "Precio (en USD)",
    "CommonGracePeriod": "Período de Gracia (en Días)",
    "CommonAutoRenewal": "Renovación Automática",
    "CommonCreditCardInfo": "Información de Tarjeta de Crédito",
    "CommonCreditCardNumberIsRequired": "El número de tarjeta de crédito es obligatorio",
    "CommonChange": "Cambiar",
    "CommonConnectorConfig": "Configuración del Conector",
    "CommonCapabilityConnectionString": "Cadena de Conexión de Capacidad",
    "CommonTestConnection": "Probar Conexión",
    "CommonSuccess": "Éxito",
    "CommonCapabilityStringIsRequired": "La cadena de capacidad es obligatoria",
    "CommonConnectorConnectionString": "Cadena de Conexión del Conector",
    "CommonFailed": "Falló",
    "CommonConnectorStringIsRequired": "La cadena del conector es obligatoria",
    "CommonPaymentReceivableSettings": "Configuración de Pagos Pendientes",
    "CommonPrimaryAC": "Cuenta Principal",
    "CommonPrimaryAccountNumberIsRequired": "El número de cuenta principal es obligatorio",
    "CommonAddAnotherAccount": "Agregar otra cuenta",
    "ComonSelectPermission": "Por favor, selecciona al menos un permiso",
    "CommonAlert": "Alerta",
    "CommonCustomerNameRequired": "Se requiere el nombre del cliente.",
    "CommonRefIdRequired": "Se requiere CustomerRefId.",
    "CommonLanguage": "Idioma",
    "Freight Master": "Maestro de carga",
    "CommonCurrency": "Moneda",
    "CommonTimeZone": "Zona Horaria",
    "CommonDateFormat": "Formato de Fecha",
    "CommonInvoiceNameRequired": "Se requiere el nombre de la factura.",
    "CommonInvoicenumberRequired": "Se requiere el número de factura.",
    "CommonInvoicePoNumbeRequired": "Se requiere el número de PO.",
    "CommonInvoiceOrderNumberRequired": "Se requiere el número de orden.",
    "CommonInvoicAmountRequired": "Se requiere el monto.",
    "CommonStreet1Required": "Se requiere la calle 1.",
    "CommonCityRequired": "Se requiere la ciudad.",
    "CommonStateRequired": "Se requiere el estado.",
    "CommonCountryRequired": "Se requiere el país.",
    "CommonZipcodeRequired": "Se requiere el código postal.",
    "CommonInvoiceItemDescriptionRequired": "Se requiere la descripción del ítem.",
    "CommonInvoiceItemCodeRequired": "Se requiere el código del ítem.",
    "CommonInvoiceItemPrice": "Se requiere el precio del ítem.",
    "CommonReinvite": "Reinvitar",
    "CommonInvited": "Invitado",
    "CommonActive": "Activo",
    "CommonInactive": "Inactivo",
    "CommonPayable": "A pagar",
    "CommonPay": "Pagar",
    "CommonSaveInvoiceAndGenerateUrl": "Crear factura y generar URL de pago rápido",
    "CommonReceipt": "Recibo",
    "CommonPaymentStatus": "Estado de Transacción",
    "CommonPaymentID": "ID de Transacción",
    "CommonAccountCardNo": "Cuenta / Tarjeta #",
    "CommonAccountOrCard": "Cuenta / Tarjeta",
    "CommonRefreshstatus": "Actualizar estado",
    "CommonPaymentReceipt": "Recibo de Transacción",
    "CommonPaymentService": "Servicio de Transacción",
    "CommonInvoiceCurrentStatus": "Estado Actual de la Factura",
    "CommonInvoiceInvoiceOriginalAmount": "Monto Original de la Factura",
    "CommonContactPhone": "Teléfono de Contacto",
    "CommonName": "Nombre",
    "CommonWebsite": "Sitio Web",
    "CommonFaxNumber": "Número de Fax",
    "CommonZipCode": "Código Postal",
    "CommonCountry": "País",
    "CommonState": "Estado",
    "CommonCity": "Ciudad",
    "CommonStreet1": "Calle 1",
    "CommonStreet2": "Calle 2",
    "CommonStreet3": "Calle 3",
    "CommonBillingAddress": "Dirección de Facturación",
    "CommonCustomerID": "ID del Cliente",
    "CommonCustomerName": "Nombre del Cliente",
    "CommonTax": "Impuesto",
    "CommonShipping": "Envío",
    "CommonDiscount": "Descuento",
    "CommonSubTotal": "Subtotal",
    "CommonLineItemOn": "Ítem de Línea en",
    "CommonDueDate": "Fecha de Vencimiento",
    "CommonGeneratedOn": "Generado el",
    "CommonOrderID": "ID de Orden",
    "CommonPONumber": "Número de Orden de Compra",
    "CommonInvoiceName": "Nombre de Factura",
    "CommonInvoiceNumber": "ID de Factura",
    "CommonOrderInfo": "Información de Orden",
    "CommonCustomerInfo": "Información del Cliente",
    "CommonInvoiceDetails": "Detalles de la Factura",
    "CommonPaidAmount": "Monto Pagado",
    "CommonCustomerNotes": "Notas del Cliente",
    "CommonCustomerNote": "Nota del Cliente",
    "CommonItemCode": "Código de Ítem",
    "CommonQuantity": "Cantidad",
    "CommonPrice": "Precio",
    "CommonPricePerunit": "Precio por Unidad",
    "CommonTotal": "Total",
    "CommonLastMonth": "Último Mes",
    "CommonLast3Months": "Últimos 3 Meses",
    "CommonLast6Months": "Últimos 6 Meses",
    "CommonThisYear": "Este Año",
    "CommonDeletedInvoices": "Facturas Eliminadas",
    "CommonApply": "Aplicar",
    "CommonOriginal": "Original",
    "CommonOutstanding": "Pendiente",
    "CommonAmountPayable": "Monto a Pagar",
    "CommonPaymentMode": "Modo de Transacción",
    "CommonACHPayment": "Pago ACH",
    "CommonACH": "ACH",
    "CommonBankName": "Nombre del Banco",
    "CommonBankAccountName": "Nombre de la Cuenta Bancaria",
    "CommonAccountNumber": "Número de Cuenta",
    "CommonABARoutingNumber": "Número de Ruta ABA",
    "CommonAccountType": "Tipo de Cuenta",
    "CommonSECCode": "Código SEC",
    "CommonTrermsAgreement": "Acepto hacer el pago desde mi cuenta bancaria proporcionada anteriormente.",
    "CommonNotes": "Notas",
    "CommonPaymentForm": "Formulario de Pago",
    "CommonCreditCardPayment": "Pago con Tarjeta de Crédito",
    "CommonPaymentOn": "Transacción el",
    "CommonContactPersonDetails": "Detalles de la Persona de Contacto",
    "CommonVoidPayment": "Anular",
    "CommonRefundPayment": "Reembolso",
    "CommonAmount": "Monto",
    "CommonSubTotalAmount": "Se requiere Subtotal.",
    "Commonblank": "(en blanco)",
    "CommonRequiredValidation": "Esta información es obligatoria.",
    "CommonIpaymentBusinessPortal": "Portal de Negocios de iPayment",
    "CommonVersion": "Versión",
    "CommonChangePassword": "Cambiar Contraseña",
    "CommonCurrentPassword": "Contraseña Actual",
    "CommonForgotYourPassword?": "¿Olvidaste tu contraseña?",
    "CommonNewPassword": "Nueva Contraseña",
    "CommonConfirmPassowrd": "Confirmar Contraseña",
    "CommonSignInToYourCompany": "Iniciar sesión en tu Negocio",
    "CommonUpcomingPayments": "Próximos Pagos",
    "CommonRecentPayment": "Pagos Recientes",
    "CommonTotalOpenInvoices": "Total de Facturas Pendientes",
    "CommonPartialPaidInvoicesOpen": "Facturas Pagadas Parcialmente (Abiertas)",
    "CommonTotalPaidInvoices": "Total de Facturas Pagadas",
    "CommonPaidInvoicesLastWeek": "Facturas Pagadas (Última Semana)",
    "CommonPaidLastWeek": "Pagado (Última Semana) $",
    "CommonPaymentsDoneInUSD": "Pagos Realizados (en USD)",
    "CommonEditTicketForm": "Editar Formulario de Ticket",
    "CommonCreatedBy": "Creado Por",
    "CommonCreatedOn": "Creado el",
    "CommonContactEmail": "Correo Electrónico de Contacto",
    "CommonCustomerDetails": "Detalles del Cliente",
    "CommonIssueDetails": "Detalles del Problema",
    "CommonTitle": "Título",
    "CommonTitleIsRequired": "El título es obligatorio.",
    "CommonDescription": "Descripción",
    "CommonDescriptionIsRequired": "La descripción es obligatoria.",
    "CommonTicketID#": "ID de Ticket",
    "CommonPriority": "Prioridad",
    "CommonAssignedTo": "Asignado a",
    "CommonModifiedOn": "Modificado el",
    "CommonModifiedBy": "Modificado Por",
    "CommonAttachment": "Adjunto",
    "CommonAddYourComments": "Agregar tus Comentarios",
    "CommonAddYourComment": "Agregar tu Comentario",
    "CommonComments": "Comentarios",
    "CommonDeletedTickets": "Tickets Eliminados",
    "CommonTenantName": "Nombre del Inquilino",
    "CommonLow": "Bajo",
    "CommonMedium": "Medio",
    "CommonHigh": "Alto",
    "CommonOpen": "Abierto",
    "CommonOnHold": "En Espera",
    "CommonResolved": "Resuelto",
    "CommonClosed": "Cerrado",
    "CommonNewTicketForm": "Nuevo Formulario de Ticket",
    "CommonCreate": "Crear",
    "CommonBusinessDetails": "Otros Detalles",
    "CommonAddTicket": "Nuevo Ticket",
    "CommonTicketId": "ID de Ticket",
    "CommonNewCustomerForm": "Nuevo Formulario de Cliente",
    "CommonGeneral": "General",
    "CommonPaymentDetails": "Detalles de la Transacción",
    "CommonContactInfo": "Información de Contacto",
    "CommonAdminUserDetails": "Detalles de Usuario Admin",
    "CommonApplicationsDetails": "Detalles de Aplicaciones",
    "CommonEnabledServices": "Servicios Habilitados",
    "CommonCustomerPortalURL": "URL del Portal del Cliente",
    "CommonCreditCardDetails": "Detalles de la Tarjeta de Crédito",
    "CommonSavedCreditCards": "Tarjetas de Crédito Guardadas",
    "CommonNameOnCard": "Nombre en la Tarjeta",
    "CommonCardExpiry": "Vencimiento de la Tarjeta",
    "CommonCardNumber": "Número de Tarjeta",
    "CommonExpiry": "Vencimiento",
    "CommonCVV": "CVV",
    "CommonCardType": "Tipo de Tarjeta",
    "CommonAddCreditCard": "Agregar Tarjeta de Crédito",
    "CommonACHPaymentDetails": "Detalles de Pago ACH",
    "CommonCustomerAddress": "Dirección del Cliente",
    "CommonSameAsAboveAddress": "Igual que la dirección anterior",
    "CommonSaveInvite": "Guardar e Invitar",
    "CommonEditCustomerForm": "Editar Formulario de Cliente",
    "CommonCustomer": "Cliente",
    "CommonAddCustomer": "Agregar Cliente",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "Órdenes de Venta Abiertas",
    "CommonInvoice": "Factura",
    "CommonUpcomingDeliveryDate": "Próxima Entrega",
    "CommonLastDeliveryOn": "Última Entrega",
    "CommonTotalSalesOrder": "Total de Órdenes de Venta",
    "CommonPending": "Pendiente",
    "Common(Pending)": "(Pendiente)",
    "CommonDetails": "Detalles",
    "CommonDesktop": "Escritorio",
    "CommonSMS": "SMS",
    "CommonHelpDeskNotifications": "Notificaciones de Servicio de Asistencia",
    "CommonMyTicketStatusIsChanged": "El Estado de Mi Ticket ha Cambiado.",
    "CommonCustomerTicketStatusIsChanged": "El Estado del Ticket del Cliente ha Cambiado.",
    "CommonMyTicketIsReassigned": "Mi Ticket ha sido Reasignado",
    "CommonCustomerTicketIsReassigned": "El Ticket del Cliente ha sido Reasignado.",
    "CommonMyTicketPriorityIsChanged": "La Prioridad de Mi Ticket ha Cambiado.",
    "CommonCustomerTicketPriorityIsChanged": "La Prioridad del Ticket del Cliente ha Cambiado.",
    "CommonNewCommentAddedInMyTicket": "Nuevo Comentario agregado en Mi Ticket.",
    "CommonNewCommentAddedInCustomerTicket": "Nuevo Comentario agregado en el Ticket del Cliente.",
    "CommonInvoiceNotifications": "Notificaciones de Facturas",
    "CommonInvoicePaymentIsReceived": "Se ha recibido el pago de la factura.",
    "CommonCustomersReport": "Informe de Clientes",
    "CommonLastWeek": "La Semana Pasada",
    "CommonFrom": "Desde",
    "CommonTo": "Hasta",
    "CommonTotalInvoices": "Total de Facturas",
    "CommonOpenInvoices": "Facturas Pendientes",
    "CommonCustomerWisePaymentReport": "Informe de Pagos por Cliente",
    "CommonPartialPaidInvoices": "Facturas Pagadas Parcialmente",
    "CommonPaidInvoices": "Facturas Pagadas",
    "CommonCreditAmount": "Monto de Crédito",
    "CommonInvoicesReport": "Informe de Facturas",
    "CommonPaidOn": "Pagado el",
    "CommonAmountPaid": "Monto Pagado",
    "CommonPaymentReceivedReport": "Informe de Pagos Recibidos",
    "CommonPaymentType": "Tipo de Pago",
    "CommonInvoiceID": "ID de Factura",
    "CommonOriginalAmount": "Monto Original",
    "CommonPortalUsersReport": "Informe de Usuarios del Portal",
    "CommonTicketsReport": "Informe de Tickets",
    "CommonInvoicesDetails": "Detalles de Facturas",
    "CommonBankAccountNameIsRequired ": "Se requiere el Nombre de la Cuenta Bancaria.",
    "AccountNumberIsRequired": "Se requiere el Número de Cuenta.",
    "CommonABARoutingNumberIsRequired": "Se requiere el Número de Ruta ABA.",
    "CommonOriginated": "Originado",
    "CommonReturned": "Devuelto",
    "CommonSetteled": "Liquidado",
    "CommonOk": "OK",
    "CommonMsgPaymentHistory": "Puedes cerrar esta ventana y ver el estado actual en el Historial de Transacciones.",
    "CommonInvoiceNumb": "Número de Factura",
    "CommonPaid": "Pagado",
    "CommonDue": "Vencido",
    "CommonBlueStar": "BlueStar",
    "CommonBillToAddress": "Dirección de Facturación",
    "CommonlineItemsOn": "Ítems de Línea en",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "Anulado",
    "CommonVoid": "Anular",
    "CommonVoidRequested": "Solicitud de Anulación",
    "CommonRefundRequested": "Solicitud de Reembolso",
    "CommonRefunded": "Reembolsado",
    "CommonRefundCancelled": "Reembolso Cancelado",
    "CommonVeriCheckACH ": "VeriCheck ACH",
    "CommonMonthly": "Mensual",
    "CommonQuartly": "Trimestral",
    "CommonHalfyearly": "Semestral",
    "CommonYearly": "Anual",
    "CommonNewInvoiceForm": "Nuevo Formulario de Factura",
    "CommonSTEP": "PASO",
    "CommonPrefix": "Prefijo",
    "Commonselect": "seleccionar",
    "CommonAddNew": "Agregar Nuevo",
    "CommonNumber": "Número",
    "CommonTaxRate": "Tasa de Impuesto",
    "CommonAddMoreItems": "Agregar Más Ítems",
    "CommonNext": "Siguiente",
    "CommonBack": "Atrás",
    "CommonDone": "Hecho",
    "CommonLastLogin": "Último Inicio de Sesión:",
    "CommonAdmin": "Admin",
    "CommonBusinessPortal": "Portal de Negocios",
    "CommonMyProfile": "Mi Perfil",
    "CommonChangePassword ": "Cambiar Contraseña",
    "CommonSync": "Sincronizar",
    "CommonPreferences": "Preferencias",
    "CommonAbout": "Acerca de",
    "CommonLogout": "Cerrar Sesión",
    "CommonToggleNavigation": "Alternar Navegación",
    "CommonHome": "Inicio",
    "CommonCustomers": "Clientes",
    "CommonInvoices": "Facturas",
    "CommonPaymentHistory": "Historial de Transacciones",
    "CommonReports": "Informes",
    "CommonPaymentReceived": "Pagos Recibidos",
    "CommonCustomerWisePayment": "Pagos por Cliente",
    "PortalUsers": "Usuarios del Portal",
    "CommonTickets": "Tickets",
    "CommonBusinessPortalSettings": "Configuraciones del Portal de Negocios",
    "CommonConfigurations": "Configuraciones",
    "CommonAlerts": "Alertas",
    "CommonHelpDesk": "Servicio de Asistencia",
    "CommonCustomerTickets": "Tickets del Cliente",
    "CommonMyTickets": "Mis Tickets",
    "CommonDocumentation": "Documentación",
    "CommonPoweredBy": "Desarrollado por",
    "CommonCompanyPortalSettings": "Configuraciones del Portal de la Empresa",
    "CommonCustomerPortalSettings": "Configuraciones del Portal del Cliente",
    "CommonDelete": "Eliminar",
    "CommonNoResultFound": "No se encontraron resultados",
    "CommonPaymentDate": "Fecha de Transacción",
    "CommonInvoicesStatus": "Estado de Facturas",
    "CommonPaymentsDoneInLast6Months": "Pagos realizados en los últimos 6 meses",
    "CommonRecentTranscations": "Transacciones Recientes",
    "CommonCompletedOrder(Closed)": "Completado",
    "CommonOpenOrders(Open)": "Abierto",
    "CommonPartialDeliveredOrder(Open)": "Parcialmente Entregado",
    "CommonServices": "Servicios",
    "CommonPartnerCompanySubDomain": "Subdominio de la Empresa Asociada",
    "CommonPortalDetails": "Detalles del Portal",
    "CommonPortalURL": "URL del Portal",
    "CommonEdit": "Editar",
    "CommonAddAnAccount": "Agregar una Cuenta",
    "CommonPayments": "Pagos",
    "CommonNewAttachmentAddedInMyTicket": "Nuevo Archivo Adjunto agregado en Mi Ticket.",
    "CommonNewAttachmentAddedInCustomerTicket": "Nuevo Archivo Adjunto agregado en el Ticket del Cliente.",
    "CommonRefreshStatus": "Actualizar estado",
    "CommonID#": "ID#",
    "CommonSubscription": "Suscripción",
    "CommonCompanySubDomain": "Subdominio de la Empresa",
    "CommonMyPortalURL": "Mi URL del Portal",
    "CommonPortalLocalizationSettings": "Configuración de Localización del Portal",
    "CommonDeletedOn": "Eliminado el",
    "CommonDeletedBy": "Eliminado por",
    "CommonNewInvoiceisgenerated": "Se ha generado una Nueva Factura.",
    "CommonInvoicepaymentstatusischanged": "El estado de pago de la factura ha cambiado.",
    "CommonExistingInvoiceiscancelled": "La Factura Existente ha sido Cancelada.",
    "CommonOrderId": "ID de la Orden",
    "CommonStartDate": "Fecha de Inicio",
    "CommonNextPaymentdate": "Próxima Transacción el",
    "CommonRecurringPeriod": "Frecuencia de Pago",
    "CommonRecurringTerms": "Términos de Pago",
    "CommonTermAmount": "Monto de Cada Pago",
    "CommonRemainingPayCounts": "Pagos Restantes",
    "CommonOrderAmount": "Monto de la Orden",
    "CommonAddRecurring": "Agregar Recurrente",
    "CommonOrderIdRequired": "Se requiere el ID de la Orden.",
    "CommonRecurringTermRequired": "El término debe ser mayor que 0.",
    "CommonRecurringTermAmountRequired": "El monto del término debe ser mayor que 0.",
    "CommonWebsiteValidation": "URL del sitio web no válida.",
    "CommonNoRecordsAvailable": "Aún no se han creado registros.",
    "CommonPaymentDone": "Pago Realizado",
    "CommonPaymentDoneReport": "Informe de Pagos Realizados",
    "CommonByJoiningYouAgreeToOur": "Al unirte, aceptas nuestros",
    "CommonTerms": "Términos",
    "CommonPrivacyPolicy": "Política de Privacidad.",
    "CommonAnd": "y",
    "CommonEnterYourCompanyID": "Ingresa la URL de tu Negocio",
    "CommonDontRememberCompanyID": "¿No recuerdas tu Subdominio?",
    "CommonClickHere": "Haz clic aquí",
    "CommonWantToCreate": "¿Quieres crear una nueva Cuenta de Negocio?",
    "CommonFindMyCompanyID": "¡Encuentra mi Subdominio!",
    "CommonFindMyCompanyIDTitle": "Te enviaremos un correo electrónico para confirmar tu ID de inicio de sesión y encontrar tu Subdominio con el que puedes unirte.",
    "CommonEnterYourEmail": "Ingresa tu correo electrónico",
    "CommonContinue": "Continuar",
    "CommonCheckYourEmail": "¡Revisa tu correo electrónico!",
    "CommonCheckYourTitle": "Te hemos enviado un enlace a",
    "CommonGetStartedTitle": "Haz clic en el enlace y comienza.",
    "CommonEnteredWrongEmail": "¿Ingresaste un correo electrónico incorrecto?",
    "CommonItemName": "Nombre del Ítem",
    "CommonQuickpay": "Generar URL de Pago Rápido",
    "PFCommonPermission": "Permiso",
    "PFCommonPermissions": "Permisos",
    "PFCommonPortalUsers": "Usuarios del Portal",
    "PFCommonUsers": "Usuarios",
    "PFCommonUser": "Usuario",
    "PFCommonActive": "Activo",
    "PFCommonInActive": "Inactivo",
    "PFCommonAdmin": "Admin",
    "PFCommonAction": "Acción",
    "PFCommonPending": "Pendiente",
    "CommonPortalOwnerName": "Nombre del Propietario del Portal",
    "CommonPoweredByText": "Desarrollado por Texto",
    "CommonCopyrightText": "Derechos de Autor",
    "CommonPublisherPortalTheme": "Tema del Portal del Editor",
    "CommonTenantTickets": "Tickets de Negocios",
    "CommonTenantID": "ID de Negocio",
    "CommonAdd": "Agregar",
    "CommonDragDropFileText": "Arrastra y suelta archivos aquí o haz clic en Subir.",
    "CommonValidFileFormatMsg": "Por favor, ingresa un formato de archivo válido. Los formatos de archivo admitidos son: JPG, JPEG, TIFF, GIF, PNG, WEBP, SVG, BMP, TIF, ICO.",
    "CommonError": "Error",
    "CommonFileSizeError": "El tamaño del archivo es demasiado grande. Por favor, selecciona un archivo de hasta 10 MB.",
    "CommonMoreThanOneFileError": "No se permiten múltiples archivos",
    "CommonOrderNameRequired": "Se requiere el nombre de la orden.",
    "CommonPackageNameRequired": "Se requiere el tipo de paquete.",
    "CommonFillAllRequiredFeildErrorMsg": "Por favor, complete los campos requeridos y proporcione datos válidos.",
    "CommonContactUs": "Contáctenos",
    "CommonContactFormTitle": "Escribe tu mensaje a continuación. ¡Nos pondremos en contacto contigo lo antes posible!",
    "CommonMessage": "Mensaje",
    "CommonMailingAddress": "Dirección de Envío",
    "CommonSend": "Enviar",
    "CommonUpcomingShipments": "Envíos Próximos",
    "CommonRecentShipments": "Envíos Recientes",
    "CommonDeliveryID": "ID de Entrega",
    "CommonPostedOn": "Publicado el",
    "CommonShippingNo": "Número de Envío",
    "CommonShipmentHistory": "Historial de Envíos",
    "CommonTrackingNo": "Número de Seguimiento",
    "CommonPackages": "Paquetes",
    "CommonCarrier": "Transportista",
    "CommonDestination": "Destino",
    "CommonPickUpOn": "Recogido el",
    "CommonDeliveredOn": "Entregado el",
    "CommonDeliveryDate": "Fecha de Entrega",
    "CommonOrderName": "Nombre de la Orden",
    "CommonNoPackageValidationMessage": "Se debe agregar al menos un paquete para obtener una cotización de envío.",
    "CommonNoCarrierValidationMessage": "Al menos un transportista debe suscribirse.",
    "CommonPlanSelectionValidationMessage": "Selecciona un plan de transportista válido.",
    "CommonGenerateQuoteAgainValidationMessage": "El formulario ha sido modificado. Por favor, genera la cotización nuevamente.",
    "CommonAddressDetails": "Detalles de la Dirección",
    "CommonConfigurationSavedMsg": "Tus cambios se han guardado correctamente.",
    "Common4X6LabelPrinter": "Impresora de Etiquetas 4X6",
    "CommonTraditionalPrinters": "Impresoras Tradicionales",
    "CommonCarriersInfo": "Información de los Transportistas",
    "CommonAddresses": "Direcciones",
    "CommonNewAddress": "Nueva Dirección",
    "CommonValidateAddress": "Validar Dirección",
    "CommonVerifiedBy": "Verificado por",
    "CommonLabel": "Etiqueta",
    "CommonPrintingInfo": "Información de Impresión",
    "CommonContactPerson": "Persona de Contacto",
    "CommonDecimalValues": "Valores Decimales",
    "CommonGroupingDecimalSeparator": "Separador de Decimales y Agrupación",
    "CommonGroupingValues": "Valores de Agrupación",
    "CommonCurrencyLocalization": "Localización de Moneda",
    "CommonDesignation": "Designación",
    "CommonSubDomain": "Subdominio",
    "CommonAccountNo": "Número de Cuenta",
    "CommonValidate": "Validar",
    "CommonNoOfDeliveries": "Nº de Entregas",
    "CommonNoOfSalesOrderDeliveries": "Nº de Órdenes de Venta",
    "CommonNoOfSalesAmount": "Monto de Ventas",
    "CommonTopMostValuableCustomer": "Top 5 Clientes Más Valiosos",
    "CommonTotalOpenOrders": "Total de Órdenes Abiertas",
    "CommonPartialDeliveredOrders": "Órdenes Parcialmente Entregadas",
    "CommonCompletedOrders": "Órdenes Completadas",
    "CommonPendingShipping": "Envíos Pendientes",
    "CommonTotalShipping": "Total de Envíos",
    "CommonTotalSales": "Ventas Totales",
    "CommonTotalSalesinLast6Months": "Ventas Totales en los Últimos 6 Meses",
    "CommonSalesOrdersStatus": "Estado de Órdenes de Venta",
    "CommonSalesOrders": "Órdenes de Venta",
    "CommonShippingStatus": "Estado de Envío",
    "CommonShipmentByCarrier": " Envío por Transportista",
    "CommonTotalDeliveriesinlast6months": "Total de Entregas en los Últimos 6 Meses",
    "CommonQty": "Cant.",
    "CommonValue": "Valor",
    "CommonTop5mostvaluablecustomers": "Top 5 Clientes Más Valiosos",
    "CommonDeliveriesAcrossGlobe": "Entregas en Todo el Mundo",
    "CommonAddressErrorMsg": "Se requiere al menos una dirección.",
    "CommonCurrencyLocalizationsConfirmMsg": "Esto guardará permanentemente tus Localizaciones de Moneda",
    "CommonConfirmation": "Confirmación",
    "CommonService": "Servicio",
    "CommonShipConfirm": "¿Quieres enviar esta Orden de Venta?",
    "CommonCarriers": "Transportistas",
    "CommonShipFromAddresses": "Direcciones de Envío Desde",
    "CommonBusinessAddresses": "Direcciones de Negocio",
    "CommonNewItem": "Nuevo Ítem",
    "CommonPackageItemEqlDistributionMsg": "Hay una discrepancia entre los ítems de la orden de venta y los ítems empaquetados. Por favor, ajusta los cambios y genera la cotización nuevamente.",
    "CommonPackageAllItemDistributionMsg": "Por favor, empaca todos los ítems de la orden de venta antes de generar la cotización.",
    "CommonZeroItemInItemMaster": "No hay ningún ítem disponible en el Maestro de Ítems para agregar. Primero agrega el Ítem en el Maestro de Ítems.",
    "CommonShipFromAddressErrorMsg": "Se requiere al menos una dirección de envío.",
    "TOTALRECORDS": "Total de Registros",
    "VIEWITEMLOCATION": "Ver Ubicación del Ítem",
    "SELECTLOTFEATUREWISE": "Seleccionar características de lote",
    "ITEMKEY": "Clave del Ítem",
    "DESCRIPTION": "Descripción",
    "LOCATION": "Ubicación",
    "LOCATIONDITAIL": "Detalle de Ubicación",
    "LOTBINDITAIL": "Detalle de Lote/Contenedor No.",
    "STOCKUOM": "UOM de Stock",
    "DISPLAYUOM": "UOM de Visualización",
    "COMMITTOPRODUCTION": "Cantidad Comprometida a Producción",
    "COMMITTOSALES": "Cantidad Comprometida a Ventas",
    "DESC1": "Desc1",
    "EOQ": "EOQ",
    "INCLASSKEY": "Clave de Clase Interna",
    "MULTIPLEBINSREQ": "Se Requieren Múltiples Contenedores",
    QTYONHAND: 'Cantidad en Mano',
    QTYONORDER: 'Cantidad en Pedido',
    QTYOVERSOLD: 'Cantidad en Exceso Vendida',
    SERIALLOTFLG: 'Flag de Serie/Lote',
    STATUSCODE: 'Código de Estado',
    STOCKUOMCODE: 'Código de UOM de Stock',
    TRANSITIN: 'En Tránsito Entrada',
    TRANSITOUT: 'En Tránsito Salida',
    QTYUNDERPURCHASEQC: 'Cantidad bajo Control de Calidad de Compras',
    QTYUNDERINVENTORYQC: 'Cantidad bajo Control de Calidad de Inventario',
    QTYONORDERDETAILS: 'Detalles de Cantidad en Pedido',
    QTYCOMMITTOSALESDETAILS: 'Detalles de Cantidad Comprometida a Ventas',
    QTYCOMMITTOPRODUCTIONDETAILS: 'Detalles de Cantidad Comprometida a Producción',
    TRANSACTION: 'Transacción',
    TRANSACTIONNO: 'Número de Transacción',
    TRANSACTIONDATE: 'Fecha de Transacción',
    TRANSACTIONTYPE: 'Tipo de Transacción',
    AVGLOTSTR: 'Fuerza Promedio del Lote',
    LOTSTRENGTH: 'Fuerza del Lote',
    QTYREQ: 'Cantidad Requerida',
    LOTQTYSEL: 'Cantidad de Lote Seleccionada',
    SOLVENTQTY: 'Cantidad de Disolvente Seleccionada',
    STRDSTRENGTH: 'Fuerza Estándar',
    COMMITDOCNO: 'Número de Documento de Compromiso',
    VENDKEY: 'Clave de Vendedor',
    TOTALHOLD: 'Total en Espera',
    TOTAL: 'Total',
    CUSTKEY: 'Clave de Cliente',
    QTYCOMMITTOSALES: 'Cantidad Comprometida a Ventas',
    QTYCOMMITTOPRODUCTION: 'Cantidad Comprometida a Producción',
    QTYCOMMIT: 'Cantidad Comprometida',
    BINNO: 'Número de Contenedor',
    DATEEXPIRY: 'Fecha de Vencimiento',
    DATEQUARANTINE: 'Fecha de Cuarentena',
    DATERECEIVED: 'Fecha de Recepción',
    LOTNO: 'Número de Lote',
    LOTSTATUS: 'Estado del Lote',
    QTYCOMMITSALES: 'Cantidad Comprometida a Ventas',
    RECUSERID: 'ID de Usuario de Recepción',
    RECDATE: 'Fecha de Recepción',
    VENDORKEY: 'Clave de Proveedor',
    VENDORLOTNO: 'Número de Lote del Proveedor',
    QUANTITY: 'Cantidad',
    SALESUOMCODE: 'Código de UOM de Ventas',
    QTYCOMMITPROD: 'Cantidad Comprometida a Producción',
    ITEMTYP: 'Tipo de Ítem',
    PRICEGRP: 'Grupo de Precios',
    STDCOST: 'Costo Estándar',
    AVGCOST: 'Costo Promedio',
    LSTCOST: 'Costo Último',
    BASEPRICE: 'Precio Base',
    REVACCT: 'Cuenta de Reversión',
    SALESTAXKEY: 'Clave de Impuesto de Ventas',
    DESC2: 'Desc2',
    SALETOSTKCNVFCTR: 'Ventas a Conversión de Stock',
    INACCT: 'Cuenta de Entrada',
    InserLineInventory: 'Búsqueda de Inventario',
    InsertLineInventory: 'Búsqueda de Inventario',
    InserLineNonInventory: 'Búsqueda de No Inventario',
    InsertLineNonInventory: 'Búsqueda de No Inventario',
    InsertLineCustFavorite: 'Búsqueda de Favoritos del Cliente',
    InsertLineCustFavourate: 'Búsqueda de Favoritos del Cliente',
    CustFavouriteItems: 'Agregar Ítem del Cliente',
    AddCustItem: 'Agregar Ítem del Cliente',
    Custkey: 'Clave de Cliente',
    Shipkey: 'Enviar a',
    Reference: 'Referencia',
    Salespkey: 'Vendedor',
    Tax_key: 'Tasa de Impuestos',
    Tax: 'Clave de Impuestos',
    AccountKey: 'Plan de Cuentas',
    PromAccountKey: 'Plan de Cuentas',
    Fobkey: 'FOB (Franco a Bordo)',
    Commentkey: 'Comentarios',
    Shipviakey: 'Enviar Vía',
    Territkey: 'Territorio',
    Termskey: 'Términos',
    Location: 'Ubicación',
    RebateKey: 'Reembolso',
    Recurkey: 'Ciclo Recurrente',
    Custcntry: 'País del Cliente',
    PromAccountKeyHdr: 'Clave de Cuenta Promocional',
    Currency_Key: 'Clave de Moneda',
    ItemKey: 'Clave del Ítem',
    ITEMKEYLOOKUP: 'Búsqueda de Clave del Ítem',
    ITEMDESC: 'Descripción del Ítem',
    Description: 'Descripción',
    FEATUREIDCANNOTBEBLANK: 'La ID de la Característica no puede estar en blanco',
    FEATUREIDANDVALUECANNOTBESAME: 'No agregar la misma ID de Característica y Valor en múltiples líneas',
    WAREHOUESTATUSTITLE: 'Reporte en Proceso',
    InsertLineKit: 'Búsqueda de KIT',
    InsertLineKitItem: 'Búsqueda de KIT',
    RELEASEORDERALERTMSG: '¿Quieres liberar esta orden?',
    CRDLIMITPASSWORDCAPTION: 'Ingresa la Contraseña para Guardar',
    SALESPARAMETERMSG: 'Los Parámetros de Entrada de Órdenes de Venta no están definidos',
    VIEWSALESCONTRACT: 'Ver Contrato de Ventas',
    NOTHOLDCANCELLED: 'No se puede mantener una Orden Cancelada',
    NOTHOLDCLOSED: 'No se puede mantener una Orden Cerrada',
    HOLDRESAONALERTMSG: 'Por favor, especifica la razón del mantenimiento.',
    WAREHOUSESOSAVEALERT: 'Guardar el registro.',
    AlternateItemKey: 'Ítems Alternativos',
    SERIES: 'Serie',
    SERIES_DESC: 'Descripción de la Serie',
    ORDER_TYPE: 'Tipo de Orden',
    WAREHOUSETRANSFER: 'Detalles de Transferencia de Almacén',
    ContractNo: 'Búsqueda de Número de Contrato',
    CONTRACTNO: 'Número de Contrato',
    COMMITMENTAMT: 'Monto de Compromiso',
    CONTRACTDATE: 'Fecha de Contrato',
    COSTORQTYCOMMITMENT: 'Costo o Cantidad Comprometida',
    EFFECTIVEDATE: 'Fecha Efectiva',
    EXPDATE: 'Fecha de Vencimiento',
    ORIGINALAMT: 'Monto Original',
    PRICEQUOTED: 'Precio Cotizado',
    CustomerItem: 'Búsqueda de Ítem del Cliente',
    CUSTOMERITEMS: 'Búsqueda de Ítems del Cliente',
    PurchaseUomCode: 'Código de UOM de Compras',
    CustitemKey: 'Clave de Ítem del Cliente',
    OtempItemKey: 'Búsqueda de Clave de Ítem',
    NOLINESELECTEDMSG: 'Ninguna línea está seleccionada.',
    OtempLocation: 'Búsqueda de Ubicación',
    GOTOSHIPMENT: 'Ir al Envío',
    REQUIREDFREIGHTALERMSG: 'Se requiere flete. ¿Quieres continuar?',
    FavoriteItems: 'Ítems Favoritos',
    LocationKey: 'Clave de Ubicación',
    SalesOrderEntryList: 'Órdenes de Venta',
    PRICERECALCULATEMSG: 'El precio será recalculado.',
    QTYCOMMITTED: 'Cantidad Comprometida',
    QTYQUARANTINED: 'Cantidad en Cuarentena',
    QTYEXPIRED: 'Cantidad Expirada',
    QTYAVAILABLE: 'Cantidad Disponible',
    CUSTOMERKEY: 'Clave de Cliente',
    LOTCOMMITMENTDETAILS: 'Detalles de Compromiso de Lote',
    CONTAINERIZEDLOTS: 'Lotes Contenerizados',
    SALESISSUES: 'Problemas de Ventas',
    NEGATIVEADJUSTMENT: 'Ajuste Negativo',
    POSITIVEADJUSTMENT: 'Ajuste Positivo',
    PURECEPIT: 'Recibo de Compra',
    PURETURN: 'Devolución de Compra',
    MFGISSUES: 'Problemas de Fabricación',
    MFGRETURN: 'Devolución de Fabricación',
    INVENTORYTRAN: 'Transferencia de Inventario',
    INVADJP: 'Ajuste Positivo de Inventario',
    INVADJN: 'Ajuste Negativo de Inventario',
    DAMAGED: 'Dañado',
    CYCLECNT: 'Conteo Cíclico',
    TRANIN: 'Transferencia Entrante',
    TRANOUT: 'Transferencia Saliente',
    INVEDITP: 'Edición Positiva de Inventario',
    INVEDITN: 'Edición Negativa de Inventario',
    SLPROV: 'Provisión de Ventas',
    SALESRETURN: 'Devolución de Ventas',
    CONTAINERNO: 'Número de Contenedor',
    PALLETID: 'ID de Paleta',
    PLEASEADDCONTAINER: 'Por favor, selecciona el Contenedor',
    NEXTPALLET: 'Siguiente Paleta',
    ESIGNATURE: 'Firma Electrónica',
    SCREENNAME: 'Nombre de Pantalla',
    DOCNO: 'Número de Documento',
    REQUIREDSIGNAUTH: 'Autoridades de Firma Requeridas',
    DATE: 'Fecha',
    REASONFORCHANGE: 'Motivo de los Cambios',
    MODIFIEDBY: 'Modificado Por',
    PASSWORD: 'Contraseña',
    USER: 'Usuario',
    DATETIME: 'Fecha/Hora',
    SEQNO: 'Número de Secuencia',
    TESTAMNET: 'Testamento',
    AddSIGNATURE: 'Agregar Firma',
    USERID: 'ID de Usuario',
    USERNAME: 'Nombre de Usuario',
    TESTMENT: 'Testamento',
    ENTERPASSWORD: 'Ingrese la Contraseña',
    WRONGPASSWORD: 'Contraseña Incorrecta',
    ENTERMODIFIED: 'Ingrese Modificado Por',
    ENTERUSERID: 'Ingrese ID de Usuario',
    USERNOTAUTHORISEMSG: 'El usuario no está autorizado para firmar este documento.',
    USERALREADYSIGNMSG: 'Este usuario ya ha firmado.',
    REQSIGNATUREMISSING: 'Faltan algunas firmas requeridas.',
    REASONMINLENGTHMSG: 'El motivo de cambio debe contener al menos',
    CHARACTER: 'caracter.',
    ESIGNREASONMSG: 'Esta pantalla requiere motivo de cambios y firma electrónica.',
    CHKITEMLOCAATIONMSG: 'Verifique el ítem y la ubicación.',
    RETURNORDRECALCULATEMSG: 'Orden de devolución, no se puede recalcular.',
    COMMENT: 'Comentarios',
    TOTALSPLITQTY: 'Cantidad Total a Dividir',
    UNIT: 'Unidad',
    ITEMDESCRIPTION: 'Descripción del Ítem',
    SPLITCONTAINER: 'Dividir Contenedor',
    SPLITQTY: 'Cantidad a Dividir',
    CONVNOTFORITEMMSG: 'Conversión no definida para el ítem ',
    UNITSAREMSG: 'Las unidades son ',
    QUOTATIONTITLE: 'Cotización/Requisición de Ventas',
    CANCELQUOTATIONALERTMSG: '¿Cancelar Cotización?',
    CALCULATETAXDISCOUNT: 'Calcular Impuestos y Descuentos',
    CANCELSO: 'Cancelar Orden de Venta',
    CLOSESO: 'Cerrar Orden de Venta',
    VIEWCONTRACT: 'Ver Contrato',
    RELEASEHOLDORDER: 'Liberar/Mantener Orden',
    CHANGEOWNER: 'Cambiar Propietario',
    MAILTOCUSTOMER: 'Enviar Correo al Cliente',
    SALESORDERPEGGING: 'Seguimiento de Órdenes de Venta',
    SALESHISTORY: 'Historial de Ventas',
    VIEWAGEBRACKETS: 'Ver Rangos de Edad',
    LIGHTCRM: 'CRM Ligero',
    LADEDWEIGHT: 'Peso Cargado',
    TRANSFERTOSO: 'Transferir a Orden de Venta',
    TRANSFERTOSOMSG: '¿Transferir a Orden de Venta?',
    CANCELQUOTATION: 'Cancelar Cotización',
    TOTALRECALCULATE: 'Recalcular Total',
    NOTMAINTAINLOTWITHZERO: 'No se pueden mantener lotes con cantidad cero.',
    ALLOWMINQTY: 'Permitir Mínimo',
    ALLOWMAXQTY: 'Permitir Máximo',
    APPROVALS: 'Aprobaciones',
    GROUP: 'Grupo',
    GROUPDES: 'Descripción del Grupo',
    APPROVER: 'Aprobador',
    SENDEMAIL: 'Enviar Correo',
    CANCELAPPROVALS: 'Cancelar Aprobaciones Anteriores',
    APPROVERDATE: 'Fecha de Aprobación',
    EMAILID: 'ID de Correo Electrónico',
    GROUPVALIDATEMSG: 'Selecciona el Grupo de Aprobadores',
    CANCELQUOTATIONMSG: '¿Cancelar Cotización?',
    QUOTATIONTRANSUCCMSG: 'Cotización transferida exitosamente',
    CANCELVALIDATEMSG: 'El estado de la orden es CANCELADO, no se puede transferir',
    TRANSFERVALIDATEMSG: 'La orden ya está TRANSFERIDA',
    APPROVERVALIDATEMSG: 'El estado de la orden es APROBADA, no se puede transferir',
    SalesRequisitionList: 'Cotización/Requisición de Ventas',
    QUOTATRANPROSPECTVALIMSG: 'No se puede transferir una cotización de ventas a una orden de ventas para un prospecto',
    CUSTHOLDTRANSVALIMSG: 'El estado del cliente está en espera, no se puede transferir',
    CREDITLIMITVALIDATETRANMSG: 'Límite de crédito excedido, no se puede transferir',
    CREDITLMIITTRANSHOLDALERTMSG: 'Límite de crédito excedido, la orden se guardará con estado en espera.',
    LOTFEATURE: 'Característica de Lote',
    CONTAINER: 'Contenedor',
    FEATUREID: 'ID de Característica',
    FEATUREDESC: 'Descripción de la Característica',
    VALUE: 'Valores',
    /**----------- LANDED COST CALCULATION--- */
    LANDEDCOSTCALCULATION: 'Cálculo de Costos de Importación',
    LANDEDCOSTGROUPID: 'ID del Grupo de Costos de Importación',
    LANDEDCOSTGROUPDESC: 'Descripción del Grupo de Costos de Importación',
    ACCUREDLANDEDCOSTACC: 'Cuenta de Costos Acumulados de Importación',
    ACCUREDLANDEDCOSTACCDESC: 'Descripción de la Cuenta de Costos Acumulados de Importación',
    LANDEDCOSTACC: 'Cuenta de Costos de Importación',
    LANDEDCOSTACCDESC: 'Descripción de la Cuenta de Costos de Importación',
    CURRENCY: 'Moneda',
    LANDEDCOSTID: 'ID de Costos de Importación',
    APPORTIONEDBY: 'Distribuido Por',
    PERCENTVALUE: 'Porcentaje/Valor',
    DICREDMEMOTITLE: 'Factura Directa/Nota de Crédito',
    DirectInvoiceList: 'Factura Directa/Nota de Crédito',
    PROCESSREPORT: 'Reporte de Proceso',
    DAY: 'Día(s)',
    GENERATE: 'Generar',
    QTYISSUED: 'Cantidad a Emitir',
    QTYRECEIVE: 'Cantidad Recibida',
    AVAILABLEQTY: 'Cantidad Disponible',
    PONO: 'Número de Orden de Compra',
    RECEIPTNO: 'Número de Recibo',
    ROWNO: 'Número de Fila',
    APPORTIONEDAMT: 'Monto Distribuido',
    INCLUDEFREIGHTREBATE: 'Incluir Flete para Descuento',
    RECURRED: 'Recurrencia',
    FOREIGNAMT: 'Monto Extranjero',
    FREIGHTACCOUNT: 'Cuenta',
    AMT: 'Monto',
    TOTALFREIGHT: 'Flete Total',
    CHARTACCOUNT: 'Plan de Cuentas',
    FREIGHTKEY: 'Clave de Flete',
    FREIGHTMASTER: 'Maestro de Flete',
    FREIGHTBREAKUP: 'Desglose de Flete',
    SCAN: "Escanear",
    PALLETNO: "Número de Pallet",
    QUARANDATE: "Fecha de Cuarentena",
    ITEMQTY: "Cantidad de Artículo",
    ITEMQTYREM: "Cant. Remanente de Artículo",
    DOCUMENTNO: "Número de Documento",
    DOCLINENO: "Número de Línea de Doc.",
    VIEWLOTFEATURE: "Ver Característica del Lote",
    VIEWSELECTEDLOT: "Ver Lote Seleccionado",
    QTY: "Cant.",
    SELECTLOT: "Seleccionar Lote",
    AUTOSELECT: "Selección Automática",
    UNSELECTALL: "Deseleccionar Todo",
    FROMCONTAINER: "Desde Contenedor",
    TOCONTAINER: "Hacia Contenedor",
    CONATINERSEARCH: "Búsqueda de Contenedor",
    MSG: {
      CONTACT_NAME_REQUIRED: "Ingrese el Nombre de Contacto",
      EMAILVALIDATEMSG: 'Ingrese un Correo Electrónico Válido',
      PLEASEENTERTENDIGITNUMBER: 'Ingrese un número de 10 dígitos',
      NOTVALIDNO: 'Número no válido',
      LOTREQ: "Se requiere Número de Lote.",
      BINREQ: "Se requiere Número de Bin.",
      LOTQTYGREATERFROMZERO: "La cantidad de lote debe ser mayor que cero.",
      CONTAINERQTYMISMATCH: "La cantidad de lote y la cantidad de contenedor seleccionada no coinciden.",
      CONTAINERNOTMAINTAIN: "No se puede guardar. Contenedor no mantenido para el Número de Lote.",
      BLOCKSHELFLIFE: "No hay suficiente vida útil en el estante para el artículo. ",
      AVAILABLESHELFLIFE: "La vida útil disponible es ",
      REQSHELFLIFE: " y la vida útil requerida es ",
      ISSUEQTYEQUALSELECTQTY: "La cantidad a emitir ya es igual a la cantidad seleccionada",
      HARDALLOCATION: "Se ha establecido 'Usar Asignación Dura' como Sí en la configuración de inventario. No se puede asignar más de la cantidad disponible - Cantidad Asignada.",
      ITEMNOTCONTAINERIZED: "El artículo no está en contenedores.",
      DUPLICATENO: "Número Duplicado",
      SELECTEDCONTAINEREQUALTOQTY: "La cantidad del contenedor seleccionado debe ser igual a la cantidad del lote",
      FROMTOVALUECHECK: 'El valor Desde no puede ser mayor que el valor Hasta',
      TOTALSPLITQTYEQUALTOQTY: "La Cantidad Total a Dividir debe ser igual a la Cantidad Disponible",
      QTYSPLITREQ: "Se requiere Cantidad a Dividir",
      LANDEDCOSTREQ: "Se requiere ID de Costo de Importación",
      LANDEDCOSTGROUPREQ: "Se requiere ID de Grupo de Costo de Importación",
      ACCUREDLANDEDCOSTREQ: "Se requiere Cuenta de Costo de Importación Acumulado",
      LANDEDCOSTACCOUNTREQ: "Se requiere Cuenta de Costo de Importación",
      LANDEDCOSTSELECTIONREQ: "Se requieren Datos Detallados de Costo de Importación",
      FREIGHTDESC: "Agregar descripción de flete",
      FREIGHTAMT: "Agregar cuenta de flete",
      QTYITEMNOTGREATER: "La cantidad del artículo no debe ser mayor que la cantidad del pedido.",
      QTYITEMNOTGREATERNEW: "La cantidad del artículo no debe ser mayor que la cantidad en mano del pedido.",
      QTYNOTGREATERTHANORDQTY: "La cantidad no debe ser mayor que la cantidad del pedido.",
      QTYISSUEREQ: "Se requiere Cantidad a Emitir",
      REMQTYZERO: "La cantidad restante del artículo es cero",
      SERAILNOEXIST: "El número de serie ya existe para el artículo - ",
      QTYISSUENOTGREATERONHAND: "La Cantidad en Mano debe ser mayor que la Cantidad a Emitir.",
      CONTAINERREQ: "Se requiere Contenedor",
      BLOCKSHELFLIFELOTNO: "No hay suficiente vida útil en el estante para el artículo y el número de lote ",
      QTYREQ: "Se requiere Cantidad",
      QUARANDATELESSTHANEXPIRYDATE: "La fecha de cuarentena no puede ser mayor o igual a la fecha de vencimiento",
      EXPIRYGREATERTHANRECEIPTDATE: "La fecha de vencimiento no puede ser menor o igual a la fecha de recepción",
      QUARANTINEGREATERTHANRECEIPTDATE: "La fecha de cuarentena no puede ser menor o igual a la fecha de recepción",
      TOTALCONTAINERQTYEXCEED: "La cantidad total de contenedores excede la cantidad requerida, no se puede generar el contenedor.",
      DELETECONTAINERCONFIRMATION: "Los detalles del contenedor están mantenidos. ¿Desea eliminar algunos datos del contenedor?",
      QTYNOTGREATERTHANONE: "La cantidad a emitir no debe ser mayor que uno para un artículo de seguimiento por número de serie",
      PALLETANDLOTSELECTEDSUCCESSFULLY: "Pallet y Lote agregados",
      LOTSELECTEDSUCCESSFULLY: "Lote agregado",
      PALLETNOREQ: "Se requiere Número de Pallet",
      FROMCONTAINERREQ: "Se requiere Desde Contenedor",
      TOCONTAINERREQ: "Se requiere Hacia Contenedor",
      SEARCHBYCONATINERREQ: "Se requiere Búsqueda por Contenedor",
      ENTERCONTAINERQTY: "Ingrese la Cantidad del Contenedor",
      ITEMKEYREQ: "Ingrese la Clave del Artículo",
      DUPLICATELOTBINCOMBINATION: "Se encontró una combinación duplicada de Número de Lote + Número de Bin (Fila No: ",
      CORRECTSQLQUERY: "Consulta SQL Correcta",
      CHECKOUTSUCCESS: "Registro Checked Out con Éxito",
      UNDOCHECKOUTSUCCESS: "Registro Deshacer Checked Out con Éxito",
      CHECKINSUCCESS: "Registro Checked In con Éxito",
      ORDERNOREQ: "Se requiere Número de Orden",
      FROMDATETIME: "Se requiere Fecha/Hora de Desde",
      TODATETIME: "Se requiere Fecha/Hora de Hasta",
      PURCHASENOTPERMISSION: "No tiene permisos para Recibo de Orden de Compra",
      SALESNOTPERMISSION: "No tiene permisos para Mantener Envío",
      TODATETIMEGREATER: "La Fecha/Hora de Hasta debe ser mayor que la Fecha/Hora de Desde",
      WHTRANSFEROUTNOTPERMISSION: "No tiene permisos para Transferencia de Almacén - Salida",
      WHTRANSFERINNOTPERMISSION: "No tiene permisos para Transferencia de Almacén - Entrada"
    },
    SUPERINVOICETITLE: 'Super Factura',
    SONOEXIST: "La orden ya existe",
    PROCESS: "Proceso",
    PurchaseOrderEntryList: "Orden de Compra",
    PurchaseRequisitionEntryList: "Requisición de Compra",
    PurchaseIndentEntryList: "Pedido de Compra",
    SuperVoucherList: "Súper Comprobante",
    FillVendAdd: "Completar Dirección del Proveedor",
    VendorMasterList: "Clave del Proveedor",
    Expense_Acct: "Plan de Cuentas",
    Cashacct: "Plan de Cuentas",
    CountryLookup: "Búsqueda de País",
    Vend_Class_Ky: "Búsqueda de Clase de Proveedor",
    Ship_Via: "Envío por",
    Fob: "Búsqueda de FOB",
    Branch_Ky: "Búsqueda de Sucursal",
    Comment_Ky: "Búsqueda de Comentario",
    DfltTxKey: "Búsqueda de Clave de Impuesto Predeterminada",
    Terms: "Búsqueda de Términos",
    Location_Ky: "Búsqueda de Ubicación",
    DfltLandedCostGroupID: "Grupo de Costo de Importación",
    FreightKey: "Maestro de Flete",
    TaxType: "Búsqueda de Tipo de Impuesto",
    TaxType1099: "Búsqueda de Casilla 1099",
    Language_key: "Búsqueda de Idioma",
    BRANCHKEYLOOKUP: 'Búsqueda de Envío a',
    APPLYWORKFLOW: "Aplicar Flujo de Trabajo",
    //**Plantilla de Especificación * *//
    SPEC: {
      HEADER: "Plantilla de Especificación",
      TMP_ID: "ID de Plantilla de Especificación",
      VALID: {
        GRPID: 'El ID del Grupo de Especificación no puede estar en blanco.',
        SPECID: 'El ID de Especificación no puede estar en blanco.',
        COMBINATION: 'No se permiten combinaciones duplicadas de ID de Grupo y ID de Especificación.',
        TMPKEY: '¿Desea cambiar la clave de la plantilla?'
      }
    },
    DocTxKey: "Clave de Impuesto",
    ORDRECEIVEDTHISWEEK: "Órdenes a recibir esta semana",
    CLOSEDORDER: "Orden Cerrada",
    PROCESSEDORDER: "Orden Procesada",
    GOTRANSINVOICE: "Ir a Transferir a Factura",
    GOSUPERINVOICE: "Ir a Súper Factura",
    GOTRANSFERSOBATCH: "Ir a Transferir a Lote",
    PRINTINVOICE: "Imprimir Factura",
    PRINTCREDITMEMO: "Imprimir Nota de Crédito",
    ARCHIVEDORDER: "Orden Archivada",
    PROCESSEDORDERS: "Órdenes Procesadas",
    GOTRANSVOUCHER: "Ir a Transferir a Comprobante",
    GOSUPERVOUCHER: "Ir a Súper Comprobante",
    GOPURCHASEORDER: "Ir a Orden de Compra",
    GOSALESORDER: "Ir a Orden de Venta",
    GOMAINTAINSHIPMENT: "Ir a Mantener Envío",
    PRINTVOUCHER: "Imprimir Comprobante",
    PRINTDEBITMEMO: "Imprimir Nota de Débito",
    CLOSEDORDERS: "Órdenes Cerradas",
    PRINT: "Imprimir",
    LANDEDCOSTNOTONRECEIP: "Costo de importación no mantenido para el recibo.",
    MYTASK: "Mostrar Mis Tareas",
    TASKFORRECORD: "Mostrar Tarea para este Registro",
    USERNAMELBL: "Nombre de Usuario",
    FORMNAME: "Nombre del Formulario",
    PRIMARYKEY: "Clave Primaria",
    ESIGNAUDITMSG: "El Historial de Auditoría es aplicable en esta pantalla. Guarde los datos antes de Navegar/Cerrar la pantalla. Haga clic en Cancelar para volver al formulario. Haga clic en No para perder los cambios.",
    VENDORACTIVE: "Proveedores Activos",
    VENDORHOLD: "Proveedores en Espera",
    CLOSEDELETEALERT: "La orden cerrada no se puede eliminar",
    PROCESSEDDELETEALERT: "La orden procesada no se puede eliminar",
    SERIALLOTMAINTENANCE: "Mantenimiento de Serie y Lote",
    DOCUMENTTYPE: "Tipo de Documento",
    DOCUMENTNUMBER: "Número de Documento",
    ITEM: "Artículo",
    DOCUMENTLINENO: "Número de Línea de Documento",
    SELQTY: "Cantidad Seleccionada",
    SHOWBINONLY: "Mostrar Solo Contenedores Vacíos",
    RECEIPTDATE: "Fecha de Recibo",
    COMMITQTY: "Cantidad Comprometida",
    EXPIRYDATE: "Fecha de Vencimiento",
    SHIPMENTDETAIL: "Detalle de Envío",
    REQDATE: "Fecha de Solicitud",
    PROMISEDATE: "Fecha Prometida",
    PODDOC: "Documento de POD",
    PODRECBY: "POD Recibido Por",
    SHIPDATE: "Fecha de Envío",
    TARGETSHIPDATE: "Fecha de Envío Objetivo",
    PODDATE: "Fecha de POD",
    SHIPTRACKNO: "Número de Seguimiento de Envío",
    LOTQTY: "Cantidad de Lote",
    REMQTY: "Cantidad Restante",
    PROCESSEDCLOSEDALERT: "La orden procesada no se puede cerrar",
    WHEREUSED: "Dónde se Utiliza",
    GenrateID: "Generar ID",
    KEY: "Clave",
    NODIMENSION: "No se han definido dimensiones en la configuración multi-dimensional.",
    SAVERECFIRST: "Por favor, guarde el registro primero",
    STATUS: "Estado",
    TRNQTY: "Cant. de Tran",
    ORIGINALFILENAME: "Nombre de Archivo Original",
    DOCUMENTTITLE: "Título del Documento",
    DOCUMENTSUMMARY: "Resumen del Documento",
    PRIORITY: "Prioridad",
    CHECKOUTBY: "CheckOut Por",
    CHECKOUTSTATUS: "Estado de CheckOut",
    CREATEDDATE: "Fecha de Creación",
    CREATEDBY: "Creado Por",
    MODIFIEDDATE: "Fecha de Modificación",
    SHOWACTIVEONLY: "Mostrar Solo Activos",
    READONLYOTHERUSER: "Solo Lectura para Otros Usuarios",
    DOCUMENTS: "Documentos",
    NOTES: "Notas",
    CHECKOUT: "Check Out",
    CHECKIN: "Check In",
    UNDOCHECKOUT: "Deshacer Check Out",
    DELETELINE: "Eliminar Línea",
    ATTACH: "Adjuntar",
    TITLENAME: "Nombre del Título",
    FILENAME: "Nombre del Archivo",
    SUMMARY: "Resumen",
    AUTHORIZEDGROUP: "Grupo Autorizado",
    DOCUMENTCREATEDDATE: "Fecha de Creación del Documento",
    DOCUMENTCREATEDBy: "Creado Por el Documento",
    DOCUMENTMODIFIEDDATE: "Fecha de Modificación del Documento",
    DOCUMENTMODIFIEDBy: "Modificado Por el Documento",
    PLZSELECTFILE: "Por favor, seleccione un archivo",
    ENTERFILENAME: "Ingrese el Nombre del Archivo",
    ENTERAUTHGROUP: "Ingrese el Grupo Autorizado",
    FROM: "Desde",
    TO: "Hasta",
    SCANLOT: "Escanear Lote",
    READFILEFORSUMMARY: "Leer Archivo para Resumen",
    SCANATTACH: "Escanear y Adjuntar",
    RECORDNEWDOCUMENT: "Registrar Nuevo Documento",
    QTYRECEIVED: "Cant. Recibida",
    VIEWPALLET: "Ver Pallet",
    ASSIGNDIMID: "Asignar ID de Dimensión",
    ASSIGNTOROW: "Asignar a Todas las Filas",
    ShipViaKey: "Envío por",
    VendCity: "Ciudad del Proveedor",
    VendName: "Nombre del Proveedor",
    VouchNo: "Número de Comprobante",
    VoucherDate: "Fecha de Comprobante",
    CustCity: "Ciudad del Cliente",
    CustName: "Nombre del Cliente",
    Invdate: "Fecha de Factura",
    SoInvoice: "Número de Factura de Venta",
    TranNo: "Número de Tran",
    ASSIGNDIMENSIONID: "Asignar ID de Dimensión",
    QUERYANALYZER: "Analizador de Consultas",
    ORDERNO: "Número de Orden",
    FILEEXTNOTSUPPORT: "Extensión de archivo no compatible",
    FILENAMENOTMATCH: "El nombre del archivo no coincide con el archivo anterior",
    PRINTLISTLABEL: {
      PRINTINV: 'Imprimir Factura',
      CUSTOMERKEY: "Clave del Cliente",
      CUSTOMERNAME: "Nombre del Cliente",
      ORDERDATE: "Fecha de Orden",
      ORDERTYPE: "Tipo de Orden",
      PROMISEDATE: "Fecha Prometida",
      RECDATE: "Fecha de Recepción",
      RECUSERID: "ID de Usuario de Recepción",
      REQUESTEDDATE: "Fecha Solicitada",
      SOTOTAL: 'Total de la Orden de Venta',
      SALESORDERNO: "Número de Orden de Venta",
      SHIPTOKEY: "Clave de Envío a",
      STATUS: "Estado",
      TRAGETSHIPDATE: "Fecha Objetivo de Envío",
      HOLDINGREASON: "Motivo de Espera",
      TRANNO: "Número de Tran",
      SOINVOICE: "Factura de Venta",
      INVOICEDATE: "Fecha de Factura",
      INVOICETOTAL: "Total de la Factura",
      PRINTVOUCHER: 'Imprimir Comprobante',
      VOUCHNO: "Número de Comprobante",
      FINVOUCHERNO: "Número de Comprobante Financiero",
      PURCHASEORDERNO: "Número de Orden de Compra",
      VENDORKEY: "Clave del Proveedor",
      VENDORNAME: "Nombre del Proveedor",
      VOUCHERDATE: "Fecha de Comprobante",
      VOUCHERTOTAL: "Total del Comprobante"
    },
    LINEITEM: "Ítem de Línea",
    ISSUEDQTY: "Cant. Emitida",
    HOLDORDPRINTMSG: "No se puede imprimir la orden en espera.",
    DUPLICATE: "Duplicado",
    FOUND: "encontrado",
    FROMLOCATION: "Desde Ubicación",
    INVENTORYTRANSFER: "Transferencia de Inventario",
    INVENTORYMOVE: "Movimiento de Inventario",
    DELMSG: "Eliminado Exitosamente.",
    PRMEMPTY: "El parámetro no puede estar vacío",
    SELRPTPRM: "Seleccionar Parámetro de Informe",
    PARAMETER: "Parámetro",
    SAVEMSG: "Guardado Exitosamente",
    QUERYBUILDER: "Constructor de Consultas",
    CLEAR: "Limpiar",
    TESTSQL: "Probar SQL",
    BTN_CONTACT: "Detalles de Contacto",
    QUERYEDITOR: "Editor de Consultas",
    TRANSFER: "Transferir",
    CONTACTLIST: {
      DELTE_HEADER: "Maestro por Lotes",
      TRANSFER: "Los datos de la fila seleccionada se transferirán a la pantalla principal. ¿Desea continuar?",
      CUSTOMER_KEY_REQUIRED: "Ingrese la Clave del Cliente",
      VEND_KEY_REQUIRED: "Ingrese la Clave del Proveedor",
      PROSPECT_KEY_REQUIRED: "Ingrese la Clave del Prospecto",
      NOT_SAVED: "Registro no Guardado.",
      NAME: "Nombre",
      CATEGORY: "Categoría",
      JOB_TITLE: "Título del Trabajo",
      PHONE: "Teléfono",
      EMAIL: "Correo Electrónico",
      QUOTATION: 'Cotización',
      SALESORDER: "Orden de Venta",
      INVOICE: 'Factura'
    },
    ARCHIVECONTRACT: {
      SALESARCHIVECONT: "Archivar Contrato de Venta",
      PURARCHIVECONT: "Archivar Contrato de Compra",
      EXPIRYDATEFROM: "Fecha de Vencimiento Desde",
      EXPIRYDATETO: "Fecha de Vencimiento Hasta",
      CUSTKEY: "Clave del Cliente",
      CUSTNAME: "Nombre del Cliente",
      VENDKEY: "Clave del Proveedor",
      VENDNAME: "Nombre del Proveedor"
    },
    MAILSETTINGS: {
      MAILSETTINGS: "Configuración de Correo",
      SERVER: "Servidor",
      USEREMAIL: "Usuario",
      PASSWORD: "Contraseña",
      PORT: "Puerto",
      ENABLESSL: "Habilitar SSL",
      BCCMAILSENDER: "BCC Correo al Remitente",
      SAVEMAILSETTING: "Configuración de correo guardada correctamente"
    },
    PURCHASEAPPROVERGRP: {
      TITLEPR: "Grupo Aprobador de Compras",
      TITLESR: "Grupo Aprobador de Ventas",
      TITLEFM: "Grupo Aprobador de Fórmulas",
      TITLESRM: "Grupo Aprobador de Muestras",
      TITLECM: "Grupo Aprobador Común",
      ADDPURAPPROVERGROUP: "Agregar Grupo Aprobador de Compras",
      ADDSALAPPROVERGROUP: "Agregar Grupo Aprobador de Ventas",
      ADDFORAPPROVERGROUP: "Agregar Grupo Aprobador de Fórmulas",
      ADDSMAPPROVERGROUP: "Agregar Grupo Aprobador de Muestras",
      ADDCMAPPROVERGROUP: "Agregar Grupo Aprobador Común",
      APPROVER_GROUP: "ID de Grupo",
      DOC_TYPE: "Tipo de Documento",
      DESCRIPTION: "Descripción del Grupo",
      RECDATE: "Fecha de Recepción",
      RECUSERID: "ID de Usuario de Recepción",
      USERSEQNO: "Número de Secuencia de Usuario",
      ACTION: "Acción",
      APPROVER: "Aprobador",
      NAME: "Nombre",
      EMAIL: "Correo Electrónico",
      APPROVERINFORMATION: "Información del Aprobador",
      RESEQUENCE: "Reordenar",
      TYPE: 'Tipo',
      MSG: {
        APPROVERNAMEREQ: "Ingrese Aprobador en la Fila",
        USERSEQNOREQ: "Ingrese el Número de Secuencia del Usuario en la Fila",
        GROUPIDREQ: "Ingrese el ID del Grupo",
        ENTERUSERINFORMATION: "Ingrese la Información del Usuario",
        DUPLICATESEQNO: "Número de Secuencia Duplicado",
        APPROVEREXIST: "El Aprobador ya Existe",
        SAVESEQORDER: "Por favor, Guarde su Registro Después de Eliminar el Ítem de Línea"
      }
    },
    GENERICFORM: {
      BATCHMASTER: 'Maestro por Lotes',
      DELMESSAGE: '¿Eliminar Registro?',
      ASKSAVE: '¿Guardar Registro?',
      YES: 'Sí',
      NO: 'No',
      CANCEL: 'Cancelar',
      MSGDELETE: "No hay datos para eliminar.",
      MSGSAVEFIRST: "Guarde primero el registro.",
      UPLOADPHOTO: "Subir"
    },
    RECORDAUTHORIZATION: {
      USER: "Usuario",
      USERID: "ID de Usuario",
      USER_DESCRIPTION: "Nombre de Usuario",
      GROUPID: "ID de Grupo",
      GROUPDESCRIPTION: "Nombre de Grupo",
      RECUSERID: "ID de Usuario de Recepción",
      RECDATE: "Fecha de Recepción",
      TITLESR: "Autorización de Registro de Ventas",
      TITLEFM: "Autorización de Registro de Fórmulas",
      ADDSALRECORDAUTH: "Agregar Autorización de Registro de Ventas",
      ADDFORRECORDAUTH: "Agregar Autorización de Registro de Fórmulas",
      AUTHORIZEDUSER: "Usuario Autorizado",
      INSERTUSER: "Insertar Usuario",
      READ: "Leer",
      WRITE: "Escribir",
      DELETE: "Eliminar",
      MSG: {
        ALREADYEXIST: "Ya Existe",
        USERIDREQ: "Ingrese ID de Usuario",
        ENTERAUTHORIZEDUSERINFORMATION: "Ingrese la Información de Usuario Autorizado"
      }
    },
    DATAVIEW: {
      TITLE: "Vista de Datos",
      COMPANY: "ID de la Empresa",
      COMPANYNAME: "Nombre de la Empresa",
      SQL: "SQL",
      EXECUTE: "Ejecutar SQL",
      ENTERCOMPANY: "Ingrese el ID de la Empresa",
      ENTERSQL: "Ingrese el SQL",
      MSG: {
        ASKCHECK: "registro(s) Afectado(s)",
        RECORDFOUND: "registro(s) Encontrado(s)",
        ASKSAVE: "¿Desea continuar?"
      }
    },
    GANTTCHART: {
      BATCHNO: "Número de Lote",
      PROCESSCELL: "Celda de Proceso",
      STATUS: "Estado del Lote",
      BATCHTYPE: "Tipo de Lote",
      RESCHEDULE: "Reprogramar",
      MANUAL: "Manual",
      AUTO: "Organización Automática",
      GETBATCHES: "Obtener Lotes",
      REARRANGE: "Rearreglar",
      PREDECESSORBATCH: "Lote Predecesor",
      DELAY: "Retraso",
      SEQNO: "Nro. Sec.",
      COLLAPSEPANE: "Contraer/Expandir Panel",
      SHOWTOOLBAR: "Mostrar/Ocultar Barra de Herramientas",
      UPDATEPROCEES: "Actualizar Celda de Proceso",
      FORWARD: "Adelante",
      BACKWARD: "Atrás",
      SELECTEDBATCH: "Lote Seleccionado",
      FORMULAITEM: "Fórmula ID/Clave del Ítem",
      ORIGSTARTDATE: "Fecha de Inicio Original Programada",
      ORIGENDDATE: "Fecha de Fin Original Programada",
      SCHEDULING: "Programación",
      PASTDUE: "Atrasado",
      SNO: "Nro.",
      STARTDATE: "Fecha de Inicio Programada",
      ENDDATE: "Fecha de Fin Programada",
      REMOVELINK: "Eliminar Enlace",
      ASSIGNLINK: "Asignar Enlace",
      ENTERPROCESSCELL: "Por favor, ingrese la celda de proceso."
    },
    BININQUIRY: {
      TITLE: "Consulta de Contenedor",
      LOOKUPTITLE: 'Búsqueda de Contenedor',
      BIN: 'Contenedor #',
      ITEM: 'Ítem',
      LOCATION: 'Ubicación',
      LOTNUMBER: 'Nro. de Lote',
      ItemKey: 'Clave del Ítem',
      LocationKey: 'Clave de Ubicación',
      LotNo: 'Nro. de Lote',
      QtyAvailable: 'Cantidad Disponible',
      ITEMKEY: 'Ítem',
      LOCATIONKEY: 'Ubicación',
      LOTNO: 'Nro. de Lote',
      QTYAVAILABLE: 'Cantidad Disponible',
      QTYONHAND: 'Cantidad en Mano',
      STOCKUOMCODE: 'UOM',
      DESCRIPTION: 'Descripción del Ítem',
      QtyOnHand: '',
      VIEW: 'Ver',
      CONTAINERTAB: 'Contenedor',
      AISLE: 'Pasillo',
      ROW: 'Fila',
      RACK: 'Estante'
    },
    PALLETINQUIRY: {
      TITLE: "Consulta de Pallet",
      LOOKUPTITLE: 'Búsqueda de Pallet',
      PALLET: 'ID del Pallet',
      ITEMKEY: 'Ítem',
      ITEMDESCRIPTION: 'Descripción del Ítem',
      LOCATIONKEY: 'Ubicación',
      LOTNO: 'Nro. de Lote',
      BINNO: 'Nro. de Contenedor',
      CUSTOMER: 'Cliente',
      SONO: 'Nro. de Orden de Venta',
      STATUS: 'Estado',
      BATCHNO: 'Nro. de Lote',
      COMMENTS: 'Comentarios',
      LOTDETAILS: 'Detalles del Lote',
      PALLETDETAILS: 'Detalles del Pallet',
      STOCKUOMCODE: 'UOM',
      CONTAINERNO: 'Cont',
      QUANTITY: 'Cantidad',
      LOCATION: 'Ubicación',
      QTYONHAND: 'Cantidad en Mano',
      PALLETID: 'ID del Pallet',
      ALLOWPARTISSUESERIALIZATION: 'AP',
      DEFAULTCONTAINERQTY: 'Contenedor Predeterminado',
      PALLETLABEL: 'Etiqueta del Pallet',
      PALLETMENIFEST: 'Manifiesto del Pallet',
      MSG: {
        PALLTEIDREQ: 'El ID del Pallet no puede estar en blanco'
      }
    },
    DOWNLOADERROR: {
      TITLE: "Manejador de Errores de Descarga",
      COMPANYID: "ID de la Empresa",
      COMPANYNAME: "Nombre de la Empresa",
      USERID: "ID de Usuario",
      USERNAME: "Nombre de Usuario",
      DOWNLOADERRORLOG: "Registro de Errores de Descarga",
      CLEARERRORLOG: "Limpiar Registro de Errores",
      ENTERCOMPANY: "Ingrese el ID de la Empresa",
      ENTERUSER: "Ingrese el ID de Usuario",
      NOERRORLOG: "Sin Registro de Errores"
    },
    WMSLOTINQUIRY: {
      TITLE: "Consulta de Lote",
      LOTNO: "Nro. de Lote",
      ITEMKEY: "Clave del Ítem",
      ITEMDESC: "Descripción del Ítem",
      EXPDATE: "Fecha de Vencimiento",
      LOTSTATUS: "Estado del Lote",
      QUARTINEDATE: "Fecha de Cuarentena",
      STOCKUOM: "UOM de Stock",
      DISPUOM: "UOM de Visualización",
      //---------------------------------------------
      QUANTITYTAB: "Cantidad",
      TOTALONHANDQTY: "Cantidad Total en Mano",
      TOTALAVAILABLEQTY: "Cantidad Total Disponible",
      BINNO: "Nro. de Contenedor",
      LOCATION: "Ubicación",
      QTYONHAND: "Cantidad en Mano",
      AVAILABLEQTY: "Cantidad Disponible",
      //---------------------------------------------
      SOURCETAB: "Fuente",
      ITEMTYPE: "Hacer/Comprar",
      DOCDATE: "Fecha de Documento",
      DOCNO: "Nro. de Documento",
      QTY: "Cantidad",
      VENDLOTNO: "Nro. de Lote del Proveedor",
      VENDORKEY: "Clave del Proveedor",
      VENDORNAME: "Nombre del Proveedor",
      //---------------------------------------------
      FEATURETAB: "Características",
      FEATUREID: "ID de Característica",
      DESCRIPTION: "Descripción",
      VALUE: "Valor",
      //---------------------------------------------
      CONTAINERTAB: "Contenedor",
      CONTAINERNO: 'Nro. de Contenedor',
      PALLETNO: 'ID del Pallet',
      COMMENTS: "Comentarios",
      VIEW: 'Ver'
    },
    PASSWORDCONFIGURATION: {
      TITLE: "Configuración de Contraseña",
      PASSWORDRENEWALCYCLE: "Ciclo de Renovación de Contraseña (En Días)",
      MINIMUMPASSWORDLENGTH: "Longitud Mínima de Contraseña (En Caracteres)",
      RESTRICTIONFORSAMEPASSWORD: "Restricción para la misma contraseña (En Días)",
      FAILURELOGINATTEMPTS: "Intentos de Inicio de Sesión Fallidos",
      LOGINDURATIONFORONETIMEPASSWORD: "Duración del Inicio de Sesión para Contraseña de Un Solo Uso (En Días)",
      MAXIMUMALLOWEDINACTIVITYPERIOD: "Período Máximo Permitido de Inactividad (En Días)",
      STRONGPASSWORD: "Contraseña Fuerte",
      MAILANDSMSSETTINGS: "Configuración de Correo y SMS",
      SERVER: "Servidor",
      USER: "Usuario",
      BCCMAILTOSENDER: "BCC Correo al Remitente",
      PASSWORD: "Contraseña",
      ENABLESSL: "Habilitar SSL",
      PORT: "Puerto",
      SMSURL: "URL de SMS"
    },
    TODO: {
      TITLE: "Por Hacer",
      TYPE: "Tipo",
      STATUS: "Estado",
      PRIORITY: "Prioridad",
      CLOSINGPER: "Porcentaje de Completado",
      REQBY: "Solicitado Por",
      DUEDATE: "Fecha de Vencimiento",
      DESC: "Descripción",
      DOCID: "ID del Documento",
      FOLLOWUP: "Seguimiento",
      BUSINESSPARTER: "Socio de Negocios",
      CONTACTPERSON: "Persona de Contacto",
      CONTACTNO: "Número de Contacto",
      EMAILId: "ID de Correo Electrónico",
      COMMENTS: "Comentarios",
      ATTACHEDDOCS: "Documentos Adjuntos",
      ATTACHMENT: "Adjunto",
      ACTIVITYJOUNAL: "Registro de Actividades",
      NEWTODO: "Nuevo Por Hacer",
      FOLLOWUPDATE: "Fecha de Seguimiento",
      SUBJECT: "Asunto",
      REQUESTEDBY: "Solicitado Por",
      ASSIGNEDTO: "Asignado A",
      SUMMARY: "Resumen",
      DATE: "Fecha",
      NEWACTIVITY: "Nueva Actividad",
      INPROGRESS: "En Progreso",
      COMPLETED: "Completado",
      CANCELLED: "Cancelado",
      ASSIGNTODOANOTHERUSER: "Asignar Por Hacer a Otro Usuario",
      DOCUMENTS: "Documentos",
      SHOWBUSINESS: "Mostrar Negocios",
      MYTODO: "Mi Por Hacer",
      ALLUSER: "Todos los Usuarios",
      REASSIGNED: "Reasignado",
      NEWDOCUMENT: "Nuevo Documento",
      MSG: {
        SELECTBUSINESSPARTNER: "Seleccionar Socio de Negocios",
        SELECTFILE: "Seleccionar Archivo",
        DUEDATEGREATERTHANFOLLOWDATE: "La fecha de vencimiento debe ser mayor que la fecha de seguimiento",
        FOLLOWDATENOTLESSTHANCURRENT: "La fecha de seguimiento no debe ser menor que la fecha actual",
        TARGETDATEVALIDATION: "La fecha objetivo no puede estar en blanco",
        CLOSEPERNOTGREATERTHAN100: "El porcentaje de completado no debe ser mayor que el 100"
      }
    },
    ACTIVITYMASTER: {
      TITLE: 'Maestro de Actividades',
      NEWFYI: 'Nuevo FYI',
      TYPE: 'Tipo',
      USER: 'Usuario',
      SUMMARY: 'Resumen',
      DATE: 'Fecha',
      TODO: 'Por Hacer',
      DOCUMENTID: 'ID del Documento',
      BUSSINESSPARTNER: 'Socio de Negocios',
      CONTACTPERSON: 'Persona de Contacto',
      CONTACTNO: 'Número de Contacto',
      EMAILID: 'ID de Correo Electrónico',
      COMMENT: 'Comentarios',
      ATTACHEDDOCS: 'Documentos Adjuntos',
      COMMENTS: 'Comentarios',
      ADDDOCK: 'Agregar Documento',
      TITLEONE: 'Título',
      STATUS: 'Estado',
      MSG: {
        BUSSINESSKEYCANNOTBENULL: 'La clave del negocio no puede estar en blanco'
      }
    },
    WORKFLOW: {
      NEWTODO: 'Nuevo',
      TYPE: 'Tipo',
      PRIORITY: 'Prioridad',
      ASSIGNEDTO: 'Asignado A',
      STATUS: 'Estado',
      DESCRIPTION: 'Descripción',
      COMMENTS: 'Comentarios',
      DUEDAYS: 'Días para Vencimiento',
      CREATEON: 'Creado en',
      PREDECESSOR: 'Predecesor',
      TODOSTATUS: 'Estado de Por Hacer',
      CREATEFYI: 'Crear FYI',
      TITLE: "Lista de Por Hacer",
      MANDATORYFIELDS: 'Por favor, complete los campos obligatorios',
      ASSIGNTOcHECK: "Ingrese Asignado A",
      TODOTYPECHECK: "Seleccione Tipo",
      WORKFLOWACESS: "El flujo de trabajo no es aplicable para esta pantalla.",
      FORMTITLE: 'Configuración de Por Hacer de Flujo de Trabajo'
    },
    FINANCESERIES: {
      TITLE: "Series Financieras",
      ADDFINANCE: "Agregar Serie Financiera",
      TYPE: "Tipo",
      SERIES: "Serie (Opción 1)",
      CUSTOMOPTION: "Personalizado (Opción 2)",
      MNTH: "Mes (Opción 3)",
      RECUSERID: "ID de Usuario de Registro",
      RECDATE: "Fecha de Registro",
      YER: "Año (Opción 4)",
      SEQU: "Número de Secuencia (Opción 5)",
      GENRATEID: "Generar ID",
      MNTHYER: "MesAño",
      AUTOSEQUENCE: "AutoSecuencia",
      REINITALIZE: "Reinicializar",
      USERGROUP: "Grupo de Usuario",
      GENRATESEQUENCE: "Opción de Secuencia",
      SEQUENCEOPTION: "Opción de Secuencia",
      AUTOINSERT: "Insertar Automáticamente Serie para Mes y Año",
      INITIALIZESERIES: "Inicializar Serie para el Mes/Año",
      INITIALIZESERIESMONTH: "Inicializar Serie Desde el Mes",
      DISPLAYFORMAT: "Formato de Visualización",
      MONTH: "Mes",
      YEAR: "Año",
      CHAR3: "3-Carac[01/ENE]",
      CHAR2: "2-Carac[01/02]",
      MSG: {
        DISPLAYVALIDATION: "La longitud de la serie financiera no puede exceder los 12 caracteres",
        INVALIDMONTH: "Mes no válido",
        INVOICESERIES: "Ingrese la serie de facturas (Opción 1)",
        MONTH: "Ingrese el mes (Opción 3)",
        YEAR: "Ingrese el año (Opción 4)",
        SEQU: "Ingrese el número de secuencia (Opción 5)",
        GenrateSequence: "Ingrese la opción de secuencia",
        VALIDMONTH: "Ingrese un año válido"
      }
    },
    username: "Nombre de usuario",
    email: "Correo electrónico",
    status: "Estado",
    MYPROFILE: "Mi Perfil",
    REPORTACTION: "Acción de Reporte",
    PROFILEACTION: "Perfil",
    INQUIRY: "Consulta",
    ITEMINQUIRY: "Consulta de Artículos",
    LOTSPOT: "Se requiere Número de Lote",
    ITEMKEYREQ: "Se requiere Clave de Artículo",
    PALLETNOREQ: "Se requiere Número de Pallet",
    BINNOREQ: "Se requiere Número de Bin",
    CUSTNAME: "Nombre del Cliente",
    Free_Text: "Texto Libre",
    QCITEMPROCESSALERT: "Algunos artículos están en estado de Control de Calidad, estos artículos no se han procesado.",
    Back_Yes_No: "Devolución",
    BLOCKSHELFLIFE: "No hay suficiente vida útil en el estante para el artículo.",
    AVAILABLESHELFLIFE: "La vida útil disponible es",
    REQSHELFLIFE: " y se requiere una vida útil de",
    BACKORDERNOTALLOW: "No se permite Devolución, el Pedido se cerrará.",
    SELECTPARENTQTY: "La cantidad de envío del kit padre debe ser mayor que 0",
    Ref_So: "Núm. Ref. Pedido de Venta",
    FORMSETTING: "Configuración de Formulario",
    ROWSETTING: "Configuración de Fila",
    FOOTERSETTING: "Configuración de Pie de Página",
    GRIDSETTING: "Configuración de Cuadrícula",
    PICKEDGRIDSETTING: "Configuración de Cuadrícula Recogida",
    DROPPEDGRIDSETTING: "Configuración de Cuadrícula Descartada",
    ALLGRIDSETTING: "Configuración de Cuadrícula Total",
    STAGEDGRIDSETTING: "Configuración de Cuadrícula En Staging",
    RELEASEDGRIDSETTING: "Configuración de Cuadrícula Liberada",
    PACKEDGRIDSETTING: "Configuración de Cuadrícula Empacada",
    RESTORE: "Restaurar",
    SELECTEDUSER: "Seleccionar Usuarios",
    SELECTEDUSERS: "Usuarios Seleccionados",
    LABELS: "Etiquetas",
    VISIBLE: "Visible",
    ACTIVE: "Activo",
    BTNVISIBLE: "Botón Visible",
    BTNACTIVE: "Botón Activo",
    MANDATORY: "Obligatorio",
    ACTION: "Acción",
    SAVEFORMSETTING: "Configuración del formulario guardada correctamente",
    RESTOREFORMSETTING: "Configuración del formulario restaurada correctamente",
    RESTOREGRIDSETTING: "Configuración de cuadrícula restaurada correctamente",
    User_Id: "ID de Usuario",
    SELECTALL: "Seleccionar Todo",
    THEME: "Tema",
    DISPLAYREPORT: "Mostrar Reporte",
    ABOUT: "Acerca de",
    SCHEDULER: "Programador de Muelles",
    DOCKKEY: "Nombre del Muelle",
    FROMDATETIME: "Desde Fecha y Hora",
    TODATETIME: "Hasta Fecha y Hora",
    TRUCKNO: "Número de Camión",
    DRIVERNAME: "Nombre del Conductor",
    DRIVERCONTACTNO: "Número de Contacto del Conductor",
    SHIPINGCONTACTNO: "Número de Contacto del Transportista",
    CITY: "Ciudad",
    STATE: "Estado",
    BUSINESSPARTNER: "Socio Comercial",
    ADDEVENT: "Agregar Cita de Muelle",
    EDITEVENT: "Editar Cita de Muelle",
    DOCKKEYLIST: "Lista de Claves de Muelles",
    DOCKNAME: "Nombre del Muelle",
    DOCKTYPE: "Tipo de Muelle",
    SCHEDULEDOCK: "Programar Muelle",
    FETCHUSERSETTINGS: "Obtener Configuraciones de Usuario",
    ACTIONSETTING: "Configuración de Acción",
    WMSEWS: {
      WEIGHINGFOR: "Pesaje Para",
      SELECTEDLOT: "Lote Seleccionado",
      REMAININGQTY: "Cant. Restante",
      SCALEQTY: "Cant. en Báscula",
      SELECTSCALE: "Seleccionar Báscula",
      CLEARALL: "Limpiar Todo",
      WEIGHT: "Peso",
      TOTALQTY: "Cant. Total",
      ACCEPT: "Aceptar",
      SELECTLOT: "Seleccione el Número de Lote.",
      SELECTITEM: "Seleccione la Clave del Artículo.",
      CHKREMQTY: "La cantidad restante debe ser mayor que cero",
      CHKSCALEQTY: "Cant. en Báscula no válida",
      CHKSCALELOTQTY: "La Cant. en Báscula no debe ser mayor que la Cant. de Lote",
      ZEROSCALEQTY: "Ingrese la Cant. en Báscula",
      CHKSELECTSCALE: "Seleccione una Báscula"
    },
    ASSIGNDIMENSIONNOTOPEN: "Aplicable solo para finanzas de BME",
    QUERYWIZARD: {
      ACTION: "Acción",
      TRANSFER: "Generar",
      SEQNO: "Núm. Sec.",
      SQL: "SQL",
      JOIN: "Unir",
      LEVEL: "Nivel",
      PARENTLEVEL: "Nivel Padre",
      FINALSQL: "SQL Final",
      QUERY: "Consulta",
      HIERARCHICALQUERY: "Consulta Jerárquica",
      COLUMN1: "Columna 1",
      HYPERLINK: "Hipervínculo",
      DISPLAYDRILLDOWNFIELD1: "Mostrar Campo de Detalle 1",
      DISPLAYDRILLDOWNFIELD2: "Mostrar Campo de Detalle 2",
      DRILLDOWNFIELD1: "Campo de Detalle 1",
      DRILLDOWNFIELD2: "Campo de Detalle 2",
      HYPERLINKID: "ID de Hipervínculo",
      RECORDKEY1: "Clave de Registro 1",
      RECORDKEY2: "Clave de Registro 2",
      ROUTINGPATH: "Ruta de Enrutamiento",
      SCREENNAME: "Nombre de Pantalla",
      TARGETSCREENNAME: "Nombre de Pantalla de Destino",
      MSG: {
        ENTERSQL: "Ingrese SQL",
        ENTERJOIN: "Ingrese Unión",
        ENTERLEVEL: "Ingrese Nivel",
        ENTERPARENTLEVEL: "Ingrese Nivel Padre",
        ENTERFINALSQL: "Generar SQL Final",
        MASTEREXISTS: "Primero guarde el registro maestro.",
        DELETELEVELCHECKK: "Esta línea tiene un registro padre, no se puede eliminar.",
        NODATASAVE: "No hay datos para guardar.",
        DISPLAYDRILLDOWNFIELD1: "Mostrar Campo de Detalle 1",
        ENTERSCREENNAME: "Ingrese el Nombre de Pantalla",
        ENTERDISPLAYDRILLDOWNFIELD1: "Ingrese el Campo de Detalle 1"
      }
    },
    TEMPLATE_ID: "ID de Plantilla",
    SDSNUMERICVALUE: {
      TITLE: "Información Numérica de SDS",
      CASNUM: "Número CAS",
      CODE: "Código",
      DESCRIPTION: "Descripción",
      VALUE: "Valor",
      NORECOD: "Aún no se han creado registros.",
      CAS: "Número CAS",
      BOILERPLATEGROUP: "Grupo de Textos Estándar",
      ITEM: "Clave del Artículo",
      DES: "Descripción"
    }
  }
};

/***/ }),

/***/ 87544:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/fr.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    'SidebarMenu': {
      "Common": "Commun",
      'Inbound': 'Entrant',
      'Outbound': 'Sortant',
      'Reports': 'Rapports',
      'Internal Movements': 'Mouvements internes',
      'Inquiry and Reports': 'Requête et rapports',
      'Admin': 'Admin',
      'Finance': 'Finance',
      "ChangeCompany": "Changer de société",
      "Dashboard": "Tableau de bord",
      "Favorites": "Favoris",
      "TimeANDExpenses": "Temps et dépenses",
      "Finanace": "Finance",
      "Projects": "Projets",
      "Receivables": "Créances",
      "General Table View": "Vue générale du tableau",
      "SalesOrders": "Commandes clients",
      "Purchase": "Achat",
      "Inventory": "Inventaire",
      "Configuration": "Configuration",
      "WMS Configuration": "Configuration WMS",
      "Put Away": "Mettre de côté",
      "QualityAssurance": "Assurance qualité",
      "Quality Control": "Contrôle de la qualité",
      "Sales": "Ventes",
      "Master": "Maître",
      "ABC": "ABC",
      "Location": "Emplacement",
      "Prospect": "Prospect",
      "Customer": "Client",
      "ShipTo": "Expédier à",
      "SalesTemplate": "Modèle de vente",
      "SalesKit": "Kit de vente",
      "Territory": "Territoire",
      "Salesperson": "Commercial",
      "SalesCommission": "Commission de vente",
      "SalesContract": "Contrat de vente",
      "ArchiveSalesContract": "Archiver le contrat de vente",
      "DisplayArchiveSalesContract": "Afficher le contrat de vente archivé",
      "PriceSearchOrder": "Recherche de prix de commande",
      "PromotionalPricing": "Tarification promotionnelle",
      "PriceMatrix-Customer/Item": "Matrice des prix - Client/Article",
      "PriceMatrix-Customer/Price Group": "Matrice des prix - Client/Groupe de prix",
      "PriceMatrix-Customer Class/Item": "Matrice des prix - Classe client/Article",
      "PriceMatrix-Customer Class/Price Group": "Matrice des prix - Classe client/Groupe de prix",
      "PriceMatrix-Customer Class/Item Class": "Matrice des prix - Classe client/Classe d'article",
      "PriceListMaster": "Maître des listes de prix",
      "RebateMaster": "Maître des remises",
      "RemitTo": "Renvoyer à",
      "SalesRecordAuthorization": "Autorisation d'enregistrement des ventes",
      "InvoiceSeries": "Série de factures",
      "CustomerSpecificQC": "Contrôle qualité spécifique au client",
      "RouteMaster": "Maître des itinéraires",
      "RouteSequence": "Séquence de l'itinéraire",
      "Transactions": "Transactions",
      "Quotation/SalesRequisition": "Devis/Requête de vente",
      "QuickSalesOrderEntry": "Saisie rapide des commandes clients",
      "SalesOrderEntry": "Saisie des commandes clients",
      "PickList": "Liste de prélèvement",
      "MaintainShipment": "Maintenir l'expédition",
      "PrintBillofLading": "Imprimer le connaissement",
      "TransferToInvoice": "Transférer vers la facture",
      "SuperInvoice": "Super facture",
      "DirectInvoice/CreditMemo": "Facture directe/Mémo de crédit",
      "ShipmentRangeProcess": "Traitement de la plage d'expédition",
      "QuotationRangeProcessing": "Traitement de la plage de devis",
      "PackingSlip": "Bon de livraison",
      "LightCRM": "CRM léger",
      "InventoryBillOfLading": "Connaissement d'inventaire",
      "MaterialPackaging": "Emballage matériel",
      "ArchiveSalesOrder": "Archiver la commande client",
      "DisplaySalesOrderHistory": "Afficher l'historique des commandes clients",
      "InvoiceReversal": "Annulation de facture",
      "TruckLoadUtility": "Utilitaire de chargement de camion",
      "MasterReports": "Rapports principaux",
      "SalesContractReport": "Rapport sur les contrats de vente",
      "ProspectReport": "Rapport sur les prospects",
      "CustomerReport": "Rapport client",
      "ShipToReport": "Rapport Expédier à",
      "CustomerItemReport": "Rapport client-article",
      "CustomerClassReport": "Rapport de classe client",
      "CustomerClassItemReport": "Rapport de classe client-article",
      "CustomerByClassReport": "Rapport client par classe",
      "CustomerSalespersonReport": "Rapport client-commercial",
      "SalesCommissionReport": "Rapport de commission de vente",
      "SalespersonReport": "Rapport du commercial",
      "TerritoryReport": "Rapport de territoire",
      "PriceMatrixReport": "Rapport de matrice des prix",
      "SalesKitReport": "Rapport sur les kits de vente",
      "TransactionsReports": "Rapports de transactions",
      "PrintSalesOrderReport": "Imprimer le rapport de commande client",
      "Invoices": "Factures",
      "Pick-ListReport": "Rapport de liste de prélèvement",
      "InventoryCommitmentReport": "Rapport d'engagement d'inventaire",
      "SalesAnalysisReport": "Rapport d'analyse des ventes",
      "SOGrossProfitReport": "Rapport sur la marge brute des commandes clients",
      "SalesOrderHistoryReport": "Rapport d'historique des commandes clients",
      "SalesOrderByItem": "Commandes clients par article",
      "SalesOrderByCustomer": "Commandes clients par client",
      "ShipmentWithOnhandReport": "Rapport d'expédition avec stock en main",
      "ShipmentOverdueReport": "Rapport d'expédition en retard",
      "ShipmentStatusWiseReport": "Rapport d'expédition par état",
      "ShipmentItemWiseReport": "Rapport d'expédition par article",
      "ProductionReconciliation": "Réconciliation de production",
      "MaterialAnalysisReport": "Rapport d'analyse des matériaux",
      "CertificateofAnalysis": "Certificat d'analyse",
      "TruckDeliveryReport": "Rapport de livraison par camion",
      "Customization": "Personnalisation",
      "TaskSetup": "Configuration des tâches",
      "Accounts Payable": "Comptes fournisseurs",
      "Accounts Receivable": "Comptes clients",
      "General Ledger": "Grand livre",
      "Bank/Cash": "Banque/espèces",
      "Finance Configuration": "Configuration financière",
      "R and D": "R et D",
      "BOM": "Nomenclature",
      "Routing": "Itinéraire",
      "Production": "Production",
      "ProcessCell": "Cellule de traitement",
      "Costing": "Coût",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "Fiche client",
      "CustomerSalesperson": "Client commercial",
      "BillofLadingInventoryInfo": "Informations d'inventaire du connaissement",
      "BillofLadingShipToInfo": "Informations d'expédition du connaissement",
      "BillofLadingSetup": "Configuration du connaissement",
      "CustomerItem": "Client article",
      "CustomerClass": "Classe client",
      "CustomerClassItem": "Classe client-article",
      "CustomerSaleableItems": "Articles vendables par client",
      "CustomerGroupSaleableItems": "Articles vendables par groupe de clients",
      "CustomerGroup": "Groupe de clients",
      "SalesApproverGroup": "Groupe d'approbateurs des ventes",
      "SOSeriesMaster": "Maître des séries de commandes clients",
      "DISeriesMaster": "Maître des séries de factures",
      "SalesSetup": "Configuration des ventes",
      "Sample Management": "Gestion des échantillons",
      "NPD/SRM": 'NPD/SRM',
      "CRM": "CRM"
    },
    // SPLITCONTAINER: {
    //     HEADING: "Split Container",
    // },
    "PublisherPortalTitle": "Portail de l'Éditeur",
    "UserManagementTitle": "Gestion des Utilisateurs",
    "ListExportToExcel": "Exporter vers Excel",
    "ListExportToPdf": "Exporter vers PDF",
    "UserManagementAddUser": "Ajouter un Utilisateur",
    "ListPrint": "Imprimer",
    "ListColumn": "Colonnes",
    "ListPermissions": "Permissions",
    "CommonInvitedBy": "Invité par",
    "ListJoinedOn": "Rejoint le",
    "ListRole": "Rôle",
    "UserAdmin": "Administrateur",
    "CommonOther": "Autre",
    "CommonStatus": "Statut",
    "UserActive": "Actif",
    "UserInActive": "Inactif",
    "CommonAction": "Action",
    "UserAddForm": "Formulaire Nouvel Utilisateur",
    "UserEditForm": "Formulaire de Modification de l'Utilisateur",
    "CommonFirstName": "Prénom",
    "CommonFirstNameRequired": "Le prénom est requis.",
    "CommonLastName": "Nom de Famille",
    "CommonLastNameRequired": "Le nom de famille est requis.",
    "CommonInviteEmail": "Courriel d'Invitation",
    "CommonEmail": "Courriel",
    "CommonEmailRequired": "Le courriel est requis.",
    "CommonInvalidEmail": "Adresse courriel invalide.",
    "CommonSetPassword": "Définir le Mot de Passe",
    "CommonPassword": "Mot de Passe",
    "CommonPasswordRequired": "Le mot de passe est requis.",
    "CommonInvalidPassword": "Mot de passe invalide.",
    "CommonPhone": "Téléphone",
    "CommonInvitedOn": "Invité le",
    "CommonInvite": "Inviter",
    "CommonCancel": "Annuler",
    "CommonSave": "Enregistrer",
    "CommonUser": "Utilisateur",
    "CommonConcurrencyError": "Veuillez rafraîchir votre écran et réessayer.",
    "CommonUnhandleError": "Désolé, une erreur est survenue. Veuillez réessayer ultérieurement. Nous apprécierions tout commentaire ou détails sur ce qui s'est mal passé.",
    "CommonBrandingSettings": "Paramètres de Marque",
    "CommonBusinessName": "Nom de l'Entreprise",
    "CommonSelectTheme": "Sélectionner le Thème",
    "CommonConfiguration": "Configuration",
    "CommonBasicDetails": "Détails de Base",
    "CommonCompany": "Nom de l'Entreprise",
    "CommonCompanyNameIsRequired": "Le nom de l'entreprise est requis",
    "CommonBusinessID": "ID de l'Entreprise",
    "CommonCompanyID": "ID de l'Entreprise",
    "CommonAddress": "Adresse",
    "CommonAddressIsRequired": "L'adresse est requise",
    "CommonPrimaryAdmin": "Administrateur Principal",
    "CommonPreAdminEmail": "Courriel de l'Administrateur Préliminaire",
    "CommonBusinessPortalURL": "URL du Portail de l'Entreprise",
    "CommonPartnerPortalURL": "URL du Portail du Partenaire",
    "CommonSubscriptionDetails": "Détails de l'Abonnement",
    "CommonPlanName": "Nom du Plan",
    "CommonWantToChange?": "Vous voulez changer?",
    "CommonActivationDate": "Date d'Activation",
    "CommonEndDate": "Date de Fin",
    "CommonMaximumUsers": "Utilisateurs Maximum",
    "CommonPaymentCycle": "Cycle de Paiement",
    "CommonPriceInUSD": "Prix (en USD)",
    "CommonGracePeriod": "Période de Grâce (en Jours)",
    "CommonAutoRenewal": "Renouvellement Automatique",
    "CommonCreditCardInfo": "Informations de la Carte de Crédit",
    "CommonCreditCardNumberIsRequired": "Le numéro de carte de crédit est requis",
    "CommonChange": "Changer",
    "CommonCustomerName": "Nom du Client",
    "CommonTax": "Taxe",
    "CommonShipping": "Expédition",
    "CommonDiscount": "Remise",
    "CommonSubTotal": "Sous-Total",
    "CommonLineItemOn": "Article de Ligne le",
    "CommonDueDate": "Date d'Échéance",
    "CommonGeneratedOn": "Généré le",
    "CommonOrderID": "ID de Commande",
    "CommonPONumber": "Numéro de Bon de Commande",
    "CommonInvoiceName": "Nom de la Facture",
    "CommonInvoiceNumber": "ID de la Facture",
    "CommonOrderInfo": "Informations sur la Commande",
    "CommonCustomerInfo": "Informations sur le Client",
    "CommonInvoiceDetails": "Détails de la Facture",
    "CommonPaidAmount": "Montant Payé",
    "CommonCustomerNotes": "Notes du Client",
    "CommonCustomerNote": "Note du Client",
    "CommonItemCode": "Code de l'Article",
    "CommonQuantity": "Quantité",
    "CommonPrice": "Prix ",
    "CommonPricePerunit": "Prix Unitaire",
    "CommonTotal": "Total",
    "CommonLastMonth": "Le Mois Dernier",
    "CommonLast3Months": "Les 3 Derniers Mois",
    "CommonLast6Months": "Les 6 Derniers Mois",
    "CommonThisYear": "Cette Année",
    "CommonDeletedInvoices": "Factures Supprimées",
    "CommonApply": "Appliquer",
    "CommonOriginal": "Original",
    "CommonOutstanding": "En Attente",
    "CommonAmountPayable": "Montant à Payer",
    "CommonPaymentMode": "Mode de Transaction",
    "CommonACHPayment": "Paiement ACH",
    "CommonACH": "ACH",
    "CommonBankName": "Nom de la Banque",
    "CommonBankAccountName": "Nom du Compte Bancaire",
    "CommonAccountNumber": "Numéro de Compte",
    "CommonABARoutingNumber": "Numéro de Routage ABA",
    "CommonAccountType": "Type de Compte",
    "CommonSECCode": "Code SEC",
    "CommonTrermsAgreement": "J'accepte de faire le paiement depuis mon compte bancaire mentionné ci-dessus.",
    "CommonNotes": "Notes",
    "CommonPaymentForm": "Formulaire de Paiement",
    "CommonCreditCardPayment": "Paiement par Carte de Crédit",
    "CommonPaymentOn": "Transaction le",
    "CommonContactPersonDetails": "Détails de la Personne de Contact",
    "CommonVoidPayment": "Annuler",
    "CommonRefundPayment": "Remboursement",
    "CommonAmount": "Montant",
    "CommonSubTotalAmount": "Le Sous-Total est requis.",
    "Commonblank": "(vide)",
    "CommonRequiredValidation": "Cette information est requise.",
    "CommonIpaymentBusinessPortal": "Portail d'Affaires iPayment",
    "CommonVersion": "Version",
    "CommonChangePassword": "Changer le Mot de Passe",
    "CommonCurrentPassword": "Mot de Passe Actuel",
    "CommonForgotYourPassword?": "Mot de passe oublié ?",
    "CommonNewPassword": "Nouveau Mot de Passe",
    "CommonConfirmPassowrd": "Confirmer le Mot de Passe",
    "CommonSignInToYourCompany": "Connectez-vous à votre Entreprise",
    "CommonUpcomingPayments": "Prochains Paiements",
    "CommonRecentPayment": "Paiements Récents",
    "CommonTotalOpenInvoices": "Total des Factures Ouvertes",
    "CommonPartialPaidInvoicesOpen": "Factures Partiellement Payées (Ouvertes)",
    "CommonTotalPaidInvoices": "Total des Factures Payées",
    "CommonPaidInvoicesLastWeek": "Factures Payées (La Semaine Dernière)",
    "CommonPaidLastWeek": "Payé (La Semaine Dernière) $",
    "CommonPaymentsDoneInUSD": "Paiements Effectués (en USD)",
    "CommonEditTicketForm": "Formulaire de Modification du Ticket",
    "CommonCreatedBy": "Créé par",
    "CommonCreatedOn": "Créé le",
    "CommonContactEmail": "Courriel de Contact",
    "CommonCustomerDetails": "Détails du Client",
    "CommonIssueDetails": "Détails de Problème",
    "CommonTitle": "Titre",
    "CommonTitleIsRequired": "Le titre est requis.",
    "CommonDescription": "Description",
    "CommonDescriptionIsRequired": "La description est requise.",
    "CommonTicketID#": "ID du Ticket",
    "CommonPriority": "Priorité",
    "CommonAssignedTo": "Assigné à",
    "CommonModifiedOn": "Modifié le",
    "CommonModifiedBy": "Modifié par",
    "CommonAttachment": "Pièce Jointe",
    "CommonAddYourComments": "Ajoutez Vos Commentaires",
    "CommonAddYourComment": "Ajoutez Votre Commentaire",
    "CommonComments": "Commentaires",
    "CommonDeletedTickets": "Tickets Supprimés",
    "CommonTenantName": "Nom du Locataire",
    "CommonLow": "Faible",
    "CommonMedium": "Moyen",
    "CommonHigh": "Élevé",
    "CommonOpen": "Ouvert",
    "CommonOnHold": "En Attente",
    "CommonResolved": "Résolu",
    "CommonClosed": "Fermé",
    "CommonNewTicketForm": "Nouveau Formulaire de Ticket",
    "CommonCreate": "Créer",
    "CommonBusinessDetails": "Autres Détails",
    "CommonAddTicket": "Nouveau Ticket",
    "CommonTicketId": "ID du Ticket",
    "CommonNewCustomerForm": "Nouveau Formulaire de Client",
    "CommonGeneral": "Général",
    "CommonPaymentDetails": "Détails de Transaction",
    "CommonContactInfo": "Infos de Contact",
    "CommonAdminUserDetails": "Détails de l'Utilisateur Administrateur",
    "CommonApplicationsDetails": "Détails des Applications",
    "CommonEnabledServices": "Services Activés",
    "CommonCustomerPortalURL": "URL du Portail Client",
    "CommonCreditCardDetails": "Détails de la Carte de Crédit",
    "CommonSavedCreditCards": "Cartes de Crédit Enregistrées",
    "CommonNameOnCard": "Nom sur la Carte",
    "CommonCardExpiry": "Expiration de la Carte",
    "CommonCardNumber": "Numéro de Carte",
    "CommonExpiry": "Expiration",
    "CommonCVV": "CVV",
    "CommonCardType": "Type de Carte",
    "CommonAddCreditCard": "Ajouter une Carte de Crédit",
    "CommonACHPaymentDetails": "Détails du Paiement ACH",
    "CommonCustomerAddress": "Adresse du Client",
    "CommonSameAsAboveAddress": "Identique à l'adresse ci-dessus",
    "CommonSaveInvite": "Enregistrer et Inviter",
    "CommonEditCustomerForm": "Formulaire de Modification du Client",
    "CommonCustomer": "Client",
    "CommonAddCustomer": "Ajouter un Client",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "Commandes en Cours",
    "CommonInvoice": "Facture",
    "CommonUpcomingDeliveryDate": "Prochaine Livraison",
    "CommonLastDeliveryOn": "Dernière Livraison le",
    "CommonTotalSalesOrder": "Total des Commandes",
    "CommonPending": "En Attente",
    "Common(Pending)": "(En Attente)",
    "CommonDetails": "Détails",
    "CommonDesktop": "Bureau",
    "CommonSMS": "SMS",
    "CommonHelpDeskNotifications": "Notifications du Service d'Assistance",
    "CommonMyTicketStatusIsChanged": "Le statut de mon ticket a été modifié.",
    "CommonCustomerTicketStatusIsChanged": "Le statut du ticket du client a été modifié.",
    "CommonMyTicketIsReassigned": "Mon ticket a été réassigné.",
    "CommonCustomerTicketIsReassigned": "Le ticket du client a été réassigné.",
    "CommonMyTicketPriorityIsChanged": "La priorité de mon ticket a été modifiée.",
    "CommonCustomerTicketPriorityIsChanged": "La priorité du ticket du client a été modifiée.",
    "CommonNewCommentAddedInMyTicket": "Un nouveau commentaire a été ajouté à mon ticket.",
    "CommonNewCommentAddedInCustomerTicket": "Un nouveau commentaire a été ajouté au ticket du client.",
    "CommonInvoiceNotifications": "Notifications de Facturation",
    "CommonInvoicePaymentIsReceived": "Le paiement de la facture a été reçu.",
    "CommonCustomersReport": "Rapport des Clients",
    "CommonLastWeek": "La Semaine Dernière",
    "CommonFrom": "De",
    "CommonTo": "À",
    "CommonTotalInvoices": "Total des Factures",
    "CommonOpenInvoices": "Factures Ouvertes",
    "CommonCustomerWisePaymentReport": "Rapport de Paiement par Client",
    "CommonPartialPaidInvoices": "Factures Partiellement Payées",
    "CommonPaidInvoices": "Factures Payées",
    "CommonCreditAmount": "Montant de Crédit",
    "CommonInvoicesReport": "Rapport des Factures",
    "CommonPaidOn": "Payé le",
    "CommonAmountPaid": "Montant Payé",
    "CommonPaymentReceivedReport": "Rapport de Paiement Reçu",
    "CommonPaymentType": "Type de Paiement",
    "CommonInvoiceID": "ID de la Facture",
    "CommonOriginalAmount": "Montant Original",
    "CommonPortalUsersReport": "Rapport des Utilisateurs du Portail",
    "CommonTicketsReport": "Rapport des Tickets",
    "CommonInvoicesDetails": "Détails des Factures",
    "CommonBankAccountNameIsRequired ": "Le nom du compte bancaire est requis.",
    "AccountNumberIsRequired": "Le numéro de compte est requis.",
    "CommonABARoutingNumberIsRequired": "Le numéro de routage ABA est requis.",
    "CommonOriginated": "Initié",
    "CommonReturned": "Retourné",
    "CommonSetteled": "Réglé",
    "CommonOk": "OK",
    "CommonMsgPaymentHistory": "Vous pouvez fermer cette fenêtre et consulter l'historique des transactions.",
    "CommonInvoiceNumb": "Numéro de la Facture",
    "CommonPaid": "Payé",
    "CommonDue": "Dû",
    "CommonBlueStar": "BlueStar",
    "CommonBillToAddress": "Adresse de Facturation",
    "CommonlineItemsOn": "Articles de Ligne le",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "Annulé",
    "CommonVoid": "Annuler",
    "CommonVoidRequested": "Demande d'Annulation",
    "CommonRefundRequested": "Demande de Remboursement",
    "CommonRefunded": "Remboursé",
    "CommonRefundCancelled": "Remboursement Annulé",
    "CommonVeriCheckACH ": "VeriCheck ACH ",
    "CommonMonthly": "Mensuel",
    "CommonQuartly": "Trimestriel",
    "CommonHalfyearly": "Semestriel",
    "CommonYearly": "Annuel",
    "CommonNewInvoiceForm": "Nouveau Formulaire de Facturation",
    "CommonSTEP": "STEP",
    "CommonPrefix": "Préfixe",
    "Commonselect": "sélectionner",
    "CommonAddNew": "Ajouter Nouveau",
    "CommonNumber": "Numéro",
    "CommonTaxRate": "Taux de Taxe",
    "CommonAddMoreItems": "Ajouter Plus d'Articles",
    "CommonNext": "Suivant",
    "CommonBack": "Retour",
    "CommonDone": "Terminé",
    "CommonLastLogin": "Dernière Connexion :",
    "CommonAdmin": "Admin",
    "CommonBusinessPortal": "Portail d'Affaires",
    "CommonMyProfile": "Mon Profil",
    "CommonChangePassword ": "Changer le Mot de Passe ",
    "CommonSync": "Synchroniser",
    "CommonPreferences": "Préférences",
    "CommonAbout": "À Propos",
    "CommonLogout": "Déconnexion",
    "CommonToggleNavigation": "Basculer la Navigation",
    "CommonHome": "Accueil",
    "CommonCustomers": "Clients",
    "CommonInvoices": "Factures",
    "CommonPaymentHistory": "Historique des Transactions",
    "CommonReports": "Rapports",
    "CommonPaymentReceived": "Paiement Reçu",
    "CommonCustomerWisePayment": "Paiement par Client",
    "PortalUsers": "Utilisateurs du Portail",
    "CommonTickets": "Tickets",
    "CommonBusinessPortalSettings": "Paramètres du Portail d'Affaires",
    "CommonConfigurations": "Configurations",
    "CommonAlerts": "Alertes",
    "CommonHelpDesk": "Service d'Assistance",
    "CommonCustomerTickets": "Tickets des Clients",
    "CommonMyTickets": "Mes Tickets",
    "CommonDocumentation": "Documentation",
    "CommonPoweredBy": "Propulsé par",
    "CommonCompanyPortalSettings": "Paramètres du Portail de l'Entreprise",
    "CommonCustomerPortalSettings": "Paramètres du Portail Client",
    "CommonDelete": "Supprimer",
    "CommonNoResultFound": "Aucun Résultat trouvé",
    "CommonPaymentDate": "Date de Transaction",
    "CommonInvoicesStatus": "Statut des Factures",
    "CommonPaymentsDoneInLast6Months": "Paiements effectués au cours des 6 derniers mois",
    "CommonRecentTranscations": "Transactions Récentes",
    "CommonCompletedOrder(Closed)": "Terminé",
    "CommonOpenOrders(Open)": "Ouvert",
    "CommonPartialDeliveredOrder(Open)": "Partiellement Livré",
    "CommonServices": "Services",
    "CommonPartnerCompanySubDomain": "Sous-Domaine de l'Entreprise Partenaire",
    "CommonPortalDetails": "Détails du Portail",
    "CommonPortalURL": "URL du Portail",
    "CommonEdit": "Modifier",
    "CommonAddAnAccount": "Ajouter un Compte",
    "CommonPayments": "Paiements",
    "CommonNewAttachmentAddedInMyTicket": "Nouvelle Pièce Jointe ajoutée à Mon Ticket.",
    "CommonNewAttachmentAddedInCustomerTicket": "Nouvelle Pièce Jointe ajoutée au Ticket du Client.",
    "CommonRefreshStatus": "Actualiser le Statut",
    "CommonID#": "ID#",
    "CommonSubscription": "Abonnement",
    "CommonCompanySubDomain": "Sous-Domaine de l'Entreprise",
    "CommonMyPortalURL": "Mon URL du Portail",
    "CommonPortalLocalizationSettings": "Paramètres de Localisation du Portail",
    "CommonDeletedOn": "Supprimé le",
    "CommonDeletedBy": "Supprimé par",
    "CommonNewInvoiceisgenerated": "Une nouvelle facture a été générée.",
    "CommonInvoicepaymentstatusischanged": "Le statut de paiement de la facture a été modifié.",
    "CommonExistingInvoiceiscancelled": "La facture existante a été annulée.",
    "CommonOrderId": "ID de Commande",
    "CommonStartDate": "Date de Début",
    "CommonNextPaymentdate": "Prochaine Transaction le",
    "CommonRecurringPeriod": "Fréquence de Paiement",
    "CommonRecurringTerms": "Termes de Paiement",
    "CommonTermAmount": "Montant à Chaque Paiement",
    "CommonRemainingPayCounts": "Nombre de Paiements Restants",
    "CommonOrderAmount": "Montant de la Commande",
    "CommonAddRecurring": "Ajouter un Paiement Récurrent",
    "CommonOrderIdRequired": "L'ID de la commande est requis.",
    "CommonRecurringTermRequired": "La période doit être supérieure à 0.",
    "CommonRecurringTermAmountRequired": "Le montant de la période doit être supérieur à 0.",
    "CommonWebsiteValidation": "URL du site web invalide.",
    "CommonNoRecordsAvailable": "Aucun enregistrement créé.",
    "CommonPaymentDone": "Paiement Effectué",
    "CommonPaymentDoneReport": "Rapport des Paiements Effectués",
    "CommonByJoiningYouAgreeToOur": "En vous joignant, vous acceptez nos",
    "CommonTerms": "Conditions",
    "CommonPrivacyPolicy": "Politique de Confidentialité.",
    "CommonAnd": "et",
    "CommonEnterYourCompanyID": "Saisissez l'URL de votre Entreprise",
    "CommonDontRememberCompanyID": "Vous ne vous souvenez pas de votre Sous-Domaine ?",
    "CommonClickHere": "Cliquez ici",
    "CommonWantToCreate": "Vous souhaitez créer un nouveau compte d'entreprise ?",
    "CommonFindMyCompanyID": "Trouver Mon Sous-Domaine !",
    "CommonFindMyCompanyIDTitle": "Nous vous enverrons un e-mail pour confirmer votre ID de connexion et trouver votre Sous-Domaine par lequel vous pourrez rejoindre.",
    "CommonEnterYourEmail": "Entrez votre e-mail",
    "CommonContinue": "Continuer",
    "CommonCheckYourEmail": "Vérifiez votre e-mail !",
    "CommonCheckYourTitle": "Nous vous avons envoyé un lien pour",
    "CommonGetStartedTitle": "Cliquez sur le lien et commencez.",
    "CommonEnteredWrongEmail": "Vous avez saisi une mauvaise adresse e-mail ?",
    "CommonItemName": "Nom de l'Article",
    "CommonQuickpay": "Générer une URL de Paiement Rapide",
    "PFCommonPermission": "Permission",
    "PFCommonPermissions": "Permissions",
    "PFCommonPortalUsers": "Utilisateurs du Portail",
    "PFCommonUsers": "Utilisateurs",
    "PFCommonUser": "Utilisateur",
    "PFCommonActive": "Actif",
    "PFCommonInActive": "Inactif",
    "PFCommonAdmin": "Admin",
    "PFCommonAction": "Action",
    "PFCommonPending": "En Attente",
    "CommonPortalOwnerName": "Nom du Propriétaire du Portail",
    "CommonPoweredByText": "Propulsé par Texte",
    "CommonCopyrightText": "Droits d'Auteur",
    "CommonPublisherPortalTheme": "Thème du Portail de l'Éditeur",
    "CommonTenantTickets": "Tickets de l'Entreprise",
    "CommonTenantID": "ID de l'Entreprise",
    "CommonAdd": "Ajouter",
    "CommonDragDropFileText": "Faites glisser et déposez des fichiers ici ou cliquez sur Télécharger.",
    "CommonValidFileFormatMsg": "Veuillez saisir un format de fichier valide. Les formats de fichier pris en charge sont : JPG, JPEG, TIFF, GIF, PNG, WEBP, SVG, BMP, TIF, ICO.",
    "CommonError": "Erreur",
    "CommonFileSizeError": "La taille du fichier est trop grande. Veuillez sélectionner un fichier d'une taille allant jusqu'à 10 Mo.",
    "CommonMoreThanOneFileError": "Plusieurs fichiers ne sont pas autorisés",
    "CommonOrderNameRequired": "Le nom de la commande est requis.",
    "CommonPackageNameRequired": "Le type de package est requis.",
    "CommonFillAllRequiredFeildErrorMsg": "Veuillez remplir tous les champs obligatoires et fournir des données valides.",
    "CommonContactUs": "Contactez-nous",
    "CommonContactFormTitle": "Saisissez votre message ci-dessous. Nous vous répondrons dans les plus brefs délais !",
    "CommonMessage": "Message",
    "CommonMailingAddress": "Adresse postale",
    "CommonSend": "Envoyer",
    "CommonUpcomingShipments": "Expéditions à venir",
    "CommonRecentShipments": "Expéditions récentes",
    "CommonDeliveryID": "ID de livraison",
    "CommonPostedOn": "Posté le",
    "CommonShippingNo": "Numéro d'expédition",
    "CommonShipmentHistory": "Historique d'expédition",
    "CommonTrackingNo": "Numéro de suivi",
    "CommonPackages": "Colis",
    "CommonCarrier": "Transporteur",
    "CommonDestination": "Destination",
    "CommonPickUpOn": "Ramassé le",
    "CommonDeliveredOn": "Livré le",
    "CommonDeliveryDate": "Date de livraison",
    "CommonOrderName": "Nom de la commande",
    "CommonNoPackageValidationMessage": "Au moins un colis doit être ajouté pour obtenir un devis d'expédition.",
    "CommonNoCarrierValidationMessage": "Au moins un transporteur doit s'abonner.",
    "CommonPlanSelectionValidationMessage": "Sélectionnez un plan de transporteur valide.",
    "CommonGenerateQuoteAgainValidationMessage": "Le formulaire a été modifié. Veuillez générer à nouveau le devis.",
    "CommonAddressDetails": "Détails de l'adresse",
    "CommonConfigurationSavedMsg": "Vos modifications ont été enregistrées avec succès.",
    "Common4X6LabelPrinter": "Imprimante d'étiquettes 4X6",
    "CommonTraditionalPrinters": "Imprimantes traditionnelles",
    "CommonCarriersInfo": "Informations sur les transporteurs",
    "CommonAddresses": "Adresses",
    "CommonNewAddress": "Nouvelle adresse",
    "CommonValidateAddress": "Valider l'adresse",
    "CommonVerifiedBy": "Vérifié par",
    "CommonLabel": "Étiquette",
    "CommonPrintingInfo": "Informations d'impression",
    "CommonContactPerson": "Personne à contacter",
    "CommonDecimalValues": "Valeurs décimales",
    "CommonGroupingDecimalSeparator": "Séparateur de groupement et décimal",
    "CommonGroupingValues": "Valeurs de groupement",
    "CommonCurrencyLocalization": "Localisation de la devise",
    "CommonDesignation": "Désignation",
    "CommonSubDomain": "Sous-domaine",
    "CommonAccountNo": "Numéro de compte",
    "CommonValidate": "Valider",
    "CommonNoOfDeliveries": "Nombre de livraisons",
    "CommonNoOfSalesOrderDeliveries": "Nombre de commandes de vente",
    "CommonNoOfSalesAmount": "Montant des ventes",
    "CommonTopMostValuableCustomer": "Top 5 des clients les plus précieux",
    "CommonTotalOpenOrders": "Total des commandes en cours",
    "CommonPartialDeliveredOrders": "Commandes partiellement livrées",
    "CommonCompletedOrders": "Commandes terminées",
    "CommonPendingShipping": "Expéditions en attente",
    "CommonTotalShipping": "Total des expéditions",
    "CommonTotalSales": "Total des ventes",
    "CommonTotalSalesinLast6Months": "Total des ventes au cours des 6 derniers mois",
    "CommonSalesOrdersStatus": "Statut des commandes de vente",
    "CommonSalesOrders": "Commandes de vente",
    "CommonShippingStatus": "Statut de l'expédition",
    "CommonShipmentByCarrier": "Expédition par transporteur",
    "CommonTotalDeliveriesinlast6months": "Total des livraisons au cours des 6 derniers mois",
    "CommonQty": "Quantité",
    "CommonValue": "Valeur",
    "CommonTop5mostvaluablecustomers": "Top 5 des clients les plus précieux",
    "CommonDeliveriesAcrossGlobe": "Livraisons à travers le monde",
    "CommonAddressErrorMsg": "Au moins une adresse est requise.",
    "CommonCurrencyLocalizationsConfirmMsg": "Cela sauvegardera définitivement vos localisations de devise.",
    "CommonConfirmation": "Confirmation",
    "CommonService": "Service",
    "CommonShipConfirm": "Voulez-vous expédier cette commande de vente ?",
    "CommonCarriers": "Transporteurs",
    "CommonShipFromAddresses": "Adresses d'expédition",
    "CommonBusinessAddresses": "Adresses de l'entreprise",
    "CommonNewItem": "Nouvel article",
    "CommonPackageItemEqlDistributionMsg": "Il y a un déséquilibre entre les articles de commande de vente et les articles emballés. Veuillez ajuster les modifications et générer à nouveau le devis.",
    "CommonPackageAllItemDistributionMsg": "Veuillez emballer tous les articles de la commande de vente avant de générer le devis.",
    "CommonZeroItemInItemMaster": "Aucun article n'est disponible dans la liste des articles à ajouter. Ajoutez d'abord un article dans la liste des articles.",
    "CommonShipFromAddressErrorMsg": "Au moins une adresse d'expédition est requise.",
    "TOTALRECORDS": "Total des enregistrements",
    "VIEWITEMLOCATION": "Voir l'emplacement de l'article",
    "SELECTLOTFEATUREWISE": "Sélectionnez les caractéristiques du lot",
    "ITEMKEY": "Clé de l'article",
    "DESCRIPTION": "Description",
    "LOCATION": "Emplacement",
    "LOCATIONDITAIL": "Détail de l'emplacement",
    "LOTBINDITAIL": "Détail du lot/Bin No",
    "STOCKUOM": "UOM de stock",
    "DISPLAYUOM": "UOM d'affichage",
    "COMMITTOPRODUCTION": "Qté engagée pour la production",
    "COMMITTOSALES": "Qté engagée pour les ventes",
    "DESC1": "Desc1",
    "EOQ": "Quantité économique de commande (EOQ)",
    "INCLASSKEY": "Clé de la classe d'articles",
    "MULTIPLEBINSREQ": "Bacs multiples requis",
    "QTYONHAND": "Qté en stock",
    "QTYONORDER": "Qté en commande",
    "QTYOVERSOLD": "Qté en surplus de vente",
    "SERIALLOTFLG": "Indicateur de série/lot",
    "STATUSCODE": "Code de statut",
    "STOCKUOMCODE": "Code UOM de stock",
    "TRANSITIN": "Transit entrant",
    "TRANSITOUT": "Transit sortant",
    "QTYUNDERPURCHASEQC": "Qté en dessous du contrôle qualité achat",
    "QTYUNDERINVENTORYQC": "Qté en dessous du contrôle qualité inventaire",
    "QTYONORDERDETAILS": "Détails de la quantité en commande",
    "QTYCOMMITTOSALESDETAILS": "Détails de la quantité engagée pour les ventes",
    "QTYCOMMITTOPRODUCTIONDETAILS": "Détails de la quantité engagée pour la production",
    "TRANSACTION": "Transaction",
    "TRANSACTIONNO": "Numéro de transaction",
    "TRANSACTIONDATE": "Date de transaction",
    "TRANSACTIONTYPE": "Type de transaction",
    "AVGLOTSTR": "Force moyenne du lot",
    "LOTSTRENGTH": "Force du lot",
    "QTYREQ": "Qté requise",
    "LOTQTYSEL": "Qté de lot sélectionnée",
    "SOLVENTQTY": "Qté de solvant sélectionnée",
    "STRDSTRENGTH": "Force standard",
    "COMMITDOCNO": "Numéro de document d'engagement",
    "VENDKEY": "Clé du fournisseur",
    "TOTALHOLD": "Total en attente",
    "TOTAL": "Total",
    "CUSTKEY": "Clé du client",
    "QTYCOMMITTOSALES": "Qté engagée pour les ventes",
    "QTYCOMMITTOPRODUCTION": "Qté engagée pour la production",
    "QTYCOMMIT": "Qté engagée",
    "BINNO": "Numéro de bac",
    "DATEEXPIRY": "Date d'expiration",
    "DATEQUARANTINE": "Date de mise en quarantaine",
    "DATERECEIVED": "Date de réception",
    "LOTNO": "Numéro de lot",
    "LOTSTATUS": "Statut du lot",
    "QTYCOMMITSALES": "Qté engagée pour les ventes",
    "RECUSERID": "ID utilisateur de réception",
    "RECDATE": "Date de réception",
    "VENDORKEY": "Clé du fournisseur",
    "VENDORLOTNO": "Numéro de lot du fournisseur",
    "QUANTITY": "Quantité",
    "SALESUOMCODE": "Code UOM des ventes",
    "QTYCOMMITPROD": "Qté engagée pour la production",
    "ITEMTYP": "Type d'article",
    "PRICEGRP": "Groupe de prix",
    "STDCOST": "Coût standard",
    "AVGCOST": "Coût moyen",
    "LSTCOST": "Coût dernier",
    "BASEPRICE": "Prix de base",
    "REVACCT": "Compte de revenus",
    "SALESTAXKEY": "Clé de taxe de vente",
    "DESC2": "Desc2",
    "SALETOSTKCNVFCTR": "Conversion de vente à stock",
    "INACCT": "Compte d'entrée",
    "InserLineInventory": "Recherche d'inventaire",
    "InsertLineInventory": "Recherche d'inventaire",
    "InserLineNonInventory": "Recherche non-inventaire",
    "InsertLineNonInventory": "Recherche non-inventaire",
    "InsertLineCustFavorite": "Recherche des favoris du client",
    "InsertLineCustFavourate": "Recherche des favoris du client",
    "CustFavouriteItems": "Ajouter un article favori du client",
    "AddCustItem": "Ajouter un article client",
    // Ordno: 'SO Series',
    "Custkey": "Clé client",
    "Shipkey": "Expédition à",
    "Reference": "Référence",
    "Salespkey": "Représentant commercial",
    "Tax_key": "Taux de taxe",
    "Tax": "Clé de taxe",
    "AccountKey": "Plan comptable",
    "PromAccountKey": "Plan comptable",
    "Fobkey": "FOB (Franco à bord)",
    "Commentkey": "Commentaires",
    "Shipviakey": "Expédition via",
    "Territkey": "Territoire",
    "Termskey": "Termes",
    "Location": "Emplacement",
    "RebateKey": "Remise",
    "Recurkey": "Cycle récurrent",
    "Custcntry": "Pays",
    "PromAccountKeyHdr": "Clé de compte promotionnel",
    "Currency_Key": "Clé de devise",
    "ItemKey": "Clé d'article",
    "ITEMKEYLOOKUP": "Recherche de clé d'article",
    "ITEMDESC": "Description de l'article",
    "Description": "Description",
    "FEATUREIDCANNOTBEBLANK": "L'ID de la fonction ne peut pas être vide",
    "FEATUREIDANDVALUECANNOTBESAME": "Ne pas ajouter le même ID de fonction et valeur sur plusieurs lignes",
    "WAREHOUESTATUSTITLE": "Rapport de traitement",
    "InsertLineKit": "Recherche de kit",
    "InsertLineKitItem": "Recherche de kit",
    "RELEASEORDERALERTMSG": "Voulez-vous libérer cette commande?",
    "CRDLIMITPASSWORDCAPTION": "Entrer le mot de passe pour enregistrer",
    "SALESPARAMETERMSG": "Les paramètres de saisie de commande de vente ne sont pas définis",
    "VIEWSALESCONTRACT": "Voir le contrat de vente",
    "NOTHOLDCANCELLED": "Impossible de mettre en attente une commande annulée",
    "NOTHOLDCLOSED": "Impossible de mettre en attente une commande fermée",
    "HOLDRESAONALERTMSG": "Veuillez spécifier la raison de la mise en attente.",
    "WAREHOUSESOSAVEALERT": "Enregistrez l'enregistrement.",
    "AlternateItemKey": "Articles alternatifs",
    "SERIES": "Série",
    "SERIES_DESC": "Description de la série",
    "ORDER_TYPE": "Type de commande",
    "WAREHOUSETRANSFER": "Détails de transfert d'entrepôt",
    "ContractNo": "Recherche de numéro de contrat",
    "CONTRACTNO": "Numéro de contrat",
    "COMMITMENTAMT": "Montant d'engagement",
    "CONTRACTDATE": "Date du contrat",
    "COSTORQTYCOMMITMENT": "Engagement de coût ou de quantité",
    "EFFECTIVEDATE": "Date d'effet",
    "EXPDATE": "Date d'expiration",
    "ORIGINALAMT": "Montant d'origine",
    "PRICEQUOTED": "Prix cité",
    "CustomerItem": "Recherche client",
    "CUSTOMERITEMS": "Recherche d'articles clients",
    "PurchaseUomCode": "Code UOM d'achat",
    "CustitemKey": "Clé d'article client",
    "OtempItemKey": "Recherche de clé d'article",
    "NOLINESELECTEDMSG": "Aucune ligne n'est sélectionnée.",
    "OtempLocation": "Recherche d'emplacement",
    "GOTOSHIPMENT": "Aller à l'expédition",
    "REQUIREDFREIGHTALERMSG": "Le fret est requis. Voulez-vous continuer?",
    "FavoriteItems": "Articles favoris",
    "LocationKey": "Clé d'emplacement",
    "SalesOrderEntryList": "Commandes de vente",
    "PRICERECALCULATEMSG": "Le prix sera recalculé.",
    "QTYCOMMITTED": "Quantité engagée",
    "QTYQUARANTINED": "Quantité en quarantaine",
    "QTYEXPIRED": "Quantité expirée",
    "QTYAVAILABLE": "Quantité disponible",
    "CUSTOMERKEY": "Clé client",
    "LOTCOMMITMENTDETAILS": "Détails d'engagement de lot",
    "CONTAINERIZEDLOTS": "Lots en conteneur",
    "SALESISSUES": "Problèmes de vente",
    "NEGATIVEADJUSTMENT": "Ajustement négatif",
    "POSITIVEADJUSTMENT": "Ajustement positif",
    "PURECEPIT": "Réception d'achat",
    "PURETURN": "Retour d'achat",
    "MFGISSUES": "Problèmes de fabrication",
    "MFGRETURN": "Retour de fabrication",
    "INVENTORYTRAN": "Transfert d'inventaire",
    "INVADJP": "Ajustement positif d'inventaire",
    "INVADJN": "Ajustement négatif d'inventaire",
    "DAMAGED": "Endommagé",
    "CYCLECNT": "Comptage cyclique",
    "TRANIN": "Entrée de transfert",
    "TRANOUT": "Sortie de transfert",
    "INVEDITP": "Modification positive d'inventaire",
    "INVEDITN": "Modification négative d'inventaire",
    "SLPROV": "Provision de vente",
    "SALESRETURN": "Retour de vente",
    "CONTAINERNO": "Numéro de conteneur",
    "PALLETID": "Identifiant de palette",
    "PLEASEADDCONTAINER": "Veuillez sélectionner un conteneur",
    "NEXTPALLET": "Palette suivante",
    "ESIGNATURE": "Signature électronique",
    "SCREENNAME": "Nom de l'écran",
    "DOCNO": "Numéro de document",
    "REQUIREDSIGNAUTH": "Autorités de signature requises",
    "DATE": "Date",
    "REASONFORCHANGE": "Raison des changements",
    "MODIFIEDBY": "Modifié par",
    "PASSWORD": "Mot de passe",
    "USER": "Utilisateur",
    "DATETIME": "Date/Heure",
    "SEQNO": "Numéro de séquence",
    "TESTAMNET": "Testament",
    "AddSIGNATURE": "Ajouter une signature",
    "USERID": "ID utilisateur",
    "USERNAME": "Nom d'utilisateur",
    "TESTMENT": "Testament",
    "ENTERPASSWORD": "Entrer le mot de passe",
    "WRONGPASSWORD": "Mauvais mot de passe",
    "ENTERMODIFIED": "Entrer modifié par",
    "ENTERUSERID": "Entrer ID utilisateur",
    "USERNOTAUTHORISEMSG": "L'utilisateur n'est pas autorisé à signer ce document.",
    "USERALREADYSIGNMSG": "Cet utilisateur a déjà signé.",
    "REQSIGNATUREMISSING": "Certaines signatures requises manquent.",
    "REASONMINLENGTHMSG": "La raison des changements doit contenir au moins",
    "CHARACTER": "caractère.",
    "ESIGNREASONMSG": "Cet écran nécessite une raison de changement et une signature électronique.",
    "CHKITEMLOCAATIONMSG": "Vérifiez l'article et l'emplacement.",
    "RETURNORDRECALCULATEMSG": "Commande de retour, impossible de recalculer.",
    "COMMENT": "Commentaires",
    "TOTALSPLITQTY": "Quantité totale à diviser",
    "UNIT": "Unité",
    "ITEMDESCRIPTION": "Description de l'article",
    "SPLITCONTAINER": "Diviser le conteneur",
    "SPLITQTY": "Quantité à diviser",
    "CONVNOTFORITEMMSG": "Conversion non définie pour l'article",
    "UNITSAREMSG": "Les unités sont",
    "QUOTATIONTITLE": "Devis/Requête de vente",
    "CANCELQUOTATIONALERTMSG": "Annuler le devis?",
    "CALCULATETAXDISCOUNT": "Calculer la taxe et la remise",
    "CANCELSO": "Annuler la commande",
    "CLOSESO": "Fermer la commande",
    "VIEWCONTRACT": "Voir le contrat",
    "RELEASEHOLDORDER": "Libérer/Mettre en attente la commande",
    "CHANGEOWNER": "Changer de propriétaire",
    "MAILTOCUSTOMER": "Envoyer un courrier au client",
    "SALESORDERPEGGING": "Référencement de commande de vente",
    "SALESHISTORY": "Historique des ventes",
    "VIEWAGEBRACKETS": "Voir les tranches d'âge",
    "LIGHTCRM": "CRM léger",
    "LADEDWEIGHT": "Poids chargé",
    "TRANSFERTOSO": "Transférer vers la commande de vente",
    "TRANSFERTOSOMSG": "Transférer vers la commande de vente?",
    "CANCELQUOTATION": "Annuler le devis",
    "TOTALRECALCULATE": "Recalculer le total",
    "NOTMAINTAINLOTWITHZERO": "Les lots avec une quantité nulle ne peuvent pas être maintenus.",
    "ALLOWMINQTY": "Autoriser Min",
    "ALLOWMAXQTY": "Autoriser Max",
    "APPROVALS": "Approbations",
    "GROUP": "Groupe",
    "GROUPDES": "Description du groupe",
    "APPROVER": "Approbateur",
    "SENDEMAIL": "Envoyer un e-mail",
    "CANCELAPPROVALS": "Annuler les approbations précédentes",
    "APPROVERDATE": "Date de l'approbateur",
    "EMAILID": "ID de messagerie",
    "GROUPVALIDATEMSG": "Sélectionner le groupe d'approbateurs",
    "CANCELQUOTATIONMSG": "Annuler le devis?",
    "QUOTATIONTRANSUCCMSG": "Devis transféré avec succès",
    "CANCELVALIDATEMSG": "Le statut de la commande est ANNULÉ, impossible de transférer",
    "TRANSFERVALIDATEMSG": "La commande est déjà TRANSFÉRÉE",
    "APPROVERVALIDATEMSG": "Le statut de la commande est APPROBATEUR, impossible de transférer",
    "SalesRequisitionList": "Devis/Requête de vente",
    "QUOTATRANPROSPECTVALIMSG": "Impossible de transférer un devis de vente en commande de vente pour un prospect",
    "CUSTHOLDTRANSVALIMSG": "Le statut du client est en attente, impossible de transférer",
    "CREDITLIMITVALIDATETRANMSG": "Le plafond de crédit est dépassé, impossible de transférer",
    "CREDITLMIITTRANSHOLDALERTMSG": "Le plafond de crédit est dépassé, la commande sera enregistrée avec le statut de mise en attente.",
    "LOTFEATURE": "Fonction de lot",
    "CONTAINER": "Conteneur",
    "FEATUREID": "ID de fonction",
    "FEATUREDESC": "Description de la fonction",
    "VALUE": "Valeurs",
    /**----------- LANDED COST CALCULATION--- */
    "LANDEDCOSTCALCULATION": "Calcul du coût au débarquement",
    "LANDEDCOSTGROUPID": "ID du groupe de coût au débarquement",
    "LANDEDCOSTGROUPDESC": "Description du groupe de coût au débarquement",
    "ACCUREDLANDEDCOSTACC": "Compte de coût au débarquement accusé",
    "ACCUREDLANDEDCOSTACCDESC": "Description du compte de coût au débarquement accusé",
    "LANDEDCOSTACC": "Compte de coût au débarquement",
    "LANDEDCOSTACCDESC": "Description du compte de coût au débarquement",
    "CURRENCY": "Devise",
    "LANDEDCOSTID": "ID du coût au débarquement",
    "APPORTIONEDBY": "Réparti par",
    "PERCENTVALUE": "Pourcentage/Valeur",
    "DICREDMEMOTITLE": "Facture directe/Mémo de crédit",
    "DirectInvoiceList": "Facture directe/Mémo de crédit",
    "PROCESSREPORT": "Rapport de processus",
    "DAY": "Jour(s)",
    "GENERATE": "Générer",
    "QTYISSUED": "Qté à émettre",
    "QTYRECEIVE": "Qté reçue",
    "AVAILABLEQTY": "Qté disponible",
    "PONO": "Numéro de commande d'achat",
    "RECEIPTNO": "Numéro de réception",
    "ROWNO": "Numéro de ligne",
    "APPORTIONEDAMT": "Montant réparti",
    "INCLUDEFREIGHTREBATE": "Inclure le fret pour le rabais",
    "RECURRED": "Récurrent",
    "FOREIGNAMT": "Montant en devise",
    "FREIGHTACCOUNT": "Compte",
    "AMT": "Montant",
    "TOTALFREIGHT": "Total du fret",
    "CHARTACCOUNT": "Plan de compte",
    "FREIGHTKEY": "Clé de fret",
    "FREIGHTMASTER": "Maître de fret",
    "FREIGHTBREAKUP": "Détails du fret",
    "SCAN": "Scanner",
    "PALLETNO": "Numéro de palette",
    "QUARANDATE": "Date de quarantaine",
    "ITEMQTY": "Qté d'article",
    "ITEMQTYREM": "Qté restante d'article",
    "DOCUMENTNO": "Numéro de document",
    "DOCLINENO": "Numéro de ligne de document",
    "VIEWLOTFEATURE": "Voir la fonction de lot",
    "VIEWSELECTEDLOT": "Voir le lot sélectionné",
    "QTY": "Quantité",
    "SELECTLOT": "Sélectionner le lot",
    "AUTOSELECT": "Sélection automatique",
    "UNSELECTALL": "Désélectionner tout",
    "FROMCONTAINER": "Du conteneur",
    "TOCONTAINER": "Au conteneur",
    "CONATINERSEARCH": "Recherche de conteneur",
    "MSG": {
      "CONTACT_NAME_REQUIRED": "Entrez le nom du contact",
      "EMAILVALIDATEMSG": "Entrez une adresse e-mail valide",
      "PLEASEENTERTENDIGITNUMBER": "Veuillez entrer un numéro de 10 chiffres",
      "NOTVALIDNO": "Numéro non valide",
      "LOTREQ": "Numéro de lot requis.",
      "BINREQ": "Numéro de bac requis.",
      "LOTQTYGREATERFROMZERO": "La quantité de lot doit être supérieure à zéro.",
      "CONTAINERQTYMISMATCH": "La quantité de lot et la quantité de conteneur sélectionnée ne correspondent pas.",
      "CONTAINERNOTMAINTAIN": "Impossible d'enregistrer. Conteneur non maintenu pour le numéro de lot.",
      "BLOCKSHELFLIFE": "Pas assez de durée de conservation pour l'article. ",
      "AVAILABLESHELFLIFE": "La durée de conservation disponible est ",
      "REQSHELFLIFE": " et la durée de conservation requise est ",
      "ISSUEQTYEQUALSELECTQTY": "La quantité à émettre est déjà égale à la quantité sélectionnée",
      "HARDALLOCATION": "L'utilisation de l'allocation rigide est définie sur Oui dans la configuration de l'inventaire. Impossible d'allouer plus que la quantité disponible - Quantité allouée.",
      "ITEMNOTCONTAINERIZED": "L'article n'est pas conteneurisé.",
      "DUPLICATENO": "Numéro en double",
      "SELECTEDCONTAINEREQUALTOQTY": "La quantité de conteneur sélectionnée doit être égale à la quantité de lot",
      "FROMTOVALUECHECK": "La valeur De ne peut pas être supérieure à la valeur À",
      "TOTALSPLITQTYEQUALTOQTY": "La quantité totale à scinder doit être égale à la quantité disponible",
      "QTYSPLITREQ": "Quantité à scinder requise",
      "LANDEDCOSTREQ": "ID de coût au débarquement requis",
      "LANDEDCOSTGROUPREQ": "ID du groupe de coût au débarquement requis",
      "ACCUREDLANDEDCOSTREQ": "Compte de coût au débarquement accusé requis",
      "LANDEDCOSTACCOUNTREQ": "Compte de coût au débarquement requis",
      "LANDEDCOSTSELECTIONREQ": "Données détaillées sur le coût au débarquement requises",
      "FREIGHTDESC": "Ajouter une description du fret",
      "FREIGHTAMT": "Ajouter un compte de fret",
      "QTYITEMNOTGREATER": "La quantité d'article ne doit pas être supérieure à la quantité de commande.",
      "QTYITEMNOTGREATERNEW": "La quantité d'article ne doit pas être supérieure à la quantité en main de la commande.",
      "QTYNOTGREATERTHANORDQTY": "La quantité ne doit pas être supérieure à la quantité de commande.",
      "QTYISSUEREQ": "Quantité à émettre requise",
      "REMQTYZERO": "La quantité d'article restante est zéro",
      "SERAILNOEXIST": "Le numéro de série existe déjà pour l'article - ",
      "QTYISSUENOTGREATERONHAND": "La quantité en main doit être supérieure à la quantité à émettre.",
      "CONTAINERREQ": "Conteneur requis",
      "BLOCKSHELFLIFELOTNO": "Pas assez de durée de conservation pour l'article et le numéro de lot ",
      "QTYREQ": "Quantité requise",
      "QUARANDATELESSTHANEXPIRYDATE": "La date de quarantaine ne peut pas être supérieure ou égale à la date d'expiration",
      "EXPIRYGREATERTHANRECEIPTDATE": "La date d'expiration ne peut pas être inférieure ou égale à la date de réception",
      "QUARANTINEGREATERTHANRECEIPTDATE": "La date de quarantaine ne peut pas être inférieure ou égale à la date de réception",
      "TOTALCONTAINERQTYEXCEED": "La quantité totale de conteneurs dépasse la quantité requise, impossible de générer le conteneur.",
      "DELETECONTAINERCONFIRMATION": "Les détails du conteneur sont maintenus. Voulez-vous supprimer certaines données de conteneur?",
      "QTYNOTGREATERTHANONE": "La quantité à émettre n'est pas supérieure à un pour un article suivi par numéro de série",
      "PALLETANDLOTSELECTEDSUCCESSFULLY": "Palette et lot ajoutés",
      "LOTSELECTEDSUCCESSFULLY": "Lot ajouté",
      "PALLETNOREQ": "Numéro de palette requis",
      "FROMCONTAINERREQ": "Du conteneur requis",
      "TOCONTAINERREQ": "Au conteneur requis",
      "SEARCHBYCONATINERREQ": "Recherche par conteneur requis",
      "ENTERCONTAINERQTY": "Entrez la quantité de conteneur",
      "ITEMKEYREQ": "Entrez la clé de l'article",
      "DUPLICATELOTBINCOMBINATION": "Combinaison en double de Lot + Bac trouvée (Numéro de ligne : ",
      "CORRECTSQLQUERY": "Requête SQL correcte",
      "CHECKOUTSUCCESS": "Enregistrement vérifié avec succès",
      "UNDOCHECKOUTSUCCESS": "Enregistrement de vérification annulé avec succès",
      "CHECKINSUCCESS": "Enregistrement vérifié avec succès",
      "ORDERNOREQ": "Numéro de commande requis",
      "FROMDATETIME": "De Datetime requis",
      "TODATETIME": "À Datetime requis",
      "PURCHASENOTPERMISSION": "Vous n'avez pas la permission de la réception de commande d'achat",
      "SALESNOTPERMISSION": "Vous n'avez pas la permission de maintenir l'expédition",
      "TODATETIMEGREATER": "À Datetime doit être supérieur à De Datetime",
      "WHTRANSFEROUTNOTPERMISSION": "Vous n'avez pas la permission de transférer depuis l'entrepôt",
      "WHTRANSFERINNOTPERMISSION": "Vous n'avez pas la permission de transférer vers l'entrepôt"
    },
    "SUPERINVOICETITLE": "Super Facture",
    "SONOEXIST": "La commande existe déjà",
    "PROCESS": "Processus",
    "PurchaseOrderEntryList": "Commande d'achat",
    "PurchaseRequisitionEntryList": "Demande d'achat",
    "PurchaseIndentEntryList": "Bon de commande",
    "SuperVoucherList": "Super Bon",
    "FillVendAdd": "Remplir l'adresse du fournisseur",
    "VendorMasterList": "Clé du fournisseur",
    "Expense_Acct": "Plan de comptes",
    "Cashacct": "Plan de comptes",
    "CountryLookup": "Recherche de pays",
    "Vend_Class_Ky": "Recherche de classe de fournisseur",
    "Ship_Via": "Expédition via",
    "Fob": "Recherche FOB",
    "Branch_Ky": "Recherche de succursale",
    "Comment_Ky": "Recherche de commentaire",
    "DfltTxKey": "Recherche de clé fiscale",
    "Terms": "Recherche de termes",
    "Location_Ky": "Recherche de lieu",
    "DfltLandedCostGroupID": "Groupe de coût au débarquement",
    "FreightKey": "Maître de fret",
    "TaxType": "Recherche de type de taxe",
    "TaxType1099": "Recherche de case 1099",
    "Language_key": "Recherche de langue",
    "BRANCHKEYLOOKUP": "Recherche d'expédition à",
    "APPLYWORKFLOW": "Appliquer le flux de travail",
    //**Specification Template * *//
    "SPEC": {
      "HEADER": "Modèle de spécification",
      "TMP_ID": "ID du modèle de spécification",
      "VALID": {
        "GRPID": "L'ID du groupe de spécifications ne peut pas être vide.",
        "SPECID": "L'ID de la spécification ne peut pas être vide.",
        "COMBINATION": "La combinaison dupliquée de l'ID du groupe et de l'ID de la spécification n'est pas autorisée.",
        "TMPKEY": "Voulez-vous changer la clé du modèle ?"
      }
    },
    "DocTxKey": "Clé fiscale",
    "ORDRECEIVEDTHISWEEK": "Commandes à recevoir cette semaine",
    "CLOSEDORDER": "Commande fermée",
    "PROCESSEDORDER": "Commande traitée",
    "GOTRANSINVOICE": "Aller à Transférer à la facture",
    "GOSUPERINVOICE": "Aller à Super Facture",
    "GOTRANSFERSOBATCH": "Aller à Transférer à la loterie",
    "PRINTINVOICE": "Imprimer la facture",
    "PRINTCREDITMEMO": "Imprimer le crédit",
    "ARCHIVEDORDER": "Commande archivée",
    "PROCESSEDORDERS": "Commandes traitées",
    "GOTRANSVOUCHER": "Aller à Transférer au bon",
    "GOSUPERVOUCHER": "Aller à Super Bon",
    "GOPURCHASEORDER": "Aller à la commande d'achat",
    "GOSALESORDER": "Aller à la commande de vente",
    "GOMAINTAINSHIPMENT": "Aller à Maintenir l'expédition",
    "PRINTVOUCHER": "Imprimer le bon",
    "PRINTDEBITMEMO": "Imprimer le mémo de débit",
    "CLOSEDORDERS": "Commandes fermées",
    "PRINT": "Imprimer",
    "LANDEDCOSTNOTONRECEIP": "Coût à l'atterrissage non maintenu pour la réception.",
    "MYTASK": "Afficher ma tâche",
    "TASKFORRECORD": "Afficher la tâche pour cet enregistrement",
    "USERNAMELBL": "Nom d'utilisateur",
    "FORMNAME": "Nom du formulaire",
    "PRIMARYKEY": "Clé primaire",
    "ESIGNAUDITMSG": "L'historique de l'audit s'applique à cet écran. Enregistrez d'abord les données avant de naviguer/fermer l'écran. Cliquez sur Annuler pour revenir au formulaire. Cliquez sur Non pour perdre les modifications.",
    "VENDORACTIVE": "Fournisseurs actifs",
    "VENDORHOLD": "Fournisseurs en attente",
    "CLOSEDELETEALERT": "La commande fermée ne peut pas être supprimée",
    "PROCESSEDDELETEALERT": "La commande traitée ne peut pas être supprimée",
    "SERIALLOTMAINTENANCE": "Entretien des lots sériels",
    "DOCUMENTTYPE": "Type de document",
    "DOCUMENTNUMBER": "Numéro de document",
    "ITEM": "Article",
    "DOCUMENTLINENO": "Numéro de ligne du document",
    "SELQTY": "Quantité sélectionnée",
    "SHOWBINONLY": "Afficher uniquement les bacs vides",
    "RECEIPTDATE": "Date de réception",
    "COMMITQTY": "Quantité engagée",
    "EXPIRYDATE": "Date d'expiration",
    "SHIPMENTDETAIL": "Détail de l'expédition",
    "REQDATE": "Date requise",
    "PROMISEDATE": "Date de promesse",
    "PODDOC": "Document POD",
    "PODRECBY": "POD reçu par",
    "SHIPDATE": "Date d'expédition",
    "TARGETSHIPDATE": "Date d'expédition cible",
    "PODDATE": "Date POD",
    "SHIPTRACKNO": "Numéro de suivi de l'expédition",
    "LOTQTY": "Quantité de lot",
    "REMQTY": "Quantité restante",
    "PROCESSEDCLOSEDALERT": "La commande traitée ne peut pas être fermée",
    "WHEREUSED": "Où utilisé",
    "GenrateID": "Générer un ID",
    "KEY": "Clé",
    "NODIMENSION": "Aucune dimension définie dans la configuration multidimensionnelle.",
    "SAVERECFIRST": "Veuillez d'abord enregistrer l'enregistrement",
    "STATUS": "Statut",
    "TRNQTY": "Quantité TRN",
    "ORIGINALFILENAME": "Nom de fichier d'origine",
    "DOCUMENTTITLE": "Titre du document",
    "DOCUMENTSUMMARY": "Résumé du document",
    "PRIORITY": "Priorité",
    "CHECKOUTBY": "CheckOut par",
    "CHECKOUTSTATUS": "Statut du CheckOut",
    "CREATEDDATE": "Date de création",
    "CREATEDBY": "Créé par",
    "MODIFIEDDATE": "Date de modification",
    "SHOWACTIVEONLY": "Afficher uniquement les actifs",
    "READONLYOTHERUSER": "Lecture seule pour les autres utilisateurs",
    "DOCUMENTS": "Documents",
    "NOTES": "Notes",
    "CHECKOUT": "Check Out",
    "CHECKIN": "Check In",
    "UNDOCHECKOUT": "Annuler le Check Out",
    "DELETELINE": "Supprimer la ligne",
    "ATTACH": "Attacher",
    "TITLENAME": "Nom du titre",
    "FILENAME": "Nom du fichier",
    "SUMMARY": "Résumé",
    "AUTHORIZEDGROUP": "Groupe autorisé",
    "DOCUMENTCREATEDDATE": "Date de création du document",
    "DOCUMENTCREATEDBy": "Document créé par",
    "DOCUMENTMODIFIEDDATE": "Date de modification du document",
    "DOCUMENTMODIFIEDBy": "Document modifié par",
    "PLZSELECTFILE": "Veuillez sélectionner un fichier",
    "ENTERFILENAME": "Entrer le nom du fichier",
    "ENTERAUTHGROUP": "Entrer le groupe autorisé",
    "FROM": "De",
    "TO": "À",
    "SCANLOT": "Numériser le lot",
    "READFILEFORSUMMARY": "Lire le fichier pour le résumé",
    "SCANATTACH": "Numériser et attacher",
    "RECORDNEWDOCUMENT": "Enregistrer un nouveau document",
    "QTYRECEIVED": "Quantité reçue",
    "VIEWPALLET": "Voir la palette",
    "ASSIGNDIMID": "Attribuer un ID de dimension",
    "ASSIGNTOROW": "Attribuer à toutes les lignes",
    "ShipViaKey": "Expédié via",
    "VendCity": "Ville du fournisseur",
    "VendName": "Nom du fournisseur",
    "VouchNo": "Numéro de bon",
    "VoucherDate": "Date du bon",
    "CustCity": "Ville du client",
    "CustName": "Nom du client",
    "Invdate": "Date de la facture",
    "SoInvoice": "Facture n°",
    "TranNo": "Numéro de transaction",
    "ASSIGNDIMENSIONID": "Attribuer un ID de dimension",
    "QUERYANALYZER": "Analyseur de requêtes",
    "ORDERNO": "Numéro de commande",
    "FILEEXTNOTSUPPORT": "Extension de fichier non prise en charge",
    "FILENAMENOTMATCH": "Le nom de fichier ne correspond pas au fichier précédent",
    "PRINTLISTLABEL": {
      "PRINTINV": "Imprimer la facture",
      "CUSTOMERKEY": "Clé client",
      "CUSTOMERNAME": "Nom du client",
      "ORDERDATE": "Date de commande",
      "ORDERTYPE": "Type de commande",
      "PROMISEDATE": "Date de promesse",
      "RECDATE": "Date de réception",
      "RECUSERID": "ID utilisateur de réception",
      "REQUESTEDDATE": "Date demandée",
      "SOTOTAL": "Total de la commande",
      "SALESORDERNO": "Numéro de commande client",
      "SHIPTOKEY": "Expédié à la clé",
      "STATUS": "Statut",
      "TRAGETSHIPDATE": "Date d'expédition cible",
      "HOLDINGREASON": "Raison de la mise en attente",
      "TRANNO": "Numéro de transaction",
      "SOINVOICE": "Facture de la commande client",
      "INVOICEDATE": "Date de la facture",
      "INVOICETOTAL": "Total de la facture",
      "PRINTVOUCHER": "Imprimer le bon",
      "VOUCHNO": "Numéro de bon",
      "FINVOUCHERNO": "Numéro de bon financier",
      "PURCHASEORDERNO": "Numéro de commande d'achat",
      "VENDORKEY": "Clé du fournisseur",
      "VENDORNAME": "Nom du fournisseur",
      "VOUCHERDATE": "Date du bon",
      "VOUCHERTOTAL": "Total du bon"
    }
  },
  "LINEITEM": "Article",
  "ISSUEDQTY": "Quantité émise",
  "HOLDORDPRINTMSG": "Impossible d'imprimer une commande en attente.",
  "DUPLICATE": "Dupliquer",
  "FOUND": "trouvé",
  "FROMLOCATION": "De l'emplacement",
  "INVENTORYTRANSFER": "Transfert d'inventaire",
  "INVENTORYMOVE": "Déplacement d'inventaire",
  "DELMSG": "Supprimé avec succès.",
  "PRMEMPTY": "Le paramètre ne peut pas être vide",
  "SELRPTPRM": "Sélectionner le paramètre de rapport",
  "PARAMETER": "Paramètre",
  "SAVEMSG": "Enregistré avec succès",
  "QUERYBUILDER": "Générateur de requêtes",
  "CLEAR": "Effacer",
  "TESTSQL": "Tester SQL",
  "BTN_CONTACT": "Détails du contact",
  "QUERYEDITOR": "Éditeur de requêtes",
  "TRANSFER": "Transférer",
  "CONTACTLIST": {
    "DELTE_HEADER": "Maître de lot",
    "TRANSFER": "Les données de la ligne sélectionnée seront transférées à l'écran parent. Voulez-vous continuer ?",
    "CUSTOMER_KEY_REQUIRED": "Entrer la clé du client",
    "VEND_KEY_REQUIRED": "Entrer la clé du fournisseur",
    "PROSPECT_KEY_REQUIRED": "Entrer la clé du prospect",
    "NOT_SAVED": "Enregistrement non enregistré.",
    "NAME": "Nom",
    "CATEGORY": "Catégorie",
    "JOB_TITLE": "Titre du poste",
    "PHONE": "Téléphone",
    "EMAIL": "E-mail",
    "QUOTATION": 'Devis',
    "SALESORDER": "Bon de commande",
    "INVOICE": 'Facture'
  },
  "ARCHIVECONTRACT": {
    "SALESARCHIVECONT": "Archiver le contrat de vente",
    "PURARCHIVECONT": "Archiver le contrat d'achat",
    "EXPIRYDATEFROM": "Date d'expiration à partir de",
    "EXPIRYDATETO": "Date d'expiration jusqu'à",
    "CUSTKEY": "Clé du client",
    "CUSTNAME": "Nom du client",
    "VENDKEY": "Clé du fournisseur",
    "VENDNAME": "Nom du fournisseur"
  },
  "MAILSETTINGS": {
    "MAILSETTINGS": "Paramètres de messagerie",
    "SERVER": "Serveur",
    "USEREMAIL": "Utilisateur",
    "PASSWORD": "Mot de passe",
    "PORT": "Port",
    "ENABLESSL": "Activer SSL",
    "BCCMAILSENDER": "BCC Mail to Sender",
    "SAVEMAILSETTING": "Paramètres de messagerie enregistrés avec succès"
  },
  "PURCHASEAPPROVERGRP": {
    "TITLEPR": "Groupe d'approbation des achats",
    "TITLESR": "Groupe d'approbation des ventes",
    "TITLEFM": "Groupe d'approbation de formule",
    "TITLESRM": "Groupe d'approbation d'échantillon",
    "TITLECM": "Groupe d'approbation commun",
    "ADDPURAPPROVERGROUP": "Ajouter un groupe d'approbation des achats",
    "ADDSALAPPROVERGROUP": "Ajouter un groupe d'approbation des ventes",
    "ADDFORAPPROVERGROUP": "Ajouter un groupe d'approbation de formule",
    "ADDSMAPPROVERGROUP": "Ajouter un groupe d'approbation d'échantillon",
    "ADDCMAPPROVERGROUP": "Ajouter un groupe d'approbation commun",
    "APPROVER_GROUP": "ID du groupe",
    "DOC_TYPE": "Type de doc",
    "DESCRIPTION": "Description du groupe",
    "RECDATE": "Date de réception",
    "RECUSERID": "ID utilisateur de réception",
    "USERSEQNO": "Numéro de séquence utilisateur",
    "ACTION": "Action",
    "APPROVER": "Approbateur",
    "NAME": "Nom",
    "EMAIL": "E-mail",
    "APPROVERINFORMATION": "Informations sur l'approbateur",
    "RESEQUENCE": "Reséquence",
    "TYPE": "Type",
    "MSG": {
      "APPROVERNAMEREQ": "Saisissez l'approbateur dans la ligne",
      "USERSEQNOREQ": "Saisissez le numéro de séquence de l'utilisateur dans la ligne",
      "GROUPIDREQ": "Saisissez l'ID du groupe",
      "ENTERUSERINFORMATION": "Saisissez les informations de l'utilisateur",
      "DUPLICATESEQNO": "Numéro de séquence en double",
      "APPROVEREXIST": "L'approbateur existe déjà",
      "SAVESEQORDER": "Veuillez enregistrer votre enregistrement après la suppression de l'article"
    }
  },
  "GENERICFORM": {
    "BATCHMASTER": "Maître de lot",
    "DELMESSAGE": "Supprimer l'enregistrement?",
    "ASKSAVE": "Enregistrer l'enregistrement?",
    "YES": "Oui",
    "NO": "Non",
    "CANCEL": "Annuler",
    "MSGDELETE": "Aucune donnée à supprimer.",
    "MSGSAVEFIRST": "Enregistrez d'abord l'enregistrement.",
    "UPLOADPHOTO": "Télécharger"
  },
  "RECORDAUTHORIZATION": {
    "USER": "Utilisateur",
    "USERID": "ID utilisateur",
    "USER_DESCRIPTION": "Nom d'utilisateur",
    "GROUPID": "ID du groupe",
    "GROUPDESCRIPTION": "Nom du groupe",
    "RECUSERID": "ID utilisateur de réception",
    "RECDATE": "Date de réception",
    "TITLESR": "Autorisation d'enregistrement des ventes",
    "TITLEFM": "Autorisation d'enregistrement de formule",
    "ADDSALRECORDAUTH": "Ajouter une autorisation d'enregistrement des ventes",
    "ADDFORRECORDAUTH": "Ajouter une autorisation d'enregistrement de formule",
    "AUTHORIZEDUSER": "Utilisateur autorisé",
    "INSERTUSER": "Insérer un utilisateur",
    "READ": "Lire",
    "WRITE": "Écrire",
    "DELETE": "Supprimer",
    "MSG": {
      "ALREADYEXIST": "Existe déjà",
      "USERIDREQ": "Saisissez l'ID utilisateur",
      "ENTERAUTHORIZEDUSERINFORMATION": "Saisissez les informations de l'utilisateur autorisé"
    }
  },
  "DATAVIEW": {
    "TITLE": "Affichage des données",
    "COMPANY": "ID de la société",
    "COMPANYNAME": "Nom de la société",
    "SQL": "SQL",
    "EXECUTE": "Exécuter SQL",
    "ENTERCOMPANY": "Saisissez l'ID de la société",
    "ENTERSQL": "Saisissez SQL",
    "MSG": {
      "ASKCHECK": "enregistrement(s) affecté(s)",
      "RECORDFOUND": "enregistrement(s) trouvé(s)",
      "ASKSAVE": "Voulez-vous continuer?"
    }
  },
  "GANTTCHART": {
    "BATCHNO": "Numéro de lot",
    "PROCESSCELL": "Cellule de processus",
    "STATUS": "Statut du lot",
    "BATCHTYPE": "Type de lot",
    "RESCHEDULE": "Replanifier",
    "MANUAL": "Manuel",
    "AUTO": "Agencement automatique",
    "GETBATCHES": "Obtenir des lots",
    "REARRANGE": "Réorganiser",
    "PREDECESSORBATCH": "Lot prédécesseur",
    "DELAY": "Retard",
    "SEQNO": "Numéro de séquence",
    "COLLAPSEPANE": "Réduire/Agrandir le volet",
    "SHOWTOOLBAR": "Afficher/Masquer la barre d'outils",
    "UPDATEPROCEES": "Mettre à jour la cellule de processus",
    "FORWARD": "Avancer",
    "BACKWARD": "Reculer",
    "SELECTEDBATCH": "Lot sélectionné",
    "FORMULAITEM": "ID de la formule/Clé de l'article",
    "ORIGSTARTDATE": "Date de début d'origine",
    "ORIGENDDATE": "Date de fin d'origine",
    "SCHEDULING": "Planification",
    "PASTDUE": "En retard",
    "SNO": "N°",
    "STARTDATE": "Date de début prévue",
    "ENDDATE": "Date de fin prévue",
    "REMOVELINK": "Supprimer le lien",
    "ASSIGNLINK": "Attribuer un lien",
    "ENTERPROCESSCELL": "Veuillez entrer la cellule de processus."
  },
  "BININQUIRY": {
    "TITLE": "Requête sur le bac",
    "LOOKUPTITLE": "Recherche de bac",
    "BIN": "N° de bac",
    "ITEM": "Article",
    "LOCATION": "Emplacement",
    "LOTNUMBER": "Numéro de lot",
    "ItemKey": "Clé de l'article",
    "LocationKey": "Clé de l'emplacement",
    "LotNo": "Numéro de lot",
    "QtyAvailable": "Qté disponible",
    "ITEMKEY": "Article",
    "LOCATIONKEY": "Emplacement",
    "LOTNO": "Numéro de lot",
    "QTYAVAILABLE": "Qté disponible",
    "QTYONHAND": "Qté en stock",
    "STOCKUOMCODE": "UOM",
    "DESCRIPTION": "Description de l'article",
    "QtyOnHand": "",
    "VIEW": "Vue",
    "CONTAINERTAB": "Conteneur",
    "AISLE": "Allée",
    "ROW": "Rangée",
    "RACK": "Étagère"
  },
  "PALLETINQUIRY": {
    "TITLE": "Requête sur la palette",
    "LOOKUPTITLE": "Recherche de palette",
    "PALLET": "ID de la palette",
    "ITEMKEY": "Article",
    "ITEMDESCRIPTION": "Description de l'article",
    "LOCATIONKEY": "Emplacement",
    "LOTNO": "Numéro de lot",
    "BINNO": "N° de bac",
    "CUSTOMER": "Client",
    "SONO": "N° de bon de commande",
    "STATUS": "Statut",
    "BATCHNO": "Numéro de lot",
    "COMMENTS": "Commentaires",
    "LOTDETAILS": "Détails du lot",
    "PALLETDETAILS": "Détails de la palette",
    "STOCKUOMCODE": "UOM",
    "CONTAINERNO": "Cont",
    "QUANTITY": "Qté",
    "LOCATION": "Emplacement",
    "QTYONHAND": "Qté en main",
    "PALLETID": "ID de la palette",
    "ALLOWPARTISSUESERIALIZATION": "AP",
    "DEFAULTCONTAINERQTY": "Conteneur par défaut",
    "PALLETLABEL": "Étiquette de palette",
    "PALLETMENIFEST": "Manifeste de palette",
    "MSG": {
      "PALLTEIDREQ": "L'ID de la palette ne peut pas être vide"
    }
  },
  "DOWNLOADERROR": {
    "TITLE": "Gestionnaire d'erreurs de téléchargement",
    "COMPANYID": "ID de la société",
    "COMPANYNAME": "Nom de la société",
    "USERID": "ID utilisateur",
    "USERNAME": "Nom d'utilisateur",
    "DOWNLOADERRORLOG": "Journal d'erreurs de téléchargement",
    "CLEARERRORLOG": "Effacer le journal des erreurs",
    "ENTERCOMPANY": "Saisissez l'ID de la société",
    "ENTERUSER": "Saisissez l'ID utilisateur",
    "NOERRORLOG": "Aucun journal d'erreurs"
  },
  "WMSLOTINQUIRY": {
    "TITLE": "Requête sur le lot",
    "LOTNO": "Numéro de lot",
    "ITEMKEY": "Clé de l'article",
    "ITEMDESC": "Description de l'article",
    "EXPDATE": "Date d'expiration",
    "LOTSTATUS": "Statut du lot",
    "QUARTINEDATE": "Date de mise en quarantaine",
    "STOCKUOM": "UOM en stock",
    "DISPUOM": "UOM d'affichage",
    "QUANTITYTAB": "Quantité",
    "TOTALONHANDQTY": "Qté totale en stock",
    "TOTALAVAILABLEQTY": "Qté totale disponible",
    "BINNO": "N° de bac",
    "LOCATION": "Emplacement",
    "QTYONHAND": "Qté en stock",
    "AVAILABLEQTY": "Qté disponible",
    "SOURCETAB": "Source",
    "ITEMTYPE": "Fabriquer/Acheter",
    "DOCDATE": "Date du doc",
    "DOCNO": "N° du doc",
    "QTY": "Quantité",
    "VENDLOTNO": "N° de lot du fournisseur",
    "VENDORKEY": "Clé du fournisseur",
    "VENDORNAME": "Nom du fournisseur",
    "FEATURETAB": "Fonctionnalités",
    "FEATUREID": "ID de la fonctionnalité",
    "DESCRIPTION": "Description",
    "VALUE": "Valeur",
    "CONTAINERTAB": "Conteneur",
    "CONTAINERNO": "N° du conteneur",
    "PALLETNO": "ID de la palette",
    "COMMENTS": "Commentaires",
    "VIEW": "Voir"
  },
  "PASSWORDCONFIGURATION": {
    "TITLE": "Configuration du mot de passe",
    "PASSWORDRENEWALCYCLE": "Cycle de renouvellement du mot de passe (en jours)",
    "MINIMUMPASSWORDLENGTH": "Longueur minimale du mot de passe (en caractères)",
    "RESTRICTIONFORSAMEPASSWORD": "Restriction pour le même mot de passe (en jours)",
    "FAILURELOGINATTEMPTS": "Tentatives de connexion infructueuses",
    "LOGINDURATIONFORONETIMEPASSWORD": "Durée de connexion pour le mot de passe unique (en jours)",
    "MAXIMUMALLOWEDINACTIVITYPERIOD": "Période d'inactivité maximale autorisée (en jours)",
    "STRONGPASSWORD": "Mot de passe fort",
    "MAILANDSMSSETTINGS": "Paramètres de messagerie et SMS",
    "SERVER": "Serveur",
    "USER": "Utilisateur",
    "BCCMAILTOSENDER": "BCC Mail to Sender",
    "PASSWORD": "Mot de passe",
    "ENABLESSL": "Activer SSL",
    "PORT": "Port",
    "SMSURL": "URL SMS"
  },
  "TODO": {
    "TITLE": "À faire",
    "TYPE": "Type",
    "STATUS": "Statut",
    "PRIORITY": "Priorité",
    "CLOSINGPER": "Pourcentage d'achèvement",
    "REQBY": "Demandé par",
    "DUEDATE": "Date d'échéance",
    "DESC": "Description",
    "DOCID": "ID du document",
    "FOLLOWUP": "Suivi",
    "BUSINESSPARTER": "Partenaire commercial",
    "CONTACTPERSON": "Personne de contact",
    "CONTACTNO": "Numéro de contact",
    "EMAILId": "ID de messagerie",
    "COMMENTS": "Commentaires",
    "ATTACHEDDOCS": "Documents joints",
    "ATTACHMENT": "Pièce jointe",
    "ACTIVITYJOUNAL": "Journal d'activité",
    "NEWTODO": "Nouveau à faire",
    "FOLLOWUPDATE": "Date de suivi",
    "SUBJECT": "Sujet",
    "REQUESTEDBY": "Demandé par",
    "ASSIGNEDTO": "Assigné à",
    "SUMMARY": "Résumé",
    "DATE": "Date",
    "NEWACTIVITY": "Nouvelle activité",
    "INPROGRESS": "En cours",
    "COMPLETED": "Terminé",
    "CANCELLED": "Annulé",
    "ASSIGNTODOANOTHERUSER": "Assigner une tâche à un autre utilisateur",
    "DOCUMENTS": "Documents",
    "SHOWBUSINESS": "Afficher les entreprises",
    "MYTODO": "Mes tâches",
    "ALLUSER": "Tous les utilisateurs",
    "REASSIGNED": "Réaffecté",
    "NEWDOCUMENT": "Nouveau document",
    "MSG": {
      "SELECTBUSINESSPARTNER": "Sélectionnez le partenaire commercial",
      "SELECTFILE": "Sélectionnez le fichier",
      "DUEDATEGREATERTHANFOLLOWDATE": "La date d'échéance doit être supérieure à la date de suivi",
      "FOLLOWDATENOTLESSTHANCURRENT": "La date de suivi ne doit pas être inférieure à la date actuelle",
      "TARGETDATEVALIDATION": "TargetDate ne peut pas être vide",
      "CLOSEPERNOTGREATERTHAN100": "Le pourcentage de clôture ne doit pas être supérieur à 100"
    }
  },
  "ACTIVITYMASTER": {
    "TITLE": "Maître d'activité",
    "NEWFYI": "Nouveau FYI",
    "TYPE": "Type",
    "USER": "Utilisateur",
    "SUMMARY": "Résumé",
    "DATE": "Date",
    "TODO": "À faire",
    "DOCUMENTID": "ID du document",
    "BUSSINESSPARTNER": "Partenaire commercial",
    "CONTACTPERSON": "Personne de contact",
    "CONTACTNO": "Numéro de contact",
    "EMAILID": "ID de messagerie",
    "COMMENT": "Commentaire",
    "ATTACHEDDOCS": "Documents joints",
    "COMMENTS": "Commentaires",
    "ADDDOCK": "Ajouter un document",
    "TITLEONE": "Titre",
    "STATUS": "Statut",
    "MSG": {
      "BUSSINESSKEYCANNOTBENULL": "La clé d'entreprise ne peut pas être vide"
    }
  },
  "WORKFLOW": {
    "NEWTODO": "Nouveau",
    "TYPE": "Type",
    "PRIORITY": "Priorité",
    "ASSIGNEDTO": "Assigné à",
    "STATUS": "Statut",
    "DESCRIPTION": "Description",
    "COMMENTS": "Commentaires",
    "DUEDAYS": "Jours avant échéance",
    "CREATEON": "Créé le",
    "PREDECESSOR": "Prédécesseur",
    "TODOSTATUS": "Statut de la tâche",
    "CREATEFYI": "Créer un FYI",
    "TITLE": "Liste de tâches",
    "MANDATORYFIELDS": "Veuillez remplir les champs obligatoires",
    "ASSIGNTOcHECK": "Entrez le destinataire assigné",
    "TODOTYPECHECK": "Sélectionnez le type",
    "WORKFLOWACESS": "Le flux de travail n'est pas applicable pour cette page.",
    "FORMTITLE": "Paramètres de flux de travail ToDo"
  },
  "FINANCESERIES": {
    "TITLE": "Série financière",
    "ADDFINANCE": "Ajouter une série financière",
    "TYPE": "Type",
    "SERIES": "Série (Option 1)",
    "CUSTOMOPTION": "Personnalisé (Option 2)",
    "MNTH": "Mois (Option 3)",
    "RECUSERID": "ID de l'utilisateur qui a enregistré",
    "RECDATE": "Date d'enregistrement",
    "YER": "Année (Option 4)",
    "SEQU": "Numéro de séquence (Option 5)",
    "GENRATEID": "Générer un ID",
    "MNTHYER": "Mois Année",
    "AUTOSEQUENCE": "Auto-séquence",
    "REINITALIZE": "Réinitialiser",
    "USERGROUP": "Groupe d'utilisateurs",
    "GENRATESEQUENCE": "Option de séquence",
    "SEQUENCEOPTION": "Option de séquence",
    "AUTOINSERT": "Insérer automatiquement une série pour le mois et l'année",
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
  "username": "Nom d'utilisateur",
  "email": "Email",
  "status": "Statut",
  "MYPROFILE": "Mon profil",
  "REPORTACTION": "Action de rapport",
  "PROFILEACTION": "Profil",
  "INQUIRY": "Enquête",
  "ITEMINQUIRY": "Enquête sur l'article",
  "LOTSPOT": "Numéro de lot requis",
  "ITEMKEYREQ": "Clé d'article requise",
  "PALLETNOREQ": "Numéro de palette requis",
  "BINNOREQ": "Numéro de bac requis",
  "CUSTNAME": "Nom du client",
  "Free_Text": "Texte libre",
  "QCITEMPROCESSALERT": "Certains articles sont en statut QC, ces articles ne sont pas traités.",
  "Back_Yes_No": "Back Order",
  "BLOCKSHELFLIFE": "Pas assez de durée de conservation pour l'article.",
  "AVAILABLESHELFLIFE": "La durée de conservation disponible est de",
  "REQSHELFLIFE": "et la durée de conservation requise est de",
  "BACKORDERNOTALLOW": "Back Order non autorisé, la commande sera fermée.",
  "SELECTPARENTQTY": "La quantité d'expédition du kit parent doit être supérieure à 0",
  "Ref_So": "Numéro de référence So",
  "FORMSETTING": "Paramètres du formulaire",
  "ROWSETTING": "Paramètres de ligne",
  "FOOTERSETTING": "Paramètres de pied de page",
  "GRIDSETTING": "Paramètres de la grille",
  "PICKEDGRIDSETTING": "Paramètres de la grille sélectionnée",
  "DROPPEDGRIDSETTING": "Paramètres de la grille abandonnée",
  "ALLGRIDSETTING": "Paramètres de toutes les grilles",
  "STAGEDGRIDSETTING": "Paramètres de la grille en attente",
  "RELEASEDGRIDSETTING": "Paramètres de la grille libérée",
  "PACKEDGRIDSETTING": "Paramètres de la grille emballée",
  "RESTORE": "Restaurer",
  "SELECTEDUSER": "Sélectionner des utilisateurs",
  "SELECTEDUSERS": "Utilisateurs sélectionnés",
  "LABELS": "Étiquettes",
  "VISIBLE": "Visible",
  "ACTIVE": "Actif",
  "BTNVISIBLE": "Bouton visible",
  "BTNACTIVE": "Bouton actif",
  "MANDATORY": "Obligatoire",
  "ACTION": "Action",
  "SAVEFORMSETTING": "Paramètre du formulaire enregistré avec succès",
  "RESTOREFORMSETTING": "Paramètre du formulaire restauré avec succès",
  "RESTOREGRIDSETTING": "Paramètre de la grille restauré avec succès",
  "User_Id": "Identifiant utilisateur",
  "SELECTALL": "Sélectionner tout",
  "THEME": "Thème",
  "DISPLAYREPORT": "Afficher le rapport",
  "ABOUT": "À propos de",
  "SCHEDULER": "Planificateur de quai",
  "DOCKKEY": "Nom du quai",
  "FROMDATETIME": "De la date et heure",
  "TODATETIME": "À la date et heure",
  "TRUCKNO": "Numéro de camion",
  "DRIVERNAME": "Nom du conducteur",
  "DRIVERCONTACTNO": "Numéro de contact du conducteur",
  "SHIPINGCONTACTNO": "Numéro de contact du transporteur",
  "CITY": "Ville",
  "STATE": "État",
  "BUSINESSPARTNER": "Partenaire commercial",
  "ADDEVENT": "Ajouter un rendez-vous de quai",
  "EDITEVENT": "Modifier le rendez-vous de quai",
  "DOCKKEYLIST": "Liste des clés de quai",
  "DOCKNAME": "Nom du quai",
  "DOCKTYPE": "Type de quai",
  "SCHEDULEDOCK": "Planifier le quai",
  "FETCHUSERSETTINGS": "Récupérer les paramètres de l'utilisateur",
  "ACTIONSETTING": "Paramètres d'action",
  "WMSEWS": {
    "WEIGHINGFOR": "Pesée pour",
    "SELECTEDLOT": "Lot sélectionné",
    "REMAININGQTY": "Qté restante",
    "SCALEQTY": "Qté sur la balance",
    "SELECTSCALE": "Sélectionner la balance",
    "CLEARALL": "Effacer tout",
    "WEIGHT": "Poids",
    "TOTALQTY": "Qté totale",
    "ACCEPT": "Accepter",
    "SELECTLOT": "Veuillez sélectionner le numéro de lot.",
    "SELECTITEM": "Veuillez sélectionner la clé de l'article.",
    "CHKREMQTY": "La quantité restante doit être supérieure à zéro",
    "CHKSCALEQTY": "Quantité de la balance invalide",
    "CHKSCALELOTQTY": "La quantité de la balance ne doit pas être supérieure à la quantité du lot",
    "ZEROSCALEQTY": "Veuillez entrer la quantité de la balance",
    "CHKSELECTSCALE": "Veuillez sélectionner la balance"
  },
  "ASSIGNDIMENSIONNOTOPEN": "Applicable uniquement pour BME Finance",
  "QUERYWIZARD": {
    "ACTION": "Action",
    "TRANSFER": "Générer",
    "SEQNO": "Num. séq.",
    "SQL": "SQL",
    "JOIN": "Joindre",
    "LEVEL": "Niveau",
    "PARENTLEVEL": "Niveau parent",
    "FINALSQL": "SQL final",
    "QUERY": "Requête",
    "HIERARCHICALQUERY": "Requête hiérarchique",
    "COLUMN1": "Colonne 1",
    "HYPERLINK": "Hyperlien",
    "DISPLAYDRILLDOWNFIELD1": "Afficher le champ de forage 1",
    "DISPLAYDRILLDOWNFIELD2": "Afficher le champ de forage 2",
    "DRILLDOWNFIELD1": "Champ de forage 1",
    "DRILLDOWNFIELD2": "Champ de forage 2",
    "HYPERLINKID": "ID de l'hyperlien",
    "RECORDKEY1": "Clé d'enregistrement 1",
    "RECORDKEY2": "Clé d'enregistrement 2",
    "ROUTINGPATH": "Chemin de routage",
    "SCREENNAME": "Nom de l'écran",
    "TARGETSCREENNAME": "Nom de l'écran cible",
    "MSG": {
      "ENTERSQL": "Entrez le SQL",
      "ENTERJOIN": "Entrez la jointure",
      "ENTERLEVEL": "Entrez le niveau",
      "ENTERPARENTLEVEL": "Entrez le niveau parent",
      "ENTERFINALSQL": "Générer le SQL final",
      "MASTEREXISTS": "Enregistrez d'abord l'enregistrement principal.",
      "DELETELEVELCHECKK": "Cette ligne a un enregistrement parent, impossible de supprimer.",
      "NODATASAVE": "Aucune donnée à enregistrer.",
      "DISPLAYDRILLDOWNFIELD1": "Afficher le champ de forage 1",
      "ENTERSCREENNAME": "Entrez le nom de l'écran",
      "ENTERDISPLAYDRILLDOWNFIELD1": "Entrez le champ d'affichage du forage 1"
    }
  },
  "TEMPLATE_ID": "ID du modèle",
  "SDSNUMERICVALUE": {
    "TITLE": "Informations numériques SDS",
    "CASNUM": "Numéro CAS",
    "CODE": "Code",
    "DESCRIPTION": "Description",
    "VALUE": "Valeur",
    "NORECOD": "Aucun enregistrement créé pour le moment.",
    "CAS": "Numéro CAS",
    "BOILERPLATEGROUP": "Groupe de plaque de chaudière",
    "ITEM": "Clé de l'article",
    "DES": "Description"
  }
};

/***/ }),

/***/ 21470:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/hi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'hi',
  data: {
    'SidebarMenu': {
      "ChangeCompany": "कंपनी बदलो",
      "Dashboard": "डैशबोर्ड",
      "Favorites": "पसंदीदा",
      "TimeANDExpenses": "समय और व्यय",
      "Finanace": "वित्त",
      "Projects": "परियोजनाओं",
      "Receivables": "प्राप्तियों",
      "SalesOrders": "विक्रय आदेश",
      "Purchases": "खरीद",
      "Inventory": "इन्वेंटरी",
      "Configuration": "विन्यास",
      "QualityAssurance": "गुणवत्ता आश्वासन",
      "QualityControl": "गुणवत्ता नियंत्रण",
      "Sales": "बिक्री",
      "Master": "स्वामी",
      "ABC": "एबीसी",
      "Location": "स्थान",
      "Prospect": "आशा",
      "Customer": "ग्राहक",
      "ShipTo": "यहां भेजें",
      "SalesTemplate": "बिक्री खाका",
      "SalesKit": "बिक्री किट",
      "Territory": "क्षेत्र",
      "Salesperson": "विक्रेता",
      "SalesCommission": "बिक्री पर कमीशन",
      "SalesContract": "विक्रय अनुबंध",
      "ArchiveSalesContract": "पुरालेख बिक्री अनुबंध",
      "DisplayArchiveSalesContract": "संग्रह विक्रय अनुबंध प्रदर्शित करें",
      "PriceSearchOrder": "मूल्य खोज क्रम",
      "PromotionalPricing": "प्रचारक मूल्य निर्धारण",
      "PriceMatrix-Customer/Item": "मूल्य मैट्रिक्स-ग्राहक / आइटम",
      "PriceMatrix-Customer/Price Group": "मूल्य मैट्रिक्स-ग्राहक / मूल्य समूह",
      "PriceMatrix-Customer Class/Item": "मूल्य मैट्रिक्स-ग्राहक वर्ग / आइटम",
      "PriceMatrix-Customer Class/Price Group": "मूल्य मैट्रिक्स-ग्राहक वर्ग / मूल्य समूह",
      "PriceMatrix-Customer Class/Item Class": "मूल्य मैट्रिक्स-ग्राहक वर्ग / आइटम वर्ग",
      "PriceListMaster": "मूल्य सूची मास्टर",
      "RebateMaster": "रिबेट मास्टर",
      "RemitTo": "को प्रेषित",
      "SalesRecordAuthorization": "बिक्री रिकॉर्ड प्राधिकरण",
      "InvoiceSeries": "चालान श्रृंखला",
      "CustomerSpecificQC": "ग्राहक विशिष्ट QC",
      "RouteMaster": "रूट मास्टर",
      "RouteSequence": "मार्ग अनुक्रम",
      "Transactions": "लेन-देन",
      "Quotation/SalesRequisition": "उद्धरण / बिक्री अनुरोध",
      "QuickSalesOrderEntry": "त्वरित बिक्री आदेश प्रविष्टि",
      "SalesOrderEntry": "बिक्री आदेश प्रविष्टि",
      "PickList": "चुनी जाने वाली सूची",
      "MaintainShipment": "शिपमेंट बनाए रखें",
      "PrintBillofLading": "मुद्रण बिल का प्रिंट",
      "TransferToInvoice": "ट्रांसफर टू इनवॉयस",
      "SuperInvoice": "सुपर इनवॉइस",
      "DirectInvoice/CreditMemo": "प्रत्यक्ष चालान / क्रेडिट मेमो",
      "ShipmentRangeProcess": "शिपमेंट रेंज प्रक्रिया",
      "QuotationRangeProcessing": "कोटेशन रेंज प्रोसेसिंग",
      "PackingSlip": "पैकिंग पर्ची",
      "LightCRM": "प्रकाश सीआरएम",
      "InventoryBillOfLading": "लैडिंग की इन्वेंटरी बिल",
      "MaterialPackaging": "सामग्री पैकेजिंग",
      "ArchiveSalesOrder": "संग्रह बिक्री आदेश",
      "DisplaySalesOrderHistory": "बिक्री आदेश इतिहास प्रदर्शित करें",
      "InvoiceReversal": "चालान उलटा",
      "TruckLoadUtility": "ट्रक लोड उपयोगिता",
      "MasterReports": "मास्टर रिपोर्ट",
      "SalesContractReport": "बिक्री अनुबंध रिपोर्ट",
      "ProspectReport": "प्रॉस्पेक्ट रिपोर्ट",
      "CustomerReport": "ग्राहक रिपोर्ट",
      "ShipToReport": "शिप टू रिपोर्ट",
      "CustomerItemReport": "ग्राहक मद रिपोर्ट",
      "CustomerClassReport": "ग्राहक वर्ग की रिपोर्ट",
      "CustomerClassItemReport": "ग्राहक वर्ग मद रिपोर्ट",
      "CustomerByClassReport": "ग्राहक वर्ग रिपोर्ट द्वारा",
      "CustomerSalespersonReport": "ग्राहक विक्रेता की रिपोर्ट",
      "SalesCommissionReport": "बिक्री आयोग की रिपोर्ट",
      "SalespersonReport": "सैलरी रिपोर्ट",
      "TerritoryReport": "टेरिटरी रिपोर्ट",
      "PriceMatrixReport": "मूल्य मैट्रिक्स रिपोर्ट",
      "SalesKitReport": "बिक्री किट रिपोर्ट",
      "TransactionsReports": "लेनदेन रिपोर्ट",
      "PrintSalesOrderReport": "विक्रय आदेश रिपोर्ट प्रिंट करें",
      "Invoices": "चालान",
      "Pick-ListReport": "पिक-लिस्ट रिपोर्ट",
      "InventoryCommitmentReport": "इन्वेंटरी कमिटमेंट रिपोर्ट",
      "SalesAnalysisReport": "बिक्री विश्लेषण रिपोर्ट",
      "SOGrossProfitReport": "एसओ सकल लाभ रिपोर्ट",
      "SalesOrderHistoryReport": "बिक्री आदेश इतिहास रिपोर्ट",
      "SalesOrderByItem": "आइटम द्वारा बिक्री आदेश",
      "SalesOrderByCustomer": "ग्राहक द्वारा बिक्री आदेश",
      "ShipmentWithOnhandReport": "ओनहैंड रिपोर्ट के साथ शिपमेंट",
      "ShipmentOverdueReport": "शिपमेंट ओवरड्यू रिपोर्ट",
      "ShipmentStatusWiseReport": "शिपमेंट स्थिति वार रिपोर्ट",
      "ShipmentItemWiseReport": "शिपमेंट आइटम वार रिपोर्ट",
      "ProductionReconciliation": "उत्पादन सुलह",
      "MaterialAnalysisReport": "सामग्री विश्लेषण रिपोर्ट",
      "CertificateofAnalysis": "विश्लेषण का प्रमाण पत्र",
      "TruckDeliveryReport": "ट्रक वितरण रिपोर्ट",
      "Customization": "अनुकूलन",
      "TaskSetup": "कार्य सेटअप",
      "AccountsPayable": "देय खाते",
      "AccountsReceivable": "प्राप्य खाते",
      "GeneralLedger": "सामान्य बहीखाता",
      "Bank/Cash": "बैंक / नकद",
      "FinanceConfiguration": "वित्त विन्यास",
      "RandD": "आर और डी",
      "BOM": "बीओएम",
      "Routing": "मार्ग",
      "Production": "उत्पादन",
      "ProcessCell": "प्रक्रिया",
      "Costing": "लागत",
      "MPS/MRP": "एमपीएस / एमआरपी",
      "SDS": "एसडीएस",
      "CustomerMaster": "ग्राहक मास्टर",
      "CustomerSalesperson": "ग्राहक विक्रेता",
      "BillofLadingInventoryInfo": "बिल ऑफ इंवेंट्री इंफो",
      "BillofLadingShipToInfo": "शिप्टो जानकारी का बिल",
      "BillofLadingSetup": "लदान बिल का बिल",
      "CustomerItem": "ग्राहक वस्तु",
      "CustomerClass": "ग्राहक वर्ग",
      "CustomerClassItem": "ग्राहक वर्ग आइटम",
      "CustomerSaleableItems": "ग्राहक बिक्री योग्य आइटम",
      "CustomerGroupSaleableItems": "ग्राहक समूह बिक्री योग्य आइटम",
      "CustomerGroup": "ग्राहक समूह",
      "SalesApproverGroup": "बिक्री अनुमोदन समूह",
      "SOSeriesMaster": "एसओ सीरीज मास्टर",
      "DISeriesMaster": "DI श्रृंखला मास्टर",
      "SalesSetup": "बिक्री सेटअप"
    },
    "PublisherPortalTitle": "प्रकाशक पोर्टल",
    "UserManagementTitle": "उपयोगकर्ता प्रबंधन",
    "ListExportToExcel": "एक्सेल को निर्यात करें",
    "ListExportToPdf": "पीडीएफ को निर्यात करें",
    "UserManagementAddUser": "उपयोगकर्ता जोड़ें",
    "ListPrint": "छापने को निर्यात करें",
    "ListColumn": "कॉलम",
    "ListPermissions": "अनुमतियां",
    "CommonInvitedBy": "द्वारा आमंत्रित",
    "ListJoinedOn": "पर शामिल हुए",
    "ListRole": "भूमिका",
    "UserAdmin": "व्यवस्थापक",
    "CommonOther": "अन्य",
    "CommonStatus": "स्थिति",
    "UserActive": "सक्रिय",
    "UserInActive": "निष्क्रिय",
    "CommonAction": "कार्य",
    "UserAddForm": "नया उपयोगकर्ता फ़ार्म",
    "UserEditForm": "संपादित उपयोगकर्ता फ़ार्म",
    "CommonFirstName": "पहला नाम",
    "CommonFirstNameRequired": "पहला नाम आवश्यक है",
    "CommonLastName": "अंतिम नाम",
    "CommonLastNameRequired": "अंतिम नाम आवश्यक है",
    "CommonInviteEmail": "ईमेल आमंत्रित करें",
    "CommonEmail": "ईमेल",
    "CommonEmailRequired": "ईमेल आवश्यक है",
    "CommonInvalidEmail": "अमान्य ईमेल पता",
    "CommonSetPassword": "पासवर्ड सेट करें",
    "CommonPassword": "पासवर्ड",
    "CommonPasswordRequired": "पासवर्ड आवश्यक है",
    "CommonInvalidPassword": "अवैध पासवर्ड",
    "CommonPhone": "फ़ोन",
    "CommonInvitedOn": "पर आमंत्रित किया",
    "CommonInvite": "आमंत्रण",
    "CommonCancel": "रद्द करना",
    "CommonSave": "बचाना",
    "CommonUser": "उपयोगकर्ता",
    "CommonConcurrencyError": "कृपया अपनी स्क्रीन ताज़ा करें और पुनः प्रयास करें।",
    "CommonUnhandleError": "क्षमा करें, एक त्रुटि हुई, कृपया बाद में पुनः प्रयास करें। हम किसी भी प्रतिक्रिया या विवरण की सराहना करेंगे कि क्या गलत हुआ।",
    "CommonBusinessName": "व्यवास्यक नाम",
    "CommonSelectTheme": "चुनिंदा विषय",
    "CommonConfiguration": "विन्यास",
    "CommonBasicDetails": "मूल विवरण",
    "CommonCompany": "कंपनी का नाम",
    "CommonCompanyNameIsRequired": "कंपनी का नाम आवश्यक है",
    "CommonBusinessID": "बिजनेस आईडी",
    "CommonCompanyID": "कंपनी आईडी",
    "CommonAddress": "पता",
    "CommonAddressIsRequired": "पता आवश्यक है",
    "CommonPrimaryAdmin": "प्राथमिक व्यवस्थापक",
    "CommonPreAdminEmail": "पूर्व व्यवस्थापक ईमेल",
    "CommonBusinessPortalURL": "व्यवसाय पोर्टल URL",
    "CommonPartnerPortalURL": "सहयोगी पोर्टल URL",
    "CommonSubscriptionDetails": "सदस्यता विवरण",
    "CommonPlanName": "योजना का नाम",
    "CommonWantToChange?": "बदलना चाहते हैं?",
    "CommonActivationDate": "सक्रियण तिथि",
    "CommonEndDate": "अंतिम तिथि",
    "CommonMaximumUsers": "अधिकतम उपयोगकर्ता",
    "CommonPaymentCycle": "भुगतान चक्र",
    "CommonPriceInUSD": "मूल्य ",
    "CommonGracePeriod": "ग्रेस अवधि (दिनों में)",
    "CommonAutoRenewal": "स्वतः नवीनीकरण",
    "CommonCreditCardInfo": "क्रेडिट कार्ड की जानकारी",
    "CommonCreditCardNumberIsRequired": "क्रेडिट कार्ड नंबर आवश्यक है",
    "CommonChange": "परिवर्तन",
    "CommonConnectorConfig": "कनेक्टर कॉन्फ़िगरेशन",
    "CommonCapabilityConnectionString": "क्षमता कनेक्शन स्ट्रिंग",
    "CommonTestConnection": "परीक्षण कनेक्शन",
    "CommonSuccess": "सफलता",
    "CommonCapabilityStringIsRequired": "क्षमता स्ट्रिंग  आवश्यक है",
    "CommonConnectorConnectionString": "संबंधक कनेक्शन स्ट्रिंग",
    "CommonFailed": "अनुत्तीर्ण होना",
    "CommonConnectorStringIsRequired": "कनेक्टर स्ट्रिंग आवश्यक है",
    "CommonPaymentReceivableSettings": "भुगतान प्राप्य सेटिंग्स",
    "CommonPrimaryAC": "प्राथमिक A/C",
    "CommonPrimaryAccountNumberIsRequired": "प्राथमिक खाता संख्या  आवश्यक है",
    "CommonAddAnotherAccount": "एक और खाता जोड़ें",
    "ComonSelectPermission": "कृपया कम से कम एक अनुमति का चयन करें",
    "CommonAlert": "चेतावनी",
    "CommonCustomerNameRequired": "ग्राहक का नाम आवश्यक है",
    "CommonRefIdRequired": "CustomerRefId आवश्यक है",
    "CommonLanguage": "भाषा",
    "CommonCurrency": "मुद्रा",
    "CommonTimeZone": "समय क्षेत्र",
    "CommonDateFormat": "डेटा प्रारूप",
    "CommonInvoiceNameRequired": "चालान नाम आवश्यक है",
    "CommonInvoicenumberRequired": "चालान संख्या आवश्यक है",
    "CommonInvoicePoNumbeRequired": "चालान पीओ नंबर आवश्यक है",
    "CommonInvoiceOrderNumberRequired": "चालान आदेश संख्या आवश्यक है",
    "CommonInvoicAmountRequired": "चालान राशि आवश्यक है",
    "CommonCustomerStreetRequired": "स्ट्रीट आवश्यक है",
    "CommonCustomerStateRequired": "राज्य आवश्यक है",
    "CommonCustomerZipRequired": " पिन आवश्यक है",
    "CommonCustomerCityRequired": "शहर आवश्यक है",
    "CommonReinvite": "पुनः आमंत्रण",
    "CommonInvited": "आमंत्रित",
    "CommonActive": "सक्रिय",
    "CommonInactive": "निष्क्रिय",
    "CommonPayable": "देय",
    "CommonPay": "वेतन",
    "CommonReceipt": "भरसीद",
    "CommonPaymentStatus": "भुगतान की स्थिति",
    "CommonPaymentID": "भुगतान आईडी",
    "CommonAccountCardNo": "खाता #",
    "CommonPaymentService": "भुगतान सेवा",
    "CommonInvoiceCurrentStatus": "चालान वर्तमान स्थिति",
    "CommonInvoiceInvoiceOriginalAmount": "चालान मूल राशि",
    "CommonContactPhone": "संपर्क दूरभाष",
    "CommonName": "नाम",
    "CommonWebsite": "वेबसाइट",
    "CommonFaxNumber": "फैक्स नंबर",
    "CommonZipCode": "पिन कोड",
    "CommonCountry": "देश",
    "CommonState": "राज्य",
    "CommonCity": "शहर",
    "CommonStreet1": "गली 1",
    "CommonStreet2": "गली 2",
    "CommonStreet3": "गली 3",
    "CommonBillingAddress": "बिल भेजने का पता",
    "CommonCustomerID": "ग्राहक आईडी",
    "CommonCustomerName": "ग्राहक का नाम",
    "CommonTax": "कर",
    "CommonShipping": "शिपिंग",
    "CommonDiscount": "छूट",
    "CommonSubTotal": "उप कुल",
    "CommonLineItemOn": "लाइन आइटम पर",
    "CommonDueDate": "नियत तारीख",
    "CommonGeneratedOn": "पर उत्पन्न",
    "CommonOrderID": "आदेश कामतत्व",
    "CommonPONumber": "पी ओ संख्या",
    "CommonInvoiceName": "चालान का नाम",
    "CommonInvoiceNumber": "चालान आईडी",
    "CommonOrderInfo": "आदेश की जानकारी",
    "CommonCustomerInfo": "ग्राहक की जानकारी",
    "CommonInvoiceDetails": "चालान विवरण",
    "CommonPaidAmount": "भरी गई राशि",
    "CommonCustomerNotes": "ग्राहक नोट",
    "CommonCustomerNote": "ग्राहक नोट",
    "CommonItemCode": "आइटम कोड",
    "CommonQuantity": "मात्रा",
    "CommonPrice": "मूल्य",
    "CommonTotal": "संपूर्ण",
    "CommonLastMonth": "पिछले महीने",
    "CommonLast3Months": "पिछले 3 महीने",
    "CommonLast6Months": "पिछले 6 महीने",
    "CommonThisYear": "इस साल",
    "CommonDeletedInvoices": "हटाए गए चालान",
    "CommonApply": "लागू करें",
    "CommonOriginal": "मूल",
    "CommonOutstanding": "बकाया",
    "CommonAmountPayable": "देय राशि",
    "CommonPaymentMode": "भुगतान का प्रकार",
    "CommonACHPayment": "ACH भुगतान",
    "CommonBankName": "बैंक का नाम",
    "CommonBankAccountName": "बैंक खाता नाम",
    "CommonAccountNumber": "खाता संख्या",
    "CommonABARoutingNumber": "एबीए रोटिंग संक्या",
    "CommonAccountType": "खाते का प्रकार",
    "CommonSECCode": "SEC कोड",
    "CommonTrermsAgreement": "मैं अपने ऊपर दिए गए बैंक खाते से भुगतान करने के लिए सहमत हूं।",
    "CommonNotes": "टिप्पणियाँ",
    "CommonPaymentForm": "भुगतान पर्ची",
    "CommonCreditCardPayment": "क्रेडिट कार्ड से भुगतान",
    "CommonPaymentOn": "पर भुगतान",
    "CommonContactPersonDetails": "संपर्क व्यक्ति विवरण",
    "CommonVoidPayment": "शून्य",
    "CommonRefundPayment": "धन की वापसी",
    "CommonAmount": "रकम",
    "CommonSubTotalAmount": "सबटोटल की आवश्यकता है।",
    "Commonblank": "(रिक्त)",
    "CommonRequiredValidation": "यह जानकारी आवश्यक है",
    "CommonIpaymentBusinessPortal": "iPayment बिज़नेस पोर्टल",
    "CommonVersion": "संस्करण",
    "CommonChangePassword": "पासवर्ड बदलें",
    "CommonCurrentPassword": "वर्तमान पासवर्ड",
    "CommonForgotYourPassword?": "अपना पासवर्ड भूल गए?",
    "CommonNewPassword": "नया पासवर्ड",
    "CommonConfirmPassowrd": "पासवर्ड  की पुष्टि करें",
    "CommonSignInToYourCompany": "अपने व्यवसाय में साइन इन करें",
    "CommonUpcomingPayments": "आगामी भुगतान",
    "CommonRecentPayments": "हाल ही के बदलाव",
    "CommonTotalOpenInvoices": "कुल खुला चालान",
    "CommonPartialPaidInvoicesOpen": "आंशिक भुगतान चालान (खुला)",
    "CommonTotalPaidInvoices": "कुल भुगतान किए गए चालान",
    "CommonPaidInvoicesLastWeek": "भुगतान किए गए चालान (अंतिम सप्ताह)",
    "CommonPaidLastWeek": "अदा (अंतिम सप्ताह)",
    "CommonPaymentsDoneInUSD": "भुगतान किया गया",
    "CommonEditTicketForm": "टिकट फॉर्म को संपादित करें",
    "CommonCreatedBy": "के द्वारा बनाई गई",
    "CommonCreatedOn": "को निर्मित",
    "CommonContactEmail": "ई - मेल से संपर्क करे",
    "CommonCustomerDetails": "उपभोक्ता विवरण",
    "CommonIssueDetails": "जारी विवरण",
    "CommonTitle": "शीर्षक",
    "CommonTitleIsRequired": "शीर्षक आवश्यक है",
    "CommonDescription": "विवरण",
    "CommonDescriptionIsRequired": "विवरण आवश्यक है",
    "CommonTicketID#": "टिकट आईडी",
    "CommonPriority": "प्राथमिकता",
    "CommonAssignedTo": "को सौंपना",
    "CommonModifiedOn": "पर संशोधित",
    "CommonModifiedBy": "द्वारा संशोधित",
    "CommonAttachment": "आसक्ति",
    "CommonAddYourComments": "अपनी टिप्पणियाँ जोड़ें",
    "CommonAddYourComment": "अपनी टिप्पणी जोडे",
    "CommonComments": "टिप्पणियाँ",
    "CommonDeletedTickets": "हटाए गए टिकट",
    "CommonTenantName": "किरायेदार का नाम",
    "CommonLow": "कम",
    "CommonMedium": "मध्यम",
    "CommonHigh": "उच्च",
    "CommonOpen": "खुला",
    "CommonOnHold": "होल्ड पर",
    "CommonResolved": "हल",
    "CommonClosed": "बन्द है",
    "CommonNewTicketForm": "नया टिकट फॉर्म",
    "CommonCreate": "रचें",
    "CommonBusinessDetails": "व्यापार विवरण",
    "CommonAddTicket": "टिकट जोड़ें",
    "CommonTicketId": "टिकट आईडी",
    "CommonNewCustomerForm": "नया ग्राहक प्रपत्र",
    "CommonGeneral": "सामान्य",
    "CommonPaymentDetails": "भुगतान विवरण",
    "CommonContactInfo": "संपर्क सूचना",
    "CommonAdminUserDetails": "व्यवस्थापक उपयोगकर्ता विवरण",
    "CommonApplicationsDetails": "आवेदन विवरण",
    "CommonEnabledServices": "सक्षम सेवाएँ",
    "CommonCustomerPortalURL": "ग्राहक पोर्टल URL",
    "CommonCreditCardDetails": "क्रेडिट कार्ड की जानकारी",
    "CommonSavedCreditCards": "सहेजे गए क्रेडिट कार्ड",
    "CommonNameOnCard": "कार्ड पर नाम",
    "CommonCardExpiry": "कार्ड एक्सपायरी",
    "CommonCardNumber": "कार्ड नंबर",
    "CommonExpiry": "समाप्ति",
    "CommonCVV": "सीवीवी",
    "CommonCardType": "कार्ड के प्रकार",
    "CommonAddCreditCard": "क्रेडिट कार्ड जोड़ें",
    "CommonACHPaymentDetails": "ACH भुगतान विवरण",
    "CommonCustomerAddress": "ग्राहक का पता",
    "CommonSameAsAboveAddress": "उपरोक्त पते के समान",
    "CommonSaveInvite": "सहेजें और आमंत्रित करें",
    "CommonEditCustomerForm": "ग्राहक प्रपत्र संपादित करें",
    "CommonAddCustomer": "ग्राहक जोड़ें",
    "CommonCustomer": "ग्राहक",
    "CommonID": "आईडी",
    "CommonOpenInvoice": "चालान खोलें",
    "CommonUpcomingDueDate": "आगामी नियत तिथि",
    "CommonLastPaymentOn": "अंतिम भुगतान चालू",
    "CommonTotalOutstanding": "कुल बकाया",
    "CommonPending": "अपूर्ण",
    "Common(Pending)": "(लंबित)",
    "CommonDetails": "विवरण",
    "CommonDesktop": "डेस्कटॉप",
    "CommonSMS": "एसएमएस",
    "CommonHelpDeskNotifications": "हेल्प डेस्क सूचनाएं",
    "CommonMyTicketStatusIsChanged": "मेरा टिकट स्टेटस बदल गया है",
    "CommonCustomerTicketStatusIsChanged": "ग्राहक टिकट की स्थिति बदल गई है।",
    "CommonMyTicketIsReassigned": "मेरा टिकट फिर से जारी किया गया है",
    "CommonCustomerTicketIsReassigned": "ग्राहक टिकट फिर से दिया जाता है।",
    "CommonMyTicketPriorityIsChanged": "मेरा टिकट प्राथमिकता बदल दी जाती है।",
    "CommonCustomerTicketPriorityIsChanged": "ग्राहक टिकट प्राथमिकता बदल दी जाती है।",
    "CommonNewCommentAddedInMyTicket": "मेरा टिकट में नई टिप्पणी जोड़ी गई।",
    "CommonNewCommentAddedInCustomerTicket": "ग्राहक टिकट में नई टिप्पणी जोड़ी गई।",
    "CommonInvoiceNotifications": "चालान सूचनाएँ",
    "CommonInvoicePaymentIsReceived": "चालान भुगतान प्राप्त होता है।",
    "CommonCustomersReport": "ग्राहक रिपोर्ट",
    "CommonLastWeek": "पिछले सप्ताह",
    "CommonFrom": "से",
    "CommonTo": "To",
    "CommonTotalInvoices": "कुल चालान",
    "CommonOpenInvoices": "चालान खोलें",
    "CommonCustomerWisePaymentReport": "ग्राहक समझदार भुगतान रिपोर्ट",
    "CommonPartialPaidInvoices": "आंशिक भुगतान चालान",
    "CommonPaidInvoices": "भुगतान किया गया चालान",
    "CommonCreditAmount": "राशि क्रेडिट करें",
    "CommonInvoicesReport": "चालान रिपोर्ट",
    "CommonPaidOn": "भुगतान करना",
    "CommonAmountPaid": "राशि का भुगतान",
    "CommonPaymentReceivedReport": "भुगतान प्राप्त रिपोर्ट",
    "CommonPaymentType": "भुगतान के प्रकार",
    "CommonInvoiceID": "चालान आईडी",
    "CommonOriginalAmount": "मूल राशि",
    "CommonPortalUsersReport": "पोर्टल उपयोगकर्ता रिपोर्ट",
    "CommonTicketsReport": "टिकट रिपोर्ट",
    "CommonInvoicesDetails": "चालान विवरण",
    "CommonBankAccountNameIsRequired ": "BankAccountName आवश्यक है",
    "AccountNumberIsRequired": "खाता संख्या आवश्यक है",
    "CommonABARoutingNumberIsRequired": "ABA RoutNumber आवश्यक है",
    "CommonOriginated": "उत्पन्न हुई",
    "CommonReturned": "लौटा हुआ",
    "CommonSetteled": "बसे हुए",
    "CommonOk": "ठीक",
    "CommonMsgPaymentHistory": "आप इस विंडो को बंद कर सकते हैं और भुगतान इतिहास में वर्तमान स्थिति देख सकते हैं",
    "CommonInvoice": "बीजक",
    "CommonInvoiceNumb": "बीजक संख्या",
    "CommonPaid": "भुगतान किया है",
    "CommonDue": "देय",
    "CommonBlueStar": "नीला तारा",
    "CommonBillToAddress": "इस पते पर बिल करें",
    "CommonlineItemsOn": "लाइन आइटम पर",
    "CommonVeriCheckACH": "वेरिचेक ACH",
    "CommonVoided": "अमान्य कर",
    "CommonVoid": "शून्य",
    "CommonVoidRequested": "शून्य अनुरोध किया",
    "CommonRefundRequested": "धनवापसी का अनुरोध किया गया",
    "CommonRefunded": "वापसी की गई है",
    "CommonRefundCancelled": "वापसी रद्द कर दी गई",
    "CommonVeriCheckACH ": "वेरिचेक ACH",
    "CommonMonthly": "महीने के",
    "CommonQuartly": "त्रैमासिक",
    "CommonHalfyearly": "अर्धवार्षिक",
    "CommonYearly": "सालाना",
    "CommonNewInvoiceForm": "नया चालान फॉर्म",
    "CommonSTEP": "कदम",
    "CommonPrefix": "उपसर्ग",
    "Commonselect": "चुनते हैं",
    "CommonAddNew": "नया जोड़ें",
    "CommonNumber": "संख्या",
    "CommonTaxRate": "कर दर",
    "CommonAddMoreItems": "अधिक आइटम जोड़ें",
    "CommonNext": "आगामी",
    "CommonBack": "वापस",
    "CommonDone": "किया हुआ",
    "CommonLastLogin": "अंतिम लॉगइन:",
    "CommonAdmin": "व्यवस्थापक",
    "CommonBusinessPortal": "व्यापार पोर्टल",
    "CommonMyProfile": "मेरी प्रोफाइल",
    "CommonChangePassword ": "पासवर्ड बदलें",
    "CommonSync": "सिंक",
    "CommonPreferences": "पसंद",
    "CommonAbout": "के बारे में",
    "CommonLogout": "लोग आउट",
    "CommonToggleNavigation": "टॉगल से संचालित करना",
    "CommonHome": "होम",
    "CommonCustomers": "ग्राहकों",
    "CommonInvoices": "चालान",
    "CommonPaymentHistory": "भुगतान इतिहास",
    "CommonReports": "रिपोर्ट",
    "CommonPaymentReceived": "भुगतान प्राप्त",
    "CommonCustomerWisePayment": "ग्राहक समझदार भुगतान",
    "PortalUsers": "पोर्टल उपयोगकर्ता",
    "CommonTickets": "टिकट",
    "CommonBusinessPortalSettings": "बिजनेस पोर्टल सेटिंग्स",
    "CommonConfigurations": "विन्यास",
    "CommonBrandingSettings": "ब्रांडिंग",
    "CommonAlerts": "अलर्ट",
    "CommonHelpDesk": "सहायता केंद्र",
    "CommonCustomerTickets": "ग्राहक टिकट",
    "CommonMyTickets": "मेरे टिकट",
    "CommonDocumentation": "प्रलेखन",
    "CommonPoweredBy": "द्वारा संचालित",
    "CommonCompanyPortalSettings": "कंपनी पोर्टल सेटिंग्स",
    "CommonDelete": "हटाना",
    "CommonNoResultFound": "कोई परिणाम नहीं मिला",
    "CommonPaymentDate": "भुगतान तिथि",
    "CommonInvoicesStatus": "चालान की स्थिति",
    "CommonPaymentsDoneInLast6Months": "पिछले 6 महीनों में किया गया भुगतान",
    "CommonRecentTranscations": "हाल ही के बदलाव",
    "CommonPaid(Closed)": "भुगतान किया (बंद)",
    "CommonNotPaid(Open)": "भुगतान नहीं (खुला)",
    "CommonPartialPaid(Open)": "आंशिक भुगतान (खुला)",
    "CommonServices": "सेवाएं",
    "CommonPartnerCompanySubDomain": "सहयोगी कंपनी उप डोमेन",
    "CommonPortalDetails": "पोर्टल विवरण",
    "CommonPortalURL": "पोर्टल URL",
    "CommonEdit": "संपादित करें",
    "CommonAddAnAccount": "एक खाता जोड़ें",
    "CommonPayments": "भुगतान",
    "CommonNewAttachmentAddedInMyTicket": "माई टिकट में नया अटैचमेंट जोड़ा गया।",
    "CommonNewAttachmentAddedInCustomerTicket": "कस्टमर टिकट में नया अटैचमेंट जोड़ा गया।",
    "CommonRefreshStatus": "ताज़ा स्थिति",
    "CommonID#": "आईडी#",
    "CommonSubscription": "अंशदान",
    "CommonCompanySubDomain": "कंपनी उप डोमेन",
    "CommonMyPortalURL": "मेरा पोर्टल URL",
    "CommonPortalLocalizationSettings": "पोर्टल स्थानीयकरण",
    "CommonDeletedOn": "पर हटा दिया गया",
    "CommonDeletedBy": "द्वारा हटा दिया गया",
    "CommonByJoiningYouAgreeToOur": "शामिल होने से आप हमारे लिए सहमत हैं",
    "CommonTerms": "नियम",
    "CommonPrivacyPolicy": "गोपनीयता नीति",
    "CommonAnd": "तथा",
    "CommonEnterYourCompanyID": "अपनी कंपनी की आईडी डालें",
    "CommonDontRememberCompanyID": "आपकी कंपनी की उप डोमेन नहीं है?",
    "CommonClickHere": "यहां क्लिक करे",
    "CommonWantToCreate": "एक नया व्यवसाय खाता बनाना चाहते हैं?",
    "CommonFindMyCompanyID": "मेरी उप डोमेन खोजें!",
    "CommonFindMyCompanyIDTitle": "हम आपको अपनी लॉगिन आईडी की पुष्टि करने के लिए एक ईमेल भेजेंगे और अपनी उप डोमेन  खोजें, जिसके द्वारा आप जुड़ सकते हैं।",
    "CommonEnterYourEmail": "अपना ईमेल दर्ज करें",
    "CommonContinue": "जारी रहना",
    "CommonCheckYourEmail": "अपने ईमेल की जाँच करें!",
    "CommonCheckYourTitle": "हमने आपको एक लिंक ईमेल किया है",
    "CommonGetStartedTitle": "लिंक पर क्लिक करें और आरंभ करें।",
    "CommonEnteredWrongEmail": "गलत ईमेल दर्ज किया गया?",
    "CommonItemName": "Item Name",
    "PFCommonPermission": "Permission",
    "PFCommonPermissions": "Permissions",
    "PFCommonPortalUsers": "Portal Users",
    "PFCommonUsers": "Users",
    "PFCommonUser": "User",
    "PFCommonActive": "Active",
    "PFCommonInActive": "InActive",
    "PFCommonAdmin": "Admin",
    "PFCommonAction": "Action",
    "PFCommonPending": "Pending",
    "CommonPortalOwnerName": "Portal Owner Name",
    "CommonPoweredByText": "Powered by Text",
    "CommonCopyrightText": "Copyright",
    "CommonPublisherPortalTheme": "Publisher Portal Theme",
    "CommonTenantTickets": "Business Tickets",
    "CommonTenantID": "किरायेदार आईडी",
    "CommonAdd": "Add",
    "CommonDragDropFileText": "Drag and Drop files here or Click on Upload.",
    "CommonValidFileFormatMsg": "Please enter a valid file format. Supported file formats are: JPG,JPEG,TIFF,GIF,PNG,WEBP,SVG,BMP,TIF,ICO.",
    "CommonError": "Error",
    "CommonFileSizeError": "The file size is too large. Please select a file of size upto 10 MB.",
    "CommonMoreThanOneFileError": "Multiple files not allowed",
    "CommonOrderNameRequired": "Order name is required.",
    "CommonFillAllRequiredFeildErrorMsg": "Please fill in the required fields and provide valid data.",
    "CommonContactUs": "Contact Us",
    "CommonContactFormTitle": "Type your message below. We'll get back to you at the earliest!",
    "CommonMessage": "Message",
    "CommonMailingAddress": "Mailing Address",
    "CommonSend": "Send",
    "CommonNoRecordsAvailable": "कोई रिकॉर्ड नहीं मिला"
  }
};

/***/ }),

/***/ 38394:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/pt.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'pt',
  data: {
    'SidebarMenu': {
      "Common": "Comum",
      'Inbound': 'Entrada',
      'Outbound': 'Saída',
      'Reports': 'Relatórios',
      'Internal Movements': 'Movimentos Internos',
      'Inquiry and Reports': 'Consulta e Relatórios',
      'Admin': 'Administração',
      'Finance': 'Finanças',
      "ChangeCompany": "Trocar Empresa",
      "Dashboard": "Painel",
      "Favorites": "Favoritos",
      "TimeANDExpenses": "Tempo e Despesas",
      "Projects": "Projetos",
      "Receivables": "Recebíveis",
      "General Table View": "Visualização Geral da Tabela",
      "SalesOrders": "Pedidos de Venda",
      "Purchase": "Compras",
      "Inventory": "Inventário",
      "Configuration": "Configuração",
      "WMS Configuration": "Configuração WMS",
      "Put Away": "Armazenar",
      "QualityAssurance": "Garantia de Qualidade",
      "Quality Control": "Controle de Qualidade",
      "Sales": "Vendas",
      "Master": "Mestre",
      "ABC": "ABC",
      "Location": "Localização",
      "Prospect": "Prospecto",
      "Customer": "Cliente",
      "ShipTo": "Enviar Para",
      "SalesTemplate": "Modelo de Vendas",
      "SalesKit": "Kit de Vendas",
      "Territory": "Território",
      "Salesperson": "Vendedor",
      "SalesCommission": "Comissão de Vendas",
      "SalesContract": "Contrato de Vendas",
      "ArchiveSalesContract": "Arquivar Contrato de Vendas",
      "DisplayArchiveSalesContract": "Exibir Contrato de Vendas Arquivado",
      "PriceSearchOrder": "Buscar Ordem de Preço",
      "PromotionalPricing": "Preços Promocionais",
      "PriceMatrix-Customer/Item": "Matriz de Preços - Cliente/Item",
      "PriceMatrix-Customer/Price Group": "Matriz de Preços - Cliente/Grupo de Preço",
      "PriceMatrix-Customer Class/Item": "Matriz de Preços - Classe de Cliente/Item",
      "PriceMatrix-Customer Class/Price Group": "Matriz de Preços - Classe de Cliente/Grupo de Preço",
      "PriceMatrix-Customer Class/Item Class": "Matriz de Preços - Classe de Cliente/Classe de Item",
      "PriceListMaster": "Lista de Preços Mestre",
      "RebateMaster": "Mestre de Descontos",
      "RemitTo": "Remeter Para",
      "SalesRecordAuthorization": "Autorização de Registros de Vendas",
      "InvoiceSeries": "Série de Faturas",
      "CustomerSpecificQC": "Controle de Qualidade Específico do Cliente",
      "RouteMaster": "Mestre de Rota",
      "RouteSequence": "Sequência de Rota",
      "Transactions": "Transações",
      "Quotation/SalesRequisition": "Cotação/Requisição de Vendas",
      "QuickSalesOrderEntry": "Entrada Rápida de Pedidos de Vendas",
      "SalesOrderEntry": "Entrada de Pedidos de Vendas",
      "PickList": "Lista de Picking",
      "MaintainShipment": "Manter Remessa",
      "PrintBillofLading": "Imprimir Conhecimento de Embarque",
      "TransferToInvoice": "Transferir para Fatura",
      "SuperInvoice": "Super Fatura",
      "DirectInvoice/CreditMemo": "Fatura Direta/Memo de Crédito",
      "ShipmentRangeProcess": "Processo de Faixa de Remessa",
      "QuotationRangeProcessing": "Processamento de Faixa de Cotação",
      "PackingSlip": "Romaneio de Carga",
      "LightCRM": "CRM Leve",
      "InventoryBillOfLading": "Conhecimento de Embarque do Inventário",
      "MaterialPackaging": "Embalagem de Material",
      "ArchiveSalesOrder": "Arquivar Pedido de Vendas",
      "DisplaySalesOrderHistory": "Exibir Histórico de Pedidos de Vendas",
      "InvoiceReversal": "Estorno de Fatura",
      "TruckLoadUtility": "Utilitário de Carregamento de Caminhão",
      "MasterReports": "Relatórios Mestres",
      "SalesContractReport": "Relatório de Contrato de Vendas",
      "ProspectReport": "Relatório de Prospecto",
      "CustomerReport": "Relatório de Cliente",
      "ShipToReport": "Relatório de Envio Para",
      "CustomerItemReport": "Relatório de Cliente/Item",
      "CustomerClassReport": "Relatório de Classe de Cliente",
      "CustomerClassItemReport": "Relatório de Classe de Cliente/Item",
      "CustomerByClassReport": "Relatório de Cliente por Classe",
      "CustomerSalespersonReport": "Relatório de Cliente por Vendedor",
      "SalesCommissionReport": "Relatório de Comissão de Vendas",
      "SalespersonReport": "Relatório de Vendedor",
      "TerritoryReport": "Relatório de Território",
      "PriceMatrixReport": "Relatório de Matriz de Preços",
      "SalesKitReport": "Relatório de Kit de Vendas",
      "TransactionsReports": "Relatórios de Transações",
      "PrintSalesOrderReport": "Imprimir Relatório de Pedido de Vendas",
      "Invoices": "Faturas",
      "Pick-ListReport": "Relatório de Lista de Picking",
      "InventoryCommitmentReport": "Relatório de Compromisso de Inventário",
      "SalesAnalysisReport": "Relatório de Análise de Vendas",
      "SOGrossProfitReport": "Relatório de Lucro Bruto do Pedido de Vendas",
      "SalesOrderHistoryReport": "Relatório de Histórico de Pedidos de Vendas",
      "SalesOrderByItem": "Pedido de Vendas por Item",
      "SalesOrderByCustomer": "Pedido de Vendas por Cliente",
      "ShipmentWithOnhandReport": "Relatório de Remessa com Estoque Atual",
      "ShipmentOverdueReport": "Relatório de Remessa Atrasada",
      "ShipmentStatusWiseReport": "Relatório de Remessa por Status",
      "ShipmentItemWiseReport": "Relatório de Remessa por Item",
      "ProductionReconciliation": "Conciliação de Produção",
      "MaterialAnalysisReport": "Relatório de Análise de Material",
      "CertificateofAnalysis": "Certificado de Análise",
      "TruckDeliveryReport": "Relatório de Entrega de Caminhão",
      "Customization": "Customização",
      "TaskSetup": "Configuração de Tarefas",
      "Accounts Payable": "Contas a Pagar",
      "Accounts Receivable": "Contas a Receber",
      "General Ledger": "Livro Razão",
      "Bank/Cash": "Banco/Dinheiro",
      "Finance Configuration": "Configuração Financeira",
      "R and D": "P and D",
      "BOM": "Lista de Materiais",
      "Routing": "Roteamento",
      "Production": "Produção",
      "ProcessCell": "Célula de Processo",
      "Costing": "Custo",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "Cadastro de Cliente",
      "CustomerSalesperson": "Cliente Vendedor",
      "BillofLadingInventoryInfo": "Informações de Inventário do Conhecimento de Embarque",
      "BillofLadingShipToInfo": "Informações de Envio do Conhecimento de Embarque",
      "BillofLadingSetup": "Configuração do Conhecimento de Embarque",
      "CustomerItem": "Cliente Item",
      "CustomerClass": "Classe de Cliente",
      "CustomerClassItem": "Classe de Cliente Item",
      "CustomerSaleableItems": "Itens Vendáveis para o Cliente",
      "CustomerGroupSaleableItems": "Itens Vendáveis para o Grupo de Clientes",
      "CustomerGroup": "Grupo de Clientes",
      "SalesApproverGroup": "Grupo de Aprovação de Vendas",
      "SOSeriesMaster": "Mestre de Série de Pedidos de Vendas",
      "DISeriesMaster": "Mestre de Série de Faturas",
      "SalesSetup": "Configuração de Vendas",
      "Sample Management": "Gestão de Amostras",
      "NPD/SRM": 'NPD/SRM',
      "CRM": "CRM"
    },
    "PublisherPortalTitle": "Portal do Editor",
    "UserManagementTitle": "Gestão de Usuários",
    "ListExportToExcel": "Exportar para Excel",
    "ListExportToPdf": "Exportar para PDF",
    "UserManagementAddUser": "Adicionar Usuário",
    "ListPrint": "Imprimir",
    "ListColumn": "Colunas",
    "ListPermissions": "Permissões",
    "CommonInvitedBy": "Convidado por",
    "ListJoinedOn": "Entrou em",
    "ListRole": "Função",
    "UserAdmin": "Admin",
    "CommonOther": "Outro",
    "CommonStatus": "Status",
    "UserActive": "Ativo",
    "UserInActive": "Inativo",
    "CommonAction": "Ação",
    "UserAddForm": "Formulário de Novo Usuário",
    "UserEditForm": "Formulário de Edição de Usuário",
    "CommonFirstName": "Nome",
    "CommonFirstNameRequired": "O nome é obrigatório.",
    "CommonLastName": "Sobrenome",
    "CommonLastNameRequired": "O sobrenome é obrigatório.",
    "CommonInviteEmail": "E-mail de Convite",
    "CommonEmail": "E-mail",
    "CommonEmailRequired": "O e-mail é obrigatório.",
    "CommonInvalidEmail": "Endereço de e-mail inválido.",
    "CommonSetPassword": "Definir Senha",
    "CommonPassword": "Senha",
    "CommonPasswordRequired": "A senha é obrigatória.",
    "CommonInvalidPassword": "Senha inválida.",
    "CommonPhone": "Telefone",
    "CommonInvitedOn": "Convidado em",
    "CommonInvite": "Convidar",
    "CommonCancel": "Cancelar",
    "CommonSave": "Salvar",
    "CommonUser": "Usuário",
    "CommonConcurrencyError": "Atualize sua tela e tente novamente.",
    "CommonUnhandleError": "Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde. Agradecemos qualquer feedback ou detalhes sobre o que deu errado.",
    "CommonBrandingSettings": "Branding",
    "CommonBusinessName": "Nome da Empresa",
    "CommonSelectTheme": "Selecionar Tema",
    "CommonConfiguration": "Configuração",
    "CommonBasicDetails": "Detalhes Básicos",
    "CommonCompany": "Nome da Empresa",
    "CommonCompanyNameIsRequired": "O nome da empresa é obrigatório",
    "CommonBusinessID": "ID da Empresa",
    "CommonCompanyID": "ID da Empresa",
    "CommonAddress": "Endereço",
    "CommonAddressIsRequired": "O endereço é obrigatório",
    "CommonPrimaryAdmin": "Administrador Primário",
    "CommonPreAdminEmail": "E-mail Pré-Admin",
    "CommonBusinessPortalURL": "URL do Portal da Empresa",
    "CommonPartnerPortalURL": "URL do Portal do Parceiro",
    "CommonSubscriptionDetails": "Detalhes da Assinatura",
    "CommonPlanName": "Nome do Plano",
    "CommonWantToChange?": "Deseja alterar?",
    "CommonActivationDate": "Data de Ativação",
    "CommonEndDate": "Data de Término",
    "CommonMaximumUsers": "Número Máximo de Usuários",
    "CommonPaymentCycle": "Ciclo de Pagamento",
    "CommonPriceInUSD": "Preço (em USD)",
    "CommonGracePeriod": "Período de Carência (em Dias)",
    "CommonAutoRenewal": "Renovação Automática",
    "CommonCreditCardInfo": "Informações do Cartão de Crédito",
    "CommonCreditCardNumberIsRequired": "O número do cartão de crédito é obrigatório",
    "CommonChange": "Alterar",
    "CommonConnectorConfig": "Configuração do Conector",
    "CommonCapabilityConnectionString": "String de Conexão de Capacidade",
    "CommonTestConnection": "Testar Conexão",
    "CommonSuccess": "Sucesso",
    "CommonCapabilityStringIsRequired": "A string de capacidade é obrigatória",
    "CommonConnectorConnectionString": "String de Conexão do Conector",
    "CommonFailed": "Falha",
    "CommonConnectorStringIsRequired": "A string do conector é obrigatória",
    "CommonPaymentReceivableSettings": "Configurações de Recebimento de Pagamentos",
    "CommonPrimaryAC": "Conta Principal",
    "CommonPrimaryAccountNumberIsRequired": "O número da conta principal é obrigatório",
    "CommonAddAnotherAccount": "Adicionar outra conta",
    "ComonSelectPermission": "Por favor, selecione pelo menos uma permissão",
    "CommonAlert": "Alerta",
    "CommonCustomerNameRequired": "O nome do cliente é obrigatório.",
    "CommonRefIdRequired": "O RefId do cliente é obrigatório.",
    "CommonLanguage": "Idioma",
    "CommonCurrency": "Moeda",
    "CommonTimeZone": "Fuso Horário",
    "CommonDateFormat": "Formato de Data",
    "CommonInvoiceNameRequired": "O nome da fatura é obrigatório.",
    "CommonInvoicenumberRequired": "O número da fatura é obrigatório.",
    "CommonInvoicePoNumbeRequired": "O número da Ordem de Compra (PO) é obrigatório.",
    "CommonInvoiceOrderNumberRequired": "O número da ordem é obrigatório.",
    "CommonInvoicAmountRequired": "O valor é obrigatório.",
    "CommonStreet1Required": "A Rua 1 é obrigatória.",
    "CommonCityRequired": "A cidade é obrigatória.",
    "CommonStateRequired": "O estado é obrigatório.",
    "CommonCountryRequired": "O país é obrigatório.",
    "CommonZipcodeRequired": "O CEP é obrigatório.",
    "CommonInvoiceItemDescriptionRequired": "A descrição do item é obrigatória.",
    "CommonInvoiceItemCodeRequired": "O código do item é obrigatório.",
    "CommonInvoiceItemPrice": "O preço do item é obrigatório.",
    "CommonReinvite": "Reconvidar",
    "CommonInvited": "Convidado",
    "CommonActive": "Ativo",
    "CommonInactive": "Inativo",
    "CommonPayable": "Pagável",
    "CommonPay": "Pagar",
    "CommonSaveInvoiceAndGenerateUrl": "Criar fatura e gerar URL de pagamento rápido",
    "CommonReceipt": "Recibo",
    "CommonPaymentStatus": "Status da Transação",
    "CommonPaymentID": "ID da Transação",
    "CommonAccountCardNo": "Conta / Nº do Cartão",
    "CommonAccountOrCard": "Conta / Cartão",
    "CommonRefreshstatus": "Atualizar status",
    "CommonPaymentReceipt": "Recibo da Transação",
    "CommonPaymentService": "Serviço da Transação",
    "CommonInvoiceCurrentStatus": "Status Atual da Fatura",
    "CommonInvoiceInvoiceOriginalAmount": "Valor Original da Fatura",
    "CommonContactPhone": "Telefone de Contato",
    "CommonName": "Nome",
    "CommonWebsite": "Site",
    "CommonFaxNumber": "Número de Fax",
    "CommonZipCode": "Código Postal",
    "CommonCountry": "País",
    "CommonState": "Estado",
    "CommonCity": "Cidade",
    "CommonStreet1": "Rua 1",
    "CommonStreet2": "Rua 2",
    "CommonStreet3": "Rua 3",
    "CommonBillingAddress": "Endereço de Cobrança",
    "CommonCustomerID": "ID do Cliente",
    "CommonCustomerName": "Nome do Cliente",
    "CommonTax": "Imposto",
    "CommonShipping": "Envio",
    "CommonDiscount": "Desconto",
    "CommonSubTotal": "Subtotal",
    "CommonLineItemOn": "Item na Linha",
    "CommonDueDate": "Data de Vencimento",
    "CommonGeneratedOn": "Gerado em",
    "CommonOrderID": "ID do Pedido",
    "CommonPONumber": "Número do Pedido de Compra (PO)",
    "CommonInvoiceName": "Nome da Fatura",
    "CommonInvoiceNumber": "ID da Fatura",
    "CommonOrderInfo": "Informações do Pedido",
    "CommonCustomerInfo": "Informações do Cliente",
    "CommonInvoiceDetails": "Detalhes da Fatura",
    "CommonPaidAmount": "Valor Pago",
    "CommonCustomerNotes": "Notas do Cliente",
    "CommonCustomerNote": "Nota do Cliente",
    "CommonItemCode": "Código do Item",
    "CommonQuantity": "Quantidade",
    "CommonPrice": "Preço",
    "CommonPricePerunit": "Preço Unitário",
    "CommonTotal": "Total",
    "CommonLastMonth": "Mês Passado",
    "CommonLast3Months": "Últimos 3 Meses",
    "CommonLast6Months": "Últimos 6 Meses",
    "CommonThisYear": "Este Ano",
    "CommonDeletedInvoices": "Faturas Excluídas",
    "CommonApply": "Aplicar",
    "CommonOriginal": "Original",
    "CommonOutstanding": "Pendente",
    "CommonAmountPayable": "Valor a Pagar",
    "CommonPaymentMode": "Modo de Transação",
    "CommonACHPayment": "Pagamento ACH",
    "CommonACH": "ACH",
    "CommonBankName": "Nome do Banco",
    "CommonBankAccountName": "Nome da Conta Bancária",
    "CommonAccountNumber": "Número da Conta",
    "CommonABARoutingNumber": "Número de Roteamento ABA",
    "CommonAccountType": "Tipo de Conta",
    "CommonSECCode": "Código SEC",
    "CommonTrermsAgreement": "Concordo em fazer o pagamento da minha conta bancária fornecida acima.",
    "CommonNotes": "Notas",
    "CommonPaymentForm": "Formulário de Pagamento",
    "CommonCreditCardPayment": "Pagamento com Cartão de Crédito",
    "CommonPaymentOn": "Transação em",
    "CommonContactPersonDetails": "Detalhes da Pessoa de Contato",
    "CommonVoidPayment": "Anular",
    "CommonRefundPayment": "Reembolsar",
    "CommonAmount": "Valor",
    "CommonSubTotalAmount": "Subtotal é obrigatório.",
    "Commonblank": "(em branco)",
    "CommonRequiredValidation": "Esta informação é obrigatória.",
    "CommonIpaymentBusinessPortal": "Portal Empresarial iPayment",
    "CommonVersion": "Versão",
    "CommonChangePassword": "Alterar Senha",
    "CommonCurrentPassword": "Senha Atual",
    "CommonForgotYourPassword?": "Esqueceu sua senha?",
    "CommonNewPassword": "Nova Senha",
    "CommonConfirmPassowrd": "Confirmar Senha",
    "CommonSignInToYourCompany": "Faça login na sua Empresa",
    "CommonUpcomingPayments": "Próximos Pagamentos",
    "CommonRecentPayment": "Pagamentos Recentes",
    "CommonTotalOpenInvoices": "Total de Faturas em Aberto",
    "CommonPartialPaidInvoicesOpen": "Faturas Parcialmente Pagas (Abertas)",
    "CommonTotalPaidInvoices": "Total de Faturas Pagas",
    "CommonPaidInvoicesLastWeek": "Faturas Pagas (Semana Passada)",
    "CommonPaidLastWeek": "Pago (Semana Passada) $",
    "CommonPaymentsDoneInUSD": "Pagamentos Feitos (em USD)",
    "CommonEditTicketForm": "Editar Formulário de Ticket",
    "CommonCreatedBy": "Criado Por",
    "CommonCreatedOn": "Criado Em",
    "CommonContactEmail": "E-mail de Contato",
    "CommonCustomerDetails": "Detalhes do Cliente",
    "CommonIssueDetails": "Detalhes do Problema",
    "CommonTitle": "Título",
    "CommonTitleIsRequired": "O título é obrigatório.",
    "CommonDescription": "Descrição",
    "CommonDescriptionIsRequired": "A descrição é obrigatória.",
    "CommonTicketID#": "ID do Ticket",
    "CommonPriority": "Prioridade",
    "CommonAssignedTo": "Atribuído a",
    "CommonModifiedOn": "Modificado em",
    "CommonModifiedBy": "Modificado por",
    "CommonAttachment": "Anexo",
    "CommonAddYourComments": "Adicione seus comentários",
    "CommonAddYourComment": "Adicione seu comentário",
    "CommonComments": "Comentários",
    "CommonDeletedTickets": "Tickets Excluídos",
    "CommonTenantName": "Nome do Inquilino",
    "CommonLow": "Baixa",
    "CommonMedium": "Média",
    "CommonHigh": "Alta",
    "CommonOpen": "Aberto",
    "CommonOnHold": "Em Espera",
    "CommonResolved": "Resolvido",
    "CommonClosed": "Fechado",
    "CommonNewTicketForm": "Novo Formulário de Ticket",
    "CommonCreate": "Criar",
    "CommonBusinessDetails": "Outros Detalhes",
    "CommonAddTicket": "Novo Ticket",
    "CommonTicketId": "ID do Ticket",
    "CommonNewCustomerForm": "Novo Formulário de Cliente",
    "CommonGeneral": "Geral",
    "CommonPaymentDetails": "Detalhes da Transação",
    "CommonContactInfo": "Informações de Contato",
    "CommonAdminUserDetails": "Detalhes do Usuário Admin",
    "CommonApplicationsDetails": "Detalhes das Aplicações",
    "CommonEnabledServices": "Serviços Ativados",
    "CommonCustomerPortalURL": "URL do Portal do Cliente",
    "CommonCreditCardDetails": "Detalhes do Cartão de Crédito",
    "CommonSavedCreditCards": "Cartões de Crédito Salvos",
    "CommonNameOnCard": "Nome no Cartão",
    "CommonCardExpiry": "Vencimento do Cartão",
    "CommonCardNumber": "Número do Cartão",
    "CommonExpiry": "Vencimento",
    "CommonCVV": "CVV",
    "CommonCardType": "Tipo de Cartão",
    "CommonAddCreditCard": "Adicionar Cartão de Crédito",
    "CommonACHPaymentDetails": "Detalhes do Pagamento ACH",
    "CommonCustomerAddress": "Endereço do Cliente",
    "CommonSameAsAboveAddress": "Mesmo endereço acima",
    "CommonSaveInvite": "Salvar e Convidar",
    "CommonEditCustomerForm": "Editar Formulário de Cliente",
    "CommonCustomer": "Cliente",
    "CommonAddCustomer": "Adicionar Cliente",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "Pedidos de Venda Abertos",
    "CommonInvoice": "Fatura",
    "CommonUpcomingDeliveryDate": "Próxima Entrega",
    "CommonLastDeliveryOn": "Última Entrega em",
    "CommonTotalSalesOrder": "Total de Pedidos de Venda",
    "CommonPending": "Pendente",
    "Common(Pending)": "(Pendente)",
    "CommonDetails": "Detalhes",
    "CommonDesktop": "Desktop",
    "CommonSMS": "SMS",
    "CommonHelpDeskNotifications": "Notificações de Help Desk",
    "CommonMyTicketStatusIsChanged": "O status do meu ticket foi alterado.",
    "CommonCustomerTicketStatusIsChanged": "O status do ticket do cliente foi alterado.",
    "CommonMyTicketIsReassigned": "Meu ticket foi reatribuído",
    "CommonCustomerTicketIsReassigned": "O ticket do cliente foi reatribuído.",
    "CommonMyTicketPriorityIsChanged": "A prioridade do meu ticket foi alterada.",
    "CommonCustomerTicketPriorityIsChanged": "A prioridade do ticket do cliente foi alterada.",
    "CommonNewCommentAddedInMyTicket": "Novo comentário adicionado no meu ticket.",
    "CommonNewCommentAddedInCustomerTicket": "Novo comentário adicionado no ticket do cliente.",
    "CommonInvoiceNotifications": "Notificações de Fatura",
    "CommonInvoicePaymentIsReceived": "O pagamento da fatura foi recebido.",
    "CommonCustomersReport": "Relatório de Clientes",
    "CommonLastWeek": "Semana Passada",
    "CommonFrom": "De",
    "CommonTo": "Para",
    "CommonTotalInvoices": "Total de Faturas",
    "CommonOpenInvoices": "Faturas em Aberto",
    "CommonCustomerWisePaymentReport": "Relatório de Pagamento por Cliente",
    "CommonPartialPaidInvoices": "Faturas Parcialmente Pagas",
    "CommonPaidInvoices": "Faturas Pagas",
    "CommonCreditAmount": "Valor de Crédito",
    "CommonInvoicesReport": "Relatório de Faturas",
    "CommonPaidOn": "Pago Em",
    "CommonAmountPaid": "Valor Pago",
    "CommonPaymentReceivedReport": "Relatório de Pagamentos Recebidos",
    "CommonPaymentType": "Tipo de Pagamento",
    "CommonInvoiceID": "ID da Fatura",
    "CommonOriginalAmount": "Valor Original",
    "CommonPortalUsersReport": "Relatório de Usuários do Portal",
    "CommonTicketsReport": "Relatório de Tickets",
    "CommonInvoicesDetails": "Detalhes das Faturas",
    "CommonBankAccountNameIsRequired ": "O nome da conta bancária é obrigatório.",
    "AccountNumberIsRequired": "O número da conta é obrigatório.",
    "CommonABARoutingNumberIsRequired": "O número de roteamento ABA é obrigatório.",
    "CommonOriginated": "Originado",
    "CommonReturned": "Devolvido",
    "CommonSetteled": "Liquidado",
    "CommonOk": "OK",
    "CommonMsgPaymentHistory": "Você pode fechar esta janela e ver o status atual no Histórico de Transações",
    "CommonInvoiceNumb": "Número da Fatura",
    "CommonPaid": "Pago",
    "CommonDue": "Devido",
    "CommonBlueStar": "Estrela Azul",
    "CommonBillToAddress": "Endereço de Cobrança",
    "CommonlineItemsOn": "Itens na Linha",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "Anulado",
    "CommonVoid": "Anular",
    "CommonVoidRequested": "Anulação Solicitada",
    "CommonRefundRequested": "Solicitação de Reembolso",
    "CommonRefunded": "Reembolsado",
    "CommonRefundCancelled": "Reembolso Cancelado",
    "CommonVeriCheckACH ": "VeriCheck ACH",
    "CommonMonthly": "Mensal",
    "CommonQuartly": "Trimestral",
    "CommonHalfyearly": "Semestral",
    "CommonYearly": "Anual",
    "CommonNewInvoiceForm": "Novo Formulário de Fatura",
    "CommonSTEP": "STEP",
    "CommonPrefix": "Prefixo",
    "Commonselect": "selecionar",
    "CommonAddNew": "Adicionar Novo",
    "CommonNumber": "Número",
    "CommonTaxRate": "Taxa de Imposto",
    "CommonAddMoreItems": "Adicionar Mais Itens",
    "CommonNext": "Próximo",
    "CommonBack": "Voltar",
    "CommonDone": "Concluído",
    "CommonLastLogin": "Último Login:",
    "CommonAdmin": "Admin",
    "CommonBusinessPortal": "Portal Empresarial",
    "CommonMyProfile": "Meu Perfil",
    "CommonChangePassword ": "Alterar Senha",
    "CommonSync": "Sincronizar",
    "CommonPreferences": "Preferências",
    "CommonAbout": "Sobre",
    "CommonLogout": "Sair",
    "CommonToggleNavigation": "Alternar Navegação",
    "CommonHome": "Início",
    "CommonCustomers": "Clientes",
    "CommonInvoices": "Faturas",
    "CommonPaymentHistory": "Histórico de Transações",
    "CommonReports": "Relatórios",
    "CommonPaymentReceived": "Pagamentos Recebidos",
    "CommonCustomerWisePayment": "Pagamento por Cliente",
    "PortalUsers": "Usuários do Portal",
    "CommonTickets": "Tickets",
    "CommonBusinessPortalSettings": "Configurações do Portal Empresarial",
    "CommonConfigurations": "Configurações",
    "CommonAlerts": "Alertas",
    "CommonHelpDesk": "Central de Ajuda",
    "CommonCustomerTickets": "Tickets do Cliente",
    "CommonMyTickets": "Meus Tickets",
    "CommonDocumentation": "Documentação",
    "CommonPoweredBy": "Desenvolvido por",
    "CommonCompanyPortalSettings": "Configurações do Portal da Empresa",
    "CommonCustomerPortalSettings": "Configurações do Portal do Cliente",
    "CommonDelete": "Excluir",
    "CommonNoResultFound": "Nenhum resultado encontrado",
    "CommonPaymentDate": "Data da Transação",
    "CommonInvoicesStatus": "Status das Faturas",
    "CommonPaymentsDoneInLast6Months": "Pagamentos feitos nos últimos 6 meses",
    "CommonRecentTranscations": "Transações Recentes",
    "CommonCompletedOrder(Closed)": "Concluído",
    "CommonOpenOrders(Open)": "Aberto",
    "CommonPartialDeliveredOrder(Open)": "Parcialmente Entregue",
    "CommonServices": "Serviços",
    "CommonPartnerCompanySubDomain": "Subdomínio da Empresa Parceira",
    "CommonPortalDetails": "Detalhes do Portal",
    "CommonPortalURL": "URL do Portal",
    "CommonEdit": "Editar",
    "CommonAddAnAccount": "Adicionar uma conta",
    "CommonPayments": "Pagamentos",
    "CommonNewAttachmentAddedInMyTicket": "Novo anexo adicionado no Meu Ticket.",
    "CommonNewAttachmentAddedInCustomerTicket": "Novo anexo adicionado no Ticket do Cliente.",
    "CommonRefreshStatus": "Atualizar status",
    "CommonID#": "ID#",
    "CommonSubscription": "Assinatura",
    "CommonCompanySubDomain": "Subdomínio da Empresa",
    "CommonMyPortalURL": "Minha URL do Portal",
    "CommonPortalLocalizationSettings": "Configuração de Localização do Portal",
    "CommonDeletedOn": "Excluído Em",
    "CommonDeletedBy": "Excluído Por",
    "CommonNewInvoiceisgenerated": "Nova fatura foi gerada.",
    "CommonInvoicepaymentstatusischanged": "O status do pagamento da fatura foi alterado.",
    "CommonExistingInvoiceiscancelled": "A fatura existente foi cancelada.",
    "CommonOrderId": "ID do Pedido",
    "CommonStartDate": "Data de Início",
    "CommonNextPaymentdate": "Próxima Transação Em",
    "CommonRecurringPeriod": "Frequência de Pagamento",
    "CommonRecurringTerms": "Termos de Pagamento",
    "CommonTermAmount": "Cada Valor de Pagamento",
    "CommonRemainingPayCounts": "Contagens de Pagamentos Restantes",
    "CommonOrderAmount": "Valor do Pedido",
    "CommonAddRecurring": "Adicionar Recorrente",
    "CommonOrderIdRequired": "ID do Pedido é obrigatório.",
    "CommonRecurringTermRequired": "O termo deve ser maior que 0.",
    "CommonRecurringTermAmountRequired": "O valor do termo deve ser maior que 0.",
    "CommonWebsiteValidation": "URL do website inválida.",
    "CommonNoRecordsAvailable": "Ainda não existem registros.",
    "CommonPaymentDone": "Pagamento Concluído",
    "CommonPaymentDoneReport": "Relatório de Pagamentos Concluídos",
    "CommonByJoiningYouAgreeToOur": "Ao participar, você concorda com os nossos",
    "CommonTerms": "Termos",
    "CommonPrivacyPolicy": "Política de Privacidade.",
    "CommonAnd": "e",
    "CommonEnterYourCompanyID": "Digite a URL da sua Empresa",
    "CommonDontRememberCompanyID": "Não se lembra do seu Subdomínio?",
    "CommonClickHere": "Clique aqui",
    "CommonWantToCreate": "Quer criar uma nova Conta Empresarial?",
    "CommonFindMyCompanyID": "Encontrar meu Subdomínio!",
    "CommonFindMyCompanyIDTitle": "Enviaremos um e-mail para confirmar seu ID de Login e encontrar seu Subdomínio, com o qual você pode se juntar.",
    "CommonEnterYourEmail": "Digite seu e-mail",
    "CommonContinue": "Continuar",
    "CommonCheckYourEmail": "Confira seu e-mail!",
    "CommonCheckYourTitle": "Enviamos um link para",
    "CommonGetStartedTitle": "Clique no link para começar.",
    "CommonEnteredWrongEmail": "E-mail inserido incorretamente?",
    "CommonItemName": "Nome do Item",
    "CommonQuickpay": "Gerar URL Quickpay",
    "PFCommonPermission": "Permissão",
    "PFCommonPermissions": "Permissões",
    "PFCommonPortalUsers": "Usuários do Portal",
    "PFCommonUsers": "Usuários",
    "PFCommonUser": "Usuário",
    "PFCommonActive": "Ativo",
    "PFCommonInActive": "Inativo",
    "PFCommonAdmin": "Admin",
    "PFCommonAction": "Ação",
    "PFCommonPending": "Pendente",
    "CommonPortalOwnerName": "Nome do Proprietário do Portal",
    "CommonPoweredByText": "Desenvolvido por",
    "CommonCopyrightText": "Copyright",
    "CommonPublisherPortalTheme": "Tema do Portal do Editor",
    "CommonTenantTickets": "Tickets Empresariais",
    "CommonTenantID": "ID da Empresa",
    "CommonAdd": "Adicionar",
    "CommonDragDropFileText": "Arraste e solte os arquivos aqui ou clique em Carregar.",
    "CommonValidFileFormatMsg": "Informe um formato de arquivo válido. Os formatos de arquivo suportados são: JPG, JPEG, TIFF, GIF, PNG, WEBP, SVG, BMP, TIF, ICO.",
    "CommonError": "Erro",
    "CommonFileSizeError": "O tamanho do arquivo é muito grande. Selecione um arquivo de até 10 MB.",
    "CommonMoreThanOneFileError": "Múltiplos arquivos não permitidos",
    "CommonOrderNameRequired": "Nome do pedido é obrigatório.",
    "CommonPackageNameRequired": "O tipo de pacote é obrigatório.",
    "CommonFillAllRequiredFeildErrorMsg": "Por favor, preencha os campos obrigatórios e forneça dados válidos.",
    "CommonContactUs": "Contate-nos",
    "CommonContactFormTitle": "Digite sua mensagem abaixo. Entraremos em contato o mais breve possível!",
    "CommonMessage": "Mensagem",
    "CommonMailingAddress": "Endereço de Correspondência",
    "CommonSend": "Enviar",
    "CommonUpcomingShipments": "Próximos Envios",
    "CommonRecentShipments": "Envios Recentes",
    "CommonDeliveryID": "ID de Entrega",
    "CommonPostedOn": "Postado Em",
    "CommonShippingNo": "Número de Envio",
    "CommonShipmentHistory": "Histórico de Envios",
    "CommonTrackingNo": "Número de Rastreamento",
    "CommonPackages": "Pacotes",
    "CommonCarrier": "Transportadora",
    "CommonDestination": "Destino",
    "CommonPickUpOn": "Coletado Em",
    "CommonDeliveredOn": "Entregue Em",
    "CommonDeliveryDate": "Data de Entrega",
    "CommonOrderName": "Nome do Pedido",
    "CommonNoPackageValidationMessage": "Pelo menos um pacote deve ser adicionado para obter uma cotação de envio.",
    "CommonNoCarrierValidationMessage": "Pelo menos um transportador deve se inscrever.",
    "CommonPlanSelectionValidationMessage": "Selecione um plano de transportadora válido.",
    "CommonGenerateQuoteAgainValidationMessage": "O formulário foi modificado. Por favor, gere o orçamento novamente.",
    "CommonAddressDetails": "Detalhes do Endereço",
    "CommonConfigurationSavedMsg": "Suas alterações foram salvas com sucesso.",
    "Common4X6LabelPrinter": "Impressora de Etiquetas 4X6",
    "CommonTraditionalPrinters": "Impressoras Tradicionais",
    "CommonCarriersInfo": "Informações do Transportador",
    "CommonAddresses": "Endereços",
    "CommonNewAddress": "Novo Endereço",
    "CommonValidateAddress": "Validar Endereço",
    "CommonVerifiedBy": "Verificado Por",
    "CommonLabel": "Etiqueta",
    "CommonPrintingInfo": "Informações de Impressão",
    "CommonContactPerson": "Pessoa de Contato",
    "CommonDecimalValues": "Valores Decimais",
    "CommonGroupingDecimalSeparator": "Separador de Milhar e Decimal",
    "CommonGroupingValues": "Valores de Agrupamento",
    "CommonCurrencyLocalization": "Localização da Moeda",
    "CommonDesignation": "Designação",
    "CommonSubDomain": "Subdomínio",
    "CommonAccountNo": "Número da Conta",
    "CommonValidate": "Validar",
    "CommonNoOfDeliveries": "Número de Entregas",
    "CommonNoOfSalesOrderDeliveries": "Número de Pedidos de Vendas",
    "CommonNoOfSalesAmount": "Valor Total de Vendas",
    "CommonTopMostValuableCustomer": "Top 5 Clientes Mais Valiosos",
    "CommonTotalOpenOrders": "Total de Pedidos em Aberto",
    "CommonPartialDeliveredOrders": "Pedidos Parcialmente Entregues",
    "CommonCompletedOrders": "Pedidos Concluídos",
    "CommonPendingShipping": "Envios Pendentes",
    "CommonTotalShipping": "Total de Envios",
    "CommonTotalSales": "Total de Vendas",
    "CommonTotalSalesinLast6Months": "Total de Vendas nos Últimos 6 Meses",
    "CommonSalesOrdersStatus": "Status dos Pedidos de Vendas",
    "CommonSalesOrders": "Pedidos de Vendas",
    "CommonShippingStatus": "Status de Envio",
    "CommonShipmentByCarrier": "Envio por Transportadora",
    "CommonTotalDeliveriesinlast6months": "Total de Entregas nos Últimos 6 Meses",
    "CommonQty": "Quantidade",
    "CommonValue": "Valor",
    "CommonTop5mostvaluablecustomers": "Top 5 Clientes Mais Valiosos",
    "CommonDeliveriesAcrossGlobe": "Entregas ao Redor do Mundo",
    "CommonAddressErrorMsg": "Pelo menos um endereço é necessário.",
    "CommonCurrencyLocalizationsConfirmMsg": "Isso salvará permanentemente suas Localizações de Moeda.",
    "CommonConfirmation": "Confirmação",
    "CommonService": "Serviço",
    "CommonShipConfirm": "Você deseja enviar este Pedido de Vendas?",
    "CommonCarriers": "Transportadoras",
    "CommonShipFromAddresses": "Endereços de Origem do Envio",
    "CommonBusinessAddresses": "Endereços Comerciais",
    "CommonNewItem": "Novo Item",
    "CommonPackageItemEqlDistributionMsg": "Há uma incompatibilidade entre os itens do pedido de vendas e os itens embalados. Por favor, ajuste as alterações e gere o orçamento novamente.",
    "CommonPackageAllItemDistributionMsg": "Por favor, embale todos os itens do Pedido de Vendas antes de gerar o Orçamento.",
    "CommonZeroItemInItemMaster": "Não há item disponível no Mestre de Itens para adicionar. Adicione primeiro o Item no Mestre de Itens.",
    "CommonShipFromAddressErrorMsg": "Pelo menos um endereço de origem do envio é necessário.",
    "TOTALRECORDS": "Total de Registros",
    "VIEWITEMLOCATION": "Ver Localização do Item",
    "SELECTLOTFEATUREWISE": "Selecione recursos de lote",
    "ITEMKEY": "Chave do Item",
    "DESCRIPTION": "Descrição",
    "LOCATION": "Localização",
    "LOCATIONDITAIL": "Detalhes da Localização",
    "LOTBINDITAIL": "Detalhes do Lote/Bin No",
    "STOCKUOM": "UOM de Estoque",
    "DISPLAYUOM": "UOM de Exibição",
    "COMMITTOPRODUCTION": "Quantidade Comprometida para Produção",
    "COMMITTOSALES": "Quantidade Comprometida para Vendas",
    "DESC1": "Desc1",
    "EOQ": "EOQ",
    "INCLASSKEY": "Chave de Classe",
    "MULTIPLEBINSREQ": "Requer Múltiplos Bins",
    "QTYONHAND": "Quantidade em Estoque",
    "QTYONORDER": "Quantidade em Pedido",
    "QTYOVERSOLD": "Quantidade em Venda Excedida",
    "SERIALLOTFLG": "Sinalizador de Série/Lote",
    "STATUSCODE": "Código de Status",
    "STOCKUOMCODE": "Código de UOM de Estoque",
    "TRANSITIN": "Em Trânsito (Entrada)",
    "TRANSITOUT": "Em Trânsito (Saída)",
    "QTYUNDERPURCHASEQC": "Quantidade Sob Controle de Compra",
    "QTYUNDERINVENTORYQC": "Quantidade Sob Controle de Inventário",
    "QTYONORDERDETAILS": "Detalhes da Quantidade em Pedido",
    "QTYCOMMITTOSALESDETAILS": "Detalhes da Quantidade Comprometida para Vendas",
    "QTYCOMMITTOPRODUCTIONDETAILS": "Detalhes da Quantidade Comprometida para Produção",
    "TRANSACTION": "Transação",
    "TRANSACTIONNO": "Número da Transação",
    "TRANSACTIONDATE": "Data da Transação",
    "TRANSACTIONTYPE": "Tipo de Transação",
    "AVGLOTSTR": "Força Média do Lote",
    "LOTSTRENGTH": "Força do Lote",
    "QTYREQ": "Quantidade Requerida",
    "LOTQTYSEL": "Quantidade do Lote Selecionada",
    "SOLVENTQTY": "Quantidade de Solvente Selecionada",
    "STRDSTRENGTH": "Força Padrão",
    "COMMITDOCNO": "Número do Documento de Compromisso",
    "VENDKEY": "Chave do Fornecedor",
    "TOTALHOLD": "Total em Espera",
    "TOTAL": "Total",
    "CUSTKEY": "Chave do Cliente",
    "QTYCOMMITTOSALES": "Quantidade Comprometida para Vendas",
    "QTYCOMMITTOPRODUCTION": "Quantidade Comprometida para Produção",
    "QTYCOMMIT": "Quantidade Comprometida",
    "BINNO": "Número do Bin",
    "DATEEXPIRY": "Data de Expiração",
    "DATEQUARANTINE": "Data de Quarentena",
    "DATERECEIVED": "Data de Recebimento",
    "LOTNO": "Número do Lote",
    "LOTSTATUS": "Status do Lote",
    "QTYCOMMITSALES": "Quantidade Comprometida para Vendas",
    "RECUSERID": "ID do Usuário de Recebimento",
    "RECDATE": "Data de Recebimento",
    "VENDORKEY": "Chave do Fornecedor",
    "VENDORLOTNO": "Número do Lote do Fornecedor",
    "QUANTITY": "Quantidade",
    "SALESUOMCODE": "Código da UOM de Vendas",
    "QTYCOMMITPROD": "Quantidade Comprometida para Produção",
    "ITEMTYP": "Tipo de Item",
    "PRICEGRP": "Grupo de Preços",
    "STDCOST": "Custo Padrão",
    "AVGCOST": "Custo Médio",
    "LSTCOST": "Custo Mínimo",
    "BASEPRICE": "Preço Base",
    "REVACCT": "Conta de Reversão",
    "SALESTAXKEY": "Chave do Imposto de Vendas",
    "DESC2": "Descrição 2",
    "SALETOSTKCNVFCTR": "Conversor de Venda para Estoque",
    "INACCT": "Conta de Entrada",
    "InserLineInventory": "Consulta de Inventário",
    "InsertLineInventory": "Consulta de Inventário",
    "InserLineNonInventory": "Consulta de Não-Inventário",
    "InsertLineNonInventory": "Consulta de Não-Inventário",
    "InsertLineCustFavorite": "Consulta de Favoritos do Cliente",
    "InsertLineCustFavourate": "Consulta de Favoritos do Cliente",
    "CustFavouriteItems": "Adicionar Item Favorito do Cliente",
    "AddCustItem": "Adicionar Item do Cliente",
    "Custkey": "Chave do Cliente",
    "Shipkey": "Enviar Para",
    "Reference": "Referência",
    "Salespkey": "Vendedor",
    "Tax_key": "Taxa de Imposto",
    "Tax": "Chave de Imposto",
    "AccountKey": "Plano de Contas",
    "PromAccountKey": "Plano de Contas",
    "Fobkey": "FOB (Franco a Bordo)",
    "Commentkey": "Comentários",
    "Shipviakey": "Envio Via",
    "Territkey": "Território",
    "Termskey": "Termos",
    "Location": "Localização",
    "RebateKey": "Rebate",
    "Recurkey": "Ciclo Recorrente",
    "Custcntry": "País do Cliente",
    "PromAccountKeyHdr": "Chave de Promoção",
    "Currency_Key": "Chave da Moeda",
    "ItemKey": "Chave do Item",
    "ITEMKEYLOOKUP": "Consulta de Chave do Item",
    "ITEMDESC": "Descrição do Item",
    "Description": "Descrição",
    "FEATUREIDCANNOTBEBLANK": "O ID da Característica não pode ficar em branco",
    "FEATUREIDANDVALUECANNOTBESAME": "Não adicione o mesmo ID de Característica e Valor em várias linhas",
    "WAREHOUESTATUSTITLE": "Relatório de Processamento",
    "InsertLineKit": "Consulta de KIT",
    "InsertLineKitItem": "Consulta de KIT",
    "RELEASEORDERALERTMSG": "Deseja liberar este pedido?",
    "CRDLIMITPASSWORDCAPTION": "Digite a Senha para Salvar",
    "SALESPARAMETERMSG": "Parâmetros de Entrada do Pedido de Vendas não estão definidos",
    "VIEWSALESCONTRACT": "Ver Contrato de Vendas",
    "NOTHOLDCANCELLED": "Não é possível esperar um pedido cancelado",
    "NOTHOLDCLOSED": "Não é possível esperar um pedido fechado",
    "HOLDRESAONALERTMSG": "Por favor, especifique o motivo para esperar.",
    "WAREHOUSESOSAVEALERT": "Salvar o registro.",
    "AlternateItemKey": "Itens Alternativos",
    "SERIES": "Série",
    "SERIES_DESC": "Descrição da Série",
    "ORDER_TYPE": "Tipo de Pedido",
    "WAREHOUSETRANSFER": "Detalhes da Transferência de Armazém",
    "ContractNo": "Consulta de Número de Contrato",
    "CONTRACTNO": "Número do Contrato",
    "COMMITMENTAMT": "Valor Comprometido",
    "CONTRACTDATE": "Data do Contrato",
    "COSTORQTYCOMMITMENT": "Comprometimento de Custo ou Quantidade",
    "EFFECTIVEDATE": "Data Eficaz",
    "EXPDATE": "Data de Expiração",
    "ORIGINALAMT": "Valor Original",
    "PRICEQUOTED": "Preço Cotado",
    "CustomerItem": "Consulta de Cliente",
    "CUSTOMERITEMS": "Consulta de Item do Cliente",
    "PurchaseUomCode": "Código de UOM de Compra",
    "CustitemKey": "Chave do Item do Cliente",
    "OtempItemKey": "Consulta de Chave do Item",
    "NOLINESELECTEDMSG": "Nenhuma linha está selecionada.",
    "OtempLocation": "Consulta de Localização",
    "GOTOSHIPMENT": "Ir para Embarque",
    "REQUIREDFREIGHTALERMSG": "Frete necessário. Deseja continuar?",
    "FavoriteItems": "Itens Favoritos",
    "LocationKey": "Chave da Localização",
    "SalesOrderEntryList": "Pedidos de Vendas",
    "PRICERECALCULATEMSG": "O preço será recalculado.",
    "QTYCOMMITTED": "Quantidade Comprometida",
    "QTYQUARANTINED": "Quantidade em Quarentena",
    "QTYEXPIRED": "Quantidade Expirada",
    "QTYAVAILABLE": "Quantidade Disponível",
    "CUSTOMERKEY": "Chave do Cliente",
    "LOTCOMMITMENTDETAILS": "Detalhes do Comprometimento de Lote",
    "CONTAINERIZEDLOTS": "Lotes Containerizados",
    "SALESISSUES": "Problemas de Vendas",
    "NEGATIVEADJUSTMENT": "Ajuste Negativo",
    "POSITIVEADJUSTMENT": "Ajuste Positivo",
    "PURECEPIT": "Recebimento de Compras",
    "PURETURN": "Retorno de Compras",
    "MFGISSUES": "Problemas de Fabricação",
    "MFGRETURN": "Retorno de Fabricação",
    "INVENTORYTRAN": "Transferência de Inventário",
    "INVADJP": "Ajuste Positivo de Inventário",
    "INVADJN": "Ajuste Negativo de Inventário",
    "DAMAGED": "Danificado",
    "CYCLECNT": "Contagem Cíclica",
    "TRANIN": "Transferência de Entrada",
    "TRANOUT": "Transferência de Saída",
    "INVEDITP": "Edição Positiva de Inventário",
    "INVEDITN": "Edição Negativa de Inventário",
    "SLPROV": "Provisão de Vendas",
    "SALESRETURN": "Devolução de Vendas",
    "CONTAINERNO": "Número do Container",
    "PALLETID": "ID do Palete",
    "PLEASEADDCONTAINER": "Por favor, selecione um Container",
    "NEXTPALLET": "Próximo Palete",
    "ESIGNATURE": "Assinatura Eletrônica",
    "SCREENNAME": "Nome da Tela",
    "DOCNO": "Número do Documento",
    "REQUIREDSIGNAUTH": "Autoridades de Assinatura Necessárias",
    "DATE": "Data",
    "REASONFORCHANGE": "Motivo das Alterações",
    "MODIFIEDBY": "Modificado Por",
    "PASSWORD": "Senha",
    "USER": "Usuário",
    "DATETIME": "Data/Hora",
    "SEQNO": "Nº Sequencial",
    "TESTAMNET": "Testamento",
    "AddSIGNATURE": "Adicionar Assinatura",
    "USERID": "ID do Usuário",
    "USERNAME": "Usuário",
    "TESTMENT": "Testamento",
    "ENTERPASSWORD": "Digite a Senha",
    "WRONGPASSWORD": "Senha Incorreta",
    "ENTERMODIFIED": "Digite Modificado Por",
    "ENTERUSERID": "Digite o ID do Usuário",
    "USERNOTAUTHORISEMSG": "Usuário não autorizado para assinar este documento.",
    "USERALREADYSIGNMSG": "Este usuário já assinou.",
    "REQSIGNATUREMISSING": "Algumas assinaturas necessárias estão faltando.",
    "REASONMINLENGTHMSG": "O motivo das alterações deve conter pelo menos",
    "CHARACTER": "caracteres.",
    "ESIGNREASONMSG": "Esta tela requer motivo das alterações e assinatura eletrônica.",
    "CHKITEMLOCAATIONMSG": "Verifique item e localização.",
    "RETURNORDRECALCULATEMSG": "Pedido de devolução, não pode ser recalculado.",
    "COMMENT": "Comentários",
    "TOTALSPLITQTY": "Quantidade Total para Dividir",
    "UNIT": "Unidade",
    "ITEMDESCRIPTION": "Descrição do Item",
    "SPLITCONTAINER": "Dividir Container",
    "SPLITQTY": "Quantidade para Dividir",
    "CONVNOTFORITEMMSG": "Conversão não definida para o item ",
    "UNITSAREMSG": "As unidades são",
    "QUOTATIONTITLE": "Cotação/Requisição de Vendas",
    "CANCELQUOTATIONALERTMSG": "Cancelar a Cotação?",
    "CALCULATETAXDISCOUNT": "Calcular Imposto e Desconto",
    "CANCELSO": "Cancelar Pedido de Vendas",
    "CLOSESO": "Fechar Pedido de Vendas",
    "VIEWCONTRACT": "Ver Contrato",
    "RELEASEHOLDORDER": "Liberar/Manter Pedido",
    "CHANGEOWNER": "Alterar Proprietário",
    "MAILTOCUSTOMER": "Enviar E-mail ao Cliente",
    "SALESORDERPEGGING": "Vinculação de Pedido de Vendas",
    "SALESHISTORY": "Histórico de Vendas",
    "VIEWAGEBRACKETS": "Ver Faixas de Idade",
    "LIGHTCRM": "CRM Leve",
    "LADEDWEIGHT": "Peso Carregado",
    "TRANSFERTOSO": "Transferir para Pedido de Vendas",
    "TRANSFERTOSOMSG": "Transferir para Pedido de Vendas?",
    "CANCELQUOTATION": "Cancelar Cotação",
    "TOTALRECALCULATE": "Recalcular Total",
    "NOTMAINTAINLOTWITHZERO": "Lotes com Quantidade Zero não podem ser mantidos.",
    "ALLOWMINQTY": "Permitir Mínimo",
    "ALLOWMAXQTY": "Permitir Máximo",
    "APPROVALS": "Aprovações",
    "GROUP": "Grupo",
    "GROUPDES": "Descrição do Grupo",
    "APPROVER": "Aprovador",
    "SENDEMAIL": "Enviar E-mail",
    "CANCELAPPROVALS": "Cancelar aprovações anteriores",
    "APPROVERDATE": "Data de Aprovação",
    "EMAILID": "E-mail",
    "GROUPVALIDATEMSG": "Selecione o Grupo de Aprovadores",
    "CANCELQUOTATIONMSG": "Cancelar Cotação?",
    "QUOTATIONTRANSUCCMSG": "Cotação transferida com sucesso",
    "CANCELVALIDATEMSG": "O status do pedido está CANCELADO, não é possível transferir",
    "TRANSFERVALIDATEMSG": "O pedido já foi TRANSFERIDO",
    "APPROVERVALIDATEMSG": "O status do pedido é APROVADO, não é possível transferir",
    "SalesRequisitionList": "Cotação/Requisição de Vendas",
    "QUOTATRANPROSPECTVALIMSG": "Não é possível transferir uma cotação de vendas para um pedido para um cliente em potencial",
    "CUSTHOLDTRANSVALIMSG": "O status do cliente está em espera, não é possível transferir",
    "CREDITLIMITVALIDATETRANMSG": "Limite de crédito excedido, não é possível transferir",
    "CREDITLMIITTRANSHOLDALERTMSG": "Limite de Crédito Excedido, o pedido será salvo com status de espera.",
    "LOTFEATURE": "Característica do Lote",
    "CONTAINER": "Container",
    "FEATUREID": "ID da Característica",
    "FEATUREDESC": "Descrição da Característica",
    "VALUE": "Valores",
    "LANDEDCOSTCALCULATION": "Cálculo de Custo de Importação",
    "LANDEDCOSTGROUPID": "ID do Grupo de Custo de Importação",
    "LANDEDCOSTGROUPDESC": "Descrição do Grupo de Custo de Importação",
    "ACCUREDLANDEDCOSTACC": "Conta de Custo de Importação Acumulado",
    "ACCUREDLANDEDCOSTACCDESC": "Descrição da Conta de Custo de Importação Acumulado",
    "LANDEDCOSTACC": "Conta de Custo de Importação",
    "LANDEDCOSTACCDESC": "Descrição da Conta de Custo de Importação",
    "CURRENCY": "Moeda",
    "LANDEDCOSTID": "ID do Custo de Importação",
    "APPORTIONEDBY": "Rateado por",
    "PERCENTVALUE": "Percentual/Valor",
    "DICREDMEMOTITLE": "Fatura Direta/Nota de Crédito",
    "DirectInvoiceList": "Fatura Direta/Nota de Crédito",
    "PROCESSREPORT": "Relatório de Processamento",
    "DAY": "Dia(s)",
    "GENERATE": "Gerar",
    "QTYISSUED": "Quantidade a Emitir",
    "QTYRECEIVE": "Quantidade Recebida",
    "AVAILABLEQTY": "Quantidade Disponível",
    "PONO": "Número do Pedido de Compra",
    "RECEIPTNO": "Número do Recebimento",
    "ROWNO": "Número da Linha",
    "APPORTIONEDAMT": "Valor Rateado",
    "INCLUDEFREIGHTREBATE": "Incluir Frete para Desconto",
    "RECURRED": "Recorrido",
    "FOREIGNAMT": "Valor Estrangeiro",
    "FREIGHTACCOUNT": "Conta de Frete",
    "AMT": "Valor",
    "TOTALFREIGHT": "Total de Frete",
    "CHARTACCOUNT": "Plano de Contas",
    "FREIGHTKEY": "Chave de Frete",
    "FREIGHTMASTER": "Mestre de Frete",
    "FREIGHTBREAKUP": "Detalhamento de Frete",
    "SCAN": "Escanear",
    "PALLETNO": "Número do Palete",
    "QUARANDATE": "Data de Quarentena",
    "ITEMQTY": "Quantidade do Item",
    "ITEMQTYREM": "Quantidade Restante do Item",
    "DOCUMENTNO": "Número do Documento",
    "DOCLINENO": "Número da Linha do Documento",
    "VIEWLOTFEATURE": "Ver Característica do Lote",
    "VIEWSELECTEDLOT": "Ver Lote Selecionado",
    "QTY": "Quantidade",
    "SELECTLOT": "Selecionar Lote",
    "AUTOSELECT": "Seleção Automática",
    "UNSELECTALL": "Desselecionar Todos",
    "FROMCONTAINER": "Do Contêiner",
    "TOCONTAINER": "Para o Contêiner",
    "CONATINERSEARCH": "Buscar Contêiner",
    "MSG": {
      "CONTACT_NAME_REQUIRED": "Digite o Nome do Contato",
      "EMAILVALIDATEMSG": "Digite um E-Mail Válido",
      "PLEASEENTERTENDIGITNUMBER": "Por favor, insira um número de 10 dígitos",
      "NOTVALIDNO": "Número inválido",
      "LOTREQ": "Número do Lote obrigatório.",
      "BINREQ": "Número do Bin obrigatório.",
      "LOTQTYGREATERFROMZERO": "A quantidade do lote deve ser maior que zero.",
      "CONTAINERQTYMISMATCH": "A quantidade do lote e a quantidade do contêiner selecionado não correspondem.",
      "CONTAINERNOTMAINTAIN": "Não é possível salvar. Contêiner não mantido para o Número do Lote.",
      "BLOCKSHELFLIFE": "Prazo de validade insuficiente para o item.",
      "AVAILABLESHELFLIFE": "Prazo de validade disponível é ",
      "REQSHELFLIFE": " e o prazo de validade necessário é ",
      "ISSUEQTYEQUALSELECTQTY": "A quantidade a emitir já é igual à quantidade selecionada",
      "HARDALLOCATION": "O uso da alocação rígida está definido como Sim na configuração do inventário. Não é possível alocar mais do que a quantidade disponível - Quantidade Alocada.",
      "ITEMNOTCONTAINERIZED": "O item não está Containerizado.",
      "DUPLICATENO": "Número Duplicado",
      "SELECTEDCONTAINEREQUALTOQTY": "A quantidade do contêiner selecionado deve ser igual à quantidade do lote",
      "FROMTOVALUECHECK": 'O Valor De não pode ser maior que o Valor Para',
      "TOTALSPLITQTYEQUALTOQTY": "A Quantidade Total para Divisão deve ser igual à Quantidade Disponível",
      "QTYSPLITREQ": "Quantidade para Divisão obrigatória",
      "LANDEDCOSTREQ": "ID do Custo de Importação obrigatório",
      "LANDEDCOSTGROUPREQ": "ID do Grupo de Custo de Importação obrigatório",
      "ACCUREDLANDEDCOSTREQ": "Conta de Custo de Importação Acumulado obrigatória",
      "LANDEDCOSTACCOUNTREQ": "Conta de Custo de Importação obrigatória",
      "LANDEDCOSTSELECTIONREQ": "Dados Detalhados do Custo de Importação obrigatórios",
      "FREIGHTDESC": "Adicione uma descrição de frete",
      "FREIGHTAMT": "Adicione uma conta de frete",
      "QTYITEMNOTGREATER": "A quantidade do item não deve ser maior que a quantidade do pedido.",
      "QTYITEMNOTGREATERNEW": "A quantidade do item não deve ser maior que a quantidade em estoque do pedido.",
      "QTYNOTGREATERTHANORDQTY": "A quantidade não deve ser maior que a quantidade do pedido.",
      "QTYISSUEREQ": "Quantidade a Emitir obrigatória",
      "REMQTYZERO": "A Quantidade Restante do Item é Zero",
      "SERAILNOEXIST": "Número de Série já existe para o item - ",
      "QTYISSUENOTGREATERONHAND": "A quantidade em estoque deve ser maior que a quantidade a ser emitida.",
      "CONTAINERREQ": "Contêiner Obrigatório",
      "BLOCKSHELFLIFELOTNO": "Prazo de validade insuficiente para o item e o número do lote ",
      "QTYREQ": "Quantidade obrigatória",
      "QUARANDATELESSTHANEXPIRYDATE": "A data de quarentena não pode ser maior ou igual à data de validade",
      "EXPIRYGREATERTHANRECEIPTDATE": "A data de validade não pode ser menor ou igual à data de recebimento",
      "QUARANTINEGREATERTHANRECEIPTDATE": "A data de quarentena não pode ser menor ou igual à data de recebimento",
      "TOTALCONTAINERQTYEXCEED": "A quantidade total do contêiner excede a quantidade necessária, não é possível gerar o contêiner.",
      "DELETECONTAINERCONFIRMATION": "Os detalhes do contêiner estão mantidos. Deseja excluir alguns dados do contêiner?",
      "QTYNOTGREATERTHANONE": "A quantidade a ser emitida não deve ser maior que um para um item com rastreamento de série",
      "PALLETANDLOTSELECTEDSUCCESSFULLY": "Palete e Lote adicionados com sucesso",
      "LOTSELECTEDSUCCESSFULLY": "Lote adicionado com sucesso",
      "PALLETNOREQ": "Número do Palete obrigatório",
      "FROMCONTAINERREQ": "Do Contêiner obrigatório",
      "TOCONTAINERREQ": "Para o Contêiner obrigatório",
      "SEARCHBYCONATINERREQ": "Busca por Contêiner obrigatória",
      "ENTERCONTAINERQTY": "Digite a Quantidade do Contêiner",
      "ITEMKEYREQ": "Digite a Chave do Item",
      "DUPLICATELOTBINCOMBINATION": "Combinação duplicada de Lote + Bin encontrada (Número da Linha: ",
      "CORRECTSQLQUERY": "Consulta SQL correta",
      "CHECKOUTSUCCESS": "Registro verificado com sucesso",
      "UNDOCHECKOUTSUCCESS": "Registro desfeito com sucesso",
      "CHECKINSUCCESS": "Registro verificado com sucesso",
      "ORDERNOREQ": "Número do Pedido obrigatório",
      "FROMDATETIME": "Data/Hora Inicial obrigatória",
      "TODATETIME": "Data/Hora Final obrigatória",
      "PURCHASENOTPERMISSION": "Você não tem permissão para Recebimento de Pedido de Compra",
      "SALESNOTPERMISSION": "Você não tem permissão para Manter Remessa",
      "TODATETIMEGREATER": "A Data/Hora Final deve ser maior que a Data/Hora Inicial",
      "WHTRANSFEROUTNOTPERMISSION": "Você não tem permissão para Transferência de Estoque para Fora do Armazém",
      "WHTRANSFERINNOTPERMISSION": "Você não tem permissão para Transferência de Estoque para Dentro do Armazém"
    },
    "SUPERINVOICETITLE": "Super Fatura",
    "SONOEXIST": "Pedido já existe",
    "PROCESS": "Processar",
    "PurchaseOrderEntryList": "Pedido de Compra",
    "PurchaseRequisitionEntryList": "Requisição de Compra",
    "PurchaseIndentEntryList": "Indentação de Compra",
    "SuperVoucherList": "Super Voucher",
    "FillVendAdd": "Preencher Endereço do Fornecedor",
    "VendorMasterList": "Chave do Fornecedor",
    "Expense_Acct": "Plano de Contas",
    "Cashacct": "Plano de Contas",
    "CountryLookup": "Consulta de País",
    "Vend_Class_Ky": "Consulta de Classe de Fornecedor",
    "Ship_Via": "Via de Envio",
    Fob: "Pesquisa FOB",
    Branch_Ky: "Pesquisa de Filial",
    Comment_Ky: "Pesquisa de Comentário",
    DfltTxKey: "Pesquisa de Chave de Imposto",
    Terms: "Pesquisa de Termos",
    Location_Ky: "Pesquisa de Local",
    DfltLandedCostGroupID: "Grupo de Custo de Importação Padrão",
    FreightKey: "Mestre de Frete",
    TaxType: "Pesquisa de Tipo de Imposto",
    TaxType1099: "Pesquisa de Caixa 1099",
    Language_key: "Pesquisa de Idioma",
    BRANCHKEYLOOKUP: 'Pesquisa de Envio para',
    APPLYWORKFLOW: "Aplicar Fluxo de Trabalho",
    //**Modelo de Especificação * *//
    SPEC: {
      HEADER: "Modelo de Especificação",
      TMP_ID: "ID do Modelo de Especificação",
      VALID: {
        GRPID: 'O Id do Grupo de Especificação não pode estar em branco.',
        SPECID: 'O Id da Especificação não pode estar em branco.',
        COMBINATION: 'Combinação duplicada de Id do Grupo e Id da Especificação não permitida.',
        TMPKEY: 'Deseja alterar a chave do modelo?'
      }
    },
    DocTxKey: "Chave Fiscal",
    ORDRECEIVEDTHISWEEK: "Ordens a serem recebidas nesta semana",
    CLOSEDORDER: "Pedido Fechado",
    PROCESSEDORDER: "Pedido Processado",
    GOTRANSINVOICE: "Ir para Transferência para Fatura",
    GOSUPERINVOICE: "Ir para Super Fatura",
    GOTRANSFERSOBATCH: "Ir para Transferência para Lote",
    PRINTINVOICE: "Imprimir Fatura",
    PRINTCREDITMEMO: "Imprimir Memo de Crédito",
    ARCHIVEDORDER: "Pedido Arquivado",
    PROCESSEDORDERS: "Pedidos Processados",
    GOTRANSVOUCHER: "Ir para Transferência para Comprovante",
    GOSUPERVOUCHER: "Ir para Super Comprovante",
    GOPURCHASEORDER: "Ir para Ordem de Compra",
    GOSALESORDER: "Ir para Ordem de Venda",
    GOMAINTAINSHIPMENT: "Ir para Manter Remessa",
    PRINTVOUCHER: "Imprimir Comprovante",
    PRINTDEBITMEMO: "Imprimir Memo de Débito",
    CLOSEDORDERS: "Pedidos Fechados",
    PRINT: "Imprimir",
    LANDEDCOSTNOTONRECEIP: "Custo de importação não mantido para o recebimento.",
    MYTASK: "Mostrar Minhas Tarefas",
    TASKFORRECORD: "Mostrar Tarefa para este Registro",
    USERNAMELBL: "Nome de Usuário",
    FORMNAME: "Nome do Formulário",
    PRIMARYKEY: "Chave Primária",
    ESIGNAUDITMSG: "O Histórico de Auditoria é aplicável nesta tela. Salve os dados primeiro antes de navegar/fechar a tela. Clique em Cancelar para voltar ao formulário. Clique em Não para perder as alterações.",
    VENDORACTIVE: "Fornecedores Ativos",
    VENDORHOLD: "Fornecedores em Espera",
    CLOSEDELETEALERT: "O pedido fechado não pode ser excluído",
    PROCESSEDDELETEALERT: "O pedido processado não pode ser excluído",
    SERIALLOTMAINTENANCE: "Manutenção de Série/Lote",
    DOCUMENTTYPE: "Tipo de Documento",
    DOCUMENTNUMBER: "Número do Documento",
    ITEM: "Item",
    DOCUMENTLINENO: "Número da Linha do Documento",
    SELQTY: "Quantidade Selecionada",
    SHOWBINONLY: "Mostrar Apenas Caixas Vazias",
    RECEIPTDATE: "Data de Recebimento",
    COMMITQTY: "Quantidade Comprometida",
    EXPIRYDATE: "Data de Validade",
    SHIPMENTDETAIL: "Detalhes da Remessa",
    REQDATE: "Data Requisitada",
    PROMISEDATE: "Data Prometida",
    PODDOC: "Documento de Comprovação de Entrega",
    PODRECBY: "Recebido por Comprovação de Entrega",
    SHIPDATE: "Data de Envio",
    TARGETSHIPDATE: "Data Alvo de Envio",
    PODDATE: "Data de Comprovação de Entrega",
    SHIPTRACKNO: "Número de Rastreamento do Envio",
    LOTQTY: "Quantidade do Lote",
    REMQTY: "Quantidade Restante",
    PROCESSEDCLOSEDALERT: "O pedido processado não pode ser fechado",
    WHEREUSED: "Onde Usado",
    GenrateID: "Gerar ID",
    KEY: "Chave",
    NODIMENSION: "Nenhuma dimensão definida na configuração multidimensional.",
    SAVERECFIRST: "Por favor, salve o registro primeiro",
    STATUS: "Status",
    TRNQTY: "Quantidade da Transação",
    ORIGINALFILENAME: "Nome do Arquivo Original",
    DOCUMENTTITLE: "Título do Documento",
    DOCUMENTSUMMARY: "Resumo do Documento",
    PRIORITY: "Prioridade",
    CHECKOUTBY: "Check-out por",
    CHECKOUTSTATUS: "Status de Check-out",
    CREATEDDATE: "Data de Criação",
    CREATEDBY: "Criado por",
    MODIFIEDDATE: "Data de Modificação",
    SHOWACTIVEONLY: "Mostrar Apenas Ativos",
    READONLYOTHERUSER: "Somente Leitura para Outros Usuários",
    DOCUMENTS: "Documentos",
    NOTES: "Notas",
    CHECKOUT: "Check-out",
    CHECKIN: "Check-in",
    UNDOCHECKOUT: "Desfazer Check-out",
    DELETELINE: "Excluir Linha",
    ATTACH: "Anexar",
    TITLENAME: "Nome do Título",
    FILENAME: "Nome do Arquivo",
    SUMMARY: "Resumo",
    AUTHORIZEDGROUP: "Grupo Autorizado",
    DOCUMENTCREATEDDATE: "Data de Criação do Documento",
    DOCUMENTCREATEDBy: "Documento Criado por",
    DOCUMENTMODIFIEDDATE: "Data de Modificação do Documento",
    DOCUMENTMODIFIEDBy: "Documento Modificado por",
    PLZSELECTFILE: "Por favor, selecione um arquivo",
    ENTERFILENAME: "Digite o Nome do Arquivo",
    ENTERAUTHGROUP: "Digite o Grupo Autorizado",
    FROM: "De",
    TO: "Para",
    SCANLOT: "Escanear Lote",
    READFILEFORSUMMARY: "Ler Arquivo para Resumo",
    SCANATTACH: "Escanear e Anexar",
    RECORDNEWDOCUMENT: "Registrar Novo Documento",
    QTYRECEIVED: "Quantidade Recebida",
    VIEWPALLET: "Visualizar Palete",
    ASSIGNDIMID: "Atribuir ID de Dimensão",
    ASSIGNTOROW: "Atribuir a Todas as Linhas",
    ShipViaKey: "Via de Envio",
    VendCity: "Cidade do Fornecedor",
    VendName: "Nome do Fornecedor",
    VouchNo: "Número do Comprovante",
    VoucherDate: "Data do Comprovante",
    CustCity: "Cidade do Cliente",
    CustName: "Nome do Cliente",
    Invdate: "Data da Fatura",
    SoInvoice: "Número da Fatura",
    TranNo: "Número da Transação",
    ASSIGNDIMENSIONID: "Atribuir ID de Dimensão",
    QUERYANALYZER: "Analista de Consulta",
    ORDERNO: "Número do Pedido",
    FILEEXTNOTSUPPORT: "Extensão de Arquivo não Suportada",
    FILENAMENOTMATCH: "Nome do Arquivo não Correspondente ao Arquivo Anterior",
    PRINTLISTLABEL: {
      PRINTINV: 'Imprimir Fatura',
      CUSTOMERKEY: "Chave do Cliente",
      CUSTOMERNAME: "Nome do Cliente",
      ORDERDATE: "Data do Pedido",
      ORDERTYPE: "Tipo de Pedido",
      PROMISEDATE: "Data Prometida",
      RECDATE: "Data de Recebimento",
      RECUSERID: "ID do Usuário de Recebimento",
      REQUESTEDDATE: "Data Solicitada",
      SOTOTAL: 'Total do Pedido de Venda',
      SALESORDERNO: "Número do Pedido de Venda",
      SHIPTOKEY: "Chave de Envio para",
      STATUS: "Status",
      TRAGETSHIPDATE: "Data Alvo de Envio",
      HOLDINGREASON: "Motivo de Retenção",
      TRANNO: "Número da Transação",
      SOINVOICE: "Fatura do Pedido de Venda",
      INVOICEDATE: "Data da Fatura",
      INVOICETOTAL: "Total da Fatura",
      PRINTVOUCHER: 'Imprimir Comprovante',
      VOUCHNO: "Número do Comprovante",
      FINVOUCHERNO: "Número do Comprovante Financeiro",
      PURCHASEORDERNO: "Número do Pedido de Compra",
      VENDORKEY: "Chave do Fornecedor",
      VENDORNAME: "Nome do Fornecedor",
      VOUCHERDATE: "Data do Comprovante",
      VOUCHERTOTAL: "Total do Comprovante"
    },
    LINEITEM: "Item de Linha",
    ISSUEDQTY: "Quantidade Emitida",
    HOLDORDPRINTMSG: "Pedido retido não pode ser impresso.",
    DUPLICATE: "Duplicado",
    FOUND: "encontrado",
    FROMLOCATION: "De Localização",
    INVENTORYTRANSFER: "Transferência de Inventário",
    INVENTORYMOVE: "Movimentação de Inventário",
    DELMSG: "Excluído com Sucesso.",
    PRMEMPTY: "Parâmetro não pode ser vazio",
    SELRPTPRM: "Selecionar Parâmetro de Relatório",
    PARAMETER: "Parâmetro",
    SAVEMSG: "Salvo com Sucesso",
    QUERYBUILDER: "Construtor de Consultas",
    CLEAR: "Limpar",
    TESTSQL: "Testar SQL",
    BTN_CONTACT: "Detalhes de Contato",
    QUERYEDITOR: "Editor de Consultas",
    TRANSFER: "Transferir",
    CONTACTLIST: {
      DELTE_HEADER: "Mestre de Lote",
      TRANSFER: "Os dados da linha selecionada serão transferidos para a tela principal. Deseja continuar?",
      CUSTOMER_KEY_REQUIRED: "Informe a Chave do Cliente",
      VEND_KEY_REQUIRED: "Informe a Chave do Fornecedor",
      PROSPECT_KEY_REQUIRED: "Informe a Chave do Prospecto",
      NOT_SAVED: "Registro não salvo.",
      NAME: "Nome",
      CATEGORY: "Categoria",
      JOB_TITLE: "Cargo",
      PHONE: "Telefone",
      EMAIL: "E-mail",
      QUOTATION: 'Orçamento',
      SALESORDER: "Pedido de Venda",
      INVOICE: 'Fatura'
    },
    ARCHIVECONTRACT: {
      SALESARCHIVECONT: "Arquivar Contrato de Venda",
      PURARCHIVECONT: "Arquivar Contrato de Compra",
      EXPIRYDATEFROM: "Data de Expiração De",
      EXPIRYDATETO: "Data de Expiração Até",
      CUSTKEY: "Chave do Cliente",
      CUSTNAME: "Nome do Cliente",
      VENDKEY: "Chave do Fornecedor",
      VENDNAME: "Nome do Fornecedor"
    },
    MAILSETTINGS: {
      MAILSETTINGS: "Configurações de Email",
      SERVER: "Servidor",
      USEREMAIL: "Usuário",
      PASSWORD: "Senha",
      PORT: "Porta",
      ENABLESSL: "Habilitar SSL",
      BCCMAILSENDER: "BCC para Remetente",
      SAVEMAILSETTING: "Configuração de e-mail salva com sucesso"
    },
    PURCHASEAPPROVERGRP: {
      TITLEPR: "Grupo de Aprovadores de Compras",
      TITLESR: "Grupo de Aprovadores de Vendas",
      TITLEFM: "Grupo de Aprovadores de Fórmulas",
      TITLESRM: "Grupo de Aprovadores de Amostras",
      TITLECM: "Grupo de Aprovadores Comum",
      ADDPURAPPROVERGROUP: "Adicionar Grupo de Aprovadores de Compras",
      ADDSALAPPROVERGROUP: "Adicionar Grupo de Aprovadores de Vendas",
      ADDFORAPPROVERGROUP: "Adicionar Grupo de Aprovadores de Fórmulas",
      ADDSMAPPROVERGROUP: "Adicionar Grupo de Aprovadores de Amostras",
      ADDCMAPPROVERGROUP: "Adicionar Grupo de Aprovadores Comum",
      APPROVER_GROUP: "ID do Grupo",
      DOC_TYPE: "Tipo de Documento",
      DESCRIPTION: "Descrição do Grupo",
      RECDATE: "Data de Recebimento",
      RECUSERID: "ID do Usuário de Recebimento",
      USERSEQNO: "Número Sequencial do Usuário",
      ACTION: "Ação",
      APPROVER: "Aprovador",
      NAME: "Nome",
      EMAIL: "E-mail",
      APPROVERINFORMATION: "Informações do Aprovador",
      RESEQUENCE: "Rearranjar Sequência",
      TYPE: 'Tipo',
      MSG: {
        APPROVERNAMEREQ: "Informe o Aprovador na Linha",
        USERSEQNOREQ: "Informe o Número Sequencial do Usuário na Linha",
        GROUPIDREQ: "Informe o ID do Grupo",
        ENTERUSERINFORMATION: "Informe as Informações do Usuário",
        DUPLICATESEQNO: "Número Sequencial Duplicado",
        APPROVEREXIST: "Aprovador Já Existe",
        SAVESEQORDER: "Por favor, Salve seu Registro Após Excluir o Item da Linha"
      }
    },
    GENERICFORM: {
      BATCHMASTER: 'Mestre de Lote',
      DELMESSAGE: 'Excluir Registro?',
      ASKSAVE: 'Salvar Registro?',
      YES: 'Sim',
      NO: 'Não',
      CANCEL: 'Cancelar',
      MSGDELETE: "Nenhum dado para excluir.",
      MSGSAVEFIRST: "Salve o registro primeiro.",
      UPLOADPHOTO: "Enviar",
      RECORDAUTHORIZATION: {
        USER: "Usuário",
        USERID: "ID do Usuário",
        USER_DESCRIPTION: "Nome do Usuário",
        GROUPID: "ID do Grupo",
        GROUPDESCRIPTION: "Nome do Grupo",
        RECUSERID: "ID do Usuário de Gravação",
        RECDATE: "Data de Gravação",
        TITLESR: "Autorização de Registro de Vendas",
        TITLEFM: "Autorização de Registro de Fórmulas",
        ADDSALRECORDAUTH: "Adicionar Autorização de Registro de Vendas",
        ADDFORRECORDAUTH: "Adicionar Autorização de Registro de Fórmulas",
        AUTHORIZEDUSER: "Usuário Autorizado",
        INSERTUSER: "Inserir Usuário",
        READ: "Ler",
        WRITE: "Escrever",
        DELETE: "Excluir",
        MSG: {
          ALREADYEXIST: "Já Existente",
          USERIDREQ: "Informe o ID do Usuário",
          ENTERAUTHORIZEDUSERINFORMATION: "Informe as Informações do Usuário Autorizado"
        }
      },
      DATAVIEW: {
        TITLE: "Visualização de Dados",
        COMPANY: "ID da Empresa",
        COMPANYNAME: "Nome da Empresa",
        SQL: "SQL",
        EXECUTE: "Executar SQL",
        ENTERCOMPANY: "Informe o ID da Empresa",
        ENTERSQL: "Informe o SQL",
        MSG: {
          ASKCHECK: "registro(s) Afetado(s)",
          RECORDFOUND: "registro(s) Encontrado(s)",
          ASKSAVE: "Deseja continuar?"
        }
      },
      GANTTCHART: {
        BATCHNO: "Número do Lote",
        PROCESSCELL: "Célula de Processo",
        STATUS: "Status do Lote",
        BATCHTYPE: "Tipo de Lote",
        RESCHEDULE: "Reagendar",
        MANUAL: "Manual",
        AUTO: "Organização Automática",
        GETBATCHES: "Obter Lotes",
        REARRANGE: "Rearranjar",
        PREDECESSORBATCH: "Lote Antecessor",
        DELAY: "Atraso",
        SEQNO: "Seq No.",
        COLLAPSEPANE: "Recolher/Expandir Painel",
        SHOWTOOLBAR: "Mostrar/Ocultar Barra de Ferramentas",
        UPDATEPROCEES: "Atualizar Célula de Processo",
        FORWARD: "Avançar",
        BACKWARD: "Retroceder",
        SELECTEDBATCH: "Lote Selecionado",
        FORMULAITEM: "ID da Fórmula/Item",
        ORIGSTARTDATE: "Data de Início Original Agendada",
        ORIGENDDATE: "Data de Término Original Agendada",
        SCHEDULING: "Agendamento",
        PASTDUE: "Vencido",
        SNO: "No.",
        STARTDATE: "Data de Início Agendada",
        ENDDATE: "Data de Término Agendada",
        REMOVELINK: "Remover Link",
        ASSIGNLINK: "Atribuir Link",
        ENTERPROCESSCELL: "Por favor, informe a célula de processo."
      },
      BININQUIRY: {
        TITLE: "Consulta de Localização de Armazenamento",
        LOOKUPTITLE: 'Consulta de Armazenamento',
        BIN: 'Nº do Armazenamento',
        ITEM: 'Item',
        LOCATION: 'Localização',
        LOTNUMBER: 'Número do Lote',
        ItemKey: 'Chave do Item',
        LocationKey: 'Chave da Localização',
        LotNo: 'Número do Lote',
        QtyAvailable: 'Qtde Disponível',
        ITEMKEY: 'Item',
        LOCATIONKEY: 'Localização',
        LOTNO: 'Lote nº',
        QTYAVAILABLE: 'Qtde Disponível',
        QTYONHAND: 'Qtde em Estoque',
        STOCKUOMCODE: 'UOM',
        DESCRIPTION: 'Descrição do Item',
        QtyOnHand: '',
        VIEW: 'Visualizar',
        CONTAINERTAB: 'Contêiner',
        AISLE: 'Corredor',
        ROW: 'Fila',
        RACK: 'Prateleira'
      },
      PALLETINQUIRY: {
        TITLE: "Consulta de Pallet",
        LOOKUPTITLE: 'Consulta de Pallet',
        PALLET: 'ID do Pallet',
        ITEMKEY: 'Item',
        ITEMDESCRIPTION: 'Descrição do Item',
        LOCATIONKEY: 'Localização',
        LOTNO: 'Número do Lote',
        BINNO: 'Número do Bin',
        CUSTOMER: 'Cliente',
        SONO: 'Número do Pedido de Venda',
        STATUS: 'Status',
        BATCHNO: 'Número do Lote',
        COMMENTS: 'Comentários',
        LOTDETAILS: 'Detalhes do Lote',
        PALLETDETAILS: 'Detalhes do Pallet',
        STOCKUOMCODE: 'UOM',
        CONTAINERNO: 'Contêiner',
        QUANTITY: 'Qtde',
        LOCATION: 'Localização',
        QTYONHAND: 'Qtde em Estoque',
        PALLETID: 'ID do Pallet',
        ALLOWPARTISSUESERIALIZATION: 'AP',
        DEFAULTCONTAINERQTY: 'Contêiner Padrão',
        PALLETLABEL: 'Etiqueta do Pallet',
        PALLETMENIFEST: 'Manifesto do Pallet',
        MSG: {
          PALLTEIDREQ: 'O ID do Pallet não pode ficar em branco'
        }
      },
      DOWNLOADERROR: {
        TITLE: "Gerenciador de Erros de Download",
        COMPANYID: "ID da Empresa",
        COMPANYNAME: "Nome da Empresa",
        USERID: "ID do Usuário",
        USERNAME: "Nome do Usuário",
        DOWNLOADERRORLOG: "Log de Erros de Download",
        CLEARERRORLOG: "Limpar Log de Erros",
        ENTERCOMPANY: "Informe o ID da Empresa",
        ENTERUSER: "Informe o ID do Usuário",
        NOERRORLOG: "Nenhum Log de Erro"
      },
      WMSLOTINQUIRY: {
        TITLE: "Consulta de Lote",
        LOTNO: "Número do Lote",
        ITEMKEY: "Chave do Item",
        ITEMDESC: "Descrição do Item",
        EXPDATE: "Data de Validade",
        LOTSTATUS: "Status do Lote",
        QUARTINEDATE: "Data de Quarentena",
        STOCKUOM: "UOM de Estoque",
        DISPUOM: "UOM de Exibição",
        //---------------------------------------------
        QUANTITYTAB: "Quantidade",
        TOTALONHANDQTY: "Total em Estoque",
        TOTALAVAILABLEQTY: "Total Disponível",
        BINNO: "Número do Bin",
        LOCATION: "Localização",
        QTYONHAND: "Qtde em Estoque",
        AVAILABLEQTY: "Qtde Disponível",
        //---------------------------------------------
        SOURCETAB: "Origem",
        ITEMTYPE: "Fabricar/Comprar",
        DOCDATE: "Data do Documento",
        DOCNO: "Número do Documento",
        QTY: "Qtde",
        VENDLOTNO: "Número do Lote do Fornecedor",
        VENDORKEY: "Chave do Fornecedor",
        VENDORNAME: "Nome do Fornecedor",
        //---------------------------------------------
        FEATURETAB: "Recursos",
        FEATUREID: "ID do Recurso",
        DESCRIPTION: "Descrição",
        VALUE: "Valor",
        //---------------------------------------------
        CONTAINERTAB: "Contêiner",
        CONTAINERNO: 'Número do Contêiner',
        PALLETNO: 'ID do Pallet',
        COMMENTS: "Comentários",
        VIEW: 'Visualizar'
      },
      PASSWORDCONFIGURATION: {
        TITLE: "Configuração de Senha",
        PASSWORDRENEWALCYCLE: "Ciclo de Renovação de Senha (Em Dias)",
        MINIMUMPASSWORDLENGTH: "Comprimento Mínimo da Senha (Em Caracteres)",
        RESTRICTIONFORSAMEPASSWORD: "Restrição para a mesma senha (Em Dias)",
        FAILURELOGINATTEMPTS: "Tentativas de Login sem Sucesso",
        LOGINDURATIONFORONETIMEPASSWORD: "Duração do Login para Senha Única (Em Dias)",
        MAXIMUMALLOWEDINACTIVITYPERIOD: "Período Máximo Permitido de Inatividade (Em Dias)",
        STRONGPASSWORD: "Senha Forte",
        MAILANDSMSSETTINGS: "Configurações de E-mail e SMS",
        SERVER: "Servidor",
        USER: "Usuário",
        BCCMAILTOSENDER: "BCC E-mail para o Remetente",
        PASSWORD: "Senha",
        ENABLESSL: "Habilitar SSL",
        PORT: "Porta",
        SMSURL: "URL do SMS"
      },
      TODO: {
        TITLE: "A Fazer",
        TYPE: "Tipo",
        STATUS: "Status",
        PRIORITY: "Prioridade",
        CLOSINGPER: "Percentual de Conclusão",
        REQBY: "Solicitado Por",
        DUEDATE: "Data de Vencimento",
        DESC: "Descrição",
        DOCID: "ID do Documento",
        FOLLOWUP: "Acompanhamento",
        BUSINESSPARTER: "Parceiro de Negócios",
        CONTACTPERSON: "Pessoa de Contato",
        CONTACTNO: "Número de Contato",
        EMAILId: "ID do E-mail",
        COMMENTS: "Comentários",
        ATTACHEDDOCS: "Documentos Anexados",
        ATTACHMENT: "Anexo",
        ACTIVITYJOUNAL: "Diário de Atividades",
        NEWTODO: "Novo A Fazer",
        FOLLOWUPDATE: "Data de Acompanhamento",
        SUBJECT: "Assunto",
        REQUESTEDBY: "Solicitado Por",
        ASSIGNEDTO: "Atribuído A",
        SUMMARY: "Resumo",
        DATE: "Data",
        NEWACTIVITY: "Nova Atividade",
        INPROGRESS: "Em Progresso",
        COMPLETED: "Concluído",
        CANCELLED: "Cancelado",
        ASSIGNTODOANOTHERUSER: "Atribuir A Fazer a Outro Usuário",
        DOCUMENTS: "Documentos",
        SHOWBUSINESS: "Mostrar Negócios",
        MYTODO: "Meu A Fazer",
        ALLUSER: "Todos os Usuários",
        REASSIGNED: "Reatribuído",
        NEWDOCUMENT: "Novo Documento",
        MSG: {
          SELECTBUSINESSPARTNER: "Selecione um Parceiro de Negócios",
          SELECTFILE: "Selecione o Arquivo",
          DUEDATEGREATERTHANFOLLOWDATE: "A data de vencimento deve ser maior que a data de acompanhamento",
          FOLLOWDATENOTLESSTHANCURRENT: "A data de acompanhamento não pode ser inferior à data atual",
          TARGETDATEVALIDATION: "A data alvo não pode ficar em branco",
          CLOSEPERNOTGREATERTHAN100: "O percentual de conclusão não deve ser maior que 100"
        }
      },
      ACTIVITYMASTER: {
        TITLE: 'Mestre de Atividades',
        NEWFYI: 'Novo FYI',
        TYPE: 'Tipo',
        USER: 'Usuário',
        SUMMARY: 'Resumo',
        DATE: 'Data',
        TODO: 'A Fazer',
        DOCUMENTID: 'ID do Documento',
        BUSSINESSPARTNER: 'Parceiro de Negócios',
        CONTACTPERSON: 'Pessoa de Contato',
        CONTACTNO: 'Número de Contato',
        EMAILID: 'ID do E-mail',
        COMMENT: 'Comentário',
        ATTACHEDDOCS: 'Documentos Anexados',
        COMMENTS: 'Comentários',
        ADDDOCK: 'Adicionar Documento',
        TITLEONE: 'Título',
        STATUS: 'Status',
        MSG: {
          BUSSINESSKEYCANNOTBENULL: 'A chave do negócio não pode ser nula'
        }
      },
      WORKFLOW: {
        NEWTODO: 'Novo',
        TYPE: 'Tipo',
        PRIORITY: 'Prioridade',
        ASSIGNEDTO: 'Atribuído a',
        STATUS: 'Status',
        DESCRIPTION: 'Descrição',
        COMMENTS: 'Comentários',
        DUEDAYS: 'Dias Restantes',
        CREATEON: 'Criado em',
        PREDECESSOR: 'Predecessor',
        TODOSTATUS: 'Status do A Fazer',
        CREATEFYI: 'Criar FYI',
        TITLE: "Lista de A Fazer",
        MANDATORYFIELDS: 'Preencha os Campos Obrigatórios',
        ASSIGNTOcHECK: "Digite o Atribuído a",
        TODOTYPECHECK: "Selecione o Tipo",
        WORKFLOWACESS: "O fluxo de trabalho não se aplica a esta tela.",
        FORMTITLE: 'Configurações do Workflow ToDo'
      },
      FINANCESERIES: {
        TITLE: "Série Financeira",
        ADDFINANCE: "Adicionar Série Financeira",
        TYPE: "Tipo",
        SERIES: "Série (Opção 1)",
        CUSTOMOPTION: "Personalizado (Opção 2)",
        MNTH: "Mês (Opção 3)",
        RECUSERID: "ID do Usuário que Registra",
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
        AUTOINSERT: "Inserir Automaticamente a Série para Mês e Ano",
        INITIALIZESERIES: "Inicializar Série para o Mês/Ano",
        INITIALIZESERIESMONTH: "Inicializar Série a partir do Mês",
        DISPLAYFORMAT: "Formato de Exibição",
        MONTH: "Mês",
        YEAR: "Ano",
        CHAR3: "3-Carac[01/JAN]",
        CHAR2: "2-Carac[01/02]",
        MSG: {
          DISPLAYVALIDATION: "O comprimento da Série Financeira não pode exceder 12 caracteres",
          INVALIDMONTH: "Mês inválido",
          INVOICESERIES: "Digite a série de faturas (Opção 1)",
          MONTH: "Digite o mês (Opção 3)",
          YEAR: "Digite o ano (Opção 4)",
          SEQU: "Digite o número de sequência (Opção 5)",
          GenrateSequence: "Digite a Opção de Sequência",
          VALIDMONTH: "Digite um ano válido"
        }
      },
      username: "Nome de Usuário",
      email: "E-mail",
      status: "Status",
      MYPROFILE: "Meu Perfil",
      REPORTACTION: "Ação de Relatório",
      PROFILEACTION: "Perfil",
      INQUIRY: 'Consulta',
      ITEMINQUIRY: "Consulta de Item",
      LOTSPOT: 'Lote Nº Obrigatório',
      ITEMKEYREQ: 'Chave do Item Obrigatória',
      PALLETNOREQ: 'Nº do Pallet Obrigatório',
      BINNOREQ: 'Nº do Bin Obrigatório',
      CUSTNAME: 'Nome do Cliente',
      Free_Text: 'Texto Livre ',
      QCITEMPROCESSALERT: 'Alguns itens estão em status de Controle de Qualidade. Esses itens não foram processados.',
      Back_Yes_No: 'Devolução',
      BLOCKSHELFLIFE: "Não há prazo de validade suficiente para o item. ",
      AVAILABLESHELFLIFE: "O prazo de validade disponível é ",
      REQSHELFLIFE: " e o prazo de validade necessário é ",
      BACKORDERNOTALLOW: "Back Order não permitido, o pedido será fechado.",
      SELECTPARENTQTY: "A quantidade de envio do kit pai deve ser maior que 0",
      Ref_So: "Nº do Pedido de Referência",
      FORMSETTING: "Configurações do Formulário",
      ROWSETTING: 'Configurações da Linha',
      FOOTERSETTING: 'Configurações do Rodapé',
      GRIDSETTING: 'Configurações da Grade',
      PICKEDGRIDSETTING: "Configurações da Grade - Coletado",
      DROPPEDGRIDSETTING: "Configurações da Grade - Descartado",
      ALLGRIDSETTING: "Configurações da Grade - Todos",
      STAGEDGRIDSETTING: "Configurações da Grade - Etapa",
      RELEASEDGRIDSETTING: "Configurações da Grade - Liberado",
      PACKEDGRIDSETTING: "Configurações da Grade - Embalado",
      RESTORE: "Restaurar",
      SELECTEDUSER: "Selecionar Usuários",
      SELECTEDUSERS: "Usuários Selecionados",
      LABELS: "Etiquetas",
      VISIBLE: "Visível",
      ACTIVE: "Ativo",
      BTNVISIBLE: "Botão Visível",
      BTNACTIVE: "Botão Ativo",
      MANDATORY: "Obrigatório",
      ACTION: "Ação",
      SAVEFORMSETTING: "Configuração do formulário salva com sucesso",
      RESTOREFORMSETTING: "Configuração do formulário restaurada com sucesso",
      RESTOREGRIDSETTING: 'Configuração da grade restaurada com sucesso',
      User_Id: "ID do Usuário",
      SELECTALL: "Selecionar Todos",
      THEME: "Tema",
      DISPLAYREPORT: "Exibir Relatório",
      ABOUT: "Sobre",
      SCHEDULER: "Agendamento de Docas",
      DOCKKEY: "Nome da Doca",
      FROMDATETIME: "De Data e Hora",
      TODATETIME: "Até Data e Hora",
      TRUCKNO: "Nº do Caminhão",
      DRIVERNAME: "Nome do Motorista",
      DRIVERCONTACTNO: "Contato do Motorista",
      SHIPINGCONTACTNO: "Contato do Transportador",
      CITY: "Cidade",
      STATE: "Estado",
      BUSINESSPARTNER: "Parceiro de Negócios",
      ADDEVENT: "Adicionar Agendamento de Doca",
      EDITEVENT: "Editar Agendamento de Doca",
      DOCKKEYLIST: "Lista de Chaves de Docas",
      DOCKNAME: "Nome da Doca",
      DOCKTYPE: "Tipo de Doca",
      SCHEDULEDOCK: "Agendar Doca",
      FETCHUSERSETTINGS: 'Buscar Configurações do Usuário',
      ACTIONSETTING: 'Configuração de Ação',
      WMSEWS: {
        WEIGHINGFOR: "Pesar Para",
        SELECTEDLOT: "Lote Selecionado",
        REMAININGQTY: "Qtde Restante",
        SCALEQTY: "Qtde na Balança",
        SELECTSCALE: "Selecionar Balança",
        CLEARALL: "Limpar Tudo",
        WEIGHT: "Peso",
        TOTALQTY: "Qtde Total",
        ACCEPT: "Aceitar",
        SELECTLOT: "Por favor, selecione o Nº do Lote.",
        SELECTITEM: "Por favor, selecione a Chave do Item.",
        CHKREMQTY: "A Qtde Restante deve ser maior que zero",
        CHKSCALEQTY: "Qtde na Balança inválida",
        CHKSCALELOTQTY: "A Qtde na Balança não deve ser maior que a Qtde do Lote",
        ZEROSCALEQTY: "Por favor, informe a Qtde na Balança",
        CHKSELECTSCALE: "Por favor, selecione a Balança"
      },
      ASSIGNDIMENSIONNOTOPEN: "Aplicável apenas para finanças da bme",
      QUERYWIZARD: {
        ACTION: 'Ação',
        TRANSFER: 'Gerar',
        SEQNO: 'Nº Sequência',
        SQL: 'SQL',
        JOIN: 'Unir',
        LEVEL: 'Nível',
        PARENTLEVEL: 'Nível Pai',
        FINALSQL: 'SQL Final',
        QUERY: 'Consulta',
        HIERARCHICALQUERY: 'Consulta Hierárquica',
        COLUMN1: 'Coluna 1',
        HYPERLINK: 'Hiperlink',
        DISPLAYDRILLDOWNFIELD1: 'Campo de Detalhes 1',
        DISPLAYDRILLDOWNFIELD2: 'Campo de Detalhes 2',
        DRILLDOWNFIELD1: 'Detalhes 1',
        DRILLDOWNFIELD2: 'Detalhes 2',
        HYPERLINKID: 'ID do Hiperlink',
        RECORDKEY1: 'Chave de Registro 1',
        RECORDKEY2: 'Chave de Registro 2',
        ROUTINGPATH: 'Caminho de Roteamento',
        SCREENNAME: 'Nome da Tela',
        TARGETSCREENNAME: 'Nome da Tela de Destino',
        MSG: {
          ENTERSQL: 'Informe o SQL',
          ENTERJOIN: 'Informe a Junção',
          ENTERLEVEL: 'Informe o Nível',
          ENTERPARENTLEVEL: 'Informe o Nível Pai',
          ENTERFINALSQL: 'Gerar SQL Final',
          MASTEREXISTS: 'Primeiro salve o registro mestre.',
          DELETELEVELCHECKK: 'Esta linha possui um registro pai, não é possível excluir.',
          NODATASAVE: 'Nenhum dado para salvar.',
          DISPLAYDRILLDOWNFIELD1: 'Campo de Detalhes 1',
          ENTERSCREENNAME: 'Informe o Nome da Tela',
          ENTERDISPLAYDRILLDOWNFIELD1: 'Informe o Campo de Detalhes 1'
        }
      },
      TEMPLATE_ID: "ID do Modelo",
      SDSNUMERICVALUE: {
        TITLE: 'Informação Numérica SDS',
        CASNUM: 'Número CAS',
        CODE: 'Código',
        DESCRIPTION: 'Descrição',
        VALUE: 'Valor',
        NORECOD: 'Ainda não há registros criados.',
        CAS: 'Número CAS',
        BOILERPLATEGROUP: 'Grupo de Etiquetas',
        ITEM: 'Chave do Item',
        DES: 'Descrição'
      }
    }
  }
};

/***/ }),

/***/ 25398:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/vi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'vi',
  data: {
    'SidebarMenu': {
      "Common": "Chung",
      'Inbound': 'Đang vào',
      'Outbound': 'Đang ra',
      'Reports': 'Báo cáo',
      'Internal Movements': 'Chuyển động nội bộ',
      'Inquiry and Reports': 'Truy vấn và báo cáo',
      'Admin': 'Quản trị',
      'Finance': 'Tài chính',
      "ChangeCompany": "Thay đổi Công ty",
      "Dashboard": "Bảng điều khiển",
      "Favorites": "Yêu thích",
      "TimeANDExpenses": "Thời gian và Chi phí",
      "Finanace": "Tài chính",
      "Projects": "Dự án",
      "Receivables": "Có thể nhận được",
      "General Table View": "Xem bảng chung",
      "SalesOrders": "Đơn đặt hàng",
      "Purchase": "Mua hàng",
      "Inventory": "Hàng tồn kho",
      "Configuration": "Cấu hình",
      "WMS Configuration": "Cấu hình WMS",
      "Put Away": "Đặt đi",
      "QualityAssurance": "Đảm bảo chất lượng",
      "Quality Control": "Kiểm soát chất lượng",
      "Sales": "Bán hàng",
      "Master": "Chuyên gia",
      "ABC": "ABC",
      "Location": "Vị trí",
      "Prospect": "Triển vọng",
      "Customer": "Khách hàng",
      "ShipTo": "Gửi đến",
      "SalesTemplate": "Mẫu bán hàng",
      "SalesKit": "Bộ bán hàng",
      "Territory": "Lãnh thổ",
      "Salesperson": "Người bán hàng",
      "SalesCommission": "Hoa hồng bán hàng",
      "SalesContract": "Hợp đồng bán hàng",
      "ArchiveSalesContract": "Lưu trữ hợp đồng bán hàng",
      "DisplayArchiveSalesContract": "Hiển thị lưu trữ hợp đồng bán hàng",
      "PriceSearchOrder": "Tìm kiếm đơn hàng theo giá",
      "PromotionalPricing": "Giá khuyến mãi",
      "PriceMatrix-Customer/Item": "Ma trận giá - Khách hàng/Mặt hàng",
      "PriceMatrix-Customer/Price Group": "Ma trận giá - Khách hàng/Nhóm giá",
      "PriceMatrix-Customer Class/Item": "Ma trận giá - Lớp khách hàng/Mặt hàng",
      "PriceMatrix-Customer Class/Price Group": "Ma trận giá - Lớp khách hàng/Nhóm giá",
      "PriceMatrix-Customer Class/Item Class": "Ma trận giá - Lớp khách hàng/Lớp mặt hàng",
      "PriceListMaster": "Danh mục giá",
      "RebateMaster": "Danh mục hoàn trả",
      "RemitTo": "Chuyển đến",
      "SalesRecordAuthorization": "Ủy quyền hồ sơ bán hàng",
      "InvoiceSeries": "Danh sách hóa đơn",
      "CustomerSpecificQC": "QC Đặc thù của khách hàng",
      "RouteMaster": "Đường đi chính",
      "RouteSequence": "Chuỗi đường đi",
      "Transactions": "Giao dịch",
      "Quotation/SalesRequisition": "Báo giá/Yêu cầu bán hàng",
      "QuickSalesOrderEntry": "Nhập đơn hàng nhanh",
      "SalesOrderEntry": "Nhập đơn hàng bán hàng",
      "PickList": "Danh sách chọn",
      "MaintainShipment": "Bảo trì lô hàng",
      "PrintBillofLading": "In vận đơn",
      "TransferToInvoice": "Chuyển đổi thành hóa đơn",
      "SuperInvoice": "Hóa đơn siêu cấp",
      "DirectInvoice/CreditMemo": "Hóa đơn trực tiếp/Ghi chú tín dụng",
      "ShipmentRangeProcess": "Quá trình vận chuyển theo phạm vi",
      "QuotationRangeProcessing": "Xử lý báo giá theo phạm vi",
      "PackingSlip": "Phiếu đóng gói",
      "LightCRM": "CRM nhẹ",
      "InventoryBillOfLading": "Vận đơn hàng tồn kho",
      "MaterialPackaging": "Đóng gói vật liệu",
      "ArchiveSalesOrder": "Lưu trữ đơn hàng bán hàng",
      "DisplaySalesOrderHistory": "Hiển thị lịch sử đơn hàng bán hàng",
      "InvoiceReversal": "Đảo ngược hóa đơn",
      "TruckLoadUtility": "Tiện ích tải xe",
      "MasterReports": "Báo cáo chuyên gia",
      "SalesContractReport": "Báo cáo hợp đồng bán hàng",
      "ProspectReport": "Báo cáo triển vọng",
      "CustomerReport": "Báo cáo khách hàng",
      "ShipToReport": "Báo cáo gửi đến",
      "CustomerItemReport": "Báo cáo khách hàng/mặt hàng",
      "CustomerClassReport": "Báo cáo lớp khách hàng",
      "CustomerClassItemReport": "Báo cáo lớp khách hàng/mặt hàng",
      "CustomerByClassReport": "Báo cáo khách hàng theo lớp",
      "CustomerSalespersonReport": "Báo cáo người bán hàng khách hàng",
      "SalesCommissionReport": "Báo cáo hoa hồng bán hàng",
      "SalespersonReport": "Báo cáo người bán hàng",
      "TerritoryReport": "Báo cáo lãnh thổ",
      "PriceMatrixReport": "Báo cáo ma trận giá",
      "SalesKitReport": "Báo cáo bộ bán hàng",
      "TransactionsReports": "Báo cáo giao dịch",
      "PrintSalesOrderReport": "In báo cáo đơn hàng bán hàng",
      "Invoices": "Hóa đơn",
      "Pick-ListReport": "Báo cáo danh sách chọn",
      "InventoryCommitmentReport": "Báo cáo cam kết hàng tồn kho",
      "SalesAnalysisReport": "Báo cáo phân tích bán hàng",
      "SOGrossProfitReport": "Báo cáo lợi nhuận gộp đơn hàng bán hàng",
      "SalesOrderHistoryReport": "Báo cáo lịch sử đơn hàng bán hàng",
      "SalesOrderByItem": "Báo cáo đơn hàng bán hàng theo mặt hàng",
      "SalesOrderByCustomer": "Báo cáo đơn hàng bán hàng theo khách hàng",
      "ShipmentWithOnhandReport": "Báo cáo vận chuyển có hàng tồn kho",
      "ShipmentOverdueReport": "Báo cáo vận chuyển quá hạn",
      "ShipmentStatusWiseReport": "Báo cáo trạng thái vận chuyển",
      "ShipmentItemWiseReport": "Báo cáo mặt hàng vận chuyển",
      "ProductionReconciliation": "Cân đối sản xuất",
      "MaterialAnalysisReport": "Báo cáo phân tích vật liệu",
      "CertificateofAnalysis": "Chứng nhận phân tích",
      "TruckDeliveryReport": "Báo cáo giao hàng xe tải",
      "Customization": "Tùy chỉnh",
      "TaskSetup": "Thiết lập công việc",
      "Accounts Payable": "Tài khoản phải trả",
      "Accounts Receivable": "Tài khoản phải thu",
      "General Ledger": "Sổ cái chung",
      "Bank/Cash": "Ngân hàng/ Tiền mặt",
      "Finance Configuration": "Cấu hình tài chính",
      "R and D": "Nghiên cứu và Phát triển",
      "BOM": "Danh sách vật liệu",
      "Routing": "Lộ trình",
      "Production": "Sản xuất",
      "ProcessCell": "Quy trình sản xuất",
      "Costing": "Chi phí",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "Chuyên gia khách hàng",
      "CustomerSalesperson": "Người bán hàng khách hàng",
      "BillofLadingInventoryInfo": "Thông tin vận đơn hàng tồn kho",
      "BillofLadingShipToInfo": "Thông tin vận đơn gửi đến",
      "BillofLadingSetup": "Thiết lập vận đơn",
      "CustomerItem": "Khách hàng/Mặt hàng",
      "CustomerClass": "Lớp khách hàng",
      "CustomerClassItem": "Lớp khách hàng/Mặt hàng",
      "CustomerSaleableItems": "Mặt hàng có thể bán của khách hàng",
      "CustomerGroupSaleableItems": "Mặt hàng có thể bán của nhóm khách hàng",
      "CustomerGroup": "Nhóm khách hàng",
      "SalesApproverGroup": "Nhóm phê duyệt bán hàng",
      "SOSeriesMaster": "Chuyên gia dòng đơn hàng bán hàng",
      "DISeriesMaster": "Chuyên gia dòng DI",
      "SalesSetup": "Thiết lập bán hàng",
      "Sample Management": "Quản lý mẫu",
      "NPD/SRM": "NPD/SRM",
      "CRM": "CRM"
    },
    // SPLITCONTAINER: {
    "PublisherPortalTitle": "Cổng thông tin Nhà xuất bản",
    "UserManagementTitle": "Quản lý Người dùng",
    "ListExportToExcel": "Xuất ra Excel",
    "ListExportToPdf": "Xuất ra PDF",
    "UserManagementAddUser": "Thêm người dùng",
    "ListPrint": "In",
    "ListColumn": "Cột",
    "ListPermissions": "Quyền",
    "CommonInvitedBy": "Được mời bởi",
    "ListJoinedOn": "Tham gia vào",
    "ListRole": "Vai trò",
    "UserAdmin": "Quản trị viên",
    "CommonOther": "Khác",
    "CommonStatus": "Trạng thái",
    "UserActive": "Hoạt động",
    "UserInActive": "Ngưng hoạt động",
    "CommonAction": "Hành động",
    "UserAddForm": "Biểu mẫu Người dùng mới",
    "UserEditForm": "Biểu mẫu Chỉnh sửa Người dùng",
    "CommonFirstName": "Tên",
    "CommonFirstNameRequired": "Tên là bắt buộc.",
    "CommonLastName": "Họ",
    "CommonLastNameRequired": "Họ là bắt buộc.",
    "CommonInviteEmail": "Email Mời",
    "CommonEmail": "Email",
    "CommonEmailRequired": "Email là bắt buộc.",
    "CommonInvalidEmail": "Địa chỉ email không hợp lệ.",
    "CommonSetPassword": "Thiết Lập Mật Khẩu",
    "CommonPassword": "Mật Khẩu",
    "CommonPasswordRequired": "Mật khẩu là bắt buộc.",
    "CommonInvalidPassword": "Mật khẩu không hợp lệ.",
    "CommonPhone": "Điện Thoại",
    "CommonInvitedOn": "Đã Mời Vào",
    "CommonInvite": "Mời",
    "CommonCancel": "Hủy",
    "CommonSave": "Lưu",
    "CommonUser": "Người Dùng",
    "CommonConcurrencyError": "Vui lòng làm mới màn hình và thử lại.",
    "CommonUnhandleError": "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau. Chúng tôi rất biết ơn mọi phản hồi hoặc thông tin về lỗi đã xảy ra.",
    "CommonBrandingSettings": "Cài Đặt Thương Hiệu",
    "CommonBusinessName": "Tên Doanh Nghiệp",
    "CommonSelectTheme": "Chọn Giao Diện",
    "CommonConfiguration": "Cấu Hình",
    "CommonBasicDetails": "Chi Tiết Cơ Bản",
    "CommonCompany": "Tên Công Ty",
    "CommonCompanyNameIsRequired": "Tên công ty là bắt buộc",
    "CommonBusinessID": "ID Doanh Nghiệp",
    "CommonCompanyID": "ID Công Ty",
    "CommonAddress": "Địa Chỉ",
    "CommonAddressIsRequired": "Địa chỉ là bắt buộc",
    "CommonPrimaryAdmin": "Quản Trị Viên Chính",
    "CommonPreAdminEmail": "Email Quản Trị Viên Trước",
    "CommonBusinessPortalURL": "URL Cổng Thông Tin Doanh Nghiệp",
    "CommonPartnerPortalURL": "URL Cổng Thông Tin Đối Tác",
    "CommonSubscriptionDetails": "Chi Tiết Đăng Ký",
    "CommonPlanName": "Tên Kế Hoạch",
    "CommonWantToChange?": "Muốn thay đổi?",
    "CommonActivationDate": "Ngày Kích Hoạt",
    "CommonEndDate": "Ngày Kết Thúc",
    "CommonMaximumUsers": "Số Người Dùng Tối Đa",
    "CommonPaymentCycle": "Chu Kỳ Thanh Toán",
    "CommonPriceInUSD": "Giá (bằng USD)",
    "CommonGracePeriod": "Thời Gian Ân Hạn (trong số ngày)",
    "CommonAutoRenewal": "Tự Động Gia Hạn",
    "CommonCreditCardInfo": "Thông Tin Thẻ Tín Dụng",
    "CommonCreditCardNumberIsRequired": "Số thẻ tín dụng là bắt buộc",
    "CommonChange": "Thay Đổi",
    "CommonConnectorConfig": "Cấu Hình Kết Nối",
    "CommonCapabilityConnectionString": "Chuỗi Kết Nối Khả Năng",
    "CommonTestConnection": "Kiểm Tra Kết Nối",
    "CommonSuccess": "Thành Công",
    "CommonCapabilityStringIsRequired": "Chuỗi khả năng là bắt buộc",
    "CommonConnectorConnectionString": "Chuỗi Kết Nối Trình Kết Nối",
    "CommonFailed": "Thất Bại",
    "CommonConnectorStringIsRequired": "Chuỗi trình kết nối là bắt buộc",
    "CommonPaymentReceivableSettings": "Cài Đặt Nhận Thanh Toán",
    "CommonPrimaryAC": "Tài Khoản Chính",
    "CommonPrimaryAccountNumberIsRequired": "Số tài khoản chính là bắt buộc",
    "CommonAddAnotherAccount": "Thêm tài khoản khác",
    "ComonSelectPermission": "Vui lòng chọn ít nhất một quyền",
    "CommonAlert": "Cảnh Báo",
    "CommonCustomerNameRequired": "Tên khách hàng là bắt buộc.",
    "CommonRefIdRequired": "ID khách hàng tham chiếu là bắt buộc.",
    "CommonLanguage": "Ngôn Ngữ",
    "CommonCurrency": "Tiền Tệ",
    "CommonTimeZone": "Múi Giờ",
    "CommonDateFormat": "Định Dạng Ngày",
    "CommonInvoiceNameRequired": "Tên Hóa Đơn là bắt buộc.",
    "CommonInvoicenumberRequired": "Số Hóa Đơn là bắt buộc.",
    "CommonInvoicePoNumbeRequired": "Số PO là bắt buộc.",
    "CommonInvoiceOrderNumberRequired": "ID Đơn hàng là bắt buộc.",
    "CommonInvoicAmountRequired": "Số tiền là bắt buộc.",
    "CommonStreet1Required": "Đường 1 là bắt buộc.",
    "CommonCityRequired": "Thành phố là bắt buộc.",
    "CommonStateRequired": "Bang/Thành phố là bắt buộc.",
    "CommonCountryRequired": "Quốc gia là bắt buộc.",
    "CommonZipcodeRequired": "Mã Zip là bắt buộc.",
    "CommonInvoiceItemDescriptionRequired": "Mô tả Mặt hàng là bắt buộc.",
    "CommonInvoiceItemCodeRequired": "Mã Mặt hàng là bắt buộc.",
    "CommonInvoiceItemPrice": "Giá Mặt hàng là bắt buộc.",
    "CommonReinvite": "Mời lại",
    "CommonInvited": "Đã mời",
    "CommonActive": "Hoạt động",
    "CommonInactive": "Không hoạt động",
    "CommonPayable": "Có thể thanh toán",
    "CommonPay": "Thanh toán",
    "CommonSaveInvoiceAndGenerateUrl": "Tạo hóa đơn & tạo URL thanh toán nhanh",
    "CommonReceipt": "Biên nhận",
    "CommonPaymentStatus": "Trạng thái Giao dịch",
    "CommonPaymentID": "ID Giao dịch",
    "CommonAccountCardNo": "Số Tài khoản / Thẻ",
    "CommonAccountOrCard": "Tài khoản / Thẻ",
    "CommonRefreshstatus": "Làm mới trạng thái",
    "CommonPaymentReceipt": "Biên nhận Giao dịch",
    "CommonPaymentService": "Dịch vụ Giao dịch",
    "CommonInvoiceCurrentStatus": "Trạng thái Hiện tại của Hóa đơn",
    "CommonInvoiceInvoiceOriginalAmount": "Số tiền gốc của Hóa đơn",
    "CommonContactPhone": "Số điện thoại Liên hệ",
    "CommonName": "Tên",
    "CommonWebsite": "Trang web",
    "CommonFaxNumber": "Số Fax",
    "CommonZipCode": "Mã Zip",
    "CommonCountry": "Quốc gia",
    "CommonState": "Bang/Thành phố",
    "CommonCity": "Thành phố",
    "CommonStreet1": "Đường 1",
    "CommonStreet2": "Đường 2",
    "CommonStreet3": "Đường 3",
    "CommonBillingAddress": "Địa chỉ thanh toán",
    "CommonCustomerID": "ID Khách hàng",
    "CommonCustomerName": "Tên Khách hàng",
    "CommonTax": "Thuế",
    "CommonShipping": "Vận chuyển",
    "CommonDiscount": "Giảm giá",
    "CommonSubTotal": "Tổng phụ",
    "CommonLineItemOn": "Mục hàng vào",
    "CommonDueDate": "Ngày đáo hạn",
    "CommonGeneratedOn": "Được tạo vào",
    "CommonOrderID": "ID Đơn hàng",
    "CommonPONumber": "Số PO",
    "CommonInvoiceName": "Tên Hóa đơn",
    "CommonInvoiceNumber": "ID Hóa đơn",
    "CommonOrderInfo": "Thông tin Đơn hàng",
    "CommonCustomerInfo": "Thông tin Khách hàng",
    "CommonInvoiceDetails": "Chi tiết Hóa đơn",
    "CommonPaidAmount": "Số tiền đã thanh toán",
    "CommonCustomerNotes": "Ghi chú của Khách hàng",
    "CommonCustomerNote": "Ghi chú của Khách hàng",
    "CommonItemCode": "Mã Mặt hàng",
    "CommonQuantity": "Số lượng",
    "CommonPrice": "Giá ",
    "CommonPricePerunit": "Giá mỗi đơn vị",
    "CommonTotal": "Tổng",
    "CommonLastMonth": "Tháng trước",
    "CommonLast3Months": "3 Tháng trước",
    "CommonLast6Months": "6 Tháng trước",
    "CommonThisYear": "Năm nay",
    "CommonDeletedInvoices": "Hóa đơn đã xóa",
    "CommonApply": "Áp dụng",
    "CommonOriginal": "Gốc",
    "CommonOutstanding": "Còn nợ",
    "CommonAmountPayable": "Số tiền cần thanh toán",
    "CommonPaymentMode": "Chế độ Giao dịch",
    "CommonACHPayment": "Thanh toán ACH",
    "CommonACH": "ACH",
    "CommonBankName": "Tên Ngân hàng",
    "CommonBankAccountName": "Tên Tài khoản Ngân hàng",
    "CommonAccountNumber": "Số Tài khoản",
    "CommonABARoutingNumber": "Số Định Tuyến ABA",
    "CommonAccountType": "Loại Tài khoản",
    "CommonSECCode": "Mã SEC",
    "CommonTrermsAgreement": "Tôi đồng ý thực hiện thanh toán từ tài khoản ngân hàng của tôi như trên.",
    "CommonNotes": "Ghi chú",
    "CommonPaymentForm": "Biểu mẫu Thanh toán",
    "CommonCreditCardPayment": "Thanh toán thẻ tín dụng",
    "CommonPaymentOn": "Giao dịch vào",
    "CommonContactPersonDetails": "Thông tin Người liên hệ",
    "CommonVoidPayment": "Hủy bỏ",
    "CommonRefundPayment": "Hoàn lại",
    "CommonAmount": "Số tiền",
    "CommonSubTotalAmount": "Tổng phụ là bắt buộc.",
    "Commonblank": "(trống)",
    "CommonRequiredValidation": "Thông tin này là bắt buộc.",
    "CommonIpaymentBusinessPortal": "Cổng Thông tin Doanh nghiệp iPayment",
    "CommonVersion": "Phiên bản",
    "CommonChangePassword": "Đổi Mật khẩu",
    "CommonCurrentPassword": "Mật khẩu hiện tại",
    "CommonForgotYourPassword?": "Quên mật khẩu?",
    "CommonNewPassword": "Mật khẩu mới",
    "CommonConfirmPassowrd": "Xác nhận Mật khẩu",
    "CommonSignInToYourCompany": "Đăng nhập vào Doanh nghiệp của bạn",
    "CommonUpcomingPayments": "Thanh toán sắp tới",
    "CommonRecentPayment": "Thanh toán gần đây",
    "CommonTotalOpenInvoices": "Tổng số Hóa đơn đang mở",
    "CommonPartialPaidInvoicesOpen": "Hóa đơn đã thanh toán một phần (Đang mở)",
    "CommonTotalPaidInvoices": "Tổng số Hóa đơn đã thanh toán",
    "CommonPaidInvoicesLastWeek": "Hóa đơn đã thanh toán (Tuần trước)",
    "CommonPaidLastWeek": "Đã thanh toán (Tuần trước) $",
    "CommonPaymentsDoneInUSD": "Số tiền đã thanh toán (bằng USD)",
    "CommonEditTicketForm": "Chỉnh sửa Biểu mẫu Yêu cầu hỗ trợ",
    "CommonCreatedBy": "Được tạo bởi",
    "CommonCreatedOn": "Được tạo vào",
    "CommonContactEmail": "Email Liên hệ",
    "CommonCustomerDetails": "Chi tiết Khách hàng",
    "CommonIssueDetails": "Chi tiết vấn đề",
    "CommonTitle": "Tiêu đề",
    "CommonTitleIsRequired": "Tiêu đề là bắt buộc.",
    "CommonDescription": "Mô tả",
    "CommonDescriptionIsRequired": "Mô tả là bắt buộc.",
    "CommonTicketID#": "ID Yêu cầu hỗ trợ",
    "CommonPriority": "Ưu tiên",
    "CommonAssignedTo": "Được giao cho",
    "CommonModifiedOn": "Được sửa đổi vào",
    "CommonModifiedBy": "Được sửa đổi bởi",
    "CommonAttachment": "Tệp đính kèm",
    "CommonAddYourComments": "Thêm ý kiến của bạn",
    "CommonAddYourComment": "Thêm ý kiến của bạn",
    "CommonComments": "Ý kiến",
    "CommonDeletedTickets": "Yêu cầu hỗ trợ đã xóa",
    "CommonTenantName": "Tên Thuê nhà",
    "CommonLow": "Thấp",
    "CommonMedium": "Trung bình",
    "CommonHigh": "Cao",
    "CommonOpen": "Mở",
    "CommonOnHold": "Đang giữ",
    "CommonResolved": "Đã giải quyết",
    "CommonClosed": "Đóng",
    "CommonNewTicketForm": "Mẫu Yêu cầu Hỗ trợ mới",
    "CommonCreate": "Tạo",
    "CommonBusinessDetails": "Thông tin Khác",
    "CommonAddTicket": "Yêu cầu Hỗ trợ mới",
    "CommonTicketId": "ID Yêu cầu Hỗ trợ",
    "CommonNewCustomerForm": "Mẫu Khách hàng mới",
    "CommonGeneral": "Chung",
    "CommonPaymentDetails": "Chi tiết Giao dịch",
    "CommonContactInfo": "Thông tin Liên hệ",
    "CommonAdminUserDetails": "Chi tiết Người dùng Quản trị",
    "CommonApplicationsDetails": "Chi tiết Ứng dụng",
    "CommonEnabledServices": "Dịch vụ Đã bật",
    "CommonCustomerPortalURL": "URL Cổng thông tin Khách hàng",
    "CommonCreditCardDetails": "Chi tiết Thẻ tín dụng",
    "CommonSavedCreditCards": "Thẻ Tín dụng Đã Lưu",
    "CommonNameOnCard": "Tên trên Thẻ",
    "CommonCardExpiry": "Hết hạn Thẻ",
    "CommonCardNumber": "Số Thẻ",
    "CommonExpiry": "Hết hạn",
    "CommonCVV": "CVV",
    "CommonCardType": "Loại Thẻ",
    "CommonAddCreditCard": "Thêm Thẻ Tín dụng",
    "CommonACHPaymentDetails": "Chi tiết Thanh toán ACH",
    "CommonCustomerAddress": "Địa chỉ Khách hàng",
    "CommonSameAsAboveAddress": "Giống như địa chỉ trên",
    "CommonSaveInvite": "Lưu & Mời",
    "CommonEditCustomerForm": "Mẫu Chỉnh sửa Khách hàng",
    "CommonCustomer": "Khách hàng",
    "CommonAddCustomer": "Thêm Khách hàng",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "Đơn hàng Bán hàng Đang mở",
    "CommonInvoice": "Hóa đơn",
    "CommonUpcomingDeliveryDate": "Ngày Giao hàng sắp tới",
    "CommonLastDeliveryOn": "Giao hàng cuối cùng vào",
    "CommonTotalSalesOrder": "Tổng Đơn hàng Bán hàng",
    "CommonPending": "Đang chờ",
    "Common(Pending)": "(Đang chờ)",
    "CommonDetails": "Chi tiết",
    "CommonDesktop": "Máy tính để bàn",
    "CommonSMS": "SMS",
    "CommonHelpDeskNotifications": "Thông báo Trung tâm Hỗ trợ",
    "CommonMyTicketStatusIsChanged": "Trạng thái Yêu cầu Hỗ trợ của tôi đã thay đổi.",
    "CommonCustomerTicketStatusIsChanged": "Trạng thái Yêu cầu Hỗ trợ của Khách hàng đã thay đổi.",
    "CommonMyTicketIsReassigned": "Yêu cầu Hỗ trợ của tôi đã được chuyển",
    "CommonCustomerTicketIsReassigned": "Yêu cầu Hỗ trợ của Khách hàng đã được chuyển.",
    "CommonMyTicketPriorityIsChanged": "Độ ưu tiên của Yêu cầu Hỗ trợ của tôi đã thay đổi.",
    "CommonCustomerTicketPriorityIsChanged": "Độ ưu tiên của Yêu cầu Hỗ trợ của Khách hàng đã thay đổi.",
    "CommonNewCommentAddedInMyTicket": "Bình luận mới được thêm vào Yêu cầu Hỗ trợ của tôi.",
    "CommonNewCommentAddedInCustomerTicket": "Bình luận mới được thêm vào Yêu cầu Hỗ trợ của Khách hàng.",
    "CommonInvoiceNotifications": "Thông báo Hóa đơn",
    "CommonInvoicePaymentIsReceived": "Đã nhận thanh toán Hóa đơn.",
    "CommonCustomersReport": "Báo cáo Khách hàng",
    "CommonLastWeek": "Tuần trước",
    "CommonFrom": "Từ",
    "CommonTo": "Đến",
    "CommonTotalInvoices": "Tổng số Hóa đơn",
    "CommonOpenInvoices": "Hóa đơn đang mở",
    "CommonCustomerWisePaymentReport": "Báo cáo Thanh toán theo Khách hàng",
    "CommonPartialPaidInvoices": "Hóa đơn đã thanh toán một phần",
    "CommonPaidInvoices": "Hóa đơn đã thanh toán",
    "CommonCreditAmount": "Số tiền tín dụng",
    "CommonInvoicesReport": "Báo cáo Hóa đơn",
    "CommonPaidOn": "Đã thanh toán vào",
    "CommonAmountPaid": "Số tiền đã thanh toán",
    "CommonPaymentReceivedReport": "Báo cáo Tiền thanh toán đã nhận",
    "CommonPaymentType": "Loại Thanh toán",
    "CommonInvoiceID": "ID Hóa đơn",
    "CommonOriginalAmount": "Số tiền gốc",
    "CommonPortalUsersReport": "Báo cáo Người dùng Cổng thông tin",
    "CommonTicketsReport": "Báo cáo Yêu cầu Hỗ trợ",
    "CommonInvoicesDetails": "Chi tiết Hóa đơn",
    "CommonBankAccountNameIsRequired ": "Tên Tài khoản Ngân hàng là bắt buộc.",
    "AccountNumberIsRequired": "Số tài khoản là bắt buộc.",
    "CommonABARoutingNumberIsRequired": "Số Định tuyến ABA là bắt buộc.",
    "CommonOriginated": "Bắt nguồn",
    "CommonReturned": "Đã trả lại",
    "CommonSetteled": "Đã giải quyết",
    "CommonOk": "OK",
    "CommonMsgPaymentHistory": "Bạn có thể đóng cửa sổ này và xem trạng thái hiện tại trong Lịch sử Giao dịch",
    "CommonInvoiceNumb": "Số Hóa đơn",
    "CommonPaid": "Đã thanh toán",
    "CommonDue": "Đến hạn",
    "CommonBlueStar": "Ngôi sao Xanh",
    "CommonBillToAddress": "Địa chỉ Gửi hóa đơn",
    "CommonlineItemsOn": "Các mục hàng trên",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "Đã hủy",
    "CommonVoid": "Hủy",
    "CommonVoidRequested": "Yêu cầu hủy",
    "CommonRefundRequested": "Yêu cầu hoàn tiền",
    "CommonRefunded": "Đã hoàn tiền",
    "CommonRefundCancelled": "Yêu cầu hoàn tiền bị hủy",
    "CommonVeriCheckACH ": "VeriCheck ACH ",
    "CommonMonthly": "Hàng tháng",
    "CommonQuartly": "Hàng quý",
    "CommonHalfyearly": "Mỗi nửa năm",
    "CommonYearly": "Hàng năm",
    "CommonNewInvoiceForm": "Mẫu Hóa đơn mới",
    "CommonSTEP": "BƯỚC",
    "CommonPrefix": "Tiền tố",
    "Commonselect": "chọn",
    "CommonAddNew": "Thêm mới",
    "CommonNumber": "Số",
    "CommonTaxRate": "Thuế",
    "CommonAddMoreItems": "Thêm Mục khác",
    "CommonNext": "Tiếp",
    "CommonBack": "Quay lại",
    "CommonDone": "Hoàn tất",
    "CommonLastLogin": "Lần đăng nhập cuối:",
    "CommonAdmin": "Quản trị",
    "CommonBusinessPortal": "Cổng thông tin Doanh nghiệp",
    "CommonMyProfile": "Hồ sơ của tôi",
    "CommonChangePassword ": "Thay đổi mật khẩu ",
    "CommonSync": "Đồng bộ",
    "CommonPreferences": "Tuỳ chọn",
    "CommonAbout": "Về chúng tôi",
    "CommonLogout": "Đăng xuất",
    "CommonToggleNavigation": "Chuyển đổi điều hướng",
    "CommonHome": "Trang chủ",
    "CommonCustomers": "Khách hàng",
    "CommonInvoices": "Hóa đơn",
    "CommonPaymentHistory": "Lịch sử Giao dịch",
    "CommonReports": "Báo cáo",
    "CommonPaymentReceived": "Thanh toán đã nhận",
    "CommonCustomerWisePayment": "Thanh toán theo Khách hàng",
    "PortalUsers": "Người dùng Cổng thông tin",
    "CommonTickets": "Yêu cầu Hỗ trợ",
    "CommonBusinessPortalSettings": "Cài đặt Cổng thông tin Doanh nghiệp",
    "CommonConfigurations": "Cấu hình",
    "CommonAlerts": "Cảnh báo",
    "CommonHelpDesk": "Trung tâm Hỗ trợ",
    "CommonCustomerTickets": "Yêu cầu Hỗ trợ của Khách hàng",
    "CommonMyTickets": "Yêu cầu Hỗ trợ của tôi",
    "CommonDocumentation": "Tài liệu",
    "CommonPoweredBy": "Được hỗ trợ bởi",
    "CommonCompanyPortalSettings": "Cài đặt Cổng thông tin Công ty",
    "CommonCustomerPortalSettings": "Cài đặt Cổng thông tin Khách hàng",
    "CommonDelete": "Xóa",
    "CommonNoResultFound": "Không tìm thấy kết quả",
    "CommonPaymentDate": "Ngày Giao dịch",
    "CommonInvoicesStatus": "Trạng thái Hóa đơn",
    "CommonPaymentsDoneInLast6Months": "Thanh toán trong 6 tháng qua",
    "CommonRecentTranscations": "Giao dịch gần đây",
    "CommonCompletedOrder(Closed)": "Đã hoàn tất",
    "CommonOpenOrders(Open)": "Đang mở",
    "CommonPartialDeliveredOrder(Open)": "Giao hàng một phần",
    "CommonServices": "Dịch vụ",
    "CommonPartnerCompanySubDomain": "Tên miền Con đối tác",
    "CommonPortalDetails": "Chi tiết Cổng thông tin",
    "CommonPortalURL": "URL Cổng thông tin",
    "CommonEdit": "Chỉnh sửa",
    "CommonAddAnAccount": "Thêm một tài khoản",
    "CommonPayments": "Thanh toán",
    "CommonNewAttachmentAddedInMyTicket": "Đính kèm mới được thêm vào Yêu cầu Hỗ trợ của tôi.",
    "CommonNewAttachmentAddedInCustomerTicket": "Đính kèm mới được thêm vào Yêu cầu Hỗ trợ của Khách hàng.",
    "CommonRefreshStatus": "Làm mới trạng thái",
    "CommonID#": "ID#",
    "CommonSubscription": "Đăng ký",
    "CommonCompanySubDomain": "Tên miền Con Công ty",
    "CommonMyPortalURL": "URL Cổng thông tin của tôi",
    "CommonPortalLocalizationSettings": "Cài đặt Đa ngôn ngữ Cổng thông tin",
    "CommonDeletedOn": "Đã xóa vào",
    "CommonDeletedBy": "Đã xóa bởi",
    "CommonNewInvoiceisgenerated": "Hóa đơn mới được tạo.",
    "CommonInvoicepaymentstatusischanged": "Trạng thái thanh toán Hóa đơn đã thay đổi.",
    "CommonExistingInvoiceiscancelled": "Hóa đơn hiện tại đã được hủy.",
    "CommonOrderId": "ID Đơn hàng",
    "CommonStartDate": "Ngày bắt đầu",
    "CommonNextPaymentdate": "Giao dịch sắp tới vào",
    "CommonRecurringPeriod": "Tần suất thanh toán",
    "CommonRecurringTerms": "Điều khoản thanh toán",
    "CommonTermAmount": "Số tiền thanh toán mỗi kỳ",
    "CommonRemainingPayCounts": "Số lần thanh toán còn lại",
    "CommonOrderAmount": "Số tiền đơn hàng",
    "CommonAddRecurring": "Thêm Thanh toán định kỳ",
    "CommonOrderIdRequired": "ID Đơn hàng là bắt buộc.",
    "CommonRecurringTermRequired": "Điều khoản phải lớn hơn 0.",
    "CommonRecurringTermAmountRequired": "Số tiền điều khoản phải lớn hơn 0.",
    "CommonWebsiteValidation": "URL trang web không hợp lệ.",
    "CommonNoRecordsAvailable": "Chưa có bản ghi nào được tạo.",
    "CommonPaymentDone": "Đã thanh toán",
    "CommonPaymentDoneReport": "Báo cáo Thanh toán đã hoàn tất",
    "CommonByJoiningYouAgreeToOur": "Bằng cách tham gia, bạn đồng ý với",
    "CommonTerms": "Điều khoản",
    "CommonPrivacyPolicy": "Chính sách Bảo mật.",
    "CommonAnd": "và",
    "CommonEnterYourCompanyID": "Nhập URL Doanh nghiệp của bạn",
    "CommonDontRememberCompanyID": "Không nhớ Sub Domain của bạn?",
    "CommonClickHere": "Nhấp vào đây",
    "CommonWantToCreate": "Muốn tạo tài khoản Doanh nghiệp mới?",
    "CommonFindMyCompanyID": "Tìm Sub Domain của tôi!",
    "CommonFindMyCompanyIDTitle": "Chúng tôi sẽ gửi email xác nhận ID Đăng nhập của bạn và tìm Sub Domain của bạn để bạn có thể tham gia.",
    "CommonEnterYourEmail": "Nhập email của bạn",
    "CommonContinue": "Tiếp tục",
    "CommonCheckYourEmail": "Kiểm tra email của bạn!",
    "CommonCheckYourTitle": "Chúng tôi đã gửi email chứa liên kết",
    "CommonGetStartedTitle": "Nhấp vào liên kết để bắt đầu.",
    "CommonEnteredWrongEmail": "Nhập sai email?",
    "CommonItemName": "Tên Mục",
    "CommonQuickpay": "Tạo URL thanh toán nhanh",
    "PFCommonPermission": "Quyền hạn",
    "PFCommonPermissions": "Quyền hạn",
    "PFCommonPortalUsers": "Người dùng Cổng thông tin",
    "PFCommonUsers": "Người dùng",
    "PFCommonUser": "Người dùng",
    "PFCommonActive": "Hoạt động",
    "PFCommonInActive": "Không hoạt động",
    "PFCommonAdmin": "Quản trị",
    "PFCommonAction": "Hành động",
    "PFCommonPending": "Đang chờ xử lý",
    "CommonPortalOwnerName": "Tên Chủ sở hữu Cổng thông tin",
    "CommonPoweredByText": "Được hỗ trợ bởi Text",
    "CommonCopyrightText": "Bản quyền",
    "CommonPublisherPortalTheme": "Chủ đề Cổng thông tin của Nhà xuất bản",
    "CommonTenantTickets": "Yêu cầu Doanh nghiệp",
    "CommonTenantID": "ID Doanh nghiệp",
    "CommonAdd": "Thêm",
    "CommonDragDropFileText": "Kéo và Thả tập tin vào đây hoặc Nhấp để Tải lên.",
    "CommonValidFileFormatMsg": "Vui lòng nhập định dạng tập tin hợp lệ. Các định dạng tập tin được hỗ trợ là: JPG, JPEG, TIFF, GIF, PNG, WEBP, SVG, BMP, TIF, ICO.",
    "CommonError": "Lỗi",
    "CommonFileSizeError": "Kích thước tập tin quá lớn. Vui lòng chọn tập tin có kích thước tối đa là 10 MB.",
    "CommonMoreThanOneFileError": "Không được phép tải nhiều tập tin",
    "CommonOrderNameRequired": "Tên Đơn hàng là bắt buộc.",
    "CommonPackageNameRequired": "Loại Gói là bắt buộc.",
    "CommonFillAllRequiredFeildErrorMsg": "Vui lòng điền đầy đủ thông tin vào các trường bắt buộc và cung cấp dữ liệu hợp lệ.",
    "CommonContactUs": "Liên hệ",
    "CommonContactFormTitle": "Nhập tin nhắn của bạn bên dưới. Chúng tôi sẽ trả lời bạn sớm nhất có thể!",
    "CommonMessage": "Tin nhắn",
    "CommonMailingAddress": "Địa chỉ Gửi thư",
    "CommonSend": "Gửi",
    "CommonUpcomingShipments": "Lô hàng sắp tới",
    "CommonRecentShipments": "Lô hàng gần đây",
    "CommonDeliveryID": "ID Giao hàng",
    "CommonPostedOn": "Đăng vào",
    "CommonShippingNo": "Số Vận chuyển",
    "CommonShipmentHistory": "Lịch sử Vận chuyển",
    "CommonTrackingNo": "Số Theo dõi",
    "CommonPackages": "Gói hàng",
    "CommonCarrier": "Nhà vận chuyển",
    "CommonDestination": "Đích đến",
    "CommonPickUpOn": "Lấy hàng vào",
    "CommonDeliveredOn": "Giao hàng vào",
    "CommonDeliveryDate": "Ngày Giao hàng",
    "CommonOrderName": "Tên Đơn hàng",
    "CommonNoPackageValidationMessage": "Ít nhất một gói hàng phải được thêm để nhận báo giá vận chuyển.",
    "CommonNoCarrierValidationMessage": "Ít nhất một nhà vận chuyển phải đăng ký.",
    "CommonPlanSelectionValidationMessage": "Chọn một kế hoạch vận chuyển hợp lệ.",
    "CommonGenerateQuoteAgainValidationMessage": "Biểu mẫu đã được sửa đổi. Vui lòng tạo báo giá lại.",
    "CommonAddressDetails": "Chi tiết Địa chỉ",
    "CommonConfigurationSavedMsg": "Các thay đổi của bạn đã được lưu thành công.",
    "Common4X6LabelPrinter": "Máy in Nhãn 4X6",
    "CommonTraditionalPrinters": "Máy in Truyền thống",
    "CommonCarriersInfo": "Thông tin Nhà vận chuyển",
    "CommonAddresses": "Địa chỉ",
    "CommonNewAddress": "Địa chỉ mới",
    "CommonValidateAddress": "Xác minh Địa chỉ",
    "CommonVerifiedBy": "Được xác minh bởi",
    "CommonLabel": "Nhãn",
    "CommonPrintingInfo": "Thông tin In ấn",
    "CommonContactPerson": "Người liên hệ",
    "CommonDecimalValues": "Giá trị Số thập phân",
    "CommonGroupingDecimalSeparator": "Ngăn cách và Số thập phân",
    "CommonGroupingValues": "Giá trị Nhóm",
    "CommonCurrencyLocalization": "Định vị Tiền tệ",
    "CommonDesignation": "Chức vụ",
    "CommonSubDomain": "Sub Domain",
    "CommonAccountNo": "Số tài khoản",
    "CommonValidate": "Xác minh",
    "CommonNoOfDeliveries": "Số lần Giao hàng",
    "CommonNoOfSalesOrderDeliveries": "Số lần Giao hàng Đơn hàng",
    "CommonNoOfSalesAmount": "Số tiền Bán hàng",
    "CommonTopMostValuableCustomer": "Top 5 Khách hàng có Giá trị nhất",
    "CommonTotalOpenOrders": "Tổng số Đơn hàng chưa hoàn tất",
    "CommonPartialDeliveredOrders": "Đơn hàng Giao hàng Một phần",
    "CommonCompletedOrders": "Đơn hàng Hoàn tất",
    "CommonPendingShipping": "Vận chuyển đang chờ xử lý",
    "CommonTotalShipping": "Tổng số Vận chuyển",
    "CommonTotalSales": "Tổng số Bán hàng",
    "CommonTotalSalesinLast6Months": "Tổng số Bán hàng trong 6 tháng qua",
    "CommonSalesOrdersStatus": "Tình trạng Đơn hàng Bán hàng",
    "CommonSalesOrders": "Đơn hàng Bán hàng",
    "CommonShippingStatus": "Tình trạng Vận chuyển",
    "CommonShipmentByCarrier": " Vận chuyển theo Nhà vận chuyển",
    "CommonTotalDeliveriesinlast6months": "Tổng số Giao hàng trong 6 tháng qua",
    "CommonQty": "Số lượng",
    "CommonValue": "Giá trị",
    "CommonTop5mostvaluablecustomers": "Top 5 Khách hàng có Giá trị nhất",
    "CommonDeliveriesAcrossGlobe": "Giao hàng Qua toàn cầu",
    "CommonAddressErrorMsg": "Ít nhất một địa chỉ là bắt buộc.",
    "CommonCurrencyLocalizationsConfirmMsg": "Thao tác này sẽ lưu vĩnh viễn Định vị Tiền tệ của bạn",
    "CommonConfirmation": "Xác nhận",
    "CommonService": "Dịch vụ",
    "CommonShipConfirm": "Bạn có muốn vận chuyển Đơn hàng này không?",
    "CommonCarriers": "Nhà vận chuyển",
    "CommonShipFromAddresses": "Địa chỉ Gửi từ",
    "CommonBusinessAddresses": "Địa chỉ Doanh nghiệp",
    "CommonNewItem": "Mục mới",
    "CommonPackageItemEqlDistributionMsg": "Có sự không phù hợp giữa các mục đơn hàng bán hàng và các mục đã đóng gói. Vui lòng điều chỉnh thay đổi và tạo lại Báo giá.",
    "CommonPackageAllItemDistributionMsg": "Vui lòng đóng gói tất cả các mục của Đơn hàng bán hàng trước khi tạo Báo giá.",
    "CommonZeroItemInItemMaster": "Không có mục nào có sẵn trong Danh mục Mục. Đầu tiên hãy thêm Mục vào Danh mục Mục.",
    "CommonShipFromAddressErrorMsg": "Ít nhất một địa chỉ gửi từ là bắt buộc.",
    "TOTALRECORDS": "Tổng bản ghi",
    "VIEWITEMLOCATION": "Xem Vị trí Mục",
    "SELECTLOTFEATUREWISE": "Chọn đặc điểm lô",
    "ITEMKEY": "Khóa Mục",
    "DESCRIPTION": "Mô tả",
    "LOCATION": "Vị trí",
    "LOCATIONDITAIL": "Chi tiết vị trí",
    "LOTBINDITAIL": "Chi tiết Lô/Bin No",
    "STOCKUOM": "Đơn vị Kho",
    "DISPLAYUOM": "Đơn vị Hiển thị",
    "COMMITTOPRODUCTION": "Số lượng Cam kết sản xuất",
    "COMMITTOSALES": "Số lượng Cam kết bán hàng",
    "DESC1": "Mô tả 1",
    "EOQ": "EOQ",
    "INCLASSKEY": "Trong Khóa lớp",
    "MULTIPLEBINSREQ": "Yêu cầu Nhiều Bins",
    "QTYONHAND": "Số lượng Còn lại",
    "QTYONORDER": "Số lượng Đặt hàng",
    "QTYOVERSOLD": "Số lượng Bán quá nhiều",
    "SERIALLOTFLG": "Dấu hiệu Serial/Lô",
    "STATUSCODE": "Mã Trạng thái",
    "STOCKUOMCODE": "Mã Đơn vị Kho",
    "TRANSITIN": "Chuyển hàng vào",
    "TRANSITOUT": "Chuyển hàng ra",
    "QTYUNDERPURCHASEQC": "Số lượng Dưới kiểm tra mua hàng",
    "QTYUNDERINVENTORYQC": "Số lượng Dưới kiểm tra kho",
    "QTYONORDERDETAILS": "Chi tiết Số lượng Đặt hàng",
    "QTYCOMMITTOSALESDETAILS": "Chi tiết Số lượng Cam kết bán hàng",
    "QTYCOMMITTOPRODUCTIONDETAILS": "Chi tiết Số lượng Cam kết sản xuất",
    "TRANSACTION": "Giao dịch",
    "TRANSACTIONNO": "Số Giao dịch",
    "TRANSACTIONDATE": "Ngày Giao dịch",
    "TRANSACTIONTYPE": "Loại Giao dịch",
    "AVGLOTSTR": "Sức mạnh Lô Trung bình",
    "LOTSTRENGTH": "Sức mạnh Lô",
    "QTYREQ": "Số lượng Yêu cầu",
    "LOTQTYSEL": "Số lượng Lô đã chọn",
    "SOLVENTQTY": "Số lượng Dung môi đã chọn",
    "STRDSTRENGTH": "Sức mạnh Tiêu chuẩn",
    "COMMITDOCNO": "Số Tài liệu Cam kết",
    "VENDKEY": "Khóa Nhà cung cấp",
    "TOTALHOLD": "Tổng Hold",
    "TOTAL": "Tổng",
    "CUSTKEY": "Khóa Khách hàng",
    "QTYCOMMITTOSALES": "Số lượng Cam kết bán hàng",
    "QTYCOMMITTOPRODUCTION": "Số lượng Cam kết sản xuất",
    "QTYCOMMIT": "Số lượng Cam kết",
    "BINNO": "Bin No",
    "DATEEXPIRY": "Ngày Hết hạn",
    "DATEQUARANTINE": "Ngày Cách ly",
    "DATERECEIVED": "Ngày Nhận",
    "LOTNO": "Số lô",
    "LOTSTATUS": "Trạng thái Lô",
    "QTYCOMMITSALES": "Số lượng Cam kết bán hàng",
    "RECUSERID": "ID Người nhận",
    "RECDATE": "Ngày Nhận",
    "VENDORKEY": "Khóa Nhà cung cấp",
    "VENDORLOTNO": "Số lô Nhà cung cấp",
    "QUANTITY": "Số lượng",
    "SALESUOMCODE": "Mã Đơn vị bán hàng",
    "QTYCOMMITPROD": "Số lượng Cam kết Sản xuất",
    "ITEMTYP": "Loại Mục",
    "PRICEGRP": "Nhóm Giá",
    "STDCOST": "Chi phí Tiêu chuẩn",
    "AVGCOST": "Chi phí Trung bình",
    "LSTCOST": "Chi phí Lst",
    "BASEPRICE": "Giá cơ sở",
    "REVACCT": "Tài khoản Thu nhập",
    "SALESTAXKEY": "Khóa Thuế bán hàng",
    "DESC2": "Mô tả 2",
    "SALETOSTKCNVFCTR": "Bán đến Chuyển đổi Nhà kho",
    "INACCT": "Tài khoản Nhập hàng",
    "InserLineInventory": "Tra cứu Hàng tồn kho",
    "InserLineNonInventory": "Tra cứu Không hàng tồn kho",
    "InsertLineCustFavorite": "Tra cứu Mục ưa thích của Khách hàng",
    "CustFavouriteItems": "Thêm Mục của Khách hàng",
    "Custkey": "Khóa Khách hàng",
    "Shipkey": "Vận chuyển đến",
    "Reference": "Tham chiếu",
    "Salespkey": "Người bán hàng",
    "Tax_key": "Tỷ suất Thuế",
    "Tax": "Khóa Thuế",
    "AccountKey": "Sổ tài khoản",
    "PromAccountKey": "Sổ tài khoản",
    "Fobkey": "FOB (Free On Board)",
    "Commentkey": "Bình luận",
    "Shipviakey": "Vận chuyển qua",
    "Territkey": "Lãnh thổ",
    "Termskey": "Điều khoản",
    "RebateKey": "Hoàn tiền",
    "Recurkey": "Chu kỳ Định kỳ",
    "Custcntry": "Quốc gia của Khách hàng",
    "PromAccountKeyHdr": "Khóa Sổ tài khoản Khuyến mãi",
    "Currency_Key": "Khóa Tiền tệ",
    "ITEMKEYLOOKUP": "Tra cứu Khóa Mục",
    "ITEMDESC": "Mô tả mặt hàng",
    "Description": "Mô tả",
    "FEATUREIDCANNOTBEBLANK": "ID tính năng không thể để trống",
    "FEATUREIDANDVALUECANNOTBESAME": "Không thêm cùng ID tính năng và Giá trị trong nhiều dòng",
    "WAREHOUESTATUSTITLE": "Báo cáo xử lý",
    "InsertLineKit": "Tra cứu KIT",
    "InsertLineKitItem": "Tra cứu KIT",
    "RELEASEORDERALERTMSG": "Bạn có muốn phát hành đơn hàng này?",
    "CRDLIMITPASSWORDCAPTION": "Nhập Mật khẩu để Lưu",
    "SALESPARAMETERMSG": "Các Tham số Nhập đơn Bán hàng chưa được xác định",
    "VIEWSALESCONTRACT": "Xem Hợp đồng Bán hàng",
    "NOTHOLDCANCELLED": "Không thể Giữ đơn hàng đã Hủy",
    "NOTHOLDCLOSED": "Không thể Giữ đơn hàng đã Đóng",
    "HOLDRESAONALERTMSG": "Vui lòng chỉ định lý do để giữ.",
    "WAREHOUSESOSAVEALERT": "Lưu bản ghi.",
    "AlternateItemKey": "Các Mặt hàng thay thế",
    "SERIES": "Loạt",
    "SERIES_DESC": "Mô tả Loạt",
    "ORDER_TYPE": "Loại đơn hàng",
    "WAREHOUSETRANSFER": "Chi tiết Chuyển kho",
    "ContractNo": "Tra cứu Số hợp đồng",
    "CONTRACTNO": "Số hợp đồng",
    "COMMITMENTAMT": "Số tiền cam kết",
    "CONTRACTDATE": "Ngày hợp đồng",
    "COSTORQTYCOMMITMENT": "Chi phí hoặc Số lượng cam kết",
    "EFFECTIVEDATE": "Ngày có hiệu lực",
    "EXPDATE": "Ngày hết hạn",
    "ORIGINALAMT": "Số tiền ban đầu",
    "PRICEQUOTED": "Giá đã báo",
    "CustomerItem": "Tra cứu Mục của Khách hàng",
    "CUSTOMERITEMS": "Tra cứu Mục của Khách hàng",
    "PurchaseUomCode": "Mã Đơn vị mua hàng",
    "CustitemKey": "Khóa Mục của Khách hàng",
    "OtempItemKey": "Tra cứu Khóa Mục",
    "NOLINESELECTEDMSG": "Không có dòng nào được chọn.",
    "OtempLocation": "Tra cứu Vị trí",
    "GOTOSHIPMENT": "Đi đến Giao hàng",
    "REQUIREDFREIGHTALERMSG": "Yêu cầu cước phí. Bạn có muốn tiếp tục?",
    "FavoriteItems": "Các Mục ưa thích",
    "LocationKey": "Khóa Vị trí",
    "SalesOrderEntryList": "Đơn hàng Bán hàng",
    "PRICERECALCULATEMSG": "Giá sẽ được tính toán lại.",
    "QTYCOMMITTED": "Số lượng cam kết",
    "QTYQUARANTINED": "Số lượng cách ly",
    "QTYEXPIRED": "Số lượng hết hạn",
    "QTYAVAILABLE": "Số lượng có sẵn",
    "CUSTOMERKEY": "Khóa Khách hàng",
    "LOTCOMMITMENTDETAILS": "Chi tiết Cam kết Lô",
    "CONTAINERIZEDLOTS": "Các Lô Đóng gói",
    "SALESISSUES": "Vấn đề Bán hàng",
    "NEGATIVEADJUSTMENT": "Điều chỉnh Âm",
    "POSITIVEADJUSTMENT": "Điều chỉnh Dương",
    "PURECEPIT": "Nhận hàng Mua",
    "PURETURN": "Trả hàng Mua",
    "MFGISSUES": "Vấn đề Sản xuất",
    "MFGRETURN": "Trả hàng Sản xuất",
    "INVENTORYTRAN": "Chuyển kho",
    "INVADJP": "Điều chỉnh Tích cực Kho",
    "INVADJN": "Điều chỉnh Âm Kho",
    "DAMAGED": "Bị hỏng",
    "CYCLECNT": "Kiểm kê chu kỳ",
    "TRANIN": "Chuyển vào",
    "TRANOUT": "Chuyển ra",
    "INVEDITP": "Chỉnh sửa Tích cực Kho",
    "INVEDITN": "Chỉnh sửa Âm Kho",
    "SLPROV": "Bán hàng Tạm thời",
    "SALESRETURN": "Trả hàng Bán hàng",
    "CONTAINERNO": "Số Container",
    "PALLETID": "ID Pallet",
    "PLEASEADDCONTAINER": "Vui lòng chọn Container",
    "NEXTPALLET": "Pallet Tiếp theo",
    "ESIGNATURE": "Chữ ký điện tử",
    "SCREENNAME": "Tên Màn hình",
    "DOCNO": "Số Tài liệu",
    "REQUIREDSIGNAUTH": "Cần Phê duyệt Chữ ký",
    "DATE": "Ngày",
    "REASONFORCHANGE": "Lý do Thay đổi",
    "MODIFIEDBY": "Được sửa đổi bởi",
    "PASSWORD": "Mật khẩu",
    "USER": "Người dùng",
    "DATETIME": "Ngày/Giờ",
    "SEQNO": "Số thứ tự",
    "TESTAMNET": "Bản thử nghiệm",
    "AddSIGNATURE": "Thêm Chữ ký",
    "USERID": "ID Người dùng",
    "USERNAME": "Người dùng",
    "TESTMENT": "Bản Di chúc",
    "ENTERPASSWORD": "Nhập Mật khẩu",
    "WRONGPASSWORD": "Mật khẩu sai",
    "ENTERMODIFIED": "Nhập Được sửa đổi bởi",
    "ENTERUSERID": "Nhập ID Người dùng",
    "USERNOTAUTHORISEMSG": "Người dùng không được ủy quyền để ký tài liệu này.",
    "USERALREADYSIGNMSG": "Người dùng này đã ký.",
    "REQSIGNATUREMISSING": "Một số chữ ký cần thiết đang thiếu.",
    "REASONMINLENGTHMSG": "Lý do thay đổi phải chứa ít nhất",
    "CHARACTER": "ký tự.",
    "ESIGNREASONMSG": "Màn hình này yêu cầu lý do thay đổi và chữ ký điện tử.",
    "CHKITEMLOCAATIONMSG": "Kiểm tra mặt hàng và vị trí.",
    "RETURNORDRECALCULATEMSG": "Đơn trả hàng, không thể tính toán lại.",
    "COMMENT": "Bình luận",
    "TOTALSPLITQTY": "Tổng Số lượng chia",
    "UNIT": "Đơn vị",
    "ITEMDESCRIPTION": "Mô tả mặt hàng",
    "SPLITCONTAINER": "Phân chia Container",
    "SPLITQTY": "Số lượng cần phân chia",
    "CONVNOTFORITEMMSG": "Chuyển đổi không được định nghĩa cho mặt hàng ",
    "UNITSAREMSG": "Các đơn vị là ",
    "QUOTATIONTITLE": "Bảng báo giá/Yêu cầu bán hàng",
    "CANCELQUOTATIONALERTMSG": "Hủy Bảng báo giá?",
    "CALCULATETAXDISCOUNT": "Tính Thuế và Chiết khấu",
    "CANCELSO": "Hủy ĐH",
    "CLOSESO": "Đóng ĐH",
    "VIEWCONTRACT": "Xem Hợp đồng",
    "RELEASEHOLDORDER": "Phát hành/Giữ Đơn hàng",
    "CHANGEOWNER": "Thay Đổi Chủ sở hữu",
    "MAILTOCUSTOMER": "Gửi Email cho Khách hàng",
    "SALESORDERPEGGING": "Đơn hàng Bán hàng Pegging",
    "SALESHISTORY": "Lịch sử Bán hàng",
    "VIEWAGEBRACKETS": "Xem Khoảng tuổi",
    "LIGHTCRM": "CRM Nhẹ",
    "LADEDWEIGHT": "Trọng lượng chất",
    "TRANSFERTOSO": 'Chuyển sang ĐH',
    "TRANSFERTOSOMSG": 'Chuyển sang ĐH?',
    "CANCELQUOTATION": "Hủy Bảng báo giá",
    "TOTALRECALCULATE": "Tính lại Tổng",
    "NOTMAINTAINLOTWITHZERO": "Lô có Số lượng bằng 0 không thể được duy trì.",
    "ALLOWMINQTY": "Cho phép Tối thiểu",
    "ALLOWMAXQTY": "Cho phép Tối đa",
    "APPROVALS": "Phê duyệt",
    "GROUP": "Nhóm",
    "GROUPDES": "Mô tả Nhóm",
    "APPROVER": "Người phê duyệt",
    "SENDEMAIL": "Gửi Email",
    "CANCELAPPROVALS": "Hủy phê duyệt trước đó",
    "APPROVERDATE": "Ngày phê duyệt",
    "EMAILID": "ID Email",
    "GROUPVALIDATEMSG": "Chọn Nhóm Người phê duyệt",
    "CANCELQUOTATIONMSG": "Hủy Bảng báo giá?",
    "QUOTATIONTRANSUCCMSG": "Chuyển Bảng báo giá thành công",
    "CANCELVALIDATEMSG": "Trạng thái Đơn hàng là HỦY, không thể chuyển",
    "TRANSFERVALIDATEMSG": "Đơn hàng đã được CHUYỂN",
    "APPROVERVALIDATEMSG": "Trạng thái Đơn hàng là ĐƯỢC PHÊ DUYỆT, không thể chuyển",
    "SalesRequisitionList": "Bảng báo giá/Yêu cầu bán hàng",
    "QUOTATRANPROSPECTVALIMSG": "Không thể chuyển bảng báo giá bán hàng thành đơn hàng bán cho khách tiềm năng",
    "CUSTHOLDTRANSVALIMSG": "Trạng thái của khách hàng đang bị giữ, không thể chuyển",
    "CREDITLIMITVALIDATETRANMSG": "Vượt quá hạn mức tín dụng, không thể chuyển",
    "CREDITLMIITTRANSHOLDALERTMSG": "Vượt quá Hạn mức Tín dụng, Đơn hàng sẽ được lưu với trạng thái Giữ.",
    "LOTFEATURE": "Tính năng Lô",
    "CONTAINER": "Container",
    "FEATUREID": "ID Tính năng",
    "FEATUREDESC": "Mô tả Tính năng",
    "VALUE": "Giá trị",
    /**----------- LANDED COST CALCULATION--- */
    "LANDEDCOSTCALCULATION": "Tính Giá cả Đổ bộ",
    "LANDEDCOSTGROUPID": "ID Nhóm Giá cả Đổ bộ",
    "LANDEDCOSTGROUPDESC": "Mô tả Nhóm Giá cả Đổ bộ",
    "ACCUREDLANDEDCOSTACC": "Tài khoản Chi phí Đổ bộ đã tích lũy",
    "ACCUREDLANDEDCOSTACCDESC": "Mô tả Tài khoản Chi phí Đổ bộ đã tích lũy",
    "LANDEDCOSTACC": "Tài khoản Chi phí Đổ bộ",
    "LANDEDCOSTACCDESC": "Mô tả Tài khoản Chi phí Đổ bộ",
    "CURRENCY": "Tiền tệ",
    "LANDEDCOSTID": "ID Chi phí Đổ bộ",
    "APPORTIONEDBY": "Phân phối Bởi",
    "PERCENTVALUE": "Phần trăm/Giá trị",
    "DICREDMEMOTITLE": "Hóa đơn trực tiếp/Ghi chú Tín dụng",
    "DirectInvoiceList": "Hóa đơn trực tiếp/Ghi chú Tín dụng",
    "PROCESSREPORT": "Báo cáo Xử lý",
    "DAY": "Ngày",
    "GENERATE": "Tạo ra",
    "QTYISSUED": "Số lượng phát hành",
    "QTYRECEIVE": "Số lượng nhận",
    "AVAILABLEQTY": "Số lượng có sẵn",
    "PONO": "Số Đơn đặt hàng",
    "RECEIPTNO": "Số Biên nhận",
    "ROWNO": "Số Dòng",
    "APPORTIONEDAMT": "Số tiền Phân phối",
    "INCLUDEFREIGHTREBATE": "Bao gồm Cước phí Cho khuyến mãi",
    "RECURRED": "Được tái diễn",
    "FOREIGNAMT": "Số tiền Ngoại tệ",
    "FREIGHTACCOUNT": "Tài khoản",
    "AMT": "Số tiền",
    "TOTALFREIGHT": "Tổng Cước phí",
    "CHARTACCOUNT": "Bảng Tài khoản",
    "FREIGHTKEY": "Khóa Cước phí",
    "FREIGHTMASTER": "Bảng Cước phí",
    "FREIGHTBREAKUP": "Phân loại Cước phí",
    "SCAN": "Quét",
    "PALLETNO": "Số Pallet",
    "QUARANDATE": "Ngày Khoách hàng",
    "ITEMQTY": "Số lượng Mặt hàng",
    "ITEMQTYREM": "Số lượng còn lại Mặt hàng",
    "DOCUMENTNO": "Số Tài liệu",
    "DOCLINENO": "Số Dòng Tài liệu",
    "VIEWLOTFEATURE": "Xem Tính năng Lô",
    "VIEWSELECTEDLOT": "Xem Lô đã chọn",
    "QTY": "Số lượng",
    "SELECTLOT": "Chọn Lô",
    "AUTOSELECT": "Tự động Chọn",
    "UNSELECTALL": "Bỏ chọn Tất cả",
    "FROMCONTAINER": "Từ Container",
    "TOCONTAINER": "Đến Container",
    "CONATINERSEARCH": "Tìm kiếm Container",
    "MSG": {
      "CONTACT_NAME_REQUIRED": "Nhập Tên Liên hệ",
      "EMAILVALIDATEMSG": "Nhập E-mail hợp lệ",
      "PLEASEENTERTENDIGITNUMBER": "Vui lòng nhập số gồm 10 chữ số",
      "NOTVALIDNO": "Không phải là số hợp lệ",
      "LOTREQ": "Yêu cầu Số Lô.",
      "BINREQ": "Yêu cầu Số Bin.",
      "LOTQTYGREATERFROMZERO": "Số lượng Lô phải lớn hơn không.",
      "CONTAINERQTYMISMATCH": "Số lượng Lô và số lượng Container đã chọn không khớp.",
      "CONTAINERNOTMAINTAIN": "Không thể lưu trữ. Không có Container cho Số Lô.",
      "BLOCKSHELFLIFE": "Không đủ thời hạn để lưu trữ cho mặt hàng. ",
      "AVAILABLESHELFLIFE": "Thời hạn lưu trữ hiện có là ",
      "REQSHELFLIFE": " và thời hạn lưu trữ yêu cầu là ",
      "ISSUEQTYEQUALSELECTQTY": "Số lượng cần phát hành đã bằng với số lượng đã chọn",
      "HARDALLOCATION": "Sử dụng phân phối cứng đã được thiết lập trong thiết lập kho. Không thể phân phối nhiều hơn số lượng có sẵn - Số lượng đã phân phối.",
      "ITEMNOTCONTAINERIZED": "Mặt hàng không được đóng gói trong Container.",
      "DUPLICATENO": "Số Trùng",
      "SELECTEDCONTAINEREQUALTOQTY": "Số lượng Container đã chọn phải bằng với Số lượng Lô",
      "FROMTOVALUECHECK": "Giá trị Từ không được lớn hơn Giá trị Đến",
      "TOTALSPLITQTYEQUALTOQTY": "Tổng Số lượng cần phân chia phải bằng Số lượng có sẵn",
      "QTYSPLITREQ": "Yêu cầu Số lượng cần phân chia",
      "LANDEDCOSTREQ": "Yêu cầu ID Chi phí Đổ bộ",
      "LANDEDCOSTGROUPREQ": "Yêu cầu ID Nhóm Chi phí Đổ bộ",
      "ACCUREDLANDEDCOSTREQ": "Yêu cầu Tài khoản Chi phí Đổ bộ đã tích lũy",
      "LANDEDCOSTACCOUNTREQ": "Yêu cầu Tài khoản Chi phí Đổ bộ",
      "LANDEDCOSTSELECTIONREQ": "Yêu cầu Dữ liệu Chi tiết Chi phí Đổ bộ",
      "FREIGHTDESC": "Thêm mô tả cước phí",
      "FREIGHTAMT": "Thêm tài khoản cước phí",
      "QTYITEMNOTGREATER": "Số lượng mặt hàng không được lớn hơn Số lượng Đơn hàng.",
      "QTYITEMNOTGREATERNEW": "Số lượng mặt hàng không được lớn hơn Số lượng có sẵn trên Đơn hàng.",
      "QTYNOTGREATERTHANORDQTY": "Số lượng không được lớn hơn Số lượng Đặt hàng.",
      "QTYISSUEREQ": "Yêu cầu Số lượng cần phát hành",
      "REMQTYZERO": "Số lượng còn lại của mặt hàng là 0",
      "SERAILNOEXIST": "Số Serial đã tồn tại cho mặt hàng - ",
      "QTYISSUENOTGREATERONHAND": "Số lượng có sẵn phải lớn hơn Số lượng cần phát hành.",
      "CONTAINERREQ": "Yêu cầu Container",
      "BLOCKSHELFLIFELOTNO": "Không đủ thời hạn lưu trữ cho mặt hàng và Số lô ",
      "QTYREQ": "Yêu cầu Số lượng",
      "QUARANDATELESSTHANEXPIRYDATE": "Ngày Karantina không thể lớn hơn hoặc bằng với Ngày Hết hạn",
      "EXPIRYGREATERTHANRECEIPTDATE": "Ngày Hết hạn không thể nhỏ hơn hoặc bằng với Ngày Nhận hàng",
      "QUARANTINEGREATERTHANRECEIPTDATE": "Ngày Karantina không thể nhỏ hơn hoặc bằng với Ngày Nhận hàng",
      "TOTALCONTAINERQTYEXCEED": "Tổng số lượng Container vượt quá số lượng yêu cầu, không thể tạo Container.",
      "DELETECONTAINERCONFIRMATION": "Chi tiết Container đã được lưu. Bạn có muốn xóa một số dữ liệu container?",
      "QTYNOTGREATERTHANONE": "Số lượng cần phát hành không lớn hơn một cho mặt hàng theo dõi Serial",
      "PALLETANDLOTSELECTEDSUCCESSFULLY": "Pallet và Lô đã được thêm",
      "LOTSELECTEDSUCCESSFULLY": "Lô đã được thêm",
      "PALLETNOREQ": "Yêu cầu Số Pallet",
      "FROMCONTAINERREQ": "Yêu cầu Container Xuất phát",
      "TOCONTAINERREQ": "Yêu cầu Container Đích",
      "SEARCHBYCONATINERREQ": "Yêu cầu Tìm kiếm bằng Container",
      "ENTERCONTAINERQTY": "Nhập Số lượng Container",
      "ITEMKEYREQ": "Nhập Khóa Mặt hàng",
      "DUPLICATELOTBINCOMBINATION": "Tồn tại kết hợp Trùng Lô + Bin (Dòng số: ",
      "CORRECTSQLQUERY": "Truy vấn SQL chính xác",
      "CHECKOUTSUCCESS": "Ghi nhận đã Kiểm tra thành công",
      "UNDOCHECKOUTSUCCESS": "Ghi nhận đã Bỏ kiểm tra thành công",
      "CHECKINSUCCESS": "Ghi nhận đã Kiểm tra vào thành công",
      "ORDERNOREQ": "Yêu cầu Số Đơn hàng",
      "FROMDATETIME": "Yêu cầu Ngày/Giờ Bắt đầu",
      "TODATETIME": "Yêu cầu Ngày/Giờ Kết thúc",
      "PURCHASENOTPERMISSION": "Bạn không được phép Nhận Đơn đặt hàng",
      "SALESNOTPERMISSION": "Bạn không được phép duy trì Lô hàng",
      "TODATETIMEGREATER": "Ngày/Giờ Kết thúc phải lớn hơn Ngày/Giờ Bắt đầu",
      "WHTRANSFEROUTNOTPERMISSION": "Bạn không được phép Chuyển Kho ra",
      "WHTRANSFERINNOTPERMISSION": "Bạn không được phép Chuyển Kho vào"
    },
    "SUPERINVOICETITLE": "Hóa Đơn Siêu",
    "SONOEXIST": "Đơn hàng đã tồn tại",
    "PROCESS": "Xử lý",
    "PurchaseOrderEntryList": "Đơn đặt hàng",
    "PurchaseRequisitionEntryList": "Yêu cầu Đặt hàng",
    "PurchaseIndentEntryList": "Yêu cầu Mua hàng",
    "SuperVoucherList": "Phiếu Siêu",
    "FillVendAdd": "Nhập Địa chỉ Nhà cung cấp",
    "VendorMasterList": "Khóa Nhà cung cấp",
    "Expense_Acct": "Bảng Tài khoản",
    "Cashacct": "Bảng Tài khoản",
    "CountryLookup": "Tìm kiếm Quốc gia",
    "Vend_Class_Ky": "Tìm kiếm Lớp Nhà cung cấp",
    "Ship_Via": "Vận Chuyển qua",
    "Fob": "Tìm kiếm FOB",
    "Branch_Ky": "Tìm kiếm Chi nhánh",
    "Comment_Ky": "Tìm kiếm Bình luận",
    "DfltTxKey": "Tìm kiếm Khóa Thuế",
    "Terms": "Tìm kiếm Điều khoản",
    "Location_Ky": "Tìm kiếm Địa điểm",
    "DfltLandedCostGroupID": "Nhóm Chi phí Đổ bộ",
    "FreightKey": "Bảng Cước phí",
    "TaxType": "Tìm kiếm Loại Thuế",
    "TaxType1099": "Tìm kiếm Ô 1099",
    "Language_key": "Tìm kiếm Ngôn ngữ",
    "BRANCHKEYLOOKUP": "Tìm kiếm Gửi tới",
    "APPLYWORKFLOW": "Áp dụng Quy trình",
    //**Specification Template * *//
    "SPEC": {
      "HEADER": "Mẫu Đặc Tả",
      "TMP_ID": "ID Mẫu Đặc Tả",
      "VALID": {
        "GRPID": "ID Nhóm Đặc Tả không thể để trống.",
        "SPECID": "ID Đặc Tả không thể để trống.",
        "COMBINATION": "Không cho phép kết hợp trùng lặp giữa ID Nhóm và ID Đặc Tả.",
        "TMPKEY": "Bạn có muốn thay đổi khóa Mẫu không?"
      }
    },
    "DocTxKey": "Khóa Thuế",
    "ORDRECEIVEDTHISWEEK": "Đơn hàng sẽ được nhận trong tuần này",
    "CLOSEDORDER": "Đơn hàng đã đóng",
    "PROCESSEDORDER": "Đơn hàng đã xử lý",
    "GOTRANSINVOICE": "Đi đến Chuyển Đổi thành Hóa đơn",
    "GOSUPERINVOICE": "Đi đến Siêu Hóa đơn",
    "GOTRANSFERSOBATCH": "Đi đến Chuyển Đổi thành Lô",
    "PRINTINVOICE": "In Hóa đơn",
    "PRINTCREDITMEMO": "In Bản Ghi Nhớ Tín Dụng",
    "ARCHIVEDORDER": "Đơn hàng đã Lưu trữ",
    "PROCESSEDORDERS": "Đơn hàng đã xử lý",
    "GOTRANSVOUCHER": "Đi đến Chuyển Đổi thành Chứng từ",
    "GOSUPERVOUCHER": "Đi đến Siêu Chứng từ",
    "GOPURCHASEORDER": "Đi đến Đơn Đặt Hàng",
    "GOSALESORDER": "Đi đến Đơn Hàng Bán Hàng",
    "GOMAINTAINSHIPMENT": "Đi đến Duy Trì Lô hàng",
    "PRINTVOUCHER": "In Chứng từ",
    "PRINTDEBITMEMO": "In Bản Ghi Nhớ Nợ",
    "CLOSEDORDERS": "Đơn hàng đã đóng",
    "PRINT": "In",
    "LANDEDCOSTNOTONRECEIP": "Chi phí đổ bộ không được duy trì cho việc nhận hàng.",
    "MYTASK": "Hiển thị Công Việc Của Tôi",
    "TASKFORRECORD": "Hiển thị Công Việc Cho Bản Ghi Này",
    "USERNAMELBL": "Tên Người Dùng",
    "FORMNAME": "Tên Biểu Mẫu",
    "PRIMARYKEY": "Khóa Chính",
    "ESIGNAUDITMSG": "Lịch sử Kiểm Toán áp dụng trên màn hình này. Lưu dữ liệu trước khi điều hướng/đóng màn hình. Nhấn Hủy để quay lại biểu mẫu. Nhấn Không để mất thay đổi.",
    "VENDORACTIVE": "Nhà Cung Cấp Đang Hoạt Động",
    "VENDORHOLD": "Nhà Cung Cấp Bị Giữ",
    "CLOSEDELETEALERT": "Không thể xóa đơn hàng đã đóng",
    "PROCESSEDDELETEALERT": "Không thể xóa đơn hàng đã xử lý",
    "SERIALLOTMAINTENANCE": "Bảo Dưỡng Số Serial/Lô",
    "DOCUMENTTYPE": "Loại Tài Liệu",
    "DOCUMENTNUMBER": "Số Tài Liệu",
    "ITEM": "Mục",
    "DOCUMENTLINENO": "Số Dòng Tài Liệu",
    "SELQTY": "Số Lượng Đã Chọn",
    "SHOWBINONLY": "Chỉ Hiển Thị Bin Trống",
    "RECEIPTDATE": "Ngày Nhận Hàng",
    "COMMITQTY": "Số Lượng Cam Kết",
    "EXPIRYDATE": "Ngày Hết Hạn",
    "SHIPMENTDETAIL": "Chi Tiết Lô Hàng",
    "REQDATE": "Ngày Yêu Cầu",
    "PROMISEDATE": "Ngày Hứa",
    "PODDOC": "Tài Liệu POD",
    "PODRECBY": "POD Nhận Bởi",
    "SHIPDATE": "Ngày Giao Hàng",
    "TARGETSHIPDATE": "Ngày Giao Hàng Mục Tiêu",
    "PODDATE": "Ngày POD",
    "SHIPTRACKNO": "Số Theo Dõi Giao Hàng",
    "LOTQTY": "Số Lượng Lô",
    "REMQTY": "Số Lượng Còn Lại",
    "PROCESSEDCLOSEDALERT": "Không thể đóng đơn hàng đã xử lý",
    "WHEREUSED": "Nơi Sử Dụng",
    "GenrateID": "Tạo ID",
    "KEY": "Khóa",
    "NODIMENSION": "Không có kích thước được xác định trong thiết lập đa chiều.",
    "SAVERECFIRST": "Vui lòng lưu bản ghi trước",
    "STATUS": "Trạng Thái",
    "TRNQTY": "Số Lượng Giao Dịch",
    "ORIGINALFILENAME": "Tên File Gốc",
    "DOCUMENTTITLE": "Tiêu Đề Tài Liệu",
    "DOCUMENTSUMMARY": "Tóm Tắt Tài Liệu",
    "PRIORITY": "Ưu Tiên",
    "CHECKOUTBY": "Được Kiểm Tra Bởi",
    "CHECKOUTSTATUS": "Trạng Thái Kiểm Tra",
    "CREATEDDATE": "Ngày Tạo",
    "CREATEDBY": "Tạo Bởi",
    "MODIFIEDDATE": "Ngày Sửa Đổi",
    "SHOWACTIVEONLY": "Chỉ Hiển Thị Đang Hoạt Động",
    "READONLYOTHERUSER": "Chỉ Đọc Cho Người Dùng Khác",
    "DOCUMENTS": "Tài Liệu",
    "NOTES": "Ghi Chú",
    "CHECKOUT": "Kiểm Tra",
    "CHECKIN": "Kiểm Tra Vào",
    "UNDOCHECKOUT": "Hủy Kiểm Tra",
    "DELETELINE": "Xóa Dòng",
    "ATTACH": "Đính Kèm",
    "TITLENAME": "Tên Tiêu Đề",
    "FILENAME": "Tên File",
    "SUMMARY": "Tóm Lược",
    "AUTHORIZEDGROUP": "Nhóm Được Ủy Quyền",
    "DOCUMENTCREATEDDATE": "Ngày Tạo Tài Liệu",
    "DOCUMENTCREATEDBy": "Tạo Bởi Tài Liệu",
    "DOCUMENTMODIFIEDDATE": "Ngày Sửa Đổi Tài Liệu",
    "DOCUMENTMODIFIEDBy": "Sửa Đổi Bởi Tài Liệu",
    "PLZSELECTFILE": "Vui lòng chọn file",
    "ENTERFILENAME": "Nhập Tên File",
    "ENTERAUTHGROUP": "Nhập Nhóm Được Ủy Quyền",
    "FROM": "Từ",
    "TO": "Đến",
    "SCANLOT": "Quét Lô",
    "READFILEFORSUMMARY": "Đọc Tệp cho Tóm Lược",
    "SCANATTACH": "Quét & Đính Kèm",
    "RECORDNEWDOCUMENT": "Ghi Lại Tài Liệu Mới",
    "QTYRECEIVED": "Số Lượng Nhận Được",
    "VIEWPALLET": "Xem Pallet",
    "ASSIGNDIMID": "Gán ID Kích Thước",
    "ASSIGNTOROW": "Gán Cho Tất Cả Các Dòng",
    "ShipViaKey": "Vận Chuyển Qua",
    "VendCity": "Thành phố Nhà Cung Cấp",
    "VendName": "Tên Nhà Cung Cấp",
    "VouchNo": "Số Chứng Từ",
    "VoucherDate": "Ngày Chứng Từ",
    "CustCity": "Thành phố Khách Hàng",
    "CustName": "Tên Khách Hàng",
    "Invdate": "Ngày Hóa Đơn",
    "SoInvoice": "Số Hóa Đơn",
    "TranNo": "Số Giao Dịch",
    "ASSIGNDIMENSIONID": "Gán ID Kích Thước",
    "QUERYANALYZER": "Trình Duyệt Truy Vấn",
    "ORDERNO": "Số Đơn Đặt Hàng",
    "FILEEXTNOTSUPPORT": "Phần mở rộng tệp không được hỗ trợ",
    "FILENAMENOTMATCH": "Tên Tệp không khớp với tệp trước",
    "PRINTLISTLABEL": {
      "PRINTINV": "In Hóa Đơn",
      "CUSTOMERKEY": "Khóa Khách Hàng",
      "CUSTOMERNAME": "Tên Khách Hàng",
      "ORDERDATE": "Ngày Đặt Hàng",
      "ORDERTYPE": "Loại Đơn Hàng",
      "PROMISEDATE": "Ngày Hứa",
      "RECDATE": "Ngày Nhận",
      "RECUSERID": "ID Người Nhận",
      "REQUESTEDDATE": "Ngày Yêu Cầu",
      "SOTOTAL": "Tổng Đơn Hàng",
      "SALESORDERNO": "Số Đơn Hàng Bán Hàng",
      "SHIPTOKEY": "Khóa Gửi Hàng Đến",
      "STATUS": "Trạng Thái",
      "TRAGETSHIPDATE": "Ngày Giao Hàng Mục Tiêu",
      "HOLDINGREASON": "Lý Do Giữ",
      "TRANNO": "Số Giao Dịch",
      "SOINVOICE": "Số Hóa Đơn Bán Hàng",
      "INVOICEDATE": "Ngày Hóa Đơn",
      "INVOICETOTAL": "Tổng Hóa Đơn"
    },
    "LINEITEM": "Mục Hàng",
    "ISSUEDQTY": "Số Lượng Đã Cấp Phát",
    "HOLDORDPRINTMSG": "Đơn đặt hàng bị giữ không thể được in.",
    "DUPLICATE": "Trùng Lặp",
    "FOUND": "được tìm thấy",
    "FROMLOCATION": "Từ Vị Trí",
    "INVENTORYTRANSFER": "Chuyển Kho",
    "INVENTORYMOVE": "Di Chuyển Kho",
    "DELMSG": "Xóa Thành Công.",
    "PRMEMPTY": "Tham số không thể trống",
    "SELRPTPRM": "Chọn Tham Số Báo Cáo",
    "PARAMETER": "Tham Số",
    "SAVEMSG": "Lưu Thành Công",
    "QUERYBUILDER": "Thiết Kế Truy Vấn",
    "CLEAR": "Xóa",
    "TESTSQL": "Kiểm Tra SQL",
    "BTN_CONTACT": "Chi Tiết Liên Hệ",
    "QUERYEDITOR": "Trình Soạn Thảo Truy Vấn",
    "TRANSFER": "Chuyển",
    "CONTACTLIST": {
      "DELTE_HEADER": "Máy Chủ Dữ Liệu",
      "TRANSFER": "Dữ liệu từ dòng được chọn sẽ được chuyển đến màn hình chính. Bạn có muốn Tiếp Tục?",
      "CUSTOMER_KEY_REQUIRED": "Nhập Khóa Khách Hàng",
      "VEND_KEY_REQUIRED": "Nhập Khóa Nhà Cung Cấp",
      "PROSPECT_KEY_REQUIRED": "Nhập Khóa Tiềm Năng",
      "NOT_SAVED": "Ghi Lại không Thành Công.",
      "NAME": "Tên",
      "CATEGORY": "Danh Mục",
      "JOB_TITLE": "Chức Danh",
      "PHONE": "Số Điện Thoại",
      "EMAIL": "Email",
      "QUOTATION": "Bảng Báo Giá",
      "SALESORDER": "Đơn Hàng Bán Hàng",
      "INVOICE": "Hóa Đơn"
    },
    "ARCHIVECONTRACT": {
      "SALESARCHIVECONT": "Lưu Trữ Hợp Đồng Bán Hàng",
      "PURARCHIVECONT": "Lưu Trữ Hợp Đồng Mua Hàng",
      "EXPIRYDATEFROM": "Ngày Hết Hạn Từ",
      "EXPIRYDATETO": "Ngày Hết Hạn Đến",
      "CUSTKEY": "Khóa Khách Hàng",
      "CUSTNAME": "Tên Khách Hàng",
      "VENDKEY": "Khóa Nhà Cung Cấp",
      "VENDNAME": "Tên Nhà Cung Cấp"
    },
    "MAILSETTINGS": {
      "MAILSETTINGS": "Cài Đặt Mail",
      "SERVER": "Máy Chủ",
      "USEREMAIL": "Người Dùng",
      "PASSWORD": "Mật Khẩu",
      "PORT": "Cổng",
      "ENABLESSL": "Kích Hoạt SSL",
      "BCCMAILSENDER": "BCC Mail gửi người gửi",
      "SAVEMAILSETTING": "Cài đặt mail đã được lưu thành công"
    },
    "PURCHASEAPPROVERGRP": {
      "TITLEPR": "Nhóm Phê Duyệt Mua Hàng",
      "TITLESR": "Nhóm Phê Duyệt Bán Hàng",
      "TITLEFM": "Nhóm Phê Duyệt Công Thức",
      "TITLESRM": "Nhóm Phê Duyệt Mẫu",
      "TITLECM": "Nhóm Phê Duyệt Chung",
      "ADDPURAPPROVERGROUP": "Thêm Nhóm Phê Duyệt Mua Hàng",
      "ADDSALAPPROVERGROUP": "Thêm Nhóm Phê Duyệt Bán Hàng",
      "ADDFORAPPROVERGROUP": "Thêm Nhóm Phê Duyệt Công Thức",
      "ADDSMAPPROVERGROUP": "Thêm Nhóm Phê Duyệt Mẫu",
      "ADDCMAPPROVERGROUP": "Thêm Nhóm Phê Duyệt Chung",
      "APPROVER_GROUP": "ID Nhóm",
      "DOC_TYPE": "Loại Tài Liệu",
      "DESCRIPTION": "Mô Tả Nhóm",
      "RECDATE": "Ngày Nhận",
      "RECUSERID": "Người Nhận ID",
      "USERSEQNO": "Số Thứ Tự Người Dùng",
      "ACTION": "Hành Động",
      "APPROVER": "Người Phê Duyệt",
      "NAME": "Tên",
      "EMAIL": "Email",
      "APPROVERINFORMATION": "Thông Tin Người Phê Duyệt",
      "RESEQUENCE": "Sắp Xếp Lại",
      "TYPE": "Loại",
      "MSG": {
        "APPROVERNAMEREQ": "Nhập Người Phê Duyệt Trong Dòng",
        "USERSEQNOREQ": "Nhập Số Thứ Tự Người Dùng Trong Dòng",
        "GROUPIDREQ": "Nhập ID Nhóm",
        "ENTERUSERINFORMATION": "Nhập Thông Tin Người Dùng",
        "DUPLICATESEQNO": "Số Thứ Tự Trùng Lặp",
        "APPROVEREXIST": "Người Phê Duyệt Đã Tồn Tại",
        "SAVESEQORDER": "Vui lòng Lưu Bản Ghi Sau Khi Xóa Mục Hàng"
      }
    },
    "GENERICFORM": {
      "BATCHMASTER": "Bản Ghi Tập Hợp",
      "DELMESSAGE": "Xóa Bản Ghi?",
      "ASKSAVE": "Lưu Bản Ghi?",
      "YES": "Có",
      "NO": "Không",
      "CANCEL": "Hủy",
      "MSGDELETE": "Không có dữ liệu để xóa.",
      "MSGSAVEFIRST": "Vui lòng lưu bản ghi trước.",
      "UPLOADPHOTO": "Tải Lên"
    },
    "RECORDAUTHORIZATION": {
      "USER": "Người Dùng",
      "USERID": "ID Người Dùng",
      "USER_DESCRIPTION": "Tên Người Dùng",
      "GROUPID": "ID Nhóm",
      "GROUPDESCRIPTION": "Tên Nhóm",
      "RECUSERID": "ID Người Nhận",
      "RECDATE": "Ngày Nhận",
      "TITLESR": "Quyền Ghi Chú Bán Hàng",
      "TITLEFM": "Quyền Ghi Chú Công Thức",
      "ADDSALRECORDAUTH": "Thêm Quyền Ghi Chú Bán Hàng",
      "ADDFORRECORDAUTH": "Thêm Quyền Ghi Chú Công Thức",
      "AUTHORIZEDUSER": "Người Dùng Được Phê Duyệt",
      "INSERTUSER": "Chèn Người Dùng",
      "READ": "Đọc",
      "WRITE": "Viết",
      "DELETE": "Xóa",
      "MSG": {
        "ALREADYEXIST": "Đã Tồn Tại",
        "USERIDREQ": "Nhập ID Người Dùng",
        "ENTERAUTHORIZEDUSERINFORMATION": "Nhập Thông Tin Người Dùng Được Phê Duyệt"
      }
    },
    "DATAVIEW": {
      "TITLE": "Xem Dữ Liệu",
      "COMPANY": "ID Công Ty",
      "COMPANYNAME": "Tên Công Ty",
      "SQL": "SQL",
      "EXECUTE": "Thực Hiện SQL",
      "ENTERCOMPANY": "Nhập ID Công Ty",
      "ENTERSQL": "Nhập SQL",
      "MSG": {
        "ASKCHECK": "bản ghi bị ảnh hưởng",
        "RECORDFOUND": "bản ghi được tìm thấy",
        "ASKSAVE": "Bạn có muốn tiếp tục không?"
      }
    },
    "GANTTCHART": {
      "BATCHNO": "Số Lô",
      "PROCESSCELL": "Ô Xử Lý",
      "STATUS": "Trạng Thái Lô",
      "BATCHTYPE": "Loại Lô",
      "RESCHEDULE": "Lên Lịch Lại",
      "MANUAL": "Thủ Công",
      "AUTO": "Sắp Xếp Tự Động",
      "GETBATCHES": "Nhận Các Lô",
      "REARRANGE": "Sắp Xếp Lại",
      "PREDECESSORBATCH": "Lô Tiền Nhiệm",
      "DELAY": "Trì Hoãn",
      "SEQNO": "Số Thứ Tự",
      "COLLAPSEPANE": "Thu Gọn/Mở Rộng Bảng",
      "SHOWTOOLBAR": "Hiển Thị/Ẩn Thanh Công Cụ",
      "UPDATEPROCEES": "Cập Nhật Ô Xử Lý",
      "FORWARD": "Tiến Lên",
      "BACKWARD": "Lùi Lại",
      "SELECTEDBATCH": "Lô Được Chọn",
      "FORMULAITEM": "ID Công Thức/Mục Hàng",
      "ORIGSTARTDATE": "Ngày Bắt Đầu Ban Đầu",
      "ORIGENDDATE": "Ngày Kết Thúc Ban Đầu",
      "SCHEDULING": "Lên Lịch",
      "PASTDUE": "Quá Hạn",
      "SNO": "STT",
      "STARTDATE": "Ngày Bắt Đầu Được Lên Lịch",
      "ENDDATE": "Ngày Kết Thúc Được Lên Lịch",
      "REMOVELINK": "Xóa Liên Kết",
      "ASSIGNLINK": "Gán Liên Kết",
      "ENTERPROCESSCELL": "Vui lòng nhập ô xử lý."
    },
    "BININQUIRY": {
      "TITLE": "Truy Vấn Kho",
      "LOOKUPTITLE": "Tra Cứu Kho",
      "BIN": "Kho #",
      "ITEM": "Mặt Hàng",
      "LOCATION": "Vị Trí",
      "LOTNUMBER": "Số Lô",
      "ItemKey": "Mã Mặt Hàng",
      "LocationKey": "Mã Vị Trí",
      "LotNo": "Số Lô",
      "QtyAvailable": "Số Lượng Có Sẵn",
      "ITEMKEY": "Mặt Hàng",
      "LOCATIONKEY": "Vị Trí",
      "LOTNO": "Số Lô",
      "QTYAVAILABLE": "Số Lượng Có Sẵn",
      "QTYONHAND": "Số Lượng Trên Kệ",
      "STOCKUOMCODE": "Đơn Vị",
      "DESCRIPTION": "Mô Tả Mặt Hàng",
      "QtyOnHand": "",
      "VIEW": "Xem",
      "CONTAINERTAB": "Container",
      "AISLE": "Hàng",
      "ROW": "Dãy",
      "RACK": "Kệ"
    },
    "PALLETINQUIRY": {
      "TITLE": "Truy Vấn Pallet",
      "LOOKUPTITLE": "Tra Cứu Pallet",
      "PALLET": "ID Pallet",
      "ITEMKEY": "Mặt Hàng",
      "ITEMDESCRIPTION": "Mô Tả Mặt Hàng",
      "LOCATIONKEY": "Vị Trí",
      "LOTNO": "Số Lô",
      "BINNO": "Số Kho",
      "CUSTOMER": "Khách Hàng",
      "SONO": "Số SO",
      "STATUS": "Trạng Thái",
      "BATCHNO": "Số Lô",
      "COMMENTS": "Ghi Chú",
      "LOTDETAILS": "Chi Tiết Lô",
      "PALLETDETAILS": "Chi Tiết Pallet",
      "STOCKUOMCODE": "Đơn Vị",
      "CONTAINERNO": "Cont",
      "QUANTITY": "Số Lượng",
      "QTYONHAND": "Số Lượng trên Tay",
      "PALLETID": "ID Pallet",
      "ALLOWPARTISSUESERIALIZATION": "AP",
      "DEFAULTCONTAINERQTY": "Cont Mặc Định",
      "PALLETLABEL": "Nhãn Pallet",
      "PALLETMENIFEST": "Danh Sách Pallet",
      "MSG": {
        "PALLTEIDREQ": "ID Pallet Không Thể Trống"
      }
    },
    "DOWNLOADERROR": {
      "TITLE": "Lỗi Tải Xuống",
      "COMPANYID": "ID Công Ty",
      "COMPANYNAME": "Tên Công Ty",
      "USERID": "ID Người Dùng",
      "USERNAME": "Tên Người Dùng",
      "DOWNLOADERRORLOG": "Nhật Ký Lỗi Tải Xuống",
      "CLEARERRORLOG": "Xóa Nhật Ký Lỗi",
      "ENTERCOMPANY": "Nhập ID Công Ty",
      "ENTERUSER": "Nhập ID Người Dùng",
      "NOERRORLOG": "Không Có Nhật Ký Lỗi"
    },
    "WMSLOTINQUIRY": {
      "TITLE": "Truy Vấn Lô",
      "LOTNO": "Số Lô #",
      "ITEMKEY": "Mã Mặt Hàng",
      "ITEMDESC": "Mô Tả Mặt Hàng",
      "EXPDATE": "Ngày Hết Hạn",
      "LOTSTATUS": "Trạng Thái Lô",
      "QUARTINEDATE": "Ngày Cách Ly",
      "STOCKUOM": "Đơn Vị Kho",
      "DISPUOM": "Đơn Vị Hiển Thị",
      "QUANTITYTAB": "Số Lượng",
      "TOTALONHANDQTY": "Tổng Số Lượng Trên Tay",
      "TOTALAVAILABLEQTY": "Tổng Số Lượng Có Sẵn",
      "BINNO": "Số Kho",
      "LOCATION": "Vị Trí",
      "QTYONHAND": "Số Lượng Trên Tay",
      "AVAILABLEQTY": "Số Lượng Có Sẵn",
      "SOURCETAB": "Nguồn Gốc",
      "ITEMTYPE": "Tự Làm/Mua",
      "DOCDATE": "Ngày Tài Liệu",
      "DOCNO": "Số Tài Liệu",
      "QTY": "Số Lượng",
      "VENDLOTNO": "Số Lô Nhà Cung Cấp",
      "VENDORKEY": "Mã Nhà Cung Cấp",
      "VENDORNAME": "Tên Nhà Cung Cấp",
      "FEATURETAB": "Đặc Tính",
      "FEATUREID": "ID Đặc Tính",
      "DESCRIPTION": "Mô Tả",
      "VALUE": "Giá Trị",
      "CONTAINERTAB": "Container",
      "CONTAINERNO": "Số Container",
      "PALLETNO": "ID Pallet",
      "COMMENTS": "Ghi Chú",
      "VIEW": "Xem"
    },
    "PASSWORDCONFIGURATION": {
      "TITLE": "Cấu Hình Mật Khẩu",
      "PASSWORDRENEWALCYCLE": "Kỳ Hạn Đổi Mật Khẩu (Trong Ngày)",
      "MINIMUMPASSWORDLENGTH": "Độ Dài Tối Thiểu (Ký Tự)",
      "RESTRICTIONFORSAMEPASSWORD": "Hạn Chế Mật Khẩu Trùng (Trong Ngày)",
      "FAILURELOGINATTEMPTS": "Số Lần Đăng Nhập Sai",
      "LOGINDURATIONFORONETIMEPASSWORD": "Thời Gian Đăng Nhập Mật Khẩu Một Lần (Trong Ngày)",
      "MAXIMUMALLOWEDINACTIVITYPERIOD": "Thời Gian Tối Đa Không Hoạt Động (Trong Ngày)",
      "STRONGPASSWORD": "Mật Khẩu Mạnh",
      "MAILANDSMSSETTINGS": "Cấu Hình Email và SMS",
      "SERVER": "Máy Chủ",
      "USER": "Người Dùng",
      "BCCMAILTOSENDER": "Gửi Email Ẩn Đến Người Gửi",
      "PASSWORD": "Mật Khẩu",
      "ENABLESSL": "Bật SSL",
      "PORT": "Cổng",
      "SMSURL": "URL SMS"
    },
    "TODO": {
      "TITLE": "Nhiệm vụ cần làm",
      "TYPE": "Loại",
      "STATUS": "Trạng thái",
      "PRIORITY": "Ưu tiên",
      "CLOSINGPER": "Phần trăm hoàn thành",
      "REQBY": "Yêu cầu bởi",
      "DUEDATE": "Ngày hết hạn",
      "DESC": "Mô tả",
      "DOCID": "ID Tài liệu",
      "FOLLOWUP": "Theo dõi",
      "BUSINESSPARTER": "Đối tác kinh doanh",
      "CONTACTPERSON": "Người liên hệ",
      "CONTACTNO": "Số liên lạc",
      "EMAILId": "Địa chỉ Email",
      "COMMENTS": "Bình luận",
      "ATTACHEDDOCS": "Tài liệu đính kèm",
      "ATTACHMENT": "Đính kèm",
      "ACTIVITYJOUNAL": "Nhật ký hoạt động",
      "NEWTODO": "Nhiệm vụ mới",
      "FOLLOWUPDATE": "Ngày theo dõi",
      "SUBJECT": "Chủ đề",
      "REQUESTEDBY": "Yêu cầu bởi",
      "ASSIGNEDTO": "Phân công cho",
      "SUMMARY": "Tóm tắt",
      "DATE": "Ngày",
      "NEWACTIVITY": "Hoạt động mới",
      "INPROGRESS": "Đang tiến hành",
      "COMPLETED": "Đã hoàn thành",
      "CANCELLED": "Đã hủy",
      "ASSIGNTODOANOTHERUSER": "Giao nhiệm vụ cho người dùng khác",
      "DOCUMENTS": "Tài liệu",
      "SHOWBUSINESS": "Hiển thị kinh doanh",
      "MYTODO": "Nhiệm vụ của tôi",
      "ALLUSER": "Tất cả người dùng",
      "REASSIGNED": "Đã phân công lại",
      "NEWDOCUMENT": "Tài liệu mới",
      "MSG": {
        "SELECTBUSINESSPARTNER": "Chọn Đối tác kinh doanh",
        "SELECTFILE": "Chọn Tập tin",
        "DUEDATEGREATERTHANFOLLOWDATE": "Ngày hết hạn phải lớn hơn ngày theo dõi",
        "FOLLOWDATENOTLESSTHANCURRENT": "Ngày theo dõi không nhỏ hơn Ngày hiện tại",
        "TARGETDATEVALIDATION": "Ngày mục tiêu không được để trống",
        "CLOSEPERNOTGREATERTHAN100": "Phần trăm hoàn thành không được lớn hơn 100"
      }
    },
    "ACTIVITYMASTER": {
      "TITLE": "Chủ đề hoạt động",
      "NEWFYI": "Thông tin mới",
      "TYPE": "Loại",
      "USER": "Người dùng",
      "SUMMARY": "Tóm tắt",
      "DATE": "Ngày",
      "TODO": "Nhiệm vụ cần làm",
      "DOCUMENTID": "ID Tài liệu",
      "BUSSINESSPARTNER": "Đối tác kinh doanh",
      "CONTACTPERSON": "Người liên hệ",
      "CONTACTNO": "Số liên lạc",
      "EMAILID": "Địa chỉ Email",
      "COMMENT": "Bình luận",
      "ATTACHEDDOCS": "Tài liệu đính kèm",
      "ADDDOCK": "Thêm tài liệu",
      "TITLEONE": "Tiêu đề",
      "STATUS": "Trạng thái",
      "MSG": {
        "BUSSINESSKEYCANNOTBENULL": "Khóa kinh doanh không thể để trống"
      }
    },
    "WORKFLOW": {
      "NEWTODO": "Mới",
      "TYPE": "Loại",
      "PRIORITY": "Ưu tiên",
      "ASSIGNEDTO": "Được phân công cho",
      "STATUS": "Trạng thái",
      "DESCRIPTION": "Mô tả",
      "COMMENTS": "Bình luận",
      "DUEDAYS": "Ngày hết hạn",
      "CREATEON": "Tạo vào",
      "PREDECESSOR": "Tiền nhiệm",
      "TODOSTATUS": "Trạng thái nhiệm vụ cần làm",
      "CREATEFYI": "Tạo thông tin",
      "TITLE": "Danh sách nhiệm vụ cần làm",
      "MANDATORYFIELDS": "Vui lòng điền vào các trường bắt buộc",
      "ASSIGNTOcHECK": "Nhập người được phân công",
      "TODOTYPECHECK": "Chọn loại",
      "WORKFLOWACESS": "Luồng công việc không áp dụng cho màn hình này.",
      "FORMTITLE": "Cài đặt nhiệm vụ cần làm trong luồng công việc"
    },
    "FINANCESERIES": {
      "TITLE": "Dãy số tài chính",
      "ADDFINANCE": "Thêm dãy số tài chính",
      "TYPE": "Loại",
      "SERIES": "Sê-ri (Tùy chọn 1)",
      "CUSTOMOPTION": "Tùy chỉnh (Tùy chọn 2)",
      "MNTH": "Tháng (Tùy chọn 3)",
      "RECUSERID": "ID Người dùng nhận",
      "RECDATE": "Ngày nhận",
      "YER": "Năm (Tùy chọn 4)",
      "SEQU": "Số thứ tự (Tùy chọn 5)",
      "GENRATEID": "Tạo ID",
      "MNTHYER": "ThángNăm",
      "AUTOSEQUENCE": "Tự động sắp xếp",
      "REINITALIZE": "Khởi tạo lại",
      "USERGROUP": "Nhóm người dùng",
      "GENRATESEQUENCE": "Tùy chọn sê-ri",
      "SEQUENCEOPTION": "Tùy chọn sê-ri",
      "AUTOINSERT": "Tự động chèn sê-ri cho Tháng & Năm",
      "INITIALIZESERIES": "Khởi tạo sê-ri cho Tháng/Năm",
      "INITIALIZESERIESMONTH": "Khởi tạo sê-ri từ Tháng",
      "DISPLAYFORMAT": "Định dạng hiển thị",
      "MONTH": "Tháng",
      "YEAR": "Năm",
      "CHAR3": "3-Ký tự [01/Thg 1]",
      "CHAR2": "2-Ký tự [01/02]",
      "MSG": {
        "DISPLAYVALIDATION": "Độ dài dãy số tài chính không được vượt quá 12 ký tự",
        "INVALIDMONTH": "Tháng không hợp lệ",
        "INVOICESERIES": "Nhập dãy số hóa đơn (Tùy chọn 1)",
        "MONTH": "Nhập Tháng (Tùy chọn 3)",
        "YEAR": "Nhập Năm (Tùy chọn 4)",
        "SEQU": "Nhập Số thứ tự (Tùy chọn 5)",
        "GenrateSequence": "Nhập Tùy chọn sê-ri",
        "VALIDMONTH": "Nhập Năm hợp lệ"
      }
    },
    "username": "Tên người dùng",
    "email": "Email",
    "status": "Trạng thái",
    "MYPROFILE": "Hồ sơ của tôi",
    "REPORTACTION": "Báo cáo Hành động",
    "PROFILEACTION": "Hồ sơ",
    "INQUIRY": "Yêu cầu thông tin",
    "ITEMINQUIRY": "Yêu cầu thông tin vật phẩm",
    "LOTSPOT": "Yêu cầu số lô",
    "ITEMKEYREQ": "Yêu cầu khóa vật phẩm",
    "PALLETNOREQ": "Yêu cầu số pallet",
    "BINNOREQ": "Yêu cầu số thùng",
    "CUSTNAME": "Tên khách hàng",
    "Free_Text": "Văn bản miễn phí",
    "QCITEMPROCESSALERT": "Một số vật phẩm đang ở trạng thái Kiểm tra chất lượng (QC), Những vật phẩm này không được xử lý.",
    "Back_Yes_No": "Đơn hàng trả về",
    "BLOCKSHELFLIFE": "Không đủ thời hạn trên kệ cho vật phẩm.",
    "AVAILABLESHELFLIFE": "Thời hạn trên kệ có sẵn là ",
    "REQSHELFLIFE": " và thời hạn trên kệ yêu cầu là ",
    "BACKORDERNOTALLOW": "Không cho phép đơn hàng trả về, Đơn hàng sẽ được đóng.",
    "SELECTPARENTQTY": "Số lượng vật phẩm cha trong bộ kit phải lớn hơn 0",
    "Ref_So": "Số tham chiếu",
    "FORMSETTING": "Cài đặt biểu mẫu",
    "ROWSETTING": "Cài đặt dòng",
    "FOOTERSETTING": "Cài đặt chân trang",
    "GRIDSETTING": "Cài đặt lưới",
    "PICKEDGRIDSETTING": "Cài đặt lưới đã chọn",
    "DROPPEDGRIDSETTING": "Cài đặt lưới đã thả",
    "ALLGRIDSETTING": "Tất cả cài đặt lưới",
    "STAGEDGRIDSETTING": "Cài đặt lưới đã sắp xếp",
    "RELEASEDGRIDSETTING": "Cài đặt lưới đã phát hành",
    "PACKEDGRIDSETTING": "Cài đặt lưới đã đóng gói",
    "RESTORE": "Khôi phục",
    "SELECTEDUSER": "Chọn Người dùng",
    "SELECTEDUSERS": "Người dùng đã chọn",
    "LABELS": "Nhãn",
    "VISIBLE": "Hiển thị",
    "ACTIVE": "Hoạt động",
    "BTNVISIBLE": "Nút Hiển thị",
    "BTNACTIVE": "Nút Hoạt động",
    "MANDATORY": "Bắt buộc",
    "ACTION": "Hành động",
    "SAVEFORMSETTING": "Lưu cài đặt biểu mẫu thành công",
    "RESTOREFORMSETTING": "Khôi phục cài đặt biểu mẫu thành công",
    "RESTOREGRIDSETTING": "Khôi phục cài đặt lưới thành công",
    "User_Id": "ID Người dùng",
    "SELECTALL": "Chọn tất cả",
    "THEME": "Giao diện",
    "DISPLAYREPORT": "Hiển thị Báo cáo",
    "ABOUT": "Về",
    "SCHEDULER": "Lịch làm việc cảng",
    "DOCKKEY": "Tên cảng",
    "FROMDATETIME": "Từ Ngày/Giờ",
    "TODATETIME": "Đến Ngày/Giờ",
    "TRUCKNO": "Số xe tải",
    "DRIVERNAME": "Tên tài xế",
    "DRIVERCONTACTNO": "Số liên hệ của tài xế",
    "SHIPINGCONTACTNO": "Số liên hệ vận chuyển",
    "CITY": "Thành phố",
    "STATE": "Bang",
    "BUSINESSPARTNER": "Đối tác kinh doanh",
    "ADDEVENT": "Thêm cuộc hẹn cảng",
    "EDITEVENT": "Chỉnh sửa cuộc hẹn cảng",
    "DOCKKEYLIST": "Danh sách tên cảng",
    "DOCKNAME": "Tên cảng",
    "DOCKTYPE": "Loại cảng",
    "SCHEDULEDOCK": "Lên lịch cảng",
    "FETCHUSERSETTINGS": "Tải cài đặt người dùng",
    "ACTIONSETTING": "Cài đặt hành động",
    "WMSEWS": {
      "WEIGHINGFOR": "Đang cân cho",
      "SELECTEDLOT": "Lô đã chọn",
      "REMAININGQTY": "SL còn lại",
      "SCALEQTY": "SL cân",
      "SELECTSCALE": "Chọn cân",
      "CLEARALL": "Xóa tất cả",
      "WEIGHT": "Trọng lượng",
      "TOTALQTY": "Tổng SL",
      "ACCEPT": "Chấp nhận",
      "SELECTLOT": "Vui lòng chọn Số lô.",
      "SELECTITEM": "Vui lòng chọn Khóa vật phẩm.",
      "CHKREMQTY": "SL còn lại phải lớn hơn không",
      "CHKSCALEQTY": "SL cân không hợp lệ",
      "CHKSCALELOTQTY": "SL cân không được lớn hơn SL lô",
      "ZEROSCALEQTY": "Vui lòng nhập SL cân",
      "CHKSELECTSCALE": "Vui lòng chọn Cân"
    },
    "ASSIGNDIMENSIONNOTOPEN": "Chỉ áp dụng cho tài chính BME",
    "QUERYWIZARD": {
      "ACTION": "Hành động",
      "TRANSFER": "Tạo",
      "SEQNO": "Số thứ tự",
      "SQL": "SQL",
      "JOIN": "Kết nối",
      "LEVEL": "Cấp độ",
      "PARENTLEVEL": "Cấp độ cha",
      "FINALSQL": "SQL cuối cùng",
      "QUERY": "Truy vấn",
      "HIERARCHICALQUERY": "Truy vấn phân cấp",
      "COLUMN1": "Cột 1",
      "HYPERLINK": "Siêu liên kết",
      "DISPLAYDRILLDOWNFIELD1": "Hiển thị trường khoan",
      "DISPLAYDRILLDOWNFIELD2": "Hiển thị trường khoan 2",
      "DRILLDOWNFIELD1": "Trường khoan 1",
      "DRILLDOWNFIELD2": "Trường khoan 2",
      "HYPERLINKID": "ID Siêu liên kết",
      "RECORDKEY1": "Khóa bản ghi 1",
      "RECORDKEY2": "Khóa bản ghi 2",
      "ROUTINGPATH": "Đường dẫn định tuyến",
      "SCREENNAME": "Tên màn hình",
      "TARGETSCREENNAME": "Tên màn hình đích",
      "MSG": {
        "ENTERSQL": "Nhập SQL",
        "ENTERJOIN": "Nhập Kết nối",
        "ENTERLEVEL": "Nhập Cấp độ",
        "ENTERPARENTLEVEL": "Nhập Cấp độ cha",
        "ENTERFINALSQL": "Tạo SQL cuối cùng",
        "MASTEREXISTS": "Hãy lưu bản ghi chính trước.",
        "DELETELEVELCHECKK": "Dòng này có bản ghi cha không thể xóa.",
        "NODATASAVE": "Không có dữ liệu để lưu.",
        "ENTERSCREENNAME": "Nhập tên màn hình",
        "ENTERDISPLAYDRILLDOWNFIELD1": "Nhập Hiển thị trường khoan 1"
      }
    },
    "TEMPLATE_ID": "ID Mẫu",
    "SDSNUMERICVALUE": {
      "TITLE": "Thông tin Số học SDS",
      "CASNUM": "Số CAS",
      "CODE": "Mã",
      "DESCRIPTION": "Mô tả",
      "VALUE": "Giá trị",
      "NORECOD": "Chưa tạo bản ghi nào.",
      "CAS": "Số CAS",
      "BOILERPLATEGROUP": "Nhóm Plate",
      "ITEM": "Khóa vật phẩm",
      "DES": "Mô tả"
    }
  }
};

/***/ }),

/***/ 27210:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/zh.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'zh',
  data: {
    'SidebarMenu': {
      "Common": "通用",
      'Inbound': '入库',
      'Outbound': '出库',
      'Reports': '报告',
      'Internal Movements': '内部移动',
      'Inquiry and Reports': '查询和报告',
      'Admin': '管理',
      'Finance': '财务',
      "ChangeCompany": "更改公司",
      "Dashboard": "仪表板",
      "Favorites": "收藏夹",
      "TimeANDExpenses": "时间和费用",
      "Finanace": "财务",
      "Projects": "项目",
      "Receivables": "应收款项",
      "General Table View": "常规表视图",
      "SalesOrders": "销售订单",
      "Purchase": "采购",
      "Inventory": "库存",
      "Configuration": "配置",
      "WMS Configuration": "WMS配置",
      "Put Away": "上架",
      "QualityAssurance": "质量保证",
      "Quality Control": "质量控制",
      "Sales": "销售",
      "Master": "主数据",
      "ABC": "ABC",
      "Location": "位置",
      "Prospect": "潜在客户",
      "Customer": "客户",
      "ShipTo": "收货方",
      "SalesTemplate": "销售模板",
      "SalesKit": "销售套件",
      "Territory": "销售区域",
      "Salesperson": "销售员",
      "SalesCommission": "销售佣金",
      "SalesContract": "销售合同",
      "ArchiveSalesContract": "存档销售合同",
      "DisplayArchiveSalesContract": "显示存档的销售合同",
      "PriceSearchOrder": "价格搜索订单",
      "PromotionalPricing": "促销定价",
      "PriceMatrix-Customer/Item": "价格矩阵-客户/物品",
      "PriceMatrix-Customer/Price Group": "价格矩阵-客户/价格组",
      "PriceMatrix-Customer Class/Item": "价格矩阵-客户类别/物品",
      "PriceMatrix-Customer Class/Price Group": "价格矩阵-客户类别/价格组",
      "PriceMatrix-Customer Class/Item Class": "价格矩阵-客户类别/物品类别",
      "PriceListMaster": "价格表主数据",
      "RebateMaster": "折扣主数据",
      "RemitTo": "寄往",
      "SalesRecordAuthorization": "销售记录授权",
      "InvoiceSeries": "发票系列",
      "CustomerSpecificQC": "客户特定的质检",
      "RouteMaster": "路线主数据",
      "RouteSequence": "路线顺序",
      "Transactions": "交易",
      "Quotation/SalesRequisition": "报价/销售申请",
      "QuickSalesOrderEntry": "快速销售订单录入",
      "SalesOrderEntry": "销售订单录入",
      "PickList": "拣货单",
      "MaintainShipment": "维护装运",
      "PrintBillofLading": "打印提单",
      "TransferToInvoice": "转至发票",
      "SuperInvoice": "超级发票",
      "DirectInvoice/CreditMemo": "直接发票/贷项通知",
      "ShipmentRangeProcess": "装运范围处理",
      "QuotationRangeProcessing": "报价范围处理",
      "PackingSlip": "包装单",
      "LightCRM": "轻量级CRM",
      "InventoryBillOfLading": "库存提单",
      "MaterialPackaging": "物料包装",
      "ArchiveSalesOrder": "存档销售订单",
      "DisplaySalesOrderHistory": "显示销售订单历史",
      "InvoiceReversal": "发票冲销",
      "TruckLoadUtility": "卡车装载实用程序",
      "MasterReports": "主数据报告",
      "SalesContractReport": "销售合同报告",
      "ProspectReport": "潜在客户报告",
      "CustomerReport": "客户报告",
      "ShipToReport": "收货方报告",
      "CustomerItemReport": "客户物品报告",
      "CustomerClassReport": "客户类别报告",
      "CustomerClassItemReport": "客户类别物品报告",
      "CustomerByClassReport": "按类别报告客户",
      "CustomerSalespersonReport": "销售员报告客户",
      "SalesCommissionReport": "销售佣金报告",
      "SalespersonReport": "销售员报告",
      "TerritoryReport": "销售区域报告",
      "PriceMatrixReport": "价格矩阵报告",
      "SalesKitReport": "销售套件报告",
      "TransactionsReports": "交易报告",
      "PrintSalesOrderReport": "打印销售订单报告",
      "Invoices": "发票",
      "Pick-ListReport": "拣货单报告",
      "InventoryCommitmentReport": "库存承诺报告",
      "SalesAnalysisReport": "销售分析报告",
      "SOGrossProfitReport": "销售订单毛利报告",
      "SalesOrderHistoryReport": "销售订单历史报告",
      "SalesOrderByItem": "按物品报告销售订单",
      "SalesOrderByCustomer": "按客户报告销售订单",
      "ShipmentWithOnhandReport": "带有现有库存的装运报告",
      "ShipmentOverdueReport": "装运逾期报告",
      "ShipmentStatusWiseReport": "按状态报告的装运",
      "ShipmentItemWiseReport": "按物品报告的装运",
      "ProductionReconciliation": "生产对账",
      "MaterialAnalysisReport": "物料分析报告",
      "CertificateofAnalysis": "分析证书",
      "TruckDeliveryReport": "卡车交付报告",
      "Customization": "定制",
      "TaskSetup": "任务设置",
      "Accounts Payable": "应付账款",
      "Accounts Receivable": "应收账款",
      "General Ledger": "总账",
      "Bank/Cash": "银行/现金",
      "Finance Configuration": "财务配置",
      "R and D": "研发",
      "BOM": "物料清单",
      "Routing": "工艺路线",
      "Production": "生产",
      "ProcessCell": "工艺单元",
      "Costing": "成本核算",
      "MPS/MRP": "MPS/MRP",
      "SDS": "SDS",
      "CustomerMaster": "客户主数据",
      "CustomerSalesperson": "客户销售员",
      "BillofLadingInventoryInfo": "提单库存信息",
      "BillofLadingShipToInfo": "提单收货信息",
      "BillofLadingSetup": "提单设置",
      "CustomerItem": "客户-物品",
      "CustomerClass": "客户类别",
      "CustomerClassItem": "客户类别-物品",
      "CustomerSaleableItems": "客户可销售物品",
      "CustomerGroupSaleableItems": "客户组可销售物品",
      "CustomerGroup": "客户组",
      "SalesApproverGroup": "销售审批组",
      "SOSeriesMaster": "销售订单系列主数据",
      "DISeriesMaster": "DI系列主数据",
      "SalesSetup": "销售设置",
      "Sample Management": "样品管理",
      "NPD/SRM": "NPD/SRM",
      "CRM": "CRM"
    },
    "PublisherPortalTitle": "发布者门户",
    "UserManagementTitle": "用户管理",
    "ListExportToExcel": "导出到Excel",
    "ListExportToPdf": "导出为PDF",
    "UserManagementAddUser": "添加用户",
    "ListPrint": "打印",
    "ListColumn": "列",
    "ListPermissions": "权限",
    "CommonInvitedBy": "邀请人",
    "ListJoinedOn": "加入时间",
    "ListRole": "角色",
    "UserAdmin": "管理员",
    "CommonOther": "其他",
    "CommonStatus": "状态",
    "UserActive": "活跃",
    "UserInActive": "非活跃",
    "CommonAction": "操作",
    "UserAddForm": "新用户表单",
    "UserEditForm": "编辑用户表单",
    "CommonFirstName": "名字",
    "CommonFirstNameRequired": "名字是必填项。",
    "CommonLastName": "姓氏",
    "CommonLastNameRequired": "姓氏是必填项。",
    "CommonInviteEmail": "邀请电子邮件",
    "CommonEmail": "电子邮件",
    "CommonEmailRequired": "电子邮件是必填项。",
    "CommonInvalidEmail": "无效的电子邮件地址。",
    "CommonSetPassword": "设置密码",
    "CommonPassword": "密码",
    "CommonPasswordRequired": "密码是必填项。",
    "CommonInvalidPassword": "无效的密码。",
    "CommonPhone": "电话",
    "CommonInvitedOn": "邀请时间",
    "CommonInvite": "邀请",
    "CommonCancel": "取消",
    "CommonSave": "保存",
    "CommonUser": "用户",
    "CommonConcurrencyError": "请刷新您的屏幕，然后重试。",
    "CommonUnhandleError": "抱歉，发生了错误，请稍后重试。我们将感谢任何反馈或详细说明出了什么问题。",
    "CommonBrandingSettings": "品牌",
    "CommonBusinessName": "商业名称",
    "CommonSelectTheme": "选择主题",
    "CommonConfiguration": "配置",
    "CommonBasicDetails": "基本详情",
    "CommonCompany": "公司名称",
    "CommonCompanyNameIsRequired": "公司名称是必填项",
    "CommonBusinessID": "业务ID",
    "CommonCompanyID": "公司ID",
    "CommonAddress": "地址",
    "CommonAddressIsRequired": "地址是必填项",
    "CommonPrimaryAdmin": "主管理员",
    "CommonPreAdminEmail": "预管理员电子邮件",
    "CommonBusinessPortalURL": "业务门户网址",
    "CommonPartnerPortalURL": "合作伙伴门户网址",
    "CommonSubscriptionDetails": "订阅详情",
    "CommonPlanName": "计划名称",
    "CommonWantToChange?": "想要更改吗？",
    "CommonActivationDate": "激活日期",
    "CommonEndDate": "结束日期",
    "CommonMaximumUsers": "最大用户数",
    "CommonPaymentCycle": "付款周期",
    "CommonPriceInUSD": "价格（美元）",
    "CommonGracePeriod": "宽限期（天）",
    "CommonAutoRenewal": "自动续订",
    "CommonCreditCardInfo": "信用卡信息",
    "CommonCreditCardNumberIsRequired": "信用卡号是必填项",
    "CommonChange": "更改",
    "CommonConnectorConfig": "连接器配置",
    "CommonCapabilityConnectionString": "能力连接字符串",
    "CommonTestConnection": "测试连接",
    "CommonSuccess": "成功",
    "CommonCapabilityStringIsRequired": "能力字符串是必填项",
    "CommonConnectorConnectionString": "连接器连接字符串",
    "CommonFailed": "失败",
    "CommonConnectorStringIsRequired": "连接器字符串是必填项",
    "CommonPaymentReceivableSettings": "应收款项设置",
    "CommonPrimaryAC": "主账户",
    "CommonPrimaryAccountNumberIsRequired": "主账户号码是必填项",
    "CommonAddAnotherAccount": "添加另一个账户",
    "ComonSelectPermission": "请选择至少一项权限",
    "CommonAlert": "警告",
    "CommonCustomerNameRequired": "客户姓名是必填项。",
    "CommonRefIdRequired": "需要客户RefId。",
    "Freight Master": "货运大师",
    "CommonLanguage": "语言",
    "CommonCurrency": "货币",
    "CommonTimeZone": "时区",
    "CommonDateFormat": "日期格式",
    "CommonInvoiceNameRequired": "发票名称是必填项。",
    "CommonInvoicenumberRequired": "发票号码是必填项。",
    "CommonInvoicePoNumbeRequired": "PO号码是必填项。",
    "CommonInvoiceOrderNumberRequired": "订单号是必填项。",
    "CommonInvoicAmountRequired": "金额是必填项。",
    "CommonStreet1Required": "街道1是必填项。",
    "CommonCityRequired": "城市是必填项。",
    "CommonStateRequired": "州是必填项。",
    "CommonCountryRequired": "国家是必填项。",
    "CommonZipcodeRequired": "邮政编码是必填项。",
    "CommonInvoiceItemDescriptionRequired": "项目描述是必填项。",
    "CommonInvoiceItemCodeRequired": "项目代码是必填项。",
    "CommonInvoiceItemPrice": "项目价格是必填项。",
    "CommonReinvite": "重新邀请",
    "CommonInvited": "已邀请",
    "CommonActive": "活跃",
    "CommonInactive": "非活跃",
    "CommonPayable": "应付款",
    "CommonPay": "支付",
    "CommonSaveInvoiceAndGenerateUrl": "创建发票并生成快捷支付链接",
    "CommonReceipt": "收据",
    "CommonPaymentStatus": "交易状态",
    "CommonPaymentID": "交易ID",
    "CommonAccountCardNo": "账户# / 卡号#",
    "CommonAccountOrCard": "账户 / 卡片",
    "CommonRefreshstatus": "刷新状态",
    "CommonPaymentReceipt": "交易收据",
    "CommonPaymentService": "交易服务",
    "CommonInvoiceCurrentStatus": "发票当前状态",
    "CommonInvoiceInvoiceOriginalAmount": "发票原始金额",
    "CommonContactPhone": "联系电话",
    "CommonName": "名称",
    "CommonWebsite": "网站",
    "CommonFaxNumber": "传真号码",
    "CommonZipCode": "邮政编码",
    "CommonCountry": "国家",
    "CommonState": "州",
    "CommonCity": "城市",
    "CommonStreet1": "街道1",
    "CommonStreet2": "街道2",
    "CommonStreet3": "街道3",
    "CommonBillingAddress": "账单地址",
    "CommonCustomerID": "客户ID",
    "CommonCustomerName": "客户名称",
    "CommonTax": "税",
    "CommonShipping": "运费",
    "CommonDiscount": "折扣",
    "CommonSubTotal": "小计",
    "CommonLineItemOn": "项目于",
    "CommonDueDate": "到期日期",
    "CommonGeneratedOn": "生成日期",
    "CommonOrderID": "订单ID",
    "CommonPONumber": "采购订单号",
    "CommonInvoiceName": "发票名称",
    "CommonInvoiceNumber": "发票ID",
    "CommonOrderInfo": "订单信息",
    "CommonCustomerInfo": "客户信息",
    "CommonInvoiceDetails": "发票详情",
    "CommonPaidAmount": "已支付金额",
    "CommonCustomerNotes": "客户备注",
    "CommonCustomerNote": "客户备注",
    "CommonItemCode": "物品代码",
    "CommonQuantity": "数量",
    "CommonPrice": "价格",
    "CommonPricePerunit": "单价",
    "CommonTotal": "总计",
    "CommonLastMonth": "上个月",
    "CommonLast3Months": "过去3个月",
    "CommonLast6Months": "过去6个月",
    "CommonThisYear": "今年",
    "CommonDeletedInvoices": "已删除的发票",
    "CommonApply": "应用",
    "CommonOriginal": "原始",
    "CommonOutstanding": "未支付",
    "CommonAmountPayable": "应付金额",
    "CommonPaymentMode": "交易模式",
    "CommonACHPayment": "ACH支付",
    "CommonACH": "ACH",
    "CommonBankName": "银行名称",
    "CommonBankAccountName": "银行账户名称",
    "CommonAccountNumber": "账户号码",
    "CommonABARoutingNumber": "ABA路由号码",
    "CommonAccountType": "账户类型",
    "CommonSECCode": "SEC代码",
    "CommonTrermsAgreement": "我同意从我的上述银行账户进行付款。",
    "CommonNotes": "备注",
    "CommonPaymentForm": "付款表单",
    "CommonCreditCardPayment": "信用卡付款",
    "CommonPaymentOn": "交易时间",
    "CommonContactPersonDetails": "联系人详情",
    "CommonVoidPayment": "作废",
    "CommonRefundPayment": "退款",
    "CommonAmount": "金额",
    "CommonSubTotalAmount": "小计是必填项。",
    "Commonblank": "(空白)",
    "CommonRequiredValidation": "此信息为必填项。",
    "CommonIpaymentBusinessPortal": "iPayment业务门户",
    "CommonVersion": "版本",
    "CommonChangePassword": "更改密码",
    "CommonCurrentPassword": "当前密码",
    "CommonForgotYourPassword?": "忘记密码？",
    "CommonNewPassword": "新密码",
    "CommonConfirmPassowrd": "确认密码",
    "CommonSignInToYourCompany": "登录到您的企业",
    "CommonUpcomingPayments": "即将到期的付款",
    "CommonRecentPayment": "最近的付款",
    "CommonTotalOpenInvoices": "总未支付发票",
    "CommonPartialPaidInvoicesOpen": "部分支付的发票（未完成）",
    "CommonTotalPaidInvoices": "总已支付发票",
    "CommonPaidInvoicesLastWeek": "上周已支付的发票",
    "CommonPaidLastWeek": "上周支付 $",
    "CommonPaymentsDoneInUSD": "以美元完成的付款",
    "CommonEditTicketForm": "编辑工单表单",
    "CommonCreatedBy": "创建者",
    "CommonCreatedOn": "创建时间",
    "CommonContactEmail": "联系电子邮件",
    "CommonCustomerDetails": "客户详情",
    "CommonIssueDetails": "问题详情",
    "CommonTitle": "标题",
    "CommonTitleIsRequired": "标题是必填项。",
    "CommonDescription": "描述",
    "CommonDescriptionIsRequired": "描述是必填项。",
    "CommonTicketID#": "工单ID",
    "CommonPriority": "优先级",
    "CommonAssignedTo": "分配给",
    "CommonModifiedOn": "修改时间",
    "CommonModifiedBy": "修改者",
    "CommonAttachment": "附件",
    "CommonAddYourComments": "添加您的评论",
    "CommonAddYourComment": "添加您的评论",
    "CommonComments": "评论",
    "CommonDeletedTickets": "已删除的工单",
    "CommonTenantName": "租户名称",
    "CommonLow": "低",
    "CommonMedium": "中",
    "CommonHigh": "高",
    "CommonOpen": "打开",
    "CommonOnHold": "保持",
    "CommonResolved": "已解决",
    "CommonClosed": "已关闭",
    "CommonNewTicketForm": "新工单表单",
    "CommonCreate": "创建",
    "CommonBusinessDetails": "其他详情",
    "CommonAddTicket": "新工单",
    "CommonTicketId": "工单ID",
    "CommonNewCustomerForm": "新客户表单",
    "CommonGeneral": "常规",
    "CommonPaymentDetails": "交易详情",
    "CommonContactInfo": "联系信息",
    "CommonAdminUserDetails": "管理员用户详情",
    "CommonApplicationsDetails": "应用程序详情",
    "CommonEnabledServices": "启用的服务",
    "CommonCustomerPortalURL": "客户门户网址",
    "CommonCreditCardDetails": "信用卡详情",
    "CommonSavedCreditCards": "已保存的信用卡",
    "CommonNameOnCard": "卡上的名称",
    "CommonCardExpiry": "卡片到期",
    "CommonCardNumber": "卡片号码",
    "CommonExpiry": "到期",
    "CommonCVV": "CVV",
    "CommonCardType": "卡片类型",
    "CommonAddCreditCard": "添加信用卡",
    "CommonACHPaymentDetails": "ACH支付详情",
    "CommonCustomerAddress": "客户地址",
    "CommonSameAsAboveAddress": "同上地址",
    "CommonSaveInvite": "保存并邀请",
    "CommonEditCustomerForm": "编辑客户表单",
    "CommonCustomer": "客户",
    "CommonAddCustomer": "添加客户",
    "CommonID": "ID",
    "CommonOpenSalesOrders": "未完成的销售订单",
    "CommonInvoice": "发票",
    "CommonUpcomingDeliveryDate": "即将交付",
    "CommonLastDeliveryOn": "上次交付",
    "CommonTotalSalesOrder": "总销售订单",
    "CommonPending": "待处理",
    "Common(Pending)": "(待处理)",
    "CommonDetails": "详情",
    "CommonDesktop": "桌面",
    "CommonSMS": "短信",
    "CommonHelpDeskNotifications": "帮助台通知",
    "CommonMyTicketStatusIsChanged": "我的工单状态已更改。",
    "CommonCustomerTicketStatusIsChanged": "客户工单状态已更改。",
    "CommonMyTicketIsReassigned": "我的工单已重新分配",
    "CommonCustomerTicketIsReassigned": "客户工单已重新分配。",
    "CommonMyTicketPriorityIsChanged": "我的工单优先级已更改。",
    "CommonCustomerTicketPriorityIsChanged": "客户工单优先级已更改。",
    "CommonNewCommentAddedInMyTicket": "我的工单中添加了新评论。",
    "CommonNewCommentAddedInCustomerTicket": "客户工单中添加了新评论。",
    "CommonInvoiceNotifications": "发票通知",
    "CommonInvoicePaymentIsReceived": "发票付款已收到。",
    "CommonCustomersReport": "客户报告",
    "CommonLastWeek": "上周",
    "CommonFrom": "从",
    "CommonTo": "至",
    "CommonTotalInvoices": "总发票数",
    "CommonOpenInvoices": "未支付的发票",
    "CommonCustomerWisePaymentReport": "客户付款报告",
    "CommonPartialPaidInvoices": "部分支付的发票",
    "CommonPaidInvoices": "已支付的发票",
    "CommonCreditAmount": "信用金额",
    "CommonInvoicesReport": "发票报告",
    "CommonPaidOn": "支付日期",
    "CommonAmountPaid": "已支付金额",
    "CommonPaymentReceivedReport": "收到的付款报告",
    "CommonPaymentType": "付款类型",
    "CommonInvoiceID": "发票ID",
    "CommonOriginalAmount": "原始金额",
    "CommonPortalUsersReport": "门户用户报告",
    "CommonTicketsReport": "工单报告",
    "CommonInvoicesDetails": "发票详情",
    "CommonBankAccountNameIsRequired ": "银行账户名是必填项。",
    "AccountNumberIsRequired": "账户号码是必填项。",
    "CommonABARoutingNumberIsRequired": "ABA路由号码是必填项。",
    "CommonOriginated": "发起",
    "CommonReturned": "已退回",
    "CommonSetteled": "已结算",
    "CommonOk": "确定",
    "CommonMsgPaymentHistory": "您可以关闭此窗口并在交易历史中查看当前状态",
    "CommonInvoiceNumb": "发票号码",
    "CommonPaid": "已支付",
    "CommonDue": "到期",
    "CommonBlueStar": "蓝星",
    "CommonBillToAddress": "账单寄送地址",
    "CommonlineItemsOn": "行项目",
    "CommonVeriCheckACH": "VeriCheck ACH",
    "CommonVoided": "已作废",
    "CommonVoid": "作废",
    "CommonVoidRequested": "作废请求中",
    "CommonRefundRequested": "退款请求中",
    "CommonRefunded": "已退款",
    "CommonRefundCancelled": "退款已取消",
    "CommonVeriCheckACH ": "VeriCheck ACH",
    "CommonMonthly": "每月",
    "CommonQuartly": "季度",
    "CommonHalfyearly": "半年",
    "CommonYearly": "每年",
    "CommonNewInvoiceForm": "新发票表单",
    "CommonSTEP": "STEP",
    "CommonPrefix": "前缀",
    "Commonselect": "选择",
    "CommonAddNew": "添加新",
    "CommonNumber": "编号",
    "CommonTaxRate": "税率",
    "CommonAddMoreItems": "添加更多项目",
    "CommonNext": "下一步",
    "CommonBack": "返回",
    "CommonDone": "完成",
    "CommonLastLogin": "上次登录：",
    "CommonAdmin": "管理员",
    "CommonBusinessPortal": "企业门户",
    "CommonMyProfile": "我的个人资料",
    "CommonChangePassword ": "更改密码",
    "CommonSync": "同步",
    "CommonPreferences": "首选项",
    "CommonAbout": "关于",
    "CommonLogout": "注销",
    "CommonToggleNavigation": "切换导航",
    "CommonHome": "首页",
    "CommonCustomers": "客户",
    "CommonInvoices": "发票",
    "CommonPaymentHistory": "交易历史",
    "CommonReports": "报告",
    "CommonPaymentReceived": "收到的付款",
    "CommonCustomerWisePayment": "按客户付款",
    "PortalUsers": "门户用户",
    "CommonTickets": "工单",
    "CommonBusinessPortalSettings": "企业门户设置",
    "CommonConfigurations": "配置",
    "CommonAlerts": "警报",
    "CommonHelpDesk": "帮助台",
    "CommonCustomerTickets": "客户工单",
    "CommonMyTickets": "我的工单",
    "CommonDocumentation": "文档",
    "CommonPoweredBy": "由...提供支持",
    "CommonCompanyPortalSettings": "公司门户设置",
    "CommonCustomerPortalSettings": "客户门户设置",
    "CommonDelete": "删除",
    "CommonNoResultFound": "未找到结果",
    "CommonPaymentDate": "交易日期",
    "CommonInvoicesStatus": "发票状态",
    "CommonPaymentsDoneInLast6Months": "过去6个月的付款",
    "CommonRecentTranscations": "最近的交易",
    "CommonCompletedOrder(Closed)": "已完成",
    "CommonOpenOrders(Open)": "未完成",
    "CommonPartialDeliveredOrder(Open)": "部分交付",
    "CommonServices": "服务",
    "CommonPartnerCompanySubDomain": "合作伙伴公司子域",
    "CommonPortalDetails": "门户详细信息",
    "CommonPortalURL": "门户网址",
    "CommonEdit": "编辑",
    "CommonAddAnAccount": "添加帐户",
    "CommonPayments": "付款",
    "CommonNewAttachmentAddedInMyTicket": "我的工单中添加了新附件。",
    "CommonNewAttachmentAddedInCustomerTicket": "客户工单中添加了新附件。",
    "CommonRefreshStatus": "刷新状态",
    "CommonID#": "ID#",
    "CommonSubscription": "订阅",
    "CommonCompanySubDomain": "公司子域",
    "CommonMyPortalURL": "我的门户网址",
    "CommonPortalLocalizationSettings": "门户本地化",
    "CommonDeletedOn": "删除日期",
    "CommonDeletedBy": "删除者",
    "CommonNewInvoiceisgenerated": "生成了新发票。",
    "CommonInvoicepaymentstatusischanged": "发票付款状态已更改。",
    "CommonExistingInvoiceiscancelled": "现有发票已取消。",
    "CommonOrderId": "订单ID",
    "CommonStartDate": "开始日期",
    "CommonNextPaymentdate": "即将到期的交易日期",
    "CommonRecurringPeriod": "支付频率",
    "CommonRecurringTerms": "支付条款",
    "CommonTermAmount": "每期金额",
    "CommonRemainingPayCounts": "剩余支付次数",
    "CommonOrderAmount": "订单金额",
    "CommonAddRecurring": "添加重复",
    "CommonOrderIdRequired": "订单ID是必需的。",
    "CommonRecurringTermRequired": "条款应大于0。",
    "CommonRecurringTermAmountRequired": "条款金额应大于0。",
    "CommonWebsiteValidation": "无效的网站URL。",
    "CommonNoRecordsAvailable": "尚未创建记录。",
    "CommonPaymentDone": "付款完成",
    "CommonPaymentDoneReport": "付款完成报告",
    "CommonByJoiningYouAgreeToOur": "加入即表示您同意我们的",
    "CommonTerms": "条款",
    "CommonPrivacyPolicy": "隐私政策。",
    "CommonAnd": "和",
    "CommonEnterYourCompanyID": "输入您的企业URL",
    "CommonDontRememberCompanyID": "不记得您的子域吗？",
    "CommonClickHere": "点击这里",
    "CommonWantToCreate": "想创建新的企业账户吗？",
    "CommonFindMyCompanyID": "查找我的子域！",
    "CommonFindMyCompanyIDTitle": "我们将向您发送一封电子邮件以确认您的登录ID，并通过它找到您的子域，以便您可以加入。",
    "CommonEnterYourEmail": "输入您的电子邮件",
    "CommonContinue": "继续",
    "CommonCheckYourEmail": "查看您的电子邮件！",
    "CommonCheckYourTitle": "我们已向您发送了一封包含",
    "CommonGetStartedTitle": "单击链接开始使用。",
    "CommonEnteredWrongEmail": "输入错误的电子邮件？",
    "CommonItemName": "项目名称",
    "CommonQuickpay": "生成Quickpay网址",
    "PFCommonPermission": "权限",
    "PFCommonPermissions": "权限",
    "PFCommonPortalUsers": "门户用户",
    "PFCommonUsers": "用户",
    "PFCommonUser": "用户",
    "PFCommonActive": "活跃",
    "PFCommonInActive": "非活跃",
    "PFCommonAdmin": "管理员",
    "PFCommonAction": "操作",
    "PFCommonPending": "待处理",
    "CommonPortalOwnerName": "门户所有者名称",
    "CommonPoweredByText": "由...提供支持",
    "CommonCopyrightText": "版权",
    "CommonPublisherPortalTheme": "出版商门户主题",
    "CommonTenantTickets": "企业工单",
    "CommonTenantID": "企业ID",
    "CommonAdd": "添加",
    "CommonDragDropFileText": "将文件拖放到此处或单击上传。",
    "CommonValidFileFormatMsg": "请输入有效的文件格式。支持的文件格式为：JPG、JPEG、TIFF、GIF、PNG、WEBP、SVG、BMP、TIF、ICO。",
    "CommonError": "错误",
    "CommonFileSizeError": "文件大小过大。请选择大小不超过10 MB的文件。",
    "CommonMoreThanOneFileError": "不允许多个文件",
    "CommonOrderNameRequired": "订单名称是必需的。",
    "CommonPackageNameRequired": "需要包类型。",
    "CommonFillAllRequiredFeildErrorMsg": "请填写必填字段并提供有效数据。",
    "CommonContactUs": "联系我们",
    "CommonContactFormTitle": "在下面输入您的消息。我们将尽快回复您！",
    "CommonMessage": "消息",
    "CommonMailingAddress": "邮寄地址",
    "CommonSend": "发送",
    "CommonUpcomingShipments": "即将发货",
    "CommonRecentShipments": "最近的发货",
    "CommonDeliveryID": "交货ID",
    "CommonPostedOn": "发布于",
    "CommonShippingNo": "运输号",
    "CommonShipmentHistory": "发货历史",
    "CommonTrackingNo": "跟踪号",
    "CommonPackages": "包裹",
    "CommonCarrier": "承运商",
    "CommonDestination": "目的地",
    "CommonPickUpOn": "取货日期",
    "CommonDeliveredOn": "送达日期",
    "CommonDeliveryDate": "交货日期",
    "CommonOrderName": "订单名称",
    "CommonNoPackageValidationMessage": "必须至少添加一个包裹以获取运费报价。",
    "CommonNoCarrierValidationMessage": "至少必须订阅一个承运商。",
    "CommonPlanSelectionValidationMessage": "选择有效的承运商计划。",
    "CommonGenerateQuoteAgainValidationMessage": "表单已更改。请重新生成报价。",
    "CommonAddressDetails": "地址详细信息",
    "CommonConfigurationSavedMsg": "您的更改已成功保存。",
    "Common4X6LabelPrinter": "4X6标签打印机",
    "CommonTraditionalPrinters": "传统打印机",
    "CommonCarriersInfo": "承运商信息",
    "CommonAddresses": "地址",
    "CommonNewAddress": "新地址",
    "CommonValidateAddress": "验证地址",
    "CommonVerifiedBy": "验证者",
    "CommonLabel": "标签",
    "CommonPrintingInfo": "打印信息",
    "CommonContactPerson": "联系人",
    "CommonDecimalValues": "小数值",
    "CommonGroupingDecimalSeparator": "分组和小数分隔符",
    "CommonGroupingValues": "分组值",
    "CommonCurrencyLocalization": "货币本地化",
    "CommonDesignation": "职务",
    "CommonSubDomain": "子域",
    "CommonAccountNo": "账号",
    "CommonValidate": "验证",
    "CommonNoOfDeliveries": "交货数量",
    "CommonNoOfSalesOrderDeliveries": "销售订单数量",
    "CommonNoOfSalesAmount": "销售金额",
    "CommonTopMostValuableCustomer": "最有价值的前5名客户",
    "CommonTotalOpenOrders": "总待处理订单",
    "CommonPartialDeliveredOrders": "部分已交付订单",
    "CommonCompletedOrders": "已完成订单",
    "CommonPendingShipping": "待发货",
    "CommonTotalShipping": "总运送",
    "CommonTotalSales": "总销售额",
    "CommonTotalSalesinLast6Months": "过去6个月的总销售额",
    "CommonSalesOrdersStatus": "销售订单状态",
    "CommonSalesOrders": "销售订单",
    "CommonShippingStatus": "运输状态",
    "CommonShipmentByCarrier": "承运商发货",
    "CommonTotalDeliveriesinlast6months": "过去6个月的总交货数量",
    "CommonQty": "数量",
    "CommonValue": "价值",
    "CommonTop5mostvaluablecustomers": "前5名最有价值的客户",
    "CommonDeliveriesAcrossGlobe": "全球交货",
    "CommonAddressErrorMsg": "至少需要一个地址。",
    "CommonCurrencyLocalizationsConfirmMsg": "这将永久保存您的货币本地化",
    "CommonConfirmation": "确认",
    "CommonService": "服务",
    "CommonShipConfirm": "您是否要发运此销售订单？",
    "CommonCarriers": "承运商",
    "CommonShipFromAddresses": "发货地址",
    "CommonBusinessAddresses": "企业地址",
    "CommonNewItem": "新项目",
    "CommonPackageItemEqlDistributionMsg": "销售订单项目与包装项目之间存在不匹配。请调整更改并重新生成报价。",
    "CommonPackageAllItemDistributionMsg": "请在生成报价之前将销售订单的所有项目打包。",
    "CommonZeroItemInItemMaster": "在项目主文件中没有可用的项目。请先在项目主文件中添加项目。",
    "CommonShipFromAddressErrorMsg": "至少需要一个发货地址。",
    "TOTALRECORDS": "总记录数",
    "VIEWITEMLOCATION": "查看物品位置",
    "SELECTLOTFEATUREWISE": "选择批次功能",
    "ITEMKEY": "物品键",
    "DESCRIPTION": "描述",
    "LOCATION": "位置",
    "LOCATIONDITAIL": "位置详细信息",
    "LOTBINDITAIL": "批次/箱号详细信息",
    "STOCKUOM": "库存单位",
    "DISPLAYUOM": "显示单位",
    "COMMITTOPRODUCTION": "提交给生产的数量",
    "COMMITTOSALES": "提交给销售的数量",
    "DESC1": "描述1",
    "EOQ": "EOQ",
    "INCLASSKEY": "在类别键",
    "MULTIPLEBINSREQ": "需要多个储物箱",
    "QTYONHAND": "库存数量",
    "QTYONORDER": "订购数量",
    "QTYOVERSOLD": "超售数量",
    "SERIALLOTFLG": "序列批次标志",
    "STATUSCODE": "状态代码",
    "STOCKUOMCODE": "库存单位代码",
    "TRANSITIN": "在途中",
    "TRANSITOUT": "运输出",
    "QTYUNDERPURCHASEQC": "采购QC数量",
    "QTYUNDERINVENTORYQC": "库存QC数量",
    "QTYONORDERDETAILS": "订单详情数量",
    "QTYCOMMITTOSALESDETAILS": "销售承诺详情数量",
    "QTYCOMMITTOPRODUCTIONDETAILS": "生产承诺详情数量",
    "TRANSACTION": "交易",
    "TRANSACTIONNO": "交易编号",
    "TRANSACTIONDATE": "交易日期",
    "TRANSACTIONTYPE": "交易类型",
    "AVGLOTSTR": "平均批次强度",
    "LOTSTRENGTH": "批次强度",
    "QTYREQ": "所需数量",
    "LOTQTYSEL": "批次数量已选",
    "SOLVENTQTY": "溶剂数量已选",
    "STRDSTRENGTH": "标准强度",
    "COMMITDOCNO": "承诺文档编号",
    "VENDKEY": "供应商键",
    "TOTALHOLD": "总保留",
    "TOTAL": "总计",
    "CUSTKEY": "客户键",
    "QTYCOMMITTOSALES": "销售承诺数量",
    "QTYCOMMITTOPRODUCTION": "生产承诺数量",
    "QTYCOMMIT": "承诺数量",
    "BINNO": "箱号",
    "DATEEXPIRY": "到期日期",
    "DATEQUARANTINE": "隔离日期",
    "DATERECEIVED": "接收日期",
    "LOTNO": "批次号",
    "LOTSTATUS": "批次状态",
    "QTYCOMMITSALES": "销售承诺数量",
    "RECUSERID": "接收用户ID",
    "RECDATE": "接收日期",
    "VENDORKEY": "供应商键",
    "VENDORLOTNO": "供应商批次号",
    "QUANTITY": "数量",
    "SALESUOMCODE": "销售单位代码",
    "QTYCOMMITPROD": "生产承诺数量",
    "ITEMTYP": "物品类型",
    "PRICEGRP": "价格组",
    "STDCOST": "标准成本",
    "AVGCOST": "平均成本",
    "LSTCOST": "最新成本",
    "BASEPRICE": "基准价格",
    "REVACCT": "收入账户",
    "SALESTAXKEY": "销售税键",
    "DESC2": "描述2",
    "SALETOSTKCNVFCTR": "销售到库存换算因子",
    "INACCT": "在账户",
    "InserLineInventory": "库存查找",
    "InsertLineInventory": "库存查找",
    "InserLineNonInventory": "非库存查找",
    "InsertLineNonInventory": "非库存查找",
    "InsertLineCustFavorite": "客户喜爱查找",
    "InsertLineCustFavourate": "客户喜爱查找",
    "CustFavouriteItems": "添加客户项目",
    "AddCustItem": "添加客户项目",
    "Custkey": "客户键",
    "Shipkey": "发运到",
    "Reference": "参考",
    "Salespkey": "销售人员",
    "Tax_key": "税率",
    "Tax": "税收",
    "AccountKey": "账户图表",
    "PromAccountKey": "账户图表",
    "Fobkey": "FOB（离岸价）",
    "Commentkey": "评论",
    "Shipviakey": "通过运输",
    "Territkey": "领土",
    "Termskey": "条款",
    "Location": "位置",
    "RebateKey": "返利",
    "Recurkey": "循环周期",
    "Custcntry": "国家",
    "PromAccountKeyHdr": "促销账户键",
    "Currency_Key": "货币键",
    "ItemKey": "物品键",
    "ITEMKEYLOOKUP": "物品键查找",
    "ITEMDESC": "物品描述",
    "Description": "描述",
    "FEATUREIDCANNOTBEBLANK": "功能ID不能为空",
    "FEATUREIDANDVALUECANNOTBESAME": "请勿在多行中添加相同的功能ID和值",
    "WAREHOUESTATUSTITLE": "处理报告",
    "InsertLineKit": "KIT查找",
    "InsertLineKitItem": "KIT查找",
    "RELEASEORDERALERTMSG": "您要发布此订单吗？",
    "CRDLIMITPASSWORDCAPTION": "输入密码以保存",
    "SALESPARAMETERMSG": "未定义销售订单输入参数",
    "VIEWSALESCONTRACT": "查看销售合同",
    "NOTHOLDCANCELLED": "无法保留已取消的订单",
    "NOTHOLDCLOSED": "无法保留已关闭的订单",
    "HOLDRESAONALERTMSG": "请说明保留的原因。",
    "WAREHOUSESOSAVEALERT": "保存记录。",
    "AlternateItemKey": "替代物品",
    "SERIES": "系列",
    "SERIES_DESC": "系列描述",
    "ORDER_TYPE": "订单类型",
    "WAREHOUSETRANSFER": "仓库转移详情",
    "ContractNo": "合同编号查找",
    "CONTRACTNO": "合同编号",
    "COMMITMENTAMT": "承诺金额",
    "CONTRACTDATE": "合同日期",
    "COSTORQTYCOMMITMENT": "成本或数量承诺",
    "EFFECTIVEDATE": "生效日期",
    "EXPDATE": "到期日期",
    "ORIGINALAMT": "原始金额",
    "PRICEQUOTED": "报价",
    "CustomerItem": "客户查找",
    "CUSTOMERITEMS": "客户物品查找",
    "PurchaseUomCode": "采购单位代码",
    "CustitemKey": "CustItemKey",
    "OtempItemKey": "物品键查找",
    "NOLINESELECTEDMSG": "未选择任何行。",
    "OtempLocation": "位置查找",
    "GOTOSHIPMENT": "转至装运",
    "REQUIREDFREIGHTALERMSG": "需要运费。是否要继续？",
    "FavoriteItems": "收藏物品",
    "LocationKey": "位置键",
    "SalesOrderEntryList": "销售订单",
    "PRICERECALCULATEMSG": "价格将被重新计算。",
    "QTYCOMMITTED": "承诺数量",
    "QTYQUARANTINED": "隔离数量",
    "QTYEXPIRED": "过期数量",
    "QTYAVAILABLE": "可用数量",
    "CUSTOMERKEY": "客户键",
    "LOTCOMMITMENTDETAILS": "批次承诺详情",
    "CONTAINERIZEDLOTS": "集装箱批次",
    "SALESISSUES": "销售问题",
    "NEGATIVEADJUSTMENT": "负调整",
    "POSITIVEADJUSTMENT": "正调整",
    "PURECEPIT": "采购收据",
    "PURETURN": "采购退货",
    "MFGISSUES": "制造问题",
    "MFGRETURN": "制造退货",
    "INVENTORYTRAN": "库存转移",
    "INVADJP": "库存正调整",
    "INVADJN": "库存负调整",
    "DAMAGED": "损坏",
    "CYCLECNT": "周期计数",
    "TRANIN": "转入",
    "TRANOUT": "转出",
    "INVEDITP": "库存正编辑",
    "INVEDITN": "库存负编辑",
    "SLPROV": "销售临时",
    "SALESRETURN": "销售退货",
    "CONTAINERNO": "集装箱编号",
    "PALLETID": "托盘编号",
    "PLEASEADDCONTAINER": "请选择集装箱",
    "NEXTPALLET": "下一个托盘",
    "ESIGNATURE": "电子签名",
    "SCREENNAME": "屏幕名称",
    "DOCNO": "文档编号",
    "REQUIREDSIGNAUTH": "需要签名授权",
    "DATE": "日期",
    "REASONFORCHANGE": "更改原因",
    "MODIFIEDBY": "修改人",
    "PASSWORD": "密码",
    "USER": "用户",
    "DATETIME": "日期/时间",
    "SEQNO": "序号",
    "TESTAMNET": "证明",
    "AddSIGNATURE": "添加签名",
    "USERID": "用户ID",
    "USERNAME": "用户名",
    "TESTMENT": "证明",
    "ENTERPASSWORD": "输入密码",
    "WRONGPASSWORD": "密码错误",
    "ENTERMODIFIED": "输入修改者",
    "ENTERUSERID": "输入用户ID",
    "USERNOTAUTHORISEMSG": "用户未被授权签署此文档。",
    "USERALREADYSIGNMSG": "此用户已经签署。",
    "REQSIGNATUREMISSING": "缺少一些必需的签名。",
    "REASONMINLENGTHMSG": "更改原因必须包含至少",
    "CHARACTER": "字符。",
    "ESIGNREASONMSG": "此屏幕需要更改原因和电子签名。",
    "CHKITEMLOCAATIONMSG": "检查物品和位置。",
    "RETURNORDRECALCULATEMSG": "返回订单，无法重新计算。",
    "COMMENT": "评论",
    "TOTALSPLITQTY": "总拆分数量",
    "UNIT": "单位",
    "ITEMDESCRIPTION": "物品描述",
    "SPLITCONTAINER": "拆分集装箱",
    "SPLITQTY": "拆分数量",
    "CONVNOTFORITEMMSG": "未为物品定义换算。",
    "UNITSAREMSG": "单位为",
    "QUOTATIONTITLE": "报价/销售申请",
    "CANCELQUOTATIONALERTMSG": "取消报价？",
    "CALCULATETAXDISCOUNT": "计算税和折扣",
    "CANCELSO": "取消销售订单",
    "CLOSESO": "关闭销售订单",
    "VIEWCONTRACT": "查看合同",
    "RELEASEHOLDORDER": "释放/保留订单",
    "CHANGEOWNER": "更改所有者",
    "MAILTOCUSTOMER": "发送邮件给客户",
    "SALESORDERPEGGING": "销售订单关联",
    "SALESHISTORY": "销售历史",
    "VIEWAGEBRACKETS": "查看年龄分段",
    "LIGHTCRM": "轻型客户关系管理",
    "LADEDWEIGHT": "装载重量",
    "TRANSFERTOSO": "转移到销售订单",
    "TRANSFERTOSOMSG": "转移到销售订单？",
    "CANCELQUOTATION": "取消报价",
    "TOTALRECALCULATE": "总重新计算",
    "NOTMAINTAINLOTWITHZERO": "无法维护零数量的批次。",
    "ALLOWMINQTY": "允许最小数量",
    "ALLOWMAXQTY": "允许最大数量",
    "APPROVALS": "批准",
    "GROUP": "组",
    "GROUPDES": "组描述",
    "APPROVER": "批准人",
    "SENDEMAIL": "发送电子邮件",
    "CANCELAPPROVALS": "取消之前的批准",
    "APPROVERDATE": "批准日期",
    "EMAILID": "电子邮件地址",
    "GROUPVALIDATEMSG": "选择批准组",
    "CANCELQUOTATIONMSG": "取消报价？",
    "QUOTATIONTRANSUCCMSG": "成功转移报价",
    "CANCELVALIDATEMSG": "订单状态为已取消，无法转移",
    "TRANSFERVALIDATEMSG": "订单已经转移",
    "APPROVERVALIDATEMSG": "订单状态为已批准，无法转移",
    "SalesRequisitionList": "报价/销售申请",
    "QUOTATRANPROSPECTVALIMSG": "无法将销售报价转换为销售订单（销售申请）",
    "CUSTHOLDTRANSVALIMSG": "客户状态为暂停，无法转移",
    "CREDITLIMITVALIDATETRANMSG": "信用额度超过，无法转移",
    "CREDITLMIITTRANSHOLDALERTMSG": "信用额度超过，订单将以保留状态保存。",
    "LOTFEATURE": "批次特性",
    "CONTAINER": "容器",
    "FEATUREID": "特性ID",
    "FEATUREDESC": "特性描述",
    "VALUE": "值",
    /**----------- LANDED COST CALCULATION--- */
    "LANDEDCOSTCALCULATION": "着陆成本计算",
    "LANDEDCOSTGROUPID": "着陆成本组ID",
    "LANDEDCOSTGROUPDESC": "着陆成本组描述",
    "ACCUREDLANDEDCOSTACC": "已应计的着陆成本账户",
    "ACCUREDLANDEDCOSTACCDESC": "已应计的着陆成本账户描述",
    "LANDEDCOSTACC": "着陆成本账户",
    "LANDEDCOSTACCDESC": "着陆成本账户描述",
    "CURRENCY": "货币",
    "LANDEDCOSTID": "着陆成本ID",
    "APPORTIONEDBY": "按比例分摊",
    "PERCENTVALUE": "百分比/值",
    "DICREDMEMOTITLE": "直接发票/贷项通知",
    "DirectInvoiceList": "直接发票/贷项通知",
    "PROCESSREPORT": "处理报告",
    "DAY": "天",
    "GENERATE": "生成",
    "QTYISSUED": "发行数量",
    "QTYRECEIVE": "收到数量",
    "AVAILABLEQTY": "可用数量",
    "PONO": "采购订单编号",
    "RECEIPTNO": "收据编号",
    "ROWNO": "行号",
    "APPORTIONEDAMT": "分摊金额",
    "INCLUDEFREIGHTREBATE": "包括运费折扣",
    "RECURRED": "已重发",
    "FOREIGNAMT": "外币金额",
    "FREIGHTACCOUNT": "运费账户",
    "AMT": "金额",
    "TOTALFREIGHT": "总运费",
    "CHARTACCOUNT": "账户图表",
    "FREIGHTKEY": "运费键",
    "FREIGHTMASTER": "运费主文件",
    "FREIGHTBREAKUP": "运费拆分",
    "SCAN": "扫描",
    "PALLETNO": "托盘编号",
    "QUARANDATE": "隔离日期",
    "ITEMQTY": "物品数量",
    "ITEMQTYREM": "物品剩余数量",
    "DOCUMENTNO": "文档编号",
    "DOCLINENO": "文档行号",
    "VIEWLOTFEATURE": "查看批次特性",
    "VIEWSELECTEDLOT": "查看已选择的批次",
    "QTY": "数量",
    "SELECTLOT": "选择批次",
    "AUTOSELECT": "自动选择",
    "UNSELECTALL": "取消全选",
    "FROMCONTAINER": "从容器",
    "TOCONTAINER": "到容器",
    "CONATINERSEARCH": "容器搜索",
    "MSG": {
      "CONTACT_NAME_REQUIRED": "输入联系人姓名",
      "EMAILVALIDATEMSG": "输入有效的电子邮件",
      "PLEASEENTERTENDIGITNUMBER": "请输入10位数字",
      "NOTVALIDNO": "不是有效的号码",
      "LOTREQ": "批次号码必填。",
      "BINREQ": "必须提供Bin编号。",
      "LOTQTYGREATERFROMZERO": "批次数量必须大于零。",
      "CONTAINERQTYMISMATCH": "批次数量与所选容器数量不匹配。",
      "CONTAINERNOTMAINTAIN": "无法保存。没有为批次编号维护容器。",
      "BLOCKSHELFLIFE": "物品的货架寿命不足。",
      "AVAILABLESHELFLIFE": "可用货架寿命为",
      "REQSHELFLIFE": "，所需货架寿命为",
      "ISSUEQTYEQUALSELECTQTY": "发行数量已等于所选数量",
      "HARDALLOCATION": "在库存设置中设置使用硬分配为是。不能分配超过可用数量 - 已分配数量。",
      "ITEMNOTCONTAINERIZED": "物品没有容器。",
      "DUPLICATENO": "重复的编号",
      "SELECTEDCONTAINEREQUALTOQTY": "所选容器数量必须等于批次数量",
      "FROMTOVALUECHECK": '从值不能大于到值',
      "TOTALSPLITQTYEQUALTOQTY": "总拆分到数量必须等于可用数量",
      "QTYSPLITREQ": "拆分数量必填"
    },
    "LANDEDCOSTREQ": "需要着陆成本ID",
    "LANDEDCOSTGROUPREQ": "需要着陆成本组ID",
    "ACCUREDLANDEDCOSTREQ": "需要已应计的着陆成本账户",
    "LANDEDCOSTACCOUNTREQ": "需要着陆成本账户",
    "LANDEDCOSTSELECTIONREQ": "需要着陆成本详细数据",
    "FREIGHTDESC": "添加运费描述",
    "FREIGHTAMT": "添加运费账户",
    "QTYITEMNOTGREATER": "物品数量不应大于订单数量。",
    "QTYITEMNOTGREATERNEW": "物品数量不应大于订单中的现有数量。",
    "QTYNOTGREATERTHANORDQTY": "数量不应大于订单数量。",
    "QTYISSUEREQ": "需要发行数量",
    "REMQTYZERO": "剩余物品数量为零",
    "SERAILNOEXIST": "该物品的序列号已存在 - ",
    "QTYISSUENOTGREATERONHAND": "手头物品数量应大于发行数量。",
    "CONTAINERREQ": "需要容器",
    "BLOCKSHELFLIFELOTNO": "物品和批次编号的货架寿命不足。",
    "QUARANDATELESSTHANEXPIRYDATE": "隔离日期不能大于或等于到期日期",
    "EXPIRYGREATERTHANRECEIPTDATE": "到期日期不能小于或等于收货日期",
    "QUARANTINEGREATERTHANRECEIPTDATE": "隔离日期不能小于或等于收货日期",
    "TOTALCONTAINERQTYEXCEED": "总容器数量超过所需数量，无法生成容器。",
    "DELETECONTAINERCONFIRMATION": "已维护容器详细信息。是否要删除一些容器数据？",
    "QTYNOTGREATERTHANONE": "序列跟踪物品的发行数量不应大于一",
    "PALLETANDLOTSELECTEDSUCCESSFULLY": "已添加托盘和批次",
    "LOTSELECTEDSUCCESSFULLY": "已添加批次",
    "PALLETNOREQ": "需要托盘号",
    "FROMCONTAINERREQ": "需要来源容器",
    "TOCONTAINERREQ": "需要目标容器",
    "SEARCHBYCONATINERREQ": "需要按容器搜索",
    "ENTERCONTAINERQTY": "输入容器数量",
    "ITEMKEYREQ": "输入物品键",
    "DUPLICATELOTBINCOMBINATION": "找到重复的批次+ Bin组合（行号：",
    "CORRECTSQLQUERY": "正确的SQL查询",
    "CHECKOUTSUCCESS": "记录成功签出",
    "UNDOCHECKOUTSUCCESS": "记录成功撤消签出",
    "CHECKINSUCCESS": "记录成功签入",
    "ORDERNOREQ": "需要订单号",
    "FROMDATETIME": "需要开始日期时间",
    "TODATETIME": "需要结束日期时间",
    "PURCHASENOTPERMISSION": "您没有采购订单接收的权限",
    "SALESNOTPERMISSION": "您没有维护出货的权限",
    "TODATETIMEGREATER": "结束日期时间必须大于开始日期时间",
    "WHTRANSFEROUTNOTPERMISSION": "您没有WH转出的权限",
    "WHTRANSFERINNOTPERMISSION": "您没有WH转入的权限",
    "PRINTVOUCHER": "打印凭证",
    "PRINTDEBITMEMO": "打印借方备忘录",
    "CLOSEDORDERS": "关闭的订单",
    "PRINT": "打印",
    "LANDEDCOSTNOTONRECEIP": "尚未维护收据的着陆成本。",
    "MYTASK": "显示我的任务",
    "TASKFORRECORD": "显示此记录的任务",
    "USERNAMELBL": "用户名",
    "FORMNAME": "表单名称",
    "PRIMARYKEY": "主键",
    "ESIGNAUDITMSG": "此屏幕适用审计历史记录。在导航/关闭屏幕之前请先保存数据。单击取消返回到表单。单击“否”放弃更改。",
    "VENDORACTIVE": "活跃供应商",
    "VENDORHOLD": "暂停供应商",
    "CLOSEDELETEALERT": "无法删除关闭订单",
    "PROCESSEDDELETEALERT": "无法删除已处理订单",
    "SERIALLOTMAINTENANCE": "串行批次维护",
    "DOCUMENTTYPE": "文档类型",
    "DOCUMENTNUMBER": "文档编号",
    "ITEM": "物品",
    "DOCUMENTLINENO": "文档行号",
    "SELQTY": "已选数量",
    "SHOWBINONLY": "仅显示空箱",
    "RECEIPTDATE": "收货日期",
    "COMMITQTY": "已承诺数量",
    "EXPIRYDATE": "到期日期",
    "SHIPMENTDETAIL": "装运详情",
    "REQDATE": "请求日期",
    "PROMISEDATE": "承诺日期",
    "PODDOC": "POD文档",
    "PODRECBY": "POD接收者",
    "SHIPDATE": "发货日期",
    "TARGETSHIPDATE": "目标发货日期",
    "PODDATE": "POD日期",
    "SHIPTRACKNO": "发货跟踪号",
    "LOTQTY": "批次数量",
    "REMQTY": "剩余数量",
    "PROCESSEDCLOSEDALERT": "无法关闭已处理订单",
    "WHEREUSED": "用途",
    "GenrateID": "生成ID",
    "KEY": "关键字",
    "NODIMENSION": "在多维设置中未定义尺寸。",
    "SAVERECFIRST": "请先保存记录",
    "STATUS": "状态",
    "TRNQTY": "交易数量",
    "ORIGINALFILENAME": "原始文件名",
    "DOCUMENTTITLE": "文档标题",
    "DOCUMENTSUMMARY": "文档摘要",
    "PRIORITY": "优先级",
    "CHECKOUTBY": "签出者",
    "CHECKOUTSTATUS": "签出状态",
    "CREATEDDATE": "创建日期",
    "CREATEDBY": "创建者",
    "MODIFIEDDATE": "修改日期",
    "SHOWACTIVEONLY": "仅显示活动的",
    "READONLYOTHERUSER": "其他用户只读",
    "DOCUMENTS": "文档",
    "NOTES": "备注",
    "CHECKOUT": "签出",
    "CHECKIN": "签入",
    "UNDOCHECKOUT": "撤销签出",
    "DELETELINE": "删除行",
    "ATTACH": "附加",
    "TITLENAME": "标题名称",
    "FILENAME": "文件名",
    "SUMMARY": "摘要",
    "AUTHORIZEDGROUP": "授权组",
    "DOCUMENTCREATEDDATE": "文档创建日期",
    "DOCUMENTCREATEDBy": "文档创建者",
    "DOCUMENTMODIFIEDDATE": "文档修改日期",
    "DOCUMENTMODIFIEDBy": "文档修改者",
    "PLZSELECTFILE": "请选择文件",
    "ENTERFILENAME": "输入文件名",
    "ENTERAUTHGROUP": "输入授权组",
    "FROM": "从",
    "TO": "到",
    "SCANLOT": "扫描批次",
    "READFILEFORSUMMARY": "阅读摘要的文件",
    "SCANATTACH": "扫描并附加",
    "RECORDNEWDOCUMENT": "记录新文档",
    "QTYRECEIVED": "收到的数量",
    "VIEWPALLET": "查看托盘",
    "ASSIGNDIMID": "分配尺寸ID",
    "ASSIGNTOROW": "分配给所有行",
    "ShipViaKey": "发货方式",
    "VendCity": "供应商城市",
    "VendName": "供应商名称",
    "VouchNo": "凭证号",
    "VoucherDate": "凭证日期",
    "CustCity": "客户城市",
    "CustName": "客户名称",
    "Invdate": "发票日期",
    "SoInvoice": "销售发票号",
    "TranNo": "交易号",
    "ASSIGNDIMENSIONID": "分配尺寸ID",
    "QUERYANALYZER": "查询分析器",
    "ORDERNO": "订单号",
    "FILEEXTNOTSUPPORT": "文件扩展名不受支持",
    "FILENAMENOTMATCH": "文件名与先前文件不匹配",
    "PRINTLISTLABEL": {
      "PRINTINV": "打印发票",
      "CUSTOMERKEY": "客户关键字",
      "CUSTOMERNAME": "客户名称",
      "ORDERDATE": "订单日期",
      "ORDERTYPE": "订单类型",
      "PROMISEDATE": "承诺日期",
      "RECDATE": "收到日期",
      "RECUSERID": "收到用户ID",
      "REQUESTEDDATE": "请求日期",
      "SOTOTAL": "销售订单总计",
      "SALESORDERNO": "销售订单号",
      "SHIPTOKEY": "发货关键字",
      "STATUS": "状态",
      "TRAGETSHIPDATE": "目标发货日期",
      "HOLDINGREASON": "暂停原因",
      "TRANNO": "交易号",
      "SOINVOICE": "销售订单发票",
      "INVOICEDATE": "发票日期",
      "INVOICETOTAL": "发票总计",
      "PRINTVOUCHER": "打印凭证",
      "VOUCHNO": "凭证号",
      "FINVOUCHERNO": "财务凭证号",
      "PURCHASEORDERNO": "采购订单号",
      "VENDORKEY": "供应商关键字",
      "VENDORNAME": "供应商名称",
      "VOUCHERDATE": "凭证日期",
      "VOUCHERTOTAL": "凭证总计"
    },
    "LINEITEM": "行项目",
    "ISSUEDQTY": "发行数量",
    "HOLDORDPRINTMSG": "无法打印暂停的订单。",
    "DUPLICATE": "重复",
    "FOUND": "找到",
    "FROMLOCATION": "从位置",
    "INVENTORYTRANSFER": "库存转移",
    "INVENTORYMOVE": "库存移动",
    "DELMSG": "删除成功。",
    "PRMEMPTY": "参数不能为空",
    "SELRPTPRM": "选择报告参数",
    "PARAMETER": "参数",
    "SAVEMSG": "保存成功",
    "QUERYBUILDER": "查询构建器",
    "CLEAR": "清除",
    "TESTSQL": "测试SQL",
    "BTN_CONTACT": "联系人详细信息",
    "QUERYEDITOR": "查询编辑器",
    "TRANSFER": "转移",
    "CONTACTLIST": {
      "DELTE_HEADER": "批量主",
      "TRANSFER": "将所选行的数据传输到父屏幕。您要继续吗？",
      "CUSTOMER_KEY_REQUIRED": "输入客户关键字",
      "VEND_KEY_REQUIRED": "输入供应商关键字",
      "PROSPECT_KEY_REQUIRED": "输入展望关键字",
      "NOT_SAVED": "记录未保存。",
      "NAME": "姓名",
      "CATEGORY": "类别",
      "JOB_TITLE": "职务",
      "PHONE": "电话",
      "EMAIL": "电子邮件",
      "QUOTATION": "报价",
      "SALESORDER": "销售订单",
      "INVOICE": "发票"
    },
    "ARCHIVECONTRACT": {
      "SALESARCHIVECONT": "归档销售合同",
      "PURARCHIVECONT": "归档采购合同",
      "EXPIRYDATEFROM": "到期日期从",
      "EXPIRYDATETO": "到期日期至",
      "CUSTKEY": "客户关键字",
      "CUSTNAME": "客户名称",
      "VENDKEY": "供应商关键字",
      "VENDNAME": "供应商名称"
    },
    "MAILSETTINGS": {
      "MAILSETTINGS": "邮件设置",
      "SERVER": "服务器",
      "USEREMAIL": "用户邮箱",
      "PASSWORD": "密码",
      "PORT": "端口",
      "ENABLESSL": "启用SSL",
      "BCCMAILSENDER": "密送邮件给发件人",
      "SAVEMAILSETTING": "邮件设置保存成功"
    },
    "PURCHASEAPPROVERGRP": {
      "TITLEPR": "采购审批组",
      "TITLESR": "销售审批组",
      "TITLEFM": "公式审批组",
      "TITLESRM": "样品审批组",
      "TITLECM": "通用审批组",
      "ADDPURAPPROVERGROUP": "添加采购审批组",
      "ADDSALAPPROVERGROUP": "添加销售审批组",
      "ADDFORAPPROVERGROUP": "添加公式审批组",
      "ADDSMAPPROVERGROUP": "添加样品审批组",
      "ADDCMAPPROVERGROUP": "添加通用审批组",
      "APPROVER_GROUP": "组 ID",
      "DOC_TYPE": "文档类型",
      "DESCRIPTION": "组描述",
      "RECDATE": "记录日期",
      "RECUSERID": "记录用户 ID",
      "USERSEQNO": "用户序列号",
      "ACTION": "操作",
      "APPROVER": "审批人",
      "NAME": "姓名",
      "EMAIL": "电子邮件",
      "APPROVERINFORMATION": "审批人信息",
      "RESEQUENCE": "重新排序",
      "TYPE": "类型",
      "MSG": {
        "APPROVERNAMEREQ": "在行中输入审批人",
        "USERSEQNOREQ": "在行中输入用户序列号",
        "GROUPIDREQ": "输入组 ID",
        "ENTERUSERINFORMATION": "输入用户信息",
        "DUPLICATESEQNO": "重复的序列号",
        "APPROVEREXIST": "审批人已存在",
        "SAVESEQORDER": "请在删除行项目后保存您的记录"
      }
    },
    "GENERICFORM": {
      "BATCHMASTER": "批量主控",
      "DELMESSAGE": "删除记录？",
      "ASKSAVE": "保存记录？",
      "YES": "是",
      "NO": "否",
      "CANCEL": "取消",
      "MSGDELETE": "没有数据可删除。",
      "MSGSAVEFIRST": "首先保存记录。",
      "UPLOADPHOTO": "上传"
    },
    "RECORDAUTHORIZATION": {
      "USER": "用户",
      "USERID": "用户ID",
      "USER_DESCRIPTION": "用户名",
      "GROUPID": "组ID",
      "GROUPDESCRIPTION": "组名",
      "RECUSERID": "记录用户ID",
      "RECDATE": "记录日期",
      "TITLESR": "销售记录授权",
      "TITLEFM": "公式记录授权",
      "ADDSALRECORDAUTH": "添加销售记录授权",
      "ADDFORRECORDAUTH": "添加公式记录授权",
      "AUTHORIZEDUSER": "授权用户",
      "INSERTUSER": "插入用户",
      "READ": "读取",
      "WRITE": "写入",
      "DELETE": "删除",
      "MSG": {
        "ALREADYEXIST": "已存在",
        "USERIDREQ": "输入用户ID",
        "ENTERAUTHORIZEDUSERINFORMATION": "输入授权用户信息"
      }
    },
    "DATAVIEW": {
      "TITLE": "数据视图",
      "COMPANY": "公司ID",
      "COMPANYNAME": "公司名称",
      "SQL": "SQL",
      "EXECUTE": "执行 SQL",
      "ENTERCOMPANY": "输入公司ID",
      "ENTERSQL": "输入SQL",
      "MSG": {
        "ASKCHECK": "条记录受影响",
        "RECORDFOUND": "条记录已找到",
        "ASKSAVE": "是否继续?"
      }
    },
    "GANTTCHART": {
      "BATCHNO": "批次编号",
      "PROCESSCELL": "处理单元",
      "STATUS": "批次状态",
      "BATCHTYPE": "批次类型",
      "RESCHEDULE": "重新安排",
      "MANUAL": "手动",
      "AUTO": "自动排列",
      "GETBATCHES": "获取批次",
      "REARRANGE": "重新排列",
      "PREDECESSORBATCH": "前置批次",
      "DELAY": "延迟",
      "SEQNO": "序号",
      "COLLAPSEPANE": "折叠/展开窗格",
      "SHOWTOOLBAR": "显示/隐藏工具栏",
      "UPDATEPROCEES": "更新处理单元",
      "FORWARD": "向前",
      "BACKWARD": "向后",
      "SELECTEDBATCH": "已选择批次",
      "FORMULAITEM": "配方ID/物料键",
      "ORIGSTARTDATE": "原始计划开始日期",
      "ORIGENDDATE": "原始计划结束日期",
      "SCHEDULING": "排程",
      "PASTDUE": "过去的",
      "SNO": "序号",
      "STARTDATE": "计划开始日期",
      "ENDDATE": "计划结束日期",
      "REMOVELINK": "移除链接",
      "ASSIGNLINK": "分配链接",
      "ENTERPROCESSCELL": "请输入处理单元。"
    },
    "BININQUIRY": {
      "TITLE": "库存储位查询",
      "LOOKUPTITLE": "储位查询",
      "BIN": "储位号",
      "ITEM": "物料",
      "LOCATION": "库位",
      "LOTNUMBER": "批号",
      "ItemKey": "物料键",
      "LocationKey": "库位键",
      "LotNo": "批号",
      "QtyAvailable": "可用数量",
      "ITEMKEY": "物料",
      "LOCATIONKEY": "库位",
      "LOTNO": "批号",
      "QTYAVAILABLE": "可用数量",
      "QTYONHAND": "库存数量",
      "STOCKUOMCODE": "计量单位",
      "DESCRIPTION": "物料描述",
      "QtyOnHand": "",
      "VIEW": "查看",
      "CONTAINERTAB": "容器",
      "AISLE": "过道",
      "ROW": "排",
      "RACK": "架"
    },
    "PALLETINQUIRY": {
      "TITLE": "托盘查询",
      "LOOKUPTITLE": "托盘查询",
      "PALLET": "托盘编号",
      "ITEMKEY": "物料",
      "ITEMDESCRIPTION": "物料描述",
      "LOCATIONKEY": "库位",
      "LOTNO": "批号",
      "BINNO": "储位号",
      "CUSTOMER": "客户",
      "SONO": "销售订单号",
      "STATUS": "状态",
      "BATCHNO": "批次号",
      "COMMENTS": "备注",
      "LOTDETAILS": "批次详情",
      "PALLETDETAILS": "托盘详情",
      "STOCKUOMCODE": "计量单位",
      "CONTAINERNO": "容器号",
      "QUANTITY": "数量",
      "LOCATION": "库位",
      "QTYONHAND": "库存数量",
      "PALLETID": "托盘ID",
      "ALLOWPARTISSUESERIALIZATION": "允许部分发料序列化",
      "DEFAULTCONTAINERQTY": "默认容器数量",
      "PALLETLABEL": "托盘标签",
      "PALLETMENIFEST": "托盘清单",
      "MSG": {
        "PALLTEIDREQ": "托盘ID不能为空"
      }
    },
    "DOWNLOADERROR": {
      "TITLE": "下载错误处理程序",
      "COMPANYID": "公司编号",
      "COMPANYNAME": "公司名称",
      "USERID": "用户编号",
      "USERNAME": "用户名",
      "DOWNLOADERRORLOG": "下载错误日志",
      "CLEARERRORLOG": "清除错误日志",
      "ENTERCOMPANY": "输入公司编号",
      "ENTERUSER": "输入用户编号",
      "NOERRORLOG": "无错误日志"
    },
    "WMSLOTINQUIRY": {
      "TITLE": "批次查询",
      "LOTNO": "批次编号",
      "ITEMKEY": "物料编号",
      "ITEMDESC": "物料描述",
      "EXPDATE": "过期日期",
      "LOTSTATUS": "批次状态",
      "QUARTINEDATE": "检疫日期",
      "STOCKUOM": "库存单位",
      "DISPUOM": "显示单位",
      "QUANTITYTAB": "数量",
      "TOTALONHANDQTY": "总现有数量",
      "TOTALAVAILABLEQTY": "总可用数量",
      "BINNO": "库位编号",
      "LOCATION": "位置",
      "QTYONHAND": "现有数量",
      "AVAILABLEQTY": "可用数量",
      "SOURCETAB": "来源",
      "ITEMTYPE": "制造/采购",
      "DOCDATE": "文档日期",
      "DOCNO": "文档编号",
      "QTY": "数量",
      "VENDLOTNO": "供应商批次编号",
      "VENDORKEY": "供应商编号",
      "VENDORNAME": "供应商名称",
      "FEATURETAB": "特性",
      "FEATUREID": "特性编号",
      "DESCRIPTION": "描述",
      "VALUE": "值",
      "CONTAINERTAB": "容器",
      "CONTAINERNO": "容器编号",
      "PALLETNO": "托盘编号",
      "COMMENTS": "备注",
      "VIEW": "查看"
    },
    "PASSWORDCONFIGURATION": {
      "TITLE": "密码配置",
      "PASSWORDRENEWALCYCLE": "密码更新周期（天数）",
      "MINIMUMPASSWORDLENGTH": "最小密码长度（字符）",
      "RESTRICTIONFORSAMEPASSWORD": "相同密码的限制（天数）",
      "FAILURELOGINATTEMPTS": "登录失败尝试次数",
      "LOGINDURATIONFORONETIMEPASSWORD": "一次性密码的登录时长（天数）",
      "MAXIMUMALLOWEDINACTIVITYPERIOD": "允许的最大不活动期限（天数）",
      "STRONGPASSWORD": "强密码",
      "MAILANDSMSSETTINGS": "邮件和短信设置",
      "SERVER": "服务器",
      "USER": "用户",
      "BCCMAILTOSENDER": "抄送邮件给发件人",
      "PASSWORD": "密码",
      "ENABLESSL": "启用SSL",
      "PORT": "端口",
      "SMSURL": "短信URL"
    },
    "TODO": {
      "TITLE": "待办事项",
      "TYPE": "类型",
      "STATUS": "状态",
      "PRIORITY": "优先级",
      "CLOSINGPER": "完成百分比",
      "REQBY": "请求人",
      "DUEDATE": "截止日期",
      "DESC": "描述",
      "DOCID": "文档ID",
      "FOLLOWUP": "跟进",
      "BUSINESSPARTER": "业务伙伴",
      "CONTACTPERSON": "联系人",
      "CONTACTNO": "联系电话",
      "EMAILId": "电子邮件",
      "COMMENTS": "评论",
      "ATTACHEDDOCS": "附件文档",
      "ATTACHMENT": "附件",
      "ACTIVITYJOUNAL": "活动日志",
      "NEWTODO": "新建待办事项",
      "FOLLOWUPDATE": "跟进日期",
      "SUBJECT": "主题",
      "REQUESTEDBY": "请求人",
      "ASSIGNEDTO": "分配给",
      "SUMMARY": "摘要",
      "DATE": "日期",
      "NEWACTIVITY": "新建活动",
      "INPROGRESS": "进行中",
      "COMPLETED": "已完成",
      "CANCELLED": "已取消",
      "ASSIGNTODOANOTHERUSER": "分配待办事项给其他用户",
      "DOCUMENTS": "文档",
      "SHOWBUSINESS": "显示业务",
      "MYTODO": "我的待办事项",
      "ALLUSER": "所有用户",
      "REASSIGNED": "重新分配",
      "NEWDOCUMENT": "新建文档",
      "MSG": {
        "SELECTBUSINESSPARTNER": "选择业务伙伴",
        "SELECTFILE": "选择文件",
        "DUEDATEGREATERTHANFOLLOWDATE": "截止日期应该大于跟进日期",
        "FOLLOWDATENOTLESSTHANCURRENT": "跟进日期不能早于当前日期",
        "TARGETDATEVALIDATION": "目标日期不能为空",
        "CLOSEPERNOTGREATERTHAN100": "关闭百分比不应大于100"
      }
    },
    "ACTIVITYMASTER": {
      "TITLE": "活动主记录",
      "NEWFYI": "新建 FYI",
      "TYPE": "类型",
      "USER": "用户",
      "SUMMARY": "摘要",
      "DATE": "日期",
      "TODO": "待办事项",
      "DOCUMENTID": "文档 ID",
      "BUSSINESSPARTNER": "业务伙伴",
      "CONTACTPERSON": "联系人",
      "CONTACTNO": "联系电话",
      "EMAILID": "电子邮件",
      "COMMENT": "评论",
      "ATTACHEDDOCS": "附加文档",
      "COMMENTS": "评论",
      "ADDDOCK": "添加文档",
      "TITLEONE": "标题",
      "STATUS": "状态",
      "MSG": {
        "BUSSINESSKEYCANNOTBENULL": "业务关键字不能为空"
      }
    },
    "WORKFLOW": {
      "NEWTODO": "新建",
      "TYPE": "类型",
      "PRIORITY": "优先级",
      "ASSIGNEDTO": "分配给",
      "STATUS": "状态",
      "DESCRIPTION": "描述",
      "COMMENTS": "评论",
      "DUEDAYS": "到期天数",
      "CREATEON": "创建于",
      "PREDECESSOR": "前置条件",
      "TODOSTATUS": "待办状态",
      "CREATEFYI": "创建 FYI",
      "TITLE": "待办事项列表",
      "MANDATORYFIELDS": "请填写必填字段",
      "ASSIGNTOcHECK": "输入分配给",
      "TODOTYPECHECK": "选择类型",
      "WORKFLOWACESS": "此屏幕不适用于工作流。",
      "FORMTITLE": "工作流待办设置"
    },
    "FINANCESERIES": {
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
      "GENRATESEQUENCE": "生成序列",
      "SEQUENCEOPTION": "序列选项",
      "AUTOINSERT": "为月份和年份自动插入系列",
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
    "username": "用户名",
    "email": "电子邮件",
    "status": "状态",
    "MYPROFILE": "我的档案",
    "REPORTACTION": "报表操作",
    "PROFILEACTION": "档案",
    "INQUIRY": "查询",
    "ITEMINQUIRY": "物品查询",
    "LOTSPOT": "需要批次号",
    "BINNOREQ": "需要储位号",
    "CUSTNAME": "客户名称",
    "Free_Text": "自由文本",
    "QCITEMPROCESSALERT": "一些物品处于质检状态，这些物品尚未处理。",
    "Back_Yes_No": "退回订单",
    "BLOCKSHELFLIFE": "该物品的保质期不足。",
    "AVAILABLESHELFLIFE": "可用保质期为",
    "REQSHELFLIFE": "所需保质期为",
    "BACKORDERNOTALLOW": "不允许退回订单，订单将关闭。",
    "SELECTPARENTQTY": "套件父级发货数量应大于0",
    "Ref_So": "参考销售订单号",
    "FORMSETTING": "表单设置",
    "ROWSETTING": "行设置",
    "FOOTERSETTING": "页脚设置",
    "GRIDSETTING": "网格设置",
    "PICKEDGRIDSETTING": "已拣选网格设置",
    "DROPPEDGRIDSETTING": "已放置网格设置",
    "ALLGRIDSETTING": "全部网格设置",
    "STAGEDGRIDSETTING": "已分阶段网格设置",
    "RELEASEDGRIDSETTING": "已释放网格设置",
    "PACKEDGRIDSETTING": "打包网格设置",
    "RESTORE": "恢复",
    "SELECTEDUSER": "选择用户",
    "SELECTEDUSERS": "已选择的用户",
    "LABELS": "标签",
    "VISIBLE": "可见",
    "ACTIVE": "激活",
    "BTNVISIBLE": "按钮可见",
    "BTNACTIVE": "按钮激活",
    "MANDATORY": "必填",
    "ACTION": "操作",
    "SAVEFORMSETTING": "表单设置保存成功",
    "RESTOREFORMSETTING": "表单设置恢复成功",
    "RESTOREGRIDSETTING": "网格设置恢复成功",
    "User_Id": "用户 ID",
    "SELECTALL": "全选",
    "THEME": "主题",
    "DISPLAYREPORT": "显示报告",
    "ABOUT": "关于",
    "SCHEDULER": "码头调度程序",
    "DOCKKEY": "码头名称",
    "TRUCKNO": "卡车编号",
    "DRIVERNAME": "司机姓名",
    "DRIVERCONTACTNO": "司机联系方式",
    "SHIPINGCONTACTNO": "承运商联系方式",
    "CITY": "城市",
    "STATE": "州",
    "BUSINESSPARTNER": "商业合作伙伴",
    "ADDEVENT": "添加码头预约",
    "EDITEVENT": "编辑码头预约",
    "DOCKKEYLIST": "码头关键列表",
    "DOCKNAME": "码头名称",
    "DOCKTYPE": "码头类型",
    "SCHEDULEDOCK": "安排码头",
    "FETCHUSERSETTINGS": "获取用户设置",
    "ACTIONSETTING": "动作设置",
    "WMSEWS": {
      "WEIGHINGFOR": "称重对象",
      "SELECTEDLOT": "已选批次",
      "REMAININGQTY": "剩余数量",
      "SCALEQTY": "秤数量",
      "SELECTSCALE": "选择秤",
      "CLEARALL": "清除全部",
      "WEIGHT": "重量",
      "TOTALQTY": "总数量",
      "ACCEPT": "接受",
      "SELECTLOT": "请选择批次号",
      "SELECTITEM": "请选择物料编号",
      "CHKREMQTY": "剩余数量应大于零",
      "CHKSCALEQTY": "无效的秤数量",
      "CHKSCALELOTQTY": "秤数量不应大于批次数量",
      "ZEROSCALEQTY": "请输入秤数量",
      "CHKSELECTSCALE": "请选择秤"
    },
    "ASSIGNDIMENSIONNOTOPEN": "仅适用于 bme 财务",
    "QUERYWIZARD": {
      "ACTION": "操作",
      "TRANSFER": "生成",
      "SEQNO": "序号",
      "SQL": "SQL",
      "JOIN": "连接",
      "LEVEL": "层级",
      "PARENTLEVEL": "父层级",
      "FINALSQL": "最终 SQL",
      "QUERY": "查询",
      "HIERARCHICALQUERY": "分层查询",
      "COLUMN1": "列1",
      "HYPERLINK": "超链接",
      "DISPLAYDRILLDOWNFIELD1": "显示下钻字段1",
      "DISPLAYDRILLDOWNFIELD2": "显示下钻字段2",
      "DRILLDOWNFIELD1": "下钻字段1",
      "DRILLDOWNFIELD2": "下钻字段2",
      "HYPERLINKID": "超链接ID",
      "RECORDKEY1": "记录键1",
      "RECORDKEY2": "记录键2",
      "ROUTINGPATH": "路径",
      "SCREENNAME": "屏幕名称",
      "TARGETSCREENNAME": "目标屏幕名称",
      "MSG": {
        "ENTERSQL": "输入 SQL",
        "ENTERJOIN": "输入连接",
        "ENTERLEVEL": "输入层级",
        "ENTERPARENTLEVEL": "输入父层级",
        "ENTERFINALSQL": "生成最终 SQL",
        "MASTEREXISTS": "首先保存主记录。",
        "DELETELEVELCHECKK": "此行有父记录，无法删除。",
        "NODATASAVE": "没有数据保存。",
        "DISPLAYDRILLDOWNFIELD1": "显示下钻字段1",
        "ENTERSCREENNAME": "输入屏幕名称",
        "ENTERDISPLAYDRILLDOWNFIELD1": "输入显示下钻字段1"
      }
    },
    "TEMPLATE_ID": "模板ID",
    "SDSNUMERICVALUE": {
      "TITLE": "SDS 数字信息",
      "CASNUM": "CAS 编号",
      "CODE": "代码",
      "DESCRIPTION": "描述",
      "VALUE": "数值",
      "NORECOD": "尚未创建记录。",
      "CAS": "CAS 编号",
      "BOILERPLATEGROUP": "锅炉板组",
      "ITEM": "物品关键字",
      "DES": "描述"
    }
  }
};

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
  // serverapiurl: 'http://103.9.12.227/BmServer/',
  // testUrl:'https://connect24.eworkplaceapps.com/api/PublisherTenant/ValidateSubdomain?subdomainname=bizconfig&appkey=pub'
  // testUrl:'http://172.16.5.124:8002/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 35528,
	"./af.js": 35528,
	"./ar": 1036,
	"./ar-dz": 17579,
	"./ar-dz.js": 17579,
	"./ar-kw": 69588,
	"./ar-kw.js": 69588,
	"./ar-ly": 11650,
	"./ar-ly.js": 11650,
	"./ar-ma": 93258,
	"./ar-ma.js": 93258,
	"./ar-ps": 25467,
	"./ar-ps.js": 25467,
	"./ar-sa": 54085,
	"./ar-sa.js": 54085,
	"./ar-tn": 90287,
	"./ar-tn.js": 90287,
	"./ar.js": 1036,
	"./az": 89757,
	"./az.js": 89757,
	"./be": 59620,
	"./be.js": 59620,
	"./bg": 31139,
	"./bg.js": 31139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 19641,
	"./bn-bd": 19126,
	"./bn-bd.js": 19126,
	"./bn.js": 19641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 20934,
	"./br.js": 20934,
	"./bs": 26274,
	"./bs.js": 26274,
	"./ca": 45831,
	"./ca.js": 45831,
	"./cs": 92354,
	"./cs.js": 92354,
	"./cv": 79692,
	"./cv.js": 79692,
	"./cy": 58774,
	"./cy.js": 58774,
	"./da": 38955,
	"./da.js": 38955,
	"./de": 21557,
	"./de-at": 24954,
	"./de-at.js": 24954,
	"./de-ch": 81881,
	"./de-ch.js": 81881,
	"./de.js": 21557,
	"./dv": 16475,
	"./dv.js": 16475,
	"./el": 38877,
	"./el.js": 38877,
	"./en-au": 70454,
	"./en-au.js": 70454,
	"./en-ca": 67356,
	"./en-ca.js": 67356,
	"./en-gb": 10456,
	"./en-gb.js": 10456,
	"./en-ie": 28789,
	"./en-ie.js": 28789,
	"./en-il": 85471,
	"./en-il.js": 85471,
	"./en-in": 39664,
	"./en-in.js": 39664,
	"./en-nz": 97672,
	"./en-nz.js": 97672,
	"./en-sg": 80805,
	"./en-sg.js": 80805,
	"./eo": 87390,
	"./eo.js": 87390,
	"./es": 1564,
	"./es-do": 51473,
	"./es-do.js": 51473,
	"./es-mx": 92089,
	"./es-mx.js": 92089,
	"./es-us": 84156,
	"./es-us.js": 84156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 22687,
	"./fi.js": 22687,
	"./fil": 80032,
	"./fil.js": 80032,
	"./fo": 46845,
	"./fo.js": 46845,
	"./fr": 8875,
	"./fr-ca": 56425,
	"./fr-ca.js": 56425,
	"./fr-ch": 41746,
	"./fr-ch.js": 41746,
	"./fr.js": 8875,
	"./fy": 67037,
	"./fy.js": 67037,
	"./ga": 11217,
	"./ga.js": 11217,
	"./gd": 37010,
	"./gd.js": 37010,
	"./gl": 51931,
	"./gl.js": 51931,
	"./gom-deva": 64488,
	"./gom-deva.js": 64488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 34984,
	"./gu.js": 34984,
	"./he": 69090,
	"./he.js": 69090,
	"./hi": 42085,
	"./hi.js": 42085,
	"./hr": 38787,
	"./hr.js": 38787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 59819,
	"./hy-am.js": 59819,
	"./id": 44074,
	"./id.js": 44074,
	"./is": 70715,
	"./is.js": 70715,
	"./it": 31746,
	"./it-ch": 77040,
	"./it-ch.js": 77040,
	"./it.js": 31746,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 34346,
	"./jv.js": 34346,
	"./ka": 65538,
	"./ka.js": 65538,
	"./kk": 79772,
	"./kk.js": 79772,
	"./km": 87905,
	"./km.js": 87905,
	"./kn": 79125,
	"./kn.js": 79125,
	"./ko": 69140,
	"./ko.js": 69140,
	"./ku": 2354,
	"./ku-kmr": 44662,
	"./ku-kmr.js": 44662,
	"./ku.js": 2354,
	"./ky": 63768,
	"./ky.js": 63768,
	"./lb": 14016,
	"./lb.js": 14016,
	"./lo": 83169,
	"./lo.js": 83169,
	"./lt": 62353,
	"./lt.js": 62353,
	"./lv": 83243,
	"./lv.js": 83243,
	"./me": 52338,
	"./me.js": 52338,
	"./mi": 35555,
	"./mi.js": 35555,
	"./mk": 85794,
	"./mk.js": 85794,
	"./ml": 53151,
	"./ml.js": 53151,
	"./mn": 46458,
	"./mn.js": 46458,
	"./mr": 69165,
	"./mr.js": 69165,
	"./ms": 8680,
	"./ms-my": 87477,
	"./ms-my.js": 87477,
	"./ms.js": 8680,
	"./mt": 79684,
	"./mt.js": 79684,
	"./my": 40285,
	"./my.js": 40285,
	"./nb": 45922,
	"./nb.js": 45922,
	"./ne": 29040,
	"./ne.js": 29040,
	"./nl": 5066,
	"./nl-be": 74460,
	"./nl-be.js": 74460,
	"./nl.js": 5066,
	"./nn": 53693,
	"./nn.js": 53693,
	"./oc-lnc": 88676,
	"./oc-lnc.js": 88676,
	"./pa-in": 92341,
	"./pa-in.js": 92341,
	"./pl": 57416,
	"./pl.js": 57416,
	"./pt": 84344,
	"./pt-br": 30113,
	"./pt-br.js": 30113,
	"./pt.js": 84344,
	"./ro": 72643,
	"./ro.js": 72643,
	"./ru": 61305,
	"./ru.js": 61305,
	"./sd": 96095,
	"./sd.js": 96095,
	"./se": 74486,
	"./se.js": 74486,
	"./si": 58742,
	"./si.js": 58742,
	"./sk": 96722,
	"./sk.js": 96722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 52416,
	"./sq.js": 52416,
	"./sr": 39450,
	"./sr-cyrl": 50501,
	"./sr-cyrl.js": 50501,
	"./sr.js": 39450,
	"./ss": 32222,
	"./ss.js": 32222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 19638,
	"./sw.js": 19638,
	"./ta": 96494,
	"./ta.js": 96494,
	"./te": 94435,
	"./te.js": 94435,
	"./tet": 25003,
	"./tet.js": 25003,
	"./tg": 13706,
	"./tg.js": 13706,
	"./th": 16025,
	"./th.js": 16025,
	"./tk": 59780,
	"./tk.js": 59780,
	"./tl-ph": 22068,
	"./tl-ph.js": 22068,
	"./tlh": 39167,
	"./tlh.js": 39167,
	"./tr": 32494,
	"./tr.js": 32494,
	"./tzl": 58707,
	"./tzl.js": 58707,
	"./tzm": 91296,
	"./tzm-latn": 34532,
	"./tzm-latn.js": 34532,
	"./tzm.js": 91296,
	"./ug-cn": 12086,
	"./ug-cn.js": 12086,
	"./uk": 85069,
	"./uk.js": 85069,
	"./ur": 29304,
	"./ur.js": 29304,
	"./uz": 95115,
	"./uz-latn": 97609,
	"./uz-latn.js": 97609,
	"./uz.js": 95115,
	"./vi": 34802,
	"./vi.js": 34802,
	"./x-pseudo": 65605,
	"./x-pseudo.js": 65605,
	"./yo": 88456,
	"./yo.js": 88456,
	"./zh-cn": 23272,
	"./zh-cn.js": 23272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 48101,
	"./zh-mo.js": 48101,
	"./zh-tw": 40262,
	"./zh-tw.js": 40262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 55382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 72095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map