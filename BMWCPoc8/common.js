"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["common"],{

/***/ 80371:
/*!********************************************************************!*\
  !*** ./src/app/main/account-payable/http/payment-entry.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentEntryService: () => (/* binding */ PaymentEntryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class PaymentEntryService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetPaymentEntryList(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetLookupData`;
    return this.httpExt.post(url, headerData, null);
  }
  //GetFinanceSeries
  bmlfonGetFinanceSeries(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetFinanceSeries`;
    return this.httpExt.post(url, reqdata, null);
  }
  //CreatePaymentEntry
  bmlfonSavePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/CreatePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetPaymentEntry
  bmlfonGetPaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetPaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //Update Payment Entry
  bmlfonUpdatePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdatePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //DeletePaymentEntry
  bmlfonDeletePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeletePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //DeleteLinePaymentEntry
  bmlfonDeleteLinePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteLinePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //PostPaymentEntry
  bmlfonPostPaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/PostPaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetVoucherTDSStatus
  bmlfGetVoucherTDSStatus(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetVoucherTDSStatus`;
    return this.httpExt.post(url, reqdata, null);
  }
  //VoidPaymentEntry
  bmlfonVoidPaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/VoidPaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //HoldPaymentEntry
  bmlfonHoldPaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/HoldPaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //ReleasePaymentEntry
  bmlfonReleasePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/ReleasePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //ReversePaymentEntry
  bmlfonReversePaymentEntry(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/ReversePaymentEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetAccountBalance
  bmlfonGetAccountBalance(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetAccountBalance`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetBalanceInBankCashCurrency
  GetBalanceInBankCashCurrency(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetBalanceInBankCashCurrency`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetPaymentDiscountAmount
  bmlfonGetPaymentDiscountAmount(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetPaymentDiscountAmount`;
    return this.httpExt.post(url, reqdata, null);
  }
  //GetPaymentTDSAmount
  bmlfonGetPaymentTDSAmount(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetPaymentTDSAmount`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonDISTReportProcess(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DistReportProcess`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfDecryptCreditCard(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DecryptCreditCard`;
    return this.httpExt.post(url, headerData, null);
  }
  //BMGFSaveUpdateGridSetting
  bmlfonSaveGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveUpdateGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  //BMGFResetGridSetting
  bmlfonResetGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFResetGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  GetPaymentTCSDueAmount(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetPaymentTCSDueAmount`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function PaymentEntryService_Factory(t) {
    return new (t || PaymentEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PaymentEntryService,
    factory: PaymentEntryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4169:
/*!********************************************************************!*\
  !*** ./src/app/main/account-payable/models/payment-entry.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentEntryDetailModel: () => (/* binding */ PaymentEntryDetailModel),
/* harmony export */   PaymentEntryModel: () => (/* binding */ PaymentEntryModel)
/* harmony export */ });
class PaymentEntryModel {
  constructor() {
    this.PaymentNo = '';
    this.PaymentDate = new Date();
    this.PostingDate = new Date();
    this.Status = '';
    this.PaymentType = 'B';
    this.PaymentMode = '';
    this.PaymentDocNo = '';
    this.PaymentDocDate = new Date();
    this.BankCashID = 0;
    this.ChqBookID = '';
    this.PaymentFromAc = '';
    this.VendMiscType = 0;
    this.Vendor = '';
    this.VendMiscAcct = '';
    this.TotalAmount = 0;
    this.Description = '';
    this.Currency_Key = '';
    this.AppliedStatus = '';
    this.Recuserid = '';
    this.Recdate = new Date();
    this.CreateDate = new Date();
    this.CreateUserID = '';
    this.ModifyDate = new Date();
    this.ModifyUserID = '';
    this.PayeeName = '';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = null;
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
    this.BankCurrency = '';
    this.CurrConvFact = 0;
    this.CurrConvDate = new Date();
    this.TDSType = '';
    this.Type1099 = '';
    this.Box1099 = '';
    this.Amount1099 = 0;
  }
}
class PaymentEntryDetailModel {
  constructor() {
    this.PaymentNo = '';
    this.RowNo = 0;
    this.RefType = '';
    this.DocNo = '';
    this.DueDate = new Date();
    this.DocAmount = 0;
    this.DocAmtBankCurr = 0;
    this.Amount = 0;
    this.AmountBankCurr = 0;
    this.Discount = 0;
    this.DiscountBankCurr = 0;
    this.BankCharges = 0;
    this.BankChargesBankCurr = 0;
    this.WriteOffAmt = 0;
    this.WriteOffBankCurr = 0;
    this.TDSAmt = 0;
    this.Recuserid = '';
    this.Recdate = new Date();
    this.CreateDate = new Date();
    this.CreateUserID = '';
    this.ModifyDate = new Date();
    this.ModifyUserID = '';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = null;
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
    this.Flag = "";
    this.isRefTypeDisabled = false;
    this.isDocAmountDisabled = false;
    this.isDiscountDisabled = false;
    this.isBankChangreDisabled = false;
    this.isWriteOffDisabled = false;
  }
}

/***/ }),

