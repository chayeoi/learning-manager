import { useContext } from 'react'

import { GlobalContext } from '@/contexts'
import State from '@/types/State'

interface Selector {
  // eslint-disable-next-line
  (state: State): any;
}

const useSelector = (selector: Selector): ReturnType<Selector> => {
  const state = useContext(GlobalContext)

  return selector(state)
}

export default useSelector
