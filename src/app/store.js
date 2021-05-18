import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { loadFromLocalStorage, saveToLocalStorage } from './redux-persist';

const persistedState = loadFromLocalStorage();

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));