/***/ 99453:
/*!********************************************************************************!*\
  !*** ./src/app/main/admin/components/admin-lending/admin-lending.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLendingComponent: () => (/* binding */ AdminLendingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class AdminLendingComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AdminLendingComponent_Factory(t) {
    return new (t || AdminLendingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AdminLendingComponent,
    selectors: [["app-admin-lending"]],
    decls: 6,
    vars: 0,
    consts: [[1, "inner-wrapper", "height100p"], [1, "container-fluid", "height100p"], [1, "jumbotron", "text-center"], [1, "container"], [1, "jumbotron-heading"]],
    template: function AdminLendingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome To Admin Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37698:
/*!***************************************************************!*\
  !*** ./src/app/main/admin/constant/user-group-setup.const.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserGroupSetup: () => (/* binding */ UserGroupSetup)
/* harmony export */ });
class UserGroupSetup {
  static #_ = this.garrModuleColumn = [{
    Type: 'text',
    Display: true,
    Field: 'MenuItem_Name',
    Title: 'Module Name'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'ReadPermission',
    Title: 'Read'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'WritePermission',
    Title: 'Write'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'NonePermission',
    Title: 'None'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'DeletePermission',
    Title: 'Delete'
  }];
  static #_2 = this.garrModuleDetailColumn = [{
    Type: 'text',
    Display: true,
    Field: 'MenuItem_Name',
    Title: 'Screen Name'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'ReadPermission',
    Title: 'Read'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'WritePermission',
    Title: 'Write'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'NonePermission',
    Title: 'None'
  }, {
    Type: 'checkbox',
    Display: true,
    Field: 'DeletePermission',
    Title: 'Delete'
  }];
}

/***/ }),

/***/ 2453:
/*!*****************************************************************!*\
  !*** ./src/app/main/common-report/http/commonreport.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportService: () => (/* binding */ CommonReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class CommonReportService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  getCustomJson(screenname) {
    let data = {
      ScreenName: screenname
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetCustomForm`;
    return this.httpExt.post(url, data, null);
  }
  GetReportData(data) {
    let oData = {};
    oData.DistReport = [];
    oData.Response = [];
    oData.DistReport.push(data);
    oData.Response.push({
      "ResponseText": "",
      "ErrorCode": "",
      "Pdfpath": ''
    });
    let jData = JSON.stringify(oData);
    let tempjData = JSON.stringify(jData);
    let json = '{"JSON":' + tempjData + '}';
    // 23/Sep/2020 to print input json, Please do not remove this log this is for service side tracing input json in case of any error in report printing
    console.log('report json begin');
    console.log(json);
    console.log('report json end');
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DISTReportProcess`;
    return this.httpExt.post(url, json, null);
  }
  getReportParameter(screenName) {
    let json = {
      'ScreenName': screenName
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetReportParameter`;
    return this.httpExt.post(url, json, null);
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
  getCustomSql(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETCustomSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  GetMaterialAnalysisData(data, gridArray) {
    let oData = {};
    oData.DistReport = [];
    oData.Response = [];
    oData.gridData = gridArray;
    oData.DistReport.push(data);
    oData.Response.push({
      "ResponseText": "",
      "ErrorCode": "",
      "Pdfpath": ''
    });
    let jData = JSON.stringify(oData);
    let tempjData = JSON.stringify(jData);
    let json = '{"JSON":' + tempjData + '}';
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DISTReportProcessMaterialanalysisReport`;
    return this.httpExt.post(url, json, null);
  }
  // Get Custom Report Data
  getCustomReportJson(screenname) {
    let data = {
      ScreenName: screenname
    };
    // to do get custom report form data
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetCustomReportForm`;
    return this.httpExt.post(url, data, null);
  }
  // Transaction Activity  Report
  bmlfonPrintTranActivityReport(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/PrintTransactionActivityReport`;
    return this.httpExt.post(url, reqdata, null);
  }
  // Transaction History Report
  bmlfonPrintTranHistoryReport(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/PrintTransactionHistoryReport`;
    return this.httpExt.post(url, reqdata, null);
  }
  GETAuditSqlData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETAuditSqlData`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function CommonReportService_Factory(t) {
    return new (t || CommonReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CommonReportService,
    factory: CommonReportService.ɵfac
  });
}

/***/ }),

