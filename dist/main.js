"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SellenaBrush-x3JyK.ttf */ "./src/home/SellenaBrush-x3JyK.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Montserrat-VariableFont_wght.ttf */ "./src/home/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Header';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('TrueType');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'MainFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('TrueType');\n  font-weight: 600;\n  font-style: normal;\n}\n\n\nbody {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 10px;\n\tcolor: rgb(63, 50, 68);\n\tfont-family: MainFont, sans-serif;\n\tbackground-color: rgb(182, 169, 172);\n}\n\n#leftSide,\n#rightSide {\n\tborder-radius: 30px;\n\tpadding: 20px;\n}\n\n#leftSide{\n\twidth: 200px;\n\tbackground-color: #e5c3d1;\n\tflex-grow: 1;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(115px, 1fr));\n\tgap: 10px;\n\talign-self: start;\n}\n\n#leftSide > div,\n.cards,\n.tasks {\n\tbox-sizing: border-box;\n\tborder-radius: 20px;\n\tpadding: 10px 10px 10px 15px;\n}\n\n#leftSide > div:hover,\n.cards:hover{\n\ttransform: translateY(-5%);\n\tcursor:pointer;\n}\n\n#leftSide > div {\n\tbackground-color: rgb(152, 139, 142);\n}\n\n#rightSide {\n\tflex-grow: 2;\n\twidth: 300px;\n  background-color: rgb(152, 139, 142);\n}\n\n#right-side-content > h2 {\n\tmargin: 0px; \n\tfont-family: Header, cursive;\n\tfont-size: 64px;\n}\n\n#card-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 110px);\n\tgrid-auto-rows: 110px;\n\tgap: 20px;\n}\n\n.cards {\n\tbackground-color: #e5c3d1;\n}\n\n#rightSide button {\n\tfont-weight: 600;\n\tfont-size: 20px;\n\tmargin: 0px 0px 15px;\n\tpadding: 0px 12px 2px 5px;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 30px;\n\tcolor: rgb(63, 50, 68);\n}\n\n#rightSide button:hover {\n\tcolor: rgb(152, 139, 142);\n\tbackground-color: rgb(63, 50, 68);\n\tcursor: pointer;\n}\n\n#rightSide span {\n\tfont-size: 24px;\n}\n\n#task-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\tgap: 10px;\n}\n\n.tasks {\n\t/*width: 250px;*/\n\tbackground-color: #e5c3d1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 20px;\n\tflex-wrap: wrap;\n} \n\n.tasks>div:first-child {\n\tmargin-right: auto;\n\tflex: 1;\n}\n\n.date {\n\tdisplay: flex;\n\tgap: 15px;\n}\n\n.X {\n\twidth: 10px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.X::before,\n.X::after {\n\tcontent: '';\n\tbackground-color: rgb(63, 50, 68);\n\twidth: 4px;\n\theight: 18px;\n\tposition: absolute;\n\tborder-radius: 30px;\n}\n\n.X::before {\n\ttransform: rotate(-45deg);\n}\n\n.X::after {\n\ttransform: rotate(45deg);\n}", "",{"version":3,"sources":["webpack://./src/home/home.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,+DAAiE;EACjE,gBAAgB;EAChB,kBAAkB;AACpB;;;AAGA;CACC,aAAa;CACb,eAAe;CACf,SAAS;CACT,sBAAsB;CACtB,iCAAiC;CACjC,oCAAoC;AACrC;;AAEA;;CAEC,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,yBAAyB;CACzB,YAAY;CACZ,aAAa;CACb,4DAA4D;CAC5D,SAAS;CACT,iBAAiB;AAClB;;AAEA;;;CAGC,sBAAsB;CACtB,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;;CAEC,0BAA0B;CAC1B,cAAc;AACf;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,YAAY;CACZ,YAAY;EACX,oCAAoC;AACtC;;AAEA;CACC,WAAW;CACX,4BAA4B;CAC5B,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,+CAA+C;CAC/C,qBAAqB;CACrB,SAAS;AACV;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,oBAAoB;CACpB,yBAAyB;CACzB,6BAA6B;CAC7B,YAAY;CACZ,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,yBAAyB;CACzB,iCAAiC;CACjC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,4DAA4D;CAC5D,SAAS;AACV;;AAEA;CACC,gBAAgB;CAChB,yBAAyB;CACzB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,SAAS;CACT,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,OAAO;AACR;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,WAAW;CACX,iCAAiC;CACjC,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,wBAAwB;AACzB","sourcesContent":["@font-face {\n  font-family: 'Header';\n  src: url('./SellenaBrush-x3JyK.ttf') format('TrueType');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'MainFont';\n  src: url('./Montserrat-VariableFont_wght.ttf') format('TrueType');\n  font-weight: 600;\n  font-style: normal;\n}\n\n\nbody {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 10px;\n\tcolor: rgb(63, 50, 68);\n\tfont-family: MainFont, sans-serif;\n\tbackground-color: rgb(182, 169, 172);\n}\n\n#leftSide,\n#rightSide {\n\tborder-radius: 30px;\n\tpadding: 20px;\n}\n\n#leftSide{\n\twidth: 200px;\n\tbackground-color: #e5c3d1;\n\tflex-grow: 1;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(115px, 1fr));\n\tgap: 10px;\n\talign-self: start;\n}\n\n#leftSide > div,\n.cards,\n.tasks {\n\tbox-sizing: border-box;\n\tborder-radius: 20px;\n\tpadding: 10px 10px 10px 15px;\n}\n\n#leftSide > div:hover,\n.cards:hover{\n\ttransform: translateY(-5%);\n\tcursor:pointer;\n}\n\n#leftSide > div {\n\tbackground-color: rgb(152, 139, 142);\n}\n\n#rightSide {\n\tflex-grow: 2;\n\twidth: 300px;\n  background-color: rgb(152, 139, 142);\n}\n\n#right-side-content > h2 {\n\tmargin: 0px; \n\tfont-family: Header, cursive;\n\tfont-size: 64px;\n}\n\n#card-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 110px);\n\tgrid-auto-rows: 110px;\n\tgap: 20px;\n}\n\n.cards {\n\tbackground-color: #e5c3d1;\n}\n\n#rightSide button {\n\tfont-weight: 600;\n\tfont-size: 20px;\n\tmargin: 0px 0px 15px;\n\tpadding: 0px 12px 2px 5px;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 30px;\n\tcolor: rgb(63, 50, 68);\n}\n\n#rightSide button:hover {\n\tcolor: rgb(152, 139, 142);\n\tbackground-color: rgb(63, 50, 68);\n\tcursor: pointer;\n}\n\n#rightSide span {\n\tfont-size: 24px;\n}\n\n#task-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\tgap: 10px;\n}\n\n.tasks {\n\t/*width: 250px;*/\n\tbackground-color: #e5c3d1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 20px;\n\tflex-wrap: wrap;\n} \n\n.tasks>div:first-child {\n\tmargin-right: auto;\n\tflex: 1;\n}\n\n.date {\n\tdisplay: flex;\n\tgap: 15px;\n}\n\n.X {\n\twidth: 10px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.X::before,\n.X::after {\n\tcontent: '';\n\tbackground-color: rgb(63, 50, 68);\n\twidth: 4px;\n\theight: 18px;\n\tposition: absolute;\n\tborder-radius: 30px;\n}\n\n.X::before {\n\ttransform: rotate(-45deg);\n}\n\n.X::after {\n\ttransform: rotate(45deg);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/home/home.css":
/*!***************************!*\
  !*** ./src/home/home.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfRooms": () => (/* binding */ ListOfRooms),
/* harmony export */   "displayRight": () => (/* binding */ displayRight),
/* harmony export */   "leftSide": () => (/* binding */ leftSide),
/* harmony export */   "rightSide": () => (/* binding */ rightSide)
/* harmony export */ });
// Here I write the whole html of the loading/landing page
// Don't forget the `export` statement
// Write everything in strings to be added as innerHtml

