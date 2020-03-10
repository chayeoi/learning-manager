import React, { useReducer } from 'react'

import { DispatchContext, GlobalContext } from '@/contexts'
import { initialState, reducer } from '@/store'

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>
        {children}
      </GlobalContext.Provider>
    </DispatchContext.Provider>
  )
}

export default GlobalProvider
