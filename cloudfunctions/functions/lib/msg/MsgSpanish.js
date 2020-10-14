"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MsgSpanish {
    static CAMPO_OBLIGATORIO(campo) {
        return "El campo " + campo + " es obligatorio";
    }
    static reemplazarCampos(msg, valores) {
        let salida = msg;
        for (let i = 0; i < valores.length; i++)
            salida = salida.replace("@" + i, valores[i].toString());
        return salida;
    }
}
MsgSpanish.NOT_AUTHENTICATION_HEADER = "No se envió token de autenticación";
MsgSpanish.AUTHENTICATION_METHOD_NOT_ALLOW = "Sólo se permite método de autenticación Bearer";
/**Entities error */
/**User name */
MsgSpanish.ID_MANDATORY = "El campo id es obligatorio";
MsgSpanish.REGISTER_NOT_FOUND = "El registro solicitado no existe";
MsgSpanish.PASSWORD_MANDATORY = "El campo password es obligatorio";
MsgSpanish.USERNAME_MANDATORY = "El campo username es obligatorio";
MsgSpanish.NAME_MANDATORY = "El campo nombre es obligatorio";
MsgSpanish.PLANTA_MANDATORY = "El campo plantaId es obligatorio";
MsgSpanish.SISTEMA_MANDATORY = "El campo sistemaId es obligatorio";
MsgSpanish.DNI_MANDATORY = "El campo dni es obligatorio";
MsgSpanish.USERNAME_DUPLICATED = "nombre de usuario duplicado";
MsgSpanish.PLANTILLA_GUIAS_DISTINTAS = "El campo y la guia de maniobra pertenecen a plantillas distintas";
MsgSpanish.PLANTILLA_RONDA_DISTINTAS = "El campo y la ronda pertenecen a plantillas distintas";
MsgSpanish.VALOR_YA_ASIGNADO = "La plantilla con id @0 ya tiene el campo con id @1 asignado. Modifique el que se encuentra en el valorCampo con id @2";
MsgSpanish.ESTADOS_FALLA_NO_BORRABLES = "Los estados de falla con id 1 y 2 no pueden ser eliminados";
MsgSpanish.UNAHUTORIZED = "You are not authorized to use this site";
MsgSpanish.MALFORMED_JSON_SELECT = "El formato del json array usado como select es invalido";
MsgSpanish.MALFORMED_JSON_ORDER = "El formato del json array usado como order es invalido";
MsgSpanish.CAMPO_CARACTERES_MINIMOS = "El campo @0 necesita al menos @1 caracteres";
MsgSpanish.USUARIO_ADMINISTRADOR_NO_ELIMINABLE = "El usuario administrador no puede ser eliminado";
exports.MsgSpanish = MsgSpanish;
//# sourceMappingURL=MsgSpanish.js.map