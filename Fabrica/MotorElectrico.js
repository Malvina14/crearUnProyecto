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
exports.MotorElectrico = void 0;
var Motor_1 = require("./Motor");
var MotorElectrico = /** @class */ (function (_super) {
    __extends(MotorElectrico, _super);
    function MotorElectrico(id, potencia, eficiencia, fabricante, voltaje, consumo, isBajoConsumo) {
        var _this = _super.call(this, id, potencia, eficiencia, fabricante) || this;
        _this.voltaje = "";
        _this.consumo = 0;
        _this.isBajoConsumo = true;
        _this.voltaje = voltaje;
        _this.consumo = consumo;
        _this.isBajoConsumo = isBajoConsumo;
        return _this;
    }
    MotorElectrico.prototype.fullEquipment = function (array) {
        console.log(array);
    };
    MotorElectrico.prototype.agregar_motorElectrico = function (array) {
        array.push(this);
        console.table("Motor Electrico agregado: ".concat(array));
        return;
    };
    Object.defineProperty(MotorElectrico.prototype, "leerMotorElectrico", {
        get: function () {
            var electricEngine = [this.id, this.potencia, this.eficiencia, this.fabricante, this.voltaje, this.consumo, this.isBajoConsumo];
            console.table([electricEngine]);
            return electricEngine;
        },
        enumerable: false,
        configurable: true
    });
    MotorElectrico.prototype.modificarMotorElectrico = function (newId, newPotencia, newEficiencia, newFabricante, newVoltaje, newConsumo, newIsBajoConsumo) {
        this.id = newId;
        this.potencia = newPotencia;
        this.eficiencia = newEficiencia;
        this.fabricante = newFabricante;
        this.voltaje = newVoltaje;
        this.consumo = newConsumo;
        this.isBajoConsumo = newIsBajoConsumo;
        return;
    };
    MotorElectrico.prototype.eliminarMotorElectrico = function (array) {
        var _this = this;
        var motorAEliminar = array.findIndex(function (motorelectrico) { return motorelectrico.id === _this.id; });
        array.splice(motorAEliminar, 1);
        console.log("El motor ".concat(this.id, " ha sido elimnido"));
    };
    return MotorElectrico;
}(Motor_1.Motor));
exports.MotorElectrico = MotorElectrico;
