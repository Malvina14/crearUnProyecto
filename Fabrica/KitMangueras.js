"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitMangueras = exports.Roscas = void 0;
var Roscas;
(function (Roscas) {
    Roscas["material1"] = "Material 1";
    Roscas["material2"] = "Material 2";
    Roscas["material3"] = "Material 3";
})(Roscas = exports.Roscas || (exports.Roscas = {}));
var KitMangueras = /** @class */ (function () {
    function KitMangueras(id, elementos, medidaPulgadas, roscasMaterial) {
        this.id = "";
        this.elementos = 0;
        this.medidaPulgadas = 0;
        this.roscasMaterial = Roscas.material1;
        this.id = id;
        this.elementos = elementos;
        this.medidaPulgadas = medidaPulgadas;
        this.roscasMaterial = roscasMaterial;
    }
    KitMangueras.prototype.fullEquipment = function (array) {
        array.push(this);
        console.table("Kit agregado:".concat(array));
        return;
    };
    KitMangueras.prototype.agregar_kitMangueras = function (id, elementos, medidaPulgadas, roscasMaterial) {
        var kitMangueras = new KitMangueras(id, elementos, medidaPulgadas, roscasMaterial);
        console.log(kitMangueras);
        return kitMangueras;
    };
    KitMangueras.prototype.getleerKitMangueras = function () {
        var kitMangueras = [this.id, this.elementos, this.medidaPulgadas, this.roscasMaterial];
        console.table(kitMangueras);
        return kitMangueras;
    };
    KitMangueras.prototype.modificarKitMangueras = function (newId, newElementos, newMedidaPulgadas, newRoscasMaterial) {
        this.id = newId;
        this.elementos = newElementos;
        this.medidaPulgadas = newMedidaPulgadas;
        this.roscasMaterial = newRoscasMaterial;
    };
    KitMangueras.prototype.eliminarKitmangueras = function (array) {
        var _this = this;
        var kitMangueraAEliminar = array.findIndex(function (manguera) { return manguera.id === _this.id; });
        array.splice(kitMangueraAEliminar, 1);
        console.log("El kit de mangueras ".concat(this.id, " ha sido eliminado"));
    };
    return KitMangueras;
}());
exports.KitMangueras = KitMangueras;
