import * as redux from 'redux';

declare module "redux" {
  export type GenericStoreEnhancer = redux.StoreEnhancer;
}
