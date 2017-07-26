'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Concept(data, feed) {
    var _this = this;

    var obj = {};
    Object.keys(data).forEach(function (key) {
        var newkey = key.replace('skos$', '');
        if (Array.isArray(data[key])) {
            data[key].filter(function (x) {
                return x.xml$lang;
            }).forEach(function (item) {
                var localkey = newkey.concat('@').concat(item.xml$lang);
                obj[localkey] = item.$t;
            });
        } else if (data[key].rdf$resource && !obj[newkey]) {
            obj[newkey] = data[key].rdf$resource;
        } else if (data[key].rdf$resource && obj[newkey]) {
            obj[newkey] = [obj[newkey], data[key].rdf$resource];
        } else if (data[key].$t && data[key].xml$lang) {
            var localkey = newkey.concat('@').concat(data[key].xml$lang);
            obj[localkey] = data[key].$t;
        } else if (data[key].$t && Array.isArray(obj[newkey])) {
            obj[newkey].push(data[key].$t);
        } else if (data[key].$t && obj[newkey]) {
            obj[newkey] = [obj[newkey], data[key].$t];
        } else if (data[key].$t && !obj[newkey]) {
            obj[newkey] = data[key].$t;
        } else if (_typeof(data[key]) === 'object') {
            obj[newkey] = (_this.getIndex().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            var counter = 0;
            Object.keys(data[key]).forEach(function (key2) {
                if (_typeof(data[key][key2]) === 'object') {
                    data[key][key2].rdf$about = obj[newkey];
                    Concept.call(_this, data[key][key2], feed);
                    counter += 1;
                }
            });
            if (counter === 0) {
                delete obj[newkey];
            }
        } else {
            obj[newkey] = data[key];
        }
    });
    feed.write(obj);
}

function SKOSObject(data, feed) {
    if (this.isLast()) {
        feed.close();
    } else {
        Concept.call(this, data, feed);
        feed.end();
    }
}

exports.default = {
    SKOSObject: SKOSObject
};