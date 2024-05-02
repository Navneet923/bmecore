"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["default-src_app_main_customization_ngrx-store_customization_actions_ts-src_app_main_srm_http_-9af6ef"],{

/***/ 93344:
/*!************************************************************************!*\
  !*** ./src/app/main/customization/ngrx-store/customization.actions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationActionTypes: () => (/* binding */ CustomizationActionTypes),
/* harmony export */   LoadCustomizations: () => (/* binding */ LoadCustomizations)
/* harmony export */ });
var CustomizationActionTypes;
(function (CustomizationActionTypes) {
  CustomizationActionTypes["LoadMainCustomizations"] = "[Customization] Load Customizations";
})(CustomizationActionTypes || (CustomizationActionTypes = {}));
class LoadCustomizations {
  constructor(payload) {
    this.payload = payload;
    this.type = CustomizationActionTypes.LoadMainCustomizations;
  }
}

/***/ }),

/***/ 62243:
/*!*************************************************************!*\
  !*** ./src/app/main/srm/http/sample-transaction.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleTransactionService: () => (/* binding */ SampleTransactionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class SampleTransactionService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfSaveSamplingHeaderData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingHeaderData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingHeaderData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingHeaderData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingInfoData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingDetailData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingInfoData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingDetailData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetNextRequestNo(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetNextRequestNo`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSampleMenuList(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingMenu`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingTemplateData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingTemplateData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingTemplateMasterData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GETSMTemplateMaster`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingTemplateData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingTemplateData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingLabNoteBookData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingLabNoteBookData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingLabNoteBookData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingLabNoteBookData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetFormuladetailsLabNoteBook(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetFormuladetailsLabNoteBook`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingLabBatchData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingLabBatchData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingLabBatchData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingLabBatchData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfTransferFormulaIntoBME(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/TransferFormulaIntoBME`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfRevisionSamplingDataSave(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/RevisionSamplingDataSave`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingDetailData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingDetailData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSMFetchCostMethodData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSMFetchCostMethodData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfGetSamplingQCData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSamplingQCData`;
    return this.httpExt.post(url, headerData, null);
  }
  bmlfSaveSamplingQCData(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/SaveSamplingQCData`;
    return this.httpExt.post(url, headerData, null);
  }
  static #_ = this.ɵfac = function SampleTransactionService_Factory(t) {
    return new (t || SampleTransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SampleTransactionService,
    factory: SampleTransactionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96160:
/*!*************************************************************!*\
  !*** ./src/app/main/srm/models/sample-transaction.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalInfoModel: () => (/* binding */ AdditionalInfoModel),
/* harmony export */   CustomerInfoModel: () => (/* binding */ CustomerInfoModel),
/* harmony export */   LabBatchModel: () => (/* binding */ LabBatchModel),
/* harmony export */   LabBatchQCModel: () => (/* binding */ LabBatchQCModel),
/* harmony export */   LabNoteBookModel: () => (/* binding */ LabNoteBookModel),
/* harmony export */   SampleInfoModel: () => (/* binding */ SampleInfoModel)
/* harmony export */ });
class CustomerInfoModel {
  constructor() {
    this.SMTransactionNo = "";
    this.SMRequestTytpe = "N";
    this.SMPROJECTID = "";
    this.SMRevisonNo = "1";
    this.smRequestDate = new Date();
    this.smDeliveryDate = null;
    this.smPriority = "High";
    this.smStatus = "";
    this.SMNewProspect = "E";
    this.smCustomerKey = "";
    this.smCustomerDesc = "";
    this.smCompanyName = "";
    this.smContactName = "";
    this.smAddress_1 = "";
    this.smAddress_2 = "";
    this.smAddress_3 = "";
    this.smCity = "";
    this.smState = "";
    this.smCountry = "";
    this.smZipcode = "";
    this.smShip_Via_Code = "";
    this.smShip_Via_Desc = "";
    this.smSalesPersn_Ky = "";
    this.smSalesPersn_desc = "";
    this.smPhone = "";
    this.smContactPhone = "";
    this.smFaxNo = "";
    this.smEmail = "";
    this.smSubmittedBy = "";
    this.smEntryDate = new Date();
    this.smInternalNotes = "";
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
    this.ProjectName = "";
    this.FeedBack = "Customer approved and buying";
    this.FeedBackComment = "";
    this.SalesApprover = "";
    this.SalesApproverDate = null;
    this.NPDAApprover = "";
    this.NPDAApproverDate = null;
    this.OwnerName = "";
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
    this.smCountryDesc = "";
    this.Status = "New";
    this.OldStatus = "New";
  }
}
class SampleInfoModel {
  constructor() {
    this.SMTransactionNo = "";
    this.SMRequestNo = "";
    this.smSampleDescription = "";
    this.smSpecialInstruction = "";
    this.smAnticipatedSalesVolume = 0;
    this.smCurrentPrice = 0;
    this.smSampleSize = 0;
    this.smSampleSizeUOM = "";
    this.smTargetPrice = 0;
    this.smFormulaID = "";
    this.smTimeRequired = 0;
    this.smSamplePices = 0;
    this.smStatus = "NEW";
    this.smBatchNo = "";
    this.LotNo = "";
    this.OrdNo = "";
    this.opportunityno = "";
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
  }
}
class AdditionalInfoModel {
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
  }
}
class LabNoteBookModel {
  constructor() {
    this.SMTransactionNo = "";
    this.smRequestNo = "";
    this.RowId = 0;
    this.FGItemKey = "";
    this.FGTemplateItemKey = "";
    this.FGLocationKey = "";
    this.FGTemplateLocationKey = "";
    this.FormulaKey = "";
    this.Status = "";
    this.RMTemplateItemKey = "";
    this.RMTemplateLocationKey = "";
    this.EntrybyWtVol = 0;
    this.LineType = "Material";
    this.ItemKey = "";
    this.Location = "";
    this.Description = "";
    this.WtQty = 0;
    this.VolQty = 0;
    this.WtPer = 0;
    this.VolPer = 0;
    this.TemplateItemKey = "";
    this.TemplateLocation = "";
    this.ItemSubTyp = "";
    this.Amount = 0;
    this.Cost = 0;
    this.RTE = false;
    this.BakerPercentage = 0;
    this.BaseItem = false;
    this.RecUserId = "";
    ///public RecDate: Date = new Date();
    this.RecDate = null;
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
    this.InvConFact = 1;
    this.mode = "I";
    //public ConvFact: Number = 1;
    this.oldEntrybyWtVol = 0;
  }
}
class LabBatchModel {
  constructor() {
    this.SmTransactionNo = "";
    this.SMRequestNo = "";
    this.RowId = 0;
    this.smFormulaID = "";
    this.smSampleSize = 0;
    this.smSampleSizeUOM = "";
    this.smFormulaSeqNo = "";
    this.smBomItemKey = "";
    this.smBomLocation = "";
    this.smLabResourceName = "";
    this.smSchStartDate = new Date();
    this.smSchEndDate = new Date();
    this.smActStartDate = new Date();
    this.smActEndDate = new Date();
    this.smCostType = "Formula Cost";
    this.smCostDetailSumm = "Detail";
    this.smItemKey = "";
    this.smItemUOM = "";
    this.smItemLocationKey = "";
    this.smItemQty = 0;
    this.smItemRate = 0;
    this.smItemAmount = 0;
    this.smItemRemark = "";
    this.smBatchNo = "";
    this.ManPowerId = "";
    this.ItemSubTyp = "";
    this.ItemDescription = "";
    this.LotNo = "";
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
    this.mode = "I";
    this.ConvFact = 1;
  }
}
class LabBatchQCModel {
  constructor() {
    this.RowId = 0;
    this.SmTransactionNo = "";
    this.SMRequestNo = "";
    this.SampleSet = 0;
    this.SMGroupSeq = 0;
    this.smGroupId = "";
    this.smGroupDesc = "";
    this.SMPropertySeq = 0;
    this.SmPropertyId = "";
    this.SmPropertyDesc = "";
    this.SmPropertyValue = "";
    this.smResultValue = "";
    this.TestedBy = "";
    this.TestedDate = new Date();
    this.TestStatus = "Not Tested";
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
    this.rowColor = "";
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_main_customization_ngrx-store_customization_actions_ts-src_app_main_srm_http_-9af6ef.js.map