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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <header>\n    <div class=\"row mx-0\">\n      <!-- rayan  -->\n      <div class=\"col-sm-4 black-bg white-color d-flex align-items-center\">\n        <div class=\"py-3 container\">\n          <i class=\"fa fa-user mr-2 purple-color\"></i>\n          Ray<span class=\"purple-color\">an</span> \n          Maj<span class=\"purple-color\">ed</span>\n        </div>\n      </div>\n      <!-- search -->\n      <div class=\"col-sm-8 white-bg\">\n        <div class=\"col-sm-5 py-3\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"search-input\">\n                <i class=\"fa fa-search\"></i>\n              </span>\n            </div>\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              placeholder=\"Search\" \n              aria-label=\"Search\" \n              aria-describedby=\"search-input\"\n              [(ngModel)]=\"search\"\n              (ngModelChange)=\"searchContent($event)\"\n              >\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <section>\n    <div class=\"row mx-0\">\n      <!-- filters -->\n      <aside class=\"col-sm-4 lighterblack-bg white-color\">\n        <app-filters\n        (filtersOnChange)=\"filtersChanged($event)\">\n        </app-filters>\n      </aside>\n      <!-- content -->\n      <div class=\"col-sm-8 py-3\">\n        <app-content></app-content>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/card/card.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/card/card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [href]=\"cardContent.url\" target='_blank' class=\"d-block p-3 my-2 cardbox rounded-sm\">\n\t<span class=\"pill\">{{cardContent.tag}}</span>\n\t<p class=\"my-2\">{{cardContent.title}}</p>\n\t<p class=\"my-2 small-titles gray-color\">\n\t\t<i class=\"fa fa-clock\"></i>\n\t\t{{cardContent.publishedDate}}\n\t</p>\n</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/content.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0\">\n\t<!-- title -->\n\t<div class=\"col-sm-12\">\n\t\t<h5 class=\"gray-color\">News</h5>\n\t</div>\t\n\n\t<!-- cards -->\n  <app-card\n    class=\"col-sm-6\"\n    *ngFor=\"let card of filteredContent()\"\n    [cardElt]=\"card\"\n  \t[search]=\"search\"\n  >\n  </app-card>\n   \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/filters/filters.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filters/filters.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-3 container\">\n\t<!-- date filter -->\n\t<div class=\"date-filter\">  \n\t\t<div class=\"small-titles mb-2\">\n\t\t\t<i class=\"fa fa-clock purple-color mr-2\"></i> \n\t\t\tDate Filter\n\t\t</div>\t\t\n\t\t<div class=\"input-group\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<button class=\"btn btn-primary input-group-text calendar\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t<i class=\"fa fa-calendar\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<input class=\"form-control\" \n\t\t\tplaceholder=\"yyyy-mm-dd\"\n\t\t\tname=\"dp\"\n\t\t\t[(ngModel)]=\"datePicker\"\n\t\t\t(ngModelChange)=\"setDate($event)\"\n\t\t\tngbDatepicker\n\t\t\t[footerTemplate]=\"footerTemplate\"\n\t\t\t#d=\"ngbDatepicker\" />\n\t\t</div>\n\t</div>\n\t<!-- seperator -->\n \t<hr/>\n \t<!-- topic filter -->\n \t<div class=\"topic-filter\">  \n\t\t<div class=\"small-titles mb-2\">\n\t\t\t<i class=\"fa fa-newspaper purple-color mr-2\"></i> \n\t\t\tTopic Filter\n\t\t</div>\t\t\n\t\t<div class=\"custom-control custom-checkbox\">\n\t\t    <input \n\t\t    type=\"checkbox\" \n\t\t    class=\"custom-control-input\" \n\t\t    name=\"topics\" \n\t\t    id=\"debate\" \n\t\t    value=\"debate\"\n\t\t    (change)=\"onCheckboxChange($event, 'debate')\"\n\t\t    />\n\t\t    <label class=\"custom-control-label\" for=\"debate\">\n\t\t    \tDebate\n\t\t    </label>\n\t\t</div>\n\t\t<div class=\"custom-control custom-checkbox\">\n\t\t    <input \n\t\t    type=\"checkbox\" \n\t\t    name=\"topics\" \n\t\t    class=\"custom-control-input\" \n\t\t    id=\"economy\" \n\t\t    value=\"economy\"\n\t\t    (change)=\"onCheckboxChange($event, 'economy')\"\n\t\t    />\n\t\t    <label class=\"custom-control-label\" for=\"economy\">\n\t\t    \tEconomy\n\t\t\t</label>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 576px) {\n  aside {\n    min-height: calc(100vh - 70px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvcm8vRGVza3RvcC9hbmd1bGFyLXByb2ovbmV3cy1saXN0aW5nL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQztJQUNDLDhCQUFBO0VDQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG9uIGJyZWFrIHBvaW50IG9mIHNtXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuXHRhc2lkZXtcblx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHRcblx0fVxufSIsIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBhc2lkZSB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'proximie';
        /*
          * Helper function to update the search of the content string
        */
        this.searchContent = (search) => {
            // update the content search
            this.contentRef.search = search;
        };
        /*
        * Helper function filter data
        */
        this.filtersChanged = (e) => {
            this.contentRef.fetchData('&' + e.filters);
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], { static: false })
], AppComponent.prototype, "contentRef", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _content_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/card/card.component */ "./src/app/content/card/card.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["FiltersComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
            _content_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/card/card.component.scss":
