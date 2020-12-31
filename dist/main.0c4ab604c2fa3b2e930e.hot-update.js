/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGLO"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var inputs = document.querySelectorAll('input[type = email]');\n  inputs.forEach(function (item) {\n    item.setAttribute('required', true);\n  });\n  var errorMessage = \"<svg\\n\\t\\t\\tclass=\\\"checkmark error\\\"\\n\\t\\t\\txmlns=\\\"http://www.w3.org/2000/svg\\\"\\n\\t\\t\\tviewBox=\\\"0 0 52 52\\\"\\n\\t\\t>\\n\\t\\t\\t<circle\\n\\t\\t\\t\\tclass=\\\"checkmark_circle_error\\\"\\n\\t\\t\\t\\tcx=\\\"26\\\"\\n\\t\\t\\t\\tcy=\\\"26\\\"\\n\\t\\t\\t\\tr=\\\"25\\\"\\n\\t\\t\\t\\tfill=\\\"none\\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<path\\n\\t\\t\\t\\tclass=\\\"checkmark_check\\\"\\n\\t\\t\\t\\tstroke-linecap=\\\"round\\\"\\n\\t\\t\\t\\tfill=\\\"none\\\"\\n\\t\\t\\t\\td=\\\"M16 16 36 36 M36 16 16 36\\n\\\"\\n\\t\\t\\t/>\\n\\t\\t</svg>\\n\\t\\t<span>\\u0423\\u043F\\u0441! \\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A :(</span>\",\n      loadMessage = \"<div class=\\\"lds-ring\\\">\\n\\t\\t\\t<div></div>\\n\\t\\t\\t<div></div>\\n\\t\\t\\t<div></div>\\n\\t\\t\\t<div></div>\\n\\t\\t</div><br></br>\\n\\t\\t<span>\\u041F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u0434\\u043E\\u0436\\u0434\\u0438\\u0442\\u0435...</span>\",\n      successMessage = \"<svg\\n\\t\\t\\tclass=\\\"checkmark success\\\"\\n\\t\\t\\txmlns=\\\"http://www.w3.org/2000/svg\\\"\\n\\t\\t\\tviewBox=\\\"0 0 52 52\\\"\\n\\t\\t>\\n\\t\\t\\t<circle\\n\\t\\t\\t\\tclass=\\\"checkmark_circle_success\\\"\\n\\t\\t\\t\\tcx=\\\"26\\\"\\n\\t\\t\\t\\tcy=\\\"26\\\"\\n\\t\\t\\t\\tr=\\\"25\\\"\\n\\t\\t\\t\\tfill=\\\"none\\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<path\\n\\t\\t\\t\\tclass=\\\"checkmark_check\\\"\\n\\t\\t\\t\\tfill=\\\"none\\\"\\n\\t\\t\\t\\td=\\\"M14.1 27.2l7.1 7.2 16.7-16.8\\\"\\n\\t\\t\\t\\tstroke-linecap=\\\"round\\\"\\n\\t\\t\\t/>\\n\\t\\t</svg>\\n\\t\\t<span>C\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E \\u0437\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0449\\u0435\\u043D\\u0438\\u0435! \\u041C\\u044B \\u0441\\u043A\\u043E\\u0440\\u043E \\u0441 \\u0412\\u0430\\u043C\\u0438 \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F ;)</span>\";\n  var statusMessage = document.createElement('div');\n  statusMessage.style.color = '#FFFFFF';\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('#form1') || target.matches('#form2') || target.matches('#form3')) {\n      var input = target.querySelectorAll('input');\n      target.appendChild(statusMessage);\n      statusMessage.innerHTML = loadMessage;\n      var formData = new FormData(target);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.innerHTML = successMessage;\n        setTimeout(function () {\n          statusMessage.remove();\n        }, 5000);\n      })[\"catch\"](function (error) {\n        statusMessage.innerHTML = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          statusMessage.remove();\n        }, 5000);\n      });\n      input.forEach(function (item) {\n        item.value = '';\n      });\n    } else {\n      return;\n    }\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGLO/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "2c5e7538f11d8452885c"
/******/ 	})();
/******/ 	
/******/ }
);