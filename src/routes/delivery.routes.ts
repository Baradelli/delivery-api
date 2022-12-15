import { Router } from 'express'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman'
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/findAllAvailableController'
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController'
import { UpdateEndDateController } from '../modules/deliveries/useCases/updateEndDate/UpdateEndDateController'

const routes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle
)

routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
)

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
)

routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
)

export { routes }
