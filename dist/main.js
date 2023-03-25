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
/* harmony import */ var _task_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task/task.js */ "./src/task/task.js");
/* harmony import */ var _room_room_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../room/room.js */ "./src/room/room.js");



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
		const newRoom = new _room_room_js__WEBPACK_IMPORTED_MODULE_1__.Room(roomName); // newRoom is an object
		if (newRoom === null) {
			return;
		}

		// Add room to array
		const list = new ListOfRooms();
		list.addRoomToArray(newRoom);

		// Add room to the DOM
		const genericCard = new _room_room_js__WEBPACK_IMPORTED_MODULE_1__.RoomCard();
		genericCard.addRoomCard(newRoom);
	};

	const addTask = (taskName) => {
		const newTask = new _task_task_js__WEBPACK_IMPORTED_MODULE_0__.Task;
		const roomIndex = newTask.getRoomIndex(document.querySelector("#right-side-content h2:first-child"))

		newTask.addTaskToRoom(taskName, roomIndex);
		newTask.addNewTaskToDisplay(taskName, roomIndex);
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

		// Add list of tasks
		const newTask = new _task_task_js__WEBPACK_IMPORTED_MODULE_0__.Task;
		const roomObject = newTask.getRoomIndex(e.target);
		for (const task of roomObject.tasks) {
			newTask.displayAllTasks(task.task, task.deadline);
		}

		// TODO has to add event listeners to the tasks guess
	};

	const showAllRooms = () => {
		//delete right-side-content
		document.querySelector("#right-side-content").remove();
		document.querySelector("#rightSide").innerHTML = rightSide;

		const list = new ListOfRooms();

		for (const room of list.getArray) {
			const genericCard = new _room_room_js__WEBPACK_IMPORTED_MODULE_1__.RoomCard();
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

/***/ "./src/room/room.js":
/*!**************************!*\
  !*** ./src/room/room.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Room": () => (/* binding */ Room),
/* harmony export */   "RoomCard": () => (/* binding */ RoomCard)
/* harmony export */ });
class Room {
	constructor(roomName) {
		this.name = roomName;
		this.identifier = Room.#counter++;
		this.tasks = [];
	}

	static #counter = 4;

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

/***/ "./src/task/task.js":
/*!**************************!*\
  !*** ./src/task/task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.js */ "./src/home/home.js");


class Task {
	getRoomIndex(roomToGetIndex){
		const list = new _home_home_js__WEBPACK_IMPORTED_MODULE_0__.ListOfRooms();
		console.log(roomToGetIndex);
		console.log(roomToGetIndex.dataset.identifier);

		// find the object with the identifier
		const index = list.getArray.findIndex(
			(room) => room.identifier === +roomToGetIndex.dataset.identifier
		);
		console.log(list.getArray);


		return list.getArray[index]; // return room
	}

	addTaskToRoom(taskName, roomIndex) {
		// const room = this.getRoomIndex(roomToGetIndex);

		const newTaskObject = {
			task: taskName,
			deadline: 'newDeadline'
		}
		roomIndex.tasks.push(newTaskObject);
	}

