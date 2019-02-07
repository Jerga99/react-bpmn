exports.ids = [0];
exports.modules = {

/***/ "./assets/empty.bpmn.jsx":
/*!*******************************!*\
  !*** ./assets/empty.bpmn.jsx ***!
  \*******************************/
/*! exports provided: emptyBpmn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyBpmn", function() { return emptyBpmn; });
var emptyBpmn = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bpmn2:definitions xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:bpmn2=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" id=\"sample-diagram\" targetNamespace=\"http://bpmn.io/schema/bpmn\" xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd\">\n\t<bpmn2:collaboration id=\"Collaboration_0czsqyr\">\n\t\t<bpmn2:participant id=\"Participant_0cyhvx8\" processRef=\"Process_1\" />\n\t</bpmn2:collaboration>\n\t<bpmn2:process id=\"Process_1\" isExecutable=\"false\">\n\t\t<bpmn2:startEvent id=\"StartEvent_1\" />\n\t</bpmn2:process>\n\t<bpmndi:BPMNDiagram id=\"BPMNDiagram_1\">\n\t\t<bpmndi:BPMNPlane id=\"BPMNPlane_1\" bpmnElement=\"Collaboration_0czsqyr\">\n\t\t\t<bpmndi:BPMNShape id=\"Participant_0cyhvx8_di\" bpmnElement=\"Participant_0cyhvx8\">\n\t\t\t\t<dc:Bounds x=\"130\" y=\"220\" width=\"600\" height=\"250\" />\n\t\t\t</bpmndi:BPMNShape>\n\t\t\t<bpmndi:BPMNShape id=\"_BPMNShape_StartEvent_2\" bpmnElement=\"StartEvent_1\">\n\t\t\t\t<dc:Bounds x=\"412\" y=\"240\" width=\"36\" height=\"36\" />\n\t\t\t</bpmndi:BPMNShape>\n\t\t</bpmndi:BPMNPlane>\n\t</bpmndi:BPMNDiagram>\n</bpmn2:definitions>";

/***/ }),

/***/ "./components/bpmn/bpmn.modeler.component.jsx":
/*!****************************************************!*\
  !*** ./components/bpmn/bpmn.modeler.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js/lib/Modeler */ "bpmn-js/lib/Modeler");
/* harmony import */ var bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmn_js_dist_assets_diagram_js_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/dist/assets/diagram-js.css */ "./node_modules/bpmn-js/dist/assets/diagram-js.css");
/* harmony import */ var bpmn_js_dist_assets_diagram_js_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_dist_assets_diagram_js_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmn_font_dist_css_bpmn_embedded_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-font/dist/css/bpmn-embedded.css */ "./node_modules/bpmn-font/dist/css/bpmn-embedded.css");
/* harmony import */ var bpmn_font_dist_css_bpmn_embedded_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bpmn_font_dist_css_bpmn_embedded_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_empty_bpmn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/empty.bpmn */ "./assets/empty.bpmn.jsx");
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bpmn-js-properties-panel */ "bpmn-js-properties-panel");
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bpmn_js_properties_panel_lib_provider_camunda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmn-js-properties-panel/lib/provider/camunda */ "bpmn-js-properties-panel/lib/provider/camunda");
/* harmony import */ var bpmn_js_properties_panel_lib_provider_camunda__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel_lib_provider_camunda__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var camunda_bpmn_moddle_resources_camunda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! camunda-bpmn-moddle/resources/camunda */ "./node_modules/camunda-bpmn-moddle/resources/camunda.json");
var camunda_bpmn_moddle_resources_camunda__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! camunda-bpmn-moddle/resources/camunda */ "./node_modules/camunda-bpmn-moddle/resources/camunda.json", 1);
var _jsxFileName = "/Users/filipjerga/Udemy_Projects/next-bpm/components/bpmn/bpmn.modeler.component.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var BpmnModelerComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(BpmnModelerComponent, _Component);

  function BpmnModelerComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BpmnModelerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BpmnModelerComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "modeler", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.modeler = new bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_1___default.a({
        container: '#bpmnview',
        keyboard: {
          bindTo: window
        },
        propertiesPanel: {
          parent: '#propview'
        },
        additionalModules: [bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_5___default.a, bpmn_js_properties_panel_lib_provider_camunda__WEBPACK_IMPORTED_MODULE_6___default.a],
        moddleExtensions: {
          camunda: camunda_bpmn_moddle_resources_camunda__WEBPACK_IMPORTED_MODULE_7__
        }
      });

      _this.newBpmnDiagram();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "newBpmnDiagram", function () {
      _this.openBpmnDiagram(_assets_empty_bpmn__WEBPACK_IMPORTED_MODULE_4__["emptyBpmn"]);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openBpmnDiagram", function (xml) {
      _this.modeler.importXML(xml, function (error) {
        if (error) {
          return console.log('fail import xml');
        }

        var canvas = _this.modeler.get('canvas');

        canvas.zoom('fit-viewport');
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "bpmncontainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "propview",
        style: {
          width: '25%',
          height: '98vh',
          float: 'right',
          maxHeight: '98vh',
          overflowX: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "bpmnview",
        style: {
          width: '75%',
          height: '98vh',
          float: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    });

    return _this;
  }

  return BpmnModelerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BpmnModelerComponent);

/***/ }),

