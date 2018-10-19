webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_list_players_list_component__ = __webpack_require__("./src/app/players-list/players-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_play_game_play_component__ = __webpack_require__("./src/app/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard_component__ = __webpack_require__("./src/app/scorecard/scorecard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_2__players_list_players_list_component__["a" /* PlayersListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'game-play', component: __WEBPACK_IMPORTED_MODULE_4__game_play_game_play_component__["a" /* GamePlayComponent */] },
    { path: 'scorecard', component: __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard_component__["a" /* ScorecardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n    <div class=\"container\" style=\"padding-top: 30px;\">\n        <!-- <app-players-list *ngIf=\"!boolean1\" [(players)]=\"players\" ></app-players-list>\n        <h2 *ngIf=\"boolean1\" style=\"text-align: center;\">sockets are full</h2> -->\n        <router-outlet></router-outlet>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(playersListService) {
        this.playersListService = playersListService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__players_list_service__["a" /* PlayersListService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__players_list_players_list_component__ = __webpack_require__("./src/app/players-list/players-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_play_game_play_component__ = __webpack_require__("./src/app/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questions_list_service__ = __webpack_require__("./src/app/questions-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scorecard_scorecard_component__ = __webpack_require__("./src/app/scorecard/scorecard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__players_list_players_list_component__["a" /* PlayersListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__game_play_game_play_component__["a" /* GamePlayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__scorecard_scorecard_component__["a" /* ScorecardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__players_list_service__["a" /* PlayersListService */], __WEBPACK_IMPORTED_MODULE_11__questions_list_service__["a" /* QuestionsListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-play/game-play.component.css":
/***/ (function(module, exports) {

module.exports = ".opt {\r\n    margin: 5px 5px 0px 0px;\r\n    background-color: #FAFAFA;\r\n    text-align: center;\r\n    border: 1px solid #0D2621;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n.row {\r\n    margin: 0px!important;\r\n    padding: 0px!important;\r\n}\r\n#clock {\r\n    background-color: #22D314;  \r\n    text-align: center;\r\n    margin: 5px 0px;\r\n    font-weight: bold;\r\n    font-size: 20px;   \r\n\r\n}\r\n.card-body{\r\n    padding: 0px 0px 5px 5px!important;\r\n}\r\np {\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    color: #CDCDCD;\r\n}\r\nh5 {\r\n    text-align: center;\r\n}\r\n.toggle {\r\n    background-color: #2ECC40;\r\n}"

/***/ }),

/***/ "./src/app/game-play/game-play.component.html":
/***/ (function(module, exports) {

module.exports = "<p>select an option before timer runs out</p>\n<div class=\"row justify-content-center\">\n  <div id=\"clock\" class=\"col-md-1\">\n    00 : {{time}}\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h5 class=\"card-title\">{{ question.question }}</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"d-flex  bd-highlight mb-3 row justify-content-center\">\n      <div class=\"p-2 bd-highlight opt col-md-3\"\n       (click)=\"selectedAnswer('opt1')\"\n       [ngClass]=\"{'toggle': togglebtn1}\" >\n        {{ question.opt1 }}\n      </div>\n      <div class=\"p-2 bd-highlight opt col-md-3\"\n       (click)=\"selectedAnswer('opt2')\"\n      [ngClass]=\"{'toggle': togglebtn2}\" >\n        {{ question.opt2 }}\n      </div>\n    </div>\n    <div class=\"d-flex  bd-highlight mb-3 row justify-content-center\">\n      <div class=\"p-2 bd-highlight opt col-md-3\"\n       (click)=\"selectedAnswer('opt3')\" \n       [ngClass]=\"{'toggle': togglebtn3}\">\n        {{ question.opt3 }}\n      </div>\n      <div class=\"p-2 bd-highlight opt col-md-3\"\n       (click)=\"selectedAnswer('opt4')\" \n       [ngClass]=\"{'toggle': togglebtn4}\">\n        {{ question.opt4 }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/game-play/game-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_list_service__ = __webpack_require__("./src/app/questions-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePlayComponent = /** @class */ (function () {
    function GamePlayComponent(playersListService, questionsListService, routes) {
        this.playersListService = playersListService;
        this.questionsListService = questionsListService;
        this.routes = routes;
        this.questionNumber = 0;
        this.answer = '';
        this.time = 12;
        this.score = 0;
    }
    GamePlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.question = this.questionsListService.questions[this.questionNumber];
        this.timer = setInterval(function () {
            console.log(_this.time + ' before');
            console.log(_this.time + ' after');
            _this.time--;
            if (_this.time === 0) {
                console.log('main score : ' + _this.score);
                console.log('main time : ' + _this.time);
                console.log('main question : ' + _this.questionNumber);
                if (_this.answer === _this.question.ans) {
                    console.log('score' + _this.score);
                    _this.score++;
                }
                if (_this.questionNumber > 9) {
                    clearInterval(_this.timer);
                    _this.playersListService.finished = true;
                    console.log('finished');
                    _this.playersListService.addToScoreCard(_this.score);
                    _this.routes.navigate(['scorecard']);
                }
                else {
                    console.log(' score : ' + _this.score);
                    console.log(' time : ' + _this.time);
                    console.log(' question : ' + _this.questionNumber);
                    _this.time = 12;
                    _this.answer = '';
                    _this.questionNumber++;
                    _this.question = _this.questionsListService.questions[_this.questionNumber];
                    _this.togglebtn1 = false;
                    _this.togglebtn2 = false;
                    _this.togglebtn3 = false;
                    _this.togglebtn4 = false;
                    console.log('af score : ' + _this.score);
                    console.log('af time : ' + _this.time);
                    console.log('af question : ' + _this.questionNumber);
                }
            }
        }, 1000);
    };
    GamePlayComponent.prototype.selectedAnswer = function (ans) {
        this.answer = ans;
        if (ans === 'opt1') {
            this.togglebtn1 = true;
            this.togglebtn2 = false;
            this.togglebtn3 = false;
            this.togglebtn4 = false;
        }
        else if (ans === 'opt2') {
            this.togglebtn2 = true;
            this.togglebtn1 = false;
            this.togglebtn3 = false;
            this.togglebtn4 = false;
        }
        else if (ans === 'opt3') {
            this.togglebtn3 = true;
            this.togglebtn1 = false;
            this.togglebtn2 = false;
            this.togglebtn4 = false;
        }
        else {
            this.togglebtn4 = true;
            this.togglebtn1 = false;
            this.togglebtn2 = false;
            this.togglebtn3 = false;
        }
    };
    GamePlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-play',
            template: __webpack_require__("./src/app/game-play/game-play.component.html"),
            styles: [__webpack_require__("./src/app/game-play/game-play.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__players_list_service__["a" /* PlayersListService */],
            __WEBPACK_IMPORTED_MODULE_2__questions_list_service__["a" /* QuestionsListService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], GamePlayComponent);
    return GamePlayComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.ng-valid {\r\n    border: 1px solid green;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-sm-4\">\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" >\n        <div class=\"form-group\" >\n          <input type=\"text\" class=\"form-control\" placeholder=\"name\"\n            id=\"username\"\n            [(ngModel)]=\"username\"\n            name=\"username\"\n            required >\n        </div>\n        <div class=\"form-group\" >\n          <button class=\"btn btn-secondary btn-block\" type=\"submit\" \n            [disabled]=\"!f.valid\"\n            [ngClass]=\"{'btn-outline-success': f.valid}\" >LOGIN</button>\n        </div>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(routes, playersListService) {
        this.routes = routes;
        this.playersListService = playersListService;
        this.username = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.playersListService.onLogin(this.username);
        this.routes.navigate(['players']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__players_list_service__["a" /* PlayersListService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light justify-content-center\" style=\"background-color: #13977B\">\n  <div class=\"container\">\n    <span class=\"navbar-brand mb-0 h1\" style=\"float: left;\">QUIZ</span>\n    <span style=\"float: right;\">{{ msg }}</span>\n    <div class=\"clearfix\"></div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(playersListService) {
        this.playersListService = playersListService;
        this.msg = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersListService.name.subscribe(function (data) {
            _this.msg = 'Hi! ' + data;
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__players_list_service__["a" /* PlayersListService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/players-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayersListService = /** @class */ (function () {
    function PlayersListService(routes) {
        this.routes = routes;
        this.started = false;
        this.username = '';
        this.count = 0;
        this.name = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.finished = false;
        // this.socket = io.connect('http://localhost:3000');
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    PlayersListService.prototype.onLogin = function (username) {
        console.log('connected: ' + this.socket.id);
        this.username = username;
        this.name.next(username);
        this.socket.emit('addPlayer', {
            id: this.socket.id,
            username: username,
            status: 'not started',
            score: 0
        });
    };
    PlayersListService.prototype.setPlayers = function (data) {
        this.players = data;
    };
    PlayersListService.prototype.addToScoreCard = function (score) {
        this.socket.emit('updateScoreCard', {
            id: this.socket.id,
            username: this.username,
            score: score
        });
    };
    PlayersListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PlayersListService);
    return PlayersListService;
}());



/***/ }),

/***/ "./src/app/players-list/players-list.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 5px 0px;    \r\n}\r\n\r\n.self {\r\n    background-color: darkseagreen;\r\n}\r\n\r\np{\r\n    color: darkgrey;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/players-list/players-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-sm-center\">\n  <div class=\"col-sm-7\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\"\n        *ngFor=\"let player of players\" [ngClass]=\"{'self': player.id===playersListService.socket.id}\">\n        <h6> {{ player.username }} </h6>\n        <span class=\"badge\"\n            [ngClass]=\"{'badge-danger': player.status === 'not started', 'badge-success': player.status === 'started'}\">\n            {{ player.status }}\n        </span>\n      </li>\n    </ul>\n      <button class=\"btn btn-outline-success btn-block\" (click)=\"onStart()\" [disabled]=\"!visibleStartBtn\">Start</button> \n  </div>\n</div>\n<div class=\"row justify-content-center\">\n  <div class=\"col-sm-8\">\n    <p>atleast 2 players should participate to start the game</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/players-list/players-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersListComponent = /** @class */ (function () {
    function PlayersListComponent(playersListService, routes) {
        this.playersListService = playersListService;
        this.routes = routes;
        this.selfClass = false;
        this.visibleStartBtn = false;
    }
    PlayersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersListService.socket.on('playersList', function (data) {
            _this.players = data;
            _this.playersListService.setPlayers(data);
            _this.players.forEach(function (obj) {
                if (obj.id === _this.playersListService.socket.id) {
                    _this.selfClass = true;
                }
            });
            if (_this.players.length > 1) {
                _this.visibleStartBtn = true;
            }
        });
        this.playersListService.socket.on('startGame', function () {
            setTimeout(function () {
                if (!_this.playersListService.finished) {
                    _this.routes.navigate(['game-play']);
                }
            }, 500);
        });
    };
    PlayersListComponent.prototype.onStart = function () {
        var _this = this;
        this.players.forEach(function (obj, index) {
            var status;
            if (obj.id === _this.playersListService.socket.id) {
                obj.status = 'started';
                _this.playersListService.socket.emit('onStart', _this.players);
            }
        });
    };
    PlayersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-players-list',
            template: __webpack_require__("./src/app/players-list/players-list.component.html"),
            styles: [__webpack_require__("./src/app/players-list/players-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__players_list_service__["a" /* PlayersListService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PlayersListComponent);
    return PlayersListComponent;
}());



/***/ }),

/***/ "./src/app/questions-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionsListService = /** @class */ (function () {
    function QuestionsListService() {
        this.questions = [
            {
                question: ' Which is the best assistant in todays world? ',
                opt1: 'Cortana',
                opt2: 'Ok Google',
                opt3: 'Siri',
                opt4: 'Alexa',
                ans: 'opt2'
            },
            {
                question: ' Who is the present PRESIDENT of INDIA ? ',
                opt1: 'APJ ABDUL KALAM',
                opt2: 'ARAVIND KEJRIWAL',
                opt3: 'PAWAN KALYAN',
                opt4: 'RAMNATH KOVIND',
                ans: 'opt4'
            },
            {
                question: ' Which is the best water world in HYD? ',
                opt1: 'Ocean park',
                opt2: 'Mount oppera',
                opt3: 'Wonderla',
                opt4: 'Jalavihar',
                ans: 'opt3'
            },
            {
                question: ' Which acts like a fastest Switching device ? ',
                opt1: 'MOSFET',
                opt2: 'SCR',
                opt3: 'BT',
                opt4: 'P-N',
                ans: 'opt1'
            },
            {
                question: 'What is the future of the software world? ',
                opt1: 'A.I',
                opt2: 'J.S',
                opt3: 'i/o',
                opt4: 'SQL',
                ans: 'opt1'
            },
            {
                question: ' Who is the Captain of Women indian cricket team? ',
                opt1: 'Smrithi Mandhana',
                opt2: 'Mithali raj',
                opt3: 'shikha pandey',
                opt4: 'Veda krishnamurthy',
                ans: 'opt2'
            },
            {
                question: ' What is the lates version in MIUI? ',
                opt1: 'V9.2.3.0LXIMIEK',
                opt2: '7.11.16',
                opt3: 'V9.55.0.NDKMIFA',
                opt4: 'V9.5.5.15.0.ODGCNFA',
                ans: 'opt2'
            },
            {
                question: 'Who is the fastest runner in the world? ',
                opt1: 'Asaf powell',
                opt2: 'Tyson Gay',
                opt3: 'Ussain Boult',
                opt4: 'Yohan BLake',
                ans: 'opt3'
            },
            {
                question: ' Who is the Cheapest sold player in IPL?',
                opt1: 'A S Kathuria',
                opt2: 'Ankit Sharma',
                opt3: 'Mitchell Santner',
                opt4: 'Andrew Tye',
                ans: 'opt2'
            },
            {
                question: 'The percentage doesnot evaluate the heights of the person this quote said by the.....? ',
                opt1: 'William shakespreare',
                opt2: 'Newton',
                opt3: 'Sesank Govindaraju',
                opt4: 'Charles Dickens',
                ans: 'opt3'
            },
            {
                question: ' Who is known as 360 degrees player in the cricket world? ',
                opt1: 'MSD',
                opt2: 'Mithali raj',
                opt3: 'ABD',
                opt4: 'Virat Kohli',
                ans: 'opt3'
            },
            {
                question: ' Which Add got best Advertisment award since 2015 ? ',
                opt1: 'Hotstar',
                opt2: 'Airtel',
                opt3: 'Cricbuzz',
                opt4: 'Imperial Blue',
                ans: 'opt2'
            },
            {
                question: ' What is the next generation of INTEL core proccesor? ',
                opt1: '6th Gen',
                opt2: '7th Gen',
                opt3: '8th Gen',
                opt4: '9th Gen',
                ans: 'opt3'
            },
            {
                question: ' Which Country is famous for cotton? ',
                opt1: 'USA',
                opt2: 'INDIA',
                opt3: 'CHINA',
                opt4: 'PAKISTAN',
                ans: 'opt2'
            },
        ];
    }
    QuestionsListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionsListService);
    return QuestionsListService;
}());



/***/ }),

