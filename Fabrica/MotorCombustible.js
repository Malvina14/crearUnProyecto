"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorCombustible = exports.Combustible = void 0;
var Motor_1 = require("./Motor");
var Combustible;
(function (Combustible) {
    Combustible["Gasolina"] = "Gasolina";
    Combustible["Diesel"] = "Diesel";
})(Combustible = exports.Combustible || (exports.Combustible = {}));
var MotorCombustible = /** @class */ (function (_super) {
    __extends(MotorCombustible, _super);
    function MotorCombustible(id, potencia, eficiencia, fabricante, cilindros, tipoCombustible) {
        var _this = _super.call(this, id, potencia, eficiencia, fabricante) || this;
        _this.cilindros = "";
        _this.tipoCombustible = Combustible.Diesel;
        _this.cilindros = cilindros;
        _this.tipoCombustible = tipoCombustible;
        return _this;
    }
    MotorCombustible.prototype.fullEquipment = function (array) {
        console.log(array);
    };
    MotorCombustible.prototype.agregar_motorCombustible = function (array) {
        array.push(this);
        console.table("Motor de Combustion agregado; ".concat(array));
        return;
    };
    Object.defineProperty(MotorCombustible.prototype, "motorCombustible", {
        get: function () {
            var combustionEngine = [this.id, this.potencia, this.eficiencia, this.fabricante, this.cilindros, this.tipoCombustible];
            console.table([combustionEngine]);
            return combustionEngine;
        },
        enumerable: false,
        configurable: true
    });
    MotorCombustible.prototype.modificarMotorCombustible = function (newId, newPotecia, newEficiencia, newFabricante, newCilindros, newTipoCombustible) {
        this.id = newId;
        this.potencia = newPotecia;
        this.eficiencia = newEficiencia;
        this.fabricante = newFabricante;
        this.cilindros = newCilindros;
        this.tipoCombustible = newTipoCombustible;
        return;
    };
    MotorCombustible.prototype.eliminarMotorCombustible = function (array) {
        var _this = this;
        var motorAEliminar = array.findIndex(function (motorCombustible) { return motorCombustible.id === _this.id; });
        array.splice(motorAEliminar, 1);
        console.log("El motor ".concat(this.id, " ha sido elimnido"));
    };
    return MotorCombustible;
}(Motor_1.Motor));
exports.MotorCombustible = MotorCombustible;
