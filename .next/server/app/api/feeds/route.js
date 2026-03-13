/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/feeds/route";
exports.ids = ["app/api/feeds/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffeeds%2Froute&page=%2Fapi%2Ffeeds%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeeds%2Froute.ts&appDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffeeds%2Froute&page=%2Fapi%2Ffeeds%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeeds%2Froute.ts&appDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_root_Desktop_Custom_Label_app_api_feeds_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/feeds/route.ts */ \"(rsc)/./app/api/feeds/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/feeds/route\",\n        pathname: \"/api/feeds\",\n        filename: \"route\",\n        bundlePath: \"app/api/feeds/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\root\\\\Desktop\\\\Custom Label\\\\app\\\\api\\\\feeds\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_root_Desktop_Custom_Label_app_api_feeds_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmZWVkcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmVlZHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmZWVkcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyb290JTVDRGVza3RvcCU1Q0N1c3RvbSUyMExhYmVsJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNyb290JTVDRGVza3RvcCU1Q0N1c3RvbSUyMExhYmVsJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccm9vdFxcXFxEZXNrdG9wXFxcXEN1c3RvbSBMYWJlbFxcXFxhcHBcXFxcYXBpXFxcXGZlZWRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mZWVkcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ZlZWRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9mZWVkcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHJvb3RcXFxcRGVza3RvcFxcXFxDdXN0b20gTGFiZWxcXFxcYXBwXFxcXGFwaVxcXFxmZWVkc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffeeds%2Froute&page=%2Fapi%2Ffeeds%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeeds%2Froute.ts&appDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/feeds/route.ts":
/*!********************************!*\
  !*** ./app/api/feeds/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _vercel_kv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vercel/kv */ \"(rsc)/./node_modules/@vercel/kv/dist/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist-node/v4.js\");\n\n\n\nasync function POST(req) {\n    try {\n        const { feedUrl, selectedIds, customLabelValue } = await req.json();\n        if (!feedUrl || !selectedIds || !Array.isArray(selectedIds)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid payload'\n            }, {\n                status: 400\n            });\n        }\n        let existingFeeds = await _vercel_kv__WEBPACK_IMPORTED_MODULE_1__.kv.get('all_feeds');\n        if (!existingFeeds) existingFeeds = {};\n        const isDuplicate = Object.values(existingFeeds).some((f)=>f.customLabelValue === customLabelValue);\n        if (isDuplicate) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `\"${customLabelValue}\" adına sahip bir etiket zaten var. Lütfen farklı bir isim seçin.`\n            }, {\n                status: 400\n            });\n        }\n        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        existingFeeds[id] = {\n            feedUrl,\n            selectedIds,\n            customLabelValue,\n            createdAt: new Date().toISOString()\n        };\n        await _vercel_kv__WEBPACK_IMPORTED_MODULE_1__.kv.set('all_feeds', existingFeeds);\n        const protocol = req.headers.get('x-forwarded-proto') || 'http';\n        const host = req.headers.get('host');\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            feedId: id,\n            liveUrl: `${protocol}://${host}/api/liveFeed?id=${id}`\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(req) {\n    try {\n        let existingFeeds = await _vercel_kv__WEBPACK_IMPORTED_MODULE_1__.kv.get('all_feeds');\n        if (!existingFeeds) existingFeeds = {};\n        const protocol = req.headers.get('x-forwarded-proto') || 'http';\n        const host = req.headers.get('host');\n        const list = Object.keys(existingFeeds).map((id)=>({\n                id,\n                feedUrl: existingFeeds[id].feedUrl,\n                selectedCount: existingFeeds[id].selectedIds ? existingFeeds[id].selectedIds.length : 0,\n                customLabelValue: existingFeeds[id].customLabelValue,\n                createdAt: existingFeeds[id].createdAt,\n                liveUrl: `${protocol}://${host}/api/liveFeed?id=${id}`\n            })).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(list);\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUVxQixPQUFPO1FBRWxGLE9BQU8xQyxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDMEI7SUFDM0IsRUFBRSxPQUFPSCxLQUFVO1FBQ2pCLE9BQU8vQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVHLE9BQU9vQixJQUFJQyxPQUFPO1FBQUMsR0FBRztZQUFFcEIsUUFBUTtRQUFJO0lBQ2pFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9vdFxcRGVza3RvcFxcQ3VzdG9tIExhYmVsXFxhcHBcXGFwaVxcZmVlZHNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGt2IH0gZnJvbSAnQHZlcmNlbC9rdic7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBmZWVkVXJsLCBzZWxlY3RlZElkcywgY3VzdG9tTGFiZWxWYWx1ZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGlmICghZmVlZFVybCB8fCAhc2VsZWN0ZWRJZHMgfHwgIUFycmF5LmlzQXJyYXkoc2VsZWN0ZWRJZHMpKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgcGF5bG9hZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBsZXQgZXhpc3RpbmdGZWVkczogYW55ID0gYXdhaXQga3YuZ2V0KCdhbGxfZmVlZHMnKTtcbiAgICBpZiAoIWV4aXN0aW5nRmVlZHMpIGV4aXN0aW5nRmVlZHMgPSB7fTtcblxuICAgIGNvbnN0IGlzRHVwbGljYXRlID0gT2JqZWN0LnZhbHVlcyhleGlzdGluZ0ZlZWRzKS5zb21lKChmOiBhbnkpID0+IGYuY3VzdG9tTGFiZWxWYWx1ZSA9PT0gY3VzdG9tTGFiZWxWYWx1ZSk7XG4gICAgaWYgKGlzRHVwbGljYXRlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogYFwiJHtjdXN0b21MYWJlbFZhbHVlfVwiIGFkxLFuYSBzYWhpcCBiaXIgZXRpa2V0IHphdGVuIHZhci4gTMO8dGZlbiBmYXJrbMSxIGJpciBpc2ltIHNlw6dpbi5gIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcbiAgICBleGlzdGluZ0ZlZWRzW2lkXSA9IHtcbiAgICAgIGZlZWRVcmwsXG4gICAgICBzZWxlY3RlZElkcyxcbiAgICAgIGN1c3RvbUxhYmVsVmFsdWUsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIH07XG4gICAgXG4gICAgYXdhaXQga3Yuc2V0KCdhbGxfZmVlZHMnLCBleGlzdGluZ0ZlZWRzKTtcblxuICAgIGNvbnN0IHByb3RvY29sID0gcmVxLmhlYWRlcnMuZ2V0KCd4LWZvcndhcmRlZC1wcm90bycpIHx8ICdodHRwJztcbiAgICBjb25zdCBob3N0ID0gcmVxLmhlYWRlcnMuZ2V0KCdob3N0Jyk7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBmZWVkSWQ6IGlkLFxuICAgICAgbGl2ZVVybDogYCR7cHJvdG9jb2x9Oi8vJHtob3N0fS9hcGkvbGl2ZUZlZWQ/aWQ9JHtpZH1gXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBsZXQgZXhpc3RpbmdGZWVkczogYW55ID0gYXdhaXQga3YuZ2V0KCdhbGxfZmVlZHMnKTtcbiAgICBpZiAoIWV4aXN0aW5nRmVlZHMpIGV4aXN0aW5nRmVlZHMgPSB7fTtcblxuICAgIGNvbnN0IHByb3RvY29sID0gcmVxLmhlYWRlcnMuZ2V0KCd4LWZvcndhcmRlZC1wcm90bycpIHx8ICdodHRwJztcbiAgICBjb25zdCBob3N0ID0gcmVxLmhlYWRlcnMuZ2V0KCdob3N0Jyk7XG5cbiAgICBjb25zdCBsaXN0ID0gT2JqZWN0LmtleXMoZXhpc3RpbmdGZWVkcykubWFwKGlkID0+ICh7XG4gICAgICBpZCxcbiAgICAgIGZlZWRVcmw6IGV4aXN0aW5nRmVlZHNbaWRdLmZlZWRVcmwsXG4gICAgICBzZWxlY3RlZENvdW50OiBleGlzdGluZ0ZlZWRzW2lkXS5zZWxlY3RlZElkcyA/IGV4aXN0aW5nRmVlZHNbaWRdLnNlbGVjdGVkSWRzLmxlbmd0aCA6IDAsXG4gICAgICBjdXN0b21MYWJlbFZhbHVlOiBleGlzdGluZ0ZlZWRzW2lkXS5jdXN0b21MYWJlbFZhbHVlLFxuICAgICAgY3JlYXRlZEF0OiBleGlzdGluZ0ZlZWRzW2lkXS5jcmVhdGVkQXQsXG4gICAgICBsaXZlVXJsOiBgJHtwcm90b2NvbH06Ly8ke2hvc3R9L2FwaS9saXZlRmVlZD9pZD0ke2lkfWBcbiAgICB9KSkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCkpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihsaXN0KTtcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImt2IiwiTmV4dFJlc3BvbnNlIiwidjQiLCJ1dWlkdjQiLCJQT1NUIiwicmVxIiwiZmVlZFVybCIsInNlbGVjdGVkSWRzIiwiY3VzdG9tTGFiZWxWYWx1ZSIsImpzb24iLCJBcnJheSIsImlzQXJyYXkiLCJlcnJvciIsInN0YXR1cyIsImV4aXN0aW5nRmVlZHMiLCJnZXQiLCJpc0R1cGxpY2F0ZSIsIk9iamVjdCIsInZhbHVlcyIsInNvbWUiLCJmIiwiaWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzZXQiLCJwcm90b2NvbCIsImhlYWRlcnMiLCJob3N0Iiwic3VjY2VzcyIsImZlZWRJZCIsImxpdmVVcmwiLCJlcnIiLCJtZXNzYWdlIiwiR0VUIiwibGlzdCIsImtleXMiLCJtYXAiLCJzZWxlY3RlZENvdW50IiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/feeds/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/uuid","vendor-chunks/@upstash","vendor-chunks/uncrypto","vendor-chunks/@vercel"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffeeds%2Froute&page=%2Fapi%2Ffeeds%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffeeds%2Froute.ts&appDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Croot%5CDesktop%5CCustom%20Label&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();