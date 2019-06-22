import { postHandlerGenericEntity, getHandlerGenericEntity, getByIdHandlerGenericEntity, updateHandlerGenericEntity, deleteHandlerGenericEntity } from "../components/apiHandler";
import { METODOS_HTTP } from "../config/mapHTTPMethodDB";
import { GenericeService } from "../services/GenericService";
import { AllowedMethods } from "../interfacesJson/AllowedMethods";

export const addToGenericRoute = function (router, currentClass: any, service: GenericeService<any>, methods: AllowedMethods = { "post": true, "get": true, "delete": true, "patch": true, }) {
    if (methods.post) {
        router.post('/', async (req, res, next) => {
            await postHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
    }
    if (methods.get) {
        router.get('/', async (req, res, next) => {
            await getHandlerGenericEntity(req, res, currentClass, service)
            next()
        });

        router.get('/:id', async (req, res, next) => {
            await getByIdHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
    }
    if (methods.patch) {
        router.patch('/:id', async (req, res, next) => {
            await updateHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
    }
    if (methods.delete) {
        router.delete('/:id', async (req, res, next) => {
            await deleteHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
    }
    return router
}
