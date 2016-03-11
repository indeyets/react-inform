(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["reactInform"] = factory(require("react"));
	else
		root["reactInform"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _form = __webpack_require__(5);

	var _form2 = _interopRequireDefault(_form);

	var _createValidate = __webpack_require__(2);

	var _createValidate2 = _interopRequireDefault(_createValidate);

	var _from = __webpack_require__(6);

	var _from2 = _interopRequireDefault(_from);

	var _resetFormButton = __webpack_require__(8);

	var _resetFormButton2 = _interopRequireDefault(_resetFormButton);

	var _disabledFormSubmit = __webpack_require__(3);

	var _disabledFormSubmit2 = _interopRequireDefault(_disabledFormSubmit);

	var _feedbackFormSubmit = __webpack_require__(4);

	var _feedbackFormSubmit2 = _interopRequireDefault(_feedbackFormSubmit);

	exports['default'] = _form2['default'];
	exports.form = _form2['default'];
	exports.createValidate = _createValidate2['default'];
	exports.from = _from2['default'];
	exports.ResetFormButton = _resetFormButton2['default'];
	exports.DisabledFormSubmit = _disabledFormSubmit2['default'];
	exports.FeedbackFormSubmit = _feedbackFormSubmit2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = createValidate;

	function createValidate(rulesMap) {
	  return function (values) {
	    var errors = {};
	    Object.keys(rulesMap).forEach(function (key) {
	      var rules = rulesMap[key];
	      var value = values[key];

	      for (var message in rules) {
	        if (rules.hasOwnProperty(message)) {
	          var rule = rules[message];
	          if (!rule(value, values)) {
	            errors[key] = message;
	            break;
	          }
	        }
	      }
	    });
	    return errors;
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var DisabledFormSubmit = (function (_Component) {
	  _inherits(DisabledFormSubmit, _Component);

	  function DisabledFormSubmit() {
	    _classCallCheck(this, DisabledFormSubmit);

	    _get(Object.getPrototypeOf(DisabledFormSubmit.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(DisabledFormSubmit, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement("input", _extends({ type: "submit", disabled: !this.context.form.isValid() }, this.props));
	    }
	  }], [{
	    key: "contextTypes",
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return DisabledFormSubmit;
	})(_react.Component);

	exports["default"] = DisabledFormSubmit;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var FeedbackFormSubmit = (function (_Component) {
	  _inherits(FeedbackFormSubmit, _Component);

	  function FeedbackFormSubmit() {
	    _classCallCheck(this, FeedbackFormSubmit);

	    _get(Object.getPrototypeOf(FeedbackFormSubmit.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(FeedbackFormSubmit, [{
	    key: "handleClick",
	    value: function handleClick(e) {
	      if (!this.context.form.isValid()) {
	        e.preventDefault();
	        this.context.form.forceValidate();
	        if (this.props.onInvalid) this.props.onInvalid(e);
	      }
	      if (this.props.onClick) this.props.onClick(e);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this = this;

	      return _react2["default"].createElement("input", _extends({ type: "submit" }, this.props, { onClick: function (e) {
	          return _this.handleClick(e);
	        } }));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      onInvalid: _react.PropTypes.func,
	      onClick: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "contextTypes",
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return FeedbackFormSubmit;
	})(_react.Component);

	exports["default"] = FeedbackFormSubmit;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = form;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getValue = __webpack_require__(7);

	var _getValue2 = _interopRequireDefault(_getValue);

	function form(_ref) {
	  var fields = _ref.fields;
	  var _ref$validate = _ref.validate;
	  var validate = _ref$validate === undefined ? function () {
	    return {};
	  } : _ref$validate;

	  return function (Wrapped) {
	    return (function (_Component) {
	      _inherits(FormWrapper, _Component);

	      _createClass(FormWrapper, null, [{
	        key: 'childContextTypes',
	        value: {
	          form: _react.PropTypes.object,
	          fields: _react.PropTypes.object
	        },
	        enumerable: true
	      }, {
	        key: 'propTypes',
	        value: {
	          value: _react.PropTypes.object,
	          onChange: _react.PropTypes.func
	        },
	        enumerable: true
	      }]);

	      function FormWrapper(props) {
	        _classCallCheck(this, FormWrapper);

	        _get(Object.getPrototypeOf(FormWrapper.prototype), 'constructor', this).call(this, props);
	        this.fields = this.createFields(fields);
	        this.values = {};
	        this.touched = {};
	        this.resolveErrors();
	        if (props.value !== undefined) this.setEachValue(props.value);
	      }

	      _createClass(FormWrapper, [{
	        key: 'createFields',
	        value: function createFields(newFields) {
	          var _this = this;

	          return newFields.reduce(function (acc, v) {
	            return _extends({}, acc, _defineProperty({}, v, _this.createField(v)));
	          }, {});
	        }
	      }, {
	        key: 'createField',
	        value: function createField(name) {
	          var _this2 = this;

	          return {
	            onBlur: function onBlur() {
	              return _this2.blur(name);
	            },
	            onChange: function onChange(e) {
	              return _this2.handleChange(name, e);
	            },
	            value: undefined
	          };
	        }
	      }, {
	        key: 'handleChange',
	        value: function handleChange(name, e) {
	          var value = (0, _getValue2['default'])(e);
	          var changed = this.setValues(_extends({}, this.values, _defineProperty({}, name, value)));
	          if (changed) this.forceUpdate();
	        }
	      }, {
	        key: 'pushChanges',
	        value: function pushChanges(data) {
	          if (this.props.onChange) this.props.onChange(data || this.values);
	        }
	      }, {
	        key: 'setValue',
	        value: function setValue(name, value) {
	          if (this.values[name] === value) return false;
	          this.fields[name].value = value;
	          this.values[name] = value;
	          if (typeof value === 'boolean') this.fields[name].checked = value;else delete this.fields[name].checked;
	          return true;
	        }
	      }, {
	        key: 'flushChanges',
	        value: function flushChanges() {
	          this.resolveErrors();
	          this.forceUpdate();
	        }
	      }, {
	        key: 'setEachValue',
	        value: function setEachValue(data) {
	          var _this3 = this;

	          var changed = false;
	          fields.forEach(function (field) {
	            var prop = data[field];
	            changed = _this3.setValue(field, prop) || changed;
	          });
	          if (changed) this.resolveErrors();
	          return changed;
	        }
	      }, {
	        key: 'setValues',
	        value: function setValues(data) {
	          var changed = false;
	          if (this.props.value === undefined) {
	            changed = this.setEachValue(data);
	          }
	          this.pushChanges(data);
	          return changed;
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          if (nextProps.value !== undefined && this.props.value !== nextProps.value) {
	            this.setEachValue(nextProps.value);
	          }
	        }
	      }, {
	        key: 'resolveErrors',
	        value: function resolveErrors() {
	          var _this4 = this;

	          this.errors = validate(this.values);
	          fields.forEach(function (field) {
	            if (_this4.touched[field]) {
	              _this4.fields[field].error = _this4.errors[field];
	            }
	          });
	        }
	      }, {
	        key: 'blur',
	        value: function blur(name) {
	          if (!this.touched[name]) {
	            this.touched[name] = true;
	            this.flushChanges();
	          }
	        }
	      }, {
	        key: 'touchAll',
	        value: function touchAll() {
	          var _this5 = this;

	          fields.forEach(function (field) {
	            _this5.touched[field] = true;
	          });
	        }
	      }, {
	        key: 'formProps',
	        value: function formProps() {
	          var _this6 = this;

	          return {
	            isValid: function isValid() {
	              return Object.keys(_this6.errors).length === 0;
	            },
	            forceValidate: function forceValidate() {
	              _this6.touchAll();
	              _this6.flushChanges();
	            },
	            values: function values() {
	              return _this6.values;
	            },
	            onValues: function onValues(values) {
	              return _this6.setValues(values);
	            }
	          };
	        }
	      }, {
	        key: 'generatedProps',
	        value: function generatedProps() {
	          return {
	            form: this.formProps(),
	            fields: this.fields
	          };
	        }
	      }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	          return this.generatedProps();
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(Wrapped, _extends({}, this.generatedProps(), this.props));
	        }
	      }]);

	      return FormWrapper;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = from;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createValidate = __webpack_require__(2);

	var _createValidate2 = _interopRequireDefault(_createValidate);

	function from(rules) {
	  return {
	    fields: Object.keys(rules),
	    validate: (0, _createValidate2['default'])(rules)
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports['default'] = function (event) {
	  if (isEvent(event)) {
	    var _event$target = event.target;
	    var type = _event$target.type;
	    var value = _event$target.value;
	    var checked = _event$target.checked;
	    var files = _event$target.files;
	    var dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && typeof event === 'object' && event.value !== undefined ? event.value : event;
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var ResetFormButton = (function (_Component) {
	  _inherits(ResetFormButton, _Component);

	  function ResetFormButton() {
	    _classCallCheck(this, ResetFormButton);

	    _get(Object.getPrototypeOf(ResetFormButton.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ResetFormButton, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      e.preventDefault();
	      this.context.form.onValues({});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'button',
	        _extends({}, this.props, { onClick: function (e) {
	            return _this.handleClick(e);
	          } }),
	        this.props.children || 'Reset'
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      form: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return ResetFormButton;
	})(_react.Component);

	exports['default'] = ResetFormButton;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;