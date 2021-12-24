(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");



class AppComponent {
    constructor() {
        this.title = 'code-along';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["parallaxRef"];
const _c1 = ["ref"];
class ProfileComponent {
    constructor() {
        this.config = [
            {
                transform: { x: 0, y: 0, z: 0 },
                rotate: { x: 25, y: 25 },
                shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' }
            },
            {
                transform: { x: -25, y: -25, z: 10 },
                rotate: { x: 0, y: 0 },
                shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' }
            },
            {
                transform: { x: -25, y: -25, z: 40 },
                rotate: { x: 0, y: 0 },
                shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' }
            },
            {
                transform: { x: -10, y: -15, z: 25 },
                rotate: { x: 0, y: 0 },
                shadow: { pos: { x: 0, y: 0 }, blur: 0, color: '#00000040' }
            },
            {
                transform: { x: -10, y: -15, z: 25 },
                rotate: { x: 0, y: 0 },
                shadow: { pos: { x: 0, y: 0 }, blur: 0, color: '#00000040' }
            },
            {
                transform: { x: -15, y: -15, z: 15 },
                rotate: { x: 0, y: 0 },
                shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' }
            }
        ];
    }
    get parallax() {
        return this.parallaxRef.nativeElement;
    }
    mouseMove(event) {
        if (event) {
            const rect = this.parallax.getBoundingClientRect();
            let a1 = rect.left;
            let a2 = a1 + rect.width;
            let b1 = -1;
            let b2 = 1;
            const x = this.mapRange(a1, a2, b1, b2, event.x);
            a1 = rect.top;
            a2 = a1 + rect.height;
            b1 = 1;
            b2 = -1;
            const y = this.mapRange(a1, a2, b1, b2, event.y);
            if (x <= 1 && x >= -1 && y <= 1 && y >= -1) {
                this.ref.forEach((element, index) => {
                    this.applyStyle(this.config[index], element, { x, y, z: 1 });
                });
            }
        }
    }
    ngOnInit() {
    }
    reset() {
        this.ref.forEach((element) => {
            this.clearStyle(element);
        });
        const plus = this.ref.toArray()[2].nativeElement;
        plus.style.boxShadow = '2.5px 5px 5px 0px #00000010';
        const btn = this.ref.last.nativeElement;
        btn.style.boxShadow = '2.5px 2.5px 5px 0px #00000030';
    }
    mapRange(a1, a2, b1, b2, value) {
        return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
    }
    applyStyle(config, el, pos) {
        const element = el.nativeElement;
        element.style.boxShadow = `${config.shadow.pos.x * -pos.x}px ${config.shadow.pos.y * pos.y}px ${config.shadow.blur}px ${config.shadow.color}`;
        element.style.transform = `translate3d(${config.transform.x * -pos.x}px, ${config.transform.y * pos.y}px, ${config.transform.z * pos.z}px) rotateX(${config.rotate.x * pos.y}deg) rotateY(${config.rotate.y * pos.x}deg)`;
        element.style.transition = 'none';
    }
    clearStyle(el) {
        const element = el.nativeElement;
        element.style.boxShadow = `none`;
        element.style.transform = `none`;
        element.style.transition = 'all 0.75s ease';
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.parallaxRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t);
    } }, hostBindings: function ProfileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function ProfileComponent_mousemove_HostBindingHandler($event) { return ctx.mouseMove($event); });
    } }, decls: 22, vars: 0, consts: [[1, "parallax", 3, "mouseleave"], ["parallaxRef", ""], [1, "profile"], ["ref", ""], [1, "profile-header"], ["src", "../../assets/header-background.svg", "alt", "header-background"], [1, "profile-header-picture"], [1, "profile-header-plus"], ["role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["fill", "currentColor", "d", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"], [1, "profile-content"], [1, "profile-content-title"], [1, "profile-content-btn"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ProfileComponent_Template_div_mouseleave_0_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Developer<Web>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I currently work as a full-stack web developer, my background is in engineering. I successfully transfered into software development after I taught myself and built a personal portfolio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Goto Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".parallax[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 400px;\n  margin: 0 auto;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.parallax[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n  perspective: 1000px;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 400px;\n  border-radius: 1rem;\n  background-color: #FFF;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-header-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 41px;\n  border-radius: 50%;\n  width: 118px;\n  height: 118px;\n  margin: 0 auto;\n  background-image: url('profile-picture.jpg');\n  background-position: center;\n  background-size: contain;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-header-plus[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 120px;\n  top: 135px;\n  color: #DDD;\n  border-radius: 50%;\n  background-color: #FFF;\n  padding: 8px;\n  box-shadow: 2.5px 5px 5px 0px #00000010;\n  cursor: pointer;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-header-plus[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  vertical-align: middle;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%] {\n  padding: 0 1rem 1rem 1rem;\n  height: 220px;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]   .profile-content-title[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 1.25rem;\n}\n.parallax[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]   .profile-content-btn[_ngcontent-%COMP%] {\n  background-color: #3D5DFF;\n  outline: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-family: \"Oswald\", sans-serif;\n  color: #FFF;\n  margin: 0 auto;\n  display: block;\n  border-radius: 2rem;\n  box-shadow: 2.5px 2.5px 5px 0px #00000030;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFBWjtBQUVZO0VBQ0ksbUJBQUE7QUFBaEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQURoQjtBQUdZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsdUNBQUE7RUFDQSxlQUFBO0FBRGhCO0FBR2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQURwQjtBQU1RO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBSlo7QUFNWTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7QUFKaEI7QUFPWTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUVBLHlDQUFBO0VBQ0EsZUFBQTtBQUxoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheCB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYgKiB7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgXG4gICAgICAgIC5wcm9maWxlLWhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucHJvZmlsZS1oZWFkZXItcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMThweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9wcm9maWxlLXBpY3R1cmUuanBnJyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlLWhlYWRlci1wbHVzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTM1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNEREQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggNXB4IDVweCAwcHggIzAwMDAwMDEwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDIuNXB4IDVweCA1cHggMHB4ICMwMDAwMDAxMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICBcbiAgICAgICAgICAgIC5wcm9maWxlLWNvbnRlbnQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucHJvZmlsZS1jb250ZW50LWJ0biB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENURGRjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCA1cHggNXB4IDBweCAjMDAwMDAwMTA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCAjMDAwMDAwMzA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, { parallaxRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['parallaxRef']
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['ref']
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crypto_fou/website/3D-parallax-mouse-effect/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map