/***/ 37420:
/*!*****************************************************************!*\
  !*** ./src/app/main/configuration/http/module-setup.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleSetupService: () => (/* binding */ ModuleSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class ModuleSetupService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfGetSetupdData() {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetDefaultsForOnline`;
    return this.httpExt.get(url, null);
  }
  bmlfSaveSetupData(reqData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSetupData`;
    return this.httpExt.post(url, reqData, null);
  }
  bmlfGetProductionSetup(reqData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetProductionSetup`;
    return this.httpExt.post(url, reqData, null);
  }
  bmlfSaveProductionSetup(reqData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFSaveProductionSetup`;
    return this.httpExt.post(url, reqData, null);
  }
  static #_ = this.ɵfac = function ModuleSetupService_Factory(t) {
    return new (t || ModuleSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ModuleSetupService,
    factory: ModuleSetupService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41264:
/*!*******************************************************************!*\
  !*** ./src/app/main/general-ladger/http/journal-entry.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JournalEntryService: () => (/* binding */ JournalEntryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class JournalEntryService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetList(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetLookupData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfonSaveData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/CreateJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonGetData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonUpdateData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonDeleteData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonPostData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/PostJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonVoidData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/VoidJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonHoldData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/HoldJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonReleaseData(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/ReleaseJournalEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonGetFinanceSeries(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/GetFinanceSeries`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonSaveGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFSaveUpdateGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfonResetGridSetting(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFResetGridSetting`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function JournalEntryService_Factory(t) {
    return new (t || JournalEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JournalEntryService,
    factory: JournalEntryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97813:
/*!*******************************************************************!*\
  !*** ./src/app/main/general-ladger/models/journal-entry.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JournalEntryDetailModel: () => (/* binding */ JournalEntryDetailModel),
/* harmony export */   JournalEntryModel: () => (/* binding */ JournalEntryModel)
/* harmony export */ });
class JournalEntryModel {
  constructor() {
    this.JrnlBtchNo = '';
    this.RecordPtr = 0; //1 for By Account
    this.Acct = ''; //ToAccount
    // public AcctDesc: string = '';
    // public AcctName: string = '';
    this.NLTrnTyp = ''; //B Harcoded
    this.NLTrnSubTyp = ''; //BC :- if By Account is Bank and TO Account is Cash, BB :- if By Account is Bank and TO Account is Also Bank, CB :- if By Account is Cash and TO Account is Bank, CC :- if By Account 
    this.JrnlKy = ''; //Left Two Character of Jrnlbtchno
    this.Description = ''; //Bank,Check No.,Date
    this.PstDate = new Date();
    this.AplDate = new Date();
    this.DocNo = ''; //Same as JrnlBtchno
    this.SysID = ''; //8 (hardCoded)
    this.TrnAmt = 0; //Amount In Home Currency * -1 For Line 1
    this.NatAmt = 0; //Amount In Home Currency * -1 For Line 1
    this.NASeq = 0;
    this.NAPstID = 0; //Bank/Cash ID
    this.INEventID = 0;
    this.NAAutoKy = '';
    this.IntrCoID = '';
    this.UserReserved = '';
    this.RecUserID = '';
    this.RecDate = new Date();
    this.RecTime = new Date();
    this.ProdKey = '';
    this.TrnTyp = '';
    this.TrnSubTyp = '';
    this.ReservedNC = '';
    this.MfGorderNo = '';
    this.Type = ''; //Cash or Bank
    this.Posted = false;
    this.CurrencyKey = '';
    this.DocLineNo = 0; //1 for First Row  
    this.ParentdocNo = '';
    this.ParentLinNo = 0;
    this.VouchNo = 0;
    this.VouchLineno = 0;
    this.Itemkey = '';
    this.Location = '';
    this.Vend_CustKey = ''; //Payment Mode
    this.Accountlabel = '';
    this.trnqty = 0;
    this.unittrnamt = 0;
    this.Fin_JrnlTrn = '';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date(); //CheckDate
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
    this.ReconcileSrNo = 0;
    this.ReconcileDocNo = '';
    this.ReconcileFlag = '';
    this.AcctCurrency = '';
    this.AcctCurrencyAmt = 0;
    this.AcctCurrencyFact = 0;
    this.AcctCurrFactDate = new Date();
    this.CurrRateType = '';
    this.Dimension1 = '';
    this.Dimension2 = '';
    this.AllocAcct = '';
    this.PrepaidExpKey = '';
    this.Dimension3 = '';
    this.Dimension4 = '';
    this.Dimension5 = '';
  }
}
class JournalEntryDetailModel {
  constructor() {
    this.Acct = ''; //ToAccount
    this.Account = '';
    this.Description = ''; //Bank,Check No.,Date
    this.DrAmt = 0; //Amount In Home Currency * -1 For Line 1
    this.CrAmt = 0; //Amount In Home Currency * -1 For Line 1
    this.Dimension1 = '';
    this.Dimension2 = '';
    this.Dimension3 = '';
    this.Dimension4 = '';
    this.Dimension5 = '';
    this.JrnlBtchNo = '';
    this.RecordPtr = 0; //1 for By Account     
    this.NLTrnTyp = ''; //B Harcoded
    this.NLTrnSubTyp = ''; //BC :- if By Account is Bank and TO Account is Cash, BB :- if By Account is Bank and TO Account is Also Bank, CB :- if By Account is Cash and TO Account is Bank, CC :- if By Account 
    this.JrnlKy = ''; //Left Two Character of Jrnlbtchno   
    this.PstDate = new Date();
    this.AplDate = new Date();
    this.DocNo = ''; //Same as JrnlBtchno
    this.SysID = ''; //8 (hardCoded)
    this.NatAmt = 0;
    this.NASeq = 0;
    this.NAPstID = 0; //Bank/Cash ID
    this.INEventID = 0;
    this.NAAutoKy = '';
    this.IntrCoID = '';
    this.UserReserved = '';
    this.RecUserID = '';
    this.RecDate = new Date();
    this.RecTime = new Date();
    this.ProdKey = '';
    this.TrnTyp = '';
    this.TrnSubTyp = '';
    this.ReservedNC = '';
    this.MfGorderNo = '';
    this.Type = ''; //Cash or Bank
    this.Posted = false;
    this.CurrencyKey = '';
    this.DocLineNo = 0; //1 for First Row  
    this.ParentdocNo = '';
    this.ParentLinNo = 0;
    this.VouchNo = 0;
    this.VouchLineno = 0;
    this.Itemkey = '';
    this.Location = '';
    this.Vend_CustKey = ''; //Payment Mode
    this.Accountlabel = '';
    this.trnqty = 0;
    this.unittrnamt = 0;
    this.Fin_JrnlTrn = '';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = new Date(); //CheckDate
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
    this.ReconcileSrNo = 0;
    this.ReconcileDocNo = '';
    this.ReconcileFlag = '';
    this.AcctCurrency = '';
    this.AcctCurrencyAmt = 0;
    this.AcctCurrencyFact = 0;
    this.AcctCurrFactDate = new Date();
    this.CurrRateType = '';
    this.AllocAcct = '';
    this.PrepaidExpKey = '';
    this.Flag = '';
  }
}

/***/ }),

/***/ 23421:
/*!**************************************************************!*\
  !*** ./src/app/main/inventory/constant/item-master.const.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   ItemMasterConstants: () => (/* binding */ ItemMasterConstants)
