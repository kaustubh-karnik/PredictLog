export type NavPath =
  | 'command-overview'
  | 'shortfall-watch'
  | 'forward-supply-map'
  | 'coa-planner'
  | 'inventory-nodes'
  | 'convoys'
  | 'forecasts'
  | 'scenarios'
  | 'data-health'
  | 'audit-log'
  | 'settings'
  | 'help';

export const NAV_ITEMS: {
  path: NavPath;
  label: string;
  icon: string;
  badge?: string;
  badgeClass?: string;
}[] = [
  { path: 'command-overview', label: 'Command Overview', icon: 'grid_view' },
  {
    path: 'shortfall-watch',
    label: 'Shortfall Watch',
    icon: 'warning',
    badge: '3',
    badgeClass: 'bg-error-container text-on-error-container border border-error/30',
  },
  { path: 'forward-supply-map', label: 'Forward Supply Map', icon: 'map' },
  { path: 'coa-planner', label: 'COA Planner', icon: 'conversion_path' },
  { path: 'inventory-nodes', label: 'Inventory & Nodes', icon: 'warehouse' },
  {
    path: 'convoys',
    label: 'Convoys',
    icon: 'local_shipping',
    badge: '17',
    badgeClass: 'bg-surface-container-highest text-secondary border border-secondary/30',
  },
  { path: 'forecasts', label: 'Forecasts', icon: 'trending_up' },
  { path: 'scenarios', label: 'Scenarios', icon: 'schema' },
  {
    path: 'data-health',
    label: 'Data Health',
    icon: 'vital_signs',
    badge: '87%',
    badgeClass: 'text-primary',
  },
  { path: 'audit-log', label: 'Audit Log', icon: 'receipt_long' },
];

export const IMPLEMENTED_ROUTES = new Set<NavPath>([
  'command-overview',
  'shortfall-watch',
  'forward-supply-map',
  'coa-planner',
  'inventory-nodes',
  'convoys',
  'forecasts',
  'scenarios',
  'data-health',
  'audit-log',
  'settings',
  'help',
]);
