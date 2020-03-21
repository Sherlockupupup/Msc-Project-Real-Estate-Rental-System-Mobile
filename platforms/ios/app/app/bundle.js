require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["Address", "$delegate"],

  // methods: {
  //         console.log(selectedProperty);
  // },
  data() {
    return {
      estates: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _PropertyDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue");
/* harmony import */ var _ShowProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ShowProperty.vue");
/* harmony import */ var _ShowBedroom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ShowBedroom.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Myrentals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Myrentals.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onNavigatedTo: function onNavigatedTo() {
      this.username = global.username;
    },
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log(88);
      console.log("Property selected: " + args.item.propertytitle);
      console.log(88);
      this.$navigateTo(_PropertyDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedProperty: args.item,
          $delegate: this
        }
      });
    },
    onShowProperty: function onShowProperty(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Estate selected:" + args.item.estate);

      if (args.index == 0) {
        this.send = this.estates.filter(function (e) {
          //send means to send the array to the further page.
          return e.Estate == "Gold Coast";
        });
      } else if (args.index == 1) {
        this.send = this.estates.filter(function (e) {
          return e.Estate == "City One";
        });
      } else if (args.index == 2) {
        this.send = this.estates.filter(function (e) {
          return e.Estate == "Festival City";
        });
      } else if (args.index == 3) {
        this.send = this.estates.filter(function (e) {
          return e.Estate == "Taikoo Shing";
        });
      } else if (args.index == 4) {
        this.send = this.estates.filter(function (e) {
          return e.Estate == "Yau Ma Tei";
        });
      } else if (args.index == 5) {
        this.send = this.estates.filter(function (e) {
          return e.Estate == "Calson Court";
        });
      }

      this.$navigateTo(_ShowProperty__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          send: this.send,
          //the props here must match the props of next page "ShowProperty".
          $delegate: this
        }
      });
    },
    onShowBedroom: function onShowBedroom(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Bedroom selected:" + args.item.propertytitle);

      if (args.index == 0) {
        //第一行
        this.bedroomsList = this.estates.filter(function (e) {
          //send means to send the array to the further page.
          return e.Bedrooms <= 2;
        });
      } else {
        this.bedroomsList = this.estates.filter(function (e) {
          return e.Bedrooms >= 3;
        });
      }

      this.$navigateTo(_ShowBedroom__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          bedroomsList: this.bedroomsList,
          //the props here must match the props of next page "ShowBedroom".
          $delegate: this
        }
      });
    },
    onLogin: function () {
      var _onLogin = _asyncToGenerator(function* (args) {
        console.log(111);
        console.log(global.username); //the value here is not empty now. It is undefined.

        if (global.username == "") {
          // judge whether the 'global.username' is empty.
          this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
            transition: {},
            transitionIOS: {},
            transitionAndroid: {},
            props: {
              $delegate: this
            }
          });
        } else {
          var data = yield confirm("confirm log out?");

          if (data) {
            global.username = ""; // to assign an empty value to 'global.username' .

            this.username = "";
          } else {
            alert("cancelled");
          } // confirm("wanna log out?");
          // alert("wanna log out?");  // still has some problem here. completed!

        }
      });

      function onLogin(_x) {
        return _onLogin.apply(this, arguments);
      }

      return onLogin;
    }(),
    onMyrentals: function () {
      var _onMyrentals = _asyncToGenerator(function* (args) {
        if (global.username) {
          var response = yield fetch(global.rootURL + "/user/manages", {
            method: "GET",
            credentials: "same-origin"
          });

          if (response.ok) {
            this.myrentalsList = yield response.json();
            console.log(3);
            console.log(JSON.stringify(this.myrentalsList));
          } else {
            console.log(response.statusText);
          }

          this.$navigateTo(_Myrentals__WEBPACK_IMPORTED_MODULE_4__["default"], {
            transition: {},
            transitionIOS: {},
            transitionAndroid: {},
            props: {
              myrentalsList: this.myrentalsList.manages,
              $delegate: this
            }
          });
          console.log(22);
          console.log(this.myrentalsList.manages);
        } else {
          yield confirm("login first.");
        }
      });

      function onMyrentals(_x2) {
        return _onMyrentals.apply(this, arguments);
      }

      return onMyrentals;
    }()
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var response = yield fetch(global.rootURL + "/Estate/json", {
        method: "GET",
        credentials: "same-origin"
      });

      if (response.ok) {
        _this.estates = yield response.json();
        console.log(JSON.stringify(_this.estates));
      } else {
        console.log(response.statusText);
      }

      _this.highlighted = _this.estates.filter(function (e) {
        return e.Highlighted == "on";
      });
    })();
  },

  data() {
    return {
      highlighted: [],
      username: global.username,
      myrentalsList: [],
      estates: [],
      locations: [{
        Area: "So Kwun Wat",
        ChineseName: "香港黃金海岸",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "New Territories North-west",
        Latitude: "22.3673",
        Longitude: "113.9944",
        Name: "Gold Coast",
        NoBlocks: 20,
        NoUnits: "2,052"
      }, {
        Area: "Sha Tin",
        ChineseName: "沙田第一城",
        Completed: "1981-1988",
        Developer: "New World Development\nHenderson Land Development nSun Hung Kai Properties nCheung Kong Holdings ",
        District: "New Territories East ",
        Latitude: "22.386389",
        Longitude: "114.203889",
        Name: "City One",
        NoBlocks: 52,
        NoUnits: "10,642"
      }, {
        Area: "Tai Wai",
        ChineseName: "名城",
        Completed: "2010–2012",
        Developer: "Cheung Kong Holdings\nMTR Corporation",
        District: "New Territories East",
        Latitude: "22.3692",
        Longitude: "114.1743",
        Name: "Festival City",
        NoBlocks: 12,
        NoUnits: "4,304"
      }, {
        Area: "Quarry Bay",
        ChineseName: "太古城",
        Completed: "1970s",
        Developer: "Swire",
        District: "Hong Kong Island",
        Latitude: "22.2863",
        Longitude: "114.2176",
        Name: "Taikoo Shing",
        NoBlocks: 61,
        NoUnits: "12,698"
      }, {
        Area: "Yau Ma Tei",
        ChineseName: "油麻地",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "Kooloon",
        Latitude: "22.3102705106",
        Longitude: "114.1705424753",
        Name: "Yau Ma Tei",
        NoBlocks: 40,
        NoUnits: "2,072 "
      }, {
        Area: "Kooloon City",
        ChineseName: "启城轩",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "Kooloon City",
        Latitude: "22.3298657855",
        Longitude: "114.1926068369",
        Name: "Calson court",
        NoBlocks: 1,
        NoUnits: "22 "
      }],
      numOfBedrooms: [{
        num: "bedrooms<=2"
      }, {
        num: "bedrooms>=3"
      }]
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onTapLogin() {
      var _this = this;

      return _asyncToGenerator(function* () {
        console.log(_this.username + _this.password);
        var response = yield fetch(global.rootURL + "/user/login", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body: "username=" + encodeURIComponent(_this.username) + "&password=" + encodeURIComponent(_this.password)
        });
        console.log(1);
        console.log(response.statusText);

        if (response.ok) {
          global.username = _this.username;
          console.log(global.username);

          _this.$navigateBack();
        } else if (response.status == 401) {
          //Wrong password
          var data = yield response.text();
          yield confirm(data);
        } else {
          yield confirm(response.statusText);
        }
      })();
    }

  },
  props: ["$delegate"],

  data() {
    return {// username:"",
      // password: ""
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Myrentals.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Propertyselected:" + args.item.propertytitle);
      this.$navigateTo(_PropertyDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedProperty: args.item,
          $delegate: this
        }
      });
    }
  },
  props: ["myrentalsList", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/PropertyDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // onNavigatedTo: function() {
    //     this.username = global.username;
    // },
    onAddress: function onAddress(args) {
      if (this.selectedProperty.Estate == "Gold Coast") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "Gold Coast";
        });
      } else if (this.selectedProperty.Estate == "City One") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "City One";
        });
      } else if (this.selectedProperty.Estate == "Festival City") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "Festival City";
        });
      } else if (this.selectedProperty.Estate == "Taikoo Shing") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "Taikoo Shing";
        });
      } else if (this.selectedProperty.Estate == "Yau Ma Tei") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "Yau Ma Tei";
        });
      } else if (this.selectedProperty.Estate == "Calson Court") {
        this.sendlocations = this.locations.filter(function (l) {
          return l.Name == "Calson Court";
        });
      }

      this.$navigateTo(_Address__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          Address: this.sendlocations[0].Address,
          $delegate: this
        }
      });
    },

    onButtonTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        console.log("id:" + _this.selectedProperty.id); // var response = await fetch(
        //     global.rootURL +
        //     "/Estate/" +
        //     this.selectedProperty.id +
        //     "/shows", {
        //         method: "GET",
        //         credentials: "same-origin"
        //     }
        // );
        // if (response.ok) {
        //     this.shows = await response.json();
        //     console.log(JSON.stringify(this.shows));
        //     console.log(1111);
        //     console.log("length:" + this.shows.length);
        // } else {
        //     console.log(response.statusText);
        // }
        // var res = await fetch(global.rootURL + "/user/manages", {
        //     method: "GET",
        //     credentials: "same-origin"
        // });
        // if (res.ok) {
        //     this.myrentalsList = await res.json();
        //     console.log(911);
        // } else {
        //     console.log(res.statusText);
        // }
        // this.send = this.myrentalsList.manages.filter(
        //     function(e) {
        //         return e.id == this.selectedProperty.id;
        //     }.bind(this)
        // );
        // console.log(1997);

        if (_this.buttonText == "full") {
          console.log("full");
        } else if (_this.buttonText == "Move-out") {
          _this.onMoveout(); // this.buttonText = "Move-in";

        } else if (_this.buttonText == "Move-in") {
          _this.onMovein(); // this.buttonText = "Move-out";

        } // if (this.shows.length >= this.selectedProperty
        //     .ExpectedTenants) {
        //     //判断full
        //     this.buttonText = "full";
        // } else if (global.username != "") {
        //     //判断是否登录
        //     if (this.send.length > 0) {
        //         this.buttonText = "Move-out";
        //         this.onMoveout();
        //         this.buttonText = "Move-in";
        //     } else {
        //         this.buttonText = "Move-in";
        //         this.onMovein();
        //         this.buttonText = "Move-out";
        //     }
        // } else {
        //     await confirm("login first.");
        // }

      })();
    },

    onMovein() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var r = yield confirm("Confirm move-in?");

        if (_this2.showsList.shows.length < _this2.selectedProperty.ExpectedTenants) {
          if (r) {
            var response = yield fetch(global.rootURL + "/Estate/corent/" + _this2.selectedProperty.id, {
              method: "POST",
              credentials: "same-origin"
            });

            if (response.ok) {
              var data = yield response.json();
              var result = yield confirm({
                title: "Confirm",
                message: data.message,
                okButtonText: "Yes",
                cancelButtonText: "Cancel"
              });

              if (result) {
                _this2.buttonText = "Move-out";
              }
            }
          } else if (response.status == 409) {
            var data = yield response.text();
            yield confirm(data);
          } else {
            console.log(111111);
            alert(response.status + ": " + response.statusText);
          }
        } else {
          alert("Already full.");
        }
      })();
    },

    onMoveout() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        var r = yield confirm("Confirm move-out?");

        if (r) {
          var response = yield fetch(global.rootURL + "/Estate/cancel/" + _this3.selectedProperty.id, {
            method: "POST",
            credentials: "same-origin"
          });

          if (response.ok) {
            var data = yield response.json();
            var result = yield confirm({
              title: "Confirm",
              message: data.message,
              okButtonText: "Yes",
              cancelButtonText: "Cancel"
            });

            if (result) {
              _this3.buttonText = "Move-in";
            }
          } else if (response.status == 409) {
            var data = yield response.text();
            yield confirm(data);
          } else {
            alert(response.status + ": " + response.statusText);
          }
        } else {
          alert("cancelled");
        }
      })();
    }

  },
  props: ["selectedProperty", "$delegate"],

  mounted() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      if (global.username == "") {
        _this4.buttonText = "Login first!";
      } else {
        var response = yield fetch(global.rootURL + "/Estate/json", {
          method: "GET",
          credentials: "same-origin"
        });

        if (response.ok) {
          _this4.estates = yield response.json(); // console.log(JSON.stringify(this.estates));
        } else {
          console.log(response.statusText);
        }

        var responseShows = yield fetch(global.rootURL + "/Estate/" + _this4.selectedProperty.id + "/shows", {
          method: "GET",
          credentials: "same-origin"
        });

        if (responseShows.ok) {
          _this4.showsList = (yield responseShows.json())[0]; // console.log(JSON.stringify(this.showsList));
        } else {
          console.log(response.statusText);
        } // this.sendShows = this.showsList.shows.filter(function(e) {
        //         return e.length >= this.selectedProperty.ExpectedTenants;
        //     }.bind(this)
        // );


        console.log(1996);
        var res = yield fetch(global.rootURL + "/user/manages", {
          method: "GET",
          credentials: "same-origin"
        });

        if (res.ok) {
          _this4.myrentalsList = yield res.json();
          console.log(911);
        } else {
          console.log(res.statusText);
        }

        _this4.send = _this4.myrentalsList.manages.filter(function (e) {
          return e.id == this.selectedProperty.id;
        }.bind(_this4));
        console.log(1997);

        if (global.username == "") {
          _this4.buttonText = "Login first.";
        } else {
          if (_this4.send.length > 0) {
            _this4.buttonText = "Move-out";
          } else {
            _this4.buttonText = "Move-in";
          }
        } // if (this.showsList.shows.length >= this.selectedProperty.ExpectedTenants) {
        //     //判断full
        //     this.buttonText = "full";
        // } else if (this.showsList.shows.length < this.selectedProperty.ExpectedTenants && global.username != "") {
        //     //判断是否登录
        //     if (this.send.length > 0) {
        //         this.buttonText = "Move-out";
        //     } else {
        //         this.buttonText = "Move-in";
        //     }
        // }
        // else {
        //     await confirm("login first.");
        // }
        // this.onButtonTap();
        // console.log(77);

      }
    })();
  },

  data() {
    return {
      buttonText: "",
      shows: [],
      estates: [],
      sendlocations: [],
      locations: [{
        Area: "So Kwun Wat",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3673&lng=113.9944&zoom=17&markerLat=22.3673&markerLng=113.9944&markerTitle=Gold%20Coast&locate=true",
        ChineseName: "香港黃金海岸",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "New Territories North-west",
        Latitude: "22.3673",
        Longitude: "113.9944",
        Name: "Gold Coast",
        NoBlocks: 20,
        NoUnits: "2,052"
      }, {
        Area: "Sha Tin",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.386389&lng=114.203889&zoom=17&markerLat=22.386389&markerLng=114.203889&markerTitle=City%20One&locate=true",
        ChineseName: "沙田第一城",
        Completed: "1981-1988",
        Developer: "New World Development\nHenderson Land Development nSun Hung Kai Properties nCheung Kong Holdings ",
        District: "New Territories East ",
        Latitude: "22.386389",
        Longitude: "114.203889",
        Name: "City One",
        NoBlocks: 52,
        NoUnits: "10,642"
      }, {
        Area: "Tai Wai",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3692&lng=114.1743&zoom=17&markerLat=22.3692&markerLng=114.1743&markerTitle=Festival%20City&locate=true",
        ChineseName: "名城",
        Completed: "2010–2012",
        Developer: "Cheung Kong Holdings\nMTR Corporation",
        District: "New Territories East",
        Latitude: "22.3692",
        Longitude: "114.1743",
        Name: "Festival City",
        NoBlocks: 12,
        NoUnits: "4,304"
      }, {
        Area: "Quarry Bay",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2863&lng=114.2176&zoom=17&markerLat=22.2863&markerLng=114.2176&markerTitle=Taikoo%20Shing&locate=true",
        ChineseName: "太古城",
        Completed: "1970s",
        Developer: "Swire",
        District: "Hong Kong Island",
        Latitude: "22.2863",
        Longitude: "114.2176",
        Name: "Taikoo Shing",
        NoBlocks: 61,
        NoUnits: "12,698"
      }, {
        Area: "Yau Ma Tei",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3102705106&lng=114.1705424753&zoom=17&markerLat=22.3102705106&markerLng=114.1705424753&markerTitle=Yau%20Ma%20Tei&locate=true",
        ChineseName: "油麻地",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "Kooloon",
        Latitude: "22.3102705106",
        Longitude: "114.1705424753",
        Name: "Yau Ma Tei",
        NoBlocks: 40,
        NoUnits: "2,072 "
      }, {
        Area: "Kooloon City",
        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3298&lng=114.1926&zoom=17&markerLat=22.3298657855&markerLng=114.1926068369&markerTitle=Calson%20Court&locate=true",
        ChineseName: "启城轩",
        Completed: "1990-1993",
        Developer: "Sino Group",
        District: "Kooloon City",
        Latitude: "22.3298657855",
        Longitude: "114.1926068369",
        Name: "Calson Court",
        NoBlocks: 1,
        NoUnits: "22"
      }]
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Propertyselected:" + args.item.propertytitle);
      this.$navigateTo(_PropertyDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedProperty: args.item,
          $delegate: this
        }
      });
    }
  },
  props: ["bedroomsList", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowProperty.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Propertyselected:" + args.item.propertytitle);
      this.$navigateTo(_PropertyDetails__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          selectedProperty: args.item,
          $delegate: this
        }
      });
    }
  },
  props: ["send", "$delegate"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.center[data-v-763db97b] {\n    text-align: center;\n}\n.home-panel[data-v-763db97b] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-763db97b] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=template&id=ba634b2e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Address" } }),
      _c("WebView", { attrs: { src: _vm.Address } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { navigatedTo: _vm.onNavigatedTo } },
    [
      _c("ActionBar", { attrs: { title: "Home" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Tab 1" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Tab 2" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Tab 3" } })],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [_c("Label", { attrs: { text: "Tab 4" } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.highlighted, "+alias": "estate" },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var estate = ref.estate
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "400"
                                  }
                                },
                                [
                                  _c("Image", {
                                    staticStyle: { objectFit: "fill" },
                                    attrs: {
                                      src: estate.ImageURL,
                                      stretch: "aspectFill"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { text: estate.Propertytitle }
                                  }),
                                  _c("Label", {
                                    staticClass: "h4",
                                    attrs: { text: estate.Estate }
                                  }),
                                  _c("Label", {
                                    staticClass: "h4",
                                    attrs: { text: "Rent: $" + estate.Rent }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.locations, "+alias": "location" },
                      on: { itemTap: _vm.onShowProperty }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var location = ref.location
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "t-15",
                                    staticStyle: { width: "60%" },
                                    attrs: { text: location.Name, height: "50" }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: {
                        items: _vm.numOfBedrooms,
                        "+alias": "numOfBedroom"
                      },
                      on: { itemTap: _vm.onShowBedroom }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var numOfBedroom = ref.numOfBedroom
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "t-15",
                                    staticStyle: { width: "60%" },
                                    attrs: {
                                      text: numOfBedroom.num,
                                      height: "50"
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "StackLayout",
                    { attrs: { orientation: "vertical", margin: "10" } },
                    [
                      _c("Image", {
                        attrs: {
                          src:
                            "https://png.pngtree.com/svg/20160321/touxiang_71421.png",
                          width: "200"
                        }
                      }),
                      _c("Label", {
                        staticClass: "t-15 center",
                        attrs: { text: _vm.username }
                      }),
                      _c("Button", {
                        attrs: { text: "Login/Logout" },
                        on: { tap: _vm.onLogin }
                      }),
                      _c("Button", {
                        attrs: { text: "Myrentals" },
                        on: { tap: _vm.onMyrentals }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Login" } }),
      _c(
        "StackLayout",
        { attrs: { orientation: "vertical", height: "500" } },
        [
          _c("TextField", {
            attrs: { hint: "Username", text: _vm.username },
            on: {
              textChange: function($event) {
                _vm.username = $event.value
              }
            }
          }),
          _c("TextField", {
            attrs: { hint: "Password", text: _vm.password },
            on: {
              textChange: function($event) {
                _vm.password = $event.value
              }
            }
          }),
          _c("Button", {
            staticClass: "btn btn-primary btn-rounded-lg",
            attrs: { text: "Login" },
            on: { tap: _vm.onTapLogin }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Myrentals.vue?vue&type=template&id=04ba6c58&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Rental Records" } }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.myrentalsList, "+alias": "selectedEstate" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var selectedEstate = ref.selectedEstate
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [
                      _c("Label", {
                        staticClass: "t-15",
                        staticStyle: { width: "60%" },
                        attrs: {
                          text: selectedEstate.Propertytitle,
                          height: "50"
                        }
                      }),
                      _c("Label", {
                        staticClass: "body",
                        staticStyle: { width: "60%" },
                        attrs: { text: selectedEstate.Estate, height: "50" }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/PropertyDetails.vue?vue&type=template&id=722620bc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Estate details" } }),
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical", margin: "10" } },
            [
              _c("Image", {
                attrs: {
                  src: _vm.selectedProperty.ImageURL,
                  height: "200",
                  stretch: "aspectFill"
                }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: _vm.selectedProperty.Propertytile, margin: "10" }
              }),
              _c("Label", {
                staticClass: "h4",
                attrs: { text: "Estate: " + _vm.selectedProperty.Estate }
              }),
              _c("Label", {
                staticClass: "h4",
                attrs: { text: "Bedrooms: " + _vm.selectedProperty.Bedrooms }
              }),
              _c("Label", {
                staticClass: "h4",
                attrs: { text: "Rent: $" + _vm.selectedProperty.Rent }
              }),
              _c("Label", {
                staticClass: "h4",
                attrs: {
                  text: "Tenants: " + _vm.selectedProperty.ExpectedTenants
                }
              }),
              _c("Label", {
                staticClass: "h4",
                attrs: { text: "Area: " + _vm.selectedProperty.GrossArea }
              }),
              _c("Button", {
                staticClass: "btn btn-primary btn-rounded-lg",
                attrs: { text: _vm.buttonText },
                on: { tap: _vm.onButtonTap }
              }),
              _c("Button", {
                staticClass: "btn btn-primary btn-rounded-lg",
                attrs: { text: "Address" },
                on: { tap: _vm.onAddress }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowBedroom.vue?vue&type=template&id=795aa594&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Estate lists" } }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.bedroomsList, "+alias": "selectedEstate" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var selectedEstate = ref.selectedEstate
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [
                      _c("Label", {
                        staticClass: "t-15",
                        staticStyle: { width: "60%" },
                        attrs: {
                          text: selectedEstate.Propertytitle,
                          height: "50"
                        }
                      }),
                      _c("Label", {
                        staticClass: "body",
                        staticStyle: { width: "60%" },
                        attrs: { text: selectedEstate.Estate, height: "50" }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowProperty.vue?vue&type=template&id=b8739466&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Estate lists" } }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.send, "+alias": "selectedEstate" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var selectedEstate = ref.selectedEstate
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [
                      _c("Label", {
                        staticClass: "t-15",
                        staticStyle: { width: "60%" },
                        attrs: {
                          text: selectedEstate.Propertytitle,
                          height: "50"
                        }
                      }),
                      _c("Label", {
                        staticClass: "body",
                        staticStyle: { width: "60%" },
                        attrs: { text: selectedEstate.Estate, height: "50" }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.rootURL = "https://4bcd4d12.ngrok.io";
global.username = "";
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <HelloWorld />\n        </Frame>",
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Address.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue?vue&type=template&id=ba634b2e&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ba634b2e')) {
      api.createRecord('ba634b2e', component.options)
    } else {
      api.reload('ba634b2e', component.options)
    }
    module.hot.accept("./components/Address.vue?vue&type=template&id=ba634b2e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Address.vue?vue&type=template&id=ba634b2e&");
(function () {
      api.rerender('ba634b2e', {
        render: _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Address.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Address.vue?vue&type=template&id=ba634b2e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Address.vue?vue&type=template&id=ba634b2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_ba634b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/HelloWorld.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "763db97b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('763db97b')) {
      api.createRecord('763db97b', component.options)
    } else {
      api.reload('763db97b', component.options)
    }
    module.hot.accept("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
(function () {
      api.rerender('763db97b', {
        render: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HelloWorld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Myrentals.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Myrentals.vue?vue&type=template&id=04ba6c58&");
/* harmony import */ var _Myrentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Myrentals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Myrentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('04ba6c58')) {
      api.createRecord('04ba6c58', component.options)
    } else {
      api.reload('04ba6c58', component.options)
    }
    module.hot.accept("./components/Myrentals.vue?vue&type=template&id=04ba6c58&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Myrentals.vue?vue&type=template&id=04ba6c58&");
(function () {
      api.rerender('04ba6c58', {
        render: _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Myrentals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Myrentals.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Myrentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Myrentals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Myrentals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Myrentals.vue?vue&type=template&id=04ba6c58&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Myrentals.vue?vue&type=template&id=04ba6c58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Myrentals_vue_vue_type_template_id_04ba6c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/PropertyDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue?vue&type=template&id=722620bc&");
/* harmony import */ var _PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/PropertyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('722620bc')) {
      api.createRecord('722620bc', component.options)
    } else {
      api.reload('722620bc', component.options)
    }
    module.hot.accept("./components/PropertyDetails.vue?vue&type=template&id=722620bc&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/PropertyDetails.vue?vue&type=template&id=722620bc&");
(function () {
      api.rerender('722620bc', {
        render: _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/PropertyDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/PropertyDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/PropertyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/PropertyDetails.vue?vue&type=template&id=722620bc&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/PropertyDetails.vue?vue&type=template&id=722620bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_template_id_722620bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ShowBedroom.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowBedroom.vue?vue&type=template&id=795aa594&");
/* harmony import */ var _ShowBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ShowBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('795aa594')) {
      api.createRecord('795aa594', component.options)
    } else {
      api.reload('795aa594', component.options)
    }
    module.hot.accept("./components/ShowBedroom.vue?vue&type=template&id=795aa594&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowBedroom.vue?vue&type=template&id=795aa594&");
(function () {
      api.rerender('795aa594', {
        render: _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ShowBedroom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ShowBedroom.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowBedroom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowBedroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ShowBedroom.vue?vue&type=template&id=795aa594&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowBedroom.vue?vue&type=template&id=795aa594&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowBedroom_vue_vue_type_template_id_795aa594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ShowProperty.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowProperty.vue?vue&type=template&id=b8739466&");
/* harmony import */ var _ShowProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ShowProperty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('b8739466')) {
      api.createRecord('b8739466', component.options)
    } else {
      api.reload('b8739466', component.options)
    }
    module.hot.accept("./components/ShowProperty.vue?vue&type=template&id=b8739466&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ShowProperty.vue?vue&type=template&id=b8739466&");
(function () {
      api.rerender('b8739466', {
        render: _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ShowProperty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ShowProperty.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ShowProperty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProperty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ShowProperty.vue?vue&type=template&id=b8739466&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ShowProperty.vue?vue&type=template&id=b8739466&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProperty_vue_vue_type_template_id_b8739466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BZGRyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTXlyZW50YWxzLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qcm9wZXJ0eURldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Nob3dCZWRyb29tLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaG93UHJvcGVydHkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/MmQ5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHJlc3MudnVlPzEyYzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8wMGI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2VmYzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeXJlbnRhbHMudnVlP2Y3OGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9wZXJ0eURldGFpbHMudnVlP2ExMDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93QmVkcm9vbS52dWU/YzA5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3dQcm9wZXJ0eS52dWU/NjY3MyIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHJlc3MudnVlP2EyZDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRyZXNzLnZ1ZT85MDgxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8yOGRhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/NTIzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzc4MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT85YzNjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlyZW50YWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015cmVudGFscy52dWU/ZWZlYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015cmVudGFscy52dWU/OWFmMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb3BlcnR5RGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9wZXJ0eURldGFpbHMudnVlPzJjM2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9wZXJ0eURldGFpbHMudnVlPzdhYmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93QmVkcm9vbS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG93QmVkcm9vbS52dWU/NTdmMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3dCZWRyb29tLnZ1ZT8yNzhmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hvd1Byb3BlcnR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3dQcm9wZXJ0eS52dWU/Yjk2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3dQcm9wZXJ0eS52dWU/MDA4ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3R5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy94bWxcIiJdLCJuYW1lcyI6WyJIZWxsb1dvcmxkIiwiZ2xvYmFsIiwicm9vdFVSTCIsInVzZXJuYW1lIiwiVnVlIiwidGVtcGxhdGUiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQSxpQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBLHlCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUNBLHFDQURBO0FBRUE7QUFGQTtBQUpBO0FBU0EsS0FuQkE7QUFxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTs7QUFFQTtB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RUFBRSxrRkFBTTtBQUNSLEVBQUUsdUZBQU07QUFDUixFQUFFLGdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUF3RjtBQUM1RyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4REFBbUQsRUFBRTtBQUFBO0FBQzNFO0FBQ0EsZ0JBQWdCLHVGQUFNO0FBQ3RCLHlCQUF5QixnR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRLLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBaE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0FBLDZDOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLG1FOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLG1FOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLG1FOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxrRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx3RTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsOEU7Ozs7Ozs7QUNBQSxtRjs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgIDxXZWJWaWV3IDpzcmM9XCJBZGRyZXNzXCIgLz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiQWRkcmVzc1wiLCBcIiRkZWxlZ2F0ZVwiXSxcclxuXHJcbiAgICAgICAgLy8gbWV0aG9kczoge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9wZXJ0eSk7XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVzdGF0ZXM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIEBuYXZpZ2F0ZWRUbz1cIm9uTmF2aWdhdGVkVG9cIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uID5cbiAgICAgICAgICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRhYiAxXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRhYiAyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRhYiAzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRhYiA0XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cblxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImVzdGF0ZSBpbiBoaWdobGlnaHRlZFwiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImVzdGF0ZS5JbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgc3R5bGU9XCJvYmplY3QtZml0OmZpbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJlc3RhdGUuUHJvcGVydHl0aXRsZVwiIGNsYXNzPVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJlc3RhdGUuRXN0YXRlXCIgY2xhc3M9XCJoNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidSZW50OiAkJyArIGVzdGF0ZS5SZW50XCIgY2xhc3M9XCJoNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibG9jYXRpb24gaW4gbG9jYXRpb25zXCIgQGl0ZW1UYXA9XCJvblNob3dQcm9wZXJ0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJsb2NhdGlvbi5OYW1lXCIgY2xhc3M9XCJ0LTE1XCIgc3R5bGU9XCJ3aWR0aDogNjAlXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibnVtT2ZCZWRyb29tIGluIG51bU9mQmVkcm9vbXNcIiBAaXRlbVRhcD1cIm9uU2hvd0JlZHJvb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibnVtT2ZCZWRyb29tLm51bVwiIGNsYXNzPVwidC0xNVwiIHN0eWxlPVwid2lkdGg6IDYwJVwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cblxuICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBtYXJnaW49XCIxMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL3N2Zy8yMDE2MDMyMS90b3V4aWFuZ183MTQyMS5wbmdcIiB3aWR0aD1cIjIwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwidC0xNSBjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW4vTG9nb3V0XCIgQHRhcD1cIm9uTG9naW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTXlyZW50YWxzXCIgQHRhcD1cIm9uTXlyZW50YWxzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUHJvcGVydHlEZXRhaWxzIGZyb20gXCIuL1Byb3BlcnR5RGV0YWlsc1wiO1xuICAgIGltcG9ydCBTaG93UHJvcGVydHkgZnJvbSBcIi4vU2hvd1Byb3BlcnR5XCI7XG4gICAgaW1wb3J0IFNob3dCZWRyb29tIGZyb20gXCIuL1Nob3dCZWRyb29tXCI7XG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG4gICAgaW1wb3J0IE15cmVudGFscyBmcm9tIFwiLi9NeXJlbnRhbHNcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uTmF2aWdhdGVkVG86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBnbG9iYWwudXNlcm5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg4OCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9wZXJ0eSBzZWxlY3RlZDogXCIgKyBhcmdzLml0ZW0ucHJvcGVydHl0aXRsZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coODgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHJvcGVydHlEZXRhaWxzLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9wZXJ0eTogYXJncy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uU2hvd1Byb3BlcnR5OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVzdGF0ZSBzZWxlY3RlZDpcIiArIGFyZ3MuaXRlbS5lc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmQgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VuZCBtZWFucyB0byBzZW5kIHRoZSBhcnJheSB0byB0aGUgZnVydGhlciBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuRXN0YXRlID09IFwiR29sZCBDb2FzdFwiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmQgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLkVzdGF0ZSA9PSBcIkNpdHkgT25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5pbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCA9IHRoaXMuZXN0YXRlcy5maWx0ZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuRXN0YXRlID09IFwiRmVzdGl2YWwgQ2l0eVwiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW5kZXggPT0gMykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmQgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLkVzdGF0ZSA9PSBcIlRhaWtvbyBTaGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW5kZXggPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmQgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLkVzdGF0ZSA9PSBcIllhdSBNYSBUZWlcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmluZGV4ID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kID0gdGhpcy5lc3RhdGVzLmZpbHRlcihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5Fc3RhdGUgPT0gXCJDYWxzb24gQ291cnRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhTaG93UHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiB0aGlzLnNlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBwcm9wcyBoZXJlIG11c3QgbWF0Y2ggdGhlIHByb3BzIG9mIG5leHQgcGFnZSBcIlNob3dQcm9wZXJ0eVwiLlxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uU2hvd0JlZHJvb206IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmVkcm9vbSBzZWxlY3RlZDpcIiArIGFyZ3MuaXRlbVxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eXRpdGxlKTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy/nrKzkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWRyb29tc0xpc3QgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VuZCBtZWFucyB0byBzZW5kIHRoZSBhcnJheSB0byB0aGUgZnVydGhlciBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuQmVkcm9vbXMgPD0gMjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWRyb29tc0xpc3QgPSB0aGlzLmVzdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLkJlZHJvb21zID49IDM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oU2hvd0JlZHJvb20sIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWRyb29tc0xpc3Q6IHRoaXMuYmVkcm9vbXNMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgcHJvcHMgaGVyZSBtdXN0IG1hdGNoIHRoZSBwcm9wcyBvZiBuZXh0IHBhZ2UgXCJTaG93QmVkcm9vbVwiLlxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uTG9naW46IGFzeW5jIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxMTEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdsb2JhbFxuICAgICAgICAgICAgICAgIC51c2VybmFtZSk7IC8vdGhlIHZhbHVlIGhlcmUgaXMgbm90IGVtcHR5IG5vdy4gSXQgaXMgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwudXNlcm5hbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBqdWRnZSB3aGV0aGVyIHRoZSAnZ2xvYmFsLnVzZXJuYW1lJyBpcyBlbXB0eS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgY29uZmlybShcImNvbmZpcm0gbG9nIG91dD9cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlcm5hbWUgPSBcIlwiOyAvLyB0byBhc3NpZ24gYW4gZW1wdHkgdmFsdWUgdG8gJ2dsb2JhbC51c2VybmFtZScgLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcImNhbmNlbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25maXJtKFwid2FubmEgbG9nIG91dD9cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwid2FubmEgbG9nIG91dD9cIik7ICAvLyBzdGlsbCBoYXMgc29tZSBwcm9ibGVtIGhlcmUuIGNvbXBsZXRlZCFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbk15cmVudGFsczogYXN5bmMgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi91c2VyL21hbmFnZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15cmVudGFsc0xpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubXlyZW50YWxzTGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKE15cmVudGFscywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlyZW50YWxzTGlzdDogdGhpcy5teXJlbnRhbHNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYW5hZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMjIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15cmVudGFsc0xpc3QubWFuYWdlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShcImxvZ2luIGZpcnN0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvRXN0YXRlL2pzb25cIiwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXN0YXRlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmVzdGF0ZXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkID0gdGhpcy5lc3RhdGVzLmZpbHRlcihmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuSGlnaGxpZ2h0ZWQgPT0gXCJvblwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ6IFtdLFxuXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGdsb2JhbC51c2VybmFtZSxcblxuICAgICAgICAgICAgICAgIG15cmVudGFsc0xpc3Q6IFtdLFxuXG4gICAgICAgICAgICAgICAgZXN0YXRlczogW10sXG5cbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcmVhOiBcIlNvIEt3dW4gV2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGluZXNlTmFtZTogXCLpppnmuK/pu4Pph5HmtbflsrhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIxOTkwLTE5OTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlcjogXCJTaW5vIEdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgTm9ydGgtd2VzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0aXR1ZGU6IFwiMjIuMzY3M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExMy45OTQ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIkdvbGQgQ29hc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vQmxvY2tzOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiMiwwNTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcmVhOiBcIlNoYSBUaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaW5lc2VOYW1lOiBcIuaymeeUsOesrOS4gOWfjlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiBcIjE5ODEtMTk4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVyOiBcIk5ldyBXb3JsZCBEZXZlbG9wbWVudFxcbkhlbmRlcnNvbiBMYW5kIERldmVsb3BtZW50IG5TdW4gSHVuZyBLYWkgUHJvcGVydGllcyBuQ2hldW5nIEtvbmcgSG9sZGluZ3MgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgRWFzdCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGl0dWRlOiBcIjIyLjM4NjM4OVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4yMDM4ODlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiQ2l0eSBPbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vQmxvY2tzOiA1MixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiMTAsNjQyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJUYWkgV2FpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGluZXNlTmFtZTogXCLlkI3ln45cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIyMDEw4oCTMjAxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVyOiBcIkNoZXVuZyBLb25nIEhvbGRpbmdzXFxuTVRSIENvcnBvcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgRWFzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0aXR1ZGU6IFwiMjIuMzY5MlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4xNzQzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIkZlc3RpdmFsIENpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vQmxvY2tzOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiNCwzMDRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcmVhOiBcIlF1YXJyeSBCYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaW5lc2VOYW1lOiBcIuWkquWPpOWfjlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiBcIjE5NzBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wZXI6IFwiU3dpcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWN0OiBcIkhvbmcgS29uZyBJc2xhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGl0dWRlOiBcIjIyLjI4NjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMjE3NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJUYWlrb28gU2hpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vQmxvY2tzOiA2MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiMTIsNjk4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJZYXUgTWEgVGVpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGluZXNlTmFtZTogXCLmsrnpurvlnLBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIxOTkwLTE5OTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlcjogXCJTaW5vIEdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJLb29sb29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zMTAyNzA1MTA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBMb25naXR1ZGU6IFwiMTE0LjE3MDU0MjQ3NTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiWWF1IE1hIFRlaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgTm9CbG9ja3M6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgTm9Vbml0czogXCIyLDA3MiBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcmVhOiBcIktvb2xvb24gQ2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbmVzZU5hbWU6IFwi5ZCv5Z+O6L2pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWQ6IFwiMTk5MC0xOTkzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wZXI6IFwiU2lubyBHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpY3Q6IFwiS29vbG9vbiBDaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zMjk4NjU3ODU1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBMb25naXR1ZGU6IFwiMTE0LjE5MjYwNjgzNjlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiQ2Fsc29uIGNvdXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOb0Jsb2NrczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiMjIgXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgICAgICBudW1PZkJlZHJvb21zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiBcImJlZHJvb21zPD0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiBcImJlZHJvb21zPj0zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmNlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaG9tZS1wYW5lbCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgIG1hcmdpbjogMTU7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTG9naW5cIiAvPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiNTAwXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInVzZXJuYW1lXCIgaGludD1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicGFzc3dvcmRcIiBoaW50PVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpblwiIEB0YXA9XCJvblRhcExvZ2luXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFzeW5jIG9uVGFwTG9naW4oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJuYW1lICsgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnbG9iYWwucm9vdFVSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IFwidXNlcm5hbWU9XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXNlcm5hbWUpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnBhc3N3b3JkPVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC51c2VybmFtZSA9IHRoaXMudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2xvYmFsLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgeyAvL1dyb25nIHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uZmlybShyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFtcIiRkZWxlZ2F0ZVwiXSxcclxuXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2VybmFtZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiUmVudGFsIFJlY29yZHNcIiAvPlxyXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJzZWxlY3RlZEVzdGF0ZSBpbiBteXJlbnRhbHNMaXN0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cclxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRFc3RhdGUuUHJvcGVydHl0aXRsZVwiIGNsYXNzPVwidC0xNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJVwiIGhlaWdodD1cIjUwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzZWxlY3RlZEVzdGF0ZS5Fc3RhdGVcIiBjbGFzcz1cImJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIiBoZWlnaHQ9XCI1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICA8L0xpc3RWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQcm9wZXJ0eURldGFpbHMgZnJvbSBcIi4vUHJvcGVydHlEZXRhaWxzXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3BlcnR5c2VsZWN0ZWQ6XCIgKyBhcmdzLml0ZW1cclxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eXRpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHJvcGVydHlEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbklPUzoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFuZHJvaWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvcGVydHk6IGFyZ3MuaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbXCJteXJlbnRhbHNMaXN0XCIsIFwiJGRlbGVnYXRlXCJdLFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkVzdGF0ZSBkZXRhaWxzXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgbWFyZ2luPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwic2VsZWN0ZWRQcm9wZXJ0eS5JbWFnZVVSTFwiIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRQcm9wZXJ0eS5Qcm9wZXJ0eXRpbGVcIiBtYXJnaW49XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInRXN0YXRlOiAnICsgc2VsZWN0ZWRQcm9wZXJ0eS5Fc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0JlZHJvb21zOiAnICsgc2VsZWN0ZWRQcm9wZXJ0eS5CZWRyb29tc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCInUmVudDogJCcgKyBzZWxlY3RlZFByb3BlcnR5LlJlbnRcIiBjbGFzcz1cImg0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidUZW5hbnRzOiAnICsgc2VsZWN0ZWRQcm9wZXJ0eS5FeHBlY3RlZFRlbmFudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ0FyZWE6ICcgKyBzZWxlY3RlZFByb3BlcnR5Lkdyb3NzQXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiYnV0dG9uVGV4dFwiIEB0YXA9XCJvbkJ1dHRvblRhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8QnV0dG9uIHRleHQ9XCJNb3ZlLW91dFwiIEB0YXA9XCJvbk1vdmVvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIgLz4gLS0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBZGRyZXNzXCIgQHRhcD1cIm9uQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi9BZGRyZXNzXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAvLyBvbk5hdmlnYXRlZFRvOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudXNlcm5hbWUgPSBnbG9iYWwudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIG9uQWRkcmVzczogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eS5Fc3RhdGUgPT0gXCJHb2xkIENvYXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRsb2NhdGlvbnMgPSB0aGlzLmxvY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24obCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5OYW1lID09IFwiR29sZCBDb2FzdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUHJvcGVydHkuRXN0YXRlID09IFwiQ2l0eSBPbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGxvY2F0aW9ucyA9IHRoaXMubG9jYXRpb25zLmZpbHRlcihmdW5jdGlvbihsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLk5hbWUgPT0gXCJDaXR5IE9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUHJvcGVydHkuRXN0YXRlID09XCJGZXN0aXZhbCBDaXR5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRsb2NhdGlvbnMgPSB0aGlzLmxvY2F0aW9ucy5maWx0ZXIoZnVuY3Rpb24obCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5OYW1lID09IFwiRmVzdGl2YWwgQ2l0eVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUHJvcGVydHkuRXN0YXRlID09XCJUYWlrb28gU2hpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGxvY2F0aW9ucyA9IHRoaXMubG9jYXRpb25zLmZpbHRlcihmdW5jdGlvbihsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLk5hbWUgPT0gXCJUYWlrb28gU2hpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFByb3BlcnR5LkVzdGF0ZSA9PSBcIllhdSBNYSBUZWlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGxvY2F0aW9ucyA9IHRoaXMubG9jYXRpb25zLmZpbHRlcihmdW5jdGlvbihsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLk5hbWUgPT0gXCJZYXUgTWEgVGVpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eS5Fc3RhdGUgPT1cIkNhbHNvbiBDb3VydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kbG9jYXRpb25zID0gdGhpcy5sb2NhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuTmFtZSA9PSBcIkNhbHNvbiBDb3VydFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQWRkcmVzcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzOiB0aGlzLnNlbmRsb2NhdGlvbnNbMF0uQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlbGVnYXRlOiB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhc3luYyBvbkJ1dHRvblRhcCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQ6XCIgKyB0aGlzLnNlbGVjdGVkUHJvcGVydHkuaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2xvYmFsLnJvb3RVUkwgK1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiL0VzdGF0ZS9cIiArXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFByb3BlcnR5LmlkICtcclxuICAgICAgICAgICAgICAgIC8vICAgICBcIi9zaG93c1wiLCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNob3dzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc2hvd3MpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygxMTExKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImxlbmd0aDpcIiArIHRoaXMuc2hvd3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvdXNlci9tYW5hZ2VzXCIsIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5teXJlbnRhbHNMaXN0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyg5MTEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZW5kID0gdGhpcy5teXJlbnRhbHNMaXN0Lm1hbmFnZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGUuaWQgPT0gdGhpcy5zZWxlY3RlZFByb3BlcnR5LmlkO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDE5OTcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvblRleHQgPT0gXCJmdWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1bGxcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnV0dG9uVGV4dCA9PSBcIk1vdmUtb3V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYnV0dG9uVGV4dCA9IFwiTW92ZS1pblwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJ1dHRvblRleHQgPT0gXCJNb3ZlLWluXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZWluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5idXR0b25UZXh0ID0gXCJNb3ZlLW91dFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnNob3dzLmxlbmd0aCA+PSB0aGlzLnNlbGVjdGVkUHJvcGVydHlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuRXhwZWN0ZWRUZW5hbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy/liKTmlq1mdWxsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJmdWxsXCI7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGdsb2JhbC51c2VybmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy/liKTmlq3mmK/lkKbnmbvlvZVcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5zZW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJNb3ZlLW91dFwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm9uTW92ZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIk1vdmUtaW5cIjtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIk1vdmUtaW5cIjtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5vbk1vdmVpbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIk1vdmUtb3V0XCI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBhd2FpdCBjb25maXJtKFwibG9naW4gZmlyc3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYXN5bmMgb25Nb3ZlaW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGNvbmZpcm0oXCJDb25maXJtIG1vdmUtaW4/XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd3NMaXN0LnNob3dzLmxlbmd0aCA8IHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eS5FeHBlY3RlZFRlbmFudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnbG9iYWwucm9vdFVSTCArIFwiL0VzdGF0ZS9jb3JlbnQvXCIgKyB0aGlzLnNlbGVjdGVkUHJvcGVydHkuaWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIk1vdmUtb3V0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbmZpcm0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTExMTExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzICsgXCI6IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkFscmVhZHkgZnVsbC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhc3luYyBvbk1vdmVvdXQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGNvbmZpcm0oXCJDb25maXJtIG1vdmUtb3V0P1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi9Fc3RhdGUvY2FuY2VsL1wiICsgdGhpcy5zZWxlY3RlZFByb3BlcnR5LmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiTW92ZS1pblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb25maXJtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1cyArIFwiOiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJjYW5jZWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwcm9wczogW1wic2VsZWN0ZWRQcm9wZXJ0eVwiLCBcIiRkZWxlZ2F0ZVwiXSxcclxuXHJcbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbC51c2VybmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkxvZ2luIGZpcnN0IVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLnJvb3RVUkwgKyBcIi9Fc3RhdGUvanNvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lc3RhdGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZXN0YXRlcykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VTaG93cyA9IGF3YWl0IGZldGNoKGdsb2JhbC5yb290VVJMICsgXCIvRXN0YXRlL1wiICsgdGhpcy5zZWxlY3RlZFByb3BlcnR5LmlkICsgXCIvc2hvd3NcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlU2hvd3Mub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dzTGlzdCA9IChhd2FpdCByZXNwb25zZVNob3dzLmpzb24oKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zaG93c0xpc3QpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlbmRTaG93cyA9IHRoaXMuc2hvd3NMaXN0LnNob3dzLmZpbHRlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBlLmxlbmd0aCA+PSB0aGlzLnNlbGVjdGVkUHJvcGVydHkuRXhwZWN0ZWRUZW5hbnRzO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDE5OTYpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwucm9vdFVSTCArIFwiL3VzZXIvbWFuYWdlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlyZW50YWxzTGlzdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coOTExKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZCA9IHRoaXMubXlyZW50YWxzTGlzdC5tYW5hZ2VzLmZpbHRlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmlkID09IHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxOTk3KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLnVzZXJuYW1lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkxvZ2luIGZpcnN0LlwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJNb3ZlLW91dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiTW92ZS1pblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnNob3dzTGlzdC5zaG93cy5sZW5ndGggPj0gdGhpcy5zZWxlY3RlZFByb3BlcnR5LkV4cGVjdGVkVGVuYW50cykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8v5Yik5patZnVsbFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiZnVsbFwiO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnNob3dzTGlzdC5zaG93cy5sZW5ndGggPCB0aGlzLnNlbGVjdGVkUHJvcGVydHkuRXhwZWN0ZWRUZW5hbnRzICYmIGdsb2JhbC51c2VybmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy/liKTmlq3mmK/lkKbnmbvlvZVcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5zZW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJNb3ZlLW91dFwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiTW92ZS1pblwiO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGF3YWl0IGNvbmZpcm0oXCJsb2dpbiBmaXJzdC5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vbkJ1dHRvblRhcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coNzcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd3M6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgIGVzdGF0ZXM6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgIHNlbmRsb2NhdGlvbnM6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJTbyBLd3VuIFdhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzOiBcImh0dHBzOi8vbGVhZmxldGFwaS5tdGNob3kubm93LnNoL2luZGV4Lmh0bWw/bGF0PTIyLjM2NzMmbG5nPTExMy45OTQ0Jnpvb209MTcmbWFya2VyTGF0PTIyLjM2NzMmbWFya2VyTG5nPTExMy45OTQ0Jm1hcmtlclRpdGxlPUdvbGQlMjBDb2FzdCZsb2NhdGU9dHJ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGluZXNlTmFtZTogXCLpppnmuK/pu4Pph5HmtbflsrhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiBcIjE5OTAtMTk5M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wZXI6IFwiU2lubyBHcm91cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgTm9ydGgtd2VzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zNjczXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTMuOTk0NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIkdvbGQgQ29hc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9CbG9ja3M6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1VuaXRzOiBcIjIsMDUyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJTaGEgVGluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IFwiaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9MjIuMzg2Mzg5JmxuZz0xMTQuMjAzODg5Jnpvb209MTcmbWFya2VyTGF0PTIyLjM4NjM4OSZtYXJrZXJMbmc9MTE0LjIwMzg4OSZtYXJrZXJUaXRsZT1DaXR5JTIwT25lJmxvY2F0ZT10cnVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoaW5lc2VOYW1lOiBcIuaymeeUsOesrOS4gOWfjlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWQ6IFwiMTk4MS0xOTg4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlcjogXCJOZXcgV29ybGQgRGV2ZWxvcG1lbnRcXG5IZW5kZXJzb24gTGFuZCBEZXZlbG9wbWVudCBuU3VuIEh1bmcgS2FpIFByb3BlcnRpZXMgbkNoZXVuZyBLb25nIEhvbGRpbmdzIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgRWFzdCBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0aXR1ZGU6IFwiMjIuMzg2Mzg5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMjAzODg5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiQ2l0eSBPbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9CbG9ja3M6IDUyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1VuaXRzOiBcIjEwLDY0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZWE6IFwiVGFpIFdhaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzOiBcImh0dHBzOi8vbGVhZmxldGFwaS5tdGNob3kubm93LnNoL2luZGV4Lmh0bWw/bGF0PTIyLjM2OTImbG5nPTExNC4xNzQzJnpvb209MTcmbWFya2VyTGF0PTIyLjM2OTImbWFya2VyTG5nPTExNC4xNzQzJm1hcmtlclRpdGxlPUZlc3RpdmFsJTIwQ2l0eSZsb2NhdGU9dHJ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGluZXNlTmFtZTogXCLlkI3ln45cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkOiBcIjIwMTDigJMyMDEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlcjogXCJDaGV1bmcgS29uZyBIb2xkaW5nc1xcbk1UUiBDb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmljdDogXCJOZXcgVGVycml0b3JpZXMgRWFzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zNjkyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMTc0M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIkZlc3RpdmFsIENpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9CbG9ja3M6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1VuaXRzOiBcIjQsMzA0XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJRdWFycnkgQmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IFwiaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9MjIuMjg2MyZsbmc9MTE0LjIxNzYmem9vbT0xNyZtYXJrZXJMYXQ9MjIuMjg2MyZtYXJrZXJMbmc9MTE0LjIxNzYmbWFya2VyVGl0bGU9VGFpa29vJTIwU2hpbmcmbG9jYXRlPXRydWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbmVzZU5hbWU6IFwi5aSq5Y+k5Z+OXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIxOTcwc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wZXI6IFwiU3dpcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpY3Q6IFwiSG9uZyBLb25nIElzbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4yODYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMjE3NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlRhaWtvbyBTaGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb0Jsb2NrczogNjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vVW5pdHM6IFwiMTIsNjk4XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlYTogXCJZYXUgTWEgVGVpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IFwiaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9MjIuMzEwMjcwNTEwNiZsbmc9MTE0LjE3MDU0MjQ3NTMmem9vbT0xNyZtYXJrZXJMYXQ9MjIuMzEwMjcwNTEwNiZtYXJrZXJMbmc9MTE0LjE3MDU0MjQ3NTMmbWFya2VyVGl0bGU9WWF1JTIwTWElMjBUZWkmbG9jYXRlPXRydWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbmVzZU5hbWU6IFwi5rK56bq75ZywXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIxOTkwLTE5OTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVyOiBcIlNpbm8gR3JvdXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpY3Q6IFwiS29vbG9vblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXRpdHVkZTogXCIyMi4zMTAyNzA1MTA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvbmdpdHVkZTogXCIxMTQuMTcwNTQyNDc1M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIllhdSBNYSBUZWlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9CbG9ja3M6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1VuaXRzOiBcIjIsMDcyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZWE6IFwiS29vbG9vbiBDaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IFwiaHR0cHM6Ly9sZWFmbGV0YXBpLm10Y2hveS5ub3cuc2gvaW5kZXguaHRtbD9sYXQ9MjIuMzI5OCZsbmc9MTE0LjE5MjYmem9vbT0xNyZtYXJrZXJMYXQ9MjIuMzI5ODY1Nzg1NSZtYXJrZXJMbmc9MTE0LjE5MjYwNjgzNjkmbWFya2VyVGl0bGU9Q2Fsc29uJTIwQ291cnQmbG9jYXRlPXRydWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbmVzZU5hbWU6IFwi5ZCv5Z+O6L2pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXCIxOTkwLTE5OTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVyOiBcIlNpbm8gR3JvdXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpY3Q6IFwiS29vbG9vbiBDaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGl0dWRlOiBcIjIyLjMyOTg2NTc4NTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9uZ2l0dWRlOiBcIjExNC4xOTI2MDY4MzY5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiQ2Fsc29uIENvdXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vQmxvY2tzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1VuaXRzOiBcIjIyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkVzdGF0ZSBsaXN0c1wiIC8+XHJcbiAgICAgICAgPExpc3RWaWV3IGZvcj1cInNlbGVjdGVkRXN0YXRlIGluIGJlZHJvb21zTGlzdFwiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNlbGVjdGVkRXN0YXRlLlByb3BlcnR5dGl0bGVcIiBjbGFzcz1cInQtMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIiBoZWlnaHQ9XCI1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRFc3RhdGUuRXN0YXRlXCIgY2xhc3M9XCJib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCIgaGVpZ2h0PVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgUHJvcGVydHlEZXRhaWxzIGZyb20gXCIuL1Byb3BlcnR5RGV0YWlsc1wiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9wZXJ0eXNlbGVjdGVkOlwiICsgYXJncy5pdGVtXHJcbiAgICAgICAgICAgICAgICAucHJvcGVydHl0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFByb3BlcnR5RGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25JT1M6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BbmRyb2lkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByb3BlcnR5OiBhcmdzLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWxlZ2F0ZTogdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1wiYmVkcm9vbXNMaXN0XCIsIFwiJGRlbGVnYXRlXCJdLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiRXN0YXRlIGxpc3RzXCIgLz5cclxuICAgICAgICA8TGlzdFZpZXcgZm9yPVwic2VsZWN0ZWRFc3RhdGUgaW4gc2VuZFwiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInNlbGVjdGVkRXN0YXRlLlByb3BlcnR5dGl0bGVcIiBjbGFzcz1cInQtMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIiBoZWlnaHQ9XCI1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic2VsZWN0ZWRFc3RhdGUuRXN0YXRlXCIgY2xhc3M9XCJib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCIgaGVpZ2h0PVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgIDwvUGFnZT5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFByb3BlcnR5RGV0YWlscyBmcm9tIFwiLi9Qcm9wZXJ0eURldGFpbHNcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uSXRlbVRhcDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvcGVydHlzZWxlY3RlZDpcIiArIGFyZ3MuaXRlbVxyXG4gICAgICAgICAgICAgICAgLnByb3BlcnR5dGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQcm9wZXJ0eURldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uSU9TOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uQW5kcm9pZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9wZXJ0eTogYXJncy5pdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVsZWdhdGU6IHRoaXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFtcInNlbmRcIiwgXCIkZGVsZWdhdGVcIl0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNlbnRlcltkYXRhLXYtNzYzZGI5N2JdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaG9tZS1wYW5lbFtkYXRhLXYtNzYzZGI5N2JdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQWRkcmVzc1wiIH0gfSksXG4gICAgICBfYyhcIldlYlZpZXdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5BZGRyZXNzIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBvbjogeyBuYXZpZ2F0ZWRUbzogX3ZtLm9uTmF2aWdhdGVkVG8gfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVGFiIDFcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVGFiIDJcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVGFiIDNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVGFiIDRcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uaGlnaGxpZ2h0ZWQsIFwiK2FsaWFzXCI6IFwiZXN0YXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzdGF0ZSA9IHJlZi5lc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG9iamVjdEZpdDogXCJmaWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZXN0YXRlLkltYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGVzdGF0ZS5Qcm9wZXJ0eXRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBlc3RhdGUuRXN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlbnQ6ICRcIiArIGVzdGF0ZS5SZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmxvY2F0aW9ucywgXCIrYWxpYXNcIjogXCJsb2NhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uU2hvd1Byb3BlcnR5IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uTmFtZSwgaGVpZ2h0OiBcIjUwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLm51bU9mQmVkcm9vbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIm51bU9mQmVkcm9vbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25TaG93QmVkcm9vbSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1PZkJlZHJvb20gPSByZWYubnVtT2ZCZWRyb29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVtT2ZCZWRyb29tLm51bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgbWFyZ2luOiBcIjEwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3BuZy5wbmd0cmVlLmNvbS9zdmcvMjAxNjAzMjEvdG91eGlhbmdfNzE0MjEucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTE1IGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luL0xvZ291dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkxvZ2luIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk15cmVudGFsc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbk15cmVudGFscyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkxvZ2luXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgaGVpZ2h0OiBcIjUwMFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiVXNlcm5hbWVcIiwgdGV4dDogX3ZtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udXNlcm5hbWUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiUGFzc3dvcmRcIiwgdGV4dDogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dpblwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblRhcExvZ2luIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiUmVudGFsIFJlY29yZHNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0ubXlyZW50YWxzTGlzdCwgXCIrYWxpYXNcIjogXCJzZWxlY3RlZEVzdGF0ZVwiIH0sXG4gICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEVzdGF0ZSA9IHJlZi5zZWxlY3RlZEVzdGF0ZVxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNjAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHNlbGVjdGVkRXN0YXRlLlByb3BlcnR5dGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogc2VsZWN0ZWRFc3RhdGUuRXN0YXRlLCBoZWlnaHQ6IFwiNTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiRXN0YXRlIGRldGFpbHNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIG1hcmdpbjogXCIxMFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNlbGVjdGVkUHJvcGVydHkuSW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnNlbGVjdGVkUHJvcGVydHkuUHJvcGVydHl0aWxlLCBtYXJnaW46IFwiMTBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoNFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRXN0YXRlOiBcIiArIF92bS5zZWxlY3RlZFByb3BlcnR5LkVzdGF0ZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoNFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQmVkcm9vbXM6IFwiICsgX3ZtLnNlbGVjdGVkUHJvcGVydHkuQmVkcm9vbXMgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlbnQ6ICRcIiArIF92bS5zZWxlY3RlZFByb3BlcnR5LlJlbnQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJUZW5hbnRzOiBcIiArIF92bS5zZWxlY3RlZFByb3BlcnR5LkV4cGVjdGVkVGVuYW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImg0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBcmVhOiBcIiArIF92bS5zZWxlY3RlZFByb3BlcnR5Lkdyb3NzQXJlYSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmJ1dHRvblRleHQgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFkZHJlc3MgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJFc3RhdGUgbGlzdHNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uYmVkcm9vbXNMaXN0LCBcIithbGlhc1wiOiBcInNlbGVjdGVkRXN0YXRlXCIgfSxcbiAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRXN0YXRlID0gcmVmLnNlbGVjdGVkRXN0YXRlXG4gICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogc2VsZWN0ZWRFc3RhdGUuUHJvcGVydHl0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjYwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBzZWxlY3RlZEVzdGF0ZS5Fc3RhdGUsIGhlaWdodDogXCI1MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJFc3RhdGUgbGlzdHNcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uc2VuZCwgXCIrYWxpYXNcIjogXCJzZWxlY3RlZEVzdGF0ZVwiIH0sXG4gICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEVzdGF0ZSA9IHJlZi5zZWxlY3RlZEVzdGF0ZVxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNjAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHNlbGVjdGVkRXN0YXRlLlByb3BlcnR5dGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogc2VsZWN0ZWRFc3RhdGUuRXN0YXRlLCBoZWlnaHQ6IFwiNTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuZ2xvYmFsLnJvb3RVUkwgPSBcImh0dHBzOi8vNGJjZDRkMTIubmdyb2suaW9cIjtcbmdsb2JhbC51c2VybmFtZSA9IFwiXCI7XG5uZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxIZWxsb1dvcmxkIC8+XG4gICAgICAgIDwvRnJhbWU+YCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVsbG9Xb3JsZFxuICAgIH1cbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkcmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmE2MzRiMmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkcmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFw5NjQ2MlxcXFxEZXNrdG9wXFxcXDcyNzBcXFxcYXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JhNjM0YjJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JhNjM0YjJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JhNjM0YjJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRyZXNzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTYzNGIyZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYTYzNGIyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BZGRyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZHJlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhNjM0YjJlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzYzZGI5N2JcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFw5NjQ2MlxcXFxEZXNrdG9wXFxcXDcyNzBcXFxcYXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2M2RiOTdiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NjNkYjk3YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcOTY0NjJcXFxcRGVza3RvcFxcXFw3MjcwXFxcXGFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeXJlbnRhbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0YmE2YzU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL015cmVudGFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL015cmVudGFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDk2NDYyXFxcXERlc2t0b3BcXFxcNzI3MFxcXFxhcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDRiYTZjNTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDRiYTZjNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDRiYTZjNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015cmVudGFscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDRiYTZjNTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDRiYTZjNTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTXlyZW50YWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeXJlbnRhbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlyZW50YWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeXJlbnRhbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0YmE2YzU4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9wZXJ0eURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyMjYyMGJjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb3BlcnR5RGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb3BlcnR5RGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDk2NDYyXFxcXERlc2t0b3BcXFxcNzI3MFxcXFxhcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzIyNjIwYmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzIyNjIwYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzIyNjIwYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb3BlcnR5RGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzIyNjIwYmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzIyNjIwYmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUHJvcGVydHlEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9wZXJ0eURldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvcGVydHlEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9wZXJ0eURldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyMjYyMGJjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaG93QmVkcm9vbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk1YWE1OTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvd0JlZHJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93QmVkcm9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDk2NDYyXFxcXERlc2t0b3BcXFxcNzI3MFxcXFxhcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzk1YWE1OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzk1YWE1OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzk1YWE1OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3dCZWRyb29tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTVhYTU5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OTVhYTU5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9TaG93QmVkcm9vbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvd0JlZHJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvd0JlZHJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3dCZWRyb29tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTVhYTU5NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvd1Byb3BlcnR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iODczOTQ2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG93UHJvcGVydHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93UHJvcGVydHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFw5NjQ2MlxcXFxEZXNrdG9wXFxcXDcyNzBcXFxcYXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2I4NzM5NDY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2I4NzM5NDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2I4NzM5NDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93UHJvcGVydHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4NzM5NDY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I4NzM5NDY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1Nob3dQcm9wZXJ0eS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvd1Byb3BlcnR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3dQcm9wZXJ0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvd1Byb3BlcnR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iODczOTQ2NiZcIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy94bWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==