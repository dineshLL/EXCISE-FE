"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Amila on 4/26/2017.
 */
var core_1 = require("@angular/core");
var _services_1 = require("../_services");
var InformantComponent = (function () {
    function InformantComponent(service) {
        var _this = this;
        this.service = service;
        this.officers = null;
        this.selectedOfficerInfo = null;
        this.service.loadOfficersIds()
            .subscribe(function (data) {
            if (data.length !== 0) {
                _this.officers = data.data;
            }
        });
    }
    InformantComponent.prototype.loadInfo = function (value) {
        var _this = this;
        this.service.loadOfficerInfo(value)
            .subscribe(function (data) {
            if (data) {
                _this.selectedOfficerInfo = {
                    name: data.username,
                    designation: data.designation
                };
            }
        });
    };
    return InformantComponent;
}());
InformantComponent = __decorate([
    core_1.Component({
        selector: 'app-informant',
        templateUrl: './informant.component.html',
        styleUrls: ['./informant.component.css']
    }),
    __metadata("design:paramtypes", [_services_1.CrService])
], InformantComponent);
exports.InformantComponent = InformantComponent;
//# sourceMappingURL=informant.component.js.map