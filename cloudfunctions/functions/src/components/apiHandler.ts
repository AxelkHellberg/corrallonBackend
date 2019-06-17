import { getConnectionDatabase } from './dbHandler';
import { GenericRepository } from '../repository/GenericRepository';
import { ErrorVDF } from './ErrorVDF';
import { GenericeService } from '../services/GenericService';
import { Msg } from '../msg/msg';
import { FindResponse } from './FindResponse';

const responseError = async function (res, e: Error) {
  if (e instanceof ErrorVDF)
    res.status(e.responseCode < 100 ? 500 : e.responseCode).send({ "responseCode": e.responseCode < 100 ? 500 : e.responseCode, "internalMessage": e.internalMessage, "userMessage": e.userMessage })
  else
    res.status(500).send({ "responseCode": 500, "internalMessage": e.toString(), "userMessage": e.toString() })
}

const getHandlerGenericEntity = async function (req, res, classEntity, repository: GenericeService<any>) {
  try {
    console.log(req.query)
    if ("select" in req.query)
      try { req.query.select = JSON.parse(req.query.select) } catch (e) { throw Msg.MALFORMED_JSON_SELECT };
    if ("order" in req.query)
      try { req.query.order = JSON.parse(req.query.order) } catch (e) { throw Msg.MALFORMED_JSON_ORDER };
    const objs = await repository.find(req.query)
    res.send(new FindResponse(objs))
  } catch (e) {
    await responseError(res, new ErrorVDF(e.toString(), e.toString(), 500))
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