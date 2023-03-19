"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Eficiencia = void 0;
var Eficiencia;
(function (Eficiencia) {
    Eficiencia["A"] = "A";
    Eficiencia["B"] = "B";
    Eficiencia["C"] = "C";
})(Eficiencia = exports.Eficiencia || (exports.Eficiencia = {}));
var Motor = /** @class */ (function () {
    function Motor(id, potencia, eficiencia, fabricante) {
        this.id = "";
        this.potencia = 0;
        this.eficiencia = Eficiencia.A;
        this.fabricante = "";
        this.id = id;
        this.potencia = potencia;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }
    Motor.prototype.leerMotor = function () {
        var engine = [this.id, this.potencia, this.eficiencia, this.fabricante];
        console.table(engine);
        return engine;
    };
    Motor.prototype.modificarMotor = function (newId, newPotecia, newEficiencia, newFabricante) {
        this.id = newId;
        this.potencia = newPotecia;
        this.eficiencia = newEficiencia;
        this.fabricante = newFabricante;
        return;
    };
    return Motor;
}());
exports.Motor = Motor;
