export interface LayoutState {
  sidePanelWidth: number;
  sidePanelHeight: number;
  contentPanelWidth: number;
  contentPanelHeight: number;
  bottomPanelHeight: number;
}

export interface PanelState {
  projects: boolean;
  blog: boolean;
  favorites: boolean;
}
