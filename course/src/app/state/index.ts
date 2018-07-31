import { environment } from '@env/environment';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  getZoom,
  reducer as mapReducer,
  State as MapState
} from './map/map.reducer';
import {
  getOpened,
  reducer as sidenavReducer,
  State as SidenavState
} from './sidenav/sidenav.reducer';

export enum Features {
  map = 'map',
  sidenav = 'sidenav'
}

export interface State {
  [Features.map]: MapState;
  [Features.sidenav]: SidenavState;
}

export const reducers: ActionReducerMap<State> = {
  [Features.map]: mapReducer,
  [Features.sidenav]: sidenavReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const mapState = createFeatureSelector<MapState>(Features.map);
export const mapZoom = createSelector(mapState, getZoom);

export const sidenavState = createFeatureSelector<SidenavState>(
  Features.sidenav
);
export const isOpened = createSelector(sidenavState, getOpened);