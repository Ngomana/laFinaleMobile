"use strict";
exports.__esModule = true;
exports.useSqlite = void 0;
var react_native_sqlite_storage_1 = require("react-native-sqlite-storage");
exports.useSqlite = react_native_sqlite_storage_1["default"].openDatabase({
    name: "SQLLite",
    location: "default",
    createFromLocation: "~numberz.db"
}, function () {
    console.log("Connected to Database");
}, function (e) {
    console.log("Error: " + e);
});
