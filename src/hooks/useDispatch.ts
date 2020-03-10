import { ReducerAction, useContext } from 'react'

import { DispatchContext } from '../contexts'

// eslint-disable-next-line
// @ts-ignore
const useDispatch = (): React.Dispatch<ReducerAction> => useContext(DispatchContext)

export default useDispatch