/*!**************************************************!*\
  !*** ./src/app/content/card/card.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/card/card.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/card/card.component.ts ***!
  \************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cardElt')
], CardComponent.prototype, "cardContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "search", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/content/card/card.component.scss")]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.service */ "./src/app/content/content.service.ts");



let ContentComponent = class ContentComponent {
    constructor(_contentService) {
        this._contentService = _contentService;
        this.search = '';
        this.content = [];
        /*
          * Helper function filter with searched content
        */
        this.filteredContent = () => {
            // if no search then return all
            if (!this.search.trim())
                return this.content;
            // else show only if title exists in search
            return this.content.filter(cardContent => cardContent.title.toLowerCase().indexOf(this.search.trim().toLowerCase()) > -1);
        };
        /*
          * Helper function to fetch data
        */
        this.fetchData = (queryStr = '') => {
            this._contentService.getContent(queryStr)
                .subscribe((data) => {
                this.content = data;
            });
        };
    }
    ngOnInit() {
        this.fetchData();
    }
};
ContentComponent.ctorParameters = () => [
    { type: _content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }
];
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html"),
        styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/content/content.service.ts":
/*!********************************************!*\
  !*** ./src/app/content/content.service.ts ***!
  \********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ContentService = class ContentService {
    constructor(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this._url = 'https://content.guardianapis.com/search?api-key=test&tag=politics/politics';
    }
    getContent(queryStr = '') {
        // returns an Observable array of content
        return this.http.get(this._url + queryStr)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            // declared as const so that i dont re-assign it
            const res = [];
            // check all data exists before proccessing
            if (!(response && response.response && response.response.results && response.response.results.length))
                return res;
            const dataReturned = response.response.results;
            // at this stage, im sure all data i need is there
            for (const key in dataReturned) {
                // format the date returned
                let date = dataReturned[key].webPublicationDate;
                try {
                    date = new Date(date);
                    date = this.datePipe.transform(date, 'yyyy-MM-dd');
                }
                catch (error) {
                    console.error(error);
                }
                res.push({
                    title: dataReturned[key].webTitle,
                    publishedDate: date,
                    url: dataReturned[key].webUrl,
                    tag: dataReturned[key].pillarName
                });
            }
            return res;
        }));
    }
};
ContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
ContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContentService);



/***/ }),

/***/ "./src/app/filters/filters.component.scss":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let FiltersComponent = class FiltersComponent {
    constructor(calendar) {
        this.calendar = calendar;
        this.filtersEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.today = this.calendar.getToday();
        this.date = '';
        this.topics = [];
        this.onCheckboxChange = (e, type) => {
            const state = e.target.checked;
            const typeIndex = this.topics.indexOf(type);
            if (state) {
                // add the selected to array if it doesnt exist
                if (typeIndex > -1)
                    return;
                this.topics.push(type);
            }
            else {
                // remove the type from array if it exists
                if (typeIndex === -1)
                    return;
                this.topics.splice(typeIndex, 1);
            }
            this.emitFilters();
        };
        this.emitFilters = () => {
            let filters = '';
            // &q=debate%20AND%20economy
            if (this.date)
                filters += 'from-date=' + this.date;
            if (this.topics.length) {
                if (filters)
                    filters += '&';
                filters += 'q=' + this.topics.join('%20AND%20');
            }
            this.filtersEvent.emit({ filters: filters });
        };
        this.setDate = (date) => {
            this.date = date.year + '-' + date.month + '-' + date.day;
            this.emitFilters();
        };
    }
    ngOnInit() {
    }
};
FiltersComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('filtersOnChange')
], FiltersComponent.prototype, "filtersEvent", void 0);
FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filters',
        template: __webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/filters/filters.component.html"),
        styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/filters/filters.component.scss")]
    })
], FiltersComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roro/Desktop/angular-proj/news-listing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map