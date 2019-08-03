export class MsgSpanish {
    public static NOT_AUTHENTICATION_HEADER: string = "No se envió token de autenticación"
    public static AUTHENTICATION_METHOD_NOT_ALLOW: string = "Sólo se permite método de autenticación Bearer"
    /**Entities error */
    /**User name */
    public static ID_MANDATORY: string = "El campo id es obligatorio"
    public static REGISTER_NOT_FOUND: string = "El registro solicitado no existe"

    public static PASSWORD_MANDATORY: string = "El campo password es obligatorio"
    public static USERNAME_MANDATORY: string = "El campo username es obligatorio"
    public static NAME_MANDATORY: string = "El campo nombre es obligatorio"
    public static PLANTA_MANDATORY: string = "El campo plantaId es obligatorio"
    public static SISTEMA_MANDATORY: string = "El campo sistemaId es obligatorio"
    public static DNI_MANDATORY: string = "El campo dni es obligatorio"
    public static USERNAME_DUPLICATED: string = "nombre de usuario duplicado"


    public static PLANTILLA_GUIAS_DISTINTAS: string = "El campo y la guia de maniobra pertenecen a plantillas distintas"
    public static PLANTILLA_RONDA_DISTINTAS: string = "El campo y la ronda pertenecen a plantillas distintas"
    public static VALOR_YA_ASIGNADO: string = "La plantilla con id @0 ya tiene el campo con id @1 asignado. Modifique el que se encuentra en el valorCampo con id @2"
    public static ESTADOS_FALLA_NO_BORRABLES: string = "Los estados de falla con id 1 y 2 no pueden ser eliminados"

    public static UNAHUTORIZED: string = "You are not authorized to use this site"
    public static MALFORMED_JSON_SELECT: string = "El formato del json array usado como select es invalido"
    public static MALFORMED_JSON_ORDER: string = "El formato del json array usado como order es invalido"
    public static CAMPO_CARACTERES_MINIMOS: string = "El campo @0 necesita al menos @1 caracteres"
    public static CAMPO_OBLIGATORIO(campo: string) {
        return "El campo " + campo + " es obligatorio"
    }

    public static reemplazarCampos(msg: String, valores: any[]) {
        let salida = msg
        for (let i: number = 0; i < valores.length; i++)
            salida = salida.replace("@" + i, valores[i].toString())
        return salida
    }

}