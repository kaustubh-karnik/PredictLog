import { Link, useParams } from 'react-router-dom';
import type { NavPath } from '../constants';

const TITLES: Partial<Record<NavPath, string>> = {
  'inventory-nodes': 'Inventory & Nodes',
  convoys: 'Convoys',
  forecasts: 'Forecasts',
  scenarios: 'Scenarios',
  'data-health': 'Data Health',
  'audit-log': 'Audit Log',
  settings: 'Settings',
  help: 'Manual / Help',
};

export function PlaceholderPage() {
  const { section } = useParams<{ section: NavPath }>();
  const title = (section && TITLES[section]) || 'Section';

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-space-lg text-center gap-space-md">
      <span className="material-symbols-outlined text-[48px] text-on-surface-variant">construction</span>
      <h1 className="font-headline-md text-headline-md text-on-surface font-semibold">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        This screen is referenced in the navigation shell but was not included in the exported HTML
        mockups. Use Command Overview, Shortfall Watch, Forward Supply Map, or COA Planner for full
        layouts.
      </p>
      <Link
        to="/command-overview"
        className="px-space-md py-2 bg-primary-container text-on-primary-container font-label-md uppercase font-semibold border border-primary/50 hover:bg-primary-container/80 transition-colors"
      >
        Go to Command Overview
      </Link>
    </div>
  );
}