/***/ "./src/app/scorecard/scorecard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scorecard/scorecard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-sm-8\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\"\n        *ngFor=\"let player of players\" >\n        {{ player?.username }}\n        <span class=\"badge badge-primary badge-pill\">{{ player?.score }}</span>\n      </li>\n    </ul>\n    <div class=\"row justify-content-center\" style=\"margin-top: 10px;\">\n      <div class=\"col-sm-6\"><button class=\"btn btn-success btn-block\" (click)=\"onExit()\">EXIT</button></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/scorecard/scorecard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorecardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players_list_service__ = __webpack_require__("./src/app/players-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScorecardComponent = /** @class */ (function () {
    function ScorecardComponent(playersListService, routes) {
        this.playersListService = playersListService;
        this.routes = routes;
        this.count = 0;
    }
    ScorecardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersListService.socket.on('scoreCard', function (data) {
            _this.players = data;
        });
    };
    ScorecardComponent.prototype.onExit = function () {
        this.playersListService.finished = false;
        this.playersListService.socket.close();
        this.routes.navigate(['login']);
    };
    ScorecardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scorecard',
            template: __webpack_require__("./src/app/scorecard/scorecard.component.html"),
            styles: [__webpack_require__("./src/app/scorecard/scorecard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__players_list_service__["a" /* PlayersListService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ScorecardComponent);
    return ScorecardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map