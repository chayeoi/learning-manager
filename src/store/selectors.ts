import _ from 'lodash/fp'

import State from '@/types/State'

export const createErrorSelector = (actionTypes: string[]): Function => (
  (state: State): Error | undefined => _.compose(
    (actionType: string): Error => state.error[actionType],
    _.head,
    _.filter((actionType: string): boolean => Boolean(state.error[actionType])),
  )(actionTypes)
)

export const createLoadingSelector = (actionTypes: string[]): Function => (
  (state: State): boolean => _.some((actionType: string): boolean => state.loading[actionType], actionTypes)
)
