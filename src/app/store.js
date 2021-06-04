import { createStore, combineReducers } from 'redux';
import userReducer from '../features/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// whitelist and blacklist are properties of react redux which allows user to select which reducer needs to be persisted and which not to
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, window.devToolsExtension && window.devToolsExtension());
let persister = persistStore(store);

export { store, persister };
