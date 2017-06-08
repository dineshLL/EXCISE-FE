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
var ItemComponent = (function () {
    function ItemComponent(service) {
        var _this = this;
        this.service = service;
        this.itemList = null;
        this.selectedItem = null;
        this.subItems = null;
        this.selectedSubItem = null;
        this.subItemUnit = null;
        this.amount = null;
        this.service.loadItems()
            .subscribe(function (data) {
            if (data.length !== 0) {
                _this.itemList = data;
            }
        });
    }
    ItemComponent.prototype.loadSubInfo = function (value) {
        var _this = this;
        this.service.loadSubItems(value)
            .subscribe(function (data) {
            if (data.length !== 0) {
                _this.subItems = data;
            }
        });
    };
    ItemComponent.prototype.selectUnit = function (value) {
        var scope = this;
        this.subItems.forEach(function (item) {
            if (item.subItemCode === scope.selectedSubItem) {
                scope.subItemUnit = item.unit;
            }
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    }),
    __metadata("design:paramtypes", [_services_1.CrService])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map