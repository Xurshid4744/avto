import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./endpoints/car";
import { categoryApi } from "./endpoints/category";
import { login } from "./endpoints/login";
import { Upload } from "./endpoints/upload";
import changeRouter from "./slices/changeRouter";

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    [login.reducerPath]: login.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [Upload.reducerPath]: Upload.reducer,
    change: changeRouter.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carsApi.middleware)
      .concat(login.middleware)
      .concat(categoryApi.middleware)
      .concat(Upload.middleware),
});