	displayAllTasks(task, deadline){
		// const room = this.getRoomIndex(roomToGetIndex);

		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">
				<div>${task}</div> 
				<div class="date">
				<div class="deadline">${deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
	}

	addNewTaskToDisplay(taskName, roomObject){
		// const room = this.getRoomIndex(roomToGetIndex);

		const taskContainer = document.querySelector("#task-container");
		taskContainer.innerHTML += `<div class="tasks">
				<div>${roomObject.tasks[roomObject.tasks.length - 1].task}</div> 
				<div class="date">
				<div class="deadline">${roomObject.tasks[roomObject.tasks.length - 1].deadline}</div>
				<div class="X"></div>
				</div>
			</div>`;
	}
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO0FBQ0g7QUFDQSxFQUFFLGdFQUEwQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDOEM7O0FBRTlDO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxtREFBbUQ7QUFDOUQ7QUFDQSw0QkFBNEIsdURBQXVEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ob21lL2hvbWUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ob21lL2hvbWUuY3NzPzhkNDEiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcm9vbS9yb29tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2svdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9TZWxsZW5hQnJ1c2gteDNKeUsudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSGVhZGVyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ1RydWVUeXBlJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWFpbkZvbnQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnVHJ1ZVR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMTBweDtcXG5cXHRjb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdGZvbnQtZmFtaWx5OiBNYWluRm9udCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxNjksIDE3Mik7XFxufVxcblxcbiNsZWZ0U2lkZSxcXG4jcmlnaHRTaWRlIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNsZWZ0U2lkZXtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMTVweCwgMWZyKSk7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jbGVmdFNpZGUgPiBkaXYsXFxuLmNhcmRzLFxcbi50YXNrcyB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdjpob3ZlcixcXG4uY2FyZHM6aG92ZXJ7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTM5LCAxNDIpO1xcbn1cXG5cXG4jcmlnaHRTaWRlIHtcXG5cXHRmbGV4LWdyb3c6IDI7XFxuXFx0d2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTM5LCAxNDIpO1xcbn1cXG5cXG4jcmlnaHQtc2lkZS1jb250ZW50ID4gaDIge1xcblxcdG1hcmdpbjogMHB4OyBcXG5cXHRmb250LWZhbWlseTogSGVhZGVyLCBjdXJzaXZlO1xcblxcdGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuI2NhcmQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTEwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiAxMTBweDtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG59XFxuXFxuI3JpZ2h0U2lkZSBidXR0b24ge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmc6IDBweCAxMnB4IDJweCA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0Y29sb3I6IHJnYig2MywgNTAsIDY4KTtcXG59XFxuXFxuI3JpZ2h0U2lkZSBidXR0b246aG92ZXIge1xcblxcdGNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0U2lkZSBzcGFuIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcblxcdC8qd2lkdGg6IDI1MHB4OyovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufSBcXG5cXG4udGFza3M+ZGl2OmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLmRhdGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxNXB4O1xcbn1cXG5cXG4uWCB7XFxuXFx0d2lkdGg6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uWDo6YmVmb3JlLFxcbi5YOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdHdpZHRoOiA0cHg7XFxuXFx0aGVpZ2h0OiAxOHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uWDo6YmVmb3JlIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uWDo6YWZ0ZXIge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsK0RBQXVEO0VBQ3ZELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0RBQWlFO0VBQ2pFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUdBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLGlDQUFpQztDQUNqQyxvQ0FBb0M7QUFDckM7O0FBRUE7O0NBRUMsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYiw0REFBNEQ7Q0FDNUQsU0FBUztDQUNULGlCQUFpQjtBQUNsQjs7QUFFQTs7O0NBR0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw0QkFBNEI7QUFDN0I7O0FBRUE7O0NBRUMsMEJBQTBCO0NBQzFCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUVBO0NBQ0MsV0FBVztDQUNYLDRCQUE0QjtDQUM1QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLCtDQUErQztDQUMvQyxxQkFBcUI7Q0FDckIsU0FBUztBQUNWOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixpQ0FBaUM7Q0FDakMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNERBQTREO0NBQzVELFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTztBQUNSOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLFdBQVc7Q0FDWCxpQ0FBaUM7Q0FDakMsVUFBVTtDQUNWLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdIZWFkZXInO1xcbiAgc3JjOiB1cmwoJy4vU2VsbGVuYUJydXNoLXgzSnlLLnR0ZicpIGZvcm1hdCgnVHJ1ZVR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNYWluRm9udCc7XFxuICBzcmM6IHVybCgnLi9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgnVHJ1ZVR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMTBweDtcXG5cXHRjb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdGZvbnQtZmFtaWx5OiBNYWluRm9udCwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxNjksIDE3Mik7XFxufVxcblxcbiNsZWZ0U2lkZSxcXG4jcmlnaHRTaWRlIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNsZWZ0U2lkZXtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMTVweCwgMWZyKSk7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jbGVmdFNpZGUgPiBkaXYsXFxuLmNhcmRzLFxcbi50YXNrcyB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdjpob3ZlcixcXG4uY2FyZHM6aG92ZXJ7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZSA+IGRpdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTM5LCAxNDIpO1xcbn1cXG5cXG4jcmlnaHRTaWRlIHtcXG5cXHRmbGV4LWdyb3c6IDI7XFxuXFx0d2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTM5LCAxNDIpO1xcbn1cXG5cXG4jcmlnaHQtc2lkZS1jb250ZW50ID4gaDIge1xcblxcdG1hcmdpbjogMHB4OyBcXG5cXHRmb250LWZhbWlseTogSGVhZGVyLCBjdXJzaXZlO1xcblxcdGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuI2NhcmQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTEwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiAxMTBweDtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG59XFxuXFxuI3JpZ2h0U2lkZSBidXR0b24ge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmc6IDBweCAxMnB4IDJweCA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0Y29sb3I6IHJnYig2MywgNTAsIDY4KTtcXG59XFxuXFxuI3JpZ2h0U2lkZSBidXR0b246aG92ZXIge1xcblxcdGNvbG9yOiByZ2IoMTUyLCAxMzksIDE0Mik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0U2lkZSBzcGFuIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcblxcdC8qd2lkdGg6IDI1MHB4OyovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1YzNkMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufSBcXG5cXG4udGFza3M+ZGl2OmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLmRhdGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxNXB4O1xcbn1cXG5cXG4uWCB7XFxuXFx0d2lkdGg6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uWDo6YmVmb3JlLFxcbi5YOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA1MCwgNjgpO1xcblxcdHdpZHRoOiA0cHg7XFxuXFx0aGVpZ2h0OiAxOHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uWDo6YmVmb3JlIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uWDo6YWZ0ZXIge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrL3Rhc2suanNcIjtcbmltcG9ydCB7IFJvb20sIFJvb21DYXJkIH0gZnJvbSBcIi4uL3Jvb20vcm9vbS5qc1wiO1xuXG4vLyBIZXJlIEkgd3JpdGUgdGhlIHdob2xlIGh0bWwgb2YgdGhlIGxvYWRpbmcvbGFuZGluZyBwYWdlXG4vLyBEb24ndCBmb3JnZXQgdGhlIGBleHBvcnRgIHN0YXRlbWVudFxuLy8gV3JpdGUgZXZlcnl0aGluZyBpbiBzdHJpbmdzIHRvIGJlIGFkZGVkIGFzIGlubmVySHRtbFxuXG5jb25zdCBsZWZ0U2lkZSA9IGA8ZGl2IGRhdGEtdmFsdWU9XCJ0b2RheVwiPlRvZGF5PC9kaXY+XG48ZGl2IGRhdGEtdmFsdWU9XCJzY2hlZHVsZWRcIj5TY2hlZHVsZWQ8L2Rpdj5cbjxkaXYgZGF0YS12YWx1ZT1cImFsbFRhc2tzXCI+QWxsIHRhc2tzPC9kaXY+XG48ZGl2IGRhdGEtdmFsdWU9XCJjb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L2Rpdj5cbjxkaXYgZGF0YS12YWx1ZT1cImFsbFJvb21zXCI+QWxsIHJvb21zPC9kaXY+YDtcblxuY29uc3QgcmlnaHRTaWRlID0gYDxkaXYgaWQ9XCJyaWdodC1zaWRlLWNvbnRlbnRcIj5cblx0PGgyPlJvb21zPC9oMj5cblx0PGJ1dHRvbiBkYXRhLXZhbHVlPVwiYWRkUm9vbVwiPiA8c3Bhbj4rPC9zcGFuPiBBZGQgUm9vbTwvYnV0dG9uPlxuXHQ8ZGl2IGlkPVwiY2FyZC1jb250YWluZXJcIj5cblx0PC9kaXY+XG48L2Rpdj5gO1xuXG4vLyBEZWZpbmUgYWxsIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBkaXNwbGF5XG5jb25zdCBkaXNwbGF5UmlnaHQgPSAoKCkgPT4ge1xuXHQvLyBBZGQgYnV0dG9uIGZ1bmN0aW9uXG5cdGNvbnN0IGFkZFJvb20gPSAocm9vbU5hbWUpID0+IHtcblx0XHQvLyBjcmVhdGUgcm9vbVxuXHRcdGNvbnN0IG5ld1Jvb20gPSBuZXcgUm9vbShyb29tTmFtZSk7IC8vIG5ld1Jvb20gaXMgYW4gb2JqZWN0XG5cdFx0aWYgKG5ld1Jvb20gPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGQgcm9vbSB0byBhcnJheVxuXHRcdGNvbnN0IGxpc3QgPSBuZXcgTGlzdE9mUm9vbXMoKTtcblx0XHRsaXN0LmFkZFJvb21Ub0FycmF5KG5ld1Jvb20pO1xuXG5cdFx0Ly8gQWRkIHJvb20gdG8gdGhlIERPTVxuXHRcdGNvbnN0IGdlbmVyaWNDYXJkID0gbmV3IFJvb21DYXJkKCk7XG5cdFx0Z2VuZXJpY0NhcmQuYWRkUm9vbUNhcmQobmV3Um9vbSk7XG5cdH07XG5cblx0Y29uc3QgYWRkVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzaztcblx0XHRjb25zdCByb29tSW5kZXggPSBuZXdUYXNrLmdldFJvb21JbmRleChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LXNpZGUtY29udGVudCBoMjpmaXJzdC1jaGlsZFwiKSlcblxuXHRcdG5ld1Rhc2suYWRkVGFza1RvUm9vbSh0YXNrTmFtZSwgcm9vbUluZGV4KTtcblx0XHRuZXdUYXNrLmFkZE5ld1Rhc2tUb0Rpc3BsYXkodGFza05hbWUsIHJvb21JbmRleCk7XG5cdH07XG5cblx0Ly8gU2hvdyByb29tIG9uIHJpZ2h0IHNpZGVcblx0Y29uc3Qgc2hvd1Jvb20gPSAoZSkgPT4ge1xuXHRcdC8vIGRlbGV0ZSBldmVyeXRoaW5nXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1zaWRlLWNvbnRlbnRcIikucmVtb3ZlKCk7XG5cblx0XHQvLyBjcmVhdGUgZGl2IHRvIGhvbGQgY29udGVudFxuXHRcdGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnRlbnREaXYuaWQgPSBcInJpZ2h0LXNpZGUtY29udGVudFwiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHRTaWRlXCIpLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG5cdFx0Ly8gYWRkIGNvbnRlbnQgdG8gZGl2XG5cdFx0Ly8gVXBwZXIgY2FzZSByb29tIG5hbWVcblx0XHRjb25zdCByb29tTmFtZSA9XG5cdFx0XHRlLnRhcmdldC5kYXRhc2V0LnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdGUudGFyZ2V0LmRhdGFzZXQudmFsdWUuc2xpY2UoMSk7XG5cdFx0Y29udGVudERpdi5pbm5lckhUTUwgPSBgXG5cdFx0PGgyIGRhdGEtdmFsdWU9XCIke2UudGFyZ2V0LmRhdGFzZXQudmFsdWV9XCIgZGF0YS1pZGVudGlmaWVyPVwiJHtlLnRhcmdldC5kYXRhc2V0LmlkZW50aWZpZXJ9XCI+JHtyb29tTmFtZX08L2gyPlxuXHRcdDxidXR0b24gZGF0YS12YWx1ZT1cImFkZFRhc2tcIj4gPHNwYW4+Kzwvc3Bhbj4gQWRkIFRhc2s8L2J1dHRvbj5cblx0XHQ8ZGl2IGlkPVwidGFzay1jb250YWluZXJcIj48L2Rpdj5gO1xuXG5cdFx0Ly8gQWRkIGxpc3Qgb2YgdGFza3Ncblx0XHRjb25zdCBuZXdUYXNrID0gbmV3IFRhc2s7XG5cdFx0Y29uc3Qgcm9vbU9iamVjdCA9IG5ld1Rhc2suZ2V0Um9vbUluZGV4KGUudGFyZ2V0KTtcblx0XHRmb3IgKGNvbnN0IHRhc2sgb2Ygcm9vbU9iamVjdC50YXNrcykge1xuXHRcdFx0bmV3VGFzay5kaXNwbGF5QWxsVGFza3ModGFzay50YXNrLCB0YXNrLmRlYWRsaW5lKTtcblx0XHR9XG5cblx0XHQvLyBUT0RPIGhhcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSB0YXNrcyBndWVzc1xuXHR9O1xuXG5cdGNvbnN0IHNob3dBbGxSb29tcyA9ICgpID0+IHtcblx0XHQvL2RlbGV0ZSByaWdodC1zaWRlLWNvbnRlbnRcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LXNpZGUtY29udGVudFwiKS5yZW1vdmUoKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0U2lkZVwiKS5pbm5lckhUTUwgPSByaWdodFNpZGU7XG5cblx0XHRjb25zdCBsaXN0ID0gbmV3IExpc3RPZlJvb21zKCk7XG5cblx0XHRmb3IgKGNvbnN0IHJvb20gb2YgbGlzdC5nZXRBcnJheSkge1xuXHRcdFx0Y29uc3QgZ2VuZXJpY0NhcmQgPSBuZXcgUm9vbUNhcmQoKTtcblx0XHRcdGdlbmVyaWNDYXJkLmFkZFJvb21DYXJkKHJvb20pO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdC8vIHJldHVybiBhbGwgZnVuY3Rpb25zIGRlZmluZWRcblx0XHRzaG93Um9vbSxcblx0XHRhZGRUYXNrLFxuXHRcdGFkZFJvb20sXG5cdFx0c2hvd0FsbFJvb21zLFxuXHR9O1xufSkoKTtcblxuY2xhc3MgTGlzdE9mUm9vbXMge1xuXHRzdGF0aWMgI2FycmF5ID0gW1xuXHRcdHtcblx0XHRcdG5hbWU6IFwia2l0Y2hlblwiLFxuXHRcdFx0aWRlbnRpZmllcjogMCxcblx0XHRcdHRhc2tzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcImNsZWFuIHN0b3ZlXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVHVlc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJtb3BcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJGcmlkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwic3dlZXBcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJUaHVyc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjbGVhbiBmcmlkZ2VcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJTdW5kYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcImJhdGhyb29tXCIsXG5cdFx0XHRpZGVudGlmaWVyOiAxLFxuXHRcdFx0dGFza3M6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwiY2xlYW4gbWlycm9yXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiVHVlc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjbGVhbiB0b2lsZXRcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJGcmlkYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhc2s6IFwiY2hhbmdlIHRvd2Vsc1wiLFxuXHRcdFx0XHRcdGRlYWRsaW5lOiBcIlRodXJzZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJiZWRyb29tXCIsXG5cdFx0XHRpZGVudGlmaWVyOiAyLFxuXHRcdFx0dGFza3M6IFtcblx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcImNoYW5nZSBzaGVldHNcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJUdWVzZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXNrOiBcImNsZWFuIG1pcnJvclwiLFxuXHRcdFx0XHRcdGRlYWRsaW5lOiBcIkZyaWRheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJtb3BcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJUaHVyc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJvcmdhbml6ZSBjbG9zZXRcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJTdW5kYXlcIixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIm9mZmljZVwiLFxuXHRcdFx0aWRlbnRpZmllcjogMyxcblx0XHRcdHRhc2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJtb3BcIixcblx0XHRcdFx0XHRkZWFkbGluZTogXCJUaHVyc2RheVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFzazogXCJjbGVhbiBkZXNrXCIsXG5cdFx0XHRcdFx0ZGVhZGxpbmU6IFwiU3VuZGF5XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdF07XG5cblx0YWRkUm9vbVRvQXJyYXkobmV3Um9vbSkge1xuXHRcdExpc3RPZlJvb21zLiNhcnJheS5wdXNoKG5ld1Jvb20pO1xuXHR9XG5cblx0Z2V0IGdldEFycmF5KCkge1xuXHRcdHJldHVybiBMaXN0T2ZSb29tcy4jYXJyYXk7XG5cdH1cbn1cblxuZXhwb3J0IHsgbGVmdFNpZGUsIHJpZ2h0U2lkZSwgZGlzcGxheVJpZ2h0LCBMaXN0T2ZSb29tcyB9O1xuIiwiLy8gVGhpcyB3aWxsIGNhbGwgYWxsIG5lY2Vzc2FyeSBmdW5jdGlvbnNcbi8vIFNvIGl0IGltcG9ydHMgZXZlcnl0aGluZ1xuLy8gSXQgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwYWdlIG9uIGxvYWRpbmdcblxuaW1wb3J0IFwiLi9ob21lL2hvbWUuY3NzXCI7XG5pbXBvcnQgKiBhcyBob21lIGZyb20gXCIuL2hvbWUvaG9tZS5qc1wiO1xuXG5cbmZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBpZCwgY2xhc3NzKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRlbGVtZW50LmlkID0gaWQ7XG5cblx0ZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG5cdGlmIChhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhcmd1bWVudHNbMl0pO1xuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbigoKSA9PiB7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyKGhvbWUubGVmdFNpZGUsIFwibGVmdFNpZGVcIikpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcihob21lLnJpZ2h0U2lkZSwgXCJyaWdodFNpZGVcIikpO1xuXHRjb25zdCBsaXN0ID0gbmV3IGhvbWUuTGlzdE9mUm9vbXMoKTtcblx0aG9tZS5kaXNwbGF5UmlnaHQuc2hvd0FsbFJvb21zKCk7XG59KSgpO1xuXG5jb25zdCBsaW5rc0xlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0U2lkZVwiKTtcbmxpbmtzTGVmdFNpZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGNvbnN0IHdoaWNoTGlzdCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsdWU7XG5cdHN3aXRjaCAod2hpY2hMaXN0KSB7XG5cdFx0Y2FzZSBcInRvZGF5XCI6XG5cdFx0XHRjb25zb2xlLmxvZyhcIkdpdmUgbWUgbXkgdGFza3MgZm9yIHRvZGF5IVwiKTtcblx0XHRcdGJyZWFrO1xuXHRcdC8vIFNjaGVkdWxlZCB0YXNrcyBoYXZlIHJlbWluZGVyc1xuXHRcdGNhc2UgXCJzY2hlZHVsZWRcIjpcblx0XHRcdGNvbnNvbGUubG9nKFwiR2l2ZSBtZSBhbGwgc2NoZWR1bGVkIHRhc2tzIGNvbWJpbmVkIVwiKTtcblx0XHRcdGJyZWFrO1xuXHRcdC8vIE5vdCBhbGwgdGFza3Mgd2lsbCBoYXZlIGEgcmVtaW5kZXIsIHNvIHRoZXknbGwgc2hvdyB1cCBoZXJlXG5cdFx0Y2FzZSBcImFsbFRhc2tzXCI6XG5cdFx0XHRjb25zb2xlLmxvZyhcIkdpdmUgbWUgYWxsIHRhc2tzLCBldmVuIGlmIG5vdCBzY2hlZHVsZWQhXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImNvbXBsZXRlZFwiOlxuXHRcdFx0Y29uc29sZS5sb2coXCJHaXZlIG1lIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBjb21wbGV0ZWQgYW5kIHdoZW4hXCIpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImFsbFJvb21zXCI6XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNob3cgbWUgaW5pdGlhbCBwYWdlIVwiKTtcblx0XHRcdGhvbWUuZGlzcGxheVJpZ2h0LnNob3dBbGxSb29tcygpO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn0pO1xuXG5jb25zdCBsaW5rc1JpZ2h0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHRTaWRlXCIpO1xubGlua3NSaWdodFNpZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGNvbnN0IHdoaWNoUm9vbSA9IGUudGFyZ2V0LmRhdGFzZXQudmFsdWU7XG5cdGlmICh3aGljaFJvb20gPT09IFwiYWRkUm9vbVwiKSB7XG5cdFx0Y29uc3Qgcm9vbU5hbWUgPSBwcm9tcHQoXCJOYW1lIHlvdXIgcm9vbTpcIik7XG5cdFx0aG9tZS5kaXNwbGF5UmlnaHQuYWRkUm9vbShyb29tTmFtZSk7XG5cdH0gZWxzZSBpZiAod2hpY2hSb29tID09PSBcImFkZFRhc2tcIikge1xuXHRcdGNvbnN0IHRhc2sgPSBwcm9tcHQoXCJUYXNrOlwiKTtcblx0XHRob21lLmRpc3BsYXlSaWdodC5hZGRUYXNrKHRhc2spO1xuXHR9IGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQudmFsdWUpIHtcblx0XHQvLyBjb25zb2xlLmxvZyh3aGljaFJvb20pO1xuXHRcdGhvbWUuZGlzcGxheVJpZ2h0LnNob3dSb29tKGUpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxufSk7XG4iLCJjbGFzcyBSb29tIHtcblx0Y29uc3RydWN0b3Iocm9vbU5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSByb29tTmFtZTtcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBSb29tLiNjb3VudGVyKys7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHR9XG5cblx0c3RhdGljICNjb3VudGVyID0gNDtcblxuXHQvLyBUT0RPOiBSZW1vdmUgcm9vbSBmcm9tIGFycmF5XG59XG5cbi8vIEFkZCB0byB0aGUgRE9NIC0tIG5vLCB0aGlzIHNob3VsZCBiZSBDUkVBVEUsIE1PRElGWVxuY2xhc3MgUm9vbUNhcmQge1xuXHRhZGRSb29tQ2FyZChuZXdSb29tKSB7XG5cdFx0Y29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bmV3Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIik7XG5cdFx0bmV3Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIG5ld1Jvb20ubmFtZSk7XG5cdFx0bmV3Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkZW50aWZpZXJcIiwgbmV3Um9vbS5pZGVudGlmaWVyKTtcblx0XHRuZXdDYXJkLnRleHRDb250ZW50ID0gdGhpcy4jY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5ld1Jvb20ubmFtZSk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXHR9XG5cblx0I2NhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIHN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWQgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG5cdFx0XHRyZXR1cm4gY2FwaXRhbGl6ZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdHJpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydHsgUm9vbSwgUm9vbUNhcmR9IiwiaW1wb3J0IHsgTGlzdE9mUm9vbXMgfSBmcm9tIFwiLi4vaG9tZS9ob21lLmpzXCI7XG5cbmNsYXNzIFRhc2sge1xuXHRnZXRSb29tSW5kZXgocm9vbVRvR2V0SW5kZXgpe1xuXHRcdGNvbnN0IGxpc3QgPSBuZXcgTGlzdE9mUm9vbXMoKTtcblx0XHRjb25zb2xlLmxvZyhyb29tVG9HZXRJbmRleCk7XG5cdFx0Y29uc29sZS5sb2cocm9vbVRvR2V0SW5kZXguZGF0YXNldC5pZGVudGlmaWVyKTtcblxuXHRcdC8vIGZpbmQgdGhlIG9iamVjdCB3aXRoIHRoZSBpZGVudGlmaWVyXG5cdFx0Y29uc3QgaW5kZXggPSBsaXN0LmdldEFycmF5LmZpbmRJbmRleChcblx0XHRcdChyb29tKSA9PiByb29tLmlkZW50aWZpZXIgPT09ICtyb29tVG9HZXRJbmRleC5kYXRhc2V0LmlkZW50aWZpZXJcblx0XHQpO1xuXHRcdGNvbnNvbGUubG9nKGxpc3QuZ2V0QXJyYXkpO1xuXG5cblx0XHRyZXR1cm4gbGlzdC5nZXRBcnJheVtpbmRleF07IC8vIHJldHVybiByb29tXG5cdH1cblxuXHRhZGRUYXNrVG9Sb29tKHRhc2tOYW1lLCByb29tSW5kZXgpIHtcblx0XHQvLyBjb25zdCByb29tID0gdGhpcy5nZXRSb29tSW5kZXgocm9vbVRvR2V0SW5kZXgpO1xuXG5cdFx0Y29uc3QgbmV3VGFza09iamVjdCA9IHtcblx0XHRcdHRhc2s6IHRhc2tOYW1lLFxuXHRcdFx0ZGVhZGxpbmU6ICduZXdEZWFkbGluZSdcblx0XHR9XG5cdFx0cm9vbUluZGV4LnRhc2tzLnB1c2gobmV3VGFza09iamVjdCk7XG5cdH1cblxuXHRkaXNwbGF5QWxsVGFza3ModGFzaywgZGVhZGxpbmUpe1xuXHRcdC8vIGNvbnN0IHJvb20gPSB0aGlzLmdldFJvb21JbmRleChyb29tVG9HZXRJbmRleCk7XG5cblx0XHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNvbnRhaW5lclwiKTtcblx0XHR0YXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG5cdFx0XHRcdDxkaXY+JHt0YXNrfTwvZGl2PiBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImRhdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRlYWRsaW5lXCI+JHtkZWFkbGluZX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIlhcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5gO1xuXHR9XG5cblx0YWRkTmV3VGFza1RvRGlzcGxheSh0YXNrTmFtZSwgcm9vbU9iamVjdCl7XG5cdFx0Ly8gY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbUluZGV4KHJvb21Ub0dldEluZGV4KTtcblxuXHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY29udGFpbmVyXCIpO1xuXHRcdHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwidGFza3NcIj5cblx0XHRcdFx0PGRpdj4ke3Jvb21PYmplY3QudGFza3Nbcm9vbU9iamVjdC50YXNrcy5sZW5ndGggLSAxXS50YXNrfTwvZGl2PiBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImRhdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRlYWRsaW5lXCI+JHtyb29tT2JqZWN0LnRhc2tzW3Jvb21PYmplY3QudGFza3MubGVuZ3RoIC0gMV0uZGVhZGxpbmV9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJYXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+YDtcblx0fVxufVxuXG5cbmV4cG9ydCB7IFRhc2sgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=