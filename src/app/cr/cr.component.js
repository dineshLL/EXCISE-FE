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
var officer_1 = require("../officer");
var informant_1 = require("../informant");
var item_1 = require("../item");
var accused_1 = require("../accused");
var _services_1 = require("../_services");
var CrComponent = (function () {
    function CrComponent(service) {
        this.service = service;
    }
    CrComponent.prototype.addCrs = function () {
        this.crsObject = {
            'detectionDate': this.detectionDate,
            'detectionOfficer': this.Officer.selectedOfficer,
            'informant': this.Informant.selectedOfficer,
            'detectedItem': {
                'itemCode': this.Item.selectedItem,
                'subItemCode': this.Item.selectedSubItem,
                'amount': {
                    'amount': this.Item.amount,
                    'unit': this.Item.subItemUnit
                }
            },
            'accused': {
                'gender': this.Accused.gender,
                'cortDate': this.Accused.cortDate,
                'fine': this.Accused.fine,
                'status': this.Accused.status
            }
        };
        this.service.addCr(this.crsObject)
            .subscribe(function (data) {
            if (data == 200) {
                alert("successfully saved");
            }
        });
    };
    return CrComponent;
}());
__decorate([
    core_1.ViewChild(officer_1.OfficerComponent),
    __metadata("design:type", officer_1.OfficerComponent)
], CrComponent.prototype, "Officer", void 0);
__decorate([
    core_1.ViewChild(informant_1.InformantComponent),
    __metadata("design:type", informant_1.InformantComponent)
], CrComponent.prototype, "Informant", void 0);
__decorate([
    core_1.ViewChild(item_1.ItemComponent),
    __metadata("design:type", item_1.ItemComponent)
], CrComponent.prototype, "Item", void 0);
__decorate([
    core_1.ViewChild(accused_1.AccusedComponent),
    __metadata("design:type", accused_1.AccusedComponent)
], CrComponent.prototype, "Accused", void 0);
CrComponent = __decorate([
    core_1.Component({
        selector: 'app-cr',
        templateUrl: './cr.component.html',
        styleUrls: ['./cr.component.css']
    }),
    __metadata("design:paramtypes", [_services_1.CrService])
], CrComponent);
exports.CrComponent = CrComponent;
//# sourceMappingURL=cr.component.js.map