/***/ "./node_modules/bpmn-font/dist/css/bpmn-embedded.css":
/*!***********************************************************!*\
  !*** ./node_modules/bpmn-font/dist/css/bpmn-embedded.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bpmn-js/dist/assets/diagram-js.css":
/*!*********************************************************!*\
  !*** ./node_modules/bpmn-js/dist/assets/diagram-js.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/camunda-bpmn-moddle/resources/camunda.json":
/*!*****************************************************************!*\
  !*** ./node_modules/camunda-bpmn-moddle/resources/camunda.json ***!
  \*****************************************************************/
/*! exports provided: name, uri, prefix, xml, associations, types, emumerations, default */
/***/ (function(module) {

module.exports = {"name":"Camunda","uri":"http://camunda.org/schema/1.0/bpmn","prefix":"camunda","xml":{"tagAlias":"lowerCase"},"associations":[],"types":[{"name":"InOutBinding","superClass":["Element"],"isAbstract":true,"properties":[{"name":"source","isAttr":true,"type":"String"},{"name":"sourceExpression","isAttr":true,"type":"String"},{"name":"target","isAttr":true,"type":"String"},{"name":"businessKey","isAttr":true,"type":"String"},{"name":"local","isAttr":true,"type":"Boolean","default":false},{"name":"variables","isAttr":true,"type":"String"}]},{"name":"In","superClass":["InOutBinding"],"meta":{"allowedIn":["bpmn:CallActivity"]}},{"name":"Out","superClass":["InOutBinding"],"meta":{"allowedIn":["bpmn:CallActivity"]}},{"name":"AsyncCapable","isAbstract":true,"extends":["bpmn:Activity","bpmn:Gateway","bpmn:Event"],"properties":[{"name":"async","isAttr":true,"type":"Boolean","default":false},{"name":"asyncBefore","isAttr":true,"type":"Boolean","default":false},{"name":"asyncAfter","isAttr":true,"type":"Boolean","default":false},{"name":"exclusive","isAttr":true,"type":"Boolean","default":true}]},{"name":"JobPriorized","isAbstract":true,"extends":["bpmn:Process","camunda:AsyncCapable"],"properties":[{"name":"jobPriority","isAttr":true,"type":"String"}]},{"name":"SignalEventDefinition","isAbstract":true,"extends":["bpmn:SignalEventDefinition"],"properties":[{"name":"async","isAttr":true,"type":"Boolean","default":false}]},{"name":"ErrorEventDefinition","isAbstract":true,"extends":["bpmn:ErrorEventDefinition"],"properties":[{"name":"errorCodeVariable","isAttr":true,"type":"String"},{"name":"errorMessageVariable","isAttr":true,"type":"String"}]},{"name":"PotentialStarter","superClass":["Element"],"properties":[{"name":"resourceAssignmentExpression","type":"bpmn:ResourceAssignmentExpression"}]},{"name":"FormSupported","isAbstract":true,"extends":["bpmn:StartEvent","bpmn:UserTask"],"properties":[{"name":"formHandlerClass","isAttr":true,"type":"String"},{"name":"formKey","isAttr":true,"type":"String"}]},{"name":"TemplateSupported","isAbstract":true,"extends":["bpmn:Process","bpmn:FlowElement"],"properties":[{"name":"modelerTemplate","isAttr":true,"type":"String"}]},{"name":"Initiator","isAbstract":true,"extends":["bpmn:StartEvent"],"properties":[{"name":"initiator","isAttr":true,"type":"String"}]},{"name":"ScriptTask","isAbstract":true,"extends":["bpmn:ScriptTask"],"properties":[{"name":"resultVariable","isAttr":true,"type":"String"},{"name":"resource","isAttr":true,"type":"String"}]},{"name":"Process","isAbstract":true,"extends":["bpmn:Process"],"properties":[{"name":"candidateStarterGroups","isAttr":true,"type":"String"},{"name":"candidateStarterUsers","isAttr":true,"type":"String"},{"name":"versionTag","isAttr":true,"type":"String"},{"name":"historyTimeToLive","isAttr":true,"type":"String"},{"name":"isStartableInTasklist","isAttr":true,"type":"Boolean","default":true}]},{"name":"EscalationEventDefinition","isAbstract":true,"extends":["bpmn:EscalationEventDefinition"],"properties":[{"name":"escalationCodeVariable","isAttr":true,"type":"String"}]},{"name":"FormalExpression","isAbstract":true,"extends":["bpmn:FormalExpression"],"properties":[{"name":"resource","isAttr":true,"type":"String"}]},{"name":"Assignable","extends":["bpmn:UserTask"],"properties":[{"name":"assignee","isAttr":true,"type":"String"},{"name":"candidateUsers","isAttr":true,"type":"String"},{"name":"candidateGroups","isAttr":true,"type":"String"},{"name":"dueDate","isAttr":true,"type":"String"},{"name":"followUpDate","isAttr":true,"type":"String"},{"name":"priority","isAttr":true,"type":"String"}]},{"name":"CallActivity","extends":["bpmn:CallActivity"],"properties":[{"name":"calledElementBinding","isAttr":true,"type":"String","default":"latest"},{"name":"calledElementVersion","isAttr":true,"type":"String"},{"name":"calledElementVersionTag","isAttr":true,"type":"String"},{"name":"calledElementTenantId","isAttr":true,"type":"String"},{"name":"caseRef","isAttr":true,"type":"String"},{"name":"caseBinding","isAttr":true,"type":"String","default":"latest"},{"name":"caseVersion","isAttr":true,"type":"String"},{"name":"caseTenantId","isAttr":true,"type":"String"},{"name":"variableMappingClass","isAttr":true,"type":"String"},{"name":"variableMappingDelegateExpression","isAttr":true,"type":"String"}]},{"name":"ServiceTaskLike","extends":["bpmn:ServiceTask","bpmn:BusinessRuleTask","bpmn:SendTask","bpmn:MessageEventDefinition"],"properties":[{"name":"expression","isAttr":true,"type":"String"},{"name":"class","isAttr":true,"type":"String"},{"name":"delegateExpression","isAttr":true,"type":"String"},{"name":"resultVariable","isAttr":true,"type":"String"}]},{"name":"DmnCapable","extends":["bpmn:BusinessRuleTask"],"properties":[{"name":"decisionRef","isAttr":true,"type":"String"},{"name":"decisionRefBinding","isAttr":true,"type":"String","default":"latest"},{"name":"decisionRefVersion","isAttr":true,"type":"String"},{"name":"mapDecisionResult","isAttr":true,"type":"String","default":"resultList"},{"name":"decisionRefTenantId","isAttr":true,"type":"String"}]},{"name":"ExternalCapable","extends":["camunda:ServiceTaskLike"],"properties":[{"name":"type","isAttr":true,"type":"String"},{"name":"topic","isAttr":true,"type":"String"}]},{"name":"TaskPriorized","extends":["bpmn:Process","camunda:ExternalCapable"],"properties":[{"name":"taskPriority","isAttr":true,"type":"String"}]},{"name":"Properties","superClass":["Element"],"meta":{"allowedIn":["*"]},"properties":[{"name":"values","type":"Property","isMany":true}]},{"name":"Property","superClass":["Element"],"properties":[{"name":"id","type":"String","isAttr":true},{"name":"name","type":"String","isAttr":true},{"name":"value","type":"String","isAttr":true}]},{"name":"Connector","superClass":["Element"],"meta":{"allowedIn":["bpmn:ServiceTask","bpmn:BusinessRuleTask","bpmn:SendTask"]},"properties":[{"name":"inputOutput","type":"InputOutput"},{"name":"connectorId","type":"String"}]},{"name":"InputOutput","superClass":["Element"],"meta":{"allowedIn":["bpmn:Task","bpmn:UserTask","bpmn:ServiceTask","bpmn:SendTask","bpmn:BusinessRuleTask","bpmn:ReceiveTask","bpmn:ScriptTask","bpmn:ManualTask","bpmn:GlobalUserTask","bpmn:GlobalScriptTask","bpmn:GlobalBusinessRuleTask","bpmn:GlobalTask","bpmn:GlobalManualTask","bpmn:SubProcess","bpmn:Transaction","bpmn:IntermediateCatchEvent","bpmn:IntermediateThrowEvent","bpmn:EndEvent","bpmn:ThrowEvent","bpmn:CatchEvent","bpmn:ImplicitThrowEvent","bpmn:CallActivity"]},"properties":[{"name":"inputOutput","type":"InputOutput"},{"name":"connectorId","type":"String"},{"name":"inputParameters","isMany":true,"type":"InputParameter"},{"name":"outputParameters","isMany":true,"type":"OutputParameter"}]},{"name":"InputOutputParameter","properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"value","isBody":true,"type":"String"},{"name":"definition","type":"InputOutputParameterDefinition"}]},{"name":"InputOutputParameterDefinition","isAbstract":true},{"name":"List","superClass":["InputOutputParameterDefinition"],"properties":[{"name":"items","isMany":true,"type":"InputOutputParameterDefinition"}]},{"name":"Map","superClass":["InputOutputParameterDefinition"],"properties":[{"name":"entries","isMany":true,"type":"Entry"}]},{"name":"Entry","properties":[{"name":"key","isAttr":true,"type":"String"},{"name":"value","isBody":true,"type":"String"},{"name":"definition","type":"InputOutputParameterDefinition"}]},{"name":"Value","superClass":["InputOutputParameterDefinition"],"properties":[{"name":"id","isAttr":true,"type":"String"},{"name":"name","isAttr":true,"type":"String"},{"name":"value","isBody":true,"type":"String"}]},{"name":"Script","superClass":["InputOutputParameterDefinition"],"properties":[{"name":"scriptFormat","isAttr":true,"type":"String"},{"name":"resource","isAttr":true,"type":"String"},{"name":"value","isBody":true,"type":"String"}]},{"name":"Field","superClass":["Element"],"meta":{"allowedIn":["bpmn:ServiceTask","bpmn:BusinessRuleTask","bpmn:SendTask"]},"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"expression","type":"String"},{"name":"stringValue","isAttr":true,"type":"String"},{"name":"string","type":"String"}]},{"name":"InputParameter","superClass":["InputOutputParameter"]},{"name":"OutputParameter","superClass":["InputOutputParameter"]},{"name":"Collectable","isAbstract":true,"extends":["bpmn:MultiInstanceLoopCharacteristics"],"superClass":["camunda:AsyncCapable"],"properties":[{"name":"collection","isAttr":true,"type":"String"},{"name":"elementVariable","isAttr":true,"type":"String"}]},{"name":"FailedJobRetryTimeCycle","superClass":["Element"],"meta":{"allowedIn":["bpmn:Task","bpmn:ServiceTask","bpmn:SendTask","bpmn:UserTask","bpmn:BusinessRuleTask","bpmn:ScriptTask","bpmn:ReceiveTask","bpmn:CallActivity","bpmn:TimerEventDefinition","bpmn:SignalEventDefinition","bpmn:MultiInstanceLoopCharacteristics"]},"properties":[{"name":"body","isBody":true,"type":"String"}]},{"name":"ExecutionListener","superClass":["Element"],"meta":{"allowedIn":["bpmn:Task","bpmn:ServiceTask","bpmn:UserTask","bpmn:BusinessRuleTask","bpmn:ScriptTask","bpmn:ReceiveTask","bpmn:ManualTask","bpmn:ExclusiveGateway","bpmn:SequenceFlow","bpmn:ParallelGateway","bpmn:InclusiveGateway","bpmn:EventBasedGateway","bpmn:StartEvent","bpmn:IntermediateCatchEvent","bpmn:IntermediateThrowEvent","bpmn:EndEvent","bpmn:BoundaryEvent","bpmn:CallActivity","bpmn:SubProcess"]},"properties":[{"name":"expression","isAttr":true,"type":"String"},{"name":"class","isAttr":true,"type":"String"},{"name":"delegateExpression","isAttr":true,"type":"String"},{"name":"event","isAttr":true,"type":"String"},{"name":"script","type":"Script"},{"name":"fields","type":"Field","isMany":true}]},{"name":"TaskListener","superClass":["Element"],"meta":{"allowedIn":["bpmn:UserTask"]},"properties":[{"name":"expression","isAttr":true,"type":"String"},{"name":"class","isAttr":true,"type":"String"},{"name":"delegateExpression","isAttr":true,"type":"String"},{"name":"event","isAttr":true,"type":"String"},{"name":"script","type":"Script"},{"name":"fields","type":"Field","isMany":true}]},{"name":"FormProperty","superClass":["Element"],"meta":{"allowedIn":["bpmn:StartEvent","bpmn:UserTask"]},"properties":[{"name":"id","type":"String","isAttr":true},{"name":"name","type":"String","isAttr":true},{"name":"type","type":"String","isAttr":true},{"name":"required","type":"String","isAttr":true},{"name":"readable","type":"String","isAttr":true},{"name":"writable","type":"String","isAttr":true},{"name":"variable","type":"String","isAttr":true},{"name":"expression","type":"String","isAttr":true},{"name":"datePattern","type":"String","isAttr":true},{"name":"default","type":"String","isAttr":true},{"name":"values","type":"Value","isMany":true}]},{"name":"FormData","superClass":["Element"],"meta":{"allowedIn":["bpmn:StartEvent","bpmn:UserTask"]},"properties":[{"name":"fields","type":"FormField","isMany":true},{"name":"businessKey","type":"String","isAttr":true}]},{"name":"FormField","superClass":["Element"],"properties":[{"name":"id","type":"String","isAttr":true},{"name":"label","type":"String","isAttr":true},{"name":"type","type":"String","isAttr":true},{"name":"datePattern","type":"String","isAttr":true},{"name":"defaultValue","type":"String","isAttr":true},{"name":"properties","type":"Properties"},{"name":"validation","type":"Validation"},{"name":"values","type":"Value","isMany":true}]},{"name":"Validation","superClass":["Element"],"properties":[{"name":"constraints","type":"Constraint","isMany":true}]},{"name":"Constraint","superClass":["Element"],"properties":[{"name":"name","type":"String","isAttr":true},{"name":"config","type":"String","isAttr":true}]},{"name":"ConditionalEventDefinition","isAbstract":true,"extends":["bpmn:ConditionalEventDefinition"],"properties":[{"name":"variableName","isAttr":true,"type":"String"},{"name":"variableEvent","isAttr":true,"type":"String"}]}],"emumerations":[]};

/***/ })

};;
//# sourceMappingURL=0.js.map