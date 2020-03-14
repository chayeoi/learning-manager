import { createErrorSelector, createLoadingSelector } from '../selectors'

describe('createErroroSelectors', () => {
  it('should be first error value if there are multiple errors', () => {
    const state = {
      error: {
        LOGIN: new Error(),
        FETCH_POSTS: new Error(),
        FETCH_USER: new Error(),
      },
    }
    const actionTypes = ['LOGIN', 'FETCH_POSTS', 'FETCH_USER']

    expect(createErrorSelector(actionTypes)(state)).toEqual(state.error.LOGIN)
  })
})

describe('createLoadingSelectors', () => {
  it('should be `true` if at least one is loading', () => {
    const state = {
      loading: {
        LOGIN: true,
        FETCH_POSTS: true,
        FETCH_USER: true,
      },
    }
    const actionTypes = ['LOGIN', 'FETCH_POSTS', 'FETCH_USER']

    expect(createLoadingSelector(actionTypes)(state)).toEqual(true)

    state.loading.LOGIN = false

    expect(createLoadingSelector(actionTypes)(state)).toEqual(true)

    state.loading.FETCH_POSTS = false

    expect(createLoadingSelector(actionTypes)(state)).toEqual(true)
  })

  it('should be `false` if nothing is loading', () => {
    const state = {
      loading: {
        LOGIN: false,
        FETCH_POSTS: false,
        FETCH_USER: false,
      },
    }
    const actionTypes = ['LOGIN', 'FETCH_POSTS', 'FETCH_USER']

    expect(createLoadingSelector(actionTypes)(state)).toEqual(false)
  })
})
