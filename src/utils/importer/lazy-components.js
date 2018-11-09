import loadable from 'react-loadable'
import { Loading } from 'utils/importer/components'

const AsyncAbout = loadable({
  loader: () => import('screens/About/About'),
  loading: Loading,
})

export { AsyncAbout }
