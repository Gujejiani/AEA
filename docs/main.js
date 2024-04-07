"use strict";
(self["webpackChunkAEA"] = self["webpackChunkAEA"] || []).push([["main"],{

/***/ 8357:
/*!*********************************************************!*\
  !*** ./src/app/UI/bugrer-menu/bugrer-menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BugrerMenuComponent: () => (/* binding */ BugrerMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_header_burger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/header/burger.service */ 6923);



const _c0 = ["burger"];
class BugrerMenuComponent {
  constructor(burgerService) {
    this.burgerService = burgerService;
    this.toggle = false;
    this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.burgerService.toggle.subscribe(() => {
      this.burger.nativeElement.checked = false;
      this.onToggleMenu();
    });
  }
  onToggleMenu() {
    this.toggle = !this.toggle;
    this.toggleMenu.emit(this.toggle);
  }
  static #_ = this.ɵfac = function BugrerMenuComponent_Factory(t) {
    return new (t || BugrerMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_header_burger_service__WEBPACK_IMPORTED_MODULE_0__.burgerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BugrerMenuComponent,
    selectors: [["app-burger-menu"]],
    viewQuery: function BugrerMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.burger = _t.first);
      }
    },
    outputs: {
      toggleMenu: "toggleMenu"
    },
    decls: 7,
    vars: 0,
    consts: [[1, "header__hamburger", "header__hamburger--show"], ["for", "check", 1, "check_box"], ["type", "checkbox", "name", "check", "id", "check", 3, "change"], ["burger", ""]],
    template: function BugrerMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BugrerMenuComponent_Template_input_change_2_listener() {
          return ctx.onToggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span")(5, "span")(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    styles: [".header__hamburger[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.header__hamburger[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.header__hamburger--show[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 1050px) {\n  .header__hamburger--show[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n.header__hamburger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  visibility: hidden;\n}\n\n.header__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 4px;\n  background-color: #F48823;\n  margin-bottom: 5px;\n  position: relative;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n.header__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  transform-origin: 0% 0%;\n}\n\n.header__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n.header__hamburger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotate(-45deg) translate(2px, -1px);\n}\n\n.header__hamburger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(2) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n.header__hamburger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(3) {\n  transform: rotate(45deg) translate(3px, -3px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvVUkvYnVncmVyLW1lbnUvYnVncmVyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0EsYUFBQTtBQUdBO0FBRkE7RUFGQTtJQUdDLHFCQUFBO0VBS0M7QUFDRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUlBQUE7QUFJRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsdUNBQUE7QUFHRjs7QUFBQTtFQUNFLDZDQUFBO0FBR0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX19oYW1idXJnZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmhlYWRlcl9faGFtYnVyZ2VyIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXJfX2hhbWJ1cmdlci0tc2hvdyB7XG5kaXNwbGF5OiBub25lO1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpe1xuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG59XG5cbi5oZWFkZXJfX2hhbWJ1cmdlciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaGVhZGVyX19oYW1idXJnZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDg4MjM7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLFxuICAgIGJhY2tncm91bmQgMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKSwgb3BhY2l0eSAwLjU1cyBlYXNlO1xufVxuXG4uaGVhZGVyX19oYW1idXJnZXIgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xufVxuXG4uaGVhZGVyX19oYW1idXJnZXIgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XG59XG5cbi5oZWFkZXJfX2hhbWJ1cmdlciBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDJweCwgLTFweCk7XG59XG5cbi5oZWFkZXJfX2hhbWJ1cmdlciBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcbn1cblxuLmhlYWRlcl9faGFtYnVyZ2VyIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgzcHgsIC0zcHgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 25,
    vars: 0,
    consts: [[1, "wrapper"], [1, "about"], [1, "about__left"], [1, "about__left__title"], [1, "about__left__about-us"], [1, "about__right"], ["src", "./assets/about/about-1.jpg", "alt", "about-img", 1, "about__right__img"], [1, "about__2"], [1, "about__2__left", "about__2__left--sec"], ["src", "./assets/about/about-2.jpg", "alt", "about-img", 1, "about__2__right__img"], [1, "about__2__right"], [1, "about__left__title", "about__right__title"], [1, "about__2__left__about-us", "about__2__right__about-us"], [1, "about__2__left"], [1, "about__left__title", "about__left__title-bottom"], [1, "about__2__left__about-us"], ["src", "./assets/about/about-3.jpg", "alt", "about-img", 1, "about__2__right__img"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Who we are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Alternative Education Academy (AEA) is a youth NGO supporting local youngsters to become active and responsible citizens. It is in the East part of Georgia. The organization pursues multiple program directions to achieve its mission. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Our mission is to support local juniors with fewer opportunities and IDP kids through various exercises such as after school non-formal educational activities. Using the non-formal methodology, we keep a positive spirit in the youth and volunteering field. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "div", 13)(19, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "What we do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " AEA promotes European Citizenship and intercultural learning among Georgian youngsters. We want to support cultural cooperation between the EU and Georgia and promote its fundamental principles. The concepts such as respect the national identities and culture, freedom of expression, solidarity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  margin: 130px 0;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 50px;\n    margin: 100px 0;\n  }\n}\n\n.about[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 750px) {\n  .about[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.about__left[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 50px;\n}\n@media screen and (max-width: 750px) {\n  .about__left[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-bottom: 50px;\n  }\n}\n.about__left__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #7d86e9;\n  font-weight: bold;\n}\n.about__left__title-bottom[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.about__left__about-us[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  max-width: 450px;\n  font-size: 22px;\n  color: #52565e;\n  line-height: 30px;\n  text-align: left;\n}\n@media screen and (max-width: 1050px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 50px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    font-size: 14px;\n  }\n}\n.about__right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about__right__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.about__right__title[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n@media screen and (max-width: 750px) {\n  .about__right__title[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 20px;\n  }\n}\n\n.about__2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 80px;\n}\n@media screen and (max-width: 750px) {\n  .about__2[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.about__2__right__about-us[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n@media screen and (max-width: 750px) {\n  .about__2__right__about-us[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 50px;\n    font-size: 16px;\n  }\n}\n.about__2__left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about__2__left__about-us[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  max-width: 500px;\n  font-size: 22px;\n  color: #52565e;\n  line-height: 30px;\n  text-align: left;\n  padding: 0 10px;\n}\n@media screen and (max-width: 1050px) {\n  .about__2__left__about-us[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__2__left__about-us[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n    margin-bottom: 50px;\n    font-size: 16px;\n    margin-top: 50px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .about__2__left__about-us[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__2__left--sec[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n.about__2__right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about__2__right__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBTkY7SUFPSSxlQUFBO0lBQ0EsZUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFFRjtBQURFO0VBSEY7SUFJSSxzQkFBQTtFQUlGO0FBQ0Y7QUFIRTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFIRjtJQUlJLFVBQUE7SUFDQSxtQkFBQTtFQU9KO0FBQ0Y7QUFOSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFRTjtBQVBNO0VBQ0UsZ0JBQUE7QUFTUjtBQU5JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVFOO0FBUE07RUFQRjtJQVFJLGVBQUE7SUFDQSxnQkFBQTtFQVVOO0FBQ0Y7QUFUTTtFQVhGO0lBWUksc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQVlOO0FBQ0Y7QUFYTTtFQWhCRjtJQWlCSSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBY047QUFDRjtBQVZFO0VBQ0UsT0FBQTtBQVlKO0FBWEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFOO0FBWEk7RUFDRSxpQkFBQTtBQWFOO0FBWk07RUFGRjtJQUdJLGNBQUE7SUFDQSxnQkFBQTtFQWVOO0FBQ0Y7O0FBWEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWNGO0FBYkU7RUFKRjtJQUtJLGFBQUE7RUFnQkY7QUFDRjtBQWZFO0VBUEY7SUFRSSxzQkFBQTtFQWtCRjtBQUNGO0FBaEJJO0VBQ0UsaUJBQUE7QUFrQk47QUFqQk07RUFGRjtJQUdJLFNBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFvQk47QUFDRjtBQWpCRTtFQUNFLE9BQUE7QUFtQko7QUFqQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBSUEsZUFBQTtBQWdCTjtBQW5CTTtFQVBGO0lBUUksZUFBQTtFQXNCTjtBQUNGO0FBbkJNO0VBWkY7SUFhSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBc0JOO0FBQ0Y7QUFyQk07RUFuQkY7SUFvQkksZUFBQTtFQXdCTjtBQUNGO0FBcEJNO0VBREY7SUFFSSxRQUFBO0VBdUJOO0FBQ0Y7QUFuQkU7RUFDRSxPQUFBO0FBcUJKO0FBcEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFzQk4iLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG4gIG1hcmdpbjogMTMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgbWFyZ2luOiAxMDBweCAwO1xuICB9XG59XG5cbi5hYm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICZfX2xlZnQge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjN2Q4NmU5O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAmLWJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICZfX2Fib3V0LXVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6ICM1MjU2NWU7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19yaWdodCB7XG4gICAgZmxleDogMTtcbiAgICAmX19pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYWJvdXRfXzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fcmlnaHQge1xuICAgICZfX2Fib3V0LXVzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2xlZnQge1xuICAgIGZsZXg6IDE7XG5cbiAgICAmX19hYm91dC11cyB7XG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAjNTI1NjVlO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zZWMge1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgJl9faW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9348:
/*!******************************************************!*\
  !*** ./src/app/adm-project/adm-project.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdmProjectComponent: () => (/* binding */ AdmProjectComponent)
/* harmony export */ });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ 5853);
/* harmony import */ var _shared_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/storage */ 4278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/projects.service */ 9324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function AdmProjectComponent_h3_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DELETE PROJECT\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdmProjectComponent_ul_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdmProjectComponent_ul_24_li_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const projectKey_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onDelete(projectKey_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const projectKey_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", projectKey_r5 && ctx_r4.projects ? ctx_r4.projects[projectKey_r5] == null ? null : ctx_r4.projects[projectKey_r5].title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx_r4.deleteLoading ? "DELETE" : "Loading...", " ");
  }
}
function AdmProjectComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdmProjectComponent_ul_24_li_1_Template, 4, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.projectKeys);
  }
}
class AdmProjectComponent {
  constructor(http, projectService) {
    this.http = http;
    this.projectService = projectService;
    this.projectKeys = [];
    this.storage = _shared_storage__WEBPACK_IMPORTED_MODULE_1__.storage;
  }
  ngOnInit() {
    this.projectService.startFetchingProjects();
    this.subscription = this.projectService.projectsData$.subscribe(projects => {
      this.projects = projects;
      if (this.projects) {
        this.projectKeys = Object.keys(this.projects);
      }
    });
  }
  setProjectInfo(projectsData) {
    console.log(projectsData);
    if (projectsData) {
      this.projects = projectsData;
      this.projectKeys = Object.keys(projectsData);
    } else {
      this.projectKeys = [];
    }
  }
  processImage(image) {
    if (image?.files?.length) {
      this.image = image.files[0];
    }
  }
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  onSubmit(form) {
    if (!this.loading) {
      this.loading = true;
      this.uploadImage(form.form.value.title);
      console.log(form.form.value);
      this.http.post('https://healthcontrol-76123.firebaseio.com/projects.json', {
        title: form.form.value.title,
        text1: form.form.value?.text1,
        text2: form.form.value?.text2
      }).subscribe(res => {
        console.log(res);
        this.loading = false;
        form.reset();
        this.projectService.startFetchingProjects();
      });
    }
  }
  uploadImage(title) {
    const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(this.storage, `projects/${title}`);
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.uploadBytes)(imageRef, this.image).then(res => {
      console.log(res);
    });
  }
  onDelete(key) {
    this.deleteLoading = true;
    this.http.delete(`https://healthcontrol-76123.firebaseio.com/projects/${key}.json`).subscribe(response => {
      console.log(response);
      console.log('Item deleted successfully');
      this.projectService.startFetchingProjects();
      this.deleteLoading = false;
    }, error => {
      console.log(error);
      console.log('Error deleting item:', error);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AdmProjectComponent_Factory(t) {
    return new (t || AdmProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_projects_service__WEBPACK_IMPORTED_MODULE_2__.projectsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdmProjectComponent,
    selectors: [["app-adm-project"]],
    decls: 25,
    vars: 4,
    consts: [[1, "container", 2, "margin-top", "200px", "margin-bottom", "40px", 3, "ngSubmit"], ["form", "ngForm"], [2, "text-align", "center", "margin-bottom", "30px"], [1, "mb-3"], ["for", "exampleFormControlInput1", 1, "form-label"], ["ngModel", "", "name", "title", "required", "true", "type", "text", "id", "exampleFormControlInput1", "placeholder", "title", 1, "form-control"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["required", "true", "ngModel", "", "name", "text1", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], ["required", "true", "required", "true", "ngModel", "", "name", "text2", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], ["required", "true", "ngModel", "", "name", "photo", "type", "file", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "change"], ["image", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["style", "text-align: center; margin-bottom: 30px", 4, "ngIf"], ["class", "list-group container", "style", "margin-top: 20px; margin-bottom: 40px", 4, "ngIf"], [1, "list-group", "container", 2, "margin-top", "20px", "margin-bottom", "40px"], ["class", "list-group-item flx", 4, "ngFor", "ngForOf"], [1, "list-group-item", "flx"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function AdmProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdmProjectComponent_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "CREATE PROJECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Text part 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3)(13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Text part 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3)(17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Project picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdmProjectComponent_Template_input_change_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.processImage(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AdmProjectComponent_h3_23_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AdmProjectComponent_ul_24_Template, 2, 1, "ul", 13);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx.loading ? "Add Project" : "Loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    styles: [".flx[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtLXByb2plY3QvYWRtLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZseHtcbiAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _adm_project_adm_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adm-project/adm-project.component */ 9348);
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ 2053);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _our_project_our_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-project/our-project.component */ 6228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}, {
  path: 'projects',
  component: _our_project_our_project_component__WEBPACK_IMPORTED_MODULE_4__.OurProjectComponent
}, {
  path: 'youthRoom',
  component: _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__.ComingSoonComponent
}, {
  path: 'events',
  component: _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_2__.ComingSoonComponent
}, {
  path: 'pholadashvili',
  component: _adm_project_adm_project_component__WEBPACK_IMPORTED_MODULE_1__.AdmProjectComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ 5853);
/* harmony import */ var _shared_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/storage */ 4278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/projects.service */ 9324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 6515);








class AppComponent {
  constructor(http, projectService) {
    this.http = http;
    this.projectService = projectService;
    this.title = 'AEA';
    this.imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_shared_storage__WEBPACK_IMPORTED_MODULE_1__.storage, 'projects/');
  }
  ngOnInit() {
    console.log('Angular 16 is running!');
    this.projectService.startFetchingProjects();
  }
  ngOnDestroy() {
    this.projectService.projectsData$.unsubscribe();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_projects_service__WEBPACK_IMPORTED_MODULE_2__.projectsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "wrapper"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header")(2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome/welcome.component */ 3533);
/* harmony import */ var _home_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/what-we-do/what-we-do.component */ 7375);
/* harmony import */ var _home_what_we_do_what_we_do_item_what_we_do_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/what-we-do/what-we-do-item/what-we-do-item.component */ 2719);
/* harmony import */ var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/projects/projects.component */ 185);
/* harmony import */ var _home_video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/video/video.component */ 6713);
/* harmony import */ var _home_rewievs_rewievs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/rewievs/rewievs.component */ 9922);
/* harmony import */ var _home_rewievs_review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/rewievs/review/review.component */ 6416);
/* harmony import */ var _home_partners_partners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/partners/partners.component */ 8548);
/* harmony import */ var _home_partners_partner_partner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/partners/partner/partner.component */ 7222);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _UI_bugrer_menu_bugrer_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UI/bugrer-menu/bugrer-menu.component */ 8357);
/* harmony import */ var _home_mob_nav_mob_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/mob-nav/mob-nav.component */ 3863);
/* harmony import */ var _home_mob_nav_nav_images_nav_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/mob-nav/nav-images/nav-images.component */ 3933);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _our_project_our_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./our-project/our-project.component */ 6228);
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ 2053);
/* harmony import */ var _adm_project_adm_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adm-project/adm-project.component */ 9348);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _directives_imageLoad_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/imageLoad.directive */ 3978);
/* harmony import */ var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/image/image.component */ 9140);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _directives_visible_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/visible.directive */ 6956);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent, _home_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_4__.WhatWeDoComponent, _home_what_we_do_what_we_do_item_what_we_do_item_component__WEBPACK_IMPORTED_MODULE_5__.WhatWeDoItemComponent, _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent, _home_video_video_component__WEBPACK_IMPORTED_MODULE_7__.VideoComponent, _home_rewievs_rewievs_component__WEBPACK_IMPORTED_MODULE_8__.RewievsComponent, _home_rewievs_review_review_component__WEBPACK_IMPORTED_MODULE_9__.ReviewComponent, _home_partners_partners_component__WEBPACK_IMPORTED_MODULE_10__.PartnersComponent, _home_partners_partner_partner_component__WEBPACK_IMPORTED_MODULE_11__.PartnerComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_13__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_14__.AboutComponent, _UI_bugrer_menu_bugrer_menu_component__WEBPACK_IMPORTED_MODULE_15__.BugrerMenuComponent, _home_mob_nav_mob_nav_component__WEBPACK_IMPORTED_MODULE_16__.MobNavComponent, _home_mob_nav_nav_images_nav_images_component__WEBPACK_IMPORTED_MODULE_17__.NavImagesComponent, _our_project_our_project_component__WEBPACK_IMPORTED_MODULE_18__.OurProjectComponent, _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_19__.ComingSoonComponent, _adm_project_adm_project_component__WEBPACK_IMPORTED_MODULE_20__.AdmProjectComponent, _directives_imageLoad_directive__WEBPACK_IMPORTED_MODULE_21__.imageLoadDirective, _shared_image_image_component__WEBPACK_IMPORTED_MODULE_22__.ImageComponent, _directives_visible_directive__WEBPACK_IMPORTED_MODULE_23__.VisibleDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 2053:
/*!******************************************************!*\
  !*** ./src/app/coming-soon/coming-soon.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonComponent: () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ComingSoonComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    const url = this.router.url.split('/');
    this.page = url[url.length - 1];
    console.log(this.page);
  }
  static #_ = this.ɵfac = function ComingSoonComponent_Factory(t) {
    return new (t || ComingSoonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ComingSoonComponent,
    selectors: [["app-coming-soon"]],
    decls: 6,
    vars: 1,
    consts: [[1, "coming"], [1, "coming__info"], [1, "coming__info-soon"], ["routerLink", "/", 1, "coming__info-button"]],
    template: function ComingSoonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back Home \uD83D\uDD19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.page, " coming soon \uD83D\uDC7B ");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".coming[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n.coming__info[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 70px;\n  background-color: #7D86E9;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #fff;\n  margin-bottom: 200px;\n}\n.coming__info-soon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.coming__info-button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  width: 50%;\n  align-self: flex-end;\n  margin-top: 10px;\n  border-radius: 10px;\n  background-color: #434ba9;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.coming__info-button[_ngcontent-%COMP%]:hover {\n  background-color: #636aba;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29taW5nLXNvb24vY29taW5nLXNvb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQUk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVOO0FBRE07RUFDRSx5QkFBQTtBQUdSIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWluZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19pbmZve1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdEODZFOTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgJi1zb29ue1xuICAgICAgZm9udC1zaXplOiAgMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgICYtYnV0dG9ue1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRiYTk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2YWJhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3978:
/*!***************************************************!*\
  !*** ./src/app/directives/imageLoad.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageLoadDirective: () => (/* binding */ imageLoadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class imageLoadDirective {
  constructor(element) {
    this.element = element;
  }
  ngOnChanges(changes) {
    console.log(changes);
    if ('src' in changes) {
      const currentValue = changes['src'].currentValue;
      const previousValue = changes['src'].previousValue;
      console.log(`myInput changed from ${previousValue} to ${currentValue}`);
      if (!currentValue) {
        // this.element.nativeElement.setAttribute('src', './assets/projects/project-11.jpg');
      }
    }
  }
  ngAfterViewInit() {
    console.log('am loaded');
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.element.nativeElement.setAttribute('src', this.src);
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // });
    // observer.observe(this.element.nativeElement);
  }
  static #_ = this.ɵfac = function imageLoadDirective_Factory(t) {
    return new (t || imageLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: imageLoadDirective,
    selectors: [["", "imageLoad", ""]],
    inputs: {
      src: ["imageLoad", "src"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 6956:
/*!*************************************************!*\
  !*** ./src/app/directives/visible.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisibleDirective: () => (/* binding */ VisibleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



class VisibleDirective {
  constructor(el, platformId) {
    this.el = el;
    this.platformId = platformId;
    this.onVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.checkForIntersection = entries => {
      entries.forEach(entry => {
        if (this.checkIfIntersecting(entry)) {
          this.onVisible.emit();
        } else {
          this.onHide.emit();
        }
      });
    };
  }
  checkIfIntersecting(entry) {
    // console.log(entry.target, this.el.nativeElement)
    return entry.isIntersecting && entry.target === this.el.nativeElement;
  }
  ngAfterViewInit() {
    let config = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, config);
    this.observer.observe(this.el.nativeElement);
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
      this.observer.disconnect();
    }
  }
  static #_ = this.ɵfac = function VisibleDirective_Factory(t) {
    return new (t || VisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: VisibleDirective,
    selectors: [["", "visible", ""]],
    outputs: {
      onVisible: "onVisible",
      onHide: "onHide"
    }
  });
}

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 44,
    vars: 0,
    consts: [[1, "footer"], [1, "footer__img", "footer__img--mobile"], ["src", "./assets/logoOnly.svg", "alt", "Logo", 1, "footer__img"], [1, "footer__img-name"], [1, "nav"], [1, "nav__list"], [1, "nav__list__li"], ["routerLink", "", 1, "nav__list__li__link"], ["routerLink", "about", 1, "nav__list__li__link"], ["routerLink", "projects", 1, "nav__list__li__link"], ["href", "#", 1, "nav__list__li__link"], [1, "footer__contact"], [1, "footer__contact__title"], [1, "footer__contact__email"], [1, "footer__contact__tel"], [1, "footer__contact__follow"], [1, "footer__contact__icons"], ["href", "#"], ["src", "./assets/icons8-whatsapp.svg", "alt", "whatap"], ["target", "_blank", "href", "https://www.facebook.com/Altereduacademy"], ["src", "./assets/icons8-facebook.svg", "alt", "facebook"], ["src", "./assets/icons8-instagram.svg", "alt", "instagram"], ["src", "./assets/footer-icon.svg", "alt", "right__icon", 1, "footer__img", "footer__img--right"], [1, "footer__hide-ball"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Alternative Education Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Youth Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6)(20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 11)(23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " altereduacademy@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Tel.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " (+995) 551 85 28 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 22)(43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(252, 222, 195, 0.2);\n  padding: 50px;\n  position: relative;\n}\n.footer__hide-ball[_ngcontent-%COMP%] {\n  background-color: rgba(252, 222, 195, 0.2);\n  background-color: #7d86e9;\n  display: flex;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  z-index: 400;\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n  bottom: 90px;\n  right: 69px;\n  opacity: 0.7;\n}\n@media only screen and (max-width: 1050px) {\n  .footer__hide-ball[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 520px) {\n  .footer[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 1050px) {\n  .footer[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n}\n@media only screen and (max-width: 520px) {\n  .footer[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n.footer__img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -10;\n  display: flex;\n  align-items: center;\n}\n.footer__img-name[_ngcontent-%COMP%] {\n  color: rgb(244, 136, 35);\n  font-weight: bold;\n  margin-left: 10px;\n  font-size: 12px;\n}\n@media only screen and (max-width: 520px) {\n  .footer__img--mobile[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 150px;\n    height: 150px;\n    right: 10px;\n    bottom: -4px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .footer__img--mobile[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    bottom: 15px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .footer__img--right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer__contact[_ngcontent-%COMP%] {\n  color: #52565e;\n  font-size: 18px;\n  font-weight: bold;\n}\n@media only screen and (max-width: 950px) {\n  .footer__contact[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 620px) {\n  .footer__contact[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.footer__contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.footer__contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.footer__contact__icons[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 120px;\n  justify-content: space-between;\n}\n\n.nav__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media only screen and (max-width: 1050px) {\n  .nav__list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__list__li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.nav__list__li__link[_ngcontent-%COMP%] {\n  color: #52565e;\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQWRGO0lBZUksYUFBQTtFQUdKO0FBQ0Y7QUFBRTtFQTFCRjtJQTJCSSx1QkFBQTtFQUdGO0FBQ0Y7QUFERTtFQTlCRjtJQStCSSw2QkFBQTtFQUlGO0FBQ0Y7QUFIRTtFQWpDRjtJQWtDSSwyQkFBQTtFQU1GO0FBQ0Y7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU1KO0FBTEk7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBT047QUFETTtFQURGO0lBRUksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBSU47QUFDRjtBQUhNO0VBUkY7SUFTSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFNTjtBQUNGO0FBSE07RUFERjtJQUVJLGFBQUE7RUFNTjtBQUNGO0FBSEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBS0o7QUFKSTtFQUpGO0lBS0ksZUFBQTtFQU9KO0FBQ0Y7QUFOSTtFQVBGO0lBUUksZUFBQTtFQVNKO0FBQ0Y7QUFQSTtFQUNFLG1CQUFBO0FBU047QUFSTTtFQUNFLG1CQUFBO0FBVVI7QUFDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQ047O0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUdJO0VBSEY7SUFJSSxhQUFBO0VBQUo7QUFDRjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjtBQUFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVSIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDIyMiwgMTk1LCAwLjIpO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9faGlkZS1iYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjIyLCAxOTUsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkODZlOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogOTBweDtcbiAgICByaWdodDogNjlweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmLW5hbWUge1xuICAgICAgY29sb3I6IHJnYigyNDQgMTM2IDM1KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICYtLW1vYmlsZSB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi0tcmlnaHQge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19jb250YWN0IHtcbiAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuICAgIH1cbiAgICAmX190aXRsZSB7XG4gICAgfVxuICAgICZfX2VtYWlsIHtcbiAgICB9XG4gICAgJl9fdGVsIHtcbiAgICB9XG4gICAgJl9fZm9sbG93IHtcbiAgICB9XG4gICAgJl9faWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG5cbi5uYXYge1xuICAmX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICZfX2xpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAmX19saW5rIHtcbiAgICAgICAgY29sb3I6ICM1MjU2NWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6923:
/*!******************************************!*\
  !*** ./src/app/header/burger.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerService: () => (/* binding */ burgerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class burgerService {
  constructor() {
    this.toggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  checked() {
    this.toggle.next();
  }
  static #_ = this.ɵfac = function burgerService_Factory(t) {
    return new (t || burgerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: burgerService,
    factory: burgerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _burger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.service */ 6923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _UI_bugrer_menu_bugrer_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/bugrer-menu/bugrer-menu.component */ 8357);
/* harmony import */ var _home_mob_nav_mob_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/mob-nav/mob-nav.component */ 3863);






const _c0 = function () {
  return {
    exact: true
  };
};
const _c1 = function (a0) {
  return {
    nav__overlay__show: a0
  };
};
class HeaderComponent {
  constructor(burgerService) {
    this.burgerService = burgerService;
  }
  ngOnInit() {}
  onToggleMenu(toggle) {
    this.toggle = toggle;
  }
  onOverlayClicked() {
    this.burgerService.checked();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_burger_service__WEBPACK_IMPORTED_MODULE_0__.burgerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 34,
    vars: 6,
    consts: [[1, "header"], [1, "header__container"], [1, "nav"], ["href", "#"], [1, "nav__logo"], ["src", "./assets/logoOnly.svg", "alt", "Logo", 1, "nav__logo", "nav__logo--mobile-logo"], [1, "nav__logo-name", "nav__logo-name--mobile"], [1, "nav__list"], [1, "nav__list__item"], ["routerLink", "", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "projects", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "youthRoom", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "events", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], [1, "nav__icons"], ["src", "./assets/icons8-whatsapp.svg", "alt", "whatap"], ["target", "_blank", "href", "https://www.facebook.com/Altereduacademy"], ["src", "./assets/icons8-facebook.svg", "alt", "facebook"], ["src", "./assets/icons8-instagram.svg", "alt", "instagram"], [1, "nav__burger", 3, "toggleMenu"], [1, "nav__overlay", 3, "ngClass", "click"], [3, "show"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Alternative Education Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Our Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 8)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Youth Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 8)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14)(25, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "app-burger-menu", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggleMenu", function HeaderComponent_Template_app_burger_menu_toggleMenu_31_listener($event) {
          return ctx.onToggleMenu($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_32_listener() {
          return ctx.onOverlayClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-mob-nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx.toggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("show", ctx.toggle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _UI_bugrer_menu_bugrer_menu_component__WEBPACK_IMPORTED_MODULE_1__.BugrerMenuComponent, _home_mob_nav_mob_nav_component__WEBPACK_IMPORTED_MODULE_2__.MobNavComponent],
    styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 10px 0;\n}\n.header__container[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav__burger[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n@media only screen and (min-width: 1050px) {\n  .nav__burger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nav__logo-name[_ngcontent-%COMP%] {\n  color: rgb(244, 136, 35);\n  font-weight: bold;\n  margin-left: 10px;\n  font-size: 12px;\n}\n@media only screen and (max-width: 750px) {\n  .nav__logo-name--mobile[_ngcontent-%COMP%] {\n    width: 50px;\n    font-size: 8px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .nav__logo--mobile-logo[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n}\n.nav__list[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n  width: 100%;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 1050px) {\n  .nav__list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__list__item__link[_ngcontent-%COMP%] {\n  padding: 5px 18px;\n  position: relative;\n  font-weight: bold;\n  color: #52565e;\n}\n.nav__list__item__link[_ngcontent-%COMP%]:hover::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 1.5px;\n  background-color: #f48823;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.nav__list__item__link--active[_ngcontent-%COMP%] {\n  background-color: #7d86e9;\n  border-radius: 4px;\n  color: #fff;\n}\n.nav__list__item__link--active[_ngcontent-%COMP%]:hover::after {\n  display: none;\n}\n.nav__icons[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 100px;\n  width: 100%;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 650px) {\n  .nav__icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s ease-in-out;\n}\n.nav__overlay__show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFFQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFJRSxrQkFBQTtBQUZKO0FBREk7RUFERjtJQUVJLGFBQUE7RUFJSjtBQUNGO0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUZJO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUlOO0FBRlE7RUFERjtJQUVJLFdBQUE7SUFDQSxjQUFBO0VBS1I7QUFDRjtBQURNO0VBREY7SUFFSSxXQUFBO0VBSU47QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQUxGO0lBTUksYUFBQTtFQUlKO0FBQ0Y7QUFETTtFQUNFLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQWVBLGNBQUE7QUFaUjtBQUFVO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFFWjtBQUlRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGVjtBQUlZO0VBQ0UsYUFBQTtBQUZkO0FBU0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFQSjtBQVFJO0VBTEY7SUFNSSxhQUFBO0VBTEo7QUFDRjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQU5KO0FBUUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFOTiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICZfX2J1cmdlciB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAmX19sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJi1uYW1lIHtcbiAgICAgIGNvbG9yOiByZ2IoMjQ0IDEzNiAzNSk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgJi0tbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYtLW1vYmlsZS1sb2dvIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICZfX2xpbmsge1xuICAgICAgICBwYWRkaW5nOiA1cHggMThweDtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMS41cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4ODIzO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yOiAjNTI1NjVlO1xuXG4gICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdkODZlOTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2ljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmX19zaG93IHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations/animations */ 9453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ 3533);
/* harmony import */ var _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./what-we-do/what-we-do.component */ 7375);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 185);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video/video.component */ 6713);
/* harmony import */ var _rewievs_rewievs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewievs/rewievs.component */ 9922);
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partners/partners.component */ 8548);
/* harmony import */ var _directives_visible_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/visible.directive */ 6956);










const _c0 = function (a0) {
  return {
    "show": a0
  };
};
class HomeComponent {
  constructor() {
    this.isVisible = false;
    this.reviewVisible = false;
    this.partnerVisible = false;
    this.projectsVisible = false;
    this.welcomeVisible = false;
    this.whatWeDoVisible = false;
  }
  ngOnInit() {}
  videoIsVisible() {
    this.isVisible = true;
  }
  reviewIsVisible() {
    this.reviewVisible = true;
  }
  partnerIsVisible() {
    this.partnerVisible = true;
  }
  projectsIsVisible() {
    this.projectsVisible = true;
  }
  welcomeIsVisible() {
    this.welcomeVisible = true;
  }
  whatWeDoIsVisible() {
    this.whatWeDoVisible = true;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 11,
    vars: 18,
    consts: [[1, "wrapper"], ["visible", "", 1, "hide", 3, "ngClass", "onVisible"], ["visible", "", 3, "onVisible"], [1, "hide", 3, "ngClass"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "app-welcome", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_app_welcome_onVisible_1_listener() {
          return ctx.welcomeIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-what-we-do", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_app_what_we_do_onVisible_2_listener() {
          return ctx.whatWeDoIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-projects", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_app_projects_onVisible_3_listener() {
          return ctx.projectsIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 0)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_div_onVisible_5_listener() {
          return ctx.videoIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_div_onVisible_7_listener() {
          return ctx.reviewIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-reviews", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onVisible", function HomeComponent_Template_div_onVisible_9_listener() {
          return ctx.partnerIsVisible();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-partners", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx.welcomeVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c0, ctx.whatWeDoVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c0, ctx.projectsVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c0, ctx.isVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c0, ctx.reviewVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c0, ctx.partnerVisible));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent, _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_2__.WhatWeDoComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _video_video_component__WEBPACK_IMPORTED_MODULE_4__.VideoComponent, _rewievs_rewievs_component__WEBPACK_IMPORTED_MODULE_5__.RewievsComponent, _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__.PartnersComponent, _directives_visible_directive__WEBPACK_IMPORTED_MODULE_7__.VisibleDirective],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  overflow: hidden;\n}\n@media only screen and (max-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 50px;\n    width: 100%;\n  }\n}\n\n.hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n  transition: all ease-in-out 4s;\n  opacity: 0;\n}\n\n.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLGVBQUE7SUFFQSxXQUFBO0VBQ0Y7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBQUY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMCAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuXG4gICAgXG59XG4uaGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDRzO1xuICBvcGFjaXR5OiAwO1xuXG59XG5cbi5zaG93e1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuIFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInOutAnimation]
    }
  });
}

/***/ }),

/***/ 3863:
/*!***************************************************!*\
  !*** ./src/app/home/mob-nav/mob-nav.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobNavComponent: () => (/* binding */ MobNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _nav_images_nav_images_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-images/nav-images.component */ 3933);




const _c0 = function (a0) {
  return {
    "wrapper__show": a0
  };
};
const _c1 = function () {
  return {
    exact: true
  };
};
class MobNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MobNavComponent_Factory(t) {
    return new (t || MobNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MobNavComponent,
    selectors: [["app-mob-nav"]],
    inputs: {
      show: "show"
    },
    decls: 27,
    vars: 5,
    consts: [[1, "wrapper", 3, "ngClass"], [1, "nav"], [1, "nav__list"], [1, "nav__list__decoration"], [1, "nav__list__item"], ["routerLink", "", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "projects", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "youthRoom", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], ["routerLink", "events", "routerLinkActive", "nav__list__item__link--active", 1, "nav__list__item__link"], [1, "nav__icons"], ["href", "#"], ["src", "./assets/nav/icons8-whatsapp.svg", "alt", "whatap"], ["target", "_blank", "href", "https://www.facebook.com/Altereduacademy"], ["src", "./assets/nav/icons8-facebook.svg", "alt", "facebook"], ["src", "./assets/nav/icons8-instagram.svg", "alt", "instagram"]],
    template: function MobNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "ul", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-nav-images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 4)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Our Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 4)(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Youth Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 4)(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _nav_images_nav_images_component__WEBPACK_IMPORTED_MODULE_0__.NavImagesComponent],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #f48823;\n  width: 50%;\n  height: 100vh;\n  transform: translateX(-100%);\n  transition: transform ease-in-out 0.7s;\n}\n@media only screen and (min-width: 550px) {\n  .wrapper[_ngcontent-%COMP%] {\n    opacity: 0.9;\n  }\n}\n@media only screen and (min-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper__show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.nav[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 100px;\n}\n.nav__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  max-height: 400px;\n}\n.nav__list__decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n@media only screen and (min-width: 550px) {\n  .nav__list__decoration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav__list__item[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 50px;\n}\n.nav__list__item__link[_ngcontent-%COMP%] {\n  padding: 5px 18px;\n  position: relative;\n  font-weight: bold;\n  color: #ffffff;\n  font-size: 18px;\n}\n.nav__list__item__link[_ngcontent-%COMP%]:hover::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 1.5px;\n  background-color: #f48823;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.nav__list__item__link--active[_ngcontent-%COMP%] {\n  color: #7d86e9;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.nav__list__item__link--active[_ngcontent-%COMP%]:hover::after {\n  display: none;\n}\n.nav__icons[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 150px;\n  width: 100%;\n  justify-content: space-between;\n  z-index: 1;\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9tb2ItbmF2L21vYi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQU9BLDRCQUFBO0VBQ0Esc0NBQUE7QUFMRjtBQUZFO0VBUEY7SUFRSSxZQUFBO0VBS0Y7QUFDRjtBQUpFO0VBVkY7SUFXSSxhQUFBO0VBT0Y7QUFDRjtBQUpFO0VBQ0Usd0JBQUE7QUFNSjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBS0Y7QUFKRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjtBQUpJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU1OO0FBTE07RUFQRjtJQVFJLGFBQUE7RUFRTjtBQUNGO0FBSk07RUFDRSxnQkFBQTtBQU1SO0FBSk07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFlQSxjQUFBO0VBQ0EsZUFBQTtBQVJSO0FBTFU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQU9aO0FBRFE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUdWO0FBRFk7RUFDRSxhQUFBO0FBR2Q7QUFJRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4ODIzO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC43cztcbiAgJl9fc2hvdyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbi5uYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG5cbiAgICAmX19kZWNvcmF0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgJl9fbGluayB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMS41cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4ODIzO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICM3ZDg2ZTk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2ljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3933:
/*!*****************************************************************!*\
  !*** ./src/app/home/mob-nav/nav-images/nav-images.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavImagesComponent: () => (/* binding */ NavImagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NavImagesComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NavImagesComponent_Factory(t) {
    return new (t || NavImagesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavImagesComponent,
    selectors: [["app-nav-images"]],
    decls: 147,
    vars: 0,
    consts: [[1, "slider"], ["src", "./assets/nav/book-reader-solid.svg", "alt", "reader", 1, "slider__img"], ["src", "./assets/nav/running-solid.svg", "alt", "reader", 1, "slider__img"], ["src", "./assets/nav/golf-ball-solid.svg", "alt", "reader", 1, "slider__img"], ["src", "./assets/nav/book-solid.svg", "alt", "reader", 1, "slider__img"], ["src", "./assets/nav/apple-alt-solid.svg", "alt", "reader", 1, "slider__img"], ["src", "./assets/nav/futbol-solid.svg", "alt", "reader", 1, "slider__img"]],
    template: function NavImagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2)(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 1)(8, "img", 2)(9, "img", 3)(10, "img", 4)(11, "img", 5)(12, "img", 6)(13, "img", 1)(14, "img", 2)(15, "img", 6)(16, "img", 1)(17, "img", 2)(18, "img", 3)(19, "img", 4)(20, "img", 5)(21, "img", 6)(22, "img", 1)(23, "img", 2)(24, "img", 3)(25, "img", 4)(26, "img", 5)(27, "img", 6)(28, "img", 1)(29, "img", 2)(30, "img", 1)(31, "img", 2)(32, "img", 3)(33, "img", 4)(34, "img", 5)(35, "img", 6)(36, "img", 1)(37, "img", 2)(38, "img", 3)(39, "img", 4)(40, "img", 5)(41, "img", 6)(42, "img", 1)(43, "img", 2)(44, "img", 3)(45, "img", 4)(46, "img", 5)(47, "img", 6)(48, "img", 1)(49, "img", 2)(50, "img", 6)(51, "img", 1)(52, "img", 2)(53, "img", 3)(54, "img", 4)(55, "img", 5)(56, "img", 6)(57, "img", 1)(58, "img", 2)(59, "img", 1)(60, "img", 2)(61, "img", 3)(62, "img", 4)(63, "img", 5)(64, "img", 6)(65, "img", 1)(66, "img", 2)(67, "img", 3)(68, "img", 4)(69, "img", 5)(70, "img", 6)(71, "img", 1)(72, "img", 2)(73, "img", 3)(74, "img", 4)(75, "img", 5)(76, "img", 6)(77, "img", 1)(78, "img", 2)(79, "img", 1)(80, "img", 2)(81, "img", 3)(82, "img", 4)(83, "img", 5)(84, "img", 6)(85, "img", 1)(86, "img", 2)(87, "img", 3)(88, "img", 4)(89, "img", 5)(90, "img", 6)(91, "img", 1)(92, "img", 2)(93, "img", 3)(94, "img", 4)(95, "img", 5)(96, "img", 6)(97, "img", 1)(98, "img", 2)(99, "img", 1)(100, "img", 2)(101, "img", 3)(102, "img", 4)(103, "img", 5)(104, "img", 6)(105, "img", 1)(106, "img", 2)(107, "img", 3)(108, "img", 4)(109, "img", 1)(110, "img", 2)(111, "img", 3)(112, "img", 4)(113, "img", 5)(114, "img", 6)(115, "img", 1)(116, "img", 2)(117, "img", 3)(118, "img", 4)(119, "img", 5)(120, "img", 6)(121, "img", 1)(122, "img", 2)(123, "img", 1)(124, "img", 2)(125, "img", 3)(126, "img", 4)(127, "img", 5)(128, "img", 6)(129, "img", 1)(130, "img", 2)(131, "img", 3)(132, "img", 4)(133, "img", 5)(134, "img", 6)(135, "img", 1)(136, "img", 2)(137, "img", 3)(138, "img", 4)(139, "img", 5)(140, "img", 6)(141, "img", 1)(142, "img", 2)(143, "img", 5)(144, "img", 6)(145, "img", 1)(146, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 5px;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  align-items: flex-start;\n  height: 100%;\n  flex-wrap: wrap;\n}\n.slider__img[_ngcontent-%COMP%] {\n  width: 30px;\n  color: #fff;\n  opacity: 0.05;\n  margin: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9tb2ItbmF2L25hdi1pbWFnZXMvbmF2LWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgJl9faW1ne1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuMDU7XG4gICAgbWFyZ2luOiA1cHggNXB4O1xuICAgXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7222:
/*!************************************************************!*\
  !*** ./src/app/home/partners/partner/partner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartnerComponent: () => (/* binding */ PartnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PartnerComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PartnerComponent_Factory(t) {
    return new (t || PartnerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PartnerComponent,
    selectors: [["app-partner"]],
    inputs: {
      src: "src",
      url: "url"
    },
    decls: 3,
    vars: 2,
    consts: [[1, "partner"], ["target", "_blank", 3, "href"], ["alt", "partner", 1, "partner__img", 3, "src"]],
    template: function PartnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    styles: [".partner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.partner__img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media only screen and (max-width: 621px) {\n  .partner__img[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9wYXJ0bmVycy9wYXJ0bmVyL3BhcnRuZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBREk7RUFGRjtJQUdLLFlBQUE7RUFJTDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJl9faW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjFweCl7XG4gICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8548:
/*!*****************************************************!*\
  !*** ./src/app/home/partners/partners.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartnersComponent: () => (/* binding */ PartnersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner/partner.component */ 7222);



function PartnersComponent_app_partner_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-partner", 11);
  }
  if (rf & 2) {
    const partner_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", partner_r1.src)("url", partner_r1.link);
  }
}
class PartnersComponent {
  constructor() {
    this.currentSlide = 0;
    this.translateValue = 160;
    // partners: String[] = [
    //   './assets/partners/partner-1.svg',
    //   './assets/partners/partner-2.svg',
    //   './assets/partners/partner-3.svg',
    //   './assets/partners/partner-4.svg',
    //   './assets/partners/partner-5.svg',
    //   './assets/partners/partner-6.svg',
    //   './assets/partners/partner-7.svg',
    //   './assets/partners/partner-8.svg',
    //   './assets/partners/partner-9.svg',
    //   './assets/partners/partner-10.svg',
    //   './assets/partners/partner-11.svg',
    //   './assets/partners/partner-12.svg',
    //   './assets/partners/partner-13.svg',
    // ];
    this.partners = [{
      src: './assets/partners/partner-1.svg',
      link: 'https://www.ateliereuropeo.eu'
    }, {
      src: './assets/partners/partner-2.svg',
      link: 'https://www.bironlus.eu/'
    }, {
      src: './assets/partners/partner-3.svg',
      link: 'https://hors-pistes.org/'
    }, {
      src: './assets/partners/partner-4.svg',
      link: 'https://mladiinfo.sk/'
    }, {
      src: './assets/partners/partner-5.svg',
      link: 'https://www.ccab.tn/'
    }, {
      src: './assets/partners/partner-6.svg',
      link: 'http://www.cultureclash4u.com/'
    }, {
      src: './assets/partners/partner-7.svg',
      link: 'https://ngo-stella.org/'
    }, {
      src: './assets/partners/partner-8.svg',
      link: 'https://www.eu.sumy.ua/'
    }, {
      src: './assets/partners/partner-9.svg',
      link: 'https://www.facebook.com/youthhubcyprus/'
    }, {
      src: './assets/partners/partner-10.svg',
      link: 'https://www.bulgarianyf.eu/'
    }, {
      src: './assets/partners/partner-11.svg',
      link: 'https://www.hyvarila.com/'
    }, {
      src: './assets/partners/partner-12.svg',
      link: 'https://www.marta.lv/'
    }, {
      src: './assets/partners/partner-13.svg',
      link: 'https://www.hellasforus.com/'
    }];
  }
  ngOnInit() {}
  ngAfterViewInit() {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner, i) => {
      partner.style.transform = `translateX(${this.translateValue * i}%)`;
    });
  }
  showPrevious() {
    this.moveSlider('left');
  }
  showNext() {
    this.moveSlider('right');
  }
  moveSlider(side) {
    const maxSlides = this.partners.length;
    if (side === 'right') {
      if (maxSlides - 3 === this.currentSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.goToSlide(this.currentSlide);
    }
    if (side === 'left') {
      if (this.currentSlide === 0) {
        this.currentSlide = maxSlides - 3;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }
  }
  goToSlide(slideIndex) {
    const partners = document.querySelectorAll('.partners__section__partner');
    partners.forEach((partner, i) => {
      partner.style.transform = `translateX(${this.translateValue * (i - slideIndex)}%)`;
    });
  }
  static #_ = this.ɵfac = function PartnersComponent_Factory(t) {
    return new (t || PartnersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PartnersComponent,
    selectors: [["app-partners"]],
    decls: 12,
    vars: 1,
    consts: [[1, "partners"], [1, "partners__title"], [1, "partners__title__h2"], ["src", "./assets/partners-points.svg ", "alt", "img", 1, "partners__title__img"], [1, "partners__img"], ["src", "./assets/map.svg", "alt", "partners"], [1, "partners__section"], ["src", "./assets/letf-arrow.svg", "alt", "arrow", 1, "partners__section__move", 3, "click"], [1, "partners__section__wrapper"], ["class", "partners__section__partner", "ngClass", "", 3, "src", "url", 4, "ngFor", "ngForOf"], ["src", "./assets/right-arrow.svg", "alt", "arrow", 1, "partners__section__move", 3, "click"], ["ngClass", "", 1, "partners__section__partner", 3, "src", "url"]],
    template: function PartnersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Partners WorldWide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PartnersComponent_Template_img_click_8_listener() {
          return ctx.showPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PartnersComponent_app_partner_10_Template, 1, 2, "app-partner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PartnersComponent_Template_img_click_11_listener() {
          return ctx.showNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.partners);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _partner_partner_component__WEBPACK_IMPORTED_MODULE_0__.PartnerComponent],
    styles: [".partners[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 100px 0;\n}\n@media only screen and (max-width: 550px) {\n  .partners[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n}\n.partners__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.partners__title__h2[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  font-size: 35px;\n  color: #52565e;\n  font-weight: bold;\n}\n@media only screen and (max-width: 550px) {\n  .partners__title__h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.partners__title__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 0;\n  width: 100%;\n}\n.partners__img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.partners__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 100px;\n}\n.partners__section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n  justify-content: space-between;\n  height: 160px;\n  align-items: center;\n  overflow: hidden;\n}\n.partners__section__wrapper[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.partners__section__partner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50px;\n  top: 0;\n  transition: transform 0.5s ease-in-out;\n  cursor: pointer;\n  opacity: 0.6;\n}\n@media only screen and (max-width: 376px) {\n  .partners__section__partner[_ngcontent-%COMP%] {\n    left: 35px;\n  }\n}\n@media only screen and (max-width: 321px) {\n  .partners__section__partner[_ngcontent-%COMP%] {\n    left: 5px;\n  }\n}\n.partners__section__partner[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.partners__section__move[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  width: 70px;\n  margin-bottom: 20px;\n}\n@media only screen and (max-width: 621px) {\n  .partners__section__move[_ngcontent-%COMP%] {\n    margin-bottom: 70px;\n    width: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFIRjtJQUlHLGNBQUE7RUFHRDtBQUNGO0FBRkU7RUFDRSxrQkFBQTtBQUlKO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlOO0FBSE07RUFMRjtJQU1HLGVBQUE7RUFNTDtBQUNGO0FBSkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQU1OO0FBSEU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBS0o7QUFKSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFNTjtBQUhFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUpJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUFLTjtBQUhJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBUUEsTUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGTjtBQVJNO0VBSEY7SUFJSSxVQUFBO0VBV047QUFDRjtBQVZNO0VBTkY7SUFPQSxTQUFBO0VBYUY7QUFDRjtBQVBNO0VBQ0UsVUFBQTtBQVNSO0FBTkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUU47QUFQVTtFQU5OO0lBT08sbUJBQUE7SUFDQSxXQUFBO0VBVVQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0bmVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMDBweCAwO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KXtcbiAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgICAgICB9XG4gICZfX3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmX19oMiB7XG4gICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGNvbG9yOiAjNTI1NjVlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KXtcbiAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICB9XG4gICAgJl9faW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTM2cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cbiAgfVxuICAmX19zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJl9fd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAmX19wYXJ0bmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KXtcbiAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCl7XG4gICAgbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fbW92ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIxcHgpe1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 185:
/*!*****************************************************!*\
  !*** ./src/app/home/projects/projects.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ProjectsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 11,
    vars: 0,
    consts: [[1, "wrapper"], [1, "project"], [1, "project__info"], [1, "project__info__title"], [1, "project__info__description"], [1, "project__picture"], ["src", "./assets/projects-1.jpg", "alt", "project-img", 1, "project__picture__img"], [1, "project__icons"], ["src", "./assets/birthday-1.svg", "alt", "icons"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Project (FEEL)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " In the framework of the Erasmus+ Youth Exchange program, a project initiated a healthy lifestyle.\u00A0The activity helped juniors discover their healthy path and exchange experiences. The project held in Paphos, Cyprus, in March 2020. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 100px 50px;\n  background-color: #f6f1f6;\n  margin-top: 100px;\n  position: relative;\n}\n@media only screen and (max-width: 750px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n\n.project[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 50px;\n}\n@media only screen and (max-width: 1050px) {\n  .project[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .project[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.project__info[_ngcontent-%COMP%] {\n  flex: 40%;\n}\n.project__info__title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n  color: #52565e;\n  margin-top: 70px;\n}\n@media only screen and (max-width: 550px) {\n  .project__info__title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.project__info__description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 390px;\n  line-height: 30px;\n  font-size: 22px;\n  color: #52565e;\n}\n@media only screen and (max-width: 750px) {\n  .project__info__description[_ngcontent-%COMP%] {\n    max-width: 100%;\n    text-align: justify;\n    margin-bottom: 50px;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .project__info__description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.project__picture[_ngcontent-%COMP%] {\n  flex: 55%;\n}\n.project__picture__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.project__icons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -90px;\n}\n@media only screen and (max-width: 550px) {\n  .project__icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUxGO0lBTUksY0FBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQUVGO0FBREU7RUFORjtJQU9JLFVBQUE7RUFJRjtBQUNGO0FBSEU7RUFURjtJQVVHLHNCQUFBO0VBTUQ7QUFDRjtBQUxFO0VBQ0UsU0FBQTtBQU9KO0FBTkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFRTjtBQVBNO0VBTEY7SUFNRyxlQUFBO0VBVUw7QUFDRjtBQVJJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQVVBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUFBTjtBQVpNO0VBSEY7SUFJRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQWVKO0FBQ0Y7QUFkSTtFQVJBO0lBU0MsZUFBQTtFQWlCSDtBQUNGO0FBUkU7RUFDRSxTQUFBO0FBVUo7QUFUSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBV047QUFSRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQVVKO0FBVEk7RUFIRjtJQUlGLGFBQUE7RUFZRTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmMWY2O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxufVxuXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XG4gICAgcGFkZGluZzogMDtcbiAgICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICZfX2luZm8ge1xuICAgIGZsZXg6IDQwJTtcbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjNTI1NjVlO1xuICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpe1xuICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWF4LXdpZHRoOiAzOTBweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCl7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICB9XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcblxuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6ICM1MjU2NWU7XG4gICAgfVxuICB9XG5cbiAgJl9fcGljdHVyZSB7XG4gICAgZmxleDogNTUlO1xuICAgICZfX2ltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJl9faWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC05MHB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpe1xuZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6416:
/*!*********************************************************!*\
  !*** ./src/app/home/rewievs/review/review.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewComponent: () => (/* binding */ ReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ReviewComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ReviewComponent_Factory(t) {
    return new (t || ReviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReviewComponent,
    selectors: [["app-review"]],
    inputs: {
      src: "src",
      name: "name",
      review: "review"
    },
    decls: 10,
    vars: 3,
    consts: [[1, "review"], [1, "review__slider"], [1, "img__wrapper"], ["alt", "habib", 1, "review__slider__img", 3, "src"], [1, "review__slider__reviewer"], [1, "review__slider__main"], [1, "review__slider__main__review"], [1, "review__slider__main__review__text"]],
    template: function ReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.review, "\"");
      }
    },
    styles: [".review[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.review__slider[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.review__slider__img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 100%;\n}\n@media only screen and (max-width: 621px) {\n  .review__slider__img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n.review__slider__reviewer[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 15px;\n  font-weight: bold;\n  color: #f48823;\n  cursor: pointer;\n}\n.review__slider__main[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  width: 100%;\n}\n.review__slider__main__review[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 15px rgba(99, 126, 236, 0.1);\n  margin: 0 10px;\n  max-width: 450px;\n  width: 100%;\n  padding: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.review__slider__main__review__text[_ngcontent-%COMP%] {\n  line-height: 22px;\n  text-align: justify;\n  font-size: 18px;\n}\n@media only screen and (max-width: 550px) {\n  .review__slider__main__review__text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.img__wrapper[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n  background-color: #7d86e9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  margin-top: 40px;\n}\n@media only screen and (max-width: 621px) {\n  .img__wrapper[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9yZXdpZXZzL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFBRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFKRjtJQUtJLFlBQUE7SUFDQSxhQUFBO0VBR047QUFDRjtBQURJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdOO0FBRk07RUFDRSxrREFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFJVjtBQUhVO0VBSkY7SUFLSSxlQUFBO0VBTVY7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFERTtFQVZGO0lBV0ksWUFBQTtJQUNBLGFBQUE7RUFJRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDEwMCU7XG4gICZfX3NsaWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJl9faW1nIHtcbiAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjFweCkge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3Jldmlld2VyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZjQ4ODIzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmX19tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAmX19yZXZpZXcge1xuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCByZ2JhKDk5LCAxMjYsIDIzNiwgMC4xKTtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbWdfX3dyYXBwZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDg2ZTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIxcHgpIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9922:
/*!***************************************************!*\
  !*** ./src/app/home/rewievs/rewievs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RewievsComponent: () => (/* binding */ RewievsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review/review.component */ 6416);



function RewievsComponent_app_review_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-review", 8);
  }
  if (rf & 2) {
    const reviewer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", reviewer_r1.src)("name", reviewer_r1.name)("review", reviewer_r1.description);
  }
}
class RewievsComponent {
  constructor() {
    this.currentSlide = 2;
    this.reviewers = [{
      name: 'Med Habib',
      description: 'It was an amazing experience for me, Thanks to the AEA for this opportunity',
      src: './assets/review-1.jpg'
    }, {
      name: 'Sameh Ben Hmida',
      description: ' This intercultural exchange has helped me share experience with other people and discover new amazing country and new ways of dealing with young people.',
      src: './assets/review-22.jpg'
    }, {
      name: 'Marine Desbrun',
      description: '  I spent colorful days in a colorful country, the knowledge gained during the project will be useful to me  ',
      src: './assets/review-3.jpg'
    }, {
      name: 'Emiel Bakker',
      description: 'It was an experience never to be forgotten. Not only did I meet amazing people, but I also learned a lot from them. This gained experience enriched me as a person and would not have been possible without the project',
      src: './assets/review-44.jpg'
    }];
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.goToSlide(2);
  }
  showPrevious() {
    this.moveSlider('left');
  }
  showNext() {
    this.moveSlider('right');
  }
  moveSlider(side) {
    const maxSlides = this.reviewers.length;
    if (side === 'right') {
      if (maxSlides - 1 === this.currentSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.goToSlide(this.currentSlide);
    }
    if (side === 'left') {
      if (this.currentSlide === 0) {
        this.currentSlide = maxSlides - 1;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }
  }
  goToSlide(slideIndex) {
    const reviews = document.querySelectorAll('.reviewers');
    reviews.forEach((review, i) => {
      review.style.transform = `translateX(${200 * (i - slideIndex)}%)`;
    });
  }
  static #_ = this.ɵfac = function RewievsComponent_Factory(t) {
    return new (t || RewievsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RewievsComponent,
    selectors: [["app-reviews"]],
    decls: 9,
    vars: 1,
    consts: [[1, "wrapper"], [1, "review"], [1, "review__title"], [1, "review__parent"], ["src", "./assets/letf-arrow.svg", "alt", "arrow", 1, "review__slider__main__left", 3, "click"], [1, "review__icons"], ["class", "reviewers", 3, "src", "name", "review", 4, "ngFor", "ngForOf"], ["src", "./assets/right-arrow.svg", "alt", "arrow", 1, "review__slider__main__right", 3, "click"], [1, "reviewers", 3, "src", "name", "review"]],
    template: function RewievsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RewievsComponent_Template_img_click_5_listener() {
          return ctx.showPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RewievsComponent_app_review_7_Template, 1, 3, "app-review", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RewievsComponent_Template_img_click_8_listener() {
          return ctx.showNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviewers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _review_review_component__WEBPACK_IMPORTED_MODULE_0__.ReviewComponent],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  position: relative;\n}\n\n.review__title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #52565e;\n  text-align: center;\n  font-weight: bold;\n}\n@media only screen and (max-width: 550px) {\n  .review__title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.review__parent[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n  margin: auto;\n}\n.review__icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  max-width: 480px;\n  overflow: hidden;\n  height: 500px;\n}\n.review__icons__view[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.review__icons__left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n@media only screen and (max-width: 850px) {\n  .review__icons__left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.review__icons__right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media only screen and (max-width: 850px) {\n  .review__icons__right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.reviewers[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: transform 0.6s ease-in-out;\n}\n\n.review__slider__main__left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -100px;\n  top: 80px;\n  cursor: pointer;\n  z-index: 30;\n}\n@media only screen and (max-width: 621px) {\n  .review__slider__main__left[_ngcontent-%COMP%] {\n    width: 40px;\n    left: -30px;\n  }\n}\n\n.review__slider__main__right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -80px;\n  top: 80px;\n  cursor: pointer;\n  z-index: 30;\n}\n@media only screen and (max-width: 621px) {\n  .review__slider__main__right[_ngcontent-%COMP%] {\n    width: 40px;\n    right: -30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9yZXdpZXZzL3Jld2lldnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUNJO0VBTEY7SUFNSSxlQUFBO0VBRUo7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBRUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBQU47QUFDTTtFQUpGO0lBS0ksYUFBQTtFQUVOO0FBQ0Y7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFFTjtBQURNO0VBSkY7SUFLSSxhQUFBO0VBSU47QUFDRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGO0FBR0U7RUFYRjtJQVlJLFdBQUE7SUFDQSxXQUFBO0VBQUY7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGO0FBSUU7RUFWRjtJQVdJLFdBQUE7SUFDQSxZQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJldmlldyB7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM1MjU2NWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gIH1cbiAgJl9fcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgJl9faWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA1MDBweDtcblxuICAgICZfX3ZpZXcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cbiAgICAmX19sZWZ0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3JpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnJldmlld2VycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5yZXZpZXdfX3NsaWRlcl9fbWFpbl9fbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMHB4O1xuICB0b3A6IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMzA7XG4gIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLy8gICB0b3A6IDEzMHB4O1xuICAvLyAgIGxlZnQ6IDMwcHg7XG4gIC8vIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMXB4KSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbn1cbi5yZXZpZXdfX3NsaWRlcl9fbWFpbl9fcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtODBweDtcbiAgdG9wOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDMwO1xuICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC8vICAgdG9wOiAxMzBweDtcbiAgLy8gICByaWdodDogMzBweDtcbiAgLy8gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMXB4KSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6713:
/*!***********************************************!*\
  !*** ./src/app/home/video/video.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoComponent: () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class VideoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function VideoComponent_Factory(t) {
    return new (t || VideoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VideoComponent,
    selectors: [["app-video"]],
    decls: 16,
    vars: 0,
    consts: [[1, "wrapper"], [1, "wrapper__title"], [1, "video__container"], [1, "video__description"], [1, "video__description__text"], [1, "video__description__text__p"], [1, "video__parent", "video__parent--web"], ["height", "538", "src", "https://www.youtube.com/embed/9-hGLN0PJls", "title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video__vid"], [1, "video__parent", "video__parent--mob"], ["height", "538", "src", "https://www.youtube.com/embed/9-hGLN0PJls", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video__vid"]],
    template: function VideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rustavi Wonderland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "article", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A lot of emotions, happiness, love, caring, sharing everything by magic came together from all over the world in Rustavi Wonderland and made a beautiful day for local and international guests \uD83D\uDE42 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Youth festival has been organized in Autumn 2019 in Rustavi, Georgia in cooperation of three international youth exchange and ESC projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The festival was financed by the Erasmus+ program and implemented by the AEA.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  position: relative;\n}\n@media only screen and (max-width: 550px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n.wrapper__title[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 30px;\n  font-weight: bold;\n  color: #52565e;\n  margin-bottom: 100px;\n}\n@media only screen and (max-width: 750px) {\n  .wrapper__title[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .wrapper__title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.video__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 750px) {\n  .video__container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.video__description[_ngcontent-%COMP%] {\n  color: #52565e;\n  text-align: left;\n  margin-bottom: 30px;\n  font-size: 22px;\n  color: #52565e;\n  padding: 0 50px;\n  flex: 40%;\n  line-height: 25px;\n  padding-left: 0;\n}\n@media only screen and (max-width: 750px) {\n  .video__description[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 20px;\n  }\n}\n.video__description__text[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n@media only screen and (max-width: 750px) {\n  .video__description__text[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .video__description__text__p[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .video__description__text__p[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    font-size: 14px;\n  }\n}\n.video__vid[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.video__parent[_ngcontent-%COMP%] {\n  flex: 55%;\n  height: 400px;\n}\n@media only screen and (max-width: 750px) {\n  .video__parent--web[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 750px) {\n  .video__parent--mob[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBSEY7SUFJSSxnQkFBQTtFQUdGO0FBQ0Y7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlKO0FBSEk7RUFQRjtJQVFJLG1CQUFBO0VBTUo7QUFDRjtBQUxJO0VBVkY7SUFXSSxlQUFBO0VBUUo7QUFDRjs7QUFKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQU9KO0FBTkk7RUFIRjtJQUlJLHNCQUFBO0VBU0o7QUFDRjtBQVBFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBU0o7QUFSSTtFQVZGO0lBV0ksVUFBQTtJQUNBLGVBQUE7RUFXSjtBQUNGO0FBVkk7RUFDRSxnQkFBQTtBQVlOO0FBWE07RUFGRjtJQUdJLGVBQUE7RUFjTjtBQUNGO0FBWFE7RUFERjtJQUVJLG1CQUFBO0VBY1I7QUFDRjtBQWJRO0VBSkY7SUFLSSxtQkFBQTtJQUNBLGVBQUE7RUFnQlI7QUFDRjtBQVpFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNKO0FBWkU7RUFDRSxTQUFBO0VBRUEsYUFBQTtBQWFKO0FBWE07RUFERjtJQUVJLGFBQUE7RUFjTjtBQUNGO0FBWE07RUFERjtJQUVJLGFBQUE7RUFjTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICB9XG59XG4udmlkZW8ge1xuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjNTI1NjVlO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBmbGV4OiA0MCU7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAmX19wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3ZpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAmX19wYXJlbnQge1xuICAgIGZsZXg6IDU1JTtcblxuICAgIGhlaWdodDogNDAwcHg7XG4gICAgJi0td2ViIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi0tbW9iIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3533:
/*!***************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class WelcomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WelcomeComponent_Factory(t) {
    return new (t || WelcomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WelcomeComponent,
    selectors: [["app-welcome"]],
    decls: 18,
    vars: 0,
    consts: [[1, "wrapper"], [1, "welcome"], [1, "welcome__left"], [1, "welcome__left-intro"], [1, "welcome__left__title"], [1, "welcome__left__text"], [1, "welcome__left__blur__parent"], ["src", "./assets/Ellipsesmall.svg", "alt", "ellipse", 1, "welcome__left__text__ellipse"], ["src", "./assets/blue_elipse.svg", "alt", "ellipse", 1, "welcome__left__ellipse__mobile"], ["src", "./assets/mobile_points.svg", "alt", "points", 1, "welcome__left__points__mobile"], ["src", "./assets/Group 276.svg", "alt", "points", 1, "welcome__left__points"], ["src", "./assets/Ellipse.svg", "alt", "points", 1, "welcome__left__ellipse-big"], ["src", "./assets/yellow-points.svg", "alt", "points", 1, "welcome__left__points-yellow"], [1, "welcome__left__blur"], [1, "welcome__right"], ["src", "./assets/welcome-22-min.jpg", "alt", "youth organization", 1, "welcome__right__img"]],
    template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A non-governmental organization (NGO) supporting local youth to become active and responsible citizens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7)(10, "img", 8)(11, "img", 9)(12, "img", 10)(13, "img", 11)(14, "img", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n@media only screen and (max-width: 750px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 750px) {\n  .welcome[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.welcome__left[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n}\n.welcome__left-intro[_ngcontent-%COMP%] {\n  margin-right: 120px;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left-intro[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.welcome__left__title[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  font-size: 36px;\n  font-weight: bold;\n  color: #52565e;\n  margin-right: 100px;\n  width: 100%;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__title[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    color: #000;\n  }\n}\n.welcome__left__points__mobile[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -160px;\n  top: 100px;\n  z-index: -2;\n}\n@media only screen and (min-width: 750px) {\n  .welcome__left__points__mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__ellipse__mobile[_ngcontent-%COMP%] {\n  z-index: -2;\n  position: absolute;\n  top: 170px;\n  left: -16.5px;\n}\n@media only screen and (min-width: 750px) {\n  .welcome__left__ellipse__mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  max-width: 500px;\n  font-weight: bold;\n  color: #52565e;\n  line-height: 30px;\n  z-index: 12;\n  margin: auto;\n  margin-top: 50px;\n}\n@media only screen and (max-width: 1100px) {\n  .welcome__left__text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__text[_ngcontent-%COMP%] {\n    margin: auto;\n    margin-bottom: 50px;\n    max-width: 350px;\n    font-size: 16px;\n    font-weight: bold;\n    color: #000;\n  }\n}\n.welcome__left__text__ellipse[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 90px;\n  top: 30px;\n  z-index: -2;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__text__ellipse[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__points[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -425px;\n  top: 80px;\n  z-index: -2;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__points[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__ellipse-big[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50px;\n  z-index: -2;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__ellipse-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__points-yellow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 28px;\n  right: -30px;\n  z-index: -2;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__points-yellow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.welcome__left__blur[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.08);\n  bottom: 0;\n  height: 100%;\n  z-index: -2;\n  position: relative;\n  width: 100%;\n  filter: blur(12px);\n  -webkit-backdrop-filter: brightness(99%);\n          backdrop-filter: brightness(99%);\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__blur[_ngcontent-%COMP%] {\n    filter: blur(2px);\n    -webkit-backdrop-filter: brightness(100%);\n            backdrop-filter: brightness(100%);\n  }\n}\n.welcome__left__blur__parent[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  padding-right: 125px;\n  padding-top: 50px;\n  padding-bottom: 40px;\n  width: 100%;\n  height: 100%;\n  left: 0;\n}\n@media only screen and (max-width: 750px) {\n  .welcome__left__blur__parent[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    z-index: -2;\n  }\n}\n.welcome__right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.welcome__right__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQUU7RUFGRjtJQUlJLGdCQUFBO0VBRUY7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFBRTtFQUhGO0lBSUUsc0JBQUE7RUFHQTtBQUNGO0FBQUU7RUFHRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRCxtQkFBQTtBQUFIO0FBRUs7RUFIRDtJQUlGLGVBQUE7RUFDQTtBQUNGO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFETjtBQUVNO0VBUEY7SUFRRyxtQkFBQTtJQUNBLFdBQUE7RUFDTDtBQUNGO0FBRU07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFSO0FBQ1M7RUFMSDtJQU1JLGFBQUE7RUFFUjtBQUNGO0FBR007RUFLRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQU5SO0FBRlE7RUFERjtJQUVJLGFBQUE7RUFLUjtBQUNGO0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUlNO0VBVkY7SUFXSSxlQUFBO0VBRE47QUFDRjtBQUdNO0VBZEY7SUFlSSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFBTjtBQUNGO0FBQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQVE7RUFMRjtJQU1JLGFBQUE7RUFHUjtBQUNGO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQU07RUFMRjtJQU1JLGFBQUE7RUFHTjtBQUNGO0FBREk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdOO0FBRk07RUFMRjtJQU1JLGFBQUE7RUFLTjtBQUNGO0FBSEk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtOO0FBSk07RUFMRjtJQU1HLGFBQUE7RUFPTDtBQUNGO0FBTEk7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUFPTjtBQU5NO0VBVkY7SUFXSSxpQkFBQTtJQUNBLHlDQUFBO1lBQUEsaUNBQUE7RUFTTjtBQUNGO0FBUE07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQVFSO0FBUFE7RUFaRjtJQWFJLGtCQUFBO0lBQ0EsV0FBQTtFQVVSO0FBQ0Y7QUFKRTtFQUNFLE9BQUE7QUFNSjtBQUpJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNTiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuXG4gICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgfVxuXG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi53ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBcbiAgICB9XG5cbiAgJl9fbGVmdCB7XG5cblxuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYtaW50cm97XG4gICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgXG5cbiAgICAgfVxuICAgIH1cbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM1MjU2NWU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBAbWVkaWEgICBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19wb2ludHN7XG4gICAgICAmX19tb2JpbGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xNjBweDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgei1pbmRleDogLTI7XG4gICAgICAgICBAbWVkaWEgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgICZfX2VsbGlwc2V7XG4gICAgICAmX19tb2JpbGV7XG4gICAgICAgIEBtZWRpYSAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICB9XG5cbiAgICAgICAgei1pbmRleDogLTI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE3MHB4O1xuICAgICAgICBsZWZ0OiAtMTYuNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjNTI1NjVlO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB6LWluZGV4OiAxMjtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgIEBtZWRpYSAgIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgJl9fZWxsaXBzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDkwcHg7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgei1pbmRleDogLTI7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgJl9fcG9pbnRzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC00MjVweDtcbiAgICAgIHRvcDogODBweDtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgIH1cbiAgICB9XG4gICAgJl9fZWxsaXBzZS1iaWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTBweDtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICAmX19wb2ludHMteWVsbG93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMjhweDtcbiAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgICZfX2JsdXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB6LWluZGV4OiAtMjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDk5JSk7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcbiAgICAgICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcblxuICAgICAgICAgICB9XG4gICAgICAmX19wYXJlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgICB6LWluZGV4OiAtMjtcblxuICAgICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBodWU7XG4gICAgfVxuICB9XG4gICZfX3JpZ2h0IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgJl9faW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2719:
/*!******************************************************************************!*\
  !*** ./src/app/home/what-we-do/what-we-do-item/what-we-do-item.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatWeDoItemComponent: () => (/* binding */ WhatWeDoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class WhatWeDoItemComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  readMoreClicked() {
    this.router.navigate(['about']);
  }
  static #_ = this.ɵfac = function WhatWeDoItemComponent_Factory(t) {
    return new (t || WhatWeDoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WhatWeDoItemComponent,
    selectors: [["app-what-we-do-item"]],
    inputs: {
      src: "src",
      title: "title",
      text: "text"
    },
    decls: 18,
    vars: 6,
    consts: [[1, "item", "item--desktop"], ["width", "60px", "alt", "icon", 1, "item__img", 3, "src"], [1, "item__middle"], [1, "item__title"], [1, "item__text", "item__text--desktop"], [1, "item__btn", 3, "click"], [1, "item", "item--mobile"], ["width", "60px", "alt", "icon", 1, "item__img", "item__img--mob", 3, "src"], [1, "item__info"], [1, "item__title", "item__title--mob"], [1, "item__text", "item__text--mob"], [1, "item__btn", "item__btn--mob", 3, "click"]],
    template: function WhatWeDoItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhatWeDoItemComponent_Template_button_click_7_listener() {
          return ctx.readMoreClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhatWeDoItemComponent_Template_button_click_16_listener() {
          return ctx.readMoreClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
      }
    },
    styles: [".item[_ngcontent-%COMP%] {\n  max-width: 310px;\n  height: 440px;\n  min-width: 310px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  text-align: center;\n  align-items: center;\n  box-shadow: 15px 15px 15px rgba(99, 126, 236, 0.2);\n}\n.item__middle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media screen and (max-width: 750px) {\n  .item[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    border: 1px solid #637eec;\n    border-radius: 5px;\n    margin-top: 50px;\n    box-shadow: none;\n    padding: 15px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .item--desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 750px) {\n  .item--mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.item__info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  margin: auto;\n}\n.item__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  max-width: 160px;\n  color: #52565e;\n  text-align: center;\n  align-self: center;\n}\n.item__title--mob[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 20px;\n  color: #000000;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 520px) {\n  .item__title--mob[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.item__img[_ngcontent-%COMP%] {\n  width: 54px;\n}\n.item__img--mob[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-top: 20px;\n}\n.item__text[_ngcontent-%COMP%] {\n  line-height: 25px;\n  padding: 0 30px;\n  color: #52565e;\n  font-size: 18px;\n}\n.item__text--mob[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n@media screen and (max-width: 620px) {\n  .item__text--mob[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    padding: 0 5px;\n    color: #000000;\n  }\n}\n.item__text--desktop[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.item__btn[_ngcontent-%COMP%] {\n  background-color: #637eec;\n  width: 130px;\n  height: 35px;\n  border: 1px solid #637eec;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);\n}\n.item__btn--mob[_ngcontent-%COMP%] {\n  display: block;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS93aGF0LXdlLWRvL3doYXQtd2UtZG8taXRlbS93aGF0LXdlLWRvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQWZGO0lBZ0JJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBR0Y7QUFDRjtBQURJO0VBREY7SUFFSSxhQUFBO0VBSUo7QUFDRjtBQURJO0VBREY7SUFFSSxhQUFBO0VBSUo7QUFDRjtBQURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdKO0FBRkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUlOO0FBRk07RUFORjtJQU9JLGVBQUE7RUFLTjtBQUNGO0FBRkU7RUFDRSxXQUFBO0FBSUo7QUFISTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUtOO0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlKO0FBSEk7RUFDRSxtQkFBQTtBQUtOO0FBSk07RUFGRjtJQUdJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBT047QUFDRjtBQUxJO0VBQ0UsZ0JBQUE7QUFPTjtBQUpFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBTUo7QUFMSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBT04iLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XG4gIG1heC13aWR0aDogMzEwcHg7XG4gIGhlaWdodDogNDQwcHg7XG4gIG1pbi13aWR0aDogMzEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IHJnYmEoOTksIDEyNiwgMjM2LCAwLjIpO1xuICAmX19taWRkbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzdlZWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gICYtLWRlc2t0b3Age1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmLS1tb2JpbGUge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICYtLW1vYiB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9faW1nIHtcbiAgICB3aWR0aDogNTRweDtcbiAgICAmLS1tb2Ige1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgfVxuICAmX190ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgY29sb3I6ICM1MjU2NWU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgICYtLW1vYiB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLS1kZXNrdG9wIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG4gICZfX2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzN2VlYztcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzdlZWM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgJi0tbW9iIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7375:
/*!*********************************************************!*\
  !*** ./src/app/home/what-we-do/what-we-do.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatWeDoComponent: () => (/* binding */ WhatWeDoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _what_we_do_item_what_we_do_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./what-we-do-item/what-we-do-item.component */ 2719);


class WhatWeDoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WhatWeDoComponent_Factory(t) {
    return new (t || WhatWeDoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WhatWeDoComponent,
    selectors: [["app-what-we-do"]],
    decls: 5,
    vars: 9,
    consts: [[1, "activities"], [1, "activities__items"], [3, "text", "title", "src"]],
    template: function WhatWeDoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-what-we-do-item", 2)(3, "app-what-we-do-item", 2)(4, "app-what-we-do-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", " Organizing public campaigns such as eco-friendly activities with local and international youth")("title", "Youth Involvement")("src", "./assets/1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", " AEA is involved in Service Sivique volunteering program supported by the French government")("title", "Volunteering Opportunities")("src", "./assets/2.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", " Indoor and outdoor activities to support  non-formal education in human rights, sports, arts & culture")("title", "Educational Activities")("src", "./assets/3.svg");
      }
    },
    dependencies: [_what_we_do_item_what_we_do_item_component__WEBPACK_IMPORTED_MODULE_0__.WhatWeDoItemComponent],
    styles: [".activities[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n@media only screen and (max-width: 750px) {\n  .activities[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n.activities__rect__parrent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.activities__space-rect[_ngcontent-%COMP%] {\n  background-color: #e1e1e1;\n  width: 100%;\n  max-width: 150px;\n  height: 200px;\n  justify-self: center;\n  margin-right: 130px;\n}\n.activities__items[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 10px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media screen and (min-width: 1750px) {\n  .activities__items[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 750px) {\n  .activities__items[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS93aGF0LXdlLWRvL3doYXQtd2UtZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBTEY7SUFNSSxnQkFBQTtFQUdGO0FBQ0Y7QUFGRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUlKO0FBRkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUlKO0FBSEk7RUFMRjtJQU1JLDZCQUFBO0VBTUo7QUFDRjtBQUxJO0VBUkY7SUFTSSx1QkFBQTtFQVFKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZpdGllcyB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAmX19yZWN0X19wYXJyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgJl9fc3BhY2UtcmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMzBweDtcbiAgfVxuICAmX19pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE3NTBweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIH1cblxuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6228:
/*!******************************************************!*\
  !*** ./src/app/our-project/our-project.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurProjectComponent: () => (/* binding */ OurProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/projects.service */ 9324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/image/image.component */ 9140);




function OurProjectComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 3)(2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 5)(5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-image", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const projectKey_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.projects[projectKey_r2] == null ? null : ctx_r4.projects[projectKey_r2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.projects[projectKey_r2] == null ? null : ctx_r4.projects[projectKey_r2].text1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.projects[projectKey_r2] == null ? null : ctx_r4.projects[projectKey_r2].text2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.projects[projectKey_r2] == null ? null : ctx_r4.projects[projectKey_r2].imageUrl);
  }
}
function OurProjectComponent_ng_container_1_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-image", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 31)(4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 14)(7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const projectKey_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", "about-2__left-img")("src", ctx_r5.projects[projectKey_r2] == null ? null : ctx_r5.projects[projectKey_r2].imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.projects[projectKey_r2] == null ? null : ctx_r5.projects[projectKey_r2].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.projects[projectKey_r2] == null ? null : ctx_r5.projects[projectKey_r2].text1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.projects[projectKey_r2] == null ? null : ctx_r5.projects[projectKey_r2].text2, "");
  }
}
function OurProjectComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OurProjectComponent_ng_container_1_ng_container_1_div_1_Template, 11, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OurProjectComponent_ng_container_1_ng_container_1_div_2_Template, 11, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showLeft(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showRight(i_r3));
  }
}
function OurProjectComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OurProjectComponent_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.projectKeys)("ngForTrackBy", ctx_r0.trackByIndex);
  }
}
class OurProjectComponent {
  constructor(projectService) {
    this.projectService = projectService;
  }
  ngOnInit() {
    this.projects = this.projectService.getProjects();
    if (this.projects) {
      this.projectKeys = Object.keys(this.projects).reverse();
    }
    if (!this.projects) {
      this.subscription = this.projectService.projectsData$.subscribe(projects => {
        this.projects = projects;
        if (this.projects) {
          this.projectKeys = Object.keys(this.projects)?.reverse();
        }
      });
    }
  }
  showLeft(i) {
    if (this.projectKeys.length % 2 === 0) {
      return (i + 2) % 2 === 0;
    }
    return (i + 2) % 2 !== 0;
  }
  showRight(i) {
    if (this.projectKeys.length % 2 === 0) {
      return (i + 2) % 2 !== 0;
    }
    return (i + 2) % 2 === 0;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  trackByIndex(index, item) {
    return index;
  }
  static #_ = this.ɵfac = function OurProjectComponent_Factory(t) {
    return new (t || OurProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_projects_service__WEBPACK_IMPORTED_MODULE_0__.projectsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OurProjectComponent,
    selectors: [["app-our-project"]],
    decls: 39,
    vars: 1,
    consts: [[1, "wrapper"], [4, "ngIf"], [1, "about"], [1, "about__left"], [1, "about__left__title"], [1, "about__left__about-us"], [1, "about__left__about-us__part-1"], [1, "about__left__about-us__part-2"], [1, "about__right"], ["src", "./assets/projects/project-11.jpg", "alt", "about-img", 1, "about__right__img"], [1, "about-2"], [1, "about-2__left"], ["src", "./assets/projects/project-2.jpg", "alt", "about-img", 1, "about-2__left-img"], [1, "about-2__right"], [1, "about-2__right__about-us"], [1, "about-2__right__about-us__part-1"], [1, "about-2__right__about-us__part-2"], [1, "about__left", "about__left--tsalka"], [1, "about__right", "about__right--tsalka"], ["src", "./assets/projects/project-3.jpg", "alt", "about-img", 1, "about__right__img"], [1, "about-2", "about-2--last"], ["src", "./assets/projects/project-4.jpg", "alt", "about-img", 1, "about-2__left-img"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "about received", 4, "ngIf"], ["class", "about-2 received", 4, "ngIf"], [1, "about", "received"], [1, "about__right", "animated-2"], [1, "about__right__img", 3, "src"], [1, "about-2", "received"], [1, "about-2__left", "animated-2"], [1, "about-2__left-img", 3, "className", "src"], [1, "about-2__right", "about-2__right__received"], [1, "about__left__title", "about-2__right__received__title"]],
    template: function OurProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OurProjectComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FEEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Food and Exercise for a healthy Life (FEEL) is an Erasmus+ Youth Exchange project organized in Paphos, Cyprus, March 2020. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " 60 volunteers participated from 11 countries such as Cyprus, Italy, Lithuania, Romania, Greece, Serbia, Ukraine, Georgia, Albania, Morocco and Armenia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13)(17, "p", 14)(18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " The project promoted a healthy lifestyle among young people. The project helped juniors discover their healthy path and exchange experiences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Participants had a great experience. They have got new energy and motivation to move more and be healthy..");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2)(23, "div", 17)(24, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Tsalka Educational Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 5)(27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " A productive meeting was organized by the Tsalka Local Action Group for promoting Erasmus plus and ESC activities through the local youngsters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " The majority of the participants attended the meeting for the first time with the foreign volunteers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20)(34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13)(37, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Long term ESC volunteers from Germany, Poland and Estonia have prepared presentations of their countries and traditions, which has made a great impression on the audience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.projectKeys == null ? null : ctx.projectKeys.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_image_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  margin: 130px 0;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 1050px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding: 0 50px;\n    margin: 100px 0;\n  }\n}\n\n.about[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n@media screen and (max-width: 750px) {\n  .about[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.about__left[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 50px;\n}\n.about__left--tsalka[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n@media screen and (max-width: 750px) {\n  .about__left[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-bottom: 50px;\n  }\n}\n.about__left__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #7d86e9;\n  font-weight: bold;\n}\n@media screen and (max-width: 550px) {\n  .about__left__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.about__left__about-us[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  max-width: 630px;\n  font-size: 22px;\n  color: #52565e;\n  line-height: 30px;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 1050px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 50px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .about__left__about-us[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    font-size: 14px;\n  }\n}\n.about__left__about-us__part-2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n@media screen and (max-width: 590px) {\n  .about__left__about-us__part-2[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.about__right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media screen and (max-width: 950px) {\n  .about__right[_ngcontent-%COMP%] {\n    max-width: 330px;\n    max-height: 300px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about__right[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n  }\n}\n.about__right__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.about__right--tsalka[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n@media screen and (max-width: 945px) {\n  .about__right--tsalka[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n@media screen and (max-width: 945px) and (max-width: 550px) {\n  .about__right--tsalka[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n\n.about-2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.about-2__left[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-2__left-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 380px;\n}\n.about-2--last[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n@media screen and (max-width: 750px) {\n  .about-2[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.about-2__right[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 40px;\n}\n@media screen and (max-width: 590px) {\n  .about-2__right[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n.about-2__right__received[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.about-2__right__received__title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-left: 30px;\n}\n@media screen and (max-width: 590px) {\n  .about-2__right__received__title[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-bottom: 20px;\n  }\n}\n.about-2__right__about-us[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: flex;\n  flex-direction: column;\n  color: #52565e;\n  font-size: 22px;\n  line-height: 30px;\n}\n@media screen and (max-width: 1050px) {\n  .about-2__right__about-us[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about-2__right__about-us[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 50px;\n    font-size: 16px;\n  }\n}\n.about-2__right__about-us__part-2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n@media screen and (max-width: 550px) {\n  .about-2__right__about-us__part-2[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.about-2__left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media screen and (max-width: 1100px) {\n  .about-2__left[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    display: flex;\n  }\n}\n@media screen and (max-width: 590px) {\n  .about-2__left[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n@media screen and (max-width: 950px) {\n  .about-2__left[_ngcontent-%COMP%] {\n    max-width: 330px;\n    max-height: 300px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about-2__left[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100px;\n  }\n}\n@media screen and (max-width: 950px) {\n  .about-2__left-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n@media screen and (max-width: 750px) {\n  .about-2__left[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n.received[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3VyLXByb2plY3Qvb3VyLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBTkY7SUFPSSxlQUFBO0lBQ0EsZUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFFRjtBQURFO0VBSEY7SUFJSSxzQkFBQTtFQUlGO0FBQ0Y7QUFIRTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDRSxnQkFBQTtBQU1OO0FBSkk7RUFORjtJQU9JLFVBQUE7SUFDQSxtQkFBQTtFQU9KO0FBQ0Y7QUFOSTtFQUNFLGVBQUE7RUFJQSxjQUFBO0VBQ0EsaUJBQUE7QUFLTjtBQVRNO0VBRkY7SUFHSSxlQUFBO0VBWU47QUFDRjtBQVJJO0VBQ0UsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVNOO0FBUk07RUFWRjtJQVdJLGVBQUE7SUFDQSxnQkFBQTtFQVdOO0FBQ0Y7QUFWTTtFQWRGO0lBZUksc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQWFOO0FBQ0Y7QUFaTTtFQW5CRjtJQW9CSSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBZU47QUFDRjtBQWRNO0VBQ0UsZ0JBQUE7QUFnQlI7QUFmUTtFQUZGO0lBR0ksZ0JBQUE7RUFrQlI7QUFDRjtBQWJFO0VBQ0UsT0FBQTtBQWVKO0FBWkk7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsaUJBQUE7RUFlSjtBQUNGO0FBZEk7RUFSRjtJQVNJLGVBQUE7SUFDQSxhQUFBO0VBaUJKO0FBQ0Y7QUFaSTtFQUNFLFdBQUE7RUFFQSxZQUFBO0FBYU47QUFYSTtFQUNFLGVBQUE7QUFhTjtBQVpNO0VBRkY7SUFHSSxnQkFBQTtFQWVOO0FBQ0Y7QUFmUTtFQUpKO0lBS00sZUFBQTtFQWtCUjtBQUNGOztBQWJBO0VBUUUsYUFBQTtFQUNBLDhCQUFBO0FBU0Y7QUFqQkU7RUFDRSxXQUFBO0FBbUJKO0FBbEJJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBb0JOO0FBZkU7RUFDRSxnQkFBQTtBQWlCSjtBQWZFO0VBYkY7SUFjSSxhQUFBO0VBa0JGO0FBQ0Y7QUFqQkU7RUFoQkY7SUFpQkksc0JBQUE7RUFvQkY7QUFDRjtBQW5CRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQXFCSjtBQXBCSTtFQUhGO0lBSUksZ0JBQUE7RUF1Qko7QUFDRjtBQXRCSztFQUNDLGFBQUE7QUF3Qk47QUF2Qk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBeUJSO0FBeEJRO0VBSEY7SUFJSSxjQUFBO0lBQ0EsbUJBQUE7RUEyQlI7QUFDRjtBQXRCSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXdCTjtBQXZCTTtFQVBGO0lBUUksZUFBQTtFQTBCTjtBQUNGO0FBekJNO0VBVkY7SUFXSSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBNEJOO0FBQ0Y7QUEzQk07RUFDRSxnQkFBQTtBQTZCUjtBQTVCUTtFQUZGO0lBR0ksZ0JBQUE7RUErQlI7QUFDRjtBQTNCRTtFQUNFLE9BQUE7QUE2Qko7QUE1Qkk7RUFGRjtJQUdJLGdCQUFBO0lBQ0EsYUFBQTtFQStCSjtBQUNGO0FBOUJJO0VBTkY7SUFPSSxlQUFBO0VBaUNKO0FBQ0Y7QUFoQ0k7RUFURjtJQVVJLGdCQUFBO0lBQ0EsaUJBQUE7RUFtQ0o7QUFDRjtBQWxDSTtFQWJGO0lBY0ksZUFBQTtJQUNBLGFBQUE7RUFxQ0o7QUFDRjtBQW5DTTtFQURGO0lBRUksV0FBQTtJQUNBLFlBQUE7RUFzQ047QUFDRjtBQXBDSTtFQXZCRjtJQXdCSSxRQUFBO0VBdUNKO0FBQ0Y7O0FBekJBO0VBQ0UsbUJBQUE7QUE0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG4gIG1hcmdpbjogMTMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgbWFyZ2luOiAxMDBweCAwO1xuICB9XG59XG5cbi5hYm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fbGVmdCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICYtLXRzYWxrYSB7XG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIGNvbG9yOiAjN2Q4NmU5O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgICZfX2Fib3V0LXVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgIG1heC13aWR0aDogNjMwcHg7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAmX19wYXJ0LTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19yaWdodCB7XG4gICAgZmxleDogMTtcbiAgICAvLyBtYXgtd2lkdGg6IDQzMHB4O1xuICAgIC8vIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC8vIG1heC13aWR0aDo2MDBweDtcbiAgICAgIC8vIGhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmLS10c2Fsa2Ege1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ1cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5hYm91dC0yIHtcbiAgJl9fbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi1pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgICB9XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAmLS1sYXN0IHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgICZfX3JlY2VpdmVke1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICZfX3RpdGxle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgfVxuICAgICB9XG5cblxuICAgICZfX2Fib3V0LXVzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBjb2xvcjogIzUyNTY1ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgJl9fcGFydC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2xlZnQge1xuICAgIGZsZXg6IDE7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgICYtaW1nIHtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG4gIH1cblxuICAvLyAmX19yaWdodCB7XG4gIC8vICAgZmxleDogMTtcbiAgLy8gICAmX19pbWcge1xuICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuXG4ucmVjZWl2ZWR7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9453:
/*!*************************************************!*\
  !*** ./src/app/shared/animations/animations.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeInOutAnimation: () => (/* binding */ fadeInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

const fadeInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 9140:
/*!*************************************************!*\
  !*** ./src/app/shared/image/image.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageComponent: () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function ImageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
  }
}
const _c0 = function (a0) {
  return {
    "image-loading": a0
  };
};
class ImageComponent {
  constructor() {
    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  onImageLoad() {
    this.imageLoaded = true;
  }
  static #_ = this.ɵfac = function ImageComponent_Factory(t) {
    return new (t || ImageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageComponent,
    selectors: [["app-image"]],
    inputs: {
      src: "src"
    },
    outputs: {
      loaded: "loaded"
    },
    decls: 2,
    vars: 5,
    consts: [["alt", "about-img", 2, "max-height", "380px", "width", "100%", "height", "100%", 3, "ngClass", "src", "load"], ["class", "animated", 4, "ngIf"], [1, "animated"]],
    template: function ImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageComponent_Template_img_load_0_listener() {
          return ctx.onImageLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageComponent_div_1_Template, 1, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.imageLoaded))("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".image-loading {\n  position: absolute;\n  visibility: hidden;\n}\n\n.animated {\n  display: flex;\n  background: gray;\n  width: 100%;\n  height: 100%;\n  max-height: 380px;\n}\n\n.animated::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 1;\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n  animation: pulse 1.5s ease-in-out infinite;\n  filter: blur(12px);\n}\n\n.animated-2 {\n  position: relative;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQUE7RUFFRjtFQUFBO0lBQ0UsWUFBQTtFQUVGO0VBQUE7SUFDRSxZQUFBO0VBRUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1sb2FkaW5ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmFuaW1hdGVke1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbn1cbi5hbmltYXRlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHB1bHNlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGZpbHRlcjogYmx1cigxMnB4KTtcblxuXG59XG4uYW5pbWF0ZWQtMntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 9324:
/*!********************************************!*\
  !*** ./src/app/shared/projects.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsService: () => (/* binding */ projectsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ 5853);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ 4278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);





class projectsService {
  constructor(http) {
    this.http = http;
    this.imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(_storage__WEBPACK_IMPORTED_MODULE_1__.storage, 'projects/');
    this.projectsData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  checkIfProjects() {
    return this.projects ? true : false;
  }
  getProjects() {
    return this.projects;
  }
  addProjects(projects) {
    this.projects = projects;
  }
  startFetchingProjects(setInfo) {
    this.http.get('https://healthcontrol-76123.firebaseio.com/projects.json').subscribe(res => {
      const projectData = this.addImageUrls(res);
      this.addProjects(projectData);
      this.projectsData$.next(projectData);
    });
  }
  addImageUrls(projectData) {
    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.listAll)(this.imageRef).then(res => {
      try {
        res?.items.forEach(item => {
          if (projectData) {
            Object.keys(projectData)?.forEach(key => {
              if (projectData[key].title === item.name) {
                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(item).then(url => {
                  projectData[key] = {
                    ...projectData[key],
                    imageUrl: url
                  };
                  // console.log(url,'url added')
                });
              }
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
    return projectData;
  }
  static #_ = this.ɵfac = function projectsService_Factory(t) {
    return new (t || projectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: projectsService,
    factory: projectsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4278:
/*!***********************************!*\
  !*** ./src/app/shared/storage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 1482);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ 5376);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 5853);



const firebaseConfig = {
  apiKey: "AIzaSyDtcZLSWw_TZoY8QK4JGl1bx-9cBg-TBHA",
  authDomain: "healthcontrol-76123.firebaseapp.com",
  databaseURL: "https://healthcontrol-76123.firebaseio.com",
  projectId: "healthcontrol-76123",
  storageBucket: "healthcontrol-76123.appspot.com",
  messagingSenderId: "1069123909186",
  appId: "1:1069123909186:web:1e192af66c63e053861fdb",
  measurementId: "G-V4860GNSNG"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map