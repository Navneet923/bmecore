"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["default-src_app_main_sales_constant_sales-order-const_ts"],{

/***/ 76722:
/*!**********************************************************!*\
  !*** ./src/app/main/sales/constant/sales-order-const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SOConstants: () => (/* binding */ SOConstants)
/* harmony export */ });
class SOConstants {
  static #_ = this.garrExDiscountTypes = ['Monetary Amount', 'Percentage Amount', 'Monetary Unit Amount'];
  static #_2 = this.garrLineTypes = ['Inventory', 'Non-Inventory', 'KIT'];
  static #_3 = this.garrLineItemCol = [{
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
    title: 'Line Item',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: true,
    field: 'ItemKey',
    title: 'Item Key',
    isHyperLink: true,
    msLabelKey: 'Line Item.Item Key'
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
    field: 'SOUnit',
    title: 'SO Unit',
    isHyperLink: true,
    msLabelKey: 'Line Item.SO Unit'
  }, {
    type: 'number',
    display: true,
    field: 'QtyOrder',
    title: 'Qty Order',
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
    title: 'Price Unit',
    isHyperLink: true,
    msLabelKey: 'Line Item.Price Unit'
  }, {
    type: 'number',
    display: true,
    field: 'DispBasePrice',
    title: 'Base Price',
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
    type: 'lookup',
    display: false,
    field: 'Tax',
    title: 'TAX',
    isHyperLink: true,
    msLabelKey: 'Line Item.Tax'
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
    field: 'LineNet',
    title: 'LINENET',
    isHyperLink: false
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
    title: 'COMMENTS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'ShipDate',
    title: 'SHIPDATE',
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
    field: 'DiscountsValue',
    title: 'DISCOUNTSVALUE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'ContractNo',
    title: 'CONTRACTNO',
    isHyperLink: true,
    msLabelKey: 'Line Item.ContractNo'
  }, {
    type: 'button',
    display: false,
    field: 'ExtraDiscount',
    title: 'EXTRADISCOUNT',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'ExDiscTyp',
    title: 'EXTRADISCOUNTTYPE',
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
    field: 'QtyBackOrd',
    title: 'QTYREMAININGTODISPATCH',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'PromoID',
    title: 'PROMOID',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'CustReqDate',
    title: 'TARGETSHIPDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'lookup',
    display: false,
    field: 'PromAccountKey',
    title: 'PROMOACCOUNTKEY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'RefOrdNo',
    title: 'REFORDERNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: false,
    field: 'PromiseDate',
    title: 'PROMISEDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'SO_Line_Status',
    title: 'SOLINESTATUS',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'DiscountSource',
    title: 'DISCOUNTSOURCE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'text',
    display: false,
    field: 'PriceSource',
    title: 'PRICESOURCE',
    isHyperLink: false,
    msLabelKey: ''
    // }, {
    //   type: 'text',
    //   display: false,
    //   field: 'Tax_Detail',
    //   title: 'TAXDETAILQTY',
    //   isHyperLink: false,
    //   msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'OnHand',
    title: 'QTYONHAND',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numstring',
    display: false,
    field: 'Available',
    title: 'QTYAVAILABLE',
    isHyperLink: false,
    msLabelKey: ''
  }];
  static #_4 = this.garrVatTaxList = [{
    type: 'text',
    display: true,
    field: 'VattaxKey',
    title: 'ADDSALESORDER.VAT_TAX'
  }, {
    type: 'text',
    display: true,
    field: 'TaxType',
    title: 'ADDSALESORDER.TAX_TYPE'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAbleAmt',
    title: 'ADDSALESORDER.TAXABLE_AMT'
  }, {
    type: 'number',
    display: true,
    field: 'TaxRate',
    title: 'ADDSALESORDER.TAXRATE'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAmt',
    title: 'ADDSALESORDER.TAX_AMT'
  }, {
    type: 'text',
    display: true,
    field: 'TaxAccountKey',
    title: 'ADDSALESORDER.ACCOUNT'
  }, {
    type: 'text',
    display: true,
    field: 'CurrencyKey',
    title: 'ADDSALESORDER.CURRENCY'
  }, {
    type: 'text',
    display: true,
    field: 'TaxAuthority',
    title: 'ADDSALESORDER.TAX_AUTHORITY'
  }, {
    type: 'text',
    display: true,
    field: 'SurChargAuthority',
    title: 'ADDSALESORDER.SURCHARG_AUTHORITY'
  }];
  static #_5 = this.garrFlatTaxList = [{
    type: 'text',
    display: true,
    field: 'TaxLevel',
    title: 'ADDSALESORDER.TAXLEVELS'
  }, {
    type: 'text',
    display: true,
    field: 'TaxPer',
    title: 'ADDSALESORDER.TAXPER'
  }, {
    type: 'number',
    display: true,
    field: 'TaxAmt',
    title: 'ADDSALESORDER.TAXAMOUNT'
  }];
  static #_6 = this.garrLineItemRowBtn = [{
    title: 'Select Lot',
    key: 'Select_Lot',
    icon: '#grd-a-slctLot'
  }, {
    title: 'View Item Location',
    key: 'View_Item_Location',
    icon: '#grd-a-location'
  }, {
    title: 'Fetch Original Price',
    key: 'Fetch_Original_Price',
    icon: '#grd-a-fetchPrice'
  }, {
    title: 'Warehouse Transfer',
    key: 'Warehouse_Transfer',
    icon: '#grd-a-whTrnsfer'
  }, {
    title: 'Alternate Item',
    key: 'Alternate_Item',
    icon: '#grd-a-altrntItem'
  }, {
    title: 'Item Sales History',
    key: 'Item_Sales_History',
    icon: '#grd-a-ItemSalesHstry'
  }, {
    title: 'View Item Contract',
    key: 'View_Item_Contract',
    icon: '#grd-a-ItemSalesContract'
  }, {
    title: 'View Item Product Data',
    key: 'View_Item_Product_Data',
    icon: '#grd-a-ItemProdctData'
  }, {
    title: 'View Formula Product Data',
    key: 'View_Formula_Product_Data',
    icon: '#grd-a-FrmlaProdctData'
  }, {
    title: 'View Customer Item',
    key: 'View_Customer_Item',
    icon: '#grd-a-CustmrItem'
  }
  //, {
  //   title: 'Available To Promise',
  //   key: 'Available_To_Promise'
  // }
  ];
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
    iconClass: 'fa-file-text-o',
    text: 'View Contract',
    key: 'VIEWCONTRACT',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-shopping-cart',
    text: 'Release/Hold Order',
    key: 'RELEASEHOLDORDER',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-user',
    text: 'Change owner',
    key: 'CHANGEOWNER',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-envelope-o',
    text: 'Send Mail',
    key: 'SENDEMAIL',
    tab: 'common',
    isActive: false
  },
  //, {
  //   iconClass: 'fa-bookmark-o',
  //   text: 'Sales order Pegging',
  //   key: 'SALESORDERPEGGING',
  //   tab: 'common',
  //   isActive: false
  // },
  {
    iconClass: 'fa-calendar',
    text: 'Sales History',
    key: 'SALESHISTORY',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-street-view',
    text: 'View Age Brackets',
    key: 'VIEWAGEBRACKETS',
    tab: 'common',
    isActive: false
  },
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
    iconClass: 'fa-list',
    text: 'Go To Picklist',
    key: 'GOTOPICKLIST',
    tab: 'common',
    isActive: false
  }, {
    iconClass: 'fa-hand-scissors-o',
    text: 'Go To Shipment',
    key: 'GOTOSHIPMENT',
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
    title: 'ORDERSHIP.DESCRIPTION',
    field: 'Description',
    display: true
  }, {
    type: 'number',
    title: 'ORDERSHIP.AMOUNT',
    field: 'Amt',
    display: true
  }, {
    type: 'lookup',
    title: 'ORDERSHIP.FREIGHTACCOUNT',
    field: 'FreightAccount',
    display: true
  }, {
    type: 'number',
    title: 'ORDERSHIP.FOREIGNAMT',
    field: 'For_Amt',
    display: true
  }, {
    type: 'text',
    title: 'ORDERSHIP.CALLTYPE',
    field: 'CallType',
    display: false
  }, {
    type: 'text',
    title: 'ORDERSHIP.PONO',
    field: 'PONo',
    display: false
  }, {
    type: 'text',
    title: 'ORDERSHIP.FREIGHTKEY',
    field: 'FreightKey',
    display: false
  }, {
    type: 'text',
    title: 'ORDERSHIP.TEMPNO',
    field: 'TempNo',
    display: false
  }];
  static #_9 = this.garrOrderTypeOption = ['Normal', 'Return'];
  static bmgfItemSalesSql(pobjOrderEntry, pobjLineData) {
    // let SqlQuery = `Select A.LineItemTyp,A.Itemkey,A.Description,A.Location,A.UOM,A.Qtyord,A.BasePrice,A.ExtLinAmt,A.Metatronfld,A.OrdNo,B.OrdDate,Case When A.Metatronfld='CN' then 'CONTRACT' When A.Metatronfld='INLOC' then 'ITEM LOCATION'When A.Metatronfld='CI' then 'CUSTOMER/ITEM PRICE MATRIX' When A.Metatronfld='CP' then 'CUSTOMER/PRICEGP PRICE MATRIX' When A.Metatronfld='CCI' then 'CUSTOMER CLASS/ITEM PRICE MATRIX' When A.Metatronfld='CCP' then 'CUST CLASS/ PRICEGRP PRICE MATRIX' When A.Metatronfld='CCICP' then 'CUST CLASS/ ITEM CLASS PRICE MATRIX' When A.Metatronfld='U' then 'USER DEFINED' When A.Metatronfld='CIPR1' then 'CUSTOMER/ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR2' then 'CUSTOMER/PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR3' then 'CUSTOMER/ITEM CLASS PROMOTIONAL PRICE' When A.Metatronfld='CIPR4' then 'CUSTOMER/ITEM LOCATION PROMOTIONAL PRICE'
    //     When A.Metatronfld='CIPR5' then 'CUSTOMER GROUP/ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR6' then 'CUSTOMER GROUP/PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR7' then 'CUSTOMER GROUP/ITEM CLASS PROMOTIONAL PRICE' When A.Metatronfld='CIPR8' then 'CUSTOMER GROUP/ITEM LOCATION PROMOTIONAL PRICE'
    //     When A.Metatronfld='CIPR9' then 'ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR10' then 'PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR11' then 'ITEM CLASS PROMOTIONAL PRICE' When A.Metatronfld='CIPR12' then 'ITEM LOCATION PROMOTIONAL PRICE' When A.Metatronfld='CUSTPRL' then 'CUSTOMER/ PRICE LIST' When A.Metatronfld='SHIPPRL' then 'SHIP TO/ PRICE LIST'
    //     When A.Metatronfld='SALSPPRL' then 'SALESPERSON/ PRICE LIST' When A.Metatronfld='TERTPRL' then 'TERRITORY/ PRICE LIST' End  As PriceSource  From OELIN A,OEHDR B  where A.ItemKey='`+ pobjLineData.ItemKey + `'AND A.Location = '` + pobjLineData.Location + `' AND A.OrdNo=B.OrdNo And B.Custkey = '` + pobjOrderEntry.Custkey + ` 'UNION ALL Select A.LineItemTyp,A.Itemkey,A.Description,A.Location,A.UOM,A.Qtyord,A.BasePrice, A.ExtLinAmt,A.Metatronfld,A.OrdNo,B.OrdDate,
    // Case When A.Metatronfld='CN' then 'CONTRACT' When A.Metatronfld='INLOC' then 'ITEM LOCATION'
    //     When A.Metatronfld='CI' then 'CUSTOMER/ITEM PRICE MATRIX' When A.Metatronfld='CP' then 'CUSTOMER/PRICEGP PRICE MATRIX' When A.Metatronfld='CCI' then 'CUSTOMER CLASS/ITEM PRICE MATRIX'
    //     When A.Metatronfld='CCP' then 'CUST CLASS/ PRICEGRP PRICE MATRIX' When A.Metatronfld='CCICP' then 'CUST CLASS/ ITEM CLASS PRICE MATRIX' When A.Metatronfld='U' then 'USER DEFINED' When A.Metatronfld='CIPR1' then 'CUSTOMER/ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR2' then 'CUSTOMER/PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR3' then 'CUSTOMER/ITEM CLASS PROMOTIONAL PRICE' When A.Metatronfld='CIPR4' then 'CUSTOMER/ITEM LOCATION PROMOTIONAL PRICE' When A.Metatronfld='CIPR5' then 'CUSTOMER GROUP/ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR6' then 'CUSTOMER GROUP/PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR7' then 'CUSTOMER GROUP/ITEM CLASS PROMOTIONAL PRICE'
    //     When A.Metatronfld='CIPR8' then 'CUSTOMER GROUP/ITEM LOCATION PROMOTIONAL PRICE' When A.Metatronfld='CIPR9' then 'ITEM PROMOTIONAL PRICE' When A.Metatronfld='CIPR10' then 'PRICEGP PROMOTIONAL PRICE' When A.Metatronfld='CIPR11' then 'ITEM CLASS PROMOTIONAL PRICE' When A.Metatronfld='CIPR12' then 'ITEM LOCATION PROMOTIONAL PRICE' When A.Metatronfld='CUSTPRL' then 'CUSTOMER/ PRICE LIST' When A.Metatronfld='SHIPPRL' then 'SHIP TO/ PRICE LIST' When A.Metatronfld='SALSPPRL' then 'SALESPERSON/ PRICE LIST' When A.Metatronfld='TERTPRL' then 'TERRITORY/ PRICE LIST' End  As PriceSource From OELINH A,OEHDRH B  where A.ItemKey='`+ pobjLineData.ItemKey + `'AND A.Location = '` + pobjLineData.Location + `' AND A.OrdNo=B.OrdNo And B.Custkey = '` + pobjOrderEntry.Custkey + `'`;
    // return SqlQuery;
    let pobjReqData = {
      ScreenName: 'Sales Order',
      LookUpKey: 'SoItemSales',
      Filter1: pobjLineData.ItemKey,
      Filter2: pobjLineData.Location,
      Filter3: pobjOrderEntry.Custkey
    };
    return pobjReqData;
  }
  static bmgfContractSql(pobjOrderEntry) {
    let pobjReqData = {
      ScreenName: 'SalesOrderEntryComponent',
      LookUpKey: 'ContractInfo',
      Filter1: pobjOrderEntry.Custkey
    };
    return pobjReqData;
  }
  static bmgfItemContractSql(pobjOrderEntry) {
    let pobjReqData = {
      ScreenName: 'SalesOrderEntryComponent',
      LookUpKey: 'ContractInfoItem',
      Filter1: pobjOrderEntry.ItemKey
    };
    return pobjReqData;
  }
  static bmgfAgeBracketSql(pobjOrderEntry) {
    let pobjReqData = {
      ScreenName: 'SalesOrderEntryComponent',
      LookUpKey: 'Agebrackets',
      Filter1: pobjOrderEntry.Custkey
    };
    return pobjReqData;
  }
  static bmgfProductDataSql(pobjOrderEntry) {
    // let SqlQuery = "Select A.BatchNo,A.FormulaId,case when A.Status='A' then 'Allocated' when A.Status='R' then 'Released' when A.Status='I' then 'Issued' when A.Status='H' then 'Hold' when A.Status='N' then 'New' when A.Status='P' then 'Part Closed' End Status,B.ItemKey,B.Location,B.StdQtyDispUom OrdQty, B.IssuedQtyDispUom QtyProduced, B.DispUom, A.SchStartDate, A.SchCompletionDate,B.StdQty,B.IssuedQty From pnMast A, pnitem B where A.BatchNo = B.BatchNo AND (B.LineTyp='FG' or B.LineTyp='BY') and B.ItemKey='" + pobjOrderEntry.ItemKey + "' and B.Location='" + pobjOrderEntry.Location + "' AND A.Status IN ('A','N','R','P','I','H') Order By A.BatchNo ----------Condtion where Item Key And Location";
    // return SqlQuery;
    let pobjReqData = {
      ScreenName: 'Sales Order',
      LookUpKey: 'SoProductData',
      Filter1: pobjOrderEntry.ItemKey,
      Filter2: pobjOrderEntry.Location
    };
    return pobjReqData;
  }
  static bmgfSalesTemplateSql() {
    let pobjReqData = {
      ScreenName: 'Sales Order',
      LookUpKey: 'SalesTemplate'
    };
    return pobjReqData;
  }
  static bmgfSalesdistributionParameterSql() {
    let pobjReqData = {
      ScreenName: 'SalesOrder',
      LookUpKey: 'DefaultData'
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
  static bmgfGetSoReturnCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoReturnCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetSoNewStatusCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoNewStatusCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetSoShipToWeekCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoShipToWeekCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetSoOverDueCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoOverDueCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetCosedOrdCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "CosedOrdCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetProcessedOrdCount(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "ProcessedOrdCount",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetNewOrdData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoNewOrder",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetReturnOrdData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoReturnOrder",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetSoOverDueData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "OverDueOrders",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetSoShipToWeekData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "SoShipToWeekOrder",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetClosedOrdData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "CosedOeder",
      Filter1: userId
    };
    return pobjReqData;
  }
  static bmgfGetProcessedOrdData(userId) {
    let pobjReqData = {
      ScreenName: "Sales Order",
      LookUpKey: "ProcessedOrder",
      Filter1: userId
    };
    return pobjReqData;
  }
  /**-----Maintain Shipment----- */
  // public static bmgfGetMSReturnOrdCount() {
  //   let sqalFilter = "'+CAST(COUNT(Distinct Ordno) as nvarchar(10))+'";
  //   let json = '{ "Field": "Return Orders", "Count": ' + sqalFilter + ', "Type": "String", "FirstKey": "OrderType", "FirstValue": "Return", "SecondValue" : "", "colorClass":"" }';
  //   let SqlQuery = "select  '" + json + "' RecCount from OEHDR where  Order_Type='Return' and   Statusflg  IN('NEW','OPEN','HOLD') "
  //   return SqlQuery;
  // }
  // public static bmgfGetMSPendingOrderCount() {
  //   let sqalFilter = "'+CAST(COUNT(OrdNo) as nvarchar(10))+'";
  //   let json = '{ "Field": "Pending Orders", "Count": ' + sqalFilter + ', "Type": "String", "FirstKey": "Status", "FirstValue": "NEW","SecondValue" : "", "colorClass":"light-blue-bg" }';
  //   let SqlQuery = "select  '" + json + "' RecCount from oehdr where  StatusFlg IN ('NEW','OPEN') and Ordno in (Select Ordno from OELIN where substring(LineMast,3,1) =0	and cast(Reqdate as Date) <= cast(getdate() as Date) and QtyRemn <=QtyOrd )"
  //   return SqlQuery;
  // }
  // public static bmgfGetMSOrdShippedTodayCount() {
  //   let sqalFilter = "'+CAST(COUNT(OrdNo) as nvarchar(10))+'";
  //   let json = '{ "Field": "Orders to be Shipped Today", "Count": ' + sqalFilter + ', "Type": "Date", "FirstKey": "TragetShipdate", "FirstValue": "new Date()","SecondValue" : "new Date()", "colorClass":"light-blue-bg" }';
  //   let SqlQuery = "select  '" + json + "' RecCount from oehdr where  StatusFlg in ('OPEN','NEW') and Ordno in(Select Ordno from OELIN where  substring(LineMast ,3,1) =0  and  cast(REQDATE as date) = cast(getdate() as Date) )"
  //   return SqlQuery;
  // }
  // public static bmgfGetMSClosedOrdCount() {
  //   let sqalFilter = "'+CAST(COUNT(ORDNO) as nvarchar(10))+'";
  //   let json = '{"Field": "Closed Orders", "Count": ' + sqalFilter + ', "Type": "String", "FirstKey": "Status", "FirstValue": "CLOSE","SecondValue" : "", "colorClass":"light-blue-bg"}';
  //   let SqlQuery = "select  '" + json + "' RecCount from OEHDR where  StatusFlg ='CLOSE'"
  //   return SqlQuery;
  // }
  // public static bmgfGetMSProcessedOrdCount() {
  //   let sqalFilter = "'+CAST(COUNT(ORDNO) as nvarchar(10))+'";
  //   let json = '{"Field": "Processed Orders", "Count": ' + sqalFilter + ', "Type": "String", "FirstKey": "Status", "FirstValue": "PROCESSED","SecondValue" : "", "colorClass":"light-blue-bg"}';
  //   let SqlQuery = "select  '" + json + "' RecCount from OEHDR where  StatusFlg = 'PROCESSED'  "
  //   return SqlQuery;
  // }
  static bmgfGetMSPendingOrdData(psScreenName) {
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: 'PendingShipments'
    };
    return pobjReqData;
  }
  static bmgfGetMSReturnOrdData(psScreenName) {
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: 'ReturnOrders'
    };
    return pobjReqData;
  }
  static bmgfGetMSClosedOrdData(psScreenName) {
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: 'CloseOrders'
    };
    return pobjReqData;
  }
  static bmgfGetMSProcessedOrdData(psScreenName) {
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: 'ProcessedOrders'
    };
    return pobjReqData;
  }
  static bmgfGetMSTodayShippedOrdData(psScreenName) {
    let pobjReqData = {
      ScreenName: psScreenName,
      LookUpKey: 'NEWOPENOrders'
    };
    return pobjReqData;
  }
  static #_10 = this.garrShipmentLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'DispatchNo',
    title: 'DISPATCHNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'SOLineNo',
    title: 'SOLINENO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'LineItem.ItemKey'
  }, {
    type: 'viewText',
    display: true,
    field: 'Description',
    title: 'DESCRIPTION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'Location',
    title: 'LOCATION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtyOrder',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'QtyDispatch',
    title: 'QTYDISPATCH',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtySerLot',
    title: 'SCANNEDQTY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtyRem',
    title: 'QTYREM',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'SO_Unit',
    title: 'UNIT',
    isHyperLink: true,
    msLabelKey: 'LineItem.Unit'
  }, {
    type: 'viewText',
    display: true,
    field: 'LineStatus',
    title: 'LINESTATUS',
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
    type: 'date',
    display: true,
    field: 'ShipDate',
    title: 'SHIPDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'PromiseDate',
    title: 'PROMISEDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'TargetShipDate',
    title: 'TRAGETSHIPDATE',
    isHyperLink: false,
    msLabelKey: ''
  }];
  static #_11 = this.garrPickListLineItemCol = [{
    type: 'viewText',
    display: true,
    field: 'DispatchNo',
    title: 'DISPATCHNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'SOLineNo',
    title: 'SOLINENO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'button',
    display: true,
    field: 'PickingListNo',
    title: 'PICKORDNO',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'ItemKey',
    title: 'ITEMKEY',
    isHyperLink: true,
    msLabelKey: 'LineItem.ItemKey'
  }, {
    type: 'viewText',
    display: true,
    field: 'Description',
    title: 'DESCRIPTION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'viewText',
    display: true,
    field: 'Location',
    title: 'LOCATION',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtyOrder',
    title: 'QTYORDER',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'number',
    display: false,
    field: 'QtyDispatch',
    title: 'QTYDISPATCH',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtySerLot',
    title: 'SCANNEDQTY',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'numString',
    display: true,
    field: 'QtyRem',
    title: 'QTYREM',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'combo',
    display: true,
    field: 'SO_Unit',
    title: 'UNIT',
    isHyperLink: true,
    msLabelKey: 'LineItem.Unit'
  }, {
    type: 'viewText',
    display: true,
    field: 'LineStatus',
    title: 'LINESTATUS',
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
    type: 'date',
    display: true,
    field: 'ShipDate',
    title: 'SHIPDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'PromiseDate',
    title: 'PROMISEDATE',
    isHyperLink: false,
    msLabelKey: ''
  }, {
    type: 'date',
    display: true,
    field: 'TargetShipDate',
    title: 'TRAGETSHIPDATE',
    isHyperLink: false,
    msLabelKey: ''
  }];
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_main_sales_constant_sales-order-const_ts.js.map