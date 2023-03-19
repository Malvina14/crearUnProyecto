"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
var Equipo = /** @class */ (function () {
    function Equipo(id, description, fechaFabricacion, fechaInstalacion, bomba, kitMangueras, motor) {
        if (fechaFabricacion === void 0) { fechaFabricacion = new Date(); }
        if (fechaInstalacion === void 0) { fechaInstalacion = new Date(); }
        this.id = id;
        this.description = description;
        this.fechaFabricacion = fechaFabricacion;
        this.fechaInstalacion = fechaInstalacion;
        this.bomba = bomba;
        this.kitMangueras = kitMangueras;
        this.motor = motor;
    }
    Equipo.prototype.fullEquipment = function (array) {
        console.log(array);
    };
    Equipo.prototype.agregarEquipo = function (array) {
        array.push(this);
        console.table("equipo agregado ".concat(array));
        return;
    };
    Equipo.prototype.getleerEquipo = function () {
        var equipment = [this.id, this.description, this.fechaFabricacion, this.fechaInstalacion, this.bomba, this.kitMangueras, this.motor];
        console.log([equipment]);
        return equipment;
    };
    Equipo.prototype.modificarEquipo = function (newId, newDescription, newFechaFabricacion, newFechaInstalacion) {
        this.id = newId;
        this.description = newDescription;
        this.fechaFabricacion = newFechaFabricacion;
        this.fechaInstalacion = newFechaInstalacion;
    };
    Equipo.prototype.eliminaEquipo = function (array) {
        var _this = this;
        var equipoAEliminar = array.findIndex(function (equipo) { return equipo.id === _this.id; });
        array.splice(equipoAEliminar, 1);
        console.log("El equipo ha sido eliminado");
    };
    Equipo.prototype.fechaFabricacionLocal = function () {
        return this.fechaFabricacion.toLocaleDateString();
    };
    Equipo.prototype.fechaInstalacionLocal = function () {
        return this.fechaInstalacion.toLocaleDateString();
    };
    return Equipo;
}());
exports.Equipo = Equipo;
