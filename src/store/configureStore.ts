import { configureStore, StoreEnhancer } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'

import { api } from '@/services/api'

import { createReducer } from './reducers'

let store: ToolkitStore

export function configureAppStore(): ToolkitStore {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, api.middleware]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga
    })
  ] as StoreEnhancer[]

  store = configureStore({
    reducer: createReducer(),
    middleware: (defaultMiddleware: () => any) => [...defaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' || (process.env.PUBLIC_URL?.length as number) > 0,
    enhancers
  })

  return store
}

export type AppGetState = typeof store.getState
export type AppDispatch = typeof store.dispatch
