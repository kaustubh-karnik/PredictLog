import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './layout/AppShell';
import { CoaPlannerPage } from './pages/CoaPlannerPage';
import { CommandOverviewPage } from './pages/CommandOverviewPage';
import { ForwardSupplyMapPage } from './pages/ForwardSupplyMapPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ShortfallWatchPage } from './pages/ShortfallWatchPage';
import { InventoryNodesPage } from './pages/InventoryNodesPage';
import { ConvoysPage } from './pages/ConvoysPage';
import { ForecastsPage } from './pages/ForecastsPage';
import { ScenariosPage } from './pages/ScenariosPage';
import { DataHealthPage } from './pages/DataHealthPage';
import { AuditLogPage } from './pages/AuditLogPage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpPage } from './pages/HelpPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/command-overview" replace />} />
        <Route path="command-overview" element={<CommandOverviewPage />} />
        <Route path="shortfall-watch" element={<ShortfallWatchPage />} />
        <Route path="forward-supply-map" element={<ForwardSupplyMapPage />} />
        <Route path="coa-planner" element={<CoaPlannerPage />} />
        <Route path="inventory-nodes" element={<InventoryNodesPage />} />
        <Route path="convoys" element={<ConvoysPage />} />
        <Route path="forecasts" element={<ForecastsPage />} />
        <Route path="scenarios" element={<ScenariosPage />} />
        <Route path="data-health" element={<DataHealthPage />} />
        <Route path="audit-log" element={<AuditLogPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path=":section" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  );
}
