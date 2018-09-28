(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bluebird"));
	else if(typeof define === 'function' && define.amd)
		define("fast-downloads", ["bluebird"], factory);
	else if(typeof exports === 'object')
		exports["fast-downloads"] = factory(require("bluebird"));
	else
		root["fast-downloads"] = factory(root["bluebird"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Download = __webpack_require__(1);

var _Download2 = _interopRequireDefault(_Download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Download2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(2);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Download = function () {
  function Download() {
    _classCallCheck(this, Download);
  }

  _createClass(Download, null, [{
    key: 'file',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var content = _ref.content,
            fileName = _ref.fileName,
            mimeType = _ref.mimeType;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.hasOwnProperty('cordova')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', this.cordovaDownload({ content: content, fileName: fileName, mimeType: mimeType }));

              case 2:
                return _context.abrupt('return', this.browserDownload({ content: content, fileName: fileName, mimeType: mimeType }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function file(_x) {
        return _ref2.apply(this, arguments);
      }

      return file;
    }()
  }, {
    key: 'browserDownload',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var content = _ref3.content,
            fileName = _ref3.fileName,
            mimeType = _ref3.mimeType;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                  mimeType = mimeType || 'application/octet-stream';
                  var a = document.createElement('a');

                  if (navigator.msSaveBlob) {
                    // IE10
                    navigator.msSaveBlob(new Blob([content], {
                      type: mimeType
                    }), fileName);
                    resolve(true);
                  } else if (URL && 'download' in a) {
                    // html5 A[download]
                    a.href = URL.createObjectURL(new Blob([content], {
                      type: mimeType
                    }));
                    a.setAttribute('download', fileName);
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    resolve(true);
                  } else {
                    var fileContent = 'data:' + mimeType + ',' + content;
                    var encodedUri = encodeURI(fileContent);
                    var link = document.createElement('a');

                    link.id = '_downloadedFile';
                    if (link.download !== undefined) {
                      link.href = encodedUri;
                      link.download = fileName;
                      link.target = '_blank';
                      document.body.appendChild(link);
                      link.click();
                    } else {
                      window.open(encodedUri);
                    }
                    resolve(true);
                  }
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function browserDownload(_x2) {
        return _ref4.apply(this, arguments);
      }

      return browserDownload;
    }()
  }, {
    key: 'cordovaDownload',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
        var content = _ref5.content,
            fileName = _ref5.fileName,
            mimeType = _ref5.mimeType;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                  var logOb = void 0;

                  function writeLog(output) {
                    if (!logOb) return;
                    logOb.createWriter(function (fileWriter) {
                      fileWriter.seek(fileWriter.length);
                      var blob = new Blob([output], {
                        type: mimeType
                      });

                      fileWriter.write(blob);
                      resolve({
                        directory: cordova.file.externalDataDirectory,
                        filename: fileName
                      });
                    });
                  }

                  window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dir) {
                    dir.getFile(fileName, {
                      create: true
                    }, function (file) {
                      logOb = file;
                      writeLog(content);
                    });
                  });
                }));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function cordovaDownload(_x3) {
        return _ref6.apply(this, arguments);
      }

      return cordovaDownload;
    }()
  }]);

  return Download;
}();

exports.default = Download;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fast-downloads.js.map