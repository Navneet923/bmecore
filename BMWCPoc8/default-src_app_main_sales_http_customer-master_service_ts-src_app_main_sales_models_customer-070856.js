"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["default-src_app_main_sales_http_customer-master_service_ts-src_app_main_sales_models_customer-070856"],{

/***/ 32763:
/*!************************************************************!*\
  !*** ./src/app/main/sales/http/customer-master.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerMasterService: () => (/* binding */ CustomerMasterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http-client-ext.service */ 83040);
/* harmony import */ var src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/appsettings.service */ 67341);



class CustomerMasterService {
  constructor(httpExt, appSettings) {
    this.httpExt = httpExt;
    this.appSettings = appSettings;
  }
  bmlfonGetList(headerData) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetLookupData`;
    return this.httpExt.post(url, headerData, null);
  }
  saveCustomerMasterMain(headerData, formMode) {
    if (formMode == false) {
      const url = `${this.appSettings.ServerAPIEndpoint}/bme/CreateCustomer`;
      return this.httpExt.post(url, headerData, null);
    } else {
      const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateCustomer`;
      return this.httpExt.post(url, headerData, null);
    }
  }
  saveCustomerMaster(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpointnew}/bme/CreateCustomer`;
    return this.httpExt.post(url, reqdata, null);
  }
  getGetCustomer(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetCustomer`;
    return this.httpExt.post(url, reqdata, null);
  }
  UpdateCustomer(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateCustomer`;
    return this.httpExt.post(url, reqdata, null);
  }
  DeleteCustomer(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/DeleteCustomer`;
    return this.httpExt.post(url, reqdata, null);
  }
  GetSumofCustAgeBrk(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetSumofCustAgeBrk`;
    return this.httpExt.post(url, reqdata, null);
  }
  GetContactDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetContactDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  CreateContactDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/CreateContactDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  UpdateContactDetails(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/UpdateContactDetails`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMGFChangeCustStatus(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMGFChangeCustStatus`;
    return this.httpExt.post(url, reqdata, null);
  }
  BMFetchKeyDescription(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/BMFetchKeyDescription`;
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
  bmlfGetTaxRateFromZipCode(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/GetZipCodeDetail`;
    return this.httpExt.post(url, reqdata, null);
  }
  bmlfGetQBOAgingReport(reqdata) {
    const url = `${this.appSettings.ServerAPIEndpoint}/bme/QBAgingReport`;
    return this.httpExt.post(url, reqdata, null);
  }
  static #_ = this.ɵfac = function CustomerMasterService_Factory(t) {
    return new (t || CustomerMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_http_client_ext_service__WEBPACK_IMPORTED_MODULE_0__.HttpCleintExtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_appsettings_service__WEBPACK_IMPORTED_MODULE_1__.AppSettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CustomerMasterService,
    factory: CustomerMasterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50108:
/*!*****************************************************!*\
  !*** ./src/app/main/sales/models/customer.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContCategory: () => (/* binding */ ContCategory),
/* harmony export */   ContRegion: () => (/* binding */ ContRegion),
/* harmony export */   Contact: () => (/* binding */ Contact),
/* harmony export */   ContactList: () => (/* binding */ ContactList),
/* harmony export */   CountryRegion: () => (/* binding */ CountryRegion),
/* harmony export */   CustomerDesc: () => (/* binding */ CustomerDesc),
/* harmony export */   LookupName: () => (/* binding */ LookupName),
/* harmony export */   PHCONST: () => (/* binding */ PHCONST),
/* harmony export */   Phone: () => (/* binding */ Phone),
/* harmony export */   PhoneData: () => (/* binding */ PhoneData),
/* harmony export */   Regionlist: () => (/* binding */ Regionlist),
/* harmony export */   arcust: () => (/* binding */ arcust),
/* harmony export */   contCatList: () => (/* binding */ contCatList),
/* harmony export */   contRegList: () => (/* binding */ contRegList)
/* harmony export */ });
////import { BaseModel } from 'src/app/core/models/base.model';
class arcust {
  constructor() {
    this.Customer_Key = '', this.Customer_Name = '', this.Address_1 = '', this.Address_2 = '', this.Address_3 = '', this.City = '', this.State = '', this.Zip_Code = '', this.Country = '', this.Attn_Name = '', this.Phone_1 = '', this.Contact_Name = '', this.Phone_2 = '', this.Resale_No = '', this.Telex_Or_Twx_No = '', this.Fax_No = '', this.Cred_Card_No = '', this.Cred_Card_Typ = '', this.Expir_Date = new Date(), this.Vendor_Key = '', this.Cr_Limit_Amt = 0.00, this.Default_Tax = '', this.Terms_Code = '', this.Fob_Code = '', this.Ship_Via_Code = '', this.Cust_Class_Ky = '', this.Location_Ky = '', this.Territory_Ky = '', this.Salespersn_Ky = '', this.language_key = '', this.Inv_Comnt_Ky = '', this.Stmt_Cmnt_Ky = '', this.Tax_Country = '', this.Tax_Id = '', this.Reserved_1 = '', this.Reserved_2 = '', this.Uninvoiced_Cr = 0.00, this.RecUserID = '', this.RecDate = new Date(), this.FinCustKey = '', this.FreightFlag = false, this.RemitTo = '', this.CustGrpID = '', this.Location = '', this.RemitToKey = '', this.ReqApproval = '', this.custstatus = 'Active', this.ARTERMSKEY = '', this.ARTERMSDESC = '', this.BILLINGCYCLE = '', this.BILLINGCYCLEDESC = '', this.INTERESTPROFILE = '', this.INTERESTPROFILEDESC = '', this.FreightKey = '', this.FreightChkLimitMax = 1000000000000000, this.FreightChkLimitMin = 0.00, this.User1 = '', this.User2 = '', this.User3 = '', this.User4 = '', this.User5 = '', this.User6 = new Date(), this.User7 = 0, this.User8 = 0, this.User9 = 0.000000, this.User10 = 0.000000, this.User11 = 0, this.User12 = 0, this.Email = '', this.URL = '', this.PriceListKey = '', this.ESG_REASON = '', this.ESG_APPROVER = '', this.CUSTOM1 = null, this.CUSTOM2 = null, this.CUSTOM3 = null, this.CUSTOM4 = null, this.CUSTOM5 = null, this.CUSTOM6 = null, this.CUSTOM7 = null, this.CUSTOM8 = null, this.CUSTOM9 = null, this.CUSTOM10 = null, this.ContractLocation = '', this.CorpIdntyNo = '';
  }
}
class CustomerDesc {
  constructor() {
    this.Country_Desc = '', this.Language_Desc = '', this.Class_Descr = '', this.Terms_Descr = '', this.TaxRateKey_Descr = '', this.FOB_desc = '', this.ShipViaKey_desc = '', this.TerritoryKey_desc = '', this.SalespersonKey_desc = '', this.CommentKey_Des = '', this.CustGrp_Des = '', this.LocationKey_Desc = '', this.Cont_loc_desc = '', this.VendorName = '', this.Remit_nm = '', this.Currency = '', this.price_Desc = '';
  }
}
// export class CountryRegion {            
//       public phoneDetails: string;
//       public Region:string;
//       public RegionCode: number;
//       public AreaCode:string;
//       public LocalNumber:string;
//       constructor()
//       {
//         this.phoneDetails='';
//         this.LocalNumber='';
//         this.AreaCode='';
//         this. Region='';
//         this.RegionCode=0;
//       }
// }
const PHCONST = {
  ATTPHONENUMBER: 'Attention Phone Number',
  CONTPHONENUMBER: 'Contact Phone Number',
  FAXNUMBER: 'Fax Number',
  TELEXNUMBER: 'Telex Number'
};
class CountryRegion {
  constructor(phoneDetails, Region, RegionCode, AreaCode, LocalNumber) {
    this.phoneDetails = phoneDetails;
    this.Region = Region;
    this.RegionCode = RegionCode;
    this.AreaCode = AreaCode;
    this.LocalNumber = LocalNumber;
  }
}
class Phone {}
class ContCategory {}
class ContRegion {}
const contRegList = [{
  ContReg: 'None'
}, {
  ContReg: 'United States'
}, {
  ContReg: 'Canada'
}, {
  ContReg: 'Americas'
}, {
  ContReg: 'Middle East'
}, {
  ContReg: 'Europe'
}, {
  ContReg: 'Africa'
}];
const contCatList = [{
  contCat: 'None'
}, {
  contCat: 'Key'
}, {
  contCat: 'Primary'
}, {
  contCat: 'Secondary'
}, {
  contCat: 'Consultant'
}, {
  contCat: 'X-Employee'
}, {
  contCat: 'Delete'
}];
const PhoneData = [{
  PhData: 'Primary'
}, {
  PhData: 'Office'
}, {
  PhData: 'Office 2'
}, {
  PhData: 'Direct'
}, {
  PhData: 'Mobile'
}, {
  PhData: 'Mobile 2'
}, {
  PhData: 'Home'
}, {
  PhData: 'Home 2'
}, {
  PhData: 'Fax'
}, {
  PhData: 'Assistant'
}, {
  PhData: 'Other'
}];
const LookupName = {
  Country: 'Country Lookup',
  Language: 'Language Lookup',
  CustomerClass: 'Customer Class Lookup',
  Terms: 'Terms Lookup',
  TaxRate: 'Tax Rate Lookup',
  FOB: 'FOB Lookup',
  ShipVia: 'Ship Via Lookup',
  Territory: 'Territory Lookup',
  SalesPerson: 'Sales Person Lookup',
  Comment: 'Invoice Comment Lookup',
  CustomerGroup: 'Customer Group',
  Location: 'Location Lookup',
  Freight: 'Freight Master Lookup',
  PriceList: 'Price List Master Lookup',
  ContractLocation: 'Location Lookup',
  Vendor: 'Vendor Lookup',
  RemitTo: 'Remit To Lookup',
  Search: 'Customer'
};
const Regionlist = [{
  Region: 'Afghanistan',
  RegionCode: 93,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Canada',
  RegionCode: 9,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'United States',
  RegionCode: 1,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Egypt, Arab Republic of',
  RegionCode: 20,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Morocco, Kingdom of',
  RegionCode: 212,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Algeria',
  RegionCode: 213,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Tunisia',
  RegionCode: 216,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Libyan Arab People`s Socialist Jamahiriya',
  RegionCode: 218,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Gabon Republic',
  RegionCode: 220,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Senegal Republic',
  RegionCode: 221,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mauritania, Islamic Republic of',
  RegionCode: 222,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mali Republic',
  RegionCode: 223,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guinea, People`s Rev. Republic',
  RegionCode: 224,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Australia',
  RegionCode: 225,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Burkina Faso',
  RegionCode: 226,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Niger Republic',
  RegionCode: 227,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Togo, Republic of',
  RegionCode: 228,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Benin, People`s public of',
  RegionCode: 229,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mauritius',
  RegionCode: 230,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Liberia',
  RegionCode: 231,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Sierra Leone',
  RegionCode: 232,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ghana',
  RegionCode: 233,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Nigeria, Federal Republic of',
  RegionCode: 234,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Chad Republic',
  RegionCode: 235,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Central African Republic',
  RegionCode: 236,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cameroon, United Republic of',
  RegionCode: 237,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cape Verde Islands',
  RegionCode: 238,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Sao Tome',
  RegionCode: 239,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Equatorial Guinea, Republic of',
  RegionCode: 240,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Congo, Republic of',
  RegionCode: 242,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Zaire, Republic of',
  RegionCode: 243,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Angola',
  RegionCode: 244,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guinea-Bissau',
  RegionCode: 245,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Diego Garcia',
  RegionCode: 246,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ascension Island',
  RegionCode: 247,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Seychelles Islands',
  RegionCode: 248,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Rwanda',
  RegionCode: 250,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ethiopia',
  RegionCode: 251,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Djibouti, Republic of',
  RegionCode: 253,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Kenya, Republic of',
  RegionCode: 254,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Tanzania',
  RegionCode: 255,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Uganda',
  RegionCode: 256,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Burundi',
  RegionCode: 257,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mozambique',
  RegionCode: 258,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Zambia',
  RegionCode: 260,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Madagascar, Democratic Republic of',
  RegionCode: 261,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Reunion Island',
  RegionCode: 262,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Zimbabwe',
  RegionCode: 263,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Namibia',
  RegionCode: 264,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Malawi',
  RegionCode: 265,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Lesotho',
  RegionCode: 266,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Botswanna',
  RegionCode: 267,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Swaziland',
  RegionCode: 268,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Comoros, Federation and Islamic Republic of',
  RegionCode: 269,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mayotte Island',
  RegionCode: 269,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'South Africa, Republic of',
  RegionCode: 27,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'St. Helena',
  RegionCode: 290,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Aruba',
  RegionCode: 297,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Faroe Islands',
  RegionCode: 298,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Greenland',
  RegionCode: 299,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Greece',
  RegionCode: 30,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Netherlands',
  RegionCode: 31,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Belgium',
  RegionCode: 32,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Andorra',
  RegionCode: 33,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'France',
  RegionCode: 33,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Monaco',
  RegionCode: 33,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Spain',
  RegionCode: 34,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Gibraltar',
  RegionCode: 350,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Portugal',
  RegionCode: 351,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Luxembourg',
  RegionCode: 352,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ireland, Republic of',
  RegionCode: 353,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Iceland',
  RegionCode: 354,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Albania, Socialist Republic of',
  RegionCode: 355,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Malta',
  RegionCode: 356,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cyprus',
  RegionCode: 357,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Finland',
  RegionCode: 358,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bulgaria',
  RegionCode: 359,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Hungary',
  RegionCode: 36,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Montenegro',
  RegionCode: 381,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Serbia',
  RegionCode: 381,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Croatia',
  RegionCode: 385,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Slovenia',
  RegionCode: 386,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bosnia',
  RegionCode: 387,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Macedonia',
  RegionCode: 389,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'San Marino',
  RegionCode: 39,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Vatican City',
  RegionCode: 39,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Italy',
  RegionCode: 39,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Romania, Socialist Republic of',
  RegionCode: 40,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Liechtenstein',
  RegionCode: 41,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Switzerland',
  RegionCode: 41,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Czechoslovakia',
  RegionCode: 42,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Austria',
  RegionCode: 43,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'United Kingdom',
  RegionCode: 44,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Denmark',
  RegionCode: 45,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Sweden',
  RegionCode: 46,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Norway',
  RegionCode: 47,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Poland, Republic of',
  RegionCode: 48,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Germany, Federal Republic of',
  RegionCode: 49,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Falkland Islands',
  RegionCode: 500,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Belize',
  RegionCode: 501,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guatemala',
  RegionCode: 502,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'El Salvador',
  RegionCode: 503,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Honduras',
  RegionCode: 504,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Nicaragua',
  RegionCode: 505,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Costa Rica',
  RegionCode: 506,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Panama',
  RegionCode: 507,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'St. Pierre and Miquelon',
  RegionCode: 508,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Haiti',
  RegionCode: 509,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Peru',
  RegionCode: 51,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mexico',
  RegionCode: 52,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guantanamo Bay',
  RegionCode: 5399,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Argentina',
  RegionCode: 54,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Brazil',
  RegionCode: 55,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Chile',
  RegionCode: 56,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Colombia',
  RegionCode: 57,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Venezuela',
  RegionCode: 58,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guadeloupe',
  RegionCode: 590,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bolivia',
  RegionCode: 591,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guyana',
  RegionCode: 592,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ecuador',
  RegionCode: 593,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'French Guiana',
  RegionCode: 594,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Paraguay',
  RegionCode: 595,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'French Antilles',
  RegionCode: 596,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Suriname, Republic of',
  RegionCode: 597,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Uruguay',
  RegionCode: 598,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Netherlands Antilles',
  RegionCode: 599,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Malaysia',
  RegionCode: 60,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Australia',
  RegionCode: 61,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Indonesia',
  RegionCode: 62,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Philippines',
  RegionCode: 63,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'New Zealand',
  RegionCode: 64,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Singapore, Republic of',
  RegionCode: 65,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Thailand',
  RegionCode: 66,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Saipan',
  RegionCode: 670,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Guam',
  RegionCode: 671,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Antartica',
  RegionCode: 672,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Christmas Island and Cocos Islands',
  RegionCode: 672,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Norfolk Island',
  RegionCode: 672,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Brunei',
  RegionCode: 673,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Nauru',
  RegionCode: 674,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Papua New Guinea',
  RegionCode: 675,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Tonga Islands',
  RegionCode: 676,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Solomon Islands',
  RegionCode: 677,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Vanuatu, Republic of',
  RegionCode: 678,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Fiji Islands',
  RegionCode: 679,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Palau, Republic of',
  RegionCode: 680,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Wallis and Futuna Islands',
  RegionCode: 681,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cook Islands',
  RegionCode: 682,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Niue',
  RegionCode: 683,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'American Samoa',
  RegionCode: 684,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Western Samoa',
  RegionCode: 685,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Kiribati',
  RegionCode: 686,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'New Caledonia',
  RegionCode: 687,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Tuvalu',
  RegionCode: 688,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'French Polynesia',
  RegionCode: 689,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Micronesia, Federated States of',
  RegionCode: 691,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Marshall Islands',
  RegionCode: 692,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Armenia',
  RegionCode: 374,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Azerbaijan',
  RegionCode: 994,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Belarus',
  RegionCode: 375,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Estonia',
  RegionCode: 372,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Georgia',
  RegionCode: 995,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Kazakhstan',
  RegionCode: 7,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Kyrgyzstan',
  RegionCode: 7,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Latvia',
  RegionCode: 371,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Lithuania',
  RegionCode: 370,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Moldova, Republic of',
  RegionCode: 373,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Russian Federation',
  RegionCode: 7,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Tajikistan',
  RegionCode: 7,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Turkmenistan',
  RegionCode: 993,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Ukrainian SSR',
  RegionCode: 7,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Uzbekistan',
  RegionCode: 998,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Grenada',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Nevis',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Antigua and Barbuda',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Anguilla',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Barbados',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bermuda',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bahamas',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Dominica',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Dominican Republic',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Jamaica',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Saint Kitts and Nevis',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cayman Islands',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Saint Lucia',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Montserrat',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Turks and Caicos Islands',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Trinidad and Tobago, Democratic Republic of',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'St. Vincent and the Grenadines',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'British Virgin Islands',
  RegionCode: 809,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Japan',
  RegionCode: 81,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Korea, Republic of',
  RegionCode: 82,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Viet Nam',
  RegionCode: 84,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Hong Kong',
  RegionCode: 852,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Macao',
  RegionCode: 853,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Cambodia',
  RegionCode: 855,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'China, People`s Republic of',
  RegionCode: 86,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bangladesh, People`s Republic of',
  RegionCode: 880,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Taiwan, Republic of China',
  RegionCode: 886,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Turkey',
  RegionCode: 90,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'India',
  RegionCode: 91,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Pakistan',
  RegionCode: 92,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Sri Lanka, Democratic Socialist Republic of',
  RegionCode: 94,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Maldives, Republic of',
  RegionCode: 960,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Lebanon',
  RegionCode: 961,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Jordan',
  RegionCode: 962,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Syrian Arab Republic',
  RegionCode: 963,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Iraq',
  RegionCode: 964,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Kuwait',
  RegionCode: 965,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Saudi Arabia',
  RegionCode: 966,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Yemen, Republic of',
  RegionCode: 967,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Oman',
  RegionCode: 968,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'United Arab Emirates',
  RegionCode: 971,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Israel',
  RegionCode: 972,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bahrain',
  RegionCode: 973,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Qatar',
  RegionCode: 974,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bhutan',
  RegionCode: 975,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Mongolian`s Peoples Republic',
  RegionCode: 976,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Nepal',
  RegionCode: 977,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Iran, Islamic Republic of',
  RegionCode: 98,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}, {
  Region: 'Bhutan',
  RegionCode: 975,
  AreaCode: '',
  LocalNumber: '',
  phoneDetails: ''
}];
class Contact {
  constructor() {
    this.RecId = 0, this.FisrtName = '', this.LastName = '', this.Prefix = '', this.Status = '', this.JobTitle = '', this.JobFunction = '', this.Department = '', this.Email = '', this.OfficePhone = '', this.Extension = '', this.Mobile = '', this.HomePhone = '', this.Fax = '', this.Address1 = '', this.Address2 = '', this.City = '', this.State = '', this.Zip = '', this.Country = '', this.NickName = '', this.ManagersName = '', this.Anniversary = new Date(), this.BirthDay = new Date(), this.ContactTags = '', this.ContactCategories = '', this.UserCreated = '', this.UserModified = '', this.CreatedDate = new Date(), this.ModifiedDate = new Date(), this.VersionNumber = 0, this.MailingAddress1 = '', this.MailingAddress2 = '', this.MailingCity = '', this.MailingState = '', this.MailingZip = '', this.MailingCountry = '', this.PostalMailOptOut = false, this.EmailOptOut = false, this.ContactRegion = '', this.OfficePhoneCaption = '', this.MobileCaption = '', this.HomePhoneCaption = '', this.FaxCaption = '', this.FullName = '', this.SourceReference = '', this.User1 = '', this.User2 = '', this.User3 = '', this.User4 = '', this.User5 = '', this.User6 = new Date(), this.User7 = 0, this.User8 = 0, this.User9 = 0, this.User10 = 0, this.User11 = 0, this.User12 = 0, this.ESG_REASON = '', this.ESG_APPROVER = '', this.CUSTOM1 = false, this.CUSTOM2 = false, this.CUSTOM3 = false, this.CUSTOM4 = false, this.CUSTOM5 = false, this.CUSTOM6 = false, this.CUSTOM7 = false, this.CUSTOM8 = false, this.CUSTOM9 = false, this.CUSTOM10 = false, this.Quotation = false, this.SalesOrder = false, this.Invoice = false;
  }
}
const ContactList = [
  // {
  //       "Name": "sunil", "Category": "Secondary",
  //       "Job Title":"Sr. Software Engineer",
  //        "Phone": 9826071647,
  //       "Email": "susingh@gmail.com", "Quotation": true,
  //       "Sales Order": false, "Invoice": false
  // },
  // {
  //       "Name": "sunil", "Category": "Secondary",
  //       "Job Title":"Sr. Software Engineer",
  //        "Phone": 9826071647,
  //       "Email": "susingh@gmail.com", "Quotation": true,
  //       "Sales Order": false, "Invoice": false
  // },
  // {
  //       "Name": "sunil", "Category": "Secondary",
  //       "Job Title":"Sr. Software Engineer",
  //        "Phone": 9826071647,
  //       "Email": "susingh@gmail.com", "Quotation": true,
  //       "Sales Order": false, "Invoice": false
  // },
  // {
  //       "Name": "sunil", "Category": "Secondary",
  //       "Job Title":"Sr. Software Engineer",
  //        "Phone": 9826071647,
  //       "Email": "susingh@gmail.com", "Quotation": true,
  //       "Sales Order": false, "Invoice": false
  // }
];

/***/ }),

