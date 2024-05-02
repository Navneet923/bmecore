"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["default-src_app_main_purchase_constant_po-entry_const_ts"],{

/***/ 67377:
/*!**********************************************************!*\
  !*** ./src/app/main/purchase/constant/po-entry.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pOrderConstants: () => (/* binding */ pOrderConstants),
/* harmony export */   ropConstants: () => (/* binding */ ropConstants)
/* harmony export */ });
class pOrderConstants {
  static #_ = this.garrLineTypes = ['Inventory', 'Non-Inventory'];
  static #_2 = this.garrLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'DispSeqNo',
    title: 'SEQNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'LineType',
    title: 'LINEITEM',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'Line Item.ItemKey'
  }, {
    type: 'text',
    display: true,
    field: 'Description',
    title: 'Description',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Location',
    title: 'Location',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'PO_Unit',
    title: 'POUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.PO Unit'
  }, {
    type: 'number',
    display: true,
    field: 'QtyOrder',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'QtyRem',
    title: 'QTYREMAINING',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'PriceUOM',
    title: 'PRICEUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.Price Unit'
  }, {
    type: 'number',
    display: true,
    field: 'DispBasicPrice',
    title: 'BASEPRICE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: true,
    field: 'Extension',
    title: 'Extension',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'ExtraDiscPR',
    title: 'EXTRADISCOUNTPRS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'Tax',
    title: 'TAX',
    isHyperLink: true,
    msLabelKey: 'Line Item.Tax'
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'TaxAmount',
    //   title: 'Tax Amount',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'LineNet',
    title: 'LINENET',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'AccountKey',
    title: 'ACCOUNTKEY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'ReqDate',
    title: 'REQDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Comments',
    title: 'Comments',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'Price',
    title: 'Price',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'Discounts',
    title: 'DISCOUNTSVALUE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'ContractNo',
    title: 'CONTRACTNO',
    isHyperLink: false,
    msLabelKey: 'Line Item.ContractNo'
  }, {
    type: 'numstring',
    display: false,
    field: 'ExtraDiscAmt',
    title: 'EXTRADISCOUNTAMT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'OrderDiscount',
    title: 'ORDERDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'LineDiscount',
    title: 'LINEDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'MdfOrdQty',
    title: 'QTYREMAININGTODISPATCH',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'RequisitionNo',
    title: 'REQUISITIONNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'PO_Line_Status',
    title: 'POLINESTATUS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'PrSource',
    title: 'PRICESOURCE',
    isHyperLink: false,
    msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'Tax_Detail',
    //   title: 'Tax Detail /Qty',
    //   isHyperLink: false,
    //   msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'OnHand',
    //   title: 'Qty on Hand',
    //   isHyperLink: false,
    //   msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'Available',
    //   title: 'Qty Available',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }];
  static #_3 = this.garrReqLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'DispSeqNo',
    title: 'SEQNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'LineType',
    title: 'LINEITEM',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'Line Item.ItemKey'
  }, {
    type: 'text',
    display: true,
    field: 'Description',
    title: 'Description',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Location',
    title: 'Location',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'PO_Unit',
    title: 'POUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.PO Unit'
  }, {
    type: 'number',
    display: true,
    field: 'QtyOrder',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'QtyRem',
    title: 'QTYREMAINING',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'PriceUOM',
    title: 'PRICEUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.Price Unit'
  }, {
    type: 'number',
    display: true,
    field: 'DispBasicPrice',
    title: 'BASEPRICE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: true,
    field: 'Extension',
    title: 'Extension',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'ExtraDiscPR',
    title: 'EXTRADISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'Tax',
    title: 'TAX',
    isHyperLink: true,
    msLabelKey: 'Line Item.Tax'
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'TaxAmount',
    //   title: 'Tax Amount',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'LineNet',
    title: 'LINENET',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'AccountKey',
    title: 'ACCOUNTKEY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'ReqDate',
    title: 'REQDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'Comments',
    title: 'COMMENTS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'Price',
    title: 'PRICE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'Discounts',
    title: 'DISCOUNTSVALUE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'ContractNo',
    title: 'CONTRACTNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'ExtraDiscAmt',
    title: 'EXTRADISCOUNTAMT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'OrderDiscount',
    title: 'ORDERDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'LineDiscount',
    title: 'LINEDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'MdfOrdQty',
    title: 'QTYREMAININGTODISPATCH',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'RequisitionNo',
    title: 'REQUISITIONNO',
    isHyperLink: false,
    msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'PO_Line_Status',
    //   title: 'PO Line Status',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'PrSource',
    title: 'PRICESOURCE',
    isHyperLink: false,
    msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'Tax_Detail',
    //   title: 'Tax Detail /Qty',
    //   isHyperLink: false,
    //   msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'OnHand',
    //   title: 'Qty on Hand',
    //   isHyperLink: false,
    //   msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'Available',
    //   title: 'Qty Available',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }];
  static #_4 = this.garrVatTaxList = [{
    type: 'text',
    display: true,
    field: 'VattaxKey',
    title: 'PURCHASEMODULE.VAT_TAX'
  }, {
    type: 'text',
    display: true,
    field: 'TaxType',
    title: 'PURCHASEMODULE.TAX_TYPE'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAbleAmt',
    title: 'PURCHASEMODULE.TAXABLE_AMT'
  }, {
    type: 'number',
    display: true,
    field: 'TaxRate',
    title: 'PURCHASEMODULE.TAXRATE'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAmt',
    title: 'PURCHASEMODULE.TAX_AMT'
  }, {
    type: 'text',
    display: true,
    field: 'TaxAccountKey',
    title: 'PURCHASEMODULE.ACCOUNT'
  }, {
    type: 'text',
    display: true,
    field: 'CurrencyKey',
    title: 'PURCHASEMODULE.CURRENCY'
  }, {
    type: 'text',
    display: true,
    field: 'TaxAuthority',
    title: 'PURCHASEMODULE.TAX_AUTHORITY'
  }, {
    type: 'text',
    display: true,
    field: 'SurChargAuthority',
    title: 'PURCHASEMODULE.SURCHARG_AUTHORITY'
  }];
  static #_5 = this.garrFlatTaxList = [{
    type: 'text',
    display: true,
    field: 'TaxLevel',
    title: 'PURCHASEMODULE.TAXLEVELS'
  }, {
    type: 'number',
    display: true,
    field: 'TaxPer',
    title: 'PURCHASEMODULE.TAXPER'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAmt',
    title: 'PURCHASEMODULE.TAXAMOUNT'
  }];
  static #_6 = this.garrLineItemRowBtn = [{
    title: 'View Item Location',
    key: 'View_Item_Location'
  }, {
    title: 'View Tax Details',
    key: 'View_Tax_Details'
  }, {
    title: 'Alternate Item',
    key: 'Alternate_Item'
  }, {
    title: 'Fetch Original Price',
    key: 'Fetch_Original_Price'
  }, {
    title: 'Override Tax Amount',
    key: 'Override_Tax_Amount'
  }, {
    title: 'Production Issue History',
    key: 'Production_Issue_History'
  }, {
    title: 'View Contract',
    key: 'View_Item_Contract'
  }, {
    title: 'View Price Breaks',
    key: 'View_Price_Breaks'
  }, {
    title: 'View Discounts',
    key: 'View_Discounts'
  }, {
    title: 'PO History',
    key: 'PO_History'
  }];
  static #_7 = this.garrToolbarItems = [{
    iconClass: 'fa-calculator',
    text: 'Calculate Tax and Discount',
    key: 'CALCULATETAXDISCOUNT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-calendar-times-o',
    text: 'Total Recalculate',
    key: 'TOTALRECALCULATE',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-ban',
    text: 'Cancel SO',
    key: 'CANCELSO',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-times-circle-o',
    text: 'Close SO',
    key: 'CLOSESO',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-shopping-cart',
    text: 'Release/Hold Order',
    key: 'RELEASEHOLDORDER',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-file-text-o',
    text: 'View Contract',
    key: 'VIEWCONTRACT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-envelope-o',
    text: 'Send Mail',
    key: 'SENDEMAIL',
    tab: 'common',
    isActive: false
  },
  // {
  //   iconClass: 'fa-bookmark-o',
  //   text: 'Purchase order Pegging',
  //   key: 'PURCHASEORDERPEGGING',
  //   tab: 'common',
  //   isActive: false
  // },
  // {
  //   iconClass: 'fa-bolt',
  //   text: 'Light CRM',
  //   key: 'LIGHTCRM',
  //   tab: 'lineItem',
  //   isActive: false
  // },
  {
    iconClass: 'fa-balance-scale',
    text: 'Laded Weight',
    key: 'LADEDWEIGHT',
    tab: 'lineItem',
    isActive: false
  }, {
    iconClass: 'fa fa-archive',
    text: 'Archived Order',
    key: 'ARCHIVEDORDER',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-external-link-square',
    text: 'Processed Orders',
    key: 'PROCESSEDORDERS',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-print',
    text: 'Print',
    key: 'PRINT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-hand-scissors-o',
    text: 'Go To Receipt',
    key: 'GOTORECEIPT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-arrows-alt',
    text: 'Assign Dimension ID',
    key: 'ASSIGNDIMENSIONID',
    tab: 'common',
    isActive: false
  }];
  static #_8 = this.garrFreightLineCol = [{
    type: 'text',
    title: 'PURCHASEMODULE.DESCRIPTION',
    field: 'Description',
    display: true
  }, {
    type: 'number',
    title: 'PURCHASEMODULE.AMT',
    field: 'Amt',
    display: true
  }, {
    type: 'lookup',
    title: 'PURCHASEMODULE.FREIGHTACCOUNT',
    field: 'FreightAccount',
    display: true
  }, {
    type: 'number',
    title: 'PURCHASEMODULE.FOREIGNAMT',
    field: 'For_Amt',
    display: true
  }, {
    type: 'text',
    title: 'PURCHASEMODULE.CALLTYPE',
    field: 'CallType',
    display: false
  }, {
    type: 'text',
    title: 'PURCHASEMODULE.PONO',
    field: 'PONo',
    display: false
  }, {
    type: 'text',
    title: 'PURCHASEMODULE.FREIGHTKEY',
    field: 'FreightKey',
    display: false
  }, {
    type: 'text',
    title: 'PURCHASEMODULE.TEMPNO',
    field: 'TempNo',
    display: false
  }];
  static #_9 = this.garrOrderTypeOption = ['Normal', 'Return', 'Direct Delivery', 'Rejected Return'];
  static bmgfPOHistorysSql(pobjLineData) {
    let pobjReqData = {
      ScreenName: 'PurchaseOrderEntry',
      LookUpKey: 'POInfo',
      Filter1: pobjLineData.ItemKey,
      Filter2: pobjLineData.ItemKey,
      Filter3: pobjLineData.Location,
      Filter4: pobjLineData.Location
    };
    return pobjReqData;
  }
  static bmgfPOHistorysDetailSql(pobjLineData) {
    let pobjReqData = {
      ScreenName: 'PurchaseOrderEntry',
      LookUpKey: 'VouchInfo',
      Filter1: pobjLineData.ItemKey,
      Filter2: pobjLineData.ItemKey,
      Filter3: pobjLineData.Location,
      Filter4: pobjLineData.Location
    };
    return pobjReqData;
  }
  static bmgfPurchaseDistParam() {
    let pobjReqData = {
      ScreenName: 'PurchaseOrderEntry',
      LookUpKey: 'DefaultData'
    };
    return pobjReqData;
  }
  static bmgfPurchaseTSCParam() {
    let pobjReqData = {
      ScreenName: 'All Screen',
      LookUpKey: 'TCSSwitch'
    };
    return pobjReqData;
  }
  static bmgfDeleteFreightItemSql(pobjData) {
    let pobjReqData = {
      ScreenName: "FreightComponent",
      LookUpKey: "DeleteFreight",
      Filter1: pobjData.PONo,
      Filter2: pobjData.ReceiptNo,
      Filter3: pobjData.FreightKey,
      Filter4: "SO",
      Filter5: pobjData.Description.trim(),
      Filter6: pobjData.FreightAccount,
      Filter7: pobjData.Amt
    };
    return pobjReqData;
  }
  static bmgfGetOrdReturnCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POReturnCount"
    };
    return pobjReqData;
  }
  static bmgfGetOrdNewStatusCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "PONewStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetOrdRecivedToWeekCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "PORecivedToWeekCount"
    };
    return pobjReqData;
  }
  static bmgfGetOrdOverDueCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POOverDueCount"
    };
    return pobjReqData;
  }
  static bmgfGetProcessedOrdCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POProcessedOrdCount"
    };
    return pobjReqData;
  }
  static bmgfGetCosedOrdCount() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POCosedOrdCount"
    };
    return pobjReqData;
  }
  static bmgfGetOrdOverDueData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POOverDueData"
    };
    return pobjReqData;
  }
  static bmgfGetOrdRecivedToWeekData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "PORecivedToWeekData"
    };
    return pobjReqData;
  }
  static bmgfGetClosedOrdData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POClosedOrdData"
    };
    return pobjReqData;
  }
  static bmgfGetProcessedOrdData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POProcessedOrdData"
    };
    return pobjReqData;
  }
  static bmgfGetReturnOrdData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "POReturnOrdData"
    };
    return pobjReqData;
  }
  static bmgfGetNewOrdData() {
    let pobjReqData = {
      ScreenName: "purchseOrderEntry",
      LookUpKey: "PONewOrdData"
    };
    return pobjReqData;
  }
  static #_10 = this.garrPurchaseReqToolbarItems = [{
    iconClass: 'fa-calculator',
    text: 'Calculate Tax and Discount',
    key: 'CALCULATETAXDISCOUNT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-calendar-times-o',
    text: 'Total Recalculate',
    key: 'TOTALRECALCULATE',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-ban',
    text: 'Cancel SO',
    key: 'CANCELSO',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-file-text-o',
    text: 'View Contract',
    key: 'VIEWCONTRACT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-exchange',
    text: 'Transfer To PO',
    key: 'TRANSTOPO',
    tab: 'common',
    isActive: false
  }];
  static #_11 = this.garrIndentLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'RowNum',
    title: 'SEQNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Itemkey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'Line Item.Item Key'
  }, {
    type: 'text',
    display: true,
    field: 'ItemDesc',
    title: 'ItemDesc',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Location',
    title: 'Location',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: true,
    field: 'Qtyord',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'UOM',
    title: 'UOM',
    isHyperLink: true,
    msLabelKey: 'Line Item.PO Unit'
  }, {
    type: 'lookup',
    display: true,
    field: 'Vendkey',
    title: 'Vendkey',
    isHyperLink: true,
    msLabelKey: 'Line Item.Vendor Key'
  }, {
    type: 'text',
    display: true,
    field: 'Reason',
    title: 'Reason',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'RecDate',
    title: 'RECDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: true,
    field: 'Price',
    title: 'Price',
    isHyperLink: false,
    msLabelKey: ''
  }];
  static #_12 = this.garrPurchaseIndentToolbarItems = [{
    iconClass: 'fa-ban',
    text: 'Cancel SO',
    key: 'CANCELSO',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-envelope-o',
    text: 'Request For Quote',
    key: 'REQUESTFORQUOTE',
    tab: 'common',
    isActive: false
  }];
  static #_13 = this.garrIndentLineItemRowBtn = [{
    title: 'View Item Location',
    key: 'View_Item_Location'
  }];
  static #_14 = this.garrReqQutLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'RowNum',
    title: 'SEQNO'
  }, {
    type: 'text',
    display: true,
    field: 'Itemkey',
    title: 'ITEMKEY'
  }, {
    type: 'text',
    display: true,
    field: 'ItemDesc',
    title: 'ITEMDESC'
  }, {
    type: 'number',
    display: true,
    field: 'Qtyord',
    title: 'QUANTITY'
  }, {
    type: 'text',
    display: true,
    field: 'UOM',
    title: 'UOMUNIT'
  }, {
    type: 'date',
    display: true,
    field: 'ReqDate',
    title: 'REQDATE'
  }];
  static #_15 = this.garrReqQutVendorLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'RowNum',
    title: 'SEQNO'
  }, {
    type: 'text',
    display: true,
    field: 'VendKey',
    title: 'VENDKEY'
  }, {
    type: 'text',
    display: true,
    field: 'VendName',
    title: 'VENDERNAME'
  }, {
    type: 'text',
    display: true,
    field: 'email',
    title: 'EMAIL'
  }];
  static #_16 = this.garrVoucherLineItemCol = [{
    type: 'checkbox',
    display: true,
    field: 'SEL',
    title: 'SELECT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'Rowno',
    title: 'SEQNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PONO',
    title: 'PURCHASEORDERNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'POLinNO',
    title: 'POLINNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PRNO',
    title: 'PRNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PRLinNo',
    title: 'PRLINNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'Line Item.ItemKey'
  }, {
    type: 'text',
    display: true,
    field: 'Description',
    title: 'Description',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'Location',
    title: 'Location',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PO_Unit',
    title: 'POUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.PO Unit'
  }, {
    type: 'number',
    display: true,
    field: 'QtyAccepted',
    title: 'QTYACCEPTED',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PriceUOM',
    title: 'PRICEUNIT',
    isHyperLink: true,
    msLabelKey: 'Line Item.PriceUOM'
  }, {
    type: 'number',
    display: true,
    field: 'DisplayPrice',
    title: 'POPRICE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'BasePrice',
    title: 'BASEPRICESTKUOM',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: true,
    field: 'Extension',
    title: 'Extension',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'InvoiceNo',
    title: 'INVOICENO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'InvoiceDate',
    title: 'INVOICEDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'ExtraDiscPR',
    title: 'EXTRADISCOUNTPRS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'Tax',
    title: 'TAX',
    isHyperLink: true,
    msLabelKey: 'Line Item.Tax'
  }, {
    type: 'viewText',
    display: false,
    field: 'AccountKey',
    title: 'ACCOUNTKEY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'DiscountsValue',
    title: 'DISCOUNTSVALUE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'TaxAmount',
    title: 'TAXAMOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'LineDiscount',
    title: 'LINEDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'ExtraDiscAmt',
    title: 'EXTRADISCOUNTAMT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'OrderDiscount',
    title: 'ORDERDISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: false,
    field: 'BackOrder',
    title: 'BACKORD',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'TDSType',
    title: 'TDSTYPE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'TDSRate',
    title: 'TDSRATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'TDSAMT',
    title: 'TDSAMOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'AdvTDSDeducted',
    title: 'ADVTDSDEDUCTED',
    isHyperLink: false,
    msLabelKey: ''
  }];
  static #_17 = this.garrVoucherLineItemRowBtn = [{
    title: 'View Item Location',
    key: 'View_Item_Location'
  }, {
    title: 'View Tax Details',
    key: 'View_Tax_Details'
  }, {
    title: 'View Landed Cost',
    key: 'View_Landed_Cost'
  }];
  static #_18 = this.garrVoucherToolbarItems = [{
    iconClass: 'fa-calculator',
    text: 'Calculate Tax and Discount',
    key: 'CALCULATETAXDISCOUNT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-arrows-alt',
    text: 'Assign Dimension ID',
    key: 'ASSIGNDIMENSIONID',
    tab: 'common',
    isActive: false
  }];
  static bmgfGetNewStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseRequisition",
      LookUpKey: "PRNewStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetApprovedStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseRequisition",
      LookUpKey: "PRApprovedStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetProcessStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseRequisition",
      LookUpKey: "PRProcessStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetTransferredStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseRequisition",
      LookUpKey: "PRTransferredStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetIndentNewStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseIndentEntry",
      LookUpKey: "PINewStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetIndentApproverStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseIndentEntry",
      LookUpKey: "PIApproverStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetIndentApprovedStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseIndentEntry",
      LookUpKey: "PIApprovedStatusCount"
    };
    return pobjReqData;
  }
  static bmgfGetIndentTransferredStatusCount() {
    let pobjReqData = {
      ScreenName: "purchaseIndentEntry",
      LookUpKey: "PITransferredStatusCount"
    };
    return pobjReqData;
  }
}
class ropConstants {
  static #_ = this.garrLineItemCol = [{
    type: 'checkbox',
    display: true,
    field: 'Select',
    title: 'SELECT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'ROP Triggered PO Details.ItemKey'
  }, {
    type: 'text',
    display: true,
    field: 'Description',
    title: 'DESCRIPTION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'Location',
    title: 'LOCATION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: true,
    field: 'PO_Unit',
    title: 'POUNIT',
    isHyperLink: true,
    msLabelKey: 'ROP Triggered PO Details.PO Unit'
  }, {
    type: 'text',
    display: true,
    field: 'InvUOM',
    title: 'INVUOM',
    isHyperLink: true,
    msLabelKey: 'ROP Triggered PO Details.InvUOM'
  }, {
    type: 'number',
    display: true,
    field: 'QtyOrder',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'VendorKey',
    title: 'VENDORKEY',
    isHyperLink: true,
    msLabelKey: 'ROP Triggered PO Details.VendorKey'
  }, {
    type: 'date',
    display: true,
    field: 'OrdDate',
    title: 'ORDDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'ReqDate',
    title: 'REQDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'Tax',
    title: 'TAX',
    isHyperLink: true,
    msLabelKey: 'ROP Triggered PO Details.Tax'
  }];
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_main_purchase_constant_po-entry_const_ts.js.map