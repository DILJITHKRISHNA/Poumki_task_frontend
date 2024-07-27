import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from './UserSlice';
import AdminSlice from './AdminSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  user: persistReducer(persistConfig, UserSlice),
  admin: persistReducer(persistConfig, AdminSlice),
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