/***/ 19725:
/*!********************************************************!*\
  !*** ./src/app/main/sales/models/order-entry.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FreightItemModel: () => (/* binding */ FreightItemModel),
/* harmony export */   LineItemModel: () => (/* binding */ LineItemModel),
/* harmony export */   OrderTempModel: () => (/* binding */ OrderTempModel),
/* harmony export */   OrderTypeModel: () => (/* binding */ OrderTypeModel),
/* harmony export */   TaxDataModel: () => (/* binding */ TaxDataModel)
/* harmony export */ });
class OrderTypeModel {
  constructor() {
    this.Custkey = '';
    this.Custname = '';
    this.Custaddr1 = '';
    this.Custaddr2 = '';
    this.Custaddr3 = '';
    this.Custcity = '';
    this.Custstate = '';
    this.Custzip = '';
    this.Custcntry = '';
    this.Custattn = '';
    this.Shipkey = '';
    this.Shipname = '';
    this.Shipaddr1 = '';
    this.Shipaddr2 = '';
    this.Shipaddr3 = '';
    this.Shipcity = '';
    this.Shipstate = '';
    this.Shipzip = '';
    this.Shipcntry = '';
    this.Shipattn = '';
    this.Ordno = '';
    this.Selectstatus = '';
    this.Statusflg = '';
    this.Orddate = new Date();
    this.Reqdate = new Date();
    this.Canceldate = new Date();
    this.Backordseq = 0;
    this.Recurkey = '';
    this.Buyer = '';
    this.Custpono = '';
    this.Checkno = '';
    this.Checkamt = 0;
    this.Commsnovrd = 0;
    this.Location = '';
    this.Territkey = '';
    this.Salespkey = '';
    this.Termskey = '';
    this.Fobkey = '';
    this.Shipviakey = '';
    this.Commentkey = '';
    this.Custclass = '';
    this.Freightamt = 0;
    this.Discmultiplier = 0;
    this.RecUserID = '';
    this.RecDate = new Date();
    this.RecTime = new Date();
    this.CredCardTyp = '';
    this.CredCardNum = '';
    this.CredCardExp = new Date();
    this.CCAuthCode = '';
    this.CCNameOnCard = '';
    this.CCPhone = '';
    this.PymtRcptDate = new Date();
    this.Tax_key = '';
    this.Order_type = '';
    this.Recurred = false;
    this.Ref_Po_Qu = '';
    this.TaxLvl = '';
    this.DiscLvl = '';
    this.Order_Dis = 0;
    this.DocTxAmt = 0;
    this.SubTotal = 0;
    this.OrderTotal = 0;
    this.PrnSo = false;
    this.PrnPackList = false;
    this.MainDelivery = true;
    this.PackSlip = false;
    this.PrnPostInv = true;
    this.PurgeSo = true;
    this.Currency_Key = '';
    this.OrderMast = 0;
    this.Generated = '';
    this.NextRecDate = '';
    this.Free_Text = '';
    this.FreightFlag = false;
    this.CashSalesFlag = false;
    this.HistRetn = false;
    this.HistRetnSoNo = '';
    this.RebateKey = '';
    this.PromAccountKeyHdr = '';
    this.ProMoDiscountAmount = 0;
    this.ChkFreightAmtRebate = '';
    this.ChkPODRequired = false;
    this.TempID = '';
    this.ccNameCard = '';
    this.PromiseDate = new Date();
    this.ModifyUserID = '';
    this.createdate = new Date();
    this.modifydate = new Date();
    this.createuserid = '';
    this.modifyuserid = '';
    this.RecOwner = '';
    this.HoldingReason = '';
    this.OrderDiscount = 0;
    this.open_so_total = 0;
    this.BillToCustomer = '';
    this.CustnameDes = '';
    this.TermskeyDes = '';
    this.SalespkeyDes = '';
    this.FobkeyDes = '';
    this.Reference = '';
    this.Taxordtot = '';
    this.CommentkeyDes = '';
    this.ShipviakeyDes = '';
    this.PromAccountKeyHdrDes = '';
    this.TerritkeyDes = '';
    this.CustcntryDes = '';
    this.ShipcntryDes = '';
    this.RecurkeyDes = '';
    this.RebateKeyDes = '';
    this.LocationDes = '';
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
  }
}
class LineItemModel {
  constructor() {
    this.SOLineNo = 0;
    this.LineType = 'Inventory';
    this.ItemKey = '';
    this.Description = '';
    this.Location = '';
    this.SOUnit = '';
    this.OnOrder = 0;
    this.QtyOrder = 0;
    this.QtyRem = 0;
    this.BasePrice = 0;
    this.Extension = 0;
    this.PriceUOM = '';
    this.STockUOM = '';
    this.Tax = '';
    this.AccountKey = '';
    this.ReqDate = new Date();
    this.ShipDate = new Date();
    this.Price = 0;
    this.DiscountsValue = 0;
    this.TaxRate = 0;
    this.TaxAmount = 0;
    this.ContractNo = '';
    this.LineNet = 0;
    this.Tax1 = 0;
    this.Tax2 = 0;
    this.Tax3 = 0;
    this.Tax4 = 0;
    this.TxClcL1 = 0;
    this.TxClcL2 = 0;
    this.TxClcL3 = 0;
    this.TxClcL4 = 0;
    this.LineDiscount = 0;
    this.OrderDiscount = 0;
    this.ModifyOrdQty = 0;
    this.InvConvFact = 0;
    this.Dummy = 0;
    this.PriceConv = 0;
    this.DispBasePrice = 0;
    this.DiscType = '';
    this.KITParentItem = '';
    this.KITParentLocn = '';
    this.KITQty = 0;
    this.KITRow = 0;
    this.ExtraDiscount = 0;
    this.ExDiscAmt = 0;
    this.ExDiscTyp = '';
    // public printStatus: string = '';
    this.PromoID = '';
    this.PromAccountKey = '';
    this.DiscountSource = '';
    this.PromiseDate = new Date();
    this.CustReqDate = new Date();
    this.DispSeqNo = 0;
    this.ContainerKey = '';
    this.Comments = '';
    this.ContainerNo = 0;
    this.CntFillLevel = 0;
    this.OnHand = 0;
    this.CommitToSales = 0;
    this.CommitToProd = 0;
    this.TaxIncInPr = 0;
    this.AddModify = '';
    this.Masking = '';
    this.ReturnOrder = '';
    this.DiscountPR = 0;
    this.Available = 0;
    this.QtyBackOrd = 0;
    this.FillUOM = '';
    this.PriceGroup = '';
    this.PriceSource = '';
    this.RefOrdNo = '';
    this.TempDispSeqNO = 0;
    this.TempSortKey = 0;
    this.FlgTargetShipDateChanged = 0;
    this.FlgPromiseDateChanged = 0;
    this.NONINVITEMKEY = '';
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = '11-Mar-1950';
    this.User7 = '';
    this.User8 = '';
    this.User9 = '';
    this.User10 = '';
    this.User11 = '';
    this.User12 = '';
    this.ESG_REASON = 0;
    this.ESG_APPROVER = 0;
    this.CUSTOM1 = '';
    this.CUSTOM2 = '';
    this.CUSTOM3 = '';
    this.CUSTOM4 = '';
    this.CUSTOM5 = '';
    this.CUSTOM6 = '';
    this.CUSTOM7 = '';
    this.CUSTOM8 = '';
    this.CUSTOM9 = '';
    this.CUSTOM10 = '';
    this.uomUnit = [];
    this.priceUnits = [];
    this.isLineDisabled = false;
    this.isLocationDisabled = false;
    this.isItemKeyDisabled = false;
  }
}
class FreightItemModel {
  constructor() {
    this.Description = "";
    this.Amt = 0.00;
    this.FreightAccount = "";
    this.For_Amt = 0.00;
    this.Default = true;
    this.RowNo = 0;
    this.PONo = "";
    this.ReceiptNo = "";
    this.TempNo = 0;
    this.CallType = "";
    this.FreightKey = "";
  }
}
class TaxDataModel {
  constructor() {
    this.RegNo = 0;
    this.DocNo = '';
    this.DocLinNo = 0;
    this.Doctype = '';
    this.Docdate = new Date();
    this.RefDocNo = 0;
    this.RefDocLinNo = 0;
    this.RefDocType = '';
    this.RefDocDate = new Date();
    this.TaxKey = '';
    this.VattaxKey = '';
    this.taxLevel = 0;
    this.TaxType = '';
    this.TaxAbleAmt = 0;
    this.TaxRate = 0;
    this.TaxAmt = 0;
    this.TaxAccountKey = 0;
    this.CurrencyKey = '';
    this.TaxAuthority = '';
    this.SurChargAuthority = '';
    this.Recuserid = '';
    this.Recdate = new Date();
    this.Modifieddate = new Date();
    this.User1 = '';
    this.User2 = '';
    this.User3 = '';
    this.User4 = '';
    this.User5 = '';
    this.User6 = '';
    this.User7 = 0;
    this.User8 = 0;
    this.User9 = 0;
    this.User10 = 0;
    this.User11 = 0;
    this.User12 = 0;
    this.ESG_REASON = '';
    this.ESG_APPROVER = '';
    this.CUSTOM2 = '';
    this.Recalculate = true;
  }
}
class OrderTempModel {
  constructor() {
    this.Cell = false;
    this.ItemKey = '';
    this.ItemType = '';
    this.ItmDesc = '';
    this.Location = '';
    this.OrdrQty = 0;
    this.Qty = 0;
    this.TempID = '';
    this.UOM = '';
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_main_sales_http_customer-master_service_ts-src_app_main_sales_models_customer-070856.js.map