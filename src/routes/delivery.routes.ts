import { Router } from 'express'
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController'

const routes = Router()

const createDeliveryController = new CreateDeliveryController()

routes.post('/delivery', createDeliveryController.handle)

export { routes }