/* harmony export */ });
class ItemMasterConstants {
  static #_ = this.garrClassificationGridCol = [{
    Type: 'lookup',
    Display: true,
    Field: 'KeyID',
    Title: 'KeyID'
  }, {
    Type: 'Action',
    Display: true,
    Field: 'Action',
    Title: 'Action'
  }];
  static #_2 = this.garrUnitConversionCol = [{
    Type: 'Checkbox',
    Display: true,
    Field: 'Check',
    Title: 'Check'
  }, {
    Type: 'textReadOnly',
    Display: true,
    Field: 'FromKey',
    Title: 'FromKey'
  }, {
    Type: 'textReadOnly',
    Display: true,
    Field: 'ToKey',
    Title: 'ToKey'
  }, {
    Type: 'numeric',
    Display: true,
    Field: 'Convfctr',
    Title: 'Convfctr'
  }, {
    Type: 'combo',
    Display: true,
    Field: 'Operation',
    Title: 'Operation'
  }, {
    Type: 'textReadOnly',
    Display: true,
    Field: 'Scope',
    Title: 'Scope'
  }];
  static #_3 = this.Operation = [{
    id: "Multiply",
    value: 'Multiply'
  }, {
    id: "Divide",
    value: 'Divide'
  }];
  static #_4 = this.OrderMethod = [{
    id: "P",
    value: 'P-MPS'
  }, {
    id: "M",
    value: 'M-MRP'
  }, {
    id: "R",
    value: 'R-ROP'
  }, {
    id: "O",
    value: 'O-OTHER'
  }];
  static #_5 = this.IntermediateType = [{
    id: "N",
    value: 'N-None'
  }, {
    id: "I",
    value: 'I-Intermediate'
  }, {
    id: "P",
    value: 'P-Purchased'
  }];
  static #_6 = this.LotSizingMethod = [{
    id: "",
    value: ''
  }, {
    id: "L",
    value: 'L-Lot for Lot'
  }, {
    id: "E",
    value: 'E-EOQ'
  }];
  static #_7 = this.ItemCostMethod = [{
    id: "S",
    value: 'STANDARD'
  }, {
    id: "A",
    value: 'AVERAGE'
  }, {
    id: "L",
    value: 'LIFO'
  }, {
    id: "F",
    value: 'FIFO'
  }, {
    id: "T",
    value: 'LOT COST'
  }];
  static #_8 = this.OversoldCostMethod = [{
    id: "S",
    value: 'STANDARD '
  }, {
    id: "A",
    value: 'AVERAGE'
  }, {
    id: "L",
    value: 'LAST'
  }];
  static #_9 = this.PlanningType = [{
    id: "B",
    value: 'B-Buy'
  }, {
    id: "M",
    value: 'M-Make'
  }];
  static #_10 = this.ItemStatus = [{
    id: "A",
    value: 'A-Active'
  }, {
    id: "N",
    value: 'N-No New Purchase/Discontinued'
  }, {
    id: "O",
    value: 'O-Obsolete'
  }, {
    id: "D",
    value: 'D-Deactivated'
  }];
  static #_11 = this.OverrideMaximumStockQuantity = [{
    id: "Y",
    value: 'Yes'
  }, {
    id: "N",
    value: 'No'
  }, {
    id: "W",
    value: 'Yes with Warning'
  }];
  static #_12 = this.TrackSerialLot = [{
    id: "N",
    value: 'N-No Tracking'
  }, {
    id: "S",
    value: 'S-Serial Tracking'
  }, {
    id: "L",
    value: 'L-Lot Tracking'
  }, {
    id: "B",
    value: 'B-Multiple Bins'
  }];
  static #_13 = this.TrackSerialLotOnlyNoTrack = [{
    id: "N",
    value: 'N-No Tracking'
  }];
  static #_14 = this.AutoLotIssueMethod = [{
    id: "F",
    value: 'F-FIFO'
  }, {
    id: "L",
    value: 'L-LIFO'
  }, {
    id: "E",
    value: 'E-Nearest Expiry'
  }, {
    id: "D",
    value: 'D-Not Yet Depleted'
  }, {
    id: "",
    value: ''
  }];
  static #_15 = this.Optional = [{
    id: "ITEMKEY",
    value: 'ITEMKEY'
  }, {
    id: "VENDORKEY",
    value: 'VENDORKEY'
  }, {
    id: "DOCNO",
    value: 'DOCNO'
  }, {
    id: "CUSTOM",
    value: 'CUSTOM'
  }];
  static #_16 = this.Optional1 = [{
    id: "ITEMKEY           ",
    value: 'ITEMKEY'
  }, {
    id: "VENDORKEY         ",
    value: 'VENDORKEY'
  }, {
    id: "DOCNO             ",
    value: 'DOCNO'
  }, {
    id: "                  ",
    value: "CUSTOM"
  }];
  static #_17 = this.OptionalM = [{
    id: "ITEMKEY",
    value: 'ITEMKEY'
  }, {
    id: "DOCNO",
    value: 'DOCNO'
  }, {
    id: "CUSTOM",
    value: 'CUSTOM'
  }];
  static #_18 = this.OptionalM1 = [{
    id: "ITEMKEY           ",
    value: 'ITEMKEY'
  }, {
    id: "DOCNO             ",
    value: 'DOCNO'
  }, {
    id: "                  ",
    value: "CUSTOM"
  }];
  static #_19 = this.Optional1CustomPurchase = [{
    id: "ITEMKEY           ",
    value: 'ITEMKEY'
  }, {
    id: "VENDORKEY         ",
    value: 'VENDORKEY'
  }, {
    id: "DOCNO             ",
    value: 'DOCNO'
  }];
  static #_20 = this.Optional1CustomManufacturing = [{
    id: "ITEMKEY           ",
    value: 'ITEMKEY'
  }, {
    id: "DOCNO             ",
    value: 'DOCNO'
  }];
}
class Default {
  constructor() {
    this.id = '';
    this.value = '';
  }
}

