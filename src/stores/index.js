import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import rootSaga from '../sagas'
import { persistReducer, persistStore } from 'redux-persist'
import ProductReducer from './products'
import errorReducer from './error'
import userReducer from './user'

const staticReducers = {
	ProductReducer,
	errorReducer,
	userReducer,
}

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	...staticReducers,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	persistedReducer,
	applyMiddleware(logger, sagaMiddleware)
)

const persistor = persistStore(store)
// Kick off the root saga
sagaMiddleware.run(rootSaga)
export default store
export { persistor }
