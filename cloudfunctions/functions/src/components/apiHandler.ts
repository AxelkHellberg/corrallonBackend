import { getConnectionDatabase } from './dbHandler';
import { GenericRepository } from '../repository/GenericRepository';
import { ErrorVDF } from './ErrorVDF';
import { GenericeService } from '../services/GenericService';

const responseError = async function (res, e: Error) {
  if (e instanceof ErrorVDF)
    res.status(e.responseCode).send({ "responseCode": e.responseCode == 0 ? 500 : e.responseCode, "internalMessage": e.internalMessage, "userMessage": e.userMessage })
  else
    res.status(500).send({ "responseCode": 500, "internalMessage": e.toString(), "userMessage": e.toString() })
}

const getHandlerGenericEntity = async function (req, res, classEntity, repository: GenericeService<any>) {
  try {
    const objs = await repository.find()
    res.send(objs)
  } catch (e) {
    await responseError(res, new ErrorVDF(e.toString(), e.toString()))
  }
}

const postHandlerGenericEntity = async function (req, res, classEntity, repository: GenericeService<any>) {
  let newObj = new classEntity()
  console.log(req.body)
  Object.assign(newObj, req.body)
  try {
    await repository.save(newObj)
    res.send(newObj);
  } catch (e) {
    await responseError(res, e)
  }
}

/**
 * This function update generically a register of a class by its id
 * 
 * @param req param that has the request information
 * @param res param that will be set with the response information
 * @param classEntity Class of the entity to update
 */
const updateHandlerGenericEntity = async function (req, res, classEntity, repository: GenericeService<any>) {
  delete req.body["id"] //The client can't change the id associated to the register
  repository.updateById(req.body, req.params.id).then(
    (objUpdated) => { res.send(objUpdated) }
  ).catch(async (e) => {
    await responseError(res, e)
  })
}



export { getHandlerGenericEntity, postHandlerGenericEntity, updateHandlerGenericEntity, responseError }