import { init as StoreInit } from 'store'
import * as Rendering from './Rendering'

export default async function init() {
  StoreInit()
  await Rendering.init()
}