const leftSide = `<div data-value="today">Today</div>
<div data-value="scheduled">Scheduled</div>
<div data-value="allTasks">All tasks</div>
<div data-value="completed">Completed</div>
<div data-value="allRooms">All rooms</div>`;

const rightSide = `<div id="right-side-content">
	<h2>Rooms</h2>
	<button data-value="addRoom"> <span>+</span> Add Room</button>
	<div id="card-container">
	</div>
</div>`;

// Define all functions related to the right side of the display
const displayRight = (() => {
	// Add button function
	const addRoom = (roomName) => {
		// create room
		const newRoom = new Room(roomName); // newRoom is an object
		if (newRoom === null) {
			return;
		}

		// Add room to array
		const list = new ListOfRooms();
		list.addRoomToArray(newRoom);

		// Add room to the DOM
		const genericCard = new RoomCard();
		genericCard.addRoomCard(newRoom);
	};

	const addTask = (task) => {
		// Ass task to object
		const list = new ListOfRooms();
		const hTwo = document.querySelector("#right-side-content h2:first-child");

		// find the object with the identifier
		const index = list.getArray.findIndex(
			(room) => room.identifier === +hTwo.dataset.identifier
		);
		const room = list.getArray[index];
		room.task = task;
		console.log(list.getArray);

		// Add task to display
		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">${task}</div>`;
	};

	// Show room on right side
	const showRoom = (e) => {
		// delete everything
		document.querySelector("#right-side-content").remove();

		// create div to hold content
		const contentDiv = document.createElement("div");
		contentDiv.id = "right-side-content";
		document.querySelector("#rightSide").appendChild(contentDiv);

		// add content to div
		// Upper case room name
		const roomName =
			e.target.dataset.value.charAt(0).toUpperCase() +
			e.target.dataset.value.slice(1);
		contentDiv.innerHTML = `
		<h2 data-value="${e.target.dataset.value}" data-identifier="${e.target.dataset.identifier}">${roomName}</h2>
		<button data-value="addTask"> <span>+</span> Add Task</button>
		<div id="task-container"></div>`;

		// TODO add list of tasks
		const list = new ListOfRooms();
		console.log(list.getArray);
		const index = list.getArray.findIndex(
			(room) => room.identifier === +e.target.dataset.identifier
		);
		const room = list.getArray[index];
		console.log(room);
		const taskContainer = document.querySelector("#task-container");
		for (const task of room.tasks) {
			taskContainer.innerHTML += `<div class="tasks">
				<div>${task.task}</div> 
				<div class="date">
				<div class="deadline">${task.deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
		}

		// TODO has to add event listeners to the tasks guess
	};

	const showAllRooms = () => {
		//delete right-side-content
		document.querySelector("#right-side-content").remove();
		document.querySelector("#rightSide").innerHTML = rightSide;

		const list = new ListOfRooms();

		for (const room of list.getArray) {
			const genericCard = new RoomCard();
			genericCard.addRoomCard(room);
		}
	};

	return {
		// return all functions defined
		showRoom,
		addTask,
		addRoom,
		showAllRooms,
	};
})();

class ListOfRooms {
	static #array = [
		{
			name: "kitchen",
			identifier: 0,
			tasks: [
				{
					task: "clean stove",
					deadline: "Tuesday",
				},
				{
					task: "mop",
					deadline: "Friday",
				},
				{
					task: "sweep",
					deadline: "Thursday",
				},
				{
					task: "clean fridge",
					deadline: "Sunday",
				},
			],
		},
		{
			name: "bathroom",
			identifier: 1,
			tasks: [
				{
					task: "clean mirror",
					deadline: "Tuesday",
				},
				{
					task: "clean toilet",
					deadline: "Friday",
				},
				{
					task: "change towels",
					deadline: "Thursday",
				},
			],
		},
		{
			name: "bedroom",
			identifier: 2,
			tasks: [
			{
					task: "change sheets",
					deadline: "Tuesday",
				},
				{
					task: "clean mirror",
					deadline: "Friday",
				},
				{
					task: "mop",
					deadline: "Thursday",
				},
				{
					task: "organize closet",
					deadline: "Sunday",
				},
			],
		},
		{
			name: "office",
			identifier: 3,
			tasks: [
			{
					task: "mop",
					deadline: "Thursday",
				},
				{
					task: "clean desk",
					deadline: "Sunday",
				},
			],
		},
	];

	addRoomToArray(newRoom) {
		ListOfRooms.#array.push(newRoom);
	}

	get getArray() {
		return ListOfRooms.#array;
	}
}

class Room {
	constructor(roomName) {
		this.name = roomName;
		this.identifier = Room.#counter++;
		this.tasks = [];
	}

	static #counter = 0;

	// TODO: Remove room from array
}

// Add to the DOM -- no, this should be CREATE, MODIFY
class RoomCard {
	addRoomCard(newRoom) {
		const newCard = document.createElement("div");
		newCard.classList.add("cards");
		newCard.setAttribute("data-value", newRoom.name);
		newCard.setAttribute("data-identifier", newRoom.identifier);
		newCard.textContent = this.#capitalizeFirstLetter(newRoom.name);

		document.querySelector("#card-container").appendChild(newCard);
	}

	#capitalizeFirstLetter(string) {
		if (typeof string === "string") {
			const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
			return capitalized;
		} else {
			return string;
		}
	}
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.css */ "./src/home/home.css");
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.js */ "./src/home/home.js");
// This will call all necessary functions
// So it imports everything
// It has the render function to render the page on loading




function render(content, id, classs) {
	const element = document.createElement("div");
	element.id = id;

	element.innerHTML = content;

	if (arguments[2] !== undefined) {
		element.classList.add(arguments[2]);
	}

	return element;
}

(() => {
	document.body.appendChild(render(_home_home_js__WEBPACK_IMPORTED_MODULE_1__.leftSide, "leftSide"));
	document.body.appendChild(render(_home_home_js__WEBPACK_IMPORTED_MODULE_1__.rightSide, "rightSide"));
	const list = new _home_home_js__WEBPACK_IMPORTED_MODULE_1__.ListOfRooms();
	_home_home_js__WEBPACK_IMPORTED_MODULE_1__.displayRight.showAllRooms();
})();

const linksLeftSide = document.querySelector("#leftSide");
linksLeftSide.addEventListener("click", (e) => {
	const whichList = e.target.dataset.value;
	switch (whichList) {
		case "today":
			console.log("Give me my tasks for today!");
			break;
		// Scheduled tasks have reminders
		case "scheduled":
			console.log("Give me all scheduled tasks combined!");
			break;
		// Not all tasks will have a reminder, so they'll show up here
		case "allTasks":
			console.log("Give me all tasks, even if not scheduled!");
			break;
		case "completed":
			console.log("Give me all tasks that have been completed and when!");
			break;
		case "allRooms":
			console.log("Show me initial page!");
			_home_home_js__WEBPACK_IMPORTED_MODULE_1__.displayRight.showAllRooms();
			break;
	}
});

const linksRightSide = document.querySelector("#rightSide");
linksRightSide.addEventListener("click", (e) => {
	const whichRoom = e.target.dataset.value;
	if (whichRoom === "addRoom") {
		const roomName = prompt("Name your room:");
		_home_home_js__WEBPACK_IMPORTED_MODULE_1__.displayRight.addRoom(roomName);
	} else if (whichRoom === "addTask") {
		const task = prompt("Task:");
		_home_home_js__WEBPACK_IMPORTED_MODULE_1__.displayRight.addTask(task);
	} else if (e.target.dataset.value) {
		// console.log(whichRoom);
		_home_home_js__WEBPACK_IMPORTED_MODULE_1__.displayRight.showRoom(e);
	} else {
		return;
	}
});


/***/ }),

/***/ "./src/home/Montserrat-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/home/Montserrat-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faa3eef13649db02044.ttf";

/***/ }),

/***/ "./src/home/SellenaBrush-x3JyK.ttf":
/*!*****************************************!*\
  !*** ./src/home/SellenaBrush-x3JyK.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "232dcfdbaa19ae5a03b0.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG9FQUE4QjtBQUNqQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBeUI7QUFDM0IsR0FBRztBQUNIO0FBQ0EsRUFBRSwrREFBeUI7QUFDM0IsR0FBRztBQUNIO0FBQ0EsRUFBRSxnRUFBMEI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaG9tZS9ob21lLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaG9tZS9ob21lLmNzcz84ZDQxIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1NlbGxlbmFCcnVzaC14M0p5Sy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdIZWFkZXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnVHJ1ZVR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNYWluRm9udCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdUcnVlVHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0Zm9udC1mYW1pbHk6IE1haW5Gb250LCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE2OSwgMTcyKTtcXG59XFxuXFxuI2xlZnRTaWRlLFxcbiNyaWdodFNpZGUge1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI2xlZnRTaWRle1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDExNXB4LCAxZnIpKTtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdixcXG4uY2FyZHMsXFxuLnRhc2tzIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0cGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcXG59XFxuXFxuI2xlZnRTaWRlID4gZGl2OmhvdmVyLFxcbi5jYXJkczpob3ZlcntcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlID4gZGl2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxufVxcblxcbiNyaWdodFNpZGUge1xcblxcdGZsZXgtZ3JvdzogMjtcXG5cXHR3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxufVxcblxcbiNyaWdodC1zaWRlLWNvbnRlbnQgPiBoMiB7XFxuXFx0bWFyZ2luOiAwcHg7IFxcblxcdGZvbnQtZmFtaWx5OiBIZWFkZXIsIGN1cnNpdmU7XFxuXFx0Zm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG4jY2FyZC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMTBweCk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDExMHB4O1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmRzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcbn1cXG5cXG4jcmlnaHRTaWRlIGJ1dHRvbiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZzogMHB4IDEycHggMnB4IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzBweDtcXG5cXHRjb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcbn1cXG5cXG4jcmlnaHRTaWRlIGJ1dHRvbjpob3ZlciB7XFxuXFx0Y29sb3I6IHJnYigxNTIsIDEzOSwgMTQyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmlnaHRTaWRlIHNwYW4ge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuXFx0Lyp3aWR0aDogMjUwcHg7Ki9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59IFxcblxcbi50YXNrcz5kaXY6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uZGF0ZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDE1cHg7XFxufVxcblxcbi5YIHtcXG5cXHR3aWR0aDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5YOjpiZWZvcmUsXFxuLlg6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0d2lkdGg6IDRweDtcXG5cXHRoZWlnaHQ6IDE4cHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5YOjpiZWZvcmUge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5YOjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwrREFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrREFBaUU7RUFDakUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBR0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsaUNBQWlDO0NBQ2pDLG9DQUFvQztBQUNyQzs7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osYUFBYTtDQUNiLDREQUE0RDtDQUM1RCxTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBOzs7Q0FHQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTs7Q0FFQywwQkFBMEI7Q0FDMUIsY0FBYztBQUNmOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsK0NBQStDO0NBQy9DLHFCQUFxQjtDQUNyQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsNkJBQTZCO0NBQzdCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlDQUFpQztDQUNqQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0REFBNEQ7Q0FDNUQsU0FBUztBQUNWOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsV0FBVztDQUNYLGlDQUFpQztDQUNqQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0hlYWRlcic7XFxuICBzcmM6IHVybCgnLi9TZWxsZW5hQnJ1c2gteDNKeUsudHRmJykgZm9ybWF0KCdUcnVlVHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01haW5Gb250JztcXG4gIHNyYzogdXJsKCcuL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdUcnVlVHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0Zm9udC1mYW1pbHk6IE1haW5Gb250LCBzYW5zLXNlcmlmO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE2OSwgMTcyKTtcXG59XFxuXFxuI2xlZnRTaWRlLFxcbiNyaWdodFNpZGUge1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI2xlZnRTaWRle1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDExNXB4LCAxZnIpKTtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdixcXG4uY2FyZHMsXFxuLnRhc2tzIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0cGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcXG59XFxuXFxuI2xlZnRTaWRlID4gZGl2OmhvdmVyLFxcbi5jYXJkczpob3ZlcntcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlID4gZGl2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxufVxcblxcbiNyaWdodFNpZGUge1xcblxcdGZsZXgtZ3JvdzogMjtcXG5cXHR3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxufVxcblxcbiNyaWdodC1zaWRlLWNvbnRlbnQgPiBoMiB7XFxuXFx0bWFyZ2luOiAwcHg7IFxcblxcdGZvbnQtZmFtaWx5OiBIZWFkZXIsIGN1cnNpdmU7XFxuXFx0Zm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG4jY2FyZC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMTBweCk7XFxuXFx0Z3JpZC1hdXRvLXJvd3M6IDExMHB4O1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmRzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcbn1cXG5cXG4jcmlnaHRTaWRlIGJ1dHRvbiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZzogMHB4IDEycHggMnB4IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzBweDtcXG5cXHRjb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcbn1cXG5cXG4jcmlnaHRTaWRlIGJ1dHRvbjpob3ZlciB7XFxuXFx0Y29sb3I6IHJnYigxNTIsIDEzOSwgMTQyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmlnaHRTaWRlIHNwYW4ge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuXFx0Lyp3aWR0aDogMjUwcHg7Ki9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjM2QxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59IFxcblxcbi50YXNrcz5kaXY6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uZGF0ZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDE1cHg7XFxufVxcblxcbi5YIHtcXG5cXHR3aWR0aDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5YOjpiZWZvcmUsXFxuLlg6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDUwLCA2OCk7XFxuXFx0d2lkdGg6IDRweDtcXG5cXHRoZWlnaHQ6IDE4cHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5YOjpiZWZvcmUge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5YOjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBIZXJlIEkgd3JpdGUgdGhlIHdob2xlIGh0bWwgb2YgdGhlIGxvYWRpbmcvbGFuZGluZyBwYWdlXG4vLyBEb24ndCBmb3JnZXQgdGhlIGBleHBvcnRgIHN0YXRlbWVudFxuLy8gV3JpdGUgZXZlcnl0aGluZyBpbiBzdHJpbmdzIHRvIGJlIGFkZGVkIGFzIGlubmVySHRtbFxuXG5jb25zdCBsZWZ0U2lkZSA9IGA8ZGl2IGRhdGEtdmFsdWU9XCJ0b2RheVwiPlRvZGF5PC9kaXY+XG48ZGl2IGRhdGEtdmFsdWU9XCJzY2hlZHVsZWRcIj5TY2hlZHVsZWQ8L2Rpdj5cbjxkaXYgZGF0YS12YWx1ZT1cImFsbFRhc2tzXCI+QWxsIHRhc2tzPC9kaXY+XG48ZGl2IGRhdGEtdmFsdWU9XCJjb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L2Rpdj5cbjxkaXYgZGF0YS12YWx1ZT1cImFsbFJvb21zXCI+QWxsIHJvb21zPC9kaXY+YDtcblxuY29uc3QgcmlnaHRTaWRlID0gYDxkaXYgaWQ9XCJyaWdodC1zaWRlLWNvbnRlbnRcIj5cblx0PGgyPlJvb21zPC9oMj5cblx0PGJ1dHRvbiBkYXRhLXZhbHVlPVwiYWRkUm9vbVwiPiA8c3Bhbj4rPC9zcGFuPiBBZGQgUm9vbTwvYnV0dG9uPlxuXHQ8ZGl2IGlkPVwiY2FyZC1jb250YWluZXJcIj5cblx0PC9kaXY+XG48L2Rpdj5gO1xuXG4vLyBEZWZpbmUgYWxsIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBkaXNwbGF5XG5jb25zdCBkaXNwbGF5UmlnaHQgPSAoKCkgPT4ge1xuXHQvLyBBZGQgYnV0dG9uIGZ1bmN0aW9uXG5cdGNvbnN0IGFkZFJvb20gPSAocm9vbU5hbWUpID0+IHtcblx0XHQvLyBjcmVhdGUgcm9vbVxuXHRcdGNvbnN0IG5ld1Jvb20gPSBuZXcgUm9vbShyb29tTmFtZSk7IC8vIG5ld1Jvb20gaXMgYW4gb2JqZWN0XG5cdFx0aWYgKG5ld1Jvb20gPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGQgcm9vbSB0byBhcnJheVxuXHRcdGNvbnN0IGxpc3QgPSBuZXcgTGlzdE9mUm9vbXMoKTtcblx0XHRsaXN0LmFkZFJvb21Ub0FycmF5KG5ld1Jvb20pO1xuXG5cdFx0Ly8gQWRkIHJvb20gdG8gdGhlIERPTVxuXHRcdGNvbnN0IGdlbmVyaWNDYXJkID0gbmV3IFJvb21DYXJkKCk7XG5cdFx0Z2VuZXJpY0NhcmQuYWRkUm9vbUNhcmQobmV3Um9vbSk7XG5cdH07XG5cblx0Y29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG5cdFx0Ly8gQXNzIHRhc2sgdG8gb2JqZWN0XG5cdFx0Y29uc3QgbGlzdCA9IG5ldyBMaXN0T2ZSb29tcygpO1xuXHRcdGNvbnN0IGhUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LXNpZGUtY29udGVudCBoMjpmaXJzdC1jaGlsZFwiKTtcblxuXHRcdC8vIGZpbmQgdGhlIG9iamVjdCB3aXRoIHRoZSBpZGVudGlmaWVyXG5cdFx0Y29uc3QgaW5kZXggPSBsaXN0LmdldEFycmF5LmZpbmRJbmRleChcblx0XHRcdChyb29tKSA9PiByb29tLmlkZW50aWZpZXIgPT09ICtoVHdvLmRhdGFzZXQuaWRlbnRpZmllclxuXHRcdCk7XG5cdFx0Y29uc3Qgcm9vbSA9IGxpc3QuZ2V0QXJyYXlbaW5kZXhdO1xuXHRcdHJvb20udGFzayA9IHRhc2s7XG5cdFx0Y29uc29sZS5sb2cobGlzdC5nZXRBcnJheSk7XG5cblx0XHQvLyBBZGQgdGFzayB0byBkaXNwbGF5XG5cdFx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG5cdFx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0YXNrc1wiPiR7dGFza308L2Rpdj5gO1xuXHR9O1xuXG5cdC8vIFNob3cgcm9vbSBvbiByaWdodCBzaWRlXG5cdGNvbnN0IHNob3dSb29tID0gKGUpID0+IHtcblx0XHQvLyBkZWxldGUgZXZlcnl0aGluZ1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtc2lkZS1jb250ZW50XCIpLnJlbW92ZSgpO1xuXG5cdFx0Ly8gY3JlYXRlIGRpdiB0byBob2xkIGNvbnRlbnRcblx0XHRjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb250ZW50RGl2LmlkID0gXCJyaWdodC1zaWRlLWNvbnRlbnRcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0U2lkZVwiKS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuXHRcdC8vIGFkZCBjb250ZW50IHRvIGRpdlxuXHRcdC8vIFVwcGVyIGNhc2Ugcm9vbSBuYW1lXG5cdFx0Y29uc3Qgcm9vbU5hbWUgPVxuXHRcdFx0ZS50YXJnZXQuZGF0YXNldC52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG5cdFx0XHRlLnRhcmdldC5kYXRhc2V0LnZhbHVlLnNsaWNlKDEpO1xuXHRcdGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuXHRcdDxoMiBkYXRhLXZhbHVlPVwiJHtlLnRhcmdldC5kYXRhc2V0LnZhbHVlfVwiIGRhdGEtaWRlbnRpZmllcj1cIiR7ZS50YXJnZXQuZGF0YXNldC5pZGVudGlmaWVyfVwiPiR7cm9vbU5hbWV9PC9oMj5cblx0XHQ8YnV0dG9uIGRhdGEtdmFsdWU9XCJhZGRUYXNrXCI+IDxzcGFuPis8L3NwYW4+IEFkZCBUYXNrPC9idXR0b24+XG5cdFx0PGRpdiBpZD1cInRhc2stY29udGFpbmVyXCI+PC9kaXY+YDtcblxuXHRcdC8vIFRPRE8gYWRkIGxpc3Qgb2YgdGFza3Ncblx0XHRjb25zdCBsaXN0ID0gbmV3IExpc3RPZlJvb21zKCk7XG5cdFx0Y29uc29sZS5sb2cobGlzdC5nZXRBcnJheSk7XG5cdFx0Y29uc3QgaW5kZXggPSBsaXN0LmdldEFycmF5LmZpbmRJbmRleChcblx0XHRcdChyb29tKSA9PiByb29tLmlkZW50aWZpZXIgPT09ICtlLnRhcmdldC5kYXRhc2V0LmlkZW50aWZpZXJcblx0XHQpO1xuXHRcdGNvbnN0IHJvb20gPSBsaXN0LmdldEFycmF5W2luZGV4XTtcblx0XHRjb25zb2xlLmxvZyhyb29tKTtcblx0XHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNvbnRhaW5lclwiKTtcblx0XHRmb3IgKGNvbnN0IHRhc2sgb2Ygcm9vbS50YXNrcykge1xuXHRcdFx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0YXNrc1wiPlxuXHRcdFx0XHQ8ZGl2PiR7dGFzay50YXNrfTwvZGl2PiBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImRhdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRlYWRsaW5lXCI+JHt0YXNrLmRlYWRsaW5lfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiWFwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PmA7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBoYXMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgdGFza3MgZ3Vlc3Ncblx0fTtcblxuXHRjb25zdCBzaG93QWxsUm9vbXMgPSAoKSA9PiB7XG5cdFx0Ly9kZWxldGUgcmlnaHQtc2lkZS1jb250ZW50XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1zaWRlLWNvbnRlbnRcIikucmVtb3ZlKCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodFNpZGVcIikuaW5uZXJIVE1MID0gcmlnaHRTaWRlO1xuXG5cdFx0Y29uc3QgbGlzdCA9IG5ldyBMaXN0T2ZSb29tcygpO1xuXG5cdFx0Zm9yIChjb25zdCByb29tIG9mIGxpc3QuZ2V0QXJyYXkpIHtcblx0XHRcdGNvbnN0IGdlbmVyaWNDYXJkID0gbmV3IFJvb21DYXJkKCk7XG5cdFx0XHRnZW5lcmljQ2FyZC5hZGRSb29tQ2FyZChyb29tKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHQvLyByZXR1cm4gYWxsIGZ1bmN0aW9ucyBkZWZpbmVkXG5cdFx0c2hvd1Jvb20sXG5cdFx0YWRkVGFzayxcblx0XHRhZGRSb29tLFxuXHRcdHNob3dBbGxSb29tcyxcblx0fTtcbn0pKCk7XG5cbmNsYXNzIExpc3RPZlJvb21zIHtcblx0c3RhdGljICNhcnJheSA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiBcImtpdGNoZW5cIixcblx0XHRcdGlkZW50aWZpZXI6IDAsXG5cdFx0XHR0YXNrczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjbGVhbiBzdG92ZVwiLFxuXHRcdFx0XHRcdGRlYWRsaW5lOiBcIlR1ZXNkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwibW9wXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiRnJpZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcInN3ZWVwXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVGh1cnNkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwiY2xlYW4gZnJpZGdlXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiU3VuZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJiYXRocm9vbVwiLFxuXHRcdFx0aWRlbnRpZmllcjogMSxcblx0XHRcdHRhc2tzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcImNsZWFuIG1pcnJvclwiLFxuXHRcdFx0XHRcdGRlYWRsaW5lOiBcIlR1ZXNkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwiY2xlYW4gdG9pbGV0XCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiRnJpZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcImNoYW5nZSB0b3dlbHNcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJUaHVyc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiYmVkcm9vbVwiLFxuXHRcdFx0aWRlbnRpZmllcjogMixcblx0XHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjaGFuZ2Ugc2hlZXRzXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVHVlc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjbGVhbiBtaXJyb3JcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJGcmlkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwibW9wXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVGh1cnNkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwib3JnYW5pemUgY2xvc2V0XCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiU3VuZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJvZmZpY2VcIixcblx0XHRcdGlkZW50aWZpZXI6IDMsXG5cdFx0XHR0YXNrczogW1xuXHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwibW9wXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVGh1cnNkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwiY2xlYW4gZGVza1wiLFxuXHRcdFx0XHRcdGRlYWRsaW5lOiBcIlN1bmRheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdO1xuXG5cdGFkZFJvb21Ub0FycmF5KG5ld1Jvb20pIHtcblx0XHRMaXN0T2ZSb29tcy4jYXJyYXkucHVzaChuZXdSb29tKTtcblx0fVxuXG5cdGdldCBnZXRBcnJheSgpIHtcblx0XHRyZXR1cm4gTGlzdE9mUm9vbXMuI2FycmF5O1xuXHR9XG59XG5cbmNsYXNzIFJvb20ge1xuXHRjb25zdHJ1Y3Rvcihyb29tTmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IHJvb21OYW1lO1xuXHRcdHRoaXMuaWRlbnRpZmllciA9IFJvb20uI2NvdW50ZXIrKztcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdH1cblxuXHRzdGF0aWMgI2NvdW50ZXIgPSAwO1xuXG5cdC8vIFRPRE86IFJlbW92ZSByb29tIGZyb20gYXJyYXlcbn1cblxuLy8gQWRkIHRvIHRoZSBET00gLS0gbm8sIHRoaXMgc2hvdWxkIGJlIENSRUFURSwgTU9ESUZZXG5jbGFzcyBSb29tQ2FyZCB7XG5cdGFkZFJvb21DYXJkKG5ld1Jvb20pIHtcblx0XHRjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuZXdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiKTtcblx0XHRuZXdDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgbmV3Um9vbS5uYW1lKTtcblx0XHRuZXdDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtaWRlbnRpZmllclwiLCBuZXdSb29tLmlkZW50aWZpZXIpO1xuXHRcdG5ld0NhcmQudGV4dENvbnRlbnQgPSB0aGlzLiNjYXBpdGFsaXplRmlyc3RMZXR0ZXIobmV3Um9vbS5uYW1lKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cdH1cblxuXHQjY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCBjYXBpdGFsaXplZCA9IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblx0XHRcdHJldHVybiBjYXBpdGFsaXplZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHsgbGVmdFNpZGUsIHJpZ2h0U2lkZSwgZGlzcGxheVJpZ2h0LCBMaXN0T2ZSb29tcyB9O1xuIiwiLy8gVGhpcyB3aWxsIGNhbGwgYWxsIG5lY2Vzc2FyeSBmdW5jdGlvbnNcbi8vIFNvIGl0IGltcG9ydHMgZXZlcnl0aGluZ1xuLy8gSXQgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwYWdlIG9uIGxvYWRpbmdcblxuaW1wb3J0IFwiLi9ob21lL2hvbWUuY3NzXCI7XG5pbXBvcnQgKiBhcyBob21lIGZyb20gXCIuL2hvbWUvaG9tZS5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXIoY29udGVudCwgaWQsIGNsYXNzcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZWxlbWVudC5pZCA9IGlkO1xuXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcblxuXHRpZiAoYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXJndW1lbnRzWzJdKTtcblx0fVxuXG5cdHJldHVybiBlbGVtZW50O1xufVxuXG4oKCkgPT4ge1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcihob21lLmxlZnRTaWRlLCBcImxlZnRTaWRlXCIpKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXIoaG9tZS5yaWdodFNpZGUsIFwicmlnaHRTaWRlXCIpKTtcblx0Y29uc3QgbGlzdCA9IG5ldyBob21lLkxpc3RPZlJvb21zKCk7XG5cdGhvbWUuZGlzcGxheVJpZ2h0LnNob3dBbGxSb29tcygpO1xufSkoKTtcblxuY29uc3QgbGlua3NMZWZ0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdFNpZGVcIik7XG5saW5rc0xlZnRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRjb25zdCB3aGljaExpc3QgPSBlLnRhcmdldC5kYXRhc2V0LnZhbHVlO1xuXHRzd2l0Y2ggKHdoaWNoTGlzdCkge1xuXHRcdGNhc2UgXCJ0b2RheVwiOlxuXHRcdFx0Y29uc29sZS5sb2coXCJHaXZlIG1lIG15IHRhc2tzIGZvciB0b2RheSFcIik7XG5cdFx0XHRicmVhaztcblx0XHQvLyBTY2hlZHVsZWQgdGFza3MgaGF2ZSByZW1pbmRlcnNcblx0XHRjYXNlIFwic2NoZWR1bGVkXCI6XG5cdFx0XHRjb25zb2xlLmxvZyhcIkdpdmUgbWUgYWxsIHNjaGVkdWxlZCB0YXNrcyBjb21iaW5lZCFcIik7XG5cdFx0XHRicmVhaztcblx0XHQvLyBOb3QgYWxsIHRhc2tzIHdpbGwgaGF2ZSBhIHJlbWluZGVyLCBzbyB0aGV5J2xsIHNob3cgdXAgaGVyZVxuXHRcdGNhc2UgXCJhbGxUYXNrc1wiOlxuXHRcdFx0Y29uc29sZS5sb2coXCJHaXZlIG1lIGFsbCB0YXNrcywgZXZlbiBpZiBub3Qgc2NoZWR1bGVkIVwiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjb21wbGV0ZWRcIjpcblx0XHRcdGNvbnNvbGUubG9nKFwiR2l2ZSBtZSBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gY29tcGxldGVkIGFuZCB3aGVuIVwiKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJhbGxSb29tc1wiOlxuXHRcdFx0Y29uc29sZS5sb2coXCJTaG93IG1lIGluaXRpYWwgcGFnZSFcIik7XG5cdFx0XHRob21lLmRpc3BsYXlSaWdodC5zaG93QWxsUm9vbXMoKTtcblx0XHRcdGJyZWFrO1xuXHR9XG59KTtcblxuY29uc3QgbGlua3NSaWdodFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0U2lkZVwiKTtcbmxpbmtzUmlnaHRTaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRjb25zdCB3aGljaFJvb20gPSBlLnRhcmdldC5kYXRhc2V0LnZhbHVlO1xuXHRpZiAod2hpY2hSb29tID09PSBcImFkZFJvb21cIikge1xuXHRcdGNvbnN0IHJvb21OYW1lID0gcHJvbXB0KFwiTmFtZSB5b3VyIHJvb206XCIpO1xuXHRcdGhvbWUuZGlzcGxheVJpZ2h0LmFkZFJvb20ocm9vbU5hbWUpO1xuXHR9IGVsc2UgaWYgKHdoaWNoUm9vbSA9PT0gXCJhZGRUYXNrXCIpIHtcblx0XHRjb25zdCB0YXNrID0gcHJvbXB0KFwiVGFzazpcIik7XG5cdFx0aG9tZS5kaXNwbGF5UmlnaHQuYWRkVGFzayh0YXNrKTtcblx0fSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnZhbHVlKSB7XG5cdFx0Ly8gY29uc29sZS5sb2cod2hpY2hSb29tKTtcblx0XHRob21lLmRpc3BsYXlSaWdodC5zaG93Um9vbShlKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm47XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9