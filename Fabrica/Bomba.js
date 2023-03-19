"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bomba = void 0;
var Bomba = /** @class */ (function () {
    function Bomba(id, caudalEntrada, caudalSalida, fabricante) {
        this.id = "";
        this.caudalEntrada = 0;
        this.caudalSalida = 0;
        this.fabricante = "";
        this.id = id;
        this.caudalEntrada = caudalEntrada;
        this.caudalSalida = caudalSalida;
        this.fabricante = fabricante;
    }
    Bomba.prototype.fullEquipment = function (array) {
        console.log(array);
    };
    Bomba.prototype.agregar_bomba = function (array) {
        array.push(this);
        console.table("Bomba agregada: ".concat(array));
        return;
    };
    Bomba.prototype.getleerBomba = function () {
        var bomb = [this.id, this.caudalEntrada, this.caudalSalida, this.fabricante];
        console.table(bomb);
        return "\n        ".concat(this.id, "\n\t\t").concat(this.caudalEntrada, "\n\t\t").concat(this.caudalSalida, "\n\t\t").concat(this.fabricante, "\n\t\t");
    };
    Bomba.prototype.modificarBomba = function (newId, newCaudalEntrada, newCaudalSalida, newFabricante) {
        this.id = newId;
        this.caudalEntrada = newCaudalEntrada;
        this.caudalSalida = newCaudalSalida;
        this.fabricante = newFabricante;
        return;
    };
    Bomba.prototype.eliminarBomba = function (array) {
        var _this = this;
        var bomaAEliminar = array.findIndex(function (bomba) { return bomba.id === _this.id; });
        array.splice(bomaAEliminar, 1);
        console.log("Bomba ".concat(this.id, " ha sido elimnida"));
    };
    return Bomba;
}());
exports.Bomba = Bomba;