/***/ }),

/***/ 25842:
/*!************************************************************!*\
  !*** ./src/app/main/r-and-d/http/formula-entry.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaEntryService: () => (/* binding */ FormulaEntryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class FormulaEntryService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  // BMGFGetFGDefaults  
  BMGFGetFGDefaults() {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetFGDefaults`;
    return this.httpExt.get(url, null);
  }
  // BMGFGetIMDefaults
  BMGFGetIMDefaults() {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetIMDefaults`;
    return this.httpExt.get(url, null);
  }
  BMGFLoadFMDefaults(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFLoadFMDefaults`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFGetFormulaDetail(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetFormulaDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFInsertFormula(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFInsertFormula`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFUpdateFormula(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFUpdateFormula`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFDeleteFormula(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFDeleteFormula`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFPrintFormula1(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/PrintFormulaEntry`;
    return this.httpExt.post(url, reqdata, null);
  }
  //BMGFGetFMOtherDefaults
  BMGFGetFMOtherDefaults() {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetFMOtherDefaults`;
    return this.httpExt.get(url, null);
    //return this.httpExt.post(url, reqdata, null);
  }

  BMLFChangeViewMode(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMLFChangeViewMode`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMLFSizeFormula(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMLFSizeFormula`;
    return this.httpExt.post(url, reqdata, null);
  }
  getUomUnit(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFGetItemUOMConversion`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFCreateFG(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCreateFG`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFCreateIntremediate(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFCreateIntremediate`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMLFToggleCosts(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMLFToggleCosts`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFVerifyFMSecurity(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFVerifyFMSecurity`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFFMAlternateItem(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFFMAlternateItem`;
    return this.httpExt.post(url, reqdata, null);
  }
  //
  BMGFGetSystemWtAndVol(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFGetSystemWtAndVol`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFConvertQty(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFConvertQty`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFShowAltItemLookup(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFShowAltItemLookup`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFChangeQTYForWV(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/BMGFChangeQTYForWV`;
    return this.httpExt.post(url, reqdata, null);
  }
  executeCustomSql(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/ExecuteCustomSql`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfuploadFormula(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFExessUploadFormula`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function FormulaEntryService_Factory(t) {
    return new (t || FormulaEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FormulaEntryService,
    factory: FormulaEntryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12198:
/*!******************************************************!*\
  !*** ./src/app/shared/http/common-report.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonReportService: () => (/* binding */ CommonReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class CommonReportService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  getCustomJson(screenname) {
    let data = {
      ScreenName: screenname
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetCustomForm`;
    return this.httpExt.post(url, data, null);
  }
  GetReportData(json) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DISTReportProcess`;
    return this.httpExt.post(url, json, null);
  }
  getReportParameter(screenName) {
    let json = {
      'ScreenName': screenName
    };
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetReportParameter`;
    return this.httpExt.post(url, json, null);
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
  getCustomSql(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETCustomSqlData`;
    return this.httpExt.post(url, reqdata, null);
  }
  // Get Custom Report Data
  getCustomReportJson(screenname) {
    let data = {
      ScreenName: screenname
    };
    // to do get custom report form data
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetCustomReportForm`;
    return this.httpExt.post(url, data, null);
  }
  static #_ = this.ɵfac = function CommonReportService_Factory(t) {
    return new (t || CommonReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CommonReportService,
    factory: CommonReportService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map