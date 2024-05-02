"use strict";
(self["webpackChunkBMWCPoc8"] = self["webpackChunkBMWCPoc8"] || []).push([["default-src_app_shared_ng-orgchart_orgchart_module_ts"],{

/***/ 64000:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/ng-orgchart/chart-container/chart-container.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartContainerComponent: () => (/* binding */ ChartContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/node-select.service */ 52281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _chart_node_chart_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart-node/chart-node.component */ 10922);





const _c0 = function (a0, a1) {
  return {
    "transform": a0,
    "cursor": a1
  };
};
class ChartContainerComponent {
  constructor(nodeSelectService) {
    this.nodeSelectService = nodeSelectService;
    this.nodeHeading = 'name';
    this.nodeContent = 'title';
    this.groupScale = 1;
    this.pan = false;
    this.zoom = false;
    this.zoomoutLimit = 0.5;
    this.zoominLimit = 7;
    this.containerClass = '';
    this.chartClass = '';
    this.select = 'single';
    this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cursorVal = 'default';
    this.panning = false;
    this.startX = 0;
    this.startY = 0;
    this.transformVal = '';
  }
  ngOnInit() {}
  panEndHandler() {
    this.panning = false;
    this.cursorVal = 'default';
  }
  panHandler(e) {
    let newX = 0;
    let newY = 0;
    if (!e.targetTouches) {
      // pand on desktop
      newX = e.pageX - this.startX;
      newY = e.pageY - this.startY;
    } else if (e.targetTouches.length === 1) {
      // pan on mobile device
      newX = e.targetTouches[0].pageX - this.startX;
      newY = e.targetTouches[0].pageY - this.startY;
    } else if (e.targetTouches.length > 1) {
      return;
    }
    if (this.transformVal === '') {
      if (this.transformVal.indexOf('3d') === -1) {
        this.transformVal = 'matrix(1,0,0,1,' + newX + ',' + newY + ')';
      } else {
        this.transformVal = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,' + newX + ', ' + newY + ',0,1)';
      }
    } else {
      const matrix = this.transformVal.split(',');
      if (this.transformVal.indexOf('3d') === -1) {
        matrix[4] = newX.toString();
        matrix[5] = newY + ')';
      } else {
        matrix[12] = newX.toString();
        matrix[13] = newY.toString();
      }
      this.transformVal = matrix.join(',');
    }
  }
  panStartHandler(e) {
    if (e.target.querySelectorAll('.node') && e.target.querySelectorAll('.node').length) {
      this.panning = false;
      return;
    } else {
      this.cursorVal = 'move';
      this.panning = true;
    }
    let lastX = 0;
    let lastY = 0;
    if (this.transformVal !== '') {
      const matrix = this.transformVal.split(',');
      if (this.transformVal.indexOf('3d') === -1) {
        lastX = parseInt(matrix[4], 10);
        lastY = parseInt(matrix[5], 10);
      } else {
        lastX = parseInt(matrix[12], 10);
        lastY = parseInt(matrix[13], 10);
      }
    }
    if (!e.targetTouches) {
      // pand on desktop
      this.startX = e.pageX - lastX;
      this.startY = e.pageY - lastY;
    } else if (e.targetTouches.length === 1) {
      // pan on mobile device
      this.startX = e.targetTouches[0].pageX - lastX;
      this.startY = e.targetTouches[0].pageY - lastY;
    } else if (e.targetTouches.length > 1) {
      return;
    }
  }
  setChartScale(newScale) {
    let matrix = [];
    let targetScale = 1;
    if (this.transformVal === '') {
      this.transformVal = 'matrix(' + newScale + ', 0, 0, ' + newScale + ', 0, 0)';
    } else {
      matrix = this.transformVal.split(',');
      if (this.transformVal.indexOf('3d') === -1) {
        targetScale = Math.abs(parseFloat(matrix[3]) * newScale);
        if (targetScale > this.zoomoutLimit && targetScale < this.zoominLimit) {
          matrix[0] = 'matrix(' + targetScale;
          matrix[3] = targetScale;
          this.transformVal = matrix.join(',');
        }
      } else {
        targetScale = Math.abs(parseFloat(matrix[5]) * newScale);
        if (targetScale > this.zoomoutLimit && targetScale < this.zoominLimit) {
          matrix[0] = 'matrix3d(' + targetScale;
          matrix[5] = targetScale;
          this.transformVal = matrix.join(',');
        }
      }
    }
  }
  zoomHandler(e) {
    const newScale = 1 + (e.deltaY > 0 ? -0.2 : 0.2);
    this.setChartScale(newScale);
  }
  onClickChart(e) {
    if (!e.target.closest('.oc-node')) {
      this.chartClick.emit();
      this.nodeSelectService.clearSelect();
    }
  }
  onNodeClick(nodeData) {
    this.nodeClick.emit(nodeData);
  }
  static #_ = this.ɵfac = function ChartContainerComponent_Factory(t) {
    return new (t || ChartContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_0__.NodeSelectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChartContainerComponent,
    selectors: [["organization-chart"]],
    inputs: {
      datasource: "datasource",
      nodeHeading: "nodeHeading",
      nodeContent: "nodeContent",
      nodeTemplate: "nodeTemplate",
      groupScale: "groupScale",
      pan: "pan",
      zoom: "zoom",
      zoomoutLimit: "zoomoutLimit",
      zoominLimit: "zoominLimit",
      containerClass: "containerClass",
      chartClass: "chartClass",
      select: "select"
    },
    outputs: {
      nodeClick: "nodeClick",
      chartClick: "chartClick"
    },
    decls: 3,
    vars: 12,
    consts: [[1, "orgchart-container", 3, "ngClass", "wheel", "mouseup"], [1, "orgchart", 3, "ngClass", "ngStyle", "mousedown", "mousemove", "click"], [3, "datasource", "nodeHeading", "nodeContent", "nodeTemplate", "groupScale", "select", "nodeClick"]],
    template: function ChartContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("wheel", function ChartContainerComponent_Template_div_wheel_0_listener($event) {
          return ctx.zoom ? ctx.zoomHandler($event) : true;
        })("mouseup", function ChartContainerComponent_Template_div_mouseup_0_listener() {
          return ctx.pan && ctx.panning ? ctx.panEndHandler() : true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ChartContainerComponent_Template_div_mousedown_1_listener($event) {
          return ctx.pan ? ctx.panStartHandler($event) : true;
        })("mousemove", function ChartContainerComponent_Template_div_mousemove_1_listener($event) {
          return ctx.pan && ctx.panning ? ctx.panHandler($event) : true;
        })("click", function ChartContainerComponent_Template_div_click_1_listener($event) {
          return ctx.onClickChart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "orgchart-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nodeClick", function ChartContainerComponent_Template_orgchart_node_nodeClick_2_listener($event) {
          return ctx.onNodeClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.chartClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, ctx.transformVal, ctx.cursorVal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasource", ctx.datasource)("nodeHeading", ctx.nodeHeading)("nodeContent", ctx.nodeContent)("nodeTemplate", ctx.nodeTemplate)("groupScale", ctx.groupScale)("select", ctx.select);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _chart_node_chart_node_component__WEBPACK_IMPORTED_MODULE_1__.ChartNodeComponent],
    styles: [".orgchart-container[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    position: relative;\n    margin: 10px;\n    height: 620px;\n    border: 2px dashed #aaa;\n    border-radius: 5px;\n    overflow: auto;\n    text-align: center;\n}\n\n.orgchart[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    display: inline-block;\n    background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%), linear-gradient(rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);\n    background-size: 10px 10px;\n    border: 1px dashed rgba(0, 0, 0, 0);\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25nLW9yZ2NoYXJ0L2NoYXJ0LWNvbnRhaW5lci9jaGFydC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJKQUEySjtJQUMzSiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIub3JnY2hhcnQtY29udGFpbmVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZ2NoYXJ0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjAwLCAwLCAwLCAwLjE1KSAxMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAlKSwgbGluZWFyLWdyYWRpZW50KHJnYmEoMjAwLCAwLCAwLCAwLjE1KSAxMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10922:
/*!***********************************************************************!*\
  !*** ./src/app/shared/ng-orgchart/chart-node/chart-node.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartNodeComponent: () => (/* binding */ ChartNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var _shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/node-select.service */ 52281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);





function ChartNodeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1) {
  return {
    "fa-plus-circle": a0,
    "fa-minus-circle": a1
  };
};
function ChartNodeComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChartNodeComponent_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleChildren());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx_r1.isCollapsed, !ctx_r1.isCollapsed));
  }
}
function ChartNodeComponent_div_3_ng_container_1_div_1_ng_container_1_orgchart_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "orgchart-node", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nodeClick", function ChartNodeComponent_div_3_ng_container_1_div_1_ng_container_1_orgchart_node_1_Template_orgchart_node_nodeClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onNodeClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const j_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasource", ctx_r14.datasource.children[i_r9 + j_r13])("nodeHeading", ctx_r14.nodeHeading)("nodeContent", ctx_r14.nodeContent)("nodeTemplate", ctx_r14.nodeTemplate)("groupScale", ctx_r14.groupScale)("select", ctx_r14.select);
  }
}
function ChartNodeComponent_div_3_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartNodeComponent_div_3_ng_container_1_div_1_ng_container_1_orgchart_node_1_Template, 1, 6, "orgchart-node", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const j_r13 = ctx.index;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r9 + j_r13 < ctx_r11.datasource.children.length);
  }
}
function ChartNodeComponent_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartNodeComponent_div_3_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.Arr(ctx_r10.groupScale));
  }
}
function ChartNodeComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartNodeComponent_div_3_ng_container_1_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r9 % ctx_r7.groupScale === 0);
  }
}
function ChartNodeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@expandCollapse.start", function ChartNodeComponent_div_3_Template_div_animation_expandCollapse_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.toggleAnimStart($event));
    })("@expandCollapse.done", function ChartNodeComponent_div_3_Template_div_animation_expandCollapse_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.toggleAnimEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartNodeComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", ctx_r2.isCollapsed ? "collapsed" : "expanded")("ngStyle", ctx_r2.ecStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.datasource.children);
  }
}
function ChartNodeComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nodeData_r23 = ctx.datasource;
    const heading_r24 = ctx.nodeHeading;
    const content_r25 = ctx.nodeContent;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](nodeData_r23[heading_r24]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](nodeData_r23[content_r25]);
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    datasource: a0,
    nodeHeading: a1,
    nodeContent: a2
  };
};
class ChartNodeComponent {
  constructor(nodeSelectService) {
    this.nodeSelectService = nodeSelectService;
    this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.Arr = Array; // Array type captured in a variable
    this.isCollapsed = false;
    // subscribe to node selection status
    this.subscription = this.nodeSelectService.getSelect().subscribe(selection => {
      if (selection && selection.id) {
        this.isSelected = this.datasource.id === selection.id;
      } else {
        // clear selection when empty selection received
        this.isSelected = false;
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  ngOnInit() {}
  toggleChildren() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleAnimStart(event) {
    if (this.isCollapsed) {
      if (event.element.parentElement && event.element.parentElement.parentElement && event.element.parentElement.parentElement.classList.contains('orgchart')) {
        event.element.previousElementSibling.classList.add('oc-is-collapsed');
      }
    } else {
      this.ecStyles = {
        display: 'flex'
      };
    }
  }
  toggleAnimEnd(event) {
    if (this.isCollapsed) {
      this.ecStyles = {
        display: 'none'
      };
    } else {
      if (event.element.parentElement && event.element.parentElement.parentElement && event.element.parentElement.parentElement.classList.contains('orgchart')) {
        event.element.previousElementSibling.classList.remove('oc-is-collapsed');
      }
    }
  }
  onClickNode(e) {
    this.nodeClick.emit(this.datasource);
    if (this.select === 'single') {
      this.nodeSelectService.sendSelect(this.datasource.id);
    } else if (this.select === 'multiple') {
      this.isSelected = !this.isSelected;
    }
  }
  onNodeClick(e) {
    this.nodeClick.emit(e);
  }
  static #_ = this.ɵfac = function ChartNodeComponent_Factory(t) {
    return new (t || ChartNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_0__.NodeSelectService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartNodeComponent,
    selectors: [["orgchart-node"]],
    inputs: {
      datasource: "datasource",
      nodeHeading: "nodeHeading",
      nodeContent: "nodeContent",
      nodeTemplate: "nodeTemplate",
      groupScale: "groupScale",
      select: "select"
    },
    outputs: {
      nodeClick: "nodeClick"
    },
    decls: 6,
    vars: 11,
    consts: [[1, "oc-node", 3, "id", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "oc-toggle-btn fa", 3, "ngClass", "click", 4, "ngIf"], ["class", "oc-groups", 3, "ngStyle", 4, "ngIf"], ["defaultNodeTemplate", ""], [1, "oc-toggle-btn", "fa", 3, "ngClass", "click"], [1, "oc-groups", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["class", "oc-group", 4, "ngIf"], [1, "oc-group"], [3, "datasource", "nodeHeading", "nodeContent", "nodeTemplate", "groupScale", "select", "nodeClick", 4, "ngIf"], [3, "datasource", "nodeHeading", "nodeContent", "nodeTemplate", "groupScale", "select", "nodeClick"], [1, "oc-node-heading"], [1, "oc-node-content"]],
    template: function ChartNodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChartNodeComponent_Template_div_click_0_listener($event) {
          return ctx.onClickNode($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartNodeComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChartNodeComponent_i_2_Template, 1, 4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChartNodeComponent_div_3_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChartNodeComponent_ng_template_4_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("oc-is-selected", ctx.isSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.datasource.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.nodeTemplate ? ctx.nodeTemplate : _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, ctx.datasource, ctx.nodeHeading, ctx.nodeContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datasource.children && ctx.datasource.children.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datasource.children && ctx.datasource.children.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ChartNodeComponent],
    styles: [".oc-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.orgchart    > [_nghost-%COMP%] {\n  align-items: center;\n}\n\n.orgchart    > [_nghost-%COMP%]    > .oc-node[_ngcontent-%COMP%]::after {\n  content: \"\";\n  box-sizing: border-box;\n  bottom: -10px;\n  left: 50%;\n  height: 10px;\n  width: 2px;\n  position: absolute;\n  background-color: rgba(217, 83, 79, 0.8);\n}\n\n.orgchart    > [_nghost-%COMP%]    > .oc-node.oc-is-collapsed[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.orgchart    > [_nghost-%COMP%]    > .oc-groups[_ngcontent-%COMP%]    > .oc-group[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]::before {\n  height: 35px; \n\n  top: -10px;\n}\n\n.oc-node[_ngcontent-%COMP%] {\n  width: 140px;\n  font-family: Arial;\n  box-sizing: border-box;\n  position: relative;\n  padding: 3px;\n  margin: 0;\n  border: 2px solid transparent;\n  text-align: center;\n}\n\n.oc-node[_ngcontent-%COMP%]:hover, .oc-node.oc-is-selected[_ngcontent-%COMP%] {\n  background-color: rgba(238, 217, 54, 0.5);\n}\n\n.oc-node[_ngcontent-%COMP%]   .oc-node-heading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 2px;\n  margin: 0;\n  width: 130px;\n  height: 20px;\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: rgba(217, 83, 79, 0.8);\n  color: #fff;\n  border-radius: 4px 4px 0 0; \n}\n\n.oc-node[_ngcontent-%COMP%]   .oc-node-content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 2px;\n  width: 130px;\n  height: 20px;\n  font-size: 0.625rem;\n  border: 1px solid rgba(217, 83, 79, 0.8);\n  border-radius: 0 0 4px 4px;\n  text-align: center;\n  background-color: #fff;\n  color: #333;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.oc-node[_ngcontent-%COMP%]   .oc-toggle-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: rgba(68, 157, 68, 0.6);\n  position: absolute;\n  left: 5px;\n  bottom: 5px;\n}\n\n.oc-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  position: relative;\n  padding-top: 20px;\n}\n\n.orgchart    > [_nghost-%COMP%]    > .oc-groups[_ngcontent-%COMP%]    > .oc-group[_ngcontent-%COMP%]:first-child {\n  padding-left: 10px;\n}\n\n.oc-group[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  box-sizing: border-box;\n  top: 10px;\n  left: 12px;\n  width: calc(100% - 2px);\n  position: absolute;\n  border-color: rgba(217, 83, 79, 0.8);\n  border-style: solid;\n  border-width: 0 0 2px 0;\n}\n\n.orgchart    > [_nghost-%COMP%]    > .oc-groups[_ngcontent-%COMP%]    > .oc-group[_ngcontent-%COMP%]:first-child::before {\n  width: calc(100% + 8px);\n  left: 2px;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]:not(:last-child) {\n  padding-bottom: 10px;\n}\n\n.oc-group    > [_nghost-%COMP%]::before {\n  content: \"\";\n  box-sizing: border-box;\n  height: 35px; \n\n  width: 10px;\n  position: absolute;\n  left: -10px;\n  top: -10px;\n  border-color: rgba(217, 83, 79, 0.8);\n  border-style: solid;\n  border-width: 0 0 2px 2px;\n}\n\n\n\n.oc-group:first-child    > [_nghost-%COMP%]:first-child::before {\n  height: 45px;\n  top: -20px;\n}\n\n[_nghost-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  box-sizing: border-box;\n  height: calc(100% - 35px); \n\n  width: 10px;\n  position: absolute;\n  left: -10px;\n  top: 25px; \n\n  border-color: rgba(217, 83, 79, 0.8);\n  border-style: solid;\n  border-width: 0 0 0 2px;\n}\n\n.oc-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n}\n\n.oc-icon-minus[_ngcontent-%COMP%]::before {\n  content: \"\\2212\";\n}\n\n.oc-icon-plus[_ngcontent-%COMP%]::before {\n  content: \"\\002B\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25nLW9yZ2NoYXJ0L2NoYXJ0LW5vZGUvY2hhcnQtbm9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZLEVBQUUsK0NBQStDO0VBQzdELFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZLEVBQUUsK0NBQStDO0VBQzdELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBRSwrQ0FBK0M7RUFDMUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFFLCtDQUErQztFQUMxRCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIub2MtZ3JvdXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5vcmdjaGFydCA+IDpob3N0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ub3JnY2hhcnQgPiA6aG9zdCA+IC5vYy1ub2RlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjgpO1xyXG59XHJcblxyXG4ub3JnY2hhcnQgPiA6aG9zdCA+IC5vYy1ub2RlLm9jLWlzLWNvbGxhcHNlZDo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5vcmdjaGFydCA+IDpob3N0ID4gLm9jLWdyb3VwcyA+IC5vYy1ncm91cCA+IDpob3N0OjpiZWZvcmUge1xyXG4gIGhlaWdodDogMzVweDsgLyogYWRqdXN0IHRoZSB2ZXJ0aWNhbCBwb3N0aW9uIG9mIGxpbmsgbGluZSDDosKKwqIgKi9cclxuICB0b3A6IC0xMHB4O1xyXG59XHJcblxyXG4ub2Mtbm9kZSB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9jLW5vZGU6aG92ZXIsIC5vYy1ub2RlLm9jLWlzLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjE3LCA1NCwgMC41KTtcclxufVxyXG5cclxuLm9jLW5vZGUgLm9jLW5vZGUtaGVhZGluZyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC44KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDsgXHJcbn1cclxuXHJcbi5vYy1ub2RlIC5vYy1ub2RlLWNvbnRlbnQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNywgODMsIDc5LCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5vYy1ub2RlIC5vYy10b2dnbGUtYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAxNTcsIDY4LCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5vYy1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5vcmdjaGFydCA+IDpob3N0ID4gLm9jLWdyb3VwcyA+IC5vYy1ncm91cDpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ub2MtZ3JvdXA6bm90KDpsYXN0LWNoaWxkKTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEycHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC44KTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xyXG59XHJcblxyXG4ub3JnY2hhcnQgPiA6aG9zdCA+IC5vYy1ncm91cHMgPiAub2MtZ3JvdXA6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDhweCk7XHJcbiAgbGVmdDogMnB4O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuOmhvc3Q6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vYy1ncm91cCA+IDpob3N0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDM1cHg7IC8qIGFkanVzdCB0aGUgdmVydGljYWwgcG9zdGlvbiBvZiBsaW5rIGxpbmUgw6LCisKiICovXHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxNywgODMsIDc5LCAwLjgpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDJweDtcclxufVxyXG5cclxuLyogYWRqdXN0IHRoZSB2ZXJ0aWNhbCBwb3N0aW9uIG9mIGxpbmsgbGluZSDDosKKwqIgKi9cclxuLm9jLWdyb3VwOmZpcnN0LWNoaWxkID4gOmhvc3Q6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHRvcDogLTIwcHg7XHJcbn1cclxuXHJcbjpob3N0Om5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTsgLyogYWRqdXN0IHRoZSB2ZXJ0aWNhbCBwb3N0aW9uIG9mIGxpbmsgbGluZSDDosKKwqIgKi9cclxuICB3aWR0aDogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgdG9wOiAyNXB4OyAvKiBhZGp1c3QgdGhlIHZlcnRpY2FsIHBvc3Rpb24gb2YgbGluayBsaW5lIMOiworCoiAqL1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTcsIDgzLCA3OSwgMC44KTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDAgMnB4O1xyXG59XHJcblxyXG4ub2MtaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vYy1pY29uLW1pbnVzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMjEyXCI7XHJcbn1cclxuXHJcbi5vYy1pY29uLXBsdXM6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDAwMkJcIjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('expandCollapse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: 'translateX(0)',
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: 'translateX(-50px)',
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('expanded => collapsed', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('0.2s')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('collapsed => expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('0.2s')])])]
    }
  });
}

/***/ }),

/***/ 55322:
/*!*******************************************************!*\
  !*** ./src/app/shared/ng-orgchart/orgchart.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgchartModule: () => (/* binding */ OrgchartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _chart_container_chart_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-container/chart-container.component */ 64000);
/* harmony import */ var _chart_node_chart_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-node/chart-node.component */ 10922);
/* harmony import */ var _shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/node-select.service */ 52281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);





class OrgchartModule {
  static #_ = this.ɵfac = function OrgchartModule_Factory(t) {
    return new (t || OrgchartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: OrgchartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_shared_services_node_select_service__WEBPACK_IMPORTED_MODULE_2__.NodeSelectService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OrgchartModule, {
    declarations: [_chart_container_chart_container_component__WEBPACK_IMPORTED_MODULE_0__.ChartContainerComponent, _chart_node_chart_node_component__WEBPACK_IMPORTED_MODULE_1__.ChartNodeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_chart_container_chart_container_component__WEBPACK_IMPORTED_MODULE_0__.ChartContainerComponent, _chart_node_chart_node_component__WEBPACK_IMPORTED_MODULE_1__.ChartNodeComponent]
  });
})();

/***/ }),

/***/ 52281:
/*!***************************************************************************!*\
  !*** ./src/app/shared/ng-orgchart/shared/services/node-select.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeSelectService: () => (/* binding */ NodeSelectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class NodeSelectService {
  constructor() {
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  sendSelect(id) {
    this.subject.next({
      id
    });
  }
  clearSelect() {
    const sub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    sub.next();
    // this.subject.next();
  }

  getSelect() {
    return this.subject.asObservable();
  }
  static #_ = this.ɵfac = function NodeSelectService_Factory(t) {
    return new (t || NodeSelectService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NodeSelectService,
    factory: NodeSelectService.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_ng-orgchart_orgchart_module_ts.js